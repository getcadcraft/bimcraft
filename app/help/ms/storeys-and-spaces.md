---
title: Tunjuk dan sembunyikan tingkat, ruang dan tepi
summary: Matikan tingkat untuk melihat ke dalam bangunan, tunjukkan bilik dan ruang, dan hidupkan atau matikan garisan tepi.
keywords: tingkat, aras, lantai, sembunyi, asingkan, bilik, ruang, ifcspace, tepi, keterlihatan, keratan
from: b838dcc0
---

## Apa yang anda akan lakukan

Lihat ke dalam model IFC dengan mematikan tingkat di atas yang anda ambil berat, kemudian tunjukkan bilik dan ruang, dan matikan garisan tepi untuk paparan yang lebih kemas.

## Langkah: lihat satu lantai

1. Buka model IFC. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model).
2. Cari senarai {{ui:Tingkat}} di sebelah kiri. Tingkat teratas ialah yang pertama, seperti membaca keratan dari bumbung ke bawah.
3. Nyahtanda bumbung dan setiap tingkat di atas lantai yang anda mahu.
4. Klik {{ui:Atas}} untuk melihat ke bawah ke lantai itu.
5. Tanda semula tingkat untuk mengembalikannya.

## Apa yang sepatutnya anda lihat

Setiap tingkat yang anda nyahtandakan hilang serta-merta, bersama segala yang ada padanya. Senarai hanya menunjukkan tingkat yang mempunyai sesuatu yang kelihatan. Elemen yang tidak ditetapkan kepada mana-mana tingkat dikumpulkan sebagai **Tiada di tingkat** di bahagian bawah; elemen tapak dan sesetengah perabot selalunya berada di situ.

## Langkah: tunjuk bilik dan ruang

1. Klik {{ui:Ruang}} dalam bar alat di atas model. Butang itu kekal ditekan.
2. Lihat model: bilik dan ruang muncul sebagai isipadu pucat dan lut sinar.
3. Klik ruang untuk membaca sifatnya, seperti namanya, nombornya dan luasnya, di sebelah kanan.
4. Klik {{ui:Ruang}} sekali lagi untuk menyembunyikannya.

Ruang disembunyikan apabila model dibuka kerana jika tidak ia akan menutupi dinding dan lantai.

## Langkah: tepi

1. Klik {{ui:Tepi}} untuk mematikan garisan tepi yang nipis.
2. Klik sekali lagi untuk menghidupkannya semula.

Pada model yang sangat besar (lebih 1.5 juta segi tiga), butang itu dimalapkan dengan petua "Tepi dimatikan untuk model yang sangat besar". Ini menjimatkan memori.

## Kesilapan biasa

- **Menyahtanda tingkat tetapi masih melihat sebahagian daripadanya.** Sesuatu elemen tergolong kepada tingkat yang ditetapkan oleh program pengeksport. Dinding tinggi atau tangga selalunya hanya tergolong kepada tingkat asasnya, jadi ia kekal apabila tingkat di atas disembunyikan, atau hilang bersama tingkat di bawah.
- **Menyembunyikan tingkat untuk melihat ke dalam.** Kotak keratan selalunya lebih pantas: lihat [Potong model IFC dengan satah keratan](topic:section-plane#a-section-box). Anda juga boleh menyahtanda baris dalam {{ui:Pokok model}} (lihat [Cari jalan anda dengan pokok model](topic:model-tree)).
- **Mengklik ruang melalui dinding.** Klik memilih permukaan kelihatan yang terdekat. Sembunyikan tingkat di atas, atau tukar ke {{ui:Atas}}, kemudian klik.
- **Nama tingkat kelihatan pelik.** BimCraft memaparkan nama tingkat yang disimpan dalam fail. Jika ia berbunyi "Level 1" atau nombor, itulah yang ditulis oleh pengeksport.
