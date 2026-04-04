import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { sectionLinks, showcaseItems } from "./data"

type SidebarProps = {
  activeIndex: number
  onSelect: (index: number) => void
}

export function Sidebar({
  activeIndex,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="hidden h-full overflow-y-auto py-8 pr-6 lg:block">
      <div className="space-y-7 pb-8">
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
                  "h-8 w-full justify-start rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
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
                  "h-8 w-full justify-start rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  activeIndex === index && "bg-muted text-foreground"
                )}
                onClick={() => onSelect(index)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
