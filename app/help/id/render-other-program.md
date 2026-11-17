---
title: Gambar gambar dengan program lain
summary: Path tracer kami sendiri menggambar gambar Render; program lain hanya dapat menggambar melalui add-on mesin render di CadCraft Studio. Apa yang dibawa serta, dan mengapa beberapa program tidak pernah ditawarkan.
keywords: render, mesin, program luar, mesin add-on, studio, latar belakang, antrean, usd, gltf, digambar oleh, blender, gpl
from: 652b413c
---

Gambar di {{ui:Render}} digambar oleh **mesin kami sendiri**: Cepat dan Path tracer, di peramban maupun di CadCraft Studio. Program lain hanya dapat menggambar bila sebuah **add-on mesin render** membawanya: lihat [Tambahkan mesin render dengan add-on](topic:render-engine-addons). Untuk membawa adegan ke program lain dan terus bekerja di sana, gunakan [Buka adegan di program lain](topic:render-open-in) atau [Kirim adegan ke mesin game](topic:render-unreal).

## Gambar dengan mesin sebuah add-on

1. Nyalakan add-on di Pengaturan › Add-on. Mesinnya muncul di daftar Mesin di {{ui:Render}}.
2. Pilih mesin itu. Pengaturannya sendiri tampil di bawah daftar Mesin.
3. Klik {{ui:Render}}. Di Studio, saat pertama kali add-on menjalankan sebuah program, Studio menanyakan Anda di dialognya sendiri. Kemajuan ditampilkan selama ia menggambar; {{ui:Stop}} menghentikannya. Gambar muncul dan ditandai dengan mesin yang menggambarnya.

Mesin yang ditulis dengan JavaScript juga berjalan di peramban. Mesin yang menjalankan program di komputer ini hanya berjalan di Studio; di peramban ia muncul sebagai berkas untuk disimpan.

## Yang dibawa serta

Mesin mendapat **paket**: model sebagai berkas USD (dan berkas glTF bila ia memintanya), dan berkas pengaturan dengan nilai material yang tepat, matahari dan langit, setiap lampu yang menyala dengan dayanya dan profil cahayanya, kamera, serta paparan. Setiap program menerangi, menata tone, dan mengambil sampel dengan caranya sendiri, jadi gambar mirip dalam kamera, matahari, lampu, dan paparan, tetapi tidak piksel demi piksel.

## Program yang tidak pernah dijalankan CadCraft

CadCraft tidak pernah menjalankan program berlisensi GNU GPL, dan tidak pernah mencantumkannya sebagai mesin atau sasaran Buka di. Blender termasuk di antaranya, sehingga ia tidak ada di daftar Mesin. Berkas USD atau glTF yang disimpan dari {{ui:Render}} tetap dapat dibuka di sana seperti di program lain yang membaca berkas tersebut.

:::note
Kamera panorama dan stereo serta gambar langit (warna langit yang dipakai sebagai gantinya) tidak dibawa ke program lain. Tidak ada yang dilakukan di program lain yang kembali ke model.
:::
