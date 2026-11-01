---
title: Memulai bangunan baru
summary: Buat model bangunan kosong lengkap dengan levelnya, gambar dindingnya, tempatkan item dari pustaka, dan simpan sebagai IFC.
keywords: baru, bangunan baru, kosong, mulai dari nol, templat, level, lantai, buat, model
from: 546b8ae8
---

## Yang akan Anda lakukan

Memulai model bangunan dari nol, bukan membuka yang sudah ada. BimCraft membuat model IFC kosong dengan proyek, tapak, bangunan, dan levelnya. Anda dapat menempatkan peralatan dan furnitur pada level dari pustaka, lalu menyimpannya sebagai file IFC.

:::note
Dinding sudah dapat digambar: lihat [Menggambar dinding](topic:draw-walls). Pintu, jendela, pelat lantai, dan atap sedang dibuat berikutnya.
:::

## Langkah

1. Klik {{ui:Bangunan baru}} di bawah **Buka file atau folder**, atau di halaman awal.
2. Ketik **Nama bangunan**.
3. Pilih jumlah **Level** (1 sampai 200).
4. Ketik **Tinggi level**, dari lantai ke lantai: misalnya `10'-0"`, `10'6"`, atau `3000 mm`. Angka biasa dibaca sebagai kaki di AS, dan milimeter di tempat lain.
5. Klik {{ui:Buat}}. Level ditumpuk mulai dari 0, masing-masing setinggi satu tinggi level di atas yang sebelumnya, dan diberi nama Level 1, Level 2, dan seterusnya. Level muncul di pohon model, dan denah Level 1 terbuka di samping tampilan 3D dengan {{ui:Gambar}} menyala.
6. Gambar dindingnya: lihat [Menggambar dinding](topic:draw-walls). Ganti nama level atau ubah tingginya di panel **Level**.
7. Tempatkan item: lihat [Menempatkan peralatan dan furnitur dari pustaka](topic:place-from-library). Bilah penempatan mencantumkan setiap level.
8. Klik {{ui:Simpan sebagai IFC}}. File diberi nama sesuai bangunan, misalnya `Smith's house.ifc`.

## Perlu diketahui

- Model disimpan dalam milimeter, sebagai IFC4. Program BIM lain dapat membukanya.
- **Lantai** di panel kiri hanya mencantumkan level yang sudah berisi sesuatu; pohon model mencantumkan semuanya.
- Sebelum Anda menyimpan, bangunan baru dihitung sebagai pekerjaan yang belum disimpan. BimCraft bertanya sebelum Anda membuka file lain atau pergi, dan menyimpan salinan di peramban ini kalau-kalau tab tertutup.
