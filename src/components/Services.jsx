import { motion } from 'framer-motion';
import { Film, Image, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Image,
    title: 'Wedding & Pre-Wedding',
    desc:
      'Candid, traditional, and cinematic highlights that preserve the soul of your celebration. We focus on authentic moments and timeless storytelling.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Shoots & Branding',
    desc:
      'Impactful business portraits, product visuals, office culture films, and brand stories designed to build trust and drive conversions.',
  },
  {
    icon: Film,
    title: 'Events & Personal Celebrations',
    desc:
      'From intimate milestones to large-format events, our agile team captures energy, people, and details with finesse and speed.',
  },
  {
    icon: Sparkles,
    title: 'Digital Marketing Add‑ons',
    desc:
      'Reels, YouTube edits, Instagram strategy, and content calendars that help your visuals reach the right audience and perform.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0B0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          <p className="mt-3 text-white/70">
            Visuals that move hearts and grow brands. Choose from full-service production or agile, on‑location coverage.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <Icon size={20} />
                </span>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF6A00] to-orange-500 p-6 text-black">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">₹3,499 Promotional Shoot</h3>
              <p className="text-black/80">
                3-hour session • unlimited photos • highlight video — perfect for corporates & promos.
              </p>
            </div>
            <a href="#contact" className="inline-block rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-black/90">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
