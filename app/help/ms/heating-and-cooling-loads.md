---
title: Anggarkan beban pemanasan dan penyejukan
summary: Kehilangan haba setiap bilik, pemanasannya sepanjang tahun mengikut hari-darjah dan puncak penyejukannya, daripada apa yang membataskannya dalam model dan nilai U setiap elemen, dengan setiap input ditunjukkan. Alat bantu reka bentuk, bukan pengiraan pematuhan.
keywords: tenaga, pemanasan, penyejukan, kehilangan haba, beban haba, beban penyejukan, nilai-u, transmitan terma, hari-darjah, hdd, pengudaraan, pertukaran udara, gandaan dalaman, gandaan solar, lambda, kekonduksian, penebat, reka bentuk awal, analisis, bilik, ruang
from: ec312d20
---

Dalam tab {{ui:Cahaya siang}}, selepas {{ui:Kira}}, buka {{ui:Beban pemanasan dan penyejukan}} dan klik {{ui:Kira beban}}. Setiap bilik mendapat **kehilangan haba** pada hari reka bentuk sejuk, **pemanasan sepanjang tahun** dan **puncak penyejukan** pada hari panas. Tiada apa yang dimuat naik; tiada apa yang berubah dalam model melainkan anda menaip nilai-U.

:::warning
Ini ialah **alat bantu reka bentuk, bukan pengiraan pematuhan**: anggaran keadaan mantap dengan setiap input dipaparkan pada skrin. Ia **bukan** kaedah ISO 52016-1, bukan simulasi dan bukan sijil tenaga; ia tidak menentukan saiz dandang, pam haba atau mesin penyejuk air. Semak keputusan, dan tentukan saiz peralatan bersama jurutera.
:::

## Apa yang membataskan setiap bilik

BimCraft mencarinya dalam model itu sendiri, jadi IFC mana-mana program berfungsi (ia tidak memerlukan sempadan ruang yang dieksport oleh sesetengah program). Dari setiap bahagian permukaan bilik itu sendiri ia melihat terus ke luar:

- dinding, tingkap, pintu, lantai, bumbung, penutup, dinding tirai atau rasuk pertama yang ditemuinya **membatasi** bahagian itu;
- sejurus melepasi elemen itu, sama ada **bilik lain** (dikira sebagai jiran, pada suhu yang sama: tiada kehilangan), **tiada apa** (di luar), atau, di bawah lantai pada aras terendah, **tanah**;
- ambang pintu terbuka ke bilik lain dikira sebagai jiran; bahagian yang tidak bertemu apa-apa langsung (dalam 1.5 m ke sisi atau ke bawah, 8 m ke atas) disenaraikan di bawah bilik dan ditinggalkan.

Tingkap dan pintu mengambil saiz sendiri daripada IFC (lebar × tinggi keseluruhan) dari dinding tempat ia berada. Klik bilik dalam jadual untuk melihat setiap elemen yang membatasinya dengan luasnya, nilai-U dan dari mana nilai-U itu diperoleh.

## Nilai-U

Bagi setiap elemen yang digunakan BimCraft, mengikut susunan ini:

1. **Nilai-U IFC sendiri** — `ThermalTransmittance` dalam set sifat biasa elemen (contohnya `Pset_WallCommon`) atau dalam jenisnya. Kebanyakan program reka bentuk boleh menulisnya.
2. **Lapisan bahannya** — 1 ÷ (rintangan permukaan dalam + ketebalan setiap lapisan ÷ kekonduksiannya λ + rintangan permukaan luar), dengan rintangan permukaan biasa (0.13 dan 0.04 m²K/W untuk dinding; 0.10 ke atas, 0.17 ke bawah di dalam). Kekonduksian lazim untuk bermula (bulu batu 0.035, bata 0.77, konkrit 1.4…); di bawah {{ui:Kekonduksian bahan}} taip milik pengeluar, dan setiap nilai-U daripada lapisan tersebut akan mengikutinya.
3. **Nilai lazim** (dinding 0.3, bumbung 0.2, lantai 0.25, tingkap 1.4, pintu 1.6 W/m²K), ditandakan sebagai demikian — taip nilai anda.

Nilai-U yang ditaip dalam butiran bilik ditulis ke dalam set sifat biasa elemen sebagai `ThermalTransmittance` (satu langkah; {{key:Mod+Z}} membatalkannya). Jika beberapa elemen berkongsi set itu (contohnya satu jenis dinding), kesemuanya berubah serentak, dan baris status menyatakan berapa banyak.

## Pemanasan

- **Kehilangan haba** = Σ U × A × (dalam − luar) bagi semua yang menghadap ke luar + Σ U × A × (dalam − tanah) bagi lantai di atas tanah + 0.335 × pertukaran udara sejam × isipadu bilik × (dalam − luar). 0.335 Wh per m³ per kelvin ialah ketumpatan udara (1.2 kg/m³) didarab dengan muatan haba tentunya (1005 J/kgK).
- **Pemanasan setahun** = (kehilangan bilik per darjah ke luar, melalui struktur dan udara, ditambah kehilangan tanahnya yang diskalakan kepada beza yang sama) × **hari-darjah** × 24 ÷ 1000, dalam kWh. Taip hari-darjah bagi tempat itu, atau {{ui:Baca hari-darjah daripada CSV…}} (satu baris setiap hari atau bulan; nombor terakhir dalam setiap baris dijumlahkan). Gunakan hari-darjah kepada suhu asas yang digunakan sumber anda: asas itu sudah mengambil kira haba percuma daripada orang, lampu dan matahari.

## Penyejukan

**Puncak penyejukan** = haba melalui struktur dan udara pada suhu reka bentuk musim panas + orang (luas lantai setiap orang × haba setiap orang) + pencahayaan dan peralatan setiap m² luas lantai + **matahari**: puncak {{ui:Matahari melalui tingkap pada tarikh}} bagi bilik itu. Kira matahari dahulu, pada hari panas; sehingga itu matahari dikira 0 dan bahagian ini menyatakannya. Puncak setiap bahagian dijumlahkan walaupun ia jatuh pada jam yang berbeza, yang sedikit melebihkan anggaran.

## Apa yang ditinggalkan

- Kaedah bulanan dan setiap jam ISO 52016-1 (piawaian berbayar), haba yang tersimpan dalam jisim bangunan, jambatan terma, prestasi sistem pemanasan dan penyejukan, dan fail iklim.
- Bilik yang bersebelahan dianggap pada suhu yang sama; ruang tanpa pemanasan tidak dimodelkan.

Lihat juga [Anggarkan cahaya siang dalam setiap bilik](topic:daylight-factor).
