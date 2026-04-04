"use client"

import { type ReactNode, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import {
  getImportSnippet,
  getInstallCommand,
  getUsageSnippet,
  installPackages,
  showcaseItems,
} from "./showcase-data"

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M12.5 4.5L7 10L12.5 15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M7.5 4.5L13 10L7.5 15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M7 6.25H14.25C15.22 6.25 16 7.03 16 8V15.25C16 16.22 15.22 17 14.25 17H7C6.03 17 5.25 16.22 5.25 15.25V8C5.25 7.03 6.03 6.25 7 6.25Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.75 12V4.75C3.75 3.78 4.53 3 5.5 3H12.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CodeLine({ line }: { line: string }) {
  if (!line) {
    return <span> </span>
  }

  if (line.startsWith("import ")) {
    const sourceMatch = line.match(/from "([^"]+)"/)
    const source = sourceMatch?.[1]
    const beforeFrom = source ? line.replace(`from "${source}"`, "").trimEnd() : line

    return (
      <span>
        <span className="text-foreground">import</span>{" "}
        <span>{beforeFrom.slice("import ".length)}</span>
        {source ? (
          <>
            <span className="text-muted-foreground/70">from</span>{" "}
            <span className="text-foreground">{`"${source}"`}</span>
          </>
        ) : null}
      </span>
    )
  }

  if (line.startsWith("export ")) {
    return (
      <span>
        <span className="text-foreground">export</span>
        <span>{line.slice("export".length)}</span>
      </span>
    )
  }

  if (line.trimStart().startsWith("return ")) {
    const indent = line.match(/^\s*/)?.[0] ?? ""
    const content = line.trimStart().slice("return ".length)

    return (
      <span>
        <span>{indent}</span>
        <span className="text-foreground">return</span>{" "}
        <span>{content}</span>
      </span>
    )
  }

  return <span>{line}</span>
}

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-1 font-mono text-[0.78rem] text-muted-foreground sm:text-[0.82rem]">
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3">
          <span className="text-muted-foreground/60">{index + 1}</span>
          <code className="min-w-0 whitespace-pre-wrap break-all">
            <CodeLine line={line} />
          </code>
        </div>
      ))}
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium tracking-[-0.02em] text-foreground">{title}</h2>
      <div className="rounded-sm border border-border bg-background">{children}</div>
    </section>
  )
}

function Panel({
  title,
  label,
  children,
}: {
  title: string
  label?: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium tracking-[-0.02em] text-foreground">{title}</h2>
        {label ? (
          <span className="truncate text-[0.72rem] text-muted-foreground">{label}</span>
        ) : null}
      </div>
      <div className="overflow-hidden rounded-sm border border-border bg-background">
        {children}
      </div>
    </section>
  )
}

function PanelHeader({
  language,
  detail,
}: {
  language: string
  detail: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
      <div className="min-w-0 space-y-0.5">
        <p className="text-[0.68rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {language}
        </p>
        <p className="truncate font-mono text-[0.74rem] text-muted-foreground">{detail}</p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="rounded-sm text-muted-foreground"
        aria-label={`Copy ${detail}`}
      >
        <CopyIcon />
      </Button>
    </div>
  )
}

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = showcaseItems[activeIndex] ?? showcaseItems[0]
  const isFirstItem = activeIndex === 0
  const isLastItem = activeIndex === showcaseItems.length - 1

  const showPreviousItem = () => {
    setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0))
  }

  const showNextItem = () => {
    setActiveIndex((currentIndex) =>
      Math.min(currentIndex + 1, showcaseItems.length - 1)
    )
  }

  return (
    <section className="h-full overflow-y-auto bg-background text-foreground">
      <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="border-b border-border pb-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-muted-foreground uppercase">
            UI Showcase
          </p>

          <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <h1 className="text-3xl font-semibold tracking-[-0.06em] text-foreground sm:text-4xl">
                {activeItem.label}
              </h1>
              <p className="text-sm leading-6 text-muted-foreground sm:text-[0.96rem]">
                {activeItem.note}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-sm"
                disabled={isFirstItem}
                onClick={showPreviousItem}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-sm"
                disabled={isLastItem}
                onClick={showNextItem}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {showcaseItems.map((item, index) => (
              <Button
                key={item.id}
                type="button"
                variant={activeIndex === index ? "secondary" : "ghost"}
                className={cn(
                  "h-8 rounded-sm border px-3 text-sm font-medium",
                  activeIndex === index
                    ? "border-border bg-foreground text-background hover:bg-foreground hover:text-background"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-transparent hover:text-foreground"
                )}
                onClick={() => setActiveIndex(index)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Panel title="Preview" label={activeItem.sourcePath}>
            <div
              className={cn(
                "flex min-h-[360px] items-center justify-center px-6 py-8 sm:px-10",
                activeItem.previewClassName
              )}
            >
              {activeItem.component}
            </div>
          </Panel>

          <div className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <Panel title="Import" label={activeItem.importPath}>
              <PanelHeader language="tsx" detail={activeItem.sourcePath} />
              <div className="px-4 py-4">
                <CodeBlock lines={getImportSnippet(activeItem)} />
              </div>
            </Panel>

            <Panel title="Install" label="Package command">
              <PanelHeader language="bash" detail="installation" />
              <div className="border-b border-border px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {installPackages.map((pkg) => (
                    <span
                      key={pkg}
                      className={cn(
                        "inline-flex h-6 items-center rounded-sm border px-2 text-[0.72rem] font-medium",
                        pkg === "bun"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground"
                      )}
                    >
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
              <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.78rem] text-muted-foreground sm:text-[0.82rem]">
                <code>{getInstallCommand()}</code>
              </pre>
            </Panel>
          </div>
        </div>

        <Panel title="Usage" label="Example">
          <PanelHeader language="tsx" detail="demo.tsx" />
          <div className="px-4 py-4">
            <CodeBlock lines={getUsageSnippet(activeItem)} />
          </div>
        </Panel>
      </div>
    </section>
  )
}
