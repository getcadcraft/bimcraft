---
title: Bentuk dinding: lekatkan, profil, miringkan, dan bukaan
summary: Lekatkan puncak dinding ke atap, lantai, atau langit-langit, beri dinding garis tepinya sendiri dari samping, miringkan, atau buat bukaan tanpa pintu atau jendela, di Properti, pada tampak atau potongan, pada tampilan muka dinding itu sendiri, atau di 3D; setiap perubahan adalah satu langkah urungkan.
keywords: lekatkan, lekatkan atas, lekatkan dasar, atap, pelat, langit-langit, gable, profil, sunting profil, garis tepi, bertangga, parapet, miring, kemiringan, condong, meruncing, miring ganda, bukaan, bukaan dinding, lubang, tembus, tanpa pintu, grip, tampak, potongan, 3D, tampilan muka, dinding melengkung, salin
from: f558b269
---

## Yang akan Anda lakukan

Ubah bentuk dinding di atas dan di bawah denahnya: puncaknya dapat mengikuti atap, pelat lantai, atau langit-langit; dinding dapat memiliki garis tepinya sendiri yang terlihat dari samping; dinding dapat condong; dan dinding dapat memiliki bukaan tanpa pintu atau jendela di dalamnya. Denah dinding, sudutnya, dan garis lokasinya tetap seperti semula.

## Di mana Anda dapat melakukannya

- **Properti**: dengan {{ui:Gambar}} dan {{ui:Pilih}} aktif, klik satu dinding yang Anda gambar. **Properti** menampilkan baris dinding, lalu **Bentuk**, tempat semuanya diketik.
- **Tampak atau potongan**: pensil di penjelajah proyek ({{ui:Sunting di tampilan ini}}) membuka tampilan; pilih dinding di sana dan seret grip-nya. Lihat "Pada tampak atau potongan" di bawah.
- **Tampilan muka dinding itu sendiri**: {{ui:Dinding}} › {{ui:Sunting profil}}, lalu klik dinding di denah. Ini berfungsi untuk dinding apa pun, juga untuk dinding yang tidak dilihat tegak lurus oleh tampak mana pun, dan untuk dinding melengkung (ditampilkan terbuka).
- **Denah dan tampilan 3D**: keempat perintah di {{ui:Dinding}} (grup Edit): {{ui:Lekatkan atas / bawah}}, {{ui:Sunting profil}}, {{ui:Kemiringan}}, dan {{ui:Bukaan dinding}}. Lihat "Pada denah dan di 3D" di bawah.

Apa pun caranya, perubahannya sama: satu langkah di **Perubahan**, dan {{ui:Urungkan}} membatalkannya.

Semua alat Bentuk berlaku untuk dinding lurus maupun melengkung. Pada dinding melengkung, jarak diukur sepanjang lengkungnya.

## Lekatkan puncak atau dasar

- **Lekatkan atas**: pilih atap, lantai, atau langit-langit. Puncak dinding mengikuti bagian bawah dari yang Anda pilih, tepat di atas setiap sudut dinding. Di bawah atap miring, dinding mendapat puncak miring, dan di tempat atap berubah bidang (sambungan atau pinggul), puncak dinding ikut membelok.
- **Lekatkan dasar**: pilih lantai atau langit-langit. Dasar dinding mengikuti muka atasnya.
- Jika tidak ada apa pun di atas (atau di bawah) sebagian dinding, bagian itu mempertahankan tingginya sendiri.
- Keterkaitannya tetap: ubah kemiringan atau tritisan atap, atau tinggi langit-langit, dan dinding yang terlekat ikut berubah dalam langkah yang sama.
- Pilih **Tinggi sendiri** untuk melepaskannya.

## Sunting profil

{{ui:Sunting profil…}} membuka garis tepi dinding dilihat dari sisinya:

- **Garis atas**: baris **Along** (jarak dari awal dinding) dan **Height** (di atas dasar dinding). Tiga baris 0 / 3000, 2500 / 4500, 5000 / 3000 membuat ujung gable pada dinding 5 m.
- **Garis bawah**: biarkan kosong untuk dasar level, atau beri baris untuk dinding di atas fondasi bertangga.
- {{ui:Tambah titik}} menambahkan baris, **Hapus** menghapus satu. {{ui:Gunakan profil ini}} menerapkannya; {{ui:Kembali ke lurus}} menghapusnya.

Setiap garis berjalan sepanjang dinding satu kali, dari awal sampai akhirnya; garis yang kembali ke dirinya sendiri, atau puncak yang turun sampai ke dasar, ditolak. Jika puncak juga terlekat, yang lebih rendah dari keduanya yang dipakai.

## Miringkan dinding

**Kemiringan**: **Tegak**, **Miring** (kedua muka condong ke arah yang sama, ketebalannya tetap) atau **Miring ganda** (setiap muka memiliki sudutnya sendiri: dinding yang makin tipis atau makin tebal saat naik). Ketik derajat dari tegak; sudut positif condong ke kiri dinding, dilihat dari awalnya. Dinding tetap di tempat ia digambar di dasarnya; dinding yang tersambung dengannya tidak ikut condong.

## Bukaan tanpa pintu atau jendela

{{ui:Tambah bukaan}} memotong lubang lebar 900 di tengah dinding. Barisnya di **Bukaan** mengatur **From start**, **Width**, **Sill** (dari level), dan **Height**; **Hapus** mengeluarkannya. Bukaan menembus seluruh dinding, kuantitas dinding mengecualikannya, dan denah menampilkan celah di tempat bukaan mencapai tinggi potong denah. Saat awal dinding bergeser di sepanjang garisnya, bukaan tetap di tempatnya; perubahan yang membuatnya berada di luar dinding ditolak.

