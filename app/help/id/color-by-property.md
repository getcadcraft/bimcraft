---
title: Warnai elemen berdasarkan properti
summary: Beri warna setiap elemen menurut nilai satu properti, seperti kelas, tipe, lantai, material, peringkat tahan api, atau biaya; baca legenda, klik sebuah nilai untuk menampilkan hanya elemen tersebut, dan simpan warnanya sebagai skema untuk dipakai di model lain.
keywords: warna, colour, color by, warnai menurut, legenda, smart view, tampilan, properti, tipe, material, peringkat tahan api, filter, isolasi, tema, nilai, skema, skema warna, simpan warna, gunakan ulang, tim, json, swatch
from: f081d343
---

## Yang akan Anda lakukan

Lihat sekilas bagaimana sebuah properti tersebar di seluruh model: dinding mana yang eksternal, material apa dipakai di mana, elemen mana yang belum memiliki peringkat tahan api. Setiap elemen mengambil warna dari nilainya, dan legenda menjelaskan arti setiap warna dan berapa banyak elemen yang memilikinya.

## Langkah

1. Buka model IFC.
2. Klik tab {{ui:Warna}} di sebelah kanan.
3. Pilih properti dalam daftar. Properti pertama dimiliki setiap elemen ({{ui:Kelas}}, {{ui:Tipe}}, {{ui:Lantai}}, {{ui:Material}}, {{ui:Nama}}…); sisanya berasal dari set properti dan set kuantitas model, di bawah nama set-nya. Angka di belakang setiap properti adalah jumlah elemen yang memilikinya.
4. Baca legenda: warna, nilai, dan jumlah elemen yang memilikinya.
5. Klik sebuah nilai untuk menampilkan hanya elemen tersebut. Tahan {{key:Mod}} dan klik untuk menambahkan nilai lain. Tekan {{key:Shift+H}} untuk menampilkan semuanya kembali.
6. Klik {{ui:Mati}} untuk kembali ke warna asli model.

## Yang seharusnya Anda lihat

- Hingga tujuh nilai masing-masing mendapat warnanya sendiri, nilai yang paling umum lebih dulu. Lebih dari itu berbagi satu warna abu-abu, didaftar sebagai **nilai lain**.
- Angka dengan banyak nilai berbeda dibagi menjadi enam rentang yang sama besar, dari terang (rendah) ke gelap (tinggi).
- Elemen tanpa properti tersebut berwarna abu-abu pucat, didaftar sebagai **Tidak ada nilai**, sehingga elemen yang berwarna menonjol.
- Warna berubah mengikuti Kertas dan Model, dan tetap saat Anda mengedit model.
- Nilai properti tipe berlaku untuk setiap elemen dari tipe tersebut; jika sebuah elemen memiliki nilainya sendiri untuk properti yang sama, nilai sendirilah yang berlaku.

## Ubah warna dan simpan sebagai skema

- Klik kotak warna sebuah nilai di legenda untuk memilih warna lain. Model langsung diwarnai ulang.
- {{ui:Simpan skema}} mengunduh warna sebagai file `.json` kecil yang dinamai sesuai properti, misalnya `Class colors.json`.
- Pada model lain, atau di komputer rekan tim, klik {{ui:Buka skema…}} dan pilih file tersebut. Setiap nilai dalam skema mendapat warnanya, sehingga peringkat tahan api atau sistem yang sama memiliki warna yang sama di setiap model.
- Nilai yang tidak ada dalam skema diwarnai abu-abu dan didaftar sebagai "tidak ada dalam skema"; nilai dalam skema yang tidak dimiliki model ini tetap didaftar dengan 0, sehingga Anda dapat melihat seluruh skema.
- Skema menyimpan warnanya di kedua tema. Memilih properti dalam daftar dimulai lagi dari warna otomatis.

## Kesalahan umum

- **"Model ini tidak memiliki nilai …".** Skema disimpan untuk properti yang tidak dimiliki model ini (misalnya nama set properti lain). Buka skema yang dibuat untuk jenis model ini, atau pilih properti dalam daftar.
- **Properti tidak ada dalam daftar.** Tidak ada elemen berbentuk dalam model yang memilikinya. Properti lantai dan ruang itu sendiri tidak didaftar.
- **Semuanya berwarna sama.** Setiap elemen memiliki nilai yang sama, atau tidak sama sekali: lihat jumlah di legenda.

## Berikutnya

- [Sembunyikan, isolasi, dan tembus pandang elemen](topic:hide-and-isolate)
- [Temukan jalan Anda dengan pohon model](topic:model-tree)
