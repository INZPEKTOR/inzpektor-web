"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Globe, User, Shield, Smartphone, Fingerprint, Camera, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * Represents a verification stamp that users can connect to prove their identity or activity.
 */
interface Stamp {
  /** Unique identifier for the stamp */
  id: string
  /** Display title of the stamp */
  title: string
  /** Description explaining the verification method */
  description: string
  /** Icon element to display for the stamp */
  icon: React.ReactNode
  /** Badges showing points or score rewards */
  badges: { label: string; value?: string; type: "points" | "score" | "default" }[]
  /** Current status of the stamp */
  status: "connect" | "verified"
  /** Optional provider that secures this verification */
  securedBy?: string
  /** Progress towards completion (for verified stamps) */
  progress?: { current: number; total: number }
  /** Number of days the verification remains valid */
  validityDays?: number
  /** Optional color theme for the stamp */
  color?: string
}

/**
 * Physical verification stamps that require real-world identity verification.
 * These include government ID, biometrics, phone verification, etc.
 */
const PHYSICAL_STAMPS: Stamp[] = [
  {
    id: "gov-id",
    title: "Government ID",
    description: "Verify your identity with government ID",
    icon: <User className="h-6 w-6" />,
    badges: [
      { label: "+1000", type: "points" },
      { label: "16", type: "score" },
    ],
    status: "connect",
    securedBy: "human.tech",
  },
  {
    id: "binance",
    title: "Binance",
    description: "Verify KYC with your Binance Account Bound Token",
    icon: (
      <div className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
        B
      </div>
    ),
    badges: [{ label: "10", type: "score" }],
    status: "connect",
  },
  {
    id: "biometrics",
    title: "Biometrics",
    description: "Verify your uniqueness using facial biometrics",
    icon: <Fingerprint className="h-6 w-6" />,
    badges: [
      { label: "+1000", type: "points" },
      { label: "5", type: "score" },
    ],
    status: "connect",
    securedBy: "human.tech",
  },
  {
    id: "phone",
    title: "Phone Verification",
    description: "Verify your phone number",
    icon: <Smartphone className="h-6 w-6" />,
    badges: [
      { label: "+1000", type: "points" },
      { label: "1.5", type: "score" },
    ],
    status: "connect",
    securedBy: "human.tech",
  },
  {
    id: "clean-hands",
    title: "Proof of Clean Hands",
    description: "Verify clean regulatory status",
    icon: (
      <div className="h-6 w-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
        <Shield className="h-3 w-3" />
      </div>
    ),
    badges: [
      { label: "+1000", type: "points" },
      { label: "+1", type: "score" },
    ],
    status: "verified",
    securedBy: "human.tech",
    progress: { current: 1, total: 1 },
    validityDays: 89,
  },
]

/**
 * Blockchain-based verification stamps that verify on-chain activity and participation.
 * These include staking, NFT ownership, DAO governance, and other blockchain interactions.
 */
const BLOCKCHAIN_STAMPS: Stamp[] = [
  {
    id: "identity-staking",
    title: "Identity Staking",
    description: "Stake GTC to boost trust in the ecosystem",
    icon: <div className="h-6 w-6 bg-teal-500 rounded-full" />,
    badges: [
      { label: "+1600", type: "points" },
      { label: "12.5", type: "score" },
    ],
    status: "connect",
  },
  {
    id: "idena",
    title: "Idena",
    description: "Prove your unique humanity with Idena",
    icon: (
      <div className="h-6 w-6 bg-slate-200 rounded-full flex items-center justify-center">
        <User className="h-4 w-4" />
      </div>
    ),
    badges: [{ label: "9.7", type: "score" }],
    status: "connect",
  },
  {
    id: "gitcoin",
    title: "Gitcoin Grants",
    description: "Verify your Gitcoin Grants donations",
    icon: <div className="h-6 w-6 bg-green-900 rounded-full" />,
    badges: [{ label: "6.2", type: "score" }],
    status: "connect",
  },
  {
    id: "guild",
    title: "Guild.xyz",
    description: "Verify your Guild.xyz community activity",
    icon: <div className="h-6 w-6 bg-slate-800 rounded-sm" />,
    badges: [{ label: "0.7", type: "score" }],
    status: "connect",
  },
  {
    id: "snapshot",
    title: "Snapshot",
    description: "Verify your DAO governance participation",
    icon: <div className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center">⚡</div>,
    badges: [{ label: "0.2", type: "score" }],
    status: "connect",
  },
  {
    id: "brightid",
    title: "BrightID",
    description: "Verify identity with BrightID social verification",
    icon: <div className="h-6 w-6 bg-orange-500 rounded-full" />,
    badges: [{ label: "0.2", type: "score" }],
    status: "connect",
  },
  {
    id: "nft",
    title: "NFT",
    description: "Verify your Ethereum L1 NFT collection",
    icon: <div className="h-6 w-6 bg-blue-500 rounded-sm" />,
    badges: [{ label: "+1", type: "score" }],
    status: "verified",
    progress: { current: 1, total: 22.1 },
    validityDays: 89,
  },
  {
    id: "ens",
    title: "ENS",
    description: "Verify ownership of your ENS domain",
    icon: <div className="h-6 w-6 bg-blue-400 rounded-full" />,
    badges: [{ label: "+0.2", type: "score" }],
    status: "verified",
    progress: { current: 0.2, total: 0.2 },
    validityDays: 89,
  },
]

