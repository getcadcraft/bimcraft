---
title: Layar BimCraft
summary: Tur setiap bilah, panel, dan tombol menurut namanya di layar, serta bagaimana layar berubah untuk setiap jenis file.
keywords: layar, tata letak, panel, bilah alat, antarmuka, ui, tur, panel properti, peramban, bilah aplikasi
from: 2eb01ec2
---

Layar BimCraft memiliki sebuah bilah di bagian atas dan tiga area di bawahnya: panel di kiri, panggung di tengah, dan panel {{ui:Properti}} di kanan. Apa yang muncul di setiap area bergantung pada apa yang Anda buka: model IFC, file proyek atau family, gambar, atau folder.

## Bilah aplikasi

Bilah tipis di bagian atas milik situs CadCraft, bukan BimCraft sendiri. Dari kiri ke kanan:

- Logo CadCraft: menuju beranda CadCraft.
- Nama aplikasi dan menu versi. Pada build staf, menu ini menunjukkan build mana yang Anda jalankan dan memungkinkan Anda beralih ke versi rilis.
- {{ui:Tentang BimCraft}}: halaman aplikasi di situs.
- {{ui:Pengaturan}}: pengaturan BimCraft sendiri dan yang dipakai bersama semua aplikasi. Lihat [Pengaturan BimCraft](topic:settings).
- {{ui:Layar penuh}}: berganti antarmode layar. Lihat [Mode layar](topic:workspace#screen-modes) di bawah.
- {{ui:Kertas}} dan {{ui:Model}}: tema terang dan gelap. Tampilan 3D dan gambar 2D mengikuti tema yang Anda pilih.

## Panel kiri

Panel kiri selalu diawali dengan **Buka file atau folder**:

- Area lepas, {{ui:Pilih file, atau letakkan file atau folder di sini}}. Klik untuk memilih satu file, atau letakkan file atau folder di atasnya (atau di mana saja pada halaman).
- {{ui:Buka folder}}: pilih seluruh folder proyek. Lihat [Membuka seluruh folder proyek](topic:open-project-folder).
- {{ui:Folder terbaru}}: muncul di Chrome dan Edge setelah Anda membuka folder dengan pemilih folder atau dengan meletakkannya. Klik {{ui:Reopen}} dan nama folder untuk membukanya lagi, atau × kecil untuk melupakannya.

Di bawahnya, bagian-bagian muncul sesuai keadaan:

| Bagian | Kapan muncul | Isinya |
|---|---|---|
| {{ui:Perubahan}} | Model IFC terbuka | Edit Anda yang belum disimpan, yang terbaru di atas, dengan {{ui:Urungkan}} dan {{ui:Simpan sebagai IFC}} |
| {{ui:File}} | Model atau kartu file terbuka | Fakta tentang file: ukuran, skema atau rilis, proyek, penulis, jumlah elemen |
| {{ui:Gambar}} | DWG atau DXF terbuka | Format, satuan, jumlah entitas dan layer, lembar, gambar tertaut, peralatan |
| {{ui:Folder}} | Folder terbuka | Jumlah file dan model, ukuran, masalah yang ditemukan |
| {{ui:Kembali ke folder}} | Anda membuka file dari sebuah folder | Kembali ke laporan folder |
| {{ui:Layer}} | Gambar terbuka | Kotak centang per layer, dengan {{ui:Semua nyala}} dan {{ui:Semua mati}} |
| {{ui:Lantai}} | Model IFC terbuka | Kotak centang per lantai, lantai teratas lebih dulu |
| {{ui:Elemen}} | Model IFC terbuka | Jumlah elemen setiap jenis dalam model (30 yang paling umum) |

## Panggung

Bagian tengah layar menampilkan file yang terbuka.

- **Kosong**: "Buka model bangunan." dengan {{ui:Pilih file}} dan {{ui:Buka folder}}, serta deskripsi singkat setiap format.
- **Model IFC**: tampilan 3D dengan bilah alat di bagian atasnya, dalam grup bernama seperti pada aplikasi gambar CadCraft, ikon setiap alat di atas namanya: {{ui:Tampilan}} ({{ui:Paskan}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Samping}}, {{ui:Tepi}}, {{ui:Ruang}}); {{ui:Edit}} ({{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, dan {{ui:Lainnya}}, lihat [Menyalin, menempel, dan menduplikat item pustaka](topic:copy-paste)); {{ui:Model}} ({{ui:Satuan}} dan {{ui:Gambar}}); {{ui:Pustaka}} ({{ui:Pustaka}}, {{ui:Peralatan}}, {{ui:Pembaruan}}, {{ui:Kredit}}); {{ui:Tinjau}} ({{ui:Tampilkan}}, {{ui:Potongan}}, {{ui:Jalan}}, {{ui:Ukur}}; lihat [Memotong model IFC dengan bidang potong](topic:section-plane)); dan {{ui:Keluaran}} (render, tampilan langsung, VR, ekspor, cat, dan tampilan tersimpan). Dengan {{ui:Gambar}} menyala, bilah Gambar di bawahnya memiliki tampilan yang sama: {{ui:Tampilan}} (level dan jenis denah), {{ui:Gambar}}, {{ui:Edit}}, dan {{ui:Pustaka}}. Kubus tampilan berada di sudut kanan bawah. Lihat [Membuka model IFC dan melihat sekeliling dalam 3D](topic:open-ifc-model). {{ui:Pengaturan}}, {{ui:Umum}} memilih ikon, label, atau keduanya pada tombol ini, menampilkan atau menyembunyikan nama grup, dan klik kanan bilah alat untuk menata alat dan grupnya. Pada jendela yang pendek, bilah alat menghilangkan nama di bawah ikonnya.
- **File proyek atau family**: kartu file, dengan gambar pratinjau, informasi proyek, dan file tertaut. Lihat [Membaca file proyek atau family](topic:read-rvt-file).
- **DWG atau DXF**: deretan tab ({{ui:Model}}, lalu satu per lembar, lalu {{ui:Peralatan}} ketika gambar memiliki peralatan yang diberi tag, {{ui:3D}}, {{ui:Paskan}}, dan {{ui:Tampilan cetak}}), gambarnya, dan koordinat X dan Y langsung di sebuah sudut. Lihat [Melihat gambar DWG atau DXF](topic:view-dwg) dan [Melihat gambar DWG atau DXF dalam 3D](topic:dwg-in-3d).
- **Folder**: laporan folder, dengan kotak {{ui:Mulai di sini}} dan tabel model, tautan, model IFC, dan gambar. Lihat [Membuka seluruh folder proyek](topic:open-project-folder).

**Baris status** di bagian bawah panggung memberi tahu apa yang sedang dilakukan BimCraft ("Membaca model…", "Membangun geometri: 1200 dari 5400 elemen") dan apa yang salah, dengan warna merah, saat ada yang gagal. Pesan keberhasilan memudar setelah beberapa detik.

## Panel Properti

Panel kanan menampilkan:

- Untuk model IFC: elemen yang Anda klik, dengan nama, tipe, tag, GlobalId, dan setiap set properti. Nilai yang dapat Anda ubah tampak seperti tombol. Lihat [Kolom panel Properti](topic:properties-panel).
- Untuk gambar: cara bergerak, gambar dan gambar raster tertaut pada gambar tersebut dan apakah masing-masing ditemukan, serta daftar hal yang **Belum digambar**.
- Untuk kartu file atau folder: catatan singkat tentang apa yang sebaiknya dibuka berikutnya.

## Pada layar kecil

Ketika jendela lebih sempit daripada layar laptop, BimCraft menumpuk areanya: panggung di atas, lalu panel di bawahnya. Gulir halaman untuk menjangkau panel. Pada ponsel panel membentuk satu kolom; pada tablet, dua.

## Mode layar

Tombol {{ui:Layar penuh}} di bilah aplikasi, atau {{key:Ctrl+Shift+F}} di semua platform, berganti di antara tiga mode:

1. Normal.
2. Layar penuh, dengan bilah tetap tampil.
3. Layar penuh dengan bilah aplikasi tersembunyi. Gerakkan penunjuk ke tepi atas, atau ketuk di sana, untuk memunculkannya kembali.

Tekan {{key:Esc}} untuk kembali ke normal. Peramban tanpa dukungan layar penuh (seperti di iPhone) hanya berganti antara normal dan bilah tersembunyi.

## Terkait

- [Tombol dan mouse](topic:keyboard)
- [File yang dibuka dan disimpan BimCraft](topic:files)
