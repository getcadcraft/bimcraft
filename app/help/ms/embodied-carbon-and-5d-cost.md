---
title: Karbon terkandung dan kos pada jadual
summary: Tambahkan karbon terkandung model daripada jadual faktor yang terbuka dan boleh disunting, dan agihkan harga merentasi jadual 4D kepada lengkung kos dan aliran tunai. Kedua-duanya bermula daripada nilai yang anda taip atau import.
keywords: karbon terkandung, karbon, co2, kgco2e, pelepasan, jadual faktor, epd, 5d, kos, aliran tunai, lengkung s, kos jadual, harga, harga pengukuran kuantiti
from: 83e82840
---

## Karbon terkandung

Buka anak tetingkap **Karbon**. Kuantiti setiap elemen (isipadu, luas atau panjang) didarab dengan faktor daripada jadual, mengikut modul kitar hayat: peringkat produk diperlukan, pengangkutan dan sisa adalah pilihan. Jumlah diperoleh mengikut bahan, kelas dan tingkat, serta setiap meter persegi lantai.

**Jadual faktor ialah milik anda.** Baris yang datang bersama BimCraft ialah nilai permulaan generik yang mempunyai peringkat magnitud yang betul. Ia bukan daripada pangkalan data, ditanda sebagai belum disemak, dan perlu digantikan dengan sumber yang anda gunakan (EPD, pangkalan data kebangsaan, atau angka firma anda). Sunting baris dalam anak tetingkap, atau import dan eksport jadual sebagai CSV atau JSON. Baris yang anda tambah akan menggantikan baris permulaan dengan id yang sama. Jadual disimpan dalam model.

Elemen tanpa padanan, atau tanpa kuantiti, disenaraikan sebagai Masalah dan bukannya dikira sebagai sifar.

## Kos pada jadual 4D

Buka anak tetingkap **Kos** di sebelah jadual 4D. Berikan harga kepadanya (taip, import CSV atau JSON, atau bawa baris TakeoffCraft), petakan setiap harga kepada bahan model dengan kata kunci, dan ia akan menentukan harga setiap elemen tugas. Kos sesuatu tugas diagihkan merentasi hari mula hingga siap (sekata, atau dimuatkan di hadapan atau di belakang), dan anak tetingkap melukis lengkung aliran tunai terkumpul mengikut hari, minggu atau bulan, dengan kos mengikut peringkat dan pakej serta perbandingan antara apa yang dirancang dan apa yang dibina pada tarikh tertentu. Eksport CSV. Tiada apa diberi harga sehingga anda memberikan harga: tiada harga disertakan.

## Mata wang

Jadual harga boleh menyatakan mata wang bagi harganya (tiga huruf, seperti USD atau EUR). Anak tetingkap 5D mempunyai kotak untuknya, ia disimpan dalam fail bersama harga, dan eksport JSON membawanya. Jadual yang dibuat sebelum ini, atau yang anda biarkan kosong, tidak mempunyai mata wang: kosnya ditunjukkan sebagai USD, lalai shell, dan anak tetingkap serta jumlah berjalan menyatakannya. Tiada penukaran antara mata wang.
