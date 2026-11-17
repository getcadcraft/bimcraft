---
title: Selesaikan pertembungan dengan pembetulan setiap disiplin
summary: Daripada hasil semakan pertembungan, Cadang pembetulan menyenaraikan bagi setiap pertembungan apa yang setiap disiplin boleh lakukan, seperti saluran dialih melalui rasuk, paip diketepikan, tiang dialihkan atau bukaan dalam rasuk. Setiap satu dicuba pada salinan model dengan pertukaran dagangannya, untuk anda terima atau tolak. Pembetulan yang diterima dimasukkan sebagai satu langkah buat asal.
keywords: pertembungan, pembetulan pertembungan, selesaikan pertembungan, koordinasi, cadang pembetulan, laluan semula, pintasan, ofset, saluran, paip, dulang, rasuk, tiang, bukaan, sarung, pertukaran dagangan, disiplin, struktur, mekanikal, perpaipan, elektrik, seni bina, pembantu
from: f7bafdd9
---

## Apa yang akan anda lakukan

Tukar senarai pertembungan kepada keputusan. Setiap disiplin (struktur, mekanikal, perpaipan, elektrik, seni bina) mencadangkan pembetulan untuk elemennya sendiri sahaja, setiap cadangan disemak pada salinan model, dan anda yang memilih.

## Langkah

1. Jalankan semakan pertembungan dahulu. Lihat [Semak untuk pertembungan](topic:clash-check) dan [Semak paip dan saluran terhadap struktur](topic:mep-against-structure).
2. Di bawah hasil, klik {{ui:Cadang pembetulan}}. Panel **Pembetulan dicadangkan** dibuka di sebelah model.
3. Bagi setiap pertembungan, anda melihat cadangan setiap disiplin, yang terbaik dahulu. Setiap baris menyatakan apa yang ia lakukan dan pertukaran dagangannya: sama ada ia menyelesaikan pertembungan, berapa pertembungan baharu yang dicipta, peraturan mana yang dilanggar, berapa banyak larian ditambah atau sejauh mana ia dialihkan, berapa banyak fiting dan skor kos.
4. Klik {{ui:Tunjuk}} untuk melihat elemen dalam 3D. Klik {{ui:Terima}} pada pembetulan yang anda mahu (satu bagi setiap pertembungan), atau {{ui:Tolak}}.
5. Baris di bahagian bawah menyatakan apa yang semua pembetulan yang anda terima lakukan bersama: berapa pertembungan diselesaikan, berapa yang tinggal dan sama ada ada yang baharu bertembung.
6. Klik {{ui:Guna pembetulan yang diterima (satu langkah buat asal)}}. Semakan pertembungan berjalan semula. {{ui:Buat asal}} membatalkan kesemuanya sekaligus.

## Apa yang boleh dilakukan setiap disiplin

- **Mekanikal** (saluran, paip pemanasan dan penyejukan): pintas di atas atau di bawah pada kaki yang terlanggar, naikkan atau turunkan keseluruhan larian, alihkan ke sisi, atau jadikan saluran segi empat tepat lebih rata dengan luas yang sama.
- **Perpaipan** (air, longkang, gas, kebakaran): pergerakan yang sama, kecuali longkang graviti tidak pernah diberi pintasan; ia hanya boleh dialihkan secara keseluruhan, dengan mengekalkan kecerunannya.
- **Elektrik** (dulang dan konduit): pergerakan yang sama; dulang mesti mengekalkan 150 mm ruang lapang di atasnya untuk memasang kabel.
- **Struktur**: alihkan tiang (sehingga 300 mm), atau bukaan dalam web rasuk atau papak untuk larian yang melaluinya. Setiap pembetulan struktur menyatakan jurutera struktur perlu meluluskannya.
- **Seni bina**: sarung dalam dinding untuk larian yang melaluinya, atau alihkan dinding yang diketahui tidak menanggung beban.

## Apa yang anda patut lihat

- Pembetulan yang melanggar peraturan ditanda: lebih dekat daripada jurang 25 mm kepada sesuatu yang lain, di bawah garis ruang kepala 2,100 mm, bukaan web yang lebih besar daripada 40% kedalaman rasuk atau terlalu dekat hujungnya, atau rasuk yang akan menukar rentang.
- Pembetulan yang BimCraft boleh buat diguna pada model: larian yang anda lukis dengan alat Paip dan Saluran, serta tiang yang anda lukis. Yang lain menyatakan **Nasihat sahaja**: menerimanya menambah isu dalam tab Isu.

## Perkara yang perlu diketahui

- Pembetulan datang daripada peraturan terbina dalam aplikasi; tiada AI digunakan untuknya.
- Jika anda menyambungkan pembantu (lihat [Benarkan pembantu AI bekerja dengan model anda](topic:assistants)), ia boleh membaca pertembungan dan menambah cadangannya sendiri bagi satu disiplin ke dalam panel yang terbuka. Ia disemak dengan cara yang sama, ditanda dengan nama pembantu, dan tiada apa yang diubah sehingga anda menerima dan menggunakannya.
- Salinan disemak dengan kotak di sekeliling setiap elemen dan setiap kaki larian, jadi larian condong mungkin menunjukkan pertembungan yang semakan pertembungan tidak akan tunjukkan. Jalankan semula semakan pertembungan selepas menggunakan: itulah keputusan muktamad.
- Had (sejauh mana larian boleh bergerak, setinggi mana pintasan boleh naik, jurang) ialah nilai lalai yang ditulis dalam panel.

## Seterusnya

- [Isu dan fail BCF](topic:issues-bcf)
- [Lukis larian paip dan saluran](topic:pipes-and-ducts)
