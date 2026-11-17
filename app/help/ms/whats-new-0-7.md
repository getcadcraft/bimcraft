---
title: Perkara baharu dalam 0.7 (terdahulu)
summary: BimCraft menambah dinding merentasi beberapa aras dan Salin aras ini, dinding daripada PDF dan imbasan, himpunan dinding anda sendiri, keluarga yang lebih kaya, peralatan MEP dengan port, set pertembungan, bukaan dan spul paip, dokumen aset, COBie dan bacaan penderia, langit, matahari, cahaya siang pada grid serta beban pemanasan dan penyejukan, pendaftaran imbasan, paparan langsung dan penjejakan laluan pada kad grafik, STEP dan USD, varian pustaka, dan lebih banyak untuk pembantu AI.
keywords: perkara baharu 0.7, keluaran terdahulu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, dinding merentasi aras, salin aras ini, pdf, imbasan, kesan, dinding daripada pelan, himpunan dinding, lapisan, teras, membran, dimensi rujukan, pustaka bahan, unit paparan, gaya paparan, rangka, gelegar, keluarga, parameter, simbol pelan, hotspot, ulang, tahap perincian, keluarga bersarang, saiz csv, setiap elemen, peralatan, port, sambungan, ruang bebas, bukaan, spul, helaian spul, kimpalan tapak, senarai potongan saluran, dokumen, cobie, penderia, mqtt, suapan langsung, komponen langit tegak, tenaga suria, grid cahaya siang, pemanasan, penyejukan, beban, nilai-u, daftar imbasan, icp, e57, paparan langsung, penjejakan laluan, webgpu, nyahbising, langit fizikal, percampuran cahaya, barisan render, mesin anda, step, usd, bundle projek, bangunkan jisim, varian, pembantu, api add-on, tumbuhan, elektrik, semakan reka bentuk
from: ef226539
---

Ini ialah apa yang berubah dalam BimCraft 0.7, berbanding 0.6. Senarai dikumpulkan mengikut bidang, dengan yang paling penting dahulu.

## Baharu

### Lukis bangunan

