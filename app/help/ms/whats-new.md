---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: BimCraft menambah orang yang berjalan dalam bangunan, akustik bilik yang boleh anda dengar, main semula banjir, angin dan gempa bumi, paparan kitar hayat lima puluh tahun, semakan terhadap IDS, tag dan jadual, Alih, Jajar dan Agihkan, gambar di bawah pelan, dinding daripada imbasan, lukisan panel, solar, split dan VRF, saiz paip dan kabel, semakan konkrit dan seismik, sebarang unjuran peta, pilihan enjin render, serta buat asal Studio; 0.8.1 membetulkan alat yang malap pada reka letak Reben.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, pemindahan, orang, barisan, akustik, gema, sambutan impuls, banjir, angin, gempa bumi, bahaya, kitar hayat, hayat perkhidmatan, ids, tag, jadual, alih, jajar, agihkan, gambar, latar belakang, imbasan kepada dinding, tapak daripada civilcraft, lukisan panel, rangka, solar, pv, split, vrf, kipas coil, saiz paip, dulang kabel, iluminans, konkrit, seismik, bandingkan imbasan, epsg, unjuran, dokumen, templat, karbon, kos, energyplus, enjin render, buka dalam, usd, glb, unreal, buat asal, add-on, pcf, simbol, tumbuhan, trace, pen, ribbon, penyemak imbas projek, layout
from: 87b03056
---

Ini ialah perubahan dalam BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. BimCraft kini boleh menjawab soalan tentang sesebuah bangunan dan mengujinya, dengan orang, bunyi, air, angin dan gempa bumi, serta melukisnya dengan lebih banyak alat; 0.8.1 ialah keluaran pembetulan.

## Baharu

### Uji bangunan

