---
title: Tukar dinding, pintu atau tingkap
summary: Klik dinding, pintu atau tingkap yang dilukis dan tukar jenis, saiz, ketinggian atau tempatnya dalam Sifat, atau seret dalam pelan; setiap perubahan ialah satu langkah buat asal.
keywords: segikan, segi, 90, sudut tepat, senget, sudut, ortho, saiz bilik, muka dalam, muka luar, ukur dari, jarak alih, jarak ditaip, melengkung, lengkung, ketinggian lengkung, jejari, garis lokasi, penjajaran, tukar, sunting, sifat, jenis dinding, ketebalan, panjang, ketinggian, ofset asas, atas, aras, balik, luar, saiz pintu, saiz tingkap, ambang, jarak, alih, grip, seret, tukar jenis, beberapa
from: 63052d5d
---

## Apa yang anda akan lakukan

Tukar apa yang anda lukis: pilih dinding, pintu atau tingkap, kemudian taip nombor baharu dalam **Sifat** atau seretnya dalam pelan. Pelan dan paparan 3D mengikut, sudut bercantum semula, dan pintu serta tingkap kekal dalam dinding mereka.

## Tukar dinding

1. Dengan {{ui:Lukis}} dihidupkan dan {{ui:Pilih}} dihidupkan, klik dinding dalam pelan (atau dalam paparan 3D).
2. **Sifat** menunjukkan kotak dengan nombor dinding. Tukar satu dan tekan {{key:Enter}}:
   - **Jenis dinding**: jenis permulaan yang lain. Ketebalan dan lapisan berubah mengikutnya.
   - **Ketebalan**: sebarang ketebalan. Jenis itu mengekalkan lapisan lainnya dan lapisan utamanya (batang kayu atau blok) menanggung perbezaannya, contohnya "Exterior 2×6, 200 mm".
   - **Ukur dari**: **Garis tengah**, **Muka dalam** atau **Muka luar**. **Panjang** dan **Saiz bilik** dibaca dan ditetapkan daripadanya. Muka luar ialah apa yang ditunjukkan oleh dimensi pelan.
   - **Panjang**: hujung dinding bergerak sepanjang garisnya. Dinding yang bercantum pada hujung itu bergerak tegak lurus kepada dirinya dan mengekalkan sudutnya.
   - **Saiz bilik** (apabila ada dinding selari merentasi bilik): taip saiz yang anda mahu. Dinding ini bergerak tegak lurus dan dinding yang bercantum meregang untuk mengikut.
   - **Alih tegak lurus**: taip sejauh mana dinding hendak dialihkan tegak lurus kepada dirinya: nombor biasa mengalihkannya keluar, nombor negatif mengalihkannya masuk.
   - **Sudut kepada dinding bercantum**: sudut kepada dinding yang bercantum di permulaannya. Taip 90 untuk menetapkannya tegak lurus. Dinding yang tidak bercantum dengan apa-apa menunjukkan **Arah**, dalam darjah dari timur.
   - {{ui:Segikan}}: menjadikan dinding yang bercantum dengan dinding ini kembali bersudut tegak, sepanjang arah kebanyakan panjangnya. Ia berfungsi pada seluruh bilik bersambung atau susun atur, yang mana satu dinding yang anda pilih. Dinding yang lebih 10 darjah dari sudut tegak kekal seperti sedia ada, jadi yang ditetapkan pada 45 darjah adalah selamat. Satu {{ui:Buat asal}} menarik balik semuanya.
   - **Ketinggian dinding**: **Sehingga aras di atas** mengikut aras itu; **Sehingga Aras 3** (dan mana-mana aras lebih tinggi) membuat dinding yang merentasi aras-aras di antaranya; menaip ketinggian kemudian menetapkan sejauh mana di bawah atau di atas aras itu bahagian atasnya. **Ketinggian tetap** mengekalkan nombor yang anda taip. **Merentasi** menyenaraikan aras yang dilalui dinding sedemikian: ia dilukis lebih cerah dalam pelan mereka, bilik di sana tertutup terhadapnya, dan pintu serta tingkap boleh diletakkan di dalamnya daripada pelan tersebut. Ia dialih dan dibentuk semula pada aras tempat ia bermula.
   - **Ofset asas**: sejauh mana di atas aras dinding itu bermula. Bahagian atasnya kekal di tempatnya.
   - **Luar**: {{ui:Balik}} meletakkan lapisan luar pada muka yang lain.
   - **Garis lokasi**: **Garis tengah**, **Muka luar**, **Muka dalam**, **Muka kiri** atau **Muka kanan**. Menukarnya tidak mengalihkan apa-apa. Kemudian, apabila dinding menjadi lebih tebal (mengikut jenis atau **Ketebalan**) atau luarnya dibalik, garis lokasi kekal di tempatnya dan dinding membesar atau dibalik di sekelilingnya. Dinding lurus yang bertemu dengannya pada sudut akan mengikut, jadi sudut itu kekal tertutup. Garis lokasi dinding yang dipilih dilukis putus-putus dalam pelan. Pilih beberapa dinding untuk menetapkannya bagi semua.
   - **Ketinggian lengkung** (dinding melengkung): sejauh mana tengahnya melengkung dari garis lurus. 0 menjadikannya lurus; nilai negatif melengkungkannya ke sisi lain. Jejari ditunjukkan di sebelahnya.
