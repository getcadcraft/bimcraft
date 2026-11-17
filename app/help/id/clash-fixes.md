---
title: Selesaikan benturan dengan perbaikan tiap disiplin
summary: Dari hasil benturan, {{ui:Usulkan perbaikan}} mencantumkan untuk setiap benturan apa yang dapat dilakukan setiap disiplin — saluran dialihkan di bawah balok, pipa digeser ke samping, kolom dipindahkan, bukaan di balok — masing-masing dicoba pada salinan model beserta trade-off-nya, untuk Anda terima atau tolak. Perbaikan yang diterima dimasukkan sebagai satu langkah urungkan.
keywords: benturan, perbaikan benturan, selesaikan benturan, koordinasi, usulkan perbaikan, alihkan, lintasan memutar, geser, saluran, pipa, baki, balok, kolom, bukaan, selongsong, trade-off, disiplin, struktur, mekanikal, plambing, elektrikal, arsitektur, asisten
from: f7bafdd9
---

## Yang akan Anda lakukan

Ubah daftar benturan menjadi keputusan. Setiap disiplin (struktur, mekanikal, plambing, elektrikal, arsitektur) mengusulkan perbaikan hanya untuk elemennya sendiri, setiap usulan diperiksa pada salinan model, dan Anda yang memilih.

## Langkah-langkah

1. Jalankan pemeriksaan benturan terlebih dahulu. Lihat [Periksa benturan](topic:clash-check) dan [Periksa pipa dan saluran terhadap struktur](topic:mep-against-structure).
2. Di bawah hasilnya, klik {{ui:Usulkan perbaikan}}. Panel **Usulan perbaikan** terbuka di samping model.
3. Untuk setiap benturan Anda melihat usulan setiap disiplin, yang terbaik lebih dulu. Setiap baris menjelaskan apa yang dilakukannya dan trade-off-nya: apakah ia menyelesaikan benturan, berapa banyak benturan baru yang dibuatnya, aturan mana yang dilanggarnya, berapa panjang lintasan yang bertambah atau seberapa jauh ia dipindahkan, berapa banyak fiting, dan skor biaya.
4. Klik {{ui:Tampilkan}} untuk melihat elemen-elemennya dalam 3D. Klik {{ui:Terima}} pada perbaikan yang Anda inginkan (satu per benturan), atau {{ui:Tolak}}.
5. Baris di bagian bawah menjelaskan apa yang dilakukan semua perbaikan yang Anda terima secara bersama: berapa banyak benturan yang teratasi, berapa banyak yang tersisa, dan apakah ada yang menimbulkan benturan baru.
6. Klik {{ui:Terapkan perbaikan yang diterima (satu langkah urungkan)}}. Pemeriksaan benturan dijalankan lagi. {{ui:Urungkan}} membatalkan semuanya sekaligus.

## Yang boleh dilakukan setiap disiplin

- **Mekanikal** (saluran, pipa pemanas dan pendingin): mengalihkan di atas atau di bawah pada sisi yang terbentur, menaikkan atau menurunkan seluruh jalur, memindahkannya ke samping, membuat saluran persegi panjang lebih pipih dengan luas yang sama.
- **Plambing** (air, drainase, gas, pemadam kebakaran): gerakan yang sama, kecuali drainase gravitasi tidak pernah diberi lintasan memutar; ia hanya dapat dipindahkan secara utuh dengan mempertahankan kemiringannya.
- **Elektrikal** (baki kabel dan konduit): gerakan yang sama; baki harus menjaga jarak bebas 150 mm di atasnya untuk memasang kabel.
- **Struktur**: memindahkan kolom (hingga 300 mm), atau bukaan pada badan balok atau pelat untuk jalur yang melintas. Setiap perbaikan struktural menyatakan bahwa insinyur struktur harus menyetujuinya.
- **Arsitektur**: selongsong pada dinding untuk jalur yang melintas, atau memindahkan dinding yang diketahui tidak menanggung beban.

## Yang akan Anda lihat

- Perbaikan yang melanggar aturan ditandai: lebih dekat dari celah 25 mm ke sesuatu yang lain, di bawah garis tinggi bebas 2,100 mm, bukaan badan balok lebih besar dari 40% kedalaman balok atau terlalu dekat ke ujungnya, atau balok yang akan berubah bentang.
- Perbaikan yang dapat dibuat BimCraft diterapkan pada model: jalur yang Anda gambar dengan alat Pipa dan Saluran, serta kolom yang Anda gambar. Yang lain bertanda **Hanya saran**: menerimanya malah menambahkan isu di tab Isu.

## Perlu diketahui

- Perbaikan berasal dari aturan bawaan dalam aplikasi; tidak ada AI yang digunakan untuknya.
- Jika Anda menghubungkan asisten (lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants)), ia dapat membaca benturan dan menambahkan usulannya sendiri untuk satu disiplin ke panel yang terbuka. Usulan itu diperiksa dengan cara yang sama, diberi tanda nama asisten, dan tidak ada yang berubah sampai Anda menerima dan menerapkannya.
- Salinan diperiksa dengan kotak di sekeliling setiap elemen dan setiap bagian jalur, sehingga jalur miring dapat menampilkan benturan yang tidak akan ditemukan oleh pemeriksaan benturan. Jalankan pemeriksaan benturan lagi setelah menerapkan: itulah keputusan akhirnya.
- Batasannya (seberapa jauh jalur boleh bergeser, seberapa tinggi lintasan memutar boleh naik, dan celahnya) adalah nilai bawaan yang tertulis di panel.

## Berikutnya

- [Isu dan file BCF](topic:issues-bcf)
- [Gambar jalur pipa dan saluran](topic:pipes-and-ducts)
