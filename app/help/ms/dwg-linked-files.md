---
title: Cari lukisan dan imej yang dirujuk
summary: Tunjukkan lukisan yang dirujuk oleh sesebuah lukisan (xref) dan imej blok tajuk, dengan membuka folder atau menambah fail secara manual.
keywords: xref, rujukan luaran, lukisan dirujuk, lampirkan, tindihan, imej, gambar, logo, blok tajuk, xref hilang, etransmit, pengurus rujukan
from: 5593d4b1
---

## Apa yang akan anda lakukan

Lengkapkan lukisan: tunjukkan lukisan yang ia dirujuk (rujukan luaran, atau xref) dan imej yang digunakannya, seperti logo dalam blok tajuk.

## Cara mudah: buka folder

1. Klik {{ui:Buka folder}} dan pilih folder yang mengandungi lukisan dan rujukannya, contohnya keseluruhan folder `Cad` bagi sesuatu projek.
2. Dalam laporan folder, tatal ke **Lukisan CAD**.
3. Klik lukisan itu.
4. Lihat panel {{ui:Sifat}} di sebelah kanan, di bawah **Lukisan dirujuk** dan **Imej**.

BimCraft mencari setiap lukisan yang dirujuk mengikut namanya ("*nama*.dwg"), dalam folder yang sama dengan lukisan dahulu, kemudian di mana-mana dalam folder yang anda buka. Imej dijumpai dengan cara yang sama, dan juga mengikut nama yang serupa: eksport eTransmit atau Revit sering menambah nama projek di hadapan, jadi `logo.png` dijumpai sebagai `Tower-logo-5425051.png`.

## Cara lain: tambah fail secara manual

1. Buka lukisan itu sendiri.
2. Di sebelah kanan, di bawah **Lukisan dirujuk**, klik {{ui:Tambah lukisan dirujuk…}}. Di bawah **Imej**, butangnya ialah {{ui:Tambah imej…}}; kedua-duanya membuka pemilih yang sama.
3. Pilih fail `.dwg` yang dirujuk dan fail imej. Anda boleh memilih beberapa sekaligus.
4. Tunggu sementara BimCraft membuka semula lukisan itu bersamanya.

## Apa yang sepatutnya anda lihat

Setiap lukisan dan imej yang dirujuk disenaraikan dengan label:

| Label | Maksud |
|---|---|
| **Dipaparkan** | Dijumpai dan dilukis. Laluan di bawahnya menyatakan dari mana ia datang, atau "ditambah oleh anda". |
| **Dipaparkan, nama serupa** | Imej yang dijumpai mengikut nama serupa. Semak ia imej yang betul. |
| **Tidak dijumpai** | Tiada dalam folder atau fail yang anda tambah. Imej yang hilang kelihatan sebagai bingkai kosongnya. |
| **TIFF tidak boleh dipaparkan dalam pelayar** | Imej itu fail TIFF, yang tidak dilukis oleh pelayar. Simpan sebagai PNG dengan nama yang sama dan tambahkannya. |
| **Tidak dapat dibaca** | Fail dijumpai tetapi tidak dapat dibuka sebagai imej. |

Panel {{ui:Lukisan}} di sebelah kiri menunjukkan "*n* daripada *m* dimuatkan" bagi lukisan yang dirujuk. Lapisan lukisan yang dirujuk muncul dalam {{ui:Lapisan}} sebagai "*nama rujukan*|*lapisan*".

## Kesilapan lazim

- **Hanya membuka lukisan.** "Lukisan ini hanya menunjukkan kandungannya sendiri sehingga lukisan yang dirujuknya ditambah. Membuka keseluruhan folder projek akan menjumpainya secara automatik."
- **Membuka folder yang terlalu kecil.** Jika rujukan berada dalam folder adik-beradik, buka folder induk.
- **Rujukan yang dinamakan semula.** BimCraft memadankan lukisan yang dirujuk mengikut nama. Rujukan yang dinamakan semula pada cakera tidak dijumpai; tambahkannya secara manual.
- **Rujukan bagi rujukan.** BimCraft memuatkan lukisan yang dirujuk oleh lukisan yang dibuka. Lukisan yang dirujuk di dalam lukisan itu tidak dicari, jadi biasanya ia tidak muncul dalam binaan ini.
