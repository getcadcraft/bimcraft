---
title: Keluarga dan saiznya
summary: Pintu, tingkap dan perabot datang dalam keluarga. Setiap saiz keluarga ialah satu jenis dalam fail IFC, jadi senarai jenis kekal pendek dalam BimCraft manakala program lain membaca jenis biasa.
keywords: keluarga, jenis, saiz, jenis pintu, jenis tingkap, perabot, jadual, rak, kabinet, saiz baharu, pendua, letak keluarga, fail keluarga, ccfamily, pustaka ifc, pustaka projek, kumpulan, keterlihatan, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Apa itu keluarga

Keluarga ialah satu jenis benda dalam beberapa saiz: pintu ayun tunggal yang datang 32, 36 dan 42 inci lebar, atau meja yang datang panjang dan pendek. Dalam BimCraft anda melihat keluarga sekali sahaja, dengan saiznya di bawahnya, dan bukannya senarai jenis yang panjang.

IFC tidak mempunyai keluarga. Dalam fail, setiap saiz ialah jenis biasa (jenis pintu, jenis tingkap, jenis perabot…), dan keluarga ialah kumpulan yang menyenaraikan saiznya. Program BIM lain membaca jenis dan kumpulan sebagaimana adanya; BimCraft membaca semula keluarga daripadanya.

## Tempat mencarinya

- Kumpulan **Keluarga** dalam pelayar projek menyenaraikan keluarga dalam model ini, dengan bilangan saiz setiap satu dan bilangan yang diletakkan. Di bawahnya ialah **Keluarga permulaan**: pintu dan tingkap bagi alat Pintu dan Tingkap, serta meja, unit rak dan kabinet asas.
- {{ui:Build}} › {{ui:Families…}} menunjukkan senarai yang sama dalam tetingkap.
- Klik keluarga untuk membukanya: saiznya, nilai setiap saiz, dan berapa banyak elemen menggunakan setiap satu.

## Pintu dan tingkap

Alat Pintu dan Tingkap menyenaraikan keluarga jenis itu, kemudian **senarai saiz** di sebelahnya. Pilih saiz, atau taip **W** dan **H**: lebar dan tinggi yang belum ada sebagai saiz akan menjadi saiz baharu bagi keluarga apabila anda meletakkan pintu. Pintu bersaiz sama berkongsi satu jenis.

Dalam {{ui:Properties}}, pintu atau tingkap yang dipilih menunjukkan **Keluarga** dan **Saiz**. Pilih saiz lain daripada senarai, atau taip lebar atau tinggi baharu. {{ui:Open the family}} membuka keluarga yang dimilikinya.

Bingkai setiap pintu atau tingkap mengikut ketebalan dindingnya sendiri, seperti sebelum ini bagi keluarga. Jenis saiz itu juga mengekalkan pintu yang dilukis dalam dinding 140 mm, untuk program yang membaca jenis.

## Saiz baharu daripada keluarga ini

1. Buka keluarga.
2. Di bawah **New size from this family**, taip nilainya (Lebar, Tinggi dan parameter lain keluarga) dan, jika mahu, nama. Tanpa nama, ia dinamakan mengikut nilainya.
3. Klik {{ui:Make the size}}.

Dua saiz tidak boleh mempunyai nilai yang sama. **Tukar nama** menukar nama saiz; **Alih keluar** membuang saiz yang tiada siapa gunakan; **Pilih** memilih elemen saiz itu.

## Letak perabot

1. {{ui:Build}} › {{ui:Place family}}, atau {{ui:Place}} dalam tetingkap keluarga.
2. Dalam bar, pilih keluarga dan saiznya.
3. Klik pada pelan untuk meletakkannya pada aras. Tekan {{key:R}} untuk memusingkannya 90° sebelum anda klik. {{key:Esc}} menghentikannya.

{{ui:Properties}} bagi benda yang diletakkan menunjukkan saizinya, kedudukannya dan sejauh mana ia dipusingkan; {{key:Delete}} mengalih keluarnya. Setiap benda bersaiz sama berkongsi bentuk saiz itu, jadi mengubah keluarga akan mengubah semuanya.

## Saiz daripada jadual

{{ui:Sizes from a table…}} dalam tetingkap keluarga membaca fail CSV (koma, koma bertitik atau tab). Baris pertama menamakan lajur: nama atau label parameter, dan secara pilihan `Name`. Panjang ialah milimeter melainkan anda menulis unit (`1.2 m`, `36 in`). Lajur Ya / Tidak menerima yes, no, true, false, 1 atau 0, dan parameter tanpa lajur mengekalkan nilai lalainya. Setiap baris menjadi saiz, dalam satu langkah yang boleh anda buat asal; saiz yang sudah ada akan dilangkau. Satu baris yang tidak dapat dibaca, atau yang keluarga tidak dapat lukiskan, menolak keseluruhan jadual dan menamakan barisnya. Paling banyak 200 baris dan 1 MB. {{ui:Save the sizes as a table}} menulis jadual yang sama semula.

