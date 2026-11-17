---
title: Peralatan MEP dengan port
summary: Letakkan pengendali udara, kipas, pam, dandang, pemanas air, unit terminal, penyebar, gril dan tangki yang bersaiz mengikut nilai yang anda taip, masing-masing dengan sambungan paip dan saluran yang disambungkan oleh laluan lain.
keywords: mep, peralatan, pengendali udara, ahu, kipas, kipas sebaris, pam, dandang, pemanas air, unit terminal, vav, penyebar, gril, daftar, tangki, port, sambungan, muncung, saiz leher, hvac, paip, mekanikal, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Apa yang anda akan lakukan

Letakkan peralatan di hujung paip dan saluran anda. Setiap bahagian ialah bentuk generik yang bersaiz mengikut nilai yang anda taip, dengan sambungannya sebagai **port**: di mana paip atau saluran menyambung padanya, sistem mana, arah aliran ke mana, dan saiz apa. Paip dan saluran yang dilukis dari port mengambil saiz dan sistemnya serta kekal terpasang padanya: lihat [Sambungkan paip dan saluran ke peralatan](topic:mep-connections).

:::note
Ini ialah alat bantu lukisan dan koordinasi, bersaiz oleh jurutera. Peralatan ini bukan produk pengeluar: tiada kapasiti, berat atau saiz sambungan pengeluar. Bawa model pengeluar dari program MEP anda sebagai IFC apabila anda memerlukannya.
:::

## Letakkan sebuah bahagian

1. Hidupkan {{ui:Lukis}}, buka {{ui:Binaan}} dan pilih {{ui:Peralatan}}.
2. Dalam bar, pilih jenis dan taip saiznya. Setiap jenis meminta saiznya sendiri:

| Jenis | Anda taip | Portnya |
|---|---|---|
| Air handler (pengendali udara) | panjang, lebar, tinggi; bukaan bekalan dan pulangan; saiz paip gegelung dan sistem; saiz kondensat | saluran bekalan keluar, saluran pulangan masuk, gegelung masuk dan keluar, longkang kondensat |
| Inline fan (kipas sebaris) | diameter, panjang, sistem | saluran masuk dan keluar |
| Pump (pam) | saiz paip, sistem | masuk dan keluar |
| Boiler (dandang) | panjang, lebar, tinggi, saiz paip, saiz gas, diameter serombong | bekalan pemanasan keluar dan pulangan masuk, gas masuk, serombong keluar |
| Water heater (pemanas air) | diameter, tinggi, saiz paip, gas atau elektrik | air sejuk masuk, air panas keluar (dan gas masuk serta serombong apabila ia membakar gas) |
| Terminal unit (unit terminal) | panjang, lebar, tinggi, inlet bulat, lebar dan tinggi outlet | udara bekalan masuk dan keluar |
| Diffuser (penyebar) | muka, leher, sistem | lehernya (udara masuk) |
| Grille (gril) | lebar dan tinggi muka, lebar dan tinggi leher, sistem | lehernya (udara keluar ke saluran pulangan atau ekzos) |
| Tank (tangki) | diameter, tinggi, saiz paip, sistem | inlet di atas, outlet berhampiran dasar |
| Radiator (radiator) | panjang, tinggi, kedalaman, saiz paip, sistem | aliran masuk di atas satu hujung, pulangan keluar di bawah hujung yang satu lagi |
| Convector / panel heater (konvektor / pemanas panel) | panjang, tinggi, kedalaman, saiz paip, sistem | aliran masuk di satu hujung, pulangan keluar di hujung yang satu lagi |
| Manufacturer's family (keluarga pengeluar) | keluarga itu (lihat [Spesifikasi paip, injap, damper dan keluarga pengeluar](topic:pipe-specs)) | port yang diberikan kepada keluarganya |

3. Tetapkan **Pada**, ketinggian tapaknya di atas aras. Ketinggian penyebar atau gril ialah mukanya: taip ketinggian siling.
4. Taip **Tag** jika anda mahukannya (`AHU-1`); bahagian jenis yang sama seterusnya mendapat nombor berikutnya.
5. Gerakkan penunjuk di atas pelan: jejak dan portnya mengikutinya. Tekan {{key:R}} untuk memusingkannya 90°. Klik di tempat ia hendak diletakkan.

Saiz paip ialah saiz paip keluli (ASME B36.10M). Paip yang dilukis dari pam dalam bahan lain mengambil saiz nominal yang sama dalam bahannya sendiri.

## Tukar atau alih keluar

Pilih ia dalam pelan atau pandangan 3D. Sifat menunjukkan setiap saiz yang anda taip, tagnya, X, Y, ketinggian dan pusingannya, dan setiap port: saiznya, sistem, arah aliran, dan sama ada sesuatu disambungkan. Setiap perubahan ialah satu langkah {{ui:Buat asal}}; laluan yang ditetapkan pada portnya bergerak bersamanya. {{key:Delete}} mengalih keluarnya; laluan yang ditetapkan padanya kekal dan semakan {{ui:Semak sambungan}} menyenaraikannya.

## Dalam fail IFC

Setiap jenis disimpan sebagai kelas IFC-nya: IfcUnitaryEquipment (pengendali udara), IfcFan, IfcPump, IfcBoiler (dandang; pemanas air ialah IfcBoiler jenis air dengan jenis objek "Water heater"), IfcAirTerminalBox (unit terminal), IfcAirTerminal (penyebar, gril) dan IfcTank, dengan satu jenis yang dikongsi oleh setiap bahagian jenis yang sama dan saiznya. Fail IFC2X3 mendapat IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal dan IfcFlowStorageDevice dengan jenis yang sepadan. Setiap port ialah IfcDistributionPort yang diletakkan di tempat sambungan, menghadap ke luar, dengan arah aliran dan sistemnya; program lain membaca laluan mana yang menyambung ke port mana. Bahagian itu menyertai sistem bagi setiap portnya, dan membawa set item pustaka yang dimiliki setiap item pustaka yang diletakkan.
