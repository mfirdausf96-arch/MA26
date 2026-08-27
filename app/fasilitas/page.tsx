import { MEDIA, Media, PageIntro, Shell } from '@/components/event-site'

const facilities = [
  'Camping ground yang nyaman',
  'Rangkaian outdoor activities',
  'Makanan halal & nourishing',
  'Ruang ibadah dan refleksi',
  'Dokumentasi perjalanan',
  'Tim fasilitator berpengalaman',
]

export default function FasilitasPage() {
  return (
    <Shell>
      <PageIntro kicker="WHAT'S INCLUDED" title="Everything you" accent="need." />

      <section className="facilities-layout">
        <div className="facility-list">
          {facilities.map((item, i) => (
            <div className="facility-item" key={item}>
              <span>0{i + 1}</span>
              <strong>{item}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>

        {/* Foto Card Aktivitas / Fasilitas */}
        <Media 
          src={'images/IMG_8968.JPG'} 
          className="tall-media" 
          label="Hear or to be Heard" 
        />
      </section>

      {/* Section Quote dengan Opsi Background Foto */}
      <section 
        className="quote"
        style={{
          // Hapus atau comment baris ini jika ingin tetap menggunakan warna dasar light
          backgroundImage: `linear-gradient(rgba(244, 241, 232, 0.85), rgba(244, 241, 232, 0.85)), url('${MEDIA.facility}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="eyebrow">PACK LIGHT. LIVE FULLY.</span>
        <h2>
          Come as you are.<br />
          <em>Leave changed.</em>
        </h2>
      </section>
    </Shell>
  )
}