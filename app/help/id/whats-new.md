---
title: Yang baru di 0.8 dan 0.8.1
summary: BimCraft menambahkan orang yang berjalan melewati bangunan, akustik ruang yang bisa didengar, pemutaran banjir, angin, dan gempa, tampilan siklus hidup lima puluh tahun, pemeriksaan terhadap IDS, tag dan jadwal, Move, Align, dan Distribute, gambar di bawah denah, dinding dari hasil scan, gambar panel, tenaga surya, sistem split dan VRF, ukuran pipa dan kabel, pemeriksaan beton dan seismik, proyeksi peta apa pun, pilihan mesin render, dan urungkan Studio; 0.8.1 memperbaiki alat abu-abu pada tata letak pita.
keywords: yang baru, apa yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, evakuasi, orang, antrean, akustik, reverberasi, impulse response, banjir, angin, gempa, bahaya, siklus hidup, masa pakai, ids, tag, jadwal, pindahkan, ratakan, distribusikan, gambar, scan ke dinding, situs dari civilcraft, gambar panel, framing, surya, pv, split, vrf, fan coil, ukuran pipa, rak kabel, iluminasi, beton, seismik, bandingkan scan, epsg, proyeksi, dokumen, templat, karbon, biaya, energyplus, mesin render, buka di, usd, glb, unreal, urungkan, add-on, pcf, simbol, tanaman, jiplak, pena, pita, penjelajah proyek, tata letak
from: 87b03056
---

Ini yang berubah di BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), dibandingkan dengan 0.7. BimCraft kini dapat menjawab pertanyaan tentang bangunan dan mengujinya, dengan orang, suara, air, angin, dan gempa, serta menggambarnya dengan lebih banyak alat; 0.8.1 adalah rilis perbaikan.

## Baru

### Uji bangunan

- **Orang di dalam bangunan.** Bagian {{ui:Orang di dalam bangunan}} pada panel kiri menelusuri evakuasi atau kedatangan hari biasa melalui ruang, pintu, dan tangga Anda. Anda melihat antrean di tempat bangunan menyempit, jalan terpanjang ke pintu keluar dari setiap ruang, dan berapa lama orang terakhir. Centang {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan centang {{ui:Tampilkan orang di tampilan 3D}} untuk melihat para pejalan. Temuan masuk ke Masalah. Ini model kerumunan kasar untuk keputusan desain, bukan sertifikat keselamatan kebakaran. Lihat [Telusuri bangunan bersama orang](topic:people-in-the-building).
- **Akustik ruang, dan dengarkan.** Bagian {{ui:Akustik ruang}} memberi setiap ruang waktu dengung per pita oktaf (Sabine dan Eyring) dari ukuran dan finishing yang Anda pilih, dan dengan target Anda sendiri menyatakan berapa banyak penyerapan yang dibutuhkan untuk memenuhinya. {{ui:Putar di ruang ini}} memutar suara, tepukan, nada petik, atau file suara Anda sendiri melalui respons impuls yang dihitung untuk ruang tersebut. Nilai penyerapan adalah nilai publikasi yang umum untuk Anda ganti. Lihat [Akustik ruang](topic:room-acoustics).
- **Pemutaran banjir, angin, dan gempa.** {{ui:Pemutaran bahaya}} memutar air yang naik melalui ruang, tekanan angin pada setiap lantai, dan gempa yang menggetarkan lantai, pada denah atau tampak dengan penggeser waktu. Model sederhana beserta asumsinya ditampilkan pada panel; ini bukan pemeriksaan kode. Lihat [Putar banjir, angin, atau gempa](topic:hazard-playback).
- **Apa yang aus dalam lima puluh tahun.** {{ui:Tampilan siklus hidup}} mendaftar jendela, pintu, finishing, dan atap beserta masa pakai masing-masing, tahun penggantiannya, dan, saat Anda mengetik biaya per satuan, biaya per tahun serta nilai sekarangnya. {{ui:Simpan jadwal (CSV)}} menuliskannya. Masa pakai adalah angka perencanaan. Lihat [Lihat apa yang aus dalam lima puluh tahun](topic:life-cycle-view).
- **Pemeriksaan beton dan seismik.** Blok {{ui:Elemen beton}} dan {{ui:Beban seismik}} pada tab {{ui:Analisis}} memeriksa balok dan kolom beton menurut ACI 318-19 serta membuat gaya lateral ekuivalen menurut ASCE 7-22 pada lantai kaku, dengan simpangan lantai. Untuk diperiksa oleh insinyur. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic).

