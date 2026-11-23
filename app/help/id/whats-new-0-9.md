---
title: Yang baru di 0.9 (sebelumnya)
summary: Bentuk dinding, pisahkan, offset, regang, dan kunci-ke-grid, level di bawah tanah, dimensi grid dan Ukur di denah, duplikat tampilan dengan gaya kerja dan tabel pena, Laporkan sebagai, ekspor Collada dan Google Earth, Scan ke BIM, analisis angin dan seismik, add-on pencetakan resin.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, 0.9, catatan rilis, bentuk dinding, persegi panjang, poligon, busur, pilih garis, jiplak garis besar, offset, sambung, regang kotak, sejajarkan dan kunci, pisahkan dinding, celah, sambung kembali, kunci ke grid, tumbuh dari, ukur dari, tambah level di bawah, basement, perintah level, dimensi grid, ukur di denah, gaya kerja, duplikat tampilan, salinan sendiri, tampilan tertaut, tabel pena, cetak seperti tampilan, laporkan sebagai, ketik skala, impor svg, tempatkan di denah, tempatkan di model, collada, dae, kmz, google earth, scan ke bim, beban angin, seismik, elemen hingga, panel dokumen, pencetakan resin, yang baru, apa yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, evakuasi, orang, antrean, akustik, reverberasi, respons impuls, banjir, angin, gempa, bahaya, siklus hidup, umur layanan, ids, tag, jadwal, pindahkan, sejajarkan, distribusikan, gambar, latar belakang, scan ke dinding, tapak dari civilcraft, gambar panel, framing, surya, pv, vrf, fan coil, ukuran pipa, cable tray, iluminansi, beton, bandingkan scan, epsg, proyeksi, dokumen, templat, karbon, biaya, mesin render, buka di, usd, glb, unreal, urungkan, add-on, pcf, simbol, tanaman, jiplak, pena, pita, penjelajah proyek, layout
from: 816df7f8
---

Ini yang berubah di BimCraft 0.9, dibandingkan dengan 0.8.1. Dua tema besarnya adalah alat dinding yang sesungguhnya dan tampilan yang berperilaku seperti yang diharapkan orang yang datang dari program BIM besar. Di sekitarnya ada ekspor Collada, asisten yang dapat menempatkan perangkat listrik, Scan ke BIM, serta kerja angin, seismik, dan elemen hingga di tab {{ui:Analisis}}.

## Baru

### Dinding

- **Gambar bentuk utuh.** Di {{ui:Gambar}}, buka {{ui:Bentuk}} (atau pilih bentuk di daftar Bentuk pada baris Dinding) untuk persegi panjang, persegi panjang yang diputar, poligon 3 hingga 64 sisi, busur dengan pusat, busur singgung, dinding pada garis yang dipilih, atau dinding yang mengelilingi area tertutup yang Anda klik di dalamnya. Persegi panjang adalah empat dinding dengan empat sudut tersambung dan satu langkah urungkan. Lihat [Bentuk dinding, pisahkan, offset, regang, dan kunci](topic:wall-tools).
- **Atur sebelum menggambar, ubah sesudahnya.** Baris Dinding memiliki {{ui:Offset}} dan {{ui:Sambung}} (hapus centang untuk menggambar dinding berdiri sendiri). Setelahnya, gunakan {{ui:Offset}}, {{ui:Regang kotak}}, dan {{ui:Sejajarkan dan kunci}} pada dinding yang sudah digambar. Dinding yang dipindah atau diregang tetap memiliki pintu, jendela, dan dimensinya. Setiap resep adalah satu langkah urungkan.
- **Potong dinding.** {{ui:Pisahkan}}, {{ui:Celah}}, {{ui:Ujung bebas}}, {{ui:Hapus segmen}}, dan {{ui:Sambung kembali}} memotong dinding dengan satu klik atau di tempat dinding lain melintasinya. Pemotongan yang melalui pintu ditolak. Lihat [Bentuk dinding, pisahkan, offset, regang, dan kunci](topic:wall-tools).
- **Kunci dinding ke garis grid.** Pilih dinding di sepanjang garis grid dan centang {{ui:Kunci ke grid}} di {{ui:Properti}}. Dengan alat Grid aktif, ketik jarak di {{ui:Pindahkan sejauh}} untuk garis yang dipilih, dan dinding yang terkunci ikut bergerak dalam satu langkah urungkan.
- **Bentuk satu dinding.** Di {{ui:Properti}} satu dinding, Anda dapat mengaitkan bagian atas atau alasnya ke atap, pelat lantai, atau plafon, mengedit garis besar elevasinya, memiringkannya, atau memotong bukaan dinding tanpa pintu atau jendela. Lihat [Bentuk dinding](topic:wall-shape).
- **Panjang menunjukkan ujung yang tetap.** {{ui:Tumbuh dari}} menentukan apakah titik awal, titik akhir, atau pusat tetap di tempat saat panjang diubah.
- **Panjang dan dimensi denah sepakat.** {{ui:Ukur dari}} (garis tengah, muka dalam, atau muka luar) menggerakkan kolom Panjang dan dimensi dinding di denah. Ia mulai dari garis tengah, sehingga dimensi dinding di denah kini menunjukkan garis tengah, padahal sebelumnya menunjukkan muka luar. Ubah di baris Dinding, di {{ui:Properti}}, atau di {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Dinding}}.

