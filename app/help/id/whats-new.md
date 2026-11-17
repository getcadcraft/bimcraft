---
title: Yang baru di 0.9
summary: Bentuk dinding, pemisahan, offset, regangan, dan kunci ke grid, level di bawah tanah, dimensi grid dan Ukur pada denah, tampilan duplikat dengan gaya kerja dan tabel pena, Laporkan sebagai, ekspor Collada dan Google Earth, Scan ke BIM, analisis angin dan seismik, add-on cetak resin.
keywords: yang baru, 0.9, catatan rilis, bentuk dinding, persegi panjang, poligon, busur, pilih garis, telusur garis luar, offset, sambung, regangan kotak, pisahkan dinding, celah, sambung kembali, kunci ke grid, tumbuh dari, ukur dari, tambah level di bawah, basemen, perintah level, dimensi grid, ukur pada denah, gaya kerja, duplikat tampilan, salinan sendiri, tampilan tertaut, tabel pena, cetak seperti tampilan, laporkan sebagai, ketik skala, impor svg, tempatkan di denah, tempatkan di model, collada, dae, kmz, google earth, scan ke bim, beban angin, seismik, elemen hingga, panel dokumen, cetak resin, yang baru, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, evakuasi, orang, antrean, akustik, reverberasi, respons impuls, banjir, angin, gempa, bahaya, siklus hidup, umur layanan, ids, tag, jadwal, pindahkan, sejajarkan, distribusi, gambar, latar belakang, scan ke dinding, tapak dari civilcraft, gambar panel, framing, surya, pv, pisah, vrf, fan coil, ukuran pipa, rak kabel, iluminasi, beton, seismik, bandingkan scan, epsg, proyeksi, dokumen, template, karbon, biaya, energyplus, mesin render, buka di, usd, glb, unreal, urungkan, add-on, pcf, simbol, tanaman, telusur, pena, pita, penjelajah proyek, layout
from: 5624fe88
---

Ini adalah perubahan di BimCraft 0.9, dibandingkan dengan 0.8.1. Dua tema besarnya adalah alat dinding yang sungguhan dan tampilan yang berperilaku seperti yang diharapkan orang yang datang dari program BIM besar. Di sekelilingnya ada ekspor Collada, asisten yang dapat menempatkan perangkat listrik, Scan ke BIM, serta pekerjaan angin, seismik, dan elemen hingga di tab {{ui:Analisis}}.

## Baru

### Dinding

- **Gambar bentuk utuh.** Di {{ui:Gambar}}, buka {{ui:Bentuk}} (atau pilih bentuk di daftar Bentuk pada baris Dinding) untuk persegi panjang, persegi panjang terputar, poligon 3 sampai 64 sisi, busur berdasarkan pusat, busur singgung, dinding pada garis yang dipilih, atau dinding mengelilingi area tertutup yang Anda klik di dalamnya. Persegi panjang adalah empat dinding dengan empat sudut tersambung dan satu langkah urungkan. Lihat [Bentuk dinding, pemisahan, offset, regangan, dan kunci](topic:wall-tools).
- **Atur sebelum menggambar, ubah sesudahnya.** Baris Dinding memiliki {{ui:Offset}} dan {{ui:Sambung}} (hapus centang untuk menggambar dinding berdiri bebas). Setelahnya gunakan {{ui:Offset}}, {{ui:Regangan kotak}}, dan {{ui:Sejajarkan dan kunci}} pada dinding yang sudah digambar. Dinding yang dipindah atau diregangkan mempertahankan pintu, jendela, dan dimensinya. Setiap resep adalah satu langkah urungkan.
- **Potong dinding.** {{ui:Pisahkan}}, {{ui:Celah}}, {{ui:Ujung bebas}}, {{ui:Hapus segmen}}, dan {{ui:Sambung kembali}} memotong dinding dengan satu klik atau di tempat dinding lain berpotongan. Potongan melalui pintu ditolak. Lihat [Bentuk dinding, pemisahan, offset, regangan, dan kunci](topic:wall-tools).
- **Kunci dinding ke garis grid.** Pilih dinding sepanjang garis grid dan centang {{ui:Kunci ke grid}} di {{ui:Properti}}. Dengan alat Grid aktif, ketik jarak di {{ui:Pindahkan sejauh}} untuk garis yang dipilih, dan dinding terkunci mengikuti dalam satu langkah urungkan.
- **Bentuk satu dinding.** Di {{ui:Properti}} satu dinding, Anda dapat melekatkan puncak atau dasarnya ke atap, lantai, atau langit-langit, menyunting garis tepi dari sisinya, memiringkannya, atau membuat bukaan dinding tanpa pintu atau jendela. Lihat [Bentuk dinding](topic:wall-shape).
- **Panjang menentukan ujung mana yang bertahan.** {{ui:Tumbuh dari}} mengatur apakah awal, akhir, atau tengah tetap di tempatnya saat Anda mengubah panjang.
- **Panjang dan dimensi denah sepakat.** {{ui:Ukur dari}} (garis tengah, muka dalam, atau muka luar) mengatur kolom Panjang dan dimensi dinding pada denah. Ia dimulai dari garis tengah, sehingga dimensi dinding pada denah kini membaca garis tengah, tempat sebelumnya membaca muka luar. Ubah di baris Dinding, di {{ui:Properti}}, atau di {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Dinding}}.

