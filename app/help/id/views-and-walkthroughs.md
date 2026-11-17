---
title: Simpan tampilan dan panduan langkah demi langkah
summary: Simpan tampilan kamera model dengan nama, kembali ke tampilan tersebut, putar satu per satu, dan rekam jalan melalui bangunan untuk diputar ulang.
keywords: tampilan, tampilan tersimpan, kamera, kamera, titik pandang, adegan, adegan, tur, presentasi, panduan langkah demi langkah, jalan melalui, terbang melintas, rekam, putar, jalur, animasi
from: 3af19a36
---

{{ui:Tampilan}} di bilah alat menyimpan kamera tampilan 3D di dalam file model, sehingga Anda dan orang yang Anda kirimi dapat langsung kembali ke sana.

## Simpan tampilan

1. Atur tampilan 3D: putar, zoom, sembunyikan yang tidak Anda inginkan.
2. Klik {{ui:Tampilan}}, ketik nama (atau biarkan nama yang ditawarkan), lalu klik {{ui:Simpan tampilan}} atau tekan {{key:Enter}}.

Menyimpan dengan nama yang sudah ada dalam daftar akan memperbarui tampilan tersebut. Klik nama tampilan untuk kembali ke sana; kamera bergerak ke sana dengan halus.

Panah mengubah urutan, pensil mengganti nama, dan tempat sampah menghapus. Setiap perubahan adalah satu langkah, sehingga {{key:Ctrl+Z}} mengurungkannya.

## Putar tampilan

{{ui:Putar tampilan}} berpindah dari satu tampilan ke tampilan berikutnya sesuai urutan daftar, berhenti sebentar di setiap tampilan. {{key:Esc}} atau {{ui:Hentikan}} mengakhirinya.

## Rekam panduan langkah demi langkah

1. Aktifkan [Jalan](topic:walk) dan mulai berjalan di dalam bangunan.
2. Di {{ui:Tampilan}}, klik {{ui:Rekam jalan}}.
3. Berjalanlah dengan {{key:W}} {{key:A}} {{key:S}} {{key:D}} dan lihat sekeliling dengan mouse.
4. Klik {{ui:Hentikan perekaman}}. Jalan disimpan sebagai "Walk 1", beserta panjangnya.

Klik jalan untuk memutarnya kembali seperti saat Anda berjalan. {{key:Esc}} menghentikannya.

## Render panduan langkah demi langkah sebagai video

Klik ikon film di sebelah jalan. Dialog video menggambar setiap bingkai jalan dengan pengaturan Render yang Anda pilih terakhir, pada ukuran, frame rate, dan kualitas yang Anda pilih di sini. Simpan sebagai video WebM atau MP4, atau sebagai ZIP dengan satu gambar per bingkai. Bingkai membutuhkan waktu sama seperti gambar, jadi mulailah dengan {{ui:Cepat}}.

## Beri narasi pada panduan langkah demi langkah

Klik ikon balon ucapan di sebelah jalan. Tulis satu baris untuk setiap hal yang diucapkan, dan awali baris dengan waktu mulainya (`12`, `0:12` atau `1:02.5`); baris tanpa waktu mengikuti baris di atasnya setelah waktu yang dibutuhkan untuk mengucapkannya. Pilih bahasanya, dalam bahasa klien jika dialah yang akan menontonnya. {{ui:Pratinjau}} memutar kata-kata dengan suara komputer ini sendiri dan menampilkannya sebagai subtitle; hal yang sama terjadi setiap kali jalan diputar. {{ui:Simpan bersama jalan}} menyimpan narasi di dalam IFC bersama jalan.

Asisten terhubung Anda sendiri dapat menulis narasi untuk Anda: minta ia melihat jalan dan tampilan tersimpan, dan ia akan menyusun barisnya dalam bahasa yang Anda sebutkan, sebagai satu langkah urungkan.

Video hasil render tidak memiliki suara sendiri, karena peramban tidak dapat merekam suaranya sendiri. Simpan subtitle (`.srt` atau `.vtt`) dan tambahkan ke video di pemutar atau editor video Anda. Suara mana yang dapat dipilih bergantung pada komputer: bahasa yang tidak memiliki suara terpasang tetap mendapatkan subtitle.

## Dalam file

Tampilan dan jalan disimpan dalam IFC sebagai set properti `CadCraft_Views` pada proyek: IFC biasa yang diabaikan program lain. Keduanya berada dalam koordinat model pertama, sehingga tetap pas setelah model dimuat ulang atau model lain ditambahkan.

:::tip
Untuk merender gambar dari tampilan tersimpan, buka tampilan itu, lalu klik [Render](topic:render).
:::
