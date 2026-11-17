---
title: Periksa folder untuk salinan rusak, tautan yang hilang, dan sisa file
summary: Gunakan laporan folder untuk menemukan file model yang terpotong, memilih cadangan lengkap terbaru, melihat tautan yang hilang, dan menemukan file kunci serta file sementara.
keywords: pemeriksaan kesehatan, rusak, korup, tidak lengkap, terpotong, cadangan, tautan hilang, xref hilang, audit, sisa file, file kunci, dwl, bak, serah terima
from: 3025a539
---

## Yang akan Anda lakukan

Periksa folder proyek sebelum Anda menyerahkannya atau mulai bekerja di dalamnya: apakah setiap model lengkap, cadangan mana yang merupakan salinan baik terakhir, dan apakah semua file tertaut ada di sana?

## Langkah-langkah: salinan rusak

1. Buka folder proyek. Lihat [Buka seluruh folder proyek](topic:open-project-folder).
2. Baca catatan di bawah nama folder. "2 file tidak lengkap atau tidak dapat dibaca. Lihat model di bawah." berarti ada yang perlu diperiksa.
3. Di **Model**, lihat kolom **Status**. **Lengkap** berarti baik. "1 tidak lengkap" berwarna kuning berarti satu salinan rusak tetapi salinan lain masih baik. **Tidak lengkap** berwarna merah berarti tidak ditemukan salinan yang baik.
4. Buka **Semua salinan …** di bawah model yang bermasalah. Daftar ini berisi file utama dan setiap cadangan bernomor, dari yang terbaru, dengan ukuran, tanggal, dan status.
5. Baca catatan di atas daftar, misalnya "Tower.rvt tidak lengkap (183.2 MB, seharusnya minimal 214.0 MB). Kartu menampilkan salinan lengkap terbaru, Tower.0012.rvt (Mar 3, 2025)."
6. Klik salinan yang ingin Anda buka. Hanya salinan lengkap yang dapat diklik.

## Cara pemeriksaan kesehatan bekerja

Setiap salinan dari setiap model mendapat pemeriksaan cepat pada header-nya, 512 byte masing-masing, sehingga bahkan folder berisi model-model besar diperiksa dalam hitungan detik. File yang indeksnya sendiri menunjuk melewati ujungnya terpotong saat disalin, diunggah, atau disinkronkan. File di drive cloud yang masih "hanya online" terlihat sama.

Kartu untuk setiap model dibaca dari file utama jika file itu baik, dan dari cadangan baik terbaru jika tidak.

## Langkah-langkah: tautan yang hilang

1. Cari catatan "*n* file tertaut tidak ada di folder ini." di bawah nama folder.
2. Gulir ke **File tertaut dan yang direferensikan**. Tautan yang hilang tercantum pertama.
3. Baca kolom **Lokasi** untuk setiap tautan:
   - **Di folder ini**: ditemukan di jalur yang disimpan oleh model.
   - **Nama sama ditemukan**: sebuah file dengan nama yang sama ada di tempat lain dalam folder. Periksa apakah itu file yang benar.
   - **File pustaka**: tabel kode keynote atau assembly. Tabel ini disertakan dengan program di setiap komputer, jadi tidak diharapkan ada di dalam folder.
   - **Tidak di folder ini**: tidak ditemukan di mana pun dalam folder.
4. Baca **Digunakan oleh** untuk melihat model mana yang menautkan setiap file.

BimCraft mencari setiap tautan pertama berdasarkan jalur relatifnya, lalu berdasarkan ujung jalur yang disimpan (sehingga `\\server\jobs\Tower\Cad\X-Refs\site.dwg` ditemukan di `X-Refs/site.dwg` saat Anda memilih folder `Cad`), lalu berdasarkan nama file di mana saja dalam folder.

## Langkah-langkah: sisa file

1. Gulir ke **Disisihkan** di akhir laporan.
2. Baca tiga baris yang mungkin muncul:
   - Folder pemeliharaan (`*_backup`, `*_log`, `Revit_temp`): tidak dibaca.
   - Sisa file kunci, log, dan cadangan: file seperti `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. File ini ditinggalkan oleh program yang macet atau sedang terbuka saat folder disalin. Biasanya aman dihapus setelah tidak ada yang membuka file-file tersebut.
   - File lain: semua yang tidak dibaca oleh BimCraft.

## Kesalahan umum

- **Menghapus file utama yang rusak sebelum menyimpan cadangan yang baik.** Salin dulu cadangan lengkap terbaru, baru tangani file yang rusak.
- **Langsung percaya pada "Nama sama ditemukan".** Dua gambar yang berbeda bisa memakai nama yang sama. Buka keduanya jika ragu.
- **Mengira file pustaka yang hilang adalah masalah.** Tabel kode keynote dan assembly berada bersama program di setiap komputer.
- **Jumlah file berbeda antarperamban.** Di Firefox dan Safari, {{ui:Buka folder}} menyerahkan setiap file, termasuk yang berada di dalam folder pemeliharaan, sehingga jumlahnya (dan batas 20.000 file) ikut menghitungnya. Menyeret folder ke dalam jendela akan melewatinya, seperti yang dilakukan Chrome dan Edge. Laporannya selain itu sama.
