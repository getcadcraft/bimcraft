---
title: Jadwal, dimensi, dan PDF denah
summary: Jadwal pintu, jendela, dinding, dan ruang yang berubah saat Anda menggambar, dimensi di denah, dan denah sebuah level yang disimpan sebagai PDF pada skala standar.
keywords: jadwal, jadwal pintu, jadwal jendela, jadwal dinding, jadwal ruang, kuantitas, takeoff, luas, csv, spreadsheet, dimensi, cetak, pdf, plot, skala, 1/4", 1:50, lembar
from: d97cd16e
---

## Yang akan Anda lakukan

Lihat apa yang dijumlahkan bangunan yang Anda gambar, selagi Anda menggambarnya: berapa banyak pintu dan jendela untuk setiap ukuran, berapa luas dinding untuk setiap tipe, seberapa besar setiap ruang. Tambahkan dimensi di denah dan simpan sebagai PDF untuk dicetak atau dikirim.

## Jadwal

Dengan {{ui:Draw}} aktif, **Jadwal** di panel kiri menampilkan satu tabel dalam satu waktu:

- **Pintu** dan **Jendela**: masing-masing menurut markanya (D1, D2 … dan W1 …, diberikan saat Anda menempatkannya), tipenya, lebar, tinggi (dan ambang), level, serta dinding tempatnya berada.
- **Dinding menurut tipe**: untuk setiap tipe dinding, jumlah dinding, tebalnya, total panjangnya, dan luas sisinya sebagai **luas kotor**, **pengurangan**, dan **luas bersih**, dengan total.
- **Ruang**: nomor, nama, level, luas dan keliling, dengan total luas.
- **Lantai**: setiap lantai dengan level, jenis, dan tebalnya, serta luas kotor, pengurangan, dan luas bersihnya.
- **Finishing**: setiap lapisan finishing dari tipe dinding (menurut material dan sisi dinding) serta plafon, dengan jumlah muka dan kotor, pengurangan, dan bersih.
- **Wall types: takeoff data**: yang dimasukkan sekali pada setiap tipe dinding (satuan, mortar, laju), dengan jumlah dinding, panjang dan luas bersihnya, serta laju dikali kuantitas yang diukur. Lihat [Rakitan dinding](topic:wall-assemblies).
- **Finishes by room**, **Finishes by wall**, **Finishes by zone**, dan **Finish quantities**: apa yang menutupi setiap ruang, dengan luas, jumlah ubin termasuk potongan, dan volume substrat. Lihat [Finishing ruangan dan jadwal finishing](topic:room-finishes).
- Pengaturan **set-up** Anda sendiri: jadwal yang Anda kelompokkan, totalkan, dan simpan dengan nama. Lihat [Susun, simpan, dan ekspor jadwal](topic:schedule-layouts).

Tabel berubah dengan setiap pengeditan. Klik sebuah baris, atau satu angka, untuk memilih elemen asalnya. **Unduh CSV** menyimpan tabel untuk dibuka di spreadsheet; **Unduh Excel** dan **Salin untuk Google Sheets** ada di bawahnya. **Finishing ruangan** dan **Spesifikasi** ([Tulis spesifikasi dari model](topic:specification)) dibuka dari tempat yang sama.

## Lapisan: luas dan volume

Pilih **Lapisan: luas dan volume** di daftar Jadwal. Tabel ini memiliki satu baris untuk setiap lapisan dari setiap tipe dinding, lantai, atap, dan plafon yang digunakan: elemennya, tipenya dan LOD-nya, lapisannya (dihitung dari sisi luar dinding, atau dari atas lantai, atap, atau plafon), materialnya dan fungsinya, tebalnya, jumlah elemen, **luas bersih**, dan **volume**.

- Luas adalah luas bersih elemen dari tipe itu, diukur persis seperti pada Dinding menurut tipe, Lantai, dan Finishing, menurut metode pengukuran proyek. Atap diukur pada kemiringannya; tidak ada metode pengukuran yang memiliki aturan untuk atap.
- Volume adalah luas itu dikali tebal lapisan itu sendiri.
- Lantai, atap, atau plafon tanpa tipe menjadi satu baris: satu lapisan dengan tebalnya sendiri.
- Rongga udara didaftar dengan luasnya dan tidak dimasukkan dalam total volume. Membran memiliki luas tetapi tidak memiliki volume.

Klik sebuah baris untuk memilih elemennya. **Unduh CSV** menyimpan tabel.

## Cara mengukur luas

Setiap luas terdiri dari tiga angka yang saling menjumlahkan: kotor dikurangi pengurangan menjadi bersih. Aturannya ditulis di atas setiap tabel ini, dan hanya ada satu aturan: jadwal, kuantitas yang disimpan dalam file IFC, dan takeoff yang diserahkan ke TakeoffCraft semuanya memakai aturan yang sama.

