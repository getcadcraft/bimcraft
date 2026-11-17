---
title: Letakkan gambar di bawah pelan
summary: Letakkan gambar PNG, JPEG atau WebP (pelan yang discan, lakaran, foto tapak, pandangan udara) di bawah pelan tingkat atau pada satah tegak, skalakannya mengikut dua titik, alih, pusing, pudarkan dan kunci, lihat dalam 3D dan dalam PDF pelan, serta simpan bersama model dalam bundel.
keywords: gambar, imej, latar belakang, PNG, JPEG, WebP, imbasan, lakaran, foto, pandangan udara, pelan tapak, skala, kelegapan, kunci, alas, jejak
from: e3c78d1f
---

## Letakkan gambar

Hidupkan {{ui:Lukis}}, pergi ke tingkat, dan pilih {{ui:Gambar}} dalam menu {{ui:Binaan}}. Kemudian {{ui:Selitkan gambar…}} dan pilih fail PNG, JPEG atau WebP. Ia dibaca dalam pelayar anda dan tidak pernah dimuat naik. Ia muncul di bawah pelan, dimuatkan ke paparan, dan bar alat menyatakan ia belum diskalakan lagi. Semua yang anda lukis berada di atasnya.

## Tetapkan skala

Pilih {{ui:Skala}}, klik dua titik pada gambar yang jarak sebenarnya anda tahu (dua hujung dinding pada pelan yang discan, dimensi yang dicetak pada lakaran), kemudian taip jaraknya dan tekan {{key:Enter}}. Gambar membesar atau mengecil di sekitar titik pertama yang anda klik. {{key:Esc}} membatalkan.

## Tampal kawasan yang disalin

Dalam MarkupCraft, {{ui:Salin kawasan}} menyalin sebahagian helaian PDF sebagai gambar. Kembali dalam BimCraft, dengan pelan tingkat dipaparkan, tekan {{key:Ctrl+V}} (atau {{ui:Tampal}} dalam menu {{ui:Sunting}}): kawasan itu jatuh pada pelan sebagai gambar, dipusatkan di tempat penunjuk berada (atau di tengah paparan). Apabila helaian mempunyai skala lukisan, ia masuk pada saiz sebenar, jadi dinding padanya sepanjang dinding anda. Tanpanya ia masuk pada saiz kertas dan {{ui:Skala}} bermula, jadi anda boleh klik dua titik dan taip jaraknya. Kawasan yang disalin sebagai overlay bermula pada kelegapan ketika ia disalin. Ia ialah satu langkah buat asal dan disimpan seperti mana-mana gambar lain.

Tampal mengambil apa sahaja yang anda salin terakhir: kawasan yang disalin, atau sesuatu yang anda salin dalam BimCraft. {{key:Ctrl+V}} juga menampal mana-mana gambar PNG, JPEG atau WebP lain dari papan keratan anda, diletakkan seperti {{ui:Selitkan gambar…}} dan belum diskalakan. Kawasan yang disalin diingati selama enam jam.

## Alih, pusing, pudar, kunci

{{ui:Alih}} mengambil titik asas pada gambar dan kemudian tempat ia perlu pergi. {{ui:Putar}} mengambil sudut dalam darjah, di sekitar pusat gambar. {{ui:Kelegapan}} memudarkannya supaya garisan anda menonjol. {{ui:Kunci}} menghalangnya daripada bergerak semasa anda melukis; gambar yang dikunci masih membenarkan anda menukar kelegapannya dan menyembunyikannya. Setiap perubahan ialah satu langkah buat asal.

## Beberapa gambar, beberapa tingkat

Gambar dimiliki oleh tingkat tempat ia diletakkan, dan dipaparkan pada pelan tingkat itu dan pelan siling. Klik gambar untuk mengerjakannya, atau pilih dalam senarai. {{ui:Sembunyikan}} mematikannya tanpa mengalihkannya; {{ui:Alih keluar}} (atau {{key:Delete}}) mengeluarkannya daripada model.

## Gambar dalam paparan 3D

