---
title: Apa yang dirender komputer Anda
summary: Pengaturan › Rendering menampilkan grafis, inti prosesor, dan memori yang diizinkan peramban ini untuk digunakan aplikasi, serta level yang menentukan di mana rendering dimulai.
keywords: komputer Anda, kartu grafis, gpu, webgpu, webgl, prosesor, cpu, inti, utas, memori, ram, memori bersama, isolasi, tingkatan, level, kecepatan, lambat, kecepatan rendering, laptop
from: 360f2375
---

Buka {{ui:Pengaturan}} ({{key:Mod+,}}), tetap di tab milik aplikasi ini dan gulir ke {{ui:Rendering}}. {{ui:Komputer Anda}} mencantumkan apa yang diizinkan peramban ini untuk digunakan aplikasi untuk rendering. Tidak ada yang di dalamnya meninggalkan komputer Anda.

| Baris | Artinya |
|---|---|
| {{ui:Grafis}} | Kartu grafis yang dilaporkan peramban. "WebGPU" berarti dapat melakukan pekerjaan rendering; "WebGL 2 only" berarti tidak ada WebGPU: tampilan langsung dan gambar berkualitas tinggi menggunakan kartu grafis lewat WebGL 2 (gambar dengan jalur WebGL path tracer yang lebih lama, tanpa fitur tambahan yang membutuhkan WebGPU); pengganti perangkat lunak berarti semuanya berjalan di prosesor |
| {{ui:Prosesor}} | Berapa banyak inti prosesor yang dilaporkan peramban |
| {{ui:Memori}} | Perkiraan memori yang dimiliki komputer, jika peramban melaporkannya. Beberapa peramban tidak melakukannya |
| {{ui:Memori bersama}} | Apakah halaman boleh berbagi memori antar worker-nya. Jika aktif, setiap inti dapat bekerja pada satu salinan adegan; jika nonaktif, setiap inti membutuhkan salinannya sendiri, sehingga adegan besar muat pada lebih sedikit inti sekaligus |
| {{ui:Kode prosesor cepat}} | Apakah peramban menjalankan kode WebAssembly yang lebih cepat. Tanpanya, cadangan yang lebih lambat digunakan |
| {{ui:Level}} | {{ui:Kartu grafis, tinggi}}, {{ui:Kartu grafis, dasar}} atau {{ui:Hanya prosesor}}, dengan alasannya di bawahnya |

## Level

Level adalah titik awal rendering, sehingga laptop dengan chip grafis bawaan atau tanpa kartu grafis tetap responsif. Chip grafis bawaan atau ponsel, atau memori 4 GB atau kurang, tidak pernah mendapat {{ui:Kartu grafis, tinggi}}.

:::note
Peramban berbeda. Komputer yang sama dapat menampilkan WebGPU di satu peramban dan "WebGL 2 only" di peramban lain. Di Linux, sebagian besar peramban belum memiliki WebGPU.
:::
