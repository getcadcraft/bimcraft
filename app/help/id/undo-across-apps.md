---
title: Urungkan lintas aplikasi di CadCraft Studio
summary: Di dalam Studio, BimCraft memberi tahu Studio setiap langkah yang selesai, sehingga Studio dapat mengurungkan langkah terakhir Anda di jendela mana pun yang terakhir Anda gunakan.
keywords: urungkan, studio, lintas aplikasi, urungkan proyek, riwayat, jurnal, jendela
from: c66dd0c1
---

## Fungsinya

Di CadCraft Studio, setiap jendela aplikasi memberi tahu Studio saat sebuah langkah selesai (dinding digambar, sekumpulan dinding diterima dari pindaian). Studio menyimpan langkah-langkah itu sesuai urutan kerja Anda dan dapat meminta jendela yang membuat langkah terbaru untuk mengurungkannya, memakai fitur urungkan milik jendela tersebut. Ctrl+Z di dalam BimCraft tetap milik BimCraft dan juga diberitahukan ke Studio.

## Yang perlu diketahui

- Studio hanya meminta jendela untuk mengurungkan saat daftar urungkannya persis seperti yang ditinggalkan langkah tersebut. Setelah Simpan (yang memulai daftar perubahan baru) atau setelah Anda mengganti model yang Anda sunting, BimCraft menjawab bahwa daftar tersebut sudah berpindah dan Studio melewati jendela ini. Tidak ada yang dipaksakan.
- Mengurungkan efek satu aplikasi di aplikasi lain belum dibuat.
- Di luar Studio, tidak ada yang berubah.
- Item menu Studio yang meminta pengurungan hadir bersama build Studio; sampai saat itu langkah-langkah tetap dilaporkan, tetapi tidak ada item menu yang memakainya.

## Berikutnya

- [Bekerja secara Live dengan orang lain](topic:work-live)
