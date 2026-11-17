---
title: Jadual, dimensi dan PDF pelan
summary: Jadual pintu, tingkap, dinding dan bilik yang berubah semasa anda melukis, dimensi pada pelan, dan pelan aras disimpan sebagai PDF pada skala piawai.
keywords: jadual, jadual pintu, jadual tingkap, jadual dinding, jadual bilik, kuantiti, pengukuran kuantiti, luas, csv, hamparan, dimensi, dimensi, cetak, pdf, plot, skala, 1/4", 1:50, helaian
from: d97cd16e
---

## Apa yang anda akan lakukan

Lihat apa yang dijumlahkan oleh bangunan yang anda lukis, semasa anda melukisnya: berapa banyak pintu dan tingkap bagi setiap saiz, berapa banyak dinding bagi setiap jenis, berapa besar setiap bilik. Letakkan dimensi pada pelan dan simpan sebagai PDF untuk dicetak atau dihantar.

## Jadual

Dengan {{ui:Lukis}} dihidupkan, **Jadual** dalam panel kiri menunjukkan satu jadual pada satu masa:

- **Pintu** dan **Tingkap**: setiap satu mengikut tandanya (D1, D2 … dan W1 …, diberikan semasa anda meletakkannya), jenisnya, lebar, tinggi (dan ambang), aras dan dinding tempat ia berada.
- **Dinding mengikut jenis**: bagi setiap jenis dinding, bilangan dinding, ketebalannya, jumlah panjangnya dan luas sisinya sebagai **Luas kasar**, **Tolakan** dan **Luas bersih**, dengan jumlah.
- **Bilik**: nombor, nama, aras, luas dan perimeter, dengan jumlah luas.
- **Lantai**: setiap lantai dengan arasnya, jenisnya dan ketebalannya, dan luas kasar, tolakan dan luas bersihnya.
- **Kemasan**: setiap lapisan kemasan bagi jenis dinding (mengikut bahan dan sisi dinding) dan siling, dengan bilangan muka dan kasar, tolakan dan bersih.
- **Jenis dinding: data pengukuran kuantiti**: apa yang dimasukkan sekali pada setiap jenis dinding (unit, mortar, kadar), dengan bilangan dinding, panjang dan luas bersihnya, dan kadar didarab dengan kuantiti yang diukur. Lihat [Himpunan dinding](topic:wall-assemblies).

- **Kemasan mengikut bilik**, **Kemasan mengikut dinding**, **Kemasan mengikut zon** dan **Kuantiti kemasan**: apa yang meliputi setiap bilik, dengan luas, bilangan jubin termasuk potongan dan isipadu substrat. Lihat [Kemasan bilik dan jadual kemasan](topic:room-finishes).
- Susunan **anda sendiri**: jadual yang anda kumpulkan, jumlahkan dan simpan dengan nama. Lihat [Susun atur, simpan dan eksport jadual](topic:schedule-layouts).

Jadual berubah dengan setiap suntingan. Klik baris, atau satu angka, untuk memilih elemen asalnya. {{ui:Muat turun CSV}} menyimpan jadual untuk dibuka dalam hamparan; **Muat turun Excel** dan **Salin untuk Google Sheets** berada di bawahnya. **Kemasan bilik** dan **Spesifikasi** ([Tulis spesifikasi daripada model](topic:specification)) dibuka dari tempat yang sama.

## Luas dan isipadu setiap lapisan

Pilih **Lapisan: luas dan isipadu** dalam senarai Jadual. Ia mempunyai satu baris untuk setiap lapisan bagi setiap jenis dinding, lantai, bumbung dan siling yang digunakan: elemen, jenisnya dan LOD-nya, lapisan (dikira dari sisi luar dinding, atau dari atas lantai, bumbung atau siling), bahan dan fungsinya, ketebalannya, bilangan elemen, **luas bersih** dan **isipadu**.

