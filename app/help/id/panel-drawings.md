---
title: Gambar panel dari kayu atau baja ringan
summary: Bingkai dinding, lantai, dan atap model sebagai panel dari kayu atau baja ringan, lihat setiap stud, plat, header, balok lantai, dan kasau dalam skala, dan simpan daftar potong sebagai CSV serta gambar kerja sebagai PDF.
keywords: panel, rangka, gambar kerja, daftar potong, baja ringan, stud baja, LGS, kayu, balok lantai, kasau, header, stok, PDF
from: c09f916e
---

## Buka panel

Pilih {{ui:Gambar panel}} di menu {{ui:Build}} (atau ketik {{cmd:PANELS}}). Daftar memuat setiap dinding yang digambar, setiap lantai, dan setiap atap model, masing-masing dengan centang. Dinding hadir beserta pintu dan jendelanya sebagai bukaan. Lantai dibingkai sebagai persegi panjang di sekeliling garis luarnya, dengan balok lantai berjalan pada arah pendek. Atap dibingkai sebagai atap pelana di atas garis luar dindingnya, dengan kemiringan atapnya; daftar menyebutkannya, karena atap perisai atau atap yang kompleks bukan atap pelana.

## Material, ukuran, dan jarak

Pilih {{ui:Material}}: **Kayu** atau **Baja ringan**. Potongan baja berupa C-stud yang dinamai menurut kedalaman dan ketebalannya (misalnya C92-1.2), dengan track untuk plat. {{ui:Ukuran batang}} memilih satu ukuran untuk setiap panel yang dicentang, atau biarkan pada Bawaan untuk memakai standar setiap jenis panel. {{ui:Jarak}} adalah jarak antara stud, balok lantai, atau kasau. Ini nilai awal untuk Anda atur. Ini bukan pemeriksaan kode: apakah stud pada jarak itu menopang dinding tersebut, dan apakah header untuk bentang itu cukup, adalah urusan tabel kode (add-on Peraturan bangunan memiliki tabel IRC) dan insinyur Anda.

## Yang Anda dapatkan

Panel bercentang pertama digambar dalam skala di dialog, beserta dimensinya. {{ui:Daftar potong (CSV)}} menyimpan setiap potongan panel menurut tanda, ukuran, dan panjangnya, beserta panjang stok yang perlu dibeli untuknya. {{ui:Gambar kerja (PDF)}} menyimpan satu halaman A3 untuk setiap panel, dengan setiap potongan diberi tanda dan daftar potongnya. {{ui:Gambar (SVG)}} menyimpan panel pertama sebagai gambar. Apa pun yang tidak dapat dibingkai oleh kode pembingkaian (bukaan yang terlalu dekat ke ujung dinding, header yang tidak muat di bawah plat, atau potongan yang lebih panjang dari stok terpanjang) juga dicantumkan di Masalah sekaligus di dialog.

## Yang tidak dilakukannya

Panel adalah gambar yang dibuat dari model setiap kali Anda memintanya: tidak ada yang ditulis ke dalam model, jadi panel selalu cocok dengannya. Untuk memasukkan rangka ke dalam model sebagai batang, gunakan {{ui:Rangka}} untuk dinding, lantai, dan atap kayu.
