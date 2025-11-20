import { AlertCircle } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="relative flex items-center justify-center gap-2 bg-sky-100 px-4 py-2 text-sm text-sky-900">
      <AlertCircle className="h-4 w-4" />
      <p>
        <span className="font-semibold">HUMN onchain SUMR is LIVE!</span> Get rewarded for being human.{" "}
        <a href="#" className="underline hover:text-sky-700">
          More information.
        </a>
      </p>
      <button className="absolute right-4 text-sky-700 hover:text-sky-900">
        <span className="sr-only">Dismiss</span>
        <span className="text-xs underline">Dismiss</span>
      </button>
    </div>
  )
}
