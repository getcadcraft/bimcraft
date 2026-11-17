---
title: Cat material pada dinding, lantai, dan atap
summary: Beri elemen material seperti bata, siding, sirap, kayu, atau ubin, pada seluruh elemen atau pada salah satu sisinya, disimpan dalam IFC dan ditampilkan di gambar render.
keywords: cat, material, materials, finis, finishes, tekstur, bata, siding, sirap, atap, kayu, batu, ubin, beton, plester, rumput, kerikil, kaca, logam, sisi dinding, dalam, luar, finis lantai, ruang, gaya permukaan
from: fbfed676
---

{{ui:Cat}} di bilah alat membuka pustaka material di atas tampilan 3D: bata dan blok, siding, atap, kayu, batu, ubin, beton, plester, tanah, kaca, dan logam.

## Cat elemen

1. Klik {{ui:Cat}}.
2. Klik sebuah material.
3. Klik elemen di tampilan 3D. Setiap klik mengecat elemen yang Anda klik.

Untuk mengecat banyak sekaligus, pilih dulu (klik, {{key:Ctrl}}+klik, atau [pencarian](topic:find)), lalu klik materialnya: setiap elemen yang dipilih menerimanya dalam satu langkah.

Elemen langsung menampilkan warna material di tampilan 3D. Teksturnya tampil dalam [gambar render](topic:render). {{key:Esc}} atau {{ui:Tutup}} mengakhiri pengecatan.

## Cat satu sisi

Pilih {{ui:Hanya sisi yang diklik}}, lalu klik sisi yang Anda inginkan: bagian luar dinding dengan siding dan bagian dalamnya dengan finis lain, atau bagian atas lantai dengan kayu sementara bagian bawahnya dibiarkan. Bagian elemen lainnya tetap memakai materialnya.

Sebuah sisi ditentukan dari arah elemen itu sendiri, sehingga tetap menjadi sisi yang sama saat Anda memindahkan atau memutar elemen.

Untuk mengecat lantai ruang demi ruang, beri setiap ruang lantainya sendiri ({{ui:Gambar}} › {{ui:Lantai}} › **Ruang ini**, lihat [Ruang, lantai, plafon, dan atap](topic:floors-and-roofs)), lalu cat bagian atas setiap lantai.

## Lepas material

Klik kotak bergaris ({{ui:Tanpa material}}), lalu klik elemennya. Setiap material pada elemen itu, termasuk sisinya, dihapus.

## Dalam file

Pengecatan mengubah IFC (satu langkah masing-masing, {{key:Ctrl+Z}} membatalkannya) dan tetap berupa IFC biasa:

- setiap elemen yang dicat mendapatkan set properti `CadCraft_Render` yang menyebut materialnya, dan satu properti untuk setiap sisi yang dicat;
- badannya mendapatkan gaya permukaan dengan warna material, sehingga program BIM lain menampilkan warnanya. Di IFC4, gaya itu juga menyebut teksturnya.

Ketika BimCraft mengubah bentuk dinding yang Anda cat (misalnya Anda memindahkan ujungnya), dinding itu tetap mempertahankan materialnya dan warnanya, di BimCraft, di gambar render, dan di program lain.

:::note
Tekstur digambar oleh BimCraft sendiri: tekstur itu berfungsi tanpa internet dan bebas dipakai untuk keperluan apa pun (CC0). Tekstur gambar Anda sendiri belum dibuat.
:::

## Tekstur di tampilan 3D

Dinding bata yang dicat menampilkan batanya, lantai kayu menampilkan papan-papannya, dalam ukuran sebenarnya, begitu cat terpasang. Hapus centang **Tampilkan tekstur di tampilan 3D** di palet Cat untuk melihat warna datar. (Model yang sangat besar otomatis mematikannya dan memberitahukannya.) Warna menurut properti selalu menampilkan warnanya sendiri. Tekstur digambar oleh program, sehingga tidak ada yang diunduh; gambar render dan file glTF tetap membawanya dalam kedua keadaan.
