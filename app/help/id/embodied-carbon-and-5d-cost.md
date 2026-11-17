---
title: Karbon terkandung dan biaya pada jadwal
summary: Jumlahkan karbon terkandung model dari tabel faktor yang terbuka dan dapat disunting, dan sebarkan harga pada jadwal 4D menjadi kurva biaya dan arus kas. Keduanya dimulai dari nilai yang Anda ketik atau impor.
keywords: karbon terkandung, karbon, co2, kgco2e, emisi, tabel faktor, epd, 5d, biaya, arus kas, kurva s, biaya jadwal, harga, harga takeoff
from: 83e82840
---

## Karbon terkandung

Buka panel **Karbon**. Kuantitas setiap elemen (volume, luas, atau panjang) dikalikan dengan faktor dari tabel, per modul siklus hidup: tahap produk wajib, transportasi dan limbah bersifat opsional. Totalnya dihitung per material, kelas, dan lantai, serta per meter persegi lantai (m²).

**Tabel faktornya milik Anda.** Baris yang disertakan BimCraft adalah nilai awal generik dengan orde besaran yang tepat. Nilai itu tidak berasal dari basis data, ditandai belum diperiksa, dan perlu diganti dengan sumber yang Anda gunakan (EPD, basis data nasional, atau angka dari perusahaan Anda). Sunting baris di panel, atau impor dan ekspor tabel sebagai CSV atau JSON. Baris yang Anda tambahkan menggantikan baris awal dengan id yang sama. Tabel disimpan di dalam model.

Elemen tanpa pasangan, atau tanpa kuantitas, didaftarkan sebagai Masalah dan tidak dihitung sebagai nol.

## Biaya pada jadwal 4D

Buka panel **Biaya** di samping jadwal 4D. Berikan harga (ketik, impor CSV atau JSON, atau bawa baris dari TakeoffCraft), petakan setiap harga ke material model dengan kata kunci, dan panel akan menghargai elemen setiap tugas. Biaya sebuah tugas disebarkan selama hari mulai hingga selesai (merata, atau beban di depan atau di belakang), dan panel menggambar kurva arus kas kumulatif per hari, minggu, atau bulan, dengan biaya per tahap dan paket, serta rencana dibandingkan dengan yang sudah dibangun pada suatu tanggal. Keluaran dalam CSV. Tidak ada yang dihargai sebelum Anda memberikan harga: tidak ada harga yang disertakan.

## Mata uang

Tabel harga dapat menyatakan mata uang harganya (tiga huruf, misalnya USD atau EUR). Panel 5D memiliki kotak untuknya, disimpan di file bersama harga, dan ekspor JSON membawanya. Tabel yang dibuat sebelum fitur ini, atau tabel yang kolomnya Anda biarkan kosong, tidak memiliki mata uang: biayanya ditampilkan sebagai USD, default shell, dan panel serta total berjalan menyatakan hal itu. Tidak ada konversi antar mata uang.
