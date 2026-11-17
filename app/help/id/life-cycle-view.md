---
title: Lihat apa yang aus selama lima puluh tahun
summary: Jendela, pintu, finishing dan atap yang dimiliki model, umur layanannya, tahun saat masing-masing diganti, serta biaya per tahun dan nilai sekarangnya saat Anda mengetik biaya per satuan.
keywords: siklus hidup, life cycle, lifecycle, umur layanan, service life, penggantian, pemeliharaan, biaya, nilai sekarang, present value, diskon, inflasi, 50 tahun, jendela, cat, atap, finishing, biaya seumur hidup
from: 1b849545
---

Bagian {{ui:Tampilan siklus hidup}} pada panel kiri mencantumkan apa yang dimiliki model dan yang aus, serta kapan diganti selama periode studi (50 tahun sebagai awal). Tidak ada yang di dalam model yang diubah.

## Membacanya

Setiap bagian menampilkan kuantitasnya (diukur dari model: luas jendela, pintu luar dan dalam, finishing dinding luar, cat interior, finishing lantai dan plafon, luas proyeksi atap, tangga), **umur dalam tahun** dan **biaya per satuan**. Sebuah bagian diganti saat mencapai umurnya, dua kali umurnya, dan seterusnya selama itu masih sebelum akhir studi. Jadi jendela 30 tahun dalam studi 50 tahun diganti sekali, pada tahun ke-30. Umur layanan adalah angka perencanaan yang umum: ubah sesuai produk dan iklim Anda. Tidak ada biaya yang diasumsikan; ketik satu untuk melihat uang per tahun, totalnya, dan nilai sekarangnya. Tambahkan tingkat diskon dan tingkat inflasi jika Anda menginginkannya.

{{ui:Simpan jadwal (CSV)}} menulis komponen dan tahunnya. Pipa, saluran, kabel dan peralatan juga dicantumkan (lihat di bawah).

## Pipa, saluran, kabel dan peralatan

- **Pipa dan saluran** dihitung dalam meter dari setiap jalur yang digambar. **Peralatan** (pompa, kipas, katup, terminal, perlengkapan, outlet, sakelar, panel dan benda lain yang dilacak tab Assets) dihitung per jenis, setiap jenis dengan umur perencanaan. Item yang *umur layanan*-nya diatur di tab Assets menjadi baris tersendiri dengan umur itu, dan jika punya tanggal pemasangan, ia dimulai dari usianya: pompa berusia 16 tahun dengan umur 10 tahun jatuh tempo sekarang, lalu setiap sepuluh tahun.
- **Kabel** adalah **perkiraan**: jarak denah dari panel melalui perangkat setiap sirkuit, yang terdekat lebih dulu, dikali 1.25 untuk rute. Model tidak menggambar kabel, jadi periksa dengan perhitungan volume Anda sendiri.
- Umur adalah angka perencanaan untuk ditinjau, bukan sumber.

## Karbon per penggantian

Centang {{ui:Sertakan karbon terkandung dari setiap penggantian}}. Jendela, pintu, tangga, atap, pipa atau peralatan baru dihitung dengan karbon yang dibawa elemen model sejenis (faktor dari tab Carbon, per satuan). Bagian tanpa elemen atau faktor, seperti cat, finishing dan kabel, menampilkan tanda hubung dan tetap dicantumkan. Akhir umur bagian lama dan pekerjaan penggantiannya tidak dihitung.
