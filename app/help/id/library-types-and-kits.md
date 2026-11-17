---
title: Simbol, Tipe dan Aset, templat proyek, dan Quick Kit
summary: Pustaka memiliki tiga jenis item (Simbol, Tipe, Aset). Tambahkan Tipe ke proyek Anda, mulai dari templat proyek yang dibagikan, tambahkan Quick Kit, dan bagikan milik Anda sendiri melalui halaman unggah Pustaka.
keywords: pustaka, simbol, tipe, aset, type, tipe dinding, tipe lantai, tipe atap, tipe plafon, templat proyek, templat, quick kit, kit, bagikan, unggah, versi, changelog, LOD, klasifikasi, lisensi, catatan dari praktik
from: e13b0e67
---

## Yang akan Anda lakukan

Temukan apa yang Anda butuhkan di Pustaka berdasarkan jenisnya, tambahkan Tipe ke proyek yang sedang Anda gambar, mulai proyek baru dari templat yang dibagikan seseorang, dan bagikan templat, tipe, dan kit milik Anda sendiri.

## Tiga jenis item Pustaka

- **Simbol** adalah konvensi gambar: hanya 2D, digambar pada ukuran anotasi, dikelompokkan per disiplin.
- **Tipe** menjelaskan bahan pembentuk elemen: lapisannya dengan ketebalan sebenarnya, tingkat pengembangannya (LOD), dan kode klasifikasinya. Tipe ditambahkan ke proyek, tidak digambar.
- **Aset** adalah objek fisik seperti pintu, jendela, furnitur, perlengkapan, dan peralatan, dengan tampilan denah dan badan 3D pada ukuran sebenarnya.

Di tab {{ui:Pustaka}}, pilih {{ui:Pustaka}} dan gunakan **Jenis item** untuk menampilkan Semua, Simbol, Tipe, atau Aset.

## Tambahkan Tipe ke proyek Anda

1. Pilih **Tipe** di bawah Jenis item dan buka salah satunya.
2. Periksa susunan lapisannya, LOD, dan klasifikasinya di bawah gambar, lalu pilih {{ui:Tambahkan ke proyek ini}}.
3. Tipe itu ditambahkan sebagai tipe dinding, lantai, atap, atau plafon yang dapat Anda gambar. Jika tipe dengan nama itu sudah ada, tipe baru ditambahkan sebagai salinan dan milik Anda tetap seperti semula. Satu Urungkan mengeluarkannya.

## Templat proyek dan Quick Kit

Pilih {{ui:Kit}} untuk melihat apa yang dibagikan orang.

- **Templat proyek** adalah file IFC dengan level, grid, tipe, dan pengaturan. {{ui:Simpan ke templat saya}} memasukkannya ke Bangunan baru di bawah Mulai dari.
- **Quick Kit** adalah daftar item Pustaka. {{ui:Tampilkan item kit}} menampilkannya sebagai kartu yang dapat Anda tempatkan.
- Setiap kit memiliki versi dan changelog, yang terbaru di atas. Versi yang diawali 0 untuk diskusi; 1.0.0 hanya untuk yang telah diadopsi oleh pemilik lini.

## Bagikan milik Anda

- **Templat proyek:** {{ui:Simpan sebagai templat}}, centang {{ui:Buat juga file untuk dibagikan di Pustaka}}, tambahkan isinya dan versinya. Anda mendapatkan file `.json`.
- **Quick Kit:** di {{ui:Kit}}, pilih {{ui:Buat Quick Kit dari proyek ini}}. Kit itu mendaftar item Pustaka yang dipakai proyek.
- **Tipe:** di {{ui:Paket tipe}}, centang satu tipe dan pilih {{ui:Simpan sebagai item Pustaka…}}.

Unggah file di halaman unggah Pustaka. File itu menjalani peninjauan yang sama seperti item lain, dan Anda memilih lisensinya di sana: setiap item menyatakan lisensinya. Item diminta LOD-nya, kelas IFC, dan kode klasifikasi (kode, bukan hanya nama).

## Catatan dari praktik

Di halaman item Pustaka mana pun, anggota yang sudah masuk dapat menambahkan catatan: dipakai di proyek nyata, dicoba di proyek contoh, atau menemukan masalah. Sebutkan jenis proyeknya dalam beberapa kata dan jangan cantumkan nama klien. Catatan bersifat publik dan bukan ulasan: catatan tidak mengubah item.

## Perlu diketahui

- Tidak ada yang dikirim dari aplikasi. File dibuat di komputer Anda dan Anda sendiri yang mengunggahnya.
- Kit yang dibuat dari templat membawa teks IFC persis seperti yang tersimpan. Periksa apakah ada yang bersifat pribadi sebelum mengunggah.
- CadCraft menampilkan Simbol dan Aset di tab Pustaka-nya; Tipe dan templat untuk proyek BimCraft.
