"use client"

import { motion, type MotionValue } from "framer-motion"

/**
 * Props for the Lamp component.
 */
interface LampProps {
  /** Current X position of the lamp */
  x: MotionValue<number>
  /** Current Y position of the lamp */
  y: MotionValue<number>
  /** Current rotation angle of the lamp */
  rotation: MotionValue<number>
  /** Anchor point where the lamp cord attaches */
  anchor: { x: number; y: number }
  /** Whether the lamp light is currently on */
  isLightOn: boolean
  /** Handler for pointer down events on the lamp body */
  onPointerDown: (e: React.PointerEvent) => void
  /** Handler for cord pull events to toggle the light */
  onCordPull: () => void
}

/**
 * Lamp component that renders an interactive hanging lamp with physics-based movement.
 *
 * The lamp consists of:
 * - A cord line connecting the anchor point to the lamp body
 * - A draggable lamp body that responds to pointer events
 * - A clickable area below the lamp for toggling the light via cord pull
 *
 * @param props - The lamp properties including position, rotation, and event handlers
 */
export function Lamp({ x, y, rotation, anchor, onPointerDown, onCordPull }: LampProps) {
  return (
    <>
      {/* Cord line connecting anchor to lamp */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
        <motion.line
          x1={anchor.x}
          y1={anchor.y}
          x2={x}
          y2={y}
          stroke="#141414"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>

      {/* Draggable lamp body */}
      <motion.div
        className="absolute z-20 cursor-grab active:cursor-grabbing"
        style={{
          x, y, rotate: rotation, width: 120, height: 150,
          originX: "50%", originY: "0%", translateX: "-50%", translateY: "-15px",
        }}
        onPointerDown={onPointerDown}
      >
        {/* Lamp image */}
        <img
          src="/lampara.png"
          alt="Hanging lamp"
          className="absolute top-[-38px] inset-0 w-full h-full object-contain pointer-events-none z-10"
        />
        {/* Clickable area for cord pull to toggle light */}
        <div
          className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-20 h-24 cursor-pointer z-20"
          onClick={onCordPull}
        />
      </motion.div>
    </>
  )
}
