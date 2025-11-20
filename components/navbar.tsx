import { Bell, ChevronDown, Hexagon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <Hexagon className="h-6 w-6 fill-slate-900" />
            <span>Human Passport</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="flex items-center gap-1 text-slate-900">
              <Hexagon className="h-4 w-4" />
              Passport
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-slate-900">
              <div className="h-4 w-4 rounded-full border-2 border-current" />
              Partner with us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            2600
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-lg bg-slate-100 p-1 pr-3">
            <div className="h-8 w-8 rounded bg-slate-200" />
            <span className="text-sm font-medium">emidesencriptada.xlm</span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </Button>
        </div>
      </div>
    </header>
  )
}
