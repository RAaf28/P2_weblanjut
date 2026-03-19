console.log('beritaController module loaded');

const berita = [
  { id: 1, judul: 'Kuliah Web Lanjutan Dimulai', isi: 'Semester baru telah dimulai dengan mata kuliah Web Lanjutan.', tanggal: '2026-03-10' },
  { id: 2, judul: 'Workshop React & Node.js', isi: 'Workshop pengembangan web modern menggunakan React dan Node.js.', tanggal: '2026-03-12' },
  { id: 3, judul: 'Pendaftaran UTS Dibuka', isi: 'Pendaftaran Ujian Tengah Semester sudah dapat dilakukan melalui portal akademik.', tanggal: '2026-03-15' },
];

exports.getBerita = (req, res) => {
  res.json(berita);
};
