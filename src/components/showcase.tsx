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

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-1 font-mono text-[0.78rem] text-muted-foreground sm:text-[0.82rem]">
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3">
          <span className="text-muted-foreground/60">{index + 1}</span>
          <code className="min-w-0 whitespace-pre-wrap break-all">{line || " "}</code>
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

        <div className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <Section title="Preview">
            <div
              className={cn(
                "flex min-h-[360px] items-center justify-center px-6 py-8 sm:px-10",
                activeItem.previewClassName
              )}
            >
              {activeItem.component}
            </div>
          </Section>

          <div className="space-y-6">
            <Section title="Import">
              <div className="px-4 py-4">
                <CodeBlock lines={getImportSnippet(activeItem)} />
              </div>
            </Section>

            <Section title="Install">
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
            </Section>
          </div>
        </div>

        <Section title="Usage">
          <div className="px-4 py-4">
            <CodeBlock lines={getUsageSnippet(activeItem)} />
          </div>
        </Section>
      </div>
    </section>
  )
}
