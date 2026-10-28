import mahasiswa from '../../mahasiswa.json'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {
  const { items, loading, error } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>INVEN LAB (Inventaris Laboratorium)</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Sedang membaca data inventaris...</p>
      ) : error ? (
        <p>Terjadi kesalahan: {error}</p>
      ) : (
        <section>
        <h2>Data Inventaris Laboraturium</h2>
        <p>Jumlah barang : {items.length} barang</p>
        <p>Jumlah Kategori : {jumlahKategori} kategori</p>
        </section>
      )}
      <Link to="/koleksi">See all inventaris</Link>

    </section>
  )
}