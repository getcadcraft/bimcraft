---
title: Dimensikan grid
summary: Tunjukkan jarak antara garisan grid bersebelahan dan saiz keseluruhan grid pada pelan setiap aras, disimpan dalam IFC dan mengikut grid apabila garisan berubah.
keywords: grid, dimensi grid, dimensi, jarak, bay, saiz keseluruhan, gelembung, grid tiang, pelan, helaian
from: aaea5d08
---

## Apa yang anda akan lakukan

Letakkan jarak antara garisan grid dan saiz keseluruhan grid pada pelan, di luar gelembung, supaya helaian yang dibuat daripadanya membawa dimensi. Anda perlukan grid dahulu: lihat [Grid dan tiang](topic:grids-and-columns).

## Langkah

1. Tunjukkan pelan satu aras dan klik {{ui:Grid}} untuk menghidupkan alat grid. Baris pilihan grid dipaparkan.
2. Tandakan {{ui:Dimensi}}. Jarak antara garisan bernombor bersebelahan dan antara garisan berhuruf bersebelahan, serta saiz keseluruhan bagi setiap arah, dilukis pada pelan.
3. Pilih aras lain: dimensi yang sama dipaparkan pada pelannya.
4. Alihkan satu garisan, namakan semula atau tambah satu. Dimensi mengikut grid.
5. Nyahtandakan {{ui:Dimensi}} untuk membuangnya semula.

## Nota

- Setiap perubahan ialah satu langkah buat asal: {{key:Mod+Z}} membatalkannya.
- Tetapan disimpan dalam IFC bersama grid, dan pelan yang diletakkan pada helaian membawa dimensi.
- Jika model tiada grid yang boleh diubah (grid yang datang daripada fail program lain tidak boleh diubah di sini), baris status menyatakan "Tiada grid untuk diubah."
