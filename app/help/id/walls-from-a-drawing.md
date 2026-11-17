---
title: Dinding dari gambar hasil telusur
summary: Ubah denah DWG atau DXF menjadi dinding, pintu, dan jendela pada sebuah level, dan simpan gambar di bawah denah sebagai referensi.
keywords: dwg, dxf, telusur, ditelusuri, impor denah, konversi, cad ke bim, 2d ke 3d, dinding dari garis, layer, blok, pintu dari blok, underlay, gambar referensi, latar belakang, xref, aplikasi drafting
from: 3bf213f1
---

## Yang akan Anda lakukan

Gunakan denah yang Anda (atau orang lain) gambar di aplikasi drafting sebagai awal model: garis dindingnya menjadi dinding, dan blok pintu serta jendelanya menjadi pintu dan jendela.

## Langkah

1. Aktifkan {{ui:Gambar}} dan pilih level yang ditampilkan gambar pada daftar level denah.
2. Pilih {{ui:Build}} › {{ui:Dari gambar…}}, lalu {{ui:Pilih gambar…}} dan pilih DWG atau DXF.
3. Di dialog:
   - **Satuan gambar** berasal dari gambar; pilih yang lain jika salah (denah yang digambar dalam kaki lalu dibaca sebagai inci akan dua belas kali lebih kecil).
   - **Layer dengan dinding**: centang layer tempat garis dinding berada. Layer yang namanya memuat "wall" dicentang untuk Anda.
   - **Garisnya adalah**: **kedua muka setiap dinding** (cara yang paling umum denah digambar: setiap pasang garis sejajar yang berjarak hingga 600 mm menjadi satu dinding sebebal celahnya), **garis tengah dinding**, atau **satu muka** dengan dinding di sisi kiri atau kanannya. Dengan garis tengah atau satu muka, tipe dinding menentukan ketebalannya.
   - **Tipe dinding** dan **Tinggi dinding**, seperti pada alat {{ui:Dinding}}.
   - **Blok**: pilih tipe pintu atau jendela untuk setiap blok yang merupakan pintu atau jendela, atau biarkan tidak diikutsertakan. Blok yang namanya memuat "door" atau "window" dipilihkan untuk Anda. Setiap blok ditempatkan di dinding tempat ia berada, selebar blok itu sepanjang dinding; pintu membuka ke sisi tempat ayunannya digambar.
   - **Letaknya**: pada koordinat gambar itu sendiri, atau dengan sudut kiri bawahnya pada titik asal denah.
   - **Simpan gambar di bawah denah level ini**: biarkan tercentang untuk melihat gambar sebagai garis tipis di bawah apa yang Anda buat.
4. Baris di bawah pilihan menyatakan berapa banyak dinding, pintu, dan jendela yang akan dibuat. Klik {{ui:Buat}}.

## Yang harus Anda lihat

- Dinding, pintu, dan jendela pada level, tersambung di tempat mereka bertemu, dengan ruangan yang mereka tutup; semuanya dalam satu langkah, sehingga {{key:Mod+Z}} membatalkannya.
- Gambar sebagai garis tipis di bawah denah. {{ui:Build}} › {{ui:Dari gambar…}} mencantumkan gambar yang disimpan pada level, masing-masing dengan {{ui:Hapus}}; menghapus satu gambar tidak menghapus dinding.
- Dalam file IFC, gambar yang disimpan adalah anotasi pada level (garisnya), sehingga aplikasi BIM lain juga menampilkannya.

:::note
PDF atau scan juga bisa: lihat [Dinding dari sekumpulan denah](topic:walls-from-plans). Busur dilewati (BimCraft menggambar dinding lurus), begitu pula garis di dalam blok. Garis tanpa pasangan pada "kedua muka" dihitung di dialog dan dilewati: gambar dinding itu dengan alat {{ui:Dinding}}, atau rapikan dengan {{ui:Ubah}} › {{ui:Pangkas / perpanjang}} (lihat [Pangkas, perpanjang, dan sambungkan dinding](topic:trim-extend-walls)).
:::

:::tip
Ditelusuri di atas scan di aplikasi drafting? Buka juga scan di sini dan periksa dindingnya terhadap scan: lihat [Model dari scan](topic:model-from-a-scan).
:::
