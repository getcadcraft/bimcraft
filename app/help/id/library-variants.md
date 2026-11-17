---
title: Tempatkan dan tukar item pustaka yang punya varian
summary: Beberapa item pustaka hadir dalam beberapa ukuran atau pilihan. Pilih varian sebelum menempatkannya, lihat varian mana yang dimiliki item yang ditempatkan, tukar ke varian lain dengan satu klik, dan pertahankan saat item diperbarui.
keywords: varian, ukuran, pilihan, konfigurasi, pustaka, librarycraft, tempatkan, tukar, konfigurator, keluarga, tipe, perbarui, port
from: c05f0af3
---

## Yang akan Anda lakukan

Tempatkan item pustaka dalam ukuran atau pilihan yang Anda butuhkan, dan ubah pikiran nanti tanpa menempatkannya ulang. Item dengan varian adalah satu item di pustaka (satu nama, satu lisensi, satu versi) dengan tabel varian yang tersedia: misalnya pelat pemasangan dalam ukuran Kecil, Sedang, dan Besar, atau pelat yang sama tanpa lubang.

## Pilih varian dan tempatkan

1. Buka tab {{ui:Pustaka}} dan klik kartu item.
2. Di bawah nama, pilihan {{ui:Varian}} mencantumkan setiap varian beserta ukurannya. Default item dipilih lebih dahulu.
3. Pilih salah satu. Denah, ukuran, dan baris badan 3D mengikuti pilihan Anda.
4. Klik {{ui:Tempatkan di denah}} (atau {{ui:Tempatkan di model}} di tampilan 3D) dan tempatkan seperti item lainnya: lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library).

Elemen yang ditempatkan dinamai sesuai item dan varian, misalnya *Pelat pemasangan — Besar*, sehingga jadwal {{ui:Peralatan}} dan pohon dapat membedakannya. Setiap varian adalah tipe IFC tersendiri: menempatkan varian yang sama dua kali memakai satu tipe bersama, varian yang berbeda mendapat tipenya sendiri.

## Lihat varian yang dimiliki item yang ditempatkan

Pilih elemen. Di {{ui:Properti}}, kotak **Item pustaka** memiliki baris **Varian**. IFC menyimpannya di `CadCraft_LibraryItem`: `Variant` (id varian), `VariantName`, dan `VariantValues` (nilai pilihan, sebagai teks) sehingga program lain dapat membacanya.

## Tukar ke varian lain

1. Pilih item yang ditempatkan dan klik {{ui:Tukar item…}} di kotak **Item pustaka**. Tab {{ui:Pustaka}} terbuka.
2. Di bagian atas, **Varian lain dari** *item itu* mencantumkan setiap varian beserta ukurannya. Yang sedang ditempatkan ditandai dan tidak dapat dipilih.
3. Klik {{ui:Tukar ke …}} pada varian yang Anda inginkan.

Elemen mempertahankan tempat, putaran, lantai, nomor item, kuantitas, dan catatannya; tipe, bentuk, dan datanya berubah ke varian lain. {{key:Mod+Z}} mengembalikan yang pertama. Anda tetap dapat memilih item lain dari daftar di bawah seperti sebelumnya: lihat [Tukar item yang ditempatkan, dan perbarui item dari pustaka](topic:swap-and-update-library-items).

## Salin, tempel, dan pembaruan

- Salinan varian yang ditempatkan adalah varian yang sama: di model ini, dan di model lain yang dibuka di tab browser yang sama, lewat Salin dan Tempel.
- **Pembaruan** mempertahankan varian: jika versi baru item masih memilikinya, penempatan menjadi varian itu dari versi baru. Jika versi baru tidak lagi memilikinya, penempatan memakai varian default item.

## Perlu diketahui

- Hanya beberapa item pustaka yang punya varian. Kartunya tidak menunjukkannya; Anda melihat pilihan {{ui:Varian}} saat membuka salah satunya.
- Item dapat mencantumkan **port** (titik sambungan untuk pipa dan duct) per varian. Tab Pustaka menunjukkan jumlahnya untuk setiap varian. Port **belum** ditulis ke IFC saat Anda menempatkan item dari tab Pustaka.
- Varian tanpa badan 3D ditempatkan dengan kotak pengganti, seperti simbol 2D lainnya.
- Ukuran pada pilihan dalam milimeter, sebagaimana ditulis pustaka.
