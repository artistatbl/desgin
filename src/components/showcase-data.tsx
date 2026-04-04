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
  sourcePath: string
  previewClassName?: string
}

export const showcaseItems: [ShowcaseItem, ...ShowcaseItem[]] = [
  {
    id: "trigger-action",
    label: "Trigger Action",
    note: "Automation trigger card with a compact state bar and action row.",
    component: <Trigger />,
    exportName: "Trigger",
    importPath: "@/components/trigger",
    sourcePath: "src/components/trigger.tsx",
    previewClassName: "bg-muted/20",
  },
  {
    id: "threshold-noise",
    label: "Threshold Noise",
    note: "Step-based control with signal and noise ratio styling.",
    component: <Threshold />,
    exportName: "Threshold",
    importPath: "@/components/threshold",
    sourcePath: "src/components/threshold.tsx",
    previewClassName: "bg-muted/20",
  },
  {
    id: "battery-status",
    label: "Battery Status",
    note: "Status bars for charging and fully charged states.",
    component: <Battery />,
    exportName: "Battery",
    importPath: "@/components/battery",
    sourcePath: "src/components/battery.tsx",
    previewClassName: "bg-muted/20",
  },
  {
    id: "black-sea",
    label: "Black Sea",
    note: "Poster-style travel memory card with cinematic scenery.",
    component: <BlackSea />,
    exportName: "BlackSea",
    importPath: "@/components/blacksea",
    sourcePath: "src/components/blacksea.tsx",
    previewClassName: "bg-muted/20",
  },
  {
    id: "xcode-assistant",
    label: "Xcode Assistant",
    note: "Rounded assistant composer with compact actions.",
    component: <Xcode />,
    exportName: "Xcode",
    importPath: "@/components/xcode",
    sourcePath: "src/components/xcode.tsx",
    previewClassName: "bg-muted/20",
  },
]

export const installPackages = ["pnpm", "npm", "yarn", "bun"] as const

export function getInstallCommand() {
  return "bun add @base-ui/react class-variance-authority clsx tailwind-merge"
}

export function getImportSnippet(item: ShowcaseItem) {
  return [
    `import { ${item.exportName} } from "${item.importPath}"`,
  ]
}

export function getUsageSnippet(item: ShowcaseItem) {
  return [
    `import { ${item.exportName} } from "${item.importPath}"`,
    "",
    "export function Demo() {",
    `  return <${item.exportName} />`,
    "}",
  ]
}
