'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import type { ReactNode } from 'react'

export function Marquee({ items }: { items: string[]; tone?: 'sunset' | 'gold' }) {
  const track = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <i>·</i>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 200px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px 200px 0px' }}
      transition={{ staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 25 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}

const stickerRotations = [-8, 6, -4, 9, -6, 4]

export function Sticker({ children, i = 0, tone = 'gold' }: { children: ReactNode; i?: number; tone?: 'gold' | 'sunset' | 'sky' }) {
  const rotate = stickerRotations[i % stickerRotations.length]
  return (
    <motion.span
      className={`sticker sticker-${tone}`}
      style={{ rotate }}
      whileHover={{ rotate: 0, scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.span>
  )
}

export function Polaroid({
  src,
  alt,
  i,
  size,
}: {
  src: string
  alt: string
  i: number
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <motion.div
      className={`polaroid polaroid-${size || 'md'}`}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px 200px 0px' }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="polaroid-photo">
        <img src={src} alt={alt} loading="lazy" />
        <span className="polaroid-caption">{alt}</span>
      </div>
    </motion.div>
  )
}

export function Blob({ className = '' }: { className?: string }) {
  return (
    <svg className={`blob ${className}`} viewBox="0 0 200 200" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M45.3,-58.4C58.6,-49.9,69.1,-35.5,73.4,-19.5C77.7,-3.6,75.8,14,68.2,28.5C60.7,43,47.5,54.4,32.6,62.2C17.7,70,1.2,74.1,-15.9,72.8C-33,71.5,-50.7,64.7,-62.1,52C-73.6,39.3,-78.8,20.6,-77.8,2.9C-76.9,-14.9,-69.8,-29.8,-58.8,-38.9C-47.9,-48,-33.1,-51.4,-19.1,-59.1C-5.1,-66.8,8.1,-78.8,22.1,-77.6C36.1,-76.4,45.3,-58.4,45.3,-58.4Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
