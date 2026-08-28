import Link from 'next/link'
import {
  AfterMovie,
  AgendaHighlight,
  BenefitList,
  DekanSection,
  FacilityGrid,
  FAQ,
  Gallery,
  PilarGrid,
  RecapButton,
  RecapVideoSlot,
  RegisterCTA,
  Shell,
  Stat,
  Timeline,
} from '@/components/event-site'
import { Marquee, Reveal } from '@/components/bits'
import { MEDIA, REGISTER_URL } from '@/lib/media'

const tickerItems = ['Muslim Adventure 2026', '25–27 September', 'Madani Forest, Subang', 'Masa Bimbingan Fakultas Teknik UNJ']

export default function Home() {
  return (
    <Shell>
      {/* 1. Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(7, 22, 32, 0.92) 0%, rgba(7, 22, 32, 0.72) 45%, rgba(7, 22, 32, 0.5) 100%), url('${MEDIA.heroBg}')`,
        }}
      >
        <div className="hero-copy">
          <span className="eyebrow">25–27 September 2026 · Madani Forest, Subang</span>
          <h1>
            Muslim <em>Adventure</em><br />
            <em>2026</em>
          </h1>
          <p>
            Muslim Adventure adalah titik temu antara iman dan alam bebas. Sebuah perjalanan tiga hari 
            untuk kembali terhubung, memulihkan energi, dan bertumbuh bersama.
          </p>
          <div className="hero-actions">
            <Link className="button" href={REGISTER_URL} target="_blank">
              Daftar Sekarang
            </Link>
            <RecapButton />
          </div>
        </div>
      </section>

      <Marquee items={tickerItems} tone="sunset" />

      <RecapVideoSlot />

      {/* 2. Tentang Acara / Konsep */}
      <section className="section-pad block-paper" id="tentang">
        <Reveal>
          <div className="section-head">
            <h2>Cozy, mindful, meaningful</h2>
            <p className="section-lead">
              Agenda Muslim Adventure 2026 merupakan agenda peningkatan kualitas diri dan spiritual bersama teman
              dan pembinaan oleh Mentor FSI Al-Biruni. Agenda ini merupakan rangkaian kegiatan yang dicantumkan
              dalam surat agenda Masa Bimbingan (MABIM) Fakultas Teknik UNJ.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <PilarGrid />
        </Reveal>
      </section>

      {/* Sambutan Dekan / Legitimasi MABIM */}
      <Reveal>
        <DekanSection />
      </Reveal>

      {/* 3. Manfaat */}
      <section className="section-pad block-ink why-join" id="manfaat">
        <Reveal className="why-join-copy">
          <span className="eyebrow">Kenapa ikut</span>
          <h2>
            Yang kamu bawa pulang<br />
            <em>selain foto.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <BenefitList />
        </Reveal>
      </section>

      {/* Fasilitas */}
      <section className="section-pad block-paper" id="fasilitas">
        <Reveal className="section-head">
          <span className="eyebrow">Fasilitas</span>
          <h2>Sudah termasuk biaya pendaftaran</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <FacilityGrid />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="stats">
        <Stat number="3" label="Hari, 2 malam" />
        <Stat number="8" label="Agenda kegiatan" />
        <Stat number="1" label="Kelompok, 1 tenda" />
      </section>

      {/* 4. Rangkaian Kegiatan */}
      <section className="section-pad timeline-section" id="kegiatan">
        <Reveal className="section-head">
          <span className="eyebrow">Rundown</span>
          <h2>Kegiatan selama tiga hari</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Timeline />
        </Reveal>
      </section>

      {/* After Movie */}
      <AfterMovie />

      {/* 5. Galeri Foto */}
      <section className="section-pad corkboard" id="galeri">
        <Reveal className="section-head">
          <span className="eyebrow">Dokumentasi</span>
          <h2>
            Muslim Adventure<br />
            <em>tahun lalu.</em>
          </h2>
        </Reveal>
        <Gallery />
      </section>

      {/* FAQ */}
      <section className="section-pad faq-section" id="faq">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <div className="section-head">
            <h2>Yang sering ditanyakan</h2>
          </div>
          <AgendaHighlight />
        </Reveal>
        <FAQ />
      </section>

      {/* 8. CTA / Pendaftaran */}
      <RegisterCTA />
    </Shell>
  )
}
