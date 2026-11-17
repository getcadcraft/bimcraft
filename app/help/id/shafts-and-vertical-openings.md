---
title: Shaft dan bukaan menembus lantai
summary: Shaft adalah satu garis batas yang memotong setiap lantai, plafon, dan atap di antara dua level. Bukaan vertikal memotong salah satunya. Bukaan dinding memotong dinding.
keywords: shaft, shaft lift, shaft elevator, bukaan tangga, riser, bukaan vertikal, bukaan lantai, bukaan plafon, bukaan atap, bukaan skylight, lubang di lantai, bukaan dinding, IfcOpeningElement, pengurangan, luas bersih
from: 8e9e1641
---

## Yang akan Anda lakukan

Potong shaft lift menembus bangunan dengan satu sketsa, potong lubang di satu lantai, dan baca apa yang dikurangkan dari luas.

## Lokasi alat

- Tata letak pita: {{ui:Arsitektur}} › **Bukaan** › {{ui:Shaft}}, {{ui:Bukaan vertikal}}, dan {{ui:Bukaan dinding}}.
- Tata letak klasik: bilah Gambar › menu {{ui:Ruang}} (Shaft, Bukaan vertikal) dan › menu {{ui:Dinding}} (Bukaan dinding).

## Shaft

1. Buka denah lantai dari level tempat shaft dimulai. Pilih {{ui:Shaft}}.
2. Di baris, pilih {{ui:Level dasar}} dan {{ui:Level atas}}, serta offset jika shaft dimulai atau berakhir di atas atau di bawahnya.
3. Klik sudut-sudut garis batas. Klik sudut pertama lagi, klik ganda, atau tekan Enter untuk selesai.
4. Setiap lantai, plafon, dan atap di antara kedua ketinggian itu akan terpotong. Baris status menyebutkan jumlahnya.

Shaft adalah satu benda. Pilih garis batasnya di level mana pun yang dilewatinya: Properti memuat nama, level, dan offset-nya, apa yang dipotong, dan luas yang dikeluarkan. Jika diubah, setiap bukaan ikut berubah. Jika dihapus, setiap bukaan ikut hilang. Setiap aksi adalah satu langkah urungkan.

Shaft terus memotong: lantai yang dibuat kemudian di antara level-levelnya akan terpotong tanpa diminta, dan lantai yang Anda hapus akan dibebaskan.

Lantai tempat shaft berdiri tidak terpotong (bagian atasnya adalah dasar). Beri dasar offset negatif untuk memotongnya juga. Beri bagian atas offset positif agar menembus atap.

## Bukaan vertikal

1. Pilih {{ui:Bukaan vertikal}}. Di baris, pilih apa yang akan dipotong: lantai, plafon, atau atap.
2. Klik sudut-sudut garis batas dan selesaikan seperti di atas.
3. Lantai, plafon, atau atap pada level ini yang berada di bawah garis batas akan terpotong. Bukaan itu menjadi bagian dari satu elemen tersebut: jika lantainya dihapus, bukaannya ikut hilang.

## Bukaan dinding

{{ui:Bukaan dinding}} adalah alat dari [Membentuk dinding](topic:wall-shape): klik dinding pada denah, atau dua sudut pada mukanya dalam 3D.

## Kuantitas

Menurut aturan pengukuran untuk lantai, luas bersih sebuah elemen adalah luas kotornya dikurangi bagian yang dipotong darinya. Shaft atau bukaan vertikal merupakan pengurangan pada setiap lantai dan plafon yang dipotongnya; jadwal Lantai dan Finishing serta kuantitas IFC menampilkan angka yang sama. Pada atap, pengurangannya adalah luas permukaan atap: luas denah dibagi dengan kosinus kemiringan.

Garis batas yang melewati tepi hanya mengurangi bagian yang berada di atas elemen.

## Jika tidak ada yang terpotong

Shaft yang tidak menemui apa pun tetap dibuat, dan baris status menyatakannya: shaft akan memotong apa pun yang dibangun di sana nanti. Bukaan vertikal membutuhkan sesuatu di bawahnya; jika tidak ada, baris status menyatakannya dan tidak ada yang dibuat.

## Dalam IFC

Setiap potongan adalah IfcOpeningElement dengan IfcRelVoidsElement ke elemen yang dipotong, sehingga program IFC apa pun dapat menampilkan lubangnya. Atap dipotong muka demi muka. Shaft itu sendiri adalah IfcGroup dari bukaannya.

## Belum dibuat

- Garis batas melengkung.
- Dinding shaft: gambar dengan alat Dinding.
- Menyunting garis batas dengan menyeret sudutnya (ubah di Properti, atau hapus dan sketsa ulang).
- Properti lantai yang digambar hanya menampilkan luasnya dikurangi bukaannya sendiri; jadwal dan kuantitas IFC menyertakan shaft.

Lihat juga [Ruang dan pemisah ruang](topic:rooms-and-separators).
