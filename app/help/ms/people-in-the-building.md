---
title: Bawa orang melalui bangunan
summary: Pemindahan keluar atau ketibaan biasa pada satu hari melalui bilik, pintu dan tangga anda, dengan barisan di tempat bangunan menyempit, laluan terpanjang ke pintu keluar dari setiap bilik, dan dapatan sebagai Masalah. Model orang ramai yang kasar untuk keputusan reka bentuk, bukan sijil keselamatan kebakaran.
keywords: orang, pemindahan keluar, egress, melarikan diri, pintu keluar, jarak perjalanan, barisan, orang ramai, aliran, lebar pintu, tangga, ketibaan, kesesakan, simulasi, penghuni, pejalan kaki, bagaimana jika, pintu disekat
from: 84aa8920
---

Bahagian {{ui:Orang dalam bangunan}} pada panel kiri membawa orang melalui bilik, pintu dan tangga model IFC yang dibuka. Tiada apa-apa dalam model diubah dan tiada apa-apa dimuat naik.

:::warning
Ini ialah **alat bantu reka bentuk, bukan sijil keselamatan kebakaran**. Ia tidak tahu tentang api, asap, panik, perbezaan mobiliti atau apa yang diminta oleh kod daripada anda. Hadnya ialah tanggungjawab anda: laluan terpanjang ke pintu keluar dan masa yang tersedia ialah nombor yang anda taip, dan tiada yang dianggap.
:::

## Jalankan

1. Buka model dengan bilik dan pintu yang tertutup. Pintu dengan bilik di satu sisi sahaja ialah pintu keluar; pintu antara dua bilik menyambungkannya; tangga menyambungkan bilik di hujung-hujungnya.
2. Pilih **Pemindahan keluar** (semua orang berjalan ke pintu keluar), **Ketibaan** (semua orang masuk dan berjalan ke bilik) atau **Pertukaran** (orang dalam bilik keluar sementara sebilangan yang sama masuk), dan luas lantai bagi setiap orang. Bilik yang dinamakan seperti koridor, tangga, lobi atau tandas tidak menampung sesiapa.
3. Klik {{ui:Jalankan}}. Anda mendapat masa orang terakhir keluar (serta bila separuh dan sembilan daripada sepuluh keluar), barisan di setiap pintu dan tangga, bilik dengan laluan terpanjang, dan pelan yang memainkan larian itu.

## Bagaimana jika

Tandakan {{ui:Tutup}} pada pintu dalam jadual dan jalankan semula: orang mencari jalan lain, atau bilik yang tiada jalan keluar disenaraikan sebagai ralat. Pintu dua kali lebih lebar mengosongkan bilik jauh lebih cepat; jadual menunjukkan di mana barisannya.

## Cara ia berfungsi

Setiap bilik ialah grid, jadi orang berjalan di sekeliling sudut, bukan melalui dinding. Kelajuan menurun apabila bilik penuh (S = 1.4 (1 − 0.266 D) m/s, D dalam orang per m²). Pintu membenarkan 1.3 orang sesaat melalui setiap meter lebarnya, ditolak 150 mm setiap sisi; tangga 1.0 dan lebih perlahan untuk berjalan. Orang menunggu dalam barisan mengikut giliran. Nombor larian mengulangi larian yang sama dengan tepat.

Pembantu boleh menjalankan perkara yang sama: minta pemindahan keluar, atau laluan terpanjang ke pintu keluar dari setiap bilik.

## Orang dalam setiap bilik

Buka {{ui:Orang dalam setiap bilik}} untuk menaip nombor bagi mana-mana bilik. Kotak kosong menggunakan angka luas lantai (ditunjukkan dalam kelabu); 0 mengosongkan bilik. Nombor anda digunakan untuk larian dan disimpan dalam pelayar ini.

## Aliran berlawanan di pintu

Dalam **Pertukaran**, orang yang keluar dan orang yang masuk bertemu di pintu yang sama. Apabila pintu melepaskan seseorang dari arah lain tidak lama selepas orang terakhir, ia mengekalkan sebahagian kadarnya (0.8 di sini; anggapan, kerana nilai yang diterbitkan berbeza), dan jadual mengira perubahan arah. Pintu yang kerap berubah arah disenaraikan dalam Masalah sebagai nota.

## Tangga dan pelantar

Setiap pelantar tangga mengambil satu saat bagi pejalan untuk berpusing (anggapan). Tangga lurus tiada, tangga L atau U ada satu. Kadar tangga masih datang daripada lebar lariannya.

## Dalam paparan 3D

Tandakan {{ui:Tunjukkan orang dalam paparan 3D}} dan pejalan muncul sebagai figura dalam model, diwarnakan mengikut apa yang mereka lakukan, dan bergerak apabila anda memainkan larian. Tiada apa-apa ditambah kepada model.
