---
title: Spesifikasi pipa, valve, damper, dan famili pabrikan
summary: Atur spesifikasi pipa Anda sendiri (tabel ukuran dengan material, sambungan, dan kekasaran), yang disimpan di dalam file model; pasang valve, strainer, dan damper pada lintasan; dan masukkan model valve atau peralatan pabrikan sebagai famili dengan port sambungan.
keywords: spec pipa, spesifikasi pipa, spesifikasi perpipaan, kelas perpipaan, pipa khusus, tabel ukuran, tabung, tabung higienis, stainless, jadwal, diameter luar, tebal dinding, diameter dalam, kekasaran, peringkat tekanan, csv, json, impor, ekspor, spreadsheet, standar, bpe, din, en 10357, en 10255, valve, katup, butterfly valve, balancing valve, control valve, strainer, damper, volume damper, fire damper, oem, pabrikan, pembuat, famili, keluarga, port, sambungan, step, obj, gltf, ifc, radiator, konvektor, pemanas panel, air handler, difuser, grille
from: bc2f7c4e
---

## Yang akan Anda lakukan

Menggambar pipa dengan spesifikasi Anda sendiri, bukan dengan tabel baja, tembaga, dan plastik bawaan; memasang valve dan damper pada lintasan; dan menempatkan model pabrikan dengan port yang disambungkan oleh pipa.

:::note
Alat bantu drafting dan koordinasi. Spesifikasi pipa menyimpan angka yang Anda ketik atau impor: periksa setiap tabel terhadap standar proyek Anda. Valve, strainer, dan damper bawaan adalah bentuk skematik yang ukurannya diambil dari lintasan, bukan panjang dari pabrikan atau standar valve.
:::

## Menyiapkan spec pipa

1. Nyalakan {{ui:Draw}}, buka {{ui:Build}}, dan pilih {{ui:Pipe specs}}. Tombol yang sama ada di bilah alat {{ui:Pipe}}.
2. Pilih {{ui:New}}, atau mulai dari file, dari tempelan, atau dari spec awal (lihat di bawah).
3. Ketik namanya, standar atau acuan yang diikutinya, material, dan jenis ujung atau sambungannya.
4. Ketik satu baris per ukuran: nama ukuran, diameter luar, dan tebalnya, dalam milimeter. Ketik diameter dalam sebagai ganti tebal jika itu yang Anda miliki: yang lain akan terisi otomatis. DN, peringkat tekanan, dan berat bersifat opsional.
5. Opsional: kekasaran dalam milimeter (perhitungan penurunan tekanan memakainya), tebal isolasi yang akan dipakai lintasan baru, radius elbow sebagai faktor dari diameter luar, apakah spec memiliki tee dan reducer, dan warna tersendiri dalam 3D.
6. Centang layanan yang lintasan barunya harus dimulai dengan spec ini, misalnya air dingin (chilled water).
7. Pilih {{ui:Save in the model}}.

Spec disimpan dalam file model. Siapa pun yang membuka file itu memilikinya, dan {{ui:Undo}} membatalkan perubahan.

Spec, atau salah satu ukurannya, tidak dapat dihapus selama ada lintasan yang digambar di dalamnya. Mengubah angka sebuah ukuran akan menggambar ulang lintasan dalam ukuran itu.

## Memakai ulang spec di model lain

- {{ui:Export .json}} menyimpan spec yang dipilih sebagai file kecil; {{ui:Export all}} menyimpan setiap spec dalam model. {{ui:Import a file}} membacanya kembali.
- {{ui:Export .csv}} menyimpan tabel ukuran untuk spreadsheet. {{ui:Import a file}} juga membaca `.csv`.
- {{ui:Paste rows}} menerima tabel yang disalin dari spreadsheet. Baris pertama memberi nama kolom: `Size`, `OD`, dan `Wall` (atau `ID`), dan secara opsional `DN`, `Pressure`, `Weight`. Satu baris per ukuran. Angkanya dalam milimeter, kecuali Anda memilih inci atau sebuah sel menuliskan satuannya (`0.065 in`).

## Spec awal

{{ui:Add a starter spec}} menambahkan salah satu dari ini ke model Anda sebagai salinan yang dapat Anda sunting:

| Spec awal | Ukuran |
|---|---|
| Tabung ASME BPE | 1/4" sampai 6" |
| Tabung EN 10357 seri A (DIN 11850 baris 2) | DN10 sampai DN200 |
| Tabung baja EN 10255, seri medium | DN15 sampai DN150 |
| Tabung baja EN 10255, seri berat | DN15 sampai DN125 |

