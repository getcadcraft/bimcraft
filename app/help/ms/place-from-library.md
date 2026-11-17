---
title: Letak peralatan dan perabot daripada pustaka
summary: Cari item dalam Pustaka, fail atau lukisan yang dibuka, letakkannya pada tingkat model IFC dengan pratonton hantu, pusingkannya, lekapkannya pada dinding, dan simpan.
keywords: alih, putar, pusing, seret, pustaka, librarycraft, letak, selit, peralatan, perabot, blok, keluarga, item, katalog, kandungan, kcl, csv, gltf, obj, rfa, dwg, jenis ifc
from: 3dad5d4b
---

## Apa yang anda akan lakukan

Letakkan item pustaka ke dalam model IFC: sinki, meja kerja, kerusi. BimCraft menulisnya sebagai elemen IFC yang betul dengan jenis, supaya setiap salinan item yang sama berkongsi satu set geometri, dan datanya, nombor item serta lesennya dibawa bersama.

## Langkah

1. Buka model IFC.
2. Klik tab {{ui:Pustaka}} di sebelah {{ui:Sifat}} di sebelah kanan, atau {{ui:Pustaka}} dalam bar alat di atas model.
3. Pilih sumber:
   - **Simbol terbina dalam**: simbol pelan paip generik yang disertakan dengan BimCraft di bawah Apache-2.0, tersedia luar talian. Semak dimensinya sebelum pembinaan. Untuk simbol pelan elektrik dan peranti elektrik IFC, gunakan **Binaan › Elektrik**.
   - **Pustaka**: pustaka CadCraft di laman ini. Item awam tidak memerlukan log masuk.
   - **Fail ini**: blok bagi lukisan DWG atau DXF yang dibuka. Blok dinamik dengan keadaan keterlihatan ditawarkan sekali bagi setiap keadaan, dinamakan "Sinki: Dua besen", setiap satu dilukis hanya dengan objek keadaan itu.
   - **Fail…**: fail DWG, DXF, IFC, glTF/GLB, OBJ, RFA atau CSV pada komputer anda. Ia dibaca dalam tab ini; tiada apa yang dimuat naik.
   - **Suapan lain**: pustaka lain yang menggunakan format suapan yang sama. Tambah alamatnya sekali; ia disimpan dalam pelayar ini.
4. Cari atau pilih kategori, kemudian klik kad. Kad menunjukkan pratonton pelan, nama, pengilang dan model, lesen dan versi.
5. Klik {{ui:Letakkan dalam pelan}} (dalam paparan Pelan) atau {{ui:Letakkan dalam model}} (dalam paparan 3D). Dalam {{ui:Pisah}}, di mana pelan dan paparan 3D kedua-duanya ditunjukkan, butang itu ialah butang pisah: tindakan utamanya ialah {{ui:Letakkan dalam pelan}}, dan anak panah di hujung kanannya membuka menu dengan {{ui:Letakkan dalam model}}. Atau seret kad, atau gambar dalam butiran item, ke pelan atau paparan 3D: item diletakkan di tempat anda melepaskannya. Dengan pen atau jari, tekan dan tahan kad seketika, kemudian seret.
6. Pilih tingkat dalam bar peletakan. Dalam paparan 3D, tingkat di atasnya disembunyikan semasa anda meletakkan dan paparan beralih ke pandangan atas; dalam pelan, pelan sudah menunjukkan tingkat itu. Memilih {{ui:Letakkan dalam model}} daripada pelan sahaja membawa paparan 3D naik di sebelahnya.
7. Gerakkan penuding ke atas model: kotak lut sinar menunjukkan tempat item itu pergi.
8. Tekan {{key:R}} untuk memusingkannya 90°. Tekan {{key:Tab}} (atau {{ui:Lekap dinding}}) untuk meletakkan belakangnya menghadap dinding terdekat, menghadap bilik.
9. Klik untuk meletakkannya. Atau taip kedudukan dalam **X, Y (mm)**, contohnya `1200, 3400`, dan tekan {{key:Enter}}.

Lampu atau apa-apa yang digantung dari atas: tetapkan **Pasang** kepada **Pada siling**. Bahagian atas item kemudian berada di bawah siling di atas tempat itu (atau pada ketinggian aras jika tiada siling). Dengan pelan siling pada paparan pelan, **Pasang** bermula pada **Pada siling**.

10. Jawab satu soalan: **nombor item** (nombor kosong seterusnya diisi), kuantiti dan nota. Tekan {{key:Enter}}.
11. Letakkan lagi, atau tekan {{key:Esc}} untuk berhenti.
12. Klik {{ui:Simpan sebagai IFC}} untuk muat turun salinan yang disunting.

## Pelan atau model

Butang letak Pustaka mengikut paparan yang anda berada, dan berubah sebaik sahaja anda menukar paparan (butang {{ui:Pelan}}, {{ui:Pisah}} dan {{ui:3D}}, kekunci papan kekunci, membuka fail). Pelan menunjukkan satu butang, {{ui:Letakkan dalam pelan}}; 3D menunjukkan satu butang, {{ui:Letakkan dalam model}}; Pisah menunjukkan butang pisah, dengan {{ui:Letakkan dalam pelan}} sebagai tindakan utama dan {{ui:Letakkan dalam model}} dalam menunya. Kedua-dua cara menggunakan bar peletakan yang sama dan menulis elemen IFC yang sama: penuding berfungsi dalam paparan pelan untuk satu dan dalam paparan 3D untuk yang satu lagi. Tekan {{key:Esc}} pada bila-bila masa untuk berhenti.