- **Orang dalam bangunan.** Bahagian {{ui:People in the building}} pada panel kiri membawa orang berjalan melalui bilik, pintu dan tangga anda dalam pemindahan atau ketibaan hari biasa. Anda melihat barisan di tempat bangunan menyempit, perjalanan terpanjang ke pintu keluar dari setiap bilik dan berapa lama orang terakhir mengambil masa. Tandakan {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan tandakan {{ui:Show the people in the 3D view}} untuk melihat pejalan kaki. Penemuan dihantar ke Masalah. Ia model orang kasar untuk keputusan reka bentuk, bukan sijil keselamatan kebakaran. Lihat [Bawa orang berjalan melalui bangunan](topic:people-in-the-building).
- **Akustik bilik, dan dengarinya.** Bahagian {{ui:Room acoustics}} memberi masa gema setiap bilik mengikut jalur oktaf (Sabine dan Eyring) daripada saiz dan kemasan yang anda pilih, dan dengan sasaran anda sendiri ia memberitahu berapa banyak penyerapan yang diperlukan untuk memenuhinya. {{ui:Play it in this room}} memainkan suara, tepukan, nota petik atau fail bunyi anda sendiri melalui sambutan impuls yang dikira untuk bilik itu. Nilai penyerapan ialah nilai terbitan tipikal untuk anda gantikan. Lihat [Akustik bilik](topic:room-acoustics).
- **Main semula banjir, angin dan gempa bumi.** {{ui:Hazard playback}} memainkan air yang naik melalui bilik, tekanan angin pada setiap tingkat dan gegaran gempa bumi pada tingkat-tingkat, pada pelan atau dongakan dengan peluncur masa. Model ringkas dengan andaiannya pada panel; bukan semakan kod. Lihat [Main banjir, angin atau gempa bumi](topic:hazard-playback).
- **Apa yang haus dalam lima puluh tahun.** {{ui:Life-cycle view}} menyenaraikan tingkap, pintu, kemasan dan bumbung dengan hayat perkhidmatan setiap satu, tahun ia diganti dan, apabila anda menaip kos seunit, kos mengikut tahun serta nilai kininya. {{ui:Save the schedule (CSV)}} menulisnya keluar. Hayat perkhidmatan ialah angka perancangan. Lihat [Lihat apa yang haus dalam lima puluh tahun](topic:life-cycle-view).
- **Semakan konkrit dan seismik.** Blok {{ui:Concrete members}} dan {{ui:Seismic loads}} dalam tab {{ui:Analysis}} menyemak rasuk dan tiang konkrit mengikut ACI 318-19 dan membuat daya sisi setara mengikut ASCE 7-22 pada lantai tegar, dengan anjakan tingkat. Untuk jurutera menyemak. Lihat [Semak anggota konkrit dan buat beban seismik](topic:concrete-and-seismic).

### Semak dan laporkan

- **Semak terhadap IDS.** Muat fail `.ids` yang diberikan pelanggan anda dan lihat setiap elemen yang tidak memenuhinya dalam Masalah, sebelum anda menyerahkan IFC. Buka {{ui:Check against an IDS}} di bawah {{ui:Model checks}}. Lihat [Semak model terhadap IDS pelanggan](topic:check-against-ids).
- **Tag dan jadual.** Takrifkan tag anda sendiri, tetapkannya pada banyak elemen sekaligus dan buat jadual yang lajur, penapis dan kumpulannya membacanya; tag disimpan dalam IFC. Lihat [Tag dan jadual](topic:tags-and-schedules).
- **Dokumen daripada model.** {{ui:Documents from the model}} mengisi templat spesifikasi daripada IFC yang dibuka dan menyimpannya sebagai PDF, dokumen Word atau Markdown. Lihat [Dokumen daripada model](topic:documents-from-the-model).
- **Bandingkan imbasan dengan model.** Dengan awan titik dibuka, {{ui:Compare}} menilai setiap elemen sebagai dibina, separa dibina, hilang atau tidak dicapai, dan menunjukkan peratus yang dibina. Lihat [Bandingkan imbasan dengan model](topic:compare-scan-with-model).
- **Karbon dan kos.** Anak tetingkap Carbon menambah karbon terbenam daripada jadual faktor yang boleh anda sunting, dan anak tetingkap Cost mengagihkan harga merentasi jadual 4D. Faktor yang datang bersama BimCraft adalah generik dan ditanda belum disemak. Lihat [Karbon terbenam dan kos](topic:embodied-carbon-and-5d-cost).
- **Sebarang unjuran peta.** {{ui:Measure}} › {{ui:Coordinate system…}} menerima nombor EPSG, zon UTM, nama atau takrif unjuran anda sendiri. Lihat [Georujukan dengan sebarang unjuran](topic:georeference-any-projection).

### Lukis dan sunting

- **Alih, Jajar dan Agihkan.** Di bawah {{ui:Build}}; {{key:Shift+M}} memulakan Alih (biasa {{key:M}} kekal Ukur). Alih menyalin semasa anda bergerak dengan {{key:C}}, setiap langkah ialah satu buat asal, dan ia bergerak dalam sesi Live TeamWork. Lihat [Alih, salin, jajar dan agihkan](topic:move-align-distribute).
- **Gambar di bawah pelan.** {{ui:Build}} › {{ui:Picture}} meletakkan PNG, JPEG atau WebP di bawah pelan aras atau pada satah menegak. Tetapkan skala dengan dua titik, dan alih, putar, pudarkan serta kunci gambar itu. Kawasan yang disalin dalam MarkupCraft ditampal pada skala helaiannya. Lihat [Letakkan gambar di bawah pelan](topic:pictures-as-backgrounds).
- **Dinding daripada imbasan.** Dengan imbasan dibuka, dinding, pintu dan bilik datang sebagai cadangan yang anda simpan atau tolak satu demi satu, dalam satu langkah buat asal. Hanya dinding dalam dua arah berserenjang yang ditemui. Lihat [Tukar imbasan kepada dinding](topic:scan-to-walls).
- **Trace, pen dan lakar tangga.** {{ui:Trace}} menunjukkan aras lain secara putus-putus di bawah pelan, {{ui:Pens}} memberi dinding, pintu dan tingkap ketebalan garisan sendiri dalam satu paparan, dan {{ui:Sketch stair}} menukar garisan berjalan kepada tangga. Mesh Wavefront OBJ dibuka. Lihat [Trace aras, pen dan tangga daripada lakaran](topic:trace-pens-stairs-obj).
- **Bangunan sekitar alamat.** Bangunan dan lot yang ditemui oleh Address to site CivilCraft tiba sebagai cadangan; anda tandakan yang hendak ditambah. Lihat [Mulakan dari tapak CivilCraft](topic:site-from-civilcraft).
- **Lukisan panel.** {{ui:Build}} › {{ui:Panel drawings}} membingkai dinding, lantai dan bumbung dalam kayu atau keluli gred ringan, dan menyimpan senarai potongan sebagai CSV serta lukisan bengkel sebagai PDF. Nilai permulaan, bukan reka bentuk struktur. Lihat [Lukisan panel](topic:panel-drawings).
- **Palet simbol dan tumbuhan.** {{ui:Build}} › {{ui:Symbol palette}} mencari simbol elektrik dan paip mengikut nama; sumber {{ui:Plants}} bagi {{ui:Library}} menyenaraikan kira-kira 400 tumbuhan dengan simbol pelan. Lihat [Palet simbol](topic:symbol-palette) dan [Letakkan tumbuhan](topic:plant-list).

### Paip, duktus dan tenaga

- **Split, VRF dan kipas coil.** Unit dalaman dan luaran dengan sambungannya, dan set talian yang disaiz daripada jadual nilai contoh tipikal yang boleh anda ubah. Lihat [Split, VRF dan kipas coil](topic:split-vrf-fan-coils).
- **Pengiraan.** Anak tetingkap Calculations menyemak saiz paip bekalan dan duktus dengan kejatuhan tekanan, menghala kabel melalui dulang dan konduit serta menunjukkan isinya, dan mengira iluminans daripada fail IES atau EULUMDAT. Nilai lalai dilabelkan; taip nilai kod anda. Lihat [Pengiraan paip, duktus, kabel dan cahaya](topic:mep-calculations).
- **Fail PCF.** Arahan **Export PCF** pada alat Paip menulis laluan untuk program tegasan paip dan isometrik, dan fail PCF yang dibaca semula melukis paipnya. Lihat [Fail komponen paip](topic:piping-pcf).
- **Solar PV.** Pasang tatasusunan pada bumbung atau di tanah, lindungkannya daripada model, anggarkan tenaga tahunan, semak rentetan dan hasilkan data gambar rajah satu garisan. Modul permulaan dan kehilangan adalah generik. Lihat [Solar PV](topic:solar-pv).
- **Fail EnergyPlus.** Anak tetingkap Check with EnergyPlus menulis model sebagai IDF untuk dijalankan dalam EnergyPlus anda sendiri. Menjalankannya dalam pelayar memerlukan binaan yang anda hos sendiri dan alamatnya yang anda taip; BimCraft tidak membawanya. Lihat [Semak pemanasan dan penyejukan dengan EnergyPlus](topic:check-with-energyplus).

### Gambar dan fail

- **Pilih enjin render.** {{ui:Render}} mempunyai pilihan {{ui:Engine}}. Dua enjin terbina dalam kami (Pantas dan Penjejak laluan) kekal sebagai lalai. **Buka dalam** menyimpan adegan sebagai fail USD atau glTF, dan folder projek Unreal sebagai .zip; dalam CadCraft Studio, add-on boleh menambah enjin. Plug-in Unreal yang membuka projek itu belum dikeluarkan. Lihat [Pilih program yang melukis gambar](topic:render-engines).
- **Buat asal Studio.** Dalam CadCraft Studio, BimCraft memberitahu Studio setiap langkah yang selesai supaya Studio boleh membuat asal langkah terakhir anda dalam tetingkap yang anda gunakan terakhir. Lihat [Buat asal merentas aplikasi](topic:undo-across-apps).
- **Add-on dalam fail anda.** Sebuah IFC merekod add-on mana yang menulis ke dalamnya, dan menawarkan yang tiada pada anda apabila anda membukanya. Lihat [Add-on dalam fail anda](topic:add-ons-in-your-file).

### Dalam setiap aplikasi

- **Sambungkan AI anda.** Pembantu anda sendiri boleh memacu BimCraft melalui sambungan Studio dan menjawab soalan tentang model, seperti bilik mana yang berada di bawah kawasan tertentu. Studio tidak mempunyai AI sendiri. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Baris bar alat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} menawarkan Balut, 2 baris atau 1 baris; Balut kekal sebagai lalai.
- **Peranti input.** Tetapan pad jejak, pen, tetikus 3D, pengawal dan MIDI dikongsi oleh semua aplikasi.
- **Masalah dan Live.** Panel amaran dan sesi Live berfungsi seperti sebelum ini, dengan semakan baharu di atas yang menyuap Masalah.
- **Bahasa.** 54 bahasa, sepuluh daripadanya baharu. Bahasa selain bahasa Inggeris ialah draf mesin yang belum dibaca oleh penutur asli; topik bantuan kebanyakannya masih dalam bahasa Inggeris.

