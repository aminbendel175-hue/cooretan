import { useState } from 'react';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Mountain Dream',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan1.jpg',
    description: `Terinspirasi dari keindahan Gunung Rinjani di Lombok, karya ini menghadirkan perpaduan antara kekuatan alam dan ketenangan batin melalui warna-warna yang hidup dan dinamis.`,
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description: `“Chaos Line” menggambarkan bahwa kehidupan tidak pernah berjalan dalam garis yang lurus.`,
  },

  {
    id: 3,
    title: 'Tropical Leaves',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan3.jpg',
    description: `“Tropical Leaves” merepresentasikan hubungan manusia dengan alam sebagai sumber ketenangan dan kehidupan.`,
  },

  {
    id: 4,
    title: 'Green field',
    media: 'Acrylic on camvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description: 'Lukisan suasana persawahan hijau dengan 2 pohon ketenangan.',
  },

  {
    id: 5,
    title: 'Angel',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan5.jpg',
    description: 'Goresan warna hitam dan putih melambangkan bahwa semua kehidupan itu adil. Hitam berarti ada yang jahat putih ada cahaya kebaikan',
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description: 'Potret seseorang sedang mempertaruhkan hidup antara menang dan kalah.Bermaksud dalam kehidupan tidak ada keberuntungan jika kita tidak mempertaruhkan.',
  },

  {
    id: 7,
    title: 'Gadis kecil',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan7.jpg',
    description: 'Perempuan yang menyatu dengan dunia biru melambangkan ketenangan dan keharmonisan.',
  },

  {
    id: 8,
    title: 'Twin Macaws',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan8.jpg',
    description: 'Dua burung macaw merah dengan komposisi close-up yang kuat dan penuh karakter.',
  },

  {
    id: 9,
    title: 'Perempuan dalam kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description: 'Disaat dunia terasa redup, ia memilih berenang bersama harapan-harapan kecil .',
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description: 'menggambarkan tentang suasana malam yang indah,sunyi dan gelap terkadang dalam keindahan setiap jiwa tak terlepas dari rasa yang kosong dan sepi .',
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description: 'Setunjung adalah sebuah julukan pohon besar tempatnya di ds karas jajar, pohon trembesi besar sebagai icon desa yang makmur.',
  },

  {
    id: 12,
    title: 'Silent Nature',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan12.jpg',
    description: 'Karya bernuansa alam hutan liar yang didalamnya kita merasakan jiwa menemukan rumahnya.',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="gallery"
      className="py-24 px-6 lg:px-10 bg-[#14070d]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
            Original Collection
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Gallery
          </h2>

          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {artworks.map((art) => (
            <div
              key={art.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelected(art)}
            >

              <img
                src={art.src}
                alt={art.title}
                className="w-full h-[500px] object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-xl">
                  {art.title}
                </p>

                <p className="text-white/60 text-sm font-light">
                  {art.medium} • {art.year}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Popup */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="max-w-4xl w-full bg-[#14070d] rounded-3xl overflow-hidden relative">

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={() => setSelected(null)}
              >
                <X size={32} />
              </button>

              {/* Image */}
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full max-h-[60vh] object-cover"
              />

              {/* Content */}
              <div className="text-white p-6 md:p-10">

                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                  {selected.title}
                </h2>

                <p className="text-white/60 mb-6 text-sm md:text-base">
                  {selected.medium} • {selected.year}
                </p>

                <p className="text-white/80 leading-relaxed italic text-lg">
                  {selected.description}
                </p>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}