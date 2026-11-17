---
title: Menemukan jalan dengan pohon model
summary: Telusuri model IFC menurut proyek, tapak, bangunan, lantai, dan ruang, dengan elemennya dikelompokkan menurut jenis; centang kotak untuk menampilkan dan menyembunyikan, klik baris untuk memilih, dan klik dua kali untuk zoom.
keywords: pohon model, pohon, struktur, struktur spasial, peramban, garis besar, navigator, lantai, level, ruang, grup, kelas, sembunyikan, tampilkan, pilih, zoom
from: 69de4ab7
---

## Yang akan Anda lakukan

Melihat bagaimana sebuah model disusun dan menjangkau elemen mana pun tanpa mencarinya di 3D: bangunannya, lantai-lantainya, ruang di setiap lantai, dan elemen di dalamnya, dikelompokkan menurut jenis (dinding, pintu, pelat…).

## Langkah-langkah

1. Buka model IFC. {{ui:Model tree}} di sisi kiri terbuka sampai ke lantai-lantainya.
2. Klik panah di samping baris untuk membuka atau menutupnya. Sebuah lantai memuat ruangnya lebih dulu, lalu elemennya menurut jenis beserta jumlahnya. Elemen yang tersusun dari beberapa bagian, seperti tangga, memuat bagian-bagiannya.
3. Hapus centang kotak sebuah baris untuk menyembunyikan semua isinya; centang lagi untuk menampilkannya kembali. Kotak bertanda minus berarti hanya sebagian isinya yang ditampilkan.
4. Klik nama baris untuk memilih apa yang diwakilinya: satu elemen, atau setiap elemen dalam sebuah grup, lantai, atau ruang. {{key:Mod}}+klik menambahkannya ke pilihan, atau mengeluarkannya.
5. Klik tombol {{ui:i}} di samping lantai, ruang, atau bangunan untuk melihat propertinya sendiri.
6. Klik dua kali sebuah baris untuk zoom ke baris itu.

## Yang akan terlihat

- Saat Anda memilih elemen di tampilan 3D, pohon terbuka sampai ke elemen itu dan menandainya.
- Elemen yang disembunyikan dicoret. Kotak-kotak pada pohon dan {{ui:Tampilkan}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) bekerja bersama: lihat [Sembunyikan, isolasi, dan tembus pandang elemen](topic:hide-and-isolate).
- Elemen yang tidak ditempatkan model di lantai mana pun berada dalam sebuah grup di bagian akhir, **Tidak ada dalam struktur spasial**.
- Grup yang panjang menampilkan 200 baris sekaligus; klik **Tampilkan lebih banyak** di bawahnya untuk sisanya.

## Tombol pintasan

Saat nama sebuah baris difokus: {{key:Up}} dan {{key:Down}} bergerak, {{key:Right}} membuka, {{key:Left}} menutup atau naik, {{key:Space}} mencentang kotak, {{key:Enter}} memilih.

## Kesalahan umum

- **Kotak sebuah lantai dicentang tetapi tidak ada yang tampil.** Daftar {{ui:Storeys}} di bawah pohon mematikan seluruh lantai dengan sendirinya: centang juga di sana.
- **Sebuah baris tidak memilih apa pun.** Beberapa baris, seperti ruang kosong, tidak memiliki elemen yang dapat digambar; baris status akan menyebutkannya.

## Berikutnya

- [Hapus, potong, salin, dan tempel elemen bangunan](topic:edit-elements)
- [Tampilkan dan sembunyikan lantai, ruang, dan tepi](topic:storeys-and-spaces)
