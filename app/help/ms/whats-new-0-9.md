---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: Bentuk dinding, pisah, ofset, regang dan kunci ke grid, aras di bawah tanah, dimensi grid dan Ukur pada pelan, pandangan pendua dengan gaya kerja dan jadual pen, Laporkan sebagai, eksport Collada dan Google Earth, Imbas kepada BIM, analisis angin dan seismik, add-on cetakan resin.
keywords: perkara baharu 0.9, keluaran terdahulu, perkara baharu, 0.9, nota keluaran, bentuk dinding, segi empat tepat, poligon, lengkok, pilih garisan, jejak garis besar, ofset, cantum, regang kotak, jajar dan kunci, pisah dinding, jurang, cantum semula, kunci ke grid, berkembang dari, ukur dari, tambah aras di bawah, ruang bawah tanah, arahan aras, dimensi grid, ukur pada pelan, gaya kerja, pandangan pendua, salinan sendiri, pandangan dipautkan, jadual pen, cetak seperti yang ditunjukkan, laporkan sebagai, taip skala, import svg, letakkan dalam pelan, letakkan dalam model, collada, dae, kmz, google earth, imbas kepada bim, beban angin, seismik, unsur terhingga, panel dokumen, cetakan resin, perkara baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, pemindahan, orang, barisan, akustik, gema, tindak balas impuls, banjir, angin, gempa bumi, bahaya, kitar hayat, jangka hayat, ids, tag, jadual, alih, jajar, agih, gambar, latar belakang, imbas kepada dinding, tapak dari civilcraft, lukisan panel, rangka, solar, pv, pisah, vrf, fan coil, saiz paip, dulang kabel, iluminans, konkrit, seismik, bandingkan imbasan, epsg, unjuran, dokumen, templat, karbon, kos, enjin render, buka dalam, usd, glb, unreal, buat asal, add-on, pcf, simbol, tumbuhan, jejak, pen, reben, pelayar projek, layout
from: 816df7f8
---

Ini ialah perubahan dalam BimCraft 0.9, berbanding 0.8.1. Dua tema utama ialah alat dinding sebenar dan pandangan yang berkelakuan seperti yang dijangkakan oleh orang yang datang daripada program BIM besar. Di sekelilingnya ialah eksport Collada, pembantu yang boleh meletakkan peranti elektrik, Imbas kepada BIM, dan kerja angin, seismik dan unsur terhingga dalam tab {{ui:Analisis}}.

## Baharu

### Dinding

