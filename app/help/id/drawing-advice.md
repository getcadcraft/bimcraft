---
title: Saran gambar: ukuran tidak biasa tetap dibuat, dengan peringatan
summary: BimCraft membuat apa yang Anda minta. Ukuran di luar yang biasa menjadi peringatan di Masalah; ukuran itu tidak pernah menghentikan Anda menggambar atau menyimpan.
keywords: saran, peringatan, masalah, ditolak, tidak akan menggambar, terlalu kecil, terlalu sempit, minimum, batas, lebar tangga, tanjakan, injakan, kolom, ramp, ukuran pintu, garis grid, tinggi level, dormer, tangga spiral, kemiringan pad, dinding pendek, tanpa penghalang
from: 20090130
---

## Yang akan Anda lakukan

Gambar sebuah ukuran yang tidak biasa, dan lihat di mana BimCraft memberi tahu Anda tentangnya.

## Langkah

1. Gambar atau ubah elemen seperti yang Anda inginkan: misalnya tangga lebar 400 mm.
2. BimCraft membuatnya sesuai permintaan.
3. Buka {{ui:Problems}} di bilah atas. Di bawah **Saran gambar** ada peringatan yang menyebut elemen, ukuran yang Anda berikan, dan rentang yang biasa.
4. Klik peringatan untuk memilih elemen. Ubah ukurannya jika itu kekeliruan, atau biarkan: peringatan dapat diterima, dengan atau tanpa alasan.

## Apa itu saran

Ini dulu ditolak. Sekarang dibuat, masing-masing dengan peringatan:

- **Tangga**: lebih sempit dari 500 mm atau lebih lebar dari 5 m; tanjakan di luar 100 sampai 300 mm; injakan di luar 150 sampai 600 mm.
- **Tangga spiral**: tiang di luar 40 sampai 400 mm; injakan kurang dari 100 mm kedalamannya pada garis jalan.
- **Kolom**: kurang dari 50 mm lebarnya atau kurang dari 300 mm tingginya.
- **Ramp**: kurang dari 300 mm lebarnya.
- **Pintu dan jendela**: kurang dari 100 mm lebar atau tingginya.
- **Garis grid**: kurang dari 100 mm panjangnya.
- **Dinding**: dinding yang tersisa kurang dari 50 mm panjangnya, misalnya karena pemangkasan.
- **Level**: kurang dari 1 m atau lebih dari 100 m tingginya (bangunan baru, level terpisah, atau tinggi sebuah level).
- **Dormer**: di luar 600 mm sampai 12 m lebarnya, dinding depan di luar 300 mm sampai 4 m, tritisan lebih dari 1 m, dinding di luar 50 sampai 400 mm.
- **Pad bangunan**: kemiringan sisi di luar 1:1 sampai 10:1.

## Yang masih ditolak

Hanya yang tidak dapat dibuat atau ditemukan, masing-masing dengan pesan yang menjelaskan alasannya:

- Ukuran di bawah 10 mm (dinding di bawah 1 mm): tidak ada yang dapat dibuat.
- Dormer yang tidak lebih lebar dari dua kali tebal dindingnya: kedua dinding sampingnya akan bertemu.
- Pad bangunan dengan kemiringan sisi lebih curam dari 0.1:1 (itu dinding penahan) atau lebih landai dari 100:1 (penggalian akan berjalan tanpa akhir).
- Sesuatu yang tidak muat di tempat yang Anda pilih, garis luar yang berpotongan dengan dirinya sendiri, atau elemen yang tidak lagi ada di model.

## Yang perlu diketahui

- Saran dihitung dari model, jadi saran itu muncul lagi saat Anda membuka berkas nanti, dan hilang saat ukurannya diperbaiki.
- Pemeriksaan model, paket regulasi, dan pemeriksaan IDS juga hanya mendaftar apa yang mereka temukan. Tidak ada yang ada di {{ui:Problems}} yang menghentikan Anda menggambar atau menyimpan.
- Rentang yang biasa adalah praktik umum, bukan kode bangunan. Untuk sebuah kode, tambahkan add-on Peraturan bangunan lalu pilih lokasi Anda.

## Berikutnya

- [Periksa model dari masalah umum](topic:model-checks)
- [Tangga dan pagar](topic:stairs-and-railings)
