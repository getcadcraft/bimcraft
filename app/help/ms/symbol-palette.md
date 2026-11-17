---
title: Palet simbol
summary: Cari simbol elektrik dan paip mengikut nama atau gambar, tandakan bintang pada yang anda gunakan, dan letakkannya pada pelan dengan satu klik.
keywords: palet simbol, butang bar simbol, dinding mengikut, simbol, simbol elektrik, simbol paip, pelan paip, mangkuk tandas, tandas, lavatori, singki, tab mandi, pancuran, saliran lantai, pembersihan, paip hos, pemanas air, injap, injap get, air sejuk, air panas, buangan, salur udara, gaya garisan, kegemaran, cari
from: 67f20bc0
---

## Apa yang anda akan lakukan

Buka satu panel yang menyenaraikan simbol elektrik dan simbol pelan paip dengan gambar dan namanya, cari yang anda mahu, dan letakkannya pada pelan. Tiada apa di sini memerlukan internet: simbol-simbol itu datang bersama aplikasi.

## Buka dan letakkan simbol

1. Buka model dan buka {{ui:Binaan}} › {{ui:Palet simbol}} (arahan yang ditaip: SYMBOLS). Butang yang sama terdapat dalam menu Alat bar Lukis dan sebagai **Simbol** dalam kumpulan Pustaka bar alat.
2. Pilih satu set: **Elektrik** atau **Paip**, atau **Semua set**. Taip dalam kotak carian untuk mempersempit senarai. Anda boleh mencari mengikut nama atau singkatan (WC, CW, HB).
3. Klik simbol. Pelan sudah bersedia untuk meletakkannya.
   - Simbol **elektrik** memulakan alat Elektrik dengan peranti itu dipilih, jadi semua yang ada dalam [Pelan elektrik](topic:electrical-plan) terpakai: klik pelan, satu langkah buat asal.
   - Simbol **paip** memulakan alat simbol pelan. Klik pelan. Peralatan yang terletak pada dinding (mangkuk tandas, lavatori, tab mandi, singki, paip hos) melekap pada muka dinding yang terdekat dengan belakangnya menghadap dinding; saliran, injap, pemanas air dan gaya garisan diletakkan di tempat anda klik.
4. Tekan {{key:R}} untuk memutarkan simbol 90 darjah ({{key:Shift}}+{{key:R}} memutarkannya arah sebaliknya), atau taip sudut dalam **Putaran** dalam bar pilihan. Tekan {{key:Esc}} untuk berhenti.

Peralatan atau paip hos yang melekap pada muka dinding mengingati dinding itu: apabila dinding bergerak, simbol bergerak bersamanya (muka yang sama, jarak yang sama sepanjang dinding) dalam langkah buat asal yang sama. Jika anda memadam dinding, simbol kekal di tempatnya dan Masalah menyenaraikan "kehilangan dindingnya"; alihkannya atau padamkannya. Simbol yang diletakkan jauh dari dinding tidak terikat pada apa-apa.

Setiap simbol yang anda letakkan ialah satu langkah buat asal. Simbol yang diletakkan ialah anotasi pelan dalam fail IFC dengan tagnya (WC1, WC2, ...). Pilihnya untuk menukar tag atau putarannya dalam **Sifat**, atau tekan {{key:Delete}}.

## Apa yang ada dalam set paip

Peralatan (mangkuk tandas, urinal, lavatori, tab mandi, pancuran, singki dapur, singki tunggal), saliran lantai, pembersihan lantai dan dinding, paip hos, hidran dinding, pemanas air, injap (get, glob, bola, semak, rama-rama, pengurang tekanan) dan gaya garisan dengan singkatannya: air sejuk (CW), air panas (HW), kembali air panas (HWR), buangan (W), salur udara (V), saliran ribut (SD) dan gas (G). Lukisan diskalakan mengikut pelan, jadi ia mengekalkan saiznya pada helaian yang dicetak. Gaya garisan ialah stub pendek untuk menunjukkan gaya itu pada pelan; lukiskan paip sebenar dengan alat paip.

:::note
Ini ialah konvensyen pelan paip yang lazim, dilukis oleh kami; tidak diperakui mengikut ISO 4067-1 atau ASME Y32.4. Ia dibandingkan dengan carta lukisan awam dan manual latihan (senarainya ada dalam nota sumber set itu, yang menyatakan di mana kami sepadan dan di mana kami berbeza), bukan disalin daripada mana-mana produk, dan ia percuma digunakan (Apache-2.0). Set lukisan berbeza, jadi semak carta lukisan projek anda sendiri. Ia ialah simbol pelan, bukan reka bentuk paip: ia tidak menentukan saiz paip atau menyemak kod.
:::

## Kegemaran dan papan kekunci

- Klik bintang pada simbol (atau tekan {{key:F}} padanya) untuk menyimpannya sebagai kegemaran. Kegemaran disenaraikan dahulu dan kekal dalam pelayar ini. **Hanya kegemaran** hanya menunjukkan yang itu.
- {{key:Down}} dari kotak carian memindahkan anda ke dalam simbol; kekunci anak panah, {{key:Home}} dan {{key:End}} bergerak antara simbol; {{key:Enter}} memilih yang sedang difokuskan; {{key:Esc}} menutup palet.
- Pada telefon, palet ialah helaian di bahagian bawah skrin; ia beralih ke tepi apabila anda memilih simbol supaya anda dapat melihat pelan. Buka semula daripada menu Binaan atau butang **Palet** dalam bar pilihan.

:::tip
Jika fail menggunakan set simbol yang tidak ada dalam binaan ini, pelan menunjukkan kotak di tempat simbol itu dan Masalah menyenaraikannya.
:::

## Pautkan elemen yang diletakkan kepada simbol

Lampu daripada Pustaka ialah elemen 3D, tetapi susun atur elektrik menunjukkannya sebagai simbolnya. Anda meletakkannya **sekali** dan memautkannya:

1. Pilih Binaan › **Pautan simbol** (atau taip SYMBOLLINK). Bahagian Pautan simbol dibuka dalam panel kiri.
2. Pilih elemen yang diletakkan dalam pelan atau dalam 3D. Bahagian itu menyatakan berapa banyak yang dipilih dan apa yang dipautkan kepadanya.
3. Pilih **Simbol** (daripada mana-mana set simbol: Elektrik, Paip) dan pilih **Pautkan**.

Elemen itu kekal satu elemen, dan setiap jadual mengiranya sekali:

- **3D** sentiasa menunjukkan badannya.
- **Pelan** menunjukkan bentuk pelannya, seperti sebelum ini.
- Pelan yang **Pandangan ini menunjukkan elemen berpautan sebagai** ditetapkan kepada **Simbol mereka (susun atur perkhidmatan)** menunjukkan simbol di tempatnya. Klik pada simbol memilih elemen. Pilihan itu disimpan untuk pandangan itu (pelan lantai aras, pelan siling, atau panggilan) dalam fail.

**Putar simbol 90°** memutarkan simbol berbanding elemennya. **Alih keluar pautan** membuang pautan; elemen kekal. Jadual **Simbol berpautan** menyenaraikan setiap elemen berpautan sekali dengan tingkatnya dan bilik tempat ia berada.

Belum dibina: pilihan pandangan pada helaian ialah pilihan pelan aras yang ditunjukkannya; peranti yang diletakkan dengan alat Elektrik ialah simbol dalam setiap pelan, seperti sebelum ini.
