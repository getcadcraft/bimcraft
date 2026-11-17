---
title: Berpindah dari program BIM dan gambar lain
summary: Cara kebiasaan dari penyusunan BIM desktop dan penampilan DWG dipetakan ke BimCraft, serta perbedaan yang sering membuat orang tersandung.
keywords: berpindah, migrasi, familiar, bim desktop, family, parameter, project browser, palet properti, view cube, xref, pengelola layer, perbedaan, bandingkan
from: 2de629af
---

Jika Anda mengenal Revit, sebagian besar BimCraft akan terasa familiar dalam kata-kata dan asing dalam cakupannya. Perbedaan terpenting: versi ini membaca dan memeriksa model serta mengedit data IFC. **Ia belum menyusun seperti Revit.** Anda tidak dapat menggambar dinding, menempatkan family, membuat tampilan atau lembar, atau menyimpan file proyek. Yang bisa Anda lakukan adalah membuka hampir semua file bangunan di komputer mana pun dengan peramban, melihat isinya, memeriksa seluruh folder proyek, dan memperbaiki data dalam model IFC.

## Kebiasaan yang dipetakan

| Jika Anda terbiasa | Di BimCraft |
|---|---|
| Membuka `.rvt` di Revit untuk melihat model | BimCraft membuka `.rvt` sebagai kartu file: rilis, informasi proyek, tautan, pratinjau. Untuk model 3D, ekspor IFC lalu buka itu. [Baca file proyek atau family](topic:read-rvt-file) |
| Memeriksa rilis yang dipakai untuk menyimpan file sebelum membukanya | Kartu menampilkan "disimpan dengan Revit …" di bagian atas, tanpa meningkatkan atau mengubah file |
| Project Browser | Tidak ada penjelajah tampilan dan lembar. Model IFC memiliki daftar {{ui:Lantai}} dan {{ui:Elemen}}; gambar memiliki tab lembar |
| Palet Properties | Panel {{ui:Properti}} di sebelah kanan, untuk elemen yang Anda klik. Set properti IFC sebagai ganti grup parameter |
| Parameter instance dan tipe | Set properti instance, dan set yang ditandai "(type)". Perubahan tipe berlaku untuk setiap elemen dari tipe tersebut, seperti di Revit. [Ubah properti tipe untuk setiap elemen dari satu tipe](topic:type-vs-instance) |
| Edit Type | Tidak ada dialog: klik nilai dalam set "(type)" lalu ketik |
| Memilih banyak elemen, filter, Select All Instances | Satu elemen dalam satu waktu. Belum dibuat |
| View cube dan navigation wheel | Sebuah kubus tampilan di pojok kanan bawah, empat tombol ({{ui:Paskan}}, {{ui:Atas}}, {{ui:Depan}}, {{ui:Samping}}), dan orbit bebas. Tidak ada navigation wheel |
| Shift dan seret tengah untuk orbit, seret tengah untuk geser | Seret kiri untuk orbit, seret kanan (atau {{key:Shift}} lalu seret) untuk geser, roda untuk zoom. Gaya menu {{ui:Ribbon BIM}} beralih ke geser dengan seret tengah dan {{key:Shift}} dengan tombol tengah untuk orbit. [Menu, tombol, dan mouse](topic:menus-keys-and-mouse) |
| Denah lantai, potongan, kotak potongan | Satu bidang {{ui:Potongan}} dalam satu waktu ({{key:X}}); tidak ada kotak potongan atau denah 2D. [Potong model IFC dengan bidang potong](topic:section-plane) |
| Sembunyikan di tampilan, isolasi, visibilitas/grafik | {{ui:Lantai}} nyala dan mati, {{ui:Ruang}} dan {{ui:Tepi}}. Belum ada penyembunyian per elemen |
| Ruangan | Space IFC, disembunyikan pada awalnya. Klik {{ui:Ruang}} |
| Simpan, Simpan sebagai, sinkronkan dengan central | {{ui:Simpan sebagai IFC}} mengunduh file IFC baru. File asli tidak pernah berubah. Tidak ada central, tidak ada worksharing |
| Urungkan dengan {{key:Mod+Z}} | Berfungsi pada suntingan IFC sampai Anda menyimpan. [Ubah properti IFC dan simpan salinan yang diedit](topic:edit-ifc-properties) |
| Manage Links | Buka folder proyek: setiap tautan diperiksa dan ditandai **Ada di folder ini**, **Nama sama ditemukan**, **File pustaka**, atau **Tidak ada di folder ini**. [Buka seluruh folder proyek](topic:open-project-folder) |
| Audit, atau membuka file untuk melihat apakah rusak | Laporan folder memeriksa setiap salinan dan cadangan apakah terpotong, dalam hitungan detik. [Periksa folder untuk salinan yang rusak](topic:check-folder-health) |
| Memilih file yang tepat dari folder yang berantakan | Kotak {{ui:Mulai di sini}} menyarankan satu file, beserta alasannya |

