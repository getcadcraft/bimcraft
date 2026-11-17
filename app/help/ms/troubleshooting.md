---
title: Penyelesaian masalah
summary: Mesej yang ditunjukkan BimCraft, puncanya, dan apa yang perlu dilakukan, untuk membuka fail, folder, model 3D, lukisan dan suntingan.
keywords: masalah, ralat, tidak berfungsi, tidak dapat dibuka, gagal, tidak lengkap, rosak, perlahan, ranap, kosong, hilang, mesej, bantuan
from: 1e5a79fc
---

Mesej dipaparkan dalam baris status di bahagian bawah peringkat, dalam warna merah apabila sesuatu gagal. Cari mesej di bawah.

## Membuka fail

**"*name* bukan fail IFC, RVT, RFA, DWG atau DXF."**
BimCraft tidak mengenali fail itu. Semak sambungannya dan pastikan fail tidak kosong. PDF, imej dan fail pejabat tidak dibuka.

**".ifczip belum disokong. Simpan atau eksport model sebagai fail .ifc biasa."** (juga untuk `.ifcxml`)
Nyahzip `.ifczip` (ia zip biasa yang mengandungi `.ifc`) atau eksport IFC biasa.

**"… ialah fail projek yang BimCraft belum baca."**
Fail `.pln`, `.pla`, `.tpl` atau `.bpn`. Eksport IFC atau DWG daripadanya dan buka itu: lihat [Buka fail projek .pln dan .pla](topic:pln-project-files).

**"Fail IFC ini tidak dapat dibaca."**
Fail IFC rosak atau bukan IFC sebenar. Buka dalam penyunting teks: fail IFC sebenar bermula dengan `ISO-10303-21;`. Eksport semula.

**"Fail ini tidak lengkap: ia ialah … MB, tetapi indeks sendirinya menunjuk kepada data sekurang-kurangnya … MB dalam. …"**
Fail projek atau keluarga terpotong semasa disalin, dimuat naik atau diselaraskan. Fail pemacu awan yang "dalam talian sahaja" kelihatan sama. Fail yang dibuka sendiri masih dibuka, dengan mesej ini di bahagian atas kad dan "Menunjukkan apa yang dipulihkan; salin semula yang asal untuk model penuh.": kad hanya menunjukkan bahagian yang setiap baitnya ada dalam fail, dan menyenaraikan selebihnya di bawah **Tiada dalam fail**. Jadikan fail tersedia luar talian dalam pemacu awan anda, atau salin semula yang asal, dan buka semula. Dalam folder, BimCraft menunjukkan sandaran lengkap yang terbaru.

**"… Senarai kandungan fail itu juga berada dalam bahagian yang hilang, jadi tiada apa di dalamnya boleh dibuka."**
Fail terpotong begitu awal sehingga senarai kandungannya pun tiada. Tiada apa yang boleh dipulihkan daripada salinan ini. Salin semula yang asal dan buka semula.

**"Fail kompaun ini tiada aliran BasicFileInfo, jadi ia bukan fail Revit."**
Fail ialah fail kompaun jenis lain (dokumen pejabat lama menggunakan bekas yang sama). Semak anda memilih fail yang betul.

**"Masih bekerja pada yang terakhir…"**
BimCraft masih sibuk dengan fail atau folder sebelumnya. Tunggu baris status selesai, kemudian cuba lagi.

**Pemilih fail memalapkan fail saya.**
Pemilih hanya menawarkan `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` dan `.dxf`. Seret fail lain ke halaman, dan BimCraft akan memberitahu sama ada ia boleh membacanya.

## Membuka folder

**"Folder ini mempunyai lebih 20,000 fail. Pilih folder yang lebih kecil, seperti satu projek."**
Anda memilih folder terlalu tinggi, seperti pemacu penuh. Pilih satu folder projek.

