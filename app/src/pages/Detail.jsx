import { useParams , Link , useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const {  items: Baranginven , loading , hapus } = useKoleksi()
  const alat = Baranginven.find((inven) => String(inven.id) === String(id))
  const navigasi = useNavigate()
  const hapusalat = () => {
    if (window.confirm(`Hapus alat ${alat.judul}?`)) {
      hapus(alat.id)
      navigasi('/koleksi')
    } 
  }
  if (loading) return <p>Loading...</p>
  if (!alat) return ( 
  <section>
    <p>alat dengan ID = {id} tidak ditemukan.</p>
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
        <dt>Kode Alat</dt>
        <dd>{alat.kodeAlat}</dd>
        <dt>Jumlah</dt>
        <dd>{alat.jumlah}</dd>
        <dt>Kondisi</dt>
        <dd>{alat.kondisi}</dd>
      </dl>
      <button onClick={hapusalat}>Hapus</button>
      <Link to="/koleksi">Back</Link>
    </section>
  )
}
