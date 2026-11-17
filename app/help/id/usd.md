---
title: Ekspor model sebagai USD
summary: Tulis model IFC yang terbuka sebagai USD untuk render, perakitan adegan, dan program 3D lain, dengan kelas IFC, GlobalId, dan properti setiap elemen.
keywords: usd, usda, usdc, usdz, openusd, ekspor, ifc, globalid, properti, lantai, disiplin, perakitan adegan, archviz, render
from: 2be5f7b8
---

{{ui:USD}} di bilah alat menulis apa yang terbuka (setiap model, termasuk model gabungan tempat Anda menempatkannya) sebagai satu file USD.

## Ekspor

1. Pilih {{ui:USD}} di bilah alat.
2. Pilih {{ui:Teks (.usda)}}, {{ui:Biner (.usdc)}} atau {{ui:Paket (.usdz)}}.
3. File diunduh. Bilah status menyebutkan berapa elemen yang masuk.

## Isi file

| Di model IFC | Di file USD |
|---|---|
| Tapak, bangunan, lantai | Grup bersarang, lantai diurutkan menurut elevasi |
| Setiap elemen | Satu prim di bawah lantai dan disiplinnya (Arsitektur, Struktur, MEP, Perlengkapan, Tapak, Ruang, Lainnya), dengan geometrinya sebagai mesh |
| Kelas, GlobalId, nama, tipe, tag | Atribut bernama `ifc:class`, `ifc:globalId`, `ifc:name` dan seterusnya |
| Set properti dan kuantitas | Satu atribut per properti; panjang, luas dan volume dalam meter, meter persegi dan meter kubik |
| Warna | Material (dengan transparansi) |
| Ruang | Tetap disimpan, ditandai sebagai panduan agar renderer melewatinya |

Geometri berada pada koordinat file IFC itu sendiri. Tata letaknya mengikuti konvensi USD tertulis CadCraft untuk bangunan.
