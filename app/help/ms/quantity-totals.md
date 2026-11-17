---
title: Tambah kuantiti, senaraikan elemen dan jadualkan ruang
summary: Kira elemen dan tambah panjang, luas, isipadu atau mana-mana sifat nombornya, dikumpulkan mengikut mana-mana sifat; senaraikan satu baris bagi setiap elemen; atau jadualkan ruang dengan luas dan isipadunya. Setiap satu dimuat turun sebagai CSV.
keywords: kuantiti, pengukuran kuantiti, jumlah, hasil tambah, jadual, bil kuantiti, boq, qto, csv, kumpulkan mengikut, kiraan, panjang, luas, isipadu, ruang, bilik, jadual bilik, jadual luas, senarai elemen
from: e2e7210c
---

## Apa yang anda akan lakukan

Dapatkan jumlah daripada model: panjang dinding mengikut tingkat, kiraan pintu mengikut jenis, isipadu papak mengikut bahan, kos setiap zon.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Jumlah kuantiti}} dalam panel kiri.
3. Dalam {{ui:Kiraan}}, pilih {{ui:Setiap elemen}} atau hanya yang dipilih.
4. Di bawah {{ui:Kumpulkan mengikut}}, pilih sifat, seperti {{ui:Kelas}}. Klik {{ui:Tambah kumpulan}} untuk membahagi lagi, sehingga tiga, contohnya mengikut {{ui:Tingkat}}.
5. Di bawah {{ui:Tambah}}, tandakan nombor yang hendak dijumlahkan. Set kuantiti model sudah ditandai pada mulanya.
6. Klik {{ui:Muat turun CSV}} untuk membuka jadual dalam hamparan.

## Apa yang anda patut lihat

- Satu baris bagi setiap kumpulan dengan berapa banyak elemen yang ada dan setiap jumlah, serta satu baris jumlah.
- Elemen tanpa nilai dikira tetapi tidak menambah apa-apa. Apabila itu berlaku, CSV menambah lajur "left out" di sebelah jumlah supaya anda dapat melihat berapa banyak.
- Nombor dalam unit fail itu sendiri, seperti yang disimpan oleh fail, selalunya milimeter bagi panjang.

## Satu baris bagi setiap elemen, atau ruang

Tukar {{ui:Tunjuk}}:

- **Satu baris bagi setiap elemen**: setiap elemen pada barisnya sendiri, dengan sifat di bawah {{ui:Lajur}} dan nombor di bawah {{ui:Tambah}}. CSV bermula dengan GlobalId setiap elemen. Klik nilai pertama dalam satu baris untuk memilih elemen itu.
- **Ruang**: setiap bilik dengan nombornya, namanya, tingkatnya, luas dan isipadu, serta jumlahnya. Luas dan isipadu diambil daripada kuantiti ruang seperti yang dinyatakan oleh fail. Apabila fail tidak mempunyai apa-apa, ia diukur daripada bentuk ruang dalam m² dan m³ dan dipaparkan dalam huruf condong; CSV menyatakan yang mana satu.

## Seterusnya

- [Cari elemen mengikut kelas, nama atau sifat](topic:find)
- [Beri warna elemen mengikut sifat](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Pilih **Infrastructure (IFC 4.3)** dalam senarai paparan untuk melihat jalan, landasan kereta api, jambatan dan kerja marin dijumlahkan mengikut kelas dan jenis, dengan panjang, luas dan isipadu yang dinyatakan oleh fail itu sendiri. Kuantiti yang tidak dinyatakan oleh fail dibiarkan kosong, tidak sekali-kali dikira. **Hantar kuantiti infrastruktur ke TakeoffCraft** menyimpan fail `.quantities.json` yang dibuka oleh TakeoffCraft sebagai kuantiti berjenis.
