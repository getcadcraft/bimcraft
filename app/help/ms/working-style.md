---
title: Gaya kerja, pandangan pendua, pen pada kertas, Laporkan sebagai dan templat
summary: Pilih cara BimCraft berkelakuan mengikut cara anda bekerja, duplikasi mana-mana pandangan sebagai salinan sendiri atau dipautkan, simpan override pen dalam fail dan cetak seperti yang dipaparkan atau melalui jadual pen, laporkan elemen sebagai kelas IFC lain, dan mulakan projek daripada templat anda sendiri.
keywords: gaya kerja, pandangan pendua, duplikasi, pendua, salin pandangan, pandangan bergantung, pandangan dipautkan, salinan sendiri, salinan pandangan, override pen, pen, berat garisan, cetak seperti dipaparkan, jadual pen, gaya plot, ctb, monokrom, skala kelabu, laporkan sebagai, kelas ifc, klasifikasi semula, jenis pratakrif, model generik, slab sebagai jalan, dinding sebagai panel, bumbung sebagai tanjakan, templat projek, templat, baharu daripada templat, simpan sebagai templat, standard pejabat
from: 231d98b0
---

## Apa yang akan anda lakukan

Tetapkan BimCraft mengikut cara anda bekerja, duplikasi pandangan, cetaknya seperti yang anda jangkakan, kira elemen sebagai apa yang sebenarnya ia, dan mulakan setiap projek daripada templat pejabat anda.

## Pilih gaya kerja

1. Buka {{ui:Tetapan}} dan tab {{ui:BimCraft}}. Cari {{ui:Gaya kerja}}.
2. Pilih satu:
   - {{ui:Setiap pandangan milik sendiri}} (pilihan pertama): pandangan pendua menyalin anotasinya dan ia kekal milik pandangan itu; helaian dicetak seperti yang dipaparkan pada skrin.
   - {{ui:Anotasi dan jadual pen dikongsi}}: pandangan pendua berkongsi anotasi; percetakan dilakukan melalui jadual pen.
3. Di bawah pilihan ialah empat perkara yang ditetapkannya. Tukar mana-mana satu secara berasingan; gaya itu kemudian dibaca sebagai {{ui:Tersuai}}.

Gaya kerja disimpan dalam pelayar ini, sama seperti susun atur ruang kerja. Templat membawanya ke model baharu.

## Duplikasi pandangan

1. Dalam {{ui:Pelayar projek}}, setiap pelan lantai, pelan siling, panggilan, dongakan dan keratan mempunyai butang {{ui:Pendua}} (dua helaian).
2. Namakan salinan dan pilih cara ia berkelakuan:
   - {{ui:Salinan sendiri}}: lukisan, dimensi, pangkasan, elemen tersembunyi dan pennya disalin dan kekal miliknya. Menyunting mana-mana pandangan tidak pernah mengubah yang lain, jadi pandangan pada helaian yang telah dikeluarkan kekal seperti semasa ia dikeluarkan.
   - {{ui:Dipautkan}}: ia memaparkan pandangan yang sama dengan satu set anotasi dan tetapan.
3. Salinan itu disenaraikan di bawah {{ui:Pandangan pendua}}. Klik untuk membukanya; bar di atas pelan menyatakan ia salinan, dengan {{ui:Atas}} untuk kembali ke pandangannya.
4. Butang gelangsarnya membuka tetapannya: nama, {{ui:Julat pandangan}} (salinan sendiri mempunyai julatnya sendiri), {{ui:Jadikan salinan sendiri}} untuk yang dipautkan, dan {{ui:Padam}}.

Salinan dongakan dan keratan diletakkan pada helaian anda sendiri seperti pandangan asalnya. Duplikasi ialah satu langkah buat asal, dan salinan disimpan dalam IFC bersama panggilan.

## Pen disimpan bersama pandangan, dan dicetak seperti yang dipaparkan

