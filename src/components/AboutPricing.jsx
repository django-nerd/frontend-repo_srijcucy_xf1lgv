import { motion } from 'framer-motion';

export default function AboutPricing() {
  return (
    <section id="about" className="bg-[#0B0B0B] text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold">About Sightinn Media</h2>
            <p className="mt-4 text-white/80">
              Founded by Mithun — Creative Director & Filmmaker — Sightinn Media blends a filmmaker’s vision with a marketing mindset. We believe every frame should speak, and every story deserves structure, emotion, and purpose.
            </p>
            <p className="mt-3 text-white/80">
              From weddings to corporate films, our work balances cinematic aesthetics with clear business outcomes. We create visuals that win hearts and convert attention into action.
            </p>
          </motion.div>

          <motion.div
            id="pricing"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">Pricing</h3>
            <p className="mt-2 text-white/80">
              Packages tailored to your story. Transparent, flexible, and value‑driven.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Wedding Essentials</h4>
                    <p className="text-white/70 text-sm">Candid + Traditional + Highlights</p>
                  </div>
                  <span className="text-[#FF6A00] font-semibold">From ₹49,999</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Corporate Brand Kit</h4>
                    <p className="text-white/70 text-sm">Team portraits + Office film</p>
                  </div>
                  <span className="text-[#FF6A00] font-semibold">From ₹24,999</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Events Coverage</h4>
                    <p className="text-white/70 text-sm">On‑location photo + video</p>
                  </div>
                  <span className="text-[#FF6A00] font-semibold">From ₹9,999</span>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-gradient-to-r from-[#FF6A00] to-orange-500 text-black">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Promotional Shoot</h4>
                    <p className="text-black/70 text-sm">3 hrs • unlimited photos • highlight video</p>
                  </div>
                  <span className="font-bold">₹3,499</span>
                </div>
              </div>
            </div>
            <a href="#contact" className="mt-6 inline-block rounded-lg bg-[#FF6A00] px-5 py-3 font-medium text-white hover:bg-orange-500">Get Custom Quote</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
