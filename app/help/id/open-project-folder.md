---
title: Buka seluruh folder proyek
summary: Arahkan BimCraft ke folder proyek untuk melihat setiap model, cadangannya, dan tautannya sekaligus, dan biarkan kotak Mulai di sini menyarankan file mana yang perlu dikerjakan.
keywords: folder, direktori, folder proyek, drive jaringan, server, mulai di sini, file mana, cadangan, tautan, xref, folder terbaru, seret folder
from: 16fbdce2
---

## Yang akan Anda lakukan

Buka seluruh folder proyek, seperti yang diberikan untuk sebuah pekerjaan, dan biarkan BimCraft memilahnya: model apa saja yang ada, salinan mana yang merupakan cadangan, apa yang tertaut ke apa, file mana yang rusak, dan file mana yang kemungkinan besar ingin Anda buka.

Hanya beberapa kilobyte yang dibutuhkan setiap kartu model untuk dibaca, jadi folder di drive jaringan atau folder cloud yang tersinkron tidak masalah.

## Langkah

:::chromium
1. Klik {{ui:Buka folder}} di sisi kiri (atau di tengah layar kosong).
2. Pilih folder proyek di jendela yang terbuka dan klik **Pilih** (atau **Unggah** atau **Buka**, tergantung sistem Anda).
3. Klik **Lihat file** ketika peramban bertanya "Biarkan situs melihat file?". Ini hanya membiarkan tab membaca folder; tidak ada yang diunggah.
4. Tunggu sementara baris status menghitung: "Mendaftar folder: … file", lalu "Memeriksa file Revit: … dari …".
:::

:::firefox
1. Klik {{ui:Buka folder}} di sisi kiri (atau di tengah layar kosong).
2. Pilih folder proyek di jendela yang terbuka lalu konfirmasi. Firefox mungkin meminta Anda memastikan bahwa halaman boleh membaca file folder; file tetap berada di komputer Anda.
3. Tunggu sementara baris status menyatakan "Membaca folder: … file", lalu "Memeriksa file Revit: … dari …".
:::

:::safari
1. Klik {{ui:Buka folder}} di sisi kiri (atau di tengah layar kosong).
2. Pilih folder proyek di jendela yang terbuka dan klik **Unggah**. Meski namanya begitu, tidak ada yang meninggalkan Mac Anda: file hanya diserahkan ke tab.
3. Tunggu sementara baris status menyatakan "Membaca folder: … file", lalu "Memeriksa file Revit: … dari …".
:::

Anda juga dapat **menyeret folder** dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} ke halaman. Folder yang diseret terbuka tanpa permintaan izin di peramban mana pun.

## Yang harus Anda lihat

Laporan folder mengisi bagian tengah:

- Nama folder, jumlah model, gambar CAD, model IFC, dan file, serta total ukurannya.
- Catatan merah atau kuning jika ada file yang tidak lengkap atau file tertaut yang hilang dari folder.
- Kotak {{ui:Mulai di sini}}: file yang disarankan BimCraft untuk dibuka, beserta alasannya.
- **Model**: satu baris per model, dengan cadangannya dikelompokkan di bawahnya.
- **File tertaut dan dirujuk**, **Model IFC**, **Gambar CAD**, dan **Disisihkan**, jika folder memilikinya.

Di sisi kiri, panel {{ui:Folder}} merangkumnya; **Masalah** menyatakan "Tidak ada" jika setiap salinan dalam kondisi baik.

## Gunakan kotak Mulai di sini

Kotak ini menyebut satu file dan menjelaskan alasannya, misalnya:

- "Pekerjaan tersimpan terbaru di folder ini (3 Maret 2025)."
- "*Consultant.rvt* tertaut ke model lain, jadi ia latar belakang, bukan file untuk diedit."
- "*Tower.rvt* tampak sebagai pilihan yang jelas, tetapi rusak; salinan baik terakhirnya dari …"
- "Ini adalah model pusat: di Revit, bukalah dengan "Create New Local" dan kerjakan di salinan lokal."

1. Baca alasannya.
2. Klik {{ui:Buka kartunya}} untuk membaca kartu file itu, atau {{ui:Tampilkan di daftar}} untuk mencari barisnya di **Model**.
3. Periksa dengan orang yang terakhir mengerjakan proyek sebelum Anda mengandalkannya. Kotak itu juga mengatakannya: ini tebakan terbaik dari nama, tanggal, dan tautan.

## Buka file dari laporan

1. Klik nama model untuk membuka kartunya. Kartu memeriksa setiap tautan terhadap folder.
2. Klik {{ui:Kembali ke}} dan nama folder di bagian atas kartu (atau {{ui:Kembali ke folder}} di sisi kiri) untuk kembali.
3. Klik file IFC mana pun di bawah **Model IFC** untuk membukanya dalam 3D.
4. Klik DWG atau DXF mana pun di bawah **Gambar CAD** untuk membukanya dalam 2D. Gambar tertaut dan gambar raster-nya ditemukan di folder secara otomatis.

## Buka folder lagi nanti

:::chromium
Folder yang Anda buka dengan {{ui:Buka folder}} atau dengan diseret tercantum di bawah {{ui:Folder terbaru}} di sisi kiri. Klik {{ui:Buka kembali}} dan nama folder untuk membukanya lagi tanpa memilihnya. Setelah peramban dimulai ulang, Chrome atau Edge bertanya sekali lagi; pilih "Izinkan setiap kali kunjungan" untuk berhenti ditanya. Daftar ini disimpan hanya di peramban ini, tidak pernah dikirim ke mana pun. Klik × untuk melupakan folder.
:::

:::firefox safari
Peramban ini tidak dapat mengingat folder di antara kunjungan. Pilih folder lagi dengan {{ui:Buka folder}}, atau seret ke dalam.
:::

## Kesalahan umum

- **Memilih folder yang terlalu besar.** Di atas 20.000 file: "Folder ini memiliki lebih dari 20.000 file. Pilih folder yang lebih kecil, seperti satu proyek." Pilih folder proyek, bukan seluruh drive.
- **Memilih induk dari beberapa proyek.** Kotak {{ui:Mulai di sini}} kemudian memilih lintas proyek. Pilih satu proyek.
- **Folder Revit tampak diabaikan.** Folder `*_backup`, `*_log`, dan `Revit_temp` adalah folder pemeliharaan dan tercantum di bawah **Disisihkan**, tidak dibaca.
- **Berharap model terbuka dalam 3D dari kartunya.** File proyek hanyalah kartu. Buka ekspor IFC-nya.
- **Ponsel dan tablet.** Banyak peramban seluler tidak dapat memilih folder sama sekali. Gunakan komputer.

Lihat [Periksa folder untuk salinan rusak, tautan hilang, dan sisa file](topic:check-folder-health) dan [Laporan folder: peran, status, dan tautan](topic:folder-roles).
