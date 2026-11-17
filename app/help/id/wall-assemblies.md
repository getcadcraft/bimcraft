---
title: Rakitan dinding dan dimensi referensi
summary: Buat tipe dinding sendiri lapis demi lapis dengan inti yang eksplisit, simpan pustaka material proyek, dan beri dimensi ke muka dan garis tengah yang tetap terpasang saat dinding berubah.
keywords: lod, tingkat pengembangan, lod 200, lod 300, generik, rakitan dinding, tipe dinding, lapisan, inti, muka inti, garis tengah inti, rongga, celah udara, membran, house wrap, pustaka material, material, ketebalan, dimensi referensi, dimensi, asosiatif, garis lokasi, siding, stud, drywall
from: 4ea8fbf5
---

## Yang akan Anda lakukan

Buat tipe dinding yang sesuai dengan dinding yang akan Anda bangun: siding, sheathing, inti stud 5½ inci dan drywall, atau bata, celah udara, dan dinding rangka kayu. Tandai lapisan mana yang merupakan inti, sehingga dimensi atau garis lokasi dapat menahan inti sementara lapisan finishing di sekitarnya berubah. Lalu beri dimensi dinding ke muka dan garis tengah yang Anda maksud.

## Buat tipe dinding

1. Mulai bangunan atau buka model IFC, aktifkan {{ui:Gambar}}, lalu pilih alat {{ui:Dinding}}.
2. Pilih starter pada {{ui:Tipe dinding}} dan buka {{ui:Rakitan dinding…}}. Starter terbuka sebagai salinan; beri tipe baru itu nama.
3. Lapisan berjalan dari luar di bagian atas daftar ke dalam di bagian bawah. Pilih material tiap lapisan, ketik ketebalannya (satuan proyek, atau satuan eksplisit seperti `12.7 mm` atau `1/2"`), pilih fungsinya (finishing, substrat, struktur, insulasi, membran), dan centang lapisan **Inti**. Inti harus berupa satu kelompok yang menerus.
4. {{ui:Tambah lapisan}} menambahkan lapisan, {{ui:Tambah rongga}} menambahkan celah udara dengan ventilasinya (tidak ditentukan, tidak berventilasi, berventilasi), {{ui:Tambah membran}} menambahkan lapisan tanpa ketebalan nominal, seperti pembungkus rumah. Tombol panah memindahkan lapisan ke luar atau ke dalam.
5. Pratinjau menggambar lapisan sesuai skala dengan inti digarisbawahi, diberi nomor seperti barisnya, dan memberi dimensi pada tiap lapisan, inti, dan totalnya. {{ui:Simpan tipe}}.

Tipe baru ada dalam daftar alat Dinding dan di **Properti** dinding yang dipilih. Menyimpan tipe yang Anda edit mengubah setiap dinding yang memakainya; {{ui:Duplikat tipe}} membuat tipe terpisah dan hanya memberikannya kepada dinding yang Anda pilih. Setiap penyimpanan adalah satu langkah urungkan, bersama dinding yang dipindahkannya, pintu dan jendela di dalamnya, serta dimensi yang bergantung padanya.

Celah udara menambah lebar. Membran tidak menambah apa pun: ia tetap ada dalam tipe agar jadwal dapat menemukannya nanti, dan tidak dihitung dalam ketebalan dinding atau inti. Celah udara atau membran tidak pernah dihitung sebagai material padat. Dalam file yang disimpan sebagai IFC2X3, membran tetap ada dalam rekam tipenya, tetapi dibiarkan keluar dari lapisan material fisiknya.

## Beri tipe tingkat pengembangannya (LOD)

Tipe dapat menyatakan seberapa berkembang dirinya. Di penyunting, **Tingkat pengembangan (LOD)** menawarkan skala tetap 100, 200, 300, 350, 400 dan 500, atau **Belum diatur**. Dinding generik ("Wall 230 generic") adalah LOD 100 atau 200; rakitan spesifik dengan lapisan aslinya ("230 clay brick, plastered both sides") adalah LOD 300 atau lebih. Tag ini Anda yang mengatur: BimCraft tidak menghitungnya, dan starter tidak memilikinya.

