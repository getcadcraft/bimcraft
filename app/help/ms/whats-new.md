---
title: Perkara baharu dalam 0.9
summary: Bentuk dinding, pisah, ofset, regang dan kunci-ke-grid, aras di bawah tanah, dimensi grid dan Ukur pada pelan, paparan pendua dengan gaya kerja dan jadual pen, Laporkan sebagai, eksport Collada dan Google Earth, Scan kepada BIM, analisis angin dan seismik, add-on cetakan resin.
keywords: perkara baharu, 0.9, nota keluaran, bentuk dinding, segi empat tepat, poligon, lengkok, garisan dipilih, jejak garis luar, ofset, cantum, regang kotak, jajar dan kunci, pisah dinding, jurang, cantum semula, kunci ke grid, berkembang dari, ukur dari, tambah aras di bawah, bawah tanah, arahan aras, dimensi grid, ukur pada pelan, gaya kerja, paparan pendua, salinan sendiri, paparan berpautan, jadual pen, laporkan sebagai, skala taip, import svg, letak dalam pelan, letak dalam model, collada, dae, kmz, google earth, scan kepada bim, beban angin, seismik, elemen terhingga, panel dokumen, cetakan resin, perkara baharu, nota keluaran, perubahan, 0.8, 0.8.1, versi, ciri baharu, pemindahan, orang, barisan, akustik, gema, tindak balas impuls, banjir, angin, gempa bumi, bahaya, kitar hayat, jangka hayat, ids, tag, jadual, alih, jajar, agih, gambar, latar belakang, imbasan kepada dinding, tapak dari civilcraft, lukisan panel, rangka, solar, pv, pisah, vrf, fan coil, saiz paip, talam kabel, pencahayaan, konkrit, seismik, bandingkan imbasan, epsg, unjuran, dokumen, templat, karbon, kos, enjin render, buka dalam, usd, glb, unreal, buat asal, add-on, pcf, simbol, tumbuhan, jejak, pen, reben, pelayar projek, susun atur
from: 5624fe88
---

Ini ialah apa yang berubah dalam BimCraft 0.9, berbanding 0.8.1. Dua tema utamanya ialah alat dinding yang sebenar dan paparan yang berkelakuan seperti yang dijangka oleh pengguna dari program BIM besar. Di sekelilingnya ada eksport Collada, pembantu yang boleh meletakkan peranti elektrik, Scan kepada BIM, dan kerja angin, seismik serta elemen terhingga dalam tab {{ui:Analisis}}.

## Baharu

### Dinding

