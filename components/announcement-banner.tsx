import { AlertCircle } from "lucide-react"

/**
 * Announcement banner component displayed at the top of pages.
 *
 * Shows important announcements or promotions with:
 * - Alert icon for visibility
 * - Highlighted message text
 * - Link to more information
 * - Dismiss button to hide the banner
 *
 * Currently displays the HUMN onchain SUMR announcement.
 */
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
