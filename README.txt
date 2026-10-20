KATALOG SENI OPEN HOUSE SMA CITRA BANGSA 2026
================================================

FILE
- index.html : struktur halaman
- style.css  : seluruh desain dan responsivitas
- script.js  : data karya, kategori, dan interaksi galeri
- images/    : folder gambar karya

CARA MENJALANKAN
1. Ekstrak ZIP.
2. Buka folder katalog_seni_cbs di VS Code.
3. Jalankan index.html menggunakan ekstensi Live Server (disarankan).
   Bisa juga membuka index.html langsung di browser.

MENAMBAHKAN GAMBAR ANYAMAN
Simpan gambar dengan nama:
images/anyaman/anyaman-01.jpg
images/anyaman/anyaman-02.jpg
...
images/anyaman/anyaman-10.jpg

Lalu sesuaikan judul, nama siswa, dan deskripsi pada bagian catalogData.anyaman di script.js.
Nama file harus sama persis, termasuk huruf besar/kecil jika diunggah ke server.

MENAMBAHKAN GAMBAR WAYANG
Simpan gambar dengan nama:
images/wayang/wayang-01.jpg
...
images/wayang/wayang-06.jpg

Lalu sesuaikan data catalogData.wayang di script.js.

MENAMBAHKAN KOMIK
Edit array catalogData.comic di script.js. Setiap komik adalah satu objek.
Contoh komik satu halaman:
{
  id: "c01",
  title: "Judul Komik",
  artist: "Nama Siswa",
  pages: ["images/komik/komik-01-halaman-1.jpg"],
  description: "Sinopsis singkat komik."
}

Contoh komik tiga halaman (tetap satu kartu/karya):
{
  id: "c02",
  title: "Petualangan di Sekolah",
  artist: "Nama Siswa",
  pages: [
    "images/komik/petualangan-01.jpg",
    "images/komik/petualangan-02.jpg",
    "images/komik/petualangan-03.jpg"
  ],
  description: "Cerita singkat tentang petualangan di sekolah."
}
Urutan gambar di dalam pages menentukan urutan halaman ketika pengunjung membuka komik.

CATATAN
- Kategori komik otomatis menghitung jumlah karya yang telah dimasukkan.
- Gambar menggunakan format JPG pada contoh, tetapi PNG dan WEBP juga bisa dipakai jika path di script.js disesuaikan.
- Situs ini belum memakai database; data dikelola dari script.js.
- Font Google membutuhkan koneksi internet. Jika offline, font cadangan tetap digunakan.
- Untuk dipublikasikan, unggah seluruh isi folder dengan struktur yang sama ke hosting statis seperti GitHub Pages atau Netlify.