- **Lukis bentuk penuh.** Dalam {{ui:Lukis}}, buka {{ui:Bentuk}} (atau pilih bentuk dalam senarai Bentuk baris Dinding) untuk segi empat tepat, segi empat tepat berputar, poligon 3 hingga 64 sisi, lengkok mengikut pusat, lengkok tangen, dinding pada garisan dipilih, atau dinding di sekeliling kawasan tertutup yang anda klik di dalamnya. Segi empat tepat ialah empat dinding dengan empat sudut bercantum dan satu langkah buat asal. Lihat [Bentuk dinding, pisah, ofset, regang dan kunci](topic:wall-tools).
- **Tetapkan sebelum melukis, tukar selepas.** Baris Dinding mempunyai {{ui:Ofset}} dan {{ui:Cantum}} (nyahtandakan untuk melukis dinding bebas-berdiri). Selepas itu gunakan {{ui:Ofset}}, {{ui:Regang kotak}} dan {{ui:Jajar dan kunci}} pada dinding yang dilukis. Dinding yang dialihkan atau diregangkan mengekalkan pintu, tingkap dan dimensinya. Setiap resipi ialah satu langkah buat asal.
- **Potong dinding.** {{ui:Pisah}}, {{ui:Jurang}}, {{ui:Hujung bebas}}, {{ui:Padam segmen}} dan {{ui:Cantum semula}} memotong dinding pada satu klik atau di tempat dinding lain bersilang dengannya. Potongan melalui pintu ditolak. Lihat [Bentuk dinding, pisah, ofset, regang dan kunci](topic:wall-tools).
- **Kunci dinding ke garisan grid.** Pilih dinding sepanjang garisan grid dan tandakan {{ui:Kunci ke grid}} dalam {{ui:Sifat}}. Dengan alat Grid dihidupkan, taip jarak dalam {{ui:Alih sebanyak}} untuk garisan yang dipilih, dan dinding yang dikunci mengikut dalam satu langkah buat asal.
- **Bentuk satu dinding.** Dalam {{ui:Sifat}} satu dinding, anda boleh melekatkan bahagian atas atau tapaknya pada bumbung, lantai atau siling, menyunting garis luar dongakannya, mengondongkannya, atau memotong bukaan dinding tanpa pintu atau tingkap. Lihat [Bentuk dinding](topic:wall-shape).
- **Panjang menyatakan hujung mana yang kekal.** {{ui:Berkembang dari}} menetapkan sama ada permulaan, penghujung atau tengah kekal di tempatnya apabila anda menukar panjang.
- **Panjang dan dimensi pelan sepadan.** {{ui:Ukur dari}} (garis tengah, muka dalam atau muka luar) memacu kedua-dua medan Panjang dan dimensi dinding pelan. Ia bermula pada garis tengah, jadi dimensi dinding pelan kini membaca garis tengah di tempat ia dahulu membaca muka luar. Tukarkannya dalam baris Dinding, dalam {{ui:Sifat}} atau dalam {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Dinding}}.

### Aras, grid dan pengukuran

- **Tambah aras di bawah.** {{ui:Tambah aras di bawah}} dalam panel {{ui:Aras}} menambah aras di bawah yang paling rendah, setinggi itu, pada ketinggian negatif (Aras -1, Aras -2). Tiada yang lain beralih. {{ui:Tambah aras…}} kini menerima ketinggian negatif. Menaip LEVEL, LEVELS, STOREY atau STOREYS pada baris arahan membuka {{ui:Tambah aras…}}, dan ada butang {{ui:Aras}} dalam menu dan tab reben. Lihat [Tapak, bangunan dan aras](topic:site-building-and-levels).
- **Dimensi grid pada pelan.** Dengan alat {{ui:Grid}} dihidupkan, tandakan {{ui:Dimensi}} untuk melukis jarak antara garisan bersebelahan dan saiz keseluruhan di luar bulatan pada pelan setiap aras. Lihat [Dimensikan grid](topic:grid-dimensions).
- **Ukur pada pelan.** {{ui:Ukur}} dalam kumpulan {{ui:Lukis}} memberikan jarak dengan perbezaan X dan Y antara dua klik. Tiada apa disimpan dalam model. Lihat [Ukur pada pelan](topic:measure-on-the-plan).
- **Ubah beberapa lajur sekali gus.** Pilih lajur bersama dinding dan pilihan itu menyenaraikan setiap jenis dengan {{ui:Kekalkan yang ini sahaja}}. Satu klik mengekalkan lajur dan menunjukkan medan kongsinya.
- **Satu unit paparan di mana-mana.** Koordinat, pengukuran, keratan, skala helaian, beban dan keputusan tab bingkai serta teks Masalah mengikut unit yang anda pilih. Eksport kekal SI.

### Paparan, helaian dan cetakan

