---
title: Kirim model ke program render
summary: Simpan apa yang ditampilkan tampilan 3D sebagai model glTF (.glb) dengan material, tekstur, dan lampunya, untuk program render dan visualisasi yang membaca glTF.
keywords: glb, gltf, gl transmission format, ekspor, rendering, render, visualisasi, real time, archviz, material, tekstur, lampu, cahaya, aset, aset kustom
from: e62d57dc
---

{{ui:Untuk render}} pada bilah alat menyimpan apa yang ditampilkan tampilan 3D sebagai satu file **.glb** (glTF 2.0, format terbuka dari Khronos Group). Program render yang membaca glTF membukanya dengan material dan lampu model; Twinmotion mencantumkan glTF dan GLB di antara file geometri yang diimpornya dan mempertahankan lampunya (dokumentasi Epic, "Importing geometry in Twinmotion"): gunakan {{ui:Untuk render}} lalu impor .glb di sana. Tidak ada yang diunggah: file dibuat di komputer ini.

## Simpan

1. Buka model IFC dan atur tampilan 3D: sembunyikan level, elemen, atau model tertaut yang tidak Anda inginkan, dan [cat material](topic:paint-materials) yang ingin Anda lihat.
2. Klik {{ui:Untuk render}} (atau ketik `GLB`).
3. File diunduh sebagai "<nama model>.glb". Bilah status menyatakan berapa segitiga, material, dan lampu yang dikandungnya.

## Isi file

- **Geometri** dari setiap elemen yang ditampilkan tampilan 3D, dalam meter, dengan Y ke atas (sumbu glTF itu sendiri). Satu objek per level dan material, dinamai "Level 1 — Brick, red", sehingga Anda dapat memilih material di program render dan menggantinya dengan milik program itu.
- **Material:** setiap warna dengan tampilan yang Anda pilih untuknya di [Render](topic:render) (doff, satin, mengilap, logam, kaca…), dan setiap material pustaka yang dicat dengan warna, kekasaran, dan **tekstur**-nya (gambarnya ada di file, diskalakan ke ukuran aslinya: bata berukuran bata). Kaca tembus pandang.
- **Lampu:** setiap armatur lampu yang dinyalakan di Render › Lampu, sebagai lampu titik atau sorot dengan kecerahannya (lumen diubah menjadi kandela), warna, dan sudut berkasnya.
- **Lokasi tapak:** lintang dan bujur tapak ditulis di file sebagai referensi. Program render memiliki matahari sendiri: ketik lokasinya di sana.

## Yang tidak disertakan

- Potongan penampang (seluruh elemen ikut masuk) dan elemen yang ditampilkan tembus pandang (dibiarkan keluar).
- Objek per elemen (satu objek per level dan material sebagai gantinya), properti IFC, bump map, tampilan yang disimpan, dan jalan yang direkam.
- Tepi dan latar belakang.

## Enscape dan renderer plug-in lain

Enscape berjalan di dalam program desain lain dan tidak memiliki file untuk membuka seluruh proyek. Ada dua cara:

- Buka **IFC** model (File › Simpan) di program tempat Enscape berjalan; sebagian besar membacanya. Warna ikut terbawa; material pustaka datang sebagai warnanya.
- Bawa **bagian kecil** (furnitur, armatur) sebagai aset kustom: isolasi dulu, lalu klik {{ui:Untuk Enscape (.gltf)}}. Pustaka aset kustom Enscape mencantumkan file .gltf, .obj, dan .fbx, bukan .glb, jadi tombol ini menyimpan adegan yang sama sebagai satu file **.gltf** mandiri (data biner dan gambarnya ada di dalam file; tidak ada yang lain untuk disalin bersamanya). Enscape menyarankan aset kecil (di bawah sekitar 20,000 segitiga).

:::note
Di CadCraft Studio, file glTF yang sama (dan file USD) juga dapat disimpan dari {{ui:Render}} › Mesin › **glTF file** / **USD file**, atau dibuka langsung di program di komputer ini: lihat [Buka scene di program lain](topic:render-open-in). Plug-in atau tautan langsung untuk Enscape atau Twinmotion belum dibuat. Format FBX dan Datasmith tidak memiliki spesifikasi yang dipublikasikan, sehingga BimCraft tidak menuliskannya; glTF adalah jalur terbuka.
:::
