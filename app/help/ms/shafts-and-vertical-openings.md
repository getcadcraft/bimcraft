---
title: Syaf dan bukaan melalui lantai
summary: Syaf ialah satu garis luar yang memotong setiap lantai, siling dan bumbung antara dua aras. Bukaan menegak memotong salah satu daripadanya. Bukaan dinding memotong dinding.
keywords: syaf, syaf lif, syaf elevator, bukaan tangga, tegak, bukaan menegak, bukaan lantai, bukaan siling, bukaan bumbung, bukaan tingkap cahaya, lubang dalam lantai, bukaan dinding, IfcOpeningElement, tolakan, luas bersih
from: 8e9e1641
---

## Apa yang akan anda lakukan

Potong syaf lif melalui bangunan dengan satu lakaran, potong satu lubang dalam satu lantai, dan baca apa yang dikeluarkan daripada luas.

## Di mana alatnya

- Susun atur reben: {{ui:Seni bina}} › **Bukaan** › {{ui:Syaf}}, {{ui:Bukaan Menegak}} dan {{ui:Bukaan dinding}}.
- Susun atur klasik: bar Lukis › menu {{ui:Bilik}} (Syaf, Bukaan Menegak) dan › menu {{ui:Dinding}} (Bukaan dinding).

## Syaf

1. Buka pelan lantai bagi aras tempat syaf bermula. Pilih {{ui:Syaf}}.
2. Dalam baris, pilih {{ui:Aras asas}} dan {{ui:Aras atas}}, dan ofset jika ia bermula atau berakhir di atas atau di bawahnya.
3. Klik bucu garis luar. Klik bucu pertama sekali lagi, klik dua kali atau tekan Enter untuk selesai.
4. Setiap lantai, siling dan bumbung antara dua ketinggian itu dipotong. Bar status menyatakan berapa banyak.

Syaf ialah satu benda. Pilih garis luarnya pada mana-mana aras yang dilaluinya: Sifat ada nama, aras dan ofsetnya, apa yang dipotong dan luas yang dikeluarkan. Tukarnya dan setiap bukaan akan mengikut. Padamnya dan setiap bukaan akan hilang. Setiap satu ialah satu langkah buat asal.

Ia terus memotong: lantai yang dibuat kemudian antara araskannya dipotong tanpa diminta, dan lantai yang anda padam dibiarkan begitu sahaja.

Lantai tempat syaf berdiri tidak dipotong (bahagian atasnya ialah asas). Beri asas ofset negatif untuk memotongnya juga. Beri bahagian atas ofset positif untuk menembusi bumbung.

## Bukaan menegak

1. Pilih {{ui:Bukaan Menegak}}. Dalam baris, pilih apa yang hendak dipotong: lantai, siling atau bumbung.
2. Klik bucu garis luar dan selesaikan seperti di atas.
3. Lantai, siling atau bumbung aras ini di bawah garis luar dipotong. Ia tergolong dalam satu elemen itu: padam lantai dan bukaan itu turut hilang bersamanya.

## Bukaan dinding

{{ui:Bukaan dinding}} ialah alat [Bentuk dinding](topic:wall-shape): klik dinding pada pelan, atau dua bucu pada mukanya dalam 3D.

## Kuantiti

Mengikut peraturan pengukuran untuk lantai, luas bersih sesuatu elemen ialah luas kasarnya tolak apa yang dipotong daripadanya. Syaf atau bukaan menegak ialah tolakan pada setiap lantai dan siling yang dipotongnya; jadual Lantai dan Kemasan serta kuantiti IFC menunjukkan nombor yang sama. Pada bumbung, tolakannya ialah luas permukaan bumbung: luas pelan dibahagi dengan kosinus kecerunan bumbung.

Garis luar yang terjuntai melepasi tepi hanya menolak bahagian yang terletak pada elemen itu.

## Jika tiada apa yang dipotong

Syaf yang tiada apa-apa di laluannya tetap dibuat, dan ia menyatakannya: ia akan memotong apa yang dibina di situ kemudian. Bukaan menegak memerlukan sesuatu di bawahnya; jika tiada apa-apa di situ, bar status menyatakannya dan tiada apa yang dibuat.

## Dalam IFC

Setiap potongan ialah IfcOpeningElement dengan IfcRelVoidsElement kepada elemen yang dipotongnya, supaya mana-mana program IFC memaparkan lubang itu. Bumbung dipotong muka demi muka. Syaf itu sendiri ialah IfcGroup bagi bukaan-bukaannya.

## Belum dibina

- Garis luar melengkung.
- Dinding syaf: lukisnya dengan alat Dinding.
- Menyunting garis luar dengan menyeret bucunya (tukarnya dalam Sifat, atau padam dan lakar semula).
- Sifat lantai yang dilukis sendiri hanya menunjukkan luasnya tolak bukaannya sendiri; jadual dan kuantiti IFC termasuk bukaan syaf.

Lihat juga [Bilik dan pemisah bilik](topic:rooms-and-separators).
