---
title: Kuantiti kepada TakeoffCraft
summary: Satu klik menghantar kuantiti model kepada TakeoffCraft — dinding mengikut jenis, bumbung mengikut luas condong, rabung, hip dan lembah, asas, pintu dan tingkap, kabinet, peranti elektrik, luas lantai dan senarai potongan kayu — ditanda pada pelan setiap aras, dengan himpunan pek dagangan pada item.
keywords: takeoff, pengukuran kuantiti, anggaran, menganggar, senarai bahan, bil bahan, takeoffcraft, kuantiti, luas dinding, luas bumbung, square, asas, konkrit, cubic yards, senarai potongan, kayu, pek dagangan, himpunan
from: c5a745af
---

## Apa yang anda akan lakukan

Tukar model kepada senarai bahan dan anggaran dalam TakeoffCraft. BimCraft melukis pelan setiap aras pada skala piawai, menanda setiap kuantiti padanya, dan meletakkan pengukuran kuantiti di dalam PDF. TakeoffCraft mengukur tanda itu sendiri, jadi setiap nombor boleh disemak pada helaian.

## Hantarnya

1. Klik {{ui:Pengukuran kuantiti (takeoff)}} dalam bar model (bersebelahan {{ui:Helaian}}).
2. TakeoffCraft dibuka dalam tab baharu dengan pelan. Apabila ditanya, pilih untuk membuka pengukuran kuantiti yang ditemuinya dalam PDF.
3. Tambah harga anda dalam jadual kuantiti TakeoffCraft; himpunan sudah menyenaraikan bahan.

:::note
Apabila TakeoffCraft tidak tersedia di sini, butang itu memuat turun PDF sebaliknya. Bukanya dalam TakeoffCraft kemudian: ia mencari pengukuran kuantiti di dalamnya.
:::

## Apa yang diukur

- **Dinding** mengikut jenis dan ketinggian: garis tengahnya sebagai larian, dengan ketinggian dinding pada item, supaya TakeoffCraft memberikan panjang dan luas dinding. Setiap larian membawa pintu dan tingkap dinding, supaya TakeoffCraft menolaknya daripada luas dinding sekali, mengikut peraturan yang sama dengan jadual BimCraft: kedua-duanya bersetuju pada kasar, tolakan dan bersih. Data pengukuran kuantiti jenis dinding (unit, mortar, kadar; lihat [Himpunan dinding](topic:wall-assemblies)) dibawa bersama sebagai satu baris berharga pada item jenis itu. Di bawah kaedah pengukuran selain lalai (lihat [Pilih kaedah pengukuran](topic:plan-schedules-and-pdf#choose-a-measurement-method)), pengukuran kuantiti membawa kaedah itu, setiap larian membawa apa yang simpang ukur daripada muka dindingnya, dan TakeoffCraft mengukur mengikut kaedah yang sama serta menamakannya. Jenis yang unitnya mempunyai panjang dan ketinggian menyerahkan dua komponen dengan kuantiti: unit untuk dipesan dan isipadu mortar, dihargai apabila kadar jenis itu ialah bagi unit, bagi 1000 unit atau bagi m³ mortar. Kiraan yang tepat pada nombor bulat boleh menjadi satu unit lebih tinggi dalam TakeoffCraft, kerana penyerahan membundarkan kedudukan pada helaian.
- **Bumbung**: setiap satah bumbung sebagai luas dengan kecerunannya (TakeoffCraft memberikan luas condong), rabung, hip dan lembah (hip dan lembah sepanjang cerunnya), kaki bumbung dan tepi condong.
- **Asas**: tapak dan dinding tiang sebagai larian melalui titik tengahnya, papak sebagai luas dengan ketebalannya, supaya konkrit keluar mengikut isipadu.
- **Pintu dan tingkap** dikira mengikut jenis, dengan hiasan tingkap.
- **Kabinet bawah** mengikut panjang bahagian depannya.
- **Peranti elektrik** dikira mengikut jenis.
- **Luas lantai** bagi setiap aras, daripada biliknya.
- **Senarai potongan kayu** daripada rangka, dikira pada helaian sendiri (satu titik bagi setiap keping).

Apabila pek dagangan mempunyai himpunan yang sepadan — dinding luar dan dalam, papak, tapak, dinding tiang, singel, tudung rabung dan hip, lembah, kaki bumbung, pintu dalaman, hiasan tingkap, kabinet bawah, outlet, suis, lampu, kotak simpang dan panel — item itu datang dengan bahan dan formulanya. Pek ini datang tanpa harga dan belum disemak oleh penganggar.

:::tip
Pelan dibuat daripada model setiap kali anda klik, jadi selepas perubahan, klik {{ui:Pengukuran kuantiti (takeoff)}} sekali lagi.
:::
