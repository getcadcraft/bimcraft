---
title: Padam, potong, salin dan tampal elemen bangunan
summary: Pilih dinding, pintu, perabot atau apa-apa sahaja yang lain dalam model IFC; padamkannya, potongnya, atau salin dan tampalkannya di tempat yang anda klik, di tempat yang sama, atau pada tingkat lain.
keywords: padam, alih keluar, padam, potong, salin, tampal, pendua, alih, pilih semua, pilih semua, elemen bangunan, dinding, pintu, tingkap, tangga, bukaan, buat asal
from: d9eec37f
---

## Apa yang anda akan lakukan

Tukar apa yang ada dalam model IFC: alih keluar elemen yang tidak diingini, salin dinding atau sekumpulan perabot ke tempat lain, atau alihkan elemen dengan memotong dan menampalnya. Setiap perubahan ialah satu langkah yang boleh anda buat asal, dan menyimpan akan menulis fail baharu, jadi fail asal anda kekal seperti sediakala.

## Langkah

1. Buka model IFC. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model).
2. Pilih apa yang hendak diubah: klik elemen, tahan {{key:Mod}} atau {{key:Shift}} dan klik untuk memilih lebih banyak, atau tekan {{key:Mod+A}} ({{ui:Lagi}}, {{ui:Pilih semua}}) untuk memilih setiap elemen yang dipaparkan.
3. Kemudian:
   - **Padam:** tekan {{key:Delete}}, atau {{ui:Lagi}}, {{ui:Padam}}.
   - **Salin:** tekan {{key:Mod+C}} atau klik {{ui:Salin}}.
   - **Potong:** tekan {{key:Mod+X}}, atau {{ui:Lagi}}, {{ui:Potong}}. Elemen dialih keluar, dan anda boleh menampalnya.
4. Untuk menampal, tekan {{key:Mod+V}} atau klik {{ui:Tampal}}. Kotak lut sinar sebesar apa yang anda salin akan mengikut penunjuk pada tingkat yang dipilih dalam bar penempatan. Tekan {{key:R}} untuk memusingkannya 90°, kemudian klik di tempat ia hendak diletakkan. Setiap klik meletakkan satu salinan lagi; tekan {{key:Esc}} untuk berhenti.
5. Atau tekan {{key:Mod+Shift+V}} ({{ui:Lagi}}, {{ui:Tampal di tempat yang sama}}): selepas potong, elemen kembali tepat ke tempat asalnya; selepas salin, salinan diletakkan betul-betul di sebelah yang asal.
6. Klik {{ui:Simpan sebagai IFC}} untuk muat turun model yang telah disunting.

## Apa yang turut dibawa bersama elemen

- **Bahagian:** tangga membawa anak tangganya, dinding tirai membawa panel-panelnya, apa-apa yang diperbuat daripada bahagian membawa kesemuanya.
- **Bukaan:** dinding membawa bukaan yang dipotong padanya. Memadam pintu atau tingkap juga membawa bukaan yang diisinya, supaya dinding tertutup, sama seperti dalam program penciptaan. Memadam dinding yang dilukis dalam BimCraft turut memadam pintu dan tingkapnya serta menyambung semula dinding yang tinggal. Memadam dinding daripada fail yang dibuat di tempat lain meninggalkan pintu dan tingkapnya di tempat asal.
- **Data:** salinan mempunyai jenis, bahan, set sifat dan kuantiti yang sama dengan yang asal, serta GlobalId baharu. Mengubah nilai pada salinan kemudian tidak menjejaskan yang asal.
- **Item pustaka** mengekalkan data pustakanya; salinan mendapat nombor item kosong yang seterusnya, dan item yang dipotong lalu ditampal semula mengekalkan nombornya sendiri.

## Apa yang sepatutnya anda lihat

- "Dipadam: …" atau "Ditampal: …" dalam senarai {{ui:Perubahan}}. {{key:Mod+Z}} membatalkan perubahan terakhir; {{key:Mod+Y}} mengembalikannya semula.
- Selepas memadam, baris status memberitahu berapa banyak bahagian dan bukaan yang turut dipadam.
- Elemen yang ditampal dipilih, jadi anda boleh menampal di tempat yang sama sekali lagi untuk membuat baris, atau memadamkannya.

## Perkara yang perlu diketahui

- Salinan menggunakan geometri yang sama dengan yang asal (IFC membolehkan elemen berkongsi geometri), jadi fail hanya bertambah sedikit.
- Elemen bangunan ditampal ke dalam model tempat ia disalin, dalam tab yang sama. Untuk menggunakan item pustaka yang diletakkan dalam model lain, salin satu item pada satu masa: lihat [Salin, tampal dan pendua item pustaka](topic:copy-paste).
- Tingkat, ruang, bangunan dan tapak tidak boleh dipadam atau disalin. Pilih elemen di dalamnya sebaliknya. Bilik yang dilukis dalam BimCraft terhasil daripada dinding di sekelilingnya: padamkan satu dinding untuk menyambungkan dua bilik.
- Dinding, pintu dan tingkap yang dilukis dengan alat dinding, pintu dan tingkap BimCraft sendiri tidak boleh disalin, dipotong atau didua-gandakan lagi; baris status akan memberitahu. Lukis semula. Padam tetap berfungsi.
- Salin juga meletakkan nama dan sifat apa yang anda salin pada papan keratan sebagai teks, untuk ditampal ke dalam hamparan atau e-mel.

## Kesilapan biasa

- **{{ui:Padam}} berwarna kelabu.** Tiada yang dipilih, atau hanya tingkat atau ruang yang dipilih. Halakan penunjuk padanya untuk membaca sebabnya.
- **Tampal memberitahu elemen datang daripada model lain.** Anda telah membuka model lain selepas menyalinnya. Buka semula model pertama dan salin di sana.
- **Salinan yang ditampal berada di tingkat lain.** {{ui:Tingkat}} dalam bar penempatan menentukan tempatnya; pilih tingkat sebelum anda klik.

## Berkaitan

- [Sembunyi, asingkan dan lihat tembus elemen](topic:hide-and-isolate)
- [Kekunci dan tetikus](topic:keyboard#edit)
