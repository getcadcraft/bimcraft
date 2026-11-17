---
title: Merangka dinding, lantai, dan atap
summary: Hasilkan stud, plat, header, balok lantai, kaso, atau kuda-kuda dari model dan simpan bersamanya; dibuat ulang ketika dinding, bukaan, lantai, atau atap berubah, dan jadwal Kayu adalah daftar potongnya.
keywords: TJI, I-joist, tabel bentang balok, muat tabel, rangka, stud, plat, plat atas, header, stud raja, stud jack, trimmer, cripple, sill, blocking, sudut, sudut California, tee, balok lantai, rim joist, kaso, kaso pinggul, kaso lembah, kaso jack, papan rabung, balok langit-langit, collar tie, kuda-kuda, kayu, daftar potong, board feet, 2x4, 2x6, jarak, on center
from: 76d0ffb5
---

## Yang akan Anda lakukan

Rangka bangunan dari apa yang Anda gambar. BimCraft menata stud, plat, dan header di dinding, balok di lantai, serta kaso (atau kuda-kuda) di atap, menentukan ukurannya dari tabel default yang berlabel, menyimpannya bersama model, dan membuatnya ulang setiap kali yang dirangkanya berubah. Jadwal **Kayu** adalah daftar potongnya.

## Rangka

1. Di sebuah lantai, buka {{ui:Build}} dan pilih {{ui:Rangka}}.
2. Pilih **jarak** (16" atau 24" dari pusat ke pusat; 400 atau 600 mm), **sudut** (tiga-stud atau California), **Kaso** atau **Kuda-kuda** untuk atap, dan apakah dinding mendapat satu baris **blocking** di tengah tingginya. Untuk lantai pilih **Kayu gergajian** atau **TJI (awal)**, dan atur arah balok ke otomatis, sumbu X denah, atau sumbu Y denah.
3. Klik **Rangka setiap dinding**, atau klik satu dinding, sebuah lantai, atau sebuah atap (di lantai tempat atap berdiri) untuk merangka hanya bagian itu.

Matikan **Tampilkan rangka** untuk menyembunyikan semua potongan rangka, seperti layer; **Tembus pandang** menyembunyikan dinding, lantai, dan atap yang sudah dirangka sehingga Anda dapat melihat rangkanya saja.

## Yang Anda dapatkan

- **Dinding**: plat bawah (dipotong di pintu), plat atas ganda, stud pada tata letak dari awal dinding, stud raja dan stud jack serta header di setiap pintu dan jendela, cripple di atas header dan di bawah jendela, sill kasar di bawah jendela, sudut di tempat dinding bertemu (dinding yang lurus mengambil stud sudut), dua stud pendukung di tempat dinding lain masuk secara T, dan blocking di antara stud.
- **Lantai**: balok melintang di sisi pendek lantai secara default, atau sepanjang sumbu denah yang Anda pilih; rim joist mengelilingi tepi, dan trimmer serta header ganda di sekeliling lubang tangga, dengan balok yang melintasinya dipotong pendek (tail joist). Mode TJI memilih seri dan kedalaman terkecil yang mencapai bentang bersih terukur pada jarak yang dipilih.
- **Atap**: kaso biasa tegak lurus ke setiap tritisan, kaso jack tempat pinggul dan lembah memotongnya, kaso pinggul dan lembah, papan rabung, balok langit-langit di atas plat, dan collar tie, atau kuda-kuda sederhana pada jarak tertentu, satu potong per kuda-kuda.

## Ubah

Pilih potongan rangka mana pun di tampilan 3D atau pohon model. **Properti** menampilkan rangkanya: ubah jarak, jenis dan arah balok lantai, sudut, blocking, atau rangka atap. Memindahkan dinding, pintu, dan jendela, atau mengubah lantai atau atap, membuat rangka dibuat ulang dengan sendirinya.

Untuk mempertahankan potongan yang Anda pasang dengan sengaja saat rangka dibuat ulang, pilih potongan itu dan pilih **Pertahankan bagian ini saat rangka dibuat ulang**. Potongan yang dipertahankan tetap di tempatnya; ketika rangka di sekitarnya berubah, ia ditandai agar Anda dapat memeriksanya.

## Lantai TJI dari tabel yang Anda muat

