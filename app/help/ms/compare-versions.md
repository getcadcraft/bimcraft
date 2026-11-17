---
title: Bandingkan dua versi model
summary: Buka dua versi model IFC yang sama dan lihat elemen yang ditambah, dialih keluar dan ditukar, dipadankan mengikut GlobalId mereka, dengan CSV bagi setiap perubahan.
keywords: bandingkan, beza, perbezaan, versi, semakan, perubahan, berubah, ditambah, dialih keluar, dialihkan, globalid, guid, apa yang berubah
from: cfca6971
---

## Apa yang anda akan lakukan

Lihat apa yang berubah antara model yang anda ada dan yang dihantar kepada anda: elemen mana yang baharu, mana yang hilang, mana yang dialihkan atau mendapat nilai sifat baharu.

## Langkah

1. Buka versi yang lebih baharu, kemudian klik {{ui:Tambah model…}} dan pilih yang lebih lama. Lihat [Lihat beberapa model IFC bersama](topic:several-models).
2. Dalam {{ui:Model}}, buka {{ui:Bandingkan versi}}.
3. Pilih {{ui:Versi lama}} dan {{ui:Versi baharu}}.
4. Klik {{ui:Bandingkan}}.
5. Klik elemen dalam senarai untuk memilihnya dan lihat sifatnya. Klik {{ui:Muat turun CSV}} untuk setiap perubahan, sifat demi sifat.
6. Klik {{ui:Kosongkan}} untuk kembali kepada paparan biasa.

## Apa yang anda patut lihat

- Elemen **Ditambah** dalam biru, daripada versi yang lebih baharu.
- Elemen **Dialih keluar** dalam merah, daripada versi yang lebih lama.
- Elemen **Ditukar** dalam kuning jingga, daripada versi yang lebih baharu, dengan setiap satu menyatakan apa yang berubah: sifat, pengalihan dan jaraknya, atau bentuk baharu.
- Segala yang sama, lut sinar.

## Perkara yang perlu diketahui

- Elemen dipadankan mengikut GlobalId mereka. Program yang memberikan elemen GlobalId baharu pada setiap eksport menjadikan setiap elemen kelihatan dialih keluar dan ditambah semula.
- Kedudukan dibandingkan di tempat model diletakkan dalam adegan. Jika satu versi dialihkan dengan sengaja, sejajarkannya dahulu dengan {{ui:Alih}} dalam {{ui:Model}}.
- GlobalId yang digunakan dua kali dalam satu model ditinggalkan daripada perbandingan. [Semak model untuk masalah biasa](topic:model-checks) mencari yang sedemikian.

## Seterusnya

- [Isu dan fail BCF](topic:issues-bcf)
- [Tambah kuantiti mengikut sifat](topic:quantity-totals)
