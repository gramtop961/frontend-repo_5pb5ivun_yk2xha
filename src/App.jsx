import { useEffect, useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProductShowcase from './components/ProductShowcase'
import Story from './components/Story'
import CTA from './components/CTA'
import CartDrawer from './components/CartDrawer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  // Load product from backend
  useEffect(() => {
    let isMounted = true
    fetch(`${API_BASE}/api/products`).then(async r => {
      if (!r.ok) throw new Error('Failed to load products')
      return r.json()
    }).then(data => {
      if (isMounted) setProducts(Array.isArray(data) ? data : [])
    }).catch(() => {
      if (!isMounted) return
      // fallback product
      setProducts([
        {
          title: 'Aronia Pure - 100% Chokeberry Juice',
          description: 'Cold-pressed from fresh aronia berries, unfiltered to retain natural goodness. Tart, rich, and invigorating.',
          price: 12.9,
          category: 'Beverages',
          in_stock: true,
          image_url: 'https://images.unsplash.com/photo-1626595424320-b872d5efaa11?auto=format&fit=crop&w=1600&q=80',
          sku: 'ARONIA-750ML',
          volume_ml: 750
        }
      ])
    })
    return () => { isMounted = false }
  }, [])

  const mainProduct = useMemo(() => products[0], [products])

  const addToCart = (product, qty = 1) => {
    if (!product) return
    setCart(prev => {
      const exists = prev.find(i => i.sku === product.sku)
      if (exists) {
        return prev.map(i => i.sku === product.sku ? { ...i, quantity: i.quantity + qty } : i)
      }
      return [
        ...prev,
        {
          sku: product.sku,
          title: product.title,
          unit_price: Number(product.price || 0),
          quantity: qty,
          image_url: product.image_url
        }
      ]
    })
    setCartOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Benefits />
      <ProductShowcase onAdd={() => addToCart(mainProduct, 1)} product={mainProduct} />
      <Story />
      <CTA />
      <footer className="py-10 text-center text-slate-400 text-sm bg-slate-950 border-t border-white/10">
        © {new Date().getFullYear()} Aronia Pure. All rights reserved.
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} />
    </div>
  )
}

export default App
