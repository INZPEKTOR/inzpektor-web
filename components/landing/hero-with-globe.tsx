import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import RotatingEarth from "@/components/rotating-earth"

/**
 * Hero section component with rotating globe visualization.
 *
 * This is the main hero section of the landing page featuring:
 * - Badge highlighting Zero-Knowledge Reputation Protocol
 * - Main headline: "The Proof of Clean Hands Protocol"
 * - Description of the privacy-preserving verification system
 * - Call-to-action buttons (Get Started, View Documentation)
 * - Key stats (100% Privacy, Zero Data Leakage, Cross-Chain)
 * - Interactive rotating Earth globe visualization
 *
 * Layout is responsive with grid columns on larger screens.
 */
export function HeroWithGlobe() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
      {/* Left: Hero Content */}
      <div className="order-1 lg:order-1">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Zero-Knowledge Reputation Protocol
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Proof of
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Clean Hands Protocol
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Verify if a user is trustworthy — without spying on them. A Zero-Knowledge reputation layer that ensures users are compliant, legitimate, and maintain clean behavioral traces across time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-black hover:bg-gray-400">
              View Documentation
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Privacy Preserved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Zero</div>
              <div className="text-sm text-gray-400">Data Leakage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">∞</div>
              <div className="text-sm text-gray-400">Cross-Chain</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Rotating Earth */}
      <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <RotatingEarth width={600} height={600} className="relative z-10" />
        </div>
      </div>
    </div>
  )
}
