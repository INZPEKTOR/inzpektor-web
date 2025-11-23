import { Info, ShieldCheck, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Dashboard hero section displaying user's Unique Humanity Score and passport status.
 *
 * Contains two main cards:
 * - Score Card: Shows the user's current Unique Humanity Score (reputation score)
 * - Success Card: Confirms passport minting with options to mint on other networks
 *
 * This component provides the user's key metrics and actions at a glance
 * within the dashboard interface.
 */
export function HeroSection() {
  return (
    <div className="bg-emerald-50/50 py-8 border-b border-emerald-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Score Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-slate-900">Unique Humanity Score</h3>
              <Info className="h-5 w-5 text-slate-400" />
            </div>
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-4">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-900 text-white">
                  <div className="absolute inset-0 rounded-2xl border-4 border-emerald-900/20" />
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-5xl font-serif font-medium text-slate-900">25</span>
              </div>
            </div>
          </div>

          {/* Success Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">Passport minted!</h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-sm font-medium text-emerald-700">
                +600
              </span>
            </div>

            <p className="mb-8 text-slate-600">Success! Mint on other networks to maximize your onchain presence.</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button className="bg-slate-900 text-white hover:bg-slate-800">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Minting Dashboard
              </Button>
              <a href="#" className="text-sm text-slate-500 underline hover:text-slate-900">
                Here&apos;s what you can do with your Passport.
              </a>
            </div>

            {/* Decorative Shields */}
            <div className="absolute right-6 top-6 flex gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 shadow-sm">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