1. Hidupkan {{ui:Lukis}} dan pilih {{ui:Pen}}.
2. {{ui:Untuk}} kini menyenaraikan setiap kategori: dinding, pintu dan tingkap, slab, bumbung, tiang, tangga, perabot dan selebihnya, serta lukisan dan dimensi.
3. {{ui:Guna}} menyimpan pen dalam IFC bersama pandangan yang dipaparkan: pelan, pelan siling, panggilan atau pandangan pendua. Pen yang dibuat sebelum 0.9 disimpan dalam pelayar; {{ui:Simpan ini dalam fail}} memindahkannya.
4. Helaian dan PDF melukis setiap pen seperti yang dipaparkan pada skrin.

Untuk mencetak melalui jadual pen sebaliknya, tetapkan {{ui:Cetak}} dalam baris Pen kepada {{ui:Melalui jadual pen}}, kemudian pilih jadual (warna, monokrom, skala kelabu) atau {{ui:Sunting jadual pen…}}: setiap warna mendapat warna, berat dan skrin yang akan dicetak dengannya. Jadual itu ialah fail gaya plot CadCraft, jadi {{ui:Import…}} menerima jadual yang dibuat dalam aplikasi CadCraft dan {{ui:Eksport}} memberikan semula satu. Model menyimpan pilihannya; jika tiada, gaya kerja menentukan.

## Laporkan elemen sebagai kelas lain

Slab yang dilukis sebagai jalan, dinding yang digunakan sebagai panel, bumbung yang dibentuk sebagai tanjakan: kekalkan alat yang anda gunakan untuk melukisnya dan laporkannya sebagai apa yang sebenarnya.

1. Pilih elemen dan buka {{ui:Sifat}}. Buka {{ui:Laporkan sebagai}}.
2. Taip dalam kotak carian untuk mencari kelas yang sesuai dengan bentuk itu, pilih kelas dan jenis pratakrifnya. Untuk jenis anda sendiri, pilih USERDEFINED dan beri nama.
3. {{ui:Guna}} (satu langkah buat asal). {{ui:Kosongkan}} melaporkannya semula seperti yang dilukis.

Anda masih menyuntingnya dengan alat yang digunakan untuk melukisnya. IFC yang disimpan menulisnya sebagai kelas yang dilaporkan, supaya program lain, pengukuran {{ui:Kuantiti}}, Cari, Warnakan mengikut, semakan model dan {{ui:Masalah}} mengiranya sebagai kelas itu. Jadual dinding menyingkirkan dinding yang dilaporkan sebagai panel, dan {{ui:Elemen mengikut kelas yang dilaporkan}} menyenaraikan setiap satu. Ia berfungsi dalam fail IFC4 dan IFC2X3; senarai hanya menawarkan kelas yang disokong oleh versi IFC fail itu. Pintu, tingkap, tangga, bilik dan aras mengekalkan kelas mereka sendiri.

## Simpan projek sebagai templat, dan mulakan daripadanya

1. Dengan projek dibuka, klik {{ui:Simpan sebagai templat}} di sebelah {{ui:Simpan}}.
2. Namakannya. Tandakan Muat turun fail templat juga untuk berkongsinya sebagai fail IFC, dan {{ui:Mulakan model baharu daripadanya}} untuk menjadikannya lalai anda.
3. Templat menyimpan tingkat, templat pandangan dan tetapan pandangan, pandangan pendua dan panggilan, lukisan, pen dan jadual pen, tag, famili dan jenis, helaian, saiz helaian, blok tajuk dan gaya kerja. Dinding, lantai, pintu dan setiap elemen model yang lain ditinggalkan.
4. Klik {{ui:Bangunan baharu}} dan pilihnya di bawah {{ui:Mula daripada}}, atau pilih {{ui:Fail templat…}} untuk satu yang dihantar kepada anda. Projek baharu mendapat nama dan identiti projeknya sendiri; semua yang lain seperti yang ada dalam templat.

:::note
Templat disimpan dalam pelayar ini. Templat pasukan yang dikongsi melalui CadCraft Studio belum dibina: hantar fail templat sebaliknya.
:::