- **Gaya kerja.** {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Gaya kerja}} memilih sama ada setiap paparan mempunyai anotasi dan jadual pen sendiri, atau berkongsinya. Lihat [Gaya kerja, paparan pendua, pen pada kertas, Laporkan sebagai dan templat](topic:working-style).
- **Pendua paparan.** Pelan, pelan siling, panggilan, dongakan dan keratan boleh diduplikasi sebagai {{ui:Salinan sendiri}} atau {{ui:Berpautan}}; {{ui:Buat salinan sendiri}} menjadikan yang berpautan itu bebas. Lihat [Gaya kerja, paparan pendua, pen pada kertas, Laporkan sebagai dan templat](topic:working-style).
- **Cetak seperti yang dipaparkan, atau melalui jadual pen.** Override pen disimpan dalam IFC bersama paparan, dan helaian serta PDF melukisnya seperti skrin. Topik yang sama merangkumi jadual pen.
- **Laporkan sebagai.** {{ui:Laporkan sebagai}} dalam {{ui:Sifat}} menulis slab yang dilukis sebagai jalan, dinding sebagai panel, atau bumbung sebagai ramp ke IFC sebagai kelas yang anda pilih, dan mengirakannya begitu dalam jadual, Kuantiti, Cari, Warna mengikut dan Masalah.
- **Sunting dalam dongakan dan keratan.** Lukis dan alihkan dinding, bukaan, aras, dimensi dan nota betul-betul dalam dongakan atau keratan, dengan saiz helaian dan blok tajuk anda sendiri. Lihat [Sunting dalam dongakan dan keratan](topic:edit-in-elevations).
- **Helaian.** Setiap helaian boleh landskap atau potret. Kotak {{ui:Taip skala}} terletak di sebelah senarai skala pada setiap paparan yang diletakkan (1:64, 2:1, 1/4" = 1'). Anda boleh seret lukisan yang diletakkan atau tolaknya dengan kekunci anak panah, dan {{ui:Format…}} › {{ui:Import SVG…}} menukar reka bentuk helaian anda sendiri kepada blok tajuk dengan medan yang ditaip mengikut helaian.
- **Kredit pustaka pada helaian.** Set lukisan dengan item Pustaka mendapat jadual Kredit pustaka yang boleh anda letakkan pada mana-mana helaian. Lihat [Kredit pustaka](topic:library-credits).

### Pustaka: meletakkan

- **Letak mengikut paparan.** Dalam paparan Pelan, Pustaka menunjukkan {{ui:Letak dalam pelan}}; dalam 3D ia menunjukkan {{ui:Letak dalam model}}; dalam Pisah ia menunjukkan butang belah dengan {{ui:Letak dalam pelan}} sebagai tindakan utama. Kedua-dua cara menulis elemen IFC yang sama. Anda juga boleh seret kad Pustaka ke pelan atau paparan 3D; dengan pen atau jari, tekan dan tahan, kemudian seret. Lihat [Letak dari Pustaka](topic:place-from-library).

### Fail dan pembantu

- **Collada dan Google Earth.** {{ui:Collada}} pada bar alat (menu Fail dalam gaya menu) menulis .dae, atau .kmz yang diletakkan di tempat model berada pada peta. Lihat [Eksport model sebagai Collada atau untuk Google Earth](topic:collada).
- **Pembantu boleh meletakkan peranti elektrik.** Pembantu yang disambungkan kepada anda mempunyai alat baharu untuk menambah, menyenaraikan, menukar dan memadam peranti serta untuk menetapkan lampu. Pembantu kekal dimatikan sehingga anda menghidupkannya dalam {{ui:Tetapan}}. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Scan kepada BIM (add-on).** Dimatikan secara lalai dan memerlukan add-on Awan titik. Ia mencadangkan tingkat, dinding, pintu dan tingkap daripada imbasan dengan sisihan terukur untuk setiap satu; menerimanya ialah satu langkah buat asal.

### Analisis

- **Data tapak angin dan seismik.** Dalam tab {{ui:Analisis}}: beban angin mengikut ASCE 7-10 atau 7-16 untuk bangunan tertutup tegar, dengan daya pada setiap tingkat sebagai kes beban, dan data tapak seismik dengan carian USGS dan spektrum reka bentuk.
- **Susulan struktur dan elemen terhingga.** Semakan konkrit kepada ACI 318-19, daya sisi setara kepada ASCE 7-22, anjakan tingkat, slab dan dinding sebagai plat, dan kombinasi beban daripada ASCE 7 dan EN 1990. Enjin elemen terhingga kami sendiri membuat shell, tetrahedra dan analisis modal. Lihat [Semak ahli konkrit dan buat beban seismik](topic:concrete-and-seismic) dan [Analisis bingkai](topic:frame-analysis).

### Add-on dan dokumen lain

- **Pencahayaan dalaman (add-on).** Meletakkan perlengkapan lampu dan menulis lux sebagai nombor ke dalam pelan setiap aras, dengan anggaran silau dan laporan boleh cetak.
- **Panel dokumen.** {{ui:Fail}} › {{ui:Dokumen…}} mempunyai daftar keluar dan masuk dengan fail kunci, huruf semakan, keadaan keluaran dan sejarah.
- **Wilayah dan keluli.** Pek lukisan dan peraturan bangunan Afrika Selatan dalam add-on Peraturan, dan 976 saiz keluli UK dalam jadual bahagian yang dikongsi.
- **Add-on percetakan resin percuma.** Pemotong hirisan, sokongan dan rakit, ujian pendedahan, dan format fail GOO, SL1, Chitubox dan Anycubic, semuanya dimatikan secara lalai.

## Dalam setiap aplikasi

- Menuding butang atau kawalan menunjukkan tip alat Bootstrap.
- Tip permulaan pada kawasan lukisan kosong mempunyai butang tutup; BimCraft mengingati bahawa ia telah ditutup.
- Jalur tab panel yang tidak muat kini menatal dan bukannya dipotong.
- Dengan dokumen terbuka, tab pelayar berbunyi "<dokumen> - BimCraft | CadCraft".
- Dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Susun atur}}, susun atur ialah senarai juntai dengan pilihan dua baris.
- Senarai bahasa dalam {{ui:Tetapan}} menawarkan lebih banyak bahasa daripada 0.8; bahasa selain bahasa Inggeris ialah draf mesin.

