---
title: Tahap proyek, dari brief hingga instruksi lapangan
summary: Mulai dari brief dengan area target dan lihat terpenuhi atau kurang saat Anda menggambar, bandingkan opsi konsep terhadap brief, tautkan spesifikasi dan detail ke tipe, tinjau gambar kerja, dan catat instruksi lapangan terhadap elemen.
keywords: brief, jadwal akomodasi, area target, terpenuhi, kurang, ruang, opsi konsep, opsi, massing, anggaran, spesifikasi, spes, detail, detail konstruksi, tipe, gambar kerja, tinjau, setujui, kirim ulang, instruksi lapangan, revisi, penyebab, lapangan, tahap
from: 0a49b852
---

## Yang akan Anda lakukan

Kerjakan tahap-tahap proyek dalam satu panel: tulis brief klien sebagai ruang dengan area target, bandingkan opsi konsep terhadap brief, simpan spesifikasi dan detail konstruksi bersama tipe yang menjadi miliknya, tinjau gambar kerja saat dikembalikan dari tiap pekerjaan, dan catat instruksi lapangan terhadap elemen yang diubah.

## Langkah

1. Di panel kiri, buka **Tahap proyek**, lalu **Brief**.
2. Tempel ruang-ruangnya, satu per baris: `Ruang tamu; 1; 30` berarti satu ruang seluas 30 m². Jumlah boleh dihilangkan. Pilih **Tambahkan ruang**. Isi klien, lokasi, anggaran, toleransi, dan jadwal, lalu **Simpan brief**.
3. Gambar dinding. Setiap ruang yang dibentuk dinding dan memiliki nama sama dengan ruang di brief dihitung (angka setelah nama, seperti "Kamar tidur 2", diabaikan). **Jadwal akomodasi** menampilkan **Terpenuhi**, **Kurang**, **Lebih**, atau **Belum digambar**, dengan selisihnya dalam m².
4. Untuk memulai proyek baru dengan cara ini, pilih **Mulai proyek baru dari brief**. Perintah ini membuka model baru, dari salah satu templat tersimpan jika Anda memilihnya, dan memasukkan brief sebagai langkah pertamanya.
5. Buka **Opsi terhadap brief**. Setiap opsi massing yang tersimpan di model ditampilkan dalam skala yang sama dengan luas kotornya, kebutuhan brief, dan berapa banyak ruang brief yang muat. **Susun brief di sini** memasukkan ruang ke lantai-lantai opsi, dari yang paling bawah, dan menjelaskan apa yang tidak muat. Biaya hanya berasal dari tabel harga proyek; jika tidak ada baris yang cocok, tertulis "Tidak ada tarif".
6. Buka **Tipe, spesifikasi, dan detail**. Setiap tipe dinding, pintu, jendela, dan lantai menampilkan apakah sudah memiliki teks spesifikasi, detail yang ditautkan kepadanya, dan tempat spesifikasi, jadwal, serta lembar tidak sesuai satu sama lain. **Tautkan detail** menambahkan berkas DetailCraft atau CadCraft, alamat, atau lembar dari model ini.
7. Buka **Gambar kerja**. Pilih elemen yang dicakup gambar kerja di model, lalu **Terima**. Gunakan **Setujui**, **Sesuai catatan**, atau **Revisi** dengan nama dan catatan peninjau. **Dikirim ulang** membuat revisi berikutnya dari catatan yang sama dan menyimpan riwayat tinjauan. Statusnya juga ditulis pada setiap elemen.
8. Buka **Instruksi lapangan**. Pilih elemen, isi penyebab serta dampaknya terhadap biaya dan waktu dengan kata-kata Anda sendiri, lalu **Catat**. Setelah isu dicatat, **Jelaskan perubahan sejak isu ini** menampilkan elemen yang berubah mana saja yang tercakup instruksi, dan mana yang berubah tanpa ada yang dicatat.

## Perlu diketahui

- Setiap langkah dapat diurungkan dengan **Urungkan**. Tidak ada yang ditolak: brief yang belum terpenuhi, tipe yang tidak sesuai dengan teksnya, atau gambar kerja yang melewati tenggat hanya menjadi peringatan atau catatan di **Masalah**.
- Ruang brief adalah ruang tanpa dinding. Ruang ini membawa target, bukan luas yang digambar, sehingga jadwal ruang dan COBie tidak menghitungnya sebagai ruang yang sudah digambar.
- Tata letak hanya menyusun ruang ke dalam lantai berdasarkan luas. Tata letak tidak menggambar dinding.
- Teks spesifikasi ditulis di **Dokumen** dari model. Di sini teks hanya dibandingkan dengan ukuran milik model itu sendiri: tidak ada klausul standar yang ditulis untuk Anda.
- Gambar kerja dan instruksi lapangan adalah catatan dalam riwayat yang sama dengan panel **Isu dan revisi**, sehingga kedua panel menampilkannya.
- Status gambar kerja adalah properti setiap elemen (`CadCraft_ShopDrawing`), dan instruksi lapangan adalah `CadCraft_SiteInstruction`, sehingga **Temukan** dan **Warnai menurut properti** dapat menggunakannya.
- Tanda verifikasi lapangan (Tahap 7) ada di **Properti** pada bagian **Verifikasi**.
