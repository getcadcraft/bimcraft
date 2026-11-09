---
title: File yang dibuka dan disimpan BimCraft
summary: Setiap format yang dibuka BimCraft, apa yang dipertahankannya, apa yang disimpannya, di mana file yang disimpan berada, dan apa yang berubah antara peramban serta saat Anda offline.
keywords: format, buka, simpan, ekspor, unduh, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, unggah, privasi, ukuran file
from: a7275dbf
---

BimCraft membaca file di komputer Anda, di tab peramban. **Tidak ada yang diunggah** ke CadCraft atau pihak lain. Saat Anda menyimpan, BimCraft memberikan peramban sebuah file baru untuk diunduh; BimCraft tidak pernah menimpa file yang Anda buka.

## Yang dibuka

| Format | Ekstensi | Yang Anda dapatkan |
|---|---|---|
| IFC | `.ifc` | Model dalam 3D, lantai, jumlah elemen, dan properti setiap elemen. Nama, tag, dan nilai properti tunggal dapat diubah. |
| File proyek dan keluarga | `.rvt` `.rfa` `.rte` `.rft` | Kartu file: rilis, build, worksharing, informasi proyek, parameter keluarga, file tertaut, dan gambar pratinjau. Tanpa 3D. |
| DWG | `.dwg` | Gambar dalam 2D: ruang model, setiap lembar, layer, gambar tertaut, gambar, dan tampilan cetak. Ruang model juga dalam 3D. Format dari AutoCAD 2000 sampai 2018 adalah yang sudah diperiksa. |
| DXF | `.dxf` | Sama seperti DWG. |
| STEP | `.step` `.stp` | Sebuah bagian, peralatan, atau model pemasok (AP203, AP214, AP242) dalam 3D: setiap solid menjadi satu elemen (building element proxy) dari model IFC kecil pada satu lantai, dibaca sebagai segitiga pada ukuran sebenarnya, berupa rakitan dengan setiap bagian di tempat yang ditentukan file. Setelah itu bekerja seperti IFC lainnya: properti, potongan, ukur, simpan sebagai IFC. Warna dan pohon rakitan tidak dibaca. |
| Point cloud | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Hasil scan di tampilan 3D, di samping model atau sendirian: lihat [Tampilkan point cloud di samping model](topic:point-clouds). |
| Bundle proyek | `.ccbundle.zip` | Model beserta tampilan, lembar, dan grup properti: lihat [Buka bundle proyek](topic:open-project-bundle). |
| Folder | apa pun | Laporan setiap model, gambar, dan bundle proyek di dalamnya. Setiap IFC, model, gambar, atau bundle dalam laporan dibuka dengan satu klik. |

[Yang dibaca BimCraft dari setiap format](topic:file-formats) dijelaskan lebih rinci.

BimCraft menentukan jenis sebuah file dari byte pertamanya serta namanya, sehingga file proyek dengan ekstensi yang tidak biasa tetap terbuka sebagai kartu file.

### Tidak dibuka

- `.ifczip` dan `.ifcxml`: BimCraft menampilkan ".ifczip belum didukung. Simpan atau ekspor model sebagai file .ifc biasa." Ekstrak `.ifczip` (isinya berupa `.ifc` biasa) atau ekspor ulang sebagai IFC biasa.
- Gambar DGN ditampilkan dalam laporan folder, tetapi tidak dibuka.
- PDF, gambar, dan file kantor tidak dibuka sendiri. Gambar dipakai sebagai gambar di dalam DWG, dan {{ui:Build}} › {{ui:Dari gambar…}} mengubah halaman PDF atau hasil pindai menjadi dinding: lihat [Dinding dari sekumpulan denah](topic:walls-from-plans).

## Yang disimpan

| Anda klik | Anda dapatkan | Lokasi |
|---|---|---|
| {{ui:Simpan sebagai IFC}} | File IFC baru dengan hasil edit Anda, dinamai "*nama asli* (edited).ifc" | Folder unduhan peramban Anda |
| {{ui:Unduh CSV}} pada jadwal peralatan | CSV dari item dalam daftar, dinamai "*nama gambar* equipment.csv" | Folder unduhan peramban Anda |

