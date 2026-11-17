---
title: Tambahkan mesin render dengan add-on
summary: Apa yang dapat ditambahkan add-on ke daftar Mesin di dialog Render, izin yang dibutuhkan untuk menjalankan program, dan apa yang diperiksa serta ditanyakan Studio.
keywords: add-on, addon, mesin, mesin render, pengembang, engine.run, izin, program, skrip, ditandatangani, studio, api
from: 06295376
---

Add-on (Pengaturan › Add-on) dapat menambahkan mesin ke daftar Mesin di {{ui:Render}}. Teks lengkap untuk penulis add-on ada di bagian 16 spesifikasi add-on; secara ringkas:

- Add-on mendaftarkan mesin dengan id yang diawali namanya sendiri, sebuah nama, pengaturan opsional, dan **salah satu dari** program yang dijalankan **atau** fungsi JavaScript yang menggambar gambar.
- Mesin yang menjalankan program membutuhkan izin **`engine.run`**, yang ditampilkan sebelum pemasangan dan di Pengaturan. Mesin hanya berjalan di Studio; di peramban ia muncul sebagai berkas untuk disimpan.
- Add-on menyebutkan program (nama berkas biasa, bukan shell), skrip yang **berada di dalam add-on yang ditandatangani**, dan argumen yang terdiri dari placeholder dan kata biasa. Studio menemukan program itu atau meminta Anda menunjuknya sekali.
- Saat pertama kali add-on menjalankan sebuah program, **Studio menanyakan Anda di dialognya sendiri**: add-on mana, program mana, dan bahwa skrip dapat melakukan apa pun yang dapat dilakukan program itu. Izinkan hanya untuk add-on yang Anda percayai. Jawaban Anda diingat untuk add-on dan program tersebut.
- Paket (adegan sebagai USD dan berkas pengaturan, dengan berkas glTF bila add-on memintanya) dan skrip add-on dimasukkan ke folder sementara yang baru, program dijalankan di sana, dan gambar kembali ditandai dengan nama mesin add-on.

:::note
Add-on hanya dapat menambahkan mesin render mulai dari API add-on 1.4. Contoh kerja untuk renderer baris perintah open-source ada di repositorinya sendiri; belum pernah dijalankan di renderer itu.
:::
