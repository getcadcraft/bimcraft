---
title: Unit split, VRF dan fan coil
summary: Tempatkan unit dalam ruangan dinding, kaset dan berduct, unit luar ruangan split tunggal dan VRF, sambungan refnet, serta fan coil 2-pipe atau 4-pipe, masing-masing dengan sambungan refrigeran, air, kondensat dan duct-nya, lalu gambar line set di antaranya dengan ukuran dari tabel yang dapat Anda ubah.
keywords: split, mini split, minisplit, multi split, vrf, vrv, aliran refrigeran variabel, pompa kalor, unit dalam ruangan, unit luar ruangan, unit kondensasi, dipasang di dinding, high wall, kaset, berduct, tersembunyi, fan coil, fcu, 2-pipe, 4-pipe, refnet, sambungan cabang, sambungan y, line set, lineset, refrigeran, pipa cair, pipa gas, pipa hisap, acr, tembaga, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Yang akan Anda lakukan

Tempatkan unit dari sistem split, multi-split atau VRF dan fan coil-nya di model, lalu hubungkan dengan line set: pipa cair dan pipa gas dari tembaga ACR, dipasang ke port unit. Unit bekerja seperti setiap bagian lain di [Peralatan MEP dengan port](topic:mep-equipment): bilah yang sama, Properti, port dan [sambungan](topic:mep-connections).

:::note
Ini adalah alat bantu drafting dan koordinasi. Unit berupa bentuk generik yang ukurannya mengikuti nilai yang Anda ketik, bukan produk pabrikan tertentu. Ukuran pipanya berasal dari tabel **nilai contoh tipikal** untuk peralatan R410A dan R32, bukan dari pabrikan mana pun: manual instalasi pabrikan unit yang menentukan ukuran sebenarnya, dan lintasan panjang atau beda tinggi yang besar akan mengubahnya. Ubah tabel, atau ketik ukurannya, agar sesuai dengan unit yang Anda gunakan.
:::

## Tempatkan unit

1. Aktifkan {{ui:Gambar}}, buka {{ui:Build}} dan pilih {{ui:Peralatan}}.
2. Pilih jenisnya dan atur nilainya:

| Jenis | Yang Anda atur | Port-nya |
|---|---|---|
| Unit split dalam ruangan, dinding | kapasitas, pipa cair dan gas, panjang, kedalaman, tinggi, ukuran kondensat | refrigeran cair dan gas, drain kondensat (di ujung kanan, dekat dinding) |
| Unit split dalam ruangan, kaset | kapasitas, pipa cair dan gas, panel, badan, tinggi, ukuran kondensat | refrigeran cair dan gas, drain kondensat (di satu sisi, dekat bagian atas) |
| Unit split dalam ruangan, berduct | kapasitas, pipa cair dan gas, panjang, lebar, tinggi, bukaan suplai dan retur, ukuran kondensat | duct suplai keluar, duct retur masuk, refrigeran cair dan gas, drain kondensat |
| Unit split luar ruangan | kapasitas, pipa cair dan gas, lebar, kedalaman, tinggi | refrigeran cair dan gas (di sisi kanan) |
| Unit luar ruangan VRF | kapasitas, pipa cair dan gas, lebar, kedalaman, tinggi | refrigeran cair dan gas (di depan, rendah) |
| Sambungan refnet | pipa cair atau gas, beban tiap cabang, pipa di tiap ujung | masukan, cabang A, cabang B |
| Unit fan coil | 2-pipe atau 4-pipe, panjang, lebar, tinggi, bukaan suplai dan retur, pipa dan sistem coil, pipa pemanas, ukuran kondensat | duct suplai keluar, duct retur masuk, coil masuk dan keluar, pemanas masuk dan keluar (4-pipe), drain kondensat |

3. Atur **Pada**: tinggi dasar unit di atas level. Dasar unit dinding adalah sisi bawahnya (sering 2100 mm); dasar kaset adalah bidang mukanya di plafon; dasar refnet adalah tinggi garis tengah pipanya.
4. Klik tempat unit ditempatkan ({{key:R}} memutarnya 90°).

