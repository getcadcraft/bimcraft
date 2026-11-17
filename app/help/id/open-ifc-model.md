---
title: Buka model IFC dan lihat sekeliling dalam 3D
summary: Buka file IFC, orbit, geser, dan zoom, lalu gunakan Paskan, Atas, Depan, dan Samping untuk mengenali posisi Anda.
keywords: ifc, 3d, orbit, geser, zoom, paskan, tampilan atas, tampilan depan, tampilan samping, navigasi, viewcube, kamera
from: 68b460dd
---

## Yang akan Anda lakukan

Membuka model IFC, bergerak di sekelilingnya dalam 3D, dan melompat ke tampilan standar. Sekitar lima menit.

Anda memerlukan file `.ifc`. Sebagian besar program BIM mengekspornya; di Revit caranya **File > Export > IFC**. Lihat [Mendapatkan file proyek ke 3D melalui IFC](topic:rvt-to-ifc).

## Langkah-langkah

1. Klik {{ui:Choose a file}} (atau area jatuhkan di kiri atas).
2. Pilih file `.ifc` Anda lalu konfirmasi.
3. Tunggu baris status selesai. Muncul "Memulai mesin IFC…" pertama kali, lalu "Membaca model…" dan "Membangun geometri: … dari … elemen".
4. Lihat modelnya: ia dibuka dalam tampilan tiga perempat, dipaskan ke layar.
5. Klik {{ui:Top}} di bilah alat di atas model untuk melihat lurus ke bawah.
6. Klik {{ui:Front}} untuk melihat bagian depan, lalu {{ui:Side}} untuk melihat dari samping.
7. Klik {{ui:Fit}}, atau tekan {{key:F}}, untuk kembali ke tampilan tiga perempat seluruh model.

## Yang akan terlihat

- Model di tengah, dengan tepi gelap tipis untuk tampilan seperti gambar.
- Panel {{ui:File}} di kiri: nama file, ukuran, skema IFC (misalnya IFC2X3 atau IFC4), nama proyek, fase, program tempat ekspor, penulis, tanggal ekspor, serta jumlah elemen dan segitiga.
- Daftar {{ui:Storeys}} dan {{ui:Elements}} di bawahnya.
- Baris status: "Dibuka *nama file*: *n* elemen dalam *s* s".

## Bergerak di sekeliling

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan tombol kiri |
| Geser | Seret dengan tombol kanan, atau tahan {{key:Shift}} (atau {{key:Mod}}) dan seret dengan tombol kiri |
| Zoom | Gulir roda, atau seret dengan tombol tengah |
| Lihat semuanya | Tekan {{key:F}} atau klik {{ui:Fit}} |
:::

:::mac mouse
Pada trackpad: seret dengan satu jari yang ditekan untuk orbit; tahan {{key:Shift}} atau {{key:Mod}} lalu seret untuk menggeser; gulir dengan dua jari atau cubit untuk zoom. Klik dua jari adalah klik kanan, dan Anda dapat menyeret dengannya untuk menggeser, tetapi {{key:Shift}} lalu seret lebih mudah.
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Orbit | Seret dengan satu jari |
| Zoom | Cubit dengan dua jari |
| Geser | Gerakkan dua jari bersamaan |
| Lihat semuanya | Ketuk {{ui:Fit}} |
:::

Orbit selalu berputar di sekitar titik di tengah model. Geser memindahkan titik itu, sehingga setelah geser yang panjang orbit mungkin terasa tidak berpusat: klik {{ui:Fit}} untuk mengatur ulang.

## Berbayang, tepi, atau rangka kawat

Tiga tombol kecil tepat di atas view cube memilih cara model digambar: {{ui:Shaded}}, {{ui:Shaded with edges}} (bawaan), dan {{ui:Wireframe}}. Tombol itu juga perintah (Tampilan di menu dan daftar Kustomisasi), sehingga dapat memiliki pintasan sendiri. {{ui:Plan}}, {{ui:Split}}, dan {{ui:3D}} ada di baris {{ui:View}} pada bilah alat.

## Kesalahan umum

- **Mengharapkan tampilan bernama.** BimCraft memiliki empat tampilan tetap ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), view cube di pojok kanan bawah, dan orbit bebas. Ia tidak menyimpan tampilan.
- **Mencari denah dan potongan.** Tidak ada denah 2D atau kotak potongan di build ini. Potong model dengan satu bidang {{ui:Section}} ([Potong model IFC dengan bidang potongan](topic:section-plane)), atau matikan lantai: [Tampilkan dan sembunyikan lantai, ruang, dan tepi](topic:storeys-and-spaces).
- **Membuka file proyek dan mengharapkan 3D.** File proyek terbuka sebagai kartu file. Ekspor IFC terlebih dulu.
- **Membuka `.ifczip`.** Ekstrak zip-nya, atau ekspor `.ifc` biasa.
- **Model yang sangat besar membuat tab lambat atau macet.** Lihat [Peramban, perangkat, dan memori](topic:platforms).

## Berikutnya

[Pilih elemen dan baca propertinya](topic:inspect-element).
