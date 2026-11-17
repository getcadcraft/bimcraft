---
title: Render gambar model
summary: Buat gambar cahaya siang dari tampilan 3D: langit, matahari sesuai lintang lokasi, bayangan lembut, kaca jendela; dengan WebGPU, path tracing pada kartu grafis dengan langit, kamera, pencampuran cahaya, grading, kabut, dan antrean render.
keywords: render, preset, preset adegan, interior, eksterior, tampilan potongan, malam, satu klik, rendering, path tracing, path traced, ray tracing, iluminasi global, pantulan, refraksi, kualitas tinggi, foto, fotorealistik, realistis, gambar, image, png, diam, langit, matahari, cahaya siang, bayangan, bayangan lembut, ambient occlusion, kaca, jendela, logam, material, paparan, kecerahan, mendung, senja, studio, presentasi, visualisasi, webgpu, denoise, langit fisik, hdri, ies, kedalaman bidang, panorama, keseimbangan putih, pencampuran cahaya, elemen render, exr, png 16-bit, kabut, kaustik, antrean render
from: beb74cc7
---

{{ui:Render}} di toolbar membuat gambar dari tampilan 3D yang terlihat seperti cahaya siang: langit, matahari di posisi yang ditentukan lintang lokasi, bayangan lembut, cahaya dari seluruh langit yang membuat sudut menjadi gelap, dan warna yang dapat tampak seperti kaca atau logam. Model dan berkas tidak diubah.

## Render tampilannya

