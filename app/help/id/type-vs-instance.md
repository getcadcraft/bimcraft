---
title: Ubah properti tipe untuk setiap elemen dari sebuah tipe
summary: Bedakan properti tipe dari properti instans, ubah nilai pada tipe agar setiap elemen mengikuti, dan pastikan suntingan satu elemen tetap miliknya sendiri.
keywords: tipe, instans, properti tipe, tipe famili, bersama, salin saat ditulis, semua elemen, suntingan massal, pabrikan, model
from: bffd8789
---

## Yang akan Anda lakukan

Atur pabrikan pada tipe pintu agar setiap pintu dari tipe itu menampilkannya, lalu beri satu pintu peringkat ketahanan api sendiri tanpa menyentuh yang lain. Ini menunjukkan perbedaan antara properti tipe dan properti instans di BimCraft.

## Tipe atau instans?

- Properti **instans** milik satu elemen: tag, penanda, ruangnya, peringkat ketahanan apinya sendiri.
- Properti **tipe** milik tipe yang dibagi banyak elemen: pabrikan, model, lebar tipe pintu.

Di panel {{ui:Properti}}, set yang berasal dari tipe memiliki " (type)" setelah namanya dan baris "Properti tipe: perubahan di sini berlaku untuk setiap elemen dari tipe ini." Set lainnya milik elemen itu sendiri. **Tipe** di blok pertama menampilkan nama tipenya.

## Langkah: ubah tipe

1. Buka model IFC dan klik sebuah pintu.
2. Catat **Tipe**-nya di blok pertama panel {{ui:Properti}}, misalnya "Single-Flush 900 x 2100".
3. Gulir ke set yang namanya diakhiri "(type)".
4. Klik nilai yang ingin Anda ubah, misalnya **Pabrikan**.
5. Ketik nilai baru dan tekan {{key:Enter}}.
6. Lihat daftar {{ui:Perubahan}}: entrinya diakhiri "(type)".
7. Klik pintu lain dari tipe yang sama.
8. Periksa nilai yang sama: nilainya juga menampilkan nilai baru.

## Langkah: ubah satu elemen saja

1. Klik satu pintu.
2. Buka set yang namanya tidak memuat "(type)", misalnya `Pset_DoorCommon`.
3. Klik nilai, misalnya **FireRating**, ketik nilai baru, lalu tekan {{key:Enter}}.
4. Klik pintu di sebelahnya, dari tipe yang sama.
5. Periksa nilai yang sama: nilainya masih menampilkan nilai lama.

Meskipun eksportir membagikan set properti itu di antara kedua pintu, BimCraft memberi pintu pertama salinannya sendiri sebelum mengubahnya. Lihat [Mengapa suntingan Anda hanya mengubah satu elemen](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Simpan

1. Klik {{ui:Simpan sebagai IFC}} atau tekan {{key:Mod+S}}.
2. Buka salinan yang disimpan di BimCraft, atau di penampil IFC apa pun, untuk memeriksa kedua perubahan.

## Kesalahan umum

- **Tidak setiap model memiliki tipe.** Beberapa eksportir tidak menulis objek tipe, atau menaruh semuanya pada instans. Maka tidak ada set "(type)", dan setiap elemen harus diubah sendiri.
- **Nilai yang sama muncul dalam set tipe dan set instans.** Beberapa eksportir menulis parameter di kedua tempat. Program lain mungkin membaca salah satunya; ubah keduanya jika Anda ingin keduanya selaras.
- **Mengharapkan dapat memilih "semua pintu dari tipe ini" dan mengeditnya bersama-sama.** Tidak ada pilihan jamak di build ini. Properti tipe adalah cara untuk mengubah banyak elemen sekaligus.