### Level, grid, dan pengukuran

- **Tambah level di bawah.** {{ui:Tambah level di bawah}} di panel {{ui:Level}} menambahkan level di bawah yang terendah, setinggi level itu, pada elevasi negatif (Level -1, Level -2). Tidak ada yang lain yang berpindah. {{ui:Tambah level…}} kini menerima tinggi negatif. Mengetik LEVEL, LEVELS, STOREY, atau STOREYS di baris perintah membuka {{ui:Tambah level…}}, dan ada tombol {{ui:Level}} di menu dan tab pita. Lihat [Situs, bangunan, dan level](topic:site-building-and-levels).
- **Dimensi grid pada denah.** Dengan alat {{ui:Grid}} aktif, centang {{ui:Dimensi}} untuk menggambar jarak antara garis yang berdekatan dan ukuran keseluruhan melewati gelembung pada denah setiap level. Lihat [Beri dimensi pada grid](topic:grid-dimensions).
- **Ukur pada denah.** {{ui:Ukur}} di grup {{ui:Gambar}} memberi jarak dengan selisih X dan Y di antara dua klik. Tidak ada yang disimpan dalam model. Lihat [Ukur pada denah](topic:measure-on-the-plan).
- **Ubah beberapa kolom sekaligus.** Pilih kolom bersama dinding, dan daftar pilihan mencantumkan setiap jenis dengan {{ui:Pertahankan hanya ini}}. Satu klik mempertahankan kolom dan menampilkan bidang bersamanya.
- **Satu satuan tampilan di mana-mana.** Koordinat, pengukuran, potongan, skala lembar, beban dan hasil pada tab frame, serta teks Masalah mengikuti satuan yang Anda pilih. Ekspor tetap dalam SI.

### Tampilan, lembar, dan cetak

