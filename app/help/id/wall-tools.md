---
title: Bentuk dinding, pemisahan, offset, regangan, dan kunci
summary: Gambar dinding sebagai persegi panjang, poligon, busur, pada garis yang dipilih, atau mengelilingi sebuah garis luar; pisahkan, buang sebagian, offset, regangkan dengan kotak, sejajarkan dan kunci ke satu sama lain, ke dimensi, atau ke garis grid. Setiap perubahan tetap menyambungkan dinding dan merupakan satu langkah urungkan.
keywords: tukar tipe, ubah tipe, ganti tipe, apa yang berpindah, lod, tingkat pengembangan, gaya sambungan, miter, butt, potong siku, sambungan dinding, berikutnya, menembus, izinkan sambungan, layer priority, inti, prioritas, persimpangan, persegi panjang, persegi panjang terputar, poligon, tertulis, terlingkup, busur, pusat, busur singgung, pilih garis, tab, telusur, garis luar, tongkat ajaib, pisahkan, pisah dengan celah, celah, hapus segmen, sambung kembali, offset, salin, regangan kotak, marquee, regangkan, sejajarkan, kunci, gembok, batasan, kunci dimensi, sunting dimensi, grid, kunci ke grid, pindahkan garis grid, offset penempatan, lepas sambungan, berdiri bebas, tumbuh dari, ukur dari, garis tengah, muka dalam, muka luar, putus sambungan, alt
from: 5b7d2f75
---

## Yang akan Anda lakukan

Buat dan ubah dinding dengan resep alat dinding. Setiap resep berakhir sama seperti menggambar dinding berdasarkan sudutnya: sudut-sudutnya tersambung dengan sendirinya, sambungannya disimpan dalam file, dan seluruh perubahan adalah satu langkah di **Perubahan** yang dibatalkan oleh {{ui:Urungkan}}. Dinding mempertahankan identitasnya: dinding yang Anda pisah, offset, atau regangkan tetap dinding yang sama, dengan pintu, jendela, dan dimensinya.

## Gambar persegi panjang, poligon, atau busur

Dengan {{ui:Gambar}} aktif, buka {{ui:Bentuk}} di grup Gambar (atau pilih bentuk di daftar **Bentuk** pada baris Dinding). Baris Dinding menampilkan tipe dinding, referensi gambar, sisi luar, dan puncak, seperti pada alat {{ui:Dinding}}. Lalu klik, atau ketik titik-titiknya (x,y · @dx,dy · @panjang<sudut · panjang sepanjang penunjuk):

- **Persegi panjang**: dua sudut yang berseberangan. Empat dinding, empat sambungan sudut, satu langkah.
- **Persegi panjang terputar**: di mana sisi pertama dimulai dan berakhir (itu menentukan belokan dan panjangnya), lalu klik ketiga untuk sisi yang lain.
- **Poligon**: pusatnya, lalu sebuah sudut (**Tertulis**) atau titik tengah sebuah sisi (**Terlingkup**). Atur **Sides** (3 sampai 64) lebih dulu.
- **Busur, pusat**: pusatnya, awalnya (yang menentukan jari-jari), akhirnya. **Arah putaran**: jalur yang lebih pendek, berlawanan jarum jam, atau searah jarum jam. Sapuan lebih dari tiga perempat lingkaran digambar sebagai dua dinding.
- **Busur singgung**: klik ujung sebuah dinding, lalu di mana busur berakhir. Busur meninggalkan ujung dinding mengikuti arah dinding itu sendiri.

Bentuk tertutup mendapat sisi luarnya ke luar. Jika digambar pada **Muka luar** atau **Muka dalam**, muka yang Anda klik adalah muka yang tetap di tempatnya.

## Dinding pada garis yang sudah ada

- **Pilih garis**: klik sebuah garis dan dinding akan berada di atasnya. Tekan {{key:Tab}} (atau tahan {{key:Shift}} saat mengklik) untuk mengambil seluruh rangkaian garis yang tersambung ujung ke ujung. Garis-garis ini adalah garis gambar tampilan ini, referensi telusur, dan garis grid.
- **Telusuri garis luar**: klik di dalam area yang tertutup oleh garis-garis itu atau oleh dinding. Dinding mengelilingi area terkecil di sekitar klik.

## Atur sebelum menggambar: offset dan sambungan

Baris Dinding memiliki dua kolom lagi, yang dipakai oleh alat {{ui:Dinding}} dan bentuk:

