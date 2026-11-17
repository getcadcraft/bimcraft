---
title: Pandangan, julat pandangan dan helaian anda sendiri
summary: Cari setiap pelan, dongakan, keratan, pandangan 3D, jadual dan helaian dalam pelayar projek, tetapkan cara setiap pelan dipotong dan apa yang ditunjukkannya, buat callout, lukis garisan dan hatch dalam satu pandangan, simpan tetapan dalam templat pandangan, dan susun helaian anda sendiri.
keywords: callout, pandangan callout, pandangan perincian, pelan diperbesar, lukisan, garisan perincian, garisan lukisan, hatch, kawasan hatch, kawasan diisi, corak isian, pelan siling dipantulkan, rcp, pelan siling, grid siling, lekapan lampu, pelayar projek, pandangan, julat pandangan, pangkas, kawasan pangkas, pandangan pangkas, skala pandangan, underlay, tunjuk aras lain, halftone, satah potong, ketinggian potong, atas, bawah, kedalaman pandangan, keterlihatan, kategori, sembunyi dalam pandangan, templat pandangan, templat, helaian, blok tajuk, viewport, skala, susun helaian, layout, pdf, tetapan pelan pandangan, pelayar
from: ee1d5afe
---

## Apa yang anda lakukan

Bekerja mengikut cara projek BIM disusun: setiap pandangan dalam satu senarai, setiap pelan dipotong di tempat yang anda mahu, tetapan yang sama untuk beberapa pelan melalui templat, dan helaian yang anda susun sendiri.

## Pelayar projek

1. Hidupkan {{ui:Lukis}}. Panel kiri mempunyai {{ui:Pelayar projek}} di bawah model.
2. Ia menyenaraikan:
   - **Pelan lantai**: setiap aras. Klik satu untuk melihat pelannya. Butang gelangsar di sebelahnya menetapkan julat pandangannya (di bawah). Pelan yang mengikut templat menunjukkan nama templat itu.
   - **Pelan siling**: pelan siling dipantulkan bagi setiap aras (di bawah).
   - **Callout**: setiap callout dengan pandangan tempat ia dilukis, dan {{ui:Callout baharu}}. **Hilang** menyenaraikan callout yang pandangannya sudah tiada.
   - **Dongakan** dan **Keratan**: empat sisi dan setiap garis keratan. Klik satu untuk membuka set lukisan tempat ia dilukis.
   - **Pandangan 3D**: pandangan yang anda simpan dengan {{ui:Pandangan}}.
   - **Jadual**: klik satu untuk menunjukkannya di bawah pelan.
   - **Helaian**: helaian yang anda buat, {{ui:Helaian baharu}}, dan {{ui:Set lukisan…}} untuk keseluruhan set yang dibuat daripada model.
   - **Templat pandangan**, dengan {{ui:Templat baharu}}, dan **Pautan** (model yang dipautkan).

## Tetapkan julat pandangan pelan

1. Klik butang gelangsar di sebelah aras dalam **Pelan lantai**.
2. Tetapkan ketinggian, di atas aras itu:
   - **Potong pada**: tempat pelan memotong dinding, pintu dan tingkap (1200 mm, kira-kira 4 ft, melainkan anda menukarnya).
   - **Atas**: perkara di atas potongan dan di bawah bahagian atas dilukis putus-putus (kabinet tinggi, rasuk). Biarkan kosong untuk ketinggian aras.
   - **Bawah** dan **Kedalaman di bawah bahagian bawah**: perkara yang lebih rendah daripada potongan dilukis dalam garisan nipis ke bawah, sehingga bahagian bawah dan sejauh itu di bawahnya.
3. Di bawah **Ditunjukkan dalam pelan ini**, nyahtanda apa yang pelan ini tinggalkan: perabot, bilik, tiang dan sebagainya.
4. Untuk meninggalkan elemen tunggal: pilih mereka dalam pelan atau pandangan 3D, buka kotak dialog dan klik {{ui:Sembunyikan yang dipilih di sini}}. {{ui:Tunjukkan semuanya}} membawanya kembali.
5. Klik {{ui:Guna tetapan ini}}.

Pelan itu dipotong semula serta-merta, dan set lukisan serta helaian anda mengikutinya. Hirisan awan titik turut mengikut ketinggian potong.

## Pangkas pelan, beri skala, tunjuk aras lain di bawahnya

Ketiga-tiganya berada dalam kotak dialog yang sama (butang gelangsar di sebelah aras):

- **Skala**: skala pelan itu dicetak pada ({{ui:Cetak}} pada bar pelan) dan diletakkan pada helaian. **Muat** memilih skala piawai terbesar yang muat.
- **Kawasan pangkas**: klik {{ui:Lukis pada pelan…}}, kemudian klik satu penjuru dan penjuru bertentangan pada pelan ({{key:Esc}} berhenti). Pelan di luar kawasan itu dikaburkan pada skrin, dan anda masih boleh bekerja di sana; apabila dicetak, pada helaian dan dalam set lukisan, pelan hanya menunjukkan apa yang berada di dalam. {{ui:Kosongkan}} membuang pangkasan. {{ui:Muat}} memuatkan pangkasan.
- **Underlay**: pilih aras lain. Dinding, elemen yang dipotong, pintu dan tingkapnya dilukis cerah di bawah pelan ini, untuk menjajarkan perkara dengan aras di bawah atau di atasnya. Anda tidak boleh memilihnya di sini, dan ia dicetak dalam kelabu cerah.