- **Gaya kerja.** {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Gaya kerja}} memilih apakah setiap tampilan memiliki anotasi dan tabel pena sendiri, atau berbagi. Lihat [Gaya kerja, tampilan duplikat, pena di kertas, Laporkan sebagai, dan templat](topic:working-style).
- **Duplikat tampilan.** Denah, denah langit-langit, callout, tampak, dan potongan dapat diduplikasi sebagai {{ui:Salinan sendiri}} atau {{ui:Tertaut}}; {{ui:Jadikan salinan sendiri}} menjadikan yang tertaut berdiri sendiri. Lihat [Gaya kerja, tampilan duplikat, pena di kertas, Laporkan sebagai, dan templat](topic:working-style).
- **Cetak seperti tampilan, atau melalui tabel pena.** Penggantian pena disimpan dalam IFC bersama tampilan, dan lembar serta PDF menggambarnya seperti layar. Topik yang sama juga mencakup tabel pena.
- **Laporkan sebagai.** {{ui:Laporkan sebagai}} di {{ui:Properti}} menulis pelat yang digambar sebagai jalan, dinding sebagai panel, atau atap sebagai rampa ke IFC sebagai kelas yang Anda pilih, dan menghitungnya demikian pada jadwal, Kuantitas, Temukan, Warnai menurut, dan Masalah.
- **Sunting di tampak dan potongan.** Gambar dan pindahkan dinding, bukaan, level, dimensi, dan catatan langsung di tampak atau potongan, dengan ukuran lembar dan kop gambar Anda sendiri. Lihat [Sunting di tampak dan potongan](topic:edit-in-elevations).
- **Lembar.** Setiap lembar dapat berorientasi lanskap atau potret. Kotak {{ui:Ketik skala}} berada di samping daftar skala pada setiap tampilan yang ditempatkan (1:64, 2:1, 1/4" = 1'). Anda dapat menyeret gambar yang ditempatkan atau menggesernya dengan tombol panah, dan {{ui:Format…}} › {{ui:Impor SVG…}} mengubah desain lembar Anda sendiri menjadi kop gambar dengan bidang yang diketik per lembar.
- **Kredit pustaka pada lembar.** Set gambar dengan item Pustaka mendapat jadwal Kredit pustaka yang dapat Anda tempatkan pada lembar mana pun. Lihat [Kredit pustaka](topic:library-credits).

### Pustaka: menempatkan

- **Penempatan mengikuti tampilan.** Di tampilan Denah, Pustaka menampilkan {{ui:Tempatkan di denah}}; di 3D menampilkan {{ui:Tempatkan di model}}; di Belah menampilkan tombol belah dengan {{ui:Tempatkan di denah}} sebagai aksi utama. Keduanya menulis elemen IFC yang sama. Anda juga dapat menyeret kartu Pustaka ke denah atau tampilan 3D; dengan pena atau jari, tekan dan tahan, lalu seret. Lihat [Tempatkan dari Pustaka](topic:place-from-library).

### Berkas dan asisten

- **Collada dan Google Earth.** {{ui:Collada}} pada bilah alat (menu Berkas pada gaya menu) menulis .dae, atau .kmz yang ditempatkan di tempat model berada di peta. Lihat [Ekspor model sebagai Collada atau untuk Google Earth](topic:collada).
- **Asisten dapat menempatkan perangkat listrik.** Asisten Anda yang terhubung memiliki alat baru untuk menambah, mencantumkan, mengubah, dan menghapus perangkat serta mengatur lampu. Asisten tetap mati sampai Anda menyalakannya di {{ui:Pengaturan}}. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Scan ke BIM (add-on).** Mati secara default dan membutuhkan add-on Point clouds. Ia mengusulkan lantai, dinding, pintu, dan jendela dari scan dengan deviasi terukur untuk masing-masing; menerimanya adalah satu langkah urungkan.

### Analisis

- **Data situs angin dan seismik.** Di tab {{ui:Analisis}}: beban angin menurut ASCE 7-10 atau 7-16 untuk bangunan tertutup yang kaku, dengan gaya pada setiap lantai sebagai kasus beban, serta data situs seismik dengan pencarian USGS dan spektrum desain.
- **Tindak lanjut struktural dan elemen hingga.** Pemeriksaan beton menurut ACI 318-19, gaya lateral ekuivalen menurut ASCE 7-22, simpangan lantai, pelat dan dinding sebagai pelat, serta kombinasi beban dari ASCE 7 dan EN 1990. Mesin elemen hingga kami sendiri menangani cangkang, tetrahedra, dan analisis modal. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic) dan [Analisis rangka](topic:frame-analysis).

### Add-on lain dan dokumen

- **Pencahayaan interior (add-on).** Menempatkan armatur lampu dan menulis lux sebagai angka ke denah setiap level, dengan perkiraan silau dan laporan yang dapat dicetak.
- **Panel dokumen.** {{ui:Berkas}} › {{ui:Dokumen…}} memiliki check out dan check in dengan berkas kunci, huruf revisi, status rilis, dan riwayat.
- **Wilayah dan baja.** Paket gambar dan peraturan bangunan Afrika Selatan di add-on Regulasi, serta 976 ukuran baja Inggris di tabel penampang bersama.
- **Add-on cetak resin gratis.** Slicer, penyangga dan rakit, uji paparan, serta format berkas GOO, SL1, Chitubox, dan Anycubic, semuanya mati secara default.

## Di setiap aplikasi

