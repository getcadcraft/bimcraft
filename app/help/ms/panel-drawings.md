---
title: Lukisan panel dalam kayu atau keluli kepingan ringan
summary: Rangkakan dinding, lantai dan bumbung model sebagai panel dalam kayu atau keluli kepingan ringan, lihat setiap stud, plat, header, gelegar dan kasau mengikut skala, dan simpan senarai potongan sebagai CSV serta lukisan bengkel sebagai PDF.
keywords: panel, rangka, lukisan bengkel, senarai potongan, keluli kepingan ringan, LGS, stud keluli, kayu, gelegar, kasau, header, stok, PDF
from: c09f916e
---

## Buka panel

Pilih {{ui:Lukisan panel}} dalam menu {{ui:Binaan}} (atau taip {{cmd:PANELS}}). Senarai itu memuatkan setiap dinding yang dilukis, setiap lantai dan setiap bumbung model, masing-masing dengan tanda semak. Dinding datang bersama pintu dan tingkapnya sebagai bukaan. Lantai dirangka sebagai segi empat tepat di sekeliling garis luarnya, dengan gelegar berjalan arah yang pendek. Bumbung dirangka sebagai bumbung gable di atas garis luar dinding-dindingnya, dengan kecerunan bumbung; senarai menyatakannya, kerana bumbung pinggul atau bumbung kompleks bukan bumbung gable.

## Bahan, saiz dan jarak

Pilih {{ui:Bahan}}: **Kayu** atau **Keluli kepingan ringan**. Bahagian keluli ialah stud-C yang dinamakan mengikut kedalaman dan ketebalannya (contohnya C92-1.2), dengan landasan untuk plat. {{ui:Saiz ahli}} memilih satu saiz bagi setiap panel yang ditandakan, atau biarkan pada Lalai untuk mengambil lalai bagi setiap jenis panel. {{ui:Jarak}} ialah jarak antara stud, gelegar atau kasau. Ini nilai permulaan untuk anda tetapkan. Ia bukan semakan kod: sama ada stud pada jarak itu menanggung dinding tersebut, dan sama ada header pada rentang itu mencukupi, ialah urusan jadual kod (add-on Peraturan bangunan mempunyai IRC) dan jurutera anda.

## Apa yang anda dapat

Panel bertanda pertama dilukis mengikut skala dalam kotak dialog, dengan dimensinya. {{ui:Senarai potongan (CSV)}} menyimpan setiap bahagian panel mengikut tanda, saiz dan panjang, serta panjang stok yang perlu dibeli untuknya. {{ui:Lukisan bengkel (PDF)}} menyimpan satu halaman A3 bagi setiap panel, dengan setiap bahagian ditanda dan senarai potongannya. {{ui:Lukisan (SVG)}} menyimpan panel pertama sebagai lukisan. Apa-apa yang dikesan oleh kod rangka sebagai tidak dapat dirangka (bukaan terlalu dekat dengan hujung dinding, header yang tidak muat di bawah plat, bahagian yang lebih panjang daripada stok terpanjang) disenaraikan dalam Masalah serta dalam kotak dialog.

## Apa yang tidak dilakukannya

Panel ialah lukisan yang dibuat daripada model setiap kali anda memintanya: tiada apa-apa ditulis ke dalam model, jadi ia sentiasa sepadan dengannya. Untuk meletakkan rangka ke dalam model sebagai ahli, guna {{ui:Rangka}} untuk dinding, lantai dan bumbung kayu.
