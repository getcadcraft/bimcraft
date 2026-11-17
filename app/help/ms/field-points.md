---
title: Titik untuk penandaan tapak dan semakan seperti dibina
summary: Nombor tempat kru menandakan tapak daripada model (pusat tiang, hujung dinding, bolt sauh, lubang tembus, mana-mana elemen yang anda pilih), tulis untuk stesen jumlah, kemudian baca titik seperti dibina yang diukur kru dan lihat apa yang terkeluar.
keywords: titik penandaan, penandaan tapak, tandakan tapak, stesen jumlah, tinjauan, fail titik, csv, txt, pnezd, penzd, xyz, northing, easting, aras, seperti dibina, semak, toleransi, sisihan, bolt sauh, pusat tiang, hujung dinding, lubang tembus, koordinat tinjauan, penukaran peta
from: acea9606
---

Tab {{ui:Points}} di sebelah kanan membuat titik yang akan ditandakan oleh kru di tapak daripada model terbuka, dan menyemak titik yang mereka ukur selepas itu.

## Buat titik

1. Buka model IFC dan tab {{ui:Points}}.
2. Tanda apa yang hendak ditandakan: **pusat tiang** (kaki garis tengah setiap tiang), **hujung dinding** (kedua-dua hujung paksi setiap dinding, pada tapaknya), **bolt sauh**, **lubang tembus** (elemen yang namanya atau jenisnya menyebut sleeve), dan **elemen yang dipilih** (setiap satu pada titik letaknya — pilih dalam paparan dahulu).
3. Pilih nombor pertama dan awalan, koordinat, unit, lajur dan fail:
   - **Model**: koordinat fail itu sendiri. **Grid tinjauan**: grid peta bagi georujukan model (ditunjukkan hanya apabila IFC mempunyai penukaran peta), dalam meter atau unit yang anda pilih.
   - Lajur **PNEZD** (titik, northing, easting, aras, huraian), **PENZD** atau **XYZ**; **CSV** (koma) atau **TXT** (tab).
4. Tekan {{ui:Make points}}: senarai menunjukkannya dan paparan menandainya dengan warna biru. {{ui:Download the points}} menulis fail.

Titik datang dalam susunan tetap — mengikut jenis, kemudian dalam baris merentasi pelan — jadi membuatnya semula daripada model yang sama memberi nombor yang sama. Fail ialah yang dibuka oleh CivilCraft dan yang ditulis oleh EXPORTPOINTS CadCraft: satu titik setiap baris, tiga tempat perpuluhan, dan huraian dalam tanda petik apabila ia mengandungi koma.

## Semak titik seperti dibina

Apabila kru menghantar balik apa yang mereka ukur, pilih **toleransi** dalam milimeter dan cara memadankan titik — mengikut **nombor titik** (mereka mengekalkan nombor anda) atau **bidikan terdekat** — dan tekan {{ui:Read as-built points…}}. Baca fail dalam unit dan koordinat yang sama seperti yang anda tulis.

Setiap titik reka bentuk kemudian ialah **dalam** toleransi, **luar** toleransi, **tidak diukur**, dan mana-mana bidikan yang tiada siapa minta ialah **tambahan**. Jadual memberi beza dalam unit yang anda pilih dalam bar alat, kaki ditunjukkan sebagai inci perpuluhan (seperti dibina tolak reka bentuk: timur, utara, ketinggian, dan jarak dalam pelan); paparan menandai setiap titik hijau atau merah dengan garisan ke bidikan, dan kelabu apabila ia tidak diukur. {{ui:Report (CSV)}} menulis keseluruhan perbandingan.

Tiada apa di sini mengubah model. Belum dibina: penandaan tapak daripada tepi papak, persilangan grid atau bukaan yang dibuat untuk anda, dan menghantar titik terus ke instrumen — gunakan fail.
