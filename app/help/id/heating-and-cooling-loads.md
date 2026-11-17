---
title: Perkirakan beban pemanasan dan pendinginan
summary: Kehilangan panas setiap ruangan, pemanasannya selama setahun berdasarkan degree-day, dan puncak pendinginannya, dari batas-batas ruangan dalam model dan nilai U setiap elemen, dengan setiap masukan ditampilkan. Alat bantu desain, bukan perhitungan kepatuhan.
keywords: energi, pemanasan, pendinginan, kehilangan panas, beban panas, beban pendinginan, nilai u, transmitansi termal, degree-day, hdd, ventilasi, pertukaran udara, beban internal, panas matahari, lambda, konduktivitas, insulasi, desain awal, analisis, ruangan, ruang
from: ec312d20
---

Pada tab {{ui:Cahaya siang}}, setelah {{ui:Hitung}}, buka {{ui:Beban pemanasan dan pendinginan}} lalu klik {{ui:Hitung beban}}. Setiap ruangan mendapat **kehilangan panas** pada hari desain yang dingin, **pemanasan selama setahun**, dan **puncak pendinginannya** pada hari yang panas. Tidak ada yang diunggah; tidak ada yang berubah di model kecuali Anda mengetik nilai U.

:::warning
Ini adalah **alat bantu desain, bukan perhitungan kepatuhan**: perkiraan keadaan tunak dengan setiap masukan ditampilkan di layar. Ini **bukan** metode ISO 52016-1, bukan simulasi, dan bukan sertifikat energi; ini tidak menentukan ukuran boiler, pompa kalor, atau chiller. Periksa hasilnya, dan tentukan ukuran peralatan, bersama insinyur.
:::

## Batas-batas setiap ruangan

BimCraft menemukannya langsung dari model itu sendiri, sehingga IFC dari program apa pun dapat digunakan (tidak memerlukan batas ruang yang diekspor oleh sebagian program). Dari setiap bagian permukaan milik ruangan, ia melihat lurus ke luar:

- dinding, jendela, pintu, lantai, atap, penutup, dinding tirai, atau balok pertama yang ditemuinya **membatasi** bagian itu;
- tepat setelah elemen itu, salah satu dari: **ruangan lain** (dihitung sebagai ruangan bersebelahan, pada suhu yang sama: tidak ada kehilangan), **tidak ada** (di luar), atau, di bawah lantai pada lantai terendah, **tanah**;
- ambang pintu terbuka ke ruangan lain dihitung sebagai bersebelahan; bagian yang tidak menyentuh apa pun sama sekali (dalam 1,5 m ke samping atau ke bawah, 8 m ke atas) didaftarkan di bawah ruangan dan tidak dihitung.

Jendela dan pintu mengambil ukurannya sendiri dari IFC (lebar × tinggi keseluruhan) dari dinding tempat mereka berada. Klik sebuah ruangan pada tabel untuk melihat setiap elemen yang membatasinya beserta luasnya, nilai U-nya, dan dari mana nilai U tersebut berasal.

## Nilai U

Untuk setiap elemen, BimCraft menggunakan, dengan urutan ini:

1. **Nilai U milik IFC** — `ThermalTransmittance` pada set properti umum elemen (misalnya `Pset_WallCommon`) atau milik tipenya. Sebagian besar program desain dapat menuliskannya.
2. **Lapisan materialnya** — 1 ÷ (resistansi permukaan dalam + tebal setiap lapisan ÷ konduktivitasnya λ + resistansi permukaan luar), dengan resistansi permukaan yang biasa (0,13 dan 0,04 m²K/W untuk dinding; 0,10 ke atas, 0,17 ke bawah di bagian dalam). Konduktivitas tipikal untuk memulai (wol mineral 0,035, bata 0,77, beton 1,4…); di bawah {{ui:Konduktivitas material}} ketik milik pabrikan, dan setiap nilai U dari lapisan tersebut ikut berubah.
3. **Nilai tipikal** (dinding 0,3, atap 0,2, lantai 0,25, jendela 1,4, pintu 1,6 W/m²K), ditandai sebagai demikian — ketik nilai Anda.

Nilai U yang diketik pada rincian sebuah ruangan ditulis ke set properti umum elemen sebagai `ThermalTransmittance` (satu langkah; {{key:Mod+Z}} membatalkannya). Jika beberapa elemen berbagi set itu (misalnya satu tipe dinding), semuanya berubah bersama, dan baris status menyebutkan jumlahnya.

## Pemanasan

- **Kehilangan panas** = Σ U × A × (dalam − luar) untuk semua yang menghadap ke luar + Σ U × A × (dalam − tanah) untuk lantai di atas tanah + 0,335 × pertukaran udara per jam × volume ruangan × (dalam − luar). 0,335 Wh per m³ per kelvin adalah kerapatan udara (1,2 kg/m³) dikali kapasitas panasnya (1005 J/kgK).
- **Pemanasan setahun** = (kehilangan ruangan per derajat ke luar, melalui selubung dan udara, ditambah kehilangan tanahnya yang diskalakan ke selisih yang sama) × **degree-day** × 24 ÷ 1000, dalam kWh. Ketik degree-day untuk lokasi tersebut, atau {{ui:Baca degree-day dari CSV…}} (satu baris per hari atau bulan; angka terakhir di setiap baris dijumlahkan). Gunakan degree-day ke suhu dasar yang dipakai sumber Anda: suhu dasar itu sudah memperhitungkan panas gratis dari orang, lampu, dan matahari.

## Pendinginan

**Puncak pendinginan** = panas melalui selubung dan udara pada suhu desain musim panas + orang (luas lantai per orang × panas per orang) + pencahayaan dan peralatan per m² lantai + **matahari**: puncak dari {{ui:Matahari melalui jendela pada suatu tanggal}} untuk ruangan itu. Hitung matahari terlebih dahulu, pada hari yang panas; sampai saat itu matahari dihitung 0 dan bagian ini menyatakannya. Puncak setiap bagian dijumlahkan meskipun terjadi pada jam yang berbeda, sehingga sedikit melebih-lebihkan.

## Yang tidak dihitung

- Metode bulanan dan per jam ISO 52016-1 (standar berbayar), panas yang tersimpan dalam massa bangunan, jembatan termal, kinerja sistem pemanasan dan pendinginan, serta file iklim.
- Ruangan yang berdampingan diambil pada suhu yang sama; ruang tak berpemanas tidak dimodelkan.

Lihat juga [Perkirakan cahaya siang di setiap ruangan](topic:daylight-factor).
