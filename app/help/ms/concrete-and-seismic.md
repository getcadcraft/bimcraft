---
title: Semak ahli konkrit dan buat beban seismik
summary: Sediakan bar bagi rasuk dan tiang konkrit bertetulang model yang terbuka, semak mengikut ACI 318-19, buat daya sisi setara ASCE 7-22 pada lantai tegar, dan lihat anjakan tingkat. Bantuan untuk jurutera menyemak.
keywords: konkrit, konkrit bertetulang, ACI 318, ACI 318-19, tetulang, rasuk, tiang, ricih, sengkang, seismik, gempa bumi, daya sisi setara, ELF, ASCE 7-22, anjakan, anjakan tingkat, lantai, diafragma tegar, berat tingkat, penggunaan, struktur, jurutera, analisis
from: 2f342e72
---

Blok {{ui:Anggota konkrit}} dan {{ui:Beban seismik}} dalam tab {{ui:Analisis}} menyemak rasuk dan tiang konkrit bertetulang bagi IFC yang terbuka, dan membuat daya sisi gempa bumi pada lantai rangkanya. Ia adalah blok yang sama seperti DetailCraft, dijalankan selepas analisis tab {{ui:Analisis}}, dan disimpan dalam IFC bersama tetapan analisis yang lain.

:::warning
Keputusan adalah **untuk disemak oleh jurutera**: satu bantuan sehingga seseorang telah menyemaknya. Semakan konkrit menggunakan daya tertib pertama (tiang dalam rangka yang anda namakan tidak-hayun direka untuk momen terbesarnya), tanpa pembesaran hayunan, tanpa reka bentuk kilasan, tanpa perincian seismik (bab 18 ACI) dan tanpa perincian sengkang. Beban seismik tidak merangkumi faktor lewahan, kesan seismik menegak, pembesaran kilasan dan kesan P-delta. **Beban angin belum dibina**: bab angin piawaian tidak terdapat dalam halaman rujukan projek.
:::

## Apa yang BimCraft baca

Analisis membaca rasuk, tiang dan tupang model beserta profilnya (lihat [Analisis rangka struktur](topic:frame-analysis)). Blok {{ui:Anggota konkrit}} menyenaraikan setiap keratan yang digunakan. Tekan {{ui:Tetapkan sebagai konkrit…}} pada keratan yang berupa konkrit: BimCraft mengambil segi empat tepat daripada luas dan kekukuhan profil (lebar b dan kedalaman h yang kemudiannya boleh anda tukar), jadi keratan yang tidak hampir kepada segi empat tepat (bentuk keluli gelek) memberikan saiz yang mesti anda betulkan, atau dibiarkan.

Keratan yang ditetapkan sebagai konkrit, dan mana-mana elemen yang bahannya dinamakan konkrit, dianalisis sebagai konkrit: E = 4700 √f′c, 2400 kg/m³, dan secara lalai dengan **keratan retak** (tiang 0.70 Ig, rasuk 0.35 Ig; ACI 318-19 Jadual 6.6.3.1.1(a)). Pilih {{ui:Keratan kasar}} untuk mematikannya. Tanpa tetapan ini, model dianalisis tepat seperti sebelum ini.

## Bar, gabungan, semakan

Berikan selimut konkrit, bar atas, bawah dan sisi (atau sangkar tiang) dan sengkang bagi setiap keratan, tetapkan f′c, fy, fyt, K dan hayun atau tidak-hayun. Berikan jenis kepada kes beban, tekan {{ui:Buat gabungan}} (ASCE 7 §5.3.1) dan kemudian {{ui:Semak konkrit}}: setiap ahli mendapat penggunaan, diwarnakan pada model. Ahli yang melebihi kapasiti, dan anjakan tingkat yang melebihi hadnya, disenaraikan dalam {{ui:Masalah}} dengan klausanya; klik satu untuk memilih elemen.

## Lantai dan beban seismik

Dalam blok {{ui:Beban seismik}}, {{ui:Cari tingkat}} mengambil aras tempat dua rasuk atau lebih bertemu; setiap satu menjadi diafragma tegar. {{ui:Ambil berat daripada kes}} membaca berat seismik setiap lantai daripada kes yang anda berikan faktor. Isikan SDS, SD1, S1, R, Ie, Cd, TL, sistem dan kategori risiko, kemudian {{ui:Buat kes seismik}} (ASCE 7-22 12.8: tempoh, ricih tapak, agihan ke atas lantai, kilasan tak sengaja 5 %). Daya tingkat dan semakan anjakan (12.12) dipaparkan selepas larian. Tempoh dan kekukuhan tingkat yang sama menyumbang kepada gempa bumi dalam [Mainkan banjir, angin atau gempa bumi](topic:hazard-playback) apabila anda memilih rangka analisis sebagai sumbernya.

Papak dan dinding konkrit menjadi plat dalam analisis, dan blok {{ui:Tetulang papak}} mengira keluli yang diperlukannya per meter. Butiran setiap semakan terdapat dalam topik DetailCraft dengan nama yang sama.
