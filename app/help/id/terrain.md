---
title: Permukaan tanah tapak, pad bangunan, dan perkerasan
summary: Masukkan permukaan tanah ke model dari titik survei, kontur, hasil pemindaian LAS / LAZ, GeoTIFF, permukaan LandXML (milik CivilCraft), atau beberapa elevasi titik; potong pad bangunan rumah beserta kemiringannya dan galian / timbunannya; letakkan jalan masuk, jalur pejalan kaki, dan teras di atasnya; serahkan ke CivilCraft sebagai LandXML.
keywords: permukaan tanah, tanah, tapak, topografi, survei, titik, PNEZD, kontur, LAS, LAZ, LiDAR, GeoTIFF, DEM, elevasi, elevasi titik, kelandaian, grading, pad, pad bangunan, galian, timbunan, pekerjaan tanah, daylight, kemiringan, jalan masuk, jalan, teras, perkerasan, LandXML, CivilCraft
from: 208298d6
---

## Yang akan Anda lakukan

Tempatkan rumah di tapaknya. Permukaan tanah menjadi bagian dari model: ditampilkan dalam 3D, dipotong pada potongan dan tampak, dengan kontur pada denah. Sebuah pad bangunan dipotong ke dalamnya di bawah rumah, jalan masuk dan jalur pejalan kaki mengikutinya, dan footing turun bersamanya.

## Memasukkan permukaan tanah

1. Buka {{ui:Build}} lalu pilih {{ui:Permukaan tanah}}.
2. Salah satu dari berikut:
   - **Buka file survei…**: titik survei (PNEZD, PENZD, atau easting, northing, elevasi biasa; dipisahkan koma, tab, atau spasi), kontur dalam DXF atau DWG (polyline pada elevasinya, polyline 3D), hasil pemindaian LAS atau LAZ (titik tanah dipertahankan, dijarangkan sekitar satu per meter persegi), GeoTIFF atau kisi elevasi ASCII, atau permukaan **LandXML** seperti yang diekspor CivilCraft (titik dan segitiga miliknya dipertahankan; jika file berisi beberapa permukaan, BimCraft menanyakan mana yang merupakan tanah; satuannya berasal dari file). Pilih satuan file lebih dulu (LandXML menyebut satuannya sendiri).
   - Atau ketik **Elevasi titik** (dihitung dari lantai level ini, jadi `-1'` berarti 1 ft di bawahnya) lalu klik titik-titik pada denah, ubah elevasinya dan klik titik lain, kemudian **Buat permukaan tanah**. Tiga titik sudah cukup untuk memulai.

Koordinat survei yang jauh dari model (state plane, UTM) dipindahkan ke rumah, dan elevasinya diatur agar tanah di lokasi rumah berada sekitar 8" di bawah lantai pertama. **Naikkan permukaan tanah** di **Properti** mengoreksinya dengan besaran berapa pun.

## Pad bangunan

1. Pilih {{ui:Pad bangunan}}.
2. Atur **Margin** di sekitar rumah, seberapa jauh **pad berada di bawah lantai** (8" di bawah pelat lantai, lebih dalam untuk crawlspace), dan **Kemiringan** ke permukaan tanah yang ada (`2:1` = dua ft ke luar untuk setiap satu ft naik atau turun).
3. Arahkan ke bagian dalam rumah lalu klik.

Permukaan tanah diratakan di bawah rumah sampai ke margin, lalu naik ke lereng bukit (galian) dan turun ke sisi yang rendah (timbunan) hingga bertemu permukaan tanah yang ada. **Properti** dari permukaan tanah dan dari pad memberikan volume galian dan timbunan. Jika dinding dipindahkan, pad ikut mengikuti.

## Jalan masuk, jalur pejalan kaki, dan teras

Pilih {{ui:Perkerasan}}, pilih **Jalan**, **Jalan masuk**, atau **Teras**, lalu klik sudut-sudutnya. Klik sudut pertama lagi, klik dua kali, atau tekan {{key:Enter}} untuk selesai. Perkerasan mengikuti grading akhir; ubah jenis atau tebalnya di **Properti**.

## Footing mengikuti grading

Dengan permukaan tanah ada di model, dinding pondasi dan footing crawlspace ikut mengikutinya: di sepanjang setiap dinding, footing tetap berada sedalam kedalamannya di bawah tanah di luar, dan bertingkat dalam langkah 8" penuh di tempat tanah turun (lihat [Pondasi di bawah dinding](topic:foundations)).

## Serahkan ke CivilCraft

**LandXML untuk CivilCraft** (di baris Permukaan tanah, atau di **Properti** permukaan tanah) mengunduh tanah yang ada dan grading akhir sebagai file LandXML. Buka di CivilCraft untuk grading, drainase, dan pekerjaan tanah yang sesungguhnya.

## Perlu diketahui

- Permukaan tanah membutuhkan model IFC4, seperti setiap bangunan baru.
- Kontur tampil pada denah level permukaan tanah dengan interval yang diatur di **Properti** permukaan tanah; setiap kelima lebih tebal.
- Permukaan tanah disimpan sebagai elemen terrain IFC (permukaan triangulasi yang tertutup, sehingga potongan dapat memotongnya); pad dan perkerasan disimpan bersamanya. Hapus permukaan tanah untuk mulai lagi — pad dan perkerasannya ikut terhapus.
