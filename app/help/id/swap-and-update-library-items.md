---
title: Tukar item yang sudah ditempatkan, dan perbarui item dari pustaka
summary: Ganti satu item pustaka yang sudah ditempatkan dengan item lain sambil mempertahankan tempat dan nomor itemnya, dan periksa Pustaka untuk versi yang lebih baru dari semua yang ada di model.
keywords: tukar, ganti, substitusi, perbarui, versi lebih baru, periksa pembaruan, pustaka, ditarik, perubahan lisensi, nomor item
from: 8bdfe01d
---

## Yang akan Anda lakukan

Ubah pilihan Anda terhadap sebuah item tanpa memindahkannya lagi, dan jaga agar item pustaka di dalam model tetap mutakhir.

## Tukar satu item

1. Klik item pustaka yang sudah ditempatkan di model.
2. Di {{ui:Properti}}, klik {{ui:Tukar item…}} di kotak **Item pustaka**. Tab {{ui:Pustaka}} terbuka.
3. Cari item baru dan klik kartunya.
4. Klik {{ui:Tukar … ke ini}}.

Elemen tetap di tempatnya, dengan putarannya, lantainya, nomor itemnya, kuantitasnya dan catatannya. Tipe, bentuk dan data item berubah menjadi item baru. Item yang ditempatkan dengan cara yang sama berbagi satu tipe, seperti saat Anda menempatkannya.

Item yang memiliki varian (lihat [Tempatkan dan tukar item pustaka yang punya varian](topic:library-variants)) mencantumkan varian lainnya di bagian atas tab {{ui:Pustaka}} saat Anda menukarnya: satu klik untuk masing-masing.

Bila item baru adalah jenis benda yang berbeda, misalnya wastafel sebagai pengganti meja, kelas IFC elemen berubah agar sesuai (di sini dari elemen perabot menjadi terminal sanitasi), sehingga perangkat lunak lain dapat menjadwalkannya dengan benar. Elemen tetap sama, dengan GlobalId yang sama, sehingga tautan ke elemen itu tetap berfungsi. {{key:Mod+Z}} mengembalikan kelas lama beserta item lama.

## Periksa pembaruan

1. Klik {{ui:Pembaruan}} di bilah alat (atau {{ui:Periksa pembaruan}} di kotak item pustaka).
2. Baca daftarnya: setiap item pustaka di model dengan versinya di model, versi terbarunya dan statusnya: **Sudah terbaru**, **Versi lebih baru**, **Ditarik** atau **Tidak ditemukan**. Daftar ini juga menjelaskan apa yang berubah (geometri, data, lisensi atau perbaikan).
3. Klik {{ui:Perbarui}} pada sebuah baris, atau {{ui:Perbarui semua}}.

## Yang akan Anda lihat

- "Diperbarui *n* penempatan. Penempatan, nomor item, kuantitas dan catatan tetap disimpan."
- Baris "Diperbarui: *item*" dalam daftar perubahan. {{key:Mod+Z}} membatalkan masing-masing.

## Perlu diketahui

- Hanya item yang berasal dari Pustaka yang dapat diperiksa. Item dari file tidak membawa id pustaka.
- Bila lisensi berubah, salinan yang sudah Anda tempatkan tetap memakai lisensi yang dibawanya sampai Anda memperbaruinya.
- Item yang **Ditarik** tidak ditawarkan untuk penempatan baru. Item yang ditarik karena alasan hak cipta tidak dapat diunduh sama sekali; gantilah dengan {{ui:Tukar item…}}.
- Varian yang sudah ditempatkan tetap menjadi varian itu bila versi baru item masih memilikinya; jika tidak, ia mengambil varian default item.
- Pemeriksaan hanya mengirim id dan versi item, tidak pernah model Anda.
