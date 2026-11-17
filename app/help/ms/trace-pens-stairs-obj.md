---
title: Trace satu aras, tetapkan pen bagi setiap pandangan, lakar tangga dan buka OBJ
summary: Tunjukkan aras lain putus-putus di bawah pelan dan jajarkannya, beri dinding, pintu dan tingkap pen sendiri dalam satu pandangan, lukis garis berjalan untuk mendapatkan tangga, dan buka jejaring Wavefront OBJ.
keywords: rujukan trace, hantu, underlay, pen, ketebalan garisan, jenis garisan, tindih, tangga, lakaran, pelantar, OBJ, jejaring, import, Wavefront
from: 333ebbde
---

## Trace satu aras

Pilih {{ui:Trace}} dalam menu {{ui:Binaan}}, kemudian pandangan dalam senarai: pelan aras lain, pelan siling bagi sesuatu aras, atau callout (dipotong kepada bingkainya). Dinding, tiang dan lantainya dipaparkan putus-putus di bawah pelan yang anda lukis. Alihkannya dengan klik titik asas pada rujukan dan kemudian tempat titik itu patut pergi, atau taip X, Y dan sudut (ia berpusing mengikut pusatnya sendiri). {{ui:Tetapkan semula}} mengembalikannya, {{ui:Sembunyikan}} mengalihkannya. Ia rujukan sahaja: tiada apa memilihnya, ia tidak dicetak dan tidak disimpan dalam IFC. BimCraft mengingatinya bagi setiap aras dalam pelayar ini.

## Pen bagi setiap pandangan

Pilih {{ui:Pen}}. Nyatakan untuk apa pen itu: semua dinding, semua pintu, semua tingkap, jenis elemen yang dipilih, atau elemen yang dipilih. Pilih ketebalan, garisan (pepejal, putus-putus, titik-titik) dan warna, kemudian {{ui:Guna}}. Perubahan hanya untuk pelan aras ini. Pilihan mengatasi jenis, dan jenis mengatasi keseluruhan kategori. {{ui:Kosongkan semua}} mengalihkannya. Ia disimpan dalam pelayar ini. Tandakan **Warna pen dalam 3D** untuk mewarnakan pen warna pada model dalam pandangan 3D (ketebalan atau putus-putus ialah milik garisan, jadi hanya warna kelihatan di sana); nyahtandakannya untuk kembali. {{ui:Cetak}} melukis pen pada PDF pelan: ketebalan diskala daripada skrin (pen dinding lalai 1.75 piksel ialah 0.5 mm), putus-putus kekal putus-putus, dan warna dicetak dalam nilai tema kertasnya.

## Lakar tangga daripada lakaran

Pilih {{ui:Lakar tangga}} dan klik bucu garis berjalan, bermula dengan anak tangga bawah. Satu garisan ialah tangga lurus, dua garisan yang bertemu pada sudut tegak ialah L, dan tiga garisan (naik, merentas, kembali) ialah U. Tekan {{key:L}} untuk melukis pelantar: klik bucunya dan tekan {{key:Enter}}, dan sisi pendeknya menetapkan lebar tangga. Tekan {{key:Enter}} untuk meletakkan tangga. Setiap tapak dikira daripada panjang garisan anda dan bilangan tegak yang diperlukan oleh ketinggian. Selepas itu ia tangga biasa: tukarnya dalam Sifat, dan ruang tangga serta susur tangan akan mengikutinya.

Tandakan **Jadikan keluarga** dalam baris alat (atau tekan {{key:F}}) sebelum {{key:Enter}} untuk meletakkan tangga sebagai keluarga (tangga lurus, L atau U). Ia masuk sebagai satu elemen dan dibuka dalam penyunting keluarga dengan lebarnya, tapak, jumlah ketinggian, tapak bagi setiap penerbangan dan jurang bagi U sebagai parameter, supaya anda boleh menambah saiz, simbol pelan atau hotspot. Anak tangga dan ketinggian tegak mengikut daripadanya. Ia tiada susur tangan atau ruang tangga: itu milik tangga biasa.

## Buka OBJ

Buka fail `.obj` seperti fail lain. OBJ tiada unit, jadi BimCraft membacanya dalam meter dengan Y ke atas, seperti kebanyakan program menulisnya. Setiap objek atau kumpulan menjadi satu elemen jejaring pada satu aras, dan anda kemudian boleh melihat, mengukur, memotong keratan, meletakkannya dalam model dan menyimpannya sebagai IFC. Garisan, lengkung dan permukaan ditinggalkan, dan baris status menyatakannya.

Objek yang betul-betul prisma lurus (jejaring tertutup dengan dua hujung selari dan sama serta sisi rata yang bersudut tegak padanya: papak, tiang, blok dinding, plat berlubang) disimpan dalam IFC sebagai pepejal tersemperit IFC dengan garis luar dan kedalamannya, bukan senarai segi tiga. Program lain membacanya sebagai pepejal sebenar, ia kekal kecil, dan kedalaman serta garis luarnya boleh disunting kemudian. Baris status menyatakan berapa banyak objek disimpan dengan cara itu. Apa-apa yang bukan prisma tepat (bentuk meruncing, jejaring dengan satu bucu dialihkan, jejaring dengan jurang) kekal sebagai segi tiga. Fail STEP dibaca dengan cara yang sama.
