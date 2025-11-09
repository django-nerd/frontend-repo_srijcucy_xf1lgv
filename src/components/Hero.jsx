import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0B0B] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-[#FF6A00] tracking-wider uppercase text-sm mb-3">Your story deserves to be seen</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Capturing emotions, not just photos.
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Sightinn Media blends a filmmaker’s vision with a marketing mindset. Based in Bangalore, working worldwide — we craft photography, films, and content that move people and grow brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="bg-[#FF6A00] hover:bg-orange-500 text-white font-medium px-5 py-3 rounded-lg">Book a Call</a>
            <a href="#portfolio" className="border border-white/20 hover:border-white text-white/90 hover:text-white font-medium px-5 py-3 rounded-lg">View Portfolio</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects', value: '500+' },
            { label: 'Cities', value: '30+' },
            { label: 'Years Experience', value: '8+' },
            { label: 'Client Satisfaction', value: '99%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-5 backdrop-blur border border-white/10">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
