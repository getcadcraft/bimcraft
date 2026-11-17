---
title: Semak model terhadap IDS pelanggan
summary: Muat fail .ids yang diberikan kepada anda dan lihat setiap elemen yang tidak memenuhinya dalam Masalah, sebelum anda menyerahkan IFC.
keywords: ids, information delivery specification, buildingsmart, keperluan, penyerahan, semak, pengesahan, qa, eir, bep, sifat, pengelasan, bahan, perolehan
from: 7b960222
---

## Apa yang akan anda lakukan

IDS (Information Delivery Specification, piawaian buildingSMART) ialah senarai perkara yang mesti ada dalam IFC: kelas yang mana, sifat dengan nilai yang mana, pengelasan, bahan, dan di mana objek patut berada. Pelanggan dan perolehan awam menghantar satu bersama kerja. BimCraft menyemak model IFC terbuka terhadapnya dan menyenaraikan setiap elemen yang tidak mencapai keperluan.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Semak dengan IDS}} dalam panel kiri, di bawah {{ui:Semakan model}}, atau pilih {{ui:Semak dengan IDS…}} daripada menu mengikut gaya menu anda.
3. Klik {{ui:Muat fail .ids…}} dan pilih fail itu. Tiada apa-apa dimuat naik.
4. Baca hasilnya: setiap spesifikasi dengan {{ui:Lulus}} atau {{ui:Gagal}} dan berapa banyak elemen yang dikenakannya.
5. Buka Masalah ({{key:Ctrl+Shift+M}}) dan klik satu kegagalan untuk memilih elemen itu dan zum kepadanya.

## Apa yang anda patut lihat

- Satu amaran bagi setiap elemen dan keperluan yang tidak dipenuhinya, dengan nama spesifikasi, apa yang IDS minta dan apa yang ada pada elemen itu.
- Spesifikasi wajib yang tiada padanan dalam model menjadi satu amaran tersendiri.
- Laporan semakan (dalam Masalah) bermula dengan IDS: tajuknya, versi, pengarang dan bilangan terpakai, lulus dan gagal bagi setiap spesifikasi.

## Perkara yang perlu diketahui

- IFC hanya menyimpan rujukan kepada IDS (namanya, tajuk, versi dan hash), bukan IDS itu sendiri: IDS pelanggan mungkin sulit, dan IFC dihantar kepada orang lain. IDS kekal dalam pelayar ini bersama model, jadi apabila anda membuka semula IFC yang disimpan di sini, ia disemak semula. Memuat atau melupakan IDS ialah satu langkah yang boleh dibuat asal.
- Dibuka pada komputer lain atau dalam pelayar lain, Masalah menunjukkan nota bahawa IDS tidak dijumpai: muat semula untuk menyemak semula.
- Untuk menghantar IDS bersama IFC, hidupkan {{ui:Simpan IDS dalam IFC}} dalam Tetapan, pada tab BimCraft, sebelum anda memuatnya.
- Setiap suntingan, buat asal dan buat semula disemak semula sejurus kemudian.
- Nilai dibandingkan mengikut cara IDS: teks tepat (huruf besar dan kecil dikira), nombor dalam unit SI dengan toleransi kecil (panjang dalam meter, jadi model dalam milimeter ditukar dahulu).
- Spesifikasi yang ditulis untuk versi IFC lain (contohnya IFC2X3 apabila model ialah IFC4) tetap disemak; hasilnya menyatakannya.
- Jika fail IDS mempunyai kecacatan yang akan dikesan oleh audit IDS, dialog menyenaraikannya; spesifikasi yang terlibat akan gagal.
- Anda boleh menerima kegagalan dengan sebab, seperti mana-mana masalah. Ia kekal diterima selagi nilai elemen itu tidak berubah.

- Corak dalam IDS dibaca sebagai keseluruhan nilai. `^` di permulaan dan `$` di penghujung juga dianggap "keseluruhan nilai", seperti yang dimaksudkan oleh kebanyakan fail IDS.

## Seterusnya

- [Semak model untuk masalah biasa](topic:model-checks)
- [Tukar dinding atau pintu](topic:change-a-wall-or-door)