- Mengarahkan kursor ke tombol atau kontrol menampilkan tooltip Bootstrap.
- Petunjuk awal pada area gambar kosong memiliki tombol tutup; BimCraft mengingat bahwa ia sudah ditutup.
- Deretan tab panel yang tidak muat kini digulir alih-alih terpotong.
- Dengan dokumen terbuka, tab peramban berbunyi "<dokumen> - BimCraft | CadCraft".
- Di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Tata letak}}, tata letak berupa daftar tarik-turun dengan pilihan dua baris.
- Daftar bahasa di {{ui:Pengaturan}} menawarkan lebih banyak bahasa daripada 0.8; bahasa selain Inggris adalah draf mesin.

## Diperbaiki

- **Gerakan bekerja pada tangga,** dan pada ramp, pagar, bidang atap, perangkat berdiri bebas, gambar, dan jalur.
- **Menyeret dinding tidak lagi memiringkan ruangan.** Grip tengah memindahkan dinding tegak lurus terhadap dirinya sendiri, dan sudutnya meluncur di sepanjang dinding yang tersambung. Tahan {{key:Mod}} untuk gerakan bebas lama; {{ui:Jadikan siku}} mengembalikan 90 derajat.
- **Perubahan ketebalan atau tipe pada simpul yang tersambung** kini menjaga sudut tetap tertutup pada L, T, simpul tiga dinding, dan di dekat dinding melengkung.
- **Memindah atau menyalin sekelompok ruangan** menjaga dinding yang tersambung di luar kelompok tetap tersambung.
- **Redo menjaga identitas dimensi dinding.**
- **Memilih dinding dengan Gambar mati** tidak lagi menimbulkan galat di Properti.
- **Render kembali ke WebGL** saat GPU tidak dapat dimulai, alih-alih berhenti.
- **Pemeriksaan EnergyPlus dapat dinyalakan** kembali.
- **Dokumen dibuka sebagai dialog di tengah.** {{key:Esc}}, tombol X, atau klik pada halaman yang meredup menutupnya.
- **Tombol {{ui:Denah}}, {{ui:Pisahkan}}, dan {{ui:3D}} muncul** begitu model dibuka, tidak hanya setelah Gambar pernah dinyalakan sekali.

## Batasan jujur

- Tidak ada yang dicetak pada perangkat keras sungguhan. Penyangga resin baru dan belum terbukti.
- Hasil angin, seismik, beton, dan elemen hingga adalah alat bantu pemeriksaan bagi insinyur, diperiksa terhadap solusi bentuk tertutup, bukan terhadap bangunan sungguhan.
- Scan ke BIM diuji pada bangunan sintetis, bukan scan sungguhan, dan hanya menemukan ruangan persegi.
- Collada belum dibuka di Blender atau Google Earth di sini.
- Perkiraan pencahayaan diperiksa terhadap penelusuran kami sendiri, bukan terhadap program pencahayaan lain.
- Angka Afrika Selatan belum diverifikasi.
- Gaya sambungan dinding (butt, miter, potong siku) dan prioritas lapisan belum dibuat; sudut dibuat dengan miter.
- Bahasa selain Inggris adalah draf mesin.

Semua yang lain ada di [Belum dibuat](topic:not-built-yet). Perubahan sebelumnya ada di catatan 0.8 dan 0.8.1 yang lebih jauh di halaman ini.

## Sebelumnya: 0.8 dan 0.8.1

Ini adalah perubahan di BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. BimCraft kini dapat menjawab pertanyaan tentang bangunan dan mengujinya, dengan orang, suara, air, angin, dan gempa, serta menggambarnya dengan lebih banyak alat; 0.8.1 adalah rilis perbaikan.

### Baru

**Uji bangunan**

