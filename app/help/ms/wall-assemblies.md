---
title: Himpunan dinding dan dimensi rujukan
summary: Bina jenis dinding anda sendiri lapisan demi lapisan dengan teras yang jelas, simpan pustaka bahan projek, dan dimensikan ke muka dan garis tengah yang kekal melekat apabila dinding berubah.
keywords: lod, tahap pembangunan, lod 200, lod 300, generik, himpunan dinding, jenis dinding, lapisan, teras, muka teras, garis tengah teras, rongga, jurang udara, membran, pembalut rumah, pustaka bahan, bahan, ketebalan, dimensi rujukan, dimensi, bersekutu, garis lokasi, kladding, kayu tegak, papan gipsum
from: 4ea8fbf5
---

## Apa yang anda akan lakukan

Buat jenis dinding yang sepadan dengan dinding yang akan anda bina: kladding, papan pelapis, teras kayu tegak 5½-inci dan papan gipsum, atau bata, jurang udara dan dinding rangka kayu. Tandakan lapisan mana yang teras, supaya dimensi atau garis lokasi boleh memegang teras manakala kemasan di sekelilingnya berubah. Kemudian dimensikan dinding ke muka dan garis tengah yang anda maksudkan.

## Buat jenis dinding

1. Mulakan bangunan atau buka model IFC dan hidupkan {{ui:Lukis}}, kemudian pilih alat {{ui:Dinding}}.
2. Pilih pemula dalam {{ui:Jenis dinding}} dan buka {{ui:Himpunan dinding…}}. Pemula dibuka sebagai salinan; beri jenis baharu itu satu nama.
3. Lapisan bermula dari luar di bahagian atas senarai hingga ke dalam di bahagian bawah. Pilih bahan setiap lapisan, taip ketebalannya (unit projek, atau nilai tertentu seperti `12.7 mm` atau `1/2"`), pilih fungsinya (kemasan, substrat, struktur, penebat, membran) dan tandakan lapisan **Teras**. Lapisan teras mesti satu kumpulan yang berterusan.
4. {{ui:Tambah lapisan}} menambah lapisan, {{ui:Tambah rongga}} menambah jurang udara dengan pengudaraannya (tidak dinyatakan, tanpa pengudaraan, berudara), {{ui:Tambah membran}} menambah lapisan tanpa ketebalan nominal, seperti pembalut rumah. Anak panah mengalihkan lapisan ke luar atau ke dalam.
5. Pratonton melukis lapisan mengikut skala dengan teras digariskan, dinomborkan seperti baris, dan mendimensikan setiap lapisan, teras dan jumlah. {{ui:Simpan jenis}}.

Jenis baharu berada dalam senarai alat Dinding dan dalam **Sifat** dinding yang dipilih. Menyimpan jenis yang anda edit mengubah setiap dinding yang menggunakannya; {{ui:Pendua jenis}} membuat satu yang berasingan dan memberikannya hanya kepada dinding yang anda pilih. Setiap simpanan ialah satu langkah buat asal, bersama dinding yang dialihkannya, pintu dan tingkap di dalamnya, serta dimensi yang bergantung padanya.

Jurang udara menambah lebar. Membran tidak menambah apa-apa: ia kekal dalam jenis supaya jadual boleh mencarinya kemudian, dan ia tidak dikira dalam ketebalan dinding atau teras. Jurang udara atau membran tidak pernah dikira sebagai bahan pepejal. Dalam fail yang disimpan sebagai IFC2X3, membran disimpan dalam rekod jenis tetapi ditinggalkan daripada lapisan bahan fizikalnya.

## Tanda jenis dengan tahap pembangunannya (LOD)

Jenis boleh menyatakan sejauh mana ia dibangunkan. Dalam penyunting, **Tahap pembangunan (LOD)** menawarkan skala tetap 100, 200, 300, 350, 400 dan 500, atau **Tidak ditetapkan**. Dinding generik ("Wall 230 generic") ialah LOD 100 atau 200; binaan khusus dengan lapisan sebenar ("230 clay brick, plastered both sides") ialah LOD 300 atau lebih. Tag ini milik anda untuk ditetapkan: BimCraft tidak mengiranya, dan jenis pemula tiada tag.

