export const REGISTER_URL = 'https://bit.ly/RegistrasiPesertaMA2026'
export const EVENT_START = '2026-09-26T00:00:00+07:00'
export const LOCATION_MAPS_URL = 'https://maps.app.goo.gl/WQdtD2sac8gZDRta9'

export const MEDIA = {
  heroBg: '/images/hero-bg.jpg',
  statementBg: '/images/statement-bg.jpg',
  registerBg: '/images/register-bg.jpg',
  sambutanDekan: '/images/sambutan-dekan.mov',
  recapVideo: '/images/recap-video.mp4',
  logo: '/images/logo.png',
}

export const SURAT_MABIM_URL = '/dokumen/surat-pemberitahuan-mabim-ft-unj.pdf'

const WA_NUMBER = '6281288421988'
const WA_TEMPLATE =
  'Halo Kak, saya mau bertanya soal Muslim Adventure 2026 (26-28 September, Madani Forest Subang).\n\nNama: \nProdi/Angkatan: \nPertanyaan: '

export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEMPLATE)}`

export const GALERI = Array.from(
  { length: 16 },
  (_, i) => `/images/galeri/doc-${String(i + 1).padStart(2, '0')}.jpg`,
)
