---
title: Perkirakan cahaya siang di setiap ruangan
summary: Faktor cahaya siang rata-rata setiap ruangan dari jendelanya, permukaan dalamnya, dan langit yang terlihat dari setiap jendela, dengan sudut langit diukur di dalam model. Perkiraan tahap desain awal, bukan simulasi atau pemeriksaan kode.
keywords: cahaya siang, faktor cahaya siang, faktor cahaya siang rata-rata, adf, komponen langit vertikal, vsc, perolehan panas matahari, matahari, nilai g, grid, split flux, komponen langit, komponen terpantul internal, cahaya alami, jendela, kaca, sudut langit, halangan, bayangan, balkon, overhang, reflektansi, transmitansi, desain awal, analisis, ruangan, space
from: 5f300a78
---

Tab {{ui:Cahaya siang}} di panel kanan menghitung **faktor cahaya siang rata-rata** setiap ruangan: seberapa banyak cahaya dari langit mendung di luar yang mencapai ruangan, rata-rata, dalam persen. Tab ini membaca ruangan (space) dan jendela dari model IFC yang sedang terbuka. Tidak ada yang diubah di model dan tidak ada yang diunggah.

:::warning
Semua yang ada di tab ini adalah **alat bantu desain, bukan perhitungan kepatuhan**: perkiraan tahap desain awal dengan metode yang sudah dipublikasikan, **bukan simulasi** dan **bukan pemeriksaan terhadap kode bangunan atau standar**. BS EN 17037, LEED, BREEAM, dan kode energi meminta simulasi cahaya siang dengan iklim tempat tersebut. Gunakan program simulasi cahaya siang untuk keperluan itu.
:::

## Hitung

1. Buka model IFC yang memiliki ruangan (space) dan jendela. Model yang digambar di sini memiliki satu ruangan di dalam setiap kumpulan dinding yang tertutup.
2. Buka tab {{ui:Cahaya siang}} dan klik {{ui:Hitung}}.
3. Setiap ruangan menampilkan faktor cahaya siangnya dan sebuah pita: di bawah 2 %, 2–5 %, atau 5 % ke atas. Klik sebuah ruangan untuk melihat permukaannya serta luas dan sudut langit setiap jendela. Ruangan dan jendelanya dipilih di model.

Ubah sebuah input dan angkanya langsung mengikuti. Setelah model diubah, klik {{ui:Hitung lagi}}. {{ui:CSV}} menyimpan setiap ruangan beserta angkanya dan input yang dipakai.

## Rumus

Faktor cahaya siang rata-rata (%) = T × Ag × θ × M ÷ (A × (1 − R²)), dijumlahkan untuk jendela-jendela ruangan (rumus Littlefair, dipakai oleh BRE 209, BS 8206-2, dan CIBSE LG10):

- **T**, transmitansi cahaya kaca (0.7 sebagai awal: gunakan angka dari pabrikan).
- **Ag**, luas kaca: luas setiap jendela (lebar keseluruhan × tinggi, atau ukurannya di model jika tidak ada) × **proporsi kaca** (0.75 sebagai awal: sisanya adalah bingkai).
- **θ**, sudut langit yang dilihat jendela, dalam derajat (lihat di bawah).
- **M**, faktor pemeliharaan untuk kotoran pada kaca (1 sebagai awal).
- **A**, setiap permukaan dalam ruangan: lantai, dinding, plafon, dan jendela, diambil dari bentuk ruangan itu sendiri.
- **R**, rata-rata reflektansinya, dibobot menurut luas: lantai 0.2, dinding 0.5, dan plafon 0.7 sebagai awal. Kaca dihitung 0.1.

## Cara mengukur sudut langit

Untuk setiap jendela, BimCraft memotong model dengan bidang tegak yang tegak lurus terhadap jendela, dari muka luar kaca, lalu melihat dari horizon lurus ke atas. Apa pun yang dikenai potongan di depan jendela (gedung di seberang, balkon atau overhang di atas, tritisan atap) menutupi sebagian dari sudut 90° itu. θ adalah sisa yang tidak tertutup. Jendela itu sendiri dan dinding tempatnya berada tidak dihitung. Pengukuran dilakukan di lima titik di sepanjang lebar jendela dan diambil rata-ratanya, sehingga tiang tipis di depan bagian tengah hanya mengambil bagiannya, bukan seluruh langit.

Gedung 8.5 m di atas pusat jendela dan 9.9 m jauhnya menutupi 40.65° (sudut yang tangennya 8.5 ÷ 9.9), sehingga menyisakan θ = 49.35°.

## Komponen langit vertikal setiap jendela

