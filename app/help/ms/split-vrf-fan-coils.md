---
title: Unit split, VRF dan fan coil
summary: Letakkan unit dalaman jenis dinding, kaset dan saluran, unit luar split dan VRF, sambungan refnet serta fan coil 2-paip atau 4-paip, setiap satu dengan sambungan penyejuk, air, kondensat dan saluran, dan lukis set talian antaranya, bersaiz mengikut jadual yang boleh anda ubah.
keywords: split, mini split, minisplit, multi split, vrf, vrv, aliran penyejuk berubah-ubah, pam haba, unit dalaman, unit luar, unit pemeluwapan, dipasang di dinding, dinding tinggi, kaset, saluran, tersembunyi, fan coil, fcu, 2-paip, 4-paip, refnet, sambungan cawangan, sambungan Y, set talian, lineset, penyejuk, talian cecair, talian gas, talian sedutan, acr, kuprum, kondensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Apa yang anda akan lakukan

Letakkan unit sistem split, multi-split atau VRF serta fan coil dalam model, kemudian sambungkannya dengan set talian: talian cecair dan talian gas dalam kuprum ACR, dipasang pada port unit. Unit ini berfungsi seperti setiap bahagian lain dalam [Peralatan MEP dengan port](topic:mep-equipment): bar yang sama, Sifat, port dan [sambungan](topic:mep-connections).

:::note
Ini ialah alat lukisan dan penyelarasan. Unit ialah bentuk generik yang saiznya ditentukan oleh nilai yang anda taip, bukan produk pengeluar tertentu. Saiz tiubnya diambil daripada jadual **nilai tipikal contoh** untuk peralatan R410A dan R32, bukan daripada mana-mana pengeluar: manual pemasangan pengeluar unit yang menentukan saiz sebenar, dan laluan panjang atau beza ketinggian yang besar akan mengubahnya. Ubah jadual, atau taip saiznya, supaya sepadan dengan unit yang anda gunakan.
:::

## Letak unit

1. Hidupkan {{ui:Lukis}}, buka {{ui:Binaan}} dan pilih {{ui:Peralatan}}.
2. Pilih jenis dan tetapkan nilainya:

| Jenis | Anda tetapkan | Portnya |
|---|---|---|
| Unit dalaman split, dinding | kapasiti, talian cecair dan gas, panjang, kedalaman, ketinggian, saiz kondensat | penyejuk cecair dan gas, saliran kondensat (di hujung kanan, berhampiran dinding) |
| Unit dalaman split, kaset | kapasiti, talian cecair dan gas, panel, badan, ketinggian, saiz kondensat | penyejuk cecair dan gas, saliran kondensat (di satu sisi, berhampiran bahagian atas) |
| Unit dalaman split, saluran | kapasiti, talian cecair dan gas, panjang, lebar, ketinggian, bukaan bekalan dan pulangan, saiz kondensat | saluran bekalan keluar, saluran pulangan masuk, penyejuk cecair dan gas, saliran kondensat |
| Unit luar split | kapasiti, talian cecair dan gas, lebar, kedalaman, ketinggian | penyejuk cecair dan gas (di sisi kanan) |
| Unit luar VRF | kapasiti, talian cecair dan gas, lebar, kedalaman, ketinggian | penyejuk cecair dan gas (di hadapan, rendah) |
| Sambungan refnet | talian cecair atau gas, beban pada setiap cawangan, tiub di setiap hujung | masukan, cawangan A, cawangan B |
| Unit fan coil | 2-paip atau 4-paip, panjang, lebar, ketinggian, bukaan bekalan dan pulangan, paip dan sistem gegelung, paip pemanasan, saiz kondensat | saluran bekalan keluar, saluran pulangan masuk, gegelung masuk dan keluar, pemanasan masuk dan keluar (4-paip), saliran kondensat |

3. Tetapkan **Pada**: ketinggian tapak unit di atas aras. Tapak unit dinding ialah bahagian bawahnya (selalunya 2100 mm); bagi kaset ialah mukanya di siling; bagi refnet ialah ketinggian garis tengah parannya.
4. Klik di tempat ia akan diletakkan ({{key:R}} memutarkannya 90°).