- **Dinding**: kotor adalah satu muka dinding, panjangnya sepanjang garis sumbu dikali tingginya (muka sebenarnya untuk dinding dengan bagian atas atau bawah yang berbentuk). Setiap pintu, jendela, dan bukaan lainnya dikurangkan, lebar dikali tinggi, masing-masing sekali.
- **Lantai atau plafon**: kotor adalah luas di dalam garisnya. Setiap bukaan dan potongan di dalamnya dikurangkan sekali.
- **Finishing dinding**: setiap lapisan finishing dari tipe dinding menutupi satu muka dinding, diukur seperti dinding, dengan bukaan yang sama dikurangkan. Finishing adalah lapisan dari dinding: ia didaftar di bawah Finishing dan tidak ditambahkan ke luas dinding, sehingga dinding dengan pintu tidak pernah dihitung dua kali.

Itulah **default CadCraft**: setiap bukaan dikurangkan, berapa pun ukurannya; panjang dinding sepanjang garis sumbu; reveal tidak diukur. Itulah yang dipakai setiap proyek sampai Anda memilih metode lain.

## Memilih metode pengukuran

Di atas jadwal, **Measurement method** mendaftar metode yang disertakan BimCraft, dan **Load a method file** mengambil file milik kantor Anda sendiri. Pilihan disimpan dalam file IFC, sebagai satu langkah urung, dan tiga hal mengikutinya sekaligus: jadwal, kuantitas bersih yang disimpan dalam file, dan takeoff yang diserahkan ke TakeoffCraft. Aturan di atas setiap tabel kemudian dimulai dengan metodenya, sumbernya, tanggal sumber itu dibaca, dan kata-kata **Belum diperiksa oleh quantity surveyor**.

Metode adalah file kecil berisi fakta, bukan kode program. Untuk setiap kuantitas, metode menyatakan:

- **bukaan terkecil yang dikurangkan**: misalnya, bukaan 0.5 m² atau kurang tetap dihitung di luas dinding;
- **cara sambungan dinding diukur**: sepanjang garis sumbu; atau dengan dinding yang berakhir pada dinding lain diukur sampai muka dinding itu; atau dengan setiap ujung dinding yang bertemu dinding lain diukur sampai muka terdekat;
- **apakah reveal diukur** untuk sebuah finishing (kembalian finishing ke dalam bukaan), sebagai luas atau, jika dangkal, sebagai panjang. Kedalaman reveal diambil sebagai setengah tebal dinding;
- **apa yang dinyatakannya tentang pasangan bata**: bagaimana ia diukur, serta setiap cadangan sisa atau mortar yang dinyatakannya.

Metode yang disertakan BimCraft:

| Metode | Dinding: bukaan terkecil yang dikurangkan | Finishing dinding | Plafon | Pasangan bata |
|---|---|---|---|---|
| CadCraft default | setiap bukaan | setiap bukaan | setiap potongan | tanpa cadangan |
| RICS NRM 2 (United Kingdom), edisi ke-2 2021 | 0.5 m² atau kurang tetap dihitung | 1 m² atau kurang tetap dihitung | 1 m² atau kurang tetap dihitung | menurut luas; tidak ada persentase yang dinyatakan |
| AAQS Standard Method for Africa 2015 | 0.5 m² atau kurang tetap dihitung | 0.5 m² atau kurang tetap dihitung | 0.5 m² atau kurang tetap dihitung | menurut luas; diukur bersih, sisa 0% |
| IS 1200 (India), 1976, pasangan bata | 0.1 m² atau kurang tetap dihitung | default (lihat di bawah) | default | menurut volume |
| BIA Technical Note 10 (United States), 2009 | setiap bukaan | default | default | sisa 5% pada satuan, 15% pada mortar |

Baca batasan ini sebelum Anda mengandalkan sebuah metode:

- **Belum ada quantity surveyor yang memeriksa satu pun dari metode ini.** Masing-masing dibuat dengan membaca sumber yang disebutkan dan mencatat angkanya beserta klausul asalnya. Jika Anda seorang quantity surveyor dan dapat memeriksa salah satunya, pembuat aplikasi ingin mendengar dari Anda.
- Jika sebuah aturan tidak dapat dibaca dari sumbernya, metode menyatakannya **belum dikonfirmasi** untuk aturan itu, dan default CadCraft yang dipakai. Tidak ada metode yang disertakan BimCraft yang memiliki aturan terkonfirmasi untuk sambungan dinding, reveal, atau lantai, sehingga semuanya diukur dengan cara default di bawah setiap metode.
- IS 1200 mengurangkan bukaan pada plester dalam tiga pita. File metode belum dapat memuat pita, sehingga finishing dinding memakai default di bawah metode itu, dan aturannya menyatakannya.
- South African Standard System of Measuring Building Work **tidak** termasuk di antaranya: teksnya tidak dapat dibaca. Metode AAQS untuk Afrika menyatakan dibangun di atas edisi 1991 dari sistem itu, tetapi itu adalah dokumen yang berbeda.
- BIA Technical Note 10 adalah catatan estimasi industri, bukan metode pengukuran standar.
- Bukaan yang tepat berukuran terkecil mengikuti kata-kata metode itu sendiri ("not exceeding", "less than"). Ukuran dalam 2 bagian dalam 10 000 darinya dihitung sebagai tepat itu.
- Di bawah sebuah metode, luas bersih sisi dinding dan luas bersih lantai atau plafon dalam file mengikuti metode, dan set kuantitas menamainya. Luas kotor dan volume dalam file tetap sebagaimana digambar.

