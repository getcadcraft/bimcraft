---
title: Peramban, perangkat, dan memori
summary: Apa yang berbeda di BimCraft antara Chrome, Edge, Firefox, dan Safari, di Mac, Windows, dan Linux, dengan mouse, trackpad, atau sentuh, serta seberapa besar file yang dapat dibukanya.
keywords: peramban, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, ponsel, sentuh, trackpad, memori, file besar, webgl, performa
from: fd8acba1
---

BimCraft berjalan di versi terbaru Chrome, Edge, Firefox, dan Safari, di Mac, Windows, dan Linux. Tampilan 3D memerlukan WebGL, yang dimiliki setiap peramban terbaru. Lihat [Peramban dan komputer](common:browsers) untuk apa yang umumnya dibutuhkan aplikasi.

## Membuka folder

| Peramban | {{ui:Open a folder}} melakukan ini | Menyeret folder masuk | {{ui:Recent folders}} |
|---|---|---|---|
| Chrome, Edge | Pemilih folder peramban, lalu "Let site view files?": klik **View files** | Terbuka tanpa pertanyaan | Ya, untuk folder yang dipilih atau diseret |
| Firefox | Pemilih folder sistem | Terbuka tanpa pertanyaan | Tidak |
| Safari | Pemilih folder sistem, dengan tombol **Upload** (tidak ada yang diunggah) | Terbuka tanpa pertanyaan | Tidak |

Di balik layar: Chrome dan Edge memakai pemilih File System Access dan dapat mengingat folder. Firefox dan Safari memakai pemilih folder lama, yang menyerahkan setiap file dalam folder sekaligus dan tidak dapat diingat. Folder yang diseret dibaca entri demi entri di setiap peramban.

:::chromium
Brave dan beberapa peramban Chromium lain mematikan pemilih folder. BimCraft kemudian memakai pemilih folder sistem, dan peramban mungkin bertanya "Upload *n* files to this site?". Tidak ada yang diunggah; file hanya masuk ke tab. Menyeret folder masuk menghindari pertanyaan itu.
:::

## Mac, Windows, dan Linux

- Pintasan yang ditulis {{key:Mod+S}} dan {{key:Mod+Z}} adalah Command di Mac dan Ctrl di Windows dan Linux.
- {{key:Ctrl+Shift+F}} (mode layar) adalah Control di setiap platform, termasuk Mac.
- Dialog file dan folder unduhan adalah milik sistem Anda sendiri.

## Mouse, trackpad, dan sentuh

| Input | Tampilan 3D | Gambar 2D |
|---|---|---|
| Mouse | Seret kiri untuk mengorbit, seret kanan untuk menggeser, roda untuk zoom, klik untuk memilih | Seret apa pun untuk menggeser, roda untuk zoom, klik dua kali untuk {{ui:Fit}} |
| Trackpad | Klik-seret untuk mengorbit; {{key:Shift}} atau {{key:Mod}} dan seret untuk menggeser; gulir dua jari atau cubit untuk zoom | Klik-seret untuk menggeser; gulir dua jari atau cubit untuk zoom |
| Sentuh | Satu jari untuk mengorbit, dua jari untuk mencubit dan menggeser, ketuk untuk memilih | Satu jari untuk menggeser; belum ada cubit zoom; ketuk {{ui:Fit}} |

Pada trackpad Mac, klik kanan adalah klik dua jari (atau Control-klik). Lihat [Tombol, mouse, dan trackpad](common:keys).

Tablet dan ponsel dapat membuka file tunggal dan melihatnya, tetapi layarnya kecil, banyak peramban seluler tidak dapat memilih folder, dan model besar mungkin tidak muat di memorinya. Komputer paling baik digunakan.

## File besar dan memori

Semua yang dibaca BimCraft berada di memori tab peramban. Seberapa besar yang dapat dipakai sebuah tab bergantung pada peramban dan komputer Anda, lebih dari pada BimCraft.

| File | Seberapa banyak yang dibaca | Yang perlu diharapkan |
|---|---|---|
| IFC | Seluruh file, ditambah geometri 3D yang dibangun darinya | Besarnya bergantung pada komputer dan peramban Anda; model beberapa ratus megabyte bisa terlalu besar untuk laptop. Di atas 1.5 juta segitiga, tepi dimatikan |
| File proyek dan famili | Sekitar 40 KB sampai 100 KB, berapa pun ukurannya | Bahkan model pusat yang sangat besar terbuka dalam sekejap, juga dari drive jaringan |
| DWG dan DXF | Seluruh file | Gambar yang sangat besar menampilkan "This drawing is very large; only part of it is shown." |
| Folder | Daftar file, ditambah beberapa kilobyte per model | Hingga 20.000 file |

Jika sebuah tab kehabisan memori, peramban menampilkan halaman galatnya sendiri ("Aw, Snap!" di Chrome, misalnya). Tutup tab lain, muat ulang BimCraft dan coba lagi, atau gunakan komputer dengan memori lebih besar.

## Terkait

- [Online dan offline](topic:online-offline)
- [Pemecahan masalah](topic:troubleshooting)
