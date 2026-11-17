---
title: Cari elemen berdasarkan kelas, nama, atau properti
summary: Cari setiap elemen yang cocok dengan satu atau beberapa aturan — kelasnya, nama, tipe, lantai, material, atau nilai properti apa pun — pilih semuanya, dan simpan aturan sebagai set pencarian bernama.
keywords: cari, pencarian, filter, kueri, aturan, set pencarian, set pilihan, pencarian tersimpan, properti, nilai, kelas, material, pilih semua
from: 3d293bc2
---

## Yang akan Anda lakukan

Pilih setiap elemen dari satu jenis atau dengan satu nilai dalam satu langkah: setiap pintu, setiap dinding di lantai 2, setiap elemen yang peringkat apinya EI60, setiap dinding yang biayanya lebih dari jumlah tertentu.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Cari}} di panel kiri.
3. Di aturan pertama, pilih properti (properti milik elemen dulu, seperti {{ui:Kelas}} dan {{ui:Lantai}}, lalu set properti model), cara membandingkan, dan nilai. Kotak nilai menyarankan nilai yang dimiliki model.
4. Untuk mempersempit, klik {{ui:Tambahkan aturan}}. Pilih {{ui:Setiap aturan}} untuk memerlukan semuanya, atau {{ui:Aturan mana pun}} untuk salah satunya.
5. Klik {{ui:Cari}}, atau tekan {{key:Enter}} di kotak nilai. Yang cocok akan dipilih.
6. Untuk menyimpan aturan, klik {{ui:Simpan sebagai set}}, ketik nama, lalu klik lagi. Nanti, klik nama set untuk mencari dengannya.

## Yang Anda lihat

- Yang cocok dipilih di tampilan 3D dan pohon model, dan {{ui:Properti}} menyebutkan jumlahnya per kelas. Tekan {{key:I}} untuk hanya menampilkannya, {{key:H}} untuk menyembunyikannya.
- Kata cocok tanpa memedulikan huruf besar-kecil. Angka dibandingkan sebagai angka: "lebih dari 1000" berarti nilainya, bukan teksnya.
- {{ui:memiliki nilai}} dan {{ui:tidak memiliki nilai}} tidak memerlukan nilai; keduanya menemukan yang terisi, atau yang kosong.
- Set yang disimpan tetap ada di peramban ini untuk setiap model yang Anda buka.

## Kesalahan umum

- **Tidak ada yang ditemukan.** Aturan memerlukan nilai yang bisa dicocokkan: lihat saran di kotak nilai.
- **Properti tidak ada dalam daftar.** Tidak ada elemen berbentuk di model ini yang memilikinya.

## Berikutnya

- [Beri warna elemen berdasarkan properti](topic:color-by-property)
- [Sembunyikan, isolasi, dan buat elemen tembus pandang](topic:hide-and-isolate)
