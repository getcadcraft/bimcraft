---
title: Lihat gambar DWG atau DXF
summary: Buka DWG atau DXF, bergerak di ruang model dan lembar, baca koordinat, dan lihat apa yang belum digambar.
keywords: blok dinamis, status visibilitas, dwg, dxf, cad, gambar, 2d, lihat, penampil, geser, zoom, ruang model, ruang kertas, layout, koordinat, buka dwg
from: 4db3122a
---

## Yang akan Anda lakukan

Buka gambar CAD, lihat dalam 3D atau 2D, bergerak di dalamnya, berpindah antara ruang model dan lembarnya, serta baca koordinat. BimCraft menampilkan gambar DWG dan DXF; BimCraft tidak menyunting atau menyimpannya. Untuk mengubahnya, klik {{ui:Sunting di CadCraft}} dan gambar akan terbuka di aplikasi drafting CadCraft pada tab baru.

## Langkah

1. Klik {{ui:Pilih file}}, atau seret gambar ke halaman.
2. Pilih file `.dwg` atau `.dxf`.
3. Tunggu saat bilah status menampilkan "Membaca gambar…". Gambar besar membutuhkan beberapa detik. Kemudian bilah status menyebutkan berapa lama pembacaan berlangsung, "rendering…" saat gambar pertama digambar, dan berapa lama itu berlangsung.
4. Gambar terbuka dalam 3D, cara tercepat untuk menampilkan gambar besar (lihat [Lihat gambar DWG atau DXF dalam 3D](topic:dwg-in-3d)). Klik {{ui:Model}} untuk tampilan 2D datar. Untuk selalu membuka gambar dalam 2D, atur {{ui:Pengaturan}} › {{ui:BimCraft}} › **Gambar terbuka di** menjadi {{ui:Model (2D)}}. Gambar tanpa apa pun di ruang model, atau peramban yang tidak dapat menampilkan 3D, akan terbuka dalam 2D.
5. Lihat tab di atas gambar: {{ui:Model}} lebih dulu, lalu satu tab untuk setiap lembar, sesuai urutan gambar itu sendiri.
6. Klik tab lembar untuk melihat lembar itu: kertasnya, dengan model yang tampak melalui viewport-nya.
7. Klik {{ui:Model}} untuk kembali ke ruang model.
8. Gerakkan penunjuk di atas gambar dan baca koordinat X dan Y di sudut.

## Yang akan Anda lihat

- Gambar, dipaskan ke jendela. Warna mengikuti gambar; garis putih (warna 7) digambar dengan warna tinta tema, dan warna pucat digelapkan pada tema terang agar tetap terbaca.
- Panel {{ui:Gambar}} di kiri: file, ukuran, format (misalnya "AutoCAD 2018 (AC1032)"), satuan, jumlah entitas dan layer, jumlah lembar, serta gambar tertaut dan peralatan jika ada.
- Daftar {{ui:Layer}} di kiri.
- Di kanan: cara bergerak, gambar dan gambar tertaut, serta **Belum digambar**.

## Bergerak

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Geser | Seret dengan tombol mouse mana pun |
| Zoom | Gulir roda; titik di bawah penunjuk tetap di tempatnya |
| Paskan | Klik dua kali, tekan {{key:F}}, atau klik {{ui:Paskan}} |
:::

:::mac mouse
Pada trackpad, menggulir dengan dua jari **men-zoom**, tidak menggeser. Cubit juga men-zoom. Untuk menggeser, klik dan seret.
:::

:::touch
Seret dengan satu jari untuk menggeser. Zoom cubit untuk gambar belum dibuat: ketuk {{ui:Paskan}} untuk melihat seluruh lembar, dan gunakan mouse atau trackpad untuk zoom masuk.
:::

## Blok dinamis

Blok dinamis digambar seperti yang ditampilkan gambar: setiap blok yang ditempatkan dalam status visibilitas yang disimpan bersama gambar ("Plan" atau "Front", "Single bowl" atau "Double bowl"). Di sebelah kanan, **Blok dinamis** mencantumkan setiap blok yang ditempatkan di ruang model: berapa banyak yang ditempatkan, status yang ditampilkan, dan setiap status yang dimiliki blok. Di {{ui:3D}}, klik blok yang ditempatkan untuk melihat **Blok dinamis**, **Status yang ditampilkan**, dan **Status lainnya** di Properti. BimCraft tidak mengganti status.

## Belum digambar

Beberapa jenis objek belum digambar dalam build ini. Objek tersebut dihitung di bawah **Belum digambar** di sebelah kanan ("Bagian gambar ini dilewati untuk sementara, tidak ditebak."), sehingga Anda tahu ada yang hilang. Garis, polyline, busur, lingkaran, elips, spline, hatch dan isian padat, teks dan teks multibaris, blok dengan atribut, dimensi, leader dan multileader, tabel, gambar, serta viewport digambar. Wajah 3D, mesh polyface, dan mesh poligon digambar sebagai tepinya yang terlihat dari atas; beralih ke {{ui:3D}} untuk melihatnya sebagai permukaan.

DXF biner tidak dapat dibuka: BimCraft memberi tahu Anda. Simpan ulang sebagai DXF ASCII, atau sebagai DWG, dari program yang membuatnya.

## Kesalahan umum

- **Gambarnya tampak kosong.** Beberapa layer mungkin mati atau dibekukan di dalam gambar itu sendiri; layer tersebut mulai tidak dicentang di {{ui:Layer}}. Klik {{ui:Semua nyala}}. Jika status menyebutkan "*name* adalah gambar kosong: tidak berisi garis, teks, atau blok.", memang tidak ada apa pun di dalamnya.
- **Sebuah lembar menampilkan bingkai kosong.** Lembar itu mungkin bergantung pada gambar tertaut. Lihat [Temukan gambar tertaut dan gambar](topic:dwg-linked-files).
- **Teksnya tampak sedikit berbeda.** BimCraft menggambar teks dengan font sans-serif sempit, bukan font gambar itu sendiri, sehingga teks bisa sedikit lebih lebar atau lebih sempit daripada di program yang membuatnya.
- **"*name* tidak dapat dibaca. File mungkin rusak, atau disimpan dalam format yang belum ditangani pembaca."** Tanda kurung di akhir pesan menyebutkan kode format file. Simpan dari program yang membuatnya sebagai DWG versi lama atau sebagai DXF, lalu coba lagi.
- **Mengira bisa mengukur, menggambar, atau menyunting.** BimCraft hanya menampilkan gambar. Klik {{ui:Sunting di CadCraft}} untuk membuka file yang sama di aplikasi drafting CadCraft, yang menyunting dan menyimpan salinan sebagai DWG atau DXF. File asli Anda tidak berubah, dan gambar tertaut tetap di BimCraft. Tombol ini hanya muncul di tempat CadCraft terbuka untuk Anda.

## Berikutnya

- [Lihat gambar DWG atau DXF dalam 3D](topic:dwg-in-3d)
- [Kerja dengan layer dan lembar](topic:dwg-layers-sheets)
- [Periksa gambar dalam tampilan cetak](topic:print-view)
