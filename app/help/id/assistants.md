---
title: Biarkan asisten AI bekerja dengan model Anda
summary: Aktifkan asisten di Pengaturan agar asisten di komputer Anda dapat menemukan elemen, membaca propertinya, mengisolasinya di tampilan, serta menggambar dinding, pintu, jendela, pelat lantai, level, dan grid, melalui CadCraft Studio. Nonaktif sampai Anda mengaktifkannya.
keywords: ai, asisten, mcp, skrip, otomatisasi, studio, temukan elemen, isolasi, properti, izin, putuskan, aktivitas, gambar dinding, tambah pintu, tambah jendela, level, grid, pelat lantai, urungkan, simpan, baris perintah, cli, tanpa jendela, gunakan dengan asisten AI
from: 66d72742
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (asisten apa pun yang mendukung MCP) melihat model IFC yang sedang Anda buka dan menggambar di dalamnya, apa yang bisa dan tidak bisa dilakukannya, dan cara menghentikannya.

## Yang bisa dilakukan asisten di BimCraft

| Ia meminta | Yang terjadi | Membutuhkan |
|---|---|---|
| Temukan elemen | Ia mendapat daftar elemen menurut kelas, lantai, nama, atau nilai properti, seperti yang dilakukan **Temukan** | Baca |
| Baca properti | Ia mendapat atribut satu elemen, tipe, set properti, dan kuantitasnya, seperti yang ditampilkan **Properti** | Baca |
| Jelaskan model, daftar dinding | Ia mendapat level, dinding, pintu, jendela, ruang, pelat lantai, grid, dan kolom, serta ujung, tipe, dan tinggi setiap dinding | Baca |
| Isolasi, transparan, sembunyikan, atau tampilkan | Tampilan 3D berubah seolah Anda memakai menu {{ui:Tampilkan}} | Ubah tampilan dan gambar |
| Gambar dinding, pintu, jendela, pelat lantai, level, atau garis grid | Model berubah seolah Anda memakai alat {{ui:Gambar}}: dinding tersambung, serta ruang, pelat lantai, dan atap mengikuti | Ubah tampilan dan gambar |
| Ubah nama atau nilai properti | Nama, Deskripsi, Tipe objek, atau Tag satu elemen, atau satu nilai properti. Nilai yang dipakai bersama elemen lain disalin dulu untuk elemen itu; nilai milik tipenya hanya berubah jika asisten menyatakannya, karena setiap elemen dari tipe itu ikut berubah | Ubah tampilan dan gambar |
| Pindahkan, hapus, ubah dinding, pintu, dan jendela | Elemen dipindahkan atau dihapus bersama elemen yang menampungnya; dinding yang digambar dengan alat {{ui:Gambar}} berubah menurut ujung atau tipenya, pintu dan jendela menurut tempat, ukuran, atau tipenya, dan ruang serta sambungan ikut berubah | Ubah tampilan dan gambar |
| Atur, susun, dan baca jadwal | "Jadwal pintu menurut lantai, dengan peringkat api dan ironmongery": asisten memberi nama jadwal, kolomnya (properti atau tag menjadi kolom), dan pengelompokannya; BimCraft mengisinya dari model dan menatanya, dengan mengambil dari standar kantor apa yang tidak disebutkan asisten. Pengaturan ini masuk ke daftar Jadwal Anda. Setiap baris yang dikembalikan menyebut elemennya, sehingga elemen itu dapat dipilih | Baca untuk membaca; Ubah tampilan dan gambar untuk menyimpan pengaturan |
| Ekspor jadwal | CSV, Excel, atau teks yang dipisahkan tab untuk ditempel ke Google Sheets (tidak ada yang dikirim ke Google) | Ekspor |
| Baca dan atur finishing ruang | Jenis finishing, finishing lantai, dinding, dan plafon tiap ruang, serta zona; luas, jumlah ubin, dan volume substrat kemudian berasal dari jadwal finishing | Baca; Ubah tampilan dan gambar untuk mengatur |
| Pilih elemen, urungkan langkahnya sendiri | Elemen dipilih di tampilan; langkah terakhirnya dibatalkan | Ubah tampilan dan gambar |
| Simpan | File IFC baru dengan setiap perubahan, seperti yang dibuat {{ui:Simpan sebagai IFC}} (file asli tidak pernah diubah) | Simpan |
| Ekspor USD | Model yang terbuka sebagai OpenUSD (.usda, .usdc, atau .usdz), seperti yang ditulis {{ui:USD}} pada bilah alat | Ekspor |
| Render gambar, jalankan antrean render | Gambar tampilan 3D, seperti yang dibuat dialog {{ui:Render}} dengan pengaturan Render Anda kecuali jika ia meminta yang lain; atau gambar berkualitas tinggi ditambahkan ke antrean dialog dan dirender satu per satu (antrean memerlukan WebGPU). Tidak ada yang berubah di model ([Render gambar](topic:render)) | Ekspor |

