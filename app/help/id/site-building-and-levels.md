---
title: Tapak, bangunan di atasnya, dan level-nya
summary: Gambar garis batas tapak, letakkan dan putar bangunan di tapak, tambahkan level pada ketinggian yang ditentukan atau bagi tinggi bangunan, dan gambar pada level yang Anda pilih.
keywords: tapak, denah tapak, garis bangunan, jarak mundur, servitut, easement, hak jalan, batas properti, kavling, plot, batas, penempatan bangunan, putar bangunan, tempatkan bangunan, level, lantai, tambah level, bagi tinggi, tinggi antarlantai, IfcSite, IfcBuilding, IfcBuildingStorey, struktur spasial
from: 48d10c1e
---

## Yang akan Anda lakukan

Siapkan bagian dari model IFC yang menampung semua yang lain: tapak, bangunan di atasnya, dan level-level bangunan.

Model disusun sebagai **tapak** yang menampung **bangunan**, yang menampung **level-level** (lantai); dinding, lantai, dan segala hal lainnya termasuk ke dalam sebuah level. {{ui:File}} › {{ui:Bangunan baru}} menyiapkan ketiganya. Model dari program lain yang memiliki bangunan tetapi tidak memiliki tapak akan mendapatkan tapak saat Anda pertama kali menggambarnya: bangunan ditempatkan di atasnya seperti posisinya semula.

## Menggambar tapak

1. Aktifkan {{ui:Gambar}}, lalu pilih {{ui:Build}} › {{ui:Tapak}}.
2. Klik sudut-sudut tapak (alat ini menempel seperti alat Dinding). Klik sudut pertama lagi, klik ganda, atau tekan {{key:Enter}} untuk selesai. {{key:Backspace}} membatalkan satu sudut.
3. Baris tersebut menampilkan luas tapak. Gambar ulang untuk mengubahnya.

Denah setiap level menampilkan garis batas tapak sebagai garis properti.

## Menempatkan bangunan di tapak

Dengan {{ui:Tapak}} aktif, ketik **X** dan **Y** bangunan di tapak serta **Putar** dalam derajat, atau klik {{ui:Tempatkan bangunan dengan klik}} lalu klik di tempat titik asal bangunan. Semua yang ada di bangunan (level, dinding, grid, semua yang sudah Anda gambar) ikut bergerak; tapak dan garis batasnya tetap. Denah terus menampilkan setiap level tegak lurus terhadap bangunan.

## Garis bangunan dan servitut

Garis bangunan dan servitut (easement, hak jalan) digambar di tapak sebagai batasan. Keduanya **memberi peringatan, tidak pernah memblokir**: dinding di atasnya tetap digambar sesuai permintaan Anda, dan peringatan yang menyebutkan dinding serta garis atau servitutnya muncul di Masalah. Pindahkan dinding kembali dan peringatannya hilang. Peringatan dapat diterima dengan alasan (misalnya keringanan yang diberikan oleh pihak berwenang).

- **Garis bangunan dari jarak mundur.** {{ui:Build}} › {{ui:Garis bangunan}}, lalu {{ui:Jarak mundur}}: ketik seberapa jauh garis berada dari setiap batas tapak. Batas-batas diberi nomor di denah selama alat aktif. Garis dihitung dari jarak tersebut dan mengikuti garis batas tapak jika Anda menggambarnya ulang dengan jumlah batas yang sama. Jaraknya berasal dari Anda, diambil dari akta tanah atau skema zonasi Anda; BimCraft tidak mengisi satu pun.
- **Garis bangunan yang digambar.** Dengan {{ui:Garis bangunan}} aktif, klik titik-titiknya dan selesaikan dengan klik ganda atau {{key:Enter}}. Selesaikan pada titik pertama untuk garis tertutup: area di dalamnya adalah tempat boleh membangun, dan dinding dengan bagian di luarnya akan diberi peringatan. Garis terbuka hanya memberi peringatan untuk dinding yang memotongnya.
- **Servitut.** {{ui:Build}} › {{ui:Servitut}}: pilih jenisnya, ketik namanya, referensi terdaftarnya, dan lebarnya, lalu klik garis tengahnya dan selesaikan (sebagai jalur), atau tutup pada titik pertamanya (sebagai area). Dinding dengan bagian di atasnya akan diberi peringatan, di setiap level.
- Muka yang tepat berada di atas garis dianggap menyentuh, bukan memotong (toleransi 1 mm).
- Opsi massa aktif dari setiap kumpulan opsi diperiksa dengan cara yang sama seperti dinding: massa di luar batas, di atas garis bangunan, atau pada servitut akan diberi peringatan. Lihat [Opsi massa yang disimpan berdampingan](topic:massing-options).
- Pilih satu dengan {{ui:Pilih}} untuk mengubah namanya, referensinya, jenisnya, atau lebarnya, memindahkannya, atau menghapusnya.

Garis dan servitut digambar di denah setiap level, di lembar, dan di PDF denah: garis bangunan putus-putus, servitut titik-titik, masing-masing dengan labelnya. Dalam file IFC, setiap garis berupa anotasi (IfcAnnotation, tipe BuildingLine atau Servitude) pada tapak, dengan garisnya sebagai kurva sederhana yang dapat dibaca program lain. Pemeriksaan memakai garis luar dinding yang sebenarnya pada denah, dengan sambungannya seperti yang digambar; dinding melengkung diperiksa berdasarkan ketebalannya sendiri terhadap garis tengahnya.

## Menambahkan level

Di panel {{ui:Level}}, {{ui:Tambahkan level di atas}} menambahkan satu level, {{ui:Tambahkan level di bawah}} menambahkan satu di bawah yang paling rendah (basemen, dengan elevasi negatif). {{ui:Tambah level…}} menambahkan beberapa sekaligus:

- **Pada ketinggian ini**: ketik ketinggian di atas level terendah, dipisahkan dengan koma (misalnya `12', 24', 36'`). Ketinggian yang sudah memiliki level akan dilewati.
- **Bagi tinggi bangunan**: ketik tinggi bangunan dan jumlah level. Level yang sudah Anda miliki berpindah ke ketinggian barunya dari yang terendah ke atas, level yang belum ada ditambahkan, dan level di atasnya tetap di tempatnya.

Dinding yang mencapai level di atasnya akan mengikutinya, begitu pula kolom dan rampa.

{{ui:Salin level ini…}} (di panel yang sama) menyalin apa yang digambar pada level yang sedang Anda lihat ke level lain atau ke level baru di atas, sehingga denah lantai dapat dinaikkan ke atas bangunan dalam satu langkah. Lihat [Gambar dinding](topic:draw-walls).

## Menggambar pada sebuah level

Setiap alat {{ui:Gambar}} bekerja pada level yang dipilih di daftar level denah (atau dipilih di panel {{ui:Level}}): apa pun yang Anda gambar menjadi milik level tersebut.

## Yang seharusnya Anda lihat

- Setiap perubahan ini adalah satu langkah: {{key:Mod+Z}} membatalkannya.
- Dalam file IFC: tapak (IfcSite) dengan garis batas dan luasnya, bangunan (IfcBuilding) yang ditempatkan di atasnya, dan level-level (IfcBuildingStorey) di dalam bangunan.

Lihat juga [Koordinat di BimCraft](topic:coordinates) untuk titik asal proyek dan titik survei.