BimCraft tidak menyertakan tabel bentang pabrikan balok (itu milik pabrikan, dan berubah pada setiap edisi). Pilih rangka sebuah lantai, atur **Balok lantai** ke **TJI (awal)**, dan pilih **Muat tabel…** di **Properti**: sebuah file format `cadcraft-tji-table`, JSON atau CSV, yang Anda buat dari tabel bentang pabrikan yang berlaku. File itu menyebutkan pabrikan, produk, dan edisinya, serta dari mana angkanya berasal, dan mencantumkan untuk setiap kasus beban (beban hidup, beban mati, batas lendutan, panjang tumpuan) bentang bersih terbesar setiap seri dan kedalaman pada setiap jarak.

- BimCraft mengambil **bentang bersih** lantai, memilih kedalaman yang paling dangkal, dan dalam kedalaman itu seri yang bentang tercantumnya mencapai bentang tersebut untuk jarak dan kasus beban yang Anda pilih, lalu merangka lantai dengannya. Jika bentang atau jarak berada di luar tabel, ia memberi tahu dan tidak mengubah apa pun.
- Beban, batas lendutan, panjang tumpuan, tabel, dan kalimat "Panduan tata letak awal; pemilihan final memerlukan tabel pabrikan dan beban proyek" dicetak pada jadwal Kayu, ditulis ke dalam model bersama rangka, dan dicantumkan di panel **Masalah** sebagai catatan. Tabel yang ditandai sebagai contoh menyatakannya dalam peringatan.
- Dengan add-on **Peraturan bangunan** aktif, aturan balok lantainya juga membaca tabel yang dimuat; tanpa tabel, balok TJI dikeluarkan dari pemeriksaan itu, seperti sebelumnya.
- Tabel tetap ada di peramban ini sampai Anda menghapusnya atau memuat yang lain. Filenya: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inci, kaki, psf; atau `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`), dan `rows` (`series`, `depth`, `spans`: untuk setiap id kasus, jarak dan bentang bersih terbesar, seperti `"16": "15-6"`). Dalam CSV, fakta yang sama berupa baris `# key = value`, lalu `series,depth,case,spacing,span`.
- Tanpa tabel yang dimuat, tata letak TJI ditolak dan tidak ada yang berubah: **Muat tabel TJI: tabel pabrikan adalah milik mereka dan tidak disertakan.** Model yang dirangka dengan tabel TJI bawaan lama (sebelum perubahan ini) mempertahankan setiap balok yang dimilikinya; Properti dan Masalah menyatakan bahwa tabel diperlukan, dan lantai dapat dirangka ulang setelah Anda memuat satu tabel. Balok kayu padat tetap bekerja seperti sebelumnya.

Ini hanya panduan tata letak. Pemilihan balok final memerlukan tabel pabrikan, beban proyek, dan insinyur.

## Daftar potong

Di panel Jadwal, pilih **Kayu**: setiap potongan rangka dikelompokkan menurut ukuran dan panjang stok yang akan Anda beli (kelipatan utuh 2 kaki mulai dari 8 kaki; langkah 600 mm dalam milimeter), dengan jumlah potongan dan board feet. **CSV** mengunduhnya.

:::warning
Ukuran header, balok, kaso, dan balok langit-langit berasal dari tabel default berlabel untuk rumah satu atau dua lantai yang umum, bukan rekayasa. **Properti** menyatakan kapan sebuah bentang atau bukaan melampaui tabelnya. Perancang atau insinyur memeriksa bentang, beban, dan sambungan.

Tata letak TJI hanya memakai tabel yang Anda muat, yang Anda buat dari tabel bentang pabrikan yang berlaku; BimCraft tidak menyertakan satu pun. Saran ini tidak memeriksa tumpuan, beban titik, kantilever, lubang, header tangga, atau sambungan, dan bentuk I dalam model bersifat skematis.
:::

## Yang disimpan

Setiap dinding, lantai, atau atap yang dirangka adalah rakitan elemen IFC ("Framing") yang terdiri dari batang IFC (stud, plat, kaso, collar tie, blocking, kuda-kuda) dan balok (header, balok, rim, papan rabung), masing-masing dengan ukuran, panjang, dan board feet-nya.
