type AsideProps = {
  sections: string[]
}

export function Aside({ sections }: AsideProps) {
  return (
    <aside className="hidden h-full py-8 pl-6 xl:block">
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
    </aside>
  )
}
