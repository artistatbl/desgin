"use client"

import { useState } from "react"

import { Aside } from "@/components/docs/aside"
import { Header } from "@/components/docs/header"
import { Main } from "@/components/docs/main"
import { Sidebar } from "@/components/docs/sidebar"
import { showcaseItems } from "@/components/docs/data"

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
    <section className="h-full overflow-hidden bg-background text-foreground">
      <Header />

      <div className="mx-auto grid h-[calc(100%-4rem)] max-w-[1440px] px-4 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_210px]">
        <Sidebar activeIndex={activeIndex} onSelect={setActiveIndex} />
        <Main
          activeIndex={activeIndex}
          activeItem={activeItem}
          onSelect={setActiveIndex}
          onPrevious={showPreviousItem}
          onNext={showNextItem}
          isFirstItem={isFirstItem}
          isLastItem={isLastItem}
        />
        <Aside sections={activeItem.sections} />
      </div>
    </section>
  )
}
