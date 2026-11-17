---
title: Georeferensi dengan proyeksi apa pun
summary: Beri tahu BimCraft sistem peta mana yang dipakai koordinat sebuah model, dari seluruh daftar EPSG, zona UTM mana pun, atau proyeksi yang Anda definisikan sendiri, dan gunakan untuk Lokasi, layer peta, dan point cloud.
keywords: proyeksi, sistem koordinat, crs, epsg, utm, zona utm, proyeksi kustom, proj4, string proj, prj, wkt, georeferensi, konversi peta, ifcprojectedcrs, proyeksi saya, lintang, bujur, easting, northing, lambert, gauss-kruger, state plane, grid nasional
from: 6894c1f2
---

Beberapa denah digambar dalam sistem peta yang tidak ada dalam daftar pendek: zona UTM, grid nasional, atau proyeksi yang seseorang tuliskan sebagai definisi teks. {{ui:Ukur}} › {{ui:Sistem koordinat…}} memungkinkan Anda menyatakan sistem mana yang dipakai model.

## Pilih sistem untuk sebuah model

1. Buka model, pilih {{ui:Ukur}}, lalu {{ui:Sistem koordinat…}}.
2. Ketik di kotak pencarian. Salah satu dari ini berfungsi:
   - nomor EPSG: `32633` atau `EPSG:2277`;
   - zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - kata dari nama: `lambert 93`, `mga zone 56`, `texas central`;
   - definisi proyeksi: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opsional dengan nama di depannya (`My grid = +proj=…`);
   - teks dari file `.prj`, atau gunakan {{ui:Muat file .prj…}}.
3. Pilih hasil, lalu {{ui:Gunakan sistem ini}}.

Pilihan disimpan dalam model (sebuah set properti bernama `CadCraft_CRS` pada proyek), sehingga dibuka lagi bersama model. Simpan model untuk mempertahankannya. {{ui:Lepaskan dari model}} kembali ke apa yang dikatakan file.

Jika definisi Anda memberikan koordinat yang sama dengan sistem EPSG dalam daftar, BimCraft menyatakannya dan memakai kode itu; bila beberapa sistem dalam daftar memakai rumus yang sama, ia menyebutkan yang lainnya juga.

## Proyeksi saya

Definisi yang Anda tempel atau file `.prj` yang Anda muat dapat disimpan dengan {{ui:Simpan di Proyeksi saya}}. Daftarnya ada di perangkat ini (peramban ini) dan ditawarkan saat Anda membuka pemilih berikutnya.

## Yang memakainya

- {{ui:Ukur}} › {{ui:Lokasi}} mengubah titik yang dipilih menjadi lintang dan bujur melalui sistem model. Dulu ia berhenti dengan catatan ketika file menyebut sistem petanya tanpa kode EPSG; dengan pilihan yang tersimpan, ia memberi jawabannya.
- Layer peta di bawah model memakai sistem yang sama. Point cloud atau file terrain dalam sistem lain ditawarkan dengan milik model (lihat di bawah).
- {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Lokasi}} › {{ui:Pilih sistem lain…}} mengatur apa yang juga dilaporkan {{ui:Lokasi}}: lintang dan bujur dalam sistem geografis mana pun dalam daftar, atau easting dan northing dalam sistem proyeksi mana pun, selain milik model sendiri.

## Model yang belum ada di peta

Jika file tidak memiliki konversi peta, memilih sistem akan membuka {{ui:Tempatkan model ini di peta}}. Anda juga dapat membukanya dari {{ui:Ukur}} › {{ui:Titik asal peta…}}.

1. Berikan titik asal model sebagai easting dan northing dalam sistem itu, atau ketik lintang dan bujur lalu pilih {{ui:Konversi ke easting dan northing}}.
2. Berikan rotasi ke grid utara (derajat, berlawanan arah jarum jam; 0 berarti sumbu Y model mengarah ke grid utara) dan tinggi titik asal.
3. Skala dimulai dari selisih satuan antara model dan peta (0.001 untuk model dalam milimeter di atas grid meter). Ubah hanya untuk faktor gabungan tanah-ke-grid.
4. Pilih {{ui:Tempatkan di peta}}. Satu langkah urungkan menulis IfcProjectedCRS dan IfcMapConversion (IFC4). Model itu sendiri tidak bergerak.

