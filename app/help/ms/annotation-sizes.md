---
title: Lukis pada saiz penuh, anotasi mengikut skala
summary: Bangunan sentiasa dilukis pada saiz penuh. Teks, dimensi, tag, nama bilik, gelembung grid dan simbol disaiz pada kertas, dalam milimeter seperti yang dicetak, dan mengekalkan saiz itu apabila skala lukisan bertukar dari 1:100 ke 1:50.
keywords: skala anotasi, beranotasi, saiz teks, tinggi teks, tinggi kertas, saiz teks dimensi, saiz tag, saiz nama bilik, gelembung grid, saiz simbol, skala lukisan, 1:50, 1:100, standard pejabat, tulisan, lukis pada 1:1, saiz penuh, teks helaian
from: 94118788
---

## Apa yang anda akan lakukan

Tetapkan tinggi tulisan lukisan anda di atas kertas, sekali untuk bangunan. Anda tidak pernah menskala model dan anda tidak pernah menyaiz semula teks untuk skala: BimCraft mengira saiznya daripada tinggi kertas dan skala lukisan.

## Cara ia berfungsi

- Model adalah saiz penuh. Dinding 10 m panjang ialah 10 000 mm panjang pada setiap skala.
- Anotasi mempunyai **tinggi kertas**: tinggi huruf besar pada helaian yang dicetak, dalam milimeter.
- Pada skala 1:100 teks 2.5 mm ialah 250 mm tinggi dalam model; pada 1:50 ialah 125 mm. Pada kertas ia 2.5 mm kedua-dua kali.
- Simbol pelan (elektrik, paip) dilukis dalam milimeter kertas dan mengikut peraturan yang sama.

## Langkah

1. Buka pelayar projek. Di bawah {{ui:Helaian}} klik {{ui:Saiz anotasi…}}.
2. Taip tinggi dalam milimeter untuk jenis yang anda mahu tetapkan: {{ui:Nota dan label}}, {{ui:Teks dimensi}}, {{ui:Tag dan nama aras}}, {{ui:Nama bilik}}, {{ui:Huruf gelembung grid}}, {{ui:Tajuk pandangan pada helaian}} dan {{ui:Teks jadual}}. Kotak kosong mengekalkan saiz BimCraft sendiri, ditunjukkan dalam warna kelabu.
3. Klik {{ui:Simpan}}. Ia ialah satu langkah yang boleh anda buat asal.

Setiap helaian, set lukisan, PDF pelan, serta dongakan dan keratan menggunakan saiz tersebut dari sekarang. Jarak antara garis dimensi dan teksnya, saiz gelembung grid dan tinggi baris jadual membesar mengikut teksnya.

## Pelan dengan skala sendiri

Berikan pelan skala dalam julat pandangannya ({{ui:Skala}}; lihat [Pandangan dan helaian](topic:views-and-sheets)). Kemudian:

- pada skrin, nama bilik, tag, teks dimensi dan gelembung grid dilukis pada saiz cetakannya berbanding model, jadi apa yang anda lihat ialah apa yang akan ditunjukkan oleh helaian;
- simbol pelan dan tag mereka disaiz untuk skala itu. Tukar skala dari 1:100 ke 1:50 dan ia separuh saiz dalam model dan sama pada kertas.

Pelan tanpa skala sendiri mengekalkan teks skrin tetapnya, dan simbolnya disaiz untuk 1:50 (1/4" = 1'-0" dalam kaki dan inci), seperti sebelum ini.

## Saiz pejabat anda

Dengan add-on Default Policies dihidupkan, tetapkan tinggi pejabat dalam Tetapan › Global › Default Policies › {{ui:Saiz anotasi pada kertas}}. Bangunan baharu mengambilnya apabila anda klik Cipta. Dalam bangunan yang sudah anda mulakan, kotak dialog mempunyai {{ui:Guna saiz pejabat saya}}. Lihat [Default Policies](topic:default-policies).

## Saiz pek peraturan

Pek peraturan boleh memberikan tinggi teks yang diperlukan oleh tempatnya (add-on Peraturan bangunan, konvensyen lukisan). Tandakan pek dalam Tetapan › Peraturan bangunan, kemudian dalam kotak dialog klik {{ui:Guna saiz pek peraturan}}: kotak terisi, dan anda semak serta simpan. Saiz yang diberi pek dalam mata ialah saiz fon, dan ia ditukar kepada tinggi huruf besar, jadi semak. Tiada apa ditetapkan sehingga anda simpan.

## Apa yang anda patut lihat

- Tinggi teks yang sama dalam milimeter pada helaian pada 1:100 dan pada helaian pada 1:50, sementara pelan itu sendiri dua kali lebih besar pada 1:50.
- Saiz mengikut bangunan: ia disimpan dalam fail IFC-nya.

## Perkara yang perlu diketahui

- Saiz BimCraft sendiri ialah saiz yang helaiannya sentiasa gunakan (kira-kira huruf besar 1.5 mm untuk teks dimensi). Ia bukan standard lukisan: tetapkan saiz pejabat anda.
- Tinggi mesti antara 0.5 hingga 50 mm.
- Tulisan blok tajuk dan legenda keynote tidak termasuk di sini: ia mengekalkan saiznya sendiri.
