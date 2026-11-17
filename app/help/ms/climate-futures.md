---
title: "Masa depan iklim: banjir, haba dan kebakaran hutan 2050 dan 2080"
summary: Jalankan semula banjir, tahun tenaga dan saringan kebakaran hutan dengan iklim masa depan (senario SSP2-4.5 dan SSP5-8.5, tahun 2050 dan 2080) daripada pek data iklim, dipaparkan di sebelah masa kini dan masa depan.
keywords: iklim, perubahan iklim, masa depan, 2050, 2080, ssp, cmip6, senario, aras laut, banjir, haba, fail cuaca, epw, morph, energyplus, kebakaran hutan, bushfire, cuaca kebakaran
from: 224ecd08
---

Angka iklim datang daripada **pek data**, bukan daripada aplikasi. Hidupkan add-on {{ui:Masa depan iklim}} dalam Tetapan › Add-on, atau muat fail pek sendiri dalam blok {{ui:Masa depan iklim}}.

:::warning
Pek yang disertakan dengan add-on ialah **sampel**: tiga tempat (Denver, Miami, Johannesburg), satu model iklim, dan lima tahun dalam setiap tempoh 20 tahun. Ia ada untuk mencuba alat, **bukan untuk reka bentuk**. Panel menyatakannya dengan tebal semasa ia digunakan. Pek penuh (banyak model, semua tahun, lebih banyak tempat) dibina dengan `tools/climate/build-pack.mjs` daripada data NEX-GDDP-CMIP6 NASA.
:::

## Pilih masa depan

Dalam {{ui:Main semula bahaya}} panel kiri, pilih **Senario** (SSP2-4.5, jalan tengah, atau SSP5-8.5, pelepasan tinggi) dan **Tahun** (2050 bermaksud 2041-2060, 2080 bermaksud 2071-2090; kedua-duanya berbanding 1995-2014). **Tempat** ialah tempat pek yang paling dekat dengan tapak model (latitud dan longitud IfcSite), atau yang anda pilih. Jauh daripada mana-mana tempat, perubahan purata global pek digunakan dan panel menyatakannya.

## Banjir, kini di sebelah masa depan

Dengan senario dipilih, tetapkan **Jenis banjir**: pesisir (menambah kenaikan aras laut), sungai, atau hujan lebat (lebih dalam mengikut perubahan hujan pada hari paling basah), atau kedua-duanya. Tekan {{ui:Jalankan}}: banjir dimainkan seperti sebelum ini, dan jadual menunjukkan banjir kini dan banjir masa depan sebelah-menyebelah (aras air, bilik yang basah, air paling dalam). Andaiannya disenaraikan di bawahnya:

- aras pesisir naik sepenuhnya mengikut kenaikan aras laut; ribut dan ombak tidak diubah;
- aliran sungai naik satu dengan satu mengikut hujan hari paling basah, dan kedalaman mengikut aliran dipangkat 0.6 (persamaan Manning untuk saluran lebar);
- kedua-dua bahagian hanya ditambah.

## Haba: fail cuaca masa depan

Pilih jenis {{ui:Haba: fail cuaca masa depan}}, pilih fail cuaca `.epw` masa kini dan tekan {{ui:Hasilkan fail cuaca masa depan}}. Fail itu di-**morph** bulan demi bulan dengan kaedah anjakan dan regangan yang diterbitkan (Belcher, Hacker dan Powell 2005): purata bulan memanas mengikut perubahan pek, petang yang panas mengikut perubahan maksimum harian, dan malam yang sejuk mengikut perubahan minimum harian; kelembapan relatif bergerak mengikut perubahan pek dan takat embun dikira semula. Tekanan dan angin kekal seperti sedia ada. Jadual membandingkan suhu purata dan paling panas, suhu reka bentuk 0.4 % penyejukan dan 99.6 % pemanasan, jam pada 30 °C dan 35 °C, serta hari-darjah.

{{ui:Simpan fail cuaca masa depan}} menyimpannya; {{ui:Guna dalam semakan tenaga}} menyerahkannya kepada semakan EnergyPlus (tab Tenaga). Fail masa depan ialah tahun tipikal yang sama, tetapi lebih panas: ia tidak menambah gelombang haba baharu.

## Tahun tenaga, kini di sebelah masa depan

Dalam semakan EnergyPlus pada tab Tenaga (add-on tersendiri, dengan enjin anda sendiri), pilih fail cuaca masa kini, kemudian pilih senario dan tahun dalam blok {{ui:Masa depan iklim}} itu, dan tekan {{ui:Simulasi setahun: kini dan masa depan}}. Tahun itu dijalankan pada fail masa kini dan pada fail masa depan yang di-morph, dan pemanasan serta penyejukan bagi setiap bilik disenaraikan sebelah-menyebelah.

## Pendedahan kebakaran hutan (saringan sahaja)

Pilih jenis {{ui:Pendedahan kebakaran hutan (saringan sahaja)}}: tumbuh-tumbuhan terdekat, cerun naik dari situ ke bangunan, dan jarak ke sana. Hasilnya ialah satu jalur dari sangat rendah hingga melampau, kini dan masa depan.

:::warning
**Saringan sahaja.** Ini ialah skala relatif kami sendiri untuk memberitahu sama ada sesuatu tapak memerlukan penilaian kebakaran hutan yang betul, bukan penarafan kod atau tahap serangan bushfire. Ia mendarab pemberat untuk tumbuh-tumbuhan, faktor cerun (api hampir dua kali ganda kelajuannya bagi setiap 10 darjah ke atas cerun, dikira sehingga 20 darjah), faktor jarak (10 m dibahagi dengan jarak, paling tinggi 1), dan perubahan pek dalam indeks cuaca kebakaran.
:::

## Dari mana angkanya datang

- **Suhu, kelembapan, sinaran matahari, hujan, cuaca kebakaran:** NASA NEX-GDDP-CMIP6, output model CMIP6 yang diturunskala secara harian. Output setiap model di bawah CC BY 4.0. Perubahan cuaca kebakaran ialah Canadian Fire Weather Index yang dikira hari demi hari daripada cuaca model (dengan kelembapan harian menggantikan kelembapan tengah hari).
- **Kenaikan aras laut:** purata global IPCC AR6 (bukan tempatan; tanah yang naik atau turun tidak termasuk), melainkan pek membawa angka tempatan.
- Pek menamakan sumber, lesen dan tarikhnya; panel memaparkannya.