### Level, grid, dan pengukuran

- **Tambah level di bawah.** {{ui:Tambahkan level di bawah}} di panel {{ui:Level}} menambah level di bawah level terendah, setinggi level itu, pada elevasi negatif (Level -1, Level -2). Tidak ada yang lain yang bergerak. {{ui:Tambah level…}} kini menerima tinggi negatif. Mengetik LEVEL, LEVELS, STOREY, atau STOREYS di baris perintah membuka {{ui:Tambah level…}}, dan ada tombol {{ui:Level}} di menu serta tab pita. Lihat [Situs, bangunan, dan level](topic:site-building-and-levels).
- **Dimensi grid di denah.** Dengan alat {{ui:Grid}} aktif, centang {{ui:Dimensi}} untuk menggambar jarak antara garis yang bertetangga dan ukuran keseluruhan di luar lingkaran pada denah setiap level. Lihat [Beri dimensi grid](topic:grid-dimensions).
- **Ukur di denah.** {{ui:Ukur}} di grup {{ui:Gambar}} memberikan jarak dengan selisih X dan Y antara dua klik. Tidak ada yang disimpan di model. Lihat [Ukur di denah](topic:measure-on-the-plan).
- **Ubah beberapa kolom sekaligus.** Pilih kolom bersama dinding, dan pilihan itu mencantumkan setiap jenis dengan {{ui:Pertahankan hanya ini}}. Satu klik mempertahankan kolom dan menampilkan kolom isian yang sama.
- **Satu satuan tampilan di mana saja.** Koordinat, pengukuran, potongan, skala lembar, beban dan hasil pada tab frame, serta teks Masalah mengikuti satuan yang Anda pilih. Ekspor tetap SI.

### Tampilan, lembar, dan cetak