- **Offset**: dinding digambar sejauh ini dari garis yang Anda klik: + ke kirinya, − ke kanannya, dilihat dari arah Anda menggambar.
- **Sambung**: hapus centang untuk menggambar dinding berdiri bebas. Ujungnya mendapat **Disallow join** dan tetap bebas di mana pun ia pergi (lihat [Ubah dinding](topic:change-a-wall-or-door)).

## Pisahkan, buang sebagian, sambung kembali

Buka {{ui:Dinding}} di grup Edit.

- **Pisahkan**: klik dinding di tempat ia harus dipotong, atau ketik jarak dari awalnya. Di dekat dinding yang memotongnya, potongan menempel di tempat keduanya bertemu. Kedua bagian memiliki tipe yang sama dan tetap tersambung ujung ke ujung. **Celah** menyisakan ruang sepanjang nilai itu, terpusat di potongan. **Ujung bebas** memberi ujung potongan Disallow join sebagai gantinya (Pengaturan › BimCraft › Dinding › **When a wall is split** menentukan mana yang dicentang sejak awal). Pintu atau jendela ikut bagian tempat ia berdiri; potongan yang melewatinya ditolak.
- **Hapus segmen**: klik tempat bagian itu mulai dan tempat ia berakhir. Pintu di bagian itu ikut terhapus.
- **Sambung kembali**: klik kedua bagian dari satu dinding (lurus, tipe yang sama). Keduanya kembali menjadi satu dinding, yang pertama Anda klik, dengan pintu dari keduanya.

## Gaya sambungan, Disallow join, prioritas lapisan

Buka {{ui:Dinding}} di grup Edit.

- **Gaya sambungan**: klik sudut tempat dua dinding lurus berakhir. Setiap klik berpindah ke gaya berikutnya: **Miter** (kedua ujung dipotong pada garis dari sudut dalam ke sudut luar, yang menjadi titik awal setiap sudut), **Butt** (satu dinding menembus sampai ke muka luar dinding lain, yang berhenti di sisinya), dan **Potong siku** (seperti butt, dan dinding yang menembus berakhir siku; pada sudut siku-siku tampilannya seperti butt). **Berikutnya**, atau {{key:Tab}}, menjadikan dinding lainnya sebagai dinding yang menembus. Daftar **Gaya** di bilah menampilkan sudut yang terakhir Anda klik. Pilihan yang sama ada di **Properti** satu dinding: **Join style at start / at end** dan **Runs through**. Setiap perubahan adalah satu langkah di **Perubahan**. Denah, badan 3D, ruangan, dan kuantitasnya ikut berubah.
- Pada sambungan T, dinding yang sisinya ditemui selalu menembus. Di tempat dua dinding berpotongan, sebuah klik (atau **Continuous where it crosses** di Properti) menyatakan mana dari keduanya yang menerus; itu menentukan lapisan dinding mana yang digambar melewati persimpangan.
- Gaya itu milik sambungannya: ia tetap saat dinding berpindah dan hanya hilang bila sambungannya hilang (dinding dihapus, dipisah di ujung itu, atau ujungnya mendapat Disallow join). Sudut dengan dinding melengkung, atau tempat tiga dinding atau lebih bertemu, tetap miter. Sudut yang lebih tajam dari sekitar 30 derajat, atau lebih datar dari sekitar 150, juga kembali ke miter.
- **Disallow join**: klik dekat ujung dinding. Ujung itu dibebaskan: ia tidak menyambung apa pun, ke mana pun dinding bergerak, sampai Anda mengkliknya lagi. Ujung bebas ditandai dengan silang saat alat aktif. Sakelar yang sama adalah **Join at start / Join at end** di Properti.
- **Prioritas lapisan**: di tempat dinding berlapis bertemu, lapisan yang lebih kuat memotong yang lebih lemah, sehingga inti bertemu inti dan finishing berhenti di lapisan yang lebih kuat. Setiap lapisan memiliki prioritas dari 0 sampai 999; secara default ia berasal dari fungsi lapisan (struktur 800, substrat 600, insulasi 400, membran 300, finishing 200, rongga 100). {{ui:Prioritas layer}} membuka rakitan dinding, tempat kolom **Priority** mengatur angka lapisan itu sendiri. Lapisan dengan prioritas sama saling berhenti, dan garis hanya digambar di antara material yang berbeda. Anda melihatnya pada denah dengan detail **Sedang** atau **Halus**, di sudut, sambungan T, dan persimpangan dua dinding lurus; Pengaturan › BimCraft › Dinding › **Clean wall layers where walls meet** mematikannya. Ini hanya mengubah apa yang digambar di dalam dinding: garis luar dan kuantitas dinding tetap seperti yang diberikan gaya sambungan.

