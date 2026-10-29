import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, kodeAlat, jumlah, kondisi } = item
  return (
    <Link to={`/koleksi/${id}`}>
    <article className="kartu">
      <h3>{judul}</h3>
        <p>kategori : {kategori}</p>
        <p>Kode Alat: {kodeAlat}</p>
        <p>Jumlah: {jumlah}</p> 
        <p>Kondisi: {kondisi}</p>
    </article>
    </Link>
  )
}