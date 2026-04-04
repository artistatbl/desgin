import type { ReactElement } from "react"

import { Button } from "@/components/ui/button"

function BoltIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M10.74 1.75L5.94 9.12H9.34L8 18.25L14.06 10.45H10.8L12.36 1.75H10.74Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PowerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M10 2.5V9.2M5.63 5.1A6.4 6.4 0 1014.37 5.1"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M3 16.25H17M5.5 16.25V9.5M10 16.25V5.25M14.5 16.25V11"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M6 4.25A1.75 1.75 0 116 7.75A1.75 1.75 0 016 4.25ZM14 12.25A1.75 1.75 0 1114 15.75A1.75 1.75 0 0114 12.25ZM6 12.25A1.75 1.75 0 116 15.75A1.75 1.75 0 016 12.25Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6 7.75V12.25M7.75 6H10.2C12.3 6 14 7.7 14 9.8V12.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.1 13.1L13.95 16.95M13.95 13.1L10.1 16.95"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M7 6.25H14.25C15.22 6.25 16 7.03 16 8V15.25C16 16.22 15.22 17 14.25 17H7C6.03 17 5.25 16.22 5.25 15.25V8C5.25 7.03 6.03 6.25 7 6.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.75 12V4.75C3.75 3.78 4.53 3 5.5 3H12.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M3 6.5C3 5.26 4.01 4.25 5.25 4.25H14.75C15.99 4.25 17 5.26 17 6.5V13.5C17 14.74 15.99 15.75 14.75 15.75H5.25C4.01 15.75 3 14.74 3 13.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.35 8.5H12.7M12.55 8.5L14.7 6.35M12.55 8.5L14.7 10.65"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <circle cx="10" cy="4.5" r="1.15" />
      <circle cx="10" cy="10" r="1.15" />
      <circle cx="10" cy="15.5" r="1.15" />
    </svg>
  )
}

function CursorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 32" fill="none" className="h-10 w-9 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
      <path
        d="M3 2.5L4.9 24.6L10.6 18.6L14.55 28.65L18.2 27.05L14.18 17.2L22.6 17.05L3 2.5Z"
        fill="#fff"
        stroke="#0A0912"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ToolbarItem = {
  label: string
  icon: ReactElement
  iconOnly?: boolean
}

const toolbarItems = [
  { label: "Metrics", icon: <ChartIcon /> },
  { label: "Test", icon: <BranchIcon /> },
  { label: "", icon: <CopyIcon />, iconOnly: true },
  { label: "", icon: <CardIcon />, iconOnly: true },
  { label: "", icon: <DotsIcon />, iconOnly: true },
] satisfies readonly ToolbarItem[]

export function Trigger() {
  return (
    <div className="relative w-full max-w-[620px] px-1 pt-4 pb-2 text-white sm:px-2">
      <div aria-hidden="true" className="absolute top-12 left-[72px] h-28 w-44 rounded-full bg-[#7a3cff]/12 blur-[72px]" />
      <div aria-hidden="true" className="absolute top-[64px] right-[56px] h-24 w-36 rounded-full bg-[#5330ff]/10 blur-[66px]" />

      <div className="relative z-10 space-y-6">
        <div className="relative mx-auto w-full max-w-[560px] rounded-[24px] border border-trigger-border bg-[linear-gradient(180deg,rgba(34,20,58,0.98)_0%,rgba(23,15,36,0.98)_100%)] p-[3px] shadow-[0_0_0_1px_rgba(145,94,255,0.4),0_0_24px_rgba(91,39,255,0.18)]">
          <div className="overflow-hidden rounded-[21px] border border-white/6 bg-[linear-gradient(180deg,rgba(39,22,66,0.98)_0%,rgba(26,17,42,0.98)_100%)]">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-3 text-trigger-label">
                <BoltIcon />
                <span className="text-[1rem] font-medium tracking-[-0.03em] text-trigger-label sm:text-[1.05rem]">
                  Trigger Action
                </span>
              </div>

              <div className="rounded-full border border-trigger-border bg-[var(--trigger-chip)] px-3.5 py-1.5 text-[0.82rem] font-semibold tracking-[0.12em] text-trigger-chip-foreground">
                IF
              </div>
            </div>

            <div className="p-3">
              <div className="rounded-[18px] bg-[var(--trigger-card)] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-5">
                <h2 className="text-[1.02rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.08rem]">
                  Signed Up
                </h2>
                <p className="mt-3 max-w-[410px] text-[0.92rem] leading-[1.35] tracking-[-0.03em] text-trigger-card-foreground sm:text-[0.96rem]">
                  Triggered when a new subscriber signs up for your newsletter
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-1 h-9 w-9 translate-x-2 translate-y-2">
            <CursorIcon />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[560px] items-center overflow-hidden rounded-[20px] border border-trigger-toolbar-border bg-[linear-gradient(180deg,rgba(25,24,31,0.98)_0%,rgba(19,19,24,0.98)_100%)] text-trigger-toolbar-foreground shadow-[0_12px_32px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <Button
            type="button"
            variant="trigger-primary"
            size="trigger-primary"
            className="m-2.5"
          >
            <PowerIcon />
            <span>Activated</span>
          </Button>

          {toolbarItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center border-l border-trigger-toolbar-border"
            >
              <Button
                type="button"
                variant="trigger-toolbar"
                size="trigger-toolbar"
                className={`${
                  item.iconOnly ? "justify-center sm:min-w-[56px]" : "sm:min-w-[120px]"
                }`}
                aria-label={item.label || "Toolbar action"}
              >
                <span className="text-trigger-toolbar-icon">{item.icon}</span>
                {!item.iconOnly ? <span>{item.label}</span> : null}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
