---
title: Apa yang BimCraft baca daripada setiap format
summary: Apa tepat yang BimCraft baca daripada fail IFC, projek dan keluarga, DWG dan DXF, dan apa yang ia tinggalkan.
keywords: format, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versi, keserasian, apa yang dibaca
from: 9b8dfb4f
---

## IFC

| Baca | Butiran |
|---|---|
| Geometri | Setiap elemen yang mempunyai bentuk, diwarnakan seperti yang dinyatakan oleh fail. Bilik dan ruang dilukis lut sinar dan disembunyikan pada mulanya |
| Tingkat | Tingkat bangunan mengikut tertib aras, dan elemen yang berada pada setiap tingkat. Elemen yang tiada tingkat dikumpulkan sebagai "Tiada pada tingkat" |
| Kiraan elemen | Bilangan elemen setiap jenis (dinding, pintu, papak…), ditunjukkan dalam {{ui:Elements}} |
| Fakta projek | Nama projek, nama panjang dan fasa; skema; program pengeksport, pengarang dan tarikh eksport daripada pengepala fail |
| Data elemen | Nama, jenis, jenis objek, tag, huraian, GlobalId; setiap set sifat dan set kuantiti pada elemen dan pada jenisnya |

Boleh disunting: nama, jenis objek, tag, huraian, dan nilai sifat tunggal. Disimpan sebagai fail IFC baharu. Skema IFC2X3, IFC4 dan IFC4X3 dibuka, dibaca oleh enjin IFC BimCraft sendiri; apa-apa yang belum boleh dilukis disenaraikan di bawah **Belum dilukis** dalam panel {{ui:File}}. Model dialihkan ke asal apabila dibuka, jadi model yang diletakkan jauh daripadanya tetap ditunjukkan di tengah skrin. `.ifczip` dan `.ifcxml` tidak dibuka.

## Fail projek dan keluarga

`.rvt` projek, `.rte` templat projek, `.rfa` keluarga dan `.rft` templat keluarga.

| Baca | Butiran |
|---|---|
| Maklumat fail | Keluaran dan binaan, perkongsian kerja, laluan model pusat, laluan terakhir disimpan, nama pengguna, lokal, GUID dokumen |
| Maklumat projek | Medan projek itu sendiri (nama, nombor, pelanggan, alamat, status…), tanpa nilai lalai projek baharu |
| Maklumat keluarga | Nama keluarga, kategori, keluaran, kemas kini terakhir, dan parameternya mengikut kumpulan |
| Pautan | Senarai model yang dipautkan, pautan CAD, imej dan jadual keynote yang ditunjuk oleh fail |
| Gambar pratonton | Imej kecil yang disimpan dalam fail |

Tidak dibaca: model 3D, elemen, paparan, helaian dan jadual. Ia disimpan dalam format yang tidak didokumenkan. BimCraft hanya membaca beberapa puluh kilobait daripada setiap fail, jadi saiz fail hampir tidak penting.

## Fail projek .pln, .pla, .tpl dan .bpn

Belum dibaca: BimCraft menyatakannya apabila anda membuka satu. Eksport IFC untuk model dan DWG untuk lukisan; lihat [Buka fail projek .pln dan .pla](topic:pln-project-files).

## DWG dan DXF

| Baca | Butiran |
|---|---|
| Ruang | Ruang model dan setiap helaian (layout), mengikut tertib tab |
| Viewport | Viewport setiap helaian, dengan skala, pusingan dan lapisan beku |
| Lapisan | Nama, warna, hidup/mati, beku, bendera plot dan ketebalan garisan |
| Objek | Garisan, polygaris, lengkok, bulatan, elips, splin, hatch dan pepejal, teks dan teks berbilang baris, blok dan atribut, dimensi, petunjuk dan multipetunjuk, jadual, titik, imej |
| Lukisan yang dipautkan | Dilukis di tempat ia dimasukkan, apabila failnya ditemui |
| Imej | Dilukis daripada fail gambar apabila ditemui (PNG, JPEG, GIF, BMP, WebP; bukan TIFF) |
| Tag peralatan | Tag item perkhidmatan makanan (atribut `KCL-ITEM`), untuk jadual peralatan |

Apa-apa lagi dikira di bawah **Belum dilukis**, tidak sekali-kali diteka. Format DWG dari AutoCAD 2000 hingga 2018 ialah yang telah disemak (fail R13 dan R14 juga diterima, tetapi tiada dalam set ujian; DWG yang lebih lama tidak dibuka); panel {{ui:Drawing}} menunjukkan kod format (seperti AC1032). Fail DXF setiap versi dibuka, termasuk R12. Kedua-duanya dibaca oleh pembaca BimCraft sendiri, dalam tab ini. Tiada apa disimpan semula ke DWG atau DXF.

## Dalam folder

| Jenis | Sambungan fail | Dalam laporan |
|---|---|---|
| Model | `.rvt` `.rfa` `.rte` `.rft` | Dikumpulkan dengan sandaran bernombor, diperiksa kesihatannya, kad dibaca, pautan diperiksa |
| IFC | `.ifc` | Disenaraikan; dibuka dalam 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Disenaraikan bersama model yang memautkannya; DWG dan DXF dibuka dalam 2D, DGN tidak |
| Sisa | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Disenaraikan di bawah **Ketepikan** |
| Folder penyelenggaraan | `*_backup`, `*_log`, `Revit_temp`, folder tersembunyi | Disenaraikan di bawah **Ketepikan**, tidak dibaca |

Lihat [Laporan folder: peranan, status dan pautan](topic:folder-roles).
