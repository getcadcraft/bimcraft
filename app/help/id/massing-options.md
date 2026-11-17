---
title: Opsi massa disimpan berdampingan
summary: Simpan beberapa opsi massa di model yang sama, jadikan salah satunya opsi aktif, periksa terhadap garis bangunan dan servitut tapak, ambil massa dari ModelCraft, dan kembangkan opsi terpilih menjadi dinding dan lantai.
keywords: massa, massing, mass, opsi, option, set opsi, skema, scheme, konsep, concept, desain konsep, tahap 2, alternatif, bandingkan opsi, opsi aktif, massa bangunan, dorong tarik, push pull, modelcraft, civilcraft, luas lantai bruto, jejak, volume, kembangkan massa, servitut, garis bangunan, batas mundur
from: 69a01459
---

## Yang akan Anda lakukan

Simpan opsi massa dari sebuah konsep dalam satu model, bukan dalam file terpisah: beberapa massa bangunan berdampingan, salah satunya **opsi aktif**, dan yang lain disimpan untuk perbandingan.

Opsi massa adalah massa bangunan: sebuah garis tepi yang dinaikkan ke tinggi tertentu, dengan sejumlah lantai. Itu belum berupa dinding. Anda dapat menyimpan sebanyak yang diinginkan, dikelompokkan dalam **set opsi** (opsi dalam satu set adalah alternatif satu sama lain).

## Menyimpan opsi

1. Buka {{ui:Program ruang ke massing}}, ketik program ruang dan garis tepinya, lalu pilih {{ui:Temukan opsi}}.
2. Pilih salah satu opsi yang tercantum.
3. Di bawah {{ui:Opsi massa dalam model}}, ketik nama untuk {{ui:Set opsi}} jika Anda menginginkannya, lalu pilih {{ui:Simpan opsi yang dipilih}}.

Opsi muncul di model sebagai massa bangunan dan di daftar, dengan lantai, jejak, luas lantai bruto dan volumenya. Tidak ada yang dibangun. Simpan opsi lain dengan cara yang sama.

Opsi pertama dalam sebuah set adalah opsi aktifnya. Setiap langkah adalah satu langkah urungkan.

## Opsi aktif

Satu opsi dari setiap set adalah opsi aktif. Artinya ada dua hal:

- **Lantainya dihitung sebagai luas lantai bangunan.** Opsi aktif memiliki satu ruang per lantai yang membawa luas bruto lantai itu, sehingga apa pun yang membaca luas lantai melihat opsi yang berlaku dan tidak yang lain.
- **Diperiksa terhadap tapak.** Jika berada di luar batas tapak, di atas garis bangunan, atau di atas servitut, peringatan yang menyebutnya akan muncul di {{ui:Masalah}}. Itu hanya peringatan: tidak ada yang ditolak. Opsi yang tidak aktif tidak diperiksa.

Pilih {{ui:Jadikan aktif}} pada opsi lain untuk mengubahnya.

{{ui:Sembunyikan opsi yang tidak aktif}} menyembunyikan yang lain di tampilan 3D. Itu hanya untuk peramban ini dan tidak disimpan dalam file.

## Massa dari ModelCraft

Di ModelCraft, {{ui:Ekspor}} › {{ui:Massa ke BimCraft…}} mengirim setiap grup atau komponen sebagai satu opsi. BimCraft membuka file dengan opsi-opsi tercantum.

Untuk memasukkannya ke model yang sudah terbuka, pilih {{ui:Tambahkan opsi massa dari file}} dan pilih file `.ifc`. Massanya masuk sebagai opsi dari sebuah set, dalam satu langkah urungkan, berdiri di tempat ia dimodelkan. File massa bangunan dari CivilCraft bekerja dengan cara yang sama.

Opsi yang bertanda "(bentuk disederhanakan)" tidak berupa balok tegak biasa di ModelCraft (ia mundur, miring, atau tidak tertutup). Massanya di sini adalah garis tepi alasnya yang dinaikkan ke tingginya; luas lantai dan volumenya diukur dari solid itu sendiri.

## Kembangkan opsi terpilih

Pilih {{ui:Kembangkan}} pada sebuah opsi. Ia menjadi level (ditambahkan sampai jumlah lantainya), dinding di sekeliling garis tepinya di setiap lantai, dan pelat lantai di masing-masing, dalam satu langkah urungkan. Opsi itu keluar dari daftar; opsi lain tetap seperti semula. Belum ada atap.

{{ui:Ganti nama}} mengubah nama opsi, {{ui:Hapus}} mengeluarkannya dari model. Menghapus opsi aktif membuat opsi lain pertama dalam set menjadi aktif.

## Yang seharusnya Anda lihat

- Setiap opsi yang disimpan sebagai blok di tampilan 3D dan sebagai baris di daftar.
- "(aktif)" di sebelah satu opsi dari setiap set.
- Peringatan di {{ui:Masalah}} saat opsi aktif melintasi batas tapak, garis bangunan, atau servitut.

## Perlu diketahui

- Di file IFC, sebuah opsi adalah building element proxy dengan set properti `CadCraft_SiteMass` (set opsinya, nama opsi, dan apakah ia aktif, ada di set itu). Lantai opsi aktif adalah ruang bertipe `MassingFloor`. Program lain membaca proxy sebagai elemen generik.
- Menyimpan opsi tidak pernah menambah level; mengembangkannya yang menambahkan.
- Asisten dapat mencantumkan opsi yang tersimpan, menyimpan satu, menjadikan satu aktif, mengganti nama, mengembangkan, atau menghapusnya.
