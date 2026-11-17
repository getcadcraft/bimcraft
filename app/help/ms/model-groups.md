---
title: Kumpulan model
summary: Jadikan elemen yang dipilih satu kumpulan bernama, letakkan semula kumpulan itu di tempat lain, dan tukar satu salinan untuk menukar semuanya.
keywords: kumpulan, kumpulan model, pengumpulan, nyahkumpulkan, contoh, salin, ulang, unit tipikal, bentang, pangsapuri, sunting kumpulan, IfcGroup
from: 121c5027
---

## Apa yang anda akan lakukan

Kumpulkan satu bentang tipikal, letakkannya beberapa kali, dan tukar setiap salinan dengan menukar satu.

## Di mana alat itu

- Susun atur reben: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Susun atur klasik: bar Lukis › menu {{ui:Rooms}} › {{ui:Model Group}}.

## Langkah

1. Dengan Pilih, pilih elemen: klik satu, kemudian Ctrl+klik atau Shift+klik yang lain.
2. Pilih {{ui:Model Group}}. Ia menjadi kumpulan serta-merta. Taip {{ui:Group name}} dalam baris dahulu untuk menamakannya, atau taip satu selepas itu untuk menamakannya semula.
3. Tekan {{ui:Place another}} dan klik di tempat salinan itu patut berdiri: sudut kiri bawahnya pergi ke klik itu.
4. Tukar mana-mana salinan: alih hujung dinding, ubah saiz pintu, padam tiang. Setiap salinan lain bagi kumpulan itu berubah dalam langkah yang sama, dan satu {{ui:Undo}} membatalkan semuanya.
5. Selagi {{ui:Model Group}} berada di tangan anda, klik pada elemen memilih seluruh kumpulannya.

## Lain-lain yang boleh anda lakukan

- {{ui:Add the picked}}: tambah lebih banyak elemen ke kumpulan yang anda pilih terakhir.
- {{ui:Ungroup}}: salinan ini menjadi elemen biasa semula. Salinan lain kekal sebagai kumpulan.
- Alih seluruh salinan dengan {{ui:Move}}: ia kekal kumpulan yang sama di tempat baharu; yang lain tidak bergerak.
- Padam elemen salinan dan salinan itu hilang.

## Apa yang boleh ada dalam kumpulan

Dinding dengan pintu dan tingkapnya, tiang dan lantai yang dilukis boleh diletakkan semula dan dikekalkan serupa. Kumpulan juga boleh mengandungi elemen lain, tetapi kemudian ia belum boleh diletakkan semula; baris itu menyatakan sebabnya.

Salinan dialihkan, bukan diputar atau dicerminkan.

## Dalam IFC

Kumpulan ialah IfcGroup dengan IfcRelAssignsToGroup kepada ahlinya, yang kekal sebagai dinding, tiang dan lantai biasa. Setiap salinan satu kumpulan membawa id takrifan yang sama.

## Belum dibina

- Memutar atau mencerminkan salinan.
- Tangga, bumbung, lantai bilik dan item pustaka dalam kumpulan yang diletakkan semula.
- Profil dinding, kecerunan dan bukaan dinding tidak dibawa ke salinan.
- Kumpulan di dalam kumpulan.

Lihat juga [Alih, jajar dan agihkan](topic:move-align-distribute).
