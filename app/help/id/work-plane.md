---
title: Bidang kerja: atur, tampilkan, lihat langsung ke arahnya
summary: Bidang kerja adalah bidang yang digunakan oleh garis model, teks model, dan Penampil Bidang Kerja. Atur ke level, muka, bidang referensi bernama, atau garis; tampilkan di tampilan; buka penampil untuk menggambar pada bidang tegak.
keywords: bidang kerja, atur bidang kerja, tampilkan bidang kerja, bidang referensi, penampil bidang kerja, bidang bernama, muka, level, bidang tegak, bidang vertikal, menggambar di dinding, gambar elevasi, snap, perataan, bidang ref
from: 8aceee1d
---

## Yang akan Anda lakukan

Pilih bidang tempat Anda menggambar, lihat posisinya, dan gambar pada bidang yang berdiri tegak.

## Langkah

1. Aktifkan **Gambar** dan buka menu **Bangun** (dalam tata letak pita: tab Arsitektur, Bidang Kerja).
2. Pilih **Atur Bidang Kerja**. Lalu lakukan salah satu hal berikut:
   - pilih level di **Atur ke**;
   - pilih bidang referensi bernama dalam daftar di sebelahnya;
   - klik garis di denah: dinding, garis grid, bidang referensi, garis model, atau sistem tirai. Bidang kerja menjadi bidang tegak melalui garis itu;
   - klik muka datar di tampilan 3D. Bidang kerja berada pada muka itu.
3. Pilih **Tampilkan Bidang Kerja** untuk melihatnya: lembar berwarna dengan grid meter di tampilan 3D, garis tepi putus-putus di denah, dan garis tepi putus-putus di panel elevasi dan potongan. Pilih lagi untuk menyembunyikannya.
4. Pilih **Penampil Bidang Kerja** untuk melihat langsung ke bidang. Garis hitam adalah model yang dipotong oleh bidang. Gunakan alatnya untuk menggambar garis model, teks model, atau bidang referensi pada bidang. **Lihat dalam 3D** memutar tampilan 3D menghadap bidang.

## Bidang referensi

Bidang referensi adalah bidang bernama yang Anda gambar sebagai garis.

1. Pilih **Bidang Referensi**. Ketik nama di barisnya jika Anda menginginkannya (jika tidak, namanya dibuatkan untuk Anda) dan tinggi.
2. Klik tempat ia mulai dan tempat ia berakhir. Di denah, ini membuat bidang tegak. Di Penampil Bidang Kerja, ini membuat bidang yang berdiri tegak lurus terhadap bidang kerja.
3. Bidang ini tampil sebagai garis hijau putus-putus dengan namanya di denah, garis tepi putus-putus di tampilan 3D, dan di panel elevasi dan potongan.
4. Pilih untuk mengganti namanya, mengubah panjang, tinggi, dan titik dasarnya, atau tekan **Gunakan sebagai bidang kerja**.

Dua bidang referensi tidak boleh memiliki nama yang sama, karena nama itulah cara Anda memilih salah satunya.

## Perlu diketahui

- Model tanpa bidang kerja yang diatur bekerja pada level terendahnya.
- Bidang kerja disimpan dalam file. Menampilkan atau menyembunyikannya diingat di peramban ini, bukan di file.
- Jika bidang kerja mengikuti bidang referensi dan Anda memindahkan bidang itu, bidang kerja ikut berpindah.
- Pada bidang kerja yang tegak, alat Garis Model dan Teks Model membuka penampil, karena denah tidak dapat menunjuk ke ketinggian.
- Alat menggambar menangkap ujung bidang referensi yang digambar di denah dengan cara yang sama seperti mereka menangkap ujung garis lain di penampil.

## Di file IFC

- Bidang kerja adalah set properti (CadCraft_WorkPlane) pada proyek.
- Bidang referensi adalah IfcAnnotation dengan tipe objek ReferencePlane dan namanya. Bentuknya adalah garis tepi tertutup dari bidang, sehingga program lain menunjukkan posisinya. Set CadCraft_ReferencePlane-nya menyimpan titik asal, arah, normal, dan jangkauannya. IFC tidak memiliki kelas untuk bidang referensi; anotasi tidak dihitung sebagai elemen bangunan dan tidak membatasi ruangan.
