---
title: Memulai BimCraft
summary: Apa yang dilakukan BimCraft saat ini, cara membuka model pertama Anda, melihatnya dalam 3D, mengubah satu nilai, dan menyimpan salinan.
keywords: mulai, pertama kali, buka, ifc, rvt, dwg, panduan cepat, pengantar, penampil, bim
from: fc2dea19
---

BimCraft adalah aplikasi model bangunan dalam keluarga CadCraft. Pada build ini BimCraft **membuka, membaca, dan memeriksa** file bangunan, serta **mengedit data dalam model IFC**. BimCraft belum menggambar atau memodelkan elemen baru. Anggap saja sebagai penampil dan pemeriksa model yang juga memungkinkan Anda memperbaiki nama, tag, dan nilai properti dalam file IFC.

Yang dapat dibuka:

| File | Yang Anda dapatkan |
|---|---|
| IFC (`.ifc`) | Model lengkap dalam 3D: orbit, lantai, properti elemen, serta pengeditan nama dan nilai properti |
| File proyek dan family (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartu file: rilis tempat file disimpan, informasi proyek, gambar pratinjau, dan file tertaut. Tanpa 3D. |
| DWG dan DXF | Gambar dalam 2D: ruang model dan setiap lembar, layer, gambar tertaut, tampilan cetak, dan jadwal peralatan untuk gambar dapur komersial yang diberi tag |
| Folder proyek | Laporan setiap model dalam folder: cadangan, tautan, salinan yang rusak, dan saran file mana yang sebaiknya dibuka lebih dulu |

Semuanya berlangsung di peramban Anda, di komputer Anda. **Tidak ada yang diunggah.** Lihat [File yang dibuka dan disimpan BimCraft](topic:files) untuk rinciannya.

## Membuka BimCraft

1. Buka BimCraft di peramban versi terbaru. Chrome, Edge, Firefox, dan Safari semuanya berfungsi; [Peramban, perangkat, dan memori](topic:platforms) mencantumkan perbedaannya.
2. Tunggu layar kosong yang bertuliskan "Buka model bangunan."

:::note
BimCraft berjalan di peramban, dan di desktop di dalam CadCraft Studio, bersama aplikasi lainnya. Penyimpanan cloud belum tersedia: Anda membuka file dari komputer dan menyimpan salinannya kembali ke sana.
:::

## Membuka model pertama Anda

Cara tercepat untuk melihat apa yang dilakukan BimCraft adalah dengan file IFC.

1. Klik {{ui:Pilih file}} di tengah layar.
2. Pilih file `.ifc` di {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} lalu konfirmasi.
3. Tunggu sampai baris status di bagian bawah layar menampilkan "Memulai mesin IFC…", lalu "Membangun geometri".

Anda akan melihat model dalam 3D di tengah, panel {{ui:File}} dan daftar {{ui:Lantai}} di kiri, serta panel {{ui:Properti}} yang masih kosong di kanan. Baris status berakhir dengan "Terbuka" dan jumlah elemen.

:::tip
Anda juga dapat menyeret file dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} langsung ke halaman. Layar menampilkan "Lepas untuk membuka" saat Anda menyeret.
:::

:::offline
Mesin IFC dimuat dari situs saat pertama kali Anda membuka model IFC, kecuali BimCraft sudah disimpan untuk penggunaan offline. Gambar DWG dan DXF, file proyek, dan folder tidak memerlukan tambahan apa pun: pembacanya sudah menjadi bagian dari aplikasi. Jika tombol di bilah aplikasi bertuliskan {{ui:Siap offline}}, semuanya dapat dibuka secara offline. Jika tidak, model IFC tidak akan terbuka sampai Anda tersambung kembali, kecuali ada yang sudah dibuka di tab ini. Lihat [Online dan offline](topic:online-offline).
:::

:::online
Akan pergi ke tempat tanpa koneksi? Klik {{ui:Simpan untuk offline}} di bilah aplikasi dan tunggu sampai muncul {{ui:Siap offline}}. Salinan yang disimpan (sekitar 11 MB) sudah termasuk mesin IFC. Lihat [Bekerja offline](common:offline).
:::

## Melihat sekeliling

:::mouse
1. Seret dengan tombol kiri mouse untuk mengorbit model.
2. Putar roda mouse untuk zoom.
3. Seret dengan tombol kanan mouse untuk menggeser. Pada trackpad Mac, tahan {{key:Shift}} lalu seret.
4. Tekan {{key:F}} atau klik {{ui:Paskan}} untuk melihat seluruh model lagi.
:::

:::touch
1. Seret dengan satu jari untuk mengorbit.
2. Cubit dengan dua jari untuk zoom, dan gerakkan dua jari bersama-sama untuk menggeser.
3. Ketuk {{ui:Paskan}} untuk melihat seluruh model lagi.
:::

## Lakukan satu hal nyata: perbaiki sebuah tag

1. Klik dinding, pintu, atau elemen apa pun dalam model. Elemen itu berubah biru, dan propertinya muncul di kanan.
2. Di panel {{ui:Properti}}, klik nilai di samping **Tag**.
3. Ketik tag baru lalu tekan {{key:Enter}}.
4. Lihat bagian {{ui:Perubahan}} yang terbuka di kiri: perubahan Anda tercantum beserta nilai lama dan nilai baru.

## Menyimpan salinan

1. Klik {{ui:Simpan sebagai IFC}} di bagian {{ui:Perubahan}}, atau tekan {{key:Mod+S}}.
2. Temukan file baru di folder unduhan Anda. Namanya mengikuti file asli dengan tambahan " (edited)", misalnya `Clinic (edited).ifc`.

File asli Anda tidak pernah diubah. [Mengubah properti IFC dan menyimpan salinan hasil edit](topic:edit-ifc-properties) menjelaskan pengeditan secara lengkap.

## Langkah selanjutnya

- [Layar BimCraft](topic:workspace): setiap panel menurut namanya.
- [Jika Anda berasal dari program BIM dan gambar lain](topic:coming-from): apa yang terasa berbeda jika Anda terbiasa dengan Revit.
- [Membuka seluruh folder proyek](topic:open-project-folder): arahkan BimCraft ke folder proyek dan biarkan BimCraft memilah file-nya.
- [Melihat gambar DWG atau DXF](topic:view-dwg): lembar, layer, dan tampilan cetak.
