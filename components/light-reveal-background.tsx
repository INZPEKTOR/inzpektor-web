"use client"

import { useEffect, useState } from "react"
import { ShieldCheck, UserX } from "lucide-react"
import type { MotionValue } from "framer-motion"

interface LightRevealBackgroundProps {
  lightX: MotionValue<number>
  lightY: MotionValue<number>
  isLightOn: boolean
}

interface BackgroundItem {
  id: number
  x: number
  y: number
  type: "binary" | "safe-user" | "malicious-user"
  content?: string
}

export function LightRevealBackground({ lightX, lightY, isLightOn }: LightRevealBackgroundProps) {
  const [items, setItems] = useState<BackgroundItem[]>([])
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 })

  // Generate Matrix-style binary code background
  useEffect(() => {
    const generateItems = () => {
      const newItems: BackgroundItem[] = []
      let id = 0

      // Generate dense binary code in rows (Matrix style)
      const rows = 15
      const cols = 35
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Add some randomness to positioning for natural look
          const xOffset = (Math.random() - 0.5) * 2
          const yOffset = (Math.random() - 0.5) * 2
          
          newItems.push({
            id: id++,
            x: (col / cols) * 100 + xOffset,
            y: (row / rows) * 100 + yOffset,
            type: "binary",
            content: Math.random() > 0.5 ? "1" : "0"
          })
        }
      }

      // Generate safe user icons (scattered throughout)
      for (let i = 0; i < 15; i++) {
        newItems.push({
          id: id++,
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: "safe-user"
        })
      }

      // Generate malicious user icons (scattered throughout)
      for (let i = 0; i < 10; i++) {
        newItems.push({
          id: id++,
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: "malicious-user"
        })
      }

      setItems(newItems)
    }

    generateItems()
  }, [])

  // Track light position
  useEffect(() => {
    const unsubX = lightX.on("change", (x) => {
      setLightPosition(prev => ({ ...prev, x }))
    })
    const unsubY = lightY.on("change", (y) => {
      setLightPosition(prev => ({ ...prev, y }))
    })

    return () => {
      unsubX()
      unsubY()
    }
  }, [lightX, lightY])

  const calculateOpacity = (itemX: number, itemY: number) => {
    if (!isLightOn) return 0

    // Convert percentage to pixels (assuming 600px height container)
    const itemPxX = (itemX / 100) * 1000 // approximate width
    const itemPxY = (itemY / 100) * 600

    const distance = Math.sqrt(
      Math.pow(lightPosition.x - itemPxX, 2) + 
      Math.pow(lightPosition.y - itemPxY, 2)
    )

    // Reveal radius - items within this distance become visible
    const revealRadius = 180
    
    if (distance > revealRadius) return 0
    
    // Smooth fade based on distance
    return Math.max(0, 1 - (distance / revealRadius))
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => {
        const opacity = calculateOpacity(item.x, item.y)
        
        return (
          <div
            key={item.id}
            className="absolute transition-opacity duration-200"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              opacity: opacity,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {item.type === "binary" && (
              <span 
                className="text-xl font-mono font-bold text-emerald-400 select-none"
                style={{
                  textShadow: opacity > 0.5 ? '0 0 8px rgba(52, 211, 153, 0.8)' : 'none',
                }}
              >
                {item.content}
              </span>
            )}
            {item.type === "safe-user" && (
              <ShieldCheck 
                className="w-10 h-10 text-emerald-400" 
                style={{
                  filter: opacity > 0.5 ? 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))' : 'none',
                }}
              />
            )}
            {item.type === "malicious-user" && (
              <UserX 
                className="w-10 h-10 text-red-500" 
                style={{
                  filter: opacity > 0.5 ? 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))' : 'none',
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