- **Lukis bentuk penuh.** Dalam {{ui:Lukis}}, buka {{ui:Bentuk}} (atau pilih bentuk dalam senarai Bentuk bagi baris Dinding) untuk segi empat tepat, segi empat tepat berputar, poligon 3 hingga 64 sisi, lengkok mengikut pusat, lengkok tangen, dinding pada garisan yang dipilih, atau dinding mengelilingi kawasan tertutup yang anda klik di dalamnya. Segi empat tepat ialah empat dinding dengan empat bucu bercantum dan satu langkah buat asal. Lihat [Bentuk dinding, pisah, ofset, regang dan kunci](topic:wall-tools).
- **Tetapkan sebelum lukis, ubah selepas.** Baris Dinding mempunyai {{ui:Ofset}} dan {{ui:Cantum}} (nyahtanda untuk melukis dinding berdiri sendiri). Selepas itu, gunakan {{ui:Ofset}}, {{ui:Regang kotak}} dan {{ui:Jajar dan kunci}} pada dinding yang dilukis. Dinding yang dialihkan atau diregangkan mengekalkan pintu, tingkap dan dimensinya. Setiap resipi ialah satu langkah buat asal.
- **Potong dinding.** {{ui:Pisah}}, {{ui:Jurang}}, {{ui:Hujung bebas}}, {{ui:Padam segmen}} dan {{ui:Cantum semula}} memotong dinding pada satu klik atau di tempat dinding lain melintasinya. Potongan melalui pintu ditolak. Lihat [Bentuk dinding, pisah, ofset, regang dan kunci](topic:wall-tools).
- **Kunci dinding ke garisan grid.** Pilih dinding sepanjang garisan grid dan tanda {{ui:Kunci ke grid}} dalam {{ui:Sifat}}. Dengan alat Grid dihidupkan, taip jarak dalam {{ui:Alih sebanyak}} untuk garisan yang dipilih, dan dinding yang dikunci akan mengikut dalam satu langkah buat asal.
- **Bentuk satu dinding.** Dalam {{ui:Sifat}} bagi satu dinding, anda boleh melekatkan bahagian atas atau tapaknya pada bumbung, lantai atau siling, menyunting garis luar ketinggiannya, menyenget dinding, atau memotong bukaan dinding tanpa pintu atau tingkap. Lihat [Bentuk dinding](topic:wall-shape).
- **Panjang menunjukkan hujung yang kekal.** {{ui:Berkembang dari}} menetapkan sama ada permulaan, hujung atau pusat kekal apabila anda menukar panjang.
- **Panjang dan dimensi pelan sepadan.** {{ui:Ukur dari}} (garis tengah, muka dalam atau muka luar) memacu kedua-dua medan Panjang dan dimensi dinding pada pelan. Ia bermula pada garis tengah, jadi dimensi dinding pada pelan kini membaca garis tengah di tempat ia dahulu membaca muka luar. Tukarnya dalam baris Dinding, dalam {{ui:Sifat}} atau dalam {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Dinding}}.

### Aras, grid dan pengukuran

- **Tambah aras di bawah.** {{ui:Tambah aras di bawah}} dalam panel {{ui:Aras}} menambah aras di bawah yang paling rendah, setinggi aras itu, pada ketinggian negatif (Level -1, Level -2). Tiada yang lain bergerak. {{ui:Tambah aras…}} kini menerima ketinggian negatif. Menaip LEVEL, LEVELS, STOREY atau STOREYS pada baris arahan membuka {{ui:Tambah aras…}}, dan terdapat butang {{ui:Aras}} dalam menu dan tab reben. Lihat [Tapak, bangunan dan aras](topic:site-building-and-levels).
- **Dimensi grid pada pelan.** Dengan alat {{ui:Grid}} dihidupkan, tanda {{ui:Dimensi}} untuk melukis jarak antara garisan jiran dan saiz keseluruhan di luar bulatan pada pelan setiap aras. Lihat [Dimensi grid](topic:grid-dimensions).
- **Ukur pada pelan.** {{ui:Ukur}} dalam kumpulan {{ui:Lukis}} memberikan jarak dengan perbezaan X dan Y antara dua klik. Tiada apa-apa disimpan dalam model. Lihat [Ukur pada pelan](topic:measure-on-the-plan).
- **Ubah beberapa lajur sekaligus.** Pilih lajur bersama dinding dan senarai pilihan memaparkan setiap jenis dengan {{ui:Kekalkan yang ini sahaja}}. Satu klik mengekalkan lajur dan menunjukkan medan kongsinya.
- **Satu unit paparan di mana-mana.** Koordinat, ukuran, keratan, skala helaian, tab beban dan keputusan bingkai, serta teks Masalah, mengikut unit yang anda pilih. Eksport kekal SI.

### Pandangan, helaian dan cetakan