Setiap perubahan yang dibuat asisten adalah satu langkah di **Perubahan**, dengan nama "Assistant: …" (misalnya "Assistant: tambah 4 dinding"), sehingga {{key:Mod+Z}} mengurungkan seluruh tindakannya, dan Anda dapat melihat langkah siapa itu. Di jendela asisten, ia tidak dapat membuka file: Anda yang membuka model; ia bekerja dengan model yang sedang terbuka.

## Mengaktifkannya

Asisten terhubung ke BimCraft melalui CadCraft Studio di komputer Anda; browser biasa tidak memiliki jalan masuk.

1. Buka {{ui:Pengaturan}} dan pilih tab **BimCraft**.
2. Di bawah **Asisten**, centang **Izinkan asisten AI dan skrip menggunakan BimCraft**.
3. **Baca** sudah dicentang untuk Anda. Centang **Ubah tampilan dan gambar** juga jika asisten boleh mengisolasi dan menyembunyikan elemen serta menggambar, dan **Simpan** jika ia boleh menyimpan model sebagai file baru.
4. Hubungkan asisten di Studio (Studio menampilkan alamat dan pengaturan yang perlu ditempelkan ke asisten).

## Saat asisten terhubung

Catatan di bagian atas panel kanan menyebutkan asisten mana yang terhubung dan apa yang bisa dilakukannya. Klik {{ui:Putuskan}} untuk mengakhiri sesinya seketika; ia harus terhubung lagi untuk melanjutkan.

**Aktivitas**, di bawah **Asisten** di Pengaturan, mencantumkan setiap panggilan yang dibuat asisten, yang terbaru di atas, beserta apakah panggilan itu berhasil.

:::tip
Tanyakan dengan kata-kata biasa, misalnya "isolasi dinding eksternal di Level 1", "pintu mana yang tidak memiliki peringkat api?", atau "gambar ruang 6 x 4 meter di Level 1 dengan pintu di dinding selatan". Asisten menemukan elemen dan menampilkannya di tampilan Anda, atau menggambarnya.
:::

## Tanpa jendela: skrip dan baris perintah

Alat gambar yang sama bekerja pada file IFC di folder yang Anda tentukan, tanpa jendela terbuka: server MCP dan baris perintah CadCraft dapat memulai bangunan baru atau membuka file IFC, mendeskripsikannya, menambahkan dinding, pintu, jendela, pelat lantai, level, dan grid, lalu mengurungkan dan menyimpannya sebagai file `.ifc` baru. Empat alat lagi cocok untuk skrip: `ifc_batch` menjalankan hingga 200 langkah edit sekaligus (semua atau tidak sama sekali: satu urungkan membatalkan seluruh batch, dan langkah yang ditolak membatalkan sisanya serta menyebutkan langkah itu); `ifc_describe` mencantumkan level dan setiap dinding beserta pintu dan jendelanya; `ifc_render_png` menulis gambar pemeriksaan berbayang datar dari model (tanpa material, tekstur, atau bayangan) tanpa jendela; `usd_export` menulis `.usda`, `.usdc`, atau `.usdz`. Di baris perintah, `cadcraft bim script.json --from model.ifc -o out.ifc` menjalankan skrip langkah-langkah, dan `--usd`, `--png`, serta `--plan` menulis file USD, gambar, atau denah dari proses yang sama. Anda yang memutuskan folder mana yang boleh dipakai dan apakah ia boleh mengubah atau menyimpan sesuatu.

## Matikan

Hapus centang **Izinkan asisten AI dan skrip menggunakan BimCraft**. Setiap asisten langsung diputus, dan pengaturan tersimpan untuk lain waktu.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh kerja, masing-masing dengan alat yang dipanggilnya.
- [Temukan elemen menurut kelas, nama, atau properti](topic:find)
- [Sembunyikan, isolasi, dan buat elemen tembus pandang](topic:hide-and-isolate)
- [Pengaturan BimCraft](topic:settings)
