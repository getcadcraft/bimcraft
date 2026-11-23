---
title: Yang baru di 0.7 (sebelumnya)
summary: BimCraft menambahkan dinding melalui beberapa level, Salin level ini, dinding dari PDF dan scan, rakitan dinding sendiri, famili yang lebih kaya, peralatan MEP dengan port, kumpulan benturan, bukaan dan spool pipa, dokumen aset, COBie dan pembacaan sensor, langit, matahari, cahaya siang pada grid, dan beban pemanasan serta pendinginan, registrasi scan, tampilan langsung, dan path tracing pada kartu grafis, STEP dan USD, varian pustaka, dan lebih banyak untuk asisten AI.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, dinding melalui level, salin level ini, pdf, scan, telusur, dinding dari denah, rakitan dinding, layer, inti, membran, dimensi referensi, pustaka material, satuan tampilan, gaya tampilan, rangka, balok, famili, parameter, simbol denah, hotspot, pengulangan, tingkat detail, famili bersarang, ukuran csv, per elemen, peralatan, port, koneksi, jarak bebas, bukaan, spool, lembar spool, las lapangan, daftar potong duct, dokumen, cobie, sensor, mqtt, umpan langsung, komponen langit vertikal, perolehan panas matahari, grid cahaya siang, pemanasan, pendinginan, beban, nilai u, registrasi scan, icp, e57, tampilan langsung, path tracing, webgpu, denoise, langit fisik, pencampuran cahaya, antrean render, komputer Anda, step, usd, bundel proyek, kembangkan massa, varian, asisten, api add-on, tanaman, listrik, pemeriksaan desain
from: a638080d
---

Ini adalah perubahan di BimCraft 0.7, dibandingkan dengan 0.6. Daftar ini dikelompokkan per area, dengan yang paling penting di awal.

## Baru

### Menggambar bangunan

