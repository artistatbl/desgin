import type { ReactNode } from "react"

function BatteryBoltIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 text-white/62"
      fill="none"
    >
      <path
        d="M8.15 2.5L4.8 9.05H8L6.95 17.5L15.2 8.55H11.4L12.75 2.5H8.15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChargingIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 text-[#18c66d]"
      fill="none"
    >
      <path
        d="M16 10a6 6 0 10-1.76 4.24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 text-[#18c66d]"
      fill="none"
    >
      <path
        d="M3.75 10.5L8.15 14.75L16.25 4.75"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type BatteryStatusCardProps = {
  percent: string
  status: string
  metaLabel: string
  metaValue: string
  progress: string
  progressClassName: string
  statusIcon: ReactNode
}

const batteryStatusCards: BatteryStatusCardProps[] = [
  {
    percent: "46.2%",
    status: "Charging",
    metaLabel: "Est. end in",
    metaValue: "~25 mins",
    progress: "48%",
    progressClassName: "bg-[linear-gradient(90deg,#16d878_0%,#18ea8a_100%)]",
    statusIcon: <ChargingIcon />,
  },
  {
    percent: "82.6%",
    status: "Charged",
    metaLabel: "Charged in",
    metaValue: "42 mins",
    progress: "81%",
    progressClassName: "bg-[linear-gradient(90deg,#9E9E9C_0%,#A5A5A3_100%)]",
    statusIcon: <CheckIcon />,
  },
]

function BatteryStatusCard({
  percent,
  status,
  metaLabel,
  metaValue,
  progress,
  progressClassName,
  statusIcon,
}: BatteryStatusCardProps) {
  return (
    <div className="w-full rounded-[24px] bg-[#242321] px-4 py-4 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] sm:px-5 sm:py-5">
      <div className="flex flex-col gap-3.5 sm:gap-4">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 text-[0.96rem] tracking-[-0.04em] sm:gap-3 sm:text-[1.02rem]">
            <div className="flex items-center gap-2.5">
              <BatteryBoltIcon />
              <span className="font-medium text-white/92">{percent}</span>
            </div>
            <div className="flex items-center gap-2.5">
              {statusIcon}
              <span className="font-medium text-white/92">{status}</span>
            </div>
          </div>

          <p className="text-[0.94rem] tracking-[-0.04em] text-white/60 sm:text-[0.98rem]">
            {metaLabel} <span className="font-medium text-white">{metaValue}</span>
          </p>
        </div>

        <div className="h-3.5 rounded-full bg-[#4B4A48] p-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          <div
            className={`h-full rounded-full ${progressClassName}`}
            style={{ width: progress }}
          />
        </div>
      </div>
    </div>
  )
}

export function Battery() {
  return (
    <div className="w-full max-w-[560px] space-y-4 sm:space-y-5">
      {batteryStatusCards.map((card) => (
        <BatteryStatusCard
          key={`${card.status}-${card.percent}`}
          percent={card.percent}
          status={card.status}
          metaLabel={card.metaLabel}
          metaValue={card.metaValue}
          progress={card.progress}
          progressClassName={card.progressClassName}
          statusIcon={card.statusIcon}
        />
      ))}
    </div>
  )
}
