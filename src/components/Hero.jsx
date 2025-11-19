import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-slate-100/90 text-xs mb-4">100% Natural • No Added Sugar</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Pure Chokeberry Goodness
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg max-w-xl">
            Experience the antioxidant-rich power of aronia in every sip. Cold-pressed, sustainably harvested, and bottled fresh.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 transition-colors">
              Buy Now
            </a>
            <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:justify-self-end"
        >
          <div className="backdrop-blur-md bg-white/5 ring-1 ring-white/20 rounded-2xl p-4 sm:p-6 max-w-sm">
            <div className="rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200&auto=format&fit=crop" alt="Aronia Berries" className="h-56 w-full object-cover" />
            </div>
            <div className="mt-4 text-white/90">
              <h3 className="text-lg font-semibold">Why Aronia?</h3>
              <p className="text-sm text-slate-200/80 mt-1">Aronia (chokeberry) boasts one of the highest antioxidant capacities among berries. Our juice preserves its natural benefits without additives.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
