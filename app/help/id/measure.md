---
title: Ukur jarak, luas muka dan lokasi dalam 3D
summary: Ukur antara dua titik model IFC dengan penangkapan ke sudut dan tepi, baca selisih sepanjang X, Y dan Z, serta ukur luas muka datar.
keywords: ukur, measure, measurement, pengukuran, jarak, distance, panjang, dimensi, luas, area, luas muka, face area, snap, sudut, corner, tepi, edge, meteran, penggaris, jarak bebas, lokasi, location, lintang, bujur, lat long, koordinat, georeferensi, konversi peta, EPSG, survei, easting, northing, WGS 84, datum
from: 5f430bba
---

## Yang akan Anda lakukan

Periksa jarak bebas, panjang dinding, atau ukuran muka langsung dari model, tanpa membuka program penyusunan.

## Langkah

1. Buka model IFC.
2. Klik {{ui:Ukur}} di bilah alat, atau tekan {{key:M}}. Sebuah bilah terbuka di bagian bawah tampilan.
3. **Sebuah jarak:** dengan {{ui:Jarak}} dipilih, klik titik pertama, lalu titik kedua. Dekat sudut, penunjuk menangkap ke sudut; dekat tepi, ke tepi. Label kecil di penunjuk menyatakan yang mana. Setiap pasang klik membuat satu pengukuran.
4. **Luas sebuah muka:** pilih {{ui:Luas muka}} dan klik sebuah muka. Seluruh muka datar menyala dan luasnya tampil.
5. **Garis lurus:** tahan {{key:Shift}} saat memilih titik kedua, atau tekan {{ui:Lurus}} di bilah agar tetap. Garis kemudian berjalan sepanjang satu sumbu yang paling dekat dengan penunjuk (di tampilan atas, sepanjang X atau Y denah; di tampilan lain, sepanjang X, Y atau Z), dan label penunjuk berbunyi "lurus sepanjang sumbu". {{key:M}} tetap memulai dan menghentikan Ukur.
6. Klik {{ui:Hapus}} untuk menghapus pengukuran, atau {{ui:Selesai}} (atau {{key:Esc}}) untuk berhenti mengukur.

## Yang seharusnya Anda lihat

- Garis di antara kedua titik dengan panjangnya tertulis di atasnya, dan di bilah tertulis panjangnya beserta seberapa jauh ia berjalan sepanjang X, Y dan Z (pada sumbu model, Z ke atas), semuanya dalam {{ui:Satuan}} yang dipilih di bilah alat.
- Luas sebuah muka dalam m², pada muka dan di bilah.
- Label tetap pada pengukurannya saat Anda memutar, menggeser, dan memperbesar.
- Saat mengukur, klik tidak memilih elemen. Bidang atau kotak potongan tetap memotong model, dan Anda dapat mengukur apa yang ditampilkannya, termasuk muka potongan.

## Di mana sebuah titik berada di bumi

Klik {{ui:Lokasi}} di bilah ukur, lalu klik titik pada model (ia menangkap ke sudut dan tepi seperti pada jarak). Bilah menampilkan:

- **lintang dan bujur**, dalam derajat desimal dan dalam derajat, menit, dan detik, dalam WGS 84 untuk awal;
- **koordinat peta** (easting dan northing, ditulis dalam {{ui:Satuan}} yang dipilih di bilah alat) dalam sistem peta model itu sendiri, misalnya `EPSG:28356`;
- **tinggi** dan datum vertikal yang disebutkan file, serta **datum asli** file (misalnya GDA94).

{{ui:Salin}} menaruh semuanya di papan klip dalam satu baris. Ubah sistem tempat lintang dan bujur berada di {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Lokasi}}: WGS 84 (seperti GPS dan peta web), datum asli file, atau datum umum lain seperti ETRS89 atau NAD83.

Ini memerlukan model yang bergeoreferensi: yang diekspor dengan koordinat peta (konversi peta ke sistem terproyeksi dengan kode EPSG). Model yang hanya memiliki lintang dan bujur tapak mendapat posisi perkiraan, dihitung dari titik tapak dan utara sejatinya, dan bilah memberi tahu demikian. Dengan beberapa model terbuka, setiap titik menggunakan georeferensi dari modelnya sendiri.

:::note
Berpindah antar datum (misalnya GDA94 ke WGS 84) dilakukan tanpa file grid, jadi ketelitiannya beberapa meter; baris status menyatakan seberapa baik. Koordinat peta itu sendiri tepat.
:::

## Kesalahan umum

- **"…tidak memiliki georeferensi".** File tidak memiliki konversi peta dan tidak memiliki lintang serta bujur tapak. Ekspor ulang dengan sistem koordinatnya diatur (koordinat bersama / titik survei di alat penyusunan).
- **Koordinat peta tetapi tanpa lintang dan bujur.** File menyebut sistem petanya tanpa kode EPSG, atau dengan kode yang tidak ada dalam daftar; baris status menyatakan yang mana.

- **Titik jatuh pada muka, bukan sudut.** Penangkapan melihat elemen di bawah penunjuk. Dekatkan ke sudut, atau perbesar.
- **Luasnya lebih kecil dari yang diharapkan.** Bukaan tidak dihitung, dan muka yang melengkung adalah beberapa muka: klik masing-masing.
- **{{key:Esc}} menghentikan pengukuran.** {{key:Esc}} pertama membuang jarak yang setengah jadi; yang kedua menghentikan.

## Berikutnya

- [Potong model IFC dengan bidang potongan](topic:section-plane)
- [Sembunyikan, isolasi, dan tembus pandang elemen](topic:hide-and-isolate)
