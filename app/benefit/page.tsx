import Link from 'next/link'
import { MEDIA, PageIntro, Shell } from '@/components/event-site'

export default function BenefitPage() {
  return (
    <Shell>
      <PageIntro kicker="THE EXPERIENCE" title="What's the" accent="Benefit?" />

      <section className="benefit-grid">
        <article className="feature feature-blue">
          <span className="feature-no">01</span>
          <h2>
            Reconnect<br />
            <em>with yourself.</em>
          </h2>
        </article>

        <article className="feature feature-yellow">
          <span className="feature-no">02</span>
          <h2>
            Meet your<br />
            <em>new circle.</em>
          </h2>
        </article>

        <article className="feature feature-dark">
          <span className="feature-no">03</span>
          <h2>
            Grow through<br />
            <em>adventure.</em>
          </h2>
        </article>

        <article className="feature feature-white">
          <span className="feature-no">04</span>
          <h2>
            Meaningful<br />
            <em>Journey.</em>
          </h2>
        </article>
      </section>

      {/* Section CTA dengan Foto Background */}
      <section 
        className="page-cta"
        style={{
          // Ganti nama file di bawah sesuai foto yang kamu inginkan (misal: IMG_2785.JPG)
          backgroundImage: `linear-gradient(rgba(7, 25, 29, 0.75), rgba(7, 25, 29, 0.75)), url('images/IMG_9525.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'var(--foreground)' // Mengubah warna teks menjadi terang agar kontras dengan foto
        }}
      >
        <h2 style={{ color: '#fff' }}>
          Ready to feel<br />
          <em style={{ color: 'var(--yellow)' }}>more alive?</em>
        </h2>
        <Link className="button button-yellow" href="/about#register">
          Save your spot <span>↗</span>
        </Link>
      </section>
    </Shell>
  )
}