**Kapasiti** ialah kapasiti penyejukan ternilai unit dalam kW, dengan Btu/h di sebelahnya. Dengan **Talian cecair** dan **Talian gas** dibiarkan pada **Dari jadual**, sambungan unit mengambil saiz jadual untuk kapasiti itu; pilih saiz tiub untuk menggunakan saiz unit anda sendiri. Masukan refnet disaiz untuk kedua-dua cawangan bersama, dan setiap cawangan untuk bebannya sendiri.

Port penyejuk berfungsi dua arah (pam haba boleh beroperasi dalam kedua-dua arah). Saliran kondensat ialah saiz paip seperti mana-mana saliran lain.

## Lukis set talian

1. Pilih dua bahagian ({{key:Shift}}+klik bahagian kedua): unit luar dan unit dalaman (split tunggal), atau unit luar dan refnet, refnet dan unit dalaman, atau dua refnet (VRF).
2. Buka {{ui:Binaan}} dan pilih {{ui:Set talian}}.

BimCraft melukis laluan cecair dan gas antara port bebas mereka, keluar dari setiap port dan naik ke ketinggian sepunya, dalam kuprum ACR (gegelung yang disepuhlindap sehingga 1-5/8 in, tiub yang ditarik di atas itu), sebagai satu langkah {{ui:Buat asal}}. Refnet hanya menerima talian sendiri: masuk ke masukannya dari bahagian luar dan keluar dari cawangan ke arah unit dalaman. Setiap laluan mengambil saiz hujung hilirnya (unit dalaman, atau masukan refnet); jika port hujung yang lain bersaiz lain, {{ui:Semak sambungan}} menyenaraikannya: di situlah penurun saiz diperlukan. Dua unit dalaman memerlukan refnet di antara keduanya.

Alihkan laluan itu kemudian seperti laluan paip biasa; hujungnya kekal pada port. Laluan antara aras dilukis dengan {{ui:Paip}}: paip yang bermula pada port penyejuk mengambil sistemnya, kuprum ACR dan saiznya.

## Ubah jadual set talian

Buka {{ui:Binaan}} dan pilih {{ui:Saiz set talian}}. Setiap baris menyatakan: sehingga kapasiti ini (kW), tiub cecair ini dan tiub gas ini.

| Sehingga | Cecair | Gas |
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

Ini ialah nilai permulaan dan tipikal. Ubah satu baris, tambah atau alih keluar baris dan pilih {{ui:Simpan}}: jadual disimpan dalam model, jadi semua yang bekerja pada fail itu menggunakannya, dan {{ui:Buat asal}} mengembalikannya. {{ui:Guna nilai tipikal}} mengembalikan jadual permulaan. Bahagian yang sudah diletakkan mengekalkan portnya sehingga anda mengubahnya.

## Dalam fail IFC

Unit dalaman dan luar sistem split dan VRF ialah IfcUnitaryEquipment jenis SPLITSYSTEM, dengan jenis objek menyatakan yang mana ("Unit dalaman split, dipasang di dinding", "Unit dalaman split, kaset siling", "Unit dalaman split, saluran", "Unit luar split", "Unit luar VRF"). Fan coil ialah IfcUnitaryEquipment jenis AIRHANDLER dengan jenis objek "Unit fan coil": IFC4 tidak mempunyai jenis fan coil, dan kipas, gegelung serta penapis untuk satu bilik ialah apa yang digambarkan oleh AIRHANDLER. Sambungan refnet ialah IfcPipeFitting jenis JUNCTION ("Sambungan refnet"). Fail IFC2X3 menerima IfcEnergyConversionDevice dan IfcFlowFitting dengan jenis yang sepadan.

Port dan laluan penyejuk berada dalam sistem REFRIGERATION (satu untuk talian cecair, satu untuk talian gas), kondensat dalam sistem DRAINAGE. Laluan ACR dinamakan mengikut diameter luar. Jadual set talian ialah set sifat CadCraft_HvacLineSets pada projek.

Lihat juga [Peralatan MEP dengan port](topic:mep-equipment), [Sambung paip dan saluran ke peralatan](topic:mep-connections) dan [Paip dan saluran](topic:pipes-and-ducts).
