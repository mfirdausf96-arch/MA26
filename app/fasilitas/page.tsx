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
      <section className="page-intro" style={{
        backgroundImage: `linear-gradient(rgba(7, 25, 29, 0.85), rgba(7, 25, 29, 0.85)), url('/images/cpm35 2025-09-20 115217.961.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '100px',
        paddingTop: '190px'
      }}>
        <span className="eyebrow">WHAT'S INCLUDED</span>
        <h1>Everything you<br /><em>need.</em></h1>
      </section>

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
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url('/images/cpm35 2025-09-20 113902.033.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2>
          Come as you are.<br />
          <em>Leave changed.</em>
        </h2>
      </section>
    </Shell>
  )
}
