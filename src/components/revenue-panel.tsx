function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M5.5 10.4L8.5 13.2L14.5 6.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.95" />
      <path
        d="M10 8.2V12.3"
        stroke="#0f56c9"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="10" cy="6.1" r="1" fill="#0f56c9" />
    </svg>
  )
}

export function RevenuePanel() {
  return (
    <section className="relative w-full max-w-[288px] rounded-[34px] bg-[linear-gradient(180deg,#202026_0%,#17171d_100%)] px-7 pb-7 pt-6 text-white shadow-[0_28px_70px_rgba(12,29,71,0.34),inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute inset-x-6 bottom-5 h-20 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(27,112,255,0.22),transparent_68%)] blur-2xl" />

      <header className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[3.3rem] leading-none font-semibold tracking-[-0.11em] text-white">
            25:04
          </p>
          <p className="mt-1.5 text-[0.97rem] font-medium tracking-[-0.03em] text-[#717584]">
            Left for preparation
          </p>
        </div>

        <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#143a76] text-[#2f8bff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <CheckIcon />
        </span>
      </header>

      <div className="relative mt-10 flex justify-end pr-2">
        <div className="relative rounded-[11px] bg-[linear-gradient(180deg,#2f97ff_0%,#1e74e8_100%)] px-4 py-2 text-[0.98rem] font-semibold tracking-[-0.04em] text-[#dbeaff] shadow-[0_12px_24px_rgba(17,98,227,0.35),inset_0_1px_0_rgba(255,255,255,0.28)]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#dcecff]">
              <InfoIcon />
            </span>
            Preparation
          </span>
          <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#2685f2]" />
        </div>
      </div>

      <div className="relative mt-7">
        <div className="absolute right-[48px] top-[-18px] h-[108px] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.08))]" />

        <div className="flex h-[68px] items-stretch gap-[3px] rounded-[14px] border border-[#234775] bg-[linear-gradient(180deg,#14325f_0%,#132a4e_100%)] p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="w-[18px] rounded-[10px] bg-[linear-gradient(180deg,#173760_0%,#123258_100%)]" />
          <div className="flex-1 rounded-[10px] bg-[linear-gradient(180deg,#173760_0%,#123258_100%)]" />
          <div className="w-[58px] rounded-[10px] bg-[linear-gradient(180deg,#16355f_0%,#112e55_100%)]" />
          <div className="relative w-[62px] overflow-hidden rounded-[10px] border border-[#5ca3ff] bg-[linear-gradient(180deg,#2b80ea_0%,#2d7bdf_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_0_1px_rgba(14,68,150,0.15)]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_2px,transparent_2px,transparent_6px)] opacity-80" />
            <div className="absolute inset-y-0 left-0 w-px bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  )
}