- **Orang dalam bangunan.** Bagian {{ui:Orang di dalam bangunan}} pada panel kiri menjalankan evakuasi atau kedatangan hari biasa melalui ruangan, pintu, dan tangga Anda. Anda melihat antrean tempat bangunan menyempit, jalan terjauh ke pintu keluar dari setiap ruangan, dan berapa lama orang terakhir. Centang {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan centang {{ui:Tampilkan orang di tampilan 3D}} untuk melihat para pejalan. Temuannya masuk ke Masalah. Ini adalah model kerumunan kasar untuk keputusan desain, bukan sertifikat keselamatan kebakaran. Lihat [Jalankan orang melalui bangunan](topic:people-in-the-building).
- **Akustik ruang, dan dengarkan.** Bagian {{ui:Akustik ruang}} memberi setiap ruangan waktu reverberasi per pita oktaf (Sabine dan Eyring) dari ukurannya dan finishing yang Anda pilih, dan dengan target milik Anda sendiri ia menyatakan berapa banyak penyerapan yang akan memenuhinya. {{ui:Putar di ruang ini}} memutar suara, tepukan, nada petik, atau berkas suara Anda sendiri melalui respons impuls yang dihitung untuk ruangan itu. Angka penyerapan adalah nilai terbitan yang khas untuk Anda ganti. Lihat [Akustik ruang](topic:room-acoustics).
- **Pemutaran banjir, angin, dan gempa.** {{ui:Pemutaran bahaya}} memutar air yang naik melalui ruangan, tekanan angin pada setiap lantai, dan gempa yang mengguncang lantai, pada denah atau tampak dengan penggeser waktu. Model sederhana dengan asumsinya ditampilkan di panel; bukan pemeriksaan kode. Lihat [Putar banjir, angin, atau gempa](topic:hazard-playback).
- **Apa yang aus dalam lima puluh tahun.** {{ui:Tampilan siklus hidup}} mencantumkan jendela, pintu, finishing, dan atap dengan umur layanan masing-masing, tahun penggantiannya, dan, bila Anda mengetik biaya per satuan, biaya per tahun serta nilai sekarangnya. {{ui:Simpan jadwal (CSV)}} menuliskannya. Umur layanan adalah angka perencanaan. Lihat [Lihat apa yang aus dalam lima puluh tahun](topic:life-cycle-view).
- **Pemeriksaan beton dan seismik.** Blok {{ui:Elemen beton}} dan {{ui:Beban seismik}} pada tab {{ui:Analisis}} memeriksa balok dan kolom beton menurut ACI 318-19 dan membuat gaya lateral ekuivalen menurut ASCE 7-22 pada lantai kaku, dengan simpangan lantai. Untuk diperiksa insinyur. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic).

**Periksa dan laporkan**

- **Periksa terhadap IDS.** Muat berkas `.ids` yang diberikan klien kepada Anda dan lihat setiap elemen yang tidak memenuhinya di Masalah, sebelum Anda menyerahkan IFC. Buka {{ui:Periksa terhadap IDS}} di bawah {{ui:Pemeriksaan model}}. Lihat [Periksa model terhadap IDS klien](topic:check-against-ids).
- **Tag dan jadwal.** Tentukan tag Anda sendiri, atur pada banyak elemen sekaligus, dan buat jadwal yang kolom, filter, dan grupnya membacanya; tag disimpan dalam IFC. Lihat [Tag dan jadwal](topic:tags-and-schedules).
- **Dokumen dari model.** {{ui:Dokumen dari model}} mengisi templat spesifikasi dari IFC yang terbuka dan menyimpannya sebagai PDF, dokumen Word, atau Markdown. Lihat [Dokumen dari model](topic:documents-from-the-model).
- **Bandingkan scan dengan model.** Dengan awan titik terbuka, {{ui:Bandingkan}} menilai setiap elemen sebagai terbangun, sebagian terbangun, hilang, atau belum tercapai, dan menampilkan persen terbangun. Lihat [Bandingkan scan dengan model](topic:compare-scan-with-model).
- **Karbon dan biaya.** Panel Karbon menjumlahkan karbon terkandung dari tabel faktor yang dapat Anda sunting, dan panel Biaya membagi harga di atas jadwal 4D. Faktor yang disertakan BimCraft bersifat generik dan ditandai belum diperiksa. Lihat [Karbon terkandung dan biaya](topic:embodied-carbon-and-5d-cost).
- **Proyeksi peta apa pun.** {{ui:Ukur}} › {{ui:Sistem koordinat…}} menerima nomor EPSG, zona UTM, nama, atau definisi proyeksi Anda sendiri. Lihat [Georeferensi dengan proyeksi apa pun](topic:georeference-any-projection).

**Gambar dan sunting**

