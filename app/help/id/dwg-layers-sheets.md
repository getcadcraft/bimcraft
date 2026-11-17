---
title: Bekerja dengan layer dan lembar
summary: Nyalakan dan matikan layer gambar, beralih antara model space dan lembar, serta pahami bagaimana lembar menampilkan model melalui viewport-nya.
keywords: layer, nyala mati layer, bekukan, cairkan, lembar, layout, ruang kertas, tab, viewport, pengelola layer, la
from: a9a16b53
---

## Yang akan Anda lakukan

Bersihkan tampilan gambar yang padat dengan mematikan layer, lalu lihat lembar gambar satu per satu.

## Langkah: layer

1. Buka gambar DWG atau DXF.
2. Temukan daftar {{ui:Layers}} di sebelah kiri. Setiap layer memiliki kotak centang, kotak warna, dan namanya.
3. Hapus centang layer untuk menyembunyikan semua yang ada di dalamnya.
4. Klik {{ui:All off}} untuk menyembunyikan setiap layer.
5. Centang hanya layer yang ingin Anda lihat.
6. Klik {{ui:All on}} untuk menampilkan semuanya lagi.

## Yang seharusnya terlihat

Layer hilang dan muncul kembali sekaligus, di {{ui:Model}} dan di setiap lembar. Layer yang mati atau dibekukan di dalam gambar itu sendiri dimulai dalam keadaan tidak dicentang.

## Langkah: lembar

1. Lihat baris tab di atas gambar: {{ui:Model}}, lalu setiap lembar menurut namanya.
2. Klik tab lembar.
3. Lihat lembarnya: kertas berada di atas meja yang lebih gelap, dan setiap viewport menampilkan bagiannya dari model pada skala dan sudutnya sendiri.
4. Zoom ke dalam sebuah viewport untuk membaca detail. Anda men-zoom lembar, bukan viewport, sehingga seluruh lembar bergerak bersama.
5. Klik {{ui:Fit}} atau klik dua kali untuk melihat seluruh lembar lagi.

## Cara kerja lembar di sini

Lembar (layout, atau ruang kertas) memuat kepala gambar dan viewport yang melihat ke dalam model space. BimCraft menggambar setiap viewport terpotong pada tepinya, pada skala dan putarannya sendiri, dan menyembunyikan layer yang dibekukan di viewport itu. Viewport pertama setiap lembar adalah lembar itu sendiri dan tidak digambar dua kali.

## Kesalahan umum

- **Mengharapkan perubahan layer tersimpan.** Pengaturan layer hanya memengaruhi tampilan, sampai Anda membuka berkas lain.
- **Mengharapkan kontrol layer per viewport.** Daftar {{ui:Layers}} mengalihkan layer di mana-mana. Layer yang dibekukan di satu viewport oleh gambar tetap dibekukan di sana.
- **Mencari pencarian layer atau status layer.** Belum dibuat. Daftar mengikuti urutan gambar.
- **Mengharapkan bekerja di dalam viewport.** Tidak ada yang perlu diaktifkan: BimCraft hanya menampilkan lembar. Gunakan {{ui:Model}} untuk melihat model space secara langsung.
