---
title: Pindahkan, salin, sejajarkan, dan distribusikan elemen bangunan
summary: Pindahkan dinding, lantai, kolom, dan item yang ditempatkan dengan titik dasar dan titik kedua atau jarak yang diketik, salin sambil bekerja, dan sejajarkan atau atur jaraknya secara merata, di denah atau dari pilihan di 3D.
keywords: pindahkan, salin, sejajarkan, distribusikan, jarak, offset, titik dasar, perpindahan, dinding, kolom, lantai, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Yang akan Anda lakukan

Menggeser dinding, lantai, kolom, atau item pustaka yang ditempatkan ke tempat baru, membuat salinannya, atau menyejajarkan beberapa elemen, tanpa menggambarnya ulang.

## Nama dan tombol

Perintahnya disebut {{ui:Move}}, {{ui:Align}}, dan {{ui:Distribute}}, dan Anda dapat mengetik `MOVE`, `ALIGN`, dan `DISTRIBUTE` di baris perintah, seperti di aplikasi drafting CadCraft. Satu perbedaannya: di BimCraft {{key:M}} adalah Ukur, sehingga Pindahkan memiliki tombolnya sendiri, {{key:Shift+M}}. Alat-alatnya ada di menu {{ui:Build}}.

## Pindahkan

1. Pilih apa yang akan dipindahkan, di denah atau di tampilan 3D. Dinding, lantai, kolom, dan item pustaka yang ditempatkan dapat dipilih sekaligus.
2. Tekan {{key:Shift+M}} atau pilih {{ui:Move}}.
3. Klik titik dasar, lalu titik kedua. Atau, setelah titik dasar, ketik jarak dan tekan {{key:Enter}}: benda bergerak ke arah yang ditunjuk penunjuk dari titik dasar. Anda juga dapat mengetik `dx,dy` (atau `@dx,dy`), atau `panjang<sudut`.
4. Tekan {{key:C}} untuk mengaktifkan {{ui:Copy}}: setiap perpindahan kemudian membuat salinan dan tetap siap untuk berikutnya. Tekan {{key:Esc}} untuk berhenti.

Kedua titik juga dapat diklik di tampilan 3D: dengan Pindahkan aktif, penunjuk bertemu dengan tinggi lantai level, sehingga klik di sana menjadi titik pada denah. Tahan {{key:Shift}} sambil mengklik untuk memilih elemen lain sebagai gantinya. Gunakan denah, Atas, Depan, atau Samping sesuai keinginan: titik-titik selalu berada pada level itu.

Dinding ikut membawa pintu dan jendelanya. Lantai yang digambar ikut membawa bukaannya. Ruang, lantai, dan langit-langit yang mengikuti dinding diperbarui. Dinding yang tersambung ke dinding yang dipindahkan tetap di tempatnya.

Setiap perpindahan adalah satu perubahan: satu {{key:Mod+Z}} mengurungkannya, dan perubahan itu diteruskan ke semua orang dalam sesi Live TeamWork. Item pustaka yang ditempatkan tidak dapat disalin dengan cara ini; gunakan {{ui:Edit}} › {{ui:Copy}} dan {{ui:Paste}}.

## Sejajarkan

Pilih dua elemen atau lebih, pilih {{ui:Align}}, lalu sisi (kiri, tengah, kanan, atas, tengah, atau bawah) dan terhadap apa: kumpulan yang dipilih, elemen pertama yang dipilih, elemen terakhir yang dipilih, atau titik yang Anda klik. Tekan {{ui:Align}} di bilah.

## Distribusikan

Pilih tiga elemen atau lebih, pilih {{ui:Distribute}}, lalu arah (melintang atau ke bawah) dan jaraknya: celah yang sama di antara elemen, atau pusat yang sama. Dua elemen di ujung tetap di tempatnya.

Dinding yang disejajarkan atau didistribusikan oleh Sejajarkan dan Distribusikan mempertahankan sambungannya, seperti pada Pindahkan: dinding yang tersambung ke dinding yang dipindahkan meluncur ujungnya sepanjang garisnya sendiri agar tetap tersambung, dinding sekat yang menempel padanya ikut bergerak, dan dua dinding tersambung yang keduanya dipindahkan mempertahankan sudutnya di tempat garis barunya bertemu. Ruang tetap tertutup. Ini adalah satu langkah di **Perubahan**.
