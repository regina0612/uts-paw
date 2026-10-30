import mahasiswa from '../../mahasiswa.json'

const github = 'https://github.com/regina0612/uts-paw.git'
export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Data Diri</h1>
      <dl>
        <dt>Nama</dt><dd>{nama}</dd>
        <dt>NIM</dt><dd>{nim}</dd>
        <dt>Kelas</dt><dd>{kelas}</dd>
        <dt>Tema</dt><dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={github}>{github}</a>
      </p>
    </section>
  )
}