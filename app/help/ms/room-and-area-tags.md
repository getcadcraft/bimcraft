---
title: Tag bilik dan luas
summary: Letakkan tag dengan nombor, nama dan luas pada bilik atau kawasan. Tag mengikutinya dan saiznya ditentukan oleh ketinggiannya pada kertas.
keywords: tag, tag bilik, tag luas, tag bilik, tag luas, tag semua, tag semua yang belum ditag, label, ketinggian teks, ketinggian kertas, anotasi
from: 67059d8a
---

## Apa yang akan anda lakukan

Tag bilik dan luas satu demi satu atau sekaligus, dan alihkan tag ke tempat yang mudah dibaca.

## Di mana alatannya

- Susun atur reben: {{ui:Seni bina}} › **Bilik & Luas** › {{ui:Tag Bilik}} dan {{ui:Tag Luas}}.
- Susun atur klasik: bar Lukis › menu {{ui:Bilik}}.
- Bilik atau luas yang dipilih: Sifat › {{ui:Tambah tag}}.

## Langkah

1. Pilih {{ui:Tag Bilik}} dan klik dalam bilik, di tempat tag sepatutnya berada.
2. Atau tekan {{ui:Tag semua yang belum ditag}} dalam baris: setiap bilik di aras ini yang tiada tag akan menerima satu, di tengahnya. Ia ialah satu langkah Buat asal.
3. Untuk mengalihkan tag, pilihnya dengan alat Pilih dan seretnya. Sifat mempunyai {{ui:Letakkan semula di tengah}}.
4. {{ui:Tag Luas}} berfungsi dengan cara yang sama untuk kawasan.

## Apa yang dilakukan tag

- Ia memaparkan nombor, nama dan luas, dalam unit paparan anda.
- Ia mengikut biliknya: namakan semula bilik, alihkan dinding, dan kata-kata tag serta kedudukannya berubah dalam langkah yang sama.
- Saiznya ditentukan pada kertas: {{ui:Ketinggian teks pada kertas}} dalam milimeter (2.5 untuk bermula). Pada skala paparan 1:50, tag 2.5 mm setinggi 125 mm dalam model; pada 1:100 ia 250 mm.
- Bilik yang mempunyai tag memaparkan tag dan bukan labelnya yang biasa.
- Apabila bilik atau kawasannya hilang, tag turut hilang. Buat asal mengembalikan kedua-duanya.

## Dalam IFC

Tag ialah IfcAnnotation (ObjectType ROOMTAG atau AREATAG) dengan teksnya sebagai literal teks, dan GlobalId bagi perkara yang dinamakannya. Teks dalam fail memberikan luas dalam meter persegi.

## Belum dibina

- Bentuk tag tersendiri, dan garis petunjuk.
- Tag pada pintu, tingkap dan dinding ialah alat berasingan (lihat gaya tag bagi helaian).

Lihat juga [Bilik dan pemisah bilik](topic:rooms-and-separators).