**"Pelayar tidak memberi akses kepada *name*. Pilih semula dengan Buka folder."**
Anda mengklik {{ui:Buka semula}} pada folder terkini, dan kebenaran pelayar ditolak atau telah tamat tempoh. Pilih semula folder itu, atau seretnya masuk.

**Pelayar mengatakan ia akan "memuat naik" fail.**
Itu ialah perkataan pelayar sendiri untuk menyerahkan fail kepada halaman. BimCraft tidak menghantarnya ke mana-mana. Seret folder masuk untuk mengelak soalan itu.

**Tiada apa berlaku pada telefon atau tablet.**
Banyak pelayar mudah alih tidak dapat memilih folder. Buka fail tunggal, atau gunakan komputer.

## Enjin IFC dimuatkan kali pertama

**Baris status kekal pada "Memulakan enjin IFC…", atau menunjukkan ralat seperti "Failed to fetch".**
Enjin IFC tidak dapat dimuat turun. Anda mungkin luar talian, atau tembok api atau penyekat kandungan menghalangnya.

:::offline
Anda luar talian. Jika butang bar aplikasi tidak menunjukkan {{ui:Sedia untuk luar talian}}, enjin IFC tidak pernah disimpan dalam pelayar ini. Sambung semula, buka fail semula, kemudian klik {{ui:Simpan untuk luar talian}} supaya ia berfungsi luar talian kali berikutnya. Lihat [Dalam talian dan luar talian](topic:online-offline).
:::

:::online
Muat semula halaman dan cuba lagi. Pada rangkaian kerja, minta pasukan IT anda membenarkan fail `.wasm` tapak itu.
:::

## Menyimpan untuk kegunaan luar talian

**Butang menunjukkan {{ui:Tidak dapat menyimpan}}.**
Sesetengah fail tidak dimuat turun, biasanya kerana sambungan terputus. Semak sambungan anda dan klik butang sekali lagi. Sebarang salinan luar talian terdahulu dikekalkan sehingga yang baharu lengkap.

**Butang menunjukkan {{ui:Luar talian tidak tersedia}}.**
Tetingkap ini tidak boleh menyimpan salinan luar talian, contohnya tetingkap persendirian atau komputer kerja yang diurus. Lihat [Bekerja luar talian](common:offline).

**Butang kekal pada "Menyimpan *n* daripada *m*" untuk seketika.**
Salinan BimCraft kira-kira 11 MB, kebanyakannya enjin IFC. Kekalkan tab terbuka sehingga ia menunjukkan {{ui:Sedia untuk luar talian}}.

**BimCraft dibuka luar talian tetapi kelihatan lapuk.**
Salinan tersimpan anda daripada lawatan terdahulu. Apabila anda dalam talian, klik {{ui:Sedia untuk luar talian}} dan pilih {{ui:Simpan semula (dapatkan versi terkini)}}.

## Pandangan 3D

**Model tidak berada di tempat yang saya jangka, atau ia kecil.**
Tekan {{key:F}} atau klik {{ui:Muat}}. Muat sentiasa merangkumi segala-galanya dalam model, termasuk tingkat yang anda nyahtandakan dan elemen terpencil jauh dari bangunan, jadi bangunan mungkin kelihatan kecil. Zum masuk dari situ.

**Mengklik tidak memilih apa-apa.**
Tahan tetikus pegun semasa anda mengklik: seretan kecil mengorbit. Elemen pada tingkat yang tidak ditandakan tidak boleh dipilih. Dengan {{ui:Ruang}} dihidupkan, ruang lut sinar dipilih dahulu sebelum apa yang ada di dalamnya.

**Butang {{ui:Tepi}} malap: "Tepi dimatikan untuk model yang sangat besar".**
Model mempunyai lebih 1.5 juta segi tiga. Tepi dibiarkan mati untuk menjimatkan memori.

**Tab menjadi perlahan, putih, atau menunjukkan halaman ranap pelayar.**
Model terlalu besar untuk memori yang diberikan pelayar kepada tab. Tutup tab lain dan muat semula. Eksport IFC yang lebih kecil: satu bangunan, satu disiplin atau kurang tingkat. Lihat [Pelayar, peranti dan memori](topic:platforms).

