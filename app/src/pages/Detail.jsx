import { Link , useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const {  items: Baranginven , loading } = useKoleksi()
  const alat = Baranginven.find((inven) => String(inven.id) === String(id))
  if (loading) return <p>Loading...</p>
  if (!alat) return ( 
  <section>
    <p>Tidak ada alat dengan ID = {id}.</p>
    <Link to="/koleksi">Back</Link>
  </section>
  )

  return (
    <section>
      <h1>{alat.judul}</h1>
      <dl>
        <dt>ID</dt>
        <dd>{alat.id}</dd>
        <dt>Kategori</dt>
        <dd>{alat.kategori}</dd>
        <dt>Jumlah</dt>
        <dd>{alat.jumlah}</dd>
        <dt>Kondisi</dt>
        <dd>{alat.kondisi}</dd>
      </dl>
      <Link to="/koleksi">Back</Link>
    </section>
  )
}