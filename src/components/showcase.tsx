"use client"

import type { ReactElement } from "react"
import { useState } from "react"

import { Battery } from "@/components/battery"
import { BlackSea } from "@/components/blacksea"
import { Threshold } from "@/components/threshold"
import { Trigger } from "@/components/trigger"
import { Xcode } from "@/components/xcode"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function BrandIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M5.75 13.6L10.05 9.3M10.25 6.65L14.25 2.65M7.95 17.35L12.25 13.05"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="9" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13L16.25 16.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 2.2A7.8 7.8 0 002.2 10a7.8 7.8 0 005.33 7.4c.4.08.54-.17.54-.39v-1.35c-2.16.47-2.62-.92-2.62-.92-.35-.9-.87-1.13-.87-1.13-.7-.48.05-.47.05-.47.78.06 1.2.8 1.2.8.68 1.17 1.8.83 2.24.63.07-.5.27-.83.49-1.02-1.73-.2-3.54-.87-3.54-3.88 0-.86.3-1.57.8-2.13-.08-.2-.35-1 .08-2.08 0 0 .66-.21 2.16.81A7.47 7.47 0 0110 6.1c.66 0 1.33.09 1.95.28 1.5-1.02 2.16-.81 2.16-.81.43 1.08.16 1.88.08 2.08.5.56.8 1.27.8 2.13 0 3.01-1.82 3.68-3.55 3.87.28.24.52.72.52 1.46v2.16c0 .22.14.48.55.39A7.8 7.8 0 0017.8 10 7.8 7.8 0 0010 2.2Z" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 2.8L11.58 7.15L15.95 8.75L11.58 10.35L10 14.7L8.42 10.35L4.05 8.75L8.42 7.15L10 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
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

type ShowcaseItem = {
  id: string
  label: string
  note: string
  component: ReactElement
  exportName: string
  importPath: string
  previewClassName?: string
  sections: string[]
}

const showcaseItems: [ShowcaseItem, ...ShowcaseItem[]] = [
  {
    id: "trigger-action",
    label: "Trigger Action",
    note: "Automation trigger card with a glowing state bar and compact action row.",
    component: <Trigger />,
    exportName: "Trigger",
    importPath: "@/components/trigger",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Installation", "Usage", "Notes"],
  },
  {
    id: "threshold-noise",
    label: "Threshold Noise",
    note: "Step-based control with signal and noise ratio styling.",
    component: <Threshold />,
    exportName: "Threshold",
    importPath: "@/components/threshold",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Installation", "Usage", "Notes"],
  },
  {
    id: "battery-status",
    label: "Battery Status",
    note: "Status bars for charging and fully charged states.",
    component: <Battery />,
    exportName: "Battery",
    importPath: "@/components/battery",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Installation", "Usage", "Notes"],
  },
  {
    id: "memories-black-sea",
    label: "Black Sea",
    note: "Poster-style travel memory card with warm cinematic scenery.",
    component: <BlackSea />,
    exportName: "BlackSea",
    importPath: "@/components/blacksea",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Installation", "Usage", "Notes"],
  },
  {
    id: "xcode-assistant",
    label: "Xcode Assistant",
    note: "Rounded assistant composer with action icons and a floating send button.",
    component: <Xcode />,
    exportName: "Xcode",
    importPath: "@/components/xcode",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Installation", "Usage", "Notes"],
  },
]

const topNavigation = ["Docs", "Components", "Blocks", "Charts", "Directory", "Create"]

const sectionLinks = [
  "Introduction",
  "Components",
  "Installation",
  "Theming",
  "CLI",
  "Registry",
  "Changelog",
]

const componentGroups = [
  "Accordion",
  "Alert",
  "Alert Dialog",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Carousel",
  "Chart",
]

function getInstallSnippet(item: ShowcaseItem) {
  return `# already available in this project\n${item.importPath}`
}

