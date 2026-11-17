---
title: Potong model IFC dengan bidang potong
summary: Iris model 3D dari atas, depan, atau samping, atau hanya simpan apa yang ada di dalam kotak potongan atau volume beberapa kotak dengan sisi miring, untuk melihat ke dalam; pindahkan potongan dengan menyeret atau mengetik, balikkan, dan pilih apa yang ditampilkan potongan.
keywords: potongan, bidang potong, kotak potong, grip, seret, margin, kotak pilihan, kotak pemotong, potong, pemotongan, iris, potongan denah, denah lantai, tampak, dalam, interior, balik, offset, volume potongan, potongan bertangga, berbentuk L, kemiringan, potongan miring, bidang miring, bidang tambahan
from: 6315e71a
---

## Yang akan Anda lakukan

Potong model IFC dengan satu bidang untuk melihat ke dalamnya: dari atas untuk denah, atau dari depan atau samping untuk potongan melintasi bangunan.

## Langkah

1. Buka model IFC. Lihat [Buka model IFC dan lihat-lihat dalam 3D](topic:open-ifc-model).
2. Klik {{ui:Potongan}} di bilah alat, atau tekan {{key:X}}. Model dipotong setengah tinggi, dan sebuah bilah muncul di bawah bilah alat.
3. Pilih dari mana memotong: {{ui:Atas}}, {{ui:Depan}}, atau {{ui:Samping}}. Depan dan Samping juga memutar tampilan untuk melihat potongan.
4. Pindahkan potongan: seret penggeser **Offset**, atau ketik jarak dalam meter di kotak lalu tekan {{key:Enter}}. Anda juga dapat mengetik milimeter, misalnya `1200 mm`.
5. Klik {{ui:Balik}} untuk menyimpan sisi lain dari potongan.
6. Klik elemen pada potongan untuk melihat propertinya.
7. Klik {{ui:Mati}}, klik {{ui:Potongan}} lagi, atau tekan {{key:X}} untuk menghapus potongan.

## Kotak potongan

Klik {{ui:Kotak}} di bilah yang sama untuk hanya menyimpan apa yang ada di dalam kotak. Masing-masing {{ui:X}}, {{ui:Y}}, dan {{ui:Z}} memiliki dua penggeser: di mana kotak dimulai dan di mana berakhir, dalam meter dari tepi model. Nilainya ditampilkan di sebelahnya.

- {{ui:Kotak di sekitar pilihan}} memasang kotak di sekitar elemen yang Anda pilih dan memperbesar ke sana. Ia menyisakan 300 mm di setiap sisi; ubah itu di {{ui:Pengaturan}} › {{ui:BimCraft}} › {{ui:Ruang di sekitar pilihan}}.
- Dengan elemen terpilih, {{ui:Tampilkan}} › {{ui:Kotak potong di sekitar pilihan}} atau {{key:Shift+X}} melakukan hal yang sama dalam satu langkah, bahkan ketika tidak ada potongan yang aktif.
- **Grip** pada kotak memindahkannya dengan penunjuk: seret persegi di tengah sebuah sisi untuk memindahkan sisi itu, di tengah tepi untuk memindahkan dua sisi yang bertemu di sana, atau di sudut untuk memindahkan tiga sisi. Penggeser ikut bergerak. Di {{ui:Atas}}, sudut memindahkan kotak dalam denah; di {{ui:Depan}} atau {{ui:Samping}}, dalam tampak.
- {{ui:Seluruh model}} membuka kotak kembali ke seluruh model.
- {{ui:Atas}}, {{ui:Depan}}, atau {{ui:Samping}} kembali ke satu bidang.

## Volume dari beberapa kotak, sisi miring, dan bidang tambahan

Kotak tidak selalu bentuk yang Anda butuhkan: potongan bertangga, sayap berbentuk L, atau potongan sepanjang dinding yang tidak tegak lurus terhadap grid.

