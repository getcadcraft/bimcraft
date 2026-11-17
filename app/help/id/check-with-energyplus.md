---
title: Periksa pemanasan dan pendinginan dengan EnergyPlus
summary: Tulis model sebagai file EnergyPlus, atau jalankan EnergyPlus versi 26.2.0 pada model di peramban, lalu bandingkan beban desainnya dengan alat bantu pemanasan dan pendinginan cepat. Pendapat kedua untuk desain awal, bukan perhitungan kepatuhan.
keywords: energyplus, simulasi energi, hari desain, beban pemanasan, beban pendinginan, file cuaca, epw, idf, massa termal, energi tahunan, simulasi
from: b82a5bf2
---

## Yang akan Anda lakukan

Panel **Periksa dengan EnergyPlus** menulis model yang terbuka sebagai file masukan EnergyPlus (IDF): satu zona untuk setiap ruangan, dinding, lantai, atap, dan jendela beserta nilai U-nya, pertukaran udara, serta pemanasan dan pendinginan ideal. Anda selalu dapat **menyimpan file itu** dan menjalankannya di EnergyPlus Anda sendiri.

Jika Anda juga menyiapkan mesinnya, panel dapat melakukan simulasi di tempat, dan mencantumkan pemanasan serta pendinginan desain dari EnergyPlus di samping alat bantu cepat, ruangan demi ruangan.

Ini adalah alat bantu desain. Kode energi, sertifikasi, dan izin memerlukan alat yang disetujui beserta data iklim yang dibutuhkannya, dan hasilnya perlu ditinjau oleh orang yang bertanggung jawab atasnya.

## Siapkan mesinnya

BimCraft tidak membawa EnergyPlus. Ini adalah build WebAssembly yang besar (sekitar 6 MB terkompresi, ditambah file data 4.6 MB), jadi Anda menjadi host-nya sendiri dan mengetik alamatnya di panel. Halaman hanya memuatnya saat Anda menekan tombol simulasi, tidak pernah saat aplikasi dibuka. Alamatnya harus https, jalur di situs ini, atau localhost.

## Hari desain atau setahun

- **Simulasikan hari desain** tidak memerlukan file cuaca. Simulasi ini menjalankan satu hari musim dingin yang dingin tanpa matahari dan satu hari musim panas yang panas serta cerah, pada suhu dalam masukan pemanasan dan pendinginan di tab Cahaya siang, lalu melaporkan beban setiap ruangan dalam watt.
- **Simulasikan setahun** memerlukan file cuaca dalam format EPW yang Anda pilih. Simulasi ini menambahkan penghuni, lampu, dan peralatan dari masukan yang sama (selalu menyala, karena tidak ada jadwal yang dibuat), lalu melaporkan energi pemanasan dan pendinginan setiap ruangan dalam kWh. File cuaca memiliki lisensinya sendiri, jadi gunakan yang boleh Anda pakai.

## Massa termal

Centang **Beri dinding dengan lapisan yang diketahui massa termal**, maka dinding, atap, dan lantai yang lapisan materialnya diketahui akan ditulis lapis demi lapis, dengan kepadatan dan panas jenis yang diambil dari tabel singkat nilai-nilai umum menurut nama material. Lapisan diambil dari luar lebih dulu, sesuai urutan yang tercantum dalam file. Elemen tanpa lapisan tetap pada nilai U-nya tanpa massa.

## Membaca perbandingan

Kedua metode menjawab pertanyaan yang sedikit berbeda. Alat bantu cepat mempertahankan setiap elemen; file EnergyPlus merata-ratakan nilai U setiap ruangan menurut jenis permukaan. Selisih lebih dari 15 % pada pemanasan desain sebuah ruangan dicantumkan sebagai catatan di panel ⚠, dengan kedua angkanya. Pendinginan berbeda lebih jauh secara desain: alat bantu cepat menghitung puncak dari matahari pada satu tanggal, sedangkan EnergyPlus menentukan ukurannya pada hari desainnya sendiri.
