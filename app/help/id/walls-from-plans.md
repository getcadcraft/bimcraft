---
title: Dinding dari sekumpulan denah (PDF atau scan)
summary: Ubah halaman PDF, atau gambar hasil scan, menjadi dinding, pintu, dan jendela, satu level untuk setiap halaman, dengan halaman disimpan di bawah setiap denah.
keywords: pdf, denah, sekumpulan denah, scan, gambar hasil scan, tiff, telusur, dinding dari pdf, dinding dari scan, level, halaman, skala, pintu, jendela, ayunan, ambang, underlay
from: b70d9db7
---

## Yang akan Anda lakukan

Mulai model dari denah yang Anda miliki di atas kertas: PDF (digambar sebagai garis, atau scan di dalam PDF) atau scan (PNG, JPEG, TIFF dengan satu atau banyak halaman). Setiap halaman menjadi dinding, pintu, dan jendela dari satu level.

## Langkah

1. Aktifkan {{ui:Gambar}}. Pilih {{ui:Build}} › {{ui:Dari gambar…}}, lalu {{ui:Pilih gambar…}} dan pilih PDF atau scan.
2. **Halaman dan level.** Setiap halaman dicantumkan beserta jenisnya (**garis gambar**, atau **gambar (ditelusuri)**) dan level tujuannya: salah satu level yang Anda miliki, **level baru di atas yang lain**, atau **jangan sertakan halaman ini**. Halaman dipasangkan ke level Anda secara berurutan; ubah salah satunya jika perlu.
3. **Skala.** Untuk PDF, nyatakan bagaimana ia digambar (**1 : 100**, **1 : 50**…). Untuk yang lain, atau jika Anda tidak tahu, pilih **dari jarak yang saya ketahui**: klik kedua ujung dimensi atau bilah skala di pratinjau, lalu ketik jarak sebenarnya. Semua halaman memakai satu skala itu.
4. Pilih **tipe dinding** dan **tinggi level baru**. Biarkan **Keep each page under the plan of its level** tercentang untuk melihat setiap halaman sebagai garis tipis di bawah denahnya.
5. Baris di bawah pilihan menyatakan berapa banyak dinding, pintu, dan jendela yang akan dibuat, dan pada berapa level. Klik {{ui:Buat}}.

## Cara membaca halaman

- **Dinding** berasal dari pasangan garis sejajar yang berjarak hingga 600 mm (kedua muka dinding); dinding sebebal celahnya. Arsiran dan tulisan dilewati.
- **Pintu dan jendela.** Celah pada dinding (500 sampai 2600 mm) dengan garis ayunan pintu yang digambar di sebelahnya adalah pintu, berengsel di salah satu ujung celah dan membuka ke sisi ayunannya. Celah atau dinding dengan garis ambang di dalamnya adalah jendela. Celah tanpa keduanya adalah pintu hingga 1300 mm dan jendela di atas itu.
- **Scan** diluruskan lebih dulu jika dipindai miring (dialog menyatakannya), dijadikan hitam putih, dibersihkan dari bintik, dan ditelusuri; **halaman PDF yang berupa gambar** digambar lebih dulu lalu diperlakukan dengan cara yang sama. Penelusuran mencari pusat setiap goresan dan mencocokkan garis lurus serta busur padanya; ia tidak memakai jaringan maupun model terlatih.
- **Ruangan** mengikuti dengan sendirinya dari lingkaran tertutup yang dibentuk dinding. Jika PDF memiliki teks, ruangan mengambil namanya dari tulisan di dalamnya (yang terbesar; dimensi, skala, atau nomor lembar bukan nama). Scan tidak memiliki teks, sehingga ruangannya mempertahankan nama yang diberikan program.
- **Semua yang dibaca dari halaman ditandai belum diverifikasi**: setiap dinding, pintu, jendela, dan ruangan memiliki kotak putus-putus dan tanda "?" pada denah sampai Anda memeriksanya. Pilih yang sudah Anda periksa dan gunakan {{ui:Tools}} › {{ui:Tandai sebagai diperiksa}}. Lihat [Tandai elemen sebagai diperiksa atau diverifikasi lapangan](topic:verification).

## Yang harus Anda lihat

- Dinding, pintu, jendela, dan ruangan pada setiap level, dan level baru apa pun, semuanya sebagai satu langkah: {{key:Mod+Z}} membatalkan semuanya.
- Setiap halaman sebagai garis tipis di bawah denah levelnya, dicantumkan di bawah {{ui:Build}} › {{ui:Dari gambar…}} dengan {{ui:Hapus}}.

:::note
Ini adalah hasil dari garis-garisnya, sejauh ketelitian halaman itu. Scan dapat kehilangan dinding yang samar, menyambung dua dinding yang sangat berdekatan, atau menemukan dinding pada noda; ayunan yang tidak ditunjukkan gambar akan membuat celah menjadi pintu biasa. Periksa setiap level terhadap halaman sebelum Anda mengandalkannya, dan perbaiki yang salah dengan alat {{ui:Dinding}}, {{ui:Pintu}}, dan {{ui:Jendela}}.
:::