### Periksa dan laporkan

- **Periksa terhadap IDS.** Muat file `.ids` yang diberikan klien kepada Anda dan lihat setiap elemen yang tidak memenuhinya di Masalah, sebelum Anda menyerahkan IFC. Buka {{ui:Periksa terhadap IDS}} di bawah {{ui:Pemeriksaan model}}. Lihat [Periksa model terhadap IDS klien](topic:check-against-ids).
- **Tag dan jadwal.** Tentukan tag sendiri, pasang pada banyak elemen sekaligus, dan buat jadwal yang kolom, filter, serta grupnya membacanya; tag disimpan dalam IFC. Lihat [Tag dan jadwal](topic:tags-and-schedules).
- **Dokumen dari model.** {{ui:Dokumen dari model}} mengisi templat spesifikasi dari IFC yang terbuka dan menyimpannya sebagai PDF, dokumen Word, atau Markdown. Lihat [Dokumen dari model](topic:documents-from-the-model).
- **Bandingkan hasil scan dengan model.** Dengan point cloud terbuka, {{ui:Bandingkan}} menilai setiap elemen sebagai sudah dibangun, sebagian dibangun, hilang, atau belum tercapai, dan menampilkan persen yang sudah dibangun. Lihat [Bandingkan hasil scan dengan model](topic:compare-scan-with-model).
- **Karbon dan biaya.** Panel Karbon menjumlahkan karbon terkandung dari tabel faktor yang dapat Anda sunting, dan panel Biaya menyebarkan harga pada jadwal 4D. Faktor yang disertakan BimCraft bersifat umum dan ditandai belum diperiksa. Lihat [Karbon terkandung dan biaya](topic:embodied-carbon-and-5d-cost).
- **Proyeksi peta apa pun.** {{ui:Ukur}} › {{ui:Sistem koordinat…}} menerima nomor EPSG, zona UTM, nama, atau definisi proyeksi Anda sendiri. Lihat [Georeferensi dengan proyeksi apa pun](topic:georeference-any-projection).

### Gambar dan sunting

