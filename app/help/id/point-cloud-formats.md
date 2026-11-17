---
title: Format point cloud: apa yang terbuka, dan apa yang diekspor
summary: File pindaian laser mana yang terbuka di tampilan 3D, mana yang merupakan format milik produsen pemindai, dan apa yang diekspor dari perangkat lunak pemindai agar pindaian terbuka di sini.
keywords: point cloud, pemindaian laser, pindaian, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, ekspor, tidak dapat dibuka, tidak dibaca
from: 1e985f01
---

## Yang terbuka di sini

Buka file-file ini dengan {{ui:Terbuka}} atau dengan menyeretnya ke halaman (lihat topik tentang menampilkan point cloud di samping model):

| Format | Ekstensi | Yang dibaca |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: titik, warna, intensitas, kelas LiDAR, sistem koordinat. LAZ hingga 1 GB. |
| E57 | `.e57` | Setiap pindaian dalam file, masing-masing ditempatkan sesuai posenya; warna, atau intensitas jika file tidak memiliki warna. Gambar dalam file dilewati (BimCraft memberi tahu). Hingga 6 juta titik dan 512 MB untuk saat ini: ekspor pindaian yang lebih besar sebagai LAS atau LAZ. |
| PLY | `.ply` | Teks dan biner (kedua urutan byte): x y z verteks, warna, dan intensitas. Muka dilewati (BimCraft memberi tahu). |
| PCD | `.pcd` | Teks dan biner: x y z, warna terkemas atau terpisah, intensitas. File PCD terkompresi belum dibaca: simpan sebagai biner atau teks. |
| PTX | `.ptx` | Satu atau lebih pindaian, masing-masing ditempatkan dengan transformasinya sendiri; titik yang tidak diukur pemindai dilewati. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, dengan intensitas dan warna jika kolomnya ada. |

## File yang hanya dapat dibaca perangkat lunak pemindai

Beberapa file pindaian adalah format milik produsen pemindai, tanpa deskripsi yang dipublikasikan dan tanpa pembaca terbuka. BimCraft tidak dapat membacanya, dan membukanya menampilkan kartu yang menyatakan apa itu dan apa yang harus dilakukan. Ekspor pindaian dari perangkat lunak produsen sebagai E57 atau LAS (atau PTX, PTS), lalu buka file hasil ekspor.

| File | Ekstensi | Ekspor dari |
|---|---|---|
| Proyek ReCap | `.rcp` | ReCap: buka proyek dan ekspor. Proyek hanya menunjuk ke pindaiannya, jadi hanya menyalin `.rcp` tidak menghasilkan titik. |
| Pindaian ReCap | `.rcs` | ReCap: buka proyek tempat pindaian itu berada dan ekspor. |
| Pindaian FARO | `.fls` | FARO SCENE. |
| Pindaian Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Pindaian Trimble | `.tzf` | Trimble RealWorks atau Trimble Business Center. |
| Pindaian Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Saat ekspor meminta format, LAS atau LAZ menyimpan semua yang ditampilkan BimCraft (warna, intensitas, kelas, dan sistem koordinat) dalam file terkecil.
:::

## Mengapa file ini tidak dibaca

Format tersebut tidak dipublikasikan, dan satu-satunya cara membacanya adalah lewat pustaka perangkat lunak masing-masing produsen, dengan ketentuannya sendiri. BimCraft hanya membaca format yang dapat dibacanya dengan kodenya sendiri di komputer Anda, sehingga pindaian tidak pernah perlu dikirim ke mana pun untuk dibuka.
