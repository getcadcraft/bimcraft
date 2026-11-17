---
title: Letakkan elevasi dan buka tampilannya
summary: Letakkan penanda elevasi pada denah lantai, arahkan sesuai tampilan yang diinginkan, lalu temukan gambarnya di peramban proyek, sunting di dalamnya dan letakkan pada lembar. Langkah untuk tata letak pita dan tata letak klasik.
keywords: elevasi, tampilan elevasi, penanda elevasi, tag elevasi, letakkan elevasi, elevasi baru, buat elevasi, elevasi luar, tampilan samping, tampilan depan, tampilan dari suatu titik, di mana elevasi saya, buka elevasi, elevasi pada lembar, balik elevasi, ganti nama elevasi, elevasi utara, susun tampilan, pisahkan tampilan, denah dan 3D berdampingan
from: a7cfd2b9
---

## Yang akan Anda lakukan

Buat elevasi Anda sendiri: gambar gedung yang dilihat dari titik yang Anda pilih, menghadap ke arah yang Anda pilih. Cukup dua klik pada denah lantai. Gambarnya kemudian tercantum bersama elevasi gedung lainnya.

:::note
Keempat sisi sudah tersedia. Setiap gedung memiliki elevasi Utara, Timur, Selatan dan Barat di {{ui:Project browser}} di bawah {{ui:Elevations}} tanpa perlu meletakkan apa pun. Letakkan elevasi sendiri jika Anda ingin melihat dari tempat lain: tegak lurus ke sayap yang miring, dari dalam halaman dalam, atau satu dinding di dalam ruangan.
:::

## Letak alatnya

- Tata letak pita: {{ui:View}} › **Buat** › {{ui:Elevation}}.
- Tata letak klasik: aktifkan {{ui:Draw}}, lalu {{ui:Build}} › {{ui:Elevation}}.
- Gaya menu apa pun: perintahnya bernama Elevation; palet perintah akan menemukannya, dan baris perintah menggunakan ELEVATION.

## Langkah

1. Pilih {{ui:Elevation}}. Elevasi diletakkan pada denah lantai, jadi jika Anda berada di tampilan 3D, BimCraft menampilkan denah lantai tempat Anda berada. Penunjuk menampilkan **Klik di tempat elevasi berdiri**.
2. Klik tempat tampilan diambil. Untuk elevasi luar, klik di luar gedung, agak jauh dari dinding yang ingin Anda lihat.
3. Penunjuk sekarang menampilkan **Klik arah tampilannya**. Gerakkan ke arah gedung: panah menunjukkan arah, dan garis pendek melintang di atas klik pertama Anda adalah tepi tempat tampilan dilihat. Klik.
4. Lingkaran dengan angka dan penunjuk muncul pada denah. Itulah penanda elevasi. Yang pertama bernomor 1, berikutnya 2.
5. Tekan Esc untuk selesai, atau lanjutkan dan letakkan penanda lain.

Meletakkan penanda adalah satu langkah: {{key:Mod+Z}} mengurungkannya.

## Buka gambarnya

Denah tetap di depan Anda setelah klik kedua. Gambarnya ada di {{ui:Project browser}}:

1. Buka {{ui:Elevations}}. Elevasi Anda tercantum setelah keempat sisi sebagai **Elevasi 1**.
2. Klik tombol pensil {{ui:Edit in this view}} pada barisnya untuk melihat gambar dan bekerja di dalamnya: pindahkan dinding, pintu, jendela dan level, tambahkan catatan serta dimensi. Lihat [Sunting di elevasi dan potongan](topic:edit-in-elevations).
3. Klik baris itu sendiri untuk membuka set gambar, atau tambahkan tampilan ke lembar Anda sendiri. Lihat [Tampilan dan lembar](topic:views-and-sheets).

Dalam tata letak klasik, peramban proyek berada di panel kiri selama {{ui:Draw}} aktif. Dalam tata letak pita, peramban ini berupa tab {{ui:Project Browser}} di bawah Properti.

## Yang ditampilkan tampilan

- Semua yang ada di depan penanda, sampai batas gedung. Tidak ada yang di belakangnya.
- Level, dengan nama dan tingginya.
- Jika penanda berdiri di dalam gedung, apa pun tempat ia berdiri akan terpotong di sana, seperti potongan. Untuk elevasi luar yang bersih, berdirilah di luar.

## Mengubahnya

Pilih penanda pada denah (klik lingkarannya dengan {{ui:Select}}). Properti memiliki:

- {{ui:Label}}: nomornya atau nama sendiri, hingga 8 karakter.
- {{ui:Flip the view}}: melihat ke arah yang berlawanan dari titik yang sama.
- {{ui:Look as far as}}: seberapa jauh di depan penanda tampilan menjangkau. 0 menampilkan semuanya.

Tekan Delete untuk menghapus penanda dan gambarnya. Urungkan akan mengembalikan keduanya.

:::tip
Untuk melihat denah dan tampilan 3D sekaligus saat bekerja, gunakan {{ui:View}} › **Jendela** › {{ui:Tile Views}} pada tata letak pita, atau {{ui:Split}} pada tata letak klasik. Klik pada tab tampilan akan kembali ke satu tampilan.
:::

## Batasan

- Penanda belum dapat diseret atau diputar pada denah. Hapus lalu letakkan lagi, atau gunakan {{ui:Flip the view}}.
- Dalam daftar tampilan yang dapat Anda tambahkan ke lembar, elevasi sendiri tercantum bersama potongan.
- Tag pintu dan jendela digambar pada keempat elevasi sisi, bukan pada elevasi yang Anda letakkan.

## Dalam IFC

Penanda disimpan dalam file sebagai IfcAnnotation bernama "Elevation 1" dengan tipe objek "Elevation marker", di level tempat ia diletakkan. Program lain menampilkannya sebagai anotasi; gambarnya sendiri dibuat oleh BimCraft dari model setiap kali.