## Dibetulkan dalam 0.8.1

- **Reka letak Reben + Penyemak imbas projek.** Sisip › Import CAD, Sisip › Imej dan Urus › Project Units memaparkan "Belum dibina dalam BimCraft lagi." Kini Imej membuka alat Gambar, Import CAD membuka {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF atau imbasan), dan Project Units membuka {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Alih dan Jajar menjalankan alat Alih dan Jajar, Aras membuka {{ui:Add levels…}}, Fasa membuka bahagian Fasa pengubahsuaian dan Bahan membuka pustaka bahan.
- **Bahagian kelas DWG.** Ia dibaca sebagai jenis yang salah; dibetulkan dalam BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa semasa larian.** Studio dan edisi terpek kini boleh menukar bahasa tanpa dimulakan semula. Ini belum diuji pada setiap platform; beritahu kami jika bahasa tidak berubah.
- **Skrip bundle Archicad.** `archicad_bundle.py`, muat turun berasingan, kini mencari laluan Archicad, memantau folder sehingga 20 saat dan mencuba semula di sebelah bundle.

## Belum ada dalam versi ini

- **Alat keselamatan dan reka bentuk.** Orang dalam bangunan tiada had jarak perjalanan daripada kod bangunan (anda yang menaip had itu) dan belum disemak secara manual pada pelan sebenar. Angka akustik, kitar hayat dan bahaya ialah nilai perancangan, bukan semakan kod.
- **Iklim masa depan dan EnergyPlus.** Tiada iklim masa depan terbina dalam: anda boleh memuat fail senario untuk larian banjir. Larian EnergyPlus dalam pelayar tidak termasuk dalam keluaran ini.
- **Reka letak reben.** Material Takeoff kekal "Belum dibina" kerana BimCraft tiada senarai kuantiti bahan, dan 54 alat reben malap yang lain belum mempunyai alat BimCraft di belakangnya.
- **Penandatanganan dan platform.** Pemasang Windows dan .dmg macOS tidak ditandatangani, jadi SmartScreen menunjukkan {{ui:More info}}, kemudian {{ui:Run anyway}}, dan macOS memerlukan klik kanan kemudian {{ui:Open}}. Binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- **Ujian halaman sebenar.** Sesetengah ujian pelayar BimCraft yang lama masih gagal dalam halaman ujian kami, seperti sebelum 0.8.1.

Perkara lain ada dalam [Apa yang belum dibina](topic:not-built-yet). Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
