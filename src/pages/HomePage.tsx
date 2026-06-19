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
      <Products />
      <Simulator />
      <Steps />
      <Security />
      <Personas />
      <TokenSection />
      <BottomCTA />
    </main>
  )
}
