---
title: Semak pemanasan dan penyejukan dengan EnergyPlus
summary: Tulis model sebagai fail EnergyPlus, atau jalankan EnergyPlus versi 26.2.0 ke atasnya dalam pelayar, dan bandingkan beban reka bentuknya dengan alat bantuan pemanasan dan penyejukan pantas. Pendapat kedua untuk reka bentuk awal, bukan pengiraan pematuhan.
keywords: energyplus, simulasi tenaga, hari reka bentuk, beban pemanasan, beban penyejukan, fail cuaca, epw, idf, jisim terma, tenaga tahunan, simulasi
from: b82a5bf2
---

## Apa yang akan anda lakukan

Anak tetingkap **Semak dengan EnergyPlus** menulis model terbuka sebagai fail input EnergyPlus (IDF): satu zon bagi setiap bilik, dinding, lantai, bumbung dan tingkap dengan nilai-U masing-masing, pertukaran udara serta pemanasan dan penyejukan ideal. Anda sentiasa boleh **menyimpan fail itu** dan menjalankannya dalam EnergyPlus anda sendiri.

Jika anda juga menyediakan enjin, anak tetingkap itu boleh membuat simulasi serta-merta dan menyenaraikan pemanasan dan penyejukan reka bentuk EnergyPlus di sebelah bantuan pantas, bilik demi bilik.

Ini ialah alat bantuan reka bentuk. Kod tenaga, pensijilan dan permit memerlukan alat yang diluluskan serta data iklim yang diperlukannya, dan hasilnya perlu disemak oleh orang yang bertanggungjawab ke atasnya.

## Sediakan enjin

BimCraft tidak membawa EnergyPlus. Ia ialah binaan WebAssembly yang besar (kira-kira 6 MB termampat, ditambah fail data 4.6 MB), jadi anda menghosnya sendiri dan menaip alamatnya dalam anak tetingkap. Halaman hanya memuatkannya apabila anda menekan butang simulasi, tidak sekali pun semasa permulaan. Alamat mesti https, laluan pada laman ini, atau localhost.

## Hari reka bentuk atau setahun

- **Simulasi hari reka bentuk** tidak memerlukan fail cuaca. Ia menjalankan hari musim sejuk yang dingin tanpa matahari dan hari musim panas yang panas dan cerah, pada suhu dalam input pemanasan dan penyejukan pada tab Cahaya siang, dan melaporkan beban setiap bilik dalam watt.
- **Simulasi setahun** memerlukan fail cuaca dalam format EPW yang anda pilih. Ia menambah orang, lampu dan peralatan daripada input yang sama (sentiasa aktif, kerana tiada jadual dicipta) dan melaporkan tenaga pemanasan dan penyejukan bagi setiap bilik dalam kWh. Fail cuaca mempunyai lesen sendiri, jadi gunakan yang anda dibenarkan gunakan.

## Jisim terma

Tandakan **Beri dinding dengan lapisan yang diketahui jisim terma** dan dinding, bumbung serta lantai yang lapisan bahannya diketahui ditulis lapisan demi lapisan, dengan ketumpatan dan haba tentu diambil daripada jadual ringkas nilai tipikal mengikut nama bahan. Lapisan diambil dari luar dahulu, mengikut susunan yang disenaraikan dalam fail. Elemen tanpa lapisan kekal pada nilai-U mereka tanpa jisim.

## Membaca perbandingan

Kedua-dua kaedah menjawab soalan yang sedikit berbeza. Bantuan pantas mengekalkan setiap elemen; fail EnergyPlus pula memurata nilai-U setiap bilik mengikut jenis permukaan. Perbezaan lebih 15 % dalam pemanasan reka bentuk sesebuah bilik disenaraikan sebagai nota dalam panel ⚠, dengan kedua-dua nilai. Penyejukan berbeza lebih banyak mengikut reka bentuk: bantuan pantas mengira puncak daripada matahari pada satu tarikh, manakala EnergyPlus menentukan saiz pada hari reka bentuknya sendiri.
