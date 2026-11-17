---
title: Peralatan MEP dengan port
summary: Tempatkan air handler, kipas, pompa, boiler, pemanas air, unit terminal, diffuser, grill, dan tangki generik yang diukur dengan nilai yang Anda ketik, masing-masing dengan sambungan pipa dan duct yang diikuti jalur lain.
keywords: mep, peralatan, air handler, ahu, kipas, kipas sejalur, pompa, boiler, pemanas air, unit terminal, vav, diffuser, grill, register, tangki, port, sambungan, nosel, ukuran leher, hvac, plambing, mekanikal, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Yang akan Anda lakukan

Tempatkan peralatan di ujung pipa dan duct Anda. Tiap bagian adalah bentuk generik yang diukur dengan nilai yang Anda ketik, dengan sambungannya sebagai **port**: di mana pipa atau duct bergabung dengannya, sistem apa, ke arah mana aliran, dan ukuran apa. Pipa dan duct yang digambar dari sebuah port mengambil ukuran dan sistemnya serta tetap terkunci padanya: lihat [Sambungkan pipa dan duct ke peralatan](topic:mep-connections).

:::note
Ini adalah alat bantu gambar dan koordinasi, diukur oleh insinyur. Peralatannya bukan produk pabrikan: tidak ada kapasitas, berat, atau ukuran sambungan pabrikan. Bawa model pabrikan dari program MEP Anda sebagai IFC jika Anda memerlukannya.
:::

## Tempatkan sebuah bagian

1. Aktifkan {{ui:Gambar}}, buka {{ui:Build}}, dan pilih {{ui:Peralatan}}.
2. Di bilah, pilih jenisnya dan ketik ukurannya. Tiap jenis meminta ukurannya sendiri:

| Jenis | Anda ketik | Port-portnya |
|---|---|---|
| Air handler | panjang, lebar, tinggi; bukaan suplai dan balik; ukuran dan sistem pipa koil; ukuran kondensat | duct suplai keluar, duct balik masuk, koil masuk dan keluar, saluran kondensat |
| Kipas sejalur | diameter, panjang, sistem | duct masuk dan keluar |
| Pompa | ukuran pipa, sistem | masuk dan keluar |
| Boiler | panjang, lebar, tinggi, ukuran pipa, ukuran gas, diameter cerobong | suplai pemanas keluar dan balik masuk, gas masuk, cerobong keluar |
| Pemanas air | diameter, tinggi, ukuran pipa, gas atau listrik | air dingin masuk, air panas keluar (dan gas masuk serta cerobong jika memakai gas) |
| Unit terminal | panjang, lebar, tinggi, masukan bulat, lebar dan tinggi keluaran | udara suplai masuk dan keluar |
| Diffuser | muka, leher, sistem | lehernya (udara masuk) |
| Grill | lebar dan tinggi muka, lebar dan tinggi leher, sistem | lehernya (udara keluar ke duct balik atau buang) |
| Tangki | diameter, tinggi, ukuran pipa, sistem | masukan di atas, keluaran dekat dasar |
| Radiator | panjang, tinggi, kedalaman, ukuran pipa, sistem | aliran masuk di atas satu ujung, balik keluar di bawah ujung lainnya |
| Konvektor / pemanas panel | panjang, tinggi, kedalaman, ukuran pipa, sistem | aliran masuk di satu ujung, balik keluar di ujung lainnya |
| Keluarga pabrikan | keluarganya (lihat [Spesifikasi pipa, katup, damper, dan keluarga pabrikan](topic:pipe-specs)) | port yang diberikan pada keluarganya |

3. Atur **Pada**, yaitu tinggi dasarnya di atas level. Tinggi diffuser atau grill adalah mukanya: ketik tinggi plafon.
4. Ketik **Tag** jika Anda menginginkannya (`AHU-1`); bagian berikutnya dengan jenis yang sama mendapat nomor berikutnya.
5. Gerakkan penunjuk di atas denah: jejak dan port-portnya mengikutinya. Tekan {{key:R}} untuk memutar 90°. Klik di tempat ia akan diletakkan.

Ukuran pipa adalah ukuran pipa baja (ASME B36.10M). Pipa yang digambar dari pompa dengan material lain mengambil ukuran nominal yang sama dalam materialnya sendiri.

## Ubah atau hapus

Pilih di denah atau di tampilan 3D. Properti menampilkan setiap ukuran yang Anda ketik, tag-nya, X, Y, tinggi dan putarannya, serta tiap port: ukurannya, sistemnya, ke arah mana aliran, dan apakah ada yang tersambung. Setiap perubahan adalah satu langkah {{ui:Urungkan}}; jalur yang terkunci ke port-portnya ikut bergerak. {{key:Delete}} menghapusnya; jalur yang terkunci padanya tetap ada dan pemeriksaan sambungan mendaftarnya.

## Dalam file IFC

Tiap jenis disimpan sebagai kelas IFC-nya: IfcUnitaryEquipment (air handler), IfcFan, IfcPump, IfcBoiler (boiler; pemanas air adalah IfcBoiler bertipe air dengan tipe objek "Water heater"), IfcAirTerminalBox (unit terminal), IfcAirTerminal (diffuser, grill), dan IfcTank, dengan tipe yang dibagi oleh setiap bagian jenis yang sama dan ukurannya. File IFC2X3 mendapat IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal, dan IfcFlowStorageDevice dengan tipe yang sesuai. Tiap port adalah IfcDistributionPort yang ditempatkan di tempat sambungan, menghadap ke luar, dengan arah aliran dan sistemnya; program lain membaca jalur mana yang tersambung ke port mana. Bagian itu bergabung dengan sistem tiap portnya, dan membawa kumpulan item pustaka yang dimiliki setiap item pustaka yang ditempatkan.
