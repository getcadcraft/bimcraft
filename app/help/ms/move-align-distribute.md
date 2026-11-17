---
title: Alih, salin, jajar dan agihkan elemen bangunan
summary: Alihkan dinding, lantai, tiang dan item yang diletakkan mengikut titik asas dan titik kedua atau jarak yang ditaip, salin semasa anda pergi, dan jajarkan atau susun dengan jarak sama rata, pada pelan atau daripada pilihan dalam 3D.
keywords: alih, salin, jajar, agihkan, jarak, ofset, titik asas, sesaran, dinding, tiang, lantai, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Apa yang anda akan lakukan

Alihkan dinding, lantai, tiang atau item pustaka yang diletakkan ke tempat baharu, buat salinannya, atau jajarkan beberapa item, tanpa melukis semula.

## Nama dan kekunci

Arahannya dipanggil {{ui:Move}}, {{ui:Align}} dan {{ui:Distribute}}, dan anda boleh menaip `MOVE`, `ALIGN` dan `DISTRIBUTE` pada baris arahan, seperti dalam aplikasi lukisan CadCraft. Satu perbezaan: dalam BimCraft {{key:M}} ialah Ukur, jadi Alih mempunyai kekunci sendiri, {{key:Shift+M}}. Alat-alat itu terdapat dalam menu {{ui:Build}}.

## Alih

1. Pilih apa yang hendak dialihkan, pada pelan atau dalam pandangan 3D. Dinding, lantai, tiang dan item pustaka yang diletakkan boleh dipilih sekaligus.
2. Tekan {{key:Shift+M}} atau pilih {{ui:Move}}.
3. Klik titik asas, kemudian titik kedua. Atau, selepas titik asas, taip jarak dan tekan {{key:Enter}}: ia bergerak mengikut arah penunjuk dari titik asas. Anda juga boleh menaip `dx,dy` (atau `@dx,dy`), atau `panjang<sudut`.
4. Tekan {{key:C}} untuk menghidupkan {{ui:Copy}}: setiap pergerakan kemudian membuat salinan dan kekal sedia untuk seterusnya. Tekan {{key:Esc}} untuk berhenti.

Kedua-dua titik juga boleh diklik dalam pandangan 3D: dengan Alih dihidupkan, penuding bertemu ketinggian lantai aras, jadi klik di sana ialah titik pada pelan. Tahan {{key:Shift}} semasa klik untuk memilih elemen lain sebaliknya. Gunakan pandangan Pelan, {{ui:Top}}, {{ui:Front}} atau {{ui:Side}} mengikut kesukaan anda: titik sentiasa berada pada aras itu.

Dinding membawa pintu dan tingkapnya bersama. Lantai yang dilukis membawa bukaannya. Bilik, lantai dan siling yang mengikut dinding dikemas kini. Dinding yang bersambung dengan dinding yang dialihkan kekal di tempatnya.

Setiap pergerakan ialah satu perubahan: satu {{key:Mod+Z}} membatalkannya, dan ia dihantar kepada semua orang dalam sesi Live TeamWork. Item pustaka yang diletakkan tidak boleh disalin dengan cara ini; gunakan {{ui:Edit}} › {{ui:Copy}} dan {{ui:Paste}}.

## Jajar

Pilih dua atau lebih elemen, pilih {{ui:Align}}, kemudian sisi (kiri, tengah, kanan, atas, pertengahan atau bawah) dan apa untuk dijajarkan: set yang dipilih, yang pertama dipilih, yang terakhir dipilih, atau titik yang anda klik. Tekan {{ui:Align}} pada bar.

## Agih

Pilih tiga atau lebih elemen, pilih {{ui:Distribute}}, kemudian arah (merentas atau ke bawah) dan jarak: jurang sama antara mereka atau pusat yang sama. Dua di hujung kekal di tempatnya.

Dinding yang dialihkan oleh Jajar atau Agih mengekalkan sambungannya, seperti dengan Alih: dinding yang bersambung dengan dinding yang dialihkan meluncur hujungnya sepanjang garisnya sendiri untuk kekal bersambung, dinding sekatan yang bertemu dengannya turut bergerak bersamanya, dan dua dinding bersambung yang kedua-duanya dialihkan mengekalkan penjurunya di tempat garisan baharunya bertemu. Bilik kekal tertutup. Ia ialah satu langkah dalam **Perubahan**.