## Tukar tipe banyak dinding

Beralih dari denah sketsa ke gambar kerja sebagian besar adalah perubahan tipe: dinding generik menjadi bangunan spesifik. Anda tidak perlu menggambar ulang apa pun.

1. Pilih dindingnya (satu, atau banyak dengan {{key:Ctrl}} atau {{key:Shift}}).
2. Di Properti, tekan **Tukar tipe…** di bawah Tipe dinding (atau buka {{ui:Dinding}} di grup Edit dan pilih {{ui:Tukar tipe}}, yang membuka daftar yang sama). Daftar terbuka di dalam Properti, di blok milik dinding yang dipilih. Ini bukan dialog dan tidak menutupi apa pun: denah, tampilan 3D, dan pemilihan tetap berfungsi saat daftar terbuka, dan daftar mengikuti dinding yang Anda pilih.
3. Daftar menampilkan setiap tipe dinding dengan ketebalan dan tag LOD-nya, misalnya "Wall 230 generic, LOD 200" dan "230 clay brick, plastered both sides, LOD 300". Tipe yang dimiliki dinding yang dipilih saat ini ditandai. Ketik di **Cari** untuk mempersempit: nama, ketebalan, atau `lod 300`.
4. Klik sebuah tipe. Setiap dinding yang dipilih berubah ke tipe itu dalam satu langkah, sehingga satu {{ui:Urungkan}} membatalkan seluruh penukaran. Tombol x kecil menutup daftar.

Setiap dinding mempertahankan garis lokasinya. Dinding pada garis tengahnya tumbuh ke kedua sisi; dinding yang garis lokasinya adalah sebuah muka mempertahankan muka itu dan tumbuh ke arah lain, dan dinding yang tersambung dengannya ikut di sudut. Dinding yang dikunci ke dinding yang ditukar ikut juga. Pintu dan jendela tetap di dindingnya dan dipotong ulang sesuai ketebalan baru.

Setelah penukaran, daftar menampilkan **What moved**: berapa banyak dinding yang berubah dan menjadi apa, ketebalan dan LOD sebelum serta sesudahnya, dinding yang bergeser ke samping untuk mempertahankan garis lokasinya, dinding tersambung yang mengikuti, pintu dan jendela yang di-host ulang, serta setiap ruangan yang luasnya berubah dengan luas sebelum dan sesudahnya. Bilah status menyatakan hal yang sama dalam satu baris. Laporan hanya memberi tahu; ia tidak pernah menghentikan penukaran. Memilih tipe di **Properti › Tipe dinding** melakukan penukaran yang sama dan memberikan laporan yang sama.

Dua hal menghentikan penukaran, dan jika itu terjadi tidak ada yang diubah sama sekali: pintu atau jendela yang tidak lagi muat di dindingnya (dinding menjadi lebih pendek di tempat sudut mengikuti; buat pintu lebih sempit atau pindahkan dari sudut lebih dulu), dan kunci yang akan dirusak oleh penukaran (dinding yang dikunci ke garis grid oleh garis tengahnya sementara garis lokasinya adalah sebuah muka; buka kuncinya atau kembalikan garis lokasinya ke garis tengah).

Asisten yang terhubung ke BimCraft dapat melakukan penukaran yang sama (alat `wall_types_list` dan `walls_swap_type`) dan menerima laporan yang sama.

Tag LOD sebuah tipe diatur di penyunting rakitan dinding: lihat [Rakitan dinding](topic:wall-assemblies).

## Offset dan regangan kotak

- **Offset**: klik sebuah dinding, lalu sisi tempat memindahkannya, atau ketik jaraknya. Dinding bergeser tegak lurus terhadap dirinya sendiri dan dinding yang tersambung dengannya meregang. Centang **Copy** untuk salinan sejajar sebagai gantinya (ia tidak tersambung ke yang asli).
- **Regangan kotak**: klik dua sudut sebuah kotak, lalu sebuah titik untuk dipindahkan dari dan sebuah titik tujuan. Setiap ujung dinding di dalam kotak ikut bergerak; dinding yang sepenuhnya di dalam ikut bergerak dan dinding yang menumpu padanya ikut juga; dinding yang melintasi kotak ikut meregang.

