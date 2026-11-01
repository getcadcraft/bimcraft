---
title: Perkara baharu dalam 0.7
summary: BimCraft menambah dinding merentasi beberapa aras dan Salin aras ini, dinding daripada PDF dan imbasan, pemasangan dinding sendiri, keluarga yang lebih kaya, peralatan MEP dengan port, set perlanggaran, bukaan dan helaian spul paip, dokumen aset, COBie dan bacaan sensor, langit, matahari, cahaya siang pada grid dan beban pemanasan serta penyejukan, pendaftaran imbasan, paparan langsung dan penjejakan laluan pada kad grafik, STEP dan USD, varian pustaka, dan lebih banyak untuk pembantu AI.
keywords: perkara baharu, what's new, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, dinding merentasi aras, salin aras ini, pdf, imbasan, kesan, dinding daripada pelan, pemasangan dinding, lapisan, teras, membran, dimensi rujukan, pustaka bahan, unit paparan, gaya pandangan, rangka, gelagar, keluarga, parameter, simbol pelan, titik panas, ulang, tahap perincian, keluarga bersarang, saiz CSV, setiap elemen, peralatan, port, sambungan, ruang bebas, bukaan, spul, helaian spul, kimpalan tapak, senarai potongan saluran, dokumen, cobie, sensor, mqtt, suapan langsung, komponen langit menegak, perolehan suria, grid cahaya siang, pemanasan, penyejukan, beban, nilai-u, daftar imbasan, icp, e57, paparan langsung, penjejakan laluan, webgpu, nyahbunyi, langit fizikal, campuran cahaya, baris gilir render, mesin anda, step, usd, bundle projek, bangunkan jisim, varian, pembantu, API add-on, loji, elektrik, semakan reka bentuk
from: 5c27b80a
---

Inilah yang berubah dalam BimCraft 0.7 berbanding 0.6. Senarai ini dikumpulkan mengikut kawasan, dengan yang paling penting di hadapan.

## Baharu

### Lukis bangunan

