---
title: Eksport model sebagai USD
summary: Tulis model IFC yang dibuka sebagai USD untuk pemaparan, pemasangan adegan dan program 3D lain, dengan kelas IFC, GlobalId dan sifat setiap elemen.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, sifat, tingkat, disiplin, pemasangan adegan, archviz, render
from: 2be5f7b8
---

{{ui:USD}} pada bar alat menulis apa yang dibuka (setiap model, termasuk model gabungan tempat anda meletakkannya) sebagai satu fail USD.

## Eksport

1. Pilih {{ui:USD}} pada bar alat.
2. Pilih {{ui:Teks (.usda)}}, {{ui:Binari (.usdc)}} atau {{ui:Pakej (.usdz)}}.
3. Fail dimuat turun. Bar status memaklumkan berapa banyak elemen yang dimasukkan.

## Apa yang ada dalam fail

| Dalam model IFC | Dalam fail USD |
|---|---|
| Tapak, bangunan, tingkat | Kumpulan bersarang, tingkat mengikut susunan ketinggian |
| Setiap elemen | Satu prim di bawah tingkat dan disiplinnya (Seni bina, Struktur, MEP, Perabot, Tapak, Ruang, Lain-lain), dengan geometrinya sebagai jaringan |
| Kelas, GlobalId, nama, jenis, tag | Atribut dinamakan `ifc:class`, `ifc:globalId`, `ifc:name` dan seterusnya |
| Set sifat dan kuantiti | Satu atribut bagi setiap sifat; panjang, luas dan isipadu dalam meter, meter persegi dan meter padu |
| Warna | Bahan (dengan ketelusan) |
| Ruang | Dikekalkan, ditanda sebagai panduan supaya pemapar melangkauinya |

Geometri terletak pada koordinat fail IFC itu sendiri. Susun atur mengikut konvensyen USD bagi bangunan yang ditulis oleh CadCraft.
