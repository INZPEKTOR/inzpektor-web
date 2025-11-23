import { HeroWithGlobe } from "@/components/landing/hero-with-globe"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { EnterpriseBenefits } from "@/components/landing/enterprise-benefits"

/**
 * Main hero section component for the landing page.
 *
 * Composes three major sections:
 * - HeroWithGlobe: Main hero with rotating Earth visualization
 * - FeaturesGrid: Core platform features
 * - EnterpriseBenefits: Benefits for enterprise customers
 *
 * This component serves as the primary content above the fold
 * for the INZPEKTOR landing page.
 */
export function HeroSection() {
  return (
    <div className="relative w-full">
      <HeroWithGlobe />
      <FeaturesGrid />
      <EnterpriseBenefits />
    </div>
  )
}

export default HeroSection