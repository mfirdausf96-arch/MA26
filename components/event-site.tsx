'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Heart,
  Sparkles,
  MapPin,
  Calendar,
  Wallet,
  Backpack,
  MessageCircle,
  Tent,
  Sunrise,
  UsersRound,
  ChefHat,
  Flag,
  Utensils,
  PartyPopper,
  Sprout,
  Megaphone,
  Menu,
  X,
  GraduationCap,
  Gift,
  Bus,
  HeartPulse,
  Signal,
  Mail,
} from 'lucide-react'

function InstagramIcon({ size = 24, strokeWidth = 2, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { EVENT_START, GALERI, LOCATION_MAPS_URL, MEDIA, REGISTER_URL, SURAT_MABIM_URL, WA_URL } from '@/lib/media'
import { Polaroid } from './bits'

const nav = [
  ['Tentang', '#tentang'],
  ['Manfaat', '#manfaat'],
  ['Fasilitas', '#fasilitas'],
  ['Kegiatan', '#kegiatan'],
  ['Galeri', '#galeri'],
  ['Info', '#info'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <Image src={MEDIA.logo} alt="Muslim Adventure" width={48} height={48} className="brand-mark" />
        <span>
          MUSLIM
          <br />
          <i>ADVENTURE 2026</i>
        </span>
      </Link>
      <button className="menu-button" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href={REGISTER_URL} target="_blank" onClick={() => setOpen(false)}>
          Daftar Sekarang
        </Link>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow">See You There</span>
          <h2>
            Pack your bag,<br />
            <em>we handle the rest.</em>
          </h2>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <strong>Kontak</strong>
            <Link href="mailto:muslimadventure@gmail.com">
              <Mail size={16} strokeWidth={1.8} /> muslimadventure@gmail.com
            </Link>
            <Link href="https://instagram.com/temanbertumbuh" target="_blank">
              <InstagramIcon size={16} strokeWidth={1.8} /> @temanbertumbuh
            </Link>
            <Link href={WA_URL} target="_blank">
              <MessageCircle size={16} strokeWidth={1.8} /> WhatsApp Panitia
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Diselenggarakan oleh FSI Al-Biruni, Fakultas Teknik UNJ.</p>
        <Link className="arrow-link" href={REGISTER_URL} target="_blank">
          Daftar Sekarang
        </Link>
      </div>
    </footer>
  )
}

export function Media({
  src,
  className = '',
  label,
  controls = false,
  overlay = true,
}: {
  src?: string
  className?: string
  label?: string
  controls?: boolean
  overlay?: boolean
}) {
  const mediaSrc = src || '/placeholder.jpg'
  const isVideo = mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.webm') || mediaSrc.endsWith('.mov')

  return (
    <div className={`media ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {isVideo ? (
        <video
          src={mediaSrc}
          autoPlay={!controls}
          controls={controls}
          muted={!controls}
          loop={!controls}
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Image
          src={mediaSrc}
          alt={label || 'Muslim Adventure 2026'}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      )}
      {overlay && <div className="media-overlay" />}
      {label && <span className="media-label">{label}</span>}
    </div>
  )
}

export function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label="Recap Muslim Adventure"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button className="modal-close" onClick={onClose} autoFocus>
        Tutup ×
      </button>
      <Media src={MEDIA.recapVideo} className="modal-media" controls overlay={false} />
    </div>
  )
}

export function RecapButton() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className="recap-button" onClick={() => setShow(true)}>
        <span className="play">▶</span> Tonton Recap
      </button>

      {show && <VideoModal onClose={() => setShow(false)} />}
    </>
  )
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export function DekanSection() {
  return (
    <section className="section-pad block-paper" id="tentang-mabim">
      <div className="dekan-card">
        <div className="dekan-media-wrapper">
          <Media src={MEDIA.sambutanDekan} className="dekan-media" label="Sambutan Dekan FT UNJ" controls />
        </div>
        <div className="dekan-copy">
          <span className="eyebrow">Apa kata Dekan Fakultas Teknik UNJ</span>
          <blockquote className="dekan-quote">Muslim Adventure 2026, jalan-jalan berfaedah.</blockquote>
          <div className="dekan-attribution">
            <strong>Dekan Fakultas Teknik</strong>
            <span>Universitas Negeri Jakarta</span>
          </div>
          <div className="mabim-notice">
            <Megaphone size={18} strokeWidth={1.7} />
            <p>
              Tercantum dalam surat agenda MABIM dan wajib diikuti seluruh mahasiswa baru Fakultas Teknik.
              Surat Pemberitahuan Dekan FT UNJ No. B/2472/5.FT/KM/VII/2026.
            </p>
          </div>
          <Link href={SURAT_MABIM_URL} target="_blank" className="arrow-link">
            Baca Surat Pemberitahuan (PDF)
          </Link>
        </div>
      </div>
    </section>
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

const pilars = [
  {
    photo: '/images/galeri-9.jpg',
    title: 'Cozy',
    desc: 'Tenda, api unggun, dan obrolan yang biasanya baru berhenti lewat tengah malam.',
  },
  {
    photo: '/images/galeri-5.jpg',
    title: 'Mindful & Meaningful',
    desc: 'Ada jeda untuk diam sejenak, jauh dari notifikasi dan tugas kuliah.',
  },
  {
    photo: '/images/galeri-4.jpg',
    title: 'Panitia Siap',
    desc: 'Logistik sudah diurus panitia. Kamu tinggal datang dan ikut rangkaiannya.',
  },
]

export function PilarGrid() {
  return (
    <div className="pilar-grid">
      {pilars.map(({ photo, title, desc }) => (
        <article className="pilar-card" key={title} style={{ backgroundImage: `url('${photo}')` }}>
          <div className="pilar-card-body">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

const benefits = [
  { icon: Sunrise, text: 'Bangun pagi di dataran tinggi, bukan di kamar kos' },
  { icon: UsersRound, text: 'Mentoring bareng kakak FSI Al-Biruni, bukan seminar satu arah' },
  { icon: Tent, text: 'Kenal satu angkatan sebelum semester benar-benar mulai' },
  { icon: Sparkles, text: 'Waktu untuk berpikir ulang soal arah kuliah dan ibadah' },
]

export function BenefitList() {
  return (
    <ul className="benefit-list">
      {benefits.map(({ icon: Icon, text }) => (
        <li key={text}>
          <Icon size={20} strokeWidth={1.6} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

const facilities = [
  { icon: GraduationCap, title: 'Training & mentoring', desc: 'Dipandu mentor FSI Al-Biruni.' },
  { icon: Tent, title: 'Tenda 3 hari 2 malam', desc: 'Sudah disiapkan panitia di lokasi.' },
  { icon: Gift, title: 'Welcome drink & merchandise', desc: 'Dibagikan di hari pertama.' },
  { icon: Bus, title: 'Transportasi pulang-pergi', desc: 'Bis pariwisata. Titik kumpul menyusul.' },
  { icon: HeartPulse, title: 'Tim kesehatan', desc: 'KSR UNJ standby, ada UKS di lokasi.' },
  { icon: Signal, title: 'Sinyal aman', desc: 'Masih bisa kabari orang rumah.' },
]

export function FacilityGrid() {
  return (
    <div className="facility-grid">
      {facilities.map(({ icon: Icon, title, desc }, i) => (
        <div className="facility-card" key={title}>
          <span className="facility-no">{String(i + 1).padStart(2, '0')}</span>
          <Icon size={24} strokeWidth={1.6} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  )
}

const timeline = [
  { icon: Flag, title: 'Tracking & Keberangkatan', desc: 'Berangkat bareng satu rombongan naik bis dari titik kumpul.' },
  { icon: Sunrise, title: 'Salat Berjamaah', desc: 'Buka rangkaian acara dengan salat berjamaah di udara gunung.' },
  { icon: UsersRound, title: 'Mentoring & Sharing', desc: 'Ngobrol soal kuliah dan iman bareng mentor. Santai, bukan digurui.' },
  { icon: ChefHat, title: 'Cooking Time', desc: 'Masak bareng per kelompok. Ribut soal bumbu itu bagian serunya.' },
  { icon: Tent, title: 'Outbound', desc: 'Permainan kelompok yang bikin ketahuan siapa MVP timnya.' },
  { icon: Utensils, title: 'Mindful Eating', desc: 'Makan pelan-pelan tanpa HP. Ternyata lebih terasa.' },
  { icon: PartyPopper, title: 'Night Festival', desc: 'Api unggun, musik, dan cerita sampai malam.' },
  { icon: Sprout, title: 'Berkebun & Treasure Hunt', desc: 'Tutup acara sambil kotor-kotoran dan berburu petunjuk terakhir.' },
]

export function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map(({ icon: Icon, title, desc }, i) => (
        <li key={title} className="timeline-item">
          <span className="timeline-no">{String(i + 1).padStart(2, '0')}</span>
          <div className="timeline-body">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <Icon className="timeline-icon" size={26} strokeWidth={1.4} />
        </li>
      ))}
    </ol>
  )
}

function GalleryRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const track = [...items, ...items]
  return (
    <div className="gallery-row">
      <div className={reverse ? 'gallery-track gallery-track-reverse' : 'gallery-track'}>
        {track.map((src, i) => (
          <figure className="gallery-item" key={`${src}-${i}`}>
            <img src={src} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Gallery() {
  const half = Math.ceil(GALERI.length / 2)
  return (
    <div className="gallery">
      <GalleryRow items={GALERI.slice(0, half)} />
      <GalleryRow items={GALERI.slice(half)} reverse />
    </div>
  )
}

export function AfterMovie() {
  const [show, setShow] = useState(false)
  return (
    <section
      className="aftermovie"
      id="aftermovie"
      style={{ backgroundImage: `url('${MEDIA.registerBg}')` }}
    >
      <div className="aftermovie-inner">
        <span className="eyebrow">After Movie</span>
        <h2>
          After movie<br />
          <em>Muslim Adventure 2025</em>
        </h2>
        <p>Rekaman lengkap Muslim Adventure 2025 di Madani Forest.</p>
        <button className="button" onClick={() => setShow(true)}>
          <span className="play">▶</span> Putar After Movie
        </button>
      </div>
      {show && <VideoModal onClose={() => setShow(false)} />}
    </section>
  )
}

export function Countdown() {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null)

  useEffect(() => {
    const target = new Date(EVENT_START).getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!left) return <div className="countdown" aria-hidden />

  return (
    <div className="countdown">
      {[
        ['Hari', left.d],
        ['Jam', left.h],
        ['Menit', left.m],
        ['Detik', left.s],
      ].map(([label, val]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(val).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function InfoPraktis() {
  return (
    <div className="ticket">
      <div className="info-map-card">
        <iframe
          src="https://www.google.com/maps?q=Madani+Forest+Kasomalang+Subang&output=embed"
          title="Peta lokasi Madani Forest"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="info-map-overlay">
          <strong>
            <MapPin size={15} strokeWidth={2} /> Madani Forest
          </strong>
          <p>Jl. Bantarpanjang, Pasanggrahan, Kasomalang, Kab. Subang</p>
          <Link href={LOCATION_MAPS_URL} target="_blank" className="info-link">
            Buka di Google Maps
          </Link>
        </div>
      </div>

      <div className="info-rows">
        <div className="info-row info-row-lead">
          <Calendar size={20} strokeWidth={1.7} />
          <div>
            <strong>Tanggal</strong>
            <p className="info-headline">26 – 28 September 2026</p>
            <span className="info-note">Pra Muslim Adventure: 12 September 2026</span>
          </div>
        </div>
        <div className="info-row">
          <Wallet size={20} strokeWidth={1.7} />
          <div>
            <strong>Sudah termasuk</strong>
            <p>Training, tenda 3 hari 2 malam, welcome drink, merchandise, dan transportasi pulang-pergi.</p>
          </div>
        </div>
        <div className="info-row">
          <Backpack size={20} strokeWidth={1.7} />
          <div>
            <strong>Yang perlu dibawa</strong>
            <p>Jaket atau baju hangat, perlengkapan salat, dan obat-obatan pribadi. Lokasi berada di dataran tinggi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhatsAppFab() {
  return (
    <Link
      className="wa-fab"
      href={WA_URL}
      target="_blank"
      aria-label="Tanya panitia via WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={2} />
      <span>Tanya Panitia</span>
    </Link>
  )
}

export function FAQ() {
  const items = [
    ['Kegiatan ini untuk siapa saja?', 'Untuk mahasiswa baru Fakultas Teknik yang ingin mencari ketenangan, membangun pertemanan baru, dan siap beraktivitas di alam terbuka.'],
    ['Apa saja yang perlu dibawa?', 'Pakaian yang nyaman untuk kegiatan luar ruangan, jaket atau baju hangat (lokasi berada di dataran tinggi), perlengkapan salat, dan obat-obatan pribadi.'],
    ['Biaya pendaftaran sudah termasuk apa saja?', 'Training, tenda untuk 3 hari 2 malam, welcome drink, dan merchandise.'],
    ['Bagaimana dengan transportasi?', 'Transportasi disediakan oleh panitia menggunakan bis pariwisata, dari keberangkatan hingga kepulangan. Titik keberangkatan akan diinformasikan lebih lanjut.'],
    ['Kapan rangkaian acara berlangsung?', 'Pra Muslim Adventure dilaksanakan pada 12 September 2026, dan Muslim Adventure utama pada 26-28 September 2026. Rundown lengkap akan diinformasikan menyusul.'],
    ['Apakah tersedia sinyal di Madani Forest?', 'Jaringan sinyal di lokasi cukup memadai. Meski begitu, kami menyarankan peserta untuk tetap fokus mengikuti rangkaian acara.'],
    ['Bagaimana jika peserta sakit selama kegiatan?', 'Panitia telah bekerja sama dengan KSR UNJ untuk penanganan medis, dan tersedia fasilitas UKS di lokasi kegiatan.'],
    ['Bagaimana jika berangkat sendiri, tanpa kenalan?', 'Tidak masalah. Banyak peserta yang datang sendiri dan pulang dengan pertemanan baru.'],
  ]
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span>+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function RegisterCTA({ id = 'daftar' }: { id?: string }) {
  return (
    <section
      className="register"
      id={id}
      style={{
        backgroundImage: `linear-gradient(rgba(10, 31, 43, 0.55), rgba(10, 31, 43, 0.85)), url('${MEDIA.registerBg}')`,
      }}
    >
      <div>
        <span className="eyebrow">26–28 September 2026 · Madani Forest, Subang</span>
        <h2>
          Kuota terbatas.<br />
          <em>Amankan tempatmu.</em>
        </h2>
      </div>
      <div className="register-actions">
        <Countdown />
        <Link className="button button-invert" href={REGISTER_URL} target="_blank">
          Daftar Sekarang
        </Link>
        <Link className="wa-link" href={WA_URL} target="_blank">
          <MessageCircle size={16} /> Tanya via WhatsApp
        </Link>
      </div>
    </section>
  )
}
