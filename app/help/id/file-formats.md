---
title: Apa yang dibaca BimCraft dari tiap format
summary: Persisnya apa yang dibaca BimCraft dari file IFC, proyek dan family, DWG dan DXF, serta apa yang dibiarkannya.
keywords: format, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versi, kompatibilitas, apa yang dibaca
from: 9b8dfb4f
---

## IFC

| Dibaca | Rincian |
|---|---|
| Geometri | Setiap elemen yang memiliki bentuk, diwarnai sebagaimana dinyatakan file. Ruang dan spasi digambar tembus pandang dan disembunyikan pada awalnya |
| Lantai | Lantai bangunan menurut urutan elevasi, dan elemen apa yang berada di setiap lantai. Elemen yang tidak berada di lantai mana pun dikelompokkan sebagai "Tidak di lantai" |
| Jumlah elemen | Berapa elemen setiap jenis (dinding, pintu, pelat…), ditampilkan di {{ui:Elements}} |
| Fakta proyek | Nama proyek, nama panjang, dan fase; skema; program pengekspor, penulis, dan tanggal ekspor dari header file |
| Data elemen | Nama, tipe, tipe objek, tag, deskripsi, GlobalId; setiap set properti dan set kuantitas pada elemen dan pada tipenya |

Dapat disunting: nama, tipe objek, tag, deskripsi, dan nilai properti tunggal. Disimpan sebagai file IFC baru. Skema IFC2X3, IFC4, dan IFC4X3 dapat dibuka, dibaca oleh mesin IFC milik BimCraft; apa pun yang belum dapat digambarnya didaftarkan di bawah **Belum digambar** pada panel {{ui:File}}. Model dipindahkan ke titik asal saat dibuka, sehingga model yang diletakkan jauh dari sana tetap tampil di tengah layar. `.ifczip` dan `.ifcxml` tidak dapat dibuka.

## File proyek dan family

`.rvt` proyek, `.rte` templat proyek, `.rfa` family, dan `.rft` templat family.

| Dibaca | Rincian |
|---|---|
| Informasi file | Rilis dan build, worksharing, jalur model pusat, jalur yang terakhir disimpan, nama pengguna, locale, GUID dokumen |
| Informasi proyek | Kolom milik proyek (nama, nomor, klien, alamat, status…), tanpa default proyek baru |
| Informasi family | Nama family, kategori, rilis, pembaruan terakhir, dan parameternya menurut grup |
| Tautan | Daftar model tertaut, tautan CAD, gambar, dan tabel keynote yang ditunjuk file |
| Gambar pratinjau | Thumbnail yang disimpan dalam file |

Tidak dibaca: model 3D, elemen, tampilan, lembar, dan jadwal. Semuanya disimpan dalam format yang tidak terdokumentasi. BimCraft hanya membaca beberapa puluh kilobyte dari setiap file, sehingga ukuran file hampir tidak berpengaruh.

## File proyek .pln, .pla, .tpl, dan .bpn

Belum dibaca: BimCraft menyatakannya saat Anda membuka salah satunya. Ekspor IFC untuk model dan DWG untuk gambar; lihat [Buka file proyek .pln dan .pla](topic:pln-project-files).

## DWG dan DXF

| Dibaca | Rincian |
|---|---|
| Ruang | Ruang model dan setiap lembar (layout), menurut urutan tab |
| Viewport | Viewport setiap lembar, beserta skala, putaran, dan layer yang dibekukannya |
| Layer | Nama, warna, nyala/mati, beku, bendera plot, dan tebal garis |
| Objek | Garis, polyline, busur, lingkaran, elips, spline, hatch dan solid, teks dan teks multibaris, blok dan atribut, dimensi, leader dan multileader, tabel, titik, gambar |
| Gambar tertaut | Digambar di tempat ia disisipkan, jika file-nya ditemukan |
| Gambar | Digambar dari file gambar jika ditemukan (PNG, JPEG, GIF, BMP, WebP; tidak TIFF) |
| Tag peralatan | Tag item layanan makanan (atribut `KCL-ITEM`), untuk jadwal peralatan |

Yang lain dihitung di bawah **Belum digambar**, tidak pernah ditebak. Format DWG dari AutoCAD 2000 sampai 2018 adalah yang telah diperiksa (file R13 dan R14 juga diterima, tetapi tidak ada dalam kumpulan uji; DWG yang lebih lama tidak dapat dibuka); panel {{ui:Drawing}} menampilkan kode format (seperti AC1032). File DXF dari semua versi dapat dibuka, termasuk R12. Keduanya dibaca oleh pembaca milik BimCraft sendiri, di tab ini. Tidak ada yang disimpan kembali ke DWG atau DXF.

## Dalam sebuah folder

| Jenis | Ekstensi | Dalam laporan |
|---|---|---|
| Model | `.rvt` `.rfa` `.rte` `.rft` | Dikelompokkan dengan cadangan bernomor, diperiksa kesehatannya, kartu dibaca, tautan diperiksa |
| IFC | `.ifc` | Didaftarkan; dibuka dalam 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Didaftarkan bersama model yang menautkannya; DWG dan DXF dibuka dalam 2D, DGN tidak |
| Sisa | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Didaftarkan di bawah **Disisihkan** |
| Folder pemeliharaan | `*_backup`, `*_log`, `Revit_temp`, folder tersembunyi | Didaftarkan di bawah **Disisihkan**, tidak dibaca |

Lihat [Laporan folder: peran, status, dan tautan](topic:folder-roles).
