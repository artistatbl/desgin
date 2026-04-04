import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { ShowcaseItem } from "./data"
import { getInstallSnippet, getUsageSnippet, showcaseItems } from "./data"

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

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M7.25 6L3.75 10L7.25 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.75 6L16.25 10L12.75 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
    <main className="flex h-full min-w-0 flex-col overflow-hidden py-6 lg:px-8 xl:px-10">
      <div className="mx-auto flex h-full w-full max-w-[760px] flex-col overflow-hidden">
        <div className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                Components
              </p>
              <div className="space-y-1">
                <h1 className="text-[2.1rem] font-semibold tracking-[-0.07em] text-showcase-title sm:text-[2.5rem]">
                  {activeItem.label}
                </h1>
                <p className="max-w-2xl text-[0.98rem] leading-7 text-showcase-muted">
                  {activeItem.note}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                className="h-9 rounded-md px-3 text-[0.82rem] font-medium text-muted-foreground"
              >
                <CopyIcon />
                Copy
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

        <div className="mt-6 flex min-h-0 flex-1 flex-col gap-4">
          <section id="preview" className="flex min-h-0 flex-col rounded-md bg-card p-4 shadow-sm">
            <div
              className={cn(
                "flex min-h-0 flex-1 items-center justify-center rounded-md px-4 py-5",
                activeItem.previewClassName
              )}
            >
              {activeItem.component}
            </div>

            <div className="mt-4 rounded-md bg-background px-4 py-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CodeIcon />
                <code>{`import { ${activeItem.exportName} } from "${activeItem.importPath}"`}</code>
              </div>
            </div>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section id="install" className="rounded-md bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.18em] text-showcase-muted uppercase">
                Install
              </p>
              <pre className="mt-3 overflow-x-auto rounded-md bg-background px-3 py-3 text-sm leading-6 text-muted-foreground">
                <code>{getInstallSnippet(activeItem)}</code>
              </pre>
            </section>

            <section id="usage" className="rounded-md bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.18em] text-showcase-muted uppercase">
                Usage
              </p>
              <pre className="mt-3 overflow-x-auto rounded-md bg-background px-3 py-3 text-sm leading-6 text-muted-foreground">
                <code>{getUsageSnippet(activeItem)}</code>
              </pre>
            </section>

            <section id="notes" className="rounded-md bg-card p-4 shadow-sm md:col-span-2">
              <p className="text-xs font-semibold tracking-[0.18em] text-showcase-muted uppercase">
                Notes
              </p>
              <p className="mt-3 text-sm leading-6 text-showcase-muted">
                The page stays fixed to the viewport, the preview stays centered, and navigation is split into dedicated layout components for a cleaner codebase.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
