---
title: Ruang, lantai, plafon, dan atap
summary: Ruang muncul ketika dinding menutupnya; beri ruang atau seluruh bangunan sebuah lantai dan plafon, dan pasang atap perisai atau pelana di atas dinding. Semuanya ikut berpindah ketika dinding berpindah.
keywords: ruang, area, keliling, lantai, pelat, sublantai, plafon, atap, atap perisai, atap pelana, kemiringan, tritisan, rabung, lembah, 6/12
from: 1fb1813c
---

## Yang akan Anda lakukan

Selesaikan cangkang bangunan. Ruang muncul dengan sendirinya dari dinding; lantai, plafon, dan atap masing-masing cukup satu klik. Karena ditemukan dari dinding, semuanya ikut berubah ketika dinding berpindah.

## Ruang

Setiap area yang tertutup oleh dinding yang digambar adalah ruang. Ruang muncul begitu dinding terakhir menutupnya, dengan nomor (101, 102 … di lantai pertama, 201 … di lantai berikutnya) dan nama (**Ruang 1**, **Ruang 2** …), dan luasnya tampil di tengahnya pada denah.

- Dengan {{ui:Pilih}} aktif, klik di dalam ruang untuk memilihnya. Di **Properti** ubah **Nama** (misalnya `Dapur`) dan **Nomor**; luas dan kelilingnya ditampilkan.
- Hapus dinding di antara dua ruang dan keduanya menjadi satu; gambar dinding melintasi sebuah ruang dan ia menjadi dua. Ruang menyimpan nama dan nomornya selama dinding di sekelilingnya berpindah.
- Ruang tidak dapat dihapus sendiri: ia adalah area yang dibentuk dinding.

Luas diukur di dalam muka dinding. Ruang disimpan sebagai ruang IFC dengan luas lantai, keliling, tinggi, dan volumenya, sehingga jadwal dapat membacanya (lihat [Jumlahkan kuantitas, daftar elemen, dan jadwalkan ruang](topic:quantity-totals)).

## Lantai

1. Klik {{ui:Lantai}}.
2. Pilih **Ruang ini** atau **Seluruh bangunan**, **Jenis** (lantai kayu atau pelat beton), dan ketebalannya.
3. Arahkan ke dalam sebuah ruang (atau di mana saja di dalam bangunan). Area yang akan ditutup lantai disorot beserta luasnya.
4. Klik. Bagian atas lantai berada pada level lantai; lantai turun sejauh ketebalannya. Lantai seluruh bangunan mencapai muka luar dinding.

## Plafon

1. Klik {{ui:Plafon}}.
2. Pilih **Ruang ini** atau **Seluruh bangunan**, dan **Tinggi** di atas lantai.
3. Arahkan ke dalam dan klik.
4. Untuk melihatnya dari bawah, dengan kisi dan lampu di atasnya, ubah denah menjadi denah plafonnya: lihat [Tampilan, rentang tampilan, dan lembar Anda sendiri](topic:views-and-sheets).

## Atap

1. Di lantai tempat dinding pemikul atap berada, klik {{ui:Atap}}.
2. Ketik **Kemiringan** sebagai kenaikan per 12 (`6/12`) atau dalam derajat (`30`), dan **Tritisan**.
3. Pilih **Ujung**: **Atap perisai** (setiap sisi miring), **Pelana di sisi pendek** atau **Pelana di sisi panjang** (bangunan dengan empat sisi), atau **Atap miring**.
4. Arahkan ke dalam bangunan: tritisan dan rabung tampil di denah. Klik.

Atap berada di atas dinding, di lantai di atas dinding itu, dan bagian bawahnya bertemu dengan muka luar dinding. Ujung pelana diisi dengan dinding pelana yang setebal dinding di bawahnya. Bangunan berbentuk L, T, atau U mendapat atap perisai yang sayap-sayapnya bertemu di lembah.

## Ubah

Pilih lantai, plafon, atau atap (di tampilan 3D, pohon model, atau atap dengan mengklik di dalam garis batasnya pada lantai di atas) dan ubah di **Properti**: jenis, ketebalan, dan seberapa jauh bagian atasnya di atas lantai untuk lantai; tinggi, ketebalan, dan **Pola** (kisi yang digambar denah plafon di atasnya: tidak ada, 600 × 600, 600 × 1200, 2' × 2', atau 2' × 4') untuk plafon; kemiringan, tritisan, ujung, dan ketebalan untuk atap. Setiap perubahan adalah satu langkah urungkan.

## Beri lantai, plafon, atau atap sebuah tipe dengan lapisan

Lantai, plafon, dan atap dapat memakai **tipe**, seperti dinding: susunan lapisan bernama, masing-masing dengan materialnya dan ketebalan sebenarnya.

- **Saat memasangnya.** Alat Lantai, Plafon, Atap, dan Gambar lantai memiliki daftar **Tipe** di barisnya. **Tanpa tipe** memasangnya seperti sebelumnya, dengan ketebalannya sendiri. Sebuah tipe memasangnya setebal jumlah lapisan tipe itu.
- **Nanti.** Pilih lantai, plafon, atau atap dan pilih **Tipe** di Properti. Elemen tetap elemen yang sama: tempat, ruang, dan datanya dipertahankan dan tidak ada yang digambar ulang. Hanya tipe, ketebalan, dan materialnya yang berubah. Begitulah elemen tahap sketsa menjadi elemen yang dikembangkan: ganti tipe generiknya dengan tipe sungguhan.
- **Edit tipe…** membuka editor tipe pada tipe itu: lapisan dari **atas** ke bawah, inti, fungsi setiap lapisan, dan tag LOD tipe. Menyimpan mengubah setiap elemen dari tipe itu dalam satu langkah, dan satu Urungkan membatalkannya. Mengubah tipe awal menyimpan salinan sebagai tipe Anda sendiri.
- Selama sebuah elemen memiliki tipe, **Ketebalan**-nya mengikuti tipe itu dan tidak dapat diketik. Pilih tipe lain, atau **Tanpa tipe**, untuk mengubahnya.

Tipe awal adalah satu tipe **generik** untuk masing-masing (satu lapisan material generik, ditandai LOD 200) dan dua tipe berlapis (ditandai LOD 300): lantai balok kayu dan lantai beton dengan acian; atap kayu dan atap datar beton; serta plafon papan gipsum dan plafon ubin gantung. Ini nilai awal, bukan konstruksi yang sudah diuji: periksa lapisannya sebelum Anda mengandalkannya.

Jadwal **Lapisan: luas dan volume** mencantumkan setiap lapisan dari setiap tipe yang dipakai; lihat [Jadwal, dimensi, dan PDF](topic:plan-schedules-and-pdf). Tipe lantai, atap, dan plafon berpindah antarproyek dalam sebuah paket tipe atau sebagai item pustaka; lihat [Paket tipe](topic:type-packs).

## Hal yang perlu diketahui

- Memindahkan, menambah, atau menghapus dinding membuat ulang ruang, lantai, plafon, dan atap di atasnya.
- Atap cocok untuk garis batas apa pun. Untuk memberi setiap dinding kemiringan, ujung pelana atau miring sendiri, plat yang ditinggikan, lisplang, dan langit-langit tritisan, atau untuk menggambar satu bidang atap tunggal, lihat [Atap: kemiringan untuk setiap dinding, pelana, atap miring, dan bidang atap](topic:roofs).
- {{key:Delete}} menghapus lantai, plafon, atau atap yang dipilih.
