---
title: Online dan offline
summary: Apa yang dimuat BimCraft dari situs, bagaimana Simpan untuk offline membuat model IFC dan gambar DWG terbuka tanpa koneksi, dan mengapa tidak ada yang Anda buka pernah diunggah.
keywords: offline, online, internet, koneksi, tanpa jaringan, mode pesawat, kunjungan lapangan, simpan untuk offline, siap offline, unggah, privasi, wasm, webassembly, mesin IFC, dwg, cloud
from: 39e5c7eb
---

BimCraft membaca file Anda di dalam tab peramban. Membuka, memeriksa, menyunting, dan menyimpan tidak pernah mengirim file Anda ke mana pun, baik saat online maupun offline. [Bekerja offline](common:offline) menjelaskan cara kerja salinan offline di setiap aplikasi; halaman ini membahas hal yang khas untuk BimCraft.

## Yang dimuat BimCraft dari situs

| Bagian | Kapan dimuat tanpa salinan offline | Ukuran |
|---|---|---|
| Aplikasinya sendiri, dengan penampil 3D dan kode mesin IFC | Saat Anda membuka BimCraft | Beberapa megabita |
| Bagian WebAssembly mesin IFC | File IFC pertama yang Anda buka di tab: "Memulai mesin IFC…" | Sekitar 1.6 MB |

Gambar DWG dan DXF, file serta folder proyek dan famili tidak memerlukan tambahan apa pun: pembacanya adalah bagian dari aplikasi.

## Simpan BimCraft untuk penggunaan offline

1. Buka BimCraft saat Anda online.
2. Klik {{ui:Save for offline}} di bilah aplikasi di bagian atas.
3. Perhatikan tombol yang menghitung naik: "Menyimpan 40 dari 212", misalnya. Salinan BimCraft sekitar 11 MB, karena menyertakan mesin IFC.
4. Tunggu {{ui:Offline ready}}.

Begitu tombol bertuliskan {{ui:Offline ready}}, model IFC, gambar DWG dan DXF, file proyek, folder, dan bantuan ini semuanya terbuka tanpa koneksi. Anda tidak perlu membuka IFC atau DWG terlebih dulu untuk "memanaskan" pembacanya.

Untuk memperbarui atau menghapus salinan, klik {{ui:Offline ready}} lalu pilih {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}.

## Arti tombolnya

| Tombol | Artinya |
|---|---|
| {{ui:Save for offline}} | Belum ada salinan offline di peramban ini. Klik untuk menyimpannya |
| "Menyimpan *n* dari *m*" | Sedang menyimpan; biarkan tab terbuka sampai selesai |
| {{ui:Offline ready}} | Tersimpan. Arahkan kursor untuk melihat kapan; klik untuk menu |
| {{ui:Could not save}} | Beberapa file tidak terunduh. Periksa koneksi Anda lalu klik untuk mencoba lagi. Salinan baik terakhir, jika ada, tetap disimpan |
| {{ui:Offline not available}} | Jendela ini tidak dapat menyimpan salinan offline (jendela privat atau komputer yang dikelola). Lihat [Bekerja offline](common:offline) |

:::offline
Anda sedang offline.

- Jika tombolnya bertuliskan {{ui:Offline ready}}, setiap jenis file terbuka seperti biasa.
- Jika tidak, hanya yang sudah dimuat tab ini yang berfungsi: pembaca yang tidak pernah dimuat di tab ini tidak dapat dijalankan, dan membuka jenis file itu menampilkan kesalahan dari peramban di baris status. Jangan muat ulang tab sampai Anda online kembali.
:::

## Yang tidak memerlukan koneksi

Setelah BimCraft terbuka di tab, hal-hal ini bekerja offline bahkan tanpa salinan tersimpan:

- Membaca file proyek dan famili serta memeriksa folder.
- Memilih elemen, membaca properti, dan menyunting nilai IFC dalam model yang sudah terbuka.
- {{ui:Save as IFC}} dan {{ui:Download CSV}}: keduanya adalah unduhan yang dibuat di tab.

## Yang belum tersedia

- **Penyimpanan cloud.** File hanya disimpan di komputer Anda.

Lihat [Ke mana file Anda pergi](common:your-files).
