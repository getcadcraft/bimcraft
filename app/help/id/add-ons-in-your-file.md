---
title: Add-on yang digunakan file Anda
summary: BimCraft mencatat dalam file IFC add-on mana yang menulis ke dalamnya, dan menawarkan untuk menambahkan yang belum ada saat Anda membukanya.
keywords: add-on, addon, file ini menggunakan, add-on yang hilang, trusscraft, pustaka, catatan, cadcraft_addons
from: 9d9500d8
---

## Apa yang dilakukannya

Saat sebuah add-on menulis ke dalam model (kuda-kuda, jalur pipa), BimCraft mencatat add-on dan versinya pada proyek IFC, dalam set properti bernama CadCraft_AddOns. Catatan ditulis dalam langkah urungkan yang sama dengan perubahan add-on itu sendiri, sehingga mengurungkan perubahan juga menghapus catatannya. Program lain mengabaikan set properti ini; apa yang digambar add-on tetap ada di file dalam kedua kasus.

## Langkah

1. Buka file IFC yang dibantu pembuatannya oleh sebuah add-on.
2. Jika add-on yang digunakannya tidak aktif, sebuah catatan di atas model menyebutkan yang mana, dengan tombol untuk menambahkannya dari akun Pustaka Anda.
3. Tambahkan, atau tutup catatan. Model tetap terbuka dalam kedua kasus.

## Kesalahan umum

- **Tidak ada catatan yang muncul.** Anda tidak masuk ke akun Anda di tab ini, atau file tidak memuat catatan (dibuat sebelum ada catatan, atau oleh program lain).
- **Daftar perubahan menulis "undefined".** Sudah diperbaiki: label kini menampilkan nama add-on.

## Selanjutnya

- [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library)
