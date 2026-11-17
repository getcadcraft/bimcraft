---
title: Kirim elemen ke PartCraft dan bawa kembali
summary: Pilih penyangga, bracket, railing, atau peralatan, rancang sebagai part di PartCraft dengan bangunan di sekitarnya, lalu terima bentuk baru kembali ke dalam model.
keywords: partcraft, part, kirim, tautan, elemen, penyangga, bracket, pagar, railing, peralatan, rancang, pulang-pergi, terima, berubah, tautan part
from: 4ce2f449
---

## Yang akan Anda lakukan

Rancang satu elemen bangunan sebagai part: kirim ke PartCraft, ubah di sana (potong, tambah, bor, ubah ukuran), lalu bawa bentuk baru kembali ke dalam model.

## Langkah-langkah

1. Pilih satu elemen dalam model: elemen generik, peralatan, kolom, balok, railing, atau furnitur.
2. Pilih {{ui:Tautan part}} di bilah alat, lalu {{ui:Kirim ke PartCraft}}. PartCraft terbuka di tab baru dengan elemen sebagai part. Elemen dalam jarak 3 m digambar abu-abu di sebelahnya agar Anda dapat merancangnya di tempat. Elemen tersebut tidak dapat diubah di sana.
3. Ubah part di PartCraft. Di PartCraft pilih {{ui:File}} › {{ui:Ekspor}} › {{ui:Simpan kembali ke BimCraft}}. Anda dapat menyimpan kembali sesering yang Anda mau.
4. Kembali di BimCraft, tombol {{ui:Tautan part}} menampilkan jumlah, dan kartu mencantumkan elemen sebagai {{ui:Berubah di PartCraft}} dengan perubahan ukuran dan volume dalam kata-kata.
5. Pilih {{ui:Tampilkan}} untuk melihatnya, lalu {{ui:Terima}} untuk memberi elemen bentuk baru, atau {{ui:Pertahankan milik saya}} untuk membiarkannya seperti semula.

## Yang akan Anda lihat

- Menerima adalah satu langkah urungkan. Elemen tetap di tempatnya, dengan GlobalId, tipe, material, dan properti yang sama. Hanya badannya yang diganti.
- Elemen mendapat set properti {{ui:CadCraft_PartLink}} dengan tautan, statusnya, dan revisinya.
- {{ui:Kirim lagi}} membuka elemen yang sama di PartCraft sekali lagi, pada tautan yang sama.

## Perlu diketahui

- Dinding, lantai, atap, pintu, jendela, tangga, ramp, dan ruang digambar oleh alat bangunan dari sebuah garis tepi dan dibangun ulang setiap kali ada perubahan. Badan dari aplikasi lain akan tertimpa, sehingga hal ini ditolak dengan alasannya.
- Bentuk kembali sebagai mesh (tesselasi IFC), bukan sebagai fitur part. Riwayat part tetap berada di PartCraft.
- Jika elemen berubah dalam model setelah Anda kirim, kartu akan memberi tahu sebelum Anda menerima: menerima akan mengganti perubahan tersebut.
- Tidak ada yang diunggah. Kedua aplikasi adalah halaman dari satu situs dan saling meneruskan elemen di peramban ini. Keduanya harus terbuka di peramban yang sama.
- Elemen harus menutup menjadi solid di PartCraft. Elemen yang bentuknya memiliki celah terbuka besar ditolak di sana, beserta jumlah tepi terbukanya.
- Untuk menerima, jadikan model yang memuat elemen tersebut sebagai model aktif.
