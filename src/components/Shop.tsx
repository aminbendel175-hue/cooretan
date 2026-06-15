import { ShoppingBag } from 'lucide-react';
const artworks = [
  {
    id: 1,
    title: 'Simfony Sunyi',
    medium: 'Acrylic on Canvas',
    size: '100x100 cm',
    price: 'Rp 1.000.000',
    src: '/images/Simfony-Sunyi.jpg',
    soldOut: true,
  },
  {
    id: 2,
    title: 'Harmony of Nature',
    medium: 'Acrylic on Canvas',
    size: '100x100 cm',
    price: 'Rp 1.200.000',
    src: '/images/harmony-nature.jpg',
  },
  {
    id: 3,
    title: 'Penari',
    medium: 'Acrylic on Canvas',
    size: '40x60 cm',
    price: 'Rp 800.000',
    src: '/images/Penari.jpg',
  },
  {
    id: 4,
    title: 'Fragments of Humanity',
    medium: 'Acrylic on Canvas',
    size: '100x50 cm',
    price: 'Rp 1.500.000',
    src: '/images/fragments-humanity.jpg',
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="py-28 px-6 lg:px-10 bg-[#14070d]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
            Original Works
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            FOR SALE
          </h2>

          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-square">

                <img
                  src={art.src}
                  alt={art.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    art.soldOut ? 'opacity-60 grayscale' : ''
                  }`}
                />

                {art.soldOut && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="px-6 py-3 rounded-full bg-red-600 text-white text-sm font-bold tracking-[0.3em]">
                      SOLD OUT
                    </span>
                  </div>
                )}

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {art.title}
                </h3>

                <p className="text-white/50 text-sm mb-1">
                  {art.medium}
                </p>

                <p className="text-white/50 text-sm mb-5">
                  {art.size}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-white text-2xl font-bold">
                    {art.price}
                  </span>

                  {art.soldOut ? (
                    <span className="px-5 py-3 rounded-full border border-white/20 text-white/40 text-sm">
                      Not Available
                    </span>
                  ) : (
                    <a
                      href={`https://wa.me/6287734609465?text=Halo%20NFGallery,%20saya%20tertarik%20dengan%20lukisan%20${art.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
                    >
                      <ShoppingBag size={16} />
                      Order Now
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-white/30 text-sm mt-14 font-light">
          Pengiriman ke seluruh Indonesia maupun International • Custom order tersedia
        </p>

      </div>
    </section>
  );
}