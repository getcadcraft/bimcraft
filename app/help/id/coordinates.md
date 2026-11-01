---
title: Koordinat di BimCraft
summary: Di mana Anda bekerja: posisi penunjuk di denah dan tampilan 3D, level tempat Anda berada, titik asal proyek, dan titik survei tapak.
keywords: koordinat, di mana saya, posisi, penunjuk, pembacaan, x y z, level, lantai, titik asal proyek, asal, titik dasar, titik survei, tapak, koordinat peta, Easting, Northing, georeferensi, satuan, lokasi
from: 84df5245
---

## Yang akan Anda lakukan

Ketahui posisi Anda dalam model sekilas: level tempat Anda menggambar, seberapa jauh penunjuk dari titik asal proyek, dan di mana titik survei tapak berada.

## Di mana angkanya ditampilkan

- **Di atas tampilan 3D** (kanan bawah, di samping kubus tampilan): arahkan penunjuk ke model. Kotak menampilkan level tempat titik itu berada dan seberapa tinggi titik itu di atas lantai level tersebut, lalu **X, Y, dan Z**. Di atas ruang kosong, kotak membaca titik pada lantai level terendah.
- **Di denah** (kanan bawah, saat {{ui:Draw}} aktif): level yang ditampilkan denah dan tinggi lantainya, serta **X dan Y** penunjuk selama berada di atas denah.
- Saat file memiliki konversi peta (diekspor dengan koordinat peta), kedua kotak menambahkan **Easting dan Northing** pada grid peta, dalam {{ui:Units}} yang Anda pilih (satuan selalu ditulis di sebelahnya; kaki dan inci ditampilkan sebagai kaki desimal). Gambar (DWG atau DXF) mempertahankan satuannya sendiri: pembacaan penunjuknya menyebutkan satuan tersebut dan tidak pernah dikonversi.

Setiap X, Y, dan Z diukur dari **titik asal proyek**, dalam {{ui:Units}} yang dipilih pada bilah alat (kaki dan inci, inci, kaki desimal, milimeter, sentimeter, atau meter). Y positif menunjuk ke utara model, yang tidak selalu utara sebenarnya. Easting dan Northing peta mengikuti pilihan yang sama (kaki dan inci ditampilkan sebagai kaki desimal); bila satuan sistem peta berbeda dari yang Anda pilih, satuan itu disebutkan dalam tanda kurung setelah angka, misalnya *(US survey feet)*, sehingga surveyor dapat melihat dalam satuan apa sistem itu sendiri ditulis.

## Dua penanda

- **Titik asal proyek** (lingkaran merah dengan tanda silang): titik 0, 0, 0 tempat semua koordinat dalam model diukur.
- **Titik survei** (lingkaran biru dengan segitiga): titik acuan tapak, yang lintang, bujur, dan elevasinya, atau koordinat petanya, diberikan. Di tampilan 3D, arahkan penunjuk ke titik ini untuk membaca letaknya.

Saat tapak berada tepat di titik asal proyek, seperti bangunan baru yang digambar di sini, satu penanda menampilkan keduanya. Klik tombol bidik di salah satu kotak untuk menyembunyikan atau menampilkan penanda; BimCraft mengingat pilihan Anda di peramban ini.

## Yang akan Anda lihat

- Angkanya berubah saat penunjuk bergerak, dan kotak di denah menyebutkan level yang Anda pilih di daftar level.
- Penanda tetap di tempatnya saat Anda orbit, geser, dan zoom.

:::tip
Untuk membaca lintang dan bujur sebuah titik, gunakan {{ui:Measure}} › {{ui:Location}}: lihat [Ukur jarak, luas permukaan, dan lokasi dalam 3D](topic:measure).
:::

:::touch
Di layar sentuh, kotak 3D tidak menampilkan apa pun sampai Anda menggunakan mouse atau pena: jari justru menggeser tampilan.
:::
