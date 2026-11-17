---
title: Baca fail projek atau famili
summary: Buka fail .rvt, .rfa, .rte atau .rft dan baca keluarannya, perkongsian kerjanya, maklumat projek, parameter famili, pautan dan gambar pratonton, tanpa program yang menghasilkannya.
keywords: rvt, rfa, rte, rft, fail projek, famili, keluaran, versi, versi mana, binaan, perkongsian kerja, pusat, maklumat projek, pratonton, imej kecil, pautan
from: df3600e1
---

## Apa yang anda akan lakukan

Ketahui apa yang ada dalam fail projek atau famili tanpa membukanya dalam Revit: keluaran mana yang menyimpannya, sama ada ia dikongsi kerja, maklumat projek, dan apa yang ia pautkan. Berguna apabila fail tiba daripada orang lain dan anda perlu tahu keluaran mana untuk dibuka.

## Langkah

1. Klik {{ui:Pilih fail}}.
2. Pilih fail `.rvt`, `.rfa`, `.rte` atau `.rft`.
3. Tunggu sebentar. Baris status berkata "Membaca fail…" dan kemudian "Dibuka *nama fail*".
4. Lihat bahagian atas kad: gambar pratonton yang disimpan dalam fail, jenis fail dan keluaran tempat ia disimpan, serta nama projek.
5. Tatal ke bawah untuk membaca bahagian kad.

## Apa yang anda patut lihat

Kad di tengah, dengan bahagian ini apabila fail mengandunginya:

| Bahagian | Apa yang diberitahu kepada anda |
|---|---|
| File | Nama fail, saiz, jenis (projek, templat projek, famili atau templat famili), keluaran dan binaan tempat ia disimpan, perkongsian kerja, laluan model pusat, tempat ia kali terakhir disimpan, siapa yang menyimpannya, lokal dan GUID dokumen |
| Project information | Medan milik projek sendiri, seperti nama, nombor, pelanggan, alamat dan status. Medan yang masih pada nilai lalai projek baharu ditinggalkan. |
| Family, Family: … | Bagi famili: namanya, kategorinya, keluarannya, kemas kini terakhir dan parameternya, kumpulan demi kumpulan |
| Linked and referenced files | Setiap model dipautkan, pautan CAD, imej dan jadual keynote yang ditunjuk oleh fail, dengan laluan yang disimpan |

Di sebelah kiri, panel {{ui:File}} mengulang fakta utama dan menambah **Read**: berapa banyak fail yang sebenarnya dibaca BimCraft, biasanya kira-kira 40 KB daripada fail yang bersaiz banyak megabait. Di sebelah kanan, panel {{ui:Properties}} memberitahu bahawa sifat elemen memerlukan model 3D.

## Mengapa tiada 3D

Model 3D dan elemen di dalam fail projek disimpan dalam format yang tidak didokumenkan. BimCraft hanya membaca bahagian fail yang didokumenkan atau jelas boleh dibaca: maklumat fail, maklumat projek, data famili, senarai pautan dan gambar pratonton. Ia tidak meneka bahagian yang lain. Untuk melihat model dalam 3D dan membaca sifat elemen, eksport IFC daripada program yang menghasilkan fail itu. Lihat [Dapatkan fail projek ke dalam 3D melalui IFC](topic:rvt-to-ifc).

## Kesilapan biasa

- **Menjangka 3D.** Lihat di atas.
- **Pautan hanya menunjukkan laluan yang disimpan.** Fail yang dibuka sendiri tidak dapat menyemak sama ada pautannya wujud. Buka folder tempat ia berada sebaliknya, dan BimCraft menandakan setiap pautan sebagai dijumpai atau tidak: [Buka seluruh folder projek](topic:open-project-folder).
- **"Fail ini tidak lengkap…"** Fail itu terpotong semasa disalin, dimuat naik atau diselaraskan. Fail pemacu awan yang masih "dalam talian sahaja" juga berbuat demikian. BimCraft tetap membukanya dan hanya menunjukkan apa yang berjaya dipulihkan: notis kuning di bahagian atas kad, bahagian **Dipulihkan daripada fail ini** yang menyenaraikan bahagian yang setiap baitnya terdapat dalam fail, dan **Tiada dalam fail** untuk selebihnya. Tiada apa-apa diisi bagi bahagian yang hilang, jadi keluaran, gambar pratonton atau maklumat projek mungkin hilang apabila ia disimpan selepas tempat potongan. Jika senarai kandungan fail itu sendiri terpotong, tiada apa yang boleh dibuka. Salin semula yang asal dan buka semula untuk fail penuh.
- **"Tiada gambar pratonton dalam fail ini".** Sesetengah fail disimpan tanpa satu. Itu normal.
- **Membuka sandaran secara tidak sengaja.** Fail yang dinamakan seperti `Tower.0004.rvt` ialah sandaran bernombor. Membuka folder mengumpulkannya bersama modelnya.
