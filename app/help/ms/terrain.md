---
title: Tanah tapak, pelantar bangunan dan turapan
summary: Bawa tanah ke dalam model daripada titik ukur, kontur, imbasan LAS / LAZ, GeoTIFF, permukaan LandXML (milik CivilCraft) atau beberapa aras titik; potong pelantar bangunan rumah dengan cerunnya serta potongan / tambakan; letakkan jalan masuk, laluan dan patio di atasnya; serahkannya kepada CivilCraft sebagai LandXML.
keywords: rupa bumi, tanah, tapak, topografi, ukur, titik, PNEZD, kontur, LAS, LAZ, LiDAR, GeoTIFF, DEM, aras, aras titik, kecerunan, pembentukan permukaan, pelantar, pelantar bangunan, potongan, tambakan, kerja tanah, persilangan cerun, cerun, jalan masuk, jalan, patio, turapan, LandXML, CivilCraft
from: 208298d6
---

## Apa yang anda akan lakukan

Letakkan rumah di tapaknya. Tanah menjadi sebahagian daripada model: dipaparkan dalam 3D, dipotong dalam keratan dan dongakan, dengan kontur pada pelan. Pelantar bangunan dipotong ke dalamnya di bawah rumah, jalan masuk dan laluan mengikutinya, dan asas turun bersamanya.

## Bawa tanah masuk

1. Buka {{ui:Binaan}} dan pilih {{ui:Rupa bumi}}.
2. Sama ada:
   - **Buka fail ukur…**: titik ukur (PNEZD, PENZD atau easting, northing, aras biasa; dipisahkan dengan koma, tab atau ruang), kontur dalam DXF atau DWG (polilgaris pada aras mereka, polilgaris 3D), imbasan LAS atau LAZ (titik tanah dikekalkan, dijarangkan kepada kira-kira satu setiap meter persegi), grid aras GeoTIFF atau ASCII, atau permukaan **LandXML** seperti yang dieksport CivilCraft (titik dan segitiganya sendiri dikekalkan; apabila fail mengandungi beberapa permukaan, BimCraft bertanya yang mana satu ialah tanah; unitnya diambil daripada fail). Pilih unit fail dahulu (LandXML menyatakan unitnya sendiri).
   - Atau taip **Aras titik** (daripada lantai tingkat ini, jadi `-1'` ialah satu kaki di bawahnya) dan klik titik pada pelan, tukar aras dan klik lagi, kemudian **Bina tanah**. Tiga titik sudah mencukupi untuk bermula.

Koordinat ukur yang jauh dari model (state plane, UTM) dialihkan ke rumah, dan aras ditetapkan supaya tanah di rumah berada kira-kira 8" di bawah tingkat pertama. **Naikkan tanah** dalam **Sifat** membetulkannya dengan sebarang jumlah.

## Pelantar bangunan

1. Pilih {{ui:Pelantar bangunan}}.
2. Tetapkan **Margin** di sekeliling rumah, sejauh mana **pelantar berada di bawah lantai** (8" di bawah papak, lebih dalam bagi ruang merangkak) dan **Cerun** keluar ke tanah sedia ada (`2:1` = dua kaki keluar bagi setiap kaki naik atau turun).
3. Tunjuk ke dalam rumah dan klik.

Tanah diratakan di bawah rumah dan keluar hingga margin, kemudian naik ke dalam lereng bukit (potongan) dan turun ke sisi rendah (tambakan) sehingga bertemu tanah sedia ada. **Sifat** tanah dan pelantar memberikan isipadu potongan dan tambakan. Alihkan dinding, dan pelantar akan mengikutinya.

## Jalan masuk, laluan dan patio

Pilih {{ui:Turapan}}, pilih **Jalan**, **Jalan masuk** atau **Patio**, dan klik bucu-bucunya. Klik bucu pertama sekali lagi, klik dua kali atau tekan {{key:Enter}} untuk selesai. Turapan mengikut gred siap; tukar jenis atau ketebalannya dalam **Sifat**.

## Asas turun mengikut gred

Dengan tanah dalam model, dinding batang dan asas ruang merangkak mengikutinya: di sepanjang setiap dinding, asas kekal pada kedalamannya di bawah tanah di luar, dan melangkah dalam langkah 8" penuh di tempat tanah menurun (lihat [Asas di bawah dinding](topic:foundations)).

## Serahkan kepada CivilCraft

**LandXML untuk CivilCraft** (dalam baris Rupa bumi, atau **Sifat** tanah) memuat turun tanah sedia ada dan gred siap sebagai fail LandXML. Buka dalam CivilCraft untuk penggredan, saliran dan kerja tanah sebenar.

## Perkara yang perlu diketahui

- Tanah memerlukan model IFC4, seperti setiap bangunan baharu.
- Kontur ditunjukkan pada pelan aras tanah pada selang yang ditetapkan dalam **Sifat** tanah; setiap kelima lebih tebal.
- Tanah disimpan sebagai elemen terain IFC (permukaan segi tiga tertutup, supaya keratan memotongnya); pelantar dan turapan disimpan bersamanya. Padam tanah untuk bermula semula: pelantar dan turapannya ikut terpadam.
