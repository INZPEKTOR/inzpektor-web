import HeroSection from "@/components/hero-landing"
import { LightWidget } from "@/components/light-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <HeroSection />
        
        {/* Interactive Light Widget */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Demonstration of the Power of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                INZPEKTOR
              </span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-gray-400 leading-relaxed">
                <span className="text-red-400 font-semibold">When the light goes out:</span> This is the current situation — 
                hidden actors, unknown risks, and zero visibility into user behavior.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                <span className="font-semibold text-emerald-400">When the light comes on:</span> Everything is monitored through Proof of Clean Hands, 
                increasing trust between the financial sector and blockchain.
              </p>
              <p className="text-lg text-white font-semibold mt-4">
                We are the missing piece of compliance in crypto.
              </p>
            </div>
          </div>
          <LightWidget />
        </div>
      </div>
    </main>
  )
}
