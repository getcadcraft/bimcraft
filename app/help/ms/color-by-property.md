---
title: Warnakan elemen mengikut sifat
summary: Warnakan setiap elemen mengikut nilai satu sifat, seperti kelasnya, jenisnya, tingkat, bahan, penarafan api atau kosnya, baca legenda, klik nilai untuk menunjukkan elemen tersebut sahaja, dan simpan warna sebagai skema untuk digunakan pada model lain.
keywords: warna, warnakan, legenda, paparan pintar, rupa, sifat, jenis, bahan, penarafan api, tapis, asingkan, tema, nilai, skema, skema warna, simpan warna, guna semula, pasukan, json, sampel warna
from: f081d343
---

## Apa yang anda akan lakukan

Lihat dengan sekali pandang bagaimana sesuatu sifat tersebar merentasi model: dinding mana yang luaran, bahan mana digunakan di mana, elemen mana yang tiada penarafan api. Setiap elemen mengambil warna nilainya, dan legenda menyatakan maksud setiap warna dan berapa banyak elemen yang mempunyainya.

## Langkah

1. Buka model IFC.
2. Klik tab {{ui:Warna}} di sebelah kanan.
3. Pilih sifat dalam senarai. Beberapa yang pertama dimiliki oleh setiap elemen ({{ui:Kelas}}, {{ui:Jenis}}, {{ui:Tingkat}}, {{ui:Bahan}}, {{ui:Nama}}…); yang lain datang daripada set sifat dan set kuantiti model, di bawah nama set itu. Nombor selepas setiap satu ialah bilangan elemen yang mempunyainya.
4. Baca legenda: warna, nilai dan berapa banyak elemen yang mempunyainya.
5. Klik nilai untuk menunjukkan elemen tersebut sahaja. Tahan {{key:Mod}} dan klik untuk menambah lebih banyak nilai. Tekan {{key:Shift+H}} untuk menunjukkan semula semuanya.
6. Klik {{ui:Mati}} untuk kembali kepada warna asal model.

## Apa yang anda patut lihat

- Sehingga tujuh nilai masing-masing mendapat warna sendiri, dengan nilai yang paling biasa dahulu. Lebih banyak nilai daripada itu berkongsi satu warna kelabu, disenaraikan sebagai **nilai lain**.
- Nombor dengan banyak nilai berbeza dibahagikan kepada enam julat sama, dari cerah (rendah) ke gelap (tinggi).
- Elemen tanpa sifat tersebut berwarna kelabu pucat, disenaraikan sebagai **Tiada nilai**, supaya elemen yang berwarna menonjol.
- Warna berubah mengikut tema Kertas dan Model, dan kekal semasa anda menyunting model.
- Sifat jenis dikira untuk setiap elemen bagi jenis itu; apabila sesuatu elemen mempunyai nilai sendiri untuk sifat yang sama, nilai sendirinya yang diutamakan.

## Tukar warna dan simpannya sebagai skema

- Klik sampel warna bagi sesuatu nilai dalam legenda untuk memilih warna lain untuknya. Model dicat semula serta-merta.
- {{ui:Simpan skema}} memuat turun warna sebagai fail `.json` kecil yang dinamakan mengikut sifat, contohnya `Class colors.json`.
- Pada model lain, atau pada komputer rakan sepasukan, klik {{ui:Buka skema…}} dan pilih fail itu. Setiap nilai dalam skema mendapat warnanya, jadi penarafan api atau sistem yang sama mempunyai warna yang sama dalam setiap model.
- Nilai yang tiada dalam skema dicat kelabu dan disenaraikan sebagai "tiada dalam skema"; nilai dalam skema yang tiada dalam model ini kekal disenaraikan dengan 0, supaya anda dapat melihat keseluruhan skema.
- Skema menyimpan warnanya dalam kedua-dua tema. Memilih sifat dalam senarai bermula semula daripada warna automatik.

## Kesilapan biasa

- **"Model ini tiada nilai …".** Skema disimpan untuk sifat yang tiada dalam model ini (nama set sifat lain, contohnya). Buka skema yang dibuat untuk jenis model ini, atau pilih sifat dalam senarai.

- **Sifat tiada dalam senarai.** Tiada elemen dengan bentuk dalam model itu yang memilikinya. Sifat tingkat dan ruang itu sendiri tidak disenaraikan.
- **Semuanya warna sama.** Setiap elemen mempunyai nilai yang sama, atau tiada langsung: lihat bilangan dalam legenda.

## Seterusnya

- [Sembunyikan, asingkan dan lihat tembus elemen](topic:hide-and-isolate)
- [Cari jalan anda dengan pokok model](topic:model-tree)
