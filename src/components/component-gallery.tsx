"use client"

import type { ReactElement } from "react"
import { useState } from "react"

import { BatteryStatusShowcase } from "@/components/battery-status-showcase"
import { MemoriesBlackSeaCard } from "@/components/memories-black-sea-card"
import { ThresholdNoiseCard } from "@/components/threshold-noise-card"
import { XcodeAssistantCard } from "@/components/xcode-assistant-card"
import { Button } from "@/components/ui/button"

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

type GalleryItem = {
  id: string
  label: string
  note: string
  component: ReactElement
}

const galleryItems: [GalleryItem, ...GalleryItem[]] = [
  {
    id: "threshold-noise",
    label: "Threshold noise card",
    note: "Step-based control with signal and noise ratio styling.",
    component: <ThresholdNoiseCard />,
  },
  {
    id: "battery-status",
    label: "Battery charging status",
    note: "Status bars for charging and fully charged states.",
    component: <BatteryStatusShowcase />,
  },
  {
    id: "memories-black-sea",
    label: "Memories Black Sea card",
    note: "Poster-style travel memory card with warm cinematic scenery.",
    component: <MemoriesBlackSeaCard />,
  },
  {
    id: "xcode-assistant",
    label: "Xcode assistant composer",
    note: "Rounded assistant composer with action icons and a floating send button.",
    component: <XcodeAssistantCard />,
  },
]

export function ComponentGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = galleryItems[activeIndex] ?? galleryItems[0]
  const isFirstItem = activeIndex === 0
  const isLastItem = activeIndex === galleryItems.length - 1

  const showPreviousItem = () => {
    setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0))
  }

  const showNextItem = () => {
    setActiveIndex((currentIndex) =>
      Math.min(currentIndex + 1, galleryItems.length - 1)
    )
  }

  return (
    <section className="w-full max-w-[1040px] sm:h-[620px] xl:w-[1040px]">
      <div className="flex h-[120px] flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="space-y-1.5">
          <p className="text-[0.78rem] font-medium tracking-[0.22em] text-black/35 uppercase">
            Component gallery
          </p>
          <div className="space-y-0.5">
            <h1 className="text-[2rem] font-medium tracking-[-0.065em] text-[#161616] sm:text-[2.6rem]">
              {activeItem.label}
            </h1>
            <p className="max-w-2xl text-sm text-black/45 sm:text-[0.95rem]">
              {activeItem.note}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 self-start pb-1 text-black/40 sm:self-auto">
          <div className="text-[0.78rem] font-medium tracking-[0.18em] uppercase">
            {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full text-black/55 hover:bg-black/5 hover:text-black"
              aria-label="View previous component"
              disabled={isFirstItem}
              onClick={showPreviousItem}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full text-black/55 hover:bg-black/5 hover:text-black"
              aria-label="View next component"
              disabled={isLastItem}
              onClick={showNextItem}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[460px] items-start justify-center rounded-[32px] bg-[#f8f8f6] px-4 pt-10 shadow-[0_18px_70px_rgba(0,0,0,0.05)] sm:px-8 sm:pt-12">
        {activeItem.component}
      </div>
    </section>
  )
}
