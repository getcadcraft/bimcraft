---
title: Simbol, Jenis dan Aset, templat projek dan Quick Kit
summary: Pustaka mempunyai tiga jenis item (Simbol, Jenis, Aset). Tambah Jenis ke projek anda, mulakan daripada templat projek yang dikongsi, tambah Quick Kit, dan kongsi milik anda melalui halaman muat naik Pustaka.
keywords: pustaka, simbol, jenis, aset, jenis dinding, jenis lantai, jenis bumbung, jenis siling, templat projek, templat, quick kit, kit, kongsi, muat naik, versi, log perubahan, LOD, klasifikasi, lesen, nota daripada amalan
from: e13b0e67
---

## Apa yang anda akan lakukan

Cari apa yang anda perlukan dalam Pustaka mengikut jenisnya, tambah Jenis ke projek yang sedang anda lukis, mulakan projek baharu daripada templat yang seseorang kongsikan, dan kongsi templat, jenis dan kit milik anda sendiri.

## Tiga jenis item Pustaka

- **Simbol** ialah konvensyen lukisan: 2D sahaja, dilukis pada saiz anotasi, dikumpulkan mengikut disiplin.
- **Jenis** menerangkan bahan sesuatu elemen: lapisannya dengan ketebalan sebenar, tahap pembangunannya (LOD) dan kod klasifikasinya. Jenis ditambah ke projek, bukan dilukis.
- **Aset** ialah objek fizikal seperti pintu, tingkap, perabot, lengkapan dan peralatan, dengan pandangan pelan dan badan 3D pada saiz sebenar.

Dalam tab {{ui:Pustaka}}, pilih {{ui:Pustaka}} dan gunakan **Kategori item** untuk menunjukkan Semua, Simbol, Jenis atau Aset.

## Tambah Jenis ke projek anda

1. Pilih **Jenis** di bawah **Kategori item** dan buka satu.
2. Semak binaannya, LOD dan klasifikasinya di bawah gambar, kemudian pilih {{ui:Tambah ke projek ini}}.
3. Ia ditambah sebagai jenis dinding, lantai, bumbung atau siling yang boleh anda lukis. Jika jenis dengan nama itu sudah ada, yang baharu ditambah sebagai salinan dan milik anda kekal seperti sedia ada. Satu {{ui:Buat asal}} mengeluarkannya.

## Templat projek dan Quick Kit

Pilih {{ui:Kit}} untuk melihat apa yang orang kongsikan.

- **Templat projek** ialah fail IFC dengan aras, grid, jenis dan tetapan. {{ui:Simpan ke templat saya}} meletakkannya di bawah **Bangunan baharu** dalam Mula daripada.
- **Quick Kit** ialah senarai item Pustaka. {{ui:Tunjukkan item kit}} menyenaraikannya sebagai kad yang boleh anda letakkan.
- Setiap kit mempunyai versi dan log perubahan, yang terbaharu di atas. Versi yang bermula dengan 0 untuk perbincangan; 1.0.0 hanya untuk apa yang telah diterima pakai oleh pemilik siri.

## Kongsi milik anda sendiri

- **Templat projek:** {{ui:Simpan sebagai templat}}, tandakan {{ui:Juga buat fail untuk dikongsi dalam Pustaka}}, tambah kandungannya dan versi. Anda akan mendapat fail `.json`.
- **Quick Kit:** dalam {{ui:Kit}}, pilih {{ui:Buat Quick Kit daripada projek ini}}. Ia menyenaraikan item Pustaka yang digunakan oleh projek.
- **Jenis:** dalam {{ui:Pek jenis}}, tandakan satu jenis dan pilih {{ui:Simpan sebagai item Pustaka…}}.

Muat naik fail di halaman muat naik Pustaka. Ia melalui semakan yang sama seperti mana-mana item, dan anda memilih lesen di situ: setiap item menyatakan lesennya. Item diminta LOD, kelas IFC dan kod klasifikasi (kod, bukan sekadar nama).

## Nota daripada amalan

Pada halaman mana-mana item Pustaka, ahli yang log masuk boleh menambah nota: digunakan pada projek sebenar, dicuba pada projek sampel, atau menemui masalah. Nyatakan jenis projek dalam beberapa perkataan dan jangan sertakan nama pelanggan. Nota itu awam dan bukan ulasan: ia tidak mengubah item.

## Perkara yang perlu diketahui

- Tiada apa-apa dihantar daripada aplikasi. Fail dibuat pada komputer anda dan anda memuat naiknya sendiri.
- Kit yang dibuat daripada templat membawa teks IFC tepat seperti yang disimpan. Semak sebarang maklumat peribadi sebelum anda memuat naik.
- CadCraft memaparkan Simbol dan Aset dalam tab Pustakanya; Jenis dan templat adalah untuk projek BimCraft.