Tag dipaparkan di sebelah nama jenis dalam senarai jenis alat Dinding, dalam **Sifat** dinding, dan dalam senarai [Tukar jenis](topic:wall-tools), dan laporan selepas pertukaran menyatakan sama ada tahap naik atau turun. Untuk melihatnya dalam jadual **Dinding mengikut jenis** dan CSVnya, tandakan **Tunjuk LOD setiap jenis dinding dalam jadual dinding** dalam Tetapan › BimCraft › Dinding: lajur terakhir, LOD, ditambah. Ia disimpan dalam fail IFC bersama jenis (dalam set sifat `CadCraft_WallType` jenis itu, sebagai sifat `LOD` dan dalam rekod jenis itu), jadi ia ada apabila anda membuka fail itu semula. Setakat ini tag hanya pada jenis dinding, bukan pada elemen tunggal atau jenis elemen lain.

## Dinding generik untuk peringkat lakaran

Senarai Jenis alat Dinding bermula dengan dua dinding **generik**: **Generic wall 200 mm (exterior)** dan **Generic wall 100 mm (interior)**. Setiap satu ialah satu lapisan bahan generik, ditag LOD 200. Gunakannya apabila anda tahu di mana dinding akan diletakkan tetapi belum tahu diperbuat daripada apa.

Dinding yang jenisnya ditag **LOD 100** atau **LOD 200** dilukis dalam setiap pelan sebagai **satu jalur berlorek**, pada setiap tahap perincian: tiada lapisan, tiada garisan lapisan. Itu benar bagi dinding generik dan bagi mana-mana jenis anda sendiri yang anda tag LOD 100 atau 200. Dinding itu sendiri lengkap: ia mempunyai ketebalan, pintu dan tingkapnya, bilik dan kuantitinya.

Untuk membangunkannya, tukar jenisnya (Sunting › Dinding › **Tukar jenis**, atau Jenis dalam Sifat). Dinding itu tidak dilukis semula: dinding yang sama mengambil jenis baharu, dan laporan menyatakan apa yang beralih. Jenis yang ditag LOD 300 atau lebih tinggi dilukis dengan lapisannya seperti sebelum ini.

Untuk melukis setiap dinding mengikut lapisannya tanpa mengira tagnya: Tetapan › BimCraft › Dinding, nyahtandakan **Lukis dinding jenis LOD 100 atau LOD 200 sebagai satu jalur berlorek**.

Pintu dan tingkap pemula juga ialah jenis generik (saiz dan cara bukaan, bukan produk). Dengan **Tunjuk LOD setiap jenis dinding dalam jadual dinding** dihidupkan, jadual Pintu dan Tingkap menunjukkan LOD 200 untuknya.

## Beri jenis data pengukuran kuantiti

Dalam penyunting jenis dinding, **Data pengukuran kuantiti** mengambil apa yang perlu diketahui oleh penganggar tentang dinding itu, sekali untuk jenis: **unit** yang digunakan untuk membinanya (bata atau blok: namanya, panjang, tinggi dan lebarnya), **mortar** (nama dan ketebalan sambungan) dan **kadar** dengan kod mata wangnya (tiga huruf, seperti USD, EUR atau ZAR) serta kadar itu bagi setiap: meter persegi atau kaki persegi luas dinding bersih, meter atau kaki panjang dinding, atau setiap dinding. Semua ini adalah pilihan.

Ia disimpan bersama jenis dalam fail. Setiap dinding jenis itu kemudian melaporkannya: {{ui:Jadual}} › **Jenis dinding: data pengukuran kuantiti** menyenaraikan unit, mortar, kadar dan kadar didarab dengan kuantiti yang diukur, dan pengukuran kuantiti yang diserahkan kepada TakeoffCraft membawanya pada item jenis dinding itu. Tukarnya pada jenis dan setiap dinding akan mengikutinya.

Tiga medan lagi untuk mengira bata atau blok dan mortar:

- **Pembaziran pada unit, %** ditambah kepada bilangan unit. Biarkan kosong untuk menggunakan nilai kaedah pengukuran projek, atau tiada jika kaedah itu tiada. Masukkan 0 untuk tiada pembaziran tanpa mengira apa kata kaedah.
- **Mortar tambahan, %** untuk lekuk (frog) atau lubang yang menerima mortar. Ia ditambah kepada isipadu mortar. Biarkan kosong jika tiada.
- **Lapisan yang dibina daripada unit ini**: tandakan setiap lapisan yang merupakan satu daun bata atau blok ini. Dinding berongga mempunyai dua. Jika tiada yang ditandakan, lapisan teras dikira.

