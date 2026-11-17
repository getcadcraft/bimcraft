---
title: Pasang gambar raster di bawah denah
summary: Tempatkan gambar raster PNG, JPEG, atau WebP (denah hasil pindai, sketsa, foto lokasi, foto udara) di bawah denah sebuah level atau pada bidang vertikal, skalakan dengan dua titik, pindahkan, putar, pudarkan, dan kunci, lihat dalam 3D dan dalam PDF denah, serta simpan bersama model dalam bundel.
keywords: gambar, citra, latar belakang, PNG, JPEG, WebP, pindai, sketsa, foto, udara, denah tapak, skala, opasitas, kunci, alas, jiplak
from: e3c78d1f
---

## Tempatkan gambar raster

Aktifkan {{ui:Gambar}}, buka levelnya, dan pilih {{ui:Gambar}} di menu {{ui:Build}}. Lalu {{ui:Sisipkan gambar raster…}} dan pilih file PNG, JPEG, atau WebP. File dibaca di peramban Anda dan tidak pernah diunggah. Gambar raster muncul di bawah denah, disesuaikan dengan tampilan, dan bilah alat menyatakan bahwa gambar itu belum diskalakan. Semua yang Anda gambar berada di atasnya.

## Atur skala

Pilih {{ui:Skala}}, klik dua titik pada gambar yang jarak sebenarnya Anda ketahui (dua ujung dinding pada denah pindai, atau dimensi yang tercetak di sketsa), lalu ketik jaraknya dan tekan {{key:Enter}}. Gambar raster membesar atau mengecil di sekitar titik pertama yang Anda klik. {{key:Esc}} membatalkan.

## Tempel area yang disalin

Di MarkupCraft, {{ui:Salin area}} menyalin sebagian lembar PDF sebagai gambar raster. Kembali di BimCraft, dengan denah level tampil, tekan {{key:Ctrl+V}} (atau {{ui:Tempel}} di menu {{ui:Edit}}): area itu masuk ke denah sebagai gambar raster, dipusatkan di tempat penunjuk berada (atau di tengah tampilan). Ketika lembar memiliki skala gambar, area itu masuk pada ukuran sebenarnya, sehingga dinding di atasnya sama panjangnya dengan dinding Anda. Tanpa skala, area itu masuk pada ukuran kertas dan {{ui:Skala}} langsung aktif, sehingga Anda dapat mengklik dua titik dan mengetik jaraknya. Area yang disalin sebagai overlay mulai pada opasitas saat disalin. Ini satu langkah urungkan dan disimpan seperti gambar raster lainnya.

Tempel mengambil apa yang terakhir Anda salin: area yang disalin, atau sesuatu yang Anda salin di BimCraft. {{key:Ctrl+V}} juga menempelkan gambar raster PNG, JPEG, atau WebP lain dari papan klip Anda, ditempatkan seperti {{ui:Sisipkan gambar raster…}} dan belum diskalakan. Area yang disalin diingat selama enam jam.

## Pindahkan, putar, pudarkan, kunci

{{ui:Pindahkan}} meminta titik dasar pada gambar lalu tempat tujuannya. {{ui:Putar}} meminta sudut dalam derajat, berpusat di tengah gambar. {{ui:Opasitas}} memudarkannya agar garis Anda lebih menonjol. {{ui:Kunci}} mencegahnya bergerak saat Anda menggambar; gambar yang terkunci tetap memungkinkan Anda mengubah opasitasnya dan menyembunyikannya. Setiap perubahan adalah satu langkah urungkan.

## Beberapa gambar, beberapa level

Sebuah gambar raster termasuk ke level tempat ia ditempatkan dan tampil di denah level itu serta denah plafon. Klik sebuah gambar untuk mengerjakannya, atau pilih dari daftar. {{ui:Sembunyikan}} mematikannya tanpa menghapusnya; {{ui:Hapus}} (atau {{key:Delete}}) mengeluarkannya dari model.

## Gambar raster dalam tampilan 3D

