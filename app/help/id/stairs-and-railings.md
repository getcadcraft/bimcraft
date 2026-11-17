---
title: Tangga dan railing
summary: Gambar tangga lurus, L, U, dan winder yang menghitung tanjakan dan injakannya dari tinggi lantai ke lantai, dengan handrail dan balusel, serta lubang tangga yang dipotong di lantai di atasnya; gambar pagar pengaman di sepanjang dek dan di sekitar bukaan.
keywords: spiral, tangga bulat, tangga, rangkaian anak tangga, tanjakan, injakan, bordes, winder, tangga L, tangga U, tangga balik, handrail, pagar pengaman, pengaman, railing, balusel, tiang balusel, newel, tiang, lubang tangga, ruang bebas kepala, dek, balkon
from: 16e5ace4
---

## Yang akan Anda lakukan

Tambahkan tangga di antara level dan railing di tempat yang dibutuhkan orang. Tangga menghitung anak tangganya sendiri dari tinggi antar-level, menjaganya dalam batas hunian yang umum, memasang handrail di sisi terbuka, dan memotong lubang tangga di lantai di atasnya.

## Menggambar tangga

1. Di level tempat tangga dimulai, buka {{ui:Build}} dan pilih {{ui:Tangga}}.
2. Pilih jenisnya — **Lurus**, **L dengan bordes**, **U dengan bordes** atau **L dengan winder** — ke arah mana ia **berbelok**, **lebarnya**, dan di mana **handrail**-nya berada.
3. Klik di tempat tangga dimulai: di tengah tepi depan anak tangga paling bawah.
4. Gerakkan penunjuk ke arah tangga naik; anak tangga mengikutinya, dengan jumlah tanjakan dan injakan. Penunjuk menempel ke dinding dan ke langkah 15°; tahan {{key:Shift}} agar tetap siku.
5. Klik. {{key:Esc}} untuk mengulang dari awal.

## Menggambar tangga spiral

1. Buka {{ui:Build}}, pilih {{ui:Tangga}}, lalu pilih **Spiral** sebagai jenisnya.
2. Atur **Putar**, arah putarnya saat naik (kiri berarti berlawanan arah jarum jam).
3. Klik pusat tiangnya.
4. Klik ke arah injakan paling bawah menunjuk.

Tangga ini mulai dengan lebar 30" (injakan, dari tiang ke sisi luar), dengan tiang 4½". Tanjakan dihitung dari tinggi antar-lantai, paling tinggi 9½" secara default. Injakan 7½" dalam pada garis jalan, 12" dari tiang. Handrail berada di sisi luar.

Di **Properti**, tangga spiral menambahkan **Tiang pusat**, diameternya. Kolom **Tread** diukur pada garis jalan. Pemeriksaannya berlabel nilai default untuk tangga spiral: lebar bersih 26", injakan minimal 6¾" pada garis jalan, tanjakan paling tinggi 9½", dan handrail 34"–38". Ini bukan perhitungan teknik; pejabat bangunan yang memutuskan.

## Cara anak tangga dihitung

Tinggi antara lantai level dan level di atasnya dibagi menjadi tanjakan yang sama, tidak lebih tinggi dari 7¾", dan setiap injakan 10" dalamnya (keduanya dapat diubah di **Properti**). Bordes dihitung sebagai satu langkah; winder adalah tiga langkah yang mengipas di sekitar sudut dalam. Ubah tinggi sebuah level dan setiap tangga di atasnya dihitung ulang.

:::warning
Tanjakan 7¾", injakan 10", lebar 36", ruang bebas kepala 6'-8", dan handrail 34"–38" adalah nilai default berlabel mengikuti kode hunian yang umum, bukan perhitungan teknik. **Properti** menunjukkan mana yang terpenuhi; pejabat bangunan Anda yang memutuskan apa yang berlaku.
:::

## Mengubah tangga

Pilih tangga (klik di denah atau di tampilan 3D) dan ubah di **Properti**: jenis dan putarannya, lebar, tanjakan tertinggi, kedalaman injakan, handrail dan tingginya, serta **Cut the floor above** untuk lubang tangga. Tanjakan dan injakan yang dihasilkan ditampilkan di bawahnya.

## Lubang tangga

Jika level di atasnya memiliki lantai, tangga memotongnya di tempat anak tangga akan memiliki ruang bebas kepala kurang dari 6'-8". Potongan ikut bergerak bersama tangga dan hilang saat tangga dihapus.

## Menggambar railing

1. Buka {{ui:Build}} dan pilih {{ui:Railing}}.
2. Pilih **Guardrail** (tinggi 36") atau **Handrail** dan tingginya.
3. Klik di sepanjang tepi — dek, balkon, di sekitar lubang tangga — lalu klik dua kali atau tekan {{key:Enter}} untuk selesai.

Railing mendapat tiang di ujung dan sudutnya, serta balusel dengan celah di bawah 4". Pilih satu untuk mengubah jenis, tinggi, atau seberapa jauh di atas lantai ia dimulai.

## Menggambar pagar

Pilih **Fence** di alat Railing yang sama, atur tingginya (1800 mm sebagai awal), klik di sepanjang garis pagar, lalu tekan {{key:Enter}}.

- Pagar mendapat tiang di setiap ujung dan sudut, serta tiang paling jauh setiap 2.4 m di antaranya. Pagar panel memiliki panel di antara tiang; pagar rel memiliki dua rel. Ukuran ini adalah pilihan yang umum, bukan syarat kode; aturan setempat membatasi tinggi pagar.
- Ini adalah satu elemen dalam model (IfcRailing bernama Fence) dengan set properti {{ui:CadCraft_Fence}}: gaya, tinggi, tiang, panel, rel, gerbang, panjang, dan luas panel. Satu langkah untuk diurungkan.
- Tidak digambar di sini: gerbang (generator di CivilCraft yang mengatur letaknya), picket, medan (pagar berdiri di atas level), dan memilih satu tiang saja.

## Yang disimpan

Tangga disimpan sebagai tangga IFC yang terdiri dari rangkaian anak tangga (dengan tanjakan, injakan, tinggi tanjakan, dan panjang injakan), bordes, winder, dan handrail; lubang tangga adalah bukaan pada pelat lantai di atasnya. Railing disimpan sebagai railing IFC dengan panjang serta jumlah balusel dan tiangnya.
