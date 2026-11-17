---
title: Bandingkan dua versi model
summary: Buka dua versi model IFC yang sama dan lihat elemen mana yang ditambahkan, dihapus, dan diubah, dicocokkan berdasarkan GlobalId mereka, dengan CSV dari setiap perubahan.
keywords: bandingkan, diff, selisih, versi, revisi, perubahan, ditambahkan, dihapus, dipindahkan, berubah, globalid, guid, apa yang berubah
from: cfca6971
---

## Yang akan Anda lakukan

Lihat apa yang berubah antara model yang Anda miliki dan yang dikirimkan kepada Anda: elemen mana yang baru, mana yang hilang, mana yang dipindahkan, atau mendapat nilai properti baru.

## Langkah

1. Buka versi yang lebih baru, lalu klik {{ui:Tambahkan model…}} dan pilih versi yang lebih lama. Lihat [Lihat beberapa model IFC bersama](topic:several-models).
2. Di {{ui:Model}}, buka {{ui:Bandingkan versi}}.
3. Pilih {{ui:Versi lama}} dan {{ui:Versi baru}}.
4. Klik {{ui:Bandingkan}}.
5. Klik sebuah elemen dalam daftar untuk memilihnya dan melihat propertinya. Klik {{ui:Unduh CSV}} untuk setiap perubahan, properti demi properti.
6. Klik {{ui:Hapus}} untuk kembali ke tampilan normal.

## Yang seharusnya Anda lihat

- Elemen **Ditambahkan** berwarna biru, dari versi yang lebih baru.
- Elemen **Dihapus** berwarna merah, dari versi yang lebih lama.
- Elemen **Berubah** berwarna oker, dari versi yang lebih baru, masing-masing menyebutkan apa yang berubah: properti, perpindahan beserta jaraknya, atau bentuk baru.
- Semua yang sama, tembus pandang.

## Hal yang perlu diketahui

- Elemen dicocokkan berdasarkan GlobalId mereka. Program yang memberi elemen GlobalId baru pada setiap ekspor membuat setiap elemen terlihat dihapus dan ditambahkan kembali.
- Posisi dibandingkan di tempat model berada dalam adegan. Jika salah satu versi dipindahkan dengan sengaja, sejajarkan keduanya dulu dengan {{ui:Pindahkan}} di {{ui:Model}}.
- GlobalId yang dipakai dua kali dalam satu model dikeluarkan dari perbandingan. [Periksa model untuk masalah umum](topic:model-checks) menemukannya.

## Berikutnya

- [Isu dan file BCF](topic:issues-bcf)
- [Jumlahkan kuantitas menurut properti](topic:quantity-totals)