Sebuah file IFC2X3 tidak memiliki kedua entitas itu. BimCraft menulis angka yang sama dengan cara yang diizinkan standar itu: set properti buildingSMART `ePSet_MapConversion` dan `ePSet_ProjectedCRS` pada proyek, lintang dan bujur lokasi, serta utara sejati. Dialog menyatakannya. Simpan model untuk mempertahankannya.

## Model yang sudah ada di peta

Ketika file sudah menempatkan dirinya di peta dan Anda memilih sistem lain, BimCraft bertanya:

- {{ui:Ubah hanya yang dilaporkan Lokasi}} mempertahankan georeferensi file sendiri dan memakai pilihan Anda untuk {{ui:Lokasi}}, layer peta, dan point cloud (angka model kemudian dibaca sebagai berada dalam sistem baru).
- {{ui:Pindahkan model ke sistem ini}} menulis ulang georeferensi: titik asal melewati proyeksi (easting, northing, tinggi, rotasi, dan skala), dan IfcProjectedCRS (nama, datum, proyeksi, zona, satuan) ditulis ulang, sehingga IFC yang disimpan menyatakan sistem baru. Posisi di bumi tetap sama: titik asal mempertahankan lintang dan bujurnya. Elemen di dalam model tidak pernah berubah; hanya georeferensinya.

Dialog menampilkan titik asal lama dan baru sebelum Anda memilih. Berpindah ke sana lalu kembali mengembalikan titik asal hingga dalam satu milimeter.

## Point cloud dan terrain dalam sistem lain

Sebuah awan atau file survei membawa sistemnya sendiri (LAS, LAZ, E57, GeoTIFF) atau tidak sama sekali. Ketika berbeda dari model, BimCraft menawarkan {{ui:Proyeksikan ulang ke sistem model}}. Titik-titiknya dipindahkan dalam kelompok (di worker bila banyak, sehingga halaman tetap dapat dipakai), file di komputer Anda tidak disentuh, dan baris status menyatakan apa yang dilakukan. Buka file lagi untuk kembali ke sistemnya sendiri. Untuk point cloud yang sudah terbuka, {{ui:Proyeksikan ulang ke model…}} di bilah cloud melakukan hal yang sama.

Jika file tidak menyebut sistem apa pun, BimCraft bertanya {{ui:File ini berada di sistem koordinat yang mana?}}: pilih dengan {{ui:Pilih sistem…}}, dan jawabannya diingat untuk file itu di perangkat ini. {{ui:Pertahankan sistem file}} membiarkan titik-titiknya apa adanya.

## Saat ada yang bersifat perkiraan

Masalah dicantumkan di dialog dan di panel Masalah, tidak pernah diam-diam:

- Tempat di luar wilayah yang dibuat untuk sistem itu: angkanya tetap berfungsi, tetapi distorsi bertambah.
- Pergeseran datum yang memerlukan file grid (NADCON, NTv2, dan sejenisnya) tidak tersedia. Sistem pada datum berbeda dipindahkan dengan pergeseran tanpa grid yang dicantumkan registri EPSG, dan hasilnya bersifat perkiraan sesuai akurasi yang dinyatakan, yang diberikan pesan dalam meter.
- Titik yang tidak dapat diproyeksikan dikeluarkan dan dihitung; file yang melewati batas ukuran ditolak dengan batas yang dinyatakan.

:::tip
Koordinat peta memerlukan konversi peta. File tanpa konversi ditempatkan di peta dengan {{ui:Titik asal peta…}}.
:::

:::note
Perpindahan antar datum tanpa file grid akurat hingga beberapa meter; hasil Lokasi menyebutkan seberapa jauh bila katalog mengetahuinya.
:::