- Luas ialah luas bersih elemen bagi jenis itu, diukur tepat seperti dalam Dinding mengikut jenis, Lantai dan Kemasan, mengikut kaedah ukuran projek. Bumbung diukur pada cerun; tiada kaedah ukuran mempunyai peraturan untuk bumbung.
- Isipadu ialah luas itu didarab dengan ketebalan lapisan itu sendiri.
- Lantai, bumbung atau siling tanpa jenis ialah satu baris: satu lapisan dengan ketebalannya sendiri.
- Rongga udara disenaraikan dengan luasnya dan dibuang daripada jumlah isipadu. Membran mempunyai luas dan tiada isipadu.

Klik baris untuk memilih elemennya. **Muat turun CSV** menyimpan jadual.

## Bagaimana luas diukur

Setiap luas ialah tiga nombor yang dijumlahkan: kasar tolak tolakan ialah bersih. Peraturannya ditulis di atas setiap jadual ini, dan ia satu peraturan: jadual, kuantiti yang disimpan dalam fail IFC dan pengukuran kuantiti yang dihantar ke TakeoffCraft semuanya menggunakannya.

- **Dinding**: kasar ialah satu muka dinding, panjang garis tengahnya didarab dengan tingginya (muka sebenar bagi dinding dengan bahagian atas atau bawah berbentuk). Setiap pintu, tingkap dan bukaan lain ditolak, lebar didarab tinggi, setiap bukaan sekali.
- **Lantai atau siling**: kasar ialah luas di dalam garis luarnya. Setiap bukaan dan potongan di dalamnya ditolak sekali.
- **Kemasan dinding**: setiap lapisan kemasan bagi jenis dinding meliputi satu muka dinding, diukur seperti dinding, dengan bukaan yang sama ditolak. Kemasan ialah lapisan dinding: ia disenaraikan di bawah Kemasan dan tidak ditambah pada luas dinding, jadi dinding dengan pintu tidak pernah dikira dua kali.

Itulah **lalai CadCraft**: setiap bukaan ditolak, tanpa mengira saiznya; panjang dinding sepanjang garis tengah; rebat tidak diukur. Ia digunakan oleh setiap projek sehingga anda memilih kaedah lain.

## Pilih kaedah ukuran

Di atas jadual, **Kaedah ukuran** menyenaraikan kaedah yang disertakan dengan BimCraft, dan **Muat masuk fail kaedah** mengambil fail pejabat anda sendiri. Pilihan itu disimpan dalam fail IFC, sebagai satu langkah buat asal, dan tiga perkara mengikutinya serta-merta: jadual, kuantiti bersih yang disimpan dalam fail, dan pengukuran kuantiti yang dihantar ke TakeoffCraft. Peraturan di atas setiap jadual kemudian bermula dengan kaedah itu, sumbernya, tarikh sumber dibaca dan perkataan **Belum disemak oleh juruukur kuantiti**.

Kaedah ialah fail kecil fakta, bukan kod program. Bagi setiap kuantiti ia menyatakan:

- **bukaan terkecil yang ditolak**: contohnya, bukaan 0.5 m² atau kurang kekal dalam luas dinding;
- **cara simpang dinding diukur**: sepanjang garis tengah; atau dengan dinding yang berakhir pada dinding lain diukur ke muka dinding itu; atau dengan setiap hujung dinding yang bertemu dinding lain diukur ke muka terdekat;
- **sama ada rebat diukur** bagi kemasan (pemulangan kemasan ke dalam bukaan), sebagai luas atau, apabila cetek, sebagai panjang. Kedalaman rebat diambil sebagai separuh ketebalan dinding;
- **apa yang dinyatakannya tentang kerja bata dan batu**: bagaimana ia diukur, dan sebarang peruntukan sisa atau mortar yang dinyatakannya.

Kaedah yang disertakan dengan BimCraft:

