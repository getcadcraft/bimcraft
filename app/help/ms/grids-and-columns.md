---
title: Grid dan tiang
summary: Susun garisan grid dengan gelembung bernombor dan berhuruf, mengikut jarak atau satu demi satu, lukis dinding dan tiang di sepanjangnya, dan lihat pada pelan, dongakan dan keratan.
keywords: grid, grid, garisan grid, grid tiang, paksi, paksi, gelembung, garisan grid, grid struktur, 1 2 3, A B C, tiang, tiang, tiang, tiang, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## Apa yang anda akan lakukan

Tetapkan bangunan pada grid, kemudian lukis dinding dan letakkan tiang di sepanjang garisannya.

## Letakkan keseluruhan grid

1. Hidupkan {{ui:Lukis}}, kemudian pilih {{ui:Binaan}} › {{ui:Grid}}.
2. Klik {{ui:Letak grid…}}. Nyatakan berapa **garisan bernombor** (1, 2, 3…) dan **garisan berhuruf** (A, B, C…) yang anda mahu serta jaraknya. Taip satu jarak, atau beberapa dipisahkan dengan koma untuk bay tidak sekata (contohnya `20', 24', 20'`). {{ui:Melepasi garisan terakhir}} ialah sejauh mana setiap garisan memanjang melepasi garisan luar jenis yang satu lagi, dan {{ui:Dipusingkan (darjah)}} memusingkan keseluruhan grid.
3. Klik {{ui:Letakkannya}}, kemudian klik di tempat persilangan pertama (1 / A) akan pergi. Pratonton mengikut penunjuk.

Garisan bernombor berjalan ke atas pelan dan diberi jarak merentasinya; garisan berhuruf berjalan merentasi pelan dan diberi jarak ke atasnya. Huruf melangkau I dan O, seperti dalam lukisan, supaya ia tidak pernah dibaca sebagai 1 dan 0.

## Lukis garisan grid satu demi satu

Dengan {{ui:Grid}} dihidupkan, klik di tempat garisan bermula dan di tempat ia berakhir. Ia mendapat label seterusnya bagi garisan yang dilaluinya (selepas 3 ialah 4; selepas B ialah C). Tekan {{key:Esc}} untuk berhenti.

## Ubah garisan grid

Dengan {{ui:Grid}} dihidupkan, klik garisan untuk memilihnya. Taip {{ui:Label}} baharu dan tekan {{key:Enter}}, atau klik {{ui:Padam garisan ini}} (atau tekan {{key:Delete}}). {{ui:Gelembung}} meletakkan gelembung di kedua-dua hujung, di permulaan atau pengakhiran setiap garisan, atau tiada langsung. Setiap perubahan ialah satu langkah: {{key:Mod+Z}} membatalkannya.

## Lukis di sepanjang grid

Alat {{ui:Dinding}}, alat {{ui:Tiang}} dan alat lukisan lain melekat (snap) pada garisan grid dan pada tempat ia bersilang (tanda snap ialah bulatan kecil dengan silang).

**Tiang:** pilih {{ui:Binaan}} › {{ui:Tiang}}, pilih bentuk (segi empat tepat atau bulat), saiz, dan sama ada tiang memanjang **ke aras di atas** atau ke ketinggian tetap, kemudian klik. {{ui:Pada setiap persilangan grid}} meletakkan tiang pada setiap persilangan yang belum ada tiang. Klik tiang untuk menukar bentuk, saiz atau ketinggiannya dalam {{ui:Sifat}}; {{key:Delete}} membuangnya. Tiang yang memanjang ke aras di atas akan mengikutinya apabila ketinggian aras itu berubah.

## Apa yang anda patut lihat

- Grid pada pelan setiap aras, dengan gelembung dan labelnya di hujung setiap garisan.
- Garisan grid pada set lukisan: pada pelan, dan pada dongakan serta keratan tempat garisan dilihat hujung ke hujung, dengan gelembungnya di atas bangunan. Lihat [Dongakan, keratan dan helaian](topic:sheets).
- Dalam fail IFC: satu grid untuk bangunan (IfcGrid, garisan bernombornya dalam satu senarai dan garisan berhurufnya dalam senarai satu lagi), dan tiang sebagai IfcColumn dengan saiz, ketinggian dan kuantitinya. Program BIM lain memaparkan kedua-duanya.

:::note
Grid yang datang dalam fail daripada program lain dipaparkan, dan alat melekat padanya, tetapi garisannya tidak boleh diubah di sini.
:::
