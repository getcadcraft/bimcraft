---
title: Georujukan dengan sebarang unjuran
summary: Beritahu BimCraft sistem peta mana koordinat model berada, daripada senarai EPSG penuh, mana-mana zon UTM, atau unjuran yang anda takrifkan sendiri, dan gunakannya untuk Lokasi, lapisan peta dan awan titik.
keywords: unjuran, sistem koordinat, crs, epsg, utm, zon utm, unjuran tersuai, proj4, rentetan proj, prj, wkt, georujukan, georujuk, penukaran peta, ifcprojectedcrs, unjuran saya, latitud, longitud, easting, northing, lambert, gauss-kruger, state plane, grid nasional
from: 6894c1f2
---

Sesetengah pelan dilukis pada sistem peta yang tiada dalam senarai pendek: zon UTM, grid nasional, atau unjuran yang seseorang tuliskan sebagai takrifan teks. {{ui:Ukur}} › {{ui:Sistem koordinat…}} membolehkan anda menyatakan sistem yang digunakan oleh model.

## Pilih sistem untuk model

1. Buka model, pilih {{ui:Ukur}}, kemudian {{ui:Sistem koordinat…}}.
2. Taip dalam kotak carian. Mana-mana berikut berfungsi:
   - nombor EPSG: `32633` atau `EPSG:2277`;
   - zon UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - perkataan daripada nama: `lambert 93`, `mga zone 56`, `texas central`;
   - takrifan unjuran: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, secara pilihan dengan nama di hadapan (`My grid = +proj=…`);
   - teks fail `.prj`, atau guna {{ui:Muat naik fail .prj…}}.
3. Pilih satu hasil, kemudian {{ui:Guna sistem ini}}.

Pilihan disimpan dalam model (set sifat dinamakan `CadCraft_CRS` pada projek), jadi ia dibuka semula bersama model. Simpan model untuk mengekalkannya. {{ui:Alih keluar daripada model}} kembali kepada apa yang dinyatakan oleh fail.

Jika takrifan anda memberikan koordinat yang sama dengan sistem EPSG yang tersenarai, BimCraft menyatakannya dan menggunakan kod itu; apabila beberapa sistem yang tersenarai berkongsi matematik yang sama, ia menamakan yang lain juga.

## Unjuran saya

Takrifan yang anda tampal atau `.prj` yang anda muat naik boleh disimpan dengan {{ui:Simpan dalam Unjuran saya}}. Senarai ini berada pada peranti ini (pelayar ini) dan ditawarkan kali seterusnya anda membuka pemilih.

## Apa yang menggunakannya

- {{ui:Ukur}} › {{ui:Lokasi}} menukar titik yang dipilih kepada latitud dan longitud melalui sistem model. Dahulu ia berhenti dengan nota apabila fail menamakan sistem petanya tanpa kod EPSG; dengan pilihan disimpan, ia memberikan jawapan.
- Lapisan peta di bawah model menggunakan sistem yang sama. Awan titik atau fail rupa bumi dalam sistem lain ditawarkan sistem model (lihat di bawah).
- {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Lokasi}} › {{ui:Pilih sistem lain…}} menetapkan apa yang {{ui:Lokasi}} turut laporkan: latitud dan longitud dalam mana-mana sistem geografi yang tersenarai, atau easting dan northing dalam mana-mana sistem berunjuran, selain sistem model itu sendiri.

## Model yang belum berada di peta

Jika fail tiada penukaran peta, memilih sistem membuka {{ui:Letakkan model ini pada peta}}. Anda juga boleh membukanya daripada {{ui:Ukur}} › {{ui:Asal peta…}}.

1. Berikan asal model sebagai easting dan northing dalam sistem itu, atau taip latitud dan longitud dan pilih {{ui:Tukar kepada eastings dan northings}}.
2. Berikan putaran ke utara grid (darjah, lawan arah jam; 0 bermakna paksi Y model menghala ke utara grid) dan ketinggian asal.
3. Skala bermula dengan perbezaan unit antara model dan peta (0.001 bagi model milimeter pada grid meter). Tukarkannya hanya untuk faktor gabungan darat-ke-grid.
4. Pilih {{ui:Letak pada peta}}. Satu langkah buat asal menulis IfcProjectedCRS dan IfcMapConversion (IFC4). Model itu sendiri tidak bergerak.

