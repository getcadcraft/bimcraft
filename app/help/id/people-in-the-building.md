---
title: Telusuri bangunan bersama orang-orang
summary: Evakuasi atau kedatangan normal sehari melalui ruang, pintu, dan tangga Anda, dengan antrean di tempat bangunan menyempit, jalan terpanjang ke pintu keluar dari setiap ruang, dan temuannya sebagai Masalah. Model kerumunan kasar untuk keputusan desain, bukan sertifikat keselamatan kebakaran.
keywords: orang, evakuasi, egress, lolos, pintu keluar, jarak tempuh, antrean, kerumunan, aliran, lebar pintu, tangga, kedatangan, leher botol, simulasi, penghuni, pejalan kaki, apa jika, pintu terhalang
from: 84aa8920
---

Bagian {{ui:Orang di dalam bangunan}} pada panel kiri menelusuri orang melalui ruang, pintu, dan tangga dari model IFC yang terbuka. Tidak ada yang diubah di dalam model dan tidak ada yang diunggah.

:::warning
Ini adalah **alat bantu desain, bukan sertifikat keselamatan kebakaran**. Alat ini tidak mengetahui api, asap, kepanikan, perbedaan mobilitas, atau apa yang diminta oleh kode. Batasannya ada pada Anda: jarak tempuh terpanjang ke pintu keluar dan waktu yang tersedia adalah angka yang Anda ketik, dan tidak ada yang diasumsikan.
:::

## Jalankan

1. Buka model dengan ruang dan pintu yang tertutup. Pintu dengan ruang hanya di satu sisi adalah pintu keluar; pintu di antara dua ruang menghubungkannya; tangga menghubungkan ruang di ujungnya.
2. Pilih **Evakuasi** (semua orang berjalan ke pintu keluar), **Kedatangan** (semua orang masuk dan berjalan ke sebuah ruang), atau **Pertukaran** (orang di dalam ruang keluar sementara sejumlah orang masuk), serta luas lantai per orang. Ruang yang dinamai seperti koridor, tangga, lobi, atau toilet tidak menampung siapa pun.
3. Klik {{ui:Jalankan}}. Anda mendapatkan waktu ketika orang terakhir keluar (dan kapan setengah serta sembilan dari sepuluh orang keluar), antrean di setiap pintu dan tangga, ruang dengan jalan terpanjang, dan denah yang memutar ulang jalannya.

## Skenario apa jika

Centang {{ui:Tutup}} pada pintu di tabel lalu jalankan lagi: orang menemukan jalan lain, atau ruang tanpa jalan keluar dicantumkan sebagai kesalahan. Pintu dua kali lebih lebar mengosongkan ruang jauh lebih cepat; tabel menunjukkan di mana antreannya.

## Cara kerjanya

Setiap ruang adalah kisi, sehingga orang berjalan mengitari sudut, bukan menembus dinding. Kecepatan menurun ketika ruang penuh (S = 1.4 (1 − 0.266 D) m/s, D dalam orang per m²). Pintu melewatkan 1.3 orang per detik untuk setiap meter lebarnya, dikurangi 150 mm di setiap sisi; tangga 1.0 dan berjalan lebih lambat. Orang menunggu dalam antrean siapa datang duluan. Nomor acak yang sama menghasilkan jalan yang persis sama.

Asisten dapat menjalankan hal yang sama: minta evakuasi, atau jalan terpanjang ke pintu keluar dari setiap ruang.

## Orang di setiap ruang

Buka {{ui:Orang di setiap ruang}} untuk mengetik angka untuk ruang mana pun. Kotak kosong memakai angka luas lantai (ditampilkan dengan abu-abu); 0 mengosongkan ruang. Angka Anda dipakai untuk jalannya dan disimpan di peramban ini.

## Arus berlawanan di pintu

Dalam **Pertukaran**, orang yang keluar dan orang yang masuk bertemu di pintu yang sama. Ketika sebuah pintu melewatkan seseorang dari arah berlawanan tepat di belakang orang terakhir, pintu itu mempertahankan sebagian lajunya (0.8 di sini; asumsi, karena nilai yang dipublikasikan berbeda-beda), dan tabel menghitung perubahan arah. Pintu yang sering berubah arah dicantumkan di Masalah sebagai catatan.

## Tangga dan bordes

Setiap bordes tangga memerlukan satu detik bagi pejalan untuk berbalik (asumsi). Tangga lurus tidak memilikinya; tangga L atau U memiliki satu. Laju tangga tetap berasal dari lebar anak tangganya.

## Di tampilan 3D

Centang {{ui:Tampilkan orang di tampilan 3D}} dan pejalan muncul sebagai figur di dalam model, diwarnai menurut apa yang mereka lakukan, dan bergerak saat Anda memutar jalannya. Tidak ada yang ditambahkan ke model.