- **Pindahkan, Ratakan, dan Distribusikan.** Ada di bawah {{ui:Build}}; {{key:Shift+M}} memulai Pindahkan (tekan {{key:M}} saja tetap Ukur). Pindahkan menyalin sambil berjalan dengan {{key:C}}, setiap langkah adalah satu urungkan, dan ikut dalam sesi Live TeamWork. Lihat [Pindahkan, salin, ratakan, dan distribusikan](topic:move-align-distribute).
- **Gambar di bawah denah.** {{ui:Build}} › {{ui:Gambar}} menempatkan PNG, JPEG, atau WebP di bawah denah lantai atau pada bidang vertikal. Atur skala dengan dua titik, lalu pindahkan, putar, pudarkan, dan kunci. Area yang disalin di MarkupCraft ditempel pada skala lembarnya. Lihat [Letakkan gambar di bawah denah](topic:pictures-as-backgrounds).
- **Dinding dari hasil scan.** Dengan hasil scan terbuka, dinding, pintu, dan ruang muncul sebagai usulan yang Anda pertahankan atau tolak satu per satu, dalam satu langkah urungkan. Hanya dinding pada dua arah tegak lurus yang ditemukan. Lihat [Ubah hasil scan menjadi dinding](topic:scan-to-walls).
- **Jiplak, pena, dan sketsa tangga.** {{ui:Jiplak}} menampilkan lantai lain putus-putus di bawah denah, {{ui:Pena}} memberi dinding, pintu, dan jendela ketebalan garisnya sendiri dalam satu tampilan, dan {{ui:Sketsa tangga}} mengubah garis jalan menjadi tangga. Mesh Wavefront OBJ dapat dibuka. Lihat [Jiplak lantai, pena, dan tangga dari sketsa](topic:trace-pens-stairs-obj).
- **Bangunan di sekitar alamat.** Bangunan dan persil yang ditemukan Address to site dari CivilCraft muncul sebagai saran; centang yang ingin Anda tambahkan. Lihat [Mulai dari situs CivilCraft](topic:site-from-civilcraft).
- **Gambar panel.** {{ui:Build}} › {{ui:Gambar panel}} membingkai dinding, lantai, dan atap dari kayu atau baja ringan, serta menyimpan daftar potong sebagai CSV dan gambar kerja sebagai PDF. Ini nilai awal, bukan desain struktural. Lihat [Gambar panel](topic:panel-drawings).
- **Palet simbol dan tanaman.** {{ui:Build}} › {{ui:Palet simbol}} mencari simbol listrik dan perpipaan berdasarkan nama; sumber {{ui:Tanaman}} dari {{ui:Pustaka}} mendaftar sekitar 400 tanaman dengan simbol denah. Lihat [Palet simbol](topic:symbol-palette) dan [Tempatkan tanaman](topic:plant-list).

### Pipa, saluran, dan energi

- **Split, VRF, dan fan coil.** Unit dalam dan luar beserta sambungannya, serta jalur refrigeran yang ukurannya diambil dari tabel nilai contoh tipikal yang dapat Anda ubah. Lihat [Split, VRF, dan fan coil](topic:split-vrf-fan-coils).
- **Perhitungan.** Panel Perhitungan memeriksa ukuran pipa pasokan dan saluran dengan penurunan tekanan, merutekan kabel melalui rak dan conduit serta menampilkan isinya, dan menghitung iluminasi dari file IES atau EULUMDAT. Nilai default diberi label; ketik nilai sesuai aturan Anda. Lihat [Perhitungan pipa, saluran, kabel, dan cahaya](topic:mep-calculations).
- **File PCF.** **Export PCF** pada alat Pipa menuliskan jalur untuk program tegangan pipa dan isometrik, dan file PCF yang dibaca kembali menggambar pipanya. Lihat [File komponen perpipaan](topic:piping-pcf).
- **Surya PV.** Pasang deretan di atap atau di tanah, beri bayangan dari model, perkirakan energi tahunan, periksa string, dan buat data diagram satu garis. Modul awal dan kehilangan daya bersifat umum. Lihat [Surya PV](topic:solar-pv).
- **File EnergyPlus.** Panel Periksa dengan EnergyPlus menuliskan model sebagai IDF untuk dijalankan di EnergyPlus Anda sendiri. Menjalankannya di peramban membutuhkan build yang Anda host sendiri dan alamatnya Anda ketik; BimCraft tidak menyertakannya. Lihat [Periksa pemanasan dan pendinginan dengan EnergyPlus](topic:check-with-energyplus).

### Gambar dan file

- **Pilih mesin render.** {{ui:Render}} memiliki pilihan {{ui:Mesin}}. Dua mesin bawaan kami (Fast dan Path tracer) tetap menjadi default. **Buka di** menyimpan adegan sebagai file USD atau glTF, dan folder proyek Unreal sebagai .zip; di CadCraft Studio, sebuah add-on dapat menambahkan mesin. Plug-in Unreal yang membuka proyek belum dirilis. Lihat [Pilih program yang menggambar gambar](topic:render-engines).
- **Urungkan Studio.** Di dalam CadCraft Studio, BimCraft memberi tahu Studio setiap langkah yang selesai, sehingga Studio dapat mengurungkan langkah terakhir Anda di jendela mana pun yang terakhir Anda pakai. Lihat [Urungkan lintas aplikasi](topic:undo-across-apps).
- **Add-on dalam file Anda.** IFC mencatat add-on mana yang menulis ke dalamnya, dan menawarkan yang tidak Anda miliki saat Anda membukanya. Lihat [Add-on dalam file Anda](topic:add-ons-in-your-file).