Fail IFC2X3 tidak mempunyai kedua-dua entiti itu. BimCraft menulis nombor yang sama dengan cara yang dibenarkan oleh standard itu: set sifat buildingSMART `ePSet_MapConversion` dan `ePSet_ProjectedCRS` pada projek, latitud dan longitud tapak, serta utara benar. Dialog menyatakannya. Simpan model untuk mengekalkannya.

## Model yang sudah berada di peta

Apabila fail sudah meletakkan dirinya pada peta dan anda memilih sistem lain, BimCraft bertanya:

- {{ui:Tukar hanya apa yang Lokasi laporkan}} mengekalkan georujukan fail itu sendiri dan menggunakan pilihan anda untuk {{ui:Lokasi}}, lapisan peta dan awan titik (nombor model kemudian dibaca sebagai berada dalam sistem baharu).
- {{ui:Alih model ke sistem ini}} menulis semula georujukan: asal melalui unjuran (easting, northing, ketinggian, putaran dan skala) dan IfcProjectedCRS (nama, datum, unjuran, zon, unit) ditulis semula, supaya IFC yang disimpan menyatakan sistem baharu. Tempat di bumi kekal sama: asal mengekalkan latitud dan longitudnya. Elemen dalam model tidak pernah berubah; hanya georujukan yang berubah.

Dialog menunjukkan asal lama dan baharu sebelum anda memilih. Berpindah ke sana dan kembali mengembalikan asal dalam lingkungan satu milimeter.

## Awan titik dan rupa bumi dalam sistem lain

Awan atau fail tinjauan membawa sistemnya sendiri (LAS, LAZ, E57, GeoTIFF) atau tiada. Apabila ia berbeza daripada model, BimCraft menawarkan {{ui:Unjurkan semula ke dalam sistem model}}. Titik dialihkan secara kelompok (dalam pekerja apabila banyak, supaya halaman kekal boleh digunakan), fail pada komputer anda tidak disentuh, dan baris status menyatakan apa yang dilakukan. Buka semula fail untuk kembali kepada sistemnya sendiri. Bagi awan yang sudah dibuka, {{ui:Unjurkan semula ke model…}} dalam bar awan melakukan perkara yang sama.

Jika fail tidak menamakan sebarang sistem, BimCraft bertanya {{ui:Fail ini berada dalam sistem yang mana?}}: pilih dengan {{ui:Pilih sistem…}} dan jawapannya diingati untuk fail itu pada peranti ini. {{ui:Kekalkan sistem fail itu sendiri}} membiarkan titik seperti sedia ada.

## Apabila sesuatu adalah anggaran

Masalah disenaraikan dalam dialog dan dalam panel Masalah, tidak sekali-kali secara senyap:

- Tempat di luar kawasan yang dibuat untuk sistem itu: nombornya berfungsi, tetapi herotan bertambah.
- Anjakan datum yang memerlukan fail grid (NADCON, NTv2 dan seumpamanya) tidak tersedia. Sistem pada datum berbeza dialihkan dengan anjakan tanpa grid yang disenaraikan oleh pendaftaran EPSG, dan hasilnya ialah anggaran kepada ketepatan yang dinyatakan, yang mesej itu berikan dalam meter.
- Titik yang tidak boleh diunjurkan ditinggalkan dan dikira; fail melebihi had saiz ditolak dengan had dinyatakan.

:::tip
Koordinat peta memerlukan penukaran peta. Fail tanpanya diletakkan pada peta dengan {{ui:Asal peta…}}.
:::

:::note
Beralih antara datum tanpa fail grid adalah baik dalam beberapa meter; hasil Lokasi menyatakan sejauh mana apabila katalog mengetahuinya.
:::