Menyeret kad tidak mempunyai kekunci sendiri: butang pisah, atau butang biasa, melakukan perkara yang sama dengan papan kekunci.

## Alih atau pusingkan item yang diletakkan

Dalam {{ui:Lukis}}, pilih item dalam pelan. Pegangan segi empat sama dipaparkan pada titik selitannya dan pegangan bulat di sebelahnya.

- Seret item, atau pegangan segi empat sama, untuk mengalihkannya. Ia melekap seperti alat Dinding (hujung dan muka dinding); {{key:Shift}} mengekalkannya tegak lurus dengan kedudukan asalnya.
- Seret pegangan bulat untuk memusingkannya dalam langkah 15°. Tahan {{key:Shift}} untuk langkah 1°.
- Tekan {{key:R}} untuk memusingkannya 90°.
- Dalam **Sifat** (juga dalam paparan 3D), taip **X**, **Y** dan **Putaran (°)**, atau klik **Pusing 90°**.

Setiap pergerakan ialah satu langkah buat asal dan dihantar dalam Live TeamWork. Item itu mengekalkan nombor itemnya, datanya dalam pustaka dan ketinggiannya di atas aras. Belum dibina: menyeretnya dalam paparan 3D.

## Apa yang sepatutnya anda lihat

- Item dalam model, dipilih, dengan sifatnya di sebelah kanan: kotak **Item pustaka** dengan lesen dan atribusinya, serta set `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` dan, untuk item daripada lukisan bertag, `CadCraft_SourceAttributes`.
- "Diletakkan: *item* (item *n*)" dalam senarai perubahan. {{key:Mod+Z}} membatalkannya.
- Baris status: "Diletakkan *item* sebagai item *n*."

## Perkara yang perlu diketahui

- Sesetengah item datang dalam beberapa saiz atau pilihan: kad itu kemudiannya mempunyai pilihan **Varian**, dan yang anda pilih ialah yang diletakkan. Lihat [Letak dan tukar item pustaka yang mempunyai varian](topic:library-variants).
- Item tanpa badan 3D (simbol 2D) diletakkan dengan kotak pengganti; anda memberikan ketinggiannya apabila diminta.
- Lebih banyak yang sama: pilih item yang diletakkan dan gunakan {{ui:Salin}} dan {{ui:Tampal}}, atau {{key:Mod+D}}. Lihat [Salin, tampal dan pendua item pustaka](topic:copy-paste).
- Untuk memulakan setiap peletakan dengan lekap dinding dihidupkan, hidupkan **Mula dengan lekap dinding dihidupkan** dalam [Tetapan BimCraft](topic:settings).
- Panjang ditukar kepada unit model itu sendiri, apa pun unitnya.
- **Entourage** (pokok, semak, orang, kereta) juga ada dalam pustaka: cari "tree", "person" atau "car". Ini dilukis oleh CadCraft (CC0) dan mengekalkan warnanya apabila diletakkan (batang coklat, daun hijau, tingkap kereta lut sinar), dalam BimCraft dan dalam program BIM lain. Ia ditunjukkan dalam [gambar render](topic:render).
- Dalam fail IFC2X3, badan ditulis sebagai pepejal berfasetkan; dalam IFC4 sebagai set muka bersegi tiga. Kedua-duanya dibuka dalam alat IFC lain.
- Lukisan (DWG atau DXF) tidak boleh disimpan di sini, jadi item hanya diletakkan ke dalam model IFC. Gunakan **Fail ini** pada lukisan untuk melihat apa yang akan menjadi blok-bloknya.

## Item dalam bahasa anda

Item boleh membawa namanya, penerangan dan jenisnya dalam bahasa lain. Apabila ia mempunyainya dalam bahasa yang BimCraft ditetapkan (Tetapan › Umum › Bahasa), halaman item menunjukkan yang itu, dengan nama yang diberikan pengilangnya di bawahnya, dan **Letak** menulis nama dalam bahasa anda ke dalam model, supaya jadual {{ui:Peralatan}} menyenaraikannya begitu. Item itu kekal sebagai item yang sama: semakan kemas kini dan penukaran dibuat mengikut item itu sendiri, bukan mengikut namanya. Item tanpa terjemahan mengekalkan perkataannya sendiri.

## Kesilapan biasa

- **Butang letak tiada.** Tiada model IFC dibuka. Buka satu dahulu.
- **Hantu tidak mengikut penuding.** Penuding berada di luar kawasan model, atau satah tingkat tidak kelihatan dalam paparan. Klik {{ui:Atas}}.
- **{{ui:Lekap dinding}} memberitahu tiada dinding.** Tingkat tiada dinding dalam IFC (sesetengah eksport meletakkan dinding pada tingkat lain). Pilih tingkat itu, atau taip X dan Y.
- **Saiz item fail salah.** Fail tiada unit atau menyatakan unit yang salah. Dalam {{ui:Fail…}} pilih unit dan baca semula.

:::tip
Meletakkan item yang sama dua kali berkongsi satu jenis IFC, jadi model dengan empat puluh kerusi menyimpan kerusi sekali sahaja.
:::
