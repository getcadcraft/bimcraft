---
title: Paket tipe: bagikan tipe dinding sebagai file terbuka
summary: Simpan tipe dinding beserta lapisan, material, tag, dan kode klasifikasinya, serta famili, sebagai satu file terbuka (JSON biasa atau IFC), lalu tambahkan ke proyek lain. Tipe dinding dari file IFC program lain juga dapat dibaca.
keywords: paket tipe, tipe, tipe dinding, bagikan, ekspor, impor, pustaka, format terbuka, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, material, lapisan, templat, standar kantor, famili
from: e4c91331
---

## Yang akan Anda lakukan

Bawa tipe dinding Anda dari satu proyek ke proyek lain, atau serahkan kepada seseorang yang bekerja di program lain. Paket tipe memuat setiap tipe dinding beserta lapisannya, tebalnya, materialnya, inti, rongga, prioritas lapisan, tingkat pengembangan, data takeoff, dan kode klasifikasinya, serta famili apa pun yang Anda tambahkan. Ini adalah file terbuka: teks JSON biasa yang dapat dibaca siapa pun, atau file IFC. Tidak ada yang di dalamnya terkunci pada firma, negara, atau akun tertentu.

## Simpan tipe dari proyek

1. Buka **Data** di bilah model dan pilih {{ui:Paket tipe}}.
2. Di bawah {{ui:Simpan tipe dari proyek ini}}, centang tipe dinding yang akan dimasukkan. Tipe milik proyek sudah tercentang; tipe starter dapat ditambahkan dan masuk sebagai salinan. Centang famili jika ingin memasukkannya.
3. Ketik {{ui:Nama paket}}.
4. {{ui:Simpan sebagai paket (.json)}} mengunduh file `.cctypes.json`. {{ui:Simpan sebagai IFC (.ifc)}} mengunduh file IFC yang hanya berisi tipe: setiap tipe dinding sebagai IfcWallType dengan set lapisan materialnya, materialnya, dan klasifikasinya, untuk program BIM apa pun.

## Tambahkan tipe ke proyek

1. Di dialog yang sama, pilih {{ui:Buka paket atau file IFC…}} dan pilih paket `.json` atau file `.ifc`.
2. Dialog menampilkan isi file: setiap tipe dinding beserta tebal, jumlah lapisan dan kodenya, materialnya, dan famili.
3. Pilih apa yang terjadi pada {{ui:Tipe yang sudah dimiliki proyek ini}}: **Pertahankan milik proyek**, **Tambahkan milik paket sebagai salinan** (diberi nama baru yang diakhiri "(2)"), atau **Ganti (hanya jika tidak ada dinding yang memakainya)**.
4. {{ui:Tambahkan ke proyek}}. Dialog menampilkan apa yang ditambahkan, disalin, diganti, atau dipertahankan. Ini satu langkah urungkan.

Tipe baru langsung ada di daftar tipe alat Dinding.

## Tipe lantai, atap, dan plafon

Daftar tipe yang akan disimpan juga memuat tipe lantai, atap, dan plafon proyek beserta starter-nya (ditandai Lantai, Atap, Plafon). Sebuah paket dapat memuat keempat jenis; setiap tipe menyebutkan kelas IFC-nya (IfcWallType, IfcSlabType, IfcCoveringType). Tipe lantai, atap, atau plafon yang dipakai elemen tidak diganti dari paket: ubah di editor tipe.

## Satu tipe sebagai item pustaka

Centang tepat satu tipe dan pilih **Simpan sebagai item pustaka…**. Ini menyimpan file `.cctype.json`: item pustaka berjenis Tipe yang berisi satu tipe itu (lapisan, material, LOD, dan kode klasifikasinya). Unggah di Pustaka untuk membagikannya. **Buka paket atau file IFC** juga membaca item seperti itu dan menambahkan tipenya ke proyek seperti paket.

## Perlu diketahui

- File IFC dari program lain juga dapat dibuka di sini. Setiap tipe dindingnya yang memiliki lapisan material dibaca: nama, material dan tebal lapisan, serta rongga apa pun adalah milik file itu sendiri. Lapisan mana yang menjadi inti dan fungsi tiap lapisan (finishing, struktur, insulasi) ditebak, tipenya ditandai **(ditebak)**, dan Anda sebaiknya memeriksanya di editor tipe dinding. Tipe dinding tanpa lapisan dilewati dan namanya disebutkan.
- Material yang sudah dimiliki proyek dipertahankan apa adanya. Material baru yang namanya sudah dipakai mendapat "(paket)" setelah namanya.
- Tipe yang dipakai dinding tidak pernah diganti dari paket. Ubah di editor tipe dinding, yang memindahkan dindingnya dengan benar.
- Kode yang diatur pada satu dinding tidak ikut berpindah: kode itu milik dinding tersebut. Kode yang diatur pada tipe ikut berpindah.
- File dengan kolom yang tidak dimiliki format, lapisan yang materialnya hilang, atau apa pun yang bukan teks biasa akan ditolak, dan pesannya menyebutkan di mana dan mengapa.
- Belum dibuat: tipe lantai, atap, dan plafon (versi ini tidak memiliki tipe untuk itu: masing-masing memiliki tebalnya sendiri), tipe pintu dan jendela selain famili, serta hatch atau warna dari file program lain.
