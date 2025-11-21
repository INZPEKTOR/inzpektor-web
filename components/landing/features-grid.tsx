import { Zap, Lock, TrendingUp, CheckCircle2, Globe, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Powered by Noir ZK proofs. No private information is ever leaked or exposed.",
    color: "emerald"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Built on Stellar for fast, auditable operations with minimal overhead.",
    color: "cyan"
  },
  {
    icon: Globe,
    title: "Universal",
    description: "Works across apps, chains, and systems. One reputation, everywhere.",
    color: "purple"
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof",
    description: "Cryptographically verifiable on-chain. Immutable reputation records.",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "Gamified",
    description: "Progression levels, streaks, and badges that incentivize good behavior.",
    color: "pink"
  },
  {
    icon: CheckCircle2,
    title: "Behavior-Based",
    description: "We don't score people. We score behavior patterns and actions.",
    color: "blue"
  }
]

export function FeaturesGrid() {
  return (
    <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 hover:border-${feature.color}-500/50 transition-all duration-300`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
            <div className="relative">
              <div className={`h-12 w-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                <Icon className={`h-6 w-6 text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
