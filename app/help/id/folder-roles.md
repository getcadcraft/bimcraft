---
title: Laporan folder: peran, status, dan tautan
summary: Setiap label dalam laporan folder, artinya, dan cara saran Mulai di sini dipilih.
keywords: laporan folder, peran, status, lengkap, tidak lengkap, tidak dapat dibaca, tertaut, latar belakang, awal, pusat, family, hanya cadangan, mulai di sini, status tautan, cadangan
from: b35bdd10
---

## Status salinan

Setiap salinan model, file utama maupun cadangan bernomor, mendapat pemeriksaan header.

| Label | Arti |
|---|---|
| **Lengkap** | Header dan indeks file muat di dalam file |
| **Tidak lengkap** | File lebih pendek daripada indeksnya sendiri: ia terpotong saat disalin, diunggah, atau disinkronkan, atau ia file cloud yang masih "hanya online" |
| **Tidak dapat dibaca** | File bukan file compound yang valid, atau tidak dapat dibaca |

Di kolom **Status**, sebuah model menampilkan **Lengkap**, "*n* tidak lengkap" berwarna kuning ketika setidaknya satu salinan rusak tetapi yang lain utuh, atau **Tidak lengkap** berwarna merah ketika tidak ada salinan yang utuh.

## Cadangan

File bernama `Name.0001.rvt`, `Name.0002.rvt`, dan seterusnya adalah cadangan bernomor dari `Name.rvt`. Mereka dikelompokkan di bawah modelnya, yang terbaru di atas, dalam **Semua … salinan**. Kartunya dibaca dari file utama ketika lengkap, jika tidak dari cadangan lengkap yang terbaru ("terbaru yang lengkap").

## Peran

Ditampilkan miring di bawah nama model.

| Peran | Arti |
|---|---|
| Ditautkan oleh *model lain*: latar belakang | Model lain dalam folder menautkan model ini, jadi kemungkinan besar ini latar belakang milik orang lain, seperti model konsultan |
| File awal atau tanpa nama | Nama seperti Blank, Template, Default, Untitled, atau Project1: titik awal, atau file yang tidak pernah diberi nama dengan benar |
| Model pusat | Model pusat workshared. Pekerjaan dilakukan di salinan lokal, bukan di sini |
| Family (bagian) | File `.rfa` atau `.rft`: sebuah komponen, bukan proyek |
| Hanya cadangan | File utama sudah hilang dan hanya cadangan bernomor yang tersisa |

## Cara Mulai di sini dipilih

BimCraft menerapkan penalaran yang akan dipakai pengguna berpengalaman:

1. Kandidat adalah file proyek yang dapat dibaca (`.rvt`, `.rte`) yang tidak ditautkan oleh model lain dan bukan file awal.
2. Model pusat dan model hanya-cadangan dihitung hanya ketika tidak ada yang lebih baik.
3. Dari kandidat, yang paling baru disimpan yang dipilih.

Kotak itu mencantumkan alasannya, dan memberi peringatan ketika file yang tampak sebagai pilihan jelas rusak, ketika model lain berstatus latar belakang, dan ketika pilihannya adalah model pusat. Ini tebakan terbaik; periksa dengan orang yang terakhir mengerjakan proyek.

## Status tautan

| Label | Arti |
|---|---|
| **Dalam folder ini** | Ditemukan di jalur relatif yang disimpan, atau di akhir jalur lengkap yang disimpan di dalam folder |
| **Nama sama ditemukan** | Tidak di jalurnya, tetapi file dengan nama yang sama ada di folder. Periksa apakah itu yang benar |
| **File pustaka** | Tabel keynote atau tabel kode rakitan. Ini disertakan dengan program di setiap komputer |
| **Tidak dalam folder ini** | Tidak ditemukan di mana pun di dalam folder |

Kolom **Tautan ditemukan** di **Model** menampilkan berapa banyak tautan sebuah model yang ditemukan, dari yang diharapkan ada di folder (file pustaka tidak dihitung).

## Dikesampingkan

| Baris | Arti |
|---|---|
| Folder pemeliharaan Revit (tidak dibaca) | Folder `*_backup`, `*_log`, dan `Revit_temp`, ditambah folder tersembunyi dan `__MACOSX` |
| Sisa kunci, log, dan cadangan | File `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck`, dan `.slog` |
| File lain | Semua yang lain (40 pertama disebutkan namanya) |
