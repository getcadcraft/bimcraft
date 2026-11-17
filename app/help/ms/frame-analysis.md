---
title: Analisis rangka struktur
summary: Daya, tindak balas dan pesongan rasuk, tiang dan tupang model di bawah kes beban dan gabungan yang anda tetapkan, disimpan dalam IFC. Alat bantu analisis, bukan semakan kod.
keywords: analisis, unit, kaki dan inci, unit paparan, analisis struktur, semakan reka bentuk, penggunaan, digelek, dikimpal, AISC 360, EN 1993-1-1, analisis rangka, model analisis, kaedah kekukuhan, beban, kes beban, gabungan, beban mati, beban hidup, berat sendiri, tindak balas, momen lentur, ricih, daya paksi, pesongan, bentuk pesongan, penyokong, berengsel, tetap, lepasan, laporan, pdf, csv, craftscript, frame3d, rasuk, tiang, anggota
from: b93b58c4
---

Tab {{ui:Analisis}} di sebelah kanan mencari daya dalam rasuk, tiang dan tupang model yang dibuka, tindak balas di kaki tiang dan sejauh mana anggota melentur, bagi beban yang anda berikan.

:::warning
Ia ialah **alat bantu analisis, bukan semakan kod**. Analisis tidak menggunakan kod reka bentuk: ia tidak menentukan saiz anggota atau menyemak kapasiti, dan ia tidak memilih faktor beban. Seorang jurutera menyemak model analisis, beban dan penyokongnya, serta memutuskan maksud nombor-nombor itu. Blok {{ui:Semakan reka bentuk}} di bawahnya menyemak bahagian I keluli digelek mengikut AISC 360 atau EN 1993-1-1, sebagai alat bantu sehingga seorang jurutera telah menyemaknya: lihat [Semakan reka bentuk](topic:frame-analysis#design-checks).
:::

## Jalankan

1. Buka model IFC dan tab {{ui:Analisis}}.
2. Pilih satu atau lebih rasuk, tiang atau tupang dalam paparan, pilih {{ui:Kes}}, {{ui:Beban}} dan {{ui:Arah}}, taip nilai dan tekan {{ui:Tambah beban}}: kN/m untuk beban yang tersebar sepanjang anggota, kN untuk beban titik.
3. Tekan {{ui:Jalankan analisis}}.

Jadual menyenaraikan daya paksi terbesar setiap anggota, ricih, momen lentur, kilasan dan pesongan; klik nama anggota untuk memilihnya dalam paparan. Di bawah ialah tindak balas. {{ui:Pada model}} melukis bentuk pesongan, atau satu tindakan sebagai rajah di sebelah setiap anggota. Keputusan tidak lagi sahih apabila model berubah: jalankan semula.

Setiap beban dan tetapan ialah satu perubahan dalam senarai {{ui:Perubahan}}: {{ui:Buat asal}} membatalkannya, dan {{ui:Simpan sebagai IFC}} menyimpannya dalam fail (set sifat projek `CadCraft_Analysis`), supaya apabila model dibuka di sini kali seterusnya, bebannya masih ada.

## Cara model analisis dibuat

- Setiap IfcBeam, IfcColumn dan IfcMember yang bentuknya ialah satu penyemperitan lurus menjadi anggota pada garis pusat keratannya. Sifat keratannya datang daripada profil: bentuk I, U, L dan T, segi empat dan tiub, bulatan dan tiub bulat, atau mana-mana garis luar tertutup (maka pemalar kilasan ialah anggaran, dinyatakan dalam laporan). Apa-apa yang lain ditinggalkan dan dikira.
- Dalam model, rasuk berhenti pada muka tiang dan duduk di bawah lantai. Setiap hujung anggota dibawa sepanjang garisnya sendiri ke paksi anggota yang ia dirangka ke dalamnya, apabila paksi itu dekat (dalam lingkungan saiz keratan), dan anggota itu dipecahkan di situ. Laporan menyatakan berapa banyak hujung yang dialihkan.
- **Kaki tiang** yang tiada apa-apa di bawahnya ialah penyokong: tetap (permulaan) atau berengsel (dipegang di tempatnya dan terhadap kilasan, bebas berpusing).
- **Hujung rasuk** ialah tegar atau berengsel mengikut peraturan {{ui:Hujung rasuk tanpa sambungan}}; **tupang** (IfcMember) berengsel di kedua-dua hujung. Pilih satu anggota untuk memberikan hujungnya, atau kaki tiang, peraturannya sendiri.
- Bahan mengikut nama: konkrit (E = 30 GPa), kayu (E = 11 GPa), selainnya keluli (E = 200 GPa).

Jika rangka boleh bergerak tanpa melentur apa-apa — mekanisme — larian analisis berhenti dan menyatakan di mana dan ke arah mana.

## Kes, gabungan, tanda dan laporan

Analisis bermula dengan **Mati** (berat sendiri), **Hidup** dan **Mati + hidup**; tambah kes dan gabungan dengan faktor yang diminta oleh kod reka bentuk anda. N > 0 ialah tegangan; My > 0 meletakkan sisi −z tempatan anggota dalam tegangan (rasuk yang melendut di bawah graviti mempunyai My > 0). {{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} memuatkan andaian, keratan, kes, tindak balas beserta jumlahnya, daya anggota, sesaran dan sampul. {{ui:Eksport sebagai CraftScript}} menulis rangka untuk ruang kerja Skrip PartCraft, di mana fungsi pustaka `frame3d` menyelesaikannya dalam kod yang boleh dibaca.

Kaedah ialah kaedah kekukuhan langsung, linear dan tertib pertama melainkan anda tandakan Tertib kedua (P-Delta), disemak terhadap kes buku teks.

**Tertib kedua (P-Delta).** Tandakan *Second order (P-Delta)* di sebelah {{ui:Jalankan analisis}}: setiap gabungan diselesaikan semula dengan daya paksi anggota bertindak ke atas rangka yang melendut (setiap anggota dipotong kepada 4 keping, supaya lenturan anggota di antara hujungnya turut dikira), sehingga daya paksi stabil. Baris keputusan memberikan bilangan laluan dan berapa banyak ayunan bertambah; momen, pesongan, semakan reka bentuk dan laporan kemudiannya menggunakan keputusan ini. Di atas beban kritikal kenyal rangka, larian berhenti dan menyatakannya. Ia kenyal dengan putaran kecil, lenturan sahaja, tanpa pengurangan kekukuhan atau beban nosional (bukan kaedah analisis langsung AISC dengan sendirinya); papak, dinding dan lantai tegar kekal tertib pertama.

**Tekanan lantai pada papak.** Bagi papak konkrit (analisis membaca papak sebagai plat apabila bahannya konkrit), blok Beban mempunyai {{ui:Tekanan pada setiap papak}}: taip kN/m², pilih kes di atas dan tekan {{ui:Tambah pada papak}}. Ia diagihkan ke atas setiap papak yang dijumpai oleh analisis, ke bawah, dan disenaraikan dengan pautan Alih keluar. Ia ialah satu tekanan untuk semua papak, bukan satu setiap papak, dan ia bukan beban kod: taip nilai yang diberikan oleh jurutera anda.

**Frekuensi asli (unsur terhingga).** Blok {{ui:Unsur terhingga: frekuensi asli}} di bawah keputusan mencari mod terendah bagi model yang sama dengan enjin unsur terhingga: rasuk dengan lepasan hujungnya, papak dan dinding sebagai cangkerang empat nod rata, lantai tegar, penyokong. Pilih berapa mod (3, 6, 10 atau 20) dan elemen papak (cangkerang empat nod untuk papak tebal atau nipis, atau yang papak nipis) dan tekan {{ui:Cari frekuensi}}. Jadual memberikan frekuensi setiap mod dalam Hz, tempohnya dalam saat dan jisim modal berkesannya sepanjang X, Y dan Z sebagai sebahagian daripada jisim yang boleh bergerak; {{ui:Tunjuk pada model}} melukis mana-mana mod dengan cara bentuk pesongan dilukis. Jisim ialah ketumpatan bahan darab isipadu: beban tidak menambah jisim, dan bahan tanpa ketumpatan tidak mempunyainya. Laporan (PDF, CSV) memuatkan jadual itu. Ia kenyal dan pergerakan kecil sahaja, dan tiada beban seismik atau angin dibuat daripada kod di sini. Bukan semakan kod; jurutera anda menyemak keputusan.

**Sambutan spektrum, sejarah masa dan tolakan sisi.** Tiga blok lagi terletak di bawah frekuensi, menggunakan model unsur terhingga yang sama. Jisim bagi kesemuanya ialah ketumpatan bahan tambah beban ke bawah bagi kes yang anda tandakan, setiap satu didarab dengan faktor yang anda taip (contohnya Mati pada 1 dan Hidup pada bahagian yang anda kira sebagai jisim).

{{ui:Sambutan spektrum}} membaca setiap mod daripada spektrum yang anda berikan (jadual tempoh dan pecutan, atau bentuk ASCE 7 daripada SDS, SD1 dan TL; butang {{ui:Guna nilai blok Seismik}} menyalin nilai itu daripada blok {{ui:Seismik}}) dan menggabungkan mod dengan CQC, SRSS, peraturan sepuluh peratus atau jumlah mutlak, kemudian menggabungkan arah X, Y dan Z (100 % + 30 % atau SRSS). Ia memberikan ricih tapak, sesaran tingkat, daya hujung anggota dan jadual mod yang memberi amaran apabila mod yang digunakan membawa kurang daripada 90 % jisim. Anda boleh mengskalakan keputusan dengan faktor atau sehingga ricih tapak yang anda taip; blok ini tidak pernah mengira ricih tapak itu sendiri. Keputusan tidak mempunyai tanda.

{{ui:Sejarah masa}} menjalankan pecutan tanah dengan superposisi modal (tepat untuk garis lurus rekod di antara titik) atau dengan kamiran langsung (Newmark average acceleration dengan redaman Rayleigh). Input ialah sinus atau denyut rekaan (sentiasa dilabelkan sintetik), rekod yang anda tampal, atau fail teks yang anda buka (masa dan pecutan, satu pecutan setiap baris dengan langkah, atau fail gaya PEER dengan pengepala DT=; dalam g atau m/s²). Ia memberikan sesaran bumbung dan ricih tapak terhadap masa, sesaran setiap aras, dan sampul daya hujung anggota. Model dengan rekod yang sangat panjang menyimpannya untuk sesi sahaja.

{{ui:Tolakan sisi (pushover)}} menolak bumbung ke sisi dalam langkah kecil (corak seperti mod pertama, atau seragam), dengan sendi plastik di hujung anggota yang mempunyai bentuk I. Sendi mengalah pada momen plastik, yang berkurang apabila daya paksi bertambah (dikira daripada bentuk yang dilukis, abaikan fillet); pengerasan ialah pilihan, P-delta ialah pilihan, dan gabungan graviti boleh digunakan dahulu. Ia memberikan lengkung kapasiti (ricih tapak terhadap sesaran bumbung), sendi pertama, dan keadaan serta putaran plastik setiap sendi. {{ui:Jalankan sejarah masa tak linear}} menjalankan sendi yang sama di bawah rekod blok Sejarah masa pada model kecil. Sendi terbentuk di hujung anggota sahaja (letakkan nod di tempat sendi patut terbentuk di dalam rentang); anggota yang dilepaskan di kedua-dua hujung tidak mendapat apa-apa, dan pengalahan serta lengkokan tupang tidak dimodelkan; papak dan dinding kekal kenyal; tiada kriteria penerimaan diberikan. Bukan semakan kod; jurutera anda menyemak keputusan. Tetapan disimpan bersama model, dan laporan memuatkan jadual.

Belum dibina: lengkokan, pembetulan jisim hilang untuk sambutan spektrum, penskalaan rekod, kriteria penerimaan untuk sendi (tindak balas dinamik ada, di atas), beban kawasan selain tekanan tunggal pada setiap papak, ofset anggota, tupang tegangan sahaja, dinding dan papak dalam rangka, semakan kod reka bentuk bagi bentuk dikimpal dan bagi keratan selain bahagian I digelek. Lihat [Belum dibina](topic:not-built-yet).

## Unit

Panjang mengikut unit yang anda pilih dalam bar alat ({{ui:Unit}}), seperti bahagian lain BimCraft: kedudukan beban yang anda taip dan lihat ({{ui:Daripada}}, {{ui:Ke}}, {{ui:Pada}}), titik beban nod dan tindak balas, ketinggian lantai dalam {{ui:Seismik}}, dan lajur pesongan dan sesaran (kaki dan inci menunjukkan panjang kecil ini dalam inci perpuluhan). Tukar unit pada bila-bila masa; tab dilukis semula. Daya kekal dalam kN dan kN·m, dan laporan (PDF, CSV) serta fail CraftScript kekal dalam milimeter dengan unit ditulis. Saiz keratan, diameter bar dan penutup dalam blok {{ui:Konkrit}} kekal dalam milimeter, seperti yang dinamakan.

## Semakan reka bentuk

Blok {{ui:Semakan reka bentuk}} (sama dengan DetailCraft) mengambil {{ui:Kod reka bentuk}}, ASCE 7 + AISC 360 atau EN 1990 + EN 1993-1-1, dan {{ui:Gred keluli}}. Berikan setiap kes beban jenisnya (mati, hidup, angin …) dan {{ui:Buat gabungan}} menulis gabungan beban kod bagi kes anda; analisis kemudian menjalankannya seperti mana-mana gabungan.

{{ui:Semak anggota}} kemudian menyemak setiap **bahagian I keluli digelek** dengan semakan DetailCraft (tegangan, mampatan dengan lengkokan, lentur dengan lengkokan sisi-kilasan, ricih, lentur dengan daya paksi, pesongan; fasal-fasalnya ada dalam laporan) dan menunjukkan berapa banyak kapasitinya yang digunakan, diwarnakan pada model. Ia ialah **alat bantu sehingga seorang jurutera telah menyemaknya**.

**Anggota mana yang disemak.** Profil IFC tidak menyatakan sama ada bahagian I keluli digelek atau dikimpal, jadi BimCraft menganggapnya digelek hanya apabila nama profilnya (jika tidak, nama jenis elemen) ialah saiz daripada jadual AISC W atau S atau jadual EN 10365 IPE, HEA atau HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **dan** kedalaman, lebar, badan dan sayap dalam fail sepadan dengan saiz itu dalam lingkungan 1 %. Setiap bahagian I lain (gelagar plat, saiz di bawah nama lain, saiz yang diedit) dianggap dikimpal dan dipaparkan sebagai **tidak disemak**, begitu juga tiub, sudut, saluran dan keratan lain, bahagian langsing dan kilasan. Semak anggota-anggota itu bersama jurutera.
