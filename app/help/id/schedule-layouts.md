---
title: Atur tata letak, simpan, dan ekspor jadwal
summary: Kelompokkan jadwal, beri subtotal dan total, tambahkan kolom yang dibaca dari properti, simpan sebagai set-up di dalam file, dan ekspor sebagai buku kerja spreadsheet (.xlsx), sebagai teks untuk ditempel ke lembar daring, atau sebagai CSV. Standar kantor mengisi apa yang tidak dinyatakan jadwal.
keywords: tata letak jadwal, kelompokkan menurut, subtotal, total, judul kolom, standar kantor, kebijakan default, set-up, jadwal pintu per lantai, tahan api, ironmongery, xlsx, buku kerja, lembar daring, tempel, csv, ekspor, spreadsheet, elemen, pilih dari jadwal, angka
from: 95dfd801
---

## Yang akan Anda lakukan

Ubah jadwal biasa menjadi jadwal yang dikeluarkan kantor Anda: dikelompokkan menurut level, tipe, atau ruang, dengan subtotal dan total, dengan kolom yang Anda perlukan, di bawah nama sendiri. Lalu kirim ke spreadsheet. Setiap baris dan setiap angka tetap mengetahui elemen asalnya.

## Langkah

1. Aktifkan {{ui:Gambar}} dan buka **Jadwal** di panel kiri. Pilih sebuah jadwal, misalnya **Pintu**.
2. Di atas tabel, pilih **Kelompokkan menurut** (sebuah kolom jadwal, seperti Level atau Tipe, atau **Tanpa pengelompokan**) dan **Total** (**Tanpa total**, **Satu total**, atau **Subtotal dan total**). **Sesuai setelan** membiarkan pilihan ke set-up yang tersimpan atau ke standar kantor.
3. Untuk menambahkan kolom yang dibaca dari elemen, ketik nama properti atau tag di bawah tabel (misalnya `FireRating`, `Pset_DoorCommon.FireRating`, atau nama tag seperti `Ironmongery`) lalu klik **Tambahkan kolom**. BimCraft membaca set properti elemen lebih dulu, lalu set properti tipenya. Jika belum ada elemen yang bernilai, ia akan memberi tahu; kolom akan terisi sendiri setelah sebuah nilai diatur.
4. Ketik nama (misalnya "Jadwal pintu per lantai") dan klik **Simpan sebagai set-up**. Set-up disimpan di file bangunan dan bergabung ke daftar Jadwal dengan namanya. Ia mengikuti setiap perubahan model. **Hapus set-up ini** menghapusnya kembali. Keduanya adalah satu langkah di Urungkan.

## Klik angka untuk memilih elemen asalnya

Klik baris mana pun, atau angka tunggal mana pun, untuk memilih elemen di baliknya di denah dan di 3D:

- sebuah baris memilih elemen baris itu;
- sebuah subtotal atau total memilih semua yang dijumlahkannya, dan judul kelompok memilih kelompoknya;
- angka yang punya elemen sendiri memilih elemen itu: **Pengurangan** pada tipe dinding memilih pintu dan jendelanya, luas dinding sebuah ruang memilih dindingnya.

Hal yang sama berlaku pada dokumen yang dibuat dari model: di pratinjau, klik angka sebuah jadwal.

## Ekspor

- **Download Excel** menyimpan buku kerja .xlsx. Panjang, luas, volume, dan jumlah berupa angka asli dalam satuan yang ditampilkan kolom (kaki dan inci tetap berupa teks). Lembar kedua, **Elemen**, mencantumkan untuk setiap baris GlobalId elemen di baliknya.
- **Copy for Google Sheets** menyalin jadwal ke papan klip sebagai teks yang dipisahkan tab. Di Google Sheet, klik sel A1 lalu tempel. **Open a new Google Sheet** membuka `sheets.new`, alamat Google sendiri untuk lembar kosong, di akun Google Anda sendiri. BimCraft tidak masuk ke Google dan tidak mengirim apa pun ke sana: penempelannya ada di tangan Anda.
- **Download CSV** menyimpan tabel seperti tata letaknya di layar.

## Standar kantor

Sebuah kantor dapat menyatakan sekali bagaimana jadwalnya disusun. Aktifkan add-on **Kebijakan Default** ([Kebijakan Default](topic:default-policies)) dan atur, di **Pengaturan › Global › Kebijakan Default › Tata letak jadwal (standar kantor)**:

| Kebijakan | Fungsinya |
|---|---|
| Kelompokkan jadwal menurut | Level, Tipe, Ruang, atau tanpa pengelompokan, untuk setiap jadwal yang punya kolom seperti itu |
| Total dalam jadwal | Tanpa total, satu total di akhir, atau subtotal di bawah setiap kelompok dan satu total |
| Judul jadwal | Pola, misalnya `{project}: {schedule}` |
| Judul kolom | Seperti ditulis, HURUF KAPITAL, atau Huruf Awal Kapital |

Standar berlaku untuk setiap jadwal, siapa pun yang mengaturnya: jadwal biasa di panel, set-up yang tersimpan, jadwal yang diatur asisten, ekspor, dan jadwal di dalam dokumen. Set-up yang menyatakan pengelompokan, total, atau judulnya sendiri tetap mempertahankannya; standar mengisi sisanya. Panel menyebutkan bagian mana yang diatur oleh standar kantor. Kebijakan ikut berpindah bersama file Kebijakan Default lainnya.

## Perlu diketahui

- Set-up menyebut jadwal sumber dan kolomnya; ia tidak menyimpan angka. Angka dibaca dari model setiap kali.
- Daftar yang bukan baris elemen (rakitan dinding dan legenda material) tidak punya tata letak dan ekspor di sini.
- Asisten dapat melakukan semua ini untuk Anda: lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