Tag tampil di samping nama tipe pada daftar tipe alat Dinding, di Properti dinding, dan dalam daftar [Tukar tipe](topic:wall-tools). Laporan setelah penukaran menyatakan apakah tingkatnya naik atau turun. Untuk melihatnya di jadwal **Dinding menurut tipe** dan CSV-nya, centang **Show each wall type's LOD in the wall schedule** di Pengaturan › BimCraft › Dinding: kolom terakhir, LOD, akan ditambahkan. Tag disimpan dalam file IFC bersama tipe (dalam set properti `CadCraft_WallType`, sebagai properti `LOD` dan di dalam rekam tipe), sehingga tetap ada saat Anda membuka file lagi. Untuk saat ini tag hanya ada pada tipe dinding, belum pada elemen tunggal atau jenis elemen lainnya.

## Dinding generik untuk tahap sketsa

Daftar Tipe pada alat Dinding dimulai dengan dua dinding **generik**: **Generic wall 200 mm (exterior)** dan **Generic wall 100 mm (interior)**. Masing-masing adalah satu lapisan material generik, diberi tag LOD 200. Gunakan saat Anda sudah tahu di mana dinding berada tetapi belum tahu terbuat dari apa.

Dinding yang tipenya diberi tag **LOD 100** atau **LOD 200** digambar di setiap denah sebagai **satu pita berpola**, pada setiap tingkat detail: tanpa lapisan, tanpa garis lapisan. Itu berlaku untuk dinding generik dan untuk tipe buatan Anda sendiri yang Anda beri tag LOD 100 atau 200. Dindingnya sendiri sudah lengkap: memiliki ketebalan, pintu dan jendela, ruangan, dan kuantitasnya.

Untuk mengembangkannya, tukar tipenya (Edit › Dinding › **Tukar tipe**, atau Tipe di Properti). Dinding tidak pernah digambar ulang: dinding yang sama mengambil tipe baru, dan laporan menyatakan apa yang berpindah. Tipe yang diberi tag LOD 300 atau lebih tinggi digambar dengan lapisannya seperti sebelumnya.

Untuk menggambar setiap dinding berdasarkan lapisannya apa pun tag-nya: Pengaturan › BimCraft › Dinding, hapus centang **Draw walls of an LOD 100 or LOD 200 type as one hatched band**.

Pintu dan jendela starter juga merupakan jenis generik (ukuran dan cara membuka, bukan produk). Dengan **Show each wall type's LOD in the wall schedule** aktif, jadwal Pintu dan Jendela menampilkan LOD 200 untuk keduanya.

## Beri tipe data perhitungan volumenya

Di penyunting tipe dinding, **Data perhitungan volume** memuat apa yang perlu diketahui oleh estimator tentang dinding, sekali untuk tipe itu: **satuan** tempat dinding dibangun (bata atau blok: namanya, panjang, tinggi, dan lebarnya), **mortar** (nama dan tebal sambungan), serta **harga satuan** dengan kode mata uangnya (tiga huruf, seperti USD, EUR, atau ZAR) dan satuan harganya: per meter persegi atau kaki persegi luas dinding bersih, per meter atau kaki panjang dinding, atau per dinding. Semuanya bersifat opsional.

Data itu disimpan bersama tipe dalam file. Setiap dinding dari tipe tersebut kemudian melaporkannya: {{ui:Jadwal}} › **Wall types: takeoff data** memuat satuan, mortar, harga, dan harga dikali kuantitas terukur, serta perhitungan volume yang diserahkan ke TakeoffCraft membawa datanya pada item tipe dinding tersebut. Ubah pada tipenya dan setiap dinding mengikutinya.

Tiga kolom lagi untuk menghitung bata atau blok dan mortar:

- **Waste on units, %** ditambahkan ke jumlah satuan. Biarkan kosong untuk memakai angka dari metode pengukuran proyek, atau tidak ada jika metode itu tidak memilikinya. Masukkan 0 agar tidak ada susut apa pun, apa pun kata metodenya.
- **Extra mortar, %** untuk lubang atau perforasi yang menyerap mortar. Ditambahkan ke volume mortar. Biarkan kosong jika tidak ada.
- **Layers built of this unit**: centang setiap lapisan yang merupakan lapisan dari bata atau blok ini. Dinding berongga memiliki dua. Jika tidak ada yang dicentang, lapisan inti yang dihitung.

