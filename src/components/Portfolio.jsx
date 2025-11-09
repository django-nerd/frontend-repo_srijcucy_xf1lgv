import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, cat: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, cat: 'Corporate', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, cat: 'Events', img: 'https://images.unsplash.com/photo-1522008323582-9eef09a8a1c1?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, cat: 'Wedding', img: 'https://images.unsplash.com/photo-1519741347682-3f0b406a7f91?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, cat: 'Corporate', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, cat: 'Events', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop' },
];

const filters = ['All', 'Wedding', 'Corporate', 'Events'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.cat === active)),
    [active]
  );

  return (
    <section id="portfolio" className="bg-[#0B0B0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
          <p className="mt-3 text-white/70">
            A glimpse of stories we loved telling — across weddings, brands, and celebrations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full border transition ${
                active === f
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/80 hover:text-white hover:border-white/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          <AnimatePresence initial={false}>
            {filtered.map((item) => (
              <motion.a
                key={item.id}
                href={item.img}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-4 block overflow-hidden rounded-xl border border-white/10"
              >
                <img
                  src={`${item.img}&format=webp`}
                  alt={`${item.cat} photography by Sightinn Media`}
                  loading="lazy"
                  className="w-full h-auto hover:scale-[1.02] transition-transform"
                />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
