---
title: Biarkan asisten AI bekerja dengan model Anda
summary: Aktifkan asisten di Pengaturan agar asisten di komputer Anda dapat menemukan elemen, membaca propertinya, mengisolasinya di tampilan, dan menggambar dinding, pintu, jendela, lantai, level, serta grid, melalui CadCraft Studio. Nonaktif sampai Anda menyalakannya.
keywords: ai, asisten, mcp, skrip, otomatisasi, studio, cari elemen, isolasi, properti, izin, putuskan, aktivitas, gambar dinding, tambahkan pintu, tambahkan jendela, level, grid, lantai, urungkan, simpan, baris perintah, cli, tanpa jendela, gunakan dengan asisten AI
from: c5ee595b
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (asisten apa pun yang berbicara MCP) melihat model IFC yang terbuka dan menggambar di dalamnya, apa yang dapat dan tidak dapat dilakukannya, dan cara menghentikannya.

## Apa yang dapat dilakukan asisten di BimCraft

| Asisten meminta | Yang terjadi | Butuh izin |
|---|---|---|
| Cari elemen | Ia mendapat daftar elemen menurut kelas, lantai, nama, atau nilai properti, seperti yang dilakukan **Cari** | Baca |
| Baca properti | Ia mendapat atribut, tipe, set properti, dan kuantitas satu elemen, seperti yang ditampilkan **Properti** | Baca |
| Jelaskan model, daftar dinding | Ia mendapat level, dinding, pintu, jendela, ruang, lantai, grid, dan kolom, serta ujung, tipe, dan tinggi setiap dinding | Baca |
| Isolasi, tembus pandang, sembunyikan, atau tampilkan | Tampilan 3D berubah seolah Anda memakai menu {{ui:Tampilkan}} | Ubah tampilan dan gambar |
| Gambar dinding, pintu, jendela, lantai, level, atau garis grid | Model berubah seolah Anda memakai alat {{ui:Gambar}}: dinding tersambung, dan ruang, lantai, serta atap mengikuti | Ubah tampilan dan gambar |
| Ubah nama atau nilai properti | Nama, Deskripsi, Tipe objek, atau Tag satu elemen, atau satu nilai properti. Nilai yang dibagi dengan elemen lain disalin dulu untuknya; nilai tipenya hanya berubah jika asisten memintanya, karena setiap elemen dari tipe itu mengikuti | Ubah tampilan dan gambar |
| Pindahkan, hapus, ubah dinding, pintu, dan jendela | Elemen dipindahkan atau dihapus bersama yang menjadi induknya; dinding yang digambar dengan alat {{ui:Gambar}} berubah menurut ujung atau tipenya, pintu dan jendela menurut tempat, ukuran, atau tipenya, dan ruang serta sambungan mengikuti | Ubah tampilan dan gambar |
| Atur, susun, dan baca jadwal | "Jadwal pintu per lantai, dengan rating api dan ironmongery": asisten menamai jadwal, kolomnya (properti atau tag menjadi kolom), dan pengelompokannya; BimCraft mengisinya dari model dan menatanya, dan mengambil yang tidak disebutkan asisten dari standar kantor. Susunan ini bergabung dengan daftar Jadwal Anda. Setiap baris yang kembali menyebutkan elemennya, sehingga ia dapat memilihnya | Baca untuk membaca; Ubah tampilan dan gambar untuk menyimpan susunan |
| Ekspor jadwal | CSV, Excel, atau teks yang dipisahkan tab untuk ditempel ke Google Sheets (tidak ada yang dikirim ke Google) | Ekspor |
| Baca dan atur finishing ruang | Tipe finishing, serta finishing lantai, dinding, dan plafon tiap ruang, dan zona; luas, jumlah ubin, dan volume substrat kemudian berasal dari jadwal finishing | Baca; Ubah tampilan dan gambar untuk mengatur |
| Pilih elemen, batalkan langkahnya sendiri | Elemen dipilih di tampilan; langkah terakhirnya dibatalkan | Ubah tampilan dan gambar |
| Simpan | File IFC baru dengan setiap perubahan, seperti yang dibuat {{ui:Simpan sebagai IFC}} (file asli tidak pernah diubah) | Simpan |
| Ekspor USD | Model yang terbuka sebagai OpenUSD (.usda, .usdc, atau .usdz), seperti yang ditulis {{ui:USD}} di bilah alat | Ekspor |
| Render gambar, jalankan antrean render | Gambar tampilan 3D, seperti yang dibuat dialog {{ui:Render}} dengan pengaturan Render Anda kecuali ia meminta yang lain, atau gambar berkualitas tinggi ditambahkan ke antrean dialog dan dirender satu per satu (antrean membutuhkan WebGPU). Tidak ada yang berubah di model ([Render gambar](topic:render)) | Ekspor |

