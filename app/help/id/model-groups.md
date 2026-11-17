---
title: Grup model
summary: Jadikan elemen yang dipilih menjadi satu grup bernama, tempatkan lagi grup itu di tempat lain, dan ubah satu salinan untuk mengubah semuanya.
keywords: grup, grup model, pengelompokan, lepas grup, instance, salin, ulangi, unit tipikal, bay, apartemen, sunting grup, IfcGroup
from: 121c5027
---

## Yang akan Anda lakukan

Mengelompokkan satu bay tipikal, menempatkannya beberapa kali, dan mengubah setiap salinan dengan mengubah satu saja.

## Di mana alatnya

- Tata letak pita: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Tata letak klasik: bilah Gambar › menu {{ui:Rooms}} › Grup model.

## Langkah-langkah

1. Dengan Pilih, pilih elemennya: klik satu, lalu Ctrl+klik atau Shift+klik yang lain.
2. Pilih {{ui:Model Group}}. Elemen langsung menjadi grup. Ketik {{ui:Group name}} di baris itu terlebih dulu untuk memberinya nama, atau ketik setelahnya untuk mengganti namanya.
3. Tekan {{ui:Place another}} lalu klik tempat salinan harus berdiri: sudut kiri bawahnya pindah ke titik klik.
4. Ubah salinan mana pun: pindahkan ujung dinding, ubah ukuran pintu, hapus kolom. Setiap salinan lain dari grup itu berubah pada langkah yang sama, dan sekali Urungkan membatalkan semuanya.
5. Selama {{ui:Model Group}} aktif, klik pada elemen akan memilih seluruh grupnya.

## Hal lain yang bisa Anda lakukan

- {{ui:Add the picked}}: menambahkan elemen lain ke grup yang terakhir Anda pilih.
- {{ui:Ungroup}}: salinan ini menjadi elemen biasa lagi. Salinan lainnya tetap menjadi grup.
- Pindahkan seluruh salinan dengan Pindahkan: ia menjadi grup yang sama di tempat baru; yang lain tidak ikut bergerak.
- Hapus elemen dari sebuah salinan dan salinan itu hilang.

## Apa yang boleh ada di dalam grup

Dinding beserta pintu dan jendelanya, kolom, dan pelat lantai yang digambar dapat ditempatkan lagi dan dibuat serupa. Grup juga boleh berisi elemen lain, tetapi kemudian grup itu belum dapat ditempatkan lagi; barisnya menjelaskan alasannya.

Salinan dipindahkan, tidak diputar atau dicerminkan.

## Di IFC

Grup adalah IfcGroup dengan IfcRelAssignsToGroup ke anggotanya, yang tetap berupa dinding, kolom, dan lantai biasa. Setiap salinan dari satu grup membawa id definisi yang sama.

## Belum dibuat

- Memutar atau mencerminkan salinan.
- Tangga, atap, lantai ruang, dan item pustaka dalam grup yang ditempatkan lagi.
- Profil, kemiringan, dan bukaan dinding tidak terbawa ke salinan.
- Grup di dalam grup.

Lihat juga [Pindahkan, sejajarkan, dan distribusikan](topic:move-align-distribute).
