---
title: Periksa elemen beton dan buat beban seismik
summary: Atur batang tulangan pada balok dan kolom beton dari model yang terbuka, periksa menurut ACI 318-19, buat gaya lateral ekuivalen menurut ASCE 7-22 pada lantai kaku, dan lihat simpangan lantai. Alat bantu bagi insinyur untuk memeriksa.
keywords: beton, beton bertulang, ACI 318, ACI 318-19, tulangan, balok, kolom, geser, sengkang, seismik, gempa, gaya lateral ekuivalen, ELF, ASCE 7-22, simpangan, simpangan lantai, lantai, diafragma kaku, berat lantai, pemanfaatan, struktural, insinyur, analisis
from: 2f342e72
---

Blok {{ui:Elemen beton}} dan {{ui:Beban seismik}} di tab {{ui:Analisis}} memeriksa balok dan kolom beton bertulang dari IFC yang terbuka, dan membuat gaya samping gempa pada lantai rangkanya. Keduanya adalah blok yang sama dengan milik DetailCraft, dijalankan setelah analisis tab {{ui:Analisis}}, dan disimpan di IFC bersama pengaturan analisis lainnya.

:::warning
Hasilnya **untuk diperiksa oleh insinyur**: alat bantu sampai seorang insinyur telah meninjaunya. Pemeriksaan beton menggunakan gaya orde pertama (kolom dalam rangka yang Anda tetapkan sebagai non-goyang didesain untuk momen yang diperbesar), tanpa pembesaran goyangan, tanpa desain torsi, tanpa detail seismik (ACI pasal 18), dan tanpa detail sengkang. Beban seismik tidak memperhitungkan faktor redundansi, efek seismik vertikal, amplifikasi torsi, dan efek P-delta. **Beban angin belum dibuat**: bab angin standar tidak ada dalam halaman referensi proyek.
:::

## Yang dibaca BimCraft

Analisis membaca balok, kolom, dan bresing model beserta profilnya (lihat [Analisis rangka struktur](topic:frame-analysis)). Blok {{ui:Elemen beton}} mendaftar setiap penampang yang mereka pakai. Tekan {{ui:Atur sebagai beton…}} pada penampang yang berupa beton: BimCraft mengambil persegi panjang dari luas dan kekakuan profil (lebar b dan tinggi h yang kemudian dapat Anda ubah), sehingga penampang yang tidak mendekati persegi panjang (profil baja gulung) memberikan ukuran yang harus Anda koreksi, atau dibiarkan.

Penampang yang diatur sebagai beton, dan elemen apa pun yang materialnya bernama beton, dianalisis sebagai beton: E = 4700 √f′c, 2400 kg/m³, dan secara default dengan **penampang retak** (kolom 0.70 Ig, balok 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Pilih {{ui:Penampang bruto}} untuk mematikannya. Tanpa pengaturan ini, model dianalisis persis seperti sebelumnya.

## Tulangan, kombinasi, pemeriksaan

Beri selimut, batang atas, bawah, dan samping (atau kerangka kolom), serta sengkang setiap penampang, lalu atur f′c, fy, fyt, K, dan goyang atau non-goyang. Beri jenis setiap kasus beban, tekan {{ui:Buat kombinasi}} (ASCE 7 §5.3.1), lalu {{ui:Periksa beton}}: setiap elemen mendapat pemanfaatan, diberi warna pada model. Elemen yang melebihi kapasitas, dan simpangan lantai yang melebihi batasnya, didaftar di {{ui:Masalah}} dengan klausulnya; klik salah satunya untuk memilih elemen.

## Lantai dan beban seismik

Di blok {{ui:Beban seismik}}, {{ui:Temukan lantai}} mengambil level tempat dua balok atau lebih bertemu; masing-masing menjadi diafragma kaku. {{ui:Ambil berat dari kasus}} membaca berat seismik setiap lantai dari kasus yang Anda beri faktor. Isi SDS, SD1, S1, R, Ie, Cd, TL, sistem, dan kategori risiko, lalu {{ui:Buat kasus seismik}} (ASCE 7-22 12.8: periode, gaya dasar, distribusi ke atas lantai, torsi aksidental 5 %). Gaya lantai dan pemeriksaan simpangan (12.12) muncul setelah dijalankan. Periode dan kekakuan lantai yang sama juga memberi masukan pada gempa di [Putar banjir, angin, atau gempa](topic:hazard-playback) saat Anda memilih rangka analisis sebagai sumbernya.

Pelat dan dinding beton menjadi pelat dalam analisis, dan blok {{ui:Tulangan pelat lantai}} menghitung baja yang mereka butuhkan per meter. Detail setiap pemeriksaan ada di topik DetailCraft dengan nama yang sama.