Setiap perubahan yang dibuat asisten adalah satu langkah di **Perubahan**, bernama "Asisten: …" (misalnya "Asisten: tambahkan 4 dinding"), sehingga {{key:Mod+Z}} membatalkan seluruh tindakannya, dan Anda dapat melihat langkah siapa itu. Di jendela ini asisten tidak dapat membuka file: Anda membuka model, dan asisten bekerja dengan model yang sedang terbuka.

## Aktifkan

Asisten terhubung ke BimCraft melalui CadCraft Studio di komputer Anda; peramban biasa tidak punya jalan masuk.

1. Buka {{ui:Pengaturan}} dan pilih tab **BimCraft**.
2. Di bawah **Asisten**, centang **Izinkan asisten AI dan skrip menggunakan BimCraft**.
3. **Baca** sudah dicentang untuk Anda. Centang **Ubah tampilan dan gambar** juga jika asisten boleh mengisolasi dan menyembunyikan elemen serta menggambar, dan **Simpan** jika ia boleh menyimpan model sebagai file baru.
4. Hubungkan asisten di Studio (Studio menampilkan alamat dan pengaturan untuk ditempelkan ke dalamnya).

## Saat asisten terhubung

Catatan di bagian atas panel kanan menyatakan asisten mana yang terhubung dan apa yang dapat dilakukannya. Klik {{ui:Putuskan}} untuk mengakhiri sesinya seketika; ia harus terhubung lagi untuk melanjutkan.

**Aktivitas**, di bawah **Asisten** di Pengaturan, mendaftar setiap panggilan yang dilakukan asisten, yang terbaru di atas, dengan keterangan apakah berhasil.

:::tip
Tanyakan dengan kata-kata biasa, misalnya "isolasi dinding luar di Level 1", "pintu mana yang tidak punya rating api?", atau "gambar ruang 6 kali 4 meter di Level 1 dengan pintu di dinding selatan". Asisten menemukan elemennya dan menampilkannya di tampilan Anda, atau menggambarnya.
:::

## Tanpa jendela: skrip dan baris perintah

Alat gambar yang sama berfungsi pada file IFC di folder yang Anda sebut, tanpa jendela yang terbuka: server MCP dan baris perintah CadCraft dapat memulai gedung baru atau membuka file IFC, mendeskripsikannya, menambahkan dinding, pintu, jendela, lantai, level, dan grid, membatalkan, lalu menyimpannya sebagai file `.ifc` baru. Anda memutuskan folder mana yang boleh dipakainya dan apakah ia boleh mengubah atau menyimpan apa pun.

## Matikan

Hapus centang **Izinkan asisten AI dan skrip menggunakan BimCraft**. Setiap asisten langsung diputuskan, dan pengaturannya disimpan untuk lain kali.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh kerja, masing-masing dengan alat yang dipanggilnya.
- [Cari elemen berdasarkan kelas, nama, atau properti](topic:find)
- [Sembunyikan, isolasi, dan tampilkan tembus elemen](topic:hide-and-isolate)
- [Pengaturan BimCraft](topic:settings)
