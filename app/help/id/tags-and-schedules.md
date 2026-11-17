---
title: Beri tag pada elemen dan buat jadwal berdasarkan tag
summary: Tentukan tag Anda sendiri (nama, tipe, nilai yang diizinkan, kelas mana yang berlaku), beri tag pada banyak elemen sekaligus, dan buat jadwal yang kolom, filter dan kelompoknya membaca tag. Tag disimpan di dalam IFC.
keywords: tag, tag, penandaan, properti kustom, parameter, parameter bersama, set properti, pset, jadwal, filter, kelompokkan menurut, finishing, peringkat api, edit massal, csv
from: 9cc7c90d
---

## Yang akan Anda lakukan

Tag adalah properti milik Anda sendiri, seperti *Finishing* atau *Peringkat api*. Anda mendefinisikannya sekali untuk proyek, mengaturnya pada banyak elemen sekaligus, dan setiap jadwal di BimCraft dapat membacanya: jadwal tag di sini, {{ui:Kuantitas}}, Cari, Warnai menurut properti dan [Dokumen dari model](topic:documents-from-the-model).

## Langkah

1. Buka model IFC, atau mulai bangunan baru.
2. Di panel kiri, di bawah {{ui:Kuantitas}}, buka {{ui:Tag}}.
3. Klik {{ui:Tambahkan tag}}. Beri nama, pilih tipenya, dan bila perlu cantumkan nilai yang diizinkan (dengan koma) serta kelas yang dituju (`IfcDoor`, `IfcWall` …). Klik {{ui:Tambahkan tag}}.
4. Pilih elemen di model (Cari membantu: pilih semua pintu sekaligus).
5. Di bawah {{ui:Beri tag pada pilihan}}, pilih atau ketik nilai untuk setiap tag yang ingin Anda atur, biarkan yang lain seperti semula, lalu klik {{ui:Terapkan ke … elemen yang dipilih}}.
6. Di bawah {{ui:Jadwal tag}}, centang kolom, tambahkan filter, pilih {{ui:Kelompokkan menurut}}, lalu {{ui:Unduh CSV}}.

## Yang akan Anda lihat

- Sebuah langkah di daftar perubahan untuk setiap definisi yang disimpan dan setiap pemberian tag; {{ui:Urungkan}} membatalkannya.
- Elemen dari kelas yang tidak dimaksud oleh suatu tag dikecualikan dari tag itu, dan baris status menyebutkan jumlahnya.
- Jadwal tag mencantumkan satu baris per elemen, dikelompokkan menurut kolom yang Anda pilih; klik sel pertama pada baris untuk memilih elemen itu.
- {{ui:Kuantitas}} mencantumkan tag di bawah `CadCraft_Tags`, sehingga Anda dapat menjumlahkan luas atau jumlah menurut tag di sana.

## Tipe

Tipenya sama dengan daftar parameter keluarga: Panjang (milimeter), Sudut (derajat), Angka, Bilangan bulat, Ya / Tidak, Pena (1–16), Teks, Material dan Isian. Nilai yang tidak sesuai dengan tipenya, atau bukan salah satu nilai yang diizinkan, ditolak dengan pesan, dan tidak ada yang berubah.

## Perlu diketahui

- Semuanya adalah IFC biasa, sehingga program lain dapat membaca nilainya: definisinya ada di set properti `CadCraft_TagDefs` pada proyek, nilainya ada di set properti `CadCraft_Tags` pada setiap elemen (satu properti untuk setiap tag). Panjang ditulis dalam satuan panjang file.
- `IfcWall` dalam kelas tag juga mencakup dinding standard-case dan dinding berelemen.
- Mengganti nama tag mengganti nama nilainya pada setiap elemen dalam langkah yang sama. Menghapus tag hanya menghapus definisinya: nilai yang sudah diatur tetap berada di elemen sebagai properti biasa. Hapus dulu nilainya (pilih {{ui:Hapus}}) untuk melepaskannya.
- Tag di aplikasi drafting CadCraft (atribut blok) belum dibuat.
