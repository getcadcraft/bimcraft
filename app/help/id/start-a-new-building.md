---
title: Mulai bangunan baru
summary: Buat model bangunan kosong dengan level-level-nya, gambar dindingnya, tempatkan item dari pustaka, dan simpan sebagai IFC.
keywords: baru, bangunan baru, kosong, kosongan, mulai dari nol, templat, level, lantai, lantai, buat, model
from: 68786865
---

## Yang akan Anda lakukan

Mulai model bangunan dari nol alih-alih membuka yang sudah ada. BimCraft membuat model IFC kosong dengan proyek, lokasi, bangunan dan level-levelnya. Anda dapat menempatkan peralatan dan furnitur dari pustaka di level-level itu, lalu menyimpannya sebagai file IFC.

:::note
Dinding sudah dapat digambar sekarang: lihat [Gambar dinding](topic:draw-walls). Pintu, jendela, lantai dan atap sedang dibangun berikutnya.
:::

## Langkah

1. Klik {{ui:Bangunan baru}} di bawah **Buka file atau folder**, atau di halaman awal.
2. Ketik **Nama bangunan**.
3. Pilih berapa banyak **Level** yang dimilikinya (1 sampai 200).
4. Ketik **Tinggi level**, dari lantai ke lantai: misalnya `10'-0"`, `10'6"` atau `3000 mm`. Angka tanpa satuan berarti kaki di AS, milimeter di tempat lain.
5. Setiap kolom sudah terisi, sehingga Anda dapat membiarkannya seperti itu. Di bawahnya, kotak menjelaskan apa yang Anda mulai dengan: satuannya, **Tipe dinding** yang pertama kali digambar oleh alat Dinding (pilih yang lain dari daftar bila mau) dan lembar pertama.
6. Klik {{ui:Buat}}. Level-level disusun mulai dari 0, masing-masing berjarak satu tinggi level dari yang sebelumnya, dan diberi nama Level 1, Level 2 dan seterusnya. Level-level itu tampil di pohon model, dan denah Level 1 terbuka di samping tampilan 3D dengan {{ui:Gambar}} aktif.
7. Gambar dinding: klik {{ui:Dinding}} lalu dua titik. Lihat [Gambar dinding](topic:draw-walls). Ganti nama level atau ubah tingginya di panel **Level**.
8. Tempatkan item: lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library). Bilah penempatan mencantumkan setiap level.
9. Klik {{ui:Simpan sebagai IFC}}. File dinamai menurut bangunan, misalnya `Smith's house.ifc`.

## Perlu diketahui

- Model disimpan dalam milimeter, sebagai IFC4. Program BIM lain dapat membukanya.
- Bangunan baru hadir dengan satu lembar, **A-101**, yang berisi denah level terbawah: A3 pada 1:100 bila Anda bekerja dengan satuan metrik, Tabloid pada 1/8" = 1'-0" selain itu. Lembar ini kosong hingga dinding pertama dan kemudian menampilkan denah seiring Anda menggambar. Bukalah di bawah **Lembar** di penelusur proyek untuk mengubah kertas, skala atau judulnya, menambahkan tampilan, atau menghapusnya. Bangunan yang dimulai dari templat membawa lembar dari templat itu.
- Untuk mengubah apa yang dimiliki setiap bangunan baru di awal (tipe dinding untuk proyek metrik, level, lembar pertama, alat yang aktif setelah Buat), lihat [Kebijakan default](topic:default-policies).
- Tidak ada yang harus diatur sebelum dinding pertama. Tipe dinding, tinggi level, satuan dan lembar semuanya dapat diubah nanti.
- **Lantai** di panel kiri hanya mencantumkan level yang berisi sesuatu; pohon model mencantumkan semuanya.
- Sebelum Anda menyimpan, bangunan baru dihitung sebagai pekerjaan yang belum disimpan. BimCraft akan bertanya sebelum Anda membuka file lain atau keluar, dan menyimpan salinan di peramban ini jika tab tertutup.
