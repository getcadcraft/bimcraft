---
title: Tambah enjin render dengan add-on
summary: Apa yang boleh ditambah oleh add-on kepada senarai Enjin dalam dialog Render, kebenaran yang diperlukan untuk menjalankan program, dan apa yang Studio semak dan tanya.
keywords: add-on, addon, enjin, enjin render, pembangun, engine.run, kebenaran, program, skrip, ditandatangani, studio, api
from: 06295376
---

Add-on (Tetapan › Add-on) boleh menambah enjin ke senarai Enjin bagi {{ui:Render}}. Teks lengkap untuk pengarang add-on ialah bahagian 16 spesifikasi add-on; ringkasnya:

- Add-on mendaftarkan enjin dengan id yang bermula dengan namanya sendiri, satu nama, tetapan pilihan dan **sama ada** program untuk dijalankan **atau** fungsi dalam JavaScript yang melukis gambar.
- Enjin yang menjalankan program memerlukan kebenaran **`engine.run`**, yang ditunjukkan sebelum pemasangan dan dalam Tetapan. Ia hanya berjalan dalam Studio; dalam pelayar ia dipaparkan sebagai fail untuk disimpan.
- Add-on menamakan program (nama fail biasa sahaja: bukan shell), skrip yang **berada di dalam add-on yang ditandatangani**, dan argumen yang terdiri daripada pemegang tempat dan perkataan biasa. Studio mencari program itu atau meminta anda menunjuknya sekali.
- Kali pertama add-on menjalankan program, **Studio bertanya kepada anda dalam kotak dialognya sendiri**: add-on yang mana, program yang mana, dan bahawa skrip boleh melakukan apa sahaja yang boleh dilakukan oleh program itu. Benarkan hanya untuk add-on yang anda percayai. Jawapan anda diingati untuk add-on dan program tersebut.
- Pakej (adegan sebagai USD dan fail tetapan, dengan fail glTF apabila add-on memintanya) dan skrip add-on dimasukkan ke dalam folder sementara yang baharu, program dijalankan di situ, dan gambar dikembalikan dengan penanda nama enjin add-on.

:::note
Add-on hanya boleh menambah enjin render bermula dari API add-on 1.4. Contoh kerja untuk render baris arahan sumber terbuka terdapat dalam repositori tersendiri; ia belum dijalankan dalam render itu lagi.
:::
