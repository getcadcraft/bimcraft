---
title: Salin, tempel dan duplikat item pustaka
summary: Salin item pustaka yang sudah ditempatkan dan tempel di tempat yang Anda klik, tepat di sebelah aslinya, atau ke model lain; salin properti elemen lain sebagai teks; urungkan dan ulangi.
keywords: salin, tempel, duplikat, papan klip, tempel di tempat yang sama, potong, hapus, pilih semua, urungkan, ulangi, menu edit, lainnya, item pustaka, penempatan, ulang, array
from: 6ac15931
---

## Yang akan Anda lakukan

Membuat salinan tambahan dari item yang sudah Anda tempatkan: meja kerja kedua, atau deretan wastafel. Topik ini membahas **item pustaka yang sudah ditempatkan**, yaitu elemen yang ditulis BimCraft ke dalam model. Salah satu dari item ini bisa ditempel ke model mana pun, bahkan di tab lain. Dinding, pintu, dan elemen lainnya disalin, dipotong, ditempel, dan dihapus dengan cara yang sama di dalam model masing-masing: lihat [Hapus, potong, salin dan tempel elemen bangunan](topic:edit-elements).

Perintahnya ada di bilah alat di atas model: {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}} dan {{ui:Lainnya}}. Menu {{ui:Lainnya}} berisi {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}} dan {{ui:Batalkan pilihan}}. Perintah yang tidak bisa dijalankan saat ini akan berwarna abu-abu. Arahkan kursor ke perintah itu untuk membaca alasannya, atau klik perintahnya dan baris status akan menjelaskan alasannya.

## Langkah

1. Buka model IFC yang berisi item pustaka, atau tempatkan satu item terlebih dahulu. Lihat [Tempatkan peralatan dan perabot dari pustaka](topic:place-from-library).
2. Klik item di tampilan 3D. Propertinya menampilkan kotak **Item pustaka**.
3. Klik {{ui:Salin}} atau tekan {{key:Mod+C}}.
4. Klik {{ui:Tempel}} atau tekan {{key:Mod+V}}. Bilah penempatan terbuka dan sebuah kotak transparan mengikuti penunjuk, diputar seperti aslinya.
5. Tekan {{key:R}} untuk memutarnya 90°, {{key:Tab}} untuk menempelkan bagian belakangnya ke dinding, atau ketik X dan Y di bilah penempatan.
6. Klik tempat salinan akan diletakkan. Setiap klik menempatkan satu salinan lagi; tekan {{key:Esc}} untuk berhenti.
7. Klik {{ui:Simpan sebagai IFC}} untuk mengunduh salinan model yang sudah diedit.

## Tempel di tempat yang sama

{{ui:Lainnya}}, {{ui:Tempel di tempat yang sama}} atau {{key:Mod+Shift+V}} menempel tanpa perlu mengklik, pada X dan Y yang sama serta diputar dengan cara yang sama:

- **Ke model yang sama, di lantai yang sama**: dua item di satu titik yang persis sama tidak berguna, sehingga salinan diletakkan tepat di sebelah aslinya, sejauh lebar item ditambah 100 mm sepanjang lebar item itu sendiri. Tempel di tempat yang sama lagi dari salinan baru untuk membuat deretan.
- **Ke lantai lain atau ke model lain**: X, Y, dan putaran yang sama persis. BimCraft memakai lantai dengan nama yang sama. Jika tidak ada, dipakai lantai dengan ketinggian terdekat. Baris status menyebutkan lantai yang dipakai.

## Duplikat

{{ui:Lainnya}}, {{ui:Duplikat}} atau {{key:Mod+D}} menyalin item yang dipilih dan langsung memulai penempelannya: satu langkah, bukan dua.

## Ke model lain atau tab lain

Yang Anda salin disimpan di peramban ini, sehingga Anda dapat membuka model IFC lain, atau BimCraft di tab lain, lalu menempelkannya di sana. Model tujuan membutuhkan item pustaka itu sendiri. BimCraft memilikinya jika item tersebut ditempatkan, diganti, atau diperbarui di tab ini. Item yang ditempatkan pada sesi sebelumnya hanya bisa ditempel lagi di model asalnya. Di model lain, tempatkan item dari tab {{ui:Pustaka}}.

## Yang seharusnya Anda lihat

- Salinan di model, dalam keadaan dipilih, dengan item pustaka, lisensi, data peralatan, kuantitas, dan catatan yang sama dengan aslinya, serta **nomor item bebas berikutnya**. Ubah nomornya di Properti, di bawah `CadCraft_Placement`.
- "Ditempatkan: *item* (item *n*)" dalam daftar perubahan. {{key:Mod+Z}} membatalkannya; {{key:Mod+Y}} mengembalikannya lagi.

## Yang perlu diketahui

- Salinan memakai tipe yang sama dengan aslinya, sehingga semuanya menggunakan satu set geometri, sama seperti jika Anda menempatkan item yang sama dua kali.
- {{ui:Urungkan}} dan {{ui:Ulangi}} mencakup setiap perubahan: nilai yang Anda edit, penempatan, penempelan, penggantian, dan pembaruan. Ulangi mengembalikan penempatan di tempat yang sama. Perubahan baru menghapus apa yang tadinya bisa diulangi.
- Di tampilan 2D sebuah gambar tidak ada yang bisa dipilih, jadi tidak ada yang bisa disalin. Gunakan {{ui:Sunting di CadCraft}} untuk mengubah gambar, jika tombolnya muncul.

## Kesalahan umum

- **{{ui:Tempel}} mengatakan elemen berasal dari model lain.** Salinan terakhir Anda adalah elemen bangunan, atau beberapa elemen. Elemen seperti itu hanya bisa ditempel ke model asalnya. Pilih satu item pustaka yang sudah ditempatkan dan salin.
- **{{ui:Tempel}} mengatakan salinan berasal dari model lain tanpa item pustakanya.** Tempatkan item dari tab {{ui:Pustaka}} sekali di tab ini, lalu salin dan tempel.
- **{{key:Mod+C}} menyalin teks halaman.** Teks dipilih di halaman. Klik model terlebih dahulu.

## Terkait

- [Tombol dan mouse](topic:keyboard#edit)
- [Pengaturan BimCraft](topic:settings)
