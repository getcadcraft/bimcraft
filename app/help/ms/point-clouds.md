---
title: Tunjuk awan titik di sebelah model
summary: Buka imbasan laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ) dalam paparan 3D sendiri atau bersama model IFC, beri warna, potong hirisan nipis melaluinya, ukur ke titik-titiknya, dan hantarkannya ke aplikasi lukisan untuk menyurih garisan seperti dibina.
keywords: awan titik, imbasan laser, imbasan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, seperti dibina, seperti-dibina, tinjauan, pendaftaran, hirisan, potong pelan, snap, ukur, surih, imbasan ke bim
from: d0a3e740
---

## Apa yang anda akan lakukan

Lihat imbasan laser sebuah bangunan di sebelah modelnya: semak sama ada apa yang dibina sepadan dengan reka bentuk, ukur antara titik yang diimbas, dan potong hirisan nipis untuk membaca dinding, pintu dan tiang.

## Langkah

1. Buka awan: {{ui:Open}} fail `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` atau `.xyz`, atau lepaskannya ke halaman (lihat topik tentang format awan titik untuk apa yang dibawa oleh setiap satu, dan apa yang perlu dieksport daripada perisian pengimbas). Dengan model dibuka, awan itu menyertai model dalam paparan 3D; membuka awan tidak pernah menutup model atau perubahannya yang belum disimpan. Tanpa model, awan dibuka sendiri.
2. Bar awan muncul di bawah bar alat. Ia menunjukkan berapa banyak titik dipaparkan dan berapa banyak yang ada dalam fail.
3. Pilih {{ui:Color by}}: warna fail itu sendiri (apabila pengimbas menyimpannya), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (kelas LiDAR seperti tanah, tumbuh-tumbuhan dan bangunan) atau {{ui:One color}}. {{ui:Size}} menjadikan titik lebih besar atau lebih kecil.
4. Klik {{ui:Plan}} di bawah {{ui:Slice}} untuk hanya mengekalkan satu jalur nipis 1.2 m di atas titik terendah, dilihat dari atas: dinding, bukaan pintu dan tiang boleh dibaca seperti pelan lantai. {{ui:Front}} dan {{ui:Side}} memotong jalur tegak untuk dongakan dan keratan. Alihkan jalur dengan {{ui:At}}, dan tukar {{ui:Thickness}} (meter). {{ui:Off}} menunjukkan semula keseluruhan awan.
5. Klik {{ui:Measure}} dalam bar alat. Penunjuk melekat pada titik awan (label berkata "awan titik"), supaya anda boleh mengukur dari dinding ke dinding dalam hirisan, atau dari elemen model ke imbasan. Bucu atau tepi model yang berada dalam capaian tetap diutamakan.
6. Dengan {{ui:Measure}} › {{ui:Location}}, satu titik awan memberikan latitud dan longitud daripada sistem koordinat awan itu sendiri, apabila fail itu menamakannya.
7. {{ui:Hide}} menyembunyikan awan buat seketika; {{ui:Remove}} mengeluarkannya. {{ui:Show}} › {{ui:Point cloud}} menyembunyikan atau menunjukkan bar.

## Ke mana awan pergi

{{ui:Place}} dalam bar menyatakan cara awan sejajar dengan model:

- **Koordinat model**: nombor awan ialah nombor model itu sendiri (imbasan yang didaftarkan ke koordinat reka bentuk).
- **Koordinat peta**: model mempunyai penukaran peta (IfcMapConversion) dan awan berada dalam sistem berunjuran yang sama: awan diletakkan melaluinya. Jika kedua-duanya menamakan sistem yang berbeza, baris status memberitahu perkara itu.
- **Berpusat pada model**: apabila kedua-duanya tidak meletakkan awan berhampiran model, tengahnya diletakkan pada tengah model dan titik terendahnya pada lantai model. Pilih pilihan lain untuk mengatasinya.

Apabila fail tidak menyatakan unitnya, BimCraft membaca meter dan menawarkan {{ui:Units}} dalam bar.

## Surih garisan seperti dibina

Klik {{ui:Surih dalam CadCraft}} untuk menghantar awan ke aplikasi lukisan dalam tab baharu. Ia dibuka di sana di bawah lukisan, di mana hirisan pelan dan snap objek membolehkan anda melukis dinding di atas imbasan. Lihat topik CadCraft tentang awan titik.

## Berapa banyak titik

Satu imbasan boleh mengandungi ratusan juta titik. BimCraft membaca setiap titik sekali dan menyimpan sebahagian yang sama rata untuk dilukis: {{ui:Show}} dalam bar menetapkan berapa banyak (1, 2, 5 atau 10 juta). Lebih banyak titik memerlukan lebih memori dan kad grafik yang lebih pantas. Kiraan bagi setiap kelas LiDAR ialah bagi setiap titik dalam fail.

:::note
Fail dibaca pada komputer ini; tiada apa-apa dimuat naik. LAS 1.0–1.4 dan LAZ dibaca (fail LAZ sehingga 1 GB, dipegang dalam memori semasa dibaca); fail E57 sehingga 6 juta titik dan 512 MB buat masa ini (imbasan yang lebih besar: eksport LAS atau LAZ); PLY, PCD dan PTX sepenuhnya; awan teks ialah `x y z`, dengan lajur warna (`r g b`) dan keamatan apabila ia ada.
:::

## Beberapa imbasan

Imbasan yang diambil dari kedudukan berbeza boleh didaftarkan ke dalam satu bingkai, diperhalus dengan ICP dan dieksport sebagai satu LAS atau E57: lihat [Daftar beberapa imbasan menjadi satu](topic:register-scans).
