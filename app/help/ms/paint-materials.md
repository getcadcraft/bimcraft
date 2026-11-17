---
title: Cat bahan pada dinding, lantai dan bumbung
summary: Berikan elemen bahan seperti bata, papan dinding, sirap, kayu atau jubin, pada keseluruhan elemen atau pada satu sisi, disimpan dalam IFC dan dipaparkan dalam gambar yang dirender.
keywords: cat, bahan, kemasan, kemasan permukaan, tekstur, bata, papan dinding, sirap, bumbung, kayu, batu, jubin, konkrit, stuko, rumput, kerikil, kaca, logam, sisi dinding, dalam, luar, kemasan lantai, bilik, gaya permukaan
from: fbfed676
---

{{ui:Cat}} pada bar alat membuka perpustakaan bahan di atas paparan 3D: bata dan blok, papan dinding, bumbung, kayu, batu, jubin, konkrit, stuko, tanah, kaca dan logam.

## Cat elemen

1. Klik {{ui:Cat}}.
2. Klik satu bahan.
3. Klik elemen dalam paparan 3D. Setiap klik mengecat elemen yang anda klik.

Untuk mengecat banyak sekali gus, pilih dahulu (klik, {{key:Ctrl}}+klik, atau [carian](topic:find)), kemudian klik bahan: setiap elemen yang dipilih menerimanya dalam satu langkah.

Elemen itu terus menunjukkan warna bahan dalam paparan 3D. Teksturnya ditunjukkan dalam [gambar yang dirender](topic:render). {{key:Esc}} atau {{ui:Tutup}} menamatkan mengecat.

## Cat satu sisi

Pilih {{ui:Hanya sisi yang diklik}}, kemudian klik sisi yang anda mahu: bahagian luar dinding dengan papan dinding dan bahagian dalamnya dengan kemasan lain, atau bahagian atas lantai dengan kayu sementara bahagian bawahnya dibiarkan. Bahagian lain elemen itu mengekalkan bahannya.

Sisi dikesan daripada arah elemen itu sendiri, jadi ia kekal sisi yang sama apabila anda mengalih atau memutarkan elemen.

Untuk mengecat lantai bilik demi bilik, berikan setiap bilik lantainya sendiri ({{ui:Lukis}} › {{ui:Lantai}} › **Bilik ini**, lihat [Bilik, lantai, siling dan bumbung](topic:floors-and-roofs)), kemudian cat bahagian atas setiap lantai.

## Alih bahan

Klik cetakan jalur ({{ui:Tiada bahan}}), kemudian klik elemen itu. Setiap bahan padanya, termasuk sisi-sisinya, dialih keluar.

## Dalam fail

Mengecat mengubah IFC (satu langkah setiap satu, {{key:Ctrl+Z}} membatalkannya) dan kekal sebagai IFC biasa:

- setiap elemen yang dicat mendapat set sifat `CadCraft_Render` yang menamakan bahannya, dan satu sifat bagi setiap sisi yang dicat;
- badannya mendapat gaya permukaan dengan warna bahan, supaya program BIM lain menunjukkan warna itu. Dalam IFC4 gaya itu turut menamakan tekstur.

Apabila BimCraft membentuk semula dinding yang anda cat (anda mengalih hujungnya, contohnya), dinding itu mengekalkan bahan dan warnanya, dalam BimCraft, dalam gambar dan dalam program lain.

:::note
Tekstur dilukis oleh BimCraft sendiri: ia berfungsi luar talian dan percuma digunakan untuk apa-apa sahaja (CC0). Tekstur imej anda sendiri belum dibina.
:::

## Tekstur dalam paparan 3D

Dinding bata yang dicat menunjukkan batanya, lantai kayu menunjukkan papannya, pada saiz sebenar, sebaik sahaja cat dikenakan. Nyahtanda **Tunjukkan tekstur dalam paparan 3D** dalam palet Cat untuk melihat warna rata sebaliknya (model yang sangat besar mematikannya secara automatik dan menyatakannya). Warna mengikut sifat sentiasa menunjukkan warnanya sendiri. Tekstur dilukis oleh program, jadi tiada apa-apa dimuat turun, dan gambar yang dirender serta fail glTF membawanya juga.