- **Gaya kerja.** {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Gaya kerja}} memilih antara setiap pandangan mempunyai anotasi dan jadual pen sendiri, atau berkongsinya. Lihat [Gaya kerja, pandangan pendua, pen pada kertas, Laporkan sebagai dan templat](topic:working-style).
- **Pendua pandangan.** Pelan, pelan siling, callout, dongakan dan keratan boleh diduakan sebagai {{ui:Salinan sendiri}} atau {{ui:Dipautkan}}; {{ui:Jadikan salinan sendiri}} menjadikan yang dipautkan itu bebas. Lihat [Gaya kerja, pandangan pendua, pen pada kertas, Laporkan sebagai dan templat](topic:working-style).
- **Cetak seperti yang ditunjukkan, atau melalui jadual pen.** Gantian pen disimpan dalam IFC bersama pandangan, dan helaian serta PDF melukisnya seperti skrin. Topik yang sama meliputi jadual pen.
- **Laporkan sebagai.** {{ui:Laporkan sebagai}} dalam {{ui:Sifat}} menulis slab yang dilukis sebagai jalan, dinding sebagai panel, atau bumbung sebagai tangga landai ke dalam IFC sebagai kelas yang anda pilih, dan mengirakannya begitu dalam jadual, Kuantiti, Cari, Warna mengikut dan Masalah.
- **Sunting dalam dongakan dan keratan.** Lukis dan alih dinding, bukaan, aras, dimensi dan nota terus dalam dongakan atau keratan, dengan saiz helaian dan blok tajuk anda sendiri. Lihat [Sunting dalam dongakan dan keratan](topic:edit-in-elevations).
- **Helaian.** Setiap helaian boleh mendatar atau menegak. Kotak {{ui:Taip skala}} terletak di sebelah senarai skala pada setiap pandangan yang diletakkan (1:64, 2:1, 1/4" = 1'). Anda boleh menyeret lukisan yang diletakkan atau menolaknya dengan kekunci anak panah, dan {{ui:Format…}} › {{ui:Import SVG…}} menukar reka bentuk helaian anda sendiri kepada blok tajuk dengan medan yang ditaip mengikut helaian.
- **Kredit Pustaka pada helaian.** Set lukisan dengan item Pustaka mendapat jadual kredit Pustaka yang boleh anda letakkan pada mana-mana helaian. Lihat [Kredit Pustaka](topic:library-credits).

### Pustaka: meletakkan

- **Letakkan mengikut pandangan.** Dalam pandangan Pelan, Pustaka memaparkan {{ui:Letakkan dalam pelan}}; dalam 3D ia memaparkan {{ui:Letakkan dalam model}}; dalam Pisah ia memaparkan butang pisah dengan {{ui:Letakkan dalam pelan}} sebagai tindakan utama. Kedua-dua cara menulis elemen IFC yang sama. Anda juga boleh menyeret kad Pustaka ke pelan atau paparan 3D; dengan pen atau jari, tekan dan tahan, kemudian seret. Lihat [Letakkan daripada Pustaka](topic:place-from-library).

### Fail dan pembantu

- **Collada dan Google Earth.** {{ui:Collada}} pada bar alat (menu Fail dalam gaya menu) menulis fail .dae, atau .kmz yang diletakkan di tempat model berada pada peta. Lihat [Eksport model sebagai Collada atau untuk Google Earth](topic:collada).
- **Pembantu boleh meletakkan peranti elektrik.** Pembantu anda yang bersambung mempunyai alat baharu untuk menambah, menyenaraikan, menukar dan memadam peranti serta menetapkan lampu. Pembantu kekal mati sehingga anda menghidupkannya dalam {{ui:Tetapan}}. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Imbas kepada BIM (add-on).** Mati secara lalai dan memerlukan add-on Awan titik. Ia mencadangkan lantai, dinding, pintu dan tingkap daripada imbasan dengan sisihan terukur bagi setiap satu; menerima cadangan ialah satu langkah buat asal.

### Analisis

- **Data tapak angin dan seismik.** Dalam tab {{ui:Analisis}}: beban angin mengikut ASCE 7-10 atau 7-16 untuk bangunan tertutup tegar, dengan daya pada setiap tingkat sebagai kes beban, serta data tapak seismik dengan carian USGS dan spektrum reka bentuk.
- **Susulan struktur dan unsur terhingga.** Semakan konkrit mengikut ACI 318-19, daya sisi setara mengikut ASCE 7-22, anjakan tingkat, slab dan dinding sebagai plat, dan kombinasi beban daripada ASCE 7 dan EN 1990. Enjin unsur terhingga kami sendiri menyelesaikan cangkerang, tetrahedron dan analisis modal. Lihat [Semak elemen konkrit dan hasilkan beban seismik](topic:concrete-and-seismic) dan [Analisis rangka](topic:frame-analysis).

### Add-on lain dan dokumen

- **Pencahayaan dalaman (add-on).** Meletakkan perlengkapan lampu dan menulis lux sebagai nombor dalam pelan setiap aras, dengan anggaran silau dan laporan yang boleh dicetak.
- **Panel dokumen.** {{ui:Fail}} › {{ui:Dokumen…}} mempunyai daftar keluar dan masuk dengan fail kunci, huruf semakan, keadaan keluaran dan sejarah.
- **Wilayah dan keluli.** Pakej lukisan dan peraturan bangunan Afrika Selatan dalam add-on Peraturan, dan 976 saiz keluli UK dalam jadual keratan kongsi.
- **Add-on cetakan resin percuma.** Pemotong hirisan, sokongan dan rakit, ujian pendedahan, dan format fail GOO, SL1, Chitubox dan Anycubic, semuanya mati secara lalai.

## Dalam setiap aplikasi

- Apabila anda menuding butang atau kawalan, tip Bootstrap dipaparkan.
- Titik permulaan di kawasan lukisan kosong mempunyai butang tutup; BimCraft mengingati bahawa ia telah ditutup.
- Jalur tab panel yang tidak muat kini boleh digulung dan tidak lagi dipotong.
- Apabila dokumen dibuka, tab pelayar berbunyi "<dokumen> - BimCraft | CadCraft".
- Dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Layout}}, susun atur ialah senarai juntai dengan pilihan dua baris.
- Senarai bahasa dalam {{ui:Tetapan}} menawarkan lebih banyak bahasa berbanding 0.8; bahasa selain Inggeris ialah draf mesin.

