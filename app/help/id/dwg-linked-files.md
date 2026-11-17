---
title: Temukan gambar tertaut dan gambar raster
summary: Tampilkan gambar tertaut (xref) dan gambar raster pada kepala gambar milik sebuah gambar, dengan membuka foldernya atau menambahkan berkas secara manual.
keywords: xref, referensi eksternal, gambar tertaut, lampirkan, overlay, citra, gambar, logo, kepala gambar, xref hilang, etransmit, pengelola referensi
from: 5593d4b1
---

## Yang akan Anda lakukan

Lengkapi sebuah gambar: tampilkan gambar yang ditautkannya (referensi eksternal, atau xref) dan gambar yang digunakannya, seperti logo pada kepala gambar.

## Cara mudah: buka folder

1. Klik {{ui:Open a folder}} dan pilih folder yang berisi gambar dan tautannya, misalnya seluruh folder `Cad` sebuah proyek.
2. Di laporan folder, gulir ke **Gambar CAD**.
3. Klik gambarnya.
4. Lihat panel {{ui:Properties}} di sebelah kanan, di bawah **Gambar tertaut** dan **Gambar raster**.

BimCraft mencari setiap gambar tertaut menurut namanya ("*name*.dwg"), di folder yang sama dengan gambar terlebih dahulu, lalu di mana saja dalam folder yang Anda buka. Gambar raster dicari dengan cara yang sama, dan juga dengan nama yang mirip: ekspor eTransmit atau Revit sering menambahkan nama proyek di depannya, sehingga `logo.png` ditemukan sebagai `Tower-logo-5425051.png`.

## Cara lain: tambahkan berkas secara manual

1. Buka gambar itu sendirian.
2. Di sebelah kanan, di bawah **Gambar tertaut**, klik {{ui:Add linked drawings…}}. Di bawah **Gambar raster**, tombolnya adalah {{ui:Add pictures…}}; keduanya membuka pemilih yang sama.
3. Pilih berkas `.dwg` tertaut dan berkas gambar raster. Anda dapat memilih beberapa sekaligus.
4. Tunggu sementara BimCraft membuka gambar lagi bersama mereka.

## Yang seharusnya terlihat

Setiap gambar tertaut dan gambar raster tercantum dengan labelnya:

| Label | Artinya |
|---|---|
| **Ditampilkan** | Ditemukan dan digambar. Jalur di bawahnya menunjukkan asalnya, atau "ditambahkan oleh Anda". |
| **Ditampilkan, nama mirip** | Gambar raster yang ditemukan dengan nama yang mirip. Periksa apakah itu yang benar. |
| **Tidak ditemukan** | Tidak ada di folder atau berkas yang Anda tambahkan. Gambar raster yang hilang tampil sebagai bingkai kosongnya. |
| **TIFF tidak dapat ditampilkan di peramban** | Gambar itu berkas TIFF, yang tidak digambar oleh peramban. Simpan sebagai PNG dengan nama yang sama lalu tambahkan. |
| **Tidak dapat dibaca** | Berkas ditemukan tetapi tidak dapat dibuka sebagai gambar. |

Panel {{ui:Drawing}} di sebelah kiri menampilkan "*n* dari *m* dimuat" untuk gambar tertaut. Layer gambar tertaut muncul di {{ui:Layers}} sebagai "*link name*|*layer*".

## Kesalahan umum

- **Hanya membuka gambarnya.** "Gambar ini hanya menampilkan isinya sendiri sampai gambar tertautnya ditambahkan. Membuka seluruh folder proyek akan menemukannya secara otomatis."
- **Membuka folder yang terlalu kecil.** Jika tautannya berada di folder saudara, buka folder induknya.
- **Tautan yang diganti nama.** BimCraft mencocokkan gambar tertaut berdasarkan nama. Tautan yang diganti namanya di disk tidak ditemukan; tambahkan secara manual.
- **Tautan dari tautan.** BimCraft memuat gambar yang ditautkan oleh gambar yang dibuka. Gambar yang ditautkan di dalam gambar-gambar itu tidak dicari, jadi biasanya tidak ditampilkan di build ini.
