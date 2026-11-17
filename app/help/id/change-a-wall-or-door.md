---
title: Ubah dinding, pintu, atau jendela
summary: Klik dinding, pintu, atau jendela yang sudah digambar dan ubah tipe, ukuran, tinggi, atau tempatnya di Properti, atau seret di denah; setiap perubahan adalah satu langkah urungkan.
keywords: jadikan siku, siku, 90, sudut siku-siku, miring, sudut, ortho, ukuran ruang, sisi dalam, sisi luar, ukur dari, jarak pindah, jarak yang diketik, melengkung, busur, tinggi busur, radius, garis lokasi, justifikasi, ubah, edit, properti, tipe dinding, ketebalan, panjang, tinggi, offset dasar, atas, level, balik, luar, ukuran pintu, ukuran jendela, ambang, jarak, pindahkan, grip, seret, ubah tipe, beberapa
from: 63052d5d
---

## Yang akan Anda lakukan

Ubah yang sudah Anda gambar: pilih dinding, pintu, atau jendela, lalu ketik angka baru di **Properti** atau seret di denah. Denah dan tampilan 3D mengikuti, sudut-sudutnya tersambung kembali, dan pintu serta jendela tetap di dindingnya.

## Ubah dinding

1. Dengan {{ui:Gambar}} aktif dan {{ui:Pilih}} aktif, klik dinding di denah (atau di tampilan 3D).
2. **Properti** menampilkan kotak dengan angka-angka dinding. Ubah satu dan tekan {{key:Enter}}:
   - **Tipe dinding**: tipe pemula lainnya. Ketebalan dan lapisannya ikut berubah.
   - **Ketebalan**: ketebalan apa pun. Tipe itu mempertahankan lapisan lainnya, dan lapisan utamanya (stud atau blok) menanggung selisihnya, misalnya "Exterior 2×6, 200 mm".
   - **Ukur dari**: **Garis tengah**, **Sisi dalam**, atau **Sisi luar**. **Panjang** dan **Ukuran ruang** dibaca dan diatur darinya. Sisi luar adalah yang ditampilkan dimensi denah.
   - **Panjang**: ujung dinding bergerak sepanjang garisnya. Dinding yang tersambung di ujung itu bergerak tegak lurus terhadap dirinya sendiri dan mempertahankan sudutnya.
   - **Ukuran ruang** (bila ada dinding sejajar di seberang ruang): ketik ukuran yang Anda inginkan. Dinding ini bergerak siku, dan dinding yang tersambung ikut meregang.
   - **Pindahkan siku**: ketik seberapa jauh memindahkan dinding tegak lurus terhadap dirinya sendiri: angka biasa memindahkannya keluar, angka negatif memindahkannya masuk.
   - **Sudut ke dinding tersambung**: sudut ke dinding yang tersambung di ujung awalnya. Ketik 90 untuk membuatnya siku. Dinding yang tidak tersambung ke apa pun menampilkan **Arah**, dalam derajat dari timur.
   - {{ui:Jadikan siku}}: memutar dinding yang tersambung dengannya kembali ke sudut siku-siku, sepanjang arah tempat sebagian besar panjangnya berjalan. Ini bekerja pada seluruh ruang atau tata letak yang tersambung, apa pun dindingnya yang Anda pilih. Dinding yang lebih dari 10 derajat dari sudut siku-siku tetap seperti semula, sehingga satu yang diatur 45 derajat aman. Satu {{ui:Urungkan}} mengembalikan semuanya.
   - **Tinggi dinding**: **Sampai level di atas** mengikuti level itu, **Sampai Level 3** (dan level mana pun di atasnya) membuat dinding yang menembus level di antaranya; mengetik tinggi kemudian mengatur seberapa jauh di bawah atau di atas level itu bagian atasnya. **Tinggi tetap** mempertahankan angka yang Anda ketik. **Menembus** mendaftar level yang dilewati dinding seperti itu: ia digambar lebih terang di denah mereka, ruang di sana menutup ke dinding itu, dan pintu serta jendela dapat ditempatkan di dalamnya dari denah tersebut. Dinding dipindahkan dan dibentuk ulang di level tempat ia mulai.
   - **Offset dasar**: seberapa jauh di atas level dinding mulai. Bagian atasnya tetap di tempatnya semula.
   - **Luar**: {{ui:Balik}} memindahkan lapisan luar ke sisi lainnya.
   - **Garis lokasi**: **Garis tengah**, **Sisi luar**, **Sisi dalam**, **Sisi kiri**, atau **Sisi kanan**. Mengubahnya tidak memindahkan apa pun. Nanti, ketika dinding menjadi lebih tebal (lewat tipe atau **Ketebalan**) atau sisi luarnya dibalik, garis lokasi tetap di tempatnya dan dinding tumbuh atau berbalik di sekitarnya. Dinding lurus yang bertemu dengannya di sudut mengikuti, sehingga sudutnya tetap tertutup. Garis lokasi dinding yang dipilih digambar putus-putus di denah. Pilih beberapa dinding untuk mengatur semuanya sekaligus.
   - **Tinggi busur** (dinding melengkung): seberapa jauh bagian tengahnya melengkung dari garis lurus. 0 membuatnya lurus; nilai negatif melengkungkannya ke sisi lain. Radius ditampilkan di sebelahnya.