- **Gaya kerja.** {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Gaya kerja}} memilih apakah setiap tampilan memiliki anotasi dan tabel pena sendiri, atau berbagi. Lihat [Gaya kerja, tampilan duplikat, pena di kertas, Laporkan sebagai, dan templat](topic:working-style).
- **Duplikat tampilan.** Denah, denah plafon, callout, elevasi, dan potongan dapat diduplikasi sebagai {{ui:Salinan sendiri}} atau {{ui:Tertaut}}; {{ui:Jadikan salinan sendiri}} membuat yang tertaut menjadi mandiri. Lihat [Gaya kerja, tampilan duplikat, pena di kertas, Laporkan sebagai, dan templat](topic:working-style).
- **Cetak seperti tampilan, atau lewat tabel pena.** Penimpaan pena disimpan di IFC bersama tampilan, dan lembar serta PDF menggambarnya seperti di layar. Topik yang sama mencakup tabel pena.
- **Laporkan sebagai.** {{ui:Laporkan sebagai}} di {{ui:Properti}} menulis pelat yang digambar sebagai jalan, dinding sebagai panel, atau atap sebagai rampa ke IFC sebagai kelas yang Anda pilih, dan menghitungnya demikian di jadwal, Kuantitas, Temukan, Warnai menurut, dan Masalah.
- **Edit di elevasi dan potongan.** Gambar dan pindahkan dinding, bukaan, level, dimensi, dan catatan langsung di elevasi atau potongan, dengan ukuran lembar dan kop gambar Anda sendiri. Lihat [Edit di elevasi dan potongan](topic:edit-in-elevations).
- **Lembar.** Setiap lembar dapat berorientasi lanskap atau potret. Kotak {{ui:Ketik skala}} berada di samping daftar skala pada setiap tampilan yang ditempatkan (1:64, 2:1, 1/4" = 1'). Anda dapat menyeret gambar yang ditempatkan atau menggesernya dengan tombol panah, dan {{ui:Format…}} › {{ui:Impor SVG…}} mengubah desain lembar Anda sendiri menjadi kop gambar dengan isian yang diketik per lembar.
- **Kredit pustaka pada lembar.** Set gambar dengan item Pustaka mendapat jadwal kredit Pustaka yang dapat Anda tempatkan di lembar mana pun. Lihat [Kredit pustaka](topic:library-credits).

### Pustaka: menempatkan

- **Penempatan mengikuti tampilan.** Di tampilan Denah, Pustaka menampilkan {{ui:Tempatkan di denah}}; di 3D menampilkan {{ui:Tempatkan di model}}; di Split menampilkan tombol terbagi dengan {{ui:Tempatkan di denah}} sebagai aksi utama. Kedua cara menulis elemen IFC yang sama. Anda juga dapat menyeret kartu Pustaka ke denah atau tampilan 3D; dengan pena atau jari, tekan dan tahan, lalu seret. Lihat [Tempatkan dari Pustaka](topic:place-from-library).

### Berkas dan asisten

- **Collada dan Google Earth.** {{ui:Collada}} di bilah alat (menu File pada gaya menu) menulis .dae, atau .kmz yang ditempatkan di lokasi model pada peta. Lihat [Ekspor model sebagai Collada atau untuk Google Earth](topic:collada).
- **Asisten dapat menempatkan perangkat listrik.** Asisten Anda yang terhubung memiliki alat baru untuk menambah, mendaftar, mengubah, dan menghapus perangkat serta mengatur lampu. Asisten tetap nonaktif sampai Anda mengaktifkannya di {{ui:Pengaturan}}. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Scan ke BIM (add-on).** Nonaktif secara default dan memerlukan add-on point cloud. Ia mengusulkan lantai, dinding, pintu, dan jendela dari pemindaian, dengan deviasi terukur untuk masing-masing; menerima usulan adalah satu langkah urungkan.

### Analisis

- **Data situs angin dan seismik.** Di tab {{ui:Analisis}}: beban angin menurut ASCE 7-10 atau 7-16 untuk bangunan tertutup yang kaku, dengan gaya pada setiap lantai sebagai kasus beban, serta data situs seismik dengan pencarian USGS dan spektrum desain.
- **Tindak lanjut struktural dan elemen hingga.** Pemeriksaan beton menurut ACI 318-19, gaya lateral ekuivalen menurut ASCE 7-22, simpangan lantai, pelat lantai dan dinding sebagai pelat, serta kombinasi beban dari ASCE 7 dan EN 1990. Mesin elemen hingga kami sendiri menangani cangkang, tetrahedron, dan analisis modal. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic) dan [Analisis rangka](topic:frame-analysis).

### Add-on dan dokumen lainnya

- **Pencahayaan interior (add-on).** Menempatkan armatur lampu dan menulis lux sebagai angka ke denah setiap level, dengan perkiraan silau dan laporan yang dapat dicetak.
- **Panel dokumen.** {{ui:File}} › {{ui:Dokumen…}} memiliki check out dan check in dengan file kunci, huruf revisi, status rilis, dan riwayat.
- **Wilayah dan baja.** Paket gambar dan peraturan bangunan Afrika Selatan di add-on Regulasi, serta 976 ukuran baja Inggris di tabel penampang bersama.
- **Add-on pencetakan resin gratis.** Slicer, penyangga dan raft, uji paparan, serta format file GOO, SL1, Chitubox, dan Anycubic, semuanya nonaktif secara default.

## Di setiap aplikasi

- Mengarahkan kursor ke tombol atau kontrol menampilkan tooltip Bootstrap.
- Tips awal di area gambar kosong memiliki tombol tutup; BimCraft mengingat bahwa tips itu sudah ditutup.
- Baris tab panel yang tidak muat kini dapat digulir, tidak lagi terpotong.
- Dengan dokumen terbuka, tab peramban menampilkan "<document> - BimCraft | CadCraft".
- Di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Tata letak}}, tata letak berupa menu tarik-turun dengan pilihan dua baris.
- Daftar bahasa di {{ui:Pengaturan}} menawarkan lebih banyak bahasa daripada 0.8; bahasa selain Inggris adalah draf mesin.

