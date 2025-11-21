import { HeroWithGlobe } from "@/components/landing/hero-with-globe"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { EnterpriseBenefits } from "@/components/landing/enterprise-benefits"

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