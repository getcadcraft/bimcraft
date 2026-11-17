---
title: Kod pengelasan (Uniclass, OmniClass, UniFormat)
summary: Beri setiap elemen dan jenis kod pengelasan, pilih sistem yang digunakan projek, cari dalam jadual Uniclass yang disertakan dengan aplikasi, muat jadual berlesen pejabat anda sendiri, dan tunjukkan kod dalam jadual. Kod ditulis ke dalam fail IFC untuk perisian lain.
keywords: pengelasan, mengelaskan, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, jadual, kod elemen, kod jenis, kod lalai, IfcClassification, IfcClassificationReference, cobie, lajur jadual, csv, lesen
from: 222b94cd
---

## Apa yang akan anda lakukan

Letakkan kod pengelasan pada dinding, lantai, bumbung, pintu, tingkap dan apa sahaja lain dalam model, dalam sehingga tiga sistem sebelah-menyebelah: Uniclass, OmniClass dan UniFormat. Disiplin lain dan perisian lain bergantung pada kod, bukan nama, jadi kod disimpan dalam fail IFC sebagai rujukan pengelasan yang mana-mana program BIM boleh baca.

## Beri elemen kod

1. Pilih elemen (atau beberapa elemen) dan buka **Sifat**. Buka bahagian {{ui:Pengelasan}}.
2. Taip kod dalam kotak sistemnya dan tekan Enter. Dengan senarai kod dimuatkan, taip sebahagian kod atau beberapa perkataan (contohnya "dinding tirai") dan pilih daripada padanan: tajuk kod diisi untuk anda.
3. {{ui:Terpakai kepada}} menyatakan ke mana kod itu pergi: **Elemen ini**, atau **Jenisnya (setiap elemen jenis itu)**. Kod pada jenis dinding dibaca oleh setiap dinding jenis itu, termasuk yang anda lukis kemudian.
4. {{ui:Kosongkan}} mengeluarkan kod.

Di bawah setiap kod, bahagian itu menyatakan dari mana ia datang: ditetapkan pada elemen ini, daripada jenisnya, atau lalai projek bagi kelasnya. Kod sendiri elemen sentiasa menang berbanding kod jenisnya, dan kod jenis berbanding lalai. Dengan beberapa elemen dipilih, kotak yang menulis "berbeza-beza" bermaksud mereka tidak berkongsi satu kod; menaip satu kod memberinya kepada semua. Setiap perubahan ialah satu langkah buat asal.

Kod boleh sentiasa ditaip, sama ada senarai dimuatkan atau tidak. Jika ia tidak kelihatan seperti kod sistem itu, atau tiada dalam senarai yang dimuatkan, petunjuk akan memberitahu anda dan kod itu dikekalkan seperti yang anda taip.

## Pilih sistem projek

Buka **Data** pada bar model dan pilih {{ui:Pengelasan}} (atau {{ui:Pengelasan projek…}} dalam bahagian Sifat).

- Tandakan sistem yang digunakan projek ini. Sifat kemudian hanya menunjukkan sistem tersebut.
- **Uniclass**: jadual Elements/ functions (EF), Systems (Ss) dan Products (Pr) disertakan dengan aplikasi. Ia ialah © NBS, dilesenkan di bawah Creative Commons Attribution-NoDerivatives 4.0, dan diserahkan tanpa perubahan. Dialog menunjukkan edisi setiap jadual dan hari ia dibaca. Ia bukan jadual yang terbaharu: penerbit mengeluarkan yang baharu setiap suku tahun di laman mereka sendiri.
- **OmniClass** dan **UniFormat**: tiada senarai kod disertakan dengan aplikasi, kerana penerbitnya tidak membenarkan jadual dikongsi tanpa lesen. Taip mana-mana kod, atau muat jadual berlesen pejabat anda sendiri.
- {{ui:Muatkan jadual (CSV)…}} membaca jadual pejabat anda sendiri daripada fail CSV yang mempunyai lajur kod dan lajur tajuk (baris pengepala bernama Code, Number atau Identifier dan Title, Name atau Description dikesan sendiri; tanpa baris itu, dua lajur pertama digunakan). Jadual kekal dalam pelayar ini dan tidak pernah dimasukkan ke dalam fail projek. Hanya kod yang anda berikan disimpan dalam fail. Anda boleh memuatkan jadual Uniclass yang lebih baharu dengan cara yang sama.
- {{ui:Beri elemen kod lalai mengikut kelasnya}} memberi setiap dinding, lantai, bumbung, pintu, tingkap, tangga, ramp, tiang, rasuk dan perabot kod permulaan Uniclass daripada jadual Elements/ functions apabila ia tiada kodnya sendiri. Elemen yang anda lukis kemudian turut menerimanya.
- {{ui:Tunjuk kod sebagai lajur dalam jadual}} menambah satu lajur bagi setiap sistem pada jadual Pintu, Tingkap, Dinding mengikut jenis dan Bilik, serta pada CSV mereka. Baris beberapa elemen menunjukkan "berbeza-beza" apabila kodnya berbeza.

## Perkara yang perlu diketahui

- Kod lalai ialah pilihan permulaan CadCraft sendiri, bukan daripada penerbit, dan belum disemak oleh pengamal. Semak dengan standard projek anda.
- Dalam fail, lalai ialah pengelasan sebenar, ditanda dengan nama hubungan "CadCraft default", dan ia hilang sebaik sahaja elemen atau jenisnya mendapat kod sendiri.
- Kod yang sudah ada dalam fail yang diimport dibaca dan ditunjukkan, tidak kira ejaan yang digunakan program lain untuk nama sistem itu. Kod bagi sistem lain (milik pejabat) disenaraikan dan dibiarkan.
- Kod dibaca semula apabila fail dibuka semula, sama ada di sini atau dalam program lain. Ia juga dibawa ke dalam eksport IFC5 alpha (IFCX) apabila pilihan makmal itu dihidupkan, kecuali kod yang ditetapkan pada bumbung.
- Belum dibina: pokok untuk melayari jadual peringkat demi peringkat, kod pada aras dan bilik sebagai lalai projek, dan menyemak kod terhadap edisi yang dinyatakan dalam fail.