3. Setiap perubahan ialah satu langkah dalam **Perubahan**; {{ui:Buat asal}} menariknya balik.

## Seret dinding dalam pelan

Apabila satu dinding dipilih, ia menunjukkan tiga grip: segi empat sama di setiap hujung dan bulatan di tengah.

- Seret hujung untuk memanjangkan dinding, memendekkannya atau memutarnya. Ia melekat seperti alat Dinding, dan memaut tegak lurus kepada dinding yang bercantum di hujung satu lagi apabila anda berada dalam 3 darjah; {{key:Shift}} mengekalkannya pada paksi pelan.
- Dinding yang bercantum pada hujung yang anda seret mengekalkan sudutnya: hujung mereka menggelongsor sepanjang garisnya sendiri untuk bertemu dengan garis baharu dinding, jadi tiada apa menjadi condong. Tahan {{key:Mod}} untuk seretan bebas (hujung dinding bercantum datang bersama anda dan dinding itu berpusing), atau {{key:Alt}} untuk memutuskan sambungan pada dinding ini.
- Seret tengah untuk mengalihkan keseluruhan dinding tegak lurus kepada dirinya, mengikut arah mana pun anda seret. Sudutnya menggelongsor sepanjang dinding bercantum, jadi dinding itu mengekalkan sudutnya.
- Tahan {{key:Mod}} semasa menyeret tengah untuk alih bebas, apabila anda memang mahu memecahkan sudut. {{ui:Segikan}} membawanya kembali.
- Semasa grip dipegang, taip jarak dan tekan {{key:Enter}} (atau lepaskan): dinding bergerak tepat sejauh itu, mengikut cara anda menyeret. {{key:Esc}} membatalkan alihan.
- Dinding melengkung yang dipilih menunjukkan grip di hujungnya dan grip bulat di tengah lengkungnya. Seret grip bulat untuk melengkungkannya.
- Pintu dan tingkap kekal dalam dinding. Dinding yang terlalu pendek untuk menampungnya ditolak dengan "Ia tidak muat dalam dinding itu."

## Tukar pintu atau tingkap

1. Klik pintu atau tingkap dalam pelan.
2. Dalam **Sifat**: **Jenis** (pintu atau tingkap lain dari jenis yang sama), **Lebar**, **Ketinggian**, **Ambang** (tingkap), **Dari permulaan** dan **Dari hujung** (jarak dari setiap hujung muka dinding ke tepinya), **Engsel** {{ui:Balik}} (pintu satu daun dan tingkap engsel; pintu gelangsar, poket, kandang dan lipat sebaliknya menyatakan **Dibuka ke**; tingkap tetap, tergantung dan gambar serta pintu berganda tiada), dan **Berayun ke** (pintu) atau **Sisi bingkai** (tingkap) {{ui:Balik}}.
3. Atau seret sepanjang dindingnya, atau ke dinding lain: lihat [Pintu dan tingkap](topic:doors-and-windows).

## Tukar beberapa sekaligus

Pilih beberapa dinding (atau beberapa pintu, atau beberapa tingkap) dengan {{key:Shift}}+klik atau {{key:Mod}}+klik. **Sifat** menawarkan apa yang mereka kongsi: **Tukar jenis…**, ketinggian, saiz. Satu perubahan menetapkan semuanya, dan satu {{ui:Buat asal}} menarik balik semuanya.

## Perkara yang perlu diketahui

- Nombor ditunjukkan dalam {{ui:Unit}} yang dipilih pada bar alat.
- Dinding, pintu dan tingkap daripada program lain menunjukkan data IFC mereka dalam **Sifat** seperti sebelum ini, tanpa kotak ini.
