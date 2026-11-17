---
title: Lihat apa yang usang dalam lima puluh tahun
summary: Tingkap, pintu, kemasan dan bumbung yang dimiliki model, hayat perkhidmatannya, tahun setiap satu diganti, dan kos mengikut tahun serta nilai kininya apabila anda taip kos seunit.
keywords: kitar hayat, hayat perkhidmatan, penggantian, penyelenggaraan, kos, nilai kini, diskaun, inflasi, 50 tahun, tingkap, cat, bumbung, kemasan, kos sepanjang hayat
from: 1b849545
---

Bahagian {{ui:Life-cycle view}} dalam panel kiri menyenaraikan perkara dalam model yang akan usang dan bila ia diganti sepanjang tempoh kajian (50 tahun untuk permulaan). Tiada apa dalam model diubah.

## Cara membacanya

Setiap bahagian menunjukkan kuantitinya (diukur daripada model: luas tingkap, pintu luar dan dalam, kemasan dinding luar, cat dalaman, kemasan lantai dan siling, tapak bumbung, tangga), **hayat dalam tahun** dan **kos seunit**. Sesuatu bahagian diganti pada hayatnya, pada dua kali hayatnya dan seterusnya selagi tarikh itu sebelum tamat kajian. Jadi tingkap 30 tahun dalam kajian 50 tahun diganti sekali, pada tahun ke-30. Hayat perkhidmatan ialah angka perancangan yang tipikal: tukarkannya kepada produk dan iklim anda. Tiada kos dianggap; taip satu untuk melihat wang mengikut tahun, jumlahnya dan nilai kininya. Tambah kadar diskaun dan kadar inflasi jika anda mahu.

{{ui:Save the schedule (CSV)}} menulis komponen dan tahun. Paip, saluran, pendawaian dan peralatan juga disenaraikan (lihat di bawah).

## Paip, saluran, pendawaian dan peralatan

- **Paip dan saluran** ialah meter bagi setiap laluan yang dilukis. **Peralatan** (pam, kipas, injap, terminal, lengkapan, outlet, suis, papan agihan dan benda lain yang dijejaki tab Assets) dikira mengikut jenis, setiap jenis dengan hayat perancangan. Item yang *hayat perkhidmatan*-nya ditetapkan dalam tab Assets menjadi baris sendiri dengan hayat itu, dan jika ia ada tarikh pemasangan, ia bermula pada umurnya: pam berumur 16 tahun dengan hayat 10 tahun perlu diganti sekarang, kemudian setiap sepuluh tahun.
- **Pendawaian** ialah **anggaran**: jarak pelan dari papan sepanjang peranti setiap litar, yang terdekat dahulu, didarab 1.25 untuk laluan. Model tidak melukis kabel, jadi semaklah dengan pengukuran kuantiti anda sendiri.
- Hayat ialah angka perancangan untuk dikaji semula, bukan sumber.

## Karbon bagi setiap penggantian

Tandakan {{ui:Include the embodied carbon of each replacement}}. Tingkap, pintu, tangga, bumbung, paip atau peralatan baharu dikira pada karbon yang dibawa oleh elemen model jenis yang sama (faktor tab Carbon, bagi setiap unit). Bahagian tanpa elemen atau faktor, seperti cat, kemasan dan pendawaian, menunjukkan sengkang dan disenaraikan. Hujung hayat bahagian lama dan kerja penggantiannya tidak dikira.