3. Setiap perubahan adalah satu langkah di **Perubahan**; {{ui:Urungkan}} mengembalikannya.

## Seret dinding di denah

Ketika satu dinding dipilih, ia menampilkan tiga grip: kotak di setiap ujung dan lingkaran di tengah.

- Seret ujung untuk membuat dinding lebih panjang, lebih pendek, atau memutarnya. Ia menempel seperti alat Dinding, dan mengunci siku ke dinding yang tersambung di ujung lainnya saat Anda berada dalam 3 derajat; {{key:Shift}} menahannya pada sumbu denah.
- Dinding yang tersambung di ujung yang Anda seret mempertahankan sudutnya: ujung-ujungnya meluncur sepanjang garisnya sendiri untuk bertemu garis baru dinding, sehingga tidak ada yang miring. Tahan {{key:Mod}} untuk seretan bebas (ujung dinding yang tersambung ikut dengan Anda dan dinding itu berputar), atau {{key:Alt}} untuk memutus sambungan di dinding ini.
- Seret tengah untuk memindahkan seluruh dinding tegak lurus terhadap dirinya sendiri, ke arah mana pun Anda menyeret. Sudut-sudutnya meluncur sepanjang dinding yang tersambung, sehingga dinding itu mempertahankan sudutnya.
- Tahan {{key:Mod}} saat menyeret tengah untuk pemindahan bebas, ketika Anda memang ingin memutus sudut. {{ui:Jadikan siku}} mengembalikannya.
- Selagi grip ditahan, ketik jarak dan tekan {{key:Enter}} (atau lepaskan): dinding bergerak tepat sejauh itu, sesuai cara Anda menyeret. {{key:Esc}} membatalkan pemindahan.
- Dinding lengkung yang dipilih menampilkan grip di ujungnya dan grip bulat di tengah busurnya. Seret grip bulat untuk melengkungkannya.
- Pintu dan jendela tetap di dinding. Dinding yang terlalu pendek untuk menampung isinya ditolak dengan pesan "Tidak muat di dinding itu."

## Ubah pintu atau jendela

1. Klik pintu atau jendela di denah.
2. Di **Properti**: **Tipe** (pintu atau jendela lain dari jenis yang sama), **Lebar**, **Tinggi**, **Ambang** (jendela), **Dari awal** dan **Dari akhir** (jarak dari setiap ujung muka dinding ke tepinya), **Engsel** {{ui:Balik}} (pintu berdaun tunggal dan jendela casement); pintu geser, pocket, barn, dan bifold sebagai gantinya menyatakan **Membuka ke** (jendela fixed, hung, dan picture serta pintu ganda tidak memilikinya), dan **Berayun ke** (pintu) atau **Sisi bingkai** (jendela) {{ui:Balik}}.
3. Atau seret sepanjang dindingnya, atau ke dinding lain: lihat [Pintu dan jendela](topic:doors-and-windows).

## Ubah beberapa sekaligus

Pilih beberapa dinding (atau beberapa pintu, atau beberapa jendela) dengan {{key:Shift}}+klik atau {{key:Mod}}+klik. **Properti** menawarkan yang mereka miliki bersama: **Ubah tipe…**, tinggi, ukuran. Satu perubahan mengatur semuanya, dan satu {{ui:Urungkan}} mengembalikan semuanya.

## Hal yang perlu diketahui

- Angka ditampilkan dalam {{ui:Satuan}} yang dipilih di bilah alat.
- Dinding, pintu, dan jendela dari program lain menampilkan data IFC mereka di **Properti** seperti sebelumnya, tanpa kotak ini.
