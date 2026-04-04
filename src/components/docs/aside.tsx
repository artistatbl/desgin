import { Button } from "@/components/ui/button"

type AsideProps = {
  sections: string[]
}

export function Aside({ sections }: AsideProps) {
  return (
    <aside className="hidden h-full py-8 pl-6 xl:block">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-[0.74rem] font-medium tracking-[0.2em] text-showcase-muted uppercase">
            On This Page
          </p>
          <div className="space-y-2">
            {sections.map((section) => (
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

        <div className="rounded-md bg-card p-5 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-[1.05rem] font-semibold tracking-[-0.04em] text-showcase-title">
              Component Docs
            </h3>
            <p className="text-sm leading-6 text-showcase-muted">
              The layout keeps navigation close, the preview centered, and the page locked to the viewport.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            className="mt-4 h-9 rounded-md px-4 text-[0.82rem] font-medium text-muted-foreground"
          >
            Open Guide
          </Button>
        </div>
      </div>
    </aside>
  )
}
