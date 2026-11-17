---
title: Array PV surya, bayangan, dan hasil tahunan
summary: Pasang array surya di atap atau di tanah, beri bayangan dari model, perkirakan energi tahunan, ukur string, dan buat data diagram satu garis. Semua masukan ditampilkan, dan modul awal serta kerugiannya bersifat umum.
keywords: surya, pv, photovoltaic, array, modul, atap, bayangan, hasil, kwh, kwp, ukuran string, inverter, satu garis, single line, kemiringan, azimut, jarak baris
from: adf4aaf3
---

## Yang akan Anda lakukan

Buka panel **PV Surya**. Pilih bidang atap (kemiringan dan arahnya dibaca dari model) atau pasang array di tanah dengan kemiringan dan arah; modul dipasang di dalamnya dengan jarak mundur dan dihitung, menghasilkan daya DC dalam kWp. Menempatkan array menuliskannya ke dalam model sebagai perangkat surya, dalam satu langkah urungkan.

## Bayangan, hasil, dan string

- **Bayangan** memancarkan sinar dari setiap modul ke arah matahari untuk hari-hari tipikal setiap bulan terhadap geometri model itu sendiri, sehingga bangunan tetangga, parapet, dan baris di depannya ikut dihitung. Hanya sinar matahari langsung yang dikurangi, dan array yang sebagian terbayangi kehilangan daya sebanding dengan bagiannya.
- **Hasil** memberikan kWh per bulan dan per tahun, kWh per kWp, dan rasio kinerja. Matahari diambil dari total bulanan Anda sendiri pada permukaan horizontal jika Anda mengetiknya. Tanpa itu, panel memakai batas atas langit cerah dan menyatakannya. **Ambil iklim dari NASA POWER** dengan tombol pada tab Hasil: hanya lintang dan bujur tapak yang dikirim, sekali, dan jawabannya disimpan di komputer ini (diperiksa dari peramban pada 2026-10-30). PVGIS tidak mengizinkan halaman web membaca jawabannya, sehingga tab ini memberikan tautan yang membuka data bulanan PVGIS untuk tapak tersebut di tab baru; tempel apa yang ditampilkannya di kotak, dan dua belas bulan akan terisi.
- **String** memeriksa modul per string terhadap jendela tegangan inverter pada hari terdingin dan terpanas, serta string paralel terhadap arusnya.
- **Satu garis** membuat data diagram (array, combiner, pemutus, inverter, panel, utilitas) dengan ukuran kabel dan sekring dari faktor yang Anda ketik. Ini adalah data dan SVG; add-on Electrical di CadCraft dapat menempatkannya sebagai simbol.

Modul, inverter, kerugian, dan faktor kabel yang disertakan dengan BimCraft bersifat contoh umum, diberi label di setiap hasil. Ketik data dari pabrikan dan nilai kode yang Anda rancang, dan minta desainnya ditinjau oleh orang yang bertanggung jawab atasnya.
