import { LangProvider } from './i18n/LangContext'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PersonaPageWrapper from './pages/PersonaPageWrapper'

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/persona/:id" element={<PersonaPageWrapper />} />
        </Routes>
        <Footer />
      </div>
    </LangProvider>
  )
}
