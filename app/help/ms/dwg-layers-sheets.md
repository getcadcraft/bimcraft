---
title: Kerja dengan lapisan dan helaian
summary: Hidupkan dan matikan lapisan lukisan, tukar antara ruang model dan helaian, dan fahami cara helaian menunjukkan model melalui viewport mereka.
keywords: lapisan, lapisan hidup mati, bekukan, nyahbeku, helaian, layout, ruang kertas, tab, viewport, pengurus lapisan, la
from: a9a16b53
---

## Apa yang akan anda lakukan

Bersihkan paparan lukisan yang sibuk dengan mematikan lapisan, kemudian lihat helaian lukisan satu demi satu.

## Langkah: lapisan

1. Buka lukisan DWG atau DXF.
2. Cari senarai {{ui:Lapisan}} di sebelah kiri. Setiap lapisan mempunyai kotak semak, sampel warna dan namanya.
3. Nyahtanda lapisan untuk menyembunyikan segala yang ada padanya.
4. Klik {{ui:Matikan semua}} untuk menyembunyikan setiap lapisan.
5. Tanda hanya lapisan yang anda mahu lihat.
6. Klik {{ui:Hidupkan semua}} untuk menunjukkan semuanya semula.

## Apa yang sepatutnya anda lihat

Lapisan hilang dan muncul semula serta-merta, pada {{ui:Model}} dan pada setiap helaian. Lapisan yang dimatikan atau dibekukan dalam lukisan itu sendiri bermula dalam keadaan tidak bertanda.

## Langkah: helaian

1. Lihat baris tab di atas lukisan: {{ui:Model}}, kemudian setiap helaian mengikut nama.
2. Klik tab helaian.
3. Lihat helaian: kertas berada di atas meja yang lebih gelap, dan setiap viewport menunjukkan bahagiannya model pada skala dan sudutnya sendiri.
4. Zum ke dalam viewport untuk membaca perincian. Anda sedang menzum helaian, bukan viewport, jadi keseluruhan helaian bergerak bersama.
5. Klik {{ui:Muat}} atau klik dua kali untuk melihat keseluruhan helaian semula.

## Cara helaian berfungsi di sini

Helaian (layout, atau ruang kertas) mengandungi blok tajuk dan viewport yang melihat ke dalam ruang model. BimCraft melukis setiap viewport dipotong mengikut tepinya, pada skala dan pusingannya sendiri, dan menyembunyikan lapisan yang dibekukan dalam viewport itu. Viewport pertama bagi setiap helaian ialah helaian itu sendiri dan tidak dilukis dua kali.

## Kesilapan lazim

- **Menjangka perubahan lapisan disimpan.** Tetapan lapisan hanya memberi kesan kepada paparan sehingga anda membuka fail lain.
- **Menjangka kawalan lapisan bagi setiap viewport.** Senarai {{ui:Lapisan}} menukar lapisan di semua tempat. Lapisan yang dibekukan dalam satu viewport oleh lukisan kekal beku di situ.
- **Mencari carian lapisan atau keadaan lapisan.** Belum dibina. Senarai mengikut susunan lukisan.
- **Menjangka bekerja di dalam viewport.** Tiada apa untuk diaktifkan: BimCraft hanya menunjukkan helaian. Gunakan {{ui:Model}} untuk melihat ruang model secara terus.
