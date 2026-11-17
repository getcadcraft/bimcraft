---
title: Sembunyikan, isolasi, dan buat tembus pandang elemen
summary: Pilih beberapa elemen, sembunyikan, tampilkan hanya elemen tersebut, atau tampilkan dengan semua yang lain tembus pandang, lalu kembalikan semuanya.
keywords: sembunyikan, isolasi, tembus pandang, transparan, hantu, sinar-X, tampilkan semua, tampilkan lagi, pilih beberapa, pilihan ganda, ctrl klik, shift klik, visibilitas
from: 97e98b8c
---

## Yang akan Anda lakukan

Bersihkan tampilan hingga hanya yang sedang Anda lihat: sembunyikan elemen yang menghalangi, tampilkan hanya yang Anda pilih, atau biarkan semua yang lain tetap di layar sebagai garis tepi samar agar Anda tetap tahu posisi Anda.

## Langkah

1. Buka model IFC. Lihat [Buka model IFC dan jelajahi dalam 3D](topic:open-ifc-model).
2. Klik elemen untuk memilihnya. Untuk memilih lebih banyak, tahan {{key:Mod}} atau {{key:Shift}} dan klik masing-masing. Mengklik elemen yang sudah dipilih dengan cara itu akan mengeluarkannya lagi.
3. Buka {{ui:Tampilkan}} pada bilah alat dan pilih tindakannya, atau tekan tombol pintasannya:
   - {{ui:Sembunyikan}} ({{key:H}}) menyembunyikan elemen yang dipilih.
   - {{ui:Isolasi}} ({{key:I}}) hanya menampilkan elemen yang dipilih.
   - {{ui:Tembus pandang}} ({{key:T}}) menampilkan elemen yang dipilih apa adanya dan semua yang lain tembus pandang.
4. Klik {{ui:Tampilkan semua}} pada menu yang sama, atau tekan {{key:Shift+H}}, untuk menampilkan setiap elemen lagi.
5. Untuk memotong semua yang ada di sekitar elemen yang dipilih, klik {{ui:Kotak potong di sekitar pilihan}} pada menu yang sama, atau tekan {{key:Shift+X}}. Lihat [Potong model IFC dengan bidang potong](topic:section-plane).

## Yang harus Anda lihat

- Dengan beberapa elemen dipilih, {{ui:Properti}} menyebutkan jumlahnya dan mendaftarkannya menurut kelas. Klik satu elemen saja untuk melihat propertinya.
- Elemen tersembunyi tidak dapat dipilih: klik akan mengenai apa pun yang ada di belakangnya.
- Elemen tembus pandang juga tidak dapat dipilih, sehingga Anda dapat mengklik langsung menembus dinding ke apa yang Anda isolasi.
- Tepi ikut tersembunyi bersama elemennya, dan menjadi samar bersamanya.
- Status sembunyikan, isolasi, dan tembus pandang tetap seperti semula saat Anda menyunting, menempatkan item pustaka, atau memotong model dengan bidang potong. Membuka model lain menampilkan semuanya lagi.

## Kesalahan umum

- **Item menu berwarna abu-abu.** Belum ada yang dipilih. Klik elemen terlebih dahulu; arahkan kursor ke item untuk membaca alasan mengapa item tersebut tidak bisa dijalankan.
- **Isolasi menampilkan dinding yang sudah saya sembunyikan.** Isolasi menampilkan persis apa yang Anda pilih, tersembunyi atau tidak.
- **Seluruh lantai hilang.** Itu ada di daftar {{ui:Lantai}}, bukan {{ui:Tampilkan semua}}: centang lagi lantainya.

## Berikutnya

- [Tampilkan dan sembunyikan lantai, ruang, dan tepi](topic:storeys-and-spaces)
- [Potong model IFC dengan bidang potong](topic:section-plane)
