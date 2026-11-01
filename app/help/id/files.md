---
title: File yang dibuka dan disimpan BimCraft
summary: Setiap format yang dibuka BimCraft, apa yang dipertahankan, apa yang disimpan, ke mana file tersimpan, dan apa yang berbeda antarperamban serta saat Anda offline.
keywords: format, buka, simpan, ekspor, unduh, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, unggah, privasi, ukuran file
from: a1f0161b
---

BimCraft membaca file di komputer Anda, di dalam tab peramban. **Tidak ada yang diunggah** ke CadCraft atau pihak lain. Saat Anda menyimpan, BimCraft memberi peramban sebuah file baru untuk diunduh; BimCraft tidak pernah menimpa file yang Anda buka.

## Yang dapat dibuka

| Format | Ekstensi | Yang Anda dapatkan |
|---|---|---|
| IFC | `.ifc` | Model dalam 3D, lantai, jumlah elemen, dan properti setiap elemen. Nama, tag, dan nilai properti tunggal dapat diubah. |
| File proyek dan family | `.rvt` `.rfa` `.rte` `.rft` | Kartu file: rilis, build, worksharing, informasi proyek, parameter family, file tertaut, dan gambar pratinjau. Tanpa 3D. |
| DWG | `.dwg` | Gambar dalam 2D: ruang model, setiap lembar, layer, gambar tertaut, gambar raster, dan tampilan cetak. Ruang model juga dalam 3D. Format dari AutoCAD 2000 sampai 2018 adalah yang sudah diperiksa. |
| DXF | `.dxf` | Sama seperti DWG. |
| STEP | `.step` `.stp` | Sebuah part, peralatan, atau model pemasok (AP203, AP214, AP242) dalam 3D: setiap solid menjadi satu elemen (proksi elemen bangunan) dalam model IFC kecil pada satu lantai, dibaca sebagai segitiga pada ukuran sebenarnya, dan rakitan dengan setiap part di tempat file menempatkannya. Selanjutnya berfungsi seperti IFC lain: properti, potongan, ukur, simpan sebagai IFC. Warna dan pohon rakitan tidak dibaca. |
| Point cloud | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Hasil scan di tampilan 3D, di samping model atau sendiri: lihat [Menampilkan point cloud di samping model](topic:point-clouds). |
| Bundel proyek | `.ccbundle.zip` | Model beserta tampilan, layout, dan grup propertinya: lihat [Membuka bundel proyek](topic:open-project-bundle). |
| Folder | apa saja | Laporan setiap model, gambar, dan bundel proyek di dalamnya. Setiap IFC, model, gambar, atau bundel dalam laporan dapat dibuka dengan satu klik. |

[Apa yang dibaca BimCraft dari setiap format](topic:file-formats) membahasnya secara rinci.

BimCraft menentukan jenis file dengan melihat byte pertamanya selain namanya, sehingga file proyek dengan ekstensi tidak biasa tetap terbuka sebagai kartu file.

### Tidak dapat dibuka

- `.ifczip` dan `.ifcxml`: BimCraft menampilkan ".ifczip belum didukung. Simpan atau ekspor model sebagai file .ifc biasa." Ekstrak `.ifczip` (isinya `.ifc` biasa) atau ekspor ulang sebagai IFC biasa.
- Gambar DGN tercantum dalam laporan folder tetapi tidak dapat dibuka.
- PDF, gambar, dan file perkantoran tidak dapat dibuka sendiri. Gambar dipakai sebagai gambar raster di dalam DWG, dan {{ui:Bangun}} › {{ui:Dari gambar…}} mengubah halaman PDF atau hasil scan menjadi dinding: lihat [Dinding dari satu set denah](topic:walls-from-plans).

## Yang disimpan

| Anda mengklik | Anda mendapatkan | Lokasi |
|---|---|---|
| {{ui:Simpan sebagai IFC}} | File IFC baru berisi hasil edit Anda, bernama "*nama asli* (edited).ifc" | Folder unduhan peramban Anda |
| {{ui:Unduh CSV}} di jadwal peralatan | CSV berisi item dalam daftar, bernama "*nama gambar* equipment.csv" | Folder unduhan peramban Anda |