/**
 * Renders an individual stamp card showing verification status and details.
 *
 * The card displays:
 * - Icon and title
 * - Badges for points/score rewards
 * - Security provider information
 * - Progress bar and validity for verified stamps
 * - Connect button for unverified stamps
 *
 * @param stamp - The stamp data to display
 */
function StampCard({ stamp }: { stamp: Stamp }) {
  const isVerified = stamp.status === "verified"

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl p-5 transition-all",
        isVerified
          ? "bg-emerald-100/50 ring-1 ring-emerald-200"
          : "bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md",
      )}
    >
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
              {stamp.icon}
            </div>
            {isVerified && (
              <span className="flex items-center gap-1 text-sm font-medium text-emerald-700">Verified</span>
            )}
          </div>
          <div className="flex gap-1">
            {stamp.badges.map((badge, i) => (
              <span
                key={i}
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                  badge.type === "points" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600",
                )}
              >
                {badge.type === "points" && <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                {badge.type === "score" && <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />}
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <h4 className="mb-1 font-semibold text-slate-900">{stamp.title}</h4>

        {stamp.securedBy && (
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-500 border border-slate-100">
            <Shield className="h-2.5 w-2.5" />
            Secured by {stamp.securedBy}
          </div>
        )}

        <p className="text-sm text-slate-500 leading-relaxed">{stamp.description}</p>
      </div>

      <div className="mt-6">
        {isVerified ? (
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-900">
                  {stamp.progress?.current}
                  <span className="text-slate-500">/{stamp.progress?.total} points gained</span>
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-emerald-200">
                <div
                  className="h-1.5 rounded-full bg-emerald-500"
                  style={{
                    width: `${((stamp.progress?.current || 0) / (stamp.progress?.total || 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5" />
              Valid for {stamp.validityDays} days
            </div>
          </div>
        ) : (
          <Button className="w-full bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900">
            Connect
          </Button>
        )}
      </div>
    </div>
  )
}

/**
 * Collapsible section component that groups related stamps together.
 *
 * @param title - Section title
 * @param description - Section description
 * @param icon - Icon to display in the section header
 * @param stamps - Array of stamps to display in this section
 */
function Section({
  title,
  description,
  icon,
  stamps,
}: {
  title: string
  description: string
  icon: React.ReactNode
  stamps: Stamp[]
}) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-start justify-between text-left">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>

      {isOpen && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stamps.map((stamp) => (
            <StampCard key={stamp.id} stamp={stamp} />
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Main component that displays all available verification stamps organized by category.
 *
 * Stamps are grouped into two sections:
 * - Physical Verification: Real-world identity verification methods
 * - Blockchain Networks and Activities: On-chain activity verification
 *
 * Each section is collapsible and displays stamps in a responsive grid layout.
 */
export function StampsList() {
  return (
    <div className="space-y-6">
      <Section
        title="Physical Verification"
        description="Includes verification methods that require verifying a real-world object or biometrics"
        icon={<Camera className="h-6 w-6" />}
        stamps={PHYSICAL_STAMPS}
      />
      <Section
        title="Blockchain Networks and Activities"
        description="Verify onchain activity, token holdings, and participation in blockchain ecosystems"
        icon={<Globe className="h-6 w-6" />}
        stamps={BLOCKCHAIN_STAMPS}
      />
    </div>
  )
}
