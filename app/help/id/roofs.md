---
title: Atap: kemiringan untuk setiap dinding, gewel, shed, dan bidang atap
summary: Atur setiap dinding di bawah atap menjadi miring, ujung gewel, atau tanpa, gunakan preset hip, gewel, dan shed, angkat atap dengan tinggi plat, tambahkan fascia dan soffit, dan gambar bidang atap tunggal bila atap otomatis tidak cocok.
keywords: ubah atap, sunting atap, atap terpilih, properti atap, urungkan atap, atap, kemiringan, per dinding, gewel, ujung gewel, shed, lean-to, hip, lembah, bubungan, tinggi plat, tumit, fascia, soffit, tritisan, rake, tonjolan, bidang atap, atap teras, dormer, dormer gewel, dormer shed
from: 096084a7
---

## Yang akan Anda lakukan

Bentuk atap dari dinding di bawahnya. Setiap dinding mendapat pengaturannya sendiri, sehingga satu atap bisa berbentuk hip di depan, berujung gewel di kedua ujungnya, dan menempel rata pada dinding yang lebih tinggi di belakang. Untuk teras atau bidang apa pun yang tidak bisa dibuat atap otomatis, gambar bidang atap dengan menentukan sudut-sudutnya.

## Pasang atap

1. Pada level yang dindingnya menopang atap, klik {{ui:Roof}}.
2. Ketik **Kemiringan** (`6/12`, atau derajat seperti `30`) dan **Tritisan**.
3. Pilih preset: **Atap hip**, **Gewel di sisi pendek**, **Gewel di sisi panjang**, atau **Shed** (sisi yang paling dekat dengan kursor adalah tritisan rendah; sisi lainnya adalah ujung gewel).
4. Biarkan **Fascia dan soffit** tercentang untuk tritisan berkotak dengan papan fascia, atau hilangkan centangnya untuk tepi atap yang polos.
5. Arahkan kursor ke dalam bangunan: tritisan, bubungan, hip, dan lembah tampil di denah. Klik.

Setiap bentuk dapat dipakai: L, T, U dan plus, sudut miring, dan takik. Hip, bubungan, dan lembah ditemukan di tempat bidang atap bertemu.

## Satu dinding setiap kali

Pilih atap (pada level di atas dinding, klik di dalam garisnya) dan lihat di bawah **Setiap dinding** pada **Properti**. Menunjuk sebuah baris akan menandai dinding itu di denah.

- **Miring**: dinding memiliki bidang atap miring di atasnya. Ketik kemiringannya sendiri di sebelahnya, misalnya `12/12` untuk ujung yang curam pada atap `6/12`.
- **Ujung gewel**: atap berhenti dalam ujung vertikal di atas dinding itu, dinding diisi hingga atap, dan atap melewatinya sejauh **Tritisan gewel**.
- **Tidak ada (berhenti rata)**: atap berhenti di dinding itu tanpa tritisan dan tanpa dinding gewel, untuk atap yang menempel pada dinding yang lebih tinggi.

Daftar **Ujung** di bagian atas mengatur setiap dinding sekaligus; **Atur per dinding** muncul ketika dinding tidak lagi cocok dengan preset.

## Ubah atap yang sudah dipasang

Pilih atap dan **Properti** menampilkan pengaturan yang sama dengan alat Atap: **Kemiringan**, **Tritisan**, **Tritisan gewel**, **Tinggi plat**, **Tinggi fascia**, **Soffit berkotak**, dan **Ketebalan**. Setiap perubahan langsung tampak di denah dan di 3D, dengan pemeriksaan yang sama seperti alat (kemiringan 80 derajat atau lebih ditolak, begitu pula pengaturan yang tidak dapat membuat atap). Ketik nilainya lalu tekan {{key:Enter}}, atau tinggalkan kotaknya.

Setiap perubahan adalah satu langkah urungkan. Beberapa perubahan pada kotak yang sama, satu demi satu (ketik `6/12`, lalu `7/12`, lalu `8/12`), digabung menjadi satu langkah, sehingga satu {{key:Ctrl}}+{{key:Z}} mengembalikan atap seperti sebelum rangkaian itu; mengubah kotak lain memulai langkah baru.

## Tinggi plat, fascia, dan soffit

- **Tinggi plat** adalah tempat bidang atap bertemu dengan sisi luar dinding, diukur dari lantai level. Kosongkan untuk meletakkan atap di atas dinding; ketik nilai yang lebih besar untuk tumit yang dinaikkan.
- **Tinggi fascia** adalah papan di sepanjang tritisan dan naik di sepanjang rake. Ketik `0` untuk tidak ada.
- **Soffit berkotak** memasang soffit datar di bawah setiap tritisan, dari dinding hingga bagian belakang fascia.

Setiap bidang bertemu dinding pada tinggi plat, sehingga dinding dengan kemiringan berbeda tetap memiliki satu garis plat, dan tritisannya berakhir pada ketinggian berbeda, seperti dirangka.

## Gambar bidang atap

1. Pada level tempat dinding bidang berada, buka {{ui:Build}} dan pilih {{ui:Roof plane}}.
2. Ketik **Kemiringan** dan, bila bukan di atas dinding, **Tinggi tritisan**.
3. Klik sudut-sudutnya. Sisi pertama yang Anda gambar adalah tritisan; bidang naik darinya menuju sisa bentuk.
4. Klik sudut pertama lagi, klik ganda, atau tekan {{key:Enter}} untuk selesai. {{key:Esc}} membuang sudut-sudut.

Bidang atap tidak mengikuti dinding. Pilih di level di atasnya (klik di dalamnya) untuk mengubah kemiringan, tinggi tritisan, atau ketebalannya, atau tekan {{key:Delete}} untuk menghapusnya.

## Tambah dormer

1. Tampilkan level tempat atap berada.
2. Buka {{ui:Build}} dan pilih {{ui:Dormer}}.
3. Pada baris opsi, pilih **Jenis dormer** (**Gewel** atau **Shed**) dan atur **Lebar**, **Dinding depan** (tinggi dinding depan dari puncak atap hingga tritisan dormer), **Kemiringan**, dan **Tritisan**.
4. Klik pada permukaan atap tempat bagian tengah depan dormer berada.

BimCraft membangun dinding depan, dua dinding pipi, dan atap dormer, lalu menjalankannya ke belakang hingga bertemu atap. Dormer gewel memiliki dua bidang yang bertemu pada bubungan. Dormer shed memiliki satu bidang, yang harus lebih landai daripada atap. Atap di bawah dormer dipotong. Dormer mengikuti atap ketika dinding dipindahkan.

Pilih dormer untuk mengubah jenis, lebar, dinding depan, kemiringan, atau tritisannya di **Properti**. {{key:Delete}} menghapus dormer dan menutup atap kembali. Dormer harus muat pada satu permukaan atap, jauh dari hip, lembah, dan bubungan; dan hanya atap yang dibuat dengan alat {{ui:Roof}} yang menerima dormer, bukan bidang atap yang digambar dengan tangan. Belum dibuat: jendela di bagian depan dormer, dan dormer pada bidang atap yang digambar dengan tangan.

## Yang disimpan

Atap adalah atap IFC yang terdiri dari satu slab atap per bidang, dinding gewel, satu elemen fascia, dan satu penutup soffit. Atap menyimpan panjang bubungan, hip, lembah, tritisan, dan rake-nya, serta luasnya, untuk perhitungan volume. Bidang atap adalah atap IFC dengan satu slab.

:::tip
Urungkan membatalkan perubahan atap apa pun dalam satu langkah, termasuk preset yang mengubah setiap dinding.
:::
