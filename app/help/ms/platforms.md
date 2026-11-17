---
title: Pelayar, peranti dan memori
summary: Apa yang berbeza dalam BimCraft antara Chrome, Edge, Firefox dan Safari, pada Mac, Windows dan Linux, dengan tetikus, pad jejak atau sentuhan, dan berapa besar fail yang boleh diambilnya.
keywords: pelayar, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, sentuh, pad jejak, memori, fail besar, webgl, prestasi
from: fd8acba1
---

BimCraft berjalan dalam versi semasa Chrome, Edge, Firefox dan Safari, pada Mac, Windows dan Linux. Paparan 3D memerlukan WebGL, yang dimiliki oleh setiap pelayar semasa. Lihat [Pelayar dan komputer](common:browsers) untuk apa yang diperlukan aplikasi secara umum.

## Membuka folder

| Pelayar | {{ui:Buka folder}} melakukan ini | Menyeret folder masuk | {{ui:Folder terkini}} |
|---|---|---|---|
| Chrome, Edge | Pemilih folder pelayar, kemudian "Benarkan tapak melihat fail?": klik **Lihat fail** | Dibuka tanpa gesaan | Ya, untuk folder yang dipilih atau diseret |
| Firefox | Pemilih folder sistem | Dibuka tanpa gesaan | Tidak |
| Safari | Pemilih folder sistem, dengan butang **Muat naik** (tiada apa yang dimuat naik) | Dibuka tanpa gesaan | Tidak |

Di sebalik tabir: Chrome dan Edge menggunakan pemilih Akses Sistem Fail dan boleh mengingati folder. Firefox dan Safari menggunakan pemilih folder lama, yang menyerahkan setiap fail dalam folder sekaligus dan tidak boleh diingati. Folder yang diseret dibaca entri demi entri dalam setiap pelayar.

:::chromium
Brave dan beberapa pelayar Chromium lain mematikan pemilih folder. BimCraft kemudian menggunakan pemilih folder sistem sebagai gantinya, dan pelayar mungkin bertanya "Muat naik *n* fail ke laman ini?". Tiada apa yang dimuat naik; fail hanya pergi ke tab. Menyeret folder masuk mengelakkan soalan itu.
:::

## Mac, Windows dan Linux

- Pintasan {{key:Mod+S}} dan {{key:Mod+Z}} ialah Command pada Mac dan Ctrl pada Windows dan Linux.
- {{key:Ctrl+Shift+F}} (mod skrin) ialah Control pada setiap platform, termasuk Mac.
- Dialog fail dan folder muat turun ialah milik sistem anda sendiri.

## Tetikus, pad jejak dan sentuhan

| Input | Paparan 3D | Lukisan 2D |
|---|---|---|
| Tetikus | Seret kiri untuk orbit, seret kanan untuk pan, roda untuk zum, klik untuk memilih | Sebarang seretan membuat pan, roda untuk zum, klik dua kali untuk {{ui:Muat}} |
| Pad jejak | Klik-seret untuk orbit; {{key:Shift}} atau {{key:Mod}} dan seret untuk pan; tatal dua jari atau cubit untuk zum | Klik-seret untuk pan; tatal dua jari atau cubit untuk zum |
| Sentuhan | Satu jari untuk orbit, dua jari cubit dan pan, ketik untuk memilih | Satu jari untuk pan; belum ada cubit zum; ketik {{ui:Muat}} |

Pada pad jejak Mac, klik kanan ialah klik dua jari (atau Control-klik). Lihat [Kekunci, tetikus dan pad jejak](common:keys).

Tablet dan telefon boleh membuka fail tunggal dan melihatnya, tetapi skrinnya kecil, banyak pelayar mudah alih tidak dapat memilih folder, dan model besar mungkin tidak muat dalam memorinya. Komputer memberikan hasil terbaik.

## Fail besar dan memori

Semua yang dibaca BimCraft disimpan dalam memori tab pelayar. Berapa banyak yang boleh digunakan oleh tab bergantung pada pelayar dan komputer anda, lebih daripada pada BimCraft.

| Fail | Berapa banyak dibaca | Apa yang dijangka |
|---|---|---|
| IFC | Keseluruhan fail, serta geometri 3D yang dibina daripadanya | Bergantung pada komputer dan pelayar anda; model beberapa ratus megabait boleh terlalu besar untuk komputer riba. Melebihi 1.5 juta segi tiga, tepi dimatikan |
| Fail projek dan keluarga | Kira-kira 40 KB hingga 100 KB, tanpa mengira saiznya | Walaupun model pusat yang sangat besar dibuka dalam sekelip mata, juga dari pemacu rangkaian |
| DWG dan DXF | Keseluruhan fail | Lukisan yang sangat besar memaparkan "Lukisan ini sangat besar; hanya sebahagian daripadanya ditunjukkan." |
| Folder | Senarai fail, serta beberapa kilobait setiap model | Sehingga 20,000 fail |

Jika tab kehabisan memori, pelayar memaparkan halaman ralatnya sendiri (contohnya "Aw, Snap!" dalam Chrome). Tutup tab lain, muat semula BimCraft dan cuba lagi, atau gunakan komputer dengan lebih banyak memori.

## Berkaitan

- [Dalam talian dan luar talian](topic:online-offline)
- [Penyelesaian masalah](topic:troubleshooting)