1. Atur tampilan 3D sesuai keinginan gambar: putar dan perbesar, sembunyikan lantai atau elemen yang tidak Anda inginkan, dan atur [potongan](topic:section-plane) bila gambar harus memperlihatkan irisan.
2. Klik {{ui:Render}} di toolbar.
3. Pilih {{ui:Scene}} bila yang terpilih bukan yang Anda inginkan (lihat [Preset adegan](topic:render#scene-presets-a-good-picture-in-one-click)), pilih {{ui:Size}}, lalu klik {{ui:Render}} di dialog.

   Gambar terisi saat dirender dan makin halus di setiap lintasan. {{ui:Stop}} (atau {{key:Esc}}) mengakhirinya lebih awal dan menyimpan gambar sejauh itu.

4. Klik {{ui:Save}} untuk mengunduh sebagai PNG, atau {{ui:Save as}} untuk format lain (lihat [Simpan gambar](topic:render#save-the-picture)). Namanya mengikuti berkas model.

:::tip
Mulai dengan {{ui:Draft}} pada {{ui:The view's size}} untuk memeriksa kamera, lalu render {{ui:Good}} atau {{ui:Best}} dengan ukuran lebih besar untuk gambar akhir.
:::

## Preset adegan: gambar yang bagus dalam satu klik

Bagian atas dialog memiliki empat tombol {{ui:Scene}}. Masing-masing mengatur langit, kecerahan, tanah, garis tepi, kualitas, dan matahari sekaligus, jadi tidak ada yang perlu dipelajari sebelum gambar pertama. Klik salah satu, lalu {{ui:Render}}.

| Adegan | Yang diatur | Untuk |
|---|---|---|
| {{ui:Exterior}} | Langit cerah, matahari milik model, tanah aktif | Bangunan dari luar |
| {{ui:Interior}} | Langit mendung (cahaya merata, tanpa bercak matahari keras), setengah stop lebih terang | Pemandangan dari dalam ruangan |
| {{ui:Section view}} | Studio putih, tanpa tanah, garis tepi pada render cepat | Model yang dipotong oleh potongan |
| {{ui:Night}} | Matahari terbenam (tengah malam di musim dingin untuk belahan bumi lokasi), satu stop lebih terang | Lampu yang menerangi model. Tanpa lampu gambarnya gelap |

- {{ui:Pick for this view}} memilihkan untuk Anda: {{ui:Section view}} saat potongan aktif, {{ui:Interior}} saat kamera berada di dalam model, selain itu {{ui:Exterior}}. Pertama kali Anda membuka dialog, ia memulai dengan cara ini sendiri.
- Setiap pengaturan tetap berada di bawah dan dapat diubah. Begitu Anda mengubah satu pengaturan yang diatur adegan, tidak ada tombol yang ditekan dan baris di bawah tombol menyatakan bahwa pengaturan itu milik Anda. Klik adegan lagi untuk mengembalikan nilainya.
- Adegan tidak menyentuh mesin, mode, ukuran, material, kamera, atau lampu.

:::note
Adegan memberi nilai yang sama di ModelCraft dan BimCraft. Hasil akhir gambar bergantung pada model dan kartu grafis Anda.
:::

## Yang tampak dalam gambar

Yang tampil padat di tampilan 3D ikut tampil di gambar: elemen tersembunyi dan tembus pandang, lantai tersembunyi, serta model tersembunyi dibiarkan keluar, dan ruangan hanya tampil saat {{ui:Spaces}} aktif. Bidang potong atau kotak potong memotong gambar seperti memotong tampilan. Elemen tampil dengan warnanya sendiri: pewarnaan menurut properti (tab {{ui:Color}}) tidak dipakai.

## Pengaturan

| Pengaturan | Fungsinya |
|---|---|
| {{ui:Size}} | Ukuran tampilan, dua kali ukuran tampilan, Full HD, 4K, atau persegi |
| {{ui:Mode}} | {{ui:Fast}}, atau {{ui:High quality (path traced)}} (di bawah) dengan {{ui:Time limit}} |
| {{ui:Quality}} | Berapa banyak lintasan (atau, pada kualitas tinggi, sampel) yang dirata-ratakan: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Lebih banyak lintasan memberi bayangan dan tepi yang lebih halus, tetapi memakan waktu lebih lama |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}}, atau {{ui:White studio}} (latar putih polos) |
| {{ui:Sun}} | 21 Juni pukul 15:00 pada lintang yang diberikan berkas untuk lokasinya (IfcSite), diputar ke utara sejati model. Centang {{ui:Use another date and time for this picture}} untuk waktu lain |
| {{ui:Brightness}} | Lebih terang atau lebih gelap, dalam langkah (stop) |
| {{ui:Ground under the model}} | Tanah di titik terendah model yang menerima bayangan dan memudar ke cakrawala |
| {{ui:Draw edges}} | Menggambar tepi elemen dengan tipis di atas gambar |

Ketika matahari berada di bawah cakrawala pada waktu yang dipilih, itu malam: langit menjadi gelap dan lampu model menerangi gambar.

## Lampu

Setiap armatur lampu di model adalah lampu dalam gambar: armatur dalam berkas IFC (IfcLightFixture, atau elemen yang bertipe armatur lampu), termasuk yang Anda tempatkan dari pustaka. Setiap lampu menyinari ke bawah dari tepat di bawah armatur. Bila berkas memberi daya watt armatur, kecerahannya mengikuti dari situ; jika tidak, nilainya 800 lumen, putih hangat.

Dialog mendaftar lampu di bawah {{ui:Lamps}}: hilangkan centang untuk mematikan satu lampu, atau ketik kecerahannya dalam lumen. Perubahan ini disimpan di IFC (set properti `CadCraft_Light` pada armatur, tempat Anda juga dapat mengubahnya di Properti), dan {{key:Ctrl+Z}} membatalkannya.

Bila berkas tidak menyebutkan letak lokasinya, matahari ditempatkan di 40° lintang utara, dan dialog menyatakan demikian. Waktunya adalah jam lokal lokasi, dihitung dari bujurnya, sehingga bisa meleset satu jam di tempat yang jamnya diatur berbeda.

Pengaturan ini disimpan di peramban ini untuk gambar berikutnya. Pengaturan tidak disimpan di berkas IFC.

## Kaca dan material lain

Di bawah {{ui:Materials}}, setiap warna di layar memiliki tampilan: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}}, atau {{ui:Frosted glass}}. Warna yang dibuat tembus pandang oleh berkas IFC (misalnya kaca jendela) dimulai sebagai {{ui:Glass}}.

:::note
Pada mode {{ui:Fast}}, kaca dan logam memantulkan langit, bukan bagian model lainnya, dan cahaya tidak membelok melalui kaca. Mode {{ui:High quality (path traced)}} di bawah melakukan keduanya.
:::

## Kualitas tinggi

Pilih {{ui:Mode}} › {{ui:High quality (path traced)}} untuk gambar yang mengikuti cahaya seperti yang dilihat kamera:

- cahaya memantul di antara permukaan, sehingga ruangan yang diterangi lewat jendela atau oleh lampu tersinari dari segala sisi dan warna merembes ke tetangganya;
- kaca adalah kaca sungguhan: cahaya membelok melewatinya dan ia memantulkan model;
- logam dan permukaan yang dipoles memantulkan bagian model lainnya;
- panel lampu menyala sebagai panel, dengan bayangan lembut.

Jauh lebih lambat daripada {{ui:Fast}}: setiap lintasan menelusuri cahaya setiap piksel lagi. Gambar mulai berbutir dan menjadi bersih seiring sampel bertambah, jadi mulailah dari ukuran kecil ({{ui:The view's size}}, {{ui:Draft}}) dan pilih {{ui:Time limit}}: saat waktunya habis, gambar sejauh itu disimpan. {{ui:Stop}} juga menyimpannya. Lintasan pertama menunggu selagi peramban menyiapkan path tracer.

Bila peramban memiliki WebGPU, path tracer adalah milik CadCraft dan berjalan di kartu grafis; baris di bawah gambar menyatakannya. Setelah {{ui:Stop}} atau batas waktu, {{ui:Resume}} melanjutkan gambar yang sama hingga semua sampelnya terkumpul; mengubah pengaturan atau menekan {{ui:Render}} lagi memulai dari awal. Tanpa WebGPU, gambar di-path-trace dengan WebGL (baris tersebut menyatakannya) dan {{ui:Resume}} tidak ditawarkan.

:::linux
Firefox dan sebagian besar pengaturan Chrome di Linux belum memiliki WebGPU, sehingga kualitas tinggi memakai WebGL di sana.
:::

Pada mode ini tepi tidak digambar, tekstur menampilkan warna dan kekasarannya tetapi tidak tonjolannya, dan potongan dibuat pada model sebelum gambar dimulai.

{{ui:Denoise (clears the grain left after the samples)}} aktif secara default: ketika gambar selesai, atau dihentikan, butiran yang tersisa dibersihkan oleh jaringan saraf yang dibuat untuk ini (jaringan terbitan Intel Open Image Denoise, dijalankan di komputer Anda: di kartu grafis, atau di prosesor jika tidak ada). {{ui:Show}} › {{ui:The picture before denoising}} menampilkannya seperti saat dirender.

## Langit dan profil cahaya di kartu grafis

Dengan WebGPU, kualitas tinggi memiliki dua langit lagi:

- {{ui:Physical sky}} menghitung cahaya siang dari tinggi matahari: biru tua di atas kepala, pita pucat di cakrawala, dan matahari yang menjadi lebih hangat dan redup saat rendah. {{ui:Haze}} berkisar dari hari yang sangat cerah (2) hingga berkabut (10).
- {{ui:Sky picture (HDRI)}} menerangi model dengan gambar panorama tempat nyata. {{ui:Choose a picture…}} mengambil berkas `.hdr` atau `.exr` equirectangular; {{ui:Turn}} memutarnya mengelilingi model, dan {{ui:Picture brightness}} membuatnya lebih terang atau lebih gelap. Gambar itu membawa matahari sendiri, jadi matahari model tidak ditambahkan. Ia hanya disimpan selama halaman terbuka: setelah dibuka ulang, pilih lagi.

Setiap lampu dalam daftar {{ui:Lamps}} dapat menerima profil cahaya dari pabrikan: {{ui:IES profile…}} membaca berkas IES (LM-63), dan lampu lalu memancarkan cahayanya seperti armatur itu (sorot sempit, pencuci dinding). Setiap lampu dengan nama itu memakai profil tersebut, dan lampu tetap memakai kecerahannya sendiri. Klik nama profil untuk berhenti memakainya.

Jendela kaca bening membantu cahaya langit menemukan jalannya ke dalam ruangan.

Mode {{ui:Fast}} dan path tracer WebGL menampilkan {{ui:Physical sky}} dan {{ui:Sky picture (HDRI)}} sebagai langit cerah dan mengabaikan profil cahaya.

## Kamera

{{ui:Camera}} mengatur gambar seperti fotografi:

- {{ui:Exposure}}: pertahankan {{ui:Brightness slider}}, atau pilih {{ui:Camera settings}} dan atur {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}}, dan {{ui:ISO}} seperti pada kamera; EV di sebelahnya adalah nilai paparan yang biasa. f/16 pada 1/100 s dan ISO 100 cocok untuk hari cerah; adegan yang lebih gelap memerlukan bukaan lebih lebar, rana lebih lambat, atau ISO lebih tinggi. Ini berfungsi di setiap mode.
- {{ui:Depth of field}} mengaburkan apa yang lebih dekat atau lebih jauh dari {{ui:Focus distance (m)}} seperti lensa dengan f-stop itu (kosongkan untuk fokus pada apa yang berada di tengah tampilan); {{ui:Aperture shape}} memberi sorotan di luar fokus bentuk bulat atau bersegi.
- {{ui:Two-point perspective (vertical lines stay vertical)}} meratakan kamera dan menggeser gambar, seperti lensa tilt-shift arsitektur, sehingga dinding tidak miring saat Anda melihat ke atas atau ke bawah pada bangunan.
- {{ui:White balance}} menentukan warna cahaya mana yang tampak putih: lebih rendah (misalnya 3000 K) untuk cahaya lampu yang hangat, lebih tinggi untuk naungan dan hari mendung.
- {{ui:Projection}}: {{ui:360° panorama}} membuat gambar 2:1 dari segala arah di sekeliling kamera untuk penampil panorama; {{ui:360° stereo panorama}} menumpuk panorama mata kiri dan kanan untuk headset; {{ui:Cube map (6 faces)}} membuat enam tampilan persegi dalam kisi 3 × 2. Lebarnya berasal dari {{ui:Size}}.

Proyeksi, kedalaman bidang, perspektif dua titik, dan keseimbangan putih membutuhkan path tracer di kartu grafis (WebGPU), sehingga hanya tampil pada {{ui:High quality (path traced)}}.

## Selesaikan gambar

{{ui:Picture}} memberi grading pada gambar kualitas tinggi seperti fotografi, dan setiap kontrol langsung mengubah gambar jadi tanpa merender ulang:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (gambar seperti sebelumnya), {{ui:AgX}} (lebih lembut, menjaga warna pada cahaya sangat terang), {{ui:Filmic}} (kurva film yang lembut), atau {{ui:Standard}} (polos, cahaya terang terpotong menjadi putih).
- {{ui:Contrast}} dan {{ui:Highlight compression}} (mengembalikan detail pada bagian yang sangat terang).
- {{ui:Bloom}} (cahaya lembut di sekitar lampu terang), {{ui:Glare}} dengan {{ui:Glare streaks}} (sinar bintang dari titik terterang), dan {{ui:Vignette}} (sudut yang lebih gelap).
- {{ui:Colour table (.cube)…}} menerapkan grading warna dari berkas `.cube`, dengan {{ui:Colour table strength}}-nya; seperti gambar langit, ia hanya disimpan selama halaman terbuka.

## Simpan gambar

{{ui:Save as}} di sebelah {{ui:Save}} memilih berkas: {{ui:PNG}}, {{ui:JPEG}}, atau {{ui:WebP}} untuk dibagikan (JPEG dan WebP hanya bila peramban dapat menulisnya), dan setelah render kualitas tinggi di kartu grafis juga:

- {{ui:PNG, 16 bits}}: gambar yang sudah di-grading dengan langkah yang lebih halus di antara tingkat warna, untuk dicetak atau diedit lebih lanjut.
- {{ui:EXR, every layer (32-bit float)}}: gambar seperti yang dirender (cahaya linear, tanpa grading) dengan setiap elemen render dan grup cahaya sebagai lapisannya sendiri, untuk program kompositing.
- {{ui:Render file (.ccrender, to grade again later)}}: semua yang dibutuhkan dialog untuk mencampur dan memberi grading ulang gambar. {{ui:Open a render file…}} mengembalikannya, dengan campuran dan grading-nya, tanpa merender.

## Campur cahaya setelah render

Aktifkan {{ui:Light mixing (change each light's colour and brightness after the render)}} sebelum Anda menekan {{ui:Render}}. Saat gambar selesai (atau dihentikan), {{ui:Mix the picture}} mendaftar lampunya dalam grup: langit, matahari, dan lampu menurut nama (setiap lampu dengan nama yang sama adalah satu grup). Matikan sebuah grup, beri warna, atau buat lebih terang atau lebih gelap, dan gambar langsung berubah tanpa merender ulang. {{ui:Save mix}} menyimpan campuran dengan nama untuk dipilih lagi nanti; {{ui:As rendered}} kembali ke gambar seperti saat dibuat. {{ui:Save}} menyimpan gambar yang sudah dicampur.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} juga menyimpan bagian-bagian gambar. {{ui:Show}} beralih tampilan ke salah satunya: warna permukaan (albedo), normal, kedalaman, difus, spekular dan cahaya yang diteruskan (masing-masing langsung dan tidak langsung), apa yang memancar dan langit, serta satu warna per objek atau per material untuk membuat mask.

Keduanya menyimpan lapisan tambahan di kartu grafis. Pada ukuran besar, kartu grafis mungkin tidak punya cukup ruang; dialog memberitahu, dan ukuran yang lebih kecil dapat dipakai.

## Kabut, asap, derau, dan kaustik

Ini ada di {{ui:Fog, smoke and noise}} dan berfungsi di {{ui:High quality (path traced)}} pada kartu grafis; mesin lain tidak menyertakannya.

- {{ui:Fog and haze}} mengisi udara sampai ketinggian tertentu dengan kabut yang diterangi matahari, langit, dan lampu. {{ui:How far you can see, in meters}} menentukan seberapa tebal (sekitar 100 m untuk kabut tipis, 20 m untuk kabut tebal), {{ui:Fog height above the ground, in meters}} adalah tempat ia berakhir, dan {{ui:Light shafts}} adalah seberapa kuat kabut bersinar ke arah cahaya. Cahaya matahari meninggalkan kabut di bagian atasnya, sehingga bila matahari masuk lewat jendela atau di antara bangunan, Anda melihatnya sebagai berkas cahaya.
- {{ui:Smoke or cloud}} menambahkan satu volume asap atau awan yang diterangi seperti kabut. {{ui:Kind}} berupa {{ui:Cloud}}, {{ui:Smoke column}}, atau {{ui:From a volume file (.ccvol)}}, format kisi milik CadCraft. {{ui:Detail}} dan {{ui:Variation}} mengubah awan atau kolom yang dibuat, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}}, dan {{ui:Turn}} menempatkannya (ia mulai di tengah model), {{ui:Thickness}} membuatnya lebih padat, {{ui:Forward glow}} membuatnya lebih terang ke arah cahaya, dan {{ui:Color}} memberinya warna. Berkas volume hanya disimpan selama halaman terbuka, seperti gambar langit.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} tidak memberi sampel tambahan pada piksel yang sudah mapan. {{ui:Noise to accept}} adalah seberapa banyak butiran yang tersisa saat sebuah piksel berhenti. Baris di bawah gambar menyatakan rata-rata berapa sampel yang didapat sebuah piksel.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} menelusuri cahaya dari lampu dan matahari, sehingga bintik terang di bawah bola kaca atau pantulan cermin di dinding tampak bersih, bukan berbutir. Ia mati saat kabut, asap, pencampuran cahaya, atau elemen render aktif, dan dibuat untuk gambar, bukan untuk gambar 360°.

## Antrean render

{{ui:Render queue}} di dialog: {{ui:Add this picture to the queue}} menyimpan pengaturan dan tampilan gambar, dan {{ui:Start the queue}} merender yang menunggu, satu per satu, di komputer ini. Menutup halaman tetap menyimpan antrean; buka model yang sama untuk melanjutkan. {{ui:Save}} mengunduh yang sudah selesai; {{ui:Remove}} dan {{ui:Clear finished}} merapikan daftar. Antrean merender dalam kualitas tinggi, sehingga membutuhkan WebGPU.

## Berapa lama waktunya

Gambar dibuat di komputer Anda sendiri, oleh kartu grafisnya; tidak ada yang diunggah. Waktu bertambah seiring jumlah lintasan dan piksel: {{ui:Best}} memiliki 16 kali lintasan {{ui:Draft}}, dan gambar 4K memiliki sekitar empat kali piksel Full HD. Model besar membutuhkan waktu lebih lama per lintasan.
