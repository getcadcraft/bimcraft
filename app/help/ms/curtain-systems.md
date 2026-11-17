---
title: "Sistem tirai: dinding kaca pada grid, dengan mulion"
summary: Lukis sistem tirai seperti dinding atau letakkannya pada satu muka, kemudian tetapkan garisan grid dan mulionnya. Ia disimpan sebagai IfcCurtainWall dengan panel dan mulionnya.
keywords: sistem tirai, dinding tirai, grid tirai, mulion, kaca, storefront, dinding kaca, panel, panel kaca, mengikut muka, muka, jisim, garisan grid, jarak, profil, transom, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Apa yang akan anda lakukan

Buat dinding kaca daripada panel yang terletak antara mulion, tukar di mana garisan grid berada, dan pilih garisan mana yang membawa mulion.

## Langkah

1. Hidupkan **Lukis** dan buka menu **Bina** (dalam susun atur reben: tab Seni bina).
2. Pilih **Sistem tirai**. Dalam barisnya tetapkan bahagian atas (aras di atasnya, atau satu ketinggian), satu garisan setiap sekian jarak sepanjangnya, satu garisan setiap sekian jarak ke atasnya (biarkan kosong untuk tiada), sama ada ia mendapat mulion, dan profil mulion.
3. Klik di tempat ia bermula dan di tempat ia berakhir, seperti anda melukis dinding. Shift memastikannya segi empat sama.
4. Untuk menukar grid, pilih **Grid tirai** dan klik sistem:
   - **Tambah garisan**: garisan tegak diletakkan di tempat anda klik. Untuk garisan aras, taip ketinggiannya dalam **Pada** dahulu.
   - **Alih garisan**: klik garisan, kemudian klik tempat ia hendak pergi.
   - **Alih keluar garisan**: klik garisan.
   - **Tetapkan mengikut jarak**: taip jarak dalam **Setiap**, kemudian klik sistem.
5. Untuk menukar mulion, pilih **Mulion**, pilih perkara yang ia kenakan (garisan tegak yang anda klik, garisan aras pada ketinggian, sempadan, atau setiap garisan), pilih **Letak mulion** atau **Alih keluar mulion** dan profil, kemudian klik sistem.
6. Pilih satu sistem untuk melihat semuanya dalam **Sifat**: setiap garisan grid dengan tempatnya, tanda semak untuk mulionnya dan butang untuk mengalihkannya; jarak; sempadan; profil; ketebalan panel kaca.

## Mengikut muka

**Mengikut muka** membuat sistem tirai pada muka rata yang anda klik dalam paparan 3D. Barisnya mempunyai tetapan grid dan mulion yang sama.

- Ia berfungsi pada mana-mana muka rata bagi mana-mana elemen yang dipaparkan oleh paparan 3D: jisim, dinding, lantai, satah bumbung, tiang, item yang diletakkan. Muka itu boleh tegak, condong atau mendatar.
- Sistem mengambil garis luar muka. Gable atau bentuk ganjil yang lain memotong panel dan mulion mengikut bentuk itu.
- Ia boleh membuat **dinding** sebaliknya, sepanjang tapak muka tegak dan setinggi muka itu. Dinding di sini sentiasa berdiri tegak, maka muka condong atau mendatar tidak boleh menerimanya.
- Ia tidak membuat bumbung. Bumbung dalam BimCraft dikira daripada garis luar aras dan kecerunan, bukan daripada satu muka.
- Muka melengkung ialah banyak muka rata kecil: satu klik mengambil satu daripadanya.
- Muka dengan bukaan: sistem meliputi garis luar muka sahaja.

## Cara ia diukur

- **Luas kasar** ialah garis luar sistem.
- **Luas kaca** ialah panel seperti yang dibuat: setiap panel kehilangan separuh lebar mulion di satu sisi dengan mulion grid, dan lebar penuh di mulion sempadan.
- Mulion tegak berjalan dari sempadan ke sempadan. Mulion aras berhenti di setiap mulion tegak dan di sempadan. Mulion sempadan terletak di dalam garis luar; apabila dua bertemu, yang lebih tegak berjalan terus. Sambungan dipotong lurus, bukan serong.
- **Jadual** mempunyai senarai **Sistem tirai** dengan nombor ini apabila model mempunyainya.

## Dalam fail IFC

Satu IfcCurtainWall pada aras, terdiri daripada satu IfcPlate (panel tirai) bagi setiap panel dan satu IfcMember (mulion) bagi setiap bahagian mulion, setiap satu dengan bentuk, bahan dan kuantiti asasnya sendiri.

## Perkara yang perlu diketahui

- Sebarang saiz dibuat mengikut permintaan anda. Hanya garis luar tanpa luas yang ditolak, kerana tiada apa untuk dibuat.
- Sistem yang dilukis seperti dinding mengekalkan ketinggian yang dilukis dengannya. Jika anda mengalihkan aras kemudian, tetapkan ketinggiannya semula dalam Sifat.
- Alat Alih belum lagi memindahkan sistem tirai. Padam dan lukis semula, atau tukar grid di tempatnya.
- {{ui:Buat asal}} membatalkan setiap langkah: keseluruhan sistem, satu perubahan grid, satu perubahan mulion.
