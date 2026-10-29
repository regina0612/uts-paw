export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Ketik Nama Alat"
      aria-label="kolom pencarian"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}