---
title: Render gambar model
summary: Hasilkan gambar cahaya siang bagi paparan 3D: langit, matahari pada latitud tapak anda, bayang lembut, tingkap kaca; dengan WebGPU, penjejakan laluan pada kad grafik dengan langit, kamera, campuran cahaya, gred, kabus dan barisan gilir render.
keywords: render, pratetap, pratetap adegan, dalaman, luaran, pandangan keratan, malam, satu klik, rendering, penjejakan laluan, penjejakan sinar, pencahayaan global, pantulan, biasan, kualiti tinggi, foto, fotorealistik, realistik, gambar, image, png, pegun, langit, matahari, cahaya siang, bayang, bayang lembut, oklusi ambien, kaca, tingkap, logam, bahan, pendedahan, kecerahan, mendung, senja, studio, pembentangan, visualisasi, webgpu, nyahhingar, langit fizikal, hdri, ies, kedalaman medan, panorama, imbangan putih, campuran cahaya, elemen render, exr, png 16-bit, kabus, kaustik, barisan gilir render
from: beb74cc7
---

{{ui:Render}} pada bar alat membuat gambar pandangan 3D yang kelihatan seperti cahaya siang: langit, matahari di tempat latitud tapak meletakkannya, bayang lembut, cahaya dari seluruh langit yang menggelapkan sudut, dan warna yang boleh kelihatan seperti kaca atau logam. Model dan fail tidak diubah.

## Render pandangan