1. Di {{ui:Kotak}}, klik {{ui:Tambahkan kotak}}. Potongan sekarang menyimpan apa yang ada di dalam **salah satu** kotak, sehingga dua kotak membentuk volume bertangga atau berbentuk L. Daftar di sebelahnya menunjukkan kotak mana yang diubah penggeser ({{ui:Kotak 1}}, {{ui:Kotak 2}}…); {{ui:Buang kotak ini}} menghapus kotak yang dipilih. Satu volume memuat hingga 8 kotak.
2. Buka {{ui:Kemiringan dan bidang}} untuk membentuk kotak yang dipilih:
   - Pilih {{ui:Muka}} dan ketik seberapa jauh ia miring ke tiap arah, dalam derajat (hingga 80). Muka berputar di sekitar tengahnya; muka lain tetap di tempat penggeser meletakkannya. {{ui:Siku}} mengembalikannya.
   - {{ui:Tambahkan bidang}} memotong kotak dengan satu bidang lagi. {{ui:Muka}} adalah arah sisi yang terpotong menghadap, dalam derajat dari X ke Y; {{ui:Kemiringan}} adalah seberapa jauh itu condong ke atas (0 untuk bidang tegak, 90 untuk bidang datar); {{ui:Offset}} adalah jarak bidang dari tengah kotak, dalam meter. × menghapusnya. Satu kotak memuat hingga 6 bidang tambahan.
3. Jika volume memotong benda padat, bidang potong diisi seperti sebelumnya, termasuk di tempat dua kotak bertemu dalam satu tangga.

:::tip
Jika garis luarnya hilang dan tidak ada yang tersisa, kemiringan atau bidang tidak menyisakan apa pun di dalam kotak itu; bilah akan menyebutkannya. Miringkan sebuah muka ke belakang atau ubah offset bidang.
:::

## Bangunan yang diputar di tapaknya

Banyak model menempatkan bangunan dengan sudut terhadap sumbu berkas (utara sejati, koordinat bersama). Ketika dindingnya membentuk sudut, potongan baru dimulai lurus terhadap bangunan: {{ui:Depan}}, {{ui:Samping}}, dan kotak berjalan sepanjang dindingnya sendiri, dan {{ui:Lurus terhadap bangunan}} di bilah potongan aktif. Klik untuk sumbu model, dan klik lagi untuk kembali (baris status menyebut berapa besar bangunan diputar). Dengan **Pengaturan › BimCraft › Bangunan yang diputar di tapaknya › Sesuai penempatan di tapak**, potongan dan tampilan dimulai dari sumbu model. Lihat [Pengaturan](topic:settings).

## Yang harus Anda lihat

- **Atas** menyimpan apa yang ada di bawah potongan, sehingga Anda melihat ke bawah ke dalam ruangan. Offset diukur ke atas dari dasar model.
- **Depan** menyimpan apa yang ada di belakang potongan, dilihat dari depan; **Samping** menyimpan apa yang ada di seberangnya, dilihat dari samping. Offset diukur dari depan atau samping model.
- Garis berwarna tipis menunjukkan letak bidang.
- Jika bidang memotong dinding, pelat, atau benda padat lain, muka potongannya diisi dengan warna gelap, seperti potongan yang digambar. {{ui:Isi}} di bilah ini mematikan dan menyalakan pengisian.
- Kubus tampilan di pojok kanan bawah memutar model agar Anda dapat melihat potongan dari sisi mana pun.
- Klik memilih apa yang dapat Anda lihat: apa pun yang sudah terpotong tidak dapat dipilih.

## Kesalahan umum

- **Tidak ada yang berubah.** Potongan mungkin berada di atas atap atau di luar model. Seret penggeser, atau ketik offset yang lebih kecil.
- **Offset melompat kembali.** Jarak yang melebihi model dipindahkan ke ujungnya, dan baris status menyebutkannya.
- **Isu hanya menampilkan sebagian volume saya.** Isu (BCF) menyimpan satu kotak dengan muka dan bidang miringnya: kotak pertama dari sebuah volume. Baris status menyebutkannya saat Anda membuat isu.
- **Potongannya berongga.** {{ui:Isi}} di bilah mati: klik untuk mengisi muka potongan dinding, pelat, dan benda padat lain.
- **Potongan yang diisi tampak berbintik atau kehilangan sebagian.** Pengisian memerlukan benda padat yang tertutup; elemen yang bentuknya dalam file tidak tertutup (selembar tipis, dedaunan pohon) dibiarkan tidak terisi daripada dicat menutupi. Elemen yang terdiri dari bagian berwarna berbeda (bingkai dan kacanya) diisi ketika bagian-bagiannya saling menempel.
- **Di mana bilah potongannya?** Ia berada di bagian atas tampilan 3D yang dipotongnya: di bagian 3D dalam {{ui:Pisahkan}}, dan di bawah bilah gambar dalam {{ui:Denah}} saja. Di tampilan yang pendek, ia ikut tergulir.

## Berikutnya

- [Tampilkan dan sembunyikan lantai, ruang, dan tepi](topic:storeys-and-spaces)
- [Lihat gambar DWG atau DXF dalam 3D](topic:dwg-in-3d) — gambar dalam 3D memiliki bidang potong yang sama
