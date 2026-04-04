import type { ReactElement } from "react"

import { Battery } from "@/components/battery"
import { BlackSea } from "@/components/blacksea"
import { Threshold } from "@/components/threshold"
import { Trigger } from "@/components/trigger"
import { Xcode } from "@/components/xcode"

export type ShowcaseItem = {
  id: string
  label: string
  note: string
  component: ReactElement
  exportName: string
  importPath: string
  previewClassName?: string
  sections: string[]
}

export const showcaseItems: [ShowcaseItem, ...ShowcaseItem[]] = [
  {
    id: "trigger-action",
    label: "Trigger Action",
    note: "Automation trigger card with a glowing state bar and compact action row.",
    component: <Trigger />,
    exportName: "Trigger",
    importPath: "@/components/trigger",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Install", "Usage", "Notes"],
  },
  {
    id: "threshold-noise",
    label: "Threshold Noise",
    note: "Step-based control with signal and noise ratio styling.",
    component: <Threshold />,
    exportName: "Threshold",
    importPath: "@/components/threshold",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Install", "Usage", "Notes"],
  },
  {
    id: "battery-status",
    label: "Battery Status",
    note: "Status bars for charging and fully charged states.",
    component: <Battery />,
    exportName: "Battery",
    importPath: "@/components/battery",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Install", "Usage", "Notes"],
  },
  {
    id: "memories-black-sea",
    label: "Black Sea",
    note: "Poster-style travel memory card with warm cinematic scenery.",
    component: <BlackSea />,
    exportName: "BlackSea",
    importPath: "@/components/blacksea",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Install", "Usage", "Notes"],
  },
  {
    id: "xcode-assistant",
    label: "Xcode Assistant",
    note: "Rounded assistant composer with action icons and a floating send button.",
    component: <Xcode />,
    exportName: "Xcode",
    importPath: "@/components/xcode",
    previewClassName: "bg-showcase-panel",
    sections: ["Preview", "Install", "Usage", "Notes"],
  },
]

export const topNavigation = [
  "Docs",
  "Components",
  "Blocks",
  "Charts",
  "Directory",
  "Create",
] as const

export const sectionLinks = [
  "Introduction",
  "Components",
  "Installation",
  "Theming",
  "CLI",
  "Registry",
] as const

export const componentGroups = [
  "Accordion",
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "Carousel",
  "Chart",
] as const

export function getInstallSnippet(item: ShowcaseItem) {
  return `import { ${item.exportName} } from "${item.importPath}"`
}

export function getUsageSnippet(item: ShowcaseItem) {
  return `<${item.exportName} />`
}
