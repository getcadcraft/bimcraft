---
title: Lihat beberapa model IFC bersama
summary: Tambah lebih banyak fail IFC ke dalam adegan, seperti senibina, struktur dan perkhidmatan, lihat dalam koordinat yang sama, alih satu, sembunyikan satu, dan pilih yang mana anda sunting.
keywords: federasi, model federasi, beberapa model, berbilang fail, gabung, tindihan, koordinasi, disiplin, struktur, mep, perkhidmatan, ofset, alih model, model aktif, tambah model
from: df0efbbf
---

## Apa yang akan anda lakukan

Lihat model daripada disiplin berbeza di satu tempat: model arkitek dengan model struktur dan perkhidmatan di dalamnya. Setiap satu kekal sebagai fail tersendiri; BimCraft hanya memaparkannya bersama.

## Langkah

1. Buka model IFC pertama seperti biasa.
2. Dalam {{ui:Model}} di sebelah kiri, klik {{ui:Tambah model…}} dan pilih satu atau lebih fail IFC. Setiap satu muncul dalam senarai dan dalam paparan 3D.
3. Nyahtanda model untuk menyembunyikannya; tandakannya untuk memaparkannya semula.
4. Jika model masuk di tempat yang salah (titik ukur yang berbeza), klik {{ui:Alih}} di bawahnya, taip sejauh mana untuk mengalihkannya sepanjang X, Y dan Z dalam meter, dan klik {{ui:Guna}}.
5. Model yang mempunyai penanda titik ialah model yang anda sunting. Klik penanda titik model lain untuk menyunting yang itu.
6. Klik × di sebelah model untuk mengeluarkannya daripada adegan.

## Buka model pasukan

Apabila model yang dibuka ialah fail awan dalam projek pasukan, {{ui:Buka model pasukan}} muncul di bawah senarai. Ia membuka model IFC lain dalam projek itu di sebelah model ini, setiap satunya dialihkan mengikut ofset yang ditetapkan projek. Model yang disembunyikan daripada anda kekal di luar dan dikira; model yang projek putarkan dibuka tanpa diputar dan turut dikira; fail yang bukan IFC (DWG, contohnya) dilangkau dan dinamakan dalam bar status. Model yang sudah dibuka tidak akan dibuka dua kali. Butang ini disembunyikan untuk fail yang tiada dalam projek pasukan.

## Apa yang sepatutnya anda lihat

- Setiap model dalam koordinat model pertama, seperti yang diletakkan oleh failnya. Model yang dieksport daripada projek yang sama sejajar tanpa dialihkan apa-apa.
- Memilih elemen model yang tidak anda sunting memaparkan sifatnya dalam mod baca sahaja, dengan {{ui:Sunting model itu}} untuk bertukar.
- {{ui:Pokok model}}, {{ui:Tingkat}}, {{ui:Warna}}, senarai {{ui:Perubahan}}, meletakkan item pustaka dan {{ui:Simpan sebagai IFC}} semuanya berfungsi pada model yang anda sunting. Sembunyikan, asingkan, lut sinar dan {{ui:Pilih semua}} berfungsi merentas setiap model.
- {{ui:Simpan sebagai IFC}} memuat turun model yang anda sunting, dengan perubahannya sahaja.

## Kesilapan lazim

- **Model berada jauh atau hilang.** Failnya menggunakan koordinat lain. Gunakan {{ui:Muat}} untuk mencarinya, kemudian {{ui:Alih}} ke kedudukannya.
- **Padam atau Salin tidak aktif pada elemen yang dipilih.** Ia tergolong dalam model lain: tukar kepadanya dahulu.
- **Membuka fail melalui Pilih fail menggantikan semuanya.** Itu memulakan adegan baharu. Gunakan {{ui:Tambah model…}} untuk menambah fail ke yang anda ada.

## Seterusnya

- [Sembunyikan, asingkan dan lihat tembus elemen](topic:hide-and-isolate)
- [Warnakan elemen mengikut sifat](topic:color-by-property)
