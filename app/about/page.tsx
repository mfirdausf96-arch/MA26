import Link from 'next/link'
import { FAQ, MEDIA, Media, PageIntro, Shell } from '@/components/event-site'

export default function AboutPage() {
  return (
    <Shell>
      <section 
        className="page-intro" 
        style={{
          backgroundImage: `linear-gradient(rgba(7, 25, 29, 0.85), rgba(7, 25, 29, 0.85)), url('/images/IMG_9247.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '100px',
          paddingTop: '190px'
        }}
      >
        <span className="eyebrow">THE STORY</span>
        <h1>Made for the<br /><em>journey.</em></h1>
      </section>

      {/* Section About Intro dengan Video Dekan */}
      <section className="about-intro">
        <Media 
          src="/images/DEKAN MA (1).mov" /* PATH YANG SUDAH DIPERBAIKI */
          className="about-media" 
          label="SAMBUTAN DEKAN FT UNJ" 
          controls={true} /* Mengaktifkan tombol play & suara */
        />
        
        <div>
          <span className="eyebrow">OUR INTENTION</span>
          <p className="big-copy">
            Surat MABIM Fakultas Teknik UNJ
          </p>
          <p>
            Agenda Muslim Adventure 2026 merupakan agenda peningkatan kualitas diri dan spiritual bersama teman dan pembinaan oleh Mentor FSI Al-Biruni, agenda ini merupakan rangkaian kegiatan yang dicantumkan dalam surat agenda mabim Fakultas Teknik UNJ. 
          </p>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="faq-section">
        <div>
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>
            Questions,<br />
            <em>answered.</em>
          </h2>
        </div>
        <FAQ />
      </section>

      {/* Section Register / Join */}
      <section 
        className="register" 
        id="register"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 25, 29, 0.85), rgba(7, 25, 29, 0.85)), url('${MEDIA.facility}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <span className="eyebrow">25 - 27 AUGUST 2026 · MADANI FOREST, SUBANG</span>
          <h2>
            Your next<br />
            <em>chapter starts here.</em>
          </h2>
        </div>
        <Link className="button button-yellow" href="mailto:hello@muslimadventure.id">
          Register your interest <span>↗</span>
        </Link>
      </section>
    </Shell>
  )
}