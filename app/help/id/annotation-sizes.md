---
title: Gambar pada ukuran penuh, beri anotasi menurut skala
summary: Gedung selalu digambar pada ukuran penuh. Teks, dimensi, tag, nama ruang, gelembung grid, dan simbol diukur di kertas, dalam milimeter seperti tercetak, dan tetap pada ukuran itu saat skala gambar berubah dari 1:100 ke 1:50.
keywords: skala anotasi, anotatif, ukuran teks, tinggi teks, tinggi di kertas, ukuran teks dimensi, ukuran tag, ukuran nama ruang, gelembung grid, ukuran simbol, skala gambar, 1:50, 1:100, standar kantor, huruf, gambar pada 1:1, ukuran penuh, teks lembar
from: 94118788
---

## Yang akan Anda lakukan

Atur seberapa tinggi huruf gambar Anda di kertas, sekali untuk gedung. Anda tidak pernah memperkecil model dan tidak pernah mengubah ukuran teks menurut skala: BimCraft menghitung ukurannya dari tinggi kertas dan skala gambar.

## Cara kerjanya

- Model berukuran penuh. Dinding sepanjang 10 m adalah 10 000 mm di setiap skala.
- Anotasi memiliki **tinggi kertas**: tinggi huruf kapital pada lembar cetak, dalam milimeter.
- Pada skala 1:100 teks 2.5 mm berukuran 250 mm di model; pada 1:50 berukuran 125 mm. Di kertas tingginya tetap 2.5 mm dalam kedua kasus.
- Simbol denah (listrik, plambing) digambar dalam milimeter kertas dan mengikuti aturan yang sama.

## Langkah

1. Buka penjelajah proyek. Di bawah {{ui:Lembar}} klik {{ui:Ukuran anotasi…}}.
2. Ketik tinggi dalam milimeter untuk jenis yang ingin Anda atur: {{ui:Catatan dan label}}, {{ui:Teks dimensi}}, {{ui:Tag dan nama level}}, {{ui:Nama ruang}}, {{ui:Huruf gelembung grid}}, {{ui:Judul tampilan di lembar}}, dan {{ui:Teks jadwal}}. Kotak yang kosong mempertahankan ukuran bawaan BimCraft, ditampilkan dengan warna abu-abu.
3. Klik {{ui:Simpan}}. Ini satu langkah yang dapat Anda urungkan.

Setiap lembar, set gambar, PDF denah, serta tampak dan potongan kini menggunakan ukuran tersebut. Jarak antara garis dimensi dan teksnya, ukuran gelembung grid, dan tinggi baris jadwal ikut membesar mengikuti teksnya.

## Denah dengan skalanya sendiri

Beri denah sebuah skala di rentang tampilannya ({{ui:Skala}}; lihat [Tampilan dan lembar](topic:views-and-sheets)). Maka:

- di layar, nama ruang, tag, teks dimensi, dan gelembung grid digambar pada ukuran cetaknya terhadap model, sehingga yang Anda lihat sama dengan yang akan ditampilkan lembar;
- simbol denah dan tag-nya diukur untuk skala itu. Ubah skala dari 1:100 ke 1:50 dan simbol menjadi setengah lebih besar di model, tetapi tetap sama di kertas.

Denah tanpa skala sendiri mempertahankan teks layar tetapnya, dan simbolnya diukur untuk 1:50 (1/4" = 1'-0" dalam kaki dan inci), seperti sebelumnya.

## Ukuran kantor Anda

Dengan add-on Default Policies aktif, atur tinggi kantor di Pengaturan › Global › Default Policies › {{ui:Ukuran anotasi di kertas}}. Bangunan baru mengambilnya saat Anda klik Buat. Pada bangunan yang sudah Anda mulai, dialog memiliki {{ui:Gunakan ukuran kantor saya}}. Lihat [Default Policies](topic:default-policies).

## Paket peraturan

Paket peraturan dapat memberikan tinggi teks yang dibutuhkan tempatnya (add-on Building regulations, konvensi gambar). Centang paket di Pengaturan › Building regulations, lalu di dialog klik {{ui:Gunakan ukuran dari paket regulasi}}: kotak-kotaknya terisi, lalu Anda periksa dan simpan. Ukuran yang diberikan paket dalam poin adalah ukuran font, dan itu diubah menjadi tinggi huruf kapital, jadi periksa lagi. Tidak ada yang diatur sebelum Anda menyimpan.

## Yang harus Anda lihat

- Tinggi teks yang sama dalam milimeter pada lembar 1:100 dan lembar 1:50, sementara denah itu sendiri dua kali lebih besar pada 1:50.
- Ukuran ikut bersama bangunan: disimpan dalam file IFC-nya.

## Hal yang perlu diketahui

- Ukuran bawaan BimCraft adalah ukuran yang selalu dipakai lembarnya (sekitar 1.5 mm huruf kapital untuk teks dimensi). Itu bukan standar gambar: atur milik kantor Anda.
- Tinggi harus antara 0.5 dan 50 mm.
- Huruf pada blok judul dan legenda keynote tidak termasuk di sini: keduanya mempertahankan ukurannya sendiri.
