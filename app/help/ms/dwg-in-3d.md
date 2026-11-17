---
title: Lihat lukisan DWG atau DXF dalam 3D
summary: Tukar ruang model lukisan kepada 3D untuk melihat ketinggian, ketebalan, muka 3D, mesh dan blok, orbit mengelilinginya, klik objek untuk melihat sifatnya, dan lihat apa yang belum dilukis.
keywords: 3d, dwg, dxf, lukisan, ruang model, orbit, keratan, potong, pemotongan, pilih, sifat, atribut, handle, ketinggian, ketebalan, ekstrusi, 3dface, polyface, mesh, polyline 3d, blok, pandangan, perspektif, selari, lingkungan, acis, pepejal
from: a0c6cd17
---

## Apa yang akan anda lakukan

Lihat ruang model sebuah lukisan dalam 3D. Garisan dan polygaris berada pada ketinggian sebenar, objek yang mempunyai ketebalan berdiri sebagai dinding, dan muka 3D, mesh serta blok 3D ditunjukkan sebagai permukaan yang boleh anda orbit mengelilinginya. Helaian kekal 2D.

## Langkah

1. Buka DWG atau DXF. Lihat [Lihat lukisan DWG atau DXF](topic:view-dwg). Ia dibuka dalam 3D melainkan {{ui:Tetapan}} › BimCraft › **Lukisan dibuka dalam** menyatakan {{ui:Model (2D)}}.
2. Dari 2D, klik {{ui:3D}} dalam bar di atas lukisan, atau tekan {{key:3}}.
3. Tunggu seketika kali pertama: baris status menyatakan "Membina lukisan dalam 3D…", kemudian berapa banyak garisan dan muka yang ditunjukkannya.
4. Orbit, pan dan zum (lihat jadual di bawah).
5. Klik pandangan dalam bar kedua: {{ui:Iso}}, {{ui:Atas}}, {{ui:Bawah}}, {{ui:Hadapan}}, {{ui:Belakang}}, {{ui:Kiri}} atau {{ui:Kanan}}.
6. Klik {{ui:Perspektif}} untuk bertukar antara pandangan perspektif dan pandangan selari.
7. Klik {{ui:Lingkungan}} atau tekan {{key:F}} untuk melihat keseluruhan lukisan semula.
8. Klik {{ui:3D}} sekali lagi, tekan {{key:3}}, atau klik {{ui:Model}} atau tab helaian untuk kembali ke 2D.

## Apa yang sepatutnya anda lihat

- Ruang model dalam 3D, Z ke atas, dalam warna lukisan itu sendiri. Muka sedikit lebih cerah daripada tepinya.
- Lapisan yang anda matikan dalam {{ui:Lapisan}} turut hilang daripada paparan 3D.
- Di sebelah kanan: bilangan garisan dan muka, saiz lukisan dalam X, Y dan Z, **Dalam paparan 2D sahaja** dan **Belum dilukis**.

## Potong dengan satah keratan

Klik {{ui:Keratan}} pada bar 3D, atau tekan {{key:X}}. Bar di bawahnya berfungsi seperti untuk model IFC (lihat [Potong model IFC dengan satah keratan](topic:section-plane)): potong dari {{ui:Atas}}, {{ui:Hadapan}} atau {{ui:Sisi}}, seret atau taip ofset (dalam unit lukisan itu sendiri di sini), dan {{ui:Balik}} untuk menyimpan sisi yang satu lagi. Apa yang dipotong oleh satah tidak boleh dipilih. Kembali ke 2D menghilangkan potongan itu.

## Lihat sifat objek

Klik objek dalam paparan 3D. Ia bertukar kepada warna pilihan dan {{ui:Sifat}} menunjukkan apa yang dikatakan fail tentangnya: jenisnya, lapisan, warna, jenis garisan dan handle, kemudian datanya sendiri, seperti permulaan, penghujung dan panjang sebuah garisan, pusat dan jejari sebuah bulatan, bucu muka 3D, atau blok rujukan, titik sisipan, skala, putaran dan nilai atribut bagi rujukan blok.

