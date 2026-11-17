---
title: Lantai mengikut sebarang bentuk, bukaan dan ramp
summary: Lukis lantai atau papak mengikut garis luarnya (balkoni, kantilever, pelantar), potong bukaan di dalamnya, dan lukis ramp dengan pelantarnya.
keywords: lantai, papak, garis luar, balkoni, kantilever, pelantar, dek, bukaan lantai, lubang, syaf, rongga, ramp, cerun, ramp boleh diakses, ramp kerusi roda, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Apa yang anda akan lakukan

Buat lantai yang tidak mengikut bilik, seperti balkoni di luar dinding, dan lukis ramp antara tingkat.

## Lukis lantai mengikut garis luarnya

1. Hidupkan {{ui:Lukis}}, pilih tingkat, kemudian {{ui:Binaan}} › {{ui:Lantai mengikut garis luar}}.
2. Dalam baris di bawah alat, pilih jenis (papak konkrit atau lantai kayu), gunanya (lantai atau pelantar), ketebalannya dan sejauh mana bahagian atasnya di atas aras (0 = sama aras dengan lantai tingkat; nilai negatif menetapkannya lebih rendah).
3. Klik bucu-bucunya. Alat ini melekat pada dinding, garis grid dan persilangannya; tahan {{key:Shift}} untuk mengekalkan tepi bersudut tepat. Panjang setiap tepi dan luas ditunjukkan semasa anda bergerak. {{key:Backspace}} membatalkan bucu terakhir.
4. Klik bucu pertama sekali lagi, klik dua kali, atau tekan {{key:Enter}} untuk selesai.

## Potong bukaan

Klik lantai (dalam paparan 3D, atau garis luarnya pada pelan), kemudian dalam {{ui:Sifat}} klik {{ui:Tambah bukaan}} dan klik bucu bukaan di dalam lantai, selesai seperti di atas. Senarai {{ui:Sifat}} lantai itu menyenaraikan bukaannya, setiap satu dengan {{ui:Padam}}, dan luasnya tanpa bukaan.

## Lukis ramp

1. Pilih {{ui:Binaan}} › {{ui:Ramp}}. Tetapkan lebarnya, dan sama ada ia menuju **ke tingkat di atas** atau **naik satu ketinggian** yang anda taip.
2. Pilih cara ia ditetapkan: **mengikut kecerunan** (1:12 sebagai permulaan; ramp itu sepanjang yang diperlukan oleh ketinggian) atau **mengikut panjang** (klik kedua anda menetapkan panjang, dan kecerunan mengikut).
3. Klik kaki ramp (tengah tepi bawahnya), kemudian klik arah naik. Pratonton menunjukkan panjangnya, rentang ramp dan kecerunannya.

Ketinggian lebih daripada 30 inci (760 mm) dibahagi kepada rentang dengan pelantar 5 kaki (1525 mm) di antaranya. Ini ialah nilai perancangan lazim, bukan kod anda: semak peraturan di tempat anda membina. Ramp yang lebih curam daripada 1:12 ditandakan dalam {{ui:Sifat}}-nya.

## Apa yang anda patut lihat

- Setiap lantai, bukaan dan ramp ialah satu langkah: {{key:Mod+Z}} membatalkannya.
- Pada pelan, garis luar lantai yang dilukis (bukaan dilukis bersilang), dan garis luar ramp, rentangnya, pelantarnya dan anak panah naik dengan kecerunannya.
- Sifat bagi lantai yang dilukis (jenis, guna, ketebalan, bahagian atas, luas, bukaan) dan bagi ramp (lebar, bahagian atas, ketinggian, kecerunan atau panjang); {{key:Delete}} mengalih keluar mana-mana satu.
- Ramp ke tingkat di atas mengikut tingkat itu apabila ketinggiannya berubah.
- Dalam fail IFC: lantai yang dilukis ialah papak (IfcSlab, lantai atau pelantar) dengan bukaannya dipotong (IfcOpeningElement); ramp ialah IfcRamp yang dibuat daripada rentang condong (IfcRampFlight) dan papak pelantar, dengan kecerunan dan lebarnya.

:::note
Lantai yang dilukis dengan cara ini kekal di tempat anda melukisnya. Lantai yang dibuat dengan {{ui:Lantai}} mengikut bilik apabila dinding bergerak: lihat [Bilik, lantai, siling dan bumbung](topic:floors-and-roofs).
:::