1. Tetapkan pandangan 3D mengikut cara yang anda mahu untuk gambar itu: orbit dan zum, sembunyikan tingkat atau elemen yang tidak anda mahu, dan tetapkan [keratan](topic:section-plane) jika gambar harus menunjukkan potongan.
2. Klik {{ui:Render}} pada bar alat.
3. Pilih {{ui:Scene}} jika yang ditekan bukan yang anda mahu (lihat [Pratetap adegan](topic:render#scene-presets-a-good-picture-in-one-click)), pilih {{ui:Size}}, kemudian klik {{ui:Render}} dalam dialog.

   Gambar terisi semasa ia dirender dan menjadi lebih licin dengan setiap laluan. {{ui:Stop}} (atau {{key:Esc}}) menamatkannya lebih awal dan menyimpan gambar setakat itu.

4. Klik {{ui:Save}} untuk memuat turun sebagai PNG, atau {{ui:Save as}} untuk format lain (lihat [Simpan gambar](topic:render#save-the-picture)). Ia dinamakan mengikut fail model.

:::tip
Mulakan dengan {{ui:Draf}} pada {{ui:Saiz pandangan}} untuk menyemak kamera, kemudian render {{ui:Baik}} atau {{ui:Terbaik}} pada saiz yang lebih besar untuk gambar akhir.
:::

## Pratetap adegan: gambar yang baik dalam satu klik

Bahagian atas dialog mempunyai empat butang {{ui:Scene}}. Setiap satu menetapkan langit, kecerahan, tanah, garisan tepi, kualiti dan matahari dalam satu klik, jadi tiada apa yang perlu dipelajari sebelum gambar pertama. Klik satu, kemudian {{ui:Render}}.

| Adegan | Apa yang ditetapkannya | Gunakan untuk |
|---|---|---|
| {{ui:Exterior}} | Langit cerah, matahari model itu sendiri, tanah dihidupkan | Bangunan dari luar |
| {{ui:Interior}} | Langit mendung (cahaya sekata, tiada tompok matahari yang keras), setengah stop lebih cerah | Pandangan dari dalam bilik |
| {{ui:Section view}} | Studio putih, tiada tanah, garisan tepi dalam render pantas | Model yang dipotong oleh keratan |
| {{ui:Night}} | Matahari terbenam (tengah malam pada pertengahan musim sejuk untuk separuh dunia tapak), satu stop lebih cerah | Lampu yang menyinari model. Tanpa lampu, gambar menjadi gelap |

- {{ui:Pick for this view}} memilih untuk anda: {{ui:Section view}} apabila potongan keratan dihidupkan, {{ui:Interior}} apabila kamera berada di dalam model, jika tidak {{ui:Exterior}}. Kali pertama anda membuka dialog, ia bermula dengan cara ini dengan sendirinya.
- Setiap tetapan kekal di bawah dan boleh diubah. Apabila anda mengubah satu tetapan yang ditetapkan oleh adegan, tiada butang ditekan, dan baris di bawah butang menyatakan tetapan itu milik anda. Klik adegan sekali lagi untuk mengembalikan nilainya.
- Adegan tidak menyentuh enjin, mod, saiz, bahan, kamera atau lampu.

:::note
Adegan memberikan nilai yang sama dalam ModelCraft dan BimCraft. Rupa gambar siap bergantung pada model anda dan kad grafik anda.
:::

## Apa yang kelihatan dalam gambar

Apa yang ditunjukkan pandangan 3D sebagai pepejal: elemen tersembunyi dan lut sinar, tingkat tersembunyi dan model tersembunyi ditinggalkan, dan bilik hanya ditunjukkan apabila {{ui:Spaces}} dihidupkan. Satah keratan atau kotak keratan memotong gambar sebagaimana ia memotong pandangan. Elemen ditunjukkan dengan warnanya sendiri: pewarnaan mengikut sifat (tab {{ui:Color}}) tidak digunakan.

## Tetapan

| Tetapan | Apa yang dilakukannya |
|---|---|
| {{ui:Size}} | Saiz pandangan, dua kali saiz pandangan, Full HD, 4K atau segi empat sama |
| {{ui:Mode}} | {{ui:Fast}}, atau {{ui:High quality (path traced)}} (di bawah) dengan {{ui:Time limit}} |
| {{ui:Quality}} | Berapa banyak laluan (atau, dalam kualiti tinggi, sampel) yang diratakan: {{ui:Draf}} 16, {{ui:Baik}} 64, {{ui:Terbaik}} 256. Lebih banyak laluan memberi bayang dan tepi yang lebih licin dan mengambil masa lebih lama |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} atau {{ui:White studio}} (latar belakang putih polos) |
| {{ui:Sun}} | 21 Jun, 15:00 pada latitud yang diberikan fail untuk tapaknya (IfcSite), diputar ke utara sebenar model. Tandakan {{ui:Use another date and time for this picture}} untuk masa lain |
| {{ui:Brightness}} | Lebih cerah atau lebih gelap, dalam langkah (stop) |
| {{ui:Ground under the model}} | Tanah pada titik terendah model yang menerima bayang dan memudar ke ufuk |
| {{ui:Draw edges}} | Melukis tepi elemen dengan nipis di atas gambar |

Apabila matahari berada di bawah ufuk pada masa yang dipilih, ia malam: langit menjadi gelap dan lampu model menyinarinya.

## Lampu

Setiap lampu dalam model ialah lampu dalam gambar: lampu dalam fail IFC (IfcLightFixture, atau elemen yang ditaip sebagai lampu), termasuk yang anda letakkan dari pustaka. Setiap satunya memancar ke bawah dari sedikit di bawah lampu. Apabila fail memberikan kuasa watt lampu, kecerahannya mengikut daripadanya; jika tidak, ia 800 lumen, putih hangat.

Dialog menyenaraikan lampu di bawah {{ui:Lamps}}: nyahtanda satu untuk mematikannya, atau taip kecerahannya dalam lumen. Perubahan ini disimpan dalam IFC (set sifat `CadCraft_Light` lampu, di mana anda juga boleh mengubahnya dalam Sifat), dan {{key:Ctrl+Z}} membatalkannya.

Apabila fail tidak menyatakan di mana tapaknya, matahari diletakkan pada 40° utara, dan dialog menyatakannya. Masanya ialah waktu jam tapak, dikira daripada garis bujurnya, jadi ia boleh tersasar sejam di tempat jam ditetapkan berbeza.

Tetapan ini disimpan dalam pelayar ini untuk gambar seterusnya. Ia tidak disimpan dalam fail IFC.

## Kaca dan bahan lain

Di bawah {{ui:Materials}}, setiap warna pada skrin mempunyai rupa: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} atau {{ui:Frosted glass}}. Warna yang dijadikan lut sinar oleh fail IFC (kaca tingkap, sebagai contoh) bermula sebagai {{ui:Glass}}.

:::note
Dalam mod {{ui:Fast}}, kaca dan logam memantulkan langit, bukan bahagian lain model, dan cahaya tidak membengkok melalui kaca. Mod {{ui:High quality (path traced)}} di bawah melakukan kedua-duanya.
:::

## Kualiti tinggi

Pilih {{ui:Mode}} › {{ui:High quality (path traced)}} untuk gambar yang mengikuti cahaya seperti kamera melihatnya:

- cahaya melantun antara permukaan, jadi bilik yang diterangi melalui tingkap, atau oleh lampu, diterangi dari segala arah dan warna meresap ke jirannya;
- kaca ialah kaca sebenar: cahaya membengkok melaluinya dan ia memantulkan model;
- logam dan permukaan digilap memantulkan bahagian lain model;
- panel cahaya menyinar sebagai panel, dengan bayang lembut.

Ia jauh lebih perlahan daripada {{ui:Fast}}: setiap laluan menjejak cahaya setiap piksel sekali lagi. Gambar bermula berbutir dan jelas apabila sampel bertambah, jadi mulakan kecil ({{ui:Saiz pandangan}}, {{ui:Draf}}) dan pilih {{ui:Time limit}}: apabila masa habis, gambar setakat itu disimpan. {{ui:Stop}} turut menyimpannya. Laluan pertama menunggu semasa pelayar menyediakan penjejak laluan.

Apabila pelayar mempunyai WebGPU, penjejak laluan ialah milik CadCraft sendiri dan berjalan pada kad grafik; baris di bawah gambar menyatakannya. Selepas {{ui:Stop}} atau had masa, {{ui:Resume}} meneruskan dengan gambar yang sama sehingga semua sampelnya siap; menukar tetapan atau menekan {{ui:Render}} sekali lagi bermula semula. Tanpa WebGPU, gambar dijejak laluan dengan WebGL sebagai gantinya (baris itu menyatakannya) dan {{ui:Resume}} tidak ditawarkan.

:::linux
Firefox dan kebanyakan persediaan Chrome pada Linux belum mempunyai WebGPU, jadi kualiti tinggi menggunakan WebGL di sana.
:::

Dalam mod ini tepi tidak dilukis, tekstur menunjukkan warna dan kekasarannya tetapi bukan bonjolnya, dan potongan keratan dibuat pada model sebelum gambar bermula.

{{ui:Denoise (clears the grain left after the samples)}} dihidupkan secara lalai: apabila gambar siap, atau dihentikan, butiran yang tinggal dibersihkan oleh rangkaian neural yang dibuat untuk tujuan ini (rangkaian yang diterbitkan oleh Intel Open Image Denoise, dijalankan pada komputer anda sendiri: pada kad grafik, jika tidak pada pemproses). {{ui:Show}} › {{ui:The picture before denoising}} menunjukkannya seperti yang dirender.

## Langit dan profil cahaya pada kad grafik

Dengan WebGPU, kualiti tinggi mempunyai dua langit lagi:

- {{ui:Physical sky}} mengira cahaya siang daripada ketinggian matahari: biru tua di atas, jalur pucat di ufuk, dan matahari yang bertambah panas dan malap apabila ia rendah. {{ui:Haze}} bergerak dari hari yang sangat jelas (2) ke hari yang berkabus (10).
- {{ui:Sky picture (HDRI)}} menyinari model dengan gambar panorama tempat sebenar. {{ui:Choose a picture…}} mengambil fail `.hdr` atau `.exr` equirectangular; {{ui:Turn}} memutarnya mengelilingi model dan {{ui:Picture brightness}} menjadikannya lebih cerah atau gelap. Gambar itu membawa mataharinya sendiri, jadi matahari model tidak ditambah. Ia hanya disimpan selagi halaman dibuka: selepas membukanya semula, pilih semula.

Setiap lampu dalam senarai {{ui:Lamps}} boleh mengambil profil cahaya pengeluar: {{ui:IES profile…}} membaca fail IES (LM-63) dan lampu itu kemudian memancarkan cahayanya seperti kelengkapan itu berbuat (lampu bawah yang sempit, pencuci dinding). Setiap lampu dengan nama itu menggunakannya, dan lampu itu mengekalkan kecerahannya sendiri. Klik nama profil untuk berhenti menggunakannya.

Tingkap kaca jernih membantu cahaya langit mencari jalannya ke dalam bilik.

Mod {{ui:Fast}} dan penjejak laluan WebGL menunjukkan {{ui:Physical sky}} dan {{ui:Sky picture (HDRI)}} sebagai langit cerah dan mengabaikan profil cahaya.

## Kamera

{{ui:Camera}} menetapkan gambar seperti fotograf:

- {{ui:Exposure}}: kekalkan {{ui:Brightness slider}}, atau pilih {{ui:Camera settings}} dan tetapkan {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} dan {{ui:ISO}} seperti pada kamera; EV di sebelahnya ialah nilai pendedahan biasa. f/16 pada 1/100 s dan ISO 100 sepadan dengan hari yang cerah; adegan yang lebih gelap memerlukan bukaan yang lebih luas, pengatup yang lebih perlahan atau ISO yang lebih tinggi. Ini berfungsi dalam setiap mod.
- {{ui:Depth of field}} mengaburkan apa yang lebih dekat atau lebih jauh daripada {{ui:Focus distance (m)}} seperti lensa dengan f-stop itu akan lakukan (kosongkan untuk fokus pada apa yang berada di tengah pandangan); {{ui:Aperture shape}} memberikan sorotan yang tidak fokus bentuk bulat atau berbilah.
- {{ui:Two-point perspective (vertical lines stay vertical)}} meratakan kamera dan menganjakkan gambar, seperti lensa tilt-shift seni bina, supaya dinding tidak condong apabila anda melihat ke atas atau ke bawah pada bangunan.
- {{ui:White balance}} menetapkan warna cahaya mana yang kelihatan putih: lebih rendah (contohnya 3000 K) untuk cahaya lampu yang hangat, lebih tinggi untuk teduhan dan hari mendung.
- {{ui:Projection}}: {{ui:360° panorama}} menghasilkan gambar 2:1 bagi semua yang berada di sekeliling kamera untuk penonton panorama; {{ui:360° stereo panorama}} menyusun panorama mata kiri dan mata kanan untuk fon kepala; {{ui:Cube map (6 faces)}} menghasilkan enam pandangan segi empat sama dalam grid 3 × 2. Lebarnya datang daripada {{ui:Size}}.

Unjuran, kedalaman medan, perspektif dua titik dan imbangan putih memerlukan penjejak laluan pada kad grafik (WebGPU), jadi ia hanya dipaparkan dalam {{ui:High quality (path traced)}}.

## Siapkan gambar

{{ui:Picture}} menggred gambar kualiti tinggi seperti fotograf, dan setiap kawalan mengubah gambar siap serta-merta, tanpa render semula:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (gambar seperti sebelum ini), {{ui:AgX}} (lebih lembut, mengekalkan warna dalam cahaya yang sangat terang), {{ui:Filmic}} (lengkung filem yang lembut) atau {{ui:Standard}} (biasa, cahaya terang dipotong kepada putih).
- {{ui:Contrast}} dan {{ui:Highlight compression}} (mengembalikan perincian dalam bahagian yang sangat terang).
- {{ui:Bloom}} (cahaya lembut di sekeliling cahaya terang), {{ui:Glare}} dengan {{ui:Glare streaks}} (sinar bintang dari titik paling terang) dan {{ui:Vignette}} (sudut yang lebih gelap).
- {{ui:Colour table (.cube)…}} menggunakan gred warna daripada fail `.cube`, dengan {{ui:Colour table strength}}; seperti gambar langit, ia hanya disimpan selagi halaman dibuka.

## Simpan gambar

{{ui:Save as}} di sebelah {{ui:Save}} memilih fail: {{ui:PNG}}, {{ui:JPEG}} atau {{ui:WebP}} untuk dikongsi (JPEG dan WebP hanya di mana pelayar boleh menulisnya), dan selepas render kualiti tinggi pada kad grafik juga:

- {{ui:PNG, 16 bits}}: gambar yang digred dengan langkah yang lebih halus antara tona, untuk dicetak atau disunting selanjutnya.
- {{ui:EXR, every layer (32-bit float)}}: gambar seperti yang dirender (cahaya linear, tiada gred) dengan setiap elemen render dan kumpulan cahaya sebagai lapisannya sendiri, untuk program gubahan.
- {{ui:Render file (.ccrender, to grade again later)}}: segala yang diperlukan dialog untuk mencampur dan menggred semula gambar. {{ui:Open a render file…}} membawanya kembali, dengan campuran dan gredanya, tanpa render.

## Campurkan cahaya selepas render

Hidupkan {{ui:Light mixing (change each light's colour and brightness after the render)}} sebelum anda menekan {{ui:Render}}. Apabila gambar siap (atau dihentikan), {{ui:Mix the picture}} menyenaraikan cahayanya dalam kumpulan: langit, matahari, dan lampu mengikut nama (setiap lampu dengan nama yang sama ialah satu kumpulan). Matikan satu kumpulan, beri warna, atau jadikannya lebih cerah atau gelap, dan gambar berubah serta-merta, tanpa render semula. {{ui:Save mix}} menyimpan campuran di bawah satu nama untuk dipilih semula kemudian; {{ui:As rendered}} kembali kepada gambar seperti yang dibuat. {{ui:Save}} menyimpan gambar yang dicampur.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} turut menyimpan bahagian gambar. {{ui:Show}} menukar pandangan kepada salah satunya: warna permukaan (albedo), normal, kedalaman, cahaya difius, spekular dan terpancar (setiap satu langsung dan tidak langsung), apa yang bercahaya dan langit, serta satu warna bagi setiap objek atau setiap bahan untuk membuat topeng.

Kedua-duanya menyimpan lapisan tambahan pada kad grafik. Pada saiz besar, kad grafik mungkin tidak mempunyai ruang; dialog menyatakannya dan saiz yang lebih kecil berfungsi.

## Kabus, asap, hingar dan kaustik

Ini terdapat dalam {{ui:Fog, smoke and noise}} dan berfungsi dalam {{ui:High quality (path traced)}} pada kad grafik; enjin lain tidak menyertakannya.

- {{ui:Fog and haze}} memenuhi udara sehingga ketinggian dengan kabus yang disinari oleh matahari, langit dan lampu. {{ui:How far you can see, in meters}} menetapkan betapa tebalnya (kira-kira 100 m ialah kabus nipis, 20 m kabus tebal), {{ui:Fog height above the ground, in meters}} ialah tempat ia berakhir, dan {{ui:Light shafts}} ialah sejauh mana kabus bersinar ke arah cahaya. Cahaya matahari meninggalkan kabus di bahagian atasnya, jadi di mana matahari menembusi tingkap atau antara bangunan, anda melihatnya sebagai lorong cahaya.
- {{ui:Smoke or cloud}} menambah satu isipadu asap atau awan yang disinari seperti kabus. {{ui:Kind}} ialah {{ui:Cloud}}, {{ui:Smoke column}} atau {{ui:From a volume file (.ccvol)}}, format grid CadCraft sendiri. {{ui:Detail}} dan {{ui:Variation}} menukar awan atau lajur yang dibuat, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} dan {{ui:Turn}} meletakkannya (ia bermula di tengah model), {{ui:Thickness}} menjadikannya lebih padat, {{ui:Forward glow}} menjadikannya lebih cerah ke arah cahaya, dan {{ui:Color}} memberikannya warna. Fail isipadu hanya disimpan selagi halaman dibuka, sama seperti gambar langit.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} tidak memberi sampel lagi kepada piksel yang sudah stabil. {{ui:Noise to accept}} ialah jumlah butiran yang tinggal apabila sesuatu piksel berhenti. Baris di bawah gambar menyatakan berapa banyak sampel yang diterima setiap piksel secara purata.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} menjejak cahaya dari lampu dan matahari, jadi tompok terang di bawah bola kaca atau cahaya cermin pada dinding keluar bersih dan tidak berbutir. Ia dimatikan apabila kabus, asap, campuran cahaya atau elemen render dihidupkan, dan ia dibuat untuk gambar, bukan untuk gambar 360°.

## Barisan gilir render

{{ui:Render queue}} dalam dialog: {{ui:Add this picture to the queue}} menyimpan tetapan dan pandangan gambar, dan {{ui:Start the queue}} merender apa yang menunggu, satu demi satu, pada komputer ini. Menutup halaman mengekalkan barisan gilir; buka model yang sama untuk meneruskan. {{ui:Save}} memuat turun yang siap; {{ui:Remove}} dan {{ui:Clear finished}} mengemaskan senarai. Barisan gilir merender dalam kualiti tinggi, jadi ia memerlukan WebGPU.

## Berapa lama masanya

Gambar dihasilkan pada komputer anda sendiri, oleh kad grafiknya; tiada apa yang dimuat naik. Masa bertambah dengan laluan dan piksel: {{ui:Terbaik}} mempunyai 16 kali laluan {{ui:Draf}}, dan gambar 4K mempunyai kira-kira empat kali piksel Full HD. Model besar mengambil masa lebih lama bagi setiap laluan.
