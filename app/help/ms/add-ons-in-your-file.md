---
title: Add-on yang digunakan oleh fail anda
summary: BimCraft mencatat dalam fail IFC add-on mana yang menulis ke dalamnya, dan menawarkan untuk menambah yang anda tiada apabila anda membukanya.
keywords: add-on, addon, fail ini menggunakan, add-on yang hilang, trusscraft, pustaka, rekod, cadcraft_addons
from: 9d9500d8
---

## Apa yang dilakukannya

Apabila add-on menulis ke dalam model (kekuda, laluan paip), BimCraft merekodkan add-on dan versinya pada projek IFC, dalam set sifat bernama CadCraft_AddOns. Rekod ditulis dalam langkah buat asal yang sama dengan perubahan add-on itu sendiri, jadi membuat asal perubahan itu juga menarik balik rekodnya. Program lain mengabaikan set sifat itu; apa yang dilukis oleh add-on kekal dalam fail dalam kedua-dua keadaan.

## Langkah

1. Buka fail IFC yang dibantu oleh add-on untuk dibuat.
2. Jika add-on yang digunakannya tidak dihidupkan, nota di atas model menyatakan yang mana, dengan butang untuk menambahkannya daripada akaun Pustaka anda.
3. Tambahkan, atau tutup nota itu. Model dibuka sama ada begitu.

## Kesilapan biasa

- **Tiada nota muncul.** Anda tidak log masuk ke akaun anda dalam tab ini, atau fail itu tidak mempunyai rekod (ia dibuat sebelum rekod wujud, atau oleh program lain).
- **Senarai perubahan berkata "undefined".** Telah dibetulkan: label kini menunjukkan nama add-on.

## Seterusnya

- [Letakkan peralatan dan perabot dari pustaka](topic:place-from-library)
