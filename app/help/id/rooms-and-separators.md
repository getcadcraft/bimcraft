---
title: Ruang dan pemisah ruang
summary: Pilih ruang untuk memberinya nama dan nomor serta membaca luas, keliling, dan volumenya. Gambar pemisah ruang di tempat dua ruang bertemu tanpa dinding di antaranya.
keywords: ruang, ruang-ruang, pemisah ruang, garis pemisah, space, IfcSpace, nama, nomor, luas, keliling, volume, denah terbuka, membagi ruang, dapur dan ruang keluarga, tidak tertutup
from: d4c1d66b
---

## Yang akan Anda lakukan

Beri nama pada ruang yang dibentuk dinding, dan bagi ruang terbuka menjadi dua tanpa dinding.

## Tempat alatnya

- Tata letak pita: {{ui:Arsitektur}} › **Ruang & Area** › {{ui:Ruang}} dan {{ui:Pemisah ruang}}.
- Tata letak klasik: bilah Gambar › menu {{ui:Ruang}}.
- Gaya menu apa pun: perintahnya bernama Room dan Room Separator; palet perintah akan menemukannya.

## Langkah

1. Gambar dindingnya. Setiap lingkar dinding yang tertutup sudah merupakan ruang: BimCraft membuatnya, memberinya nomor, dan memberinya luas saat Anda menggambar.
2. Pilih {{ui:Ruang}}. Gerakkan di atas denah: ruang di bawah penunjuk akan menyala dengan luas, keliling, dan volumenya.
3. Untuk menamai ruang dengan cepat, ketik {{ui:Nama}} dan {{ui:Nomor}} di baris itu lebih dulu, lalu klik di dalam ruang. Nomor naik satu untuk ruang berikutnya (101, 102; A-09, A-10).
4. Atau cukup klik ruang: ia dipilih, dan Properti menampilkan nama, nomor, luas, keliling, volume, dan tag-nya.
5. Untuk membagi ruang terbuka, pilih {{ui:Pemisah ruang}} lalu klik dua titik: dari dinding ke dinding, atau dari dinding ke pemisah lain. Lanjutkan mengklik untuk rangkaian; Enter, Esc, atau klik dua kali untuk mengakhiri.

## Apa yang dilakukan pemisah

- Ia membatasi ruang seperti dinding tanpa ketebalan. Luas kedua ruang dijumlahkan persis sama dengan ruang asalnya.
- Ruang yang memuat bagian tengah ruang lama tetap memakai nama dan nomornya. Yang lain adalah ruang baru.
- Pemisah yang berhenti di area terbuka, tanpa menyentuh apa pun di salah satu ujungnya, tidak membagi apa pun. Perpanjang, maka ia akan membagi.
- Bagian pemisah yang berada di dalam dinding diabaikan, jadi Anda dapat menempel ke garis tengah dinding.
- Pilih pemisah dan tekan Delete untuk menghapusnya: kedua ruang kembali menjadi satu. Urungkan mengembalikannya.

## Jika tidak ada ruang di tempat Anda mengklik

Baris status akan memberi tahu: dinding tidak menutup di sana. Tutup celahnya, atau gambar pemisah melintasinya. Tidak ada yang ditolak; memang belum ada ruang tertutup.

## Dalam IFC

Ruang adalah IfcSpace dengan nomornya (Name), nama (LongName), dan Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volumenya adalah luas dikali tinggi sampai level di atasnya.

Pemisah ruang adalah IfcVirtualElement, entitas yang disediakan IFC untuk batas yang belum dibangun. Ia hanya memiliki garis dan tanpa badan, sehingga program lain tidak membaca dinding dan tidak menghitung apa pun untuknya.

## Belum dibuat

- Pemisah melengkung.
- Ruang yang mengikuti plafon miring: volumenya selalu luas dikali tinggi level.
- Relasi batas ruang (IfcRelSpaceBoundary) tidak ditulis, baik untuk dinding maupun untuk pemisah.

Lihat juga [Tag ruang dan area](topic:room-and-area-tags), [Area dan batas area](topic:areas-and-area-boundaries).
