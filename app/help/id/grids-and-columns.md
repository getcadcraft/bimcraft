---
title: Grid dan kolom
summary: Atur garis grid dengan gelembung bernomor dan berhuruf, berdasarkan jarak atau satu per satu, gambar dinding dan kolom di sepanjangnya, dan lihat pada denah, tampak, dan potongan.
keywords: grid, garis grid, grid kolom, sumbu, gelembung, gridline, grid struktural, 1 2 3, A B C, kolom, tiang, pilar, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## Yang akan Anda lakukan

Tetapkan bangunan pada grid, lalu gambar dinding dan tempatkan kolom di sepanjang garisnya.

## Tempatkan seluruh grid

1. Aktifkan {{ui:Gambar}}, lalu pilih {{ui:Build}} › {{ui:Grid}}.
2. Klik {{ui:Tempatkan grid…}}. Tentukan berapa **garis bernomor** (1, 2, 3…) dan **garis berhuruf** (A, B, C…) yang Anda inginkan serta seberapa jauh jaraknya. Ketik satu jarak, atau beberapa jarak yang dipisahkan koma untuk bentang yang tidak seragam (misalnya `20', 24', 20'`). {{ui:Lewat garis terakhir}} adalah seberapa jauh setiap garis memanjang melewati garis luar dari jenis lainnya, dan {{ui:Diputar (derajat)}} memutar seluruh grid.
3. Klik {{ui:Tempatkan}}, lalu klik tempat perpotongan pertama (1 / A). Pratinjau mengikuti penunjuk.

Garis bernomor berjalan ke atas denah dan diberi jarak ke samping; garis berhuruf berjalan melintasi denah dan diberi jarak ke atas. Huruf I dan O dilewati, seperti pada gambar, sehingga tidak pernah terbaca sebagai 1 dan 0.

## Gambar garis grid satu per satu

Dengan {{ui:Grid}} aktif, klik tempat garis dimulai dan tempat garis berakhir. Garis mendapat label berikutnya dari jenis garis yang sejajar dengannya (setelah 3 datang 4; setelah B datang C). Tekan {{key:Esc}} untuk berhenti.

## Ubah garis grid

Dengan {{ui:Grid}} aktif, klik garis untuk memilihnya. Ketik {{ui:Label}} baru lalu tekan {{key:Enter}}, atau klik {{ui:Hapus garis ini}} (atau tekan {{key:Delete}}). {{ui:Gelembung}} menempatkan gelembung di kedua ujung, di awal atau akhir setiap garis, atau tidak sama sekali. Setiap perubahan adalah satu langkah: {{key:Mod+Z}} membatalkannya.

## Gambar sepanjang grid

Alat {{ui:Dinding}}, alat {{ui:Kolom}}, dan alat gambar lainnya menempel ke garis grid dan ke tempat perpotongannya (tanda snap berupa lingkaran kecil dengan silang).

**Kolom:** pilih {{ui:Build}} › {{ui:Kolom}}, pilih bentuk (persegi panjang atau bulat), ukuran, dan apakah kolom berjalan **sampai lantai di atasnya** atau ke tinggi tetap, lalu klik. {{ui:Di setiap perpotongan grid}} menempatkan kolom di setiap perpotongan yang belum memiliki kolom. Klik kolom untuk mengubah bentuk, ukuran, atau tingginya di {{ui:Properti}}; {{key:Delete}} menghapusnya. Kolom yang berjalan sampai lantai di atasnya mengikuti lantai tersebut ketika tingginya berubah.

## Yang harus Anda lihat

- Grid pada denah setiap lantai, dengan gelembung dan labelnya di ujung setiap garis.
- Garis grid pada kumpulan gambar: pada denah, dan pada tampak serta potongan tempat garis terlihat dari ujung, dengan gelembungnya di atas bangunan. Lihat [Tampak, potongan, dan lembar](topic:sheets).
- Dalam file IFC: satu grid untuk bangunan (IfcGrid, garis bernomor dalam satu daftar dan garis berhuruf dalam daftar lainnya), dan kolom sebagai IfcColumn dengan ukuran, tinggi, dan kuantitasnya. Program BIM lain menampilkan keduanya.

:::note
Grid yang berasal dari file program lain ditampilkan, dan alat-alat menempel padanya, tetapi garisnya tidak dapat diubah di sini.
:::
