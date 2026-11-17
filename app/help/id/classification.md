---
title: Kode klasifikasi (Uniclass, OmniClass, UniFormat)
summary: Beri setiap elemen dan tipe kode klasifikasi, pilih sistem yang dipakai proyek, cari tabel Uniclass yang disertakan aplikasi, muat tabel berlisensi milik kantor Anda sendiri, dan tampilkan kode di jadwal. Kode ditulis ke dalam file IFC untuk perangkat lunak lain.
keywords: klasifikasi, mengklasifikasi, kode, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, kode elemen, kode tipe, kode default, IfcClassification, IfcClassificationReference, cobie, kolom jadwal, csv, lisensi, license
from: 222b94cd
---

## Yang akan Anda lakukan

Beri kode klasifikasi pada dinding, lantai, atap, pintu, jendela, dan apa pun lainnya dalam model, dalam hingga tiga sistem secara berdampingan: Uniclass, OmniClass, dan UniFormat. Disiplin lain dan perangkat lunak lain mengandalkan kodenya, bukan namanya, jadi kode disimpan dalam file IFC sebagai referensi klasifikasi yang dapat dibaca oleh program BIM mana pun.

## Beri elemen sebuah kode

1. Pilih sebuah elemen (atau beberapa) dan buka **Properti**. Buka bagian {{ui:Klasifikasi}}.
2. Ketik kode di kotak sistemnya dan tekan Enter. Jika daftar kode sudah dimuat, ketik sebagian kode atau beberapa kata (misalnya "dinding tirai") dan pilih dari hasil yang cocok: judul kode akan diisi untuk Anda.
3. {{ui:Berlaku untuk}} menunjukkan ke mana kode itu berlaku: **Elemen ini**, atau **Tipenya (setiap elemen dari tipe tersebut)**. Kode pada tipe dinding dibaca oleh setiap dinding dari tipe itu, termasuk yang Anda gambar nanti.
4. {{ui:Hapus}} menghapus kode.

Di bawah setiap kode, bagian ini menjelaskan asalnya: diatur pada elemen ini, dari tipenya, atau default proyek untuk kelasnya. Kode milik elemen selalu menang atas kode tipenya, dan kode tipe atas default. Dengan beberapa elemen dipilih, kotak yang bertuliskan "bervariasi" berarti mereka tidak memiliki kode yang sama; mengetik satu kode akan memberikannya kepada semuanya. Setiap perubahan adalah satu langkah urungkan.

Kode selalu dapat diketik, baik daftar dimuat maupun tidak. Jika kode tidak tampak seperti kode dari sistem tersebut, atau tidak ada dalam daftar yang dimuat, sebuah petunjuk akan mengatakannya dan kode tetap disimpan seperti yang Anda ketik.

## Pilih sistem proyek

Buka **Data** di bilah model dan pilih {{ui:Klasifikasi}} (atau {{ui:Klasifikasi proyek…}} di bagian Properti).

- Centang sistem yang digunakan proyek ini. Properti kemudian hanya menampilkan sistem tersebut.
- **Uniclass**: tabel Elements/ functions (EF), Systems (Ss), dan Products (Pr) disertakan dengan aplikasi. Tabel ini © NBS, dilisensikan Creative Commons Attribution-NoDerivatives 4.0, dan diteruskan tanpa perubahan. Dialog menampilkan edisi setiap tabel dan hari ketika tabel itu dibaca. Tabel ini bukan yang terbaru: penerbit menerbitkan yang baru setiap kuartal di situsnya sendiri.
- **OmniClass** dan **UniFormat**: tidak ada daftar kode yang disertakan dengan aplikasi, karena penerbitnya tidak mengizinkan tabel diteruskan tanpa lisensi. Ketik kode apa pun, atau muat tabel berlisensi milik kantor Anda.
- {{ui:Muat tabel (CSV)…}} membaca tabel milik kantor Anda dari file CSV dengan kolom kode dan kolom judul (baris header bernama Code, Number, atau Identifier dan Title, Name, atau Description akan ditemukan sendiri; tanpa itu dua kolom pertama yang digunakan). Tabel tetap berada di peramban ini dan tidak pernah dimasukkan ke dalam file proyek. Hanya kode yang Anda tetapkan yang disimpan dalam file. Anda dapat memuat tabel Uniclass yang lebih baru dengan cara yang sama.
- {{ui:Beri elemen kode default menurut kelasnya}} memberi setiap dinding, lantai, atap, pintu, jendela, tangga, ramp, kolom, balok, dan furnitur sebuah kode Uniclass awal dari tabel Elements/ functions jika ia belum memiliki kodenya sendiri. Elemen yang Anda gambar setelahnya juga mendapatkannya.
- {{ui:Tampilkan kode sebagai kolom di jadwal}} menambahkan satu kolom per sistem pada jadwal Pintu, Jendela, Dinding menurut tipe, dan Ruang beserta CSV-nya. Baris dengan beberapa elemen menampilkan "bervariasi" ketika kodenya berbeda.

## Perlu diketahui

- Kode default adalah pilihan awal dari CadCraft sendiri, bukan dari penerbit, dan belum diperiksa oleh praktisi. Periksa terhadap standar proyek Anda.
- Dalam file, default adalah klasifikasi sungguhan, ditandai dengan nama relasi "CadCraft default", dan ia hilang begitu elemen atau tipenya mendapat kode sendiri.
- Kode yang sudah ada dalam file yang diimpor dibaca dan ditampilkan, apa pun ejaan nama sistem yang digunakan program lain. Kode dari sistem lain (milik kantor sendiri) didaftar dan dibiarkan.
- Kode dibaca kembali saat file dibuka lagi, di sini atau di program lain. Kode juga dibawa ke ekspor IFC5 alpha (IFCX) saat opsi laboratorium itu aktif, kecuali kode yang diatur pada atap.
- Belum dibuat: pohon untuk menjelajahi tabel level demi level, kode pada level dan ruang sebagai default proyek, serta pemeriksaan kode terhadap edisi yang disebutkan dalam file.