## Dibetulkan

- **Gerakkan berfungsi pada tangga,** dan pada landai, susur tangan, satah bumbung, peranti berdiri sendiri, gambar dan laluan.
- **Menyeret dinding tidak lagi menyenget bilik.** Gegang tengah mengalihkan dinding segi empat terhadap dirinya sendiri dan bucunya meluncur di sepanjang dinding yang bercantum. Tahan {{key:Mod}} untuk gerakan bebas yang lama; {{ui:Segikan}} mengembalikan 90 darjah.
- **Perubahan ketebalan atau jenis pada nod yang bercantum** kini mengekalkan bucu tertutup pada L, T, nod tiga dinding dan bersebelahan dinding melengkung.
- **Mengalihkan atau menyalin kumpulan bilik** mengekalkan dinding bercantum di luar kumpulan bercantum.
- **Buat semula mengekalkan identiti dimensi dinding.**
- **Memilih dinding dengan Lukis dimatikan** tidak lagi menimbulkan ralat dalam Sifat.
- **Render kembali kepada WebGL** apabila GPU tidak dapat dimulakan, dan bukannya berhenti.
- **Semakan EnergyPlus boleh dihidupkan** semula.
- **Dokumen dibuka sebagai kotak dialog berpusat.** {{key:Esc}}, X atau klik pada halaman yang malap menutupnya.
- **Butang {{ui:Pelan}}, {{ui:Pisah}} dan {{ui:3D}} dipaparkan** sebaik model dibuka, bukan hanya selepas Lukis pernah dihidupkan.

## Had yang perlu diketahui

