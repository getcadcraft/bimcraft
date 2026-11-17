---
title: Family dan ukurannya
summary: Pintu, jendela, dan furnitur hadir dalam family. Setiap ukuran family menjadi satu tipe di file IFC, sehingga daftar tipe tetap pendek di BimCraft sementara program lain membaca tipe biasa.
keywords: family, families, tipe, tipe, ukuran, ukuran, tipe pintu, tipe jendela, furnitur, meja, rak, lemari, ukuran baru, duplikat, tempatkan family, file family, ccfamily, pustaka ifc, pustaka proyek, grup, visibilitas, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Apa itu family

Family adalah satu jenis benda dalam beberapa ukuran: sebuah pintu ayun tunggal yang tersedia dengan lebar 32, 36, dan 42 inci, atau meja yang tersedia panjang dan pendek. Di BimCraft Anda melihat family sekali, dengan ukurannya di bawahnya, alih-alih daftar tipe yang panjang.

IFC tidak memiliki family. Di file, setiap ukuran adalah tipe biasa (tipe pintu, tipe jendela, tipe furnitur…), dan family adalah grup yang mendaftar ukurannya. Program BIM lain membaca tipe dan grup itu apa adanya; BimCraft membaca kembali family dari keduanya.

## Di mana menemukannya

- Grup **Family** di penjelajah proyek mendaftar family dalam model ini, berikut jumlah ukuran tiap family dan berapa yang ditempatkan. Di bawahnya ada **Family starter**: pintu dan jendela dari alat Pintu dan Jendela, serta meja, unit rak, dan lemari dasar.
- {{ui:Build}} › {{ui:Families…}} menampilkan daftar yang sama di sebuah jendela.
- Klik sebuah family untuk membukanya: ukurannya, nilai setiap ukuran, dan berapa elemen yang memakai setiap ukuran.

## Pintu dan jendela

Alat Pintu dan Jendela mendaftar family jenis itu, lalu **daftar ukuran** di sampingnya. Pilih satu ukuran, atau ketik **W** dan **H**: lebar dan tinggi yang belum dimiliki ukuran mana pun menjadi ukuran baru dari family saat Anda menempatkan pintu. Pintu dengan ukuran yang sama berbagi satu tipe.

Di {{ui:Properties}}, pintu atau jendela yang dipilih menampilkan **Family** dan **Ukuran**-nya. Pilih ukuran lain dari daftar, atau ketik lebar atau tinggi baru. {{ui:Open the family}} membuka family yang dimilikinya.

Bingkai setiap pintu atau jendela mengikuti ketebalan dinding tempat ia berada, seperti sebelumnya dengan family. Tipe ukurannya juga menyimpan pintu yang digambar pada dinding 140 mm, untuk program yang membaca tipe.

## Ukuran baru dari family ini

1. Buka family.
2. Di bawah **Ukuran baru dari family ini**, ketik nilainya (Width, Height, dan parameter lain dari family) dan, jika Anda mau, sebuah nama. Tanpa nama, ukuran diberi nama dari nilainya.
3. Klik {{ui:Make the size}}.

Dua ukuran tidak boleh memiliki nilai yang sama. **Rename** mengganti nama ukuran; **Remove** menghapus ukuran yang tidak dipakai siapa pun; **Select** memilih elemen dengan ukuran tersebut.

## Tempatkan furnitur

1. {{ui:Build}} › {{ui:Place family}}, atau {{ui:Place}} di jendela family.
2. Di bilah, pilih family dan ukurannya.
3. Klik pada denah untuk menempatkannya di lantai. Tekan {{key:R}} untuk memutarnya 90° sebelum Anda mengklik. {{key:Esc}} untuk berhenti.

{{ui:Properties}} benda yang sudah ditempatkan menampilkan ukurannya, lokasinya, dan seberapa jauh ia diputar; {{key:Delete}} menghapusnya. Setiap benda dengan ukuran yang sama memakai bentuk ukuran tersebut, sehingga mengubah family akan mengubah semuanya.

## Ukuran dari tabel