Harga juga dapat per satuan yang dipesan, per 1000 satuan yang dipesan, atau per m³ mortar. Jika satuannya memiliki panjang dan tinggi, **Wall types: takeoff data** menampilkan jumlah satuan per m² (atau ft²) satu lapis, jumlah satuan yang dipesan, dan volume mortar; rumusnya ada di [Bata, blok, dan mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Satu tipe hanya memiliki satu satuan: dua lapis dengan satuan berbeda (lapis luar bata dan lapis dalam blok) belum dapat dihitung pada satu tipe.

## Tahan inti tetap di tempatnya

Di **Properti**, atur **Location line** dinding ke muka inti atau garis tengah inti. Saat Anda kemudian menambah atau menebalkan finishing, garis itu tetap di tempatnya dan dinding tumbuh di sekelilingnya; dinding yang bertemu dengannya di sudut ikut, sehingga sudut lurus tetap tertutup.

## Material proyek

{{ui:Pustaka material…}} memuat material proyek: nama, kategori, ketebalan yang dipakai lapisan saat mulai, warna tampilan, pola isian potongan, dan catatan. Pustaka disimpan dalam IFC bersama proyek. Memilih material untuk sebuah lapisan memberi lapisan itu ketebalan default material, yang kemudian dapat Anda ubah; mengedit pustaka nanti tidak pernah mengubah ukuran dinding yang sudah Anda gambar. Anda juga dapat membuat material dari daftar material lapisan dengan {{ui:+ Material baru…}}.

## Dimensi referensi

{{ui:Anotasi}} › {{ui:Dimensi referensi}}: pilih horizontal, vertikal, atau sejajar, dan sebuah referensi: muka finishing luar atau dalam, muka inti luar atau dalam, garis tengah dinding, atau garis tengah inti. Pilih dinding pertama, ubah referensinya jika Anda mau, pilih dinding kedua, lalu klik tempat garis dimensinya diletakkan. Dua referensi pada satu dinding mengukur total atau ketebalan intinya. {{ui:Dimensi referensi…}} mencantumkan dimensi tampilan, termasuk yang kehilangan dindingnya, dengan Properti, {{ui:Ikat ulang referensi}}, dan {{ui:Hapus}}.

### Beri dimensi seluruh denah dengan aturan

{{ui:Anotasi}} › {{ui:Beri dimensi pada denah…}} memberi dimensi pada bagian luar denah lantai yang sedang Anda lihat: ukuran keseluruhan ke setiap arah, dan sebaris dimensi di sepanjang setiap tepi luar (ujung dinding, dinding yang bertemu tepi itu, serta pintu dan jendela di dalamnya), dengan baris diletakkan jauh dari bangunan. Centang yang Anda inginkan, baca jumlahnya, lalu {{ui:Tambahkan dimensi}}. Itu adalah dimensi referensi biasa, sehingga mengikuti dinding saat dinding berpindah dan Anda dapat memilih, memindahkan, atau menghapus salah satunya; seluruh kumpulan menjadi satu langkah urungkan, dan menjalankannya lagi tidak membuat dimensi ganda.

Hanya bagian luar yang diberi dimensi: ruangan di dalam bangunan, dinding melengkung, dan dinding yang tidak siku dengan denah ditinggalkan untuk alat manual, dan garis grid bukan dinding, sehingga dimensi di antara grid tidak dibuat di sini. Asisten yang terhubung dapat melakukan hal yang sama dengan `plan_dimension`.

Dimensi melekat pada dinding, bukan pada titik di layar: saat dinding berpindah atau tipenya berubah, nilainya ikut berubah. Jika dinding dihapus, dimensi menyatakan bahwa ia tidak terselesaikan dan tidak menampilkan angka, sampai Anda mengikatnya ulang atau membatalkan. Kotak panjang juga menerima koordinat denah seperti `10',12'` untuk garis dimensi di tempat yang tepat.

Dimensi hanya untuk dinding yang digambar BimCraft, pada tampilan denah. Belum dibuat: dimensi pada potongan dan tampak, ke pintu, jendela, dan komponen lainnya, serta lapisan rakitan yang digambar pada denah dan potongan; lihat [Belum dibuat](topic:not-built-yet).

## Lihat juga

[Gambar dinding](topic:draw-walls), [Ubah dinding, pintu, atau jendela](topic:change-a-wall-or-door), [Properti](topic:properties-panel).