- Tiada apa-apa dicetak pada perkakasan sebenar. Sokongan resin itu baharu dan belum terbukti.
- Keputusan angin, seismik, konkrit dan unsur terhingga ialah alat semakan untuk jurutera, diperiksa berbanding bentuk tertutup, bukan berbanding bangunan sebenar.
- Imbas kepada BIM diuji pada bangunan sintetik, bukan imbasan sebenar, dan hanya mengesan bilik berbentuk segi empat tepat.
- Collada belum dibuka dalam Blender atau Google Earth di sini.
- Anggaran pencahayaan diperiksa berbanding jejak kami sendiri, bukan berbanding program pencahayaan lain.
- Nombor Afrika Selatan belum disahkan.
- Gaya sambungan dinding (hujung rata, serong, potong segi) dan keutamaan lapisan belum dibina; bucu dipotong serong.
- Bahasa selain Inggeris ialah draf mesin.

Segala yang lain terdapat dalam [Apa yang belum dibina](topic:not-built-yet). Perubahan terdahulu terdapat dalam nota 0.8 dan 0.8.1 di bawah halaman ini.

## Terdahulu: 0.8 dan 0.8.1

Ini ialah perubahan dalam BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. BimCraft kini boleh menjawab soalan tentang bangunan dan mengujinya, dengan orang, bunyi, air, angin dan gempa bumi, dan melukisnya dengan lebih banyak alat; 0.8.1 ialah keluaran pembetulan.

### Baharu

**Uji bangunan**