- **Dinding melalui beberapa level.** Daftar tinggi alat Dinding menawarkan **Sampai** level mana pun di atasnya, seperti yang dilakukan Properti untuk dinding yang dipilih. Denah level di antaranya menampilkan dinding lebih terang, ruangan di sana menutup di dekatnya, dan pintu serta jendela dapat ditempatkan di dalamnya dari denah tersebut; **Melewati** di Properti menyebutkan level yang dilewatinya. Lihat [Ubah dinding, pintu, atau jendela](topic:change-a-wall-or-door#change-a-wall).
- **Salin level ini.** {{ui:Salin level ini…}} di panel Level menggambar ulang dinding sebuah level beserta pintu dan jendelanya, serta lantai dan langit-langitnya, pada level lain atau pada level baru di atasnya, dalam satu langkah urungkan; ruangan muncul dengan sendirinya. Lihat [Gambar dinding](topic:draw-walls#levels).
- **Dinding dari PDF atau scan.** {{ui:Build}} › {{ui:Dari gambar…}} sekarang menerima PDF (garis gambar, atau scan di dalamnya) atau denah hasil scan (PNG, JPEG, TIFF, banyak halaman): setiap halaman menjadi dinding, pintu, jendela, dan ruangan dari sebuah level, dengan halaman disimpan di bawah denahnya. Penelusuran tidak memakai jaringan atau model terlatih, dan hasilnya sesuai dengan yang diberikan garis: periksa setiap level terhadap halamannya. Lihat [Dinding dari sekumpulan denah](topic:walls-from-plans).
- **Rakitan dinding sendiri.** {{ui:Rakitan dinding…}} membangun tipe dinding lapis demi lapis, dengan inti, celah udara, dan membran, serta pratinjau berdimensi; {{ui:Pustaka material…}} menyimpan material proyek dalam IFC; {{ui:Anotasi}} › {{ui:Dimensi referensi}} mengukur ke muka dan garis inti, dan mengikuti dinding saat berubah. Dari kontributor komunitas, Doc (drsurfbum). Lihat [Rakitan dinding dan dimensi referensi](topic:wall-assemblies).
- **Satuan tampilan dan kontrol tampilan.** {{ui:Satuan}} pada bilah alat menampilkan panjang dalam kaki dan inci, inci, kaki desimal, milimeter, sentimeter, atau meter, pada dimensi, jadwal, koordinat, pengukuran, dan potongan. {{ui:Denah}}, {{ui:Pisahkan}}, dan {{ui:3D}} berada di bilah alat; pemisah tampilan dapat diseret (atau dipindahkan dari keyboard); {{ui:Berbayang}}, {{ui:Tepi}}, dan {{ui:Rangka kawat}} berada di samping kubus tampilan; dan kemiringan atap, fascia, serta soffit mengubah atap yang dipilih sekaligus. Dari kontributor komunitas, Joel (yisraelk). Lihat [Gambar dinding](topic:draw-walls#levels).
- **Balok lantai menurut bentang.** {{ui:Rangka}} dapat menata balok lantai rekayasa (awal) maupun kayu gergajian, dengan memilih seri dan kedalaman terkecil yang mencapai bentang, 16" atau 24" dari pusat ke pusat, ke arah mana pun; balok masuk ke IFC dan daftar potong. Saran dari tabel terbitan pabrikan, bukan rekayasa. Juga dari Joel. Lihat [Rangka dinding, lantai, dan atap](topic:framing).
- **Lebih banyak perangkat listrik.** {{ui:Listrik}} menambahkan stopkontak data, telepon, dan audio-video, sakelar pemilih, pengatur waktu, termostat, detektor asap dan panas, stasiun tarik dan sirene, kipas, meter energi, serta sub-panel, masing-masing dengan kelas IFC sendiri. Lihat [Denah listrik](topic:electrical-plan).

### Famili

- **Famili melakukan lebih banyak.** Parameter dapat berupa bilangan bulat, teks, material, pena, atau isian; sebuah famili dapat menggambar simbol denahnya sendiri, mengulang benda padat, menandai bagian untuk tingkat detail yang lebih kasar, memuat famili lain (kaki dalam meja), dan memiliki hotspot yang dapat Anda seret, juga pada elemen yang ditempatkan di denah. Ukuran berasal dari tabel CSV, dan parameter yang ditandai **Per elemen** memungkinkan dua pintu dengan ukuran sama berbeda. Lihat [Sunting famili](topic:family-editor#plan-symbol) dan [Famili dan ukurannya](topic:families#sizes-from-a-table).

### Pipa, duct, dan peralatan

- **Peralatan dengan port.** {{ui:Build}} › {{ui:Peralatan}} menempatkan unit penanganan udara generik, kipas sebaris, pompa, boiler, pemanas air, unit terminal, diffuser, grille, atau tangki, berukuran menurut nilai yang Anda ketik, dengan sambungan pipa dan duct sebagai port. Setiap unit disimpan sebagai kelas IFC-nya dengan port IFC. Lihat [Peralatan MEP dengan port](topic:mep-equipment).
- **Jalur yang tersambung.** Pipa atau duct yang dimulai dari sebuah port mengambil ukuran dan sistemnya dan tetap terkait padanya: pindahkan pompa dan pipanya ikut. {{ui:Periksa sambungan}} mencantumkan port yang terbuka, ujung yang longgar, ketidakcocokan ukuran dan sistem, serta jalur yang tidak disuplai apa pun. Lihat [Sambungkan pipa dan duct ke peralatan](topic:mep-connections).
- **Pipa dan duct terhadap struktur.** {{ui:Pemeriksaan benturan}} memiliki set siap pakai dan {{ui:Pipa dan duct × struktur}} dalam satu klik; {{ui:Periksa jarak bebas}} menggunakan insulasi setiap jalur ditambah celah yang Anda ketik; {{ui:Bukaan yang diperlukan}} mencantumkan tempat jalur melewati dinding dan pelat, sebagai isu CSV dan BCF. Tidak ada yang dipotong. Lihat [Periksa pipa dan duct terhadap struktur](topic:mep-against-structure).
- **Spool pipa baja.** Jalur baja dipotong menjadi spool bernomor pada panjang terpanjang dan pada {{ui:Las lapangan}} yang Anda tempatkan; {{ui:Lembar spool (PDF)}} memberi satu halaman per spool dengan tampilan isometrinya, panjang potong, fitting, las, dan daftar material, dan {{ui:Daftar potong duct}} mencantumkan potongan duct lurus. Lihat [Spool pipa baja dan lembar spool](topic:pipe-spools).

Ini adalah alat drafting dan koordinasi, berukuran oleh insinyur: tidak ada aliran, tekanan, atau penyeimbangan.

### Menjalankan bangunan

- **Dokumen per aset.** Tab {{ui:Aset}} menautkan manual, garansi, foto, dan gambar ke sebuah aset melalui nama berkas di samping IFC atau alamat web; hanya tautannya yang masuk ke IFC. Lihat [Dokumen](topic:assets-and-maintenance#documents).
- **Spreadsheet COBie.** {{ui:Simpan sebagai COBie (.xlsx)}} menulis buku kerja serah terima COBie 2.4, dan buku kerja COBie yang dibaca kembali mencantumkan setiap perubahan sebelum satu {{ui:Terapkan}}. Ia belum pernah melalui validator COBie. Lihat [Spreadsheet COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Pembacaan sensor dan umpan langsung.** Buka CSV berisi pembacaan, atau {{ui:Hubungkan}} langsung dari peramban ke broker MQTT Anda sendiri atau alamat yang dijawab sistem bangunan Anda: setiap aset menampilkan pembacaan terbarunya dan sebuah grafik, diberi warna pada model, dan ditandai bila di luar batas yang disimpan dalam IFC. Pembacaan tetap di tab; kata sandi tidak pernah disimpan. Lihat [Pembacaan sensor](topic:assets-and-maintenance#sensor-readings) dan [Pembacaan langsung](topic:assets-and-maintenance#live-readings).

### Cahaya siang dan energi

- **Langit dan matahari di setiap jendela.** Tab {{ui:Cahaya siang}} memberi setiap jendela komponen langit vertikal dan sudut halangannya, mengikuti matahari melalui sebuah tanggal dengan {{ui:Matahari melalui jendela pada suatu tanggal}}, dan menghitung {{ui:Faktor cahaya siang pada grid}} di setiap ruangan, digambar pada denahnya. Lihat [Komponen langit vertikal setiap jendela](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Beban pemanasan dan pendinginan.** {{ui:Beban pemanasan dan pendinginan}} menghitung kehilangan panas setiap ruangan, pemanasannya selama setahun dari derajat-hari, dan puncak pendinginannya, dari apa yang membatasinya dalam model dan nilai U setiap elemen; nilai U yang diketik di sana ditulis ke dalam IFC. Lihat [Perkirakan beban pemanasan dan pendinginan](topic:heating-and-cooling-loads).

Keduanya adalah alat bantu desain dengan metode yang diterbitkan, bukan perhitungan kepatuhan, dan setiap panel menyatakannya.

### Scan

- **Registrasi beberapa scan.** {{ui:Registrasi scan…}} (di panel awal, atau di {{ui:Tampilkan}}) menempatkan scan dalam satu bingkai dengan pasangan titik yang dipilih atau target yang diketik, menyempurnakannya dengan ICP titik ke titik lalu titik ke bidang, menyimpan registrasi sebagai berkas proyek kecil, dan menulis awan yang sudah diregistrasi sebagai satu berkas LAS atau E57. Lihat [Registrasi beberapa scan menjadi satu](topic:register-scans).

### Gambar dan tampilan langsung

- **Tampilan langsung.** {{ui:Tampilan langsung}} pada bilah alat menampilkan model dengan tampilan waktu nyata di samping tampilan 3D, mengikuti tampilan itu dan setiap perubahan, dengan Jalan, waktu siang, dan bulan; {{ui:Tampilan langsung di jendela baru}} meletakkannya di layar kedua. Lihat [Tampilan langsung](topic:live-view).
- **Path tracing pada kartu grafis.** Dengan WebGPU, {{ui:Render}} › {{ui:Kualitas tinggi (path tracing)}} menjalankan path tracer milik CadCraft sendiri pada kartu grafis, dapat berhenti dan {{ui:Lanjutkan}}, dan diberi denoise di akhir; tanpa WebGPU ia memakai path tracer WebGL seperti sebelumnya. Lihat [Kualitas tinggi](topic:render#high-quality).
- **Lebih banyak di dialog Render** (pada kartu grafis, sehingga membutuhkan WebGPU): langit fisik dan gambar langit, profil cahaya IES, kamera dengan f-stop, kedalaman bidang, perspektif dua titik, keseimbangan putih, dan panorama 360°, gradasi untuk gambar jadi, pencampuran cahaya dan elemen render setelah render, kabut, asap, dan kaustik, menyimpan sebagai PNG 16-bit, EXR, atau berkas render, serta antrean render. Lihat [Langit dan profil cahaya pada kartu grafis](topic:render#skies-and-light-profiles-on-the-graphics-card) dan [Antrean render](topic:render#the-render-queue).
- **Komputer Anda.** {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Komputer Anda}} menampilkan grafis, inti prosesor, dan memori yang diizinkan peramban ini untuk dipakai aplikasi, serta level tempat rendering dimulai. Lihat [Apa yang dirender komputer Anda](topic:your-machine).

### Berkas dan aplikasi lain

- **Berkas STEP dapat dibuka.** Berkas `.step` atau `.stp` berupa bagian, peralatan, atau model pemasok (AP203, AP214, AP242) dibuka sebagai model IFC kecil, dengan setiap benda padat menjadi elemen yang dapat Anda periksa, potong, ukur, dan simpan sebagai IFC. Warna dan nama bagian rakitan belum dibaca. Lihat [Berkas yang dibuka dan disimpan BimCraft](topic:files#what-it-opens).
- **Ekspor USD.** {{ui:USD}} pada bilah alat menulis model yang terbuka sebagai `.usda`, `.usdc`, atau `.usdz`, ditata menurut lokasi, bangunan, lantai, dan disiplin, dengan setiap kelas IFC, GlobalId, dan properti elemen. Lihat [Ekspor model sebagai USD](topic:usd).
- **Massa dari CivilCraft.** Massa bangunan yang dikirim dari tampilan tapak CivilCraft menampilkan angka studinya di Properti, dan {{ui:Kembangkan massa ini}} membangun dinding pada setiap level dan lantai darinya dalam satu langkah urungkan. Lihat [Kembangkan massa bangunan dari studi tapak](topic:develop-a-mass).
- **Item pustaka dengan varian.** Item yang hadir dalam beberapa varian memiliki pilihan {{ui:Varian}} di tab {{ui:Pustaka}}; elemen yang ditempatkan menyimpan variannya dalam IFC, {{ui:Tukar item…}} mencantumkan varian lain, dan salinan serta pembaruan tetap mempertahankannya. Lihat [Tempatkan dan tukar item pustaka yang memiliki varian](topic:library-variants).
- **Bundel proyek dalam satu folder.** {{ui:Buka folder}} mencantumkan berkas `.ccbundle.zip` di bawah {{ui:Bundel proyek}}, dan setiap layout dalam bundel memiliki **Open in …**: PDF ke MarkupCraft, DWG ke CadCraft, di tab baru. Lihat [Buka layout](topic:open-project-bundle#open-a-layout).

### Asisten dan add-on

- **Lebih banyak untuk asisten AI.** Asisten kini dapat mengganti nama elemen dan mengatur nilai properti, memindahkan dan menghapus elemen, mengubah dinding, pintu, dan jendela, mengekspor USD, serta merender gambar atau menjalankan antrean render; setiap perubahan adalah satu langkah urungkan. Lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
- **Add-on dapat membangun di dalam model.** API add-on 1.1 memungkinkan add-on membuat perubahan dalam model sebagai satu langkah urungkan (perubahan itu ikut dalam Live TeamWork), membaca model, dan membaca jalur pipa dan duct, port, peralatan, serta spool.
- **Add-on Plant** (dimatikan sampai Anda menyalakannya di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Add-on}}): spesifikasi pipa diperiksa terhadap jalur, gambar isometrik sebuah jalur sebagai SVG dan DXF dengan daftar material, peralatan proses generik dengan nozel yang ditempatkan dalam model, router antara dua port, dan pemeriksaan tata letak pabrik. Alat bantu drafting, bukan persetujuan rekayasa; kata-katanya hanya bahasa Inggris.

## Diubah

- **Rumah pertama di laptop.** Pada layar seukuran laptop BimCraft dimulai hanya dengan denah, bilah Gambar menjadi panel sempit dengan denah pas di sampingnya, denah dan tampilan 3D kembali terlihat saat gambar meninggalkannya, tampilan 3D membingkai seluruh rumah dalam panel sempit, dan pintu serta jendela dipilih sebelum garis dimensi.
- **Menyimpan gambar.** **Save PNG** di dialog Render kini menjadi {{ui:Simpan}}, dengan {{ui:Simpan sebagai}} di sampingnya untuk format lain. Lihat [Simpan gambar](topic:render#save-the-picture).
- **Tab Analisis** memiliki blok {{ui:Pemeriksaan desain}}: ia membuat kombinasi beban ASCE 7 atau EN 1990 untuk kasus Anda dan memeriksa setiap profil I baja gilas (ukuran W, S, IPE, HEA, atau HEB menurut nama profil dan ukurannya) terhadap AISC 360 atau EN 1993-1-1, menampilkan seberapa besar kapasitasnya yang terpakai. Alat bantu sampai seorang insinyur meninjaunya; bentuk yang dilas dan penampang lain menyatakan "tidak diperiksa". Lihat [Pemeriksaan desain](topic:frame-analysis#design-checks).

## Diperbaiki

- Mengulang setelah langkah yang membuat ukuran famili baru gagal ("no size"). Setiap langkah kini membuat GlobalId IFC yang sama kembali saat diulang, sehingga mengulang berfungsi untuk famili dan setiap perubahan lain.
- Ketika dua orang menyimpan famili yang sama (dalam sesi Live TeamWork atau dua jendela), penyimpanan kedua diam-diam menimpa perubahan pertama. Kini ia menolak dan menjelaskan cara melihat perubahan mereka dan membuat perubahan Anda kembali.
- Model dalam kaki survei AS dibaca sebagai 0.3048 m per kaki, bukan 0.3048006096 m, sehingga setiap IFC yang digeoreferensi dalam kaki AS bergeser di peta.
- Penyunting famili: menutupnya tidak lagi menjatuhkan fokus keyboard ke halaman, Simpan-nya tetap terlihat di ponsel, dan kolom isiannya tidak lagi membuat ponsel melakukan zoom.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuan (kaki survei AS adalah satuannya sendiri). Matikan satuan yang tidak pernah Anda pakai dan ia keluar dari daftar; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. Sebuah berkas selalu menyimpan satuannya sendiri. Di BimCraft daftar {{ui:Satuan}} pada bilah alat mengikuti sakelar, bintang menetapkan satuan tampilan sampai Anda memilih satuan di bilah alat (pilihan Anda sebelumnya tetap disimpan), dan kotak panjang alat drafting menerima tanda satuan apa pun, seperti `3.5 m` atau `10 US ft`. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih rapat dan panel yang dapat dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besar). Setiap panel sisi memiliki bilah judul ramping: seret untuk menambatkan atau mengapungkan panel, lepaskan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog dengan bilah judulnya agar tidak menghalangi gambar; ia kembali ke tempat Anda meninggalkannya. Klik dua kali bilah judul untuk memusatkannya kembali. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan yang sudah dikerjakan untuk asisten Anda sendiri (merapikan gambar, mencetak set, memeriksa gambar, bertanya tentang model, menghitung takeoff, mencoba varian bagian, dan lainnya), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak memuat AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata dari aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan berbahasa Inggris, dengan beberapa dalam bahasa Spanyol.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada berkas untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap berkas di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan installer, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, untuk pertama kali, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} disimpan, tetapi belum ada kotak yang membacanya.
- Path tracing pada kartu grafis, tambahan di dialog Render, dan antrean render membutuhkan WebGPU (tanpanya, kualitas tinggi memakai path tracer WebGL); tampilan langsung memakai WebGPU jika peramban memilikinya, jika tidak WebGL 2. Semuanya baru diuji di sini pada pengganti grafis perangkat lunak, belum pada kartu grafis sungguhan. Tampilan langsung tidak memiliki penyebaran atau berbagi di BimCraft (milik ModelCraft memilikinya).
- Merender rekaman jalan sebagai video belum tersedia di BimCraft.
- Pemeriksaan desain: profil I yang nama profil IFC-nya bukan ukuran W, S, IPE, HEA, atau HEB (atau ukurannya berbeda darinya) dianggap dilas dan kembali "tidak diperiksa", begitu pula tabung, siku, kanal, bagian langsing, dan torsi. Belum ada insinyur yang meninjau pemeriksaan ini.
- Elemen yang digambar tidak dapat disalin satu per satu, diputar, dicerminkan, atau dijadikan array (seluruh level dapat disalin), dan tidak ada dinding yang dapat dipisah, alat Teks, atau dinding tirai. Dinding yang bertemu dengan dinding dari level bawah pada level atas tidak dipotong ke badan 3D dinding itu, dan jadwal mencantumkan bukaan level atas di bawah level dinding itu sendiri.
- Famili: pustaka famili yang dibagi antar proyek belum tersedia. Famili dan level yang disalin belum pernah dibuka di program BIM lain.
- MEP: peralatan bersifat generik (tanpa data pabrikan); tee dan reducer pada spool baja bersifat generik, bukan dari tabel ASME B16.9; port item pustaka yang ditempatkan dari tab {{ui:Pustaka}} tidak ditulis ke dalam IFC; tidak ada yang ditinjau oleh insinyur.
- Add-on Plant belum dapat menggambar jalur yang dirutekan ke dalam model, memberi nomor spool pada isometriknya, atau memeriksa tata letak peralatan yang ditempatkan dari pustaka.
- Tanaman dari pustaka tanaman CivilCraft belum dapat ditempatkan dari tab {{ui:Pustaka}} BimCraft.
- Energi: tidak ada simulasi per jam, tidak ada metode ISO 52016-1, dan tidak ada berkas iklim. Aset: tidak ada kembar yang di-host yang menyimpan pembacaan atau mengirim peringatan saat BimCraft tertutup.
- Registrasi scan baru dicoba pada scan uji, belum pada kumpulan scan dari pemindai sungguhan; berkas E57 masih terbuka hingga 6 juta titik dan 512 MB.
- Bundel proyek hanya terbuka di BimCraft (aplikasi lain menerima layout melalui **Open in …**), dan bundel serta kit dua program baru diuji dengan pengganti, belum dengan Archicad atau Revit sendiri.

Semua yang lain ada di [Belum dibuat](topic:not-built-yet).
