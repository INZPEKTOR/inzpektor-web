import { CheckCircle2, Shield, TrendingDown, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Reduce Fraud & Abuse",
    description: "Detect risky actors before they exploit your system using cryptographically verified behavioral history.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500/5 to-transparent"
  },
  {
    icon: TrendingDown,
    title: "Lower Compliance Costs",
    description: "Automate multi-year verification using short, efficient ZK attestations.",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    gradient: "from-cyan-500/5 to-transparent"
  },
  {
    icon: Users,
    title: "Create Safer Ecosystems",
    description: "Marketplaces, financial platforms, gaming economies — all benefit from trusted participants.",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    gradient: "from-purple-500/5 to-transparent"
  },
  {
    icon: Zap,
    title: "Increase Conversion",
    description: "Good users gain instant approvals, faster onboarding, and higher trust limits.",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    gradient: "from-orange-500/5 to-transparent"
  }
]

export function EnterpriseBenefits() {
  return (
    <div className="mt-32 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-12 md:p-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 mb-6">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Enterprise Ready
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Enterprises Choose{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              INZPEKTOR
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Reduce fraud, lower compliance costs, and create safer ecosystems — all while respecting user privacy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative flex gap-5">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-xl ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${benefit.iconColor}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-[15px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Ready to build trust at scale?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              Schedule a Demo
            </button>
            <button className="px-8 py-3 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
