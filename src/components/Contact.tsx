import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@nfgallerydot',
    href: 'https://instagram.com/nfgallerydot',
    color: 'hover:text-pink-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+62 87734609465',
    href: 'https://wa.me/6287734609465',
    color: 'hover:text-green-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'afifashahira4@gmail.com',
    href: 'mailto:afifashahira4@gmail.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Indonesia',
    href: '#',
    color: 'hover:text-red-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 lg:px-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Hubungi Kami</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold">Contact</h2>
          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">Mari Terhubung</h3>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Tertarik dengan karya kami atau ingin pemesanan custom?
              Jangan ragu untuk menghubungi kami melalui platform di bawah ini.
            </p>
            <div className="flex flex-col gap-5">
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-white/60 ${color} transition-colors duration-200 group`}
                >
                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider font-light">{label}</p>
                    <p className="text-sm font-light">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Message form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white text-xl font-semibold mb-6">Kirim Pesan</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                window.open(
                  `https://wa.me/6287734609465?text=Halo%20Nfgallery%2C%20nama%20saya%20${encodeURIComponent(name)}.%20${encodeURIComponent(msg)}`,
                  '_blank'
                );
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Nama</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Nama kamu"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Pesan</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tulis pesanmu di sini..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 mt-2"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
