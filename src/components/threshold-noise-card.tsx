import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

function SignalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 18"
      className="h-5 w-5"
      fill="none"
    >
      <rect x="1" y="10.5" width="2" height="6" rx="0.75" fill="#EDE35A" />
      <rect x="5" y="7.5" width="2" height="9" rx="0.75" fill="#EDE35A" />
      <rect x="9" y="4.5" width="2" height="12" rx="0.75" fill="#EDE35A" />
      <rect x="13" y="2.5" width="2" height="14" rx="0.75" fill="#4C4C4C" />
      <rect x="17" y="0.5" width="2" height="16" rx="0.75" fill="#4C4C4C" />
    </svg>
  )
}

function NoiseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="h-4 w-4 text-white/75"
      fill="none"
    >
      <path
        d="M3.25 10.5V7.5M6.75 12.5V5.5M10.25 11.5V6.5M13.75 9.5V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.5 4.75C16.4 5.78 16.94 7.13 16.94 8.6C16.94 10.07 16.4 11.42 15.5 12.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MenuDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="h-1 w-1 rounded-full bg-white/70" />
      ))}
    </div>
  )
}

export function ThresholdNoiseCard() {
  return (
    <Card className="w-full max-w-[560px] gap-0 rounded-[18px] border border-[#343434] bg-[#050505] py-0 text-white ring-1 ring-[#1E1E1E] shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
      <CardContent className="px-4 pt-4 pb-0 sm:px-[18px] sm:pt-[18px]">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-[0.9rem] text-white/55">Step 2 / 2</p>
            <div className="flex items-center gap-2 text-[1.05rem] font-medium tracking-[-0.04em] sm:text-[1.1rem]">
              <span className="text-white/76">Threshold</span>
              <span className="text-white/45">›</span>
              <span>Noise ratio</span>
            </div>
          </div>
          <Button
            type="button"
            variant="noise-ghost"
            size="noise-icon"
            className="mt-0.5"
            aria-label="More options"
          >
            <MenuDots />
          </Button>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-[#2A2A2A] bg-[#1B1B1B] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="relative overflow-hidden bg-[#121212] px-3 py-2.5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 bottom-[2px] opacity-55"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1.05px, transparent 0)",
                backgroundSize: "9px 9px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-[31%] bg-[linear-gradient(90deg,rgba(236,228,90,0.08),rgba(236,228,90,0))]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#2A2A2A]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-[67%] bottom-0 z-10 h-px bg-[linear-gradient(90deg,rgba(255,250,200,0.3)_0%,rgba(255,246,156,0.58)_46%,rgba(255,243,110,0.88)_78%,rgba(255,240,92,1)_100%)]"
            />

            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 text-[0.78rem] sm:text-[0.82rem]">
                <SignalIcon />
                <p className="text-white/78">
                  Signal <span className="font-medium text-white">32.4%</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="rounded-[8px] border border-[#6A6321] bg-[#68621F] px-2 py-1 text-[0.82rem] font-medium text-[#FFF56B]">
                  65%
                </div>
                <div className="flex items-center gap-1.5 rounded-[8px] border border-[#2C2C2C] bg-[#0B0B0B] px-2 py-1 text-[0.82rem] text-white/80">
                  <NoiseIcon />
                  <span>Noise</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 bg-[#1B1B1B] px-3 py-2.5 text-center text-[0.75rem] text-white/68">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-4 items-end justify-between gap-4 px-4 pt-0 pb-4 sm:px-[18px] sm:pb-[18px]">
        <div className="flex items-center gap-2.5">
          <span className="h-1 w-4 rounded-full bg-white/35" />
          <span className="h-1 w-7 rounded-full bg-white" />
        </div>

        <div className="flex items-center gap-2.5">
          <Button type="button" variant="noise-secondary" size="noise-action">
            Adjust threshold
          </Button>
          <Button type="button" variant="noise-primary" size="noise-action">
            Finish
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
