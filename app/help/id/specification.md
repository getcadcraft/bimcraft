---
title: Menulis spesifikasi dari model
summary: Satu bagian spesifikasi untuk setiap tipe dinding, pintu, jendela, lantai, dan finishing yang digunakan, dengan faktanya dibaca dari model dan teks Anda sendiri, dibuat menjadi dokumen PDF atau Word.
keywords: spesifikasi, spec, gambar kerja, tahap 5, dokumen konstruksi, bagian, tipe dinding, tipe pintu, tipe jendela, finishing, klasifikasi, uniclass, omniclass, masterformat, dokumen, pdf, word, docx, jadwal
from: a6acc6d4
---

## Yang akan Anda lakukan

Dapatkan spesifikasi yang mengikuti model: satu bagian untuk setiap tipe yang benar-benar ada di bangunan, masing-masing dengan susunan lapisan dan kuantitasnya dibaca dari model, serta teks yang Anda tulis untuknya.

## Langkah

1. Aktifkan {{ui:Gambar}}, buka **Jadwal** di panel kiri, dan klik **Spesifikasi**.
2. Dialog mencantumkan satu bagian untuk setiap tipe dinding, tipe pintu, tipe jendela, lantai, dan finishing ruang yang digunakan. Di bawah setiap judul terdapat **fakta**-nya, dibaca dari model: tebal, lapisan satu per satu, tingkat pengembangan, ukuran, berapa banyak dan berapa volumenya. Bagian yang elemennya memiliki kode klasifikasi menampilkan kode tersebut di judulnya.
3. Tulis teks spesifikasi Anda di kotak di bawah sebuah bagian. **Pilih elemennya** menampilkan elemen apa saja yang dibahas bagian tersebut.
4. Klik **Simpan**. Ini adalah satu langkah di Urungkan, dan teksnya disimpan dalam file bangunan.
5. Buka **Dokumen dari model**, pilih templat **Spesifikasi**, klik **Pratinjau**, lalu simpan sebagai PDF, Word, atau Markdown. Lihat [Dokumen dari model](topic:documents-from-the-model).

## Jadwal gambar kerja sebagai dokumen

Templat **Jadwal gambar kerja** mencetak jadwal pintu, jendela, dan finishing langsung dari model, dalam tata letak kantor Anda. Di templat Anda sendiri, tulis `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, atau nama pengaturan yang tersimpan, misalnya `{{schedule Door schedule by floor}}`. `{{specification}}` mencetak spesifikasi.

## Perlu diketahui

- Faktanya berasal dari model. Faktanya berubah ketika model berubah; teks Anda tidak.
- BimCraft tidak menulis klausul standar apa pun dan tidak menulis teks pabrikan. Bagian tanpa teks dicetak sebagai "Teks spesifikasi belum ditulis."
- Teks yang ditulis untuk tipe yang tidak lagi ada di model tetap disimpan dan dicantumkan di bawah "Teks untuk tipe yang tidak lagi ada di model".
- Untuk mengubah tipe generik menjadi susunan lapisan yang spesifik, lihat [Alat dinding](topic:wall-tools) (Tukar tipe).
