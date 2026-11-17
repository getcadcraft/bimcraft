---
title: Isu dan file BCF
summary: Simpan tampilan model sebagai isu — kamera, elemen yang dipilih, elemen tersembunyi, potongan — bagikan sebagai file BCF dengan alat koordinasi lain, dan buka file BCF mereka untuk melihat isu-isunya.
keywords: bcf, bcfzip, isu, topik, titik pandang, laporan benturan, koordinasi, komentar, snapshot, buka bcf, simpan bcf, ekspor, impor
from: 2a6cf201
---

## Yang akan Anda lakukan

Tunjuk masalah di model dan simpan tampilan yang memperlihatkannya, lalu serahkan dalam file BCF, format yang dibaca dan ditulis oleh alat koordinasi lain.

## Langkah

1. Buka model IFC dan atur tampilannya: orbit ke sana, pilih elemen yang terlibat, sembunyikan yang menghalangi, potong dengan bidang atau kotak potongan.
2. Klik tab {{ui:Isu}} di sebelah kanan, lalu {{ui:Isu baru dari tampilan ini}}.
3. Ketik judul, dan komentar jika perlu; pilih status; isi nama atau e-mail Anda (saat masuk, nama akun Anda terisi otomatis; lihat [Pengaturan BimCraft](topic:settings#your-name-on-issues)). Klik {{ui:Buat isu}}.
4. Klik {{ui:Tampilkan}} pada sebuah isu untuk mengembalikan tampilannya.
5. Klik {{ui:Simpan BCF}} untuk mengunduh setiap isu sebagai satu file `.bcf`.
6. Untuk melihat isu yang dibuat orang lain, klik {{ui:Buka BCF…}} dan pilih file `.bcf` atau `.bcfzip` mereka.

## Yang akan Anda lihat

- Setiap isu dalam daftar dengan gambar tampilannya, judul, status, penulis, dan tanggal.
- {{ui:Tampilkan}} mengembalikan kamera, elemen yang dipilih, apa yang disembunyikan (atau hanya hal yang ditampilkan), dan potongan. Elemen dicari berdasarkan GlobalId-nya di setiap model yang terbuka; baris status memberi tahu jika ada yang tidak ditemukan.
- Bidang atau kotak potongan dari alat lain ditampilkan jika sejajar dengan sumbu model; bidang miring atau bidang tambahan kembali sebagai volume potongan (hingga 6 bidang). Isu menyimpan kotak pertama dari volume yang terdiri dari beberapa kotak.

## Perlu diketahui

- File adalah BCF 2.1 dan menyimpan tampilan dalam koordinat model itu sendiri, sehingga alat lain menempatkan kamera di posisi yang sama.
- Isu tetap berada di tab ini sampai Anda menyimpannya. Membuka model lain mempertahankan daftarnya; buka model yang dimaksud oleh isu sebelum menampilkannya.
- Kamera proyeksi paralel (ortogonal) dari alat lain ditampilkan dengan kamera perspektif penampil ini, mundur sehingga bagian model yang sama mengisi tampilan.

## Kesalahan umum

- **Tampilkan memindahkan kamera ke tempat yang aneh.** Isu dibuat pada model lain atau dengan koordinat lain. Buka model yang benar terlebih dahulu.
- **File tidak bisa dibuka.** File itu bukan zip BCF, atau rusak; baris status menjelaskan alasannya.

## Berikutnya

- [Sembunyikan, isolasi, dan tembus pandang elemen](topic:hide-and-isolate)
- [Potong model IFC dengan bidang potongan](topic:section-plane)
