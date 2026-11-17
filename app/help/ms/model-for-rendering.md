---
title: Hantar model ke program rendering
summary: Simpan apa yang ditunjukkan oleh pandangan 3D sebagai model glTF (.glb) dengan bahan, tekstur dan lampunya, untuk program rendering dan visualisasi yang membaca glTF.
keywords: glb, gltf, format transmisi gl, eksport, rendering, render, visualisasi, masa nyata, archviz, bahan, tekstur, lampu, pencahayaan, aset, aset tersuai
from: e62d57dc
---

{{ui:For rendering}} pada bar alat menyimpan apa yang ditunjukkan oleh pandangan 3D sebagai satu fail **.glb** (glTF 2.0, format terbuka daripada Khronos Group). Program rendering yang membaca glTF membukanya dengan bahan dan lampu model; Twinmotion menyenaraikan glTF dan GLB antara fail geometri yang diimportnya dan mengekalkan lampunya (dokumentasi Epic, "Importing geometry in Twinmotion"): gunakan {{ui:For rendering}} dan import .glb di sana. Tiada apa dimuat naik: fail dibuat di komputer ini.

## Simpan

1. Buka model IFC dan tetapkan pandangan 3D: sembunyikan tingkat, elemen atau model dipautkan yang anda tidak mahu, dan [warnakan bahan](topic:paint-materials) yang anda mahu lihat.
2. Klik {{ui:For rendering}} (atau taip `GLB`).
3. Fail dimuat turun sebagai "<nama model>.glb". Bar status menyatakan berapa segi tiga, bahan dan lampu yang dimilikinya.

## Apa yang dibawa oleh fail

- **Geometri** bagi setiap elemen yang ditunjukkan oleh pandangan 3D, dalam meter, dengan Y ke atas (paksi glTF sendiri). Satu objek bagi setiap tingkat dan bahan, dinamakan "Level 1 — Brick, red", supaya anda boleh memilih bahan dalam program rendering dan menggantikannya dengan miliknya sendiri.
- **Bahan:** setiap warna dengan rupa yang anda pilih untuknya dalam [Render](topic:render) (matt, satin, berkilat, logam, kaca…), dan setiap bahan pustaka yang dicat dengan warnanya, kekasarannya dan **tekstur** (gambarnya ada dalam fail, diskalakan kepada saiz sebenar: bata ialah saiz bata). Kaca lut sinar.
- **Lampu:** setiap lampu yang dihidupkan dalam Render › Lampu, sebagai lampu titik atau sorot dengan kecerahannya (lumen ditukar kepada kandela), warna dan sudut pancaran.
- **Lokasi tapak:** latitud dan longitud tapak ditulis dalam fail untuk rujukan. Program rendering mempunyai matahari sendiri: taip lokasinya di sana.

## Apa yang ditinggalkan

- Potongan keratan (elemen penuh dimasukkan) dan elemen yang ditunjukkan lut sinar (ia ditinggalkan).
- Objek elemen demi elemen (satu objek bagi setiap tingkat dan bahan sebaliknya), sifat IFC, peta bump, pandangan yang disimpan dan lawatan yang dirakam.
- Tepi dan latar belakang.

## Enscape dan perenderan pemalam lain

Enscape berjalan di dalam program reka bentuk lain dan tiada fail untuk membuka keseluruhan projek. Dua cara:

- Buka **IFC** model (Fail › Simpan) dalam program tempat Enscape berjalan; kebanyakannya membaca IFC. Warna dibawa bersama; bahan pustaka dibawa sebagai warnanya.
- Bawa **bahagian kecil** (perabot, perlengkapan) sebagai aset tersuai: asingkan dahulu, kemudian klik {{ui:For Enscape (.gltf)}}. Pustaka aset tersuai Enscape menyenaraikan fail .gltf, .obj dan .fbx, bukan .glb, jadi butang ini menyimpan adegan yang sama sebagai satu fail **.gltf** yang berdiri sendiri (data binari dan gambar berada dalam fail; tiada apa lagi untuk disalin bersamanya). Enscape menasihatkan aset kecil (di bawah kira-kira 20,000 segi tiga).

:::note
Dalam CadCraft Studio fail glTF yang sama (dan fail USD) juga boleh disimpan dari {{ui:Render}} › Enjin › **Fail glTF** / **Fail USD**, atau dibuka terus dalam program di komputer ini: lihat [Buka adegan dalam program lain](topic:render-open-in). Pemalam atau pautan langsung untuk Enscape atau Twinmotion tidak dibina. Format FBX dan Datasmith tidak mempunyai spesifikasi yang diterbitkan, jadi BimCraft tidak menulisnya; glTF ialah laluan terbuka.
:::
