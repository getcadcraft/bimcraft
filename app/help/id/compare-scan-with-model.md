---
title: Bandingkan pemindaian dengan model dan jadwal 4D
summary: Nilai setiap elemen model terhadap point cloud yang terbuka (terbangun, sebagian, hilang, belum terjangkau), lihat persen yang sudah terbangun, beri warna model menurut hasil itu, dan dengan jadwal 4D yang dimuat, daftar apa yang tertinggal atau mendahului pada hari 4D.
keywords: pemindaian, point cloud, kemajuan, persen selesai, terbangun, hilang, terlambat dari jadwal, mendahului jadwal, 4D, kemajuan lapangan, deviasi, as-built, pemindaian laser, drone, bandingkan
from: 6fdc9003
---

Buka IFC, buka point cloud di sebelahnya (lihat [Point cloud](topic:point-clouds)) dan tempatkan di atas model. Bagian {{ui:Bandingkan pemindaian dengan model}} muncul di panel kanan selama sebuah cloud terbuka.

## Apa yang dilakukannya

Tekan {{ui:Bandingkan}}. Setiap elemen model dinilai menurut permukaannya, karena itulah yang dilihat pemindai. Keenam sisi kotaknya dipotong menjadi sel sekitar 20 cm; sebuah sel dihitung jika sebuah titik pemindaian berada dalam {{ui:Toleransi}} Anda (mulai dari 50 mm) dari sisi itu. Sisi besar terbaik yang dihitung, sehingga dinding yang dipindai dari satu sisi tidak dirugikan karena sisi lainnya.

- **Terbangun**: setidaknya 40 % permukaan terlihat.
- **Sebagian**: 10 % sampai 40 %.
- **Hilang**: kurang dari itu, tetapi pemindaian mencapai elemen tersebut (titik dalam jarak 1.5 m darinya).
- **Belum terjangkau**: pemindaian tidak pernah ke sana, sehingga tidak ada yang dikatakan tentangnya.

Untuk elemen yang terbangun dan sebagian terbangun, juga diberikan rata-rata selisih titik pemindaian dari permukaan model, dan dikatakan apakah elemen itu di tempatnya (dalam toleransi), dekat (dalam tiga kali toleransi), atau meleset (lebih jauh). Hanya selisih hingga lima kali toleransi yang terlihat: elemen yang dibangun lebih jauh dari tempatnya daripada itu terbaca sebagai hilang.

Ringkasan memberikan persen terbangun di antara elemen yang dijangkau pemindaian, menurut jumlah dan menurut volume. Elemen yang sebagian terbangun dihitung terpisah dan tidak ditambahkan ke yang terbangun.

## Terhadap jadwal 4D

Dengan jadwal 4D yang dimuat (lihat [Jadwal 4D](topic:4d-schedule)), hasilnya juga memakai hari yang Anda atur di penggeser 4D: elemen yang jatuh tempo pada hari itu tetapi tidak ditampilkan pemindaian sebagai terbangun adalah **terlambat dari jadwal**; elemen yang belum jatuh tempo tetapi sudah terbangun adalah **mendahului jadwal**. Elemen yang terlambat didaftar di {{ui:Masalah}}, dan tabel dapat difilter hanya untuk elemen tersebut. Tanpa jadwal tidak ada yang dikatakan tentang terlambat atau mendahului.

## Tabel dan model

Klik sebuah baris untuk memilih elemen. {{ui:Beri warna model}} mewarnai elemen hijau (terbangun), kuning (sebagian), merah (hilang), atau abu-abu (belum terjangkau); {{ui:Warna sendiri}} mengembalikannya. {{ui:Simpan CSV}} menulis tabel. {{ui:Tandai elemen yang cocok sebagai terverifikasi lapangan}} menandai setiap elemen yang terlihat sebagai terbangun dan berada dalam toleransi sebagai terverifikasi lapangan (LOD 500, metode scan), dalam satu langkah yang dapat Anda urungkan. Lihat [Tandai elemen sebagai diperiksa atau terverifikasi lapangan](topic:verification).

:::warning
Ini membandingkan kotak setiap elemen dengan titik pemindaian dalam sebuah toleransi. Ini **bukan survei, bukan perhitungan kuantitas, dan bukan dasar pembayaran**. Elemen yang tersembunyi di belakang elemen yang dipindai (dinding di balik lapisan, pelat di bawah finishing lantai) berbagi permukaannya dan dapat terbaca sebagai terbangun; elemen melengkung atau miring memiliki kotak yang lebih besar dari tubuhnya dan dapat terbaca sebagai sebagian atau hilang. Periksa daftarnya sebelum Anda bertindak berdasarkan itu. Komentar izin dan catatan kemajuan tidak termasuk dalam ini: keduanya tetap berada di kolom tempat Anda menyimpannya.
:::

Asisten dapat menjalankan perbandingan yang sama dengan alat {{ui:Bandingkan pemindaian dengan model}}; ia tidak mengubah apa pun di model.
