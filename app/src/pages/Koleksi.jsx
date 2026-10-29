import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')

  if (loading) return <p>Loading...</p>
  if (error) return <p role="alert">Gagal memuat : {error}</p>

  const datasesuai = items.filter((item) => item.judul.toLowerCase().includes(cari.toLowerCase()))

  return (
    <section>
      <h1>Inventaris</h1>
      
      <div className="koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
      </div>
      {datasesuai.length === 0 ? (<p>Tidak ditemukan.</p>) 
      : (
        <div className="daftar-kartu">
          {datasesuai.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}