---
title: Lihat lukisan DWG atau DXF
summary: Buka DWG atau DXF, bergerak di sekitar ruang model dan helaian, baca koordinat dan lihat apa yang belum dilukis.
keywords: blok dinamik, keadaan keterlihatan, dwg, dxf, cad, lukisan, 2d, lihat, pemapar, pan, zum, ruang model, ruang kertas, layout, koordinat, buka dwg
from: 4db3122a
---

## Apa yang anda lakukan

Buka lukisan CAD, lihat dalam 3D atau 2D, bergerak di sekitarnya, bertukar antara ruang model dan helaiannya, dan baca koordinat. BimCraft memaparkan lukisan DWG dan DXF; ia tidak menyuntingnya atau menyimpannya. Untuk mengubahnya, klik {{ui:Sunting dalam CadCraft}} dan lukisan itu dibuka dalam aplikasi lukisan CadCraft dalam tab baharu.

## Langkah

1. Klik {{ui:Pilih fail}}, atau lepaskan lukisan ke atas halaman.
2. Pilih fail `.dwg` atau `.dxf`.
3. Tunggu sementara bar status menyatakan "Membaca lukisan…". Lukisan besar mengambil beberapa saat. Kemudian ia menyatakan berapa lama bacaan itu, "merender…" semasa gambar pertama dilukis, dan berapa lama itu.
4. Lukisan dibuka dalam 3D, cara terpantas untuk memaparkan lukisan besar (lihat [Lihat lukisan DWG atau DXF dalam 3D](topic:dwg-in-3d)). Klik {{ui:Model}} untuk pandangan 2D rata. Untuk sentiasa membuka lukisan dalam 2D, tetapkan {{ui:Tetapan}} › {{ui:BimCraft}} › **Lukisan dibuka dalam** kepada {{ui:Model (2D)}}. Lukisan tanpa apa-apa dalam ruang model, atau pelayar yang tidak boleh memaparkan 3D, dibuka dalam 2D.
5. Lihat tab di atas lukisan: {{ui:Model}} dahulu, kemudian satu tab bagi setiap helaian, mengikut susunan lukisan itu sendiri.
6. Klik tab helaian untuk melihat helaian itu: kertasnya, dengan model ditunjukkan melalui viewportnya.
7. Klik {{ui:Model}} untuk kembali ke ruang model.
8. Gerakkan penuding ke atas lukisan dan baca koordinat X dan Y di sudut.

## Apa yang sepatutnya anda lihat

- Lukisan, dimuatkan dalam tetingkap. Warna mengikut lukisan; garisan putih (warna 7) dilukis dalam dakwat tema, dan warna pudar digelapkan pada tema cerah supaya tetap boleh dibaca.
- Panel {{ui:Lukisan}} di sebelah kiri: fail, saiz, format (contohnya "AutoCAD 2018 (AC1032)"), unit, bilangan entiti dan lapisan, bilangan helaian, serta lukisan dan peralatan yang dipautkan apabila ada.
- Senarai {{ui:Lapisan}} di sebelah kiri.
- Di sebelah kanan: cara bergerak, lukisan dan imej yang dipautkan, dan **Belum dilukis lagi**.

## Bergerak di sekitar

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Pan | Seret dengan mana-mana butang tetikus |
| Zum | Tatal roda; titik di bawah penuding kekal di tempatnya |
| Muat | Klik dua kali, tekan {{key:F}}, atau klik {{ui:Muat}} |
:::

:::mac mouse
Pada pad jejak, tatal dengan dua jari untuk **zum**; ia tidak pan. Cubit juga zum. Untuk pan, klik dan seret.
:::

:::touch
Seret dengan satu jari untuk pan. Zum cubit belum dibina untuk lukisan: ketik {{ui:Muat}} untuk melihat keseluruhan helaian, dan gunakan tetikus atau pad jejak untuk zum masuk.
:::

## Blok dinamik

Blok dinamik dilukis seperti yang ditunjukkan lukisan: setiap blok yang diletakkan dalam keadaan keterlihatan yang disimpan bersama lukisan ("Plan" atau "Front", "Single bowl" atau "Double bowl"). Di sebelah kanan, **Blok dinamik** menyenaraikan setiap satu yang diletakkan dalam ruang model: berapa banyak diletakkan, keadaan yang ditunjukkan, dan setiap keadaan yang dimiliki blok itu. Dalam {{ui:3D}}, klik blok yang diletakkan untuk melihat **Blok dinamik**, **Keadaan ditunjukkan** dan **Keadaan lain** dalam Sifat. BimCraft tidak menukar keadaan.

## Belum dilukis lagi

Sesetengah jenis objek tidak dilukis dalam binaan ini. Ia dikira di bawah **Belum dilukis lagi** di sebelah kanan ("Bahagian lukisan ini dilangkau buat masa ini, tidak diteka."), supaya anda tahu sesuatu hilang. Garisan, polygaris, lengkok, bulatan, elips, splin, hatch dan isian pepejal, teks dan teks berbilang baris, blok dengan atribut, dimensi, petunjuk dan multipetunjuk, jadual, imej dan viewport dilukis. Muka 3D, jaringan polyface dan jaringan poligon dilukis sebagai tepinya dilihat dari atas; tukar ke {{ui:3D}} untuk melihatnya sebagai permukaan.

DXF perduaan tidak dibuka: BimCraft memaklumkannya. Simpan semula sebagai DXF ASCII, atau sebagai DWG, daripada program yang membuatnya.

## Kesilapan biasa

- **Lukisan kelihatan kosong.** Sesetengah lapisan mungkin dimatikan atau dibekukan dalam lukisan itu sendiri; ia bermula tanpa tanda dalam {{ui:Lapisan}}. Klik {{ui:Hidupkan semua}}. Jika status menyatakan "*name* ialah lukisan kosong: ia tidak mengandungi garisan, teks atau blok.", memang tiada apa-apa di dalamnya.
- **Helaian menunjukkan bingkai kosong.** Helaian itu mungkin bergantung pada lukisan yang dipautkan. Lihat [Cari lukisan dan gambar yang dipautkan](topic:dwg-linked-files).
- **Teks kelihatan sedikit berbeza.** BimCraft melukis teks dengan fon sans-serif sempit, bukan fon lukisan itu sendiri, jadi teks mungkin sedikit lebih lebar atau sempit daripada dalam program yang menghasilkannya.
- **"*name* tidak dapat dibaca. Ia mungkin rosak, atau disimpan dalam format yang pembaca belum kendalikan."** Kurungan di hujung menamakan kod format fail itu. Simpannya daripada program yang menghasilkannya sebagai DWG versi lama atau sebagai DXF, dan cuba lagi.
- **Menjangka untuk mengukur, melukis atau menyunting.** BimCraft hanya memaparkan lukisan. Klik {{ui:Sunting dalam CadCraft}} untuk membuka fail yang sama dalam aplikasi lukisan CadCraft, yang menyuntingnya dan menyimpan salinan sebagai DWG atau DXF. Fail asal anda tidak diubah, dan lukisan yang dipautkan kekal dalam BimCraft. Butang itu hanya muncul di tempat CadCraft terbuka untuk anda.

## Seterusnya

- [Lihat lukisan DWG atau DXF dalam 3D](topic:dwg-in-3d)
- [Bekerja dengan lapisan dan helaian](topic:dwg-layers-sheets)
- [Semak lukisan dalam paparan cetak](topic:print-view)
