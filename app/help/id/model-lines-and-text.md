---
title: Garis model dan teks model: digambar di model, pada bidang kerja
summary: Garis model adalah garis, polyline, atau busur yang hidup di dalam model dan tampil di setiap tampilan yang melihatnya. Teks model adalah huruf 3D dengan kedalaman sebenarnya. Keduanya digambar pada bidang kerja.
keywords: garis model, teks model, teks 3D, huruf, papan, signage, garis dalam 3D, busur, polyline, bidang kerja, teks terekstrusi, font, kedalaman, garis detail, garis drafting, anotasi, IfcAnnotation
from: fc9cccb5
---

## Yang akan Anda lakukan

Menggambar garis dan huruf yang menjadi bagian dari model, bukan dari satu tampilan.

## Langkah-langkah

1. Atur bidang kerja dulu (lihat **Bidang kerja**). Bidang level digambar di denah; bidang tegak di Penampil Bidang Kerja.
2. Untuk garis, pilih **Garis model** pada menu **Build** lalu pilih **Garis**, **Polyline**, atau **Busur (tiga titik)**:
   - garis membutuhkan dua klik;
   - polyline membutuhkan satu klik untuk setiap titik, lalu Enter atau klik dua kali. Klik pada titik pertama akan menutupnya;
   - busur membutuhkan tiga klik: titik awal, titik yang dilewatinya, dan titik akhir.
3. Untuk teks, pilih **Teks model**. Ketik katanya, atur tinggi huruf dan kedalamannya, lalu klik di tempat teks dimulai (ujung kiri garis dasarnya).
4. Pilih garis atau teks untuk melihatnya di **Properties**. Kata, tinggi, dan kedalaman teks dapat diubah di sana. Delete menghapusnya.

## Di mana keduanya tampil

- Garis model tampil di denah levelnya, di tampilan 3D, di panel elevasi dan potongan, dan di Penampil Bidang Kerja bila berada pada bidang kerja. Garis gambar (Anotasi, Garis) hanya milik satu tampilan.
- Teks model adalah geometri padat: tampil di mana pun model tampil, di denah, 3D, elevasi dan potongan, serta di lembar.
- Garis model belum digambar pada lembar cetak. Teks model sudah.

## Font

Teks model memakai font yang sama dengan lembar dan PDF: Liberation Sans, di bawah SIL Open Font License. Huruf yang tidak dimiliki font digambar sebagai tanda tanya dan Anda diberi tahu huruf mana. Hanya ada satu font dan satu ketebalan. Huruf diberi jarak sesuai lebar font itu sendiri, tanpa kerning.

## Di file IFC

- Garis model adalah IfcAnnotation dengan tipe objek ModelLine. Bentuknya adalah kurva 3D: polyline, atau lingkaran terpotong untuk busur.
- Teks model adalah IfcBuildingElementProxy dengan tipe objek ModelText. Bentuknya adalah satu solid terekstrusi untuk setiap bagian huruf, dengan lubang pada huruf seperti O dan B. Kuantitasnya adalah luas muka dan volume (luas muka dikali kedalaman).

## Perlu diketahui

- Ukuran apa pun dibuat sesuai permintaan Anda. Hanya garis tanpa panjang, busur yang ketiga titiknya berada dalam satu garis, atau teks tanpa huruf yang ditolak, karena tidak ada yang bisa dibuat.
- Setiap garis, serta setiap teks atau perubahannya, adalah satu langkah Urungkan.
