---
title: Spul paip keluli dan helaian spul
summary: Potong laluan paip keluli kimpalan hujung kepada spul pada panjang terpanjang dan pada kimpalan tapak yang anda letakkan, nomborkannya, dan muat turun helaian spul bagi setiap spul (paparan 3D, panjang potongan, sambungan, kimpalan, bil bahan) sebagai PDF dan CSV; saluran mendapat senarai potongan bagi bahagian lurus.
keywords: spul, helaian spul, isometrik, fabrikasi, prafabrikasi, kimpalan tapak, kimpalan bengkel, kimpalan hujung, panjang potongan, senarai potongan, bil bahan, bom, paip keluli, jadual 40, nombor talian, senarai potongan saluran, bahagian saluran
from: 539f51de
---

## Apa yang anda akan lakukan

Tukar laluan paip keluli kepada bahagian yang dikimpal di bengkel dan dipasang oleh tukang paip: spul yang tidak lebih panjang daripada panjang yang anda pilih, dipisahkan di tempat anda meletakkan kimpalan tapak, setiap satu dengan helaiannya sendiri.

Hanya **paip keluli kimpalan hujung** dipotong kepada spul (saiz paip ASME B36.10M, siku pada jejari panjang ASME B16.9). Paip kuprum, PVC dan PEX tidak mempunyai sambungan kimpalan hujung, jadi laluannya tidak mempunyai spul.

## Potong laluan kepada spul

1. Pilih laluan paip keluli. Dalam {{ui:Sifat}}, tandakan **Potong kepada spul**.
2. **Spul terpanjang**: panjang garis tengah paling banyak yang boleh dimiliki satu spul (6 m, kira-kira 20 ft, sebagai permulaan).
3. **Nombor talian**: sebahagian daripada setiap nombor spul. Laluan spul baharu mendapat nombor kosong seterusnya bagi sistemnya.

Spul dinomborkan sepanjang laluan dari titik pertamanya: `CHW-12-S01`, `CHW-12-S02` … (sistem, nombor talian, spul). Spul membesar bahagian demi bahagian; bahagian yang akan menjadikannya terlalu panjang memulakan yang seterusnya, dan panjang lurus yang lebih panjang daripada spul dipotong di tempat spul itu penuh.

## Letakkan kimpalan tapak

1. Buka {{ui:Binaan}} dan pilih {{ui:Kimpalan tapak}}.
2. Klik pada paip ber-spul di tempat kimpalan tapak itu pergi. Di dalam bahagian lurus, paip dipotong di situ; di dalam sambungan atau injap, kimpalan dipindahkan ke sambungan yang lebih dekat.

{{ui:Sifat}} menyenaraikan kimpalan tapak laluan, setiap satu dengan {{ui:Alih keluar}}. Setiap perubahan ialah satu langkah {{ui:Buat asal}}.

## Helaian spul

Dalam {{ui:Sifat}} bagi laluan ber-spul:

- {{ui:Helaian spul (PDF)}}: satu halaman untuk setiap spul. Di sebelah kiri, spul dalam paparan isometrik 30°: bahagian lurusnya dinomborkan, kimpalan bengkel sebagai titik, kimpalan tapak ditanda FW, dan utara pelan. Di sebelah kanan, nombor spul, saiz, jadual dan panjangnya, kemudian **panjang potongan**, **sambungan**, **kimpalan** (kimpalan hujung bengkel pada setiap sambungan dalam spul, kimpalan tapak di tempat ia bertemu spul seterusnya) dan **bil bahan** dengan berat paip (berat hujung biasa ASME B36.10M).
- {{ui:Senarai spul (CSV)}}: maklumat yang sama, satu blok untuk setiap spul.

:::note
Panjang potongan adalah hujung ke hujung seperti yang dilukis: tiada jurang akar atau elaun kimpalan ditolak. Siku pada jejari panjang B16.9; T, pengecil dan injap adalah generik, bersaiz daripada paip, bukan daripada B16.9 atau pengilang, dan helaian menyatakannya. Berat sambungan tidak diberikan. Alat bantu lukisan dan penyelarasan, bersaiz oleh jurutera.
:::

## Dalam fail IFC

Setiap bahagian laluan ber-spul membawa **CadCraft_Spool** dengan SpoolId-nya, laluan itu, nombor spul dalam laluan, dan di mana ia bermula dan berakhir sepanjang laluan. Laluan mengekalkan peraturannya (spul terpanjang, kimpalan tapak, nombor talian) dalam set sifatnya sendiri, supaya spul kembali sama apabila fail dibuka semula.

## Saluran: senarai potongan

Buka {{ui:Binaan}} dan klik {{ui:Senarai potongan saluran}}: CSV bagi bahagian saluran lurus mengikut sistem, bentuk dan saiz, setiap panjang lurus dipotong kepada bahagian **Panjang bahagian** dalam bar Saluran (1500 mm, kira-kira 5 ft, sebagai permulaan) dan baki. Hanya panjang: tiada jahitan, tolok atau penyambung.
