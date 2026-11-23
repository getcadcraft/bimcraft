---
title: Rutekan saluran, drainase, pipa air, dan pipa refrigeran secara otomatis
summary: Dalam pemeriksaan benturan, BimCraft mencari jalan melewati model terbuka untuk saluran, drainase gravitasi, air dingin dan panas, serta pipa refrigeran split atau multi-split, lalu menggambar jalurnya beserta fitting-nya dalam satu langkah urungkan. Ini alat bantu gambar: ukuran, kemiringan, dan pemeriksaan berasal dari tabel di program serta angka yang Anda ketik; tidak ada yang di sini menyatakan desain memenuhi kode.
keywords: rute otomatis, autoroute, rutekan saluran, rutekan pipa, drainase, sanitasi, gravitasi, stack, ventilasi, trap, air, air panas, loop kembali, sirkulasi, refrigeran, split, multi-split, VRF, panjang ekuivalen, branch kit, wye
from: 5841d513
---

## Yang akan Anda lakukan

Biarkan BimCraft menata jaringan jalur di antara konektor yang sudah ada di model, mengelilingi dinding dan balok, lalu periksa dengan angka yang bisa Anda lihat.

## Langkah

1. Buka model dan pemeriksaan benturan. Di bawah **Rutekan saluran secara otomatis**, pilih air handler dan terminalnya, atau di bawah **Rutekan sistem lain secara otomatis**, pilih sistem.
2. **Drainase sanitasi dengan gravitasi.** Ketik posisi outlet dan, jika Anda punya, posisi stack. Centang **Rutekan setiap lantai sekaligus** untuk mengambil setiap lantai yang memiliki fixture: drainase setiap lantai bertemu stack di levelnya masing-masing, dan stack berjalan dari atas keran tertinggi hingga dasarnya. Tekan {{ui:Rutekan}}.
3. **Trap ke ventilasi.** Panel mencantumkan jarak dari setiap trap ke ventilasinya. Ketik jarak terjauh yang diizinkan kode Anda di **Jarak terjauh dari trap ke ventilasinya**; fixture yang melebihinya dicantumkan sebagai belum selesai, dengan kelebihan dalam milimeter. Centang **Ventilasi melalui stack** jika fixture tidak memiliki stub ventilasi sendiri: jaraknya kemudian diukur ke stack. BimCraft tidak menyertakan tabel kode untuk ini; Anda yang mengetik angkanya.
4. **Air dingin dan panas.** Pilih sumbernya, ketik tekanan di sumber dan tekanan yang Anda perlukan di fixture. Centang **Air panas**, pilih konektor panas pemanas, dan centang **Loop kembali** untuk mengakhiri saluran balik di konektor **hot-return** pemanas, atau di konektor lain yang Anda pilih (yang itu berakhir 150 mm sebelumnya, terbuka, untuk Anda sambungkan).
5. **Split, multi-split, dan VRF.** Pilih unit outdoor, centang unit indoor, dan ketik kapasitas masing-masing. Ketik batas dari data pabrikan Anda. Ketik **panjang ekuivalen** dari satu belokan dan dari satu branch kit (nilai pabrikan), maka panjang terpanjang dan total akan diperiksa berdasarkan panjang ekuivalen.
6. Tekan {{ui:Rutekan}}. Panel menyatakan berapa banyak jalur yang digambar, dan apa yang tidak dapat dilakukannya beserta alasannya. {{ui:Urungkan}} membatalkan semuanya dalam satu langkah.

## Yang akan Anda lihat

Pipa dengan siku, tee, dan reducer; drainase yang turun setidaknya sebesar kemiringan terkecil untuk ukurannya; stub ventilasi di fixture; serta jalur refrigeran sebagai pasangan cair dan gas yang berbelok searah di setiap tikungan, dengan branch kit ditandai di tempat cabang keluar dari batang utama.

## Perlu diketahui

- Jika satu drainase bertemu drainase lain, model menggambar tee. Denah menamai tempat itu sebagai sambungan wye 45 derajat agar Anda dapat mengubah fitting-nya.
- Air panas memakai konektor panas fixture itu sendiri saat familinya memilikinya, dan konektor 100 mm di samping konektor dingin saat tidak.
- Jalur refrigeran dimulai di antara dua port setiap unit. Saat dua port unit terlalu dekat untuk belokan, pasangan tetap berada di tengah di antara keduanya.
- Jaringan air memakai kurva permintaan dan angka gesekan yang ditampilkan di perhitungan; ganti dengan angka kode Anda sebelum mengandalkan tekanannya.
- Rumah besar dapat memerlukan setengah menit atau lebih, terutama untuk jaringan air panas.
- Ini adalah alat bantu gambar. Orang yang berkualifikasi memeriksa ukuran, kemiringan, ventilasi, dan tekanan terhadap kode yang berlaku.

## Berikutnya

[Periksa benturan](topic:clash-check) · [Periksa pipa dan saluran terhadap struktur](topic:mep-against-structure) · [Sambungan antara pipa dan peralatan](topic:mep-connections)