Jika Anda terutama membuka model untuk memeriksanya, seperti di program pemeriksa model atau penampil IFC, pilih gaya menu {{ui:Penampil}}: alat untuk melihat dan memeriksa ada di depan, dan alat bangunan menunggu di satu menu. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).

## Dari melihat file DWG

Jika Anda membuka DWG di AutoCAD atau penampil DWG:

| Jika Anda terbiasa | Di BimCraft |
|---|---|
| Tab model dan layout di bawah | Tab di atas gambar: {{ui:Model}} dan satu untuk setiap lembar |
| ZOOM Extents, klik dua kali roda | Klik dua kali, {{key:F}} atau {{ui:Paskan}} |
| Geser dengan tombol tengah | Seret dengan tombol apa pun |
| Pengelola layer | Daftar {{ui:Layer}}: centang untuk menampilkan, hapus centang untuk menyembunyikan, {{ui:Semua nyala}} dan {{ui:Semua mati}} |
| Pengelola xref | **Gambar tertaut** di sebelah kanan, dengan **Ditampilkan** atau **Tidak ditemukan**, dan {{ui:Tambahkan gambar tertaut…}} |
| Pratinjau plot | {{ui:Tampilan cetak}} atau {{key:P}}: hitam di atas putih dengan tebal garis. Tidak mencetak |
| Ekstraksi data atribut blok | Tab {{ui:Peralatan}} untuk gambar layanan makanan yang diberi tag, dengan {{ui:Unduh CSV}} |
| Ukur, gambar, sunting, simpan sebagai | Tidak ada di BimCraft. Aplikasi drafting CadCraft menggambar dan menyunting |

## Perbedaan yang membuat orang tersandung

- **Ia berjalan di peramban, dan peramban berhati-hati dengan file Anda.** BimCraft hanya dapat membaca file dan folder yang Anda berikan, dengan memilihnya atau menyeretnya. Ia tidak dapat membuka file sendiri, dan tidak dapat menimpa file. Setiap penyimpanan adalah unduhan.
- **Tidak ada yang diunggah.** Kata "unggah" di beberapa dialog folder peramban adalah kata-kata peramban itu sendiri. File tetap berada di komputer Anda.
- **IFC adalah format model.** File proyek dibuka sebagai kartu karena konten 3D-nya tidak terdokumentasi. Perlakukan IFC sebagai cara model masuk ke BimCraft.
- **Suntingan bersifat copy-on-write.** Mengubah nilai satu elemen tidak pernah mengubah tetangganya, meskipun exporter membagi nilai itu di antara mereka. Properti tipe adalah pengecualian yang disengaja.
- **Tidak ada proyek, tidak ada tampilan.** BimCraft menampilkan satu file dalam satu waktu dan tidak mengingat apa pun tentangnya setelah Anda menutup tab, kecuali nama folder terbaru di Chrome dan Edge.
- **Tombol Mac.** Di tempat pintasan Windows Revit memakai Ctrl, pintasan BimCraft memakai {{key:Mod}}: Command di Mac.
- **Kebiasaan mouse Anda.** Orbit adalah tombol kiri, bukan Shift dan tombol tengah, kecuali Anda memilih gaya menu {{ui:Ribbon BIM}} atau mengatur tombolnya sendiri di [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).

Lihat [Yang belum dibuat](topic:not-built-yet) untuk apa yang bisa Anda gunakan sebagai gantinya hari ini.
