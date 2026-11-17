---
title: Yang belum dibuat
summary: Apa yang belum dilakukan build BimCraft ini, dan apa yang dapat digunakan sebagai gantinya hari ini.
keywords: hilang, batasan, keterbatasan, tidak didukung, peta jalan, authoring, pemodelan, potongan, ukur, benturan, bcf, cloud, desktop, ekspor
from: 87777dcc
---

BimCraft saat ini adalah pembaca, pemeriksa, dan penyunting data IFC yang sudah mulai menggambar bangunan: dinding, pintu dan jendela, ruang, lantai, langit-langit, dan atap (lihat [Gambar dinding](topic:draw-walls), [Pintu dan jendela](topic:doors-and-windows) dan [Ruang, lantai, langit-langit, dan atap](topic:floors-and-roofs)). Berikut daftar jujur tentang yang belum dilakukannya, beserta apa yang harus dilakukan sebagai gantinya.

## Pemodelan dan authoring

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Menggambar balok; kolom dari profil baja | Gunakan program authoring Anda, lalu buka ekspor IFC-nya di sini. Kolom persegi dan bulat ditempatkan di sini (lihat [Grid dan kolom](topic:grids-and-columns)); tangga dan railing lurus, L, U, winder, dan spiral digambar di sini (lihat [Tangga dan railing](topic:stairs-and-railings)) |
| Jendela di muka dormer; dormer pada bidang atap yang digambar dengan tangan; atap melengkung; penutup atap yang dirender dengan tekstur | Bidang atap digambar dengan sudut-sudutnya, dan kemiringan untuk setiap dinding: lihat [Atap: kemiringan untuk setiap dinding, atap pelana, shed, dan bidang atap](topic:roofs) |
| Mengubah dinding, pintu, atau jendela yang dibuat program lain | Program authoring Anda; alat gambar hanya mengubah yang mereka gambar |
| Profil dinding dengan tonjolan atau lubang; bukaan dinding yang bukan persegi panjang; menambah atau menghapus titik profil dinding di tampilan 3D | Profil, lekatan (attach), kemiringan (slant), dan bukaan bekerja di Properties, di elevasi dan potongan, di tampilan muka dinding, dan dengan grip di 3D, untuk dinding lurus maupun melengkung: lihat [Bentuk dinding: lekatan, profil, kemiringan, dan bukaan](topic:wall-shape) |
| Pada dinding melengkung: {{ui:Pangkas / perpanjang}} dan {{ui:Sudut}}, framing, dimensi denah otomatis, snap sepanjang busur (ia menempel ke ujung dan titik tengah busurnya) | Gambar dinding lurus untuk itu, atau gunakan segmen lurus. Dinding melengkung ada di [Gambar dinding](topic:draw-walls) |
| Menyeret item pustaka yang ditempatkan di tampilan 3D | Seret di denah, atau ketik X, Y, dan Rotasi di {{ui:Properties}}: lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library) |
| Menempatkan tanaman dari pustaka tanaman di ruang kerja Landscape CivilCraft | Tanam di CivilCraft, atau tempatkan pohon dan semak dari entourage pustaka: lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library) |
| Di add-on Plant (dimatikan sampai Anda menyalakannya): menggambar jalur berpipa ke dalam model, nomor spool pada isometriknya, pemeriksaan tata letak peralatan yang ditempatkan dari pustaka | Gambar jalur dengan {{ui:Pipa}} (lihat [Pipa dan duct](topic:pipes-and-ducts)); pemeriksaan tata letak membaca tabel peralatan milik add-on itu sendiri |
| Memutar, mencerminkan, atau mengarray dinding, pintu, dan jendela tunggal yang digambar (dinding dipindah dan disalin dengan Pindahkan, Offset, dan Box stretch: lihat [Bentuk dinding, pemisahan, offset, peregangan, dan kunci](topic:wall-tools)); gaya sambungan (butt, square off) di sudut dengan dinding melengkung atau tiga dinding atau lebih (lihat [Bentuk dinding, pemisahan, offset, peregangan, dan kunci](topic:wall-tools)); alat Teks; dinding tirai | Salin semua di satu level dengan {{ui:Salin level ini…}} (lihat [Gambar dinding](topic:draw-walls#levels)); selain itu, gambar ulang |
| Lapisan rakitan dinding yang digambar di denah dan potongan; dimensi di potongan dan elevasi; dimensi referensi ke pintu, jendela, dan komponen lain; rakitan dan membran di jadwal dan kuantitas; pustaka material yang dipakai bersama antarproyek; prioritas lapisan di potongan, elevasi, dan 3D serta di simpul tiga dinding atau lebih (di denah, sudut, sambungan T, dan persilangan dua dinding dibersihkan menurut prioritas lapisan: lihat [Bentuk dinding, pemisahan, offset, peregangan, dan kunci](topic:wall-tools)); lapisan yang dibungkus atau bervariasi; menyunting rakitan dinding yang dibuat program lain | Lapisan ada di tipe dinding dan pratinjaunya ({{ui:Rakitan dinding…}}); dinding diukur sebagai satu amplop: lihat [Rakitan dinding dan dimensi referensi](topic:wall-assemblies) |
| Mengubah bentuk atau ukuran elemen (selain dinding, pintu, dan jendela yang digambar di sini, serta elemen yang ditempatkan dari famili) | Program authoring Anda. Hapus, potong, salin, dan tempel bekerja di sini: lihat [Hapus, potong, salin, dan tempel elemen bangunan](topic:edit-elements) |
| Menghapus lantai, ruang, bangunan, atau tapak | Hapus elemen di dalamnya |
| Menempel elemen bangunan ke model lain | Salin dan tempel dalam satu model; item pustaka yang ditempatkan dapat ditempel ke model mana pun |
| Menambah properti atau set properti baru | Isi nilai yang sudah ada di sini, atau tambahkan parameter di program authoring Anda lalu ekspor lagi |
| Menyunting kuantitas, daftar, enumerasi | Program authoring Anda |
| Menyimpan file proyek program lain | BimCraft menyimpan IFC (dan file famili miliknya: lihat [Famili dan ukurannya](topic:families)) |
| Famili: pustaka famili yang ditempatkan dari denah dan dibagikan antarproyek (Pustaka), hotspot yang diseret di tampilan 3D elemen yang ditempatkan (mereka diseret di pratinjau penyunting famili dan di denah), tingkat detail yang dipilih per tampilan (satu tingkat untuk proyek; lembar memilih menurut skala), revolusi pada bidang tegak di dalam famili lain yang diputar seperempat putaran, simbol denah pintu dan jendela sendiri (mereka menggambar simbol dari starter-nya) | Famili dengan parameter yang diketik, rumus, simbol denah sendiri, hotspot, pengulangan, tingkat detail, famili di dalam famili, ukuran dari tabel, dan parameter per elemen dibuat di sini: lihat [Sunting famili](topic:family-editor) dan [Famili dan ukurannya](topic:families). Duplikat famili untuk memulai dari satu famili |
| Menyunting tipe program lain sebagai famili; mengubah item pustaka menjadi famili | Tipe program lain didaftar, dikelompokkan menurut tebakan, dan elemennya dipilih. Item pustaka ditempatkan apa adanya |
| Fitting, katup, dan peralatan dari pabrikan (kapasitas, berat, ukuran sambungan pabrikan); panjang tee dan reducer ASME B16.9 pada spool baja; kehilangan tekanan melalui fitting, aliran, dan penyeimbangan; sprinkler; cable tray; menentukan ukuran stack dan vent menurut fixture unit; menyeret sudut jalur; memotong bukaan di dinding dan pelat; melepas ujung jalur yang terpasang ke port (kecuali dengan menghapus peralatannya); port pada item pustaka yang ditempatkan dari panel Pustaka; berat fitting; sambungan, pengukur, dan konektor duct | Jalur pipa dan duct dengan fitting standar generik, sistem, denah, jadwal, dan takeoff digambar di sini: lihat [Pipa dan duct](topic:pipes-and-ducts). Peralatan generik dengan port, jalur yang terhubung, dan pemeriksaan koneksi: [Peralatan MEP dengan port](topic:mep-equipment), [Hubungkan pipa dan duct ke peralatan](topic:mep-connections). Set benturan, jarak bebas, dan daftar bukaan: [Periksa pipa dan duct terhadap struktur](topic:mep-against-structure). Spool dan lembar baja, daftar potong duct: [Spool pipa baja dan lembar spool](topic:pipe-spools). Bawa item pabrikan dari program MEP Anda sebagai IFC |
| Pemeriksaan kode desain profil I las, profil I yang nama profil IFC-nya tidak tercantum sebagai ukuran W, S, IPE, HEA, atau HEB hasil roll, serta profil tabung, siku, dan kanal (hasilnya tidak diperiksa); tekuk atau respons dinamis (frekuensi alami ada di blok Elemen hingga) (orde kedua hanya P-Delta: elastis, lentur, tanpa reduksi kekakuan); dinding dan pelat dalam analisis; beban yang dibuat dari luasan (kecuali satu tekanan pada setiap pelat beton) | Tab {{ui:Analisis}} memberikan gaya, reaksi, dan lendutan balok, kolom, dan bresing dengan analisis orde pertama serta memeriksa profil I hasil roll, sebagai bantu sampai insinyur meninjaunya: lihat [Analisis rangka struktur](topic:frame-analysis#design-checks) |

## Melihat model

| Belum | Sebagai gantinya, saat ini |
|---|---|
| 3D dari file proyek | Ekspor IFC dan buka. Lihat [Mendapatkan file proyek ke 3D melalui IFC](topic:rvt-to-ifc) |
| Elevasi interior dalam set gambar yang dihasilkan (dibuat dari {{ui:Properties}} ruang dan pada lembar Anda sendiri); dimensi Anda sendiri pada elevasi dan potongan (tanda level, tinggi, lebar, dan tag pintu/jendela digambar; catatan ditulis di tampilan: lihat [Sunting di elevasi dan potongan](topic:edit-in-elevations)); menggambar dinding pada elevasi (digambar di bidang potongan); templat tim melalui Studio | Set gambar yang dibuat dari model: lihat [Elevasi, potongan, dan lembar](topic:sheets). Untuk model IFC apa pun: satu bidang {{ui:Potongan}} atau kotak potongan; lihat [Potong model IFC dengan bidang potongan](topic:section-plane) |
| Tampilan callout, tampilan detail, tampilan drafting, dan legenda; garis drafting dan hatch yang digambar di tampilan; memotong elevasi atau potongan; templat tampilan untuk elevasi, potongan, denah langit-langit, dan tampilan 3D; denah langit-langit dalam set gambar yang dihasilkan; satu set lembar sendiri dalam satu PDF | Denah dan denah langit-langit memiliki rentang tampilan, wilayah pemotongan, skala, dan underlay (denah juga memiliki templat), dan lembar Anda sendiri memuat denah, denah langit-langit, elevasi, potongan, dan jadwal, masing-masing disimpan sebagai PDF: lihat [Tampilan, rentang tampilan, dan lembar Anda sendiri](topic:views-and-sheets) |
| Memindahkan lampu yang sudah ditempatkan ke langit-langit setelahnya; langit-langit miring atau bertingkat; pola langit-langit selain lima grid; simbol lampu sendiri di denah langit-langit | Tempatkan dengan **Pasang: Di langit-langit**; denah langit-langit menggambar armatur dari bentuknya sendiri: lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library) |
| Membagikan set pencarian kepada orang lain, set di dalam file IFC | Set tetap berada di peramban ini; lihat [Temukan elemen menurut kelas, nama, atau properti](topic:find) |
| Mengukur sudut, atau sepanjang jalur beberapa titik | Ukur tiap bagian dengan {{ui:Measure}}: lihat [Ukur jarak, luas muka, dan lokasi di 3D](topic:measure) |
| Tekstur di tampilan 3D live | Material yang dicat menampilkan warnanya di tampilan dan teksturnya di gambar yang dirender: lihat [Render gambar model](topic:render) |
| Benturan jarak bebas (lunak) antara dua set mana pun, grup benturan, menyimpan hasil benturan | Jalankan {{ui:Pemeriksaan benturan}} dan buat isu dari yang penting: lihat [Periksa benturan](topic:clash-check). Pipa dan duct terhadap struktur memiliki {{ui:Periksa jarak bebas}}: lihat [Periksa pipa dan duct terhadap struktur](topic:mep-against-structure) |
| Menyimpan beberapa model sebagai satu set, atau menyunting dua model sekaligus | Sunting satu model setiap kali; masing-masing menyimpan file miliknya sendiri |
| Menugaskan isu, tenggat, label, beberapa sudut pandang per isu, menyunting isu | Satu tampilan per isu; lihat [Isu dan file BCF](topic:issues-bcf) |
| `.ifczip` dan `.ifcxml` | Ekstrak zip atau ekspor `.ifc` biasa |
| Layer peta untuk model tanpa konversi peta, atau di tampilan gambar | Ekspor model dengan koordinatnya: lihat [Peta di atas tanah di bawah model](topic:map-layers) |
| Pemindaian E57 di atas 6 juta titik atau 512 MB; file asli pabrikan pemindai (RCP, RCS, FLS, LGS, TZF, ZFS); point cloud di tampilan 3D gambar; menyimpan posisi cloud bersama model | Ekspor pemindaian sebagai LAS atau LAZ dan buka di samping model IFC: lihat [Format point cloud](topic:point-cloud-formats) dan [Tampilkan point cloud di samping model](topic:point-clouds) |
| Mendaftarkan pemindaian: menemukan target (bola, papan catur) di dalam pemindaian dengan sendirinya, menyelesaikan semua pemindaian sekaligus (bundle adjustment), skala, mendaftarkan terhadap model | Pilih titik yang cocok atau ketik koordinat target, lalu sempurnakan satu pemindaian setiap kali dengan ICP: lihat [Daftarkan beberapa pemindaian menjadi satu](topic:register-scans) |
| Membuka file proyek `.pln`, `.pla`, `.tpl`, dan `.bpn` | Ekspor IFC dan DWG darinya, atau bundel proyek: lihat [Buka file proyek .pln dan .pla](topic:pln-project-files) dan [Buka bundel proyek](topic:open-project-bundle) |
| Membuka daftar {{ui:Elemen}} untuk memilih menurut jenis | Klik grup jenis di {{ui:Model tree}}: lihat [Temukan jalan dengan pohon model](topic:model-tree) |
| Mengetik komentar atau judul pada isu di VR, catatan suara, memindahkan bidang potongan dengan tangan di VR, kotak potongan di VR | Tempatkan isu di VR, lalu tambahkan katanya di tab Isu; atur bidang atau kotak potongan di tampilan 3D sebelum masuk: lihat [Tinjau model di headset VR](topic:vr-review) |
| Melihat orang di meja di VR (hanya orang di VR yang tampil), merekam jalan-jalan di VR | Minta mereka bergabung di VR, atau ikuti di tampilan 3D |
| Simulasi cahaya siang (cahaya siang berbasis iklim, silau, jam matahari), jendela atap dalam faktor cahaya siang, pemeriksaan terhadap BS EN 17037 atau skema bangunan hijau; metode energi ISO 52016-1, simulasi energi per jam, massa termal dan jembatan termal, file iklim | Alat bantu desain: faktor cahaya siang rata-rata, komponen langit vertikal setiap jendela, matahari melalui jendela pada tanggal tertentu, dan faktor cahaya siang pada grid ([Perkirakan cahaya siang di tiap ruang](topic:daylight-factor)); kehilangan panas, tahun derajat-hari, dan puncak pendinginan per ruang ([Perkirakan beban pemanasan dan pendinginan](topic:heating-and-cooling-loads)). Gunakan program simulasi untuk kepatuhan |
| Kembaran bangunan yang di-host: pembacaan disimpan dan peringatan dikirim lewat email saat BimCraft ditutup, email jatuh tempo perawatan; MQTT 5; membaca kembali pekerjaan COBie | Pembacaan dari CSV atau langsung dari broker atau alamat Anda sendiri selama model terbuka, batas yang menandai aset, dokumen, COBie keluar dan masuk: lihat [Simpan data aset dan catatan perawatan di model](topic:assets-and-maintenance) |
| Plug-in atau tautan live untuk Enscape, Twinmotion, atau program visualisasi lain; file FBX atau Datasmith; satu objek per elemen, tampilan dan jalan yang disimpan dalam .glb | Simpan `.glb` untuk program rendering yang membaca glTF, file USD (satu objek per elemen, dengan data IFC-nya: lihat [Ekspor model sebagai USD](topic:usd)), atau IFC untuk program yang berjalan di dalam program desain lain: lihat [Kirim model ke program rendering](topic:model-for-rendering) dan [Buka adegan di program lain](topic:render-open-in) |
| Program lain yang menggambar gambar Render tanpa add-on mesin render (CadCraft tidak pernah menjalankan program berlisensi GNU GPL); kamera panorama atau stereo dan gambar langit melalui program lain; plug-in Unreal Engine (file-filenya ditulis, plug-in yang membukanya belum dirilis) | Mesin Fast dan Path tracer kami; add-on mesin ([gambar dengan program lain](topic:render-other-program)); folder file USD, glTF, atau Unreal dari daftar Engine untuk dibawa ke program mana pun |
| Di tampilan live: menyebarkan tanaman dan batu, berbagi panorama, tur, penampil offline, atau video | Tampilan live ModelCraft memilikinya; di sini, gambar render dan panorama 360°: lihat [Tampilan live](topic:live-view) dan [Render gambar model](topic:render) |

## Gambar

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Menyunting, mengukur, atau menyimpan DWG dan DXF | Aplikasi drafting CadCraft ({{ui:Edit di CadCraft}} pada tampilan 2D) |
| Mencetak atau mengekspor PDF | Cetak dari program yang membuat gambar; periksa dulu dengan {{ui:Tampilan cetak}} |
| Gaya plot dan tabel pena | {{ui:Tampilan cetak}} menampilkan hitam polos dengan tebal garis |
| File DWG yang lebih lama dari R13, dan DXF biner (BimCraft memberi tahu saat Anda membukanya) | Simpan ulang gambar sebagai DWG yang lebih baru, atau sebagai DXF ASCII |
| Gambar yang ditautkan di dalam gambar tertaut | Buka langsung |
| Gambar TIFF | Simpan salinan PNG atau JPEG dengan nama yang sama lalu tambahkan |
| Gambar DGN | Hanya tercantum dalam laporan folder |
| Objek yang tercantum di bawah **Belum digambar** | Lihat gambar di program yang membuatnya |
| Solid ACIS, bodi, region, dan permukaan, serta mesh subdivisi di 3D | Ekspor IFC atau 3D faces dari program yang membuat gambar |
| Gambar, multileader, dan lembar di tampilan 3D gambar | Lihat di tab {{ui:Model}} dan lembar |
| Memilih objek di tampilan 2D gambar | Beralih ke {{ui:3D}} dan klik objeknya di sana: lihat [Lihat gambar DWG atau DXF dalam 3D](topic:dwg-in-3d) |
| Jadwal peralatan dari gambar tanpa tag `KCL-ITEM` | Tidak tersedia |
| Jadwal peralatan sebagai XLSX atau PDF | {{ui:Unduh CSV}} dan buka di spreadsheet |

## File dan platform

| Belum | Sebagai gantinya, saat ini |
|---|---|
| Penyimpanan cloud | Simpan salinan di komputer atau server kantor Anda. Penyimpanan cloud belum tersedia |
| Mengingat folder di Firefox dan Safari | Pilih folder lagi, atau seret ke sana |
| Mengurungkan setelah menyimpan | Buka file asli lagi untuk memulai dari awal |
| Mengisi bagian yang hilang dari file proyek yang terpotong | Salin ulang file asli; di dalam folder, BimCraft membaca cadangan lengkap terbaru |
| Membuka lagi file yang sedang Anda buka | Perubahan yang belum disimpan ditawarkan kembali sebagai "Pulihkan pekerjaan Anda?" saat Anda kembali; buka file lagi dari daftar terbaru |
