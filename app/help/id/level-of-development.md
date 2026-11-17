---
title: Tingkat pengembangan (LOD) dan pemeriksaan tonggak
summary: Beri elemen tingkat pengembangan, lihat dari mana asalnya, periksa model terhadap LOD yang diminta sebuah tonggak, dan perbaiki tag yang hilang serta ruang tanpa nama. Setiap pemeriksaan hanya memberi saran; tidak ada yang diblokir.
keywords: lod, tingkat pengembangan, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, tonggak, tabel tonggak, pemeriksaan model, tag yang hilang, ruang tanpa nama, generik di awal, kelas IFC, klasifikasi
from: 2091c79b
---

## Yang akan Anda lakukan

Tentukan seberapa jauh setiap elemen dikembangkan, lalu periksa seluruh model terhadap yang diminta oleh tonggak proyek.

## Langkah

1. Pilih satu elemen (atau beberapa) dan buka {{ui:Properties}}. Cari {{ui:Level of development}}.
2. Pilih tingkat dari daftar. Setiap tingkat diberi nama sesuai artinya, dan setiap tingkat mencakup tingkat di bawahnya. Satu langkah urungkan mencakup seluruh pilihan ini.
3. Lihat dari mana tingkat itu berasal: elemen ini, tipenya, atau tanda yang diverifikasi di lapangan.
4. Untuk memeriksa model, buka {{ui:Model checks}} di sebelah kiri, lalu {{ui:LOD milestones}}. Pilih tonggak dan tabelnya (tabel awal, atau file CSV atau JSON Anda sendiri dengan {{ui:Load}}).
5. Klik {{ui:Check the model}}. Total dan baris untuk setiap baris tabel menunjukkan apa yang sudah mencapai tingkatnya dan apa yang belum; temuan juga muncul di daftar Masalah.
6. Di bawah {{ui:Missing tags and unnamed rooms}}, klik {{ui:Find them}}, sunting usulan jika perlu, lalu klik {{ui:Apply}}.

## Yang seharusnya Anda lihat

- Tingkat yang Anda pilih pada elemen, dengan kelas IFC dan kode klasifikasinya di sebelahnya.
- Total dan baris untuk tonggak. Tabel tidak pernah mengubah arti tingkat: skalanya tetap, dan tabel hanya menunjukkan tingkat mana yang diperlukan sebuah tonggak.
- "Tetap generik di awal": saran untuk menjaga elemen tetap generik pada tonggak awal. Ini hanya saran.

## Perlu diketahui

- Tidak ada yang diblokir di sini. Model di bawah tingkat yang diminta sebuah tonggak akan didaftarkan, bukan ditolak.
- Ketiga bagian tingkat (geometri, informasi, dokumentasi) dapat diatur masing-masing; tanda menunjukkan terpenuhi, di bawah, atau tidak dinyatakan.