Hal lain disimpan di tempat dibuatnya, masing-masing dalam topiknya sendiri: {{ui:USD}} ([Ekspor model sebagai USD](topic:usd)), {{ui:Collada}} (.dae dan .kmz untuk Google Earth: [Ekspor model sebagai Collada atau untuk Google Earth](topic:collada)), {{ui:Untuk render}} berupa .glb, gambar render, lembar dan denah sebagai PDF, jadwal dan daftar sebagai CSV, isu BCF, spreadsheet COBie, file keluarga, serta hasil scan yang terdaftar sebagai LAS atau E57. BimCraft tidak menyimpan DWG, DXF, atau file proyek, dan tidak pernah mengubah file yang Anda buka.

:::chromium
Chrome dan Edge menyimpan unduhan ke folder yang diatur di pengaturannya, biasanya Unduhan. Untuk diminta menentukan lokasi setiap kali, aktifkan "Tanyakan lokasi penyimpanan setiap file sebelum mengunduh" di pengaturan unduhan peramban.
:::

:::firefox
Firefox menyimpan ke folder Unduhan kecuali Anda mengaturnya menjadi "Selalu tanyakan lokasi penyimpanan file" di pengaturannya.
:::

:::safari
Safari menyimpan ke Unduhan kecuali Anda memilih folder lain di **Safari > Pengaturan > Umum > Lokasi unduhan file**.
:::

## Menyimpan untuk kedua kalinya

Setiap penyimpanan mengunduh seluruh model dengan **setiap edit sejak Anda membukanya**, bukan hanya edit setelah penyimpanan terakhir. Daftar {{ui:Perubahan}} kembali kosong setelah setiap penyimpanan, jadi Anda tidak dapat mengurungkan melewati sebuah penyimpanan. Untuk mulai lagi dari yang asli, buka kembali file asli.

## File besar dan memori

- **IFC** dibaca sepenuhnya ke memori tab, dan geometri 3D memakan memori tambahan. Model beberapa ratus megabita bisa terlalu berat untuk laptop. Di atas 1.5 juta segitiga, tepi dimatikan untuk menghemat memori ("Tepi dimatikan untuk model yang sangat besar").
- **File proyek** tidak dibaca penuh. BimCraft hanya membaca bagian kecil yang dibutuhkan, sekitar 40 KB sampai 100 KB berapa pun ukuran filenya, sehingga model pusat 500 MB di drive jaringan terbuka dalam sekejap.
- **DWG dan DXF** dibaca sepenuhnya. Gambar yang sangat besar menampilkan "Gambar ini sangat besar; hanya sebagian yang ditampilkan."
- **Folder** dengan hingga 20.000 file terbuka. Hanya beberapa kilobyte yang dibutuhkan setiap kartu model yang dibaca.

Lihat [Peramban, perangkat, dan memori](topic:platforms) untuk informasi lainnya.

## Daring dan luring

Membuka file tidak pernah membutuhkan internet. Satu pembaca dimuat dari situs saat pertama kali dibutuhkan: mesin IFC, saat pertama kali Anda membuka model IFC ("Memulai mesin IFC…"). Pembaca DWG dan DXF merupakan bagian dari aplikasi.

:::offline
Anda sedang offline. Jika tombol di bilah aplikasi bertuliskan {{ui:Siap offline}}, setiap format terbuka seperti biasa. Jika tidak, model IFC tidak dapat dibuka kecuali sudah pernah dibuka di tab ini: sambungkan kembali terlebih dahulu. Lihat [Daring dan luring](topic:online-offline).
:::

Untuk memakai BimCraft tanpa koneksi, klik {{ui:Simpan untuk offline}} di bilah aplikasi saat Anda daring dan tunggu hingga {{ui:Siap offline}}. Salinan tersimpan berukuran sekitar 33 MB; salinan ini mencakup mesin IFC, sehingga model IFC juga terbuka secara offline. [Bekerja offline](common:offline) menjelaskan salinan tersimpan secara umum.

## Penyimpanan cloud

Penyimpanan cloud belum tersedia. Simpan salinan yang sudah Anda edit di komputer sendiri atau server file kantor Anda, seperti file lainnya. Lihat [File Anda](common:your-files).
