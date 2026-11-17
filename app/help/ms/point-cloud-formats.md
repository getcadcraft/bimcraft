---
title: Format awan titik: apa yang dibuka, dan apa yang hendak dieksport
summary: Fail imbasan laser mana yang dibuka dalam paparan 3D, mana yang merupakan format sendiri pembuat pengimbas, dan apa yang perlu dieksport daripada perisian pengimbas supaya imbasan dibuka di sini.
keywords: awan titik, imbasan laser, imbasan, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, tidak dapat dibuka, tidak dibaca
from: 1e985f01
---

## Apa yang dibuka di sini

Buka fail ini dengan {{ui:Open}} atau dengan melepaskannya ke halaman (lihat topik tentang memaparkan awan titik di sebelah model):

| Format | Sambungan | Apa yang dibaca |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: titik, warna, keamatan, kelas LiDAR, sistem koordinat. LAZ sehingga 1 GB. |
| E57 | `.e57` | Setiap imbasan dalam fail, masing-masing diletakkan mengikut posenya; warna, atau keamatan apabila fail tiada warna. Gambar dalam fail ditinggalkan (dimaklumkan). Sehingga 6 juta titik dan 512 MB buat masa ini: eksport imbasan yang lebih besar sebagai LAS atau LAZ. |
| PLY | `.ply` | Teks dan binari (kedua-dua susunan bait): koordinat x y z bagi bucu, warna dan keamatan. Muka ditinggalkan (dimaklumkan). |
| PCD | `.pcd` | Teks dan binari: x y z, warna terpadat atau berasingan, keamatan. Fail PCD yang dimampatkan belum dibaca: simpan sebagai binari atau teks. |
| PTX | `.ptx` | Satu atau lebih imbasan, masing-masing diletakkan dengan transformasinya sendiri; titik yang tidak diukur oleh pengimbas ditinggalkan. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, dengan keamatan dan warna apabila lajurnya ada. |

## Fail yang hanya dibaca oleh perisian pengimbas

Sesetengah fail imbasan ialah format sendiri pembuat pengimbas, tanpa penerangan yang diterbitkan dan tanpa pembaca terbuka. BimCraft tidak dapat membacanya, dan apabila anda membukanya, satu kad dipaparkan yang menerangkan jenis fail itu dan apa yang perlu dilakukan. Eksport imbasan daripada perisian pembuat sebagai E57 atau LAS (atau PTX, PTS), kemudian buka fail yang dieksport.

| Fail | Sambungan | Eksport daripada |
|---|---|---|
| Projek ReCap | `.rcp` | ReCap: buka projek dan eksportnya. Projek hanya menunjuk kepada imbasannya, jadi menyalin `.rcp` sahaja tidak memberikan sebarang titik. |
| Imbasan ReCap | `.rcs` | ReCap: buka projek yang memiliki imbasan itu dan eksportnya. |
| Imbasan FARO | `.fls` | FARO SCENE. |
| Imbasan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Imbasan Trimble | `.tzf` | Trimble RealWorks atau Trimble Business Center. |
| Imbasan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Apabila eksport meminta format, LAS atau LAZ mengekalkan semua yang dipaparkan BimCraft (warna, keamatan, kelas dan sistem koordinat) dalam fail yang paling kecil.
:::

## Mengapa fail ini tidak dibaca

Format itu tidak diterbitkan, dan satu-satunya cara untuk membacanya ialah melalui pustaka perisian pembuat masing-masing, di bawah terma mereka sendiri. BimCraft hanya membaca format yang boleh dibacanya dengan kodnya sendiri pada komputer anda, jadi imbasan tidak perlu dihantar ke mana-mana untuk dibuka.
