import { Instagram, MessageCircle, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/Nfgallerydot.com', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/6287734609465', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:afifashahira4@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-red border-t border-white/5 py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <a href="#home" className="text-white font-bold text-xl tracking-widest uppercase">
            Nfgallery
          </a>
          <nav className="flex items-center flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white text-sm font-light tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs font-light">
            &copy; 2026 Nfgallery &mdash; All Rights Reserved
          </p>
          <p className="text-white/20 text-xs font-light">
            Setiap karya punya makna tersendiri
          </p>
        </div>
      </div>
    </footer>
  );
}
