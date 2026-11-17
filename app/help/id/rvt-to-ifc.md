---
title: Dari file proyek ke BimCraft melalui IFC
summary: Setelan ekspor IFC yang paling baik dibuka di BimCraft (versi, set properti, base quantities, ruang, file tertaut, koordinat), cara membuka hasilnya, dan apa yang disimpan ekspor.
keywords: ekspor, ekspor ifc, rvt ke ifc, konversi, 3d, geometri, ifc2x3, ifc4, coordination view, reference view, design transfer view, set properti, base quantities, ruang, space, file tertaut, shared coordinates, titik survei, titik dasar proyek, pengaturan
from: 3efd5fc9
---

## Yang akan Anda lakukan

Ubah file proyek menjadi file IFC yang dapat Anda putar, periksa, cek, dan sunting di BimCraft. BimCraft belum membaca model 3D di dalam file `.rvt`, jadi ekspor dilakukan di program yang membuat file itu (Revit); BimCraft membuka hasilnya.

## Langkah

1. Buka proyek di program yang membuatnya. Kartu BimCraft menyebut rilis tempat proyek disimpan.
2. Buka tampilan 3D yang menampilkan apa yang ingin Anda ekspor.
3. Pilih **File > Export > IFC**.
4. Di dialog ekspor, pilih setup (atau **Modify setup…**) dengan setelan di bawah ini.
5. Pilih folder dan nama file, lalu ekspor.
6. Di BimCraft, klik {{ui:Pilih file}} dan pilih file `.ifc` yang baru. Model tertaut yang diekspor sebagai file terpisah terbuka ke dalam adegan yang sama dengan {{ui:Tambahkan model}}.

## Setelan yang paling baik dibuka di sini

| Setelan di pengekspor | Pilih | Alasan |
|---|---|---|
| IFC version | **IFC4 Reference View** untuk melihat, memeriksa, dan takeoff; **IFC2X3 Coordination View 2.0** jika pihak lain memerlukan IFC2X3 | Keduanya terbuka penuh. **IFC4 Design Transfer View** juga terbuka, dengan bentuk yang lebih tepat, tetapi file-nya lebih besar dan lebih lambat. |
| File type | **IFC** (biasa) | BimCraft tidak membuka `.ifczip` atau `.ifcxml`. |
| Phase / visible elements | Fase yang Anda maksud, dan **Export only elements visible in view** saat Anda menyiapkan tampilan 3D untuknya | Membiarkan keluar apa yang sengaja Anda sembunyikan. |
| Property sets | **Export Revit property sets** dan **Export IFC common property sets** | Keduanya menjadi set properti yang ditampilkan BimCraft di {{ui:Properti}}, dan yang dipakai {{ui:Cari}}, {{ui:Warna}}, dan {{ui:Pemeriksaan model}}. |
| Base quantities | **Export base quantities** | {{ui:Total kuantitas}} dan jadwal memakainya (panjang, luas, volume) alih-alih menebak. |
| Rooms and areas | **Export rooms in 3D views** (atau opsi Rooms / Spaces) | Ruang masuk sebagai space: klik {{ui:Ruang}} untuk melihatnya. |
| Linked files | **Export linked files as separate IFCs** | Setiap tautan menjadi file sendiri; buka bersama dengan {{ui:Tambahkan model}} dan keduanya akan sejajar. |
| Coordinate base | **Shared coordinates** (atau titik survei) | File kemudian membawa posisinya di peta (IfcMapConversion), sehingga Ukur › Lokasi, layer peta di tanah, dan point cloud yang ditempatkan dengan koordinat peta berfungsi. Titik dasar proyek menjaga model dekat titik asal, tetapi tanpa posisi petanya. |
| Split walls and columns by level | Aktif, jika Anda menghitung kuantitas per lantai | Bagian setiap lantai menjadi elemen tersendiri. |

## Yang harus Anda lihat

Model dalam 3D, dengan lantai diambil dari level proyek dan informasi proyek di panel {{ui:File}}. **Diekspor dari** menyebut pengekspornya.

## Yang disimpan ekspor, dan yang tidak

- **Disimpan**: geometri, lantai, jenis elemen, nama, tipe, sebagian besar parameter (sebagai set properti), base quantities jika diminta, ruang sebagai space, dan posisi peta dengan shared coordinates.
- **Tidak disimpan**: tampilan, lembar, anotasi, keluarga sebagai keluarga yang dapat disunting, workset, dan design option. File IFC adalah cuplikan elemen model, bukan proyek. Untuk lembar, ekspor DWG dan buka di tampilan 2D.

## Kesalahan umum

- **Parameter tidak ada di BimCraft.** Aktifkan opsi set properti di atas, lalu ekspor lagi.
- **Ruang tidak ada.** Aktifkan opsi ruang, lalu klik {{ui:Ruang}}.
- **Menyimpan sebagai `.ifczip`.** Pilih IFC biasa, atau ekstrak `.ifczip`.
- **Tidak ada posisi peta.** Ekspor dengan shared coordinates; periksa bahwa titik survei proyek sudah diatur.
- **Mengharapkan suntingan kembali.** Suntingan yang Anda simpan di BimCraft masuk ke file IFC baru, bukan ke file proyek.