## Edit dimensi dan kunci

Pilih dimensi referensi (Anotasi › {{ui:Dimensi referensi}}) dan ketik nilainya di **Properti**: dinding dari referensi keduanya bergeser tegak lurus terhadap dirinya sendiri, referensi pertama tetap, dan dinding yang tersambung mengikuti. Centang **Lock this dimension** untuk mempertahankan nilainya: saat salah satu dinding berpindah nanti, dinding lainnya mengikuti. Nilai yang dikunci tidak dapat ditimpa dengan mengetik sampai Anda menghapus centangnya.

## Sejajarkan dan kunci

**Sejajarkan dan kunci**: klik muka dinding (atau garis tengah, di dekat tengah dinding) atau garis grid, lalu muka dinding yang akan dibawa ke garis itu. Dinding bergeser tegak lurus ke garis itu. Centang **Lock** lebih dulu untuk menjaganya tetap sejajar: gembok tampil di denah, dan saat satu dinding bergerak, yang lain mengikuti. **Properti** dinding mencantumkan **Locks**-nya, masing-masing dengan **Unlock**.

## Kunci dinding ke garis grid

Pilih dinding yang berjalan sepanjang garis grid, atau yang ujungnya berada di atasnya, lalu pilih garis grid di **Properti** › **Lock to grid**. Lalu pilih garis grid dengan alat {{ui:Grid}} dan ketik jarak di {{ui:Pindahkan sejauh}}: garis itu bergeser tegak lurus terhadap dirinya sendiri dan dinding yang dikunci ke sana ikut, bersama dinding tersambung mereka, dalam satu langkah. Dinding yang dikunci ke garis grid tidak dapat dipindahkan keluar darinya sendiri (pindahkan garisnya, atau buka kunci dinding); garis grid yang diputar sehingga dinding terkunci tidak dapat tetap tegak lurus di atasnya ditolak. Mengganti nama garis mempertahankan kuncinya; menghapusnya menghilangkan kunci.

## Panjang: sisi mana yang bertahan, dan apa yang diukur

- **Tumbuh dari** (Properti satu dinding): **Start holds** (ujung yang bergerak), **End holds** (awal yang bergerak), atau **Centre holds** (kedua ujung bergerak setengah). Saat Anda mengetik Panjang, denah menandai titik yang bertahan. Dinding yang tersambung di ujung yang bergerak ikut bergerak tegak lurus dan mempertahankan sudutnya.
- **Ukur dari** (di samping Dimensi pada denah, di Properti, dan di Pengaturan › BimCraft › Dinding): garis tengah, muka dalam, atau muka luar. Kolom Panjang dan dimensi dinding pada denah membaca yang sama, sehingga keduanya cocok. Awalnya memakai garis tengah.
- Untuk memindahkan dinding bebas dari sambungannya (sambungannya putus, dinding mempertahankan identitasnya), tahan {{key:Alt}} saat Anda menyeret grip tengahnya.

## Yang perlu diketahui

- Resep-resep ini berasal dari spesifikasi alat dinding (halaman 4 sampai 9). Gaya sambungan dan prioritas lapisan dibuat untuk dinding lurus; prioritas lapisan hanya tampil di denah (tidak di potongan, tampak, atau 3D, tempat dinding berupa satu badan), tidak di simpul tiga dinding atau lebih, dan membran tidak ikut terbawa.
- Gaya sambungan disimpan dalam rekamnya di file IFC (nama `IfcRelConnectsPathElements`, misalnya `CadCraft join L butt 1`), sehingga program lain tetap membaca sambungan itu, dan file lama dibuka dengan miter.
- Kunci dan sambungan disimpan dalam file IFC (kunci sebagai `CadCraft_WallHolds` pada proyek, sambungan sebagai `IfcRelConnectsPathElements`), sehingga ada saat Anda membuka file lagi.
- Dinding melengkung dapat dipisah, disambung kembali, dan dibuang sebagian; dinding itu tidak di-offset atau dikunci.
- Lihat juga [Gambar dinding](topic:draw-walls), [Ubah dinding, pintu, atau jendela](topic:change-a-wall-or-door), dan [Bentuk dinding](topic:wall-shape).
