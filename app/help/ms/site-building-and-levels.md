---
title: Tapak, bangunan di atasnya, dan aras-arasnya
summary: Lukis garis luar tapak, letakkan dan pusingkan bangunan di atas tapak, tambah aras pada ketinggian yang diberikan atau bahagikan ketinggian bangunan, dan lukis pada aras yang anda pilih.
keywords: tapak, pelan tapak, garisan bangunan, sela undur, servitud, hak laluan, garis sempadan harta, lot, plot, sempadan, peletakan bangunan, pusing bangunan, letak bangunan, aras, tingkat, tambah aras, bahagi ketinggian, ketinggian lantai ke lantai, IfcSite, IfcBuilding, IfcBuildingStorey, struktur ruang
from: 48d10c1e
---

## Apa yang akan anda lakukan

Sediakan bahagian model IFC yang memegang semua yang lain: tapak, bangunan di atasnya dan aras bangunan.

Model disusun sebagai **tapak** yang memegang **bangunan**, yang memegang **arasnya** (tingkat); dinding, lantai dan segala yang lain tergolong dalam satu aras. {{ui:Fail}} › {{ui:Bangunan baharu}} menyediakan ketiga-tiganya. Model daripada program lain yang mempunyai bangunan tetapi tiada tapak akan mendapat tapak kali pertama anda melukis satu: bangunan diletakkan di atasnya di tempat ia sedia ada.

## Lukis tapak

1. Hidupkan {{ui:Lukis}}, kemudian pilih {{ui:Binaan}} › {{ui:Tapak}}.
2. Klik bucu tapak (alat ini melekap seperti alat Dinding). Klik bucu pertama sekali lagi, klik dua kali atau tekan {{key:Enter}} untuk selesai. {{key:Backspace}} membatalkan satu bucu.
3. Baris menunjukkan luas tapak. Lukis semula untuk menukarnya.

Pelan setiap aras menunjukkan garis luar tapak sebagai garis sempadan harta.

## Letakkan bangunan di atas tapak

Dengan {{ui:Tapak}} dihidupkan, taip **X** dan **Y** bangunan di atas tapak dan **Pusing** dalam darjah, atau klik {{ui:Letakkan bangunan dengan satu klik}} dan klik di tempat asal bangunan. Segala yang ada dalam bangunan (aras, dinding, grid, semua yang anda lukis) bergerak bersamanya; tapak dan garis luarnya kekal. Pelan terus menunjukkan setiap aras segi dengan bangunan.

## Garisan bangunan dan servitud

Garisan bangunan dan servitud (servitud, hak laluan) dilukis di atas tapak sebagai kekangan. Ia **memberi amaran, tidak pernah menyekat**: dinding di atas satu garisan dilukis seperti yang anda minta, dan amaran yang menamakan dinding dan garisan atau servitud itu muncul dalam panel Masalah. Alihkan dinding kembali dan amaran itu hilang. Amaran boleh diterima dengan sebab (contohnya kelonggaran yang diberikan pihak berkuasa).

- **Garisan bangunan daripada sela undur.** {{ui:Binaan}} › {{ui:Garisan bangunan}}, kemudian {{ui:Sela undur}}: taip sejauh mana garisan itu masuk ke dalam dari setiap sempadan tapak. Sempadan dinomborkan pada pelan semasa alat dihidupkan. Garisan dikira daripada jarak tersebut dan mengikut garis luar tapak jika anda melukisnya semula dengan bilangan sempadan yang sama. Jarak itu milik anda, dibaca daripada geran tanah atau skim zon anda; BimCraft tidak mengisi apa-apa.
- **Garisan bangunan yang dilukis.** Dengan {{ui:Garisan bangunan}} dihidupkan, klik titiknya dan selesaikan dengan klik dua kali atau {{key:Enter}}. Selesaikan pada titik pertama untuk garisan tertutup: kawasan di dalamnya ialah tempat yang boleh dibina, dan dinding yang mana-mana bahagiannya di luar kawasan itu diberi amaran. Garisan terbuka hanya memberi amaran tentang dinding yang merentasinya.
- **Servitud.** {{ui:Binaan}} › {{ui:Servitud}}: pilih jenisnya, taip namanya, rujukan didaftarkannya dan lebarnya, kemudian klik garis tengahnya dan selesaikan (jalur), atau tutupkannya pada titik pertama (kawasan). Dinding yang mana-mana bahagiannya berada di atasnya diberi amaran, pada setiap aras.
- Muka yang tepat pada garisan bersentuh, bukan merentas (toleransinya 1 mm).
- Pilihan jisim semasa bagi setiap set pilihan diperiksa dengan cara yang sama seperti dinding: jisim di luar sempadan, di atas garisan bangunan atau di atas servitud diberi amaran. Lihat [Pilihan jisim yang disimpan bersebelahan](topic:massing-options).
- Pilih satu dengan {{ui:Pilih}} untuk menukar namanya, rujukannya, jenisnya atau lebarnya, mengalihkannya, atau memadamnya.

Ia dilukis pada pelan setiap aras, pada helaian dan dalam PDF pelan: garisan bangunan putus-putus, servitud bertitik-titik, setiap satu dengan labelnya. Dalam fail IFC, setiap satu ialah anotasi (IfcAnnotation, jenis BuildingLine atau Servitude) pada tapak, dengan garisnya sebagai lengkung biasa yang boleh dibaca oleh program lain. Pemeriksaan menggunakan garis luar sebenar setiap dinding pada pelan, dengan sambungannya seperti yang dilukis; dinding melengkung diperiksa mengikut ketebalannya sendiri di sekeliling garis tengahnya.

## Tambah aras

Dalam panel {{ui:Aras}}, {{ui:Tambah aras di atas}} menambah satu, {{ui:Tambah aras di bawah}} menambah satu di bawah yang paling rendah (bawah tanah, pada ketinggian negatif). {{ui:Tambah aras…}} menambah beberapa sekaligus:

- **Pada ketinggian ini**: taip ketinggian di atas aras paling rendah, dipisahkan dengan koma (contohnya `12', 24', 36'`). Ketinggian yang sudah ada aras dilangkau.
- **Bahagikan ketinggian bangunan**: taip ketinggian bangunan dan bilangan aras. Aras yang anda ada beralih ke ketinggian baharunya dari yang paling rendah ke atas, yang tiada ditambah, dan mana-mana yang di atasnya kekal di tempatnya.

Dinding yang berjalan ke aras di atas mengikutinya, begitu juga tiang dan tanjakan.

{{ui:Salin aras ini…}} (dalam panel yang sama) menyalin apa yang dilukis pada aras yang anda lihat ke aras lain atau ke aras baharu di atas, supaya pelan lantai boleh naik ke bangunan dalam satu langkah. Lihat [Lukis dinding](topic:draw-walls).

## Lukis pada satu aras

Setiap alat {{ui:Lukis}} berfungsi pada aras yang dipilih dalam senarai aras pelan (atau dipilih dalam panel {{ui:Aras}}): apa yang anda lukis tergolong dalam aras itu.

## Apa yang sepatutnya anda lihat

- Setiap perubahan ini ialah satu langkah: {{key:Mod+Z}} membatalkannya.
- Dalam fail IFC: tapak (IfcSite) dengan garis luar dan luasnya, bangunan (IfcBuilding) yang diletakkan di atasnya, dan aras (IfcBuildingStorey) dalam bangunan itu.

Lihat juga [Koordinat dalam BimCraft](topic:coordinates) untuk asal projek dan titik ukur.