- **Orang dalam bangunan.** Bahagian {{ui:Orang dalam bangunan}} di panel kiri membawa perpindahan keluar atau kedatangan hari biasa melalui bilik, pintu dan tangga anda. Anda melihat barisan di tempat bangunan menyempit, perjalanan terpanjang ke pintu keluar dari setiap bilik dan berapa lama orang terakhir mengambil masa. Tanda {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan tanda {{ui:Tunjukkan orang dalam paparan 3D}} untuk melihat pejalan kaki. Penemuan dihantar ke Masalah. Ini model kerumunan kasar untuk keputusan reka bentuk, bukan sijil keselamatan kebakaran. Lihat [Bawa orang berjalan melalui bangunan](topic:people-in-the-building).
- **Akustik bilik, dan dengar.** Bahagian {{ui:Akustik bilik}} memberikan masa gema setiap bilik mengikut jalur oktaf (Sabine dan Eyring) daripada saiznya dan kemasan yang anda pilih, dan dengan sasaran anda sendiri memberitahu berapa banyak penyerapan yang akan memenuhinya. {{ui:Main dalam bilik ini}} memainkan suara, tepukan, nota petik atau fail bunyi anda sendiri melalui tindak balas impuls yang dikira untuk bilik itu. Angka penyerapan ialah nilai biasa yang diterbitkan untuk anda gantikan. Lihat [Akustik bilik](topic:room-acoustics).
- **Main semula banjir, angin dan gempa bumi.** {{ui:Main semula bahaya}} memainkan air yang naik melalui bilik, tekanan angin pada setiap tingkat dan gempa bumi yang menggegarkan tingkat, pada pelan atau dongakan dengan gelangsar masa. Model ringkas dengan andaian mereka pada panel; bukan semakan kod. Lihat [Mainkan banjir, angin atau gempa bumi](topic:hazard-playback).
- **Apa yang haus dalam lima puluh tahun.** {{ui:Pandangan kitar hayat}} menyenaraikan tingkap, pintu, kemasan dan bumbung dengan jangka hayat setiap satu, tahun ia diganti dan, apabila anda menaip kos setiap unit, kos mengikut tahun serta nilai kininya. {{ui:Simpan jadual (CSV)}} menulisnya keluar. Jangka hayat ialah angka perancangan. Lihat [Lihat apa yang haus dalam lima puluh tahun](topic:life-cycle-view).
- **Semakan konkrit dan seismik.** Blok {{ui:Anggota konkrit}} dan {{ui:Beban seismik}} dalam tab {{ui:Analisis}} menyemak rasuk dan tiang konkrit mengikut ACI 318-19 dan menghasilkan daya sisi setara mengikut ASCE 7-22 pada lantai tegar, dengan anjakan tingkat. Untuk jurutera menyemak. Lihat [Semak elemen konkrit dan hasilkan beban seismik](topic:concrete-and-seismic).

**Semak dan laporkan**

- **Semak berbanding IDS.** Muat naik fail `.ids` yang diberikan pelanggan kepada anda dan lihat setiap elemen yang tidak memenuhinya dalam Masalah, sebelum anda menyerahkan IFC. Buka {{ui:Semak berbanding IDS}} di bawah {{ui:Semakan model}}. Lihat [Semak model berbanding IDS pelanggan](topic:check-against-ids).
- **Tag dan jadual.** Tentukan tag anda sendiri, tetapkannya pada banyak elemen sekaligus dan buat jadual yang lajur, penapis dan kumpulannya membacanya; tag disimpan dalam IFC. Lihat [Tag dan jadual](topic:tags-and-schedules).
- **Dokumen daripada model.** {{ui:Dokumen daripada model}} mengisi templat spesifikasi daripada IFC yang dibuka dan menyimpannya sebagai PDF, dokumen Word atau Markdown. Lihat [Dokumen daripada model](topic:documents-from-the-model).
- **Bandingkan imbasan dengan model.** Dengan awan titik dibuka, {{ui:Bandingkan}} menilai setiap elemen sebagai telah dibina, sebahagian dibina, hilang atau tidak dicapai, dan menunjukkan peratus yang dibina. Lihat [Bandingkan imbasan dengan model](topic:compare-scan-with-model).
- **Karbon dan kos.** Anak tetingkap Karbon menjumlahkan karbon terkandung daripada jadual faktor yang boleh anda sunting, dan anak tetingkap Kos mengagihkan harga merentasi jadual 4D. Faktor yang disertakan dengan BimCraft bersifat generik dan ditandakan belum disemak. Lihat [Karbon terkandung dan kos](topic:embodied-carbon-and-5d-cost).
- **Sebarang unjuran peta.** {{ui:Ukur}} › {{ui:Sistem koordinat…}} menerima nombor EPSG, zon UTM, nama atau definisi unjuran anda sendiri. Lihat [Georujukan dengan sebarang unjuran](topic:georeference-any-projection).

**Lukis dan sunting**

- **Alih, Jajar dan Agih.** Di bawah {{ui:Binaan}}; {{key:Shift+M}} memulakan Alih (biasa {{key:M}} masih Ukur). Alih menyalin semasa anda bergerak dengan {{key:C}}, setiap langkah ialah satu buat asal, dan ia bergerak dalam sesi Live TeamWork. Lihat [Alih, salin, jajar dan agih](topic:move-align-distribute).
- **Gambar di bawah pelan.** {{ui:Binaan}} › {{ui:Gambar}} meletakkan PNG, JPEG atau WebP di bawah pelan aras atau pada satah menegak. Tetapkan skala dengan dua titik, dan alih, pusing, pudar dan kunci. Kawasan yang disalin dalam MarkupCraft ditampal pada skala helaiannya. Lihat [Letakkan gambar di bawah pelan](topic:pictures-as-backgrounds).
- **Dinding daripada imbasan.** Dengan imbasan dibuka, dinding, pintu dan bilik datang sebagai cadangan yang anda simpan atau tolak satu demi satu, dalam satu langkah buat asal. Hanya dinding dalam dua arah berserenjang yang dikesan. Lihat [Tukar imbasan kepada dinding](topic:scan-to-walls).
- **Jejak, pen dan tangga lakaran.** {{ui:Jejak}} menunjukkan aras lain putus-putus di bawah pelan, {{ui:Pen}} memberikan dinding, pintu dan tingkap ketebalan garisan sendiri dalam satu pandangan, dan {{ui:Tangga lakaran}} menukar garisan berjalan kepada tangga. Mesh Wavefront OBJ dibuka. Lihat [Jejak aras, pen dan tangga daripada lakaran](topic:trace-pens-stairs-obj).
- **Bangunan sekitar alamat.** Bangunan dan petak yang dijumpai oleh Alamat ke tapak CivilCraft tiba sebagai cadangan; anda menanda yang mahu ditambah. Lihat [Mulakan daripada tapak CivilCraft](topic:site-from-civilcraft).
- **Lukisan panel.** {{ui:Binaan}} › {{ui:Lukisan panel}} membingkai dinding, lantai dan bumbung dalam kayu atau keluli nipis dan menyimpan senarai potongan sebagai CSV serta lukisan bengkel sebagai PDF. Nilai permulaan, bukan reka bentuk struktur. Lihat [Lukisan panel](topic:panel-drawings).
- **Palet simbol dan tumbuhan.** {{ui:Binaan}} › {{ui:Palet simbol}} mencari simbol elektrik dan paip mengikut nama; sumber {{ui:Tumbuhan}} bagi {{ui:Pustaka}} menyenaraikan kira-kira 400 tumbuhan dengan simbol pelan. Lihat [Palet simbol](topic:symbol-palette) dan [Letakkan tumbuhan](topic:plant-list).

**Paip, saluran dan tenaga**

- **Split, VRF dan fan coil.** Unit dalaman dan luaran dengan sambungannya, dan set talian yang bersaiz daripada jadual nilai contoh biasa yang boleh anda tukar. Lihat [Split, VRF dan fan coil](topic:split-vrf-fan-coils).
- **Pengiraan.** Anak tetingkap Pengiraan menyemak saiz paip bekalan dan saluran dengan kejatuhan tekanan, menghalakan kabel melalui dulang dan konduit serta menunjukkan isiannya, dan mengira iluminans daripada fail IES atau EULUMDAT. Nilai lalai dilabelkan; taip nilai kod anda. Lihat [Pengiraan paip, saluran, kabel dan cahaya](topic:mep-calculations).
- **Fail PCF.** **Eksport PCF** pada alat Paip menulis larian untuk program tegasan paip dan isometrik, dan fail PCF yang dibaca semula melukis paipnya. Lihat [Fail komponen paip](topic:piping-pcf).
- **Solar PV.** Pasang tatasusunan di atas bumbung atau tanah, teduhkannya daripada model, anggarkan tenaga tahunan, semak rentetan dan hasilkan data gambar rajah satu garisan. Modul permulaan dan kehilangan adalah generik. Lihat [Solar PV](topic:solar-pv).
- **Fail EnergyPlus.** Anak tetingkap Semak dengan EnergyPlus menulis model sebagai IDF untuk dijalankan dalam EnergyPlus anda sendiri. Menjalankannya dalam pelayar memerlukan binaan yang anda hoskan sendiri dan alamatnya anda taip; BimCraft tidak membawanya. Lihat [Semak pemanasan dan penyejukan dengan EnergyPlus](topic:check-with-energyplus).

**Gambar dan fail**

- **Pilih enjin render.** {{ui:Render}} mempunyai pilihan {{ui:Enjin}}. Dua enjin terbina dalam kami (Pantas dan Penjejak laluan) kekal sebagai lalai. **Buka dalam** menyimpan adegan sebagai fail USD atau glTF, dan folder projek Unreal sebagai .zip; dalam CadCraft Studio, add-on boleh menambah enjin. Plug-in Unreal yang membuka projek itu belum dikeluarkan. Lihat [Pilih program yang melukis gambar](topic:render-engines).
- **Buat asal Studio.** Dalam CadCraft Studio, BimCraft memberitahu Studio setiap langkah yang selesai supaya Studio boleh membatalkan langkah terakhir anda dalam tetingkap yang terakhir anda gunakan. Lihat [Buat asal merentasi aplikasi](topic:undo-across-apps).
- **Add-on dalam fail anda.** IFC merekodkan add-on mana yang menulis ke dalamnya, dan menawarkan yang anda tidak miliki apabila anda membukanya. Lihat [Add-on dalam fail anda](topic:add-ons-in-your-file).

**Dalam setiap aplikasi**

- **Sambungkan AI anda.** Pembantu anda sendiri boleh memacu BimCraft melalui sambungan Studio dan menjawab soalan tentang model, seperti bilik mana yang berada di bawah luas tertentu. Studio tidak mempunyai AI sendiri. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} menawarkan Bungkus, 2 baris atau 1 baris; Bungkus kekal sebagai lalai.
- **Peranti input.** Tetapan trackpad, pen, tetikus 3D, pengawal dan MIDI dikongsi oleh semua aplikasi.
- **Masalah dan Live.** Panel amaran dan sesi Live berfungsi seperti sebelumnya, dengan semakan baharu di atas menghantar data kepada Masalah.
- **Bahasa.** 54 bahasa, sepuluh daripadanya baharu. Bahasa selain Inggeris ialah draf mesin yang belum disemak oleh penutur asli; topik bantuan kebanyakannya dalam Inggeris.

