import HeroSection from "@/components/hero-landing"
import { LightWidget } from "@/components/light-widget"

/**
 * Home page component for the INZPEKTOR web application.
 *
 * This is the main landing page that showcases:
 * - Hero section with rotating globe and key messaging
 * - Features grid highlighting platform capabilities
 * - Enterprise benefits section
 * - Interactive light widget demonstration
 * - Explanation cards for "Light Off" (current state) and "Light On" (with INZPEKTOR)
 *
 * The page uses a dark theme with emerald/cyan gradient accents
 * and includes decorative background elements for visual depth.
 */
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
              <p className="text-lg text-white font-semibold mt-4">
                We are the missing piece of compliance in crypto.
              </p>
            </div>
          </div>
          <LightWidget />
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Light Off State */}
            <div className="group relative bg-gradient-to-br from-red-500/5 to-red-900/5 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl group-hover:bg-red-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
                  <h3 className="text-2xl font-bold text-red-400">Light Off</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The current situation — hidden actors, unknown risks, and zero visibility into user behavior.
                </p>
              </div>
            </div>

            {/* Light On State */}
            <div className="group relative bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl group-hover:bg-emerald-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                  <h3 className="text-2xl font-bold text-emerald-400">Light On</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Everything monitored through Proof of Clean Hands, increasing trust between the financial sector and blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