- **Pindahkan, Sejajarkan, dan Distribusikan.** Di bawah {{ui:Build}}; {{key:Shift+M}} memulai Pindahkan (M biasa tetap Ukur). Pindahkan menyalin saat Anda bergerak dengan {{key:C}}, setiap langkah adalah satu urungkan, dan ikut dalam sesi Live TeamWork. Lihat [Pindahkan, salin, sejajarkan, dan distribusikan](topic:move-align-distribute).
- **Gambar di bawah denah.** {{ui:Build}} › {{ui:Gambar}} menempatkan PNG, JPEG, atau WebP di bawah denah level atau pada bidang vertikal. Atur skala dengan dua titik, dan pindahkan, putar, pudarkan, serta kunci. Area yang disalin di MarkupCraft ditempelkan pada skala lembarnya. Lihat [Letakkan gambar di bawah denah](topic:pictures-as-backgrounds).
- **Dinding dari scan.** Dengan scan terbuka, dinding, pintu, dan ruangan datang sebagai usulan yang Anda terima atau tolak satu per satu, dalam satu langkah urungkan. Hanya dinding pada dua arah yang saling tegak lurus yang ditemukan. Lihat [Ubah scan menjadi dinding](topic:scan-to-walls).
- **Jiplak, pena, dan tangga sketsa.** {{ui:Jiplak}} menampilkan level lain putus-putus di bawah denah, {{ui:Pena}} memberi dinding, pintu, dan jendela ketebalan garisnya sendiri dalam satu tampilan, dan {{ui:Sketsa tangga}} mengubah garis berjalan menjadi tangga. Mesh Wavefront OBJ dapat dibuka. Lihat [Jiplak level, pena, dan tangga dari sketsa](topic:trace-pens-stairs-obj).
- **Bangunan di sekitar alamat.** Bangunan dan persil yang ditemukan Alamat ke tapak CivilCraft tiba sebagai usulan; Anda mencentang yang ingin ditambahkan. Lihat [Mulai dari tapak CivilCraft](topic:site-from-civilcraft).
- **Gambar panel.** {{ui:Build}} › {{ui:Gambar panel}} membingkai dinding, lantai, dan atap dari kayu atau baja ringan dan menyimpan daftar potong sebagai CSV serta gambar kerja sebagai PDF. Nilai awal, bukan desain struktural. Lihat [Gambar panel](topic:panel-drawings).
- **Palet simbol dan tanaman.** {{ui:Build}} › {{ui:Palet simbol}} mencari simbol listrik dan perpipaan menurut nama; sumber {{ui:Tanaman}} pada {{ui:Pustaka}} mencantumkan sekitar 400 tanaman dengan simbol denah. Lihat [Palet simbol](topic:symbol-palette) dan [Tempatkan tanaman](topic:plant-list).

**Pipa, duct, dan energi**

- **Split, VRF, dan fan coil.** Unit dalam dan luar dengan sambungannya, serta set saluran refrigeran yang diukur dari tabel nilai contoh yang khas dan dapat Anda ubah. Lihat [Split, VRF, dan fan coil](topic:split-vrf-fan-coils).
- **Perhitungan.** Panel Perhitungan memeriksa ukuran pipa pasokan dan duct dengan penurunan tekanan, merutekan kabel melalui rak dan konduit serta menampilkan isinya, dan menghitung iluminasi dari berkas IES atau EULUMDAT. Nilai bawaan diberi label; ketik nilai dari kode Anda. Lihat [Perhitungan pipa, duct, kabel, dan cahaya](topic:mep-calculations).
- **Berkas PCF.** {{ui:Ekspor PCF}} pada alat Pipa menulis jalur untuk program tegangan pipa dan isometrik, dan berkas PCF yang dibaca kembali menggambar pipanya. Lihat [Berkas komponen perpipaan](topic:piping-pcf).
- **Tenaga surya.** Pasang susunan pada atap atau tanah, naungi dari model, perkirakan energi tahunan, periksa string, dan buat data diagram satu garis. Modul awal dan kehilangan bersifat generik. Lihat [Tenaga surya](topic:solar-pv).
- **Berkas EnergyPlus.** Panel Periksa dengan EnergyPlus menulis model sebagai IDF untuk dijalankan di EnergyPlus Anda sendiri. Menjalankannya di peramban membutuhkan build yang Anda host sendiri dan alamatnya Anda ketik; BimCraft tidak membawanya. Lihat [Periksa pemanasan dan pendinginan dengan EnergyPlus](topic:check-with-energyplus).

**Gambar dan berkas**

