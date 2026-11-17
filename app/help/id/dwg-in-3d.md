---
title: Lihat gambar DWG atau DXF dalam 3D
summary: Ubah model space gambar menjadi 3D untuk melihat elevasi, ketebalan, 3D face, mesh, dan blok, memutarinya, mengklik objek untuk melihat propertinya, serta melihat apa yang belum digambar.
keywords: 3d, dwg, dxf, gambar, model space, orbit, potongan, potong, clipping, pilih, pilihan, properti, atribut, handle, elevasi, ketebalan, ekstrusi, 3dface, polyface, mesh, 3d polyline, blok, tampilan, perspektif, paralel, batas, acis, solid
from: a0c6cd17
---

## Yang akan Anda lakukan

Lihat model space sebuah gambar dalam 3D. Garis dan polyline berada pada ketinggian aslinya, objek dengan ketebalan berdiri seperti dinding, dan 3D face, mesh, serta blok 3D tampil sebagai permukaan yang dapat Anda putari. Lembar tetap 2D.

## Langkah

1. Buka DWG atau DXF. Lihat [Lihat gambar DWG atau DXF](topic:view-dwg). Gambar dibuka dalam 3D kecuali {{ui:Settings}} › {{ui:BimCraft}} › **Gambar dibuka dalam** menyatakan {{ui:Model (2D)}}.
2. Dari 2D, klik {{ui:3D}} di bilah di atas gambar, atau tekan {{key:3}}.
3. Tunggu sebentar pertama kali: baris status menampilkan "Membangun gambar dalam 3D…", lalu berapa banyak garis dan muka yang ditampilkannya.
4. Putari, geser, dan zoom (lihat tabel di bawah).
5. Klik tampilan di bilah kedua: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, atau {{ui:Right}}.
6. Klik {{ui:Perspective}} untuk beralih antara tampilan perspektif dan paralel.
7. Klik {{ui:Extents}} atau tekan {{key:F}} untuk melihat seluruh gambar lagi.
8. Klik {{ui:3D}} lagi, tekan {{key:3}}, atau klik {{ui:Model}} atau tab lembar untuk kembali ke 2D.

## Yang seharusnya terlihat

- Model space dalam 3D, Z ke atas, dengan warna asli gambar. Muka tampak sedikit lebih terang daripada tepinya.
- Layer yang Anda matikan di {{ui:Layers}} juga hilang dari tampilan 3D.
- Di sebelah kanan: jumlah garis dan muka, ukuran gambar dalam X, Y, dan Z, **Hanya di tampilan 2D**, dan **Belum digambar**.

## Potong dengan bidang potong

Klik {{ui:Section}} di bilah 3D, atau tekan {{key:X}}. Bilah di bawahnya bekerja seperti untuk model IFC (lihat [Potong model IFC dengan bidang potong](topic:section-plane)): potong dari {{ui:Top}}, {{ui:Front}}, atau {{ui:Side}}, seret atau ketik offset — dalam satuan gambar di sini — dan {{ui:Flip}} untuk mempertahankan sisi lainnya. Bagian yang dipotong bidang tidak dapat dipilih. Kembali ke 2D menghapus potongan itu.

## Lihat properti objek

Klik objek di tampilan 3D. Objek itu berubah ke warna pilihan dan {{ui:Properties}} menampilkan apa yang dikatakan berkas tentangnya: tipenya, layer, warna, jenis garis, dan handle, lalu data miliknya, seperti titik awal, titik akhir, dan panjang sebuah garis, pusat dan radius sebuah lingkaran, sudut sebuah 3D face, atau blok referensi, blok, titik sisip, skala, rotasi, dan nilai atributnya.

- Referensi blok dipilih sebagai satu kesatuan, blok yang bersarang di dalamnya juga.
- Klik beberapa piksel dari garis akan memilih garis itu.
- Tahan {{key:Mod}} dan klik untuk memilih lebih banyak objek, atau untuk mengeluarkan satu; {{ui:Properties}} kemudian menghitungnya per tipe.
- {{key:Esc}}, atau klik di ruang kosong, membatalkan pilihan.
- Objek pada layer yang Anda matikan tidak dapat dipilih.

## Bergerak di sekitar

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Putari | Seret dengan tombol tengah, atau dengan tombol kiri |
| Geser | Seret dengan tombol kanan, atau tahan {{key:Shift}} dan seret |
| Zoom | Gulir roda; zoom menuju apa yang ada di bawah penunjuk |
| Lihat semuanya | {{ui:Extents}} atau {{key:F}} |
| Lihat dari sisi | Klik muka, tepi, atau sudut kubus tampilan di pojok kanan bawah |
:::

Kubus tampilan dapat diganti dengan ikon sumbu, atau disembunyikan, di {{ui:Settings}}. Lihat [Pengaturan BimCraft](topic:settings).

:::mac mouse
Di trackpad, geser dengan dua jari untuk memutari, tahan {{key:Shift}} dan geser untuk menggeser, dan cubit untuk zoom.
:::

:::touch
Seret dengan satu jari untuk memutari. Cubit dengan dua jari untuk zoom, dan gerakkan keduanya bersama-sama untuk menggeser.
:::

## Yang digambar dalam 3D

| Di gambar | Dalam 3D |
|---|---|
| Garis, polyline 3D | Pada ketinggian aslinya |
| Polyline, lingkaran, busur, elips | Pada bidangnya sendiri, pada elevasinya, miring saat gambar memiringkannya |
| Ketebalan pada garis, polyline, lingkaran, dan busur | Dinding dengan tinggi itu; lingkaran tertutup di atas dan bawah |
| 3D face, polyface mesh, polygon mesh | Permukaan berbayang dengan tepinya yang terlihat |
| Blok | Ditempatkan, diputar, dan diskalakan dalam 3D, blok bersarang juga |
| Hatch | Garis luarnya |
| Garis 2D biasa | Datar, di tempat digambarnya |

## Hanya di tampilan 2D

Teks, teks multibaris, dan atribut blok yang terlihat digambar dalam 3D, pada bidangnya sendiri pada ketinggiannya sendiri, dan klik pada mereka memilihnya. Polyline lebar menampilkan lebarnya sebagai pita datar. Multileader, gambar raster, dan pola hatch dihitung di bawah **Hanya di tampilan 2D**: lihat di tab {{ui:Model}} atau pada lembar.

## Belum digambar

Solid dan permukaan yang disimpan sebagai badan ACIS (solid 3D, body, region, dan surface) serta mesh subdivisi tercantum di bawah **Belum digambar** beserta jumlahnya. Semuanya dilewati, tidak ditebak.

## Kesalahan umum

- **Semuanya tampak datar.** Gambarnya 2D: garisnya tidak memiliki tinggi. Klik {{ui:Front}} untuk memeriksa; gambar datar tampil sebagai garis.
- **Model solid tidak menampilkan apa pun.** Solid yang dibuat dengan pemodel solid berupa badan ACIS, tercantum di bawah **Belum digambar**. Ekspor model sebagai IFC atau sebagai 3D face dari program yang membuatnya.
- **Gambar tampak sebagai kumpulan kecil di tengah.** Sesuatu yang jauh di model space, seperti salinan lama denah, membuat batasnya besar. Zoom dengan roda di tempat yang ingin Anda lihat.

## Berikutnya

- [Bekerja dengan layer dan lembar](topic:dwg-layers-sheets)
- [Potong model IFC dengan bidang potong](topic:section-plane)