## Pada tampak atau potongan

Buka tampilan dengan pensil di penjelajah proyek. Dengan {{ui:Pilih dan pindahkan}} aktif:

- **Profil**: klik dinding yang menghadap tampilan. Garis atas dan bawahnya berubah biru, dengan grip persegi di setiap titik dan titik di tengah setiap bagian.
  - Seret persegi untuk memindahkan titik itu (dua titik ujung hanya bergerak naik dan turun).
  - Seret titik untuk memindahkan seluruh bagian naik atau turun.
  - Klik dua kali garis (atau klik kanan) untuk menambah titik di sana; {{ui:Tambah titik (atas)}} dan {{ui:Tambah titik (bawah)}} menambahkan satu di tengah bagian terpanjang.
  - Klik persegi lalu tekan Delete (atau klik kanan) untuk menghapus titik itu. {{ui:Kembali ke lurus}} menghapus profil.
  - Dengan satu titik dipilih, ketik **Along** dan **Height**-nya di strip di bawah bilah alat.
- **Lekatkan**: strip memiliki daftar **Lekatkan atas** dan **Lekatkan dasar** untuk dinding yang dipilih. Atau gunakan alat {{ui:Lekatkan atas}} atau {{ui:Lekatkan dasar}}: klik dinding atau dinding-dinding, lalu atap, lantai, atau langit-langit, yang ditampilkan sebagai kotak putus-putus. Semua dinding yang dipilih terlekat dalam satu langkah.
- **Bukaan dinding**: dengan alat {{ui:Bukaan dinding}}, seret sebuah persegi panjang pada muka dinding. Kembali di {{ui:Pilih dan pindahkan}}, seret bukaan untuk memindahkannya, seret salah satu dari delapan grip-nya untuk mengubah ukurannya, ketik **From start**, **Width**, **Sill**, dan **Height** di strip, atau tekan Delete untuk menghapusnya.
- **Kemiringan**: dinding yang dilihat tampilan dari ujungnya (terlihat tegak lurus sebagai potongan melaluinya, atau pada tampak dari ujungnya) juga dapat diklik. Seret pegangan bulat di puncaknya untuk memiringkannya, atau pilih **Tegak**, **Miring**, atau **Miring ganda** di strip dan ketik sudutnya.

Ukuran menempel ke kelipatan 10 mm; ketik nilai untuk hal yang lebih halus. Dinding melengkung dapat disunting pada tampak selama ia berjalan searah melintasi tampilan; tampilan muka dindingnya sendiri selalu berfungsi.

## Pada denah dan di 3D

Buka {{ui:Dinding}} di grup Edit:

- {{ui:Lekatkan atas / bawah}}: pilih **Lekatkan atas** atau **Lekatkan dasar** di baris alat. Klik dinding atau dinding-dinding (di denah atau di tampilan 3D), lalu apa yang menjadi tempat lekatnya: di 3D, klik atap, lantai, atau langit-langit itu sendiri; di denah, klik titik di bawahnya (jika ada lebih dari satu, daftar akan menanyakan yang mana).
- {{ui:Sunting profil}}: di denah, klik dinding untuk membuka tampilan mukanya. Di 3D, klik dinding: titik profilnya mendapat grip; seret salah satunya pada bidang dinding.
- {{ui:Kemiringan}}: klik dinding (denah atau 3D) dan ketik seberapa jauh ia condong.
- {{ui:Bukaan dinding}}: di denah, klik dinding tempat bukaan akan dibuat; **Width**, **Height**, dan **Sill**-nya ada di baris alat. Di 3D, klik satu sudut pada muka dinding, lalu sudut yang berseberangan. Dengan dinding dipilih di 3D, bukaannya memiliki grip: sudut-sudutnya mengubah ukuran, bagian tengahnya memindahkan.

Grip 3D adalah grip milik tampilan 3D itu sendiri, sehingga mereka menunggu selama kotak potong menampilkan grip-nya.

## Pada denah

Dinding miring digambar di tempat denah memotongnya (1200 di atas level kecuali tampilan menyatakan lain): garis luarnya digeser sejauh ia condong pada ketinggian itu, dan miring ganda lebih lebar atau lebih sempit di sana. Garis luarnya di lantai digambar dengan garis tipis dari apa yang berada di bawah potongan. Sudut, grip, dan dimensi dinding tetap di dasarnya.

## Salinan

{{ui:Salin level ini…}} dan Pindahkan dengan **Salin** membawa serta profil, kemiringan, dan bukaan dinding. Dinding yang terlekat ke lantai atau langit-langit terlekat ke lantai atau langit-langit salinan pada level baru; lekatan ke atap tidak disalin bersama level (atap tidak disalin). Salinan pada level yang sama tetap terlekat ke atap, lantai, atau langit-langit yang sama.

## Dalam file

Dinding berbentuk ditulis sebagai benda padat bersisi (IfcFacetedBrep), yang dibaca program lain sebagaimana digambar; pengaturannya ada pada dinding (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Bukaan adalah IfcOpeningElement di dalam dinding tanpa apa pun yang mengisinya.

## Belum dibuat

- Profil dengan tonjolan atau lubang pada garis luarnya (gunakan bukaan untuk lubang).
- Di 3D: menambah atau menghapus titik profil, dan kemiringan dengan pegangan (gunakan tampilan muka dinding, tampak atau potongan, atau ketik nilainya).
- {{ui:Offset}} dengan Salin aktif tidak menyalin bentuk atau bukaan dinding (Pindahkan dengan Salin menyalinnya).
- Lapisan dinding miring tidak digambar pada denah Sedang dan Halus (garis luarnya digambar).
- Bukaan yang bukan persegi panjang.
