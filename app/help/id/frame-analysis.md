---
title: Analisis rangka struktur
summary: Gaya, reaksi, dan lendutan balok, kolom, dan bresing model di bawah kasus beban dan kombinasi yang Anda atur, disimpan dalam IFC. Alat bantu analisis, bukan pemeriksaan kode.
keywords: analisis, satuan, kaki dan inci, satuan tampilan, analisis struktur, pemeriksaan desain, utilisasi, digulung, dilas, AISC 360, EN 1993-1-1, analisis rangka, model analitis, metode kekakuan, beban, kasus beban, kombinasi, beban mati, beban hidup, berat sendiri, reaksi, momen lentur, geser, gaya aksial, lendutan, bentuk melendut, tumpuan, sendi, jepit, pelepasan, laporan, pdf, csv, craftscript, frame3d, balok, kolom, batang
from: b93b58c4
---

Tab {{ui:Analisis}} di sisi kanan mencari gaya dalam batang balok, kolom, dan bresing model yang terbuka, reaksi di kaki kolom, dan seberapa jauh batang melentur, untuk beban yang Anda berikan.

:::warning
Ini adalah **alat bantu analisis, bukan pemeriksaan kode**. Analisis tidak menerapkan kode desain: ia tidak menentukan ukuran batang atau memeriksa kapasitas, dan tidak memilih faktor beban. Insinyur memeriksa model analitis, beban, dan tumpuannya, serta memutuskan arti angka-angkanya. Blok {{ui:Pemeriksaan desain}} di bawahnya memeriksa profil I baja digulung terhadap AISC 360 atau EN 1993-1-1, sebagai alat bantu sampai insinyur meninjaunya: lihat [Pemeriksaan desain](topic:frame-analysis#design-checks).
:::

## Jalankan

1. Buka model IFC dan tab {{ui:Analisis}}.
2. Pilih satu atau lebih balok, kolom, atau bresing di tampilan, pilih {{ui:Kasus}}, {{ui:Beban}}, dan {{ui:Arah}}, ketik nilainya, lalu tekan {{ui:Tambah beban}}: kN/m untuk beban yang tersebar di sepanjang batang, kN untuk beban titik.
3. Tekan {{ui:Jalankan analisis}}.

Tabel mencantumkan gaya aksial terbesar, geser, momen lentur, torsi, dan lendutan setiap batang; klik nama batang untuk memilihnya di tampilan. Di bawahnya adalah reaksi. {{ui:Pada model}} menggambar bentuk melendut, atau satu aksi sebagai diagram di samping setiap batang. Hasil menjadi usang ketika model berubah: jalankan lagi.

Setiap beban dan pengaturan adalah satu perubahan dalam daftar {{ui:Perubahan}}: {{ui:Urungkan}} membatalkannya, dan {{ui:Simpan sebagai IFC}} menyimpannya di dalam file (properti set `CadCraft_Analysis` proyek), sehingga saat model dibuka lagi di sini bebannya masih ada.

## Cara model analitis dibuat

- Setiap IfcBeam, IfcColumn, dan IfcMember yang bentuknya satu ekstrusi lurus menjadi batang pada garis pusat penampangnya. Properti penampangnya berasal dari profil: bentuk I, U, L, dan T, persegi dan tabung, lingkaran dan tabung bulat, atau garis batas tertutup apa pun (maka konstanta torsi adalah perkiraan, dan laporan menyatakannya). Yang lain dikeluarkan dan dihitung.
- Dalam model, balok berhenti di muka kolom dan berada di bawah lantai. Setiap ujung batang dibawa mengikuti garisnya sendiri ke sumbu batang tempat ia merangka, bila sumbu itu dekat (dalam sekitar ukuran penampang), dan batang itu dibagi di sana. Laporan menyebutkan berapa ujung yang berpindah.
- **Kaki kolom** yang tidak memiliki apa pun di bawahnya adalah tumpuan: jepit (awal) atau sendi (ditahan di tempat dan terhadap puntiran, tetapi bebas berputar).
- **Ujung balok** dibuat kaku atau sendi oleh aturan {{ui:Ujung balok tanpa sambungan}}; **bresing** (IfcMember) disendi di kedua ujungnya. Pilih satu batang untuk memberi ujungnya, atau kaki kolom, aturannya sendiri.
- Material dikenali dari namanya: beton (E = 30 GPa), kayu (E = 11 GPa), selain itu baja (E = 200 GPa).

Jika rangka dapat bergerak tanpa melentur apa pun (sebuah mekanisme), proses berhenti dan menyebutkan di mana dan ke arah mana.

## Kasus, kombinasi, tanda, dan laporan

Analisis dimulai dengan **Mati** (berat sendiri), **Hidup**, dan **Mati + hidup**; tambahkan kasus dan kombinasi dengan faktor yang diminta kode desain Anda. N > 0 adalah tarik; My > 0 membuat sisi −z lokal batang mengalami tarik (balok yang melendut akibat gravitasi memiliki My > 0). {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} memuat asumsi, penampang, kasus, reaksi beserta jumlahnya, gaya batang, perpindahan, dan amplop. {{ui:Ekspor sebagai CraftScript}} menulis rangka untuk ruang kerja Script milik PartCraft, tempat fungsi pustaka `frame3d` menyelesaikannya dalam kode yang dapat dibaca.

Metodenya adalah metode kekakuan langsung, linear dan orde pertama kecuali Anda mencentang Orde kedua (P-Delta), dan diperiksa terhadap kasus-kasus buku teks.

**Orde kedua (P-Delta).** Centang *Orde kedua (P-Delta)* di samping Jalankan: setiap kombinasi diselesaikan lagi dengan gaya aksial batang bekerja pada rangka yang melendut (setiap batang dipotong menjadi 4 bagian, sehingga lentur batang di antara ujungnya ikut dihitung), sampai gaya aksial stabil. Baris hasil memberi jumlah putaran dan seberapa besar goyangan bertambah; momen, lendutan, pemeriksaan desain, dan laporan kemudian memakai hasil ini. Di atas beban kritis elastis rangka, proses berhenti dan menyatakannya. Ini elastis dengan rotasi kecil, hanya lentur, tanpa reduksi kekakuan atau beban notional (bukan metode analisis langsung AISC dengan sendirinya); pelat, dinding, dan lantai kaku tetap orde pertama.

**Tekanan lantai pada pelat.** Untuk pelat beton (analisis membaca pelat sebagai pelat lentur ketika materialnya beton), blok Beban memiliki {{ui:Tekanan pada setiap pelat}}: ketik kN/m², pilih kasus di atas, dan tekan {{ui:Tambahkan ke pelat}}. Tekanan itu bekerja ke bawah pada setiap pelat yang ditemukan analisis, dan tercantum dengan tautan Hapus. Ini satu tekanan untuk semua pelat, bukan satu per pelat, dan bukan beban kode: ketik nilai yang diberikan insinyur Anda.

**Frekuensi alami (elemen hingga).** Blok {{ui:Elemen hingga: frekuensi alami}} di bawah hasil mencari mode terendah dari model yang sama dengan mesin elemen hingga: balok dengan pelepasan ujungnya, pelat dan dinding sebagai cangkang empat-simpul datar, lantai kaku, dan tumpuan. Pilih jumlah mode (3, 6, 10, atau 20) dan elemen pelat (cangkang empat-simpul untuk pelat tebal atau tipis, atau elemen pelat tipis), lalu tekan {{ui:Cari frekuensinya}}. Tabel memberi frekuensi setiap mode dalam Hz, periodenya dalam detik, dan massa modal efektifnya sepanjang X, Y, dan Z sebagai bagian dari massa yang dapat bergerak; {{ui:Tampilkan pada model}} menggambar mode mana pun seperti bentuk melendut digambar. Massa adalah massa jenis material dikali volume: beban tidak menambah massa, dan material tanpa massa jenis tidak memilikinya. Laporan (PDF, CSV) memuat tabelnya. Ini hanya elastis dan gerakan kecil, dan tidak ada beban gempa atau angin yang dibuat dari kode di sini. Bukan pemeriksaan kode; insinyur Anda meninjau hasilnya.

**Spektrum respons, riwayat waktu, dan pushover.** Tiga blok lagi ada di bawah frekuensi, memakai model elemen hingga yang sama. Massa untuk semuanya adalah massa jenis material ditambah beban ke bawah dari kasus yang Anda centang, masing-masing dikali faktor yang Anda ketik (misalnya Mati 1 dan Hidup pada bagian yang Anda hitung sebagai massa).

{{ui:Spektrum respons}} membaca setiap mode dari spektrum yang Anda berikan (tabel periode dan percepatan, atau bentuk ASCE 7 dari SDS, SD1, dan TL; tombol {{ui:Gunakan nilai blok Gempa}} menyalin nilai-nilai itu dari blok Gempa) dan menggabungkan mode dengan CQC, SRSS, aturan sepuluh persen, atau jumlah mutlak, lalu menggabungkan arah X, Y, dan Z (100 % + 30 % atau SRSS). Hasilnya memberi gaya geser dasar, simpangan lantai, gaya ujung batang, dan tabel mode yang memberi peringatan bila mode yang dipakai memuat kurang dari 90 % massa. Anda dapat menskalakan hasil dengan faktor atau hingga gaya geser dasar yang Anda ketik; blok ini tidak pernah menghitung sendiri gaya geser dasar itu. Hasil tidak memiliki tanda.

{{ui:Riwayat waktu}} menjalankan percepatan tanah dengan superposisi modal (tepat untuk garis lurus rekaman di antara titik) atau dengan integrasi langsung (rata-rata percepatan Newmark dengan redaman Rayleigh). Masukannya adalah sinus atau pulsa buatan (selalu diberi label sintetis), rekaman yang Anda tempel, atau file teks yang Anda buka (waktu dan percepatan, satu percepatan per baris dengan langkah, atau file bergaya PEER dengan header DT=; dalam g atau m/s²). Hasilnya memberi perpindahan atap dan gaya geser dasar terhadap waktu, simpangan setiap lantai, dan amplop gaya ujung batang. Model dengan rekaman yang sangat panjang hanya menyimpannya untuk sesi ini.

{{ui:Pushover}} mendorong atap ke samping dalam langkah kecil (pola seperti mode pertama, atau seragam), dengan sendi plastis di ujung batang yang berbentuk I. Sendi meluluh pada momen plastis, yang turun ketika gaya aksial bertambah (dihitung dari bentuk yang digambar, lekukan diabaikan); pengerasan bersifat opsional, P-delta bersifat opsional, dan kombinasi gravitasi dapat diterapkan lebih dahulu. Hasilnya memberi kurva kapasitas (gaya geser dasar terhadap perpindahan atap), sendi pertama, serta keadaan dan rotasi plastis setiap sendi. {{ui:Jalankan riwayat waktu nonlinear}} menjalankan sendi yang sama di bawah rekaman blok Riwayat waktu pada model kecil. Sendi hanya terbentuk di ujung batang (letakkan simpul di tempat sendi seharusnya terbentuk di dalam bentang); batang yang dilepas di kedua ujungnya tidak memilikinya; leleh dan tekuk bresing tidak dimodelkan; pelat dan dinding tetap elastis; tidak ada kriteria penerimaan yang diberikan. Bukan pemeriksaan kode; insinyur Anda meninjau hasilnya. Pengaturannya disimpan bersama model, dan laporan memuat tabelnya.

Belum dibuat: tekuk, koreksi massa yang hilang untuk spektrum respons, penskalaan rekaman, kriteria penerimaan untuk sendi (respons dinamis sudah ada, di atas), beban area selain tekanan tunggal pada setiap pelat, offset batang, bresing hanya-tarik, dinding dan pelat dalam rangka, pemeriksaan kode desain untuk bentuk yang dilas dan penampang selain profil I digulung. Lihat [Belum dibuat](topic:not-built-yet).

## Satuan

Panjang mengikuti satuan yang Anda pilih di bilah alat ({{ui:Satuan}}), seperti bagian BimCraft lainnya: posisi beban yang Anda ketik dan lihat ({{ui:Dari}}, {{ui:Ke}}, {{ui:Pada}}), titik beban simpul dan reaksi, tinggi lantai di {{ui:Gempa}}, dan kolom lendutan serta simpangan (kaki dan inci menampilkan panjang kecil ini dalam inci desimal). Ubah satuan kapan saja; tab digambar ulang. Gaya tetap dalam kN dan kN·m, dan laporan (PDF, CSV) serta file CraftScript tetap dalam milimeter dengan satuannya tertulis. Ukuran penampang, diameter tulangan, dan selimut di blok {{ui:Beton}} tetap dalam milimeter, sesuai namanya.

## Pemeriksaan desain

Blok {{ui:Pemeriksaan desain}} (sama dengan milik DetailCraft) memakai {{ui:Standar desain}}, ASCE 7 + AISC 360 atau EN 1990 + EN 1993-1-1, dan {{ui:Mutu baja}}. Berikan setiap kasus beban jenisnya (mati, hidup, angin …) dan {{ui:Buat kombinasi}} menulis kombinasi beban kode dari kasus Anda; analisis kemudian menjalankannya seperti kombinasi lainnya.

{{ui:Periksa batang}} lalu memeriksa setiap **profil I baja digulung** dengan pemeriksaan DetailCraft (tarik, tekan dengan tekuk, lentur dengan tekuk torsi lateral, geser, lentur dengan gaya aksial, lendutan; klausulnya ada di laporan) dan menampilkan seberapa besar kapasitasnya terpakai, diwarnai pada model. Ini adalah **alat bantu sampai insinyur meninjaunya**.

**Batang mana yang diperiksa.** Profil IFC tidak menyatakan apakah profil I baja digulung atau dilas, jadi BimCraft menyebutnya digulung hanya bila nama profilnya (atau, jika tidak ada, nama tipe elemennya) adalah ukuran dari tabel AISC W atau S, atau tabel EN 10365 IPE, HEA, atau HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **dan** tinggi, lebar, badan, serta sayap dalam file cocok dengan ukuran itu dalam 1 %. Setiap profil I lainnya (balok pelat, ukuran dengan nama lain, ukuran yang diedit) dianggap dilas dan hasilnya **tidak diperiksa**, begitu pula tabung, siku, kanal, dan penampang lain, bagian langsing, dan torsi. Periksa batang-batang itu bersama insinyur.