- **Dinding merentasi beberapa aras.** Senarai ketinggian alat Dinding menawarkan **Sehingga** mana-mana aras yang lebih tinggi, seperti yang Properties lakukan untuk dinding yang dipilih. Pelan aras di antaranya menunjukkan dinding dengan lebih cerah, bilik di situ dirapatkan padanya, dan pintu serta tingkap boleh diletakkan di dalamnya dari pelan tersebut; **Melalui** dalam Properties menamakan aras yang dilaluinya. Lihat [Tukar dinding, pintu atau tingkap](topic:change-a-wall-or-door#change-a-wall).
- **Salin aras ini.** {{ui:Copy this level…}} dalam panel Aras melukis semula dinding aras dengan pintu dan tingkapnya, lantai dan siling, pada aras lain atau pada aras baharu di atasnya, dalam satu langkah buat asal; bilik muncul dengan sendirinya. Lihat [Lukis dinding](topic:draw-walls#levels).
- **Dinding daripada PDF atau imbasan.** {{ui:Build}} › {{ui:From a drawing…}} kini menerima PDF (kerja garisan atau imbasan di dalamnya) atau pelan yang diimbas (PNG, JPEG, TIFF, banyak halaman): setiap halaman menjadi dinding, pintu, tingkap dan bilik bagi satu aras, dengan halaman disimpan di bawah pelannya. Kesan itu tidak menggunakan rangkaian dan tiada model terlatih, dan hasilnya ialah apa yang diberikan oleh garisan itu: semak setiap aras dengan halamannya. Lihat [Dinding daripada set pelan](topic:walls-from-plans).
- **Pemasangan dinding sendiri.** {{ui:Wall assemblies…}} membina jenis dinding lapis demi lapis, dengan teras, jurang udara dan membran, dan pratonton berdimensi; {{ui:Material library…}} menyimpan bahan projek dalam IFC; {{ui:Annotate}} › {{ui:Reference dimension}} mengukur ke muka dan garis teras serta mengikut dinding apabila ia berubah. Daripada penyumbang komuniti, Doc (drsurfbum). Lihat [Pemasangan dinding dan dimensi rujukan](topic:wall-assemblies).
- **Unit paparan dan kawalan pandangan.** {{ui:Units}} pada bar alat menunjukkan panjang dalam kaki dan inci, inci, kaki perpuluhan, milimeter, sentimeter atau meter, dalam dimensi, jadual, koordinat, ukuran dan keratan. {{ui:Plan}}, {{ui:Split}} dan {{ui:3D}} terdapat pada bar alat; pemisah boleh diseret (atau dialihkan dari papan kekunci), {{ui:Shaded}}, {{ui:Edges}} dan {{ui:Wireframe}} berada di sebelah ViewCube, dan kecerunan bumbung, fascia serta soffit menukar bumbung yang dipilih serta-merta. Daripada penyumbang komuniti, Joel (yisraelk). Lihat [Lukis dinding](topic:draw-walls#levels).
- **Rangka gelagar lantai mengikut rentang.** {{ui:Framing}} boleh membentangkan gelagar kejuruteraan (prabinaan) serta kayu bergergaji, dengan memilih siri dan kedalaman terkecil yang mencapai rentang, 16" atau 24" pusat-ke-pusat, dalam mana-mana arah; ia dimasukkan ke dalam IFC dan senarai potongan. Cadangan daripada jadual yang diterbitkan pengilang, bukan kejuruteraan. Juga daripada Joel. Lihat [Rangka dinding, lantai dan bumbung](topic:framing).
- **Lebih banyak peranti elektrik.** {{ui:Electrical}} menambah soket data, telefon dan audio-video, suis pemilih, pemasa, termostat, pengesan asap dan haba, stesen tarik dan siren, kipas, meter tenaga serta panel sub, setiap satu dengan kelas IFC sendiri. Lihat [Pelan elektrik](topic:electrical-plan).

### Keluarga

- **Keluarga melakukan lebih banyak.** Parameter boleh menjadi nombor bulat, teks, bahan, pen atau isian; sesuatu keluarga boleh melukis simbol pelannya sendiri, mengulang pepejal, menanda bahagian untuk tahap perincian yang lebih kasar, memegang keluarga lain (kaki dalam jadual), dan mempunyai titik panas yang anda seret, juga pada elemen yang diletakkan dalam pelan. Saiz datang dari jadual CSV, dan parameter yang ditanda **Setiap elemen** membolehkan dua pintu bersaiz sama berbeza. Lihat [Sunting keluarga](topic:family-editor#plan-symbol) dan [Keluarga dan saiznya](topic:families#sizes-from-a-table).

### Paip, saluran dan peralatan

- **Peralatan dengan port.** {{ui:Build}} › {{ui:Equipment}} meletakkan pengendali udara generik, kipas sebaris, pam, dandang, pemanas air, unit terminal, penyebar, grill atau tangki, bersaiz mengikut nilai yang anda taip, dengan sambungan paip dan salurannya sebagai port. Setiap satu disimpan sebagai kelas IFC dengan port IFC. Lihat [Peralatan MEP dengan port](topic:mep-equipment).
- **Laluan bersambung.** Paip atau saluran yang bermula pada port mengambil saiz dan sistemnya serta kekal terikat padanya: alihkan pam dan paipnya akan mengikut. {{ui:Check connections}} menyenaraikan port terbuka, hujung longgar, ketidakpadanan saiz dan sistem, serta laluan yang tiada bekalan. Lihat [Sambungkan paip dan saluran ke peralatan](topic:mep-connections).
- **Paip dan saluran terhadap struktur.** {{ui:Clash check}} mempunyai set sedia dan {{ui:Pipes and ducts × structure}} dalam satu klik; {{ui:Check clearances}} menggunakan penebat setiap laluan ditambah jurang yang anda taip; {{ui:Openings needed}} menyenaraikan tempat laluan melalui dinding dan papak, sebagai isu CSV dan BCF. Tiada apa-apa dipotong. Lihat [Semak paip dan saluran terhadap struktur](topic:mep-against-structure).
- **Helaian spul paip keluli.** Laluan keluli dipotong kepada spul bernombor pada panjang terpanjang dan pada {{ui:Field weld}} yang anda letakkan; {{ui:Spool sheets (PDF)}} memberi satu halaman bagi setiap spul dengan pandangan isometriknya, panjang potongan, sambungan, kimpalan dan senarai bahan, dan {{ui:Duct cut list}} menyenaraikan kepingan saluran lurus. Lihat [Spul paip keluli dan helaian spul](topic:pipe-spools).

Ini ialah alat lukisan dan penyelarasan, bersaiz oleh jurutera: tiada aliran, tekanan atau pengimbangan.

### Mengurus bangunan

- **Dokumen setiap aset.** Tab {{ui:Assets}} memautkan manual, waranti, foto dan lukisan kepada aset melalui nama fail di sebelah IFC atau alamat web; hanya pautan itu dimasukkan ke dalam IFC. Lihat [Dokumen](topic:assets-and-maintenance#documents).
- **Hamparan COBie.** {{ui:Save as COBie (.xlsx)}} menulis buku kerja serah COBie 2.4, dan buku kerja COBie yang dibaca semula menyenaraikan setiap perubahan sebelum satu {{ui:Apply}}. Ia belum melalui pengesah COBie. Lihat [Hamparan COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Bacaan sensor dan suapan langsung.** Buka CSV bacaan, atau {{ui:Connect}} terus dari pelayar ke pelayar MQTT anda sendiri atau alamat yang dijawab oleh sistem bangunan anda: setiap aset memaparkan bacaan terkininya dan carta, diwarnakan pada model, dan ditandakan apabila berada di luar had yang disimpan dalam IFC. Bacaan kekal dalam tab; kata laluan tidak pernah disimpan. Lihat [Bacaan sensor](topic:assets-and-maintenance#sensor-readings) dan [Bacaan langsung](topic:assets-and-maintenance#live-readings).

### Cahaya siang dan tenaga

- **Langit dan matahari pada setiap tingkap.** Tab {{ui:Daylight}} memberi setiap tingkap komponen langit menegaknya dan sudut halangan, mengikut matahari sepanjang tarikh dengan {{ui:Sun through the windows on a date}}, serta mengira {{ui:Daylight factor on a grid}} merentasi setiap bilik, dilukis pada pelannya. Lihat [Komponen langit menegak bagi setiap tingkap](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Beban pemanasan dan penyejukan.** {{ui:Heating and cooling loads}} mengira kehilangan haba setiap bilik, pemanasannya sepanjang setahun daripada hari-darjah dan puncak penyejukannya, daripada apa yang membatasinya dalam model dan nilai-U setiap elemen; nilai-U yang ditaip di sana ditulis ke dalam IFC. Lihat [Anggar beban pemanasan dan penyejukan](topic:heating-and-cooling-loads).

Kedua-duanya ialah alat bantu reka bentuk mengikut kaedah yang diterbitkan, bukan pengiraan pematuhan, dan setiap panel menyatakannya.

### Imbasan

- **Daftar beberapa imbasan.** {{ui:Register scans…}} (pada panel mula, atau dalam {{ui:Show}}) meletakkan imbasan dalam satu bingkai mengikut pasangan titik yang dipilih atau sasaran yang ditaip, memperhalusinya dengan ICP titik ke titik kemudian titik ke satah, menyimpan pendaftaran sebagai fail projek kecil dan menulis awan yang didaftarkan sebagai satu fail LAS atau E57. Lihat [Daftar beberapa imbasan menjadi satu](topic:register-scans).

### Gambar dan paparan langsung

- **Paparan langsung.** {{ui:Live view}} pada bar alat menunjukkan model dengan rupa masa nyata di sebelah pandangan 3D, mengikutinya dan setiap perubahan, dengan Walk, masa siang dan bulan; {{ui:Live view in a new window}} meletakkannya pada skrin kedua. Lihat [Paparan langsung](topic:live-view).
- **Penjejakan laluan pada kad grafik.** Dengan WebGPU, {{ui:Render}} › {{ui:High quality (path traced)}} menjalankan penjejak laluan CadCraft sendiri pada kad grafik, boleh berhenti dan {{ui:Resume}}, dan dinyahbunyi pada akhirnya; tanpa WebGPU ia menggunakan penjejak laluan WebGL seperti sebelumnya. Lihat [Kualiti tinggi](topic:render#high-quality).
- **Lebih banyak dalam dialog Render** (pada kad grafik, jadi ia memerlukan WebGPU): langit fizikal dan gambar langit, profil cahaya IES, kamera dengan f-stop, kedalaman medan, perspektif dua titik, keseimbangan putih dan panorama 360°, gred untuk gambar siap, campuran cahaya dan elemen render selepas render, kabus, asap dan kaustik, menyimpan sebagai PNG 16-bit, EXR atau fail render, serta baris gilir render. Lihat [Langit dan profil cahaya pada kad grafik](topic:render#skies-and-light-profiles-on-the-graphics-card) dan [Baris gilir render](topic:render#the-render-queue).
- **Mesin anda.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} menunjukkan grafik, teras pemproses dan memori yang dibenarkan oleh pelayar ini untuk aplikasi, serta tahap tempat render bermula. Lihat [Apa yang dirender oleh mesin anda](topic:your-machine).

### Fail dan aplikasi lain

- **Fail STEP dibuka.** Bahagian `.step` atau `.stp`, sekeping peralatan atau model pembekal (AP203, AP214, AP242) dibuka sebagai model IFC kecil, setiap pepejal menjadi elemen yang boleh anda periksa, keratkan, ukur dan simpan sebagai IFC. Warna dan nama bahagian himpunan belum dibaca. Lihat [Fail yang dibuka dan disimpan oleh BimCraft](topic:files#what-it-opens).
- **Eksport USD.** {{ui:USD}} pada bar alat menulis model yang dibuka sebagai `.usda`, `.usdc` atau `.usdz`, disusun mengikut tapak, bangunan, tingkat dan disiplin, dengan kelas IFC, GlobalId dan sifat setiap elemen. Lihat [Eksport model sebagai USD](topic:usd).
- **Jisim daripada CivilCraft.** Jisim bangunan yang dihantar dari pandangan tapak CivilCraft memaparkan nombor kajiannya dalam Properties, dan {{ui:Develop this mass}} membina dinding pada setiap aras dan satu lantai daripadanya dalam satu langkah buat asal. Lihat [Bangunkan jisim bangunan daripada kajian tapak](topic:develop-a-mass).
- **Item pustaka dengan varian.** Item yang datang dalam beberapa varian mempunyai pilihan {{ui:Variant}} dalam tab {{ui:Library}}; elemen yang diletakkan mengekalkan variannya dalam IFC, {{ui:Swap item…}} menyenaraikan varian lain, dan salinan serta kemas kini mengekalkannya. Lihat [Letak dan tukar item pustaka yang mempunyai varian](topic:library-variants).
- **Bundle projek dalam folder.** {{ui:Open a folder}} menyenaraikan fail `.ccbundle.zip` di bawah {{ui:Project bundles}}, dan setiap susun atur dalam bundle mempunyai **Open in …**: PDF ke MarkupCraft, DWG ke CadCraft, dalam tab baharu. Lihat [Buka susun atur](topic:open-project-bundle#open-a-layout).

### Pembantu AI dan add-on

- **Lebih banyak untuk pembantu AI.** Pembantu kini boleh menamakan semula elemen dan menetapkan nilai sifat, mengalih dan memadam elemen, menukar dinding, pintu dan tingkap, mengeksport USD, serta merender gambar atau menjalankan baris gilir render; setiap perubahan ialah satu langkah buat asal. Lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
- **Add-on boleh membina dalam model.** API add-on 1.1 membolehkan add-on membuat perubahan dalam model sebagai satu langkah buat asal (ia bergerak dalam Live TeamWork), membaca model, dan membaca laluan paip dan saluran, port, peralatan dan spul.
- **Add-on Plant** (dimatikan sehingga anda menghidupkannya dalam {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): spesifikasi paip disemak terhadap laluan, lukisan isometrik laluan sebagai SVG dan DXF dengan senarai bahan, peralatan proses generik dengan nozel diletakkan dalam model, penghala antara dua port, dan semakan susun atur kilang. Alat bantu lukisan, bukan kelulusan kejuruteraan; perkataannya dalam bahasa Inggeris sahaja.

## Diubah

- **Rumah pertama pada komputer riba.** Pada skrin bersaiz komputer riba BimCraft bermula dengan pelan sahaja, bar Lukis ialah panel sempit dengan pelan dimuatkan di sebelahnya, pelan dan pandangan 3D kembali kelihatan apabila lukisan keluar dari keduanya, pandangan 3D membingkai keseluruhan rumah dalam anak tetingkap sempit, dan pintu serta tingkap dipilih sebelum garisan ukuran.
- **Menyimpan gambar.** **Save PNG** dalam dialog Render kini ialah {{ui:Save}}, dengan {{ui:Save as}} di sebelahnya untuk format lain. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Tab Analisis** mempunyai blok {{ui:Design checks}}: ia membuat gabungan beban ASCE 7 atau EN 1990 bagi kes anda, dan menyemak setiap bentuk-I keluli gelek (saiz W, S, IPE, HEA atau HEB mengikut nama profilnya dan saiz) kepada AISC 360 atau EN 1993-1-1, dengan menunjukkan berapa banyak kapasitinya yang digunakan. Alat bantu sehingga jurutera menyemaknya; bentuk dikimpal dan bahagian lain berkata "tidak disemak". Lihat [Semakan reka bentuk](topic:frame-analysis#design-checks).

## Diperbetulkan

- Buat semula selepas langkah yang mencipta saiz keluarga baharu gagal ("tiada saiz"). Setiap langkah kini menghasilkan GlobalId IFC yang sama semula apabila dibuat semula, jadi buat semula berfungsi untuk keluarga dan setiap perubahan lain.
- Apabila dua orang menyimpan keluarga yang sama (dalam sesi Live TeamWork atau dua tetingkap), simpanan kedua diam-diam menggantikan perubahan yang pertama. Kini ia menolak dan memberitahu cara melihat perubahan mereka dan membuat semula perubahan anda.
- Model dalam kaki survei AS dibaca sebagai 0.3048 m bagi setiap kaki dan bukannya 0.3048006096 m, yang mengalihkan setiap IFC yang digeoruj dalam kaki AS pada peta.
- Editor keluarga: menutupnya tidak lagi menjatuhkan fokus papan kekunci ke halaman, Simpannya kekal kelihatan pada telefon, dan medannya tidak lagi menyebabkan telefon membesar.

## Dalam setiap aplikasi

- **Unit.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} mempunyai satu senarai setiap satu untuk panjang, luas, isi padu, sudut dan kecerunan, dengan saiz tepat yang diberikan oleh takrif unit (kaki survei AS ialah unitnya sendiri). Matikan unit yang tidak pernah anda gunakan dan ia keluar daripada senarai unit; tandakan satu bintang dan kerja baharu bermula dengannya. Fail sentiasa mengekalkan unitnya sendiri. Dalam BimCraft, senarai {{ui:Units}} pada bar alat mengikut suis, bintang menetapkan unit paparan sehingga anda memilihnya pada bar alat (pilihan lama anda dikekalkan), dan kotak panjang alat lukisan menerima tanda mana-mana unit, seperti `3.5 m` atau `10 US ft`. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur lebih padat dan panel yang boleh dikemaskan.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk nipis: seretnya untuk melekap atau mengapungkan panel, lepaskannya pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pinkannya untuk meluncur ke tepi, atau sembunyikannya dan bawanya kembali dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Dialog boleh dialihkan.** Seret dialog mengikut bar tajuknya keluar dari lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang telah siap untuk pembantu anda sendiri (kemaskan lukisan, plot set, semak lukisan, tanya soalan kepada model, jumlahkan takrifan, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukan, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** ialah baharu dalam {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris, dengan beberapa dalam bahasa Sepanyol.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan tidak sah) dan bukannya hanya "Selesai", dan berhenti membawa kembali kad Perkara baharu yang telah anda tutup sehingga ada keluaran yang lebih baharu.

## Belum dibina dalam versi ini

- **0.7 belum ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Tetap jalankan}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di kedai aplikasi, dan belum ada binaan untuk iPad atau iPhone.
- Senarai sudut dan kecerunan dalam {{ui:Units}} disimpan, tetapi belum ada kotak yang membacanya.
- Penjejakan laluan pada kad grafik, tambahan dalam dialog Render dan baris gilir render memerlukan WebGPU (tanpanya, kualiti tinggi menggunakan penjejak laluan WebGL); paparan langsung menggunakan WebGPU di tempat pelayar mempunyainya, jika tidak WebGL 2. Ia telah diuji di sini hanya pada pengganti grafik perisian, belum pada kad grafik sebenar. Paparan langsung tidak mempunyai penyebaran atau perkongsian dalam BimCraft (milik ModelCraft ada).
- Merender lintasan yang dirakam sebagai video belum dibina dalam BimCraft.
- Semakan reka bentuk: bentuk-I yang nama profil IFCnya bukan saiz W, S, IPE, HEA atau HEB (atau yang saizannya berbeza daripadanya) dianggap dikimpal dan keluar sebagai "tidak disemak", begitu juga tiub, sudut, saluran, bahagian langsing dan kilasan. Tiada jurutera telah menyemak semakan ini lagi.
- Elemen yang dilukis tidak boleh disalin satu persatu, diputar, dicerminkan atau disusun tatasusunan (aras keseluruhan boleh disalin), dan tiada dinding boleh dibelah, alat Teks atau dinding tirai. Dinding yang bertemu dinding dari aras bawah pada aras atas tidak dipotong ke dalam badan 3D dinding itu, dan jadual menyenaraikan bukaan aras atas di bawah aras dinding itu sendiri.
- Keluarga: perpustakaan keluarga yang dikongsi antara projek belum dibina. Keluarga dan aras yang disalin belum dibuka dalam program BIM lain.
- MEP: peralatan bersifat generik (tiada data pengilang); tee dan pengecil pada spul keluli adalah generik, bukan dari jadual ASME B16.9; port item pustaka yang diletakkan dari tab {{ui:Library}} tidak ditulis ke dalam IFC; tiada apa-apa yang disemak oleh jurutera.
- Add-on Plant belum boleh melukis laluan berpaip ke dalam model, menomborkan spul pada isometriknya, atau menyemak susun atur peralatan yang diletakkan dari pustaka.
- Loji dari pustaka loji CivilCraft belum boleh diletakkan dari tab {{ui:Library}} BimCraft.
- Tenaga: tiada simulasi setiap jam, tiada kaedah ISO 52016-1 dan tiada fail iklim. Aset: tiada kembar hos yang menyimpan bacaan atau menghantar amaran apabila BimCraft ditutup.
- Pendaftaran imbasan telah dicuba pada imbasan ujian, belum pada set imbasan pengimbas sebenar; fail E57 masih dibuka sehingga 6 juta titik dan 512 MB.
- Bundle projek dibuka dalam BimCraft sahaja (aplikasi lain menerima susun atur melalui **Open in …**), dan bundle serta kit dua program telah diuji dengan penggantian, belum dengan Archicad atau Revit sendiri.

Yang lain terdapat dalam [Apa yang belum dibina](topic:not-built-yet).