| Kaedah | Dinding: bukaan terkecil ditolak | Kemasan dinding | Siling | Kerja bata |
|---|---|---|---|---|
| CadCraft default | setiap bukaan | setiap bukaan | setiap potongan | tiada peruntukan |
| RICS NRM 2 (United Kingdom), edisi ke-2 2021 | 0.5 m² atau kurang kekal | 1 m² atau kurang kekal | 1 m² atau kurang kekal | mengikut luas; tiada peratusan dinyatakan |
| AAQS Standard Method for Africa 2015 | 0.5 m² atau kurang kekal | 0.5 m² atau kurang kekal | 0.5 m² atau kurang kekal | mengikut luas; diukur bersih, sisa 0% |
| IS 1200 (India), 1976, kerja bata | 0.1 m² atau kurang kekal | lalai (lihat di bawah) | lalai | mengikut isipadu |
| BIA Technical Note 10 (United States), 2009 | setiap bukaan | lalai | lalai | sisa 5% bagi unit, 15% bagi mortar |

Baca had ini sebelum anda bergantung pada kaedah:

- **Tiada juruukur kuantiti telah menyemak mana-mana daripadanya.** Setiap satu dibuat dengan membaca sumber yang dinamakan dan merekod nombornya bersama klausa asalnya. Jika anda seorang juruukur kuantiti dan boleh menyemak satu, pencipta aplikasi ingin mendengar daripada anda.
- Apabila peraturan tidak dapat dibaca daripada sumber, kaedah itu menyatakan **belum disahkan** baginya dan lalai CadCraft digunakan. Tiada kaedah yang disertakan dengan BimCraft mempunyai peraturan yang disahkan untuk simpang dinding, rebat atau lantai, jadi ia diukur mengikut cara lalai di bawah semuanya.
- IS 1200 menolak bukaan dalam plaster dalam tiga jalur. Fail kaedah belum boleh memuatkan jalur, jadi kemasan dinding menggunakan lalai di bawah kaedah itu, dan peraturan menyatakannya.
- Sistem Standard Afrika Selatan untuk Mengukur Kerja Bangunan **bukan** antara kaedah ini: teksnya tidak dapat dibaca. Kaedah AAQS untuk Afrika menyatakan ia dibina atas edisi 1991 sistem itu, tetapi ia dokumen yang berbeza.
- BIA Technical Note 10 ialah nota anggaran industri, bukan kaedah pengukuran piawai.
- Bukaan yang tepat sama dengan saiz terkecil mengikut kata-kata kaedah itu sendiri ("tidak melebihi", "kurang daripada"). Saiz dalam 2 bahagian dalam 10 000 daripadanya dikira sebagai tepat itu.
- Di bawah kaedah, luas sisi bersih fail bagi dinding dan luas bersih lantai atau siling mengikut kaedah itu, dan set kuantiti menamakannya. Luas kasar dan isipadu dalam fail kekal seperti yang dilukis.

**Nota tentang kaedah ini**, di bawah pemilih, menyatakan apa yang setiap sumber biarkan terbuka. **Buka sumber** membawa anda ke dokumen.

### Kaedah pejabat anda sendiri

Fail kaedah ialah JSON dalam format `cadcraft-measurement-method`. Setiap nilai di dalamnya menamakan klausa asalnya; nilai tanpa klausa ditolak. Fail disemak apabila anda memuat masuknya, medan yang salah dinamakan, dan tiada apa yang digunakan daripada fail yang tidak lulus. Setelah dipilih, fail itu disimpan dalam projek, supaya projek dibuka dengan sama pada komputer lain. ID-nya ialah nama biasa milik anda (ia mungkin bukan ID kaedah yang disertakan dengan aplikasi).

## Bata, blok dan mortar

