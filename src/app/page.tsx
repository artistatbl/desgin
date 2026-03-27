import { ThresholdNoiseCard } from "@/components/threshold-noise-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <ThresholdNoiseCard />
      </div>
    </main>
  )
}
