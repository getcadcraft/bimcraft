---
title: Lantai dengan bentuk apa pun, bukaan, dan ram
summary: Gambar lantai atau pelat berdasarkan garis batasnya (balkon, kantilever, bordes), potong bukaan di dalamnya, dan gambar ram beserta bordesnya.
keywords: lantai, pelat, garis batas, balkon, kantilever, bordes, dek, bukaan lantai, lubang, shaft, rongga, ram, kemiringan, ram aksesibel, ram kursi roda, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Yang akan Anda lakukan

Buat lantai yang tidak mengikuti ruang, seperti balkon di luar dinding, dan gambar ram di antara lantai.

## Gambar lantai berdasarkan garis batasnya

1. Aktifkan {{ui:Gambar}}, pilih lantai, lalu {{ui:Build}} › {{ui:Lantai dengan garis batas}}.
2. Di baris di bawah alat, pilih jenisnya (pelat beton atau lantai kayu), kegunaannya (lantai atau bordes), ketebalannya, dan seberapa jauh bagian atasnya di atas lantai (0 = sejajar dengan lantai pada level; nilai negatif menurunkannya).
3. Klik sudut-sudutnya. Alat menempel ke dinding, garis grid, dan perpotongannya; tahan {{key:Shift}} untuk membuat sebuah sisi tetap siku. Panjang setiap sisi dan luasnya tampil selama Anda menggambar. {{key:Backspace}} mengambil kembali sudut terakhir.
4. Klik sudut pertama lagi, klik dua kali, atau tekan {{key:Enter}} untuk selesai.

## Potong bukaan

Klik lantai (di tampilan 3D, atau garis batasnya di denah), lalu di {{ui:Properti}} klik {{ui:Tambah bukaan}} dan klik sudut-sudut bukaan di dalam lantai, dan selesaikan seperti di atas. Daftar {{ui:Properti}} lantai memuat bukaannya, masing-masing dengan {{ui:Hapus}}, dan luasnya tanpa bukaan.

## Gambar ram

1. Pilih {{ui:Build}} › {{ui:Ram}}. Atur lebarnya, dan apakah ram menuju **ke lantai di atas** atau **naik setinggi** yang Anda ketik.
2. Pilih cara pengaturannya: **berdasarkan kemiringan** (mulai dari 1:12; ram sepanjang yang dibutuhkan kenaikan) atau **berdasarkan panjang** (klik kedua menentukan panjangnya, dan kemiringan mengikuti).
3. Klik kaki ram (titik tengah sisi bawahnya), lalu klik arah naiknya. Pratinjau menampilkan panjangnya, jumlah flight, dan kemiringannya.

Kenaikan lebih dari 30 inci (760 mm) dibagi menjadi flight dengan bordes 5 kaki (1525 mm) di antaranya. Ini nilai perencanaan yang lazim, bukan aturan Anda: periksa peraturan di tempat Anda membangun. Ram yang lebih curam dari 1:12 ditandai di {{ui:Properti}}-nya.

## Yang Anda lihat

- Setiap lantai, bukaan, dan ram adalah satu langkah: {{key:Mod+Z}} mengambilnya kembali.
- Di denah, garis batas lantai yang digambar (bukaan digambar disilang), serta garis batas ram, flight-nya, bordesnya, dan panah naik dengan kemiringannya.
- Properti untuk lantai yang digambar (jenis, kegunaan, ketebalan, bagian atas, luas, bukaan) dan untuk ram (lebar, bagian atas, kenaikan, kemiringan atau panjang); {{key:Delete}} menghapus keduanya.
- Ram ke lantai di atas mengikuti lantai itu ketika tingginya berubah.
- Dalam file IFC: lantai yang digambar adalah slab (IfcSlab, sebagai lantai atau bordes) dengan bukaannya dipotong (IfcOpeningElement); ram adalah IfcRamp yang terdiri dari flight miring (IfcRampFlight) dan pelat bordes, dengan kemiringan dan lebarnya.

:::note
Lantai yang digambar dengan cara ini tetap berada di tempat Anda menggambarnya. Lantai yang dibuat dengan {{ui:Lantai}} mengikuti ruang ketika dinding berpindah: lihat [Ruang, lantai, plafon, dan atap](topic:floors-and-roofs).
:::
