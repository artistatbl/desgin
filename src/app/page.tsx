import { ComponentGallery } from "@/components/component-gallery"

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 sm:h-screen sm:overflow-hidden sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1040px] items-start justify-center sm:h-full sm:min-h-0 sm:pt-8">
        <ComponentGallery />
      </div>
    </main>
  )
}
