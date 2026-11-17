---
title: Semak paip dan saluran terhadap struktur
summary: Jalankan set pertembungan siap sedia bagi paip dan saluran terhadap dinding, papak, rasuk dan tiang, cari laluan yang lebih dekat dengan struktur daripada penebatnya dan jurang, dan senaraikan bukaan yang diperlukan laluan melalui dinding dan papak sebagai CSV dan BCF.
keywords: mep, pertembungan, semakan pertembungan, koordinasi, struktur, dinding, papak, rasuk, tiang, ruang bebas, pertembungan lembut, penebat, jurang, bukaan, penembusan, sarung, teras, kerja pembinaan, bcf, csv
from: 2d597f01
---

## Apa yang anda akan lakukan

Pastikan perkhidmatan muat dengan bangunan: apa yang masuk ke dalam struktur, apa yang melintas terlalu dekat dengannya, dan di mana dinding dan papak perlu lubang. Buka {{ui:Semakan pertembungan}} dalam panel kiri; bahagian **Paip dan saluran terhadap struktur** berada di bawah semakan biasa.

## Pertembungan keras

Dua senarai set kini juga menawarkan **Paip dan saluran**, **Dinding**, **Papak dan bumbung**, **Rasuk**, **Tiang** dan **Struktur** (kesemua empat), dengan bilangan elemen yang dimiliki setiap satu. Klik {{ui:Paip dan saluran × struktur}} untuk memilih yang pertama dan yang terakhir serta jalankan semakan; atau pilih mana-mana pasangan sendiri dan klik {{ui:Jalankan}}. Lihat [Semak untuk pertembungan](topic:clash-check).

## Ruang bebas

Sesetengah perkhidmatan memerlukan ruang di sekelilingnya: penebatnya, dan ruang untuk bekerja atau untuk sarung.

1. Beri laluan paip atau saluran ketebalan **Penebat** dalam Sifat (tiada apa yang dilukis untuknya).
2. Taip **Jurang di sekeliling paip dan saluran** (mm) dalam Semakan pertembungan.
3. Klik {{ui:Semak ruang bebas}}: setiap bahagian yang lebih dekat dengan dinding, papak, rasuk atau tiang daripada penebatnya ditambah jurang disenaraikan bersama jarak yang ia ada dan jarak yang ia mahukan. Klik satu baris untuk melihat kedua-duanya.

Bahagian yang melalui dinding atau papak ialah bukaan, bukan ruang bebas, dan disenaraikan di sana.

## Bukaan diperlukan

Klik {{ui:Bukaan diperlukan}}. Di mana garis tengah laluan melintasi dinding atau papak, BimCraft menyenaraikan bukaan yang diperlukannya: bulat untuk paip atau saluran bulat, jika tidak segi empat tepat, sebesar saiz luar laluan ditambah dua kali penebatnya ditambah dua kali jurang, berpusat di tempat laluan merentas. Klik satu baris untuk melihat laluan dan dinding atau papak.

- {{ui:Bukaan sebagai CSV}}: satu baris bagi setiap bukaan dengan laluan, saiz dan penebatnya, saiz bukaan, elemen yang dilaluinya dan GlobalId-nya, aras, X, Y dan Z pusat, serta sejauh mana laluan itu menembusi.
- {{ui:Bukaan sebagai isu BCF}}: satu isu bagi setiap bukaan, dengan kamera yang menghadapnya serta laluan dan elemen yang dipilih, untuk program jurutera struktur.

:::note
Tiada apa yang dipotong: bukaan ialah senarai untuk mereka yang menentukan saiznya. Jurang ialah hak anda untuk ditaip; tiada kod yang menyatakan sebesar mana bukaan mesti. Rasuk dan tiang ialah pertembungan, bukan bukaan: sama ada paip boleh melalui salah satu daripadanya ialah keputusan jurutera struktur.
:::
