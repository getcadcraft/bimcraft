---
title: Bilik, lantai, siling dan bumbung
summary: Bilik muncul apabila dinding menutupnya; beri bilik atau seluruh bangunan lantai dan siling, dan letakkan bumbung hip atau gable pada dinding. Semuanya mengikut apabila dinding bergerak.
keywords: bilik, ruang, space, luas, perimeter, lantai, papak, subfloor, siling, bumbung, bumbung hip, bumbung gable, kecerunan, juluran, tepi bumbung, rabung, lembah, 6/12
from: 1fb1813c
---

## Apa yang anda akan lakukan

Siapkan cangkerang bangunan. Bilik datang dengan sendirinya daripada dinding; lantai, siling dan bumbung mengambil satu klik setiap satu. Oleh kerana ia ditemui daripada dinding, ia mengikut apabila dinding bergerak.

## Bilik

Setiap ruang yang ditutup oleh dinding yang dilukis ialah bilik. Ia muncul sebaik dinding terakhir menutupnya, dengan nombor (101, 102 … pada tingkat pertama, 201 … pada tingkat seterusnya) dan nama (**Bilik 1**, **Bilik 2** …), dan luasnya ditunjukkan di tengahnya pada pelan.

- Dengan {{ui:Pilih}} aktif, klik di dalam bilik untuk memilihnya. Dalam **Sifat**, tukar **Nama** (contohnya `Dapur`) dan **Nombor**; luas dan perimeternya ditunjukkan.
- Padam dinding antara dua bilik dan ia menjadi satu; lukis dinding merentasi bilik dan ia menjadi dua. Bilik mengekalkan nama dan nombornya semasa dinding di sekelilingnya bergerak.
- Bilik tidak boleh dipadam sendiri: ia ialah ruang yang dibentuk oleh dinding.

Luas diukur di dalam permukaan dinding. Bilik disimpan sebagai ruang IFC dengan luas lantai, perimeter, ketinggian dan isipadu, supaya jadual dapat membacanya (lihat [Tambah jumlah kuantiti, senaraikan elemen dan jadualkan ruang](topic:quantity-totals)).

## Lantai

1. Klik {{ui:Lantai}}.
2. Pilih **Bilik ini** atau **Seluruh bangunan**, **Jenis** (lantai kayu atau papak konkrit) dan ketebalannya.
3. Tunjuk di dalam bilik (atau di mana-mana dalam bangunan). Apa yang lantai itu akan liputi diserlahkan dengan luasnya.
4. Klik. Bahagian atas lantai ialah aras tingkat; ia turun mengikut ketebalannya. Lantai seluruh bangunan sampai ke permukaan luar dinding.

## Siling

1. Klik {{ui:Siling}}.
2. Pilih **Bilik ini** atau **Seluruh bangunan**, dan **Ketinggian** di atas lantai.
3. Tunjuk di dalam dan klik.
4. Untuk melihatnya dari bawah, dengan grid dan lampu di atasnya, tukar pelan kepada pelan silingnya: lihat [Pandangan, julat pandangan dan helaian anda sendiri](topic:views-and-sheets).

## Bumbung

1. Pada tingkat yang dindingnya memikul bumbung, klik {{ui:Bumbung}}.
2. Taip **Kecerunan** sebagai naik atas 12 (`6/12`) atau dalam darjah (`30`), dan **Juluran**.
3. Pilih **Hujung**: **Bumbung hip** (setiap sisi condong), **Gable pada sisi pendek** atau **Gable pada sisi panjang** (bangunan dengan empat sisi), atau **Sisi tunggal**.
4. Tunjuk di dalam bangunan: tepi bumbung dan rabung ditunjukkan pada pelan. Klik.

Bumbung terletak di atas dinding, pada tingkat di atasnya, dan bahagian bawahnya bertemu dengan permukaan luar dinding. Hujung gable diisi dengan dinding gable setebal dinding di bawahnya. Bangunan berbentuk L, T atau U mendapat bumbung hip yang sayapnya bertemu di lembah.

