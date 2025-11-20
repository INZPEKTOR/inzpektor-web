import { Navbar } from "@/components/navbar"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { HeroSection } from "@/components/hero-section"
import { StampsList } from "@/components/stamps-list"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Navbar />
      <AnnouncementBanner />
      <main className="pb-20">
        <HeroSection />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <h2 className="text-3xl font-semibold mb-8 text-slate-800">Add Stamps</h2>
          <StampsList />
        </div>
      </main>
    </div>
  )
}