**Kapasitas** adalah kapasitas pendingin nominal unit dalam kW, dengan Btu/h di sampingnya. Bila **Pipa cair** dan **Pipa gas** dibiarkan pada **Dari tabel**, sambungan unit mengambil ukuran dari tabel untuk kapasitas itu; pilih ukuran pipa untuk memakai ukuran unit Anda sendiri. Masukan refnet berukuran untuk kedua cabang bersama, sedangkan tiap cabang mengikuti bebannya sendiri.

Port refrigeran dapat dipakai dua arah (pompa kalor dapat beroperasi ke arah mana pun). Drain kondensat adalah ukuran pipa seperti drain lainnya.

## Gambar line set

1. Pilih dua bagian ({{key:Shift}}+klik yang kedua): unit luar ruangan dan unit dalam ruangan (split tunggal), atau unit luar ruangan dan refnet, refnet dan unit dalam ruangan, atau dua refnet (VRF).
2. Buka {{ui:Build}} dan pilih {{ui:Line set}}.

BimCraft menggambar lintasan cair dan gas di antara port-port yang bebas, keluar dari tiap port dan naik ke satu ketinggian yang sama, dengan pipa tembaga ACR (gulungan annealed sampai 1-5/8 in, pipa tarik di atasnya), sebagai satu langkah {{ui:Urungkan}}. Refnet hanya menerima jalurnya sendiri: masuk ke masukannya dari sisi luar ruangan dan keluar dari cabang menuju unit dalam ruangan. Tiap lintasan mengikuti ukuran ujung hilirnya (unit dalam ruangan, atau masukan refnet); bila port ujung lainnya berukuran lain, {{ui:Periksa sambungan}} mencantumkannya: di situlah reducer dipasang. Dua unit dalam ruangan memerlukan refnet di antaranya.

Pindahkan lintasan setelahnya seperti lintasan pipa lainnya; ujung-ujungnya tetap berada di port. Lintasan antar-level digambar dengan {{ui:Pipa}}: pipa yang dimulai dari port refrigeran mengambil sistemnya, pipa tembaga ACR, dan ukurannya.

## Ubah tabel line set

Buka {{ui:Build}} dan pilih {{ui:Ukuran line set}}. Tiap baris menyatakan: sampai kapasitas ini (kW), pipa cair ini dan pipa gas ini.

| Sampai | Cair | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Ini adalah nilai awal yang tipikal. Ubah baris, tambah atau hapus baris, lalu pilih {{ui:Simpan}}: tabel disimpan di dalam model, sehingga semua orang yang bekerja pada file itu menggunakannya, dan {{ui:Urungkan}} mengembalikannya. {{ui:Pakai nilai tipikal}} mengembalikan tabel awal. Bagian yang sudah ditempatkan tetap memakai port-nya sampai Anda mengubahnya.

## Di file IFC

Unit dalam ruangan dan luar ruangan dari sistem split dan VRF adalah IfcUnitaryEquipment dengan tipe SPLITSYSTEM, dengan tipe objek yang menjelaskan jenisnya ("Unit split dalam ruangan, dipasang di dinding", "Unit split dalam ruangan, kaset plafon", "Unit split dalam ruangan, berduct", "Unit split luar ruangan", "Unit luar ruangan VRF"). Fan coil adalah IfcUnitaryEquipment dengan tipe AIRHANDLER dan tipe objek "Fan coil unit": IFC4 tidak memiliki tipe fan coil, dan kipas, coil serta filter untuk satu ruangan itulah yang digambarkan AIRHANDLER. Sambungan refnet adalah IfcPipeFitting dengan tipe JUNCTION ("Refnet joint"). File IFC2X3 menerima IfcEnergyConversionDevice dan IfcFlowFitting dengan tipe yang sesuai.

Port dan lintasan refrigeran berada dalam sistem REFRIGERATION (satu untuk pipa cair, satu untuk pipa gas), sedangkan kondensat berada dalam sistem DRAINAGE. Lintasan ACR diberi nama menurut diameter luarnya. Tabel line set adalah set properti CadCraft_HvacLineSets pada proyek.

Lihat juga [Peralatan MEP dengan port](topic:mep-equipment), [Hubungkan pipa dan duct ke peralatan](topic:mep-connections) dan [Pipa dan duct](topic:pipes-and-ducts).
