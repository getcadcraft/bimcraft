---
title: Medan panel Sifat
summary: Maksud setiap medan dalam panel Sifat serta panel Fail, Lukisan dan Folder, dan medan mana yang boleh anda ubah.
keywords: sifat, medan, atribut, globalid, guid, salin, salin nilai, salin semua, csv, papan keratan, nombor siri, tag, jenis objek, baris, id express, set sifat, pset, kuantiti, skema, panel fail
from: fe55b435
---

## Elemen IFC

Bahagian atas panel {{ui:Properties}} menunjukkan jenis elemen tanpa awalan "Ifc" (contohnya "Door", "WallStandardCase", "FurnishingElement") dan namanya, atau "Unnamed".

| Medan | Maksud | Boleh disunting |
|---|---|---|
| Name | Nama elemen, selalunya nama famili dan jenis daripada pengeksport | Ya |
| Type | Nama jenis elemen, apabila ia mempunyai satu | Tidak |
| Object type | Penerangan jenis bebas teks yang diisi sesetengah pengeksport | Ya |
| Tag | Tag atau tanda elemen; kebanyakan pengeksport menulis ID elemen di sini | Ya |
| Description | Teks bebas | Ya |
| GlobalId | Pengecam IFC kekal 22 aksara elemen, sama dalam setiap eksport elemen yang sama | Tidak |
| Line | Nombor baris elemen (`#1234`) dalam fail IFC ini. Ia berubah antara eksport | Tidak |

Di bawah ialah **set sifat**, disusun mengikut nama:

- Setiap set dibuka dan ditutup apabila anda klik namanya. Tiga yang pertama dibuka.
- Set yang ditandai "(type)" tergolong pada jenis elemen: "Sifat jenis: perubahan di sini terpakai kepada setiap elemen bagi jenis ini."
- Set kuantiti (panjang, luas, isipadu, kiraan, berat) hanya boleh dibaca.
- Senarai dan nilai beretnum dipaparkan, hanya boleh dibaca.
- Nilai Ya/Tidak dipaparkan sebagai **Ya** atau **Tidak**.
- Nombor dibundarkan kepada empat titik perpuluhan untuk paparan. Panjang (sifat panjang atau panjang kuantiti) dipaparkan dalam {{ui:Units}} yang dipilih pada bar alat, dengan tanda unit di sebelahnya, dan anda boleh menaip nilai baharu dalam unit itu atau dengan tanda unit lain (2.4 m, 8'-0"): BimCraft menulis semula nombor fail itu sendiri. Nombor lain dipaparkan seperti yang ada dalam fail.
- Nilai kosong dipaparkan sebagai *kosong*. Nilai yang disunting ditebalkan dengan bar biru di sebelahnya.

## Salin nilai

Setiap nilai dalam {{ui:Properties}} mempunyai butang salin kecil di sebelahnya: klik untuk meletakkan nilai itu pada papan keratan tepat seperti yang dipaparkan, contohnya GlobalId, nombor siri atau mana-mana nilai set sifat. Menyalin tidak pernah memulakan suntingan.

Di bahagian atas, {{ui:Copy all}} menyalin setiap nilai elemen sebagai teks, set demi set, dan {{ui:Copy as CSV}} menyalin nilai sebagai baris kumpulan, sifat dan nilai untuk ditampal ke dalam hamparan; nilai kosong dikekalkan supaya setiap medan mempunyai baris. Ini berfungsi sama bagi elemen daripada model lain yang dibuka; apabila lebih daripada satu model dibuka, CSV bermula dengan lajur Model yang menamakan fail itu.

## Panel Fail (IFC)

| Medan | Maksud |
|---|---|
| File, Size | Fail yang anda buka |
| Schema | Versi IFC, seperti IFC2X3 atau IFC4 |
| Project | Nama projek dan nama panjangnya |
| Phase | Fasa projek, jika pengeksport menulisnya |
| Exported from | Program pengeksport, daripada pengepala fail |
| Author | Pengarang dalam pengepala fail |
| Exported | Tarikh dan masa dalam pengepala fail |
| Elements | Berapa banyak elemen yang mempunyai bentuk dilukis |
| Triangles | Berapa banyak segi tiga yang dibentuk oleh bentuknya; ukuran betapa berat modelnya |

## Panel Fail (projek dan fail famili)

| Medan | Maksud |
|---|---|
| Kind | Project, Project template, Family atau Family template |
| Saved in | Keluaran yang terakhir menyimpan fail |
| Build | Binaan tepat bagi keluaran itu |
| Read | Berapa banyak fail yang dibaca BimCraft, daripada saiznya |

## Panel Lukisan (DWG dan DXF)

| Medan | Maksud |
|---|---|
| Format | Keluaran lukisan itu disimpan, dengan kod formatnya, seperti AC1032 |
| Units | Unit sisipan lukisan, apabila ditetapkan |
| Entities | Berapa banyak objek yang dibaca |
| Layers | Berapa banyak lapisan |
| Sheets | Berapa banyak helaian (layout), atau None |
| Linked drawings | Berapa banyak lukisan yang dipautkan ditemui dan dimuatkan |
| Equipment | Berapa banyak item peralatan ditanda pada helaian |

## Panel Folder

| Medan | Maksud |
|---|---|
| Folder, Files, Size | Folder yang anda buka, berapa banyak fail yang dimilikinya dan jumlah saiznya |
| Models | Fail projek dan famili, setiap satu dengan sandarannya dikira sekali |
| CAD drawings, IFC models | Berapa banyak daripada setiap satu |
| Problems | Berapa banyak salinan model yang tidak lengkap atau tidak dapat dibaca, atau None |
