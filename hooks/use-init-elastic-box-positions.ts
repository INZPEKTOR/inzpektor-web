"use client"
import { useState, useEffect, type RefObject } from "react"
import type { MotionValue } from "framer-motion"

/**
 * State returned by the useInitElasticBoxPositions hook.
 */
interface PositionState {
  /** Whether initial positions have been calculated */
  isPositioned: boolean
  /** Anchor point at the top center of the container */
  anchor: { x: number; y: number }
  /** Rest position where the object naturally settles */
  restPosition: { x: number; y: number }
}

/**
 * Custom hook that calculates and manages initial positions for an elastic/spring-based object.
 *
 * This hook:
 * - Calculates the anchor point (top center of container)
 * - Sets the rest position (where the object naturally hangs)
 * - Updates positions on window resize
 * - Sets initial motion values when first positioned
 *
 * @param containerRef - Reference to the container element
 * @param x - Motion value for X position
 * @param y - Motion value for Y position
 * @returns Position state with anchor and rest positions
 */
export function useInitElasticBoxPositions(
  containerRef: RefObject<HTMLDivElement | null>,
  x: MotionValue<number>,
  y: MotionValue<number>,
): PositionState {
  const [positionState, setPositionState] = useState<PositionState>({
    isPositioned: false,
    anchor: { x: 0, y: 0 },
    restPosition: { x: 0, y: 0 },
  })

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2

      const newPositions = {
        isPositioned: true,
        anchor: { x: centerX, y: 0 },
        // Position the lamp higher in the container
        // A smaller value (0.15) means closer to the top of the screen
        restPosition: { x: centerX, y: rect.height * 0.15 },
      }

      setPositionState(newPositions)

      if (!positionState.isPositioned) {
        x.set(newPositions.restPosition.x)
        y.set(newPositions.restPosition.y)
      }
    }
    updatePositions()
    window.addEventListener("resize", updatePositions)
    return () => window.removeEventListener("resize", updatePositions)
  }, [containerRef, x, y, positionState.isPositioned])

  return positionState
}
