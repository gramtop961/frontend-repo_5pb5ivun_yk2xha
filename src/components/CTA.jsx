import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function CTA() {
  return (
    <section id="buy" className="relative py-20 bg-gradient-to-br from-fuchsia-600 to-indigo-600">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%),radial-gradient(circle_at_70%_70%,white,transparent_40%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Ready to Taste the Difference?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-lg text-white/90"
        >
          Order now and get free shipping on your first 3 bottles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <ShoppingBag className="h-5 w-5" /> Shop Aronia Pure
          </a>
        </motion.div>
      </div>
    </section>
  )
}