Templat pandangan membawa skala bersama ketinggian dan kategori. Kawasan pangkas dan underlay sentiasa milik satu pelan itu sahaja.

## Pelan siling aras

Setiap aras mempunyai pelan siling dipantulkan di sebelah pelan lantainya: pelan dilihat dari bawah, untuk menyusun siling dan apa yang tergantung daripadanya.

1. Klik aras di bawah **Pelan siling** dalam pelayar, atau pilih {{ui:Pelan siling}} di sebelah aras pada bar pelan.
2. Dinding dipotong pada 2300 mm (kira-kira 7'-6"). Apa yang berada di atas potongan itu dan di bawah ketinggian aras dilukis: siling dengan grid dan tag ketinggian (`CLG 2438`), lampu, rasuk. Pintu, tingkap dan apa yang berada di bawah potongan ditinggalkan.
3. Untuk membuat siling, gunakan {{ui:Siling}} seperti pada pelan lantai, kemudian pilih dan pilih **Corak** dalam Sifat. Lihat [Bilik, lantai, siling dan bumbung](topic:floors-and-roofs).
4. Untuk menggantung lampu daripadanya, letakkan item dari pustaka semasa pelan siling ditunjukkan: ia masuk ke **Pada siling**. Lihat [Letak peralatan dan perabot dari pustaka](topic:place-from-library).
5. Butang gelangsar di sebelah pelan siling menetapkan potongan dan atasnya, skala, kategori, kawasan pangkas dan underlay, seperti untuk pelan lantai. Pelan siling tidak menggunakan templat pandangan.

Ia dilukis dengan cara yang sama seperti pelan lantai (pelan dipantulkan, bukan imej cermin). Siling yang lebih rendah daripada potongan tidak dilukis: turunkan potongan untuk pelan siling aras itu. Pelan siling masuk ke helaian anda sendiri seperti pelan; set lukisan tidak menambahkannya dengan sendirinya.

## Buat callout

Callout menunjukkan sebahagian pelan dengan lebih besar, pada skala sendiri, sebagai pandangan tersendiri: dapur, tangga, sudut dinding.

1. Tunjukkan pelan, pelan siling atau callout yang ia tergolong.
2. Pilih {{ui:Anotasi}} › {{ui:Callout}} pada bar pelan (atau {{ui:Callout baharu}} dalam pelayar), kemudian klik satu penjuru kawasan dan penjuru bertentangan. {{key:Esc}} berhenti.
3. Callout dibuat pada 1:20 (1/2" = 1'-0" dalam kaki dan inci). Segi empatnya dan tag bulat dilukis pada pelan.
4. Klik tag dengan {{ui:Pilih}}, atau callout dalam pelayar, untuk membukanya: pelan hanya menunjukkan kawasan itu, pada skala callout. Bar menyatakan {{ui:Callout:}} dan namanya; {{ui:Atas}} kembali ke pandangan tempat ia dilukis.
5. Butang gelangsar di sebelahnya (dalam pelayar atau pada bar) menamakan semula, menukar skalanya, melukis semula segi empatnya atau memadamkannya.

Callout menunjukkan apa yang pandangannya tunjukkan: potongan yang sama, kategori yang sama, siling bagi pelan siling. Callout bagi callout berfungsi dengan cara yang sama. Letakkan callout pada helaian seperti pelan; tagnya kemudian menyatakan di mana ia berada (`1 / A-501`: pandangan pertama pada helaian A-501). {{ui:Cetak}} dalam callout mencetak kawasan itu sahaja pada skalanya.

Memadamkan callout turut memadamkan callout yang dilukis di dalamnya, serta garisan dan hatch yang dilukis di dalamnya (anda ditanya dahulu). Jika aras tempat callout dilukis dipadamkan, callout kekal di bawah **Hilang** sehingga anda memadamkannya, dan helaian yang ia berada melaporkannya sebagai hilang.

## Lukis garisan dan hatch dalam satu pandangan

Lukisan ialah kerja 2D yang tergolong dalam satu pandangan sahaja: nota dalam garisan, kawasan konkrit atau tanah yang di-hatch, kawasan diisi. Ia tidak pernah berada dalam pandangan 3D atau dalam pelan lain.

1. Tunjukkan pelan lantai, pelan siling atau callout untuk dilukis.
2. Pilih dari {{ui:Anotasi}} pada bar pelan:
   - {{ui:Baris}}: klik tempat ia bermula dan tempat ia berakhir. Garisan seterusnya bermula di tempat garisan terakhir berakhir; {{key:Enter}} memulakan semula.
   - {{ui:Polygaris}}: klik titik-titiknya; {{key:Enter}} atau klik dua kali menamatkannya, dan klik pada titik pertamanya menutupnya.
   - {{ui:Segi empat tepat}}: dua penjuru bertentangan.
   - {{ui:Kawasan hatch}}: pilih **Corak** (Pepejal, Serong, Silang, Konkrit, Penebat, Tanah) dan skalanya pada bar, kemudian klik penjurunya; {{key:Enter}}, klik dua kali atau klik pada penjuru pertama menutupnya. Dengan {{ui:Isi bilik}} ditandakan, satu klik dalam bilik akan meng-hatch garis luarnya.
3. Titik melekat seperti dinding; {{key:Shift}} memastikan garisan tegak segi; anda boleh menaip panjang seperti untuk dinding. {{key:Backspace}} membatalkan titik terakhir.

Pilih garisan atau hatch dengan {{ui:Pilih}} pada pelan. Sifat menukar corak dan skala hatch dan mempunyai {{ui:Alih…}} (klik titik untuk dialih dari, kemudian ke mana ia pergi). {{key:Delete}} memadamkannya. Setiap garisan, hatch dan perubahan ialah satu langkah.

Garisan dan hatch dicetak bersama pelan, masuk ke helaian anda bersamanya dan berada dalam set lukisan. Kosongkan **Anotasi** dalam julat pandangan untuk meninggalkannya daripada pandangan itu.

## Simpan tetapan dalam templat pandangan

1. Klik {{ui:Templat baharu}} dalam pelayar, atau {{ui:Simpan sebagai templat…}} dalam julat pandangan pelan (pelan itu kemudian menggunakannya).
2. Beri nama, tetapkan ketinggian dan kategori, dan klik {{ui:Simpan templat}}.
3. Dalam mana-mana julat pandangan pelan, pilih templat itu. Pelan itu mengambil ketinggian dan kategorinya; tukar templat untuk menukar setiap pelan yang menggunakannya. Elemen yang anda sembunyikan satu demi satu kekal tersembunyi dalam pelannya sendiri.
4. Klik templat dalam pelayar untuk menukar, menamakan semula atau memadamkannya. Memadamkan satu templat meninggalkan pelannya dengan tetapannya sebagai miliknya sendiri.

## Susun helaian anda sendiri

1. Klik {{ui:Helaian baharu}}. Taip nombor dan tajuknya, serta pilih kertas.
2. Klik {{ui:Tambah}} di sebelah pelan, pelan siling, callout, dongakan, keratan atau jadual. Ia masuk di tengah helaian.
3. Seret ke tempat ia patut pergi. Dengan ia dipilih, pilih **Skala**, atau biarkan pada skala pelan (apabila pelan itu mempunyai satu), jika tidak skala yang muat satu pertiga helaian. {{ui:Alih keluar helaian}} membuangnya.
4. Klik {{ui:Simpan helaian}}. Ia disenaraikan di bawah **Helaian**; klik untuk mengubahnya kemudian.
5. {{ui:Muat turun sebagai PDF}} menyimpan helaian itu sebagai satu halaman.

## Apa yang anda sepatutnya lihat

- Pelan dipotong pada ketinggian anda, dengan apa yang di atas potongan putus-putus dan apa yang anda kosongkan ditinggalkan.
- Pelan yang dipangkas dikaburkan di luar kawasannya pada skrin dan dipotong mengikutnya pada kertas, pada skala yang anda berikan.
- Pelan siling dengan grid siling dan tag ketinggian, serta lampu pada siling.
- Callout dengan segi empat dan tagnya pada pelan, setiap satu dibuka pada skalanya sendiri.
- Garisan dan hatch hanya dalam pandangan tempat anda melukisnya.
- Helaian anda dilukis semula daripada model setiap kali anda membukanya, jadi ia sentiasa sepadan dengannya. Pandangan yang arasnya atau garisan keratannya dipadamkan dilaporkan, bukan dilukis.
- Setiap perubahan di sini ialah satu langkah: {{key:Mod+Z}} membuatnya asal.

:::note
Semua ini disimpan dalam fail IFC sebagai set sifat yang program lain biarkan: julat pandangan dan pelan siling setiap aras pada aras itu, templat, callout dan helaian anda pada projek. Garisan dan hatch ialah anotasi IFC dalam aras mereka, jadi program lain melihatnya sebagai lengkung 2D dan kawasan yang di-hatch (lukisan mereka sendiri bagi setiap corak), walaupun tidak tahu pandangan mana yang mereka tergolong.
:::

:::tip
Program BIM lain memanggil potongan itu julat pandangan atau satah potong, templat dipanggil templat pandangan atau tetapan pandangan, garisan lukisan dipanggil garisan perincian, dan kawasan hatch dipanggil kawasan diisi. Idea-idea itu sama; tetapan pandangan tidak berpindah kepada program tersebut.
:::
