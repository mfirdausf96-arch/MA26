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

const tickerItems = ['MUSLIM ADVENTURE 2026', '26–28 SEPTEMBER', 'MADANI FOREST, SUBANG', 'STUDI WISATA ISLAM']

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
          <span className="eyebrow">MABIM Fakultas Teknik UNJ · 26-28 September 2026</span>
          <h1>
            Muslim<br />
            <em>Adventure 2026</em>
          </h1>
          <p>
            Tiga hari mendekatkan diri kepada Allah dan mengenal sesama mahasiswa baru Fakultas Teknik UNJ,
            jauh dari rutinitas kampus.
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
            <span className="eyebrow">Tiga hal yang kami pegang</span>
            <h2>
              Bukan sekadar mendaki gunung.<br />
              <em>Ada niat di baliknya.</em>
            </h2>
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
          <span className="eyebrow">Apa manfaatnya?</span>
          <h2>
            Manfaat yang<br />
            <em>kamu bawa pulang.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <BenefitList />
        </Reveal>
      </section>

      {/* Fasilitas */}
      <section className="section-pad block-paper" id="fasilitas">
        <Reveal className="section-head">
          <span className="eyebrow">Yang kamu dapatkan</span>
          <h2>
            Sudah termasuk<br />
            <em>dalam satu paket.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <FacilityGrid />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="stats block-ink">
        <Stat number="03" label="Hari lepas dari rutinitas" />
        <Stat number="08" label="Rangkaian kegiatan" />
        <Stat number="∞" label="Circle baru yang kebentuk" />
      </section>

      {/* 4. Rangkaian Kegiatan */}
      <section className="section-pad block-paper timeline-section" id="kegiatan">
        <Reveal className="section-head">
          <span className="eyebrow">Rangkaian kegiatan</span>
          <h2>
            Apa saja yang dilakukan<br />
            <em>selama tiga hari?</em>
          </h2>
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
          <span className="eyebrow">Dokumentasi kegiatan</span>
          <h2>
            Momen dari<br />
            <em>angkatan sebelumnya.</em>
          </h2>
        </Reveal>
        <Gallery />
      </section>

      {/* 7. Info Praktis */}
      <section className="section-pad block-paper" id="info">
        <Reveal className="section-head">
          <span className="eyebrow">Informasi penting</span>
          <h2>
            Info yang<br />
            <em>perlu kamu ketahui.</em>
          </h2>
        </Reveal>
        <InfoPraktis />
      </section>

      {/* FAQ */}
      <section className="section-pad block-paper faq-section">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <div className="section-head">
            <h2>
              Pertanyaan<br />
              <em>yang sering muncul.</em>
            </h2>
          </div>
        </Reveal>
        <FAQ />
      </section>

      {/* 8. CTA / Pendaftaran */}
      <RegisterCTA />
    </Shell>
  )
}
