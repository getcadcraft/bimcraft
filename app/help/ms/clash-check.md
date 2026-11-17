---
title: Semak untuk pertembungan
summary: Cari tempat elemen satu set bertembung dengan elemen set lain, seperti saluran melalui rasuk atau dinding masuk ke papak, dalam satu model atau merentasi beberapa model, dengan toleransi, dan tukar pertembungan kepada isu.
keywords: pertembungan, pengesanan pertembungan, semakan pertembungan, pertembungan keras, gangguan, perlanggaran, koordinasi, tindihan, toleransi, mep, struktur
from: 9cb12346
---

## Apa yang akan anda lakukan

Cari tempat dua set elemen saling bertembung, contohnya semua dalam model perkhidmatan berbanding struktur, kemudian lihat setiap satu dan simpan yang penting sebagai isu.

## Langkah

1. Buka model IFC, dan tambah yang lain dengan {{ui:Tambah model…}} jika anda menyemak merentasi model. Lihat [Lihat beberapa model IFC bersama](topic:several-models).
2. Buka {{ui:Semakan pertembungan}} dalam panel kiri.
3. Dalam {{ui:Semak}} dan {{ui:Terhadap}}, pilih dua set: elemen yang anda pilih, satu kelas (merentasi setiap model terbuka), satu set carian tersimpan (lihat [Cari elemen mengikut kelas, nama atau sifat](topic:find)), atau semua.
4. Tetapkan berapa banyak tindihan hendak diabaikan, dalam meter. 0.01 mengabaikan elemen yang baru bersentuh.
5. Klik {{ui:Jalankan}}. Semakan berjalan di latar belakang; {{ui:Batal}} menghentikannya.
6. Klik satu hasil untuk melihatnya: dua elemen itu dipilih dan ditunjukkan, yang lain lut sinar, dan paparan di-zum kepadanya.
7. Klik {{ui:Jadikan isu daripadanya}} di bawah satu hasil untuk menulisnya dalam tab {{ui:Isu}}. Lihat [Isu dan fail BCF](topic:issues-bcf).

## Apa yang anda patut lihat

- Pertembungan disenaraikan dengan nama kedua-dua elemen (dan fail mereka, apabila beberapa model dibuka) serta sedalam mana ia bertindih, yang paling dalam dahulu.
- Permukaan yang hanya bersentuh, seperti dinding yang berdiri di atas papak atau pintu dalam bukaannya, bukan pertembungan.

## Perkara yang perlu diketahui

- Ini ialah semakan pertembungan keras asas: elemen yang permukaannya bersilang. Elemen yang tersembunyi sepenuhnya di dalam elemen lain (paip yang tertanam dalam dinding) belum dijumpai.
- Kedalaman ialah sejauh mana sempadan kedua-dua elemen bertindih pada paling sedikit. Ia ialah panduan, bukan ukuran tepat.

## Seterusnya

- [Ukur jarak, luas permukaan dan lokasi dalam 3D](topic:measure)
- [Sembunyikan, asingkan dan lut sinar elemen](topic:hide-and-isolate)
