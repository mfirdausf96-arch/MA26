'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const MEDIA = {
  // 1. Hero Background & Card Photo (Path sudah diperbaiki)
  heroBg: '/images/IMG_9549.JPG',
  heroCard: '/images/IMG_2777.JPG',

  // 2. Section Lainnya
  retreat: '/images/IMG_9492.JPG',
  activity: '/images/IMG_9525.JPG',
  facility: '/images/IMG_3242.JPG',
  community: '/images/DEKAN MA (1).mov',

  // 3. Video Recap
  recapVideo: '/images/AFTER MOVIE MUSLIM ADVENTURE.mp4',
}

const nav = [
  ['Home', '/'],
  ['Benefit', '/benefit'],
  ['Fasilitas', '/fasilitas'],
  ['About', '/about'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <Image 
          src="/images/TEMA MA_20260724_000706_0000 (1).png" 
          alt="Muslim Adventure" 
          width={48} 
          height={48} 
          className="brand-mark" 
        />
        <span>MUSLIM<br /><i>ADVENTURE 2026</i></span>
      </Link>
      <button 
        className="menu-button" 
        aria-label="Toggle navigation" 
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href="/about#register" onClick={() => setOpen(false)}>
          Ikut Sekarang <span>↗</span>
        </Link>
      </nav>
    </header>
  )
}

export function Footer() { 
  return (
    <footer className="footer">
      <div>
        <span className="eyebrow">MUSLIM ADVENTURE 2026</span>
        <h2>See you at<br /><em>the wild.</em></h2>
      </div>
      <div className="footer-right">
        <p>Cozy. Mindful. Meaningful.<br />A space to become more.</p>
        <Link className="arrow-link" href="/about#register">Daftar sekarang <span>↗</span></Link>
      </div>
    </footer>
  ) 
}

export function Media({ 
  src, 
  className = '', 
  label = 'YOUR PHOTO / VIDEO HERE',
  controls = false,
  overlay = true
}: { 
  src?: string; 
  className?: string; 
  label?: string;
  controls?: boolean;
  overlay?: boolean;
}) { 
  const mediaSrc = src || '/placeholder.jpg'
  // Ditambahkan .mov agar video Dekan terdeteksi sebagai elemen <video>
  const isVideo = mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.webm') || mediaSrc.endsWith('.mov')

  return (
    <div className={`media ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {isVideo ? (
        <video 
          src={mediaSrc} 
          autoPlay={!controls}
          controls={controls}
          muted={!controls} /* Autoplay wajib muted */
          playsInline 
          style={{ width: '70%', height: '70%', objectFit: 'cover' }} 
        />
      ) : (
        <div 
          style={{ 
            width: '100%', 
            height: '100%',
            backgroundImage: overlay ? `linear-gradient(180deg, transparent 30%, rgba(5,15,18,.78)), url('${mediaSrc}')` : `url('${mediaSrc}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
      )}
      <span className="media-label">{label}</span>
    </div>
  )
}

export function RecapButton() { 
  const [show, setShow] = useState(false)
  
  return (
    <>
      <button className="recap-button" onClick={() => setShow(true)}>
        <span className="play">▶</span> Watch recap
      </button>

      {show && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Event recap">
          <button className="modal-close" onClick={() => setShow(false)}>Close ×</button>
          
          <Media 
            src={MEDIA.recapVideo} /* Menggunakan variabel MEDIA yang bersih */
            className="modal-media" 
            label="EVENT RECAP VIDEO"
            controls={true}
          />
        </div>
      )}
    </>
  ) 
}

export function Shell({ children }: { children: React.ReactNode }) { 
  return <><Header /><main>{children}</main><Footer /></> 
}

export function PageIntro({ kicker, title, accent }: { kicker: string; title: string; accent: string }) { 
  return (
    <section className="page-intro">
      <span className="eyebrow">{kicker}</span>
      <h1>{title}<br /><em>{accent}</em></h1>
    </section>
  ) 
}

export function FAQ() { 
  const items = [
    ['Who can join?', 'Anyone who wants to reconnect with faith, nature, and a warm Muslim community.'], 
    ['What should I bring?', 'Comfortable outdoor clothes, personal essentials, and an open heart.'], 
    ['Is this family friendly?', 'Absolutely. Our activities are designed for friends, families, and solo adventurers.']
  ]
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}<span>+</span></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  ) 
}

export function Stat({ number, label }: { number: string; label: string }) { 
  return (
    <div className="stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  ) 
}