## Diperbetulkan

- **Gerakkan berfungsi pada tangga,** dan pada ramp, susur tangan, satah bumbung, peranti bebas-berdiri, gambar dan laluan.
- **Menyeret dinding tidak lagi memesongkan bilik.** Pemegang tengah mengalihkan dinding tegak kepada dirinya sendiri dan sudutnya meluncur di sepanjang dinding yang bercantum. Tahan {{key:Mod}} untuk pergerakan bebas yang lama; {{ui:Segikan}} mengembalikan 90 darjah.
- **Perubahan jenis atau ketebalan pada nod yang bercantum** kini mengekalkan sudut tertutup pada L, T, nod tiga dinding dan di sebelah dinding melengkung.
- **Mengalihkan atau menyalin kumpulan bilik** mengekalkan dinding bercantum di luar kumpulan itu bercantum.
- **Buat semula mengekalkan identiti dimensi dinding.**
- **Memilih dinding dengan Lukis dimatikan** tidak lagi menimbulkan ralat dalam Sifat.
- **Render kembali ke WebGL** apabila GPU tidak dapat bermula, bukannya berhenti.
- **Semakan EnergyPlus boleh dihidupkan** semula.
- **Dokumen dibuka sebagai dialog berpusat.** {{key:Esc}}, X atau klik pada halaman malap menutupnya.
- **Butang {{ui:Pelan}}, {{ui:Pisah}} dan {{ui:3D}} dipaparkan** sebaik sahaja model dibuka, bukan hanya selepas Lukis pernah dihidupkan sekali.

## Had yang jujur

