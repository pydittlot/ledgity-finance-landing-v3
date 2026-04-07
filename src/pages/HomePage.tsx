import Hero from '../components/Hero'
import Products from '../components/Products'
import Simulator from '../components/Simulator'
import Steps from '../components/Steps'
import Security from '../components/Security'
import Personas from '../components/Personas'
import TokenSection from '../components/TokenSection'
import BottomCTA from '../components/BottomCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Products />
        </div>
      </section>
      <section id="simulator" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <Simulator />
        </div>
      </section>
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Steps />
        </div>
      </section>
      <section id="security" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <Security />
        </div>
      </section>
      <section id="personas" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Personas />
        </div>
      </section>
      <TokenSection />
      <BottomCTA />
    </main>
  )
}