### Dibetulkan dalam 0.8.1

- **Susun atur reben + Penyemak projek.** Sisip › Import CAD, Sisip › Imej dan Urus › Unit Projek memaparkan "Belum dibina dalam BimCraft". Imej kini membuka alat Gambar, Import CAD membuka {{ui:Binaan}} › {{ui:Daripada lukisan…}} (DWG, DXF, PDF atau imbasan), dan Unit Projek membuka {{ui:Tetapan}} › {{ui:Global}} › {{ui:Unit}}. Alih dan Jajar menjalankan alat Alih dan Jajar, Aras membuka {{ui:Tambah aras…}}, Fasa membuka bahagian fasa Pengubahsuaian, dan Bahan membuka pustaka bahan.
- **Bahagian lukisan DWG kelas.** Ia dibaca sebagai jenis yang salah; dibetulkan dalam BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa semasa berjalan.** Studio dan edisi pakej kini boleh menukar bahasa tanpa dimulakan semula. Ini belum diuji pada setiap platform; beritahu kami jika bahasa tidak berubah.
- **Skrip bundle Archicad.** `archicad_bundle.py`, muat turun berasingan, kini mencari laluan Archicad, memerhati folder sehingga 20 saat dan mencuba semula di sebelah bundle.

### Belum ada dalam versi ini