- Tiada apa dicetak pada perkakasan sebenar. Sokongan resin ialah baharu dan belum terbukti.
- Keputusan angin, seismik, konkrit dan elemen terhingga ialah alat semakan untuk jurutera, diperiksa terhadap bentuk tertutup, bukan terhadap bangunan sebenar.
- Scan kepada BIM diuji pada bangunan sintetik, bukan imbasan sebenar, dan hanya mencari bilik segi empat tepat.
- Collada belum dibuka dalam Blender atau Google Earth di sini.
- Anggaran pencahayaan disemak terhadap jejak kami sendiri, bukan terhadap program pencahayaan lain.
- Nombor Afrika Selatan belum disahkan.
- Gaya cantum dinding (butt, mitre, potong rata) dan keutamaan lapisan belum dibina; sudut dibuat mitre.
- Bahasa selain bahasa Inggeris ialah draf mesin.

Yang lain ada dalam [Apa yang belum dibina](topic:not-built-yet). Perubahan sebelumnya ada dalam nota 0.8 dan 0.8.1 di bahagian bawah halaman ini.

## Terdahulu: 0.8 dan 0.8.1

Ini ialah apa yang berubah dalam BimCraft 0.8 (2026-11-01) dan 0.8.1 (2026-11-02), berbanding 0.7. BimCraft kini boleh menjawab soalan tentang bangunan dan mengujinya, dengan orang, bunyi, air, angin dan gempa bumi, dan melukisnya dengan lebih banyak alat; 0.8.1 ialah keluaran pembetulan.

### Baharu

**Uji bangunan**

- **Orang dalam bangunan.** Bahagian {{ui:Orang dalam bangunan}} panel kiri berjalan melalui pemindahan atau kedatangan hari biasa melalui bilik, pintu dan tangga anda. Anda melihat barisan di tempat bangunan menyempit, jarak berjalan terpanjang ke jalan keluar dari setiap bilik dan berapa lama orang terakhir mengambil masa. Tandakan {{ui:Tutup}} pada pintu untuk melihat apa yang berubah, dan tandakan {{ui:Tunjukkan orang dalam paparan 3D}} untuk melihat pejalan. Penemuan pergi ke Masalah. Model orang kasar untuk keputusan reka bentuk, bukan sijil keselamatan kebakaran. Lihat [Berjalan orang melalui bangunan](topic:people-in-the-building).
- **Akustik bilik, dan dengar.** Bahagian {{ui:Akustik bilik}} memberikan setiap bilik masa dengungan mengikut jalur oktaf (Sabine dan Eyring) daripada saiznya dan kemasan yang anda pilih, dan dengan sasaran anda sendiri memberitahu berapa banyak penyerapan yang akan memenuhinya. {{ui:Main dalam bilik ini}} memainkan suara, tepukan, nota petik atau fail bunyi anda sendiri melalui tindak balas impuls yang dikira untuk bilik itu. Angka penyerapan ialah nilai terbitan biasa untuk anda gantikan. Lihat [Akustik bilik](topic:room-acoustics).
- **Main semula banjir, angin dan gempa bumi.** {{ui:Main semula bahaya}} memainkan air yang naik melalui bilik, tekanan angin pada setiap tingkat dan gempa bumi yang menggoncang tingkat, pada pelan atau dongakan dengan gelangsar masa. Model ringkas dengan andaian mereka pada panel; bukan semakan kod. Lihat [Main banjir, angin atau gempa bumi](topic:hazard-playback).
- **Apa yang haus dalam lima puluh tahun.** {{ui:Paparan kitar hayat}} menyenaraikan tingkap, pintu, kemasan dan bumbung dengan jangka hayat masing-masing, tahun ia diganti, dan, apabila anda menaip kos setiap unit, kos mengikut tahun dan nilai sekarangnya. {{ui:Simpan jadual (CSV)}} menulisnya keluar. Jangka hayat ialah angka perancangan. Lihat [Lihat apa yang haus dalam lima puluh tahun](topic:life-cycle-view).
- **Semakan konkrit dan seismik.** Blok {{ui:Anggota konkrit}} dan {{ui:Beban seismik}} dalam tab {{ui:Analisis}} menyemak rasuk dan tiang konkrit kepada ACI 318-19 dan membuat daya sisi setara kepada ASCE 7-22 pada lantai tegar, dengan anjakan tingkat. Untuk jurutera menyemak. Lihat [Semak anggota konkrit dan buat beban seismik](topic:concrete-and-seismic).