## Diperbaiki

- **Pindahkan kini berfungsi pada tangga,** dan pada rampa, pagar, bidang atap, perangkat berdiri sendiri, gambar, serta jalur.
- **Menyeret dinding tidak lagi memiringkan ruang.** Grip tengah memindahkan dinding persegi terhadap dirinya sendiri, dan sudutnya meluncur di sepanjang dinding yang tersambung. Tahan {{key:Mod}} untuk pemindahan bebas yang lama; {{ui:Jadikan siku}} mengembalikan 90 derajat.
- **Perubahan ketebalan atau tipe di simpul yang tersambung** kini menjaga sudut tetap tertutup di L, T, simpul tiga dinding, dan di dekat dinding melengkung.
- **Memindahkan atau menyalin grup ruang** menjaga dinding tersambung di luar grup tetap tersambung.
- **Ulangi menjaga identitas dimensi dinding.**
- **Memilih dinding dengan Gambar nonaktif** kini tidak lagi menimbulkan galat di Properti.
- **Render beralih ke WebGL** saat GPU tidak dapat dimulai, alih-alih berhenti.
- **Pemeriksaan EnergyPlus dapat dinyalakan kembali.**
- **Dokumen dibuka sebagai dialog di tengah.** {{key:Esc}}, tombol X, atau klik pada halaman yang diredupkan menutupnya.
- **Tombol {{ui:Denah}}, {{ui:Split}}, dan {{ui:3D}} tampil** begitu model terbuka, bukan hanya setelah Gambar pernah dinyalakan sekali.

## Batas yang jujur

- Tidak ada yang dicetak di perangkat keras sungguhan. Penyangga resin itu baru dan belum terbukti.
- Hasil angin, seismik, beton, dan elemen hingga adalah alat bantu pemeriksaan untuk insinyur, diuji terhadap rumus tertutup, bukan terhadap bangunan sungguhan.
- Scan ke BIM diuji pada bangunan sintetis, bukan pada pemindaian sungguhan, dan hanya menemukan ruang berbentuk persegi.
- Collada belum dibuka di Blender atau Google Earth di sini.
- Perkiraan pencahayaan diperiksa terhadap penelusuran kami sendiri, bukan terhadap program pencahayaan lain.
- Angka Afrika Selatan belum diverifikasi.
- Gaya sambungan dinding (butt, mitre, square off) dan prioritas layer belum dibuat; sudut dibuat dengan mitre.
- Bahasa selain Inggris adalah draf mesin.

Semua yang lain ada di [Yang belum dibuat](topic:not-built-yet). Perubahan sebelumnya ada di catatan 0.8 dan 0.8.1 di bawah halaman ini.

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. BimCraft kini dapat menjawab pertanyaan tentang sebuah bangunan dan mengujinya, dengan orang, suara, air, angin, dan gempa, serta menggambarnya dengan lebih banyak alat; 0.8.1 adalah rilis perbaikan.

### Baru

**Uji bangunan**

