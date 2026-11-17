---
title: Pondasi di bawah dinding
summary: Pasang pelat di atas tanah, dinding pondasi dengan pelat, ruang rayap (crawlspace), atau basemen di bawah bangunan dengan satu klik; footing dihitung dari dinding dan jumlah lantai, dan pondasi ikut berubah ketika dinding berpindah.
keywords: pondasi, footing, pelat di atas tanah, tepi menebal, pelat monolit, dinding pondasi, crawlspace, ruang rayap, basemen, dinding basemen, beku, beton, lebar footing
from: c0e20172
---

## Yang akan Anda lakukan

Beri bangunan pondasi yang sesuai dengan dindingnya. BimCraft mengikuti sisi luar dinding, menentukan ukuran footing dari tipe dinding dan berapa lantai yang berdiri di atasnya, dan membuat ulang pondasi setiap kali dinding berubah.

## Pasang pondasi

1. Di lantai tempat dinding berdiri di atas pondasi (biasanya lantai pertama), buka {{ui:Build}} dan pilih {{ui:Pondasi}}.
2. Pilih jenisnya:
   - **Pelat di atas tanah**: pelat beton 4" yang bagian atasnya adalah lantai, dengan tepi menebal di bawah dinding.
   - **Dinding pondasi dan pelat**: dinding pondasi sampai lantai, di atas footing, dengan pelat di dalamnya.
   - **Ruang rayap (crawlspace)**: dinding pondasi yang berhenti di bawah rangka lantai, di atas footing, tanpa pelat.
   - **Basemen**: dinding pondasi setinggi penuh di atas footing dengan pelat basemen, di bawah rangka lantai.
3. Arahkan ke dalam bangunan: footing tampil putus-putus dengan ukurannya. Klik.

Mengklik bangunan yang sudah memiliki pondasi akan memilihnya, sehingga Anda dapat mengubahnya alih-alih menambah pondasi kedua.

## Ubah

Pilih pondasi (klik di dalam bangunan dengan {{ui:Pondasi}}, atau klik salah satu bagiannya di tampilan 3D atau pohon model) dan ubah di **Properti**: jenisnya, lebar dan kedalaman footing, seberapa dalam sisi bawah footing, tebal dinding, seberapa jauh di bawah lantai dinding berhenti, tinggi basemen, dan tebal pelat. Setiap perubahan adalah satu langkah urungkan.

Ukuran yang bertanda **otomatis** berasal dari dinding: footing lebarnya 12", 15", atau 23" untuk satu, dua, atau tiga lantai di atas pelat atau dinding pondasi; 18", 22", atau 27" di atas ruang rayap atau basemen; dan 4" lebih lebar di bawah dinding bata atau beton. Ketik ukuran untuk menentukan sendiri; ketik `0` untuk kembali ke otomatis.

:::warning
Ukuran otomatis adalah nilai default berlabel untuk rumah rangka ringan yang umum, bukan rekayasa. Perancang atau insinyur memeriksa footing, kedalaman, dan dinding terhadap tanah, kedalaman beku, dan beban.
:::

## Yang disimpan

Pondasi disimpan sebagai rakitan elemen IFC ("Foundation") yang terdiri dari footing (atau tepi menebal pelat), dinding pondasi, dan pelat sesuai kebutuhan jenisnya, semuanya beton, masing-masing dengan kuantitasnya: panjang, lebar, tinggi, luas, dan volume, siap untuk perhitungan volume.

## Hal yang perlu diketahui

- Memindahkan, menambah, atau menghapus dinding membuat ulang pondasi di bawahnya; menggambar dinding di lantai di atas membuat footing di bawah melebar untuk tambahan lantai.
- {{key:Delete}} menghapus pondasi yang dipilih beserta semua bagiannya.
- Dengan tanah situs di dalam model (lihat [Tanah situs, dasar bangunan, dan perkerasan](topic:terrain)), dinding pondasi dan footing ruang rayap turun mengikutinya dalam langkah 8".
- Footing di bawah dinding interior belum dibuat.
