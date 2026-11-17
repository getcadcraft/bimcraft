---
title: Melihat beberapa model IFC bersama
summary: Tambahkan lebih banyak file IFC ke adegan, seperti arsitektur, struktur, dan utilitas, lihat semuanya dalam koordinat yang sama, pindahkan satu, sembunyikan satu, dan pilih model mana yang Anda sunting.
keywords: federasi, federated, model gabungan, beberapa model, banyak file, gabung, overlay, koordinasi, disiplin, struktur, mep, utilitas, offset, pindahkan model, model aktif, tambahkan model
from: df0efbbf
---

## Yang akan Anda lakukan

Lihat model dari berbagai disiplin di satu tempat: model arsitek bersama model struktur dan utilitas. Setiap model tetap menjadi file sendiri; BimCraft hanya menampilkannya bersama-sama.

## Langkah

1. Buka model IFC pertama seperti biasa.
2. Di {{ui:Model}} di sebelah kiri, klik {{ui:Tambahkan model…}} dan pilih satu atau beberapa file IFC. Setiap file muncul di daftar dan di tampilan 3D.
3. Hapus centang model untuk menyembunyikannya; centang lagi untuk menampilkannya kembali.
4. Jika sebuah model muncul di tempat yang salah (titik survei berbeda), klik {{ui:Pindahkan}} di bawahnya, ketik seberapa jauh model harus dipindahkan sepanjang X, Y, dan Z dalam meter, lalu klik {{ui:Terapkan}}.
5. Model dengan titik adalah model yang Anda sunting. Klik titik model lain untuk menyunting model tersebut.
6. Klik × di samping model untuk mengeluarkannya dari adegan.

## Buka model tim

Ketika model yang terbuka adalah file cloud dalam proyek tim, {{ui:Buka model tim}} muncul di bawah daftar. Tombol ini membuka model IFC lain dari proyek di samping model ini, masing-masing dipindahkan sesuai offset yang ditetapkan proyek. Model yang disembunyikan dari Anda tetap tidak dibuka dan dihitung; model yang diputar proyek dibuka tanpa diputar dan juga dihitung; file yang bukan IFC (misalnya DWG) dilewati dan disebutkan di baris status. Model yang sudah terbuka tidak pernah dibuka dua kali. Tombol ini tersembunyi untuk file yang tidak berada dalam proyek tim.

## Yang seharusnya Anda lihat

- Setiap model dalam koordinat model pertama, sesuai penempatan file-nya. Model yang diekspor dari proyek yang sama akan sejajar tanpa perlu dipindahkan.
- Memilih elemen dari model yang tidak sedang Anda sunting menampilkan propertinya dalam mode baca saja, dengan {{ui:Sunting model itu}} untuk berpindah.
- {{ui:Pohon model}}, {{ui:Lantai}}, {{ui:Warna}}, daftar {{ui:Perubahan}}, penempatan item pustaka, dan {{ui:Simpan sebagai IFC}} semuanya bekerja pada model yang Anda sunting. Sembunyikan, isolasi, tembus pandang, dan {{ui:Pilih semua}} bekerja di semua model.
- {{ui:Simpan sebagai IFC}} mengunduh model yang Anda sunting, hanya dengan perubahannya.

## Kesalahan umum

- **Sebuah model jauh atau tidak terlihat.** File-nya memakai koordinat lain. Gunakan {{ui:Paskan}} untuk menemukannya, lalu {{ui:Pindahkan}} ke posisinya.
- **Hapus atau Salin berwarna abu-abu pada elemen yang dipilih.** Elemen itu milik model lain: beralihlah ke model tersebut terlebih dahulu.
- **Membuka file dengan Pilih file menggantikan semuanya.** Itu memulai adegan baru. Gunakan {{ui:Tambahkan model…}} untuk menambahkan file ke adegan yang sudah ada.

## Berikutnya

- [Sembunyikan, isolasi, dan lihat tembus elemen](topic:hide-and-isolate)
- [Warnai elemen menurut properti](topic:color-by-property)
