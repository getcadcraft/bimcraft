---
title: Periksa pipa dan duct terhadap struktur
summary: Jalankan kumpulan benturan siap pakai dari pipa dan duct terhadap dinding, pelat, balok, dan kolom; temukan jalur yang lebih dekat ke struktur daripada isolasi dan celahnya, serta daftar bukaan yang dibutuhkan jalur melalui dinding dan pelat sebagai CSV dan BCF.
keywords: mep, benturan, pemeriksaan benturan, koordinasi, struktur, dinding, pelat, balok, kolom, jarak bebas, benturan lunak, isolasi, celah, bukaan, penetrasi, selongsong, inti, builder's work, bcf, csv
from: 2d597f01
---

## Yang akan Anda lakukan

Pastikan instalasi sesuai dengan bangunan: apa yang masuk ke struktur, apa yang terlalu dekat dengannya, dan di mana dinding serta pelat perlu lubang. Buka {{ui:Pemeriksaan benturan}} di panel kiri; bagian **Pipa dan duct terhadap struktur** berada di bawah pemeriksaan biasa.

## Benturan keras

Kedua daftar set kini juga menawarkan **Pipa dan duct**, **Dinding**, **Pelat dan atap**, **Balok**, **Kolom**, dan **Struktur** (keempatnya), dengan jumlah elemen yang dimuat masing-masing. Klik {{ui:Pipa dan duct × struktur}} untuk memilih yang pertama dan terakhir lalu menjalankan pemeriksaan; atau pilih pasangan apa pun sendiri dan klik {{ui:Jalankan}}. Lihat [Periksa benturan](topic:clash-check).

## Jarak bebas

Beberapa instalasi memerlukan ruang di sekitarnya: isolasinya, serta ruang untuk bekerja atau untuk selongsong.

1. Beri jalur pipa atau duct ketebalan **Isolasi** di Properti (tidak ada yang digambar untuknya).
2. Ketik **Celah di sekitar pipa dan duct** (mm) di Pemeriksaan benturan.
3. Klik {{ui:Periksa jarak bebas}}: tiap bagian yang lebih dekat ke dinding, pelat, balok, atau kolom daripada isolasinya ditambah celah akan didaftar beserta jarak yang dimilikinya dan jarak yang diinginkannya. Klik sebuah baris untuk melihat keduanya.

Bagian yang melewati dinding atau pelat adalah bukaan, bukan jarak bebas, dan didaftar di sana sebagai gantinya.

## Bukaan yang diperlukan

Klik {{ui:Bukaan yang diperlukan}}. Di tempat garis tengah jalur melewati dinding atau pelat, BimCraft mendaftar bukaan yang dibutuhkannya: bulat untuk pipa atau duct bulat, selain itu persegi panjang, seukuran ukuran luar jalur ditambah dua kali isolasinya ditambah dua kali celah, berpusat di tempat jalur memotong. Klik sebuah baris untuk melihat jalur dan dinding atau pelatnya.

- {{ui:Bukaan sebagai CSV}}: satu baris per bukaan dengan jalur, ukuran dan isolasinya, ukuran bukaan, elemen yang dilaluinya beserta GlobalId-nya, lantai, koordinat X, Y, dan Z pusatnya, serta seberapa jauh jalur menembus.
- {{ui:Bukaan sebagai isu BCF}}: satu isu per bukaan, dengan kamera yang menghadapnya serta jalur dan elemen yang dipilih, untuk program insinyur struktur.

:::note
Tidak ada yang dipotong: bukaan hanyalah daftar untuk orang yang menentukan ukurannya. Celah diketik oleh Anda; tidak ada kode yang menyebutkan seberapa besar bukaan harus. Balok dan kolom adalah benturan, bukan bukaan: apakah pipa boleh melewatinya adalah keputusan insinyur struktur.
:::
