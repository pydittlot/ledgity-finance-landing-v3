import { useParams } from 'react-router-dom'
import PersonaPage from '../components/PersonaPage'
import { useEffect } from 'react'

export default function PersonaPageWrapper() {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!id) return null
  return <PersonaPage />
}