**Catatan metode ini**, di bawah pemilih, menyatakan apa yang dibiarkan terbuka oleh setiap sumber. **Buka sumber** membuka dokumennya.

### Metode milik kantor Anda

File metode adalah JSON dalam format `cadcraft-measurement-method`. Setiap nilai di dalamnya menyebutkan klausul asalnya; nilai tanpa klausul ditolak. File diperiksa saat Anda memuatnya, field yang salah disebutkan namanya, dan tidak ada yang dipakai dari file yang tidak lolos. Setelah dipilih, file disimpan di dalam proyek, sehingga proyek terbuka dengan sama di komputer lain. Id-nya adalah nama biasa milik Anda sendiri (boleh bukan id metode yang disertakan aplikasi).

## Bata, blok, dan mortar

**Wall types: takeoff data** menghitung satuan dan mortar dari setiap tipe dinding yang satuannya memiliki panjang dan tinggi (lihat [Beri tipe datanya untuk takeoff](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ini adalah rumusnya, persis seperti dihitung:

- **Satuan per luas satu lapis** = 1 / ((panjang satuan + sambungan) × (tinggi satuan + sambungan)). Bata 215 × 65 mm dengan sambungan 10 mm: 1 / (225 × 75 mm) = 59.26 per m².
- **Lebar satuan melintang satu lapis** = (tebal lapis + sambungan) / (lebar satuan + sambungan), dibulatkan ke bilangan bulat, minimal 1. Lapis 102.5 mm dari bata 102.5 mm adalah 1; dinding 215 mm dari bata yang sama adalah 2.
- **Satuan** = satuan per luas × lebar satuan melintang × luas bersih muka dinding, dijumlahkan atas lapis pasangan dari tipe itu.
- **Satuan untuk dipesan** = satuan × (1 + sisa % / 100), dibulatkan ke atas menjadi satuan utuh. Sisanya adalah yang dimasukkan pada tipe itu; jika tidak ada, sisa dari metode, jika metode menyatakannya; jika tidak, 0%.
- **Mortar** = luas bersih × tebal lapis, dikurangi volume satuan (satuan × panjang × tinggi × lebar), lalu ditambah persentase tambahan yang dimasukkan pada tipe untuk frog atau perforasi, lalu ditambah cadangan dari metode jika ia menyatakannya. Ini memerlukan lebar satuan.

Yang diasumsikan: setiap lapis pasangan dari tipe dibangun dari satu satuan tipe itu; lapis yang lebih tebal dari satu lebar satuan dihitung sebagai sejumlah lebar satuan itu, masing-masing seperti lapis yang dipasang memanjang, sehingga potongan satuan, penutup, dan bentuk khusus tidak dihitung terpisah; jika tidak ada lapis yang ditandai sebagai dibangun dari satuan, lapis inti dianggap sebagai lapis, dan catatan di atas tabel menyatakannya. **Amount** adalah laju dikali per apa laju itu, yang kini juga dapat berupa satuan untuk dipesan, 1000 satuan untuk dipesan, atau m³ mortar.

Tanda adalah tag IFC elemen: ubah satu di **Properti** (Tag) dan jadwal mengikutinya. Untuk setiap model IFC, digambar atau tidak, [Jumlahkan kuantitas, daftar elemen, dan jadwal ruang](topic:quantity-totals) menjumlahkan properti apa pun.

## Dimensi

Denah menampilkan panjang setiap dinding yang digambar sepanjang muka luarnya (dinding dalam: sepanjang satu muka), dan untuk dinding dengan pintu atau jendela, rantai dari sudut ke setiap bukaan. {{ui:Dimensions}} di bilah model menyembunyikannya dan menampilkannya kembali.

## Simpan denah sebagai PDF

1. Tampilkan level yang Anda inginkan dan atur satuan di panel **Level**.
2. Klik {{ui:Print}} di bilah model.
3. BimCraft menyimpan "<file> — <level>.pdf": denah dalam hitam putih pada skala standar terbesar yang muat di halaman (1/4" = 1'-0", 1/8" = 1'-0" … pada Letter dalam kaki dan inci; 1:50, 1:100 … pada A4 dalam milimeter), dengan dinding yang diisi, pintu, jendela, nama dan luas ruang, dimensi, serta strip judul berisi level, file, tinggi potongan, tanggal, dan skala.

PDF digambar sebagai garis dan teks, sehingga tetap tajam pada zoom berapa pun dan teksnya dapat dicari.

## Hal yang perlu diketahui

- Jadwal mendaftar apa yang dibuat oleh alat gambar. Pintu dan jendela dari program lain tampil di Total kuantitas sebagai gantinya.
- Untuk menentukan harga pekerjaan, serahkan kuantitasnya ke TakeoffCraft: lihat [Kuantitas ke TakeoffCraft](topic:takeoff). Unduhan CSV tetap tersedia untuk spreadsheet.
