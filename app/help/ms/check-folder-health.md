---
title: Semak folder untuk salinan yang rosak, pautan yang hilang dan sisa
summary: Gunakan laporan folder untuk mencari fail model yang terpotong, pilih sandaran lengkap terbaru, lihat pautan yang hilang dan kesan fail kunci serta fail sementara.
keywords: semakan kesihatan, rosak, tidak lengkap, terpotong, sandaran, pautan hilang, xref hilang, audit, sisa, fail kunci, dwl, bak, serahan
from: 3025a539
---

## Apa yang akan anda lakukan

Semak folder projek sebelum anda menyerahkannya atau mula bekerja dengannya: adakah setiap model lengkap, yang mana sandaran baik terakhir, dan adakah semua fail yang dipautkan ada di situ?

## Langkah: salinan yang rosak

1. Buka folder projek. Lihat [Buka keseluruhan folder projek](topic:open-project-folder).
2. Baca nota di bawah nama folder. "2 fail tidak lengkap atau tidak boleh dibaca. Lihat model di bawah." bermaksud ada yang perlu disemak.
3. Dalam **Model**, lihat lajur **Status**. **Lengkap** ialah baik. Amaran "1 tidak lengkap" berwarna jingga bermaksud satu salinan rosak tetapi yang lain baik. **Tidak lengkap** berwarna merah bermaksud tiada salinan baik ditemui.
4. Buka **Semua … salinan** di bawah model yang bermasalah. Ia menyenaraikan fail utama dan setiap sandaran bernombor, yang terbaru dahulu, dengan saiz, tarikh dan status.
5. Baca nota di atas senarai, contohnya "Tower.rvt tidak lengkap (183.2 MB, sepatutnya sekurang-kurangnya 214.0 MB). Kad menunjukkan salinan lengkap terbaru, Tower.0012.rvt (Mar 3, 2025)."
6. Klik salinan yang anda mahu buka. Hanya salinan lengkap boleh diklik.

## Apa yang dilakukan semakan kesihatan

Setiap salinan bagi setiap model diperiksa dengan cepat pada pengepalanya, 512 bait setiap satu, jadi walaupun folder yang mengandungi model besar disemak dalam beberapa saat. Fail yang indeks sendirinya menunjuk melepasi hujungnya telah terpotong semasa disalin, dimuat naik atau disegerakkan. Fail pemacu awan yang masih "online only" kelihatan sama.

Kad bagi setiap model dibaca daripada fail utama apabila ia baik, dan daripada sandaran baik terbaru apabila tidak.

## Langkah: pautan yang hilang

1. Cari nota "*n* fail dipautkan tidak berada dalam folder ini." di bawah nama folder.
2. Skrol ke **Fail dipautkan dan dirujuk**. Pautan yang hilang disenaraikan dahulu.
3. Baca lajur **Lokasi** bagi setiap pautan:
   - **Dalam folder ini**: dijumpai pada laluan yang model simpan.
   - **Nama sama dijumpai**: fail dengan nama yang sama berada di tempat lain dalam folder. Semak ia fail yang betul.
   - **Fail pustaka**: jadual kod kunci nota atau kod pemasangan. Ini disertakan dengan program pada setiap komputer, jadi ia tidak dijangka berada dalam folder.
   - **Tiada dalam folder ini**: tidak dijumpai di mana-mana dalam folder.
4. Baca **Digunakan oleh** untuk melihat model mana yang memautkan setiap fail.

BimCraft mencari setiap pautan dahulu mengikut laluan relatifnya, kemudian mengikut hujung laluan yang disimpan (jadi `\\server\jobs\Tower\Cad\X-Refs\site.dwg` dijumpai pada `X-Refs/site.dwg` apabila anda memilih folder `Cad`), dan kemudian mengikut nama fail di mana-mana dalam folder.

## Langkah: sisa

1. Skrol ke **Diketepikan** di hujung laporan.
2. Baca tiga baris yang mungkin muncul:
   - Folder penyelenggaraan (`*_backup`, `*_log`, `Revit_temp`): tidak dibaca.
   - Sisa kunci, log dan sandaran: fail seperti `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ini ditinggalkan oleh program yang terhenti atau sedang dibuka semasa folder disalin. Biasanya selamat dipadam apabila tiada sesiapa membuka fail itu.
   - Fail lain: segala yang BimCraft tidak baca.

## Kesilapan biasa

- **Memadam fail utama yang rosak sebelum menyimpan sandaran yang baik.** Salin sandaran lengkap terbaru dahulu, kemudian uruskan fail yang rosak.
- **Mempercayai "Nama sama dijumpai" tanpa menyemak.** Dua lukisan berbeza boleh berkongsi nama. Buka kedua-duanya jika ragu.
- **Menganggap fail pustaka yang hilang sebagai masalah.** Jadual kod kunci nota dan pemasangan berada bersama program pada setiap komputer.
- **Bilangan fail berbeza antara pelayar.** Dalam Firefox dan Safari, {{ui:Buka folder}} menyerahkan setiap fail, termasuk yang berada dalam folder penyelenggaraan, jadi bilangan itu (dan had 20,000 fail) turut merangkumi fail tersebut. Menyeret folder masuk melangkaunya, sama seperti Chrome dan Edge. Laporannya sama dalam keadaan lain.
