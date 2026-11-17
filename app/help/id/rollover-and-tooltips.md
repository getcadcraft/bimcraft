---
title: Tooltip dalam dua tahap, dan informasi saat kursor di atas denah
summary: Arahkan kursor ke sebuah alat untuk langsung melihat namanya dan pintasannya, lalu sebentar kemudian apa yang dilakukannya. Letakkan kursor di atas dinding, pintu, jendela, ruangan, atau dimensi untuk membacanya tanpa memilihnya.
keywords: tooltip, petunjuk, pintasan, tombol, perintah yang diketik, deskripsi, hover, rollover, arahkan kursor, jenis dinding, level, ukuran, lurus, miring, tidak siku, melengkung, pintu, jendela, ruangan, luas, dimensi, tanpa memilih
from: 2e701f08
---

## Yang akan Anda lakukan

Pelajari pintasan sebuah alat dengan mengarahkan kursor padanya, dan baca apa sesuatu di denah tanpa memilihnya.

## Langkah

1. Arahkan kursor ke sebuah alat, misalnya {{ui:Wall}} di bilah Draw. Hampir seketika sebuah tooltip menampilkan namanya dan pintasannya (**Dinding**, **W**).
2. Biarkan kursor di sana. Sesaat kemudian satu baris di bawahnya menjelaskan apa yang dilakukan alat itu.
3. Buka denah, dengan alat {{ui:Select}} aktif. Letakkan kursor di atas dinding. Sebuah tooltip di samping kursor menampilkan jenisnya, levelnya, panjang dan ketebalannya, serta apakah ia lurus atau miring.
4. Pindahkan kursor ke pintu, jendela, ruangan, atau dimensi untuk membaca yang itu. Tidak ada yang dipilih.

## Yang ditampilkan tooltip sebuah alat

- **Tahap 1**: nama perintah dalam gaya menu yang Anda pakai, dan tombol-tombolnya dalam gaya itu. Bila baris perintah tampil di layar, juga ditampilkan kata yang diketik untuk perintah yang tidak punya tombol.
- **Tahap 2**: satu baris deskripsi. Itu adalah teks dari tombol perintah itu sendiri, sehingga setiap tempat perintah itu muncul (bilah Draw, pita, gaya menu, baris alat pada layout) menyatakan hal yang sama.
- Alat yang tidak aktif menampilkan alasannya.

## Yang ditampilkan saat kursor di atas

- **Dinding**: jenis, level, panjang dan ketebalan, serta **Lurus**, **Miring** (dengan sudutnya), atau **Melengkung**. Lurus berarti tegak lurus terhadap arah utama dinding-dinding yang tersambung dengannya: bangunan yang diputar di halaman tetap lurus. Dinding sendirian selalu lurus.
- **Pintu atau jendela**: jenis, level, lebar dan tinggi, tinggi ambang untuk jendela, dan dinding tempatnya berada.
- **Ruangan**: nama dan nomor, level, dan luasnya seperti yang ditampilkan denah.
- **Dimensi**: panjangnya, apakah ia seluruh dinding atau bagian di antara bukaan, sisi mana ia diukur, dan dinding yang dimilikinya.

## Perlu diketahui

- Informasi saat kursor di atas bekerja dengan alat Select. Saat alat Draw berjalan, alat itu menampilkan tandanya sendiri.
- Informasi itu hilang saat Anda memindahkan kursor dari objek, menekan tombol mouse, memutar roda, atau menekan tombol.
- Tooltip tidak pernah muncul di layar sentuh.
