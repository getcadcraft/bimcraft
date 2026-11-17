---
title: Tentukan ukuran pipa dan duct, periksa isian kabel dan pencahayaan
summary: Periksa ukuran pipa suplai dan duct dengan penurunan tekanan, rutekan kabel melalui cable tray dan conduit serta lihat isiannya, dan hitung iluminans di dalam ruangan dari file IES atau EULUMDAT. Nilai bawaan diberi label; ketik nilai dari kode yang berlaku.
keywords: ukuran, ukuran pipa, ukuran duct, penurunan tekanan, unit fixture, kebutuhan, hunter, hazen-williams, kecepatan, gesekan, gesekan sama, tekanan kipas, damper, jalur kritis, cable tray, conduit, isian, jadwal kabel, ies, ldt, eulumdat, fotometri, iluminans, lux, keseragaman, perhitungan pencahayaan, kepadatan daya, mep, perhitungan, masalah
from: 9cb90815
---

## Yang akan Anda lakukan

Gambar pipa, duct, cable tray, dan conduit seperti biasa, lalu buka panel **Perhitungan**. Tiap tab membaca model, menampilkan tabel, dan mendaftar apa yang salah sebagai Masalah di panel ⚠. Ketika sebuah ukuran akan memperbaiki Masalah, **Terapkan ukuran** mengubah jalur dalam satu langkah {{ui:Urungkan}}.

Ini adalah alat bantu gambar. Setiap nilai bawaan diberi label di layar, dan tidak satu pun berupa tabel kode: ketik angka dari standar yang Anda gunakan untuk desain, dan minta hasilnya ditinjau oleh insinyur yang bertanggung jawab atasnya.

## Pipa

1. Pilih kunci **sistem** (air dingin `cw`, air panas `hw`).
2. Atur kecepatan tertinggi dan, jika Anda ingin tekanan diperiksa, tekanan di sumber serta tekanan terendah yang dibutuhkan sebuah fixture.
3. Klik {{ui:Periksa}}.

Tiap pipa membawa kebutuhan dari unit fixture di bawahnya. Kebutuhan itu berasal dari kurva unit fixture terhadap aliran, sesuai cara yang dijelaskan Hunter. **Kurva bawaan hanyalah contoh, bukan tabel kode**; Masalah akan menyatakannya sampai Anda mengetik kurva sendiri. Gesekan memakai Hazen–Williams, fitting memakai koefisien kehilangan, dan kenaikan menghabiskan 9.8 kPa per meter. Unit sebuah fixture berasal dari jenisnya, atau dari angka yang Anda atur dengan alat asisten `loads_set`.

## Duct

Atur sistemnya, laju gesekan (gesekan sama) atau kecepatan, dan kehilangan koil, filter, atau peredam apa pun. Terminal mengambil aliran udaranya dari `loads_set` pada diffuser. Tabel menampilkan kecepatan dan gesekan per potongan, **tekanan kipas** di jalur kritis, dan tekanan yang harus diambil damper tiap terminal lain. Kehilangan fitting memakai koefisien bawaan yang dibulatkan, bukan basis data fitting.

## Cable tray dan conduit

Gambar dengan alat Duct: sistem **Cable tray** dan **Conduit** disimpan sebagai pembawa kabel, sehingga program lain membacanya sebagai tray dan conduit. Di tab Kabel, tempel daftar kabel (tag, diameter luar dalam mm, jumlah, `from`, `to`). `from` dan `to` adalah tag sebuah peralatan atau titik `x,y,z` dalam milimeter. Kabel mengikuti rute menerus terpendek melalui tray dan conduit; tiap jalur menampilkan isiannya terhadap batas yang Anda ketik, dan jadwal kabel disimpan sebagai CSV dengan panjang yang mencakup persentase kelonggaran serta ujung-ujungnya.

## Pencahayaan

Beri tiap luminer file IES (LM-63) atau EULUMDAT-nya dengan alat asisten `photometry_set`. Ketik target, jarak grid, dan tinggi bidang kerja. Hasilnya hanya iluminans **langsung**: tanpa pantulan antarpermukaan dan tanpa bayangan, sehingga di dalam ruangan ia merupakan batas bawah.

## Sprinkler kebakaran

Add-on **Fire sprinklers** memiliki tab sendiri; lihat bantuannya.