- **Orang di dalam bangunan.** Bagian {{ui:Orang di dalam bangunan}} pada panel kiri menelusuri evakuasi atau kedatangan hari normal melalui ruang, pintu, dan tangga Anda. Anda melihat antrean di tempat bangunan menyempit, jalan terpanjang ke pintu keluar dari setiap ruang, dan berapa lama orang terakhir sampai. Centang {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan centang {{ui:Tampilkan orang di tampilan 3D}} untuk melihat para pejalan. Temuan masuk ke Masalah. Ini model kerumunan kasar untuk keputusan desain, bukan sertifikat keselamatan kebakaran. Lihat [Telusuri orang melalui bangunan](topic:people-in-the-building).
- **Akustik ruang, dan dengarkan.** Bagian {{ui:Akustik ruang}} memberi setiap ruang waktu dengung per pita oktaf (Sabine dan Eyring) dari ukurannya dan finishing yang Anda pilih, dan dengan target sendiri menyatakan berapa banyak penyerapan yang dibutuhkan untuk memenuhinya. {{ui:Putar di ruang ini}} memutar suara, tepukan, nada petik, atau file suara Anda sendiri melalui respons impuls yang dihitung untuk ruang itu. Angka penyerapan adalah nilai publikasi tipikal yang dapat Anda ganti. Lihat [Akustik ruang](topic:room-acoustics).
- **Pemutaran banjir, angin, dan gempa.** {{ui:Pemutaran bahaya}} memutar air yang naik melalui ruang, tekanan angin pada setiap lantai, dan gempa yang menggoyang lantai, pada denah atau elevasi dengan penggeser waktu. Model sederhana dengan asumsinya ditampilkan di panel; ini bukan pemeriksaan kode. Lihat [Putar banjir, angin, atau gempa](topic:hazard-playback).
- **Apa yang aus dalam lima puluh tahun.** {{ui:Tampilan siklus hidup}} mencantumkan jendela, pintu, finishing, dan atap, masing-masing dengan umur layanannya, tahun penggantiannya, dan, saat Anda mengetik biaya per satuan, biaya menurut tahun serta nilai sekarangnya. {{ui:Simpan jadwal (CSV)}} menuliskannya. Umur layanan adalah angka perencanaan. Lihat [Lihat apa yang aus dalam lima puluh tahun](topic:life-cycle-view).
- **Pemeriksaan beton dan seismik.** Blok {{ui:Elemen beton}} dan {{ui:Beban seismik}} pada tab {{ui:Analisis}} memeriksa balok dan kolom beton menurut ACI 318-19, serta membuat gaya lateral ekuivalen menurut ASCE 7-22 pada lantai kaku, dengan simpangan lantai. Untuk diperiksa oleh insinyur. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic).

**Periksa dan laporkan**

- **Periksa terhadap IDS.** Muat file `.ids` yang diberikan klien kepada Anda dan lihat setiap elemen yang tidak memenuhinya di Masalah, sebelum Anda menyerahkan IFC. Buka {{ui:Periksa terhadap IDS}} di bawah {{ui:Pemeriksaan model}}. Lihat [Periksa model terhadap IDS klien](topic:check-against-ids).
- **Tag dan jadwal.** Tentukan tag sendiri, atur pada banyak elemen sekaligus, dan buat jadwal yang kolom, filter, serta grupnya membacanya; tag disimpan di IFC. Lihat [Tag dan jadwal](topic:tags-and-schedules).
- **Dokumen dari model.** {{ui:Dokumen dari model}} mengisi templat spesifikasi dari IFC yang terbuka dan menyimpannya sebagai PDF, dokumen Word, atau Markdown. Lihat [Dokumen dari model](topic:documents-from-the-model).
- **Bandingkan pemindaian dengan model.** Dengan awan titik terbuka, {{ui:Bandingkan}} menilai setiap elemen sebagai telah dibangun, sebagian dibangun, hilang, atau tidak tercapai, dan menampilkan persen yang telah dibangun. Lihat [Bandingkan pemindaian dengan model](topic:compare-scan-with-model).
- **Karbon dan biaya.** Panel Karbon menjumlahkan karbon terkandung dari tabel faktor yang dapat Anda sunting, dan panel Biaya menyebarkan harga pada jadwal 4D. Faktor yang disertakan BimCraft bersifat generik dan ditandai belum diperiksa. Lihat [Karbon terkandung dan biaya](topic:embodied-carbon-and-5d-cost).
- **Proyeksi peta apa pun.** {{ui:Ukur}} › {{ui:Sistem koordinat…}} menerima nomor EPSG, zona UTM, nama, atau definisi proyeksi Anda sendiri. Lihat [Georeferensi dengan proyeksi apa pun](topic:georeference-any-projection).

**Gambar dan sunting**

