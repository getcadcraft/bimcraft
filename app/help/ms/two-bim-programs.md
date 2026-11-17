---
title: Bekerja antara dua program BIM
summary: Hantar model dari satu program BIM ke yang lain melalui IFC dengan BimCraft di tengah, kekalkan GlobalId, set sifat dan pengelasannya, tetapkan kedua-dua program untuk sifat yang sama, dan lihat apa yang kembali.
keywords: ifc, pusingan penuh, kebolehoperasian, globalid, guid, set sifat, psets, pengelasan, parameter dikongsi, pemetaan sifat, penterjemah, bcf, koordinasi, pertukaran
from: 9f224176
---

## Apa yang anda akan lakukan

Pindahkan model antara dua program BIM, contohnya dari Revit ke Archicad dan kembali, melalui IFC, dengan BimCraft di tengah untuk menyemaknya, menambah padanya dan melaporkan apa yang terselamat. Format fail milik kedua-dua program tidak dibaca: semuanya dihantar sebagai IFC.

## Apa yang BimCraft kekalkan

Apabila anda menukar model dalam BimCraft dan klik {{ui:Simpan sebagai IFC}}, setiap baris yang tidak anda ubah ditulis semula sama seperti asalnya. Maka:

- **GlobalId** kekal sama, dan program lain boleh memadankan setiap elemen dengan yang dihantarnya.
- **Set sifat** dan nilainya kekal, kecuali nilai yang anda tukar.
- **Pengelasan** kekal dilampirkan pada elemennya.

## Tetapkan kedua-dua program untuk sifat yang sama

1. Buka model dalam BimCraft (dan bundle projek, jika anda ada: kumpulan sifatnya ditambah).
2. Dalam panel kiri, buka {{ui:Antara dua program BIM}}.
3. Di bawah **Pemetaan sifat**, muat turun apa yang diperlukan setiap program:
   - {{ui:Parameter dikongsi}}: fail parameter dikongsi. Dalam Revit, muatkannya dengan Manage › Shared Parameters dan tambah parameter pada kategori yang memerlukannya.
   - {{ui:Set sifat eksport IFC}}: fail set sifat yang ditakrifkan pengguna. Dalam tetapan eksport IFC Revit, pilihnya di bawah set sifat yang ditakrifkan pengguna, supaya IFC yang dieksport membawa set dan nama sifat yang sama.
   - {{ui:Jadual pemetaan (CSV)}}: setiap sifat dengan set dan nama IFCnya, jenisnya, dan nama yang sepadan dalam setiap program. Fail pemetaan Archicad bukan format yang diterbitkan, jadi sediakan penterjemah IFC dan pengurus sifatnya daripada jadual ini secara manual.
   - {{ui:Fail pemetaan}}: keseluruhan pemetaan sebagai satu fail, untuk disimpan bersama projek.

Set standard (Pset_ dan Qto_) tidak disertakan dalam fail parameter dikongsi: kedua-dua program menulisnya daripada data mereka sendiri.

## Hantar model dan bawa balik

1. Eksport IFC daripada program pertama dengan GlobalId dikekalkan (Revit: "Store the IFC GUID in an element parameter after export" dihidupkan).
2. Buka dalam BimCraft, semak ({{ui:Semakan model}}, {{ui:Semakan pertembungan}}), tambah isu ({{ui:Isu}}, BCF), tukar nilai jika perlu, dan {{ui:Simpan sebagai IFC}}.
3. Buka IFC yang disimpan dalam program kedua, kerjakannya, dan eksport IFC daripadanya dengan GlobalId dikekalkan (penterjemah Archicad: "Global Unique Identifiers: Keep existing").
4. Kembali ke BimCraft, buka model yang dihantar keluar, kemudian tambah yang dikembalikan ({{ui:Tambah model}} di bawah Model).
5. Dalam {{ui:Antara dua program BIM}}, pilih **Dihantar keluar** dan **Dikembalikan**, dan klik {{ui:Buat laporan}}.

## Baca laporan

- **Elemen**: berapa banyak yang kembali dengan GlobalId yang sama, berapa banyak yang hilang, dan berapa banyak yang baharu. Elemen dengan GlobalId baharu ditunjukkan sebagai satu hilang dan satu baharu: program lain tidak mengekalkannya.
- **Kelas IFC berubah**: elemen yang kembali sebagai jenis elemen lain.
- **Nilai sifat dikekalkan**: bahagian nilai yang kembali tanpa berubah. Senarai di bawah menunjukkan sifat dengan nilai yang paling banyak berubah atau hilang.
- **Pengelasan**: dikekalkan, berubah (sistem sama, kod lain) atau hilang.

{{ui:Muat turun laporan (CSV)}} memberikan setiap sifat dengan kiraannya. Untuk melihat elemen mana yang berpindah atau berubah bentuk, gunakan {{ui:Bandingkan versi}} pada dua model yang sama.

:::note
BimCraft tidak menjalankan kedua-dua program. Tetapan mana yang membawa nilai melalui bergantung pada tetapan IFC setiap program: laporan menunjukkan apa yang sebenarnya kembali, jadi cuba satu tetapan, eksport semula dan bandingkan.
:::

## Isu dihantar sebagai BCF

Isu yang anda timbulkan dalam BimCraft dieksport sebagai BCF ({{ui:Isu}}), yang kedua-dua program boleh baca dengan alat BCF mereka, jadi soalan tentang elemen sampai kepada orang yang bekerja dalam program lain bersama pandangannya.

Lihat juga [Buka bundle projek](topic:open-project-bundle), [Dari fail projek ke BimCraft melalui IFC](topic:rvt-to-ifc) dan [Bandingkan dua versi model](topic:compare-versions).
