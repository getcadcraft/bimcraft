---
title: Titik untuk setting out, dan pemeriksaan as-built
summary: Beri nomor pada titik-titik yang akan dipatok kru di lapangan dari model yang terbuka, seperti pusat kolom, ujung dinding, baut angkur, sleeve, atau elemen apa pun yang Anda pilih, tulis untuk total station, lalu baca kembali titik as-built kru dan lihat mana yang meleset.
keywords: titik layout, setting out, pematokan, total station, survei, file titik, csv, txt, pnezd, penzd, xyz, northing, easting, elevasi, as built, as-built, pemeriksaan, toleransi, deviasi, baut angkur, pusat kolom, ujung dinding, sleeve, koordinat survei, konversi peta
from: acea9606
---

Tab {{ui:Points}} di sisi kanan membuat titik yang akan dipatok kru di lapangan dari model yang terbuka, dan memeriksa titik yang mereka ukur setelahnya.

## Buat titik

1. Buka model IFC dan tab {{ui:Points}}.
2. Centang apa yang akan dipatok: **column centres** (kaki garis tengah setiap kolom), **wall ends** (kedua ujung sumbu setiap dinding, pada dasarnya), **anchor bolts**, **sleeves** (elemen yang namanya atau tipenya menyebut sleeve), dan **picked elements** (masing-masing pada titik penempatannya; pilih dahulu di tampilan).
3. Pilih nomor pertama dan awalan, koordinat, satuan, kolom, dan file:
   - **Model**: koordinat milik file. **Survey grid**: grid peta dari georeferensi model (hanya ditampilkan jika IFC memiliki konversi peta), dalam meter atau satuan yang Anda pilih.
   - Kolom **PNEZD** (titik, northing, easting, elevasi, deskripsi), **PENZD**, atau **XYZ**; **CSV** (koma) atau **TXT** (tab).
4. Tekan {{ui:Make points}}: daftar menampilkannya dan tampilan menandainya dengan biru. {{ui:Download the points}} menulis file-nya.

Titik muncul dalam urutan tetap: menurut jenisnya, lalu berbaris-baris di atas denah, sehingga membuatnya lagi dari model yang sama menghasilkan angka yang sama. File ini adalah file yang dibuka CivilCraft dan yang ditulis EXPORTPOINTS CadCraft: satu titik per baris, tiga desimal, dan deskripsi di antara tanda kutip jika memuat koma.

## Periksa titik as-built

Saat kru mengirim kembali hasil ukurnya, pilih **tolerance** dalam milimeter dan cara memasangkan titik: menurut **point number** (mereka menyimpan nomor Anda) atau **nearest shot** (bidikan terdekat), lalu tekan {{ui:Read as-built points…}}. Bacalah file dalam satuan dan koordinat yang sama dengan saat Anda menulisnya.

Setiap titik desain kemudian berstatus **within** (dalam toleransi), **outside** (di luar toleransi), **not measured** (tidak diukur), dan bidikan yang tidak diminta siapa pun berstatus **extra**. Tabel menampilkan selisihnya dalam satuan yang Anda pilih di bilah alat, dengan kaki sebagai desimal inci (as built dikurangi desain: timur, utara, tinggi, dan jarak di denah); tampilan menandai setiap titik hijau atau merah dengan garis ke bidikannya, dan abu-abu jika tidak diukur. {{ui:Report (CSV)}} menulis seluruh perbandingan.

Tidak ada yang di sini mengubah model. Belum dibuat: penandaan dari tepi pelat, perpotongan grid, atau bukaan yang dibuat untuk Anda, serta mengirim titik langsung ke instrumen. Gunakan file untuk itu.
