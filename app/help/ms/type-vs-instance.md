---
title: Tukar sifat jenis bagi setiap elemen dalam satu jenis
summary: Bezakan sifat jenis daripada sifat instans, tukar nilai pada jenis supaya setiap elemen mengikutinya, dan semak bahawa suntingan satu elemen kekal miliknya.
keywords: jenis, instans, sifat jenis, jenis keluarga, dikongsi, salin apabila ditulis, semua elemen, sunting pukal, pengilang, model
from: bffd8789
---

## Apa yang anda akan lakukan

Tetapkan pengilang pada jenis pintu supaya setiap pintu bagi jenis itu menunjukkannya, kemudian beri satu pintu penarafan api sendiri tanpa menyentuh yang lain. Ini menunjukkan perbezaan antara sifat jenis dan sifat instans dalam BimCraft.

## Jenis atau instans?

- Sifat **instans** dimiliki oleh satu elemen: tag, tanda, bilik, penarafan api sendirinya.
- Sifat **jenis** dimiliki oleh jenis yang dikongsi oleh banyak elemen: pengilang, model, lebar bagi jenis pintu.

Dalam panel {{ui:Sifat}}, set yang datang daripada jenis mempunyai " (jenis)" selepas namanya dan baris "Sifat jenis: perubahan di sini terpakai kepada setiap elemen jenis ini." Setiap set lain dimiliki oleh elemen itu sendiri. **Jenis** dalam blok pertama menunjukkan nama jenis.

## Langkah: tukar jenis

1. Buka model IFC dan klik pintu.
2. Catat **Jenis** dalam blok pertama panel {{ui:Sifat}}, contohnya "Single-Flush 900 x 2100".
3. Skrol ke set yang namanya berakhir dengan "(jenis)".
4. Klik nilai yang anda mahu tukar, contohnya **Pengilang**.
5. Taip nilai baharu dan tekan {{key:Enter}}.
6. Lihat senarai {{ui:Perubahan}}: entrinya berakhir dengan "(jenis)".
7. Klik pintu lain bagi jenis yang sama.
8. Semak nilai yang sama: ia juga menunjukkan nilai baharu.

## Langkah: tukar satu elemen sahaja

1. Klik satu pintu.
2. Buka set yang namanya tiada "(jenis)", contohnya `Pset_DoorCommon`.
3. Klik nilai, seperti **FireRating**, taip nilai baharu dan tekan {{key:Enter}}.
4. Klik pintu di sebelahnya, bagi jenis yang sama.
5. Semak nilai yang sama: ia masih menunjukkan nilai lama.

Walaupun pengeksport berkongsi set sifat itu antara kedua-dua pintu, BimCraft memberi pintu pertama salinannya sendiri sebelum menukarnya. Lihat [Mengapa suntingan anda hanya menukar satu elemen](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Simpan

1. Klik {{ui:Simpan sebagai IFC}} atau tekan {{key:Mod+S}}.
2. Buka salinan yang disimpan dalam BimCraft, atau mana-mana pemapar IFC, untuk menyemak kedua-dua perubahan.

## Kesilapan biasa

- **Tidak setiap model mempunyai jenis.** Sesetengah pengeksport tidak menulis objek jenis, atau meletakkan semuanya pada instans. Maka tiada set "(jenis)", dan setiap elemen mesti ditukar sendiri.
- **Nilai yang sama muncul dalam set jenis dan set instans.** Sesetengah pengeksport menulis parameter di kedua-dua tempat. Program lain mungkin membaca mana-mana satu; tukar kedua-duanya jika anda mahu ia sepadan.
- **Menjangka boleh memilih "semua pintu bagi jenis ini" dan menyuntingnya bersama.** Tiada pilihan berbilang dalam binaan ini. Sifat jenis ialah cara untuk menukar banyak elemen sekaligus.
