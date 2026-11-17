---
title: Laporan folder: peranan, status dan pautan
summary: Setiap label dalam laporan folder, maksudnya, dan cara cadangan Mula di sini dipilih.
keywords: laporan folder, peranan, status, lengkap, tidak lengkap, tidak boleh dibaca, dipaut, latar belakang, permulaan, pusat, famili, sandaran sahaja, mula di sini, status pautan
from: b35bdd10
---

## Status salinan

Setiap salinan model, fail utama dan sandaran bernombor sama-sama, menerima semakan pengepala.

| Label | Maksud |
|---|---|
| **Lengkap** | Pengepala dan indeks fail muat di dalam fail |
| **Tidak lengkap** | Fail lebih pendek daripada yang dinyatakan indeksnya sendiri: ia terpotong semasa disalin, dimuat naik atau diselaraskan, atau ia fail awan yang masih "dalam talian sahaja" |
| **Tidak boleh dibaca** | Fail bukan fail kompaun yang sah, atau tidak dapat dibaca |

Dalam lajur **Status**, model menunjukkan **Lengkap**, "*n* tidak lengkap" dalam warna kuning apabila sekurang-kurangnya satu salinan rosak tetapi satu lagi baik, atau **Tidak lengkap** dalam merah apabila tiada salinan yang baik.

## Sandaran

Fail bernama `Name.0001.rvt`, `Name.0002.rvt` dan seterusnya ialah sandaran bernombor bagi `Name.rvt`. Ia dikumpulkan di bawah modelnya, yang terbaharu dahulu, dalam **Semua … salinan**. Kad dibaca daripada fail utama apabila ia lengkap, jika tidak daripada sandaran lengkap yang terbaharu ("terbaharu lengkap").

## Peranan

Dipaparkan dalam huruf condong di bawah nama model.

| Peranan | Maksud |
|---|---|
| Dipaut oleh *model lain*: latar belakang | Model lain dalam folder memautkan model ini, jadi ia kemungkinan besar latar belakang milik orang lain, seperti model perunding |
| Permulaan atau fail tanpa tajuk | Nama seperti Blank, Template, Default, Untitled atau Project1: titik permulaan, atau fail yang tidak pernah dinamakan dengan betul |
| Model pusat | Model pusat kongsi kerja. Kerja dibuat dalam salinan tempatan, bukan di sini |
| Famili (satu bahagian) | Fail `.rfa` atau `.rft`: komponen, bukan projek |
| Sandaran sahaja | Fail utama telah hilang dan hanya sandaran bernombor tinggal |

## Cara Mula di sini dipilih

BimCraft menggunakan penaakulan yang akan digunakan oleh pengguna berpengalaman:

1. Calon ialah fail projek yang boleh dibaca (`.rvt`, `.rte`) yang tidak dipaut oleh model lain dan bukan permulaan.
2. Model pusat dan model sandaran sahaja dikira hanya apabila tiada yang lebih baik.
3. Antara calon, yang disimpan paling baru menang.

Kotak itu menyenaraikan sebab-sebabnya, dan memberi amaran apabila fail yang kelihatan seperti pilihan jelas itu rosak, apabila model lain ialah latar belakang, dan apabila pilihan itu model pusat. Ia tekaan terbaik; semak dengan sesiapa yang kali terakhir bekerja pada projek itu.

## Status pautan

| Label | Maksud |
|---|---|
| **Dalam folder ini** | Dijumpai pada laluan relatif yang disimpan, atau di hujung laluan penuh yang disimpan dalam folder |
| **Nama sama dijumpai** | Tidak pada laluannya, tetapi fail dengan nama yang sama ada dalam folder. Semak bahawa ia yang betul |
| **Fail pustaka** | Jadual kod nota utama atau kod himpunan. Ini datang bersama program pada setiap komputer |
| **Tiada dalam folder ini** | Tidak dijumpai di mana-mana dalam folder |

Lajur **Pautan dijumpai** dalam **Model** menunjukkan berapa banyak pautan model yang dijumpai, daripada yang dijangka dalam folder (fail pustaka tidak dikira).

## Ketepikan

| Baris | Maksud |
|---|---|
| Folder penyelenggaraan Revit (tidak dibaca) | Folder `*_backup`, `*_log` dan `Revit_temp`, serta folder tersembunyi dan `__MACOSX` |
| Sisa kunci, log dan sandaran | Fail `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` dan `.slog` |
| Fail lain | Segala-galanya yang lain (40 yang pertama dinamakan) |