Tabel ini berisi diameter luar dan tebal dinding yang dicantumkan oleh dua atau lebih halaman pemasok yang dipublikasikan untuk standar tersebut dan sepakat. Tabel ini tidak diambil dari standar itu sendiri. Ukuran yang hanya diberikan oleh satu halaman dihilangkan. Setiap spec awal menampilkan halaman sumbernya dan ditandai "periksa terhadap standar proyek Anda". Tidak ada kekasaran, peringkat tekanan, atau berat yang diberikan.

## Menggambar lintasan dalam spec

1. Pilih {{ui:Pipe}}. Layanan yang Anda centang di sebuah spec akan mulai di dalamnya. Untuk lintasan lain, pilih spec dalam daftar material: spec tercantum setelah material bawaan sebagai "Spec: nama".
2. Daftar ukuran kini hanya berisi ukuran spec itu. Pilih satu dan gambar lintasannya.

Untuk memindahkan lintasan ke dalam spec nanti, pilih lintasan itu dan ubah **Material** di Properti. Ukurannya menjadi ukuran spec yang paling dekat berdasarkan diameter luar.

Di file IFC, pipa membawa nama spec, standar, material, sambungan, dan dimensinya (`CadCraft_PipeSpec` dan `Pset_PipeSegmentTypeCommon`, pada pipa dan pada tipenya).

Perhitungan ukuran dan penurunan tekanan membaca diameter dalam spec. Jika spec memiliki kekasaran, gesekan lintasan dihitung dengannya (Darcy-Weisbach); tanpanya, nilai bawaan perhitungan yang dipakai.

## Valve, strainer, dan damper

1. Pilih {{ui:Valve}} lalu pilih jenisnya di bilah: gate, ball, butterfly, globe, check, balancing, atau control valve, atau strainer, untuk pipa; volume damper atau fire damper untuk duct.
2. Klik pada lintasan tempat ia akan dipasang. Lintasan dipotong di sekelilingnya dan kedua sisinya tetap tersambung. Valve mengambil ukuran lintasan dan bergerak bersama lintasan.

Properti lintasan mendaftar masing-masing dengan {{ui:Remove}}; lintasan menyatu kembali.

Perhitungan penurunan tekanan hanya menghitung rugi fitting untuk valve gate, ball, globe, dan check. Jenis lain, damper, dan famili pabrikan tidak menambah rugi di sana: perhitungkan sendiri dalam pemeriksaan Anda. Semuanya dihitung dalam jadwal **Fitting dan valve** serta dalam takeoff, dan ditulis ke IFC sebagai valve, filter (strainer), dan damper dengan dua port yang tersambung.

## Famili pabrikan sebagai famili

1. Buka {{ui:Build}} dan pilih {{ui:Families}}, lalu {{ui:Import a model}}. File IFC, STEP, OBJ, STL, glTF, dan item Pustaka dibaca. Untuk OBJ dan STL, atur dulu satuan dan sumbu ke atas file tersebut.
2. Di dialog port, ketik nama, pabrikan, dan nomor model.
3. Pilih apakah ia akan berada **Pada lintasan** (valve, strainer, atau damper) atau berupa **Peralatan**, dan bagaimana ia akan ditulis.
4. Beri port-portnya. Setiap port memiliki nama, pipa atau duct, layanan, ukuran dalam milimeter (diameter luar untuk pipa), ukuran nominal seperti yang diberikan oleh spec Anda, tipe ujung, posisinya, dan arah hadapnya. {{ui:On a face}} menempatkan port di tengah sisi kotak model. Tampilan atas kecil menampilkan port-portnya.
5. Pilih {{ui:Save the family in the model}}.

Famili yang berada pada lintasan memerlukan tepat dua port yang saling membelakangi pada satu garis. Pilih famili itu di daftar alat Valve dan klik pada lintasan: ia ditempatkan dengan panjangnya sendiri dan pipa tersambung ke port-portnya.

Famili tidak pernah direntangkan. Jika port-portnya tidak sesuai dengan ukuran lintasan, Anda diberi tahu saat menempatkannya, dan {{ui:Check connections}} mendaftarnya.

Famili peralatan ditempatkan dengan {{ui:Equipment}}, jenis **Famili pabrikan**. Pipa dan duct menempel ke port-portnya.

{{ui:Download as a Library item}} menyimpan famili beserta port-portnya sebagai file yang dapat Anda kirim ke Pustaka.

## Radiator dan konvektor

{{ui:Equipment}} juga memiliki **Radiator** dan **Konvektor / pemanas panel**: badan generik dengan sambungan aliran dan kembali untuk air pemanas. Lihat [Peralatan MEP dengan port](topic:mep-equipment).
