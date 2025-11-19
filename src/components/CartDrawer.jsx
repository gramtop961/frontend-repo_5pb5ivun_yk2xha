import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart, Trash2 } from 'lucide-react'
import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CartDrawer({ open, onClose, cart, setCart }) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', address: '' })

  const total = cart.reduce((sum, i) => sum + i.unit_price * i.quantity, 0)

  const updateQty = (sku, delta) => {
    setCart(curr => {
      const next = curr.map(i => i.sku === sku ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i)
      return next
    })
  }

  const removeItem = (sku) => setCart(curr => curr.filter(i => i.sku !== sku))

  const checkout = async () => {
    setSubmitting(true)
    setError(null)
    setSuccess(null)
    try {
      const payload = {
        customer_name: form.name || 'Guest',
        customer_email: form.email || 'guest@example.com',
        shipping_address: form.address || 'N/A',
        items: cart.map(i => ({
          product_sku: i.sku,
          title: i.title,
          unit_price: i.unit_price,
          quantity: i.quantity,
        }))
      }
      const res = await fetch(`${API_BASE}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Checkout failed')
      const data = await res.json()
      setSuccess({ order_id: data.order_id, total: data.total_amount })
      setCart([])
    } catch (e) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-950 text-white z-50 ring-1 ring-white/10 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <h4 className="font-semibold">Your Cart</h4>
              </div>
              <button onClick={onClose} className="p-2 text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {cart.length === 0 && !success && (
                <p className="text-slate-300/80">Your cart is empty.</p>
              )}

              {cart.map(item => (
                <div key={item.sku} className="flex gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
                  <img src={item.image_url} alt={item.title} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-slate-300/80">${item.unit_price.toFixed(2)}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(item.sku, -1)} className="px-2 py-1 bg-white/10 rounded">-</button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(item.sku, 1)} className="px-2 py-1 bg-white/10 rounded">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.sku)} className="self-start p-2 text-slate-300 hover:text-white">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}

              {success && (
                <div className="p-4 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                  <p className="font-medium text-emerald-200">Thank you! Your order was created.</p>
                  <p className="text-sm text-emerald-300/90 mt-1">Order total: ${Number(success.total || 0).toFixed(2)}</p>
                  {success.order_id && <p className="text-xs text-emerald-300/80 mt-1">Order ID: {success.order_id}</p>}
                </div>
              )}

              {error && (
                <div className="p-3 rounded bg-red-500/15 ring-1 ring-red-400/30 text-red-200 text-sm">
                  {error}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-4 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm placeholder:text-slate-400"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm placeholder:text-slate-400"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  placeholder="Shipping address"
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm placeholder:text-slate-400 min-h-[80px]"
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                />
              </div>

              <button
                disabled={cart.length === 0 || submitting}
                onClick={checkout}
                className="w-full inline-flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-4 py-3 rounded-md shadow-lg shadow-fuchsia-500/30 transition-colors"
              >
                {submitting ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
