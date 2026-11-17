---
title: Kirim pipa ke program tegangan atau isometrik, dan membacanya kembali (PCF)
summary: Tulis lintasan pipa model sebagai file komponen perpipaan PCF, atau baca file PCF dari program tegangan pipa atau isometrik dan gambar pipanya sebagai lintasan.
keywords: pcf, file komponen perpipaan, tegangan pipa, isometrik, ekspor, impor, perpipaan, pabrik, pipa baja, pindahkan pekerjaan, perangkat lunak lain
from: 24f91355
---

## Yang akan Anda lakukan

PCF adalah file teks biasa yang dibaca dan ditulis oleh program tegangan pipa dan isometrik. File ini mendaftar setiap komponen dari setiap jalur pipa beserta titik ujung dan diameter dalamnya.

## Ekspor

1. Pilih alat Pipe. Baris opsi menampilkan **Ekspor PCF**.
2. Klik tombol itu. Setiap lintasan pipa dalam model ditulis: pipa lurus, elbow (belokan 90 derajat, selain itu bend), tee dengan titik percabangannya, reducer, dan valve.
3. File memakai milimeter. Diameter dalam adalah diameter nominal dalam milimeter. Titik tengah elbow adalah sudutnya, tempat kedua kakinya bertemu.

PCF ditulis untuk pipa baja butt-weld. Lintasan dengan material lain tetap ditulis, dengan kunci komponen baja, dan dicatat di panel Masalah.

## Impor

1. Pilih alat Pipe dan klik **Impor PCF…**, lalu pilih file.
2. Pipa lurus hingga elbow, bend, valve, dan flens menjadi satu lintasan pada level saat ini. Perubahan ukuran memulai lintasan baru. Cabang tee menjadi lintasannya sendiri yang dimulai dari pusat tee.
3. Model membuat fitting-nya sendiri. Reducer dan tee tidak disalin: keduanya muncul di tempat lintasan berukuran berbeda, atau sebuah cabang, bertemu.

:::note
Ketinggian dalam file dibaca sebagai ketinggian di atas level saat ini. Beban, penahan, dan analisis tegangan itu sendiri tidak ada dalam file PCF dan tidak ikut terbawa.
:::

## Periksa apa yang terbawa

- Panjang total pipa per jalur seharusnya sama dengan sumbernya.
- Panel Masalah mendaftar, masing-masing sekali, elbow yang titik tengahnya tidak berjarak sama dari kedua ujungnya, pipa tanpa panjang, dan diameter dalam yang bukan ukuran standar.

## Pipa yang sudah ada dalam file IFC

Ketika file IFC terbuka, **Ekspor PCF** juga menulis segmen pipa, fitting, dan valve-nya sendiri, di samping lintasan yang Anda gambar. Segmen mendapat ujungnya dari port-portnya, atau dari ujung badannya. Fitting tanpa port dibiarkan keluar dan panel Masalah menyatakannya. Anda dapat mengekspor dari IFC saja ketika model tidak memiliki lintasan yang digambar.

Saat impor, penyangga, olet, flens, gasket, dan tutup dalam file tidak digambar. Panel Masalah mendaftar berapa banyak masing-masing yang dibiarkan keluar, sehingga tidak ada yang hilang diam-diam.
