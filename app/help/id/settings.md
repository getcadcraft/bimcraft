---
title: Pengaturan BimCraft
summary: Pilih apakah ruang dan spasi ditampilkan, apakah tepi digambar, dan tampilan apa yang dipakai saat model dibuka, serta mulai menempatkan dengan snap dinding aktif.
keywords: pengaturan, preferensi, opsi, spasi, ruang, ifcspace, tepi, garis, performa, model besar, tampilan pembuka, kamera, tampilan atas, snap dinding, snapping
from: 4416e64f
---

Buka {{ui:Pengaturan}} dengan ikon roda gigi di bilah aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:BimCraft}}, berisi pengaturan milik aplikasi ini; {{ui:Umum}} berisi pengaturan yang dipakai bersama oleh setiap aplikasi CadCraft (tema, bilah alat, panel). Pengaturan BimCraft hanya berlaku di aplikasi ini: Anda mengubahnya di sini, dan peramban ini mengingatnya. {{ui:Atur ulang pengaturan BimCraft}} di bagian bawah dialog mengembalikan pengaturan tersebut, dan pengaturan bersama, ke kondisi awal.

## Menu, pintasan dan mouse

Gaya menu (bilah alat BimCraft sendiri, bilah menu desain rumah, pita BIM, atau baris perintah gambar), pintasan dan menu buatan Anda sendiri, serta fungsi roda dan tombol mouse. Lihat [Menu, pintasan dan mouse](topic:menus-keys-and-mouse).

## Saat model dibuka

- **Tampilkan ruang dan spasi** (nonaktif saat awal): ruang dan spasi berupa kotak tembus pandang yang bisa menutupi dinding di belakangnya, sehingga saat awal disembunyikan. Tombol {{ui:Ruang}} di atas model tetap menyalakan dan mematikannya untuk model yang sedang terbuka.
- **Tepi**: {{ui:Tepi nyala}} (pilihan awal) menggambar garis tepi yang memberi kesan gambar drafting. {{ui:Hanya model kecil}} hanya menggambar tepi untuk model di bawah 300,000 segitiga, sehingga model besar tetap cepat diputar. {{ui:Tepi mati}} memulai setiap model tanpa tepi. Tombol {{ui:Tepi}} tetap dapat mengaktifkannya untuk model yang sedang terbuka. Di atas 1.5 juta segitiga, tepi selalu mati.

## Gambar dibuka dalam

Cara gambar DWG atau DXF pertama kali ditampilkan: {{ui:3D (tercepat)}} (pilihan awal) menggambar bahkan gambar besar dengan cepat, atau {{ui:Model (2D)}} membuka tampilan ruang model yang datar. Tab di atas gambar berpindah antara {{ui:Model}}, lembar, dan {{ui:3D}} kapan saja. Gambar tanpa apa pun di ruang model, atau peramban yang tidak dapat menampilkan 3D, selalu dibuka dalam 2D.

## Tampilan pembuka

Kamera saat model dibuka: {{ui:Paskan}} (pilihan awal, seluruh model dari salah satu sudut), {{ui:Atas}}, {{ui:Depan}}, atau {{ui:Samping}}. Tombol di atas model mengubah tampilan kapan saja.

**Bangunan yang diputar di tapaknya**: banyak model datang dengan bangunan yang membentuk sudut terhadap sumbu file (pada koordinat survei atau koordinat bersama). {{ui:Lurus terhadap bangunan}} (pilihan awal) menampilkan bangunan seperti itu dalam posisi lurus: {{ui:Paskan}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Samping}}, sisi kubus tampilan, dan setiap potongan baru mengikuti dindingnya, dan kompas pada kubus tampilan tetap menunjuk ke utara model. {{ui:Sesuai penempatan di tapak}} mempertahankan sumbu file. Bangunan yang dindingnya sejajar dengan sumbu terlihat sama dalam kedua pilihan.

## Menempatkan item pustaka

**Mulai dengan snap dinding aktif** (nonaktif saat awal): ketika penempatan atau penempelan item pustaka dimulai, bagian belakangnya menempel ke dinding terdekat, menghadap ruang. {{key:Tab}} atau {{ui:Snap dinding}} di bilah penempatan mematikannya untuk sementara. Lantai tanpa dinding dimulai tanpa fitur ini.

## Kotak potong

{{ui:Ruang di sekitar pilihan}} adalah jarak yang ditinggalkan {{ui:Kotak potong di sekitar pilihan}} di setiap sisi elemen yang dipilih, dalam milimeter: 300 saat awal, hingga 5000. Lihat [Potong model IFC dengan bidang potong](topic:section-plane).

## Lokasi

{{ui:Lintang dan bujur dalam}} memilih sistem yang dipakai {{ui:Ukur}} › {{ui:Lokasi}} untuk menampilkan lintang dan bujur: WGS 84 (EPSG:4326, pilihan awal, seperti yang dipakai GPS dan peta web), {{ui:Datum milik file}}, atau salah satu dari ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011, dan CGCS2000. Sistem peta dan datum milik file selalu ditampilkan juga. Lihat [Ukur jarak, luas permukaan, dan lokasi dalam 3D](topic:measure).

## Indikator sudut

Yang berada di pojok kanan bawah tampilan 3D (model IFC, dan gambar yang diganti ke 3D): {{ui:Kubus tampilan}} (pilihan awal), {{ui:Ikon sumbu}} (X, Y, dan Z kecil), atau {{ui:Tidak ada}}. Perubahannya langsung terlihat. Tampilan gambar 2D tidak pernah menampilkannya.

Pada kubus tampilan, klik sebuah sisi, tepi, atau sudut untuk melihat dari sisi tersebut, seret kubus untuk mengorbit, seret cincin untuk memutar, dan klik ikon rumah untuk kembali ke tampilan awal.

## Nama Anda pada isu

Saat masuk, isu membawa nama akun Anda dan BimCraft tidak meminta apa pun: bagian ini menampilkan {{ui:Dari akun Anda (<name>)}}. {{ui:Gunakan nama lain}} membuka kotak untuk nama yang berbeda, yang berlaku sampai Anda memilih {{ui:Gunakan nama akun saya}}. Saat keluar, formulir isu tetap meminta nama seperti sebelumnya. Lihat [Isu dan file BCF](topic:issues-bcf).

## Asisten

**Izinkan asisten AI dan skrip menggunakan BimCraft** (nonaktif saat awal) memungkinkan asisten di komputer Anda mengakses model yang terbuka melalui CadCraft Studio: **Baca** menemukan elemen dan membaca propertinya, **Ubah tampilan** mengisolasi, menyembunyikan, dan menampilkan elemen tersebut. **Aktivitas** mencantumkan panggilannya. Lihat [Izinkan asisten AI bekerja dengan model Anda](topic:assistants).

:::note
Pengaturan lainnya berlaku saat model dibuka atau penempatan dimulai. Model yang sudah terbuka mempertahankan tampilannya sampai Anda menggunakan tombol bilah alat atau membukanya lagi.
:::

## Terkait

- [Salin, tempel, dan duplikat item pustaka](topic:copy-paste)
- [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library)
- [Layar BimCraft](topic:workspace)
- [Izinkan asisten AI bekerja dengan model Anda](topic:assistants)
