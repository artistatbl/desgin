import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { ShowcaseItem } from "./data"
import {
  getInstallCommand,
  getPreviewSnippet,
  getUsageSnippet,
  showcaseItems,
} from "./data"

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M12.5 4.5L7 10L12.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
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
        strokeWidth="1.8"
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

function SectionTab({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <button
      type="button"
      className={cn(
        "border-b-2 px-0 pb-2 text-[0.92rem] font-medium transition-colors",
        active
          ? "border-foreground text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  )
}

function PackagePill({
  label,
  active = false,
}: {
  label: string
  active?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md px-2.5 text-[0.74rem] font-medium",
        active
          ? "bg-foreground text-background"
          : "bg-muted text-muted-foreground"
      )}
    >
      {label}
    </span>
  )
}

function CodeSnippet({
  lines,
  compact = false,
}: {
  lines: string[]
  compact?: boolean
}) {
  return (
    <div className={cn("space-y-1 font-mono", compact ? "text-[0.76rem]" : "text-[0.8rem]")}>
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3">
          <span className="text-[0.72rem] text-muted-foreground/80">{index + 1}</span>
          <code
            className={cn(
              "min-w-0 whitespace-pre-wrap break-all",
              line.startsWith("import")
                ? "text-[#d66e6e]"
                : line.includes("return")
                  ? "text-[#6373c9]"
                  : "text-muted-foreground"
            )}
          >
            {line || " "}
          </code>
        </div>
      ))}
    </div>
  )
}

type MainProps = {
  activeIndex: number
  activeItem: ShowcaseItem
  onSelect: (index: number) => void
  onPrevious: () => void
  onNext: () => void
  isFirstItem: boolean
  isLastItem: boolean
}

export function Main({
  activeIndex,
  activeItem,
  onSelect,
  onPrevious,
  onNext,
  isFirstItem,
  isLastItem,
}: MainProps) {
  return (
    <main className="h-full min-w-0 overflow-y-auto overflow-x-hidden py-6 lg:px-8 xl:px-10">
      <div className="mx-auto flex min-h-full w-full max-w-[780px] flex-col pb-10">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-[540px] space-y-2">
              <h1 className="text-[2.35rem] font-semibold tracking-[-0.08em] text-showcase-title sm:text-[2.8rem]">
                {activeItem.label}
              </h1>
              <p className="text-[1rem] leading-7 text-showcase-muted">
                {activeItem.note}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                className="h-9 rounded-md px-3 text-[0.82rem] font-medium text-muted-foreground"
              >
                <CopyIcon />
                Copy Page
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                disabled={isFirstItem}
                onClick={onPrevious}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                disabled={isLastItem}
                onClick={onNext}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {showcaseItems.map((item, index) => (
              <Button
                key={item.id}
                type="button"
                variant="ghost"
                className={cn(
                  "h-9 rounded-md px-4 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  activeIndex === index && "bg-muted text-foreground"
                )}
                onClick={() => onSelect(index)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-7">
          <section id="preview" className="space-y-4">
            <div className="overflow-hidden rounded-md border border-border/70 bg-card shadow-sm">
              <div
                className={cn(
                  "flex min-h-[290px] items-center justify-center px-6 py-8",
                  activeItem.previewClassName
                )}
              >
                {activeItem.component}
              </div>

              <div className="relative border-t border-border/60 bg-muted/20 px-5 py-4">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-8 rounded-full px-4 text-[0.78rem] font-medium text-foreground shadow-sm"
                  >
                    View Code
                  </Button>
                </div>

                <CodeSnippet lines={getPreviewSnippet(activeItem)} compact />
              </div>
            </div>
          </section>

          <section id="installation" className="space-y-4">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.05em] text-showcase-title">
              Installation
            </h2>

            <div className="flex items-center gap-6">
              <SectionTab label="Command" active />
              <SectionTab label="Manual" />
            </div>

            <div className="overflow-hidden rounded-md border border-border/70 bg-card shadow-sm">
              <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <PackagePill label="pnpm" />
                  <PackagePill label="npm" />
                  <PackagePill label="yarn" />
                  <PackagePill label="bun" active />
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-md text-muted-foreground"
                >
                  <CopyIcon />
                </Button>
              </div>

              <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.8rem] text-muted-foreground">
                <code>{getInstallCommand()}</code>
              </pre>
            </div>
          </section>

          <section id="usage" className="space-y-4">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.05em] text-showcase-title">
              Usage
            </h2>

            <div className="overflow-hidden rounded-md border border-border/70 bg-card shadow-sm">
              <div className="flex items-center justify-end px-4 py-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="rounded-md text-muted-foreground"
                >
                  <CopyIcon />
                </Button>
              </div>

              <div className="border-t border-border/60 px-4 py-4">
                <CodeSnippet lines={getUsageSnippet(activeItem)} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