**Semak dan laporkan**

- **Semak dengan IDS.** Muatkan fail `.ids` yang diberikan pelanggan kepada anda dan lihat setiap elemen yang tidak memenuhinya dalam Masalah, sebelum anda menyerahkan IFC. Buka {{ui:Semak dengan IDS}} di bawah {{ui:Semakan model}}. Lihat [Semak model terhadap IDS pelanggan](topic:check-against-ids).
- **Tag dan jadual.** Tentukan tag anda sendiri, tetapkannya pada banyak elemen sekaligus, dan buat jadual yang lajur, penapis dan kumpulannya membacanya; tag disimpan dalam IFC. Lihat [Tag dan jadual](topic:tags-and-schedules).
- **Dokumen daripada model.** {{ui:Dokumen daripada model}} mengisi templat spesifikasi daripada IFC yang terbuka dan menyimpannya sebagai PDF, dokumen Word atau Markdown. Lihat [Dokumen daripada model](topic:documents-from-the-model).
- **Bandingkan imbasan dengan model.** Dengan awan titik terbuka, {{ui:Bandingkan}} menilai setiap elemen sebagai dibina, separa dibina, hilang atau tidak dicapai, dan menunjukkan peratus dibina. Lihat [Bandingkan imbasan dengan model](topic:compare-scan-with-model).
- **Karbon dan kos.** Anak tingkap Karbon menambah karbon terkandung daripada jadual faktor yang boleh anda sunting, dan anak tingkap Kos menyebarkan harga merentasi jadual 4D. Faktor yang datang bersama BimCraft ialah generik dan ditandakan tidak disemak. Lihat [Karbon terkandung dan kos](topic:embodied-carbon-and-5d-cost).
- **Sebarang unjuran peta.** {{ui:Ukur}} › {{ui:Sistem koordinat…}} menerima nombor EPSG, zon UTM, nama atau takrifan unjuran anda sendiri. Lihat [Georujukan dengan sebarang unjuran](topic:georeference-any-projection).

**Lukis dan sunting**

- **Alih, Jajar dan Agih.** Di bawah {{ui:Binaan}}; {{key:Shift+M}} memulakan Alih (ringkas {{key:M}} kekal sebagai Ukur). Alih menyalin semasa anda bergerak dengan {{key:C}}, setiap langkah ialah satu buat asal, dan ia bergerak dalam sesi Live TeamWork. Lihat [Alih, salin, jajar dan agih](topic:move-align-distribute).
- **Gambar di bawah pelan.** {{ui:Binaan}} › {{ui:Gambar}} meletakkan PNG, JPEG atau WebP di bawah pelan aras atau pada satah menegak. Tetapkan skala dengan dua titik, dan alihkan, pusingkan, pudarkan dan kunci. Kawasan yang disalin dalam MarkupCraft ditampal pada skala helaiannya. Lihat [Letak gambar di bawah pelan](topic:pictures-as-backgrounds).
- **Dinding daripada imbasan.** Dengan imbasan terbuka, dinding, pintu dan bilik datang sebagai cadangan yang anda simpan atau tolak satu demi satu, dalam satu langkah buat asal. Hanya dinding dalam dua arah yang berserenjang ditemui. Lihat [Tukar imbasan kepada dinding](topic:scan-to-walls).
- **Jejak, pen dan tangga lakaran.** {{ui:Jejak}} menunjukkan aras lain putus-putus di bawah pelan, {{ui:Pen}} memberikan dinding, pintu dan tingkap ketebalan garisnya sendiri dalam satu paparan, dan {{ui:Tangga lakaran}} menukar garisan berjalan kepada tangga. Mesh Wavefront OBJ dibuka. Lihat [Jejak aras, pen dan tangga daripada lakaran](topic:trace-pens-stairs-obj).
- **Bangunan sekeliling alamat.** Bangunan dan petak yang dijumpai oleh Alamat ke tapak CivilCraft tiba sebagai cadangan; anda tandakan yang hendak ditambah. Lihat [Mulakan dari tapak CivilCraft](topic:site-from-civilcraft).
- **Lukisan panel.** {{ui:Binaan}} › {{ui:Lukisan panel}} membingkai dinding, lantai dan bumbung dalam kayu atau keluli ringan, dan menyimpan senarai potongan sebagai CSV serta lukisan bengkel sebagai PDF. Nilai permulaan, bukan reka bentuk struktur. Lihat [Lukisan panel](topic:panel-drawings).
- **Palet simbol dan tumbuhan.** {{ui:Binaan}} › {{ui:Palet simbol}} mencari simbol elektrik dan paip mengikut nama; sumber {{ui:Tumbuhan}} bagi {{ui:Pustaka}} menyenaraikan kira-kira 400 tumbuhan dengan simbol pelan. Lihat [Palet simbol](topic:symbol-palette) dan [Letak tumbuhan](topic:plant-list).