function getUsageSnippet(item: ShowcaseItem) {
  return `import { ${item.exportName} } from "${item.importPath}"\n\nexport function Demo() {\n  return <${item.exportName} />\n}`
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

  const selectItem = (nextIndex: number) => {
    setActiveIndex(nextIndex)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground">
              <BrandIcon />
            </div>
            <nav className="hidden items-center gap-1 lg:flex">
              {topNavigation.map((item) => (
                <Button
                  key={item}
                  type="button"
                  variant="ghost"
                  className={cn(
                    "h-8 rounded-full px-3 text-[0.84rem] font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                    item === "Components" && "bg-muted text-foreground"
                  )}
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 text-sm text-muted-foreground shadow-sm md:flex">
              <SearchIcon />
              <input
                type="text"
                aria-label="Search documentation"
                placeholder="Search documentation..."
                className="h-9 w-[180px] bg-transparent text-sm outline-none placeholder:text-muted-foreground/80 lg:w-[220px]"
              />
            </div>
            <Button type="button" variant="ghost" size="icon-sm" className="rounded-full text-muted-foreground">
              <GithubIcon />
            </Button>
            <Button type="button" variant="ghost" size="icon-sm" className="rounded-full text-muted-foreground">
              <SparkIcon />
            </Button>
            <Button type="button" className="h-9 rounded-full px-4 text-[0.84rem] font-semibold">
              + New
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-0 px-4 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_220px]">
        <aside className="hidden border-r border-border/70 py-10 pr-8 lg:block">
          <div className="sticky top-24 space-y-8">
            <div className="space-y-3">
              <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                Sections
              </p>
              <div className="space-y-1">
                {sectionLinks.map((item) => (
                  <Button
                    key={item}
                    type="button"
                    variant="ghost"
                    className={cn(
                      "h-8 w-full justify-start rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      item === "Components" && "bg-muted text-foreground"
                    )}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                Components
              </p>
              <div className="space-y-1">
                {showcaseItems.map((item, index) => (
                  <Button
                    key={item.id}
                    type="button"
                    variant="ghost"
                    className={cn(
                      "h-8 w-full justify-start rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      activeIndex === index && "bg-muted text-foreground"
                    )}
                    onClick={() => selectItem(index)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                Library
              </p>
              <div className="space-y-1">
                {componentGroups.map((item) => (
                  <div key={item} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 py-8 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[760px] space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                    Components
                  </p>
                  <div className="space-y-1">
                    <h1 className="text-[2.25rem] font-semibold tracking-[-0.07em] text-showcase-title sm:text-[2.8rem]">
                      {activeItem.label}
                    </h1>
                    <p className="max-w-2xl text-[1rem] leading-7 text-showcase-muted">
                      {activeItem.note}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-9 rounded-full px-3 text-[0.82rem] font-medium text-muted-foreground"
                  >
                    <CopyIcon />
                    Copy Page
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                    disabled={isFirstItem}
                    onClick={showPreviousItem}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                    disabled={isLastItem}
                    onClick={showNextItem}
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
                      "h-9 rounded-full px-4 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      activeIndex === index && "bg-muted text-foreground"
                    )}
                    onClick={() => selectItem(index)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="border-b border-border">
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-none border-b-2 border-foreground px-0 text-sm font-medium text-foreground hover:bg-transparent"
                  >
                    Preview
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-none border-b-2 border-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
                  >
                    Code
                  </Button>
                </div>
              </div>

              <section id="preview" className="space-y-3">
                <div className="rounded-[22px] border border-border bg-card shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
                  <div
                    className={cn(
                      "flex min-h-[340px] items-center justify-center rounded-t-[22px] border-b border-border px-5 py-10 sm:px-8",
                      activeItem.previewClassName
                    )}
                  >
                    {activeItem.component}
                  </div>

                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CodeIcon />
                      <code>{`import { ${activeItem.exportName} } from "${activeItem.importPath}"`}</code>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-8 rounded-full px-3 text-[0.78rem] font-medium text-muted-foreground"
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </section>

              <section id="installation" className="space-y-3">
                <div className="space-y-1">
                  <h2 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-showcase-title">
                    Installation
                  </h2>
                  <p className="text-sm leading-6 text-showcase-muted">
                    This component already exists in the project, so you can import it directly.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="border-b border-border px-4 py-3 text-sm font-medium text-foreground">
                    Import Path
                  </div>
                  <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-muted-foreground">
                    <code>{getInstallSnippet(activeItem)}</code>
                  </pre>
                </div>
              </section>

              <section id="usage" className="space-y-3">
                <div className="space-y-1">
                  <h2 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-showcase-title">
                    Usage
                  </h2>
                  <p className="text-sm leading-6 text-showcase-muted">
                    Drop the component into a page or card preview and compose around it.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="border-b border-border px-4 py-3 text-sm font-medium text-foreground">
                    Example
                  </div>
                  <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-muted-foreground">
                    <code>{getUsageSnippet(activeItem)}</code>
                  </pre>
                </div>
              </section>

              <section id="notes" className="rounded-2xl border border-border bg-card px-5 py-5">
                <div className="space-y-1">
                  <h2 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-showcase-title">
                    Notes
                  </h2>
                  <p className="text-sm leading-6 text-showcase-muted">
                    Use the left sidebar to switch components. The centered preview keeps the component isolated so spacing, scale, and interaction details stay easy to compare.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <aside className="hidden border-l border-border/70 py-10 pl-8 xl:block">
          <div className="sticky top-24 space-y-8">
            <div className="space-y-3">
              <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
                On This Page
              </p>
              <div className="space-y-2">
                {activeItem.sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.04em] text-showcase-title">
                  Component Docs
                </h3>
                <p className="text-sm leading-6 text-showcase-muted">
                  Keep the preview centered and the navigation nearby so comparing polished UI studies feels fast and focused.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-4 h-9 rounded-full px-4 text-[0.82rem] font-medium text-muted-foreground"
              >
                Open Guide
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