**Jenis dinding: data pengukuran kuantiti** mengira unit dan mortar bagi setiap jenis dinding yang unitnya mempunyai panjang dan tinggi (lihat [Beri jenis data pengukuran kuantiti](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ini ialah formula, tepat seperti yang dikira:

- **Unit setiap luas satu lapisan** = 1 / ((panjang unit + sambungan) × (tinggi unit + sambungan)). Bata 215 × 65 mm dengan sambungan 10 mm: 1 / (225 × 75 mm) = 59.26 setiap m².
- **Lebar unit merentas satu lapisan** = (ketebalan lapisan + sambungan) / (lebar unit + sambungan), dibundarkan kepada nombor bulat, sekurang-kurangnya 1. Lapisan 102.5 mm bagi bata 102.5 mm ialah 1; dinding 215 mm bagi bata yang sama ialah 2.
- **Unit** = unit setiap luas × lebar unit merentas × luas bersih muka dinding, dijumlahkan ke atas lapisan kerja bata jenis itu.
- **Unit untuk dipesan** = unit × (1 + % sisa / 100), dibundarkan ke atas kepada unit penuh. Sisa ialah yang dimasukkan pada jenis itu; jika tiada, sisa kaedah itu, jika ia menyatakannya; jika tidak, 0%.
- **Mortar** = luas bersih × ketebalan lapisan, tolak isipadu unit (unit × panjang × tinggi × lebar), kemudian tambah peratusan tambahan yang dimasukkan pada jenis itu untuk frog atau perforasi, kemudian tambah peruntukan kaedah jika ia menyatakannya. Ia memerlukan lebar unit.

Apa yang diandaikan: setiap lapisan kerja bata bagi jenis dibina daripada satu unit jenis itu; lapisan yang lebih tebal daripada satu lebar unit dikira sebagai bilangan lebar unit itu, masing-masing seperti lapisan yang diletakkan memanjang, jadi unit potong, penutup dan bentuk khas tidak dikira berasingan; jika tiada lapisan ditanda sebagai dibina daripada unit, lapisan teras diambil sebagai lapisan, dan nota di atas jadual menyatakannya. **Jumlah** ialah kadar didarab dengan apa kadar itu bagi, yang kini juga boleh menjadi unit untuk dipesan, 1000 unit untuk dipesan atau m³ mortar.

Penanda ialah tag IFC elemen: tukar satu dalam **Sifat** (Tag) dan jadual mengikutinya. Bagi setiap model IFC, sama ada dilukis atau tidak, [Tambah kuantiti, senaraikan elemen dan jadualkan ruang](topic:quantity-totals) menjumlahkan mana-mana sifat.

## Dimensi

Pelan menunjukkan panjang setiap dinding yang dilukis sepanjang muka luarnya (dinding dalaman: sepanjang satu muka) dan, untuk dinding dengan pintu atau tingkap, rantai dari sudut ke setiap bukaan. {{ui:Dimensi}} dalam bar model menyembunyikannya dan menunjukkannya semula.

## Simpan pelan sebagai PDF

1. Tunjukkan aras yang anda mahu dan tetapkan unit dalam panel **Aras**.
2. Klik {{ui:Cetak}} dalam bar model.
3. BimCraft menyimpan "<file> — <level>.pdf": pelan dalam hitam dan putih pada skala piawai terbesar yang muat pada halaman (1/4" = 1'-0", 1/8" = 1'-0" … pada Letter dalam kaki dan inci; 1:50, 1:100 … pada A4 dalam milimeter), dengan dinding diisi, pintu, tingkap, nama dan luas bilik, dimensi, dan jalur tajuk dengan aras, fail, ketinggian potongan, tarikh dan skala.

PDF dilukis sebagai garisan dan teks, jadi ia kekal tajam pada sebarang zum dan teksnya boleh dicari.

## Perkara yang perlu diketahui

- Jadual menyenaraikan apa yang dihasilkan oleh alat lukisan. Pintu dan tingkap daripada program lain ditunjukkan dalam Jumlah kuantiti sebaliknya.
- Untuk menentukan harga kerja, hantar kuantiti kepada TakeoffCraft: lihat [Kuantiti kepada TakeoffCraft](topic:takeoff). Muat turun CSV kekal untuk hamparan.
