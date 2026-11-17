---
title: Letak dongakan dan buka pandangannya
summary: Letakkan penanda dongakan pada pelan lantai, halakan ke arah yang anda mahu, kemudian cari lukisannya dalam pelayar projek, sunting di dalamnya dan letakkan pada helaian. Langkah untuk susun atur reben dan susun atur klasik.
keywords: dongakan, pandangan dongakan, penanda dongakan, tanda dongakan, letak dongakan, dongakan baharu, buat dongakan, dongakan luar, pandangan sisi, pandangan hadapan, pandangan dari satu titik, di mana dongakan saya, buka dongakan, dongakan pada helaian, balikkan dongakan, namakan semula dongakan, dongakan utara, susun pandangan, pisah pandangan, pelan dan 3D bersebelahan
from: a7cfd2b9
---

## Apa yang akan anda lakukan

Buat dongakan anda sendiri: lukisan bangunan yang dilihat dari satu titik yang anda pilih, menghadap ke arah yang anda pilih. Ia memerlukan dua klik pada pelan lantai. Lukisan itu kemudian disenaraikan bersama dongakan bangunan yang lain.

:::note
Empat sisi sudah tersedia. Setiap bangunan mempunyai dongakan Utara, Timur, Selatan dan Barat dalam {{ui:Pelayar projek}} di bawah {{ui:Dongakan}} tanpa perlu meletak apa-apa. Letakkan dongakan sendiri apabila anda mahukan pandangan dari tempat lain: tegak lurus dengan sayap yang bersudut, dari dalam anjung, atau bagi satu dinding di dalam bilik.
:::

## Di mana alatnya

- Susun atur reben: {{ui:Pandangan}} › **Cipta** › {{ui:Ketinggian}}.
- Susun atur klasik: hidupkan {{ui:Lukis}}, kemudian {{ui:Binaan}} › {{ui:Ketinggian}}.
- Mana-mana gaya menu: arahannya dinamakan Elevation; palet arahan akan menemuinya, dan baris arahan menerima ELEVATION.

## Langkah

1. Pilih {{ui:Ketinggian}}. Dongakan diletakkan pada pelan lantai, jadi jika anda berada dalam pandangan 3D, BimCraft menunjukkan pelan aras tempat anda berada. Penunjuk akan memaparkan **Klik di tempat dongakan itu berdiri**.
2. Klik tempat pandangan itu diambil. Untuk dongakan luar, klik di luar bangunan, sedikit jauh dari dinding yang ingin anda lihat.
3. Penunjuk kini memaparkan **Klik ke arah pandangannya**. Gerak ke arah bangunan: anak panah menunjukkan arah, dan garisan pendek merentasi klik pertama anda ialah tepi tempat pandangan itu dilihat. Klik.
4. Bulatan dengan nombor dan penunjuk akan muncul pada pelan. Itulah penanda dongakan. Yang pertama ialah 1, yang seterusnya 2.
5. Tekan Esc untuk selesai, atau teruskan dan letakkan penanda lain.

Meletakkan penanda ialah satu langkah: {{key:Mod+Z}} membatalkannya.

## Buka lukisan

Pelan kekal di hadapan anda selepas klik kedua. Lukisan terdapat dalam {{ui:Pelayar projek}}:

1. Buka {{ui:Dongakan}}. Dongakan anda disenaraikan selepas empat sisi sebagai **Dongakan 1**.
2. Klik butang pensel {{ui:Sunting dalam pandangan ini}} pada barisnya untuk melihat lukisan dan bekerja di dalamnya: alihkan dinding, pintu, tingkap dan aras, tambah nota dan dimensi. Lihat [Sunting dalam dongakan dan keratan](topic:edit-in-elevations).
3. Klik baris itu sendiri untuk membuka set lukisan, atau tambah pandangan itu ke helaian anda sendiri. Lihat [Pandangan dan helaian](topic:views-and-sheets).

Dalam susun atur klasik, pelayar projek berada di panel kiri ketika {{ui:Lukis}} dihidupkan. Dalam susun atur reben, ia ialah tab {{ui:Project Browser}} di bawah Sifat.

## Apa yang dipaparkan oleh pandangan

- Semua yang berada di hadapan penanda, setakat bangunan itu wujud. Tiada apa-apa di belakangnya.
- Aras, dengan nama dan ketinggiannya.
- Jika penanda berada di dalam bangunan, apa sahaja yang ia berdiri di dalamnya akan dipotong di situ, seperti keratan memotongnya. Untuk dongakan luar yang kemas, berdirilah di luar.

## Ubah suainya

Pilih penanda pada pelan (klik bulatannya dengan {{ui:Pilih}}). Sifat mempunyai:

- {{ui:Label}}: nombornya atau nama anda sendiri, sehingga 8 aksara.
- {{ui:Balikkan pandangan}}: melihat ke arah bertentangan dari tempat yang sama.
- {{ui:Lihat sejauh}}: sejauh mana pandangan mencapai ke hadapan penanda. 0 menunjukkan semuanya.

Tekan Delete untuk mengalih keluar penanda dan lukisannya. Buat asal memulihkan kedua-duanya.

:::tip
Untuk melihat pelan dan pandangan 3D serentak semasa anda bekerja, gunakan {{ui:Pandangan}} › **Tetingkap** › {{ui:Susun pandangan}} dalam susun atur reben, atau {{ui:Pisah}} dalam susun atur klasik. Klik pada tab pandangan akan kembali kepada satu pandangan.
:::

## Had

- Penanda belum boleh diseret atau dipusingkan pada pelan. Padamkannya dan letakkan semula, atau gunakan {{ui:Balikkan pandangan}}.
- Dalam senarai pandangan yang boleh anda tambah ke helaian, dongakan anda sendiri disenaraikan bersama keratan.
- Tanda pintu dan tingkap dilukis pada empat dongakan sisi, bukan pada yang anda letakkan.

## Dalam IFC

Penanda disimpan dalam fail sebagai IfcAnnotation dinamakan "Elevation 1" dengan jenis objek "Elevation marker", dalam aras tempat ia diletakkan. Program lain memaparkannya sebagai anotasi; lukisan itu sendiri dihasilkan oleh BimCraft daripada model setiap kali.
