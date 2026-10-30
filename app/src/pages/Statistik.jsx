import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items, loading, error } = useKoleksi()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  const hitungKategori = items.reduce((hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1 }), {})
  const totalBarang = items.length

  return (
  <section> 
  <h1>Statistik</h1>
  <div className="tabel-gulir">
  <table className="tabel-data">
    <thead>
      <tr><th>Kategori</th><th>Jumlah</th></tr>
    </thead> 
    <tbody>
      {Object.entries(hitungKategori).map(([kategori, jumlah]) => (
        <tr key={kategori}><td>{kategori}</td><td>{jumlah}</td></tr>))}
    </tbody>
    <tfoot>
    <tr>
      <th>Total</th>
      <th>{totalBarang}</th>
    </tr>
  </tfoot>
  </table>
  </div>
  </section>
  )
}