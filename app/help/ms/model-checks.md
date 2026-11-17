---
title: Semak model untuk masalah biasa
summary: Cari elemen yang tiada sifat yang anda perlukan, GlobalId yang digunakan dua kali, elemen yang tiada di mana-mana tingkat dan salinan yang bertindih antara satu sama lain.
keywords: semak, semakan model, pengesahan, qa, kualiti, sifat hilang, wajib, pendua, globalid, guid, tingkat, bertindih
from: 4d835513
---

## Apa yang anda akan lakukan

Teliti model sebelum anda menyerahkannya: masalah yang merosakkan jadual, kuantiti dan perisian orang lain.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Semakan model}} dalam panel kiri.
3. Di bawah {{ui:Sifat wajib}} sudah ada satu peraturan (mana-mana kelas, Name). Tukar kelasnya (atau {{ui:Mana-mana kelas}}) dan sifatnya, atau klik {{ui:Tambah sifat}} untuk peraturan lain; x mengalih keluar satu. Elemen gagal peraturan apabila sifat itu hilang atau kosong. Peraturan kekal dalam pelayar ini untuk setiap model.
4. Klik {{ui:Jalankan semakan}}.
5. Klik satu hasil untuk memilih elemen tersebut dan zum kepadanya.

## Apa yang sepatutnya anda lihat

- **Sifat wajib hilang**: setiap peraturan dengan elemen yang tiada nilai baginya.
- **GlobalId digunakan dua kali**: elemen yang berkongsi satu GlobalId. Perisian lain menganggapnya sebagai satu elemen.
- **Tiada di mana-mana tingkat**: elemen dengan bentuk yang tidak terkandung dalam mana-mana tingkat.
- **Salinan bertindih**: elemen dengan kelas dan jenis yang sama serta bentuk yang sama di tempat yang sama, yang dikira dua kali dalam kuantiti.

Setiap baris dalam hasil ialah butang: klik untuk memilih dan zum kepada elemen tersebut. Hanya 50 kumpulan pertama bagi setiap semakan disenaraikan. Penemuan yang sama juga muncul dalam {{ui:Masalah}}.

## Perkara yang perlu diketahui

- Semakan melihat model yang aktif apabila beberapa model dibuka. Lihat [Lihat beberapa model IFC bersama](topic:several-models).
- Selepas suntingan, jalankan semakan sekali lagi.
- Dalam panel {{ui:Masalah}}, panjang, luas dan isipadu dalam perkataan masalah mengikut {{ui:Unit}} yang dipilih dalam bar alat (pintu "800 mm" dibaca sebagai 2'-7 1/2" dalam kaki dan inci); tukar unit dan panel akan menulis semula ayat-ayatnya.

## Seterusnya

- [Audit model: bilik, tag, LOD, pertembungan dan antara muka](topic:audit-the-model)
- [Cari elemen mengikut kelas, nama atau sifat](topic:find)
- [Padam, potong, salin dan tampal elemen](topic:copy-paste)