## Tukar

Pilih lantai, siling atau bumbung (dalam paparan 3D, pokok model, atau bumbung dengan mengklik di dalam garis luarnya pada tingkat di atasnya) dan tukar dalam **Sifat**: jenis lantai, ketebalan dan sejauh mana bahagian atasnya di atas aras; jenis siling, ketinggian, ketebalan dan **Corak** (grid yang dilukis oleh pelan siling padanya: tiada, 600 × 600, 600 × 1200, 2' × 2' atau 2' × 4'); kecerunan bumbung, juluran, hujung dan ketebalan. Setiap perubahan ialah satu langkah buat asal.

## Beri lantai, siling atau bumbung satu jenis dengan lapisan

Lantai, siling dan bumbung boleh mengambil **jenis**, seperti dinding: gabungan lapisan yang dinamakan, setiap satu dengan bahannya dan ketebalan sebenarnya.

- **Semasa anda meletakkannya.** Alat Lantai, Siling, Bumbung dan Lukis lantai mempunyai senarai **Jenis** pada barisnya. **Tiada jenis** meletakkannya seperti sebelum ini, dengan ketebalannya sendiri. Satu jenis meletakkannya setebal semua lapisan jenis itu bersama-sama.
- **Kemudian.** Pilih lantai, siling atau bumbung dan pilih **Jenis** dalam Sifat. Elemen kekal elemen yang sama: tempatnya, bilik dan datanya dikekalkan dan tiada apa dilukis semula. Hanya jenis, ketebalan dan bahannya berubah. Inilah cara elemen peringkat lakaran menjadi elemen yang dibangunkan: gantikan jenis generiknya dengan jenis sebenar.
- **Sunting jenis…** membuka penyunting jenis pada jenis itu: lapisan dari **atas** ke bawah, teras, fungsi setiap lapisan, dan tag LOD jenis itu. Menyimpan mengubah setiap elemen bagi jenis itu dalam satu langkah, dan satu {{ui:Buat asal}} membatalkannya. Menukar jenis permulaan menyimpan salinan sebagai jenis anda sendiri.
- Selagi elemen mempunyai jenis, **Ketebalan**nya milik jenis itu dan tidak boleh ditaip. Pilih jenis lain, atau **Tiada jenis**, untuk menukarnya.

Jenis permulaan ialah satu jenis **generik** untuk setiap satu (satu lapisan bahan generik, ditag LOD 200) dan dua jenis berlapis (ditag LOD 300): lantai gelegar kayu dan lantai konkrit dengan screed; bumbung kayu dan bumbung rata konkrit; serta papan gipsum siling dan siling jubin tergantung. Ia ialah nilai permulaan, bukan binaan yang telah diuji: semak lapisan sebelum anda bergantung padanya.

Jadual **Lapisan: luas dan isipadu** menyenaraikan setiap lapisan bagi setiap jenis yang digunakan; lihat [Jadual, dimensi dan PDF](topic:plan-schedules-and-pdf). Jenis lantai, bumbung dan siling merentas projek dalam pek jenis atau sebagai item Pustaka; lihat [Pek jenis](topic:type-packs).

## Perkara yang perlu diketahui

- Memindahkan, menambah atau memadam dinding menjadikan bilik, lantai, siling dan bumbung di atasnya dibuat semula.
- Bumbung sesuai dengan mana-mana garis luar. Untuk memberi setiap dinding kecerunan, hujung gable atau shed sendiri, plat dinaikkan, fascia dan soffit, atau untuk melukis satu satah bumbung, lihat [Bumbung: kecerunan untuk setiap dinding, gable, shed dan satah bumbung](topic:roofs).
- {{key:Delete}} memadam lantai, siling atau bumbung yang dipilih.
