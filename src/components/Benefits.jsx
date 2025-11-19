import { motion } from 'framer-motion'
import { ShieldCheck, Droplets, HeartPulse, Leaf } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'High in Antioxidants',
    desc: 'Aronia berries have an exceptionally high ORAC score, helping combat oxidative stress.'
  },
  {
    icon: HeartPulse,
    title: 'Heart Healthy',
    desc: 'Polyphenols and anthocyanins support cardiovascular health and balanced blood pressure.'
  },
  {
    icon: Droplets,
    title: 'Cold-Pressed',
    desc: 'We use a gentle cold-press method to retain nutrients and natural taste.'
  },
  {
    icon: Leaf,
    title: 'Nothing Artificial',
    desc: 'No added sugar, colors, or preservatives. Just berries and care.'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(217,70,239,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-200 text-xs">Benefits</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Nature in Every Drop</h2>
          <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">Backed by science and crafted with care, our juice delivers pure wellness with a bold, refreshing taste.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
