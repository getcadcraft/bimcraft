---
title: Periksa model dari masalah umum
summary: Temukan elemen yang tidak memiliki properti yang Anda butuhkan, GlobalId yang dipakai dua kali, elemen yang tidak berada di lantai mana pun, dan salinan yang saling bertumpuk.
keywords: periksa, pemeriksaan model, validasi, qa, kualitas, properti yang hilang, wajib, duplikat, globalid, guid, lantai, bertumpuk, tumpang tindih
from: 4d835513
---

## Yang akan Anda lakukan

Periksa model sebelum Anda serahkan: masalah yang merusak jadwal, kuantitas, dan perangkat lunak pihak lain.

## Langkah-langkah

1. Buka model IFC.
2. Buka {{ui:Pemeriksaan model}} di panel kiri.
3. Di bawah {{ui:Properti wajib}} sudah ada satu aturan (kelas mana pun, Name). Ubah kelasnya (atau {{ui:Kelas mana pun}}) dan propertinya, atau klik {{ui:Tambahkan properti}} untuk aturan lain; tombol x menghapus satu aturan. Elemen gagal memenuhi aturan jika propertinya hilang atau kosong. Aturan tetap tersimpan di peramban ini untuk setiap model.
4. Klik {{ui:Jalankan pemeriksaan}}.
5. Klik hasil untuk memilih elemen tersebut dan memperbesar tampilan ke sana.

## Yang akan Anda lihat

- **Properti wajib hilang**: setiap aturan beserta elemen yang tidak memiliki nilai untuknya.
- **GlobalId dipakai dua kali**: elemen yang berbagi satu GlobalId. Perangkat lunak lain menganggapnya sebagai satu elemen.
- **Tidak berada di lantai**: elemen dengan bentuk yang tidak termuat di lantai mana pun.
- **Salinan saling bertumpuk**: elemen dengan kelas dan tipe yang sama serta bentuk yang sama di tempat yang sama, yang dihitung dua kali dalam kuantitas.

Setiap baris hasil adalah tombol: klik untuk memilih dan memperbesar tampilan ke elemen tersebut. Hanya 50 kelompok pertama dari setiap pemeriksaan yang ditampilkan. Temuan yang sama juga muncul di {{ui:Masalah}}.

## Perlu diketahui

- Pemeriksaan melihat model yang aktif saat beberapa model terbuka. Lihat [Lihat beberapa model IFC bersamaan](topic:several-models).
- Setelah mengedit, jalankan pemeriksaan lagi.
- Di panel {{ui:Masalah}}, panjang, luas, dan volume dalam kalimat masalah mengikuti {{ui:Satuan}} yang dipilih di bilah alat (pintu "800 mm" terbaca 2'-7 1/2" dalam kaki dan inci); ubah satuannya dan panel akan menulis ulang kalimatnya.

## Berikutnya

- [Audit model: ruang, tag, LOD, benturan, dan antarmuka](topic:audit-the-model)
- [Temukan elemen berdasarkan kelas, nama, atau properti](topic:find)
- [Hapus, potong, salin dan tempel elemen](topic:copy-paste)
