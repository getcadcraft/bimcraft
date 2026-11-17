---
title: Mainkan banjir, angin, atau gempa pada bangunan
summary: Air yang naik melalui ruangan, tekanan angin pada setiap lantai, atau gempa yang mengguncang lantai, dimainkan pada denah atau tampak dengan penggeser waktu. Model sederhana dengan asumsinya dicantumkan; bukan pemeriksaan kode atau desain struktur.
keywords: bahaya, banjir, angin, gempa, seismik, drift, goyangan, gaya geser dasar, ketinggian air, iklim, skenario, kenaikan muka laut, pemutaran, lantai, periode
from: ff0d34d1
---

Bagian {{ui:Pemutaran bahaya}} pada panel kiri memutar satu bahaya pada model IFC yang terbuka. Tidak ada yang diubah pada model.

:::warning
Ini adalah **model sederhana untuk melihat apa yang dilakukan bahaya terhadap tata letak ini**, bukan studi banjir, pemeriksaan kode angin, atau desain struktur. Setiap hasil mencantumkan asumsinya.
:::

## Banjir

Atur level air tertinggi di atas lantai terendah serta menit untuk naik, bertahan, dan surut. Air masuk ke sebuah ruangan melalui bukaan yang ambangnya sudah terlewati, dan ruangan yang terhubung ke ruangan basah melalui bukaan di bawah permukaan air berada pada level yang sama (kuasi-statis). Tabel memberikan waktu setiap ruangan pertama kali basah dan kedalamannya; denah memutarnya. Ketik kedalaman air terbesar yang boleh dialami sebuah ruangan, dan ruangan yang melebihinya ditandai sebagai peringatan. **Skenario iklim:** muat file skenario Anda sendiri (JSON atau CSV dengan tahun, kenaikan muka laut, dan faktor banjir) lalu pilih tahun. Atau aktifkan add-on Skenario iklim dan pilih skenario serta tahun: banjir dijalankan dua kali, kondisi sekarang berdampingan dengan kondisi masa depan (lihat "Skenario iklim: banjir, panas, dan kebakaran hutan 2050 dan 2080"). Jenis Paparan kebakaran hutan dan Panas: file cuaca masa depan juga ada di daftar yang sama.

## Angin

Tekanan mengikuti ½ρV² dengan kecepatan yang meningkat seiring ketinggian; gaya pada sebuah lantai adalah tekanan itu dikali faktor hembusan, dua koefisien tekanan, lebar, dan tinggi lantai. Anda mendapatkan geser, momen guling, dan goyangan.

## Gempa

Bangunan geser: massa per lantai (luas denah × kilogram per meter persegi, yang Anda atur), kekakuan yang sama di setiap lantai yang disesuaikan dengan periode pertama yang Anda berikan (sepersepuluh detik per lantai jika dikosongkan, dan itu disebutkan), redaman, serta gerakan tanah buatan (pulsa atau derau tersaring) pada percepatan puncak yang Anda pilih. Hasilnya adalah drift setiap lantai, percepatan lantai, dan gaya geser dasar; tampak memutar goyangan, digambar lebih besar dari aslinya. Ketik rasio drift yang Anda izinkan dan lantai yang melebihinya menjadi peringatan. Ini elastis: tidak ada yang leleh atau retak.

## Kekakuan lantai dari Bingkai Analisis

Untuk gempa atau goyangan angin, pilih **Bingkai Analisis** sebagai sumber kekakuan alih-alih mengetik periode. Setiap lantai didorong ke samping secara bergantian, bingkai (balok, kolom, bresing, pelat) diselesaikan, dan kekakuan lantai dengan semuanya bekerja bersama menggerakkan jalannya perhitungan. Beratnya adalah berat batang itu sendiri ditambah beban lantai per meter persegi yang Anda atur pada kotak denah setiap lantai. Periode pertama yang sebenarnya ditampilkan. Ini elastis: tidak ada yang leleh, dan torsi tidak dimodelkan. Untuk angin, gaya lantai tetap merupakan gaya asumsi di atas (profil pangkat, faktor hembusan Anda, dan koefisien tekanan tetap, bukan kode angin); hanya goyangan yang berasal dari bingkai, dengan menyelesaikan matriks kekakuan penuh bingkai terhadap gaya tersebut. Model memerlukan IFC dengan bingkai yang dapat dibaca tab Analisis.

## Satuan

Kedalaman air, goyangan dan drift per lantai, jarak, serta luas ditampilkan dalam {{ui:Satuan}} yang Anda pilih. Gaya (kN), waktu, dan percepatan mempertahankan satuannya sendiri, dan nilai yang Anda ketik pada kotak berlabel dalam meter tetap dalam meter. Hal yang sama berlaku untuk hasil evakuasi, cahaya siang, pemanasan dan pendinginan, serta perabotan: panjang, luas, dan volume mengikuti pilihan Anda; tekanan, aliran, suhu, energi, dan daya tidak pernah dikonversi.
