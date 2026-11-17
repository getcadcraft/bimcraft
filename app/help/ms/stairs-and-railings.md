---
title: Tangga dan susur tangga
summary: Lukis tangga lurus, L, U dan berputar yang menentukan bilangan tapak tegak dan tapak tangga daripada ketinggian antara tingkat, dengan pemegang tangan dan palang pengimbang serta lubang tangga dipotong pada lantai di atas; lukis susur keselamatan sepanjang dek dan di sekeliling bukaan.
keywords: lingkaran, tangga bulat, tangga, tangga, penerbangan, tapak tegak, tapak tangga, pelantar, anak tangga kipas, tangga L, tangga U, tangga patah balik, pemegang tangan, susur keselamatan, pengawal, susur tangga, palang pengimbang, tiang, tiang utama, lubang tangga, ruang kepala, dek, balkoni
from: 16e5ace4
---

## Apa yang anda akan lakukan

Tambah tangga antara aras dan susur tangga di tempat orang memerlukannya. Tangga mengira sendiri langkahnya daripada ketinggian antara aras, mengekalkannya dalam had kediaman yang biasa, meletakkan pemegang tangan pada sisi terbukanya dan memotong lubang tangganya pada lantai di atas.

## Lukis tangga

1. Pada aras tempat tangga bermula, buka {{ui:Binaan}} dan pilih {{ui:Tangga}}.
2. Pilih jenisnya — **Lurus**, **L dengan pelantar**, **U dengan pelantar** atau **L dengan anak tangga kipas** — arah ia **berpusing**, **lebarnya** dan di mana **pemegang tangannya** diletakkan.
3. Klik di tempat tangga bermula: di tengah tepi depan anak tangga bawah.
4. Gerakkan penunjuk mengikut arah tangga naik; langkah-langkah akan mengikutinya, dengan bilangan tapak tegak dan tapak tangga. Ia melekat pada dinding dan pada langkah 15°; tahan {{key:Shift}} untuk mengekalkannya bersudut tegak.
5. Klik. {{key:Esc}} memulakan semula.

## Lukis tangga lingkaran

1. Buka {{ui:Binaan}}, pilih {{ui:Tangga}}, kemudian pilih **Spiral** sebagai jenis.
2. Tetapkan **Pusing**, arah ia melingkar ke atas (kiri ialah lawan arah jam).
3. Klik pusat tiangnya.
4. Klik arah tapak tangga bawah menghala.

Ia bermula dengan lebar 30" (tapak tangga, dari tiang ke bahagian luar), dengan tiang 4½". Tapak tegak dikira daripada ketinggian antara aras, paling tinggi 9½" secara lalai. Tapak tangga ialah 7½" dalam kedalaman pada garisan berjalan, 12" dari tiang. Pemegang tangan berjalan di bahagian luar.

Dalam **Sifat**, tangga lingkaran menambah **Tiang pusat**, diameternya. Medan **Tapak** diukur pada garisan berjalan. Semakannya dilabelkan sebagai nilai lalai untuk tangga lingkaran: lebar bersih 26", sekurang-kurangnya 6¾" tapak tangga pada garisan berjalan, tapak tegak paling tinggi 9½" dan pemegang tangan 34"–38". Ini bukan kejuruteraan; pegawai bangunan yang memutuskan.

## Cara langkah dikira

Ketinggian antara lantai aras dan aras di atasnya dibahagi kepada tapak tegak yang sama tinggi, tidak lebih tinggi daripada 7¾", dan setiap tapak tangga ialah 10" dalam (kedua-duanya boleh diubah dalam **Sifat**). Pelantar dikira sebagai satu langkah; anak tangga kipas ialah tiga langkah yang tersusun di sekeliling sudut dalam. Ubah ketinggian aras dan setiap tangga pada aras itu dikira semula.

:::warning
7¾" tapak tegak, 10" tapak tangga, lebar 36", ruang kepala 6'-8" dan pemegang tangan 34"–38" ialah nilai lalai yang dilabelkan mengikut kod kediaman biasa, bukan kejuruteraan. **Sifat** menyatakan yang mana dipenuhi; pegawai bangunan anda yang memutuskan apa yang terpakai.
:::

## Tukar tangga

Pilih tangga (klik padanya pada pelan atau dalam paparan 3D) dan ubah dalam **Sifat**: jenis dan pusingannya, lebar, tapak tegak tertinggi, kedalaman tapak tangga, pemegang tangan dan ketinggiannya, dan **Potong lantai di atas** untuk lubang tangga. Tapak tegak dan tapak tangga yang akhirnya diperoleh ditunjukkan di bawahnya.

## Lubang tangga

Apabila aras di atas mempunyai lantai, tangga memotongnya di tempat langkah akan mempunyai ruang kepala kurang daripada 6'-8". Potongan itu bergerak bersama tangga dan hilang apabila tangga dipadam.

## Lukis susur tangga

1. Buka {{ui:Binaan}} dan pilih {{ui:Susur tangga}}.
2. Pilih **Susur keselamatan** (36" tinggi) atau **Pemegang tangan**, dan ketinggiannya.
3. Klik sepanjang tepi — dek, balkoni, di sekeliling lubang tangga — dan klik dua kali atau tekan {{key:Enter}} untuk selesai.

Susur tangga mendapat tiang di hujung dan sudutnya serta palang pengimbang dengan jurang kurang daripada 4". Pilih satu untuk menukar jenis, ketinggian atau sejauh mana ia bermula di atas lantai.

## Lukis pagar

Pilih **Pagar** dalam alat Susur Tangga yang sama, tetapkan ketinggiannya (1800 mm sebagai permulaan), klik sepanjang garis pagar dan tekan {{key:Enter}}.

- Pagar mendapat satu tiang di setiap hujung dan setiap sudut, serta satu tiang paling kerap setiap 2.4 m di antaranya. Pagar panel mempunyai satu panel antara tiang; pagar rel mempunyai dua rel. Saiz ini ialah pilihan biasa, bukan keperluan kod: peraturan tempatan mengehadkan ketinggian pagar.
- Ia ialah satu elemen dalam model (IfcRailing bernama Fence) dengan set sifat {{ui:CadCraft_Fence}}: gaya, ketinggian, tiang, panel, rel, pintu pagar, panjang dan luas panel. Satu langkah buat asal.
- Tidak dilukis di sini: pintu pagar (penjana dalam CivilCraft meletakkannya), palang pendek, rupa bumi (pagar berdiri pada aras), dan memilih satu tiang sahaja.

## Apa yang disimpan

Tangga disimpan sebagai tangga IFC yang terdiri daripada penerbangan tangga (dengan tapak tegak, ketinggian tapak tegak dan panjang tapak tangga), pelantar, anak tangga kipas dan pemegang tangan; lubang tangga ialah bukaan pada papak lantai di atas. Susur tangga disimpan sebagai susur tangga IFC dengan panjang serta bilangan palang pengimbang dan tiangnya.
