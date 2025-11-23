"use client"
import LightRays from "../light-rays"
import type { MotionValue } from "framer-motion"

/**
 * Background effects component that renders light rays and gradient overlays.
 *
 * This component creates the atmospheric lighting effects for the hero section,
 * including:
 * - Dynamic light rays that follow a moving light source
 * - Bottom gradient fade for depth
 *
 * The light rays respond to the light toggle state, fading out when turned off.
 *
 * @param dynamicOrigin - Motion values for the light source position
 * @param isLightOn - Whether the light effect is currently active
 */
export function BackgroundEffects({
  dynamicOrigin,
  isLightOn
}: {
  dynamicOrigin: { x: MotionValue<number>; y: MotionValue<number> }
  isLightOn: boolean
}) {
  return (
    <>
      <LightRays
        dynamicOrigin={dynamicOrigin}
        raysOrigin="top-center"
        raysColor={isLightOn ? "#F5F3E6" : "#00000000"} 
        lightSpread={isLightOn ? 0.5 : 0}
        rayLength={isLightOn ? 2.0 : 0}
        fadeDistance={isLightOn ? 1.2 : 0}
        saturation={1.2}
        className="absolute inset-0 transition-all duration-500"
      />
      
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, #000000 6%, transparent 50%)" }}
      />
    </>
  )
}