- Rujukan blok dipilih secara keseluruhan, dengan blok bersarang di dalamnya turut dipilih.
- Klik beberapa piksel dari garisan memilih garisan itu.
- Tahan {{key:Mod}} dan klik untuk memilih lebih banyak objek, atau untuk mengeluarkan satu; {{ui:Sifat}} kemudian mengira mereka mengikut jenis.
- {{key:Esc}}, atau klik pada ruang kosong, membersihkan pilihan.
- Objek pada lapisan yang anda matikan tidak boleh dipilih.

## Bergerak sekitar

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan butang tengah, atau dengan butang kiri |
| Pan | Seret dengan butang kanan, atau tahan {{key:Shift}} dan seret |
| Zum | Tatal roda; ia zum ke arah apa yang berada di bawah penunjuk |
| Lihat semuanya | {{ui:Lingkungan}} atau {{key:F}} |
| Lihat dari sisi | Klik muka, tepi atau bucu ViewCube di sudut kanan bawah |
:::

Ikon paksi boleh digantikan untuk ViewCube, atau ViewCube boleh disembunyikan, dalam {{ui:Tetapan}}. Lihat [Tetapan BimCraft](topic:settings).

:::mac mouse
Pada pad jejak, leret dengan dua jari untuk orbit, tahan {{key:Shift}} dan leret untuk pan, dan cubit untuk zum.
:::

:::touch
Seret dengan satu jari untuk orbit. Cubit dengan dua jari untuk zum, dan gerakkannya bersama untuk pan.
:::

## Apa yang dilukis dalam 3D

| Dalam lukisan | Dalam 3D |
|---|---|
| Garisan, polygaris 3D | Pada ketinggian sebenar |
| Polygaris, bulatan, lengkok, elips | Dalam satah sendiri, pada ketinggiannya, condong apabila lukisan itu condong |
| Ketebalan pada garisan, polygaris, bulatan dan lengkok | Dinding setinggi itu; bulatan tertutup di atas dan di bawah |
| Muka 3D, mesh polyface, mesh poligon | Permukaan berlorek dengan tepi yang kelihatan |
| Blok | Diletakkan, diputar dan diskala dalam 3D, blok bersarang juga |
| Hatch | Garis luarnya |
| Garisan 2D biasa | Rata, di tempat ia dilukis |

## Dalam paparan 2D sahaja

Teks, teks berbilang baris dan atribut blok yang kelihatan dilukis dalam 3D, dalam satah mereka sendiri pada ketinggian mereka sendiri, dan klik pada mereka memilihnya. Polygaris lebar menunjukkan lebarnya sebagai jalur rata. Multipetunjuk, imej dan corak hatch dikira di bawah **Dalam paparan 2D sahaja**: lihat mereka pada tab {{ui:Model}} atau pada helaian.

## Belum dilukis

Pepejal dan permukaan yang disimpan sebagai badan ACIS (pepejal 3D, badan, rantau dan permukaan) dan mesh subdivisi disenaraikan di bawah **Belum dilukis** beserta bilangannya. Ia dilangkau, tidak diteka.

## Kesilapan lazim

- **Semuanya kelihatan rata.** Lukisan itu 2D: garisannya tiada ketinggian. Klik {{ui:Hadapan}} untuk menyemak; lukisan rata kelihatan sebagai garisan.
- **Model pepejal tidak menunjukkan apa-apa.** Pepejal yang dibuat dengan pemodel pepejal ialah badan ACIS, disenaraikan di bawah **Belum dilukis**. Eksport model sebagai IFC atau sebagai muka 3D dari program yang membuatnya.
- **Lukisan kelihatan sebagai kelompok kecil di tengah.** Sesuatu yang jauh dalam ruang model, seperti salinan lama pelan, menjadikan lingkungan besar. Zum masuk dengan roda di tempat anda mahu melihat.

## Seterusnya

- [Kerja dengan lapisan dan helaian](topic:dwg-layers-sheets)
- [Potong model IFC dengan satah keratan](topic:section-plane)