### Di setiap aplikasi

- **Hubungkan AI Anda.** Asisten Anda sendiri dapat mengoperasikan BimCraft melalui koneksi Studio dan menjawab pertanyaan tentang model, seperti ruang mana yang berada di bawah area tertentu. Studio tidak memiliki AI sendiri. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Wrap, 2 baris, atau 1 baris; Wrap tetap menjadi default.
- **Perangkat input.** Pengaturan trackpad, pena, mouse 3D, pengontrol, dan MIDI dibagikan oleh semua aplikasi.
- **Masalah dan Live.** Panel peringatan dan sesi Live bekerja seperti sebelumnya, dengan pemeriksaan baru di atas yang masuk ke Masalah.
- **Bahasa.** 54 bahasa, sepuluh di antaranya baru. Bahasa selain Inggris adalah draf mesin yang belum dibaca penutur asli; topik bantuan sebagian besar masih dalam bahasa Inggris.

## Diperbaiki di 0.8.1

- **Tata letak pita + penjelajah proyek.** Sisipkan › Impor CAD, Sisipkan › Citra, dan Kelola › Satuan Proyek menampilkan "Belum dibuat di BimCraft". Citra kini membuka alat Gambar, Impor CAD membuka {{ui:Build}} › {{ui:Dari gambar…}} (DWG, DXF, PDF, atau hasil pindai), dan Satuan Proyek membuka {{ui:Pengaturan}} › {{ui:Global}} › {{ui:Satuan}}. Pindahkan dan Ratakan menjalankan alat Pindahkan dan Ratakan, Level membuka {{ui:Tambah level…}}, Fase membuka bagian Fase renovasi, dan Material membuka pustaka material.
- **Bagian kelas DWG.** Bagian ini dibaca sebagai tipe yang salah; sudah diperbaiki di BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa saat dijalankan.** Studio dan edisi paket kini dapat berganti bahasa tanpa memulai ulang. Ini belum diuji di setiap platform; beri tahu kami jika bahasa tidak berubah.
- **Skrip bundle Archicad.** `archicad_bundle.py`, unduhan terpisah, kini menemukan jalur Archicad, mengamati folder hingga 20 detik, dan mencoba lagi di sebelah bundel.

## Belum ada di versi ini

- **Alat bantu keselamatan dan desain.** Orang di dalam bangunan tidak memiliki batas jarak tempuh dari kode bangunan (Anda mengetik batasnya) dan belum diperiksa secara manual pada denah nyata. Angka akustik, siklus hidup, dan bahaya adalah nilai perencanaan, bukan pemeriksaan kode.
- **Iklim masa depan dan EnergyPlus.** Tidak ada iklim masa depan bawaan: Anda dapat memuat file skenario untuk menjalankan banjir. Menjalankan EnergyPlus di peramban tidak termasuk dalam rilis ini.
- **Tata letak pita.** Takeoff material tetap "Belum dibuat" karena BimCraft tidak memiliki daftar kuantitas material, dan 54 alat pita abu-abu lainnya belum memiliki alat BimCraft di baliknya.
- **Penandatanganan dan platform.** Penginstal Windows dan .dmg macOS tidak ditandatangani, sehingga SmartScreen menampilkan {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}, dan macOS memerlukan klik kanan lalu {{ui:Terbuka}}. Build iPad dan iPhone belum dibangun ulang untuk 0.8.1.
- **Uji halaman nyata.** Beberapa uji peramban BimCraft yang lebih lama masih gagal di halaman uji kami, seperti sebelum 0.8.1.

Semua hal lainnya ada di [Yang belum dibuat](topic:not-built-yet). Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
