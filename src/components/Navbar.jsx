import { useState, useEffect } from 'react'
import { Menu, X, Leaf, ShoppingCart } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-100/80 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 items-center justify-center shadow-lg ring-1 ring-white/20">
            <Leaf className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Aronia Pure</p>
            <p className="text-[11px] text-slate-300/80">100% Natural Chokeberry</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#story">Our Process</NavLink>
          <a href="#buy" className="ml-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors">
            <ShoppingCart className="h-4 w-4" /> Buy Now
          </a>
        </div>

        <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/90 hover:text-white p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#benefits" onClick={close}>Benefits</NavLink>
            <NavLink href="#product" onClick={close}>Product</NavLink>
            <NavLink href="#story" onClick={close}>Our Process</NavLink>
            <a href="#buy" onClick={close} className="mt-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md w-max">
              <ShoppingCart className="h-4 w-4" /> Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
