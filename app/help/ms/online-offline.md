---
title: Dalam talian dan luar talian
summary: Apa yang BimCraft muat daripada laman, bagaimana Simpan untuk luar talian menjadikan model IFC dan lukisan DWG dibuka tanpa sambungan, dan mengapa tiada fail yang anda buka pernah dimuat naik.
keywords: luar talian, dalam talian, internet, sambungan, tiada rangkaian, mod kapal terbang, lawatan tapak, simpan untuk luar talian, sedia untuk luar talian, muat naik, privasi, wasm, webassembly, enjin IFC, dwg, awan
from: 39e5c7eb
---

BimCraft membaca fail anda di dalam tab pelayar. Membuka, memeriksa, menyunting dan menyimpan tidak pernah menghantar fail anda ke mana-mana, sama ada dalam talian atau luar talian. [Bekerja luar talian](common:offline) menerangkan cara salinan luar talian berfungsi dalam setiap aplikasi; halaman ini meliputi apa yang khusus untuk BimCraft.

## Apa yang BimCraft muat daripada laman

| Bahagian | Bila ia dimuat tanpa salinan luar talian | Saiz |
|---|---|---|
| Aplikasi itu sendiri, dengan pemapar 3D dan kod enjin IFC | Apabila anda membuka BimCraft | Beberapa megabait |
| Bahagian WebAssembly enjin IFC | Fail IFC pertama yang anda buka dalam tab: "Memulakan enjin IFC…" | Kira-kira 1.6 MB |

Lukisan DWG dan DXF, fail projek dan keluarga serta folder tidak memerlukan apa-apa tambahan: pembacanya sebahagian daripada aplikasi.

## Simpan BimCraft untuk kegunaan luar talian

1. Buka BimCraft semasa anda dalam talian.
2. Klik {{ui:Save for offline}} pada bar aplikasi di atas.
3. Perhatikan butang mengira naik: contohnya "Menyimpan 40 daripada 212". Salinan BimCraft kira-kira 11 MB, kerana ia termasuk enjin IFC.
4. Tunggu sehingga {{ui:Offline ready}}.

Apabila ia berkata {{ui:Offline ready}}, model IFC, lukisan DWG dan DXF, fail projek, folder dan bantuan ini semuanya dibuka tanpa sambungan. Anda tidak perlu membuka IFC atau DWG dahulu untuk "memanaskan" pembaca.

Untuk mengemas kini atau mengalih keluar salinan, klik {{ui:Offline ready}} dan pilih {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}.

## Maksud butang

| Butang | Maksud |
|---|---|
| {{ui:Save for offline}} | Belum ada salinan luar talian dalam pelayar ini. Klik untuk menyimpannya |
| "Menyimpan *n* daripada *m*" | Sedang menyimpan; biarkan tab terbuka sehingga selesai |
| {{ui:Offline ready}} | Disimpan. Alih tetikus untuk melihat bila; klik untuk menu |
| {{ui:Could not save}} | Sebahagian fail tidak dimuat turun. Semak sambungan anda dan klik untuk cuba lagi. Salinan baik terakhir, jika ada, disimpan |
| {{ui:Offline not available}} | Tetingkap ini tidak boleh menyimpan salinan luar talian (tetingkap persendirian atau komputer yang diurus). Lihat [Bekerja luar talian](common:offline) |

:::offline
Anda berada di luar talian.

- Jika butang berkata {{ui:Offline ready}}, setiap jenis fail dibuka seperti biasa.
- Jika tidak, hanya apa yang telah dimuatkan oleh tab ini berfungsi: pembaca yang tidak pernah dimuatkan dalam tab ini tidak boleh bermula, dan membuka jenis fail itu menunjukkan ralat daripada pelayar dalam baris status. Jangan muat semula tab sehingga anda dalam talian semula.
:::

## Apa yang tidak pernah memerlukan sambungan

Apabila BimCraft dibuka dalam tab, perkara ini berfungsi luar talian walaupun tanpa salinan tersimpan:

- Membaca fail projek dan keluarga serta memeriksa folder.
- Memilih elemen, membaca sifat dan menyunting nilai IFC dalam model yang sudah dibuka.
- {{ui:Save as IFC}} dan {{ui:Download CSV}}: kedua-duanya muat turun yang dibuat dalam tab.

## Apa yang belum tersedia

- **Simpan awan.** Fail disimpan pada komputer anda sahaja.

Lihat [Di mana fail anda pergi](common:your-files).
