import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0B0B] text-white pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Sightinn Media</h3>
            <p className="mt-2 text-white/70">
              Bangalore, Karnataka — serving clients globally. We craft photography and films that feel honest and perform for your brand.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <MapPin size={18} /> Bangalore, India
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Phone size={18} /> <a href="tel:+919740725409" className="hover:text-white">+91 97407 25409</a></li>
              <li className="flex items-center gap-2"><Mail size={18} /> <a href="mailto:hello@sightinnmedia.com" className="hover:text-white">hello@sightinnmedia.com</a></li>
              <li className="flex items-center gap-2"><Instagram size={18} /> <a href="https://instagram.com/sightinnmedia" target="_blank" rel="noreferrer" className="hover:text-white">@sightinnmedia</a></li>
            </ul>
            <a
              href="https://wa.me/919740725409"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#25D366] text-black px-4 py-2 font-medium hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
          <p className="text-white/80">
            “Turning moments into memories.” • “Every frame should speak.”
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Sightinn Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