- **Pilih mesin render.** {{ui:Render}} memiliki pilihan {{ui:Mesin}}. Dua mesin bawaan kami (Cepat dan Path tracer) tetap menjadi default. {{ui:Buka di}} menyimpan adegan sebagai berkas USD atau glTF, dan folder proyek Unreal sebagai .zip; di CadCraft Studio sebuah add-on dapat menambahkan mesin. Plug-in Unreal yang membuka proyek belum dirilis. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Urungkan Studio.** Di dalam CadCraft Studio, BimCraft memberi tahu Studio setiap langkah yang selesai sehingga Studio dapat mengurungkan langkah terakhir Anda di jendela mana pun yang terakhir Anda pakai. Lihat [Urungkan lintas aplikasi](topic:undo-across-apps).
- **Add-on dalam berkas Anda.** Sebuah IFC mencatat add-on mana yang menulis ke dalamnya, dan menawarkan yang tidak Anda miliki saat Anda membukanya. Lihat [Add-on dalam berkas Anda](topic:add-ons-in-your-file).

**Di setiap aplikasi**

- **Hubungkan AI Anda.** Asisten Anda sendiri dapat menggerakkan BimCraft melalui koneksi Studio dan menjawab pertanyaan tentang model, seperti ruangan mana yang berada di bawah luas tertentu. Studio tidak memiliki AI sendiri. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Bungkus, 2 baris, atau 1 baris; Bungkus tetap menjadi default.
- **Perangkat masukan.** Pengaturan trackpad, pena, mouse 3D, pengontrol, dan MIDI dibagi oleh semua aplikasi.
- **Masalah dan Live.** Panel peringatan dan sesi Live bekerja seperti sebelumnya, dengan pemeriksaan baru di atas yang masuk ke Masalah.
- **Bahasa.** 54 bahasa, sepuluh di antaranya baru. Bahasa selain Inggris adalah draf mesin yang belum dibaca penutur asli; topik bantuan sebagian besar berbahasa Inggris.

### Diperbaiki di 0.8.1

- **Tata letak Pita + Penjelajah proyek.** Insert › Import CAD, Insert › Image, dan Manage › Project Units menyatakan "Belum dibuat di BimCraft". Image kini membuka alat Gambar, Import CAD membuka {{ui:Build}} › {{ui:Dari gambar…}} (DWG, DXF, PDF, atau scan), dan Project Units membuka {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Satuan}}. Move dan Align menjalankan alat Pindahkan dan Sejajarkan, Level membuka {{ui:Tambah level…}}, Phases membuka bagian Fase renovasi, dan Materials membuka pustaka material.
- **Bagian kelas DWG.** Ia dibaca sebagai tipe yang salah; diperbaiki di BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa saat dijalankan.** Studio dan edisi kemasan kini dapat mengganti bahasa tanpa memulai ulang. Ini belum diuji di setiap platform; beri tahu kami jika bahasanya tidak berubah.
- **Skrip bundel Archicad.** `archicad_bundle.py`, unduhan terpisah, kini menemukan jalur Archicad, mengawasi folder hingga 20 detik, dan mencoba lagi di samping bundel.

### Belum ada di versi ini

- **Alat keselamatan dan desain.** Orang dalam bangunan tidak memiliki batas jarak tempuh dari kode bangunan (Anda mengetik batasnya), dan belum diperiksa dengan tangan pada denah sungguhan. Angka akustik, siklus hidup, dan bahaya adalah nilai perencanaan, bukan pemeriksaan kode.
- **Iklim masa depan dan EnergyPlus.** Tidak ada iklim masa depan bawaan: Anda dapat memuat berkas skenario untuk menjalankan banjir. Menjalankan EnergyPlus di peramban tidak termasuk dalam rilis ini.
- **Tata letak pita.** Material Takeoff tetap "Belum dibuat" karena BimCraft tidak memiliki daftar kuantitas material, dan 54 alat pita yang berwarna abu-abu lainnya belum memiliki alat BimCraft di baliknya.
- **Penandatanganan dan platform.** Installer Windows dan .dmg macOS belum ditandatangani, sehingga SmartScreen menampilkan {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}, dan macOS memerlukan klik kanan lalu {{ui:Buka}}. Build iPad dan iPhone belum dibangun ulang untuk 0.8.1.
- **Pengujian halaman nyata.** Beberapa pengujian peramban BimCraft yang lama masih gagal di halaman uji kami, seperti sebelum 0.8.1.

Semua yang lain ada di [Belum dibuat](topic:not-built-yet). Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