- **Alat keselamatan dan reka bentuk.** Orang dalam bangunan tidak mempunyai had jarak perjalanan daripada kod bangunan (anda taip hadnya) dan belum disemak dengan tangan pada pelan sebenar. Angka akustik, kitar hayat dan bahaya ialah nilai perancangan, bukan semakan kod.
- **Senario iklim masa depan dan EnergyPlus.** Tiada senario iklim masa depan terbina dalam: anda boleh memuatkan fail senario untuk larian banjir. Larian EnergyPlus dalam pelayar tidak termasuk dalam keluaran ini.
- **Susun atur reben.** Kuantiti Bahan kekal "Belum dibina" kerana BimCraft tidak mempunyai senarai kuantiti bahan, dan 54 alat reben kelabu lain belum mempunyai alat BimCraft di belakangnya.
- **Penandatanganan dan platform.** Pemasang Windows dan .dmg macOS tidak ditandatangani, jadi SmartScreen memaparkan {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}, dan macOS memerlukan klik kanan kemudian {{ui:Buka}}. Binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- **Ujian halaman sebenar.** Sesetengah ujian pelayar BimCraft yang lebih lama masih gagal pada halaman ujian kami, seperti sebelum 0.8.1.

Segala yang lain terdapat dalam [Apa yang belum dibina](topic:not-built-yet). Perubahan terdahulu terdapat dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