{{ui:Hitung}} juga mengukur, untuk setiap jendela, seberapa banyak langit penuh yang dilihatnya: potongan tegak yang sama, diputar ke setiap arah di depan jendela (setiap 2°, dari satu sisi ke sisi lain). Dengan begitu, gedung di satu sisi, sirip, atau reveal yang dalam ikut mengambil bagiannya. Dari situ BimCraft menghitung **komponen langit vertikal (VSC)**: seberapa banyak cahaya langit mendung yang mencapai kaca, sebagai bagian dari yang didapat atap datar yang terbuka. Jendela tanpa apa pun di depannya mendapat **39.6 %**, yang paling besar bisa didapat jendela tegak. Gedung panjang yang menjulang 25° di atas jendela menyisakan sekitar **27 %**, angka yang dipakai panduan Inggris (BRE 209) sebagai aturan praktis. Setiap jendela dalam detail ruangan menampilkan VSC-nya dan **sudut halangannya** (seberapa tinggi benda menjulang lurus di depannya).

Langitnya adalah langit mendung standar CIE, yang tiga kali lebih terang lurus ke atas daripada di horizon. Potongannya tepat: tidak ada yang diambil sampelnya.

## Matahari melalui jendela pada suatu tanggal

Buka {{ui:Matahari melalui jendela pada suatu tanggal}} dan pilih tanggal. BimCraft mengikuti matahari sepanjang hari itu dalam seperempat jam dan menjumlahkan, untuk setiap jendela, panas yang dibawa matahari melalui kaca:

- **sinar matahari langsung**, ketika berada di depan jendela dan tidak ada yang di model yang menghalanginya (potongan yang sama persis, diputar ke arah matahari: balkon yang menaungi matahari tengah hari musim panas yang tinggi membiarkan matahari musim dingin yang rendah masuk);
- **cahaya langit** di kaca, dikurangi apa yang tidak bisa dilihat jendela;
- cahaya **dari tanah** (reflektansinya: 0.2 sebagai awal);
- semuanya melalui **nilai g** kaca (proporsi energi matahari yang diloloskannya: 0.6 sebagai awal; gunakan angka dari pabrikan) dan proporsi kacanya.

Setiap ruangan menampilkan total harian dalam kWh dan puncaknya dalam watt beserta waktunya. Detail ruangan menggambar harinya sebagai grafik. Langitnya adalah langit cerah menurut model Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), dengan angka musim panas atau musim dingin untuk tempat dan musim tersebut serta ketinggian tapaknya. Posisi matahari berasal dari NOAA. Lintang dan bujur tapak diambil dari site IFC, dan utara dari utara sebenarnya model. Jika model tidak punya site, ketik lintang dan bujurnya. Waktunya adalah waktu standar (tanpa waktu musim panas) dalam zona waktu yang Anda ketik, atau zona waktu yang disarankan oleh bujur.

Yang tidak diperhitungkan: awan (ini hari cerah), kaca yang meloloskan lebih sedikit pada sudut rendah, bingkai yang menaungi kaca, tirai, dan apa yang diserap dinding serta atap. Estimasi pendinginan di tab yang sama memakai puncaknya.

## Faktor cahaya siang pada grid

Buka {{ui:Faktor cahaya siang pada grid}} dan {{ui:Hitung grid}}. BimCraft membuat grid di atas lantai setiap ruangan pada ketinggian bidang kerja (0.85 m sebagai awal), setengah meter dari dinding, lalu menghitung faktor cahaya siang di setiap titik dengan **metode split-flux BRE**:

- **komponen langit**: langit mendung yang terlihat dari titik melalui bukaan setiap jendela, dikurangi bingkai;
- **komponen terpantul eksternal**: apa yang dilihat titik dari gedung di luar melalui jendela, yang bercahaya sepersepuluh dari langit di belakangnya (ubah kecerahan halangan jika gedung itu jauh lebih terang atau lebih gelap);
- **komponen terpantul internal**: cahaya yang memantul di dalam ruangan, dari permukaan dan reflektansi ruangan, luas jendela, dan seberapa besar bagiannya berada di luar (rumus BRE, dengan transmitansi kaca menggantikan kaca bening yang diasumsikannya).

Setiap ruangan menampilkan rata-ratanya, titik terendahnya, dan seberapa banyak bagian ruangan yang mendapat 2 % atau lebih. Detail ruangan menggambar denahnya dengan setiap titik diwarnai menurut faktor cahaya siangnya dan jendela berwarna merah. Agar tetap cepat di komputer mana pun, setiap ruangan mendapat paling banyak **400 titik**: di ruangan besar jaraknya akan membesar agar muat. Ketik jarak untuk memilih sendiri.

## Yang tidak diperhitungkan

- Jendela atap (kaca yang rata atau miring) didaftar tetapi tidak dihitung: rumus di sini untuk jendela di dinding.
- Jendela tanpa ruangan di belakangnya (misalnya hall tanpa space) didaftar terpisah.
- Reveal jendela (bukaan diambil dari muka luar), silau, jam matahari, dan cahaya siang berbasis iklim. Untuk BS EN 17037, LEED, atau BREEAM, gunakan program simulasi cahaya siang.
- Pita diambil dari panduan Inggris yang lebih lama (BS 8206-2) dan ditampilkan sebagai panduan saja, bukan lulus atau gagal.
