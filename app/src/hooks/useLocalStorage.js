import { useEffect, useState } from 'react'

export default function useLocalStorage(penyimpanan, kondisiAwal) {
  const [nilai, setNilai] = useState(() => {
    const tersimpan = localStorage.getItem(penyimpanan)
    return tersimpan ? JSON.parse(tersimpan) : kondisiAwal
  })

  useEffect(() => {
    if (nilai === null) {
      localStorage.removeItem(penyimpanan)
    } else {
      localStorage.setItem(penyimpanan, JSON.stringify(nilai))
    }
  },
  [penyimpanan, nilai])

  return [nilai, setNilai]
}