Setiap gambar raster juga berdiri di tampilan 3D sebagai bidang datar: gambar denah terbaring di levelnya, gambar bidang vertikal berdiri di atas garis potongnya. Gambar digambar di atas model tanpa menyembunyikannya, dan model menyembunyikan bagian gambar yang berada di belakangnya. Gambar yang saling tumpang tindih diurutkan menurut jarak. Opasitas, Sembunyikan, Kunci, dan Hapus bekerja sama, dan {{ui:Tampilkan dalam 3D}} mematikan semua bidang hanya di tampilan 3D. Sebuah level menampung paling banyak 8 gambar raster, agar tampilan tetap cepat.

## Gambar raster pada bidang vertikal

Di bawah {{ui:Tempatkan pada}} pilih {{ui:Bidang vertikal (garis potong)}}, lalu {{ui:Sisipkan gambar raster…}}. Klik dua ujung garis di denah (ujung muka dinding akan menempel), atau pilih garis potong bernama dari level di {{ui:Di atas garis potongan}} dan tidak perlu klik. Gambar raster berdiri di level di atas garis itu, selebar garisnya. Atur {{ui:Lebar}}, posisinya {{ui:Sepanjang garis}}, dan {{ui:Tinggi di atas level}} dengan mengetik; {{ui:Putar}} memutarnya di bidangnya sendiri. Gambar vertikal tidak digambar di bawah denah; denah menampilkan garisnya ketika Anda mengerjakannya. BimCraft belum memiliki jendela potongan 2D interaktif: potongan dan tampak digambar di lembar, dan gambar raster belum dicetak di tampilan lembar tersebut.

## Mencetak

{{ui:Tampilan cetak}} pada denah menuliskan gambar raster level ke dalam PDF di bawah gambar, pada skala, putaran, dan opasitasnya, dipotong mengikuti lembar; gambar yang disembunyikan tidak ikut. JPEG dimasukkan apa adanya; gambar raster lain diturunkan ke 200 dpi di lembar terlebih dahulu.

## Disimpan bersama model

Byte gambar raster tidak ditulis ke dalam teks IFC. Model merujuk setiap gambar dengan namanya (IfcDocumentReference seperti pictures/<id>.png) dan byte-nya ikut dalam bundel proyek. Gunakan {{ui:Simpan sebagai bundel…}} (atau {{ui:Simpan sebagai IFC}} dan pilih itu): Anda mendapatkan satu file .ccbundle dengan model dan gambar rasternya; IFC tetap kecil dan pengeditan tetap cepat. Buka .ccbundle dan gambar rasternya kembali.

File .ifc biasa tidak dapat memuat gambar raster tanpa menjadi besar. Saat Anda menyimpan satu, BimCraft menyatakan berapa banyak gambar raster yang disimpan di luarnya dan menawarkan bundel, atau IFC biasa yang menyematkan gambar hingga 512 KB dan membiarkan sisanya. File .ifc biasa yang dibuka tanpa bundelnya menampilkan gambar tersebut sebagai hilang dan Masalah mencantumkannya; bukalah file .ccbundle tempat ia disimpan. File yang disimpan oleh versi pertama, dengan gambar di dalam IFC, tetap dapat dibuka, dan penyimpanan bundel memindahkan gambarnya keluar. Gambar disimpan apa adanya hingga 6 MB; yang lebih besar diperkecil lebih dulu, dan Anda diberi tahu. Program lain membuka model dan mengabaikan gambar rasternya. Gambar yang belum Anda skalakan dicantumkan di Masalah sebagai catatan.

## Di lembar potongan dan tampak

Gambar pada bidang vertikal (pilih {{ui:Vertikal}} di panel gambar dan klik dua ujung garis, atau tempatkan di atas garis potongan bernama) dicetak di tampilan lembar yang menghadapnya langsung. Potongan menampilkan gambar yang berdiri di atas garis potongnya, atau yang ditempatkan di atas garis potongan itu menurut nama. Tampak menampilkan setiap gambar vertikal yang bidangnya menghadap ke arahnya. Gambar digambar di bawah garis tampilan, pada skala tampilan, dipotong mengikuti tampilan, dan mempertahankan opasitasnya. Buka {{ui:Lembar…}} untuk melihatnya; PDF lembar membawanya sebagai gambar. Dilihat dari belakang, gambar raster tampak tercermin, seperti di 3D. Gambar yang disembunyikan tidak ikut.
