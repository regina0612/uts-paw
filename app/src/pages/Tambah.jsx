import { useState } from 'react'
const kondisiawal = { judul: '', kategori: 'Komputer', kodeAlat: '', jumlah: 0, kondisi: 'Baik' }
export default function Tambah() {
  const [form, setForm] = useState(kondisiawal)
  const databaru = (inputan) => setForm({...form, [inputan.target.name]: inputan.target.value})

  return (
  <section>
    <h1>Tambah Barang Inventaris</h1>
    <form>
        <label htmlFor="judul">Judul:</label>
        <input type="text" id="judul" name="judul" value={form.judul} onChange={databaru} />
        <label htmlFor="kategori">Kategori:</label>
        <select id="kategori" name="kategori" value={form.kategori} onChange={databaru}>
          <option value="Elektronik">Elektronik</option>
          <option value="Komputer">Komputer</option>
        </select>
        <label htmlFor="kodeAlat">Kode Alat:</label>
        <input type="text" id="kodeAlat" name="kodeAlat" value={form.kodeAlat} onChange={databaru} />
        <label htmlFor="jumlah">Jumlah:</label>
        <input type="number" id="jumlah" name="jumlah" value={form.jumlah} onChange={databaru} />
        <label htmlFor="kondisi">Kondisi:</label>
        <select id="kondisi" name="kondisi" value={form.kondisi} onChange={databaru}>
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
          <option value="Perlu Perbaikan">Perlu Perbaikan</option>
        </select>

      <button type="submit">Tambah Inventaris</button>  
    </form>
  </section>
  )
}