- **Pindahkan, Sejajarkan, dan Distribusikan.** Di bawah {{ui:Build}}; {{key:Shift+M}} memulai Pindahkan (tombol {{key:M}} biasa tetap Ukur). Pindahkan menyalin saat Anda bergerak dengan {{key:C}}, setiap langkah adalah satu urungkan, dan ia ikut dalam sesi Live TeamWork. Lihat [Pindahkan, salin, sejajarkan, dan distribusikan](topic:move-align-distribute).
- **Gambar di bawah denah.** {{ui:Build}} › {{ui:Gambar}} menempatkan PNG, JPEG, atau WebP di bawah denah level atau pada bidang vertikal. Atur skala dengan dua titik, lalu pindahkan, putar, pudarkan, dan kunci. Area yang disalin di MarkupCraft ditempel pada skala lembarnya. Lihat [Letakkan gambar di bawah denah](topic:pictures-as-backgrounds).
- **Gambar dari pemindaian.** Dengan pemindaian terbuka, dinding, pintu, dan ruang datang sebagai usulan yang Anda pertahankan atau tolak satu per satu, dalam satu langkah urungkan. Hanya dinding pada dua arah yang tegak lurus satu sama lain yang ditemukan. Lihat [Ubah pemindaian menjadi dinding](topic:scan-to-walls).
- **Jiplak, pena, dan tangga dari sketsa.** {{ui:Jiplak}} menampilkan level lain dengan garis putus-putus di bawah denah, {{ui:Pena}} memberi dinding, pintu, dan jendela ketebalan garis sendiri dalam satu tampilan, dan {{ui:Sketsa tangga}} mengubah garis berjalan menjadi tangga. Mesh Wavefront OBJ dapat dibuka. Lihat [Jiplak level, pena, dan tangga dari sketsa](topic:trace-pens-stairs-obj).
- **Bangunan di sekitar alamat.** Bangunan dan persil yang ditemukan Alamat ke tapak CivilCraft datang sebagai saran; Anda mencentang yang ingin ditambahkan. Lihat [Mulai dari tapak CivilCraft](topic:site-from-civilcraft).
- **Gambar panel.** {{ui:Build}} › {{ui:Gambar panel}} membingkai dinding, lantai, dan atap dalam kayu atau baja ringan, dan menyimpan daftar potong sebagai CSV serta gambar kerja sebagai PDF. Ini nilai awal, bukan desain struktural. Lihat [Gambar panel](topic:panel-drawings).
- **Palet simbol dan tanaman.** {{ui:Build}} › {{ui:Palet simbol}} menemukan simbol listrik dan perpipaan menurut nama; sumber {{ui:Tanaman}} di {{ui:Pustaka}} mencantumkan sekitar 400 tanaman dengan simbol denah. Lihat [Palet simbol](topic:symbol-palette) dan [Tempatkan tanaman](topic:plant-list).

**Pipa, saluran, dan energi**

- **Split, VRF, dan fan coil.** Unit indoor dan outdoor dengan sambungannya, serta set saluran refrigeran berukuran dari tabel nilai contoh tipikal yang dapat Anda ubah. Lihat [Split, VRF, dan fan coil](topic:split-vrf-fan-coils).
- **Perhitungan.** Panel Perhitungan memeriksa ukuran pipa pasokan dan saluran dengan penurunan tekanan, merutekan kabel melalui cable tray dan conduit serta menampilkan isinya, dan menghitung iluminansi dari file IES atau EULUMDAT. Nilai default diberi label; ketik nilai dari kode Anda. Lihat [Perhitungan pipa, saluran, kabel, dan cahaya](topic:mep-calculations).
- **File PCF.** {{ui:Ekspor PCF}} pada alat Pipa menulis jalur untuk program tegangan pipa dan isometrik, dan file PCF yang dibaca kembali menggambar pipanya. Lihat [File komponen perpipaan](topic:piping-pcf).
- **Surya PV.** Pasang susunan pada atap atau tanah, naungi dari model, perkirakan energi tahunan, periksa string, dan buat data diagram satu garis. Modul awal dan kehilangan bersifat generik. Lihat [Surya PV](topic:solar-pv).
- **File EnergyPlus.** Panel Periksa dengan EnergyPlus menulis model sebagai IDF untuk dijalankan di EnergyPlus Anda sendiri. Menjalankannya di peramban memerlukan build yang Anda host sendiri dan ketik alamatnya; BimCraft tidak menyertakannya. Lihat [Periksa pemanasan dan pendinginan dengan EnergyPlus](topic:check-with-energyplus).

**Gambar dan file**

