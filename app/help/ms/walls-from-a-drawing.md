---
title: Dinding daripada lukisan yang dikesan
summary: Tukar pelan DWG atau DXF kepada dinding, pintu dan tingkap pada satu aras, dan simpan lukisan di bawah pelan sebagai rujukan.
keywords: dwg, dxf, kesan, dikesan, import pelan, tukar, cad kepada bim, 2d kepada 3d, dinding daripada garisan, lapisan, blok, pintu daripada blok, underlay, lukisan rujukan, latar belakang, xref, aplikasi lukisan
from: 3bf213f1
---

## Apa yang anda akan lakukan

Gunakan pelan yang anda (atau orang lain) lukis dalam aplikasi lukisan sebagai permulaan model: garisan dindingnya menjadi dinding, blok pintu dan tingkapnya menjadi pintu dan tingkap.

## Langkah

1. Hidupkan {{ui:Lukis}} dan pilih aras yang ditunjukkan oleh lukisan dalam senarai aras pelan.
2. Pilih {{ui:Binaan}} › {{ui:Daripada lukisan…}}, kemudian {{ui:Pilih lukisan…}} dan pilih DWG atau DXF.
3. Dalam dialog:
   - **Unit lukisan** datang daripada lukisan; pilih yang lain jika ia salah (pelan yang dilukis dalam kaki tetapi dibaca sebagai inci adalah dua belas kali terlalu kecil).
   - **Lapisan bersama dinding**: tandakan lapisan tempat garisan dinding berada. Lapisan yang namanya mengandungi "wall" ditandakan untuk anda.
   - **Garisan ialah**: **kedua-dua muka setiap dinding** (cara biasa pelan dilukis: setiap pasangan garisan selari sehingga 600 mm berjauhan menjadi satu dinding setebal jurang itu), **garis tengah dinding**, atau **satu muka** dengan dinding di kiri atau kanannya. Dengan garis tengah atau satu muka, jenis dinding menetapkan ketebalan.
   - **Jenis dinding** dan **Ketinggian dinding**, seperti untuk alat {{ui:Dinding}}.
   - **Blok**: pilih jenis pintu atau tingkap untuk setiap blok yang merupakan pintu atau tingkap, atau tinggalkannya. Blok yang namanya mengandungi "door" atau "window" dipilih untuk anda. Setiap satu diletakkan dalam dinding tempat ia duduk, selebar blok itu sepanjang dinding; pintu dibuka ke sisi tempat ayunannya dilukis.
   - **Di mana ia pergi**: pada koordinat lukisan sendiri, atau dengan sudut kiri bawahnya pada asal pelan.
   - **Simpan lukisan di bawah pelan aras ini**: biarkan ditandakan untuk melihat lukisan sebagai garisan nipis di bawah apa yang anda buat.
4. Baris di bawah pilihan menyatakan berapa banyak dinding, pintu dan tingkap yang akan dibuat. Klik {{ui:Buat}}.

## Apa yang anda patut lihat

- Dinding, pintu dan tingkap pada aras, bercantum di tempat mereka bertemu, dengan bilik yang mereka tutup; kesemuanya ialah satu langkah, jadi {{key:Mod+Z}} membatalkannya.
- Lukisan sebagai garisan nipis di bawah pelan. {{ui:Binaan}} › {{ui:Daripada lukisan…}} menyenaraikan lukisan yang disimpan pada aras, setiap satu dengan {{ui:Alih keluar}}; mengalih keluar satu meninggalkan dinding.
- Dalam fail IFC, lukisan yang disimpan ialah anotasi pada aras (garisannya), jadi program BIM lain turut menunjukkannya.

:::note
PDF atau imbasan juga berfungsi: lihat [Dinding daripada set pelan](topic:walls-from-plans). Lengkok ditinggalkan (BimCraft melukis dinding lurus), dan begitu juga garisan dalam blok. Garisan tanpa pasangan dalam "kedua-dua muka" dikira dalam dialog dan ditinggalkan: lukis dinding itu dengan alat {{ui:Dinding}}, atau kemaskan dengan {{ui:Ubah suai}} › {{ui:Pangkas / panjangkan}} (lihat [Pangkas, panjangkan dan cantum dinding](topic:trim-extend-walls)).
:::

:::tip
Dijejak atas imbasan dalam aplikasi lukisan? Buka imbasan di sini juga dan semak dinding terhadapnya: lihat [Model daripada imbasan](topic:model-from-a-scan).
:::
