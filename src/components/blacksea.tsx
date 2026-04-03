import type { CSSProperties } from "react"

function MountainShape({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={className}
      style={{
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        ...style,
      }}
    />
  )
}

export function BlackSea() {
  return (
    <div className="w-[340px] overflow-hidden rounded-[34px] bg-black p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-[28px] bg-black">
        <div className="relative h-[232px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#ffd6b2_0%,#ffbb83_34%,#cc5d1c_82%,#120603_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,247,238,0.72),rgba(255,247,238,0)_38%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_40%,rgba(255,221,187,0.24),rgba(255,221,187,0)_28%)]" />
          <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,247,240,0.42),rgba(255,247,240,0))]" />

          <MountainShape
            className="absolute left-3 top-5 h-[180px] w-[138px] bg-[linear-gradient(180deg,rgba(228,118,46,0.22),rgba(208,94,25,0.72))] blur-[1px]"
          />
          <MountainShape
            className="absolute left-[76px] top-16 h-[108px] w-[88px] bg-[linear-gradient(180deg,rgba(236,140,70,0.12),rgba(215,101,31,0.45))] blur-[1px]"
          />
          <MountainShape
            className="absolute right-8 top-11 h-[136px] w-[112px] bg-[linear-gradient(180deg,rgba(234,140,65,0.1),rgba(205,95,28,0.38))] blur-[1px]"
          />
          <MountainShape
            className="absolute right-[82px] top-[86px] h-[82px] w-[68px] bg-[linear-gradient(180deg,rgba(238,151,84,0.12),rgba(198,92,28,0.28))]"
          />

          <div className="absolute bottom-[42px] left-0 right-0 h-[54px] bg-[linear-gradient(180deg,rgba(33,10,3,0),rgba(12,3,1,0.88)_34%,rgba(0,0,0,1)_100%)]" />
          <div className="absolute bottom-8 left-0 h-14 w-[96px] rounded-tr-[76px] bg-[linear-gradient(180deg,#261009,#030202)]" />
          <div className="absolute bottom-7 right-0 h-[50px] w-[106px] rounded-tl-[92px] bg-[linear-gradient(180deg,#33140a,#040202)]" />
          <div className="absolute bottom-[38px] left-1/2 h-3 w-[3px] -translate-x-1/2 rounded-full bg-[#0a0605]" />

          <div className="absolute inset-x-0 top-5 text-center">
            <p className="text-[0.78rem] font-semibold tracking-[-0.04em] text-[#de6f33]">
              Memories
            </p>
          </div>
        </div>

        <div className="bg-black px-6 pt-3.5 pb-5 text-center">
          <h2 className="text-[1.75rem] font-medium tracking-[-0.065em] text-white">
            Black Sea
          </h2>
          <p className="mt-1 text-[0.8rem] font-medium tracking-[-0.03em] text-white/72">
            June 2025
          </p>
        </div>
      </div>
    </div>
  )
}