## Tetapkan pada setiap elemen

Parameter yang ditandakan **Setiap elemen** dalam editor (Ya / Tidak yang menambah transom, label atau bahan) bukan sebahagian daripada saiz: dua pintu bersaiz sama boleh berbeza. Pilih elemen dan {{ui:Properties}} menunjukkan parameter ini; tukar satu dan elemen itu dilukis semula dengan bentuknya sendiri (perabot dan lengkapan mendapat bentuk tersendiri, pintu dan tingkap dibuat semula dalam dindingnya). Tetapkan semuanya kembali kepada nilai lalai dan ia akan kembali kepada bentuk saiznya.

## Tahap perincian

{{ui:Build}} › {{ui:Families…}} › **Tahap perincian** menetapkan, untuk setiap keluarga dalam model, apa yang disimpan dalam pepejal dan dilukis dalam simbol pelan: **Halus** menyimpan semuanya, **Sederhana** dan **Kasar** mengeluarkan bahagian yang ditandakan oleh editor sebagai lebih halus (fail lebih kecil, paparan lebih pantas). **Automatik** menyimpan semuanya dan membiarkan skala helaian memilih: 1:50 dan lebih besar halus, 1:100 sederhana, 1:200 dan lebih kecil kasar. Satu langkah yang boleh anda buat asal.

## Duplikasi keluarga

Anda tidak perlu bermula dari kosong. {{ui:Duplicate}} menyalin keluarga dengan parameter, pepejal dan saizinya di bawah nama baharu. Ubah salinan dalam editor; yang asal kekal seperti asalnya.

## Fail keluarga

- {{ui:Save the family file}} menyimpan `.ccfamily.json`: parameter, pepejal dan saiz keluarga. Bukanya dalam model lain dengan {{ui:Open a family file…}} dalam kumpulan Keluarga.
- {{ui:Save as IFC}} menyimpan keluarga sebagai fail IFC kecil: jenis saizinya dan kumpulannya, diisytiharkan oleh pustaka projek IFC. Program lain membukanya sebagai set jenis; BimCraft membukanya semula sebagai keluarga.

Fail keluarga yang dibuka di sini dibaca sebagai data dan disemak sebelum apa-apa ditulis. Keluarga yang kuncinya sudah ada dalam model dimasukkan sebagai keluarga berasingan. Keluarga yang memegang keluarga lain (lihat **Keluarga di dalam**, dalam bantuan editor) membawa mereka sekali: fail menyenaraikannya, dan model mengekalkan yang sudah dimilikinya.

## Keluarga dalam Pustaka

Buka {{ui:Families…}} dan pilih {{ui:From the Library…}} untuk melihat keluarga yang telah dikongsi dalam Pustaka. {{ui:Add to this project}} membaca satu keluarga seperti fail keluarga: BimCraft menyemak setiap medan sebelum ia mencipta apa-apa, keluarga dimasukkan sebagai keluarga tersendiri, dan ia dibuka dalam editor. Menambahnya ialah satu langkah buat asal. Untuk berkongsi milik anda, guna {{ui:Save all as a library}} dan hantar fail itu ke Pustaka (kakitangan Pustaka menerbitkan fail keluarga dengan arahan, dan setiap keluarga ialah item tersendiri dengan saizinya). Jika Pustaka tidak dapat dihubungi, senarai akan menyatakannya dan tiada apa berubah.

## Jenis program lain

Jenis yang dibuat oleh program lain juga ditunjukkan dalam kumpulan Keluarga, dikumpulkan mengikut tekaan: mengikut bahagian nama elemen sebelum titik dua pertama, atau jika tiada, mengikut nama jenis yang hanya berbeza pada nombornya. Tetingkap keluarga menyatakan tekaan yang digunakan. Ia disenaraikan dan anda boleh memilih elemennya, tetapi ia tidak disunting di sini: ia tidak mempunyai resipi keluarga.

:::note
Pintu dan tingkap permulaan dilukis tepat seperti sebelum keluarga wujud. Fail yang dibuat sebelum keluarga dibuka tanpa perubahan: pintu dan tingkapnya ditunjukkan di bawah keluarganya dengan saiz yang digunakan, dan berpindah ke saiz tersendiri kali pertama anda mengubahnya.
:::

Lihat juga [Sunting keluarga](topic:family-editor) dan [Pintu dan tingkap](topic:doors-and-windows).
