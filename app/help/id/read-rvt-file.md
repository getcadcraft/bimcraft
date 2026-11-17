---
title: Baca file proyek atau keluarga
summary: Buka file .rvt, .rfa, .rte, atau .rft dan baca rilisnya, worksharing, informasi proyek, parameter keluarga, tautan, dan gambar pratinjau, tanpa program yang membuatnya.
keywords: rvt, rfa, rte, rft, file proyek, keluarga, rilis, versi, versi mana, build, worksharing, central, informasi proyek, pratinjau, gambar mini, tautan
from: df3600e1
---

## Yang akan Anda lakukan

Cari tahu apa yang ada di dalam file proyek atau keluarga tanpa membukanya di Revit: rilis mana yang menyimpannya, apakah file itu workshared, informasi proyeknya, dan apa yang ditautkannya. Berguna saat file datang dari orang lain dan Anda perlu tahu rilis mana yang harus dibuka.

## Langkah

1. Klik {{ui:Pilih file}}.
2. Pilih file `.rvt`, `.rfa`, `.rte`, atau `.rft`.
3. Tunggu sebentar. Baris status menampilkan "Membaca file…" lalu "Dibuka *nama file*".
4. Lihat bagian atas kartu: gambar pratinjau yang tersimpan di file, jenis file dan rilis tempat file disimpan, serta nama proyek.
5. Gulir ke bawah untuk membaca bagian-bagian kartu.

## Yang harus terlihat

Kartu di tengah, dengan bagian-bagian berikut jika file memilikinya:

| Bagian | Yang diberitahukannya |
|---|---|
| File | Nama file, ukuran, jenis (proyek, templat proyek, keluarga, atau templat keluarga), rilis dan build tempat file disimpan, worksharing, jalur model central, lokasi terakhir disimpan, siapa yang menyimpannya, locale, dan GUID dokumen |
| Informasi proyek | Kolom milik proyek, seperti nama, nomor, klien, alamat, dan status. Kolom yang masih berisi nilai default proyek baru tidak disertakan. |
| Keluarga, Keluarga: … | Untuk keluarga: nama, kategori, rilis, pembaruan terakhir, dan parameternya, per kelompok |
| File tertaut dan yang dirujuk | Setiap model tertaut, tautan CAD, gambar, dan tabel keynote yang ditunjuk file, dengan jalur tersimpannya |

Di kiri, panel {{ui:File}} mengulangi fakta utama dan menambahkan **Dibaca**: seberapa banyak file yang benar-benar dibaca BimCraft, biasanya sekitar 40 KB dari file yang berukuran beberapa MB. Di kanan, panel {{ui:Properti}} menyatakan bahwa properti elemen memerlukan model 3D.

## Mengapa tidak ada 3D

Model 3D dan elemen di dalam file proyek disimpan dalam format yang tidak terdokumentasi. BimCraft hanya membaca bagian file yang terdokumentasi atau jelas dapat dibaca: informasi file, informasi proyek, data keluarga, daftar tautan, dan gambar pratinjau. Ia tidak menebak sisanya. Untuk melihat model dalam 3D dan membaca properti elemen, ekspor IFC dari program yang membuat file. Lihat [Bawa file proyek ke 3D lewat IFC](topic:rvt-to-ifc).

## Kesalahan umum

- **Mengharapkan 3D.** Lihat di atas.
- **Tautan hanya menampilkan jalur tersimpannya.** File yang dibuka sendiri tidak dapat memeriksa apakah tautannya ada. Buka folder tempat file itu berada sebagai gantinya, dan BimCraft menandai setiap tautan sebagai ditemukan atau tidak: [Buka seluruh folder proyek](topic:open-project-folder).
- **"File ini belum lengkap…"** File terpotong saat disalin, diunggah, atau disinkronkan. File drive cloud yang masih "hanya online" juga begitu. BimCraft tetap membukanya dan hanya menampilkan bagian yang berhasil dipulihkan: pemberitahuan berwarna kuning di bagian atas kartu, bagian **Dipulihkan dari file ini** yang mencantumkan bagian yang setiap bytenya ada di file, dan **Tidak ada di file** untuk sisanya. Tidak ada yang diisi untuk bagian yang hilang, sehingga rilis, gambar pratinjau, atau informasi proyek dapat hilang jika disimpan setelah titik potong. Jika daftar isi file pun terpotong, tidak ada yang dapat dibuka. Salin ulang file asli dan buka kembali untuk file lengkap.
- **"Tidak ada gambar pratinjau di file ini"** Beberapa file disimpan tanpa gambar pratinjau. Itu normal.
- **Membuka cadangan secara tidak sengaja.** File yang dinamai seperti `Tower.0004.rvt` adalah cadangan bernomor. Membuka folder mengelompokkannya bersama modelnya.
