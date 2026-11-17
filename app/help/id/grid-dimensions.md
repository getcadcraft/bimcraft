---
title: Beri dimensi pada grid
summary: Tampilkan jarak antar garis grid yang berdampingan dan ukuran grid keseluruhan pada denah setiap lantai, disimpan dalam IFC dan mengikuti grid saat garis berubah.
keywords: grid, dimensi grid, dimensi, jarak, bentang, ukuran keseluruhan, gelembung, grid kolom, denah, lembar
from: aaea5d08
---

## Yang akan Anda lakukan

Beri jarak antar garis grid dan ukuran keseluruhan grid pada denah, di luar gelembung, agar lembar yang dibuat darinya memuat dimensi tersebut. Anda memerlukan grid terlebih dahulu: lihat [Grid dan kolom](topic:grids-and-columns).

## Langkah

1. Tampilkan denah sebuah lantai lalu klik {{ui:Grid}} untuk mengaktifkan alat grid. Baris opsi grid akan tampil.
2. Centang {{ui:Dimensi}}. Jarak antara garis bernomor yang berdampingan dan antara garis berhuruf yang berdampingan, serta ukuran keseluruhan ke masing-masing arah, digambar pada denah.
3. Pilih lantai lain: dimensi yang sama tampil pada denahnya.
4. Pindahkan garis, ganti nama satu garis, atau tambahkan satu garis. Dimensi mengikuti grid.
5. Hapus centang {{ui:Dimensi}} untuk menghilangkannya lagi.

## Catatan

- Setiap perubahan adalah satu langkah urungkan: {{key:Mod+Z}} membatalkannya.
- Pengaturan ini disimpan di IFC bersama grid, dan denah yang ditempatkan pada lembar memuat dimensinya.
- Jika model tidak memiliki grid yang dapat Anda ubah (grid yang berasal dari file program lain tidak dapat diubah di sini), baris status menampilkan "Tidak ada grid untuk diubah."
