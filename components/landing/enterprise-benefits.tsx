import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Reduce Fraud & Abuse",
    description: "Detect risky actors before they exploit your system using cryptographically verified behavioral history.",
    color: "emerald"
  },
  {
    title: "Lower Compliance Costs",
    description: "Automate multi-year verification using short, efficient ZK attestations.",
    color: "cyan"
  },
  {
    title: "Create Safer Ecosystems",
    description: "Marketplaces, financial platforms, gaming economies — all benefit from trusted participants.",
    color: "purple"
  },
  {
    title: "Increase Conversion",
    description: "Good users gain instant approvals, faster onboarding, and higher trust limits.",
    color: "orange"
  }
]

export function EnterpriseBenefits() {
  return (
    <div className="mt-24 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-3xl p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Enterprises Choose Inzpektor
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Reduce fraud, lower compliance costs, and create safer ecosystems
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className={`h-10 w-10 rounded-lg bg-${benefit.color}-500/10 flex items-center justify-center`}>
                <CheckCircle2 className={`h-5 w-5 text-${benefit.color}-400`} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
