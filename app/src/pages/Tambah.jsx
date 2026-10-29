export default function Tambah() {
  return (
  <section>
    <h1>Tambah Barang Inventaris</h1>
    <form>
        <label htmlFor="judul">Judul:</label>
        <input type="text" id="judul"/>
        <label htmlFor="kategori">Kategori:</label>
        <select id="kategori" name="kategori">
          <option value="Elektronik">Elektronik</option>
          <option value="Komputer">Komputer</option>
        </select>
        <label htmlFor="kodeAlat">Kode Alat:</label>
        <input type="text" id="kodeAlat"/>
        <label htmlFor="jumlah">Jumlah:</label>
        <input type="number" id="jumlah"/>
        <label htmlFor="kondisi">Kondisi:</label>
        <select id="kondisi" name="kondisi">
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
          <option value="Perlu Perbaikan">Perlu Perbaikan</option>
        </select>
        <label htmlFor="keterangan">Keterangan:</label>
        <textarea id="keterangan"></textarea>

      <button type="submit">Tambah Inventaris</button>
    </form>
  </section>
  )
}