---
title: Periksa benturan
summary: Temukan tempat elemen dari satu set menabrak elemen dari set lain — saluran melewati balok, dinding masuk ke pelat lantai — dalam satu model atau di beberapa model, dengan toleransi, dan ubah benturan menjadi isu.
keywords: benturan, deteksi benturan, pemeriksaan benturan, benturan keras, interferensi, tabrakan, koordinasi, tumpang tindih, toleransi, mep, struktur
from: 9cb12346
---

## Yang akan Anda lakukan

Temukan tempat dua set elemen saling menabrak, misalnya semua yang ada di model utilitas terhadap struktur, lalu lihat setiap benturan dan simpan yang penting sebagai isu.

## Langkah-langkah

1. Buka model IFC, dan tambahkan model lain dengan {{ui:Tambahkan model…}} jika Anda memeriksa lintas model. Lihat [Lihat beberapa model IFC bersama-sama](topic:several-models).
2. Buka {{ui:Pemeriksaan benturan}} di panel kiri.
3. Di {{ui:Periksa}} dan {{ui:Terhadap}}, pilih dua set: elemen yang Anda pilih, sebuah kelas (di semua model yang terbuka), sebuah set pencarian yang disimpan (lihat [Temukan elemen menurut kelas, nama, atau properti](topic:find)), atau semuanya.
4. Atur seberapa besar tumpang tindih yang diabaikan, dalam meter. 0.01 mengabaikan elemen yang hanya baru bersentuhan.
5. Klik {{ui:Jalankan}}. Pemeriksaan berjalan di latar belakang; {{ui:Batal}} menghentikannya.
6. Klik sebuah hasil untuk melihatnya: kedua elemen dipilih dan ditampilkan, semua elemen lain dibuat tembus pandang, dan tampilan diperbesar ke keduanya.
7. Klik {{ui:Jadikan isu}} di bawah sebuah hasil untuk menuliskannya di tab {{ui:Isu}}. Lihat [Isu dan file BCF](topic:issues-bcf).

## Yang akan Anda lihat

- Benturan tercantum dengan nama kedua elemen (dan file-nya, jika beberapa model terbuka) serta seberapa dalam keduanya bertumpang tindih, yang terdalam lebih dulu.
- Permukaan yang hanya bersentuhan, seperti dinding yang berdiri di atas pelat lantai atau pintu di dalam bukaannya, bukan benturan.

## Perlu diketahui

- Ini adalah pemeriksaan benturan keras dasar: elemen yang permukaannya saling memotong. Elemen yang tersembunyi sepenuhnya di dalam elemen lain (pipa yang tertanam di dalam dinding) belum dapat ditemukan.
- Kedalaman adalah seberapa jauh batas kedua elemen saling tumpang tindih pada bagian yang paling kecil: ini panduan, bukan pengukuran yang tepat.

## Berikutnya

- [Ukur jarak, luas permukaan, dan lokasi dalam 3D](topic:measure)
- [Sembunyikan, isolasi, dan buat tembus pandang elemen](topic:hide-and-isolate)
