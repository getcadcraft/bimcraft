---
title: Hantar paip ke program tegasan atau isometrik, dan baca semula (PCF)
summary: Tulis laluan paip model sebagai fail komponen perpaipan PCF, atau baca fail PCF daripada program tegasan paip atau isometrik dan lukis paipnya sebagai laluan.
keywords: pcf, fail komponen perpaipan, tegasan paip, isometrik, isometrik, eksport, import, perpaipan, loji, paip keluli, pindahkan kerja, perisian lain
from: 24f91355
---

## Apa yang anda akan lakukan

PCF ialah fail teks biasa yang dibaca dan ditulis oleh program tegasan paip dan isometrik. Ia menyenaraikan komponen setiap saluran paip dengan titik hujung dan lubangnya.

## Eksport

1. Pilih alat Paip. Baris pilihan menunjukkan **Eksport PCF**.
2. Klik padanya. Setiap laluan paip dalam model ditulis: paip lurus, siku (belokan 90 darjah, selain itu lenturan), tee dengan titik cabangnya, pengecil dan injap.
3. Fail menggunakan milimeter. Lubang ialah diameter nominal dalam milimeter. Titik tengah siku ialah sudutnya, tempat dua kakinya bertemu.

PCF ditulis untuk paip keluli kimpalan hujung. Laluan dalam bahan lain turut ditulis, dengan kunci komponen keluli, dan dicatatkan dalam panel **Masalah**.

## Import

1. Pilih alat Paip dan klik **Import PCF…**, kemudian pilih fail.
2. Paip lurus melalui siku, lenturan, injap dan flens menjadi satu laluan pada aras semasa. Perubahan saiz memulakan laluan baharu. Cabang tee menjadi laluannya sendiri bermula di pusat tee.
3. Model meletakkan sambungannya sendiri. Pengecil dan tee tidak disalin: ia muncul di tempat laluan bersaiz berbeza, atau cabang, bertemu.

:::note
Ketinggian dalam fail dibaca sebagai ketinggian di atas aras semasa. Beban, kekangan dan analisis tegasan itu sendiri tidak terdapat dalam fail PCF dan tidak dibawa masuk.
:::

## Semak apa yang dibawa masuk

- Jumlah panjang paip bagi setiap saluran paip hendaklah sepadan dengan sumber.
- Panel **Masalah** menyenaraikan, sekali setiap satu, siku yang titik tengahnya tidak berada pada jarak yang sama dari kedua-dua hujung, paip tanpa panjang, dan lubang yang bukan saiz standard.

## Perpaipan yang sudah ada dalam fail IFC

Apabila fail IFC dibuka, **Eksport PCF** juga menulis segmen paip, sambungan dan injapnya sendiri, di sebelah laluan yang anda lukis. Segmen mendapat hujungnya daripada portnya, atau daripada hujung badannya. Sambungan tanpa port ditinggalkan dan panel Masalah memberitahu anda. Anda boleh mengeksport daripada IFC sahaja apabila model tidak mempunyai laluan yang dilukis.

Semasa import, penyokong, olet, flens, gasket dan penutup dalam fail tidak dilukis. Panel Masalah menyenaraikan berapa banyak setiap jenis yang ditinggalkan, supaya tiada apa-apa hilang tanpa diketahui.
