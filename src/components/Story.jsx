import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,70,239,0.07),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.07),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white">From Farm to Bottle</h3>
          <p className="mt-4 text-slate-300/85">We partner with local growers who handpick aronia berries at peak ripeness. The fruit is cold-pressed within hours to preserve flavor and nutrients, then bottled in small batches.</p>
          <p className="mt-3 text-slate-300/85">Every step is traceable and sustainable — no shortcuts, just honest juice.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Farm" className="w-full h-[420px] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