**Paip, saluran dan tenaga**

- **Split, VRF dan fan coil.** Unit dalaman dan luaran dengan sambungannya, dan talian set bersaiz daripada jadual nilai contoh biasa yang boleh anda ubah. Lihat [Split, VRF dan fan coil](topic:split-vrf-fan-coils).
- **Pengiraan.** Anak tingkap Pengiraan menyemak saiz paip bekalan dan saluran dengan kehilangan tekanan, menghalakan kabel melalui talam dan konduit serta menunjukkan pengisiannya, dan mengira pencahayaan daripada fail IES atau EULUMDAT. Nilai lalai dilabelkan; taip nilai kod anda. Lihat [Pengiraan paip, saluran, kabel dan cahaya](topic:mep-calculations).
- **Fail PCF.** **Eksport PCF** alat Paip menulis larian untuk program tegasan paip dan isometrik, dan fail PCF yang dibaca semula melukis paipnya. Lihat [Fail komponen paip](topic:piping-pcf).
- **Solar PV.** Pasang tatasusunan pada bumbung atau tanah, tanaungkannya daripada model, anggarkan tenaga tahunan, semak string dan buat data gambar rajah satu garisan. Modul permulaan dan kehilangan adalah generik. Lihat [Solar PV](topic:solar-pv).
- **Fail EnergyPlus.** Anak tingkap Semak dengan EnergyPlus menulis model sebagai IDF untuk dijalankan dalam EnergyPlus anda sendiri. Menjalankannya dalam pelayar memerlukan binaan yang anda hoskan sendiri dan taip alamatnya; BimCraft tidak membawanya. Lihat [Semak pemanasan dan penyejukan dengan EnergyPlus](topic:check-with-energyplus).

**Gambar dan fail**

- **Pilih enjin render.** {{ui:Render}} mempunyai pilihan {{ui:Enjin}}. Dua enjin terbina dalam kami (Pantas dan Penjejak laluan) kekal sebagai lalai. **Buka dalam** menyimpan adegan sebagai fail USD atau glTF, dan folder projek Unreal sebagai .zip; dalam CadCraft Studio, add-on boleh menambah enjin. Plug-in Unreal yang membuka projek itu belum dikeluarkan. Lihat [Pilih program yang melukis gambar](topic:render-engines).
- **Buat asal Studio.** Dalam CadCraft Studio, BimCraft memberitahu Studio setiap langkah yang selesai supaya Studio dapat membuat asal langkah terakhir anda dalam mana-mana tetingkap yang anda gunakan terakhir. Lihat [Buat asal merentasi aplikasi](topic:undo-across-apps).
- **Add-on dalam fail anda.** IFC merekodkan add-on yang menulis ke dalamnya, dan menawarkan yang tiada pada anda apabila anda membukanya. Lihat [Add-on dalam fail anda](topic:add-ons-in-your-file).

