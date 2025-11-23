import { Zap, Lock, TrendingUp, CheckCircle2, Globe, ShieldCheck } from "lucide-react"

/**
 * Feature data for the features grid section.
 * Each feature describes a key capability of the INZPEKTOR platform.
 */
const features = [
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Powered by Noir ZK proofs. No private information is ever leaked or exposed.",
    gradient: "from-emerald-500/10 to-emerald-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Built on Stellar for fast, auditable operations with minimal overhead.",
    gradient: "from-cyan-500/10 to-cyan-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/30",
    glow: "group-hover:shadow-cyan-500/20"
  },
  {
    icon: Globe,
    title: "Universal",
    description: "Works across apps, chains, and systems. One reputation, everywhere.",
    gradient: "from-purple-500/10 to-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/30",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof",
    description: "Cryptographically verifiable on-chain. Immutable reputation records.",
    gradient: "from-orange-500/10 to-orange-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/30",
    glow: "group-hover:shadow-orange-500/20"
  },
  {
    icon: TrendingUp,
    title: "Gamified",
    description: "Progression levels, streaks, and badges that incentivize good behavior.",
    gradient: "from-pink-500/10 to-pink-500/5",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderHover: "hover:border-pink-500/30",
    glow: "group-hover:shadow-pink-500/20"
  },
  {
    icon: CheckCircle2,
    title: "Behavior-Based",
    description: "We don't score people. We score behavior patterns and actions.",
    gradient: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderHover: "hover:border-blue-500/30",
    glow: "group-hover:shadow-blue-500/20"
  }
]

/**
 * Features grid component displaying the core capabilities of INZPEKTOR.
 *
 * Presents six key features in a responsive grid layout:
 * - Privacy-First: Noir ZK proofs
 * - High Performance: Stellar blockchain
 * - Universal: Cross-chain compatibility
 * - Tamper-Proof: On-chain verification
 * - Gamified: Progression and incentives
 * - Behavior-Based: Action-focused scoring
 *
 * Each feature card includes hover effects and gradient backgrounds.
 */
export function FeaturesGrid() {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Built for <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Privacy & Performance</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A complete reputation system that respects user privacy while delivering enterprise-grade reliability
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 ${feature.borderHover} ${feature.glow} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative">
                <div className={`h-14 w-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
