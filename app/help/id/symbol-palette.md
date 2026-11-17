---
title: Palet simbol
summary: Temukan simbol listrik dan plambing berdasarkan nama atau gambar, beri bintang pada yang sering Anda pakai, dan tempatkan di denah dengan satu klik.
keywords: palet simbol, tombol bilah simbol, dinding mengikuti, simbol, simbol listrik, simbol plambing, denah plambing, kloset, toilet, lavatory, wastafel, bak mandi, shower, drain lantai, cleanout, keran selang, pemanas air, katup, katup gerbang, air dingin, air panas, buangan, ventilasi, gaya garis, favorit, cari
from: 67f20bc0
---

## Yang akan Anda lakukan

Buka satu panel yang mencantumkan simbol listrik dan simbol denah plambing beserta gambar dan namanya, temukan yang Anda inginkan, lalu tempatkan di denah. Tidak ada yang di sini memerlukan internet: simbolnya sudah ikut dengan aplikasi.

## Buka dan tempatkan simbol

1. Buka model dan buka {{ui:Build}} › {{ui:Palet simbol}} (perintah yang diketik: SYMBOLS). Tombol yang sama ada di menu Alat pada bilah Gambar dan sebagai **Simbol** di grup Pustaka pada bilah alat.
2. Pilih satu set: **Listrik** atau **Plambing**, atau **Semua set**. Ketik di kotak pencarian untuk mempersempit daftar. Anda dapat mencari menurut nama atau singkatan (WC, CW, HB).
3. Klik sebuah simbol. Denah siap untuk menempatkannya.
   - Simbol **listrik** memulai alat Listrik dengan perangkat itu terpilih, sehingga semua yang ada di [Denah listrik](topic:electrical-plan) berlaku: klik denah, satu langkah urungkan.
   - Simbol **plambing** memulai alat simbol denah. Klik denah. Perlengkapan yang menempel di dinding (kloset, lavatory, bak mandi, wastafel, keran selang) menempel ke muka dinding terdekat dengan punggungnya menghadap dinding; drain, katup, pemanas air dan gaya garis ditempatkan di tempat Anda klik.
4. Tekan {{key:R}} untuk memutar simbol 90 derajat ({{key:Shift}}+{{key:R}} memutarnya ke arah sebaliknya), atau ketik sudut di **Rotasi** pada bilah opsi. Tekan {{key:Esc}} untuk berhenti.

Perlengkapan atau keran selang yang menempel ke muka dinding mengingat dinding itu: bila dinding dipindahkan, simbol ikut bergerak (muka yang sama, jarak yang sama sepanjang dinding) dalam langkah urungkan yang sama. Bila Anda menghapus dinding, simbol tetap di tempatnya dan Masalah mencantumkan "kehilangan dindingnya"; pindahkan atau hapus simbol itu. Simbol yang ditempatkan jauh dari dinding tidak terikat pada apa pun.

Setiap simbol yang Anda tempatkan adalah satu langkah urungkan. Simbol yang sudah ditempatkan adalah anotasi denah di file IFC dengan tag-nya (WC1, WC2, ...). Pilih simbol untuk mengubah tag atau putarannya di **Properti**, atau tekan {{key:Delete}}.

## Isi set plambing

Perlengkapan (kloset, urinoir, lavatory, bak mandi, shower, wastafel dapur, wastafel tunggal), drain lantai, cleanout lantai dan dinding, keran selang, hidran dinding, pemanas air, katup (gerbang, globe, bola, cek, kupu-kupu, pengurang tekanan) dan gaya garis dengan singkatannya: air dingin (CW), air panas (HW), kembali air panas (HWR), buangan (W), ventilasi (V), drain badai (SD) dan gas (G). Gambar-gambar ini menyesuaikan skala denah, sehingga ukurannya tetap di lembar yang dicetak. Gaya garis adalah potongan pendek untuk menunjukkan gaya garis di denah; gambarkan lintasan pipa yang sebenarnya dengan alat pipa.

:::note
Ini adalah konvensi denah plambing yang umum, digambar oleh kami; tidak tersertifikasi ke ISO 4067-1 atau ASME Y32.4. Konvensi ini dibandingkan dengan legenda gambar publik dan modul pelatihan (daftarnya ada di catatan sumber set, yang menjelaskan di mana kami sesuai dan di mana kami berbeda), tidak disalin dari produk mana pun, dan boleh digunakan secara bebas (Apache-2.0). Set gambar berbeda-beda, jadi periksa legenda proyek Anda sendiri. Ini adalah simbol denah, bukan desain plambing: simbol ini tidak menentukan ukuran pipa atau memeriksa kode.
:::

## Favorit dan keyboard

- Klik bintang pada simbol (atau tekan {{key:F}} saat simbol itu terpilih) untuk menyimpannya sebagai favorit. Favorit ditampilkan lebih dulu dan tetap tersimpan di peramban ini. **Hanya favorit** hanya menampilkan favorit.
- {{key:Down}} dari kotak pencarian berpindah ke dalam simbol; tombol panah, {{key:Home}} dan {{key:End}} berpindah di antara simbol; {{key:Enter}} memilih simbol yang sedang fokus; {{key:Esc}} menutup palet.
- Di ponsel, palet berupa lembar di bagian bawah layar; lembar ini menyingkir saat Anda memilih simbol agar Anda dapat melihat denah. Bukalah lagi dari menu Build atau tombol **Palet** di bilah opsi.

:::tip
Jika sebuah file menggunakan set simbol yang tidak dimiliki build ini, denah menampilkan kotak di tempat simbol itu dan Masalah mencantumkannya.
:::

## Tautkan elemen yang ditempatkan ke simbol

Lampu dari Pustaka adalah elemen 3D, tetapi tata letak listrik menampilkannya sebagai simbolnya. Anda menempatkannya **sekali** lalu menautkannya:

1. Pilih Build › **Tautan simbol** (atau ketik SYMBOLLINK). Bagian Tautan simbol terbuka di panel kiri.
2. Pilih elemen yang sudah ditempatkan di denah atau di 3D. Bagian ini menyebutkan berapa yang dipilih dan ke apa elemen itu ditautkan.
3. Pilih **Simbol** (dari set simbol mana pun: Listrik, Plambing) lalu pilih **Tautkan**.

Elemen tetap satu elemen, dan setiap jadwal menghitungnya sekali:

- **3D** selalu menampilkan badannya.
- **Denah** menampilkan bentuk denahnya, seperti sebelumnya.
- Denah yang diatur **Tampilan ini menampilkan elemen tertaut sebagai** ke **Simbolnya (tata letak layanan)** menampilkan simbol di tempatnya. Klik pada simbol memilih elemennya. Pilihan ini disimpan untuk tampilan itu (denah lantai level, denah plafonnya, atau panggilan) di dalam file.

**Putar simbol 90°** memutar simbol terhadap elemennya. **Hapus tautan** melepaskan tautan; elemennya tetap ada. Jadwal **Simbol tertaut** mencantumkan setiap elemen tertaut sekali, dengan level dan ruangan tempatnya berada.

Belum dibuat: pilihan tampilan pada lembar adalah pilihan denah level yang ditampilkannya; perangkat yang ditempatkan dengan alat Listrik adalah simbol di setiap denah, seperti sebelumnya.
