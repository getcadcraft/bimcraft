---
title: Kolom isian panel Properti
summary: Arti setiap kolom isian di panel Properti serta panel File, Gambar, dan Folder, dan kolom mana yang dapat Anda ubah.
keywords: properti, kolom isian, atribut, globalid, guid, salin, salin nilai, salin semua, csv, papan klip, nomor seri, tag, tipe objek, baris, express id, set properti, pset, kuantitas, skema, panel file
from: fe55b435
---

## Elemen IFC

Bagian atas panel {{ui:Properti}} menampilkan jenis elemen tanpa awalan "Ifc" (misalnya "Door", "WallStandardCase", "FurnishingElement") dan namanya, atau "Tanpa nama".

| Kolom isian | Arti | Dapat diubah |
|---|---|---|
| Nama | Nama elemen, sering kali nama keluarga dan tipe dari pengekspor | Ya |
| Tipe | Nama tipe elemen, jika ada | Tidak |
| Tipe objek | Deskripsi tipe bebas yang diisi sebagian pengekspor | Ya |
| Tag | Tag atau tanda elemen; banyak pengekspor menulis ID elemen di sini | Ya |
| Deskripsi | Teks bebas | Ya |
| GlobalId | Pengenal IFC permanen elemen sepanjang 22 karakter, sama di setiap ekspor dari elemen yang sama | Tidak |
| Baris | Nomor baris elemen (`#1234`) dalam file IFC ini. Nomornya berubah antar ekspor | Tidak |

Di bawahnya terdapat **set properti**, diurutkan menurut nama:

- Setiap set terbuka dan tertutup saat Anda mengklik namanya. Tiga yang pertama terbuka.
- Set yang diberi tanda "(type)" milik tipe elemen: "Properti tipe: perubahan di sini berlaku untuk setiap elemen dengan tipe ini."
- Set kuantitas (panjang, luas, volume, jumlah, berat) hanya dapat dibaca.
- Daftar dan nilai enumerasi ditampilkan, hanya dapat dibaca.
- Nilai Ya/Tidak ditampilkan sebagai **Ya** atau **Tidak**.
- Angka dibulatkan hingga empat desimal untuk ditampilkan. Panjang (properti panjang atau panjang kuantitas) ditampilkan dalam {{ui:Satuan}} yang dipilih di bilah alat, dengan satuannya di sebelahnya, dan Anda dapat mengetik nilai baru dalam satuan itu atau dengan tanda satuan lain (2.4 m, 8'-0"): BimCraft menulis kembali angka file itu sendiri. Angka lain ditampilkan sebagaimana file menyimpannya.
- Nilai kosong ditampilkan sebagai *kosong*. Nilai yang diedit ditampilkan tebal dengan bilah biru di sebelahnya.

## Salin nilai

Setiap nilai di {{ui:Properti}} memiliki tombol salin kecil di sebelahnya: klik untuk menaruh nilai itu di papan klip persis seperti tampilannya, misalnya GlobalId, nomor seri, atau nilai set properti apa pun. Menyalin tidak pernah memulai pengeditan.

Di bagian atas, {{ui:Salin semua}} menyalin setiap nilai elemen sebagai teks, per set; {{ui:Salin sebagai CSV}} menyalin sebagai baris grup, properti, dan nilai untuk ditempel ke spreadsheet; nilai kosong tetap disimpan agar setiap kolom isian memiliki baris. Ini sama untuk elemen dari model lain yang terbuka; jika lebih dari satu model terbuka, CSV dimulai dengan kolom Model yang menyebut nama filenya.

## Panel File (IFC)

| Kolom isian | Arti |
|---|---|
| File, Ukuran | File yang Anda buka |
| Skema | Versi IFC, seperti IFC2X3 atau IFC4 |
| Proyek | Nama proyek dan nama panjangnya |
| Fase | Fase proyek, jika pengekspor menuliskannya |
| Diekspor dari | Program pengekspor, dari header file |
| Penulis | Penulis dalam header file |
| Diekspor | Tanggal dan waktu dalam header file |
| Elemen | Berapa banyak elemen dengan bentuk yang digambar |
| Segitiga | Berapa banyak segitiga yang dibentuk bentuknya; ukuran seberapa berat model |

## Panel File (file proyek dan keluarga)

| Kolom isian | Arti |
|---|---|
| Jenis | Proyek, Templat proyek, Keluarga, atau Templat keluarga |
| Disimpan dalam | Rilis yang terakhir menyimpan file |
| Build | Build tepat dari rilis itu |
| Dibaca | Seberapa banyak file yang dibaca BimCraft, dari ukurannya |

## Panel Gambar (DWG dan DXF)

| Kolom isian | Arti |
|---|---|
| Format | Rilis tempat gambar disimpan, dengan kode formatnya, seperti AC1032 |
| Satuan | Satuan sisipan gambar, jika diatur |
| Entitas | Berapa banyak objek yang dibaca |
| Layer | Berapa banyak layer |
| Lembar | Berapa banyak lembar (layout), atau None |
| Gambar tertaut | Berapa banyak gambar tertaut yang ditemukan dan dimuat |
| Peralatan | Berapa banyak item peralatan berlabel ada di lembar |

## Panel Folder

| Kolom isian | Arti |
|---|---|
| Folder, File, Ukuran | Folder yang Anda buka, berapa banyak file di dalamnya, dan total ukurannya |
| Model | File proyek dan keluarga, masing-masing dengan cadangannya dihitung sekali |
| Gambar CAD, model IFC | Berapa banyak dari masing-masing |
| Masalah | Berapa banyak salinan model yang tidak lengkap atau tidak terbaca, atau None |