Kadar juga boleh per unit untuk dipesan, per 1000 unit untuk dipesan atau per m³ mortar. Apabila unit mempunyai panjang dan tinggi, **Jenis dinding: data pengukuran kuantiti** memaparkan unit per m² (atau ft²) bagi satu daun, unit untuk dipesan dan isipadu mortar; formulanya ada dalam [Bata, blok dan mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Satu jenis mempunyai satu unit: dua daun unit berbeza (daun luar bata dan daun dalam blok) belum boleh dikira pada satu jenis.

## Pegang teras kekal

Dalam **Sifat**, tetapkan **Garis lokasi** dinding kepada muka teras atau garis tengah teras. Apabila anda kemudian menambah atau menebalkan kemasan, garis itu kekal di tempatnya dan dinding membesar di sekelilingnya; dinding yang bertemu dengannya pada sudut akan mengikut, jadi sudut lurus kekal tertutup.

## Bahan projek

{{ui:Pustaka bahan…}} menyenaraikan bahan projek: nama, kategori, ketebalan yang dimulakan oleh lapisan, warna paparan, corak isian potongan dan nota. Pustaka disimpan dalam IFC bersama projek. Memilih bahan untuk lapisan memberikan lapisan itu ketebalan lalai bahan, yang kemudian boleh anda ubah; mengedit pustaka kemudian tidak pernah mensaiz semula dinding yang sudah anda lukis. Anda juga boleh membuat bahan daripada senarai bahan lapisan dengan {{ui:+ Bahan baharu…}}.

## Dimensi rujukan

{{ui:Anotasi}} › {{ui:Dimensi rujukan}}: pilih mengufuk, menegak atau sejajar, dan satu rujukan: muka kemasan luar atau dalam, muka teras luar atau dalam, garis tengah dinding atau garis tengah teras. Pilih dinding pertama, tukar rujukan jika mahu, pilih yang kedua, kemudian klik di tempat garis dimensi akan pergi. Dua rujukan pada satu dinding mengukur jumlah ketebalannya atau ketebalan terasnya. {{ui:Dimensi rujukan…}} menyenaraikan dimensi paparan, termasuk mana-mana yang kehilangan dinding, dengan Sifat, Ikat semula rujukan dan Padam.

### Dimensikan seluruh pelan mengikut peraturan

{{ui:Anotasi}} › {{ui:Dimensikan pelan…}} mendimensikan bahagian luar pelan lantai yang anda lihat: saiz keseluruhan mengikut setiap arah, satu baris dimensi di sepanjang setiap tepi luar (hujung dinding, dinding yang bertemu tepi itu, dan pintu serta tingkap di dalamnya), dengan baris diletakkan jauh dari bangunan. Tandakan apa yang anda mahu, baca bilangannya, kemudian {{ui:Tambah dimensi}}. Ia ialah dimensi rujukan biasa, jadi ia mengikut dinding apabila dinding beralih dan anda boleh pilih, alih atau padam mana-mana daripadanya; keseluruhan set ialah satu langkah buat asal, dan menjalankannya semula tidak membuat sebarang pendua.

Ia hanya mendimensikan bahagian luar: bilik di dalam bangunan, dinding melengkung dan dinding yang tidak bersudut tegak dengan pelan ditinggalkan untuk alat tangan, dan garisan grid bukan dinding, jadi dimensi antara grid tidak dibuat di sini. Pembantu yang disambungkan kepada anda boleh melakukan perkara yang sama dengan `plan_dimension`.

Dimensi dilekatkan pada dinding, bukan pada satu titik di skrin: apabila dinding beralih atau jenisnya berubah, nilai itu mengikut. Jika dinding dipadam, dimensi itu menyatakan ia tidak selesai dan tidak menunjukkan nombor, sehingga anda mengikatnya semula atau buat asal. Kotak panjang juga menerima koordinat pelan seperti `10',12'` untuk garis dimensi di tempat tepat.

Dimensi adalah untuk dinding yang dilukis oleh BimCraft, dalam paparan pelan. Belum dibina: dimensi dalam keratan dan dongakan, kepada pintu, tingkap dan komponen lain, dan lapisan himpunan yang dilukis dalam pelan dan keratan; lihat [Apa yang belum dibina](topic:not-built-yet).

## Lihat juga

[Lukis dinding](topic:draw-walls), [Tukar dinding, pintu atau tingkap](topic:change-a-wall-or-door), [Sifat](topic:properties-panel).
