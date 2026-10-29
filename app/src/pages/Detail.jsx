import { useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const {  items: Baranginven , loading } = useKoleksi()
  const alat = Baranginven.find((inven) => String(inven.id) === String(id))
  if (loading) return <p>Loading...</p>

  return (
    <section>
      <h1>{alat.judul}</h1>
    </section>
  )
}