**Pandangan 3D kekal kosong.**
WebGL mungkin dimatikan atau disekat. Dalam tetapan pelayar, hidupkan pecutan perkakasan (atau pecutan grafik) dan mulakan semula pelayar.

## Menyunting IFC

**"Guna nombor."** Nilainya berangka. Taip nombor biasa tanpa unit, seperti `2.4`.

**"Guna nombor bulat."** Nilainya ialah kiraan atau integer. Buang titik perpuluhan.

**"Hanya sifat nilai tunggal boleh disunting."** Senarai, enumerasi dan kuantiti hanya boleh dibaca.

**{{key:Mod+S}} membuka tetingkap "Simpan halaman" pelayar.**
Tiada perubahan belum disimpan, jadi BimCraft membiarkan kekunci itu kepada pelayar. Tutup tetingkap.

**{{key:Mod+Z}} tidak melakukan apa-apa.**
Ia hanya berfungsi apabila anda mempunyai perubahan belum disimpan dan tidak menaip dalam medan. Selepas simpan, tiada apa lagi untuk dibuat asal.

**Senarai {{ui:Perubahan}} masih menunjukkan suntingan selepas saya membuangnya dan membuka lukisan atau folder.**
Apabila anda menjawab soalan "Buang?" dengan OK dan kemudian membuka sesuatu selain model IFC, suntingan lama dikekalkan dalam memori dan {{ui:Simpan sebagai IFC}} masih akan menyimpannya. Untuk benar-benar bermula semula, buka IFC asal semula, atau muat semula halaman.

**Suntingan saya mengubah lebih banyak elemen daripada yang saya pilih.**
Anda menukar sifat dalam set yang ditandakan "(jenis)". Sifat jenis terpakai kepada setiap elemen bagi jenis itu. Klik {{ui:Buat asal}}. Lihat [Tukar sifat jenis bagi setiap elemen dalam satu jenis](topic:type-vs-instance).

## Lukisan

**"*name* tidak dapat dibaca. Ia mungkin rosak, atau disimpan dalam format yang pembaca belum kendalikan (…)."**
Simpan lukisan daripada program yang menghasilkannya sebagai DWG yang lebih lama (2018 atau lebih awal) atau sebagai DXF, dan cuba lagi.

**"Lukisan ini tiada apa untuk ditunjukkan."** atau **"*name* ialah lukisan kosong: ia tidak mengandungi garisan, teks atau blok."**
Lukisan itu kosong, atau hanya mengandungi perkara yang BimCraft belum lukis (lihat **Belum dilukis** di sebelah kanan).

**"Lukisan ini sangat besar; hanya sebahagian daripadanya ditunjukkan."**
BimCraft berhenti melukis untuk kekal responsif. Matikan lapisan yang tidak diperlukan, atau buka helaian yang anda perlukan daripada lukisan yang lebih kecil.

**Bahagian helaian hilang.**
Lukisan dipautkan mungkin hilang: lihat di bawah **Lukisan dipautkan** di sebelah kanan. Lihat [Cari lukisan dan imej yang dipautkan](topic:dwg-linked-files). Lapisan mungkin juga dimatikan: klik {{ui:Hidupkan semua}}.

**Imej menunjukkan bingkai kosong.**
Failnya tidak dijumpai, atau ia TIFF ("TIFF tidak boleh dipaparkan dalam pelayar"). Tambah salinan PNG atau JPEG dengan {{ui:Tambah imej…}}.

**Skrol pada pad jejak saya membuat zum dan bukannya menggerakkan lukisan.**
Begitulah cara lukisan berfungsi dalam BimCraft. Klik dan seret untuk pan.

## Masih menghadapi masalah

Baca [Apa yang belum dibina](topic:not-built-yet): perkara yang anda cari mungkin tidak wujud dalam binaan ini.
