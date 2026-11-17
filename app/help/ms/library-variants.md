---
title: Letak dan tukar item pustaka yang mempunyai varian
summary: Sesetengah item pustaka datang dalam beberapa saiz atau pilihan. Pilih varian sebelum anda meletakkannya, lihat varian mana satu item yang diletakkan, tukarnya kepada varian lain dengan satu klik, dan simpannya apabila item dikemas kini.
keywords: varian, varian, saiz, pilihan, konfigurasi, pustaka, librarycraft, letak, tukar, konfigurator, keluarga, jenis, kemas kini, port
from: c05f0af3
---

## Apa yang anda akan lakukan

Letakkan item pustaka dalam saiz atau pilihan yang anda perlukan, dan tukar fikiran kemudian tanpa meletakkannya semula. Item dengan varian ialah satu item dalam pustaka (satu nama, satu lesen, satu versi) dengan jadual varian yang ia datang: contohnya plat pemasangan dalam Kecil, Sederhana dan Besar, atau plat yang sama tanpa lubang.

## Pilih varian dan letakkannya

1. Buka tab {{ui:Pustaka}} dan klik kad item.
2. Di bawah nama, pilihan {{ui:Varian}} menyenaraikan setiap varian dengan saiznya. Varian lalai item dipilih dahulu.
3. Pilih satu. Pelan, saiz dan baris badan 3D akan mengikut pilihan anda.
4. Klik {{ui:Letakkan dalam pelan}} (atau {{ui:Letakkan dalam model}} dalam pandangan 3D) dan letakkannya seperti mana-mana item: lihat [Letak peralatan dan perabot daripada pustaka](topic:place-from-library).

Elemen yang diletakkan dinamakan mengikut item dan varian, contohnya *Plat pemasangan — Besar*, supaya jadual {{ui:Peralatan}} dan pepohon dapat membezakannya. Setiap varian ialah jenis IFC tersendiri: meletakkan varian yang sama dua kali berkongsi satu jenis, varian yang berbeza mendapat jenisnya sendiri.

## Lihat varian mana satu item yang diletakkan

Pilih elemen itu. Dalam {{ui:Sifat}}, kotak **Item pustaka** mempunyai baris **Varian**. IFC menyimpannya dalam `CadCraft_LibraryItem`: `Variant` (id varian), `VariantName` dan `VariantValues` (nilai pilihan, sebagai teks), supaya program lain boleh membacanya.

## Tukar kepada varian lain

1. Pilih item yang diletakkan dan klik {{ui:Tukar item…}} dalam kotak **Item pustaka**. Tab {{ui:Pustaka}} dibuka.
2. Di bahagian atas, **Varian lain bagi** *item itu* menyenaraikan setiap varian dengan saiznya. Yang diletakkan ditandakan dan tidak boleh dipilih.
3. Klik {{ui:Tukar kepada …}} pada varian yang anda mahu.

Elemen itu mengekalkan tempatnya, pusingannya, aras, nombor item, kuantiti dan notanya; jenis, bentuk dan datanya berubah kepada varian lain. {{key:Mod+Z}} mengembalikan yang pertama. Anda masih boleh memilih mana-mana item lain dalam senarai di bawah sebaliknya, seperti sebelum ini: lihat [Tukar item yang diletakkan, dan kemas kini item daripada pustaka](topic:swap-and-update-library-items).

## Salin, tampal dan kemas kini

- Salinan varian yang diletakkan ialah varian yang sama: dalam model ini, dan dalam model lain yang dibuka dalam tab pelayar yang sama, melalui Salin dan Tampal.
- **Kemas kini** mengekalkan varian: jika versi item yang lebih baharu masih mempunyainya, penempatan menjadi varian itu dalam versi baharu. Jika versi baharu tidak lagi mempunyainya, penempatan mengambil varian lalai item.

## Perkara yang perlu diketahui

- Hanya sesetengah item pustaka mempunyai varian. Kad tidak menyatakannya; anda akan melihat pilihan {{ui:Varian}} apabila anda membuka satu.
- Sesuatu item boleh menyenaraikan **port** (titik sambungan untuk paip dan saluran) bagi setiap varian. Tab Pustaka menunjukkan berapa banyak yang ada pada sesuatu varian. Ia **belum** ditulis ke dalam IFC apabila anda meletakkan item dari tab Pustaka.
- Varian yang tidak mempunyai badan 3D diletakkan dengan kotak gantian, seperti mana-mana simbol 2D.
- Saiz dalam pilihan ialah dalam milimeter, seperti yang ditulis oleh pustaka.