Hal lain disimpan di tempat pembuatannya, masing-masing dalam topiknya sendiri: {{ui:USD}} ([Mengekspor model sebagai USD](topic:usd)), .glb {{ui:Untuk render}}, gambar hasil render, lembar dan denah sebagai PDF, jadwal dan daftar sebagai CSV, isu BCF, spreadsheet COBie, file family, dan scan yang sudah diregistrasi sebagai LAS atau E57. BimCraft tidak menyimpan DWG, DXF, atau file proyek, dan tidak pernah mengubah file yang Anda buka.

:::chromium
Chrome dan Edge menyimpan unduhan ke folder yang diatur di pengaturannya, biasanya Downloads. Agar ditanya lokasi penyimpanan setiap kali, aktifkan "Tanyakan lokasi penyimpanan setiap file sebelum mengunduh" di pengaturan unduhan peramban.
:::

:::firefox
Firefox menyimpan ke folder Downloads kecuali Anda mengaturnya ke "Selalu tanya tempat menyimpan file" di pengaturannya.
:::

:::safari
Safari menyimpan ke Downloads kecuali Anda memilih folder lain di **Safari > Pengaturan > Umum > Lokasi unduhan file**.
:::

## Menyimpan untuk kedua kalinya

Setiap penyimpanan mengunduh seluruh model dengan **setiap edit sejak Anda membukanya**, bukan hanya edit setelah penyimpanan terakhir. Daftar {{ui:Perubahan}} kosong lagi setelah setiap penyimpanan, jadi Anda tidak dapat mengurungkan melewati penyimpanan. Untuk memulai lagi dari file asli, buka kembali file aslinya.

## File besar dan memori

- File **IFC** dibaca seluruhnya ke memori tab, dan geometri 3D memerlukan memori tambahan. Model berukuran beberapa ratus megabyte bisa terlalu besar untuk laptop. Di atas 1,5 juta segitiga, tepi dimatikan untuk menghemat memori ("Tepi dimatikan untuk model yang sangat besar").
- **File proyek** tidak dibaca seluruhnya. BimCraft hanya membaca bagian kecil yang diperlukan, sekitar 40 KB sampai 100 KB berapa pun besar filenya, sehingga model pusat 500 MB di drive jaringan terbuka dalam sekejap.
- File **DWG dan DXF** dibaca seluruhnya. Gambar yang sangat besar menampilkan "Gambar ini sangat besar; hanya sebagian yang ditampilkan."
- **Folder** hingga 20.000 file dapat dibuka. Hanya beberapa kilobyte yang diperlukan setiap kartu model yang dibaca.

Lihat [Peramban, perangkat, dan memori](topic:platforms) untuk selengkapnya.

## Online dan offline

Membuka file tidak pernah memerlukan internet. Satu pembaca dimuat dari situs saat pertama kali diperlukan: mesin IFC, saat pertama kali Anda membuka model IFC ("Memulai mesin IFC…"). Pembaca DWG dan DXF adalah bagian dari aplikasi.

:::offline
Anda sedang offline. Jika tombol di bilah aplikasi bertuliskan {{ui:Siap offline}}, setiap format terbuka seperti biasa. Jika tidak, model IFC tidak dapat dibuka kecuali ada yang sudah dibuka di tab ini: sambungkan kembali dahulu. Lihat [Online dan offline](topic:online-offline).
:::

Untuk memakai BimCraft tanpa koneksi, klik {{ui:Simpan untuk offline}} di bilah aplikasi saat Anda online dan tunggu sampai {{ui:Siap offline}}. Salinan yang disimpan berukuran sekitar 33 MB; salinan itu menyertakan mesin IFC, sehingga model IFC juga terbuka secara offline. [Bekerja offline](common:offline) menjelaskan salinan tersimpan secara umum.

## Penyimpanan cloud

Penyimpanan cloud belum tersedia. Simpan salinan hasil edit Anda di komputer sendiri atau di server file kantor, seperti file lainnya. Lihat [File Anda](common:your-files).
