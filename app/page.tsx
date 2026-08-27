import Link from 'next/link'
import {
  AfterMovie,
  BenefitList,
  DekanSection,
  FacilityGrid,
  FAQ,
  Gallery,
  InfoPraktis,
  PilarGrid,
  RecapButton,
  RegisterCTA,
  Shell,
  Stat,
  Timeline,
} from '@/components/event-site'
import { Marquee, Reveal } from '@/components/bits'
import { MEDIA } from '@/lib/media'

const tickerItems = ['Muslim Adventure 2026', '26–28 September', 'Madani Forest, Subang', 'MABIM Fakultas Teknik UNJ']

export default function Home() {
  return (
    <Shell>
      {/* 1. Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 31, 43, 0.45), rgba(10, 31, 43, 0.8)), url('${MEDIA.heroBg}')`,
        }}
      >
        <div className="hero-copy">
          <span className="eyebrow">26–28 September 2026 · Madani Forest, Subang</span>
          <h1>
            Muslim<br />
            <em>Adventure 2026</em>
          </h1>
          <p>
            Tiga hari dua malam berkemah di Madani Forest, Subang. Agenda wajib mahasiswa baru
            Fakultas Teknik UNJ, digarap FSI Al-Biruni.
          </p>
          <div className="hero-actions">
            <Link className="button" href="#daftar">
              Daftar Sekarang
            </Link>
            <RecapButton />
          </div>
        </div>
      </section>

      <Marquee items={tickerItems} tone="sunset" />

      {/* 2. Tentang Acara / Konsep */}
      <section className="section-pad block-paper" id="tentang">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Yang kami pegang</span>
            <h2>Cozy, mindful, meaningful</h2>
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
      <section className="stats block-ink">
        <Stat number="3" label="Hari, 2 malam" />
        <Stat number="8" label="Agenda kegiatan" />
        <Stat number="1" label="Angkatan, satu tenda" />
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

      {/* 7. Info Praktis */}
      <section className="section-pad block-paper" id="info">
        <Reveal className="section-head">
          <span className="eyebrow">Info penting</span>
          <h2>Tanggal, lokasi, dan bawaan</h2>
        </Reveal>
        <InfoPraktis />
      </section>

      {/* FAQ */}
      <section className="section-pad block-paper faq-section">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <div className="section-head">
            <h2>Yang sering ditanyakan</h2>
          </div>
        </Reveal>
        <FAQ />
      </section>

      {/* 8. CTA / Pendaftaran */}
      <RegisterCTA />
    </Shell>
  )
}
