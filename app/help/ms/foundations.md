---
title: Asas di bawah dinding
summary: Letakkan papak atas tanah, dinding batang dengan papak, ruang merangkak atau ruang bawah tanah di bawah bangunan dengan satu klik; tapak asas bersaiz daripada dinding dan bilangan tingkat, dan asas mengikut apabila dinding bergerak.
keywords: asas, tapak asas, papak atas tanah, tepi tebal, papak monolitik, dinding batang, ruang merangkak, ruang bawah tanah, dinding ruang bawah tanah, beku, konkrit, lebar tapak asas
from: c0e20172
---

## Apa yang anda akan lakukan

Berikan bangunan asas yang sepadan dengan dindingnya. BimCraft mengikuti bahagian luar dinding, menentukan saiz tapak asas daripada jenis dinding dan berapa tingkat yang berdiri di atasnya, dan membuat semula asas setiap kali dinding berubah.

## Letakkan asas

1. Pada tingkat yang dindingnya berdiri di atasnya (biasanya yang pertama), buka {{ui:Binaan}} dan pilih {{ui:Asas}}.
2. Pilih jenisnya:
   - **Papak atas tanah**: papak konkrit 4" yang bahagian atasnya ialah lantai, dengan tepi tebal di bawah dinding.
   - **Dinding batang dan papak**: dinding asas sehingga lantai di atas tapak asas, dengan papak di dalamnya.
   - **Ruang merangkak**: dinding asas yang berhenti di bawah rangka lantai, di atas tapak asas, tanpa papak.
   - **Ruang bawah tanah**: dinding asas penuh ketinggian di atas tapak asas dengan papak ruang bawah tanah, di bawah rangka lantai.
3. Tunjuk di dalam bangunan: tapak asas ditunjukkan putus-putus dengan saiznya. Klik.

Mengklik bangunan yang sudah mempunyai asas akan memilihnya, jadi anda boleh menukarnya dan bukan menambah yang kedua.

## Tukar

Pilih asas (klik di dalam bangunan dengan {{ui:Asas}}, atau klik mana-mana bahagiannya dalam paparan 3D atau pokok model) dan tukarnya dalam **Sifat**: jenisnya, lebar dan kedalaman tapak asas, sejauh mana bahagian bawah tapak asas, ketebalan dinding, sejauh mana di bawah lantai dinding berhenti, ketinggian ruang bawah tanah dan ketebalan papak. Setiap perubahan ialah satu langkah buat asal.

Saiz yang ditandai **auto** datang daripada dinding: tapak asas lebar 12", 15" atau 23" untuk satu, dua atau tiga tingkat di atas papak atau dinding batang, 18", 22" atau 27" di atas ruang merangkak atau ruang bawah tanah, dan 4" lebih lebar di bawah dinding bata atau konkrit. Taip saiz untuk menetapkan sendiri; taip `0` untuk kembali kepada auto.

:::warning
Saiz automatik ialah nilai lalai berlabel untuk rumah rangka ringan yang biasa, bukan kejuruteraan. Seorang pereka atau jurutera menyemak tapak asas, kedalaman dan dinding bagi tanah, kedalaman beku dan beban.
:::

## Apa yang disimpan

Asas disimpan sebagai himpunan elemen IFC ("Foundation") yang dibuat daripada tapak asas (atau tepi tebal papak), dinding asas dan papak mengikut keperluan jenisnya, semuanya konkrit, setiap satu dengan kuantitinya: panjang, lebar, tinggi, luas dan isipadu, sedia untuk pengukuran kuantiti.

## Perkara yang perlu diketahui

- Alih, tambah atau padam dinding dan asas di bawahnya dibuat semula; lukis dinding di tingkat atas dan tapak asas di bawah melebar untuk tingkat tambahan.
- {{key:Delete}} mengalih keluar asas yang dipilih dengan semua bahagiannya.
- Dengan tanah tapak dalam model (lihat [Tanah tapak, platform bangunan dan turapan](topic:terrain)), dinding batang dan tapak asas ruang merangkak turun mengikutnya dalam langkah 8".
- Tapak asas di bawah dinding dalaman belum dibina.
