import { useState, useEffect } from 'react';
import { Menu, X, Camera, Phone, Instagram } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'bg-black/80 backdrop-blur border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Camera className="text-white" size={24} />
            <span className="text-white font-semibold tracking-wide">Sightinn Media</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-3">
              <a
                href="https://instagram.com/sightinnmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="Sightinn Media Instagram"
                className="text-white/80 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/919740725409"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-medium px-3 py-1.5 rounded-full hover:opacity-90"
              >
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </nav>

          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://instagram.com/sightinnmedia"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white inline-flex items-center gap-2"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://wa.me/919740725409"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-medium px-3 py-2 rounded-full hover:opacity-90"
              >
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
