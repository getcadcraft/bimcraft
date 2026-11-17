---
title: Tinjau model dalam headset VR
summary: Berjalan di dalam model IFC pada ukuran penuh dengan headset VR: melompat, berbalik, mengukur, memotong terbuka, memasang isu BCF dengan gambar, melihatnya sebagai model di atas meja, dan bertemu orang lain dalam sesi Live.
keywords: vr, realitas virtual, headset, webxr, xr, imersif, quest, oculus, vive, index, pico, jalan melalui, panduan langkah demi langkah, teleportasi, tinjauan desain, koordinasi, tinjau, ukur, potongan, potong, isu, isu, bcf, di atas meja, model skala, kehadiran, avatar, Live, bersama
from: 8994b36d
---

{{ui:VR}} di bilah alat menempatkan Anda di dalam model dengan headset VR, pada ukuran penuh. Anda berdiri di tempat kamera tampilan 3D berada, di lantai di bawahnya, menghadap arah yang sama. Headset menampilkan apa yang ditampilkan tampilan 3D: lantai, elemen, dan model yang tersembunyi tetap tersembunyi, dan material yang dicat ikut terbawa. Tidak ada yang diunggah: peramban menggambarnya di komputer ini (atau di peramban bawaan headset).

## Yang Anda perlukan

- Headset yang dapat dikendalikan peramban (WebXR): peramban bawaan headset mandiri, atau Chrome atau Edge di PC dengan headset terhubung.
- Model IFC yang terbuka, pada halaman aman (https), seperti di situs ini.

Saat tidak ada headset, {{ui:VR}} berwarna abu-abu dan menjelaskan alasannya.

## Mulai

1. Atur tampilan 3D di tempat Anda ingin memulai: di dalam ruangan, atau di luar menghadap bangunan.
2. Klik {{ui:VR}} di bilah alat.
3. Pasang headset.

Menu ada di punggung tangan kiri Anda. Arahkan dengan kontroler kanan dan tarik pelatuk untuk memilih tombol. (Dengan satu tangan saja, menu melayang di depan tempat Anda mulai.)

## Bergerak

- **Lompat:** di {{ui:Pindahkan}}, arahkan ke lantai dan tarik pelatuk; Anda mendarat di sana. Atau dorong stik ke depan untuk membidik, dan lepaskan untuk melompat. Anda hanya dapat mendarat di lantai, pelat, dan tanah (permukaan yang menghadap ke atas), tidak pernah di dinding.
- **Berbalik:** dorong stik ke kiri atau kanan: Anda berbalik 30° setiap kali.
- **Berjalan:** di area bermain Anda, cukup berjalan.

## Ukur

Pilih {{ui:Ukur}}, lalu tarik pelatuk pada dua titik. Jaraknya ditampilkan di antara keduanya, dalam meter. Titik dekat sudut akan menempel ke sudut.

## Potong terbuka

Pilih {{ui:Potongan}} dan tarik pelatuk pada suatu permukaan:

- pada dinding (atau apa pun yang bukan lantai): semua yang berada di antara Anda dan permukaan itu dipotong, sehingga Anda dapat melihat ke dalam. Ini paling baik dilakukan dari luar, atau melintasi ruangan;
- pada lantai, dari atas: potongan denah 1.2 m di atas lantai itu, sehingga dinding menampilkan bagian bawahnya.

{{ui:Hapus}} menghilangkan potongan dan pengukuran. Jika [bidang potong](topic:section-plane) memotong model saat Anda mulai, headset dimulai bersamanya.

## Pasang isu

Pilih {{ui:Isu}} dan tarik pelatuk di tempat masalahnya. Sebuah pin bernomor menandainya, dan isu masuk ke tab {{ui:Isu}} sebagai topik BCF, dengan gambar apa yang Anda lihat dan kamera tempat Anda berdiri, dalam koordinat model itu sendiri. Simpan bersama [isu](topic:issues-bcf) Anda yang lain sebagai file BCF; alat koordinasi lain akan membukanya pada tampilan yang sama.

Tambahkan komentar ke isu setelah Anda keluar dari VR, di tab Isu: mengetik di dalam headset belum dibuat.

## Lihat sebagai model di atas meja

{{ui:Di atas meja}} mengecilkan model agar muat di atas meja di depan Anda; berjalanlah mengelilinginya, atau putar dengan stik. {{ui:Ukuran penuh}} mengembalikan Anda ke tempat semula.

## Bersama yang lain, secara Live

Dalam [sesi Live](topic:work-live), setiap orang di VR melihat yang lain sebagai kepala dan dua tangan dalam warna mereka sendiri, dengan nama mereka, serta titik di tempat setiap orang menunjuk. Suntingan siapa pun sampai ke headset Anda dalam sekejap. Orang yang duduk di meja belum ditampilkan di headset.

## Keluar

Pilih {{ui:Keluar dari VR}} (atau lepas headset dan akhiri di sana). Tampilan 3D di layar berpindah ke tempat kepala Anda berada.

:::note
Diuji dengan emulator headset, belum di setiap headset. Model besar dapat membuat headset tersendat: sembunyikan lantai atau model yang tidak Anda perlukan terlebih dahulu ([sembunyikan dan isolasi](topic:hide-and-isolate)).
:::
