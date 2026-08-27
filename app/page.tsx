import Link from 'next/link'
import { MEDIA, Media, RecapButton, Shell, Stat } from '@/components/event-site'

export default function Home() {
  return (
    <Shell>
      {/* 
        Hero Section dengan Background Photo + Gradient Overlay 
      */}
      <section 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(7, 25, 29, 0.85), rgba(7, 25, 29, 0.85)), url('${MEDIA.heroBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Teks Kiri */}
        <div className="hero-copy">
          <span className="eyebrow">
            Cozy Atmosphere, Mindful Purpose, Fellowship in Radiant Energy
          </span>
          <h1>
            Muslim<br />
            <em>Adventure 2026</em>
          </h1>
          <p>
            Muslim Adventure is where faith meets the wild. A three-day journey
            to reconnect, recharge, and grow together.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/about#register">
              Join the Adventure <span>↗</span>
            </Link>
            <RecapButton />
          </div>
        </div>

        {/* Note Tanggal di Kiri Bawah */}
        <div className="hero-note">
          25 - 27 <br />
          <span>AUGUST 2026 · MADANI FOREST, SUBANG</span>
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement">
        <span className="eyebrow">WHY MUSLIM ADVENTURE?</span>
        <h2>
          More than a trip.<br />
          <em>A meaningful core memory.</em>
        </h2>
        <div className="statement-bottom">
          <p>
            Cozy, Mindful, & Meaningful. Suasana nyaman & menyatu dengan alam,
            Mentoring interaktif & personal, Fasilitas lengkap, Panitia
            responsif, Refleksi diri, dan Interaksi dengan Sang Pencipta
          </p>
          <Link className="arrow-link" href="/benefit">
            Discover the experience <span>↗</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <Stat number="03" label="Days in nature" />
        <Stat number="05+" label="Meaningful activities" />
        <Stat number="∞" label="New connections" />
      </section>
    </Shell>
  )
}