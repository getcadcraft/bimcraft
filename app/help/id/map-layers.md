---
title: Peta di tanah di bawah model
summary: Letakkan peta jalan atau gambar udara di tanah di bawah model IFC yang bergeoreferensi, dari ubin peta, layanan peta, atau gambar dengan file dunia.
keywords: peta, map, layer peta, map layers, peta dasar, basemap, udara, aerial, satelit, tapak, tanah, ubin, tiles, xyz, wms, wmts, layanan peta, file dunia, world file, georeferensi, ifcmapconversion, projected crs, epsg, konteks tapak
from: 84e2e9df
---

## Yang akan Anda lakukan

Melihat model di tempatnya: peta jalan atau gambar udara tapak di tanah di bawahnya.

## Langkah

1. Buka model IFC yang memuat tempatnya di peta (konversi peta, IfcMapConversion, dengan sistem koordinat terproyeksi). Pengekspor menuliskannya saat koordinat proyek (titik survei, koordinat bersama) diatur.
2. Pilih {{ui:Tampilkan}} › {{ui:Layer peta…}}. Dialog menyatakan sistem model, misalnya EPSG:28356. Model tanpa konversi peta tidak dapat memiliki layer peta: dialog akan memberi tahu.
3. Aktifkan {{ui:Layer peta dari internet}}. Sebelum itu, tidak ada yang diminta dari server mana pun; saat aktif, server yang Anda tambahkan melihat area di sekitar model dan alamat internet Anda, tidak pernah model Anda.
4. Di {{ui:Tambahkan layer}}, pilih ubin (alamat dengan `{z}`, `{x}` dan `{y}`), layanan WMS, WMTS atau ArcGIS ({{ui:Dapatkan layer}}, lalu pilih satu), atau gambar dengan file dunianya.
5. Tutup dialog. Peta terletak di tanah tepat di bawah titik terendah model, menutupi jejak model dan meluas sejauh itu di sekelilingnya.

:::note
Peta hanya tampil di layar; ia tidak disimpan dalam file IFC. Daftar layer disimpan di peramban ini. Gunakan hanya layanan peta yang syarat penggunaannya mengizinkan.
:::
