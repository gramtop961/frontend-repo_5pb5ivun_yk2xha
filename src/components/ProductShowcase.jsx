import { motion } from 'framer-motion'
import { BadgeCheck, Bottle, Truck } from 'lucide-react'

export default function ProductShowcase() {
  return (
    <section id="product" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"
        >
          <img src="https://images.unsplash.com/photo-1626595424320-b872d5efaa11?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9rZWJlcnJ5JTIwSnVpY2UlMjBCb3R0bGV8ZW58MHwwfHx8MTc2MzU3OTA2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Chokeberry Juice Bottle" className="w-full h-[420px] object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-slate-200"
        >
          <h3 className="text-3xl font-bold text-white">Aronia Pure - 100% Chokeberry Juice</h3>
          <p className="mt-3 text-slate-300/80">Cold-pressed from fresh aronia berries, unfiltered to retain natural goodness. Tart, rich, and invigorating.</p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-fuchsia-400" /> 750ml recyclable glass bottle</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-fuchsia-400" /> No added sugar, water, or preservatives</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-fuchsia-400" /> Vegan and gluten-free</li>
          </ul>

          <div className="mt-8 flex items-end gap-6">
            <div>
              <div className="text-4xl font-extrabold text-white">$12.90</div>
              <p className="text-xs text-slate-400">incl. VAT</p>
            </div>
            <a href="#buy" className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg shadow-fuchsia-500/30 transition-colors">
              <Bottle className="h-5 w-5" /> Add to Cart
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
            <Truck className="h-4 w-4" /> Free shipping over $40 • Carbon neutral packaging
          </div>
        </motion.div>
      </div>
    </section>
  )
}
