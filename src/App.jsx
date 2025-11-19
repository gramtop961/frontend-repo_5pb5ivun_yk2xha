import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProductShowcase from './components/ProductShowcase'
import Story from './components/Story'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Story />
      <CTA />
      <footer className="py-10 text-center text-slate-400 text-sm bg-slate-950 border-t border-white/10">
        © {new Date().getFullYear()} Aronia Pure. All rights reserved.
      </footer>
    </div>
  )
}

export default App
