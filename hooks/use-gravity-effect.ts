"use client"
import { useEffect, type MutableRefObject } from "react"
import type { MotionValue } from "framer-motion"

/**
 * Props for the useGravityEffect hook.
 */
interface GravityEffectProps {
  /** Anchor point where the object is attached */
  anchor: { x: number; y: number }
  /** Rest position where the object naturally settles */
  restPosition: { x: number; y: number }
  /** Motion value for X position */
  x: MotionValue<number>
  /** Motion value for Y position */
  y: MotionValue<number>
  /** Motion value for rotation angle */
  rotation: MotionValue<number>
  /** Ref indicating whether the object is currently being dragged */
  isDraggingRef: MutableRefObject<boolean>
}

/**
 * Custom hook that applies spring-based gravity physics to an object.
 *
 * This hook simulates realistic pendulum-like motion with:
 * - Spring force pulling the object back to its rest position
 * - Velocity-based momentum for natural swinging motion
 * - Progressive damping that increases with each oscillation
 * - Rotation based on horizontal displacement and velocity
 *
 * @param props - The gravity effect configuration
 */
export function useGravityEffect({ anchor, restPosition, x, y, rotation, isDraggingRef }: GravityEffectProps) {
  useEffect(() => {
    // Physics variables for fine-grained control
    const velocityX = { current: 0 }
    const velocityY = { current: 0 }
    const bounceCountX = { current: 0 }
    const bounceCountY = { current: 0 }
    const lastVelocityX = { current: 0 }
    const lastVelocityY = { current: 0 }

    let frameId: number
    let lastTime = performance.now()

    const applyGravity = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastTime) / 16, 2)
      lastTime = currentTime

      if (isDraggingRef.current) {
        // Reset counters when dragging starts
        velocityX.current = x.getVelocity() / 60
        velocityY.current = y.getVelocity() / 60
        bounceCountX.current = 0
        bounceCountY.current = 0
        frameId = requestAnimationFrame(applyGravity)
        return
      }

      const currentY = y.get()
      const currentX = x.get()
      const dx = restPosition.x - currentX
      const dy = restPosition.y - currentY

      // Spring force (elasticity)
      const springForceX = dx * 0.04 * deltaTime
      const springForceY = dy * 0.04 * deltaTime
      velocityX.current += springForceX
      velocityY.current += springForceY

      // Detect oscillations to increase damping
      if (Math.sign(velocityX.current) !== Math.sign(lastVelocityX.current) && lastVelocityX.current !== 0) {
        bounceCountX.current += 1
      }
      if (Math.sign(velocityY.current) !== Math.sign(lastVelocityY.current) && lastVelocityY.current !== 0) {
        bounceCountY.current += 1
      }
      lastVelocityX.current = velocityX.current
      lastVelocityY.current = velocityY.current

      // Progressive damping: gets stronger with each oscillation
      const baseDamping = 0.96
      const progressiveDampingX = Math.pow(baseDamping, 1 + bounceCountX.current * 0.3)
      const progressiveDampingY = Math.pow(baseDamping, 1 + bounceCountY.current * 0.3)
      velocityX.current *= progressiveDampingX
      velocityY.current *= progressiveDampingY

      x.set(currentX + velocityX.current)
      y.set(currentY + velocityY.current)

      // Calculate rotation based on position offset and velocity
      const positionOffset = (currentX - anchor.x) / 30
      const velocityOffset = velocityX.current / 8
      rotation.set(positionOffset + velocityOffset)

      frameId = requestAnimationFrame(applyGravity)
    }
    frameId = requestAnimationFrame(applyGravity)
    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [anchor, restPosition, x, y, rotation, isDraggingRef])
}
