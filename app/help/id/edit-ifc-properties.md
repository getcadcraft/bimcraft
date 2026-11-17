---
title: Ubah properti IFC dan simpan salinan yang diedit
summary: Ubah nama, tag, deskripsi, atau nilai properti elemen, urungkan, dan unduh berkas IFC baru sementara aslinya tetap seperti semula.
keywords: edit, ubah, properti, parameter, tag, nama, ganti nama, tanda, simpan sebagai, unduh, urungkan, salin, ifc, tulis
from: f8035d62
---

## Yang akan Anda lakukan

Perbaiki data dalam model IFC: ganti nama elemen, perbaiki tag-nya, ubah nilai properti. Lalu simpan berkas IFC baru dengan perubahan Anda. Berkas yang Anda buka tidak pernah disentuh.

## Yang dapat Anda ubah

| Kolom isian | Dapat diedit |
|---|---|
| Nama, Tipe objek, Tag, Deskripsi | Ya |
| Nilai properti tunggal (teks, angka, Ya/Tidak) | Ya |
| Properti tipe (set yang ditandai "(type)") | Ya, dan perubahan berlaku untuk setiap elemen dari tipe itu |
| Tipe, GlobalId, Baris | Tidak |
| Kuantitas (panjang, luas, volume, jumlah) | Tidak |
| Daftar, enumerasi, dan nilai multi-bagian lainnya | Tidak |
| Geometri, posisi, menambah atau menghapus elemen | Tidak |

## Langkah

1. Buka model IFC dan klik elemen yang ingin Anda ubah.
2. Di panel {{ui:Properties}}, klik nilai yang ingin Anda ubah. Nilai itu berubah menjadi kotak teks. Nilai kosong tampil sebagai *kosong*.
3. Ketik nilai baru.
4. Tekan {{key:Enter}}, atau klik di tempat lain, untuk menyimpannya. Tekan {{key:Esc}} untuk membatalkan.
5. Lihat nilainya: sekarang tebal dengan batang biru di sebelahnya, yang menandai nilai yang diedit.
6. Lihat bagian {{ui:Changes}} di sebelah kiri: perubahan tercantum sebagai *elemen*: *kolom*, dari nilai lama ke nilai baru.
7. Ulangi untuk nilai lain atau elemen lain.
8. Klik {{ui:Save as IFC}} (tombolnya menampilkan berapa banyak perubahan yang menunggu, misalnya "Simpan sebagai IFC (3)"), atau tekan {{key:Mod+S}}.
9. Cari "*original name* (edited).ifc" di folder unduhan Anda.

## Yang seharusnya terlihat

Baris status menyatakan "Disimpan *name* (edited).ifc dengan *n* perubahan (… byte). Berkas asli Anda tidak berubah." Daftar {{ui:Changes}} kosong, siap untuk putaran berikutnya.

## Jenis nilai

- **Teks**: apa pun yang Anda ketik disimpan apa adanya. Mengosongkan Nama, Tipe objek, Tag, atau Deskripsi menghapus nilainya.
- **Angka**: ketik angka biasa, seperti `2.4` atau `1200`, dalam satuan berkas itu sendiri. Tanpa simbol satuan. Selain itu akan tampil "Gunakan angka."
- **Bilangan bulat** (jumlah, integer): "Gunakan bilangan bulat." jika Anda mengetik desimal.
- **Ya/Tidak**: nilainya menjadi menu dengan Ya dan Tidak.

Setiap nilai mempertahankan tipe IFC-nya, sehingga angka tetap menjadi angka dan program lain membacanya dengan benar.

## Urungkan

1. Klik {{ui:Undo}} di bagian {{ui:Changes}}, atau tekan {{key:Mod+Z}} saat Anda tidak sedang mengetik di kolom isian.
2. Ulangi untuk mengurungkan lebih banyak. Setiap pengurungan menghapus perubahan terbaru.

Anda tidak dapat mengurungkan melewati penyimpanan: setelah menyimpan, daftar dimulai lagi. Berkas yang disimpan menyimpan semuanya.

## Mengapa edit Anda hanya mengubah satu elemen

Pengekspor menghemat ruang dengan berbagi data. Satu set properti mungkin dibagi oleh dua puluh pintu, dan satu nilai ("Fire rating: 60 min") mungkin tercantum dalam sembilan puluh set. Jika BimCraft begitu saja mengubah nilai yang dibagi, setiap elemen yang berbagi nilai itu juga akan berubah.

Jadi BimCraft menyalin sebelum menulis:

- Jika set properti yang Anda edit dibagi dengan elemen lain, elemen Anda mendapat salinannya sendiri dari set itu, dan hanya salinan itu yang berubah.
- Jika nilai itu dibagi dengan set lain, set Anda mendapat salinannya sendiri dari nilai itu.

Tetangga mempertahankan data lama mereka. Ini disebut *salin saat menulis* (copy-on-write). Ini menambahkan beberapa entri kecil ke berkas, yang dibaca normal oleh setiap program IFC.

**Properti tipe adalah pengecualian dengan sengaja.** Set yang ditandai "(type)" milik tipe elemen, dan dalam IFC setiap elemen dari tipe itu membacanya dari sana. Mengubahnya berarti mengubah tipenya, sehingga setiap elemen dari tipe itu menampilkan nilai baru. Daftar {{ui:Changes}} menandai edit seperti itu dengan "(type)". Lihat [Ubah properti tipe untuk setiap elemen dari sebuah tipe](topic:type-vs-instance).

## Peringatan sebelum kehilangan pekerjaan

- Membuka berkas lain saat ada perubahan yang belum disimpan menanyakan "Anda memiliki *n* perubahan yang belum disimpan ke *file*. Buang perubahan itu?" Klik Batal untuk tetap bekerja, lalu simpan.
- Menutup atau memuat ulang tab dengan perubahan yang belum disimpan membuat peramban menanyakan apakah Anda ingin meninggalkan halaman.

## Kesalahan umum

- **Mengetik satuan.** `2400 mm` ditolak. Ketik `2400`.
- **Mengubah properti tipe padahal Anda bermaksud satu elemen.** Cari catatan "(type)" sebelum Anda mengetik. Jika Anda ingin satu elemen berbeda, ubah properti instance, atau Tag atau Nama-nya sebagai gantinya.
- **Mengharapkan berkas asli berubah.** Menyimpan selalu mengunduh berkas baru. Ganti sendiri yang asli jika itu yang Anda inginkan, dan simpan salinannya.
- **Menekan {{key:Mod+S}} tanpa perubahan.** BimCraft hanya menyimpan saat ada yang perlu disimpan; jika tidak, dialog "Simpan halaman" bawaan peramban mungkin terbuka. Tutup dialog itu.
- **Menyimpan dua kali dan mengharapkan dua berkas kecil.** Setiap penyimpanan memuat setiap edit sejak Anda membuka model.
- **Mengharapkan edit kembali ke berkas proyek.** BimCraft hanya menulis IFC. Bawa IFC yang diedit ke program authoring Anda seperti Anda mengimpor IFC mana pun.
