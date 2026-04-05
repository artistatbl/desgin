function GoalIcon() {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#f2f0df] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <span className="absolute h-1.5 w-1.5 -translate-x-[3px] rounded-full bg-[#95a045]" />
      <span className="absolute h-1.5 w-1.5 translate-x-[3px] rounded-full bg-[#d7df6a]" />
    </span>
  )
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M10 5.25V14.75M5.25 10H14.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function RevenuePanel() {
  return (
    <section className="w-full max-w-[276px] rounded-[31px] bg-[#fcfcf7] p-[8px] shadow-[0_26px_70px_rgba(164,159,110,0.18)] ring-1 ring-[#f1eedc]">
      <header className="flex items-center gap-2.5 px-6 py-3 text-[#6f7a21]">
        <GoalIcon />
        <h1 className="text-[1.05rem] font-semibold tracking-[-0.045em]">Progress goals</h1>
      </header>

      <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.94),rgba(243,241,214,0.96)_48%,rgba(237,236,205,0.97)_100%)] px-4 pb-5 pt-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        <button
          type="button"
          aria-label="Add goal"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#8b9224] text-white shadow-[0_10px_20px_rgba(139,146,36,0.32),inset_0_1px_0_rgba(255,255,255,0.25)]"
        >
          <PlusIcon />
        </button>

        <div className="relative z-10 flex min-h-[168px] flex-col justify-end">
          <p className="text-[0.88rem] font-medium tracking-[-0.03em] text-[#a6ad67]">Steps</p>

          <div className="mt-1.5 flex items-end justify-between gap-3">
            <p className="text-[3.25rem] leading-none font-semibold tracking-[-0.09em] text-[#6f7a12]">
              20.5K
            </p>

            <div className="relative mb-2 mr-4 shrink-0 rounded-full bg-white px-3 py-1.5 text-[1rem] font-semibold tracking-[-0.05em] text-[#8c9222] shadow-[0_10px_20px_rgba(194,192,141,0.22)]">
              +5K
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-[#dce94c]/24 blur-[2px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[112px] w-[124px] rounded-tl-[86px] bg-[#dfe7a7]/55" />
        <div className="pointer-events-none absolute bottom-[12px] right-[14px] h-[66px] w-[34px] rotate-[34deg] rounded-full bg-[#d2ea22] shadow-[0_12px_24px_rgba(186,205,31,0.32)]" />
        <div className="pointer-events-none absolute bottom-[8px] right-[42px] h-[52px] w-[24px] rotate-[34deg] rounded-full bg-[#c5df16]/90 blur-[0.2px]" />
      </div>
    </section>
  )
}
