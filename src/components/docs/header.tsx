import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { topNavigation } from "./data"

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

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="9" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13L16.25 16.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

export function Header() {
  return (
    <header className="h-16 bg-background">
      <div className="mx-auto flex h-full max-w-[1440px] items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-card text-foreground shadow-sm">
            <BrandIcon />
          </div>
          <nav className="hidden items-center gap-1 lg:flex">
            {topNavigation.map((item) => (
              <Button
                key={item}
                type="button"
                variant="ghost"
                className={cn(
                  "h-8 rounded-md px-3 text-[0.84rem] font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  item === "Components" && "bg-muted text-foreground"
                )}
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-md bg-card px-3 text-sm text-muted-foreground shadow-sm md:flex">
            <SearchIcon />
            <input
              type="text"
              aria-label="Search documentation"
              placeholder="Search documentation..."
              className="h-9 w-[180px] bg-transparent text-sm outline-none placeholder:text-muted-foreground/80 lg:w-[220px]"
            />
          </div>
          <Button type="button" variant="ghost" size="icon-sm" className="rounded-md text-muted-foreground">
            <GithubIcon />
          </Button>
          <Button type="button" variant="ghost" size="icon-sm" className="rounded-md text-muted-foreground">
            <SparkIcon />
          </Button>
          <Button type="button" className="h-9 rounded-md px-4 text-[0.84rem] font-semibold">
            + New
          </Button>
        </div>
      </div>
    </header>
  )
}
