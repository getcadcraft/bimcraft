---
title: Tampak, potongan, dan lembar
summary: Gambar garis potongan pada denah, lalu buka Lembar untuk satu set gambar siap cetak yang dibuat dari model: denah setiap level, empat tampak, potongan bangunan, jadwal, dan rangka dinding, dengan kepala gambar dan skala, sebagai satu PDF.
keywords: lembar, set gambar, dokumen konstruksi, cetak, plot, pdf, tampak, tampak utara, potongan, potongan bangunan, garis potong, cut, garis tersembunyi, kepala gambar, nomor lembar, skala, 1/4" = 1'-0", 1:50, 1:100, kertas, 11x17, 24x36, A3, A1, set izin
from: 91ed0cde
---

## Yang akan Anda lakukan

Buat set gambar dari model: denah setiap level, tampak utara, timur, selatan, dan barat, potongan bangunan untuk setiap garis potong, jadwal pintu, jendela, ruang, dan kayu, serta tampak setiap dinding berbingkai. Set ini digambar ulang dari model setiap kali Anda membukanya, sehingga selalu sesuai dengan apa yang sudah Anda bangun.

## Menggambar garis potongan

1. Pada sebuah level, buka {{ui:Build}} dan pilih {{ui:Garis potong}}.
2. Klik di tempat garis dimulai dan di tempat garis berakhir. Garis pendek di tengahnya menunjukkan sisi tempat potongan menghadap: sisi kiri garis, dengan arah dari klik pertama ke klik kedua.
3. Garis tampil di denah dengan ujungnya dan hurufnya (A, lalu B, dan seterusnya).

Pilih garis untuk mengubahnya di **Properti**: hurufnya, **Balikkan tampilan** untuk melihat ke arah sebaliknya, dan **Lihat sejauh** untuk menghentikan pandangan pada jarak tertentu di belakang potongan (0 menampilkan semuanya di belakangnya). Tekan {{key:Delete}} untuk menghapusnya.

## Membuka lembar

1. Klik {{ui:Lembar}} di bilah model (di samping {{ui:Cetak}}).
2. Lembar dicantumkan di sebelah kiri: **A-101** dan seterusnya untuk denah, **A-201** untuk tampak, **A-301** untuk potongan, **A-401** untuk jadwal, dan **S-101** untuk rangka dinding. Klik salah satunya untuk melihatnya.
3. Pilih **Kertas**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3, atau A1. Kertas mempertahankan nama standarnya dan ukurannya ditulis dalam {{ui:Satuan}} yang Anda pilih, misalnya *Letter · 8.5 × 11 in* atau *A3 · 297 × 420 mm*.
4. Klik {{ui:Unduh set sebagai PDF}}: satu halaman untuk setiap lembar.

## Catatan standar dari paket peraturan

Di dalam lembar, {{ui:Catatan standar}} memungkinkan Anda menempatkan catatan dari paket peraturan (menurut disiplin) di kolom kanan lembar. Setiap catatan menyimpan paket dan klausul asalnya, dan lembar yang dicetak menyatakan kapan paket tersebut belum terverifikasi. Catatan hanya sebagai titik awal: orang yang bertanggung jawab atas gambar yang menentukan isinya. Fitur ini memerlukan add-on Peraturan bangunan.

## Isi lembar

- **Denah** menampilkan dinding, pintu, jendela, ruang dengan luasnya, dimensi, dan garis potongan, pada skala standar terbesar yang muat: 1/4" = 1'-0" atau lebih kecil (1:50 atau lebih kecil dalam milimeter).
- **Tampak** digambar dari model 3D dengan garis tersembunyi dihilangkan, dua per lembar, semuanya pada skala yang sama, dengan garis tanah di bawahnya. Atap, fondasi, dan tanah ditampilkan sebagaimana dimodelkan.
- **Potongan** mengisi bagian yang dilalui potongan (dinding, lantai, atap) dan menggambar apa yang terlihat di baliknya.
- **Tampak dan potongan memuat catatannya:** tanda untuk setiap level dengan nama dan tingginya di kanan, tinggi antarlevel di kiri, dan pada tampak lebar bangunan di bawahnya serta label (D1, W1) pada setiap pintu dan jendela di dinding yang menghadap Anda. Untuk dinding sebuah ruang, lihat [Tampak interior](topic:interior-elevations).
- **Jadwal** adalah tabel yang sama dengan {{ui:Jadwal}} di bilah model.
- **Rangka** menampilkan tiang, plat, header, dan ambang setiap dinding berbingkai seperti terlihat dari sisi luarnya, sehingga tim dapat membuat tata letaknya. Lihat [Membingkai dinding, lantai, dan atap](topic:framing).

Setiap lembar memiliki kepala gambar dengan nomornya, judulnya, nama file, dan tanggalnya.

:::tip
Lembar dibuat dari model: untuk mengubah gambar, ubah modelnya lalu buka {{ui:Lembar}} lagi.
:::

:::note
Tampak dan potongan hanya menampilkan garis dan isian: dimensi, tanda level, dan catatan di atasnya belum dibuat.
:::
