---
title: Putar jadwal konstruksi pada model
summary: Buka daftar tugas sebagai CSV, hubungkan tiap tugas ke elemen melalui sebuah properti, dan geser tanggal untuk melihat apa yang sudah dibangun, sedang dikerjakan, dan belum dimulai.
keywords: 4d, jadwal, urutan konstruksi, garis waktu, tahapan, program kerja, gantt, tugas, tanggal, simulasi, kemajuan, dibangun, csv, tahap, fase, paket kerja, wbs, grup
from: 1b985a64
---

## Yang akan Anda lakukan

Lihat gedung berdiri: setiap tugas dalam jadwal Anda dihubungkan ke elemen yang dibangunnya, ditampilkan hari demi hari.

## Langkah

1. Buka model IFC dan buka {{ui:Jadwal 4D}} di panel kiri.
2. Klik {{ui:Unduh templat}} untuk daftar tugas dengan satu minggu per lantai, lalu ubah di spreadsheet. Atau tulis sendiri.
3. Klik {{ui:Buka daftar tugas…}} dan pilih CSV-nya.
4. Seret slider tanggal, atau klik {{ui:Putar}}.

## Daftar tugas

CSV dengan baris judul dan kolom **Task**, **Start**, **Finish**, **Field**, dan **Value**. Pemisah koma atau titik koma sama-sama dapat dipakai.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Lantai 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Atap | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Atap | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Tulis tanggal dalam format YYYY-MM-DD.
- Satu baris menghubungkan tugas ke setiap elemen yang **Field**-nya memiliki **Value** persis sama. Field adalah properti seperti Storey, Class, Name, Type, Material, Tag, atau GlobalId, atau properti apa pun yang ditulis sebagai nama set dan namanya: `Pset_WallCommon.FireRating`.
- Ulangi tugas pada lebih banyak baris, dengan tanggal yang sama, untuk menghubungkan lebih banyak elemen padanya.

## Tahap dan paket kerja

Tambahkan kolom **Stage**, kolom **Package**, atau keduanya, untuk mengelompokkan tugas ke dalam tahap dan paket kerja. Phase dan WBS juga berfungsi sebagai nama kolom.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Pelat lantai 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Struktur | Rangka |
| Dinding lantai 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Struktur | Rangka |
| Pintu | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Finishing | Joinery |

- Satu tugas hanya masuk ke satu tahap dan satu paket. Jika baris berikutnya dari tugas yang sama menyebut yang lain, baris itu didaftar dengan nomor barisnya dan dilewati.
- Nama paket yang sama di dua tahap berarti dua paket.

Saat daftar memiliki grup, daftar {{ui:Tampilkan}} muncul di atas tanggal. Pilih sebuah tahap atau paket dan jadwal berjalan sebagai satu kesatuan:

- slider dan {{ui:Putar}} berjalan dari awal pertama grup hingga selesai terakhirnya,
- hanya tugas grup yang didaftar dan diwarnai, dan semua yang di luar grup tampak tembus pandang,
- baris di bawah daftar menyebutkan berapa tugas grup yang selesai, sedang berjalan, dan belum dimulai pada tanggal itu,
- {{ui:Pilih elemennya}} memilih setiap elemen grup, untuk {{ui:Tampilkan}}, {{ui:Potongan}}, atau sebuah jadwal.

Pilih **Setiap tugas** untuk melihat kembali seluruh jadwal.

## Yang harus Anda lihat

- **Selesai dibangun**: elemen yang semua tugasnya telah selesai, dalam warnanya sendiri.
- **Sedang dikerjakan**: elemen dengan tugas yang sedang berjalan pada hari itu, dalam warna kuning tanah. Tugas berjalan dari tanggal mulainya hingga tanggal selesainya.
- **Belum dimulai**: tampak tembus pandang.
- Elemen yang tidak masuk tugas mana pun tetap seperti semula. Daftar menunjukkan berapa elemen yang ditemukan setiap tugas. Baris yang tidak dapat dibaca, atau tidak menemukan apa pun, didaftar dengan nomor barisnya.

## Tautan, bagan Gantt, dan MS Project

- Buka file XML Microsoft Project (`.xml`) atau CSV yang memiliki kolom `Predecessors`. Tautan dapat berupa selesai-ke-mulai, mulai-ke-mulai, selesai-ke-selesai, atau mulai-ke-selesai, masing-masing dengan lead atau lag dalam hari.
- Di bawah daftar tugas, bagan Gantt menggambar setiap tugas sebagai batang dengan panah untuk tautannya. Tugas pada jalur kritis berwarna merah. Loop tautan atau predecessor yang tidak ada didaftar di panel.
- {{ui:Simpan sebagai XML MS Project}} dan {{ui:Simpan CSV dengan tautan}} menulis kembali jadwal beserta tautannya.

## Selanjutnya

- [Cari elemen berdasarkan kelas, nama, atau properti](topic:find)
- [Beri warna elemen menurut properti](topic:color-by-property)
