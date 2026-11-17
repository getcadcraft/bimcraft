---
title: Tandai elemen sebagai diperiksa atau diverifikasi di lapangan
summary: Elemen yang dibaca dari PDF atau pindaian belum diverifikasi sampai Anda memeriksanya. Tandai elemen sebagai diperiksa, atau sebagai diverifikasi di lapangan (LOD 500) beserta siapa yang mengukurnya, kapan, dan bagaimana, lalu serahkan model as-built yang menyatakan mana yang mana.
keywords: belum diverifikasi, diverifikasi, diperiksa, diverifikasi di lapangan, as built, as-built, lod 500, penutupan, serah terima, diukur di lokasi, meteran, laser, pindaian, survei, bangunan eksisting, alterasi, tandai sebagai diperiksa, verifikasi, tahap 7
from: df35d908
---

## Yang akan Anda lakukan

Pantau apa dalam model yang benar-benar sudah dilihat seseorang. Sebuah elemen memiliki salah satu dari tiga tanda, atau tidak ada tanda:

- **Belum diverifikasi**: program mengenalinya dari PDF, gambar hasil pindaian, gambar hasil tracing, atau pindaian awan titik. Belum ada yang memeriksanya.
- **Diperiksa**: seseorang membandingkannya dengan gambar asalnya.
- **Diverifikasi di lapangan (LOD 500)**: seseorang mengukurnya di lokasi. Siapa, kapan, dan bagaimana disimpan bersamanya.
- **Tanpa tanda**: digambar oleh seseorang. Model tidak membuat klaim tentang elemen itu.

## Langkah

1. Pilih satu elemen atau banyak (dinding, pintu, jendela, ruang, elemen apa pun).
2. Di {{ui:Properti}}, buka {{ui:Verifikasi}}.
3. Ketik siapa yang memeriksa atau mengukurnya. Tanggalnya adalah hari ini, kecuali Anda mengubahnya.
4. Klik {{ui:Tandai sebagai diperiksa}}. Untuk pengukuran di lokasi, pilih cara pengukurannya (meteran, alat ukur jarak laser, pindaian, survei), lalu klik {{ui:Tandai sebagai diverifikasi di lapangan (LOD 500)}}.
5. {{ui:Tandai sebagai belum diverifikasi}} dan {{ui:Hapus tandanya}} membatalkannya. Setiap klik adalah satu langkah yang dapat Anda urungkan, untuk seluruh pilihan.

Untuk menandai pilihan dengan cepat: {{ui:Alat}} › {{ui:Tandai sebagai diperiksa}} (diketik: `MARKCHECKED`) menandainya sebagai diperiksa oleh Anda, hari ini.

## Yang akan Anda lihat

- Di denah, elemen yang belum diverifikasi memiliki kotak putus-putus dan tanda "?"; elemen yang diverifikasi di lapangan memiliki tanda centang. Hapus centang {{ui:Tampilkan tanda verifikasi di denah}} di bagian {{ui:Audit}} untuk menyembunyikannya.
- {{ui:Jadwal}} › {{ui:Verifikasi}} mencantumkan setiap elemen bertanda beserta levelnya, statusnya, siapa, kapan, bagaimana, dan asalnya.
- Audit mencantumkan elemen yang belum diverifikasi, dan menghitung elemen yang diverifikasi di lapangan sebagai LOD 500. Lihat [Audit model](topic:audit-the-model).

## Dari pindaian

Saat Anda membandingkan pindaian dengan model, {{ui:Tandai elemen yang cocok sebagai diverifikasi di lapangan}} menandai setiap elemen yang dilihat pindaian sebagai sudah dibangun dalam toleransi, dengan metode "scan" dan toleransinya di catatan. Lihat [Bandingkan pindaian dengan model](topic:compare-scan-with-model).

:::warning
Perbandingan itu mencocokkan kotak setiap elemen dengan titik pindaian. Itu bukan survei. Gunakan untuk elemen yang juga Anda lihat sendiri.
:::

## Model as-built dan paket serah terima

{{ui:Buat paket serah terima}} di tab {{ui:Aset}} memasukkan model as-built ke dalam zip, beserta:

- pernyataan pada proyek tentang berapa banyak elemen yang diverifikasi di lapangan, diperiksa, belum diverifikasi, dan tanpa tanda;
- `as-built/verified-elements.csv`: setiap elemen dan ruang beserta statusnya, siapa, kapan, dan bagaimana;
- `as-built/as-built-drawings.pdf`: set gambar seperti keadaannya sekarang;
- changelog gambar, jika model sudah menerbitkan set.

Lihat [Aset dan pemeliharaan](topic:assets-and-maintenance).

## Cara disimpan dalam IFC

Setiap elemen yang diberi tanda membawa set properti `CadCraft_Verification`: State, By, On, Method, Source, Note, dan LevelOfDevelopment (`LOD 500` saat diverifikasi di lapangan). Itu properti teks biasa, sehingga program lain dapat mencantumkannya, dan Temukan, Warnai menurut properti, serta jadwal tag dapat memakainya. Pernyataan as-built adalah set properti `CadCraft_AsBuilt` pada proyek. Elemen tanpa set itu belum diukur di lokasi.

## Berikutnya

- [Dinding dari sekumpulan denah](topic:walls-from-plans)
- [Audit model](topic:audit-the-model)
