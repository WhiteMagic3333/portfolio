"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

const StarField = ({ count = 100 }) => {
  const [stars, setStars] = useState<{ id: number; size: number; x: number; y: number; duration: number; delay: number; }[]>([])
  const mounted = useMounted()

  useEffect(() => {
    if (mounted) {
      setStars(Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 0.5,
      })));
    }
  }, [mounted, count]);

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}
    </div>
  )
}

const Constellation = () => {
   const points = [
    // Outer star points (5-pointed star)
    { x: 160, y: 10 },  // Top point
    { x: 190, y: 70 },  // Top right point
    { x: 250, y: 70 },  // Bottom right point
    { x: 205, y: 110 }, // Bottom right inner
    { x: 220, y: 170 }, // Bottom point
    { x: 160, y: 140 }, // Bottom center
    { x: 100, y: 170 }, // Bottom left
    { x: 115, y: 110 }, // Bottom left inner
    { x: 70, y: 70 },   // Top left point
    { x: 130, y: 70 },  // Top left inner
    
    // Inner star points (connecting to center)
    { x: 160, y: 90 },  // Center point
  ]

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 180">
      {/* Star outline connections */}
      {[
        // Outer star perimeter
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
        // Inner star connections to center
        [0, 10], [2, 10], [4, 10], [6, 10], [8, 10]
      ].map(([startIdx, endIdx], i) => (
        <motion.line
          key={i}
          x1={points[startIdx].x}
          y1={points[startIdx].y}
          x2={points[endIdx].x}
          y2={points[endIdx].y}
          stroke="white"
          strokeWidth="0.3"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.2 + i * 0.08,
            ease: "circOut"
          }}
        />
      ))}
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={i === 10 ? 2.5 : 1.5} // Center point is larger
          fill="white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: i === 10 ? 1 : 0.8 }}
          transition={{ 
            type: "spring",
            stiffness: 150,
            delay: 1 + i * 0.1,
          }}
        />
      ))}
    </svg>
  )
}

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const mounted = useMounted()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center font-object-sans"
          initial={{ backgroundColor: "#ffffff" }}
          animate={{ backgroundColor: "#030712" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <StarField />
            <Constellation />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