**Dalam setiap aplikasi**

- **Sambungkan AI anda.** Pembantu anda sendiri boleh memacu BimCraft melalui sambungan Studio dan menjawab soalan tentang model, seperti bilik mana yang berada di bawah kawasan tertentu. Studio tidak mempunyai AI sendiri. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} menawarkan Bungkus, 2 baris atau 1 baris; Bungkus kekal sebagai lalai.
- **Peranti input.** Tetapan trackpad, pen, tetikus 3D, pengawal dan MIDI dikongsi oleh semua aplikasi.
- **Masalah dan Langsung.** Panel amaran dan sesi Langsung berfungsi seperti sebelum ini, dengan semakan baharu di atas memberi makan kepada Masalah.
- **Bahasa.** 54 bahasa, sepuluh daripadanya baharu. Yang selain bahasa Inggeris ialah draf mesin yang belum dibaca oleh penutur asli; topik bantuan kebanyakannya dalam bahasa Inggeris.

### Diperbetulkan dalam 0.8.1

- **Reben + susun atur Pelayar projek.** Sisip › Import CAD, Sisip › Imej dan Urus › Unit Projek berkata "Belum dibina dalam BimCraft". Imej kini membuka alat Gambar, Import CAD membuka {{ui:Binaan}} › {{ui:Daripada lukisan…}} (DWG, DXF, PDF atau imbasan), dan Unit Projek membuka {{ui:Tetapan}} › {{ui:Global}} › {{ui:Unit}}. Alih dan Jajar menjalankan alat Alih dan Jajar, Aras membuka {{ui:Tambah aras…}}, Fasa membuka bahagian Fasa pengubahsuaian dan Bahan membuka pustaka bahan.
- **Bahagian DWG classes.** Ia dibaca sebagai jenis yang salah; diperbetulkan dalam BimCraft dan aplikasi lain yang membaca DWG.
- **Bahasa semasa berjalan.** Studio dan edisi terbungkus kini boleh menukar bahasa tanpa dimulakan semula. Ini belum diuji pada setiap platform; beritahu kami jika bahasa tidak berubah.
- **Skrip bundle Archicad.** `archicad_bundle.py`, muat turun berasingan, kini mencari laluan Archicad, memantau folder sehingga 20 saat dan mencuba semula di sebelah bundle.

### Belum ada dalam versi ini

- **Alat keselamatan dan reka bentuk.** Orang dalam bangunan tiada had jarak perjalanan daripada kod bangunan (anda taip hadnya) dan belum disemak dengan tangan pada pelan sebenar. Angka akustik, kitar hayat dan bahaya ialah nilai perancangan, bukan semakan kod.
- **Iklim masa depan dan EnergyPlus.** Tiada iklim masa depan terbina dalam: anda boleh memuatkan fail senario untuk larian banjir. Larian EnergyPlus dalam pelayar tidak termasuk dalam keluaran ini.
- **Reben.** Pengukuran Kuantiti Bahan kekal "Belum dibina" kerana BimCraft tiada senarai kuantiti bahan, dan 54 alat reben yang dilumpuhkan yang lain belum mempunyai alat BimCraft di belakangnya.
- **Tanda tangan dan platform.** Pemasang Windows dan .dmg macOS tidak ditandatangani, jadi SmartScreen menunjukkan {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}, dan macOS memerlukan klik kanan kemudian {{ui:Buka}}. Binaan iPad dan iPhone tidak dibina semula untuk 0.8.1.
- **Ujian halaman sebenar.** Sesetengah ujian pelayar BimCraft yang lama masih gagal dalam halaman ujian kami, seperti sebelum 0.8.1.

Yang lain ada dalam [Apa yang belum dibina](topic:not-built-yet). Perubahan terdahulu ada dalam [Perkara baharu dalam 0.7](topic:whats-new-0-7).