- **Dinding merentasi beberapa aras.** Senarai ketinggian alat Dinding menawarkan **Sehingga** mana-mana aras di atas, sebagaimana Sifat untuk dinding yang dipilih. Pelan aras di antaranya menunjukkan dinding lebih cerah, bilik di situ menutup rapat dengannya, dan pintu serta tingkap boleh diletakkan di dalamnya dari pelan tersebut; **Berjalan terus** dalam Sifat menamakan aras yang dilaluinya. Lihat [Tukar dinding, pintu atau tingkap](topic:change-a-wall-or-door#change-a-wall).
- **Salin aras ini.** {{ui:Salin aras ini…}} dalam panel Aras melukis semula dinding aras dengan pintu dan tingkapnya, serta lantai dan siling, di aras lain atau di aras baharu di atasnya, dalam satu langkah buat asal; bilik muncul dengan sendirinya. Lihat [Lukis dinding](topic:draw-walls#levels).
- **Dinding daripada PDF atau imbasan.** {{ui:Binaan}} › {{ui:Daripada lukisan…}} kini menerima PDF (kerja garisan atau imbasan di dalamnya) atau pelan yang diimbas (PNG, JPEG, TIFF, banyak halaman): setiap halaman menjadi dinding, pintu, tingkap dan bilik bagi satu aras, dengan halaman disimpan di bawah pelannya. Penjejakan tidak menggunakan rangkaian atau model terlatih, dan hasilnya ialah apa yang diberikan oleh garisan: semak setiap aras terhadap halamannya. Lihat [Dinding daripada set pelan](topic:walls-from-plans).
- **Himpunan dinding anda sendiri.** {{ui:Himpunan dinding…}} membina jenis dinding lapisan demi lapisan, dengan teras, jurang udara dan membran, serta pratonton berdimensi; {{ui:Pustaka bahan…}} menyimpan bahan projek dalam IFC; {{ui:Anotasi}} › {{ui:Dimensi rujukan}} mengukur ke muka dan garisan teras, dan mengikut dinding apabila ia berubah. Daripada penyumbang komuniti, Doc (drsurfbum). Lihat [Himpunan dinding dan dimensi rujukan](topic:wall-assemblies).
- **Unit paparan dan kawalan paparan.** {{ui:Unit}} pada bar alat menunjukkan panjang dalam kaki dan inci, inci, kaki perpuluhan, milimeter, sentimeter atau meter, dalam dimensi, jadual, koordinat, pengukuran dan keratan. {{ui:Pelan}}, {{ui:Pisah}} dan {{ui:3D}} berada dalam bar alat, pemisah boleh diseret (atau dialihkan dari papan kekunci), {{ui:Berlorek}}, {{ui:Tepi}} dan {{ui:Rangka dawai}} berada di sebelah kub paparan, dan kecerunan bumbung, papan fasia dan soffit mengubah bumbung yang dipilih serta-merta. Daripada penyumbang komuniti, Joel (yisraelk). Lihat [Lukis dinding](topic:draw-walls#levels).
- **Gelegar lantai mengikut rentang.** {{ui:Rangka}} boleh menyusun gelegar kejuruteraan (praliminari) serta kayu bergergaji, memilih siri dan kedalaman terkecil yang tersenarai yang mencapai rentang, 16" atau 24" pusat ke pusat, dalam mana-mana arah; ia masuk ke IFC dan senarai potongan. Cadangan daripada jadual terbitan pembuat, bukan kejuruteraan. Juga daripada Joel. Lihat [Rangka dinding, lantai dan bumbung](topic:framing).
- **Lebih banyak peranti elektrik.** {{ui:Elektrik}} menambah soket data, telefon dan audio-video, suis pemilih, pemasa, termostat, pengesan asap dan haba, stesen tarik dan siren, kipas, meter tenaga dan sub-papan agihan, setiap satu dengan kelas IFC sendiri. Lihat [Pelan elektrik](topic:electrical-plan).

### Keluarga

- **Keluarga boleh melakukan lebih banyak.** Parameter boleh berupa nombor bulat, teks, bahan, pen atau isian; keluarga boleh melukis simbol pelannya sendiri, mengulang pepejal, menandakan bahagian untuk perincian yang lebih kasar, memegang keluarga lain (kaki dalam meja), dan mempunyai hotspot yang anda seret, juga pada elemen yang diletakkan dalam pelan. Saiz datang daripada jadual CSV, dan parameter yang ditandakan **Setiap elemen** membolehkan dua pintu bersaiz sama berbeza. Lihat [Sunting keluarga](topic:family-editor#plan-symbol) dan [Keluarga dan saiznya](topic:families#sizes-from-a-table).

### Paip, saluran dan peralatan

- **Peralatan dengan port.** {{ui:Binaan}} › {{ui:Peralatan}} meletakkan pengendali udara generik, kipas sebaris, pam, dandang, pemanas air, unit terminal, penyebar, grill atau tangki, bersaiz mengikut nilai yang anda taip, dengan sambungan paip dan salurannya sebagai port. Setiap satu disimpan sebagai kelas IFCnya dengan port IFC. Lihat [Peralatan MEP dengan port](topic:mep-equipment).
- **Larian bersambung.** Paip atau saluran yang bermula pada port mengambil saiz dan sistemnya dan kekal tetap padanya: alihkan pam dan paipnya mengikut. {{ui:Semak sambungan}} menyenaraikan port terbuka, hujung longgar, ketidakpadanan saiz dan sistem, serta larian yang tiada apa membekalkan. Lihat [Sambungkan paip dan saluran ke peralatan](topic:mep-connections).
- **Paip dan saluran berbanding struktur.** {{ui:Semakan pertembungan}} mempunyai set siap sedia dan {{ui:Paip dan saluran × struktur}} dalam satu klik; {{ui:Semak ruang bebas}} menggunakan penebat setiap larian ditambah jurang yang anda taip; {{ui:Bukaan diperlukan}} menyenaraikan tempat larian melalui dinding dan papak, sebagai isu CSV dan BCF. Tiada apa dipotong. Lihat [Semak paip dan saluran terhadap struktur](topic:mep-against-structure).
- **Spul paip keluli.** Larian keluli dipotong kepada spul bernombor pada panjang terpanjang dan pada **Kimpalan tapak** yang anda letakkan; {{ui:Helaian spul (PDF)}} memberikan satu halaman bagi setiap spul dengan pandangan isometriknya, panjang potongan, sambungan, kimpalan dan senarai bahan, dan {{ui:Senarai potongan saluran}} menyenaraikan kepingan saluran lurus. Lihat [Spul paip keluli dan helaian spul](topic:pipe-spools).

Ini ialah alat lukisan dan koordinasi, bersaiz oleh jurutera: tiada aliran, tekanan atau pengimbangan.

### Menjalankan bangunan

- **Dokumen bagi setiap aset.** Tab {{ui:Aset}} memautkan manual, waranti, foto dan lukisan kepada aset melalui nama fail di sebelah IFC atau alamat web; hanya pautan itu yang masuk ke IFC. Lihat [Dokumen](topic:assets-and-maintenance#documents).
- **Hamparan COBie.** {{ui:Simpan sebagai COBie (.xlsx)}} menulis buku kerja serahan COBie 2.4, dan buku kerja COBie yang dibaca semula menyenaraikan setiap perubahan sebelum satu {{ui:Guna}}. Ia belum melalui pengesah COBie. Lihat [Hamparan COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Bacaan penderia dan suapan langsung.** Buka CSV bacaan, atau {{ui:Sambung}} terus dari pelayar ke broker MQTT anda sendiri atau alamat yang dijawab oleh sistem bangunan anda: setiap aset menunjukkan bacaan terkininya dan carta, diwarnakan pada model, dan ditandakan jika di luar had yang disimpan dalam IFC. Bacaan kekal dalam tab; kata laluan tidak pernah disimpan. Lihat [Bacaan penderia](topic:assets-and-maintenance#sensor-readings) dan [Bacaan langsung](topic:assets-and-maintenance#live-readings).

### Cahaya siang dan tenaga

- **Langit dan matahari pada setiap tingkap.** Tab {{ui:Cahaya siang}} memberikan setiap tingkap komponen langit tegak dan sudut halangannya, mengikuti matahari melalui tarikh dengan {{ui:Matahari melalui tingkap pada tarikh}}, dan mengira {{ui:Faktor cahaya siang pada grid}} merentasi setiap bilik, dilukis pada pelannya. Lihat [Komponen langit tegak bagi setiap tingkap](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Beban pemanasan dan penyejukan.** {{ui:Beban pemanasan dan penyejukan}} mengira kehilangan haba setiap bilik, pemanasannya sepanjang setahun daripada darjah-hari dan puncak penyejukannya, daripada apa yang membataskannya dalam model dan nilai-U setiap elemen; nilai-U yang ditaip di sana ditulis ke dalam IFC. Lihat [Anggarkan beban pemanasan dan penyejukan](topic:heating-and-cooling-loads).

Kedua-duanya ialah alat reka bentuk mengikut kaedah yang diterbitkan, bukan pengiraan pematuhan, dan setiap panel menyatakannya.

### Imbasan

- **Daftar beberapa imbasan.** {{ui:Daftar imbasan…}} (pada panel permulaan, atau dalam {{ui:Tunjuk}}) meletakkan imbasan dalam satu bingkai mengikut pasangan titik yang dipilih atau sasaran yang ditaip, memperhalusinya dengan ICP titik ke titik kemudian titik ke satah, menyimpan pendaftaran sebagai fail projek kecil dan menulis awan yang didaftarkan sebagai satu fail LAS atau E57. Lihat [Daftar beberapa imbasan menjadi satu](topic:register-scans).

### Gambar dan paparan langsung

- **Paparan langsung.** {{ui:Paparan langsung}} pada bar alat menunjukkan model dalam rupa masa nyata di sebelah paparan 3D, mengikutinya dan setiap perubahan, dengan Jalan, masa siang dan bulan; {{ui:Paparan langsung dalam tetingkap baharu}} meletakkannya pada skrin kedua. Lihat [Paparan langsung](topic:live-view).
- **Penjejakan laluan pada kad grafik.** Dengan WebGPU, {{ui:Render}} › {{ui:Kualiti tinggi (penjejakan laluan)}} menjalankan penjejak laluan CadCraft sendiri pada kad grafik, boleh berhenti dan {{ui:Sambung semula}}, dan dinyahbising pada akhirnya; tanpa WebGPU ia menggunakan penjejak laluan WebGL seperti sebelum ini. Lihat [Kualiti tinggi](topic:render#high-quality).
- **Lebih banyak dalam dialog Render** (pada kad grafik, jadi ia memerlukan WebGPU): langit fizikal dan gambar langit, profil cahaya IES, kamera dengan f-stop, kedalaman medan, perspektif dua titik, keseimbangan putih dan panorama 360°, gred untuk gambar siap, percampuran cahaya dan elemen render selepas render, kabus, asap dan kaustik, menyimpan sebagai PNG 16-bit, EXR atau fail render, dan barisan render. Lihat [Langit dan profil cahaya pada kad grafik](topic:render#skies-and-light-profiles-on-the-graphics-card) dan [Barisan render](topic:render#the-render-queue).
- **Mesin anda.** {{ui:Tetapan}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Mesin anda}} menunjukkan grafik, teras pemproses dan memori yang dibenarkan oleh pelayar ini untuk aplikasi, dan tahap render bermula. Lihat [Apa yang mesin anda render dengannya](topic:your-machine).

### Fail dan aplikasi lain

- **Fail STEP dibuka.** Bahagian `.step` atau `.stp`, peralatan atau model pembekal (AP203, AP214, AP242) dibuka sebagai model IFC kecil, dengan setiap pepejal menjadi elemen yang boleh anda periksa, keratkan, ukur dan simpan sebagai IFC. Warna dan nama bahagian pemasangan belum dibaca. Lihat [Fail yang dibuka dan disimpan oleh BimCraft](topic:files#what-it-opens).
- **Eksport USD.** {{ui:USD}} pada bar alat menulis model terbuka sebagai `.usda`, `.usdc` atau `.usdz`, disusun mengikut tapak, bangunan, tingkat dan disiplin, dengan kelas IFC, GlobalId dan sifat setiap elemen. Lihat [Eksport model sebagai USD](topic:usd).
- **Jisim daripada CivilCraft.** Jisim bangunan yang dihantar dari pandangan tapak CivilCraft menunjukkan nombor kajiannya dalam Sifat, dan {{ui:Bangunkan jisim ini}} membina dinding pada setiap aras dan lantai daripadanya dalam satu langkah buat asal. Lihat [Bangunkan jisim bangunan daripada kajian tapak](topic:develop-a-mass).
- **Item pustaka dengan varian.** Item yang datang dalam beberapa varian mempunyai pilihan {{ui:Varian}} dalam tab {{ui:Pustaka}}; elemen yang diletakkan mengekalkan variannya dalam IFC, {{ui:Tukar item…}} menyenaraikan varian lain, dan salinan serta kemas kini mengekalkannya. Lihat [Letakkan dan tukar item pustaka yang mempunyai varian](topic:library-variants).
- **Bundle projek dalam folder.** {{ui:Buka folder}} menyenaraikan fail `.ccbundle.zip` di bawah {{ui:Bundle projek}}, dan setiap susun atur dalam bundle mempunyai **Buka dalam …**: PDF ke MarkupCraft, DWG ke CadCraft, dalam tab baharu. Lihat [Buka susun atur](topic:open-project-bundle#open-a-layout).

### Pembantu dan add-on

- **Lebih banyak untuk pembantu AI.** Pembantu kini boleh menamakan semula elemen dan menetapkan nilai sifat, mengalih dan memadam elemen, menukar dinding, pintu dan tingkap, mengeksport USD, serta merender gambar atau menjalankan barisan render; setiap perubahan ialah satu langkah buat asal. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Add-on boleh membina dalam model.** API add-on 1.1 membenarkan add-on membuat perubahan dalam model sebagai satu langkah buat asal (ia bergerak dalam Live TeamWork), membaca model, dan membaca larian paip dan saluran, port, peralatan dan spul.
- **Add-on Plant** (dimatikan sehingga anda menghidupkannya dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Add-on}}): spesifikasi paip diperiksa terhadap larian, lukisan isometrik larian sebagai SVG dan DXF dengan senarai bahan, peralatan proses generik dengan muncung diletakkan dalam model, penghala antara dua port, dan semakan susun atur kilang. Ia alat lukisan, bukan kelulusan kejuruteraan; perkataannya hanya dalam bahasa Inggeris.

## Diubah

- **Rumah pertama pada komputer riba.** Pada skrin bersaiz komputer riba BimCraft bermula dengan pelan sahaja, bar Lukis ialah panel sempit dengan pelan dipasang di sebelahnya, pelan dan paparan 3D kembali ke paparan apabila lukisan meninggalkannya, paparan 3D membingkai keseluruhan rumah dalam anak tingkap sempit, dan pintu serta tingkap dipilih sebelum garisan dimensi.
- **Menyimpan gambar.** **Simpan PNG** dalam dialog Render kini ialah {{ui:Simpan}}, dengan {{ui:Simpan sebagai}} di sebelahnya untuk format lain. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Tab Analisis** mempunyai blok {{ui:Semakan reka bentuk}}: ia membuat kombinasi beban ASCE 7 atau EN 1990 untuk kes anda dan menyemak setiap bentuk-I keluli gelek (saiz W, S, IPE, HEA atau HEB mengikut nama profil dan saiznya) kepada AISC 360 atau EN 1993-1-1, menunjukkan berapa banyak kapasitinya digunakan. Ia alat bantu sehingga jurutera menyemaknya; bentuk dikimpal dan bahagian lain dinyatakan sebagai "tidak disemak". Lihat [Semakan reka bentuk](topic:frame-analysis#design-checks).

## Diperbetulkan

- Buat semula selepas langkah yang mencipta saiz keluarga baharu gagal ("tiada saiz"). Setiap langkah kini membuat GlobalId IFC yang sama semula apabila buat semula, jadi buat semula berfungsi untuk keluarga dan setiap perubahan lain.
- Apabila dua orang menyimpan keluarga yang sama (dalam sesi Live TeamWork atau dua tetingkap), simpanan kedua secara senyap menggantikan perubahan yang pertama. Ia kini menolak dan menyatakan cara melihat perubahan mereka dan membuat perubahan anda semula.
- Model dalam kaki tinjauan AS dibaca sebagai 0.3048 m setiap kaki dan bukannya 0.3048006096 m, yang mengalihkan setiap IFC yang dikoordinatkan secara geografi dalam kaki AS pada peta.
- Penyunting keluarga: menutupnya tidak lagi menjatuhkan fokus papan kekunci ke halaman, butang Simpan kekal kelihatan pada telefon, dan medannya tidak lagi menyebabkan telefon membesar.

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai setiap satu untuk panjang, luas, isipadu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrifan unit (kaki tinjauan AS ialah unitnya sendiri). Matikan unit yang tidak pernah anda guna dan ia keluar daripada senarai unit; tandai satu dan kerja baharu bermula dalam unit itu. Fail sentiasa mengekalkan unitnya sendiri. Dalam BimCraft senarai {{ui:Unit}} pada bar alat mengikut suis, bintang menetapkan unit paparan sehingga anda memilihnya pada bar alat (pilihan awal anda dikekalkan), dan kotak panjang alat lukisan menerima tanda mana-mana unit, seperti `3.5 m` atau `10 US ft`. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur yang lebih padat dan panel yang kemas.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekap atau mengapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk menggelongsor ke tepi, atau sembunyikannya dan bawanya kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Dialog boleh dialihkan.** Seret dialog mengikut bar tajuknya keluar dari lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk meletakkannya di tengah semula. Lihat [Alihkan dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang dikerjakan untuk pembantu anda sendiri (kemas kini lukisan, plot set, semak lukisan, tanya soalan tentang model, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukan, dan setiap satu diulang oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris, dengan beberapa dalam bahasa Sepanyol.
- **CadCraft Studio** menyatakan sebab semakan kemas kini gagal (tiada fail untuk sistem anda lagi, tiada rangkaian, tandatangan buruk) dan bukannya hanya "Selesai", dan berhenti membawa kembali kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail pada getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Sudut dan senarai cerun dalam {{ui:Unit}} disimpan, tetapi tiada kotak yang membacanya lagi.
- Penjejakan laluan pada kad grafik, tambahan dalam dialog Render dan barisan render memerlukan WebGPU (tanpanya, kualiti tinggi menggunakan penjejak laluan WebGL); paparan langsung menggunakan WebGPU jika pelayar mempunyainya, jika tidak WebGL 2. Ia diuji di sini hanya pada pengganti grafik perisian, belum pada kad grafik sebenar. Paparan langsung tiada serakan atau perkongsian dalam BimCraft (milik ModelCraft ada).
- Merender rakaman jalan sebagai video belum dibina dalam BimCraft.
- Semakan reka bentuk: bentuk-I yang nama profil IFCnya bukan saiz W, S, IPE, HEA atau HEB (atau yang saizannya berbeza daripadanya) dianggap dikimpal dan kembali sebagai "tidak disemak", begitu juga tiub, sudut, saluran, bahagian langsing dan kilasan. Tiada jurutera menyemak semakan itu lagi.
- Elemen yang dilukis tidak boleh disalin satu persatu, dipusing, dicerminkan atau dijadikan tatasusunan (keseluruhan aras boleh disalin), dan tiada dinding boleh dipisahkan, alat Teks atau dinding tirai. Dinding yang bertemu dinding dari aras bawah pada aras atas tidak dipotong ke dalam badan 3D dinding itu, dan jadual menyenaraikan bukaan aras atas di bawah aras dindingnya sendiri.
- Keluarga: pustaka keluarga yang dikongsi antara projek belum dibina. Keluarga dan aras yang disalin belum dibuka dalam program BIM lain.
- MEP: peralatan bersifat generik (tiada data pembuat); tee dan pengecil pada spul keluli adalah generik, bukan daripada jadual ASME B16.9; port item pustaka yang diletakkan dari tab {{ui:Pustaka}} tidak ditulis ke dalam IFC; tiada apa disemak oleh jurutera.
- Add-on Plant belum boleh melukis larian yang dihalakan ke dalam model, menomborkan spul pada isometriknya, atau menyemak susun atur peralatan yang diletakkan dari pustaka.
- Tumbuhan dari pustaka tumbuhan CivilCraft belum boleh diletakkan dari tab {{ui:Pustaka}} BimCraft.
- Tenaga: tiada simulasi setiap jam, tiada kaedah ISO 52016-1 dan tiada fail iklim. Aset: tiada kembar yang dihoskan yang menyimpan bacaan atau menghantar amaran ketika BimCraft ditutup.
- Pendaftaran imbasan telah dicuba pada imbasan ujian, belum pada set imbasan pengimbas sebenar; fail E57 masih dibuka sehingga 6 juta titik dan 512 MB.
- Bundle projek dibuka dalam BimCraft sahaja (aplikasi lain mengambil susun atur melalui **Buka dalam …**), dan bundle serta kit dua program telah diuji terhadap pengganti, belum dengan Archicad atau Revit sendiri.

Yang lain ada dalam [Apa yang belum dibina](topic:not-built-yet).
