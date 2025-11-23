"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { BackgroundEffects } from "./shared/solution-hero-background"
import { LightRevealBackground } from "./light-reveal-background"
import { useGravityEffect } from "@/hooks/use-gravity-effect"
import { useInitElasticBoxPositions } from "@/hooks/use-init-elastic-box-positions"
import { Lamp } from "./lamp"
import { RealisticSwitch } from "./realistic-switch"
import "../app/light-widget-switch.css"

/**
 * Interactive light widget demonstration component.
 *
 * This component creates an interactive demonstration showing the concept of
 * "illumination" in the INZPEKTOR system - revealing hidden information with light.
 *
 * Features:
 * - Draggable hanging lamp with physics-based motion
 * - Toggle switch to turn light on/off
 * - Light reveals hidden content (safe users, malicious actors, binary code)
 * - Cord pull interaction to toggle the light
 *
 * The widget demonstrates how INZPEKTOR illuminates hidden risks and actors
 * in the blockchain ecosystem while maintaining privacy.
 */
export function LightWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const [isLightOn, setIsLightOn] = useState(true)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotation = useMotionValue(0)

  const { isPositioned, anchor, restPosition } = useInitElasticBoxPositions(containerRef, x, y)
  useGravityEffect({ anchor, restPosition, x, y, rotation, isDraggingRef })

  /**
   * Handles pointer movement while dragging the lamp.
   * Updates the lamp position based on cursor position within the container.
   */
  const handlePointerMove = (e: PointerEvent) => {
    if (isDraggingRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }
  }

  /**
   * Handles pointer release to end dragging.
   * Cleans up event listeners.
   */
  const handlePointerUp = () => {
    isDraggingRef.current = false
    window.removeEventListener("pointermove", handlePointerMove)
    window.removeEventListener("pointerup", handlePointerUp)
  }

  /**
   * Handles pointer down on the lamp to start dragging.
   * Sets up event listeners for move and release.
   */
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    const target = e.target as HTMLElement
    target.setPointerCapture(e.pointerId)
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerup", handlePointerUp)
  }

  /**
   * Toggles the light on/off state.
   */
  const handleToggle = () => {
    setIsLightOn((prev) => !prev)
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm touch-none"
      style={{ background: "radial-gradient(circle, #1E293B 0%, #0F172A 100%)" }}
    >
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ backgroundColor: '#020617' }}
        animate={{ opacity: isLightOn ? 0 : 0.85 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="absolute top-4 left-4 z-50 light-widget-scope">
        <RealisticSwitch 
          isOn={isLightOn} 
          onToggle={handleToggle} 
          orientation="vertical"
        />
      </div>

      <div className="absolute inset-0 z-0">
        <BackgroundEffects 
          dynamicOrigin={{ x, y }}
          isLightOn={isLightOn} 
        />
      </div>

      <div className="absolute inset-0 z-10">
        <LightRevealBackground 
          lightX={x}
          lightY={y}
          isLightOn={isLightOn}
        />
      </div>

      {isPositioned && (
        <Lamp
          x={x}
          y={y}
          rotation={rotation}
          anchor={anchor}
          isLightOn={isLightOn}
          onPointerDown={handlePointerDown}
          onCordPull={handleToggle}
        />
      )}
    </div>
  )
}
