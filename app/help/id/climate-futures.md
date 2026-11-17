---
title: "Masa depan iklim: banjir, panas, dan kebakaran hutan 2050 dan 2080"
summary: Jalankan ulang analisis banjir, tahun energi, dan penyaringan kebakaran hutan dengan iklim masa depan (skenario SSP2-4.5 dan SSP5-8.5, tahun 2050 dan 2080) dari paket data iklim, ditampilkan berdampingan dengan kondisi masa kini.
keywords: iklim, perubahan iklim, masa depan, 2050, 2080, ssp, cmip6, skenario, kenaikan muka laut, banjir, panas, file cuaca, epw, morph, energyplus, kebakaran hutan, kebakaran semak, cuaca kebakaran
from: 224ecd08
---

Angka iklim berasal dari **paket data**, bukan dari aplikasi. Nyalakan add-on {{ui:Masa depan iklim}} di Pengaturan › Add-on, atau muat file paket milik Anda sendiri di blok {{ui:Masa depan iklim}}.

:::warning
Paket yang disertakan dengan add-on adalah **contoh**: tiga tempat (Denver, Miami, Johannesburg), satu model iklim, dan lima tahun di setiap periode 20 tahun. Paket ini hanya untuk mencoba alat-alatnya, **bukan untuk desain**. Panel menyatakannya dengan tebal saat sedang digunakan. Paket lengkap (banyak model, semua tahun, dan lebih banyak tempat) dibangun dengan `tools/climate/build-pack.mjs` dari data NEX-GDDP-CMIP6 milik NASA.
:::

## Pilih masa depan

Di {{ui:Pemutaran bahaya}} pada panel kiri, pilih **Skenario** (SSP2-4.5, jalur tengah, atau SSP5-8.5, emisi tinggi) dan **Tahun** (2050 berarti 2041-2060, 2080 berarti 2071-2090; keduanya dibandingkan dengan 1995-2014). **Tempat** adalah tempat dalam paket yang paling dekat dengan lokasi model (garis lintang dan bujur IfcSite), atau yang Anda pilih. Jika jauh dari semua tempat, perubahan rata-rata global dari paket digunakan dan panel menyatakannya.

## Banjir, masa kini ditampilkan berdampingan dengan masa depan

Dengan skenario dipilih, atur **Jenis banjir**: pesisir (menambahkan kenaikan muka laut), sungai, atau hujan lebat (lebih dalam sesuai perubahan hujan pada hari paling basah), atau keduanya. Tekan Jalankan: banjir diputar seperti sebelumnya, dan tabel menampilkan banjir masa kini dan masa depan berdampingan (ketinggian air, ruangan yang basah, air terdalam). Asumsinya tercantum di bawahnya:

- ketinggian pesisir naik sebesar seluruh kenaikan muka laut; gelombang dan badai tidak diubah;
- aliran sungai naik satu banding satu dengan curah hujan pada hari paling basah, dan kedalaman mengikuti aliran pangkat 0.6 (persamaan Manning untuk saluran lebar);
- kedua bagian hanya dijumlahkan.

## Panas: file cuaca masa depan

Pilih jenis {{ui:Panas: file cuaca masa depan}}, pilih file cuaca `.epw` masa kini dan tekan {{ui:Buat file cuaca masa depan}}. File itu di-**morph** bulan demi bulan dengan metode pergeseran dan peregangan yang dipublikasikan (Belcher, Hacker and Powell 2005): rata-rata bulan menghangat sebesar perubahan paket, sore yang panas sebesar perubahan maksimum harian, dan malam yang dingin sebesar perubahan minimum harian; kelembapan relatif bergeser sebesar perubahan paket dan titik embun dihitung ulang. Tekanan dan angin tetap seperti semula. Tabel membandingkan suhu rata-rata dan terpanas, suhu desain pendinginan 0.4 % dan pemanasan 99.6 %, jam pada 30 °C dan 35 °C, serta derajat-hari.

{{ui:Simpan file cuaca masa depan}} menyimpannya; {{ui:Gunakan di pemeriksaan energi}} menyerahkannya ke pemeriksaan EnergyPlus (tab Energi). File masa depan adalah tahun tipikal yang sama, hanya lebih hangat: ia tidak menambahkan gelombang panas baru.

## Tahun energi, masa kini ditampilkan berdampingan dengan masa depan

Di pemeriksaan EnergyPlus pada tab Energi (add-on tersendiri, dengan mesin Anda sendiri), pilih file cuaca masa kini, lalu skenario dan tahun di blok {{ui:Masa depan iklim}}-nya, dan tekan {{ui:Simulasikan setahun: masa kini dan masa depan}}: tahun dijalankan pada file masa kini dan pada versi masa depannya yang sudah di-morph, dan pemanasan serta pendinginan setiap ruangan dicantumkan berdampingan.

## Paparan kebakaran hutan (hanya penyaringan)

Pilih jenis {{ui:Paparan kebakaran hutan (hanya penyaringan)}}: vegetasi terdekat, kemiringan naik dari vegetasi ke bangunan, dan jaraknya. Hasilnya berupa pita dari sangat rendah sampai ekstrem, masa kini dan masa depan.

:::warning
**Hanya penyaringan.** Ini adalah skala relatif kami sendiri untuk mengetahui apakah suatu lokasi memerlukan penilaian kebakaran hutan yang layak, bukan peringkat kode atau tingkat serangan kebakaran semak. Ia mengalikan bobot untuk vegetasi, faktor kemiringan (api kira-kira dua kali lipat kecepatannya untuk setiap kemiringan 10 derajat ke atas, dihitung hingga 20 derajat), faktor jarak (10 m dibagi jarak, paling tinggi 1), dan perubahan indeks cuaca kebakaran dari paket.
:::

## Dari mana angkanya berasal

- **Suhu, kelembapan, sinar matahari, curah hujan, cuaca kebakaran:** NASA NEX-GDDP-CMIP6, keluaran model CMIP6 yang diperkecil skalanya secara harian. Keluaran setiap model berada di bawah CC BY 4.0. Perubahan cuaca kebakaran adalah Canadian Fire Weather Index yang dihitung hari demi hari dari cuaca model (dengan kelembapan harian sebagai pengganti kelembapan tengah hari).
- **Kenaikan muka laut:** rata-rata global IPCC AR6 (bukan lokal; penurunan atau kenaikan daratan tidak termasuk di dalamnya), kecuali paket membawa angka lokal.
- Paket menyebutkan sumber, lisensi, dan tanggalnya; panel menampilkannya.
