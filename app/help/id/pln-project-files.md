---
title: Buka file proyek .pln dan .pla
summary: Apa yang dilakukan BimCraft terhadap file .pln, .pla, .tpl dan .bpn saat ini, dan cara mengekspor IFC dan DWG darinya agar model dan gambarnya dapat dibuka di sini.
keywords: pln, pla, tpl, bpn, file proyek, arsip, templat, cadangan, ekspor ifc, ekspor dwg, penerjemah, zona, layout
from: 41fb921d
---

## Yang akan Anda lakukan

Bawa proyek yang disimpan sebagai `.pln` (proyek), `.pla` (arsip beserta pustakanya), `.tpl` (templat), atau `.bpn` (cadangan) ke BimCraft. Ini adalah file milik Archicad sendiri.

## Yang terbuka saat ini

- **File proyek itu sendiri belum dapat dibuka.** Formatnya tidak dipublikasikan, dan BimCraft belum membacanya. Saat Anda membuka salah satunya, BimCraft menyatakan hal itu dan mengarahkan ke sini.
- **BimCraft memeriksa byte pertama file.** Proyek Archicad dari versi 17 ke atas dimulai dengan tanda tangan pendek yang sama, sehingga BimCraft dapat memastikan bahwa sebuah file adalah proyek Archicad. File dengan nama Archicad yang tidak dimulai seperti itu kemungkinan telah diganti namanya, rusak, atau berasal dari versi lama. Tanda tangan tidak membedakan proyek, arsip, dan templat.
- **Ekspor IFC terbuka sepenuhnya**: model dalam 3D, lantai, zona sebagai ruang, data elemen, set properti, dan klasifikasi, dengan setiap alat BimCraft.
- **Ekspor DWG terbuka** di tampilan 2D, dengan layer dan layout-nya, dan di {{ui:3D}}. Untuk menyuntingnya, gunakan {{ui:Sunting di CadCraft}}.

Atau bawa seluruh proyek sebagai satu zip, dengan tampilan, layout, dan grup properti-nya: lihat [Buka bundel proyek](topic:open-project-bundle).

## Ekspor IFC (model)

1. Buka proyek di Archicad.
2. Pilih **File > Save As**, lalu pilih **IFC** sebagai tipe file.
3. Pilih penerjemah IFC (istilah Archicad untuk sekumpulan pengaturan ekspor IFC). Yang untuk **IFC4 Reference View** atau **IFC2X3 Coordination View 2.0** cocok untuk BimCraft. IFC4X3 juga terbuka.
4. Pilih yang akan diekspor: seluruh proyek, atau hanya elemen yang terlihat di lantai yang sedang Anda lihat.
5. Simpan, lalu klik {{ui:Pilih file}} di BimCraft dan pilih file `.ifc`.

Periksa hal-hal berikut di pengaturan penerjemah sebelum mengekspor:

- **Zona**: ekspor, agar ruangan masuk sebagai ruang. Klik {{ui:Ruang}} di BimCraft untuk melihatnya.
- **Properti dan klasifikasi**: ekspor, agar tampil di {{ui:Properti}} dan dapat digunakan di {{ui:Cari}}, {{ui:Warna}}, dan {{ui:Total kuantitas}}.
- **`.ifc` biasa**, bukan `.ifczip` atau `.ifcxml`. BimCraft hanya membuka `.ifc` biasa.

## Ekspor DWG (gambar)

1. Buka denah, potongan, atau layout yang Anda inginkan.
2. Pilih **File > Save As**, lalu pilih **DWG** sebagai tipe file.
3. Pilih penerjemah DXF-DWG, lalu simpan.
4. Untuk satu set lembar, simpan layout dari Layout Book, atau terbitkan sebagai DWG.
5. Buka `.dwg` di BimCraft. Gambar yang ditautkan oleh ekspor ikut terbuka bersamanya jika berada di folder yang sama; lihat [Gambar tertaut dan gambar raster](topic:dwg-linked-files).

## Pemecahan masalah

- **"… adalah proyek Archicad: byte pertamanya menyatakan demikian."** Ekspor IFC atau DWG seperti di atas, lalu buka file itu.
- **"… dinamai seperti file Archicad tetapi tidak dimulai seperti itu."** Periksa dari mana file berasal: bisa jadi jenis file lain yang diberi nama baru (coba buka dengan ekstensi aslinya), salinan yang belum selesai, atau proyek dari versi sebelum 17. Buka di Archicad jika bisa, lalu ekspor IFC atau DWG.
- **Model terbuka tanpa ruangan.** Zona tidak diekspor. Aktifkan di penerjemah IFC lalu ekspor ulang.
- **Bukaan tidak terpotong.** BimCraft menyatakannya di bawah **Belum digambar** di panel {{ui:File}}. Ekspor ulang; jika tetap, buka model di program yang membuatnya dan periksa bukaannya di sana.
- **Teks di DWG tampak berbeda.** Ekspor mungkin mempertahankan font yang tidak dimiliki BimCraft; BimCraft menggambar teks dengan font sans-serif biasa.

Lihat juga [Bawa file proyek ke 3D lewat IFC](topic:rvt-to-ifc) dan [Apa yang dibaca BimCraft dari setiap format](topic:file-formats).