Setiap gambar juga berdiri dalam paparan 3D sebagai satah rata: gambar pelan terletak pada tingkatnya, gambar satah tegak berdiri di atas garis keratannya. Ia dilukis di atas model tanpa menyembunyikannya, dan model menyembunyikan bahagian gambar yang berada di belakangnya. Gambar yang bertindih disusun mengikut jarak. Kelegapan, Sembunyikan, Kunci dan Alih keluar berfungsi sama, dan {{ui:Tunjuk dalam 3D}} mematikan semua satah dalam paparan 3D sahaja. Satu tingkat memegang paling banyak 8 gambar, untuk memastikan paparan kekal pantas.

## Gambar pada satah tegak

Di bawah {{ui:Letak pada}} pilih {{ui:Satah tegak (garis keratan)}}, kemudian {{ui:Selitkan gambar…}}. Klik dua hujung garisan pada pelan (hujung muka dinding melekat), atau pilih garis keratan bernama bagi tingkat dalam {{ui:Di atas garis keratan}} dan tiada klik diperlukan. Gambar berdiri pada tingkat di atas garisan itu, selebar garisan itu. Tetapkan {{ui:Lebar}}nya, tempatnya {{ui:Sepanjang garis}} dan {{ui:Ketinggian di atas aras}} dengan menaip; {{ui:Putar}} memutarkannya dalam satahnya sendiri. Gambar tegak tidak dilukis di bawah pelan; pelan menunjukkan garisannya semasa anda mengerjakannya. BimCraft tidak mempunyai tetingkap keratan 2D interaktif: keratan dan dongakan dilukis pada helaian, dan gambar belum dicetak dalam paparan helaian tersebut.

## Mencetak

{{ui:Paparan cetakan}} pada pelan menulis gambar tingkat ke dalam PDF di bawah lukisan, pada skalanya, putarannya dan kelegapannya, dipotong pada helaian; gambar yang disembunyikan kekal di luar. JPEG dimasukkan seperti sedia ada; gambar lain diturunkan kepada 200 dpi pada helaian dahulu.

## Disimpan bersama model

Bait gambar tidak ditulis ke dalam teks IFC. Model merujuk setiap satu mengikut nama (IfcDocumentReference seperti pictures/<id>.png) dan bait itu dibawa dalam bundel projek. Guna {{ui:Simpan sebagai bundel…}} (atau {{ui:Simpan sebagai IFC}} dan pilih ia): anda mendapat satu fail .ccbundle dengan model dan gambarnya; IFC kekal kecil dan suntingan kekal pantas. Buka .ccbundle dan gambarnya kembali.

Fail .ifc biasa tidak boleh memegang gambar tanpa menjadi besar. Apabila anda menyimpan satu, BimCraft menyatakan berapa gambar disimpan di luarnya dan menawarkan bundel, atau IFC biasa yang membenamkan gambar sehingga 512 KB dan meninggalkan yang lain. Fail .ifc biasa yang dibuka tanpa bundelnya menunjukkan gambar tersebut sebagai hilang dan Masalah menyenaraikannya; buka .ccbundle tempat ia disimpan. Fail yang disimpan oleh versi pertama, dengan gambar di dalam IFC, masih boleh dibuka, dan simpan bundel mengalihkan gambar mereka keluar. Gambar disimpan seperti sedia ada sehingga 6 MB; yang lebih besar diturunkan saiznya dahulu, dan anda diberitahu. Program lain membuka model dan mengabaikan gambar. Gambar yang belum anda skalakan disenaraikan dalam Masalah sebagai nota.

## Dalam helaian keratan dan dongakan

Gambar pada satah tegak (pilih {{ui:Menegak}} dalam panel gambar dan klik dua hujung garisan, atau letakkannya di atas garis keratan bernama) dicetak dalam paparan helaian yang memandang lurus kepadanya. Keratan menunjukkan gambar yang berdiri pada garis potongannya, atau yang diletakkan di atas garis keratan itu mengikut nama. Dongakan menunjukkan setiap gambar tegak yang satahnya menghadapnya. Gambar dilukis di bawah garisan paparan, pada skala paparan, dipotong kepada paparan, dan mengekalkan kelegapannya. Buka {{ui:Helaian…}} untuk melihatnya; PDF helaian membawanya sebagai imej. Dilihat dari belakang, gambar itu dicerminkan, seperti dalam 3D. Gambar yang disembunyikan ditinggalkan.
