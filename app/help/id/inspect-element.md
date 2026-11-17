---
title: Pilih elemen dan baca propertinya
summary: Klik elemen apa pun dalam model 3D untuk menyorotnya dan membaca namanya, tipenya, tag, GlobalId, set properti, dan kuantitasnya.
keywords: properti, pilih, seleksi, klik, elemen, parameter, set properti, pset, kuantitas, globalid, guid, tipe, periksa
from: 43b80aa8
---

## Yang akan Anda lakukan

Pilih elemen dalam model IFC dan baca semua yang dicatat file tentangnya: atribut, set properti, properti tipe, dan kuantitas.

## Langkah

1. Buka model IFC.
2. Klik elemen, misalnya pintu. Klik tanpa menyeret: seretan lebih dari beberapa piksel akan mengorbit alih-alih memilih.
3. Lihat elemennya: elemen itu akan disorot dengan warna biru.
4. Lihat panel {{ui:Properti}} di sebelah kanan. Di bagian atas ada jenis elemen (seperti "Door" atau "WallStandardCase") dan namanya.
5. Baca blok pertama: **Nama**, **Tipe**, **Tipe objek**, **Tag**, **Deskripsi**, **GlobalId**, dan **Baris**.
6. Gulir ke bawah ke set properti. Tiga yang pertama terbuka; klik nama set lain untuk membukanya.
7. Klik elemen lain untuk berpindah ke elemen itu.
8. Tekan {{key:Esc}}, atau klik latar kosong, untuk menghapus pilihan.

## Yang harus Anda lihat

- Elemen yang disorot dan datanya di sebelah kanan.
- Set properti diurutkan secara alfabetis. Set yang berasal dari **tipe** elemen memiliki " (tipe)" setelah namanya dan catatan "Properti tipe: perubahan di sini berlaku untuk setiap elemen dengan tipe ini."
- Set kuantitas (seperti panjang, luas, dan volume) didaftarkan bersama set lainnya. Kuantitas hanya dapat dibaca.
- Nilai yang dapat Anda ubah tampak seperti tombol. [Ubah properti IFC dan simpan salinan yang disunting](topic:edit-ifc-properties) menunjukkan caranya.

[Kolom panel Properti](topic:properties-panel) menjelaskan setiap kolom.

## Mengakses elemen tersembunyi

1. Untuk mencapai sesuatu di dalam bangunan, hapus centang lantai di atasnya pada daftar {{ui:Lantai}}.
2. Untuk mencapai dinding di balik volume ruangan, matikan {{ui:Ruang}}.
3. Klik elemennya.

## Kesalahan umum

- **Menyeret sedikit saat mengklik.** BimCraft memperlakukannya sebagai orbit dan tidak memilih. Tahan mouse tetap diam.
- **Mengharapkan satuan di samping angka.** Nilai ditampilkan seperti yang disimpan dalam file, dibulatkan hingga empat desimal, tanpa simbol satuan. Panjang dalam ekspor metrik biasanya milimeter atau meter; periksa pengaturan pengekspor.
- **Mencari parameter dengan nama yang Anda kenal.** Pengekspor mengganti nama dan mengelompokkan ulang parameter ke dalam set properti IFC seperti `Pset_WallCommon`. Telusuri setiap set; parameter kustom sering berada dalam set yang dinamai menurut program pengekspor atau perusahaan Anda.
- **Mengharapkan kotak pencarian.** Klik untuk memilih elemen; {{key:Mod}}+klik atau {{key:Shift}}+klik memilih lebih banyak, dan {{key:Mod+A}} memilih setiap elemen yang ditampilkan. Daftar {{ui:Elemen}} di sebelah kiri hanya menghitung elemen menurut jenisnya; daftar itu tidak dapat diklik.
- **Memilih pada kartu file proyek.** Kartu file tidak memiliki elemen untuk dipilih: "Properti elemen membutuhkan model 3D. Buka ekspor IFC dari file ini untuk melihatnya."
