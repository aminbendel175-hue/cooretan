import { Palette, Award, Heart } from 'lucide-react';

const stats = [
  { label: 'Karya Selesai', value: '50+' },
  { label: 'Koleksi Terjual', value: '10+' },
  { label: 'Tahun Berkarya', value: '5+' },
];

const values = [
  {
    icon: Palette,
    title: 'Ekspresi Murni',
    desc: 'Setiap karya lahir dari perasaan, bukan sekadar teknik.',
  },
  {
    icon: Award,
    title: 'Original art painting',
    
  },
  {
    icon: Heart,
    title: 'Setiap goresan penuh makna',
    desc: 'Setiap goresan menyimpan cerita yang ingin kamu rasakan.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Story</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">About</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/about-art.jpg"
                alt="About NFGallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-black rounded-2xl p-6 shadow-2xl hidden md:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-black/60 font-light">Tahun Berkarya</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-6">
              Ruang Ekspresi<br />
              <span className="italic font-light text-white/70">Seni yang Bicara</span>
            </h3>
            <p className="text-white/60 text-base font-light leading-relaxed mb-8">
              Nfgallery adalah ruang ekspresi seni yang menghadirkan karya penuh makna dan cerita dari setiap goresan.
              Didirikan dengan semangat untuk mendekatkan seni dengan kehidupan sehari-hari, setiap lukisan yang hadir
              di sini bukan hanya dekorasi — melainkan sebuah dialog antara seniman dan penikmatnya.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-white text-3xl font-bold">{s.value}</p>
                  <p className="text-white/40 text-xs font-light mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-white/40 text-sm font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
