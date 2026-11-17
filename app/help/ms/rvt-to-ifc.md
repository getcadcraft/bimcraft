---
title: Daripada fail projek ke BimCraft melalui IFC
summary: Tetapan eksport IFC yang paling baik dibuka dalam BimCraft (versi, set sifat, kuantiti asas, bilik, model dipautkan, koordinat), cara membuka hasilnya, dan apa yang dikekalkan oleh eksport.
keywords: eksport, eksport ifc, rvt ke ifc, tukar, 3d, geometri, ifc2x3, ifc4, paparan koordinasi, paparan rujukan, paparan pemindahan reka bentuk, set sifat, kuantiti asas, bilik, ruang, fail dipautkan, koordinat dikongsi, titik tinjauan, titik asas projek, tetapan
from: 3efd5fc9
---

## Apa yang akan anda lakukan

Tukarkan fail projek kepada fail IFC yang anda boleh orbit, periksa, semak dan sunting dalam BimCraft. BimCraft belum membaca model 3D di dalam fail `.rvt`, jadi eksport berlaku dalam program yang membuat fail itu (Revit); BimCraft membuka hasilnya.

## Langkah

1. Buka projek dalam program yang membuatnya. Kad BimCraft menamakan keluaran tempat ia disimpan.
2. Buka paparan 3D yang menunjukkan apa yang anda mahu eksport.
3. Pilih **File > Export > IFC**.
4. Dalam dialog eksport, pilih persediaan (atau **Modify setup…**) dengan tetapan di bawah.
5. Pilih folder dan nama fail, dan eksport.
6. Dalam BimCraft, klik {{ui:Pilih fail}} dan pilih fail `.ifc` yang baharu. Model dipautkan yang dieksport sebagai fail sendiri dibuka ke dalam adegan yang sama dengan {{ui:Tambah model}}.

## Tetapan yang paling baik dibuka di sini

| Tetapan dalam pengeksport | Pilih | Sebab |
|---|---|---|
| Versi IFC | **IFC4 Reference View** untuk melihat, menyemak dan mengambil kuantiti; **IFC2X3 Coordination View 2.0** apabila orang lain memerlukan IFC2X3 | Kedua-duanya dibuka sepenuhnya. **IFC4 Design Transfer View** turut dibuka, dengan bentuk yang lebih tepat, tetapi fail lebih besar dan lebih perlahan. |
| Jenis fail | **IFC** (biasa) | BimCraft tidak membuka `.ifczip` atau `.ifcxml`. |
| Fasa / elemen yang kelihatan | Fasa yang anda maksudkan, dan **Export only elements visible in view** apabila anda menyediakan paparan 3D untuknya | Meninggalkan apa yang anda sembunyikan dengan sengaja. |
| Set sifat | **Export Revit property sets** dan **Export IFC common property sets** | Ia menjadi set sifat yang BimCraft tunjukkan dalam {{ui:Sifat}}, dan yang digunakan oleh {{ui:Cari}}, {{ui:Warna}} dan {{ui:Semakan model}}. |
| Kuantiti asas | **Export base quantities** | {{ui:Jumlah kuantiti}} dan jadual menggunakannya (panjang, luas, isipadu) dan bukannya meneka. |
| Bilik dan kawasan | **Export rooms in 3D views** (atau pilihan Rooms / Spaces) | Bilik tiba sebagai ruang: klik {{ui:Ruang}} untuk melihatnya. |
| Fail dipautkan | **Export linked files as separate IFCs** | Setiap pautan menjadi fail sendiri; buka bersama dengan {{ui:Tambah model}} dan ia akan sejajar. |
| Asas koordinat | **Shared coordinates** (atau titik tinjauan) | Fail kemudian membawa kedudukannya pada peta (IfcMapConversion), jadi Ukur › Lokasi, lapisan peta di atas tanah dan awan titik yang diletakkan mengikut koordinat peta berfungsi. Titik asas projek memastikan model berhampiran asalnya, tetapi tanpa kedudukan petanya. |
| Pecahkan dinding dan tiang mengikut aras | Hidup, apabila anda mengambil kuantiti mengikut tingkat | Bahagian setiap tingkat ialah elemen sendiri. |

## Apa yang anda patut lihat

Model dalam 3D, dengan tingkat diambil daripada aras projek dan maklumat projek dalam panel {{ui:Fail}}. **Exported from** menamakan pengeksport.

## Apa yang dikekalkan oleh eksport, dan apa yang tidak

- **Dikekalkan**: geometri, tingkat, jenis elemen, nama, jenis, kebanyakan parameter (sebagai set sifat), kuantiti asas apabila diminta, bilik sebagai ruang, dan kedudukan peta dengan koordinat dikongsi.
- **Tidak dikekalkan**: paparan, helaian, anotasi, keluarga sebagai keluarga yang boleh disunting, worksets dan design options. Fail IFC ialah gambar keadaan elemen model, bukan projek. Untuk helaian, eksport DWG dan buka dalam paparan 2D.

## Kesilapan biasa

- **Parameter hilang dalam BimCraft.** Hidupkan pilihan set sifat di atas dan eksport semula.
- **Bilik hilang.** Hidupkan pilihan bilik, kemudian klik {{ui:Ruang}}.
- **Menyimpan sebagai `.ifczip`.** Pilih IFC biasa, atau nyahzipkan `.ifczip`.
- **Tiada kedudukan peta.** Eksport dengan koordinat dikongsi; semak sama ada titik tinjauan projek telah ditetapkan.
- **Menjangka suntingan mengalir kembali.** Suntingan yang anda simpan dalam BimCraft masuk ke fail IFC baharu, bukan ke fail projek.