{{ui:Sizes from a table…}} di jendela family membaca file CSV (koma, titik koma, atau tab). Baris pertama menamai kolom: nama atau label parameter, dan opsional `Name`. Panjang dalam milimeter kecuali Anda menulis satuan (`1.2 m`, `36 in`). Kolom Yes / No menerima yes, no, true, false, 1, atau 0, dan parameter tanpa kolom mempertahankan defaultnya. Setiap baris menjadi satu ukuran, dalam satu langkah yang dapat Anda urungkan; ukuran yang sudah ada dilewati. Satu baris yang tidak terbaca, atau yang tidak dapat digambar family, menolak seluruh tabel dan menyebut nomor barisnya. Maksimum 200 baris dan 1 MB. {{ui:Save the sizes as a table}} menulis tabel yang sama kembali.

## Diatur pada setiap elemen

Parameter yang ditandai **Per elemen** di editor (Yes / No yang menambahkan transom, label, atau material) bukan bagian dari ukuran: dua pintu dengan ukuran yang sama bisa berbeda. Pilih elemennya dan **Properti** menampilkan parameter ini; ubah salah satunya dan elemen itu digambar ulang dengan bentuknya sendiri (furnitur dan perlengkapan mendapat bentuk tersendiri, pintu dan jendela dibuat ulang di dindingnya). Atur semuanya kembali ke default dan elemen itu kembali ke bentuk ukurannya.

## Tingkat detail

{{ui:Build}} › {{ui:Families…}} › **Tingkat detail** menentukan, untuk setiap family dalam model, apa yang disimpan di solid dan digambar di simbol denah: **Halus** menyimpan semuanya, **Sedang** dan **Kasar** membuang bagian yang oleh editor ditandai sebagai lebih halus (file lebih kecil, tampilan lebih cepat). **Otomatis** menyimpan semuanya dan membiarkan skala lembar memilih: 1:50 dan lebih besar halus, 1:100 sedang, 1:200 dan lebih kecil kasar. Satu langkah yang dapat Anda urungkan.

## Duplikat family

Anda tidak harus mulai dari nol. {{ui:Duplicate}} menyalin family beserta parameter, solid, dan ukurannya di bawah nama baru. Ubah salinannya di editor; aslinya tetap seperti semula.

## File family

- {{ui:Save the family file}} menyimpan `.ccfamily.json`: parameter, solid, dan ukuran family. Bukalah di model lain dengan {{ui:Open a family file…}} di grup Family.
- {{ui:Save as IFC}} menyimpan family sebagai file IFC kecil: tipe-tipe ukurannya dan grupnya, yang dinyatakan oleh pustaka proyek IFC. Program lain membukanya sebagai sekumpulan tipe; BimCraft membukanya kembali sebagai family.

File family yang dibuka di sini dibaca sebagai data dan diperiksa sebelum ada yang ditulis. Family yang kuncinya sudah ada di model masuk sebagai family terpisah. Family yang memuat family lain (lihat Family di dalamnya, di bantuan editor) membawa serta family tersebut: file mendaftarnya, dan model menyimpan yang sudah dimilikinya.

## Family di Pustaka

Buka {{ui:Families…}} dan pilih {{ui:From the Library…}} untuk melihat family yang telah dibagikan di Pustaka. {{ui:Add to this project}} membacanya seperti file family: BimCraft memeriksa setiap kolom sebelum membuat apa pun, family masuk sebagai family tersendiri, dan terbuka di editor. Menambahkannya adalah satu langkah yang dapat diurungkan. Untuk membagikan milik Anda sendiri, gunakan {{ui:Save all as a library}} dan kirim file ke Pustaka (staf Pustaka menerbitkan file family dengan perintah, dan setiap family menjadi item tersendiri beserta ukurannya). Jika Pustaka tidak dapat dijangkau, daftar akan menyatakannya dan tidak ada yang berubah.

## Tipe dari program lain

Tipe yang dibuat program lain juga tampil di grup Family, dikelompokkan berdasarkan tebakan: menurut bagian nama elemen sebelum titik dua pertama, atau menurut nama tipe yang hanya berbeda pada angkanya. Jendela family menyatakan tebakan mana yang dipakai. Tipe-tipe ini didaftarkan dan elemennya dapat dipilih, tetapi tidak disunting di sini: tipe tersebut tidak memiliki resep family.

:::note
Pintu dan jendela starter digambar persis seperti sebelum ada family. File yang dibuat sebelum family terbuka tanpa perubahan: pintu dan jendelanya tampil di bawah family-nya dengan ukuran yang digunakan, dan berpindah ke ukuran tersendiri saat Anda pertama kali mengubahnya.
:::

Lihat juga [Sunting family](topic:family-editor) dan [Pintu dan jendela](topic:doors-and-windows).
