---
title: Tanda elemen sebagai telah disemak atau disahkan di tapak
summary: Elemen yang dibaca daripada PDF atau imbasan adalah belum disahkan sehingga anda menyemaknya. Tandakan elemen sebagai telah disemak, atau sebagai disahkan di tapak (LOD 500) dengan siapa yang mengukurnya, bila dan bagaimana, dan serahkan model seperti dibina yang menyatakan yang mana satu.
keywords: belum disahkan, disemak, disahkan, disahkan di tapak, seperti dibina, lod 500, penutupan, serahan, diukur di tapak, pita, laser, imbasan, tinjauan, bangunan sedia ada, pengubahsuaian, tanda sebagai disemak, pengesahan, peringkat 7
from: df35d908
---

## Apa yang anda lakukan

Jejaki apa dalam model yang benar-benar telah diperiksa oleh seseorang. Elemen mempunyai salah satu daripada tiga tanda, atau tiada:

- **Belum disahkan**: program mengecamnya daripada PDF, lukisan imbasan, lukisan yang dikesan atau imbasan awan titik. Belum ada sesiapa yang menyemaknya.
- **Disemak**: seseorang membandingkannya dengan lukisan asalnya.
- **Disahkan di tapak (LOD 500)**: seseorang mengukurnya di tapak. Siapa, bila dan bagaimana disimpan bersamanya.
- **Tiada tanda**: dilukis oleh seseorang. Model tidak membuat dakwaan tentangnya.

## Langkah

1. Pilih satu elemen atau banyak (dinding, pintu, tingkap, bilik, mana-mana elemen).
2. Dalam {{ui:Sifat}}, buka {{ui:Pengesahan}}.
3. Taip siapa yang menyemak atau mengukurnya. Tarikh ialah hari ini melainkan anda menukarnya.
4. Klik {{ui:Tanda sebagai disemak}}. Untuk ukuran tapak, pilih bagaimana ia diukur (pita pengukur, meter jarak laser, imbasan, tinjauan) dan klik {{ui:Tanda sebagai disahkan di tapak (LOD 500)}}.
5. {{ui:Tanda sebagai belum disahkan}} dan {{ui:Alih keluar tanda}} membatalkannya. Setiap klik ialah satu langkah yang boleh dibuat asal, bagi keseluruhan pilihan.

Untuk menanda pilihan dengan pantas: {{ui:Alat}} › {{ui:Tanda sebagai disemak}} (ditaip: `MARKCHECKED`) menanda pilihan itu sebagai disemak oleh anda, hari ini.

## Apa yang sepatutnya anda lihat

- Dalam pelan, elemen belum disahkan mempunyai kotak putus-putus dan "?"; yang disahkan di tapak mempunyai tanda semak. Nyahtanda {{ui:Tunjukkan tanda pengesahan dalam pelan}} dalam bahagian {{ui:Audit}} untuk menyembunyikannya.
- {{ui:Jadual}} › {{ui:Pengesahan}} menyenaraikan setiap elemen yang ditanda dengan tingkatnya, keadaan, siapa, bila, bagaimana dan dari mana asalnya.
- Audit menyenaraikan elemen belum disahkan, dan mengira elemen yang disahkan di tapak sebagai LOD 500. Lihat [Audit model](topic:audit-the-model).

## Daripada imbasan

Apabila anda membandingkan imbasan dengan model, {{ui:Tanda elemen yang sepadan sebagai disahkan di tapak}} menanda setiap elemen yang dilihat imbasan sebagai dibina dalam toleransi, dengan kaedah "imbasan" dan toleransi dalam nota. Lihat [Bandingkan imbasan dengan model](topic:compare-scan-with-model).

:::warning
Perbandingan itu memadankan kotak setiap elemen dengan titik imbasan. Ia bukan tinjauan. Gunakannya untuk elemen yang anda juga telah lihat sendiri.
:::

## Model seperti dibina dan pakej serahan

{{ui:Bina pakej serahan}} pada tab {{ui:Aset}} meletakkan model seperti dibina dalam fail zip, dengan:

- kenyataan pada projek tentang berapa banyak elemen yang disahkan di tapak, disemak, belum disahkan dan tidak ditanda;
- `as-built/verified-elements.csv`: setiap elemen dan bilik dengan keadaannya, siapa, bila dan bagaimana;
- `as-built/as-built-drawings.pdf`: set lukisan seperti sekarang;
- log perubahan lukisan, apabila model telah mengeluarkan set.

Lihat [Aset dan penyelenggaraan](topic:assets-and-maintenance).

## Cara ia disimpan dalam IFC

Setiap elemen yang ditanda membawa set sifat `CadCraft_Verification`: State, By, On, Method, Source, Note dan LevelOfDevelopment (`LOD 500` semasa disahkan di tapak). Ini ialah sifat teks biasa, jadi program lain menyenaraikannya, dan Cari, Warna mengikut sifat dan jadual tag boleh menggunakannya. Kenyataan seperti dibina ialah set sifat `CadCraft_AsBuilt` pada projek. Elemen tanpa set itu tidak diukur di tapak.

## Seterusnya

- [Dinding daripada set pelan](topic:walls-from-plans)
- [Audit model](topic:audit-the-model)
