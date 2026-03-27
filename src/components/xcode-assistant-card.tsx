import { Button } from "@/components/ui/button"

function AppIcon() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[11px] bg-[linear-gradient(180deg,#3cb6ff_0%,#2467ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
      <div className="absolute -left-1 top-1 h-8 w-3 rotate-[18deg] rounded-full bg-black/60" />
      <div className="absolute right-[7px] top-1 h-8 w-1.5 rotate-[18deg] rounded-full bg-black/65" />
      <div className="relative rounded-[7px] bg-black/16 px-1 py-0.5 text-[0.82rem] font-semibold tracking-[-0.08em] text-white">
        x
      </div>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <circle cx="10" cy="10" r="6.9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10H16.5M10 3.1C11.7 4.92 12.67 7.31 12.75 9.8C12.67 12.45 11.7 14.86 10 16.9C8.3 14.86 7.33 12.45 7.25 9.8C7.33 7.31 8.3 4.92 10 3.1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FocusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path d="M7 4H5.5C4.67 4 4 4.67 4 5.5V7M13 4H14.5C15.33 4 16 4.67 16 5.5V7M16 13V14.5C16 15.33 15.33 16 14.5 16H13M7 16H5.5C4.67 16 4 15.33 4 14.5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SlidersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path d="M4 6.5H16M4 13.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="6.5" r="2.1" fill="#2B2936" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="13.5" r="2.1" fill="#2B2936" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-6">
      <path d="M10 15V5M10 5L5.75 9.25M10 5L14.25 9.25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XcodeAssistantCard() {
  return (
    <div className="relative flex w-full max-w-[620px] items-center justify-center py-3">
      <div className="absolute left-10 top-3 h-32 w-44 rounded-full bg-[#7e8cff]/35 blur-[72px]" />
      <div className="absolute right-10 top-6 h-28 w-[168px] rounded-full bg-[#c3afff]/28 blur-[78px]" />

      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] border border-[#4d4c5a] bg-[linear-gradient(180deg,#32313d_0%,#2b2936_100%)] text-white shadow-[0_20px_46px_rgba(53,50,84,0.22),inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="border-b border-white/7 bg-[rgba(255,255,255,0.085)] px-4 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <AppIcon />
              <div className="space-y-0.5">
                <h2 className="text-[1.08rem] font-semibold tracking-[-0.045em] text-white/95">
                  Working with Xcode &amp; Terminal
                </h2>
                <p className="text-[0.86rem] font-normal tracking-[-0.03em] text-white/46">
                  Focused on lines 78 -103
                </p>
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              className="h-auto rounded-[15px] bg-[#63606f] px-5 py-2.5 text-[0.96rem] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-[#6b6778] hover:text-white"
            >
              Stop
            </Button>
          </div>
        </div>

        <div className="px-5 pt-6 pb-3">
          <p className="text-[1.08rem] font-medium tracking-[-0.045em] text-white/92">
            What does this code do?
          </p>
        </div>

        <div className="flex items-end justify-between px-5 pb-4">
          <div className="flex items-center gap-4 text-white/74">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full p-0 text-white/74 hover:bg-white/6 hover:text-white"
              aria-label="Add attachment"
            >
              <PlusIcon />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full p-0 text-white/74 hover:bg-white/6 hover:text-white"
              aria-label="Browse web"
            >
              <GlobeIcon />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full p-0 text-white/74 hover:bg-white/6 hover:text-white"
              aria-label="Focus selection"
            >
              <FocusIcon />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full p-0 text-white/74 hover:bg-white/6 hover:text-white"
              aria-label="Adjust settings"
            >
              <SlidersIcon />
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-[50px] rounded-[16px] bg-white text-[#1a1822] shadow-[0_10px_24px_rgba(255,255,255,0.14)] hover:bg-white hover:text-[#1a1822]"
            aria-label="Send"
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