- **Pilih mesin render.** {{ui:Render}} memiliki pilihan {{ui:Mesin}}. Dua mesin bawaan kami (Fast dan Path tracer) tetap menjadi default. **Buka di** menyimpan adegan sebagai file USD atau glTF, dan folder proyek Unreal sebagai .zip; di CadCraft Studio, sebuah add-on dapat menambahkan mesin. Plug-in Unreal yang membuka proyek belum dirilis. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Urungkan Studio.** Di dalam CadCraft Studio, BimCraft memberi tahu Studio setiap langkah yang selesai, sehingga Studio dapat mengurungkan langkah terakhir Anda di jendela mana pun yang terakhir Anda pakai. Lihat [Urungkan lintas aplikasi](topic:undo-across-apps).
- **Add-on dalam file Anda.** IFC mencatat add-on mana yang menulis ke dalamnya, dan menawarkan yang tidak Anda miliki saat Anda membukanya. Lihat [Add-on dalam file Anda](topic:add-ons-in-your-file).

**Di setiap aplikasi**

- **Hubungkan AI Anda.** Asisten Anda sendiri dapat mengendalikan BimCraft melalui koneksi Studio dan menjawab pertanyaan tentang model, seperti ruang mana yang berada di bawah luas tertentu. Studio tidak memiliki AI sendiri. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Wrap, 2 baris, atau 1 baris; Wrap tetap menjadi default.
- **Perangkat input.** Pengaturan trackpad, pena, mouse 3D, pengontrol, dan MIDI dibagikan oleh semua aplikasi.
- **Masalah dan Live.** Panel peringatan dan sesi Live bekerja seperti sebelumnya, dengan pemeriksaan baru di atas yang masuk ke Masalah.
- **Bahasa.** 54 bahasa, sepuluh di antaranya baru. Bahasa selain Inggris adalah draf mesin yang belum dibaca penutur asli; topik bantuan sebagian besar masih dalam bahasa Inggris.

### Diperbaiki di 0.8.1

- **Tata letak pita dan Penjelajah proyek.** Sisipkan › Impor CAD, Sisipkan › Gambar, dan Kelola › Satuan Proyek sebelumnya menyatakan "Belum dibuat di BimCraft". Gambar kini membuka alat Gambar, Impor CAD membuka {{ui:Build}} › {{ui:Dari gambar…}} (DWG, DXF, PDF, atau pemindaian), dan Satuan Proyek membuka {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Satuan}}. Pindahkan dan Sejajarkan menjalankan alat Pindahkan dan Sejajarkan, Level membuka {{ui:Tambah level…}}, Fase membuka bagian fase renovasi, dan Material membuka pustaka material.
- **Bagian kelas DWG.** Bagian ini dibaca sebagai tipe yang salah; sudah diperbaiki di BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa saat berjalan.** Studio dan edisi paket kini dapat berganti bahasa tanpa memulai ulang. Ini belum diuji di setiap platform; beri tahu kami jika bahasanya tidak berubah.
- **Skrip bundel Archicad.** `archicad_bundle.py`, unduhan terpisah, kini menemukan path Archicad, memantau folder hingga 20 detik, dan mencoba lagi di sebelah bundel.

### Belum ada di versi ini

- **Alat keselamatan dan desain.** Orang di dalam bangunan tidak memiliki batas jarak tempuh dari kode bangunan (Anda mengetik batasnya) dan belum diperiksa secara manual pada denah sungguhan. Angka akustik, siklus hidup, dan bahaya adalah nilai perencanaan, bukan pemeriksaan kode.
- **Iklim masa depan dan EnergyPlus.** Tidak ada skenario iklim masa depan bawaan: Anda dapat memuat file skenario untuk jalankan banjir. Jalankan EnergyPlus di peramban tidak termasuk dalam rilis ini.
- **Tata letak pita.** Takeoff material tetap "Belum dibuat" karena BimCraft tidak memiliki daftar kuantitas material, dan 54 alat pita yang abu-abu lainnya belum memiliki alat BimCraft di baliknya.
- **Penandatanganan dan platform.** Installer Windows dan .dmg macOS tidak ditandatangani, sehingga SmartScreen menampilkan {{ui:More info}}, lalu {{ui:Run anyway}}, dan macOS memerlukan klik kanan lalu {{ui:Terbuka}}. Build iPad dan iPhone tidak dibangun ulang untuk 0.8.1.
- **Tes halaman nyata.** Beberapa tes peramban BimCraft yang lebih lama masih gagal di halaman tes kami, seperti sebelum 0.8.1.

Semua yang lain ada di [Yang belum dibuat](topic:not-built-yet). Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
