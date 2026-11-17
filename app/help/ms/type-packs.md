---
title: Pek jenis: kongsi jenis dinding sebagai fail terbuka
summary: Simpan jenis dinding bersama lapisan, bahan, tag dan kod pengelasan, serta keluarga, sebagai satu fail terbuka (JSON biasa atau IFC), dan tambahkannya ke projek lain. Jenis dinding bagi fail IFC daripada program lain juga boleh dibaca.
keywords: pek jenis, jenis, jenis dinding, kongsi, eksport, import, pustaka, format terbuka, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, bahan, lapisan, templat, standard pejabat, keluarga
from: e4c91331
---

## Apa yang anda akan lakukan

Bawa jenis dinding anda dari satu projek ke projek lain, atau serahkannya kepada seseorang yang bekerja dalam program lain. Pek jenis menyimpan setiap jenis dinding dengan lapisannya, ketebalannya, bahan, teras, rongga, keutamaan lapisan, tahap pembangunan, data pengukuran kuantiti dan kod pengelasan, serta mana-mana keluarga yang anda tambah. Ia ialah fail terbuka: teks JSON biasa yang sesiapa pun boleh baca, atau fail IFC. Tiada apa di dalamnya terkunci kepada firma, negara atau akaun.

## Simpan jenis daripada projek

1. Buka **Data** pada bar model dan pilih {{ui:Pek jenis}}.
2. Di bawah {{ui:Simpan jenis daripada projek ini}}, tandakan jenis dinding yang hendak dimasukkan. Jenis projek sendiri sudah ditandakan; jenis permulaan boleh ditambah dan dimasukkan sebagai salinan. Tandakan keluarga jika anda mahu memasukkannya.
3. Taip {{ui:Nama pek}}.
4. {{ui:Simpan sebagai pek (.json)}} memuat turun fail `.cctypes.json`. {{ui:Simpan sebagai IFC (.ifc)}} memuat turun fail IFC yang hanya mengandungi jenis: setiap jenis dinding sebagai IfcWallType dengan set lapisan bahannya, bahan dan pengelasan, untuk mana-mana program BIM.

## Tambah jenis ke projek

1. Dalam dialog yang sama, pilih {{ui:Buka pek atau fail IFC…}} dan pilih fail pek `.json` atau fail `.ifc`.
2. Dialog menyenaraikan apa yang dikandung fail: setiap jenis dinding dengan ketebalannya, bilangan lapisan dan kodnya, bahan dan keluarga.
3. Pilih apa yang berlaku kepada {{ui:Jenis yang sudah ada dalam projek ini}}: **Kekalkan milik projek**, **Tambah milik pek sebagai salinan** (ia mendapat nama baharu yang berakhir dengan "(2)"), atau **Ganti (hanya apabila tiada dinding menggunakannya)**.
4. {{ui:Tambah ke projek}}. Dialog menyenaraikan apa yang ditambah, disalin, diganti atau dikekalkan. Ia ialah satu langkah buat asal.

Jenis baharu terus berada dalam senarai jenis alat Dinding.

## Jenis lantai, bumbung dan siling

Senarai jenis untuk disimpan juga mengandungi jenis lantai, bumbung dan siling projek serta permulaannya (ditandakan Lantai, Bumbung, Siling). Pek boleh membawa keempat-empat jenis; setiap jenis menamakan kelas IFCnya (IfcWallType, IfcSlabType, IfcCoveringType). Jenis lantai, bumbung atau siling yang digunakan oleh elemen tidak diganti daripada pek: ubahnya dalam penyunting jenis.

## Satu jenis sebagai item Pustaka

Tandakan tepat satu jenis dan pilih **Simpan sebagai item Pustaka…**. Ia menyimpan fail `.cctype.json`: item Pustaka bagi jenis Types yang mengandungi satu jenis itu (lapisan, bahan, LOD dan kod pengelasannya). Muat naik dalam Pustaka untuk berkongsi. **Buka pek atau fail IFC** juga membaca item seperti itu dan menambah jenisnya ke projek seperti pek.

## Perkara yang perlu diketahui

- Fail IFC daripada program lain juga boleh dibuka di sini. Setiap jenis dindingnya yang mempunyai lapisan bahan dibaca: nama, bahan dan ketebalan lapisan, serta sebarang rongga, ialah milik fail itu. Lapisan mana yang teras dan apa yang dilakukan setiap lapisan (kemasan, struktur, penebat) diteka; jenis itu ditandakan **(diteka)**, dan anda patut menyemaknya dalam penyunting jenis dinding. Jenis dinding tanpa lapisan ditinggalkan dan dinamakan.
- Bahan yang sudah ada dalam projek dikekalkan seperti sedia ada. Bahan baharu yang namanya sudah diambil mendapat "(pek)" selepas namanya.
- Jenis yang digunakan oleh dinding tidak sekali-kali diganti daripada pek. Ubahnya dalam penyunting jenis dinding, yang mengalihkan dindingnya dengan betul.
- Kod yang ditetapkan pada satu dinding tidak dibawa bersama: ia milik dinding itu. Kod yang ditetapkan pada jenis dibawa.
- Fail dengan medan yang format tidak miliki, lapisan yang bahannya hilang, atau apa-apa yang bukan teks biasa ditolak, dan mesej menyatakan di mana dan sebabnya.
- Belum dibina: jenis lantai, bumbung dan siling (ia tiada jenis dalam versi ini: setiap satu mempunyai ketebalannya sendiri), jenis pintu dan tingkap selain keluarga, serta corak isian (hatch) atau warna daripada fail program lain.
