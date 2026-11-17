---
title: Simpan pandangan dan panduan langkah demi langkah
summary: Simpan pandangan kamera model mengikut nama, kembali kepadanya, mainkannya satu demi satu, dan rakam jalan melalui bangunan untuk dimainkan semula.
keywords: pandangan, pandangan tersimpan, kamera, titik pandangan, adegan, lawatan, persembahan, panduan langkah demi langkah, berjalan melalui, terbang melalui, rakam, mainkan, laluan, animasi
from: 3af19a36
---

{{ui:Pandangan}} pada bar alat menyimpan kamera pandangan 3D dalam fail model, supaya anda dan sesiapa yang anda hantarkan kepadanya boleh kembali terus kepadanya.

## Simpan pandangan

1. Sediakan pandangan 3D: orbit, zum, sembunyikan apa yang anda tidak mahu.
2. Klik {{ui:Pandangan}}, taip nama (atau kekalkan yang ditawarkan) dan klik {{ui:Simpan pandangan}} atau tekan {{key:Enter}}.

Menyimpan dengan nama yang sudah ada dalam senarai mengemas kini pandangan itu. Klik nama pandangan untuk kembali kepadanya; kamera bergerak ke situ dengan lancar.

Anak panah menukar susunan, pensil menamakan semula, dan tong sampah memadamkan. Setiap perubahan ialah satu langkah, jadi {{key:Ctrl+Z}} membuatnya asal.

## Mainkan pandangan

{{ui:Mainkan pandangan}} bergerak dari satu pandangan ke seterusnya mengikut susunan senarai, berhenti sebentar pada setiap satu. {{key:Esc}} atau {{ui:Stop}} menamatkannya.

## Rakam panduan langkah demi langkah

1. Hidupkan [Jalan](topic:walk) dan mula berjalan di dalam bangunan.
2. Dalam {{ui:Pandangan}}, klik {{ui:Rakam jalan}}.
3. Berjalan dengan {{key:W}} {{key:A}} {{key:S}} {{key:D}} dan lihat sekeliling dengan tetikus.
4. Klik {{ui:Henti rakaman}}. Jalan itu disimpan sebagai "Walk 1", dengan panjangnya.

Klik jalan untuk memainkannya semula seperti yang anda jalani. {{key:Esc}} menghentikannya.

## Render panduan langkah demi langkah sebagai video

Klik ikon filem di sebelah jalan. Dialog video melukis setiap bingkai jalan dengan tetapan Render yang anda pilih kali terakhir, pada saiz, kadar bingkai dan kualiti yang anda pilih di sini. Simpan sebagai video WebM atau MP4, atau sebagai ZIP dengan satu gambar bagi setiap bingkai. Bingkai mengambil masa sama seperti gambar, jadi mulakan dengan {{ui:Pantas}}.

## Tambah narasi pada panduan langkah demi langkah

Klik ikon gelembung ucapan di sebelah jalan. Tulis satu baris bagi setiap perkara yang dikatakan, dan mulakan baris dengan masa ia bermula (`12`, `0:12` atau `1:02.5`); baris tanpa masa mengikut baris di atasnya selepas masa yang diambil untuk menyebutnya. Pilih bahasa, dalam bahasa klien jika itu yang akan menonton. {{ui:Pratonton}} memainkan perkataan dengan suara komputer ini sendiri dan menunjukkannya sebagai sari kata; perkara yang sama berlaku setiap kali jalan dimainkan. {{ui:Simpan bersama lawatan}} menyimpan narasi dalam IFC bersama jalan itu.

Pembantu yang disambungkan sendiri anda boleh menulis narasi untuk anda: minta ia melihat jalan dan pandangan tersimpan, dan ia menetapkan baris dalam bahasa yang anda namakan, sebagai satu langkah buat asal.

Video yang dirender tidak mempunyai bunyi sendiri, kerana pelayar tidak boleh merakam suaranya sendiri. Simpan sari kata (`.srt` atau `.vtt`) dan tambahkannya pada video dalam pemain video atau penyunting anda. Suara yang boleh anda pilih bergantung pada komputer: bahasa tanpa suara yang dipasang tetap mendapat sari kata.

## Dalam fail

Pandangan dan jalan disimpan dalam IFC sebagai set sifat `CadCraft_Views` pada projek: IFC biasa yang diabaikan oleh program lain. Ia berada dalam koordinat model pertama, jadi ia masih sepadan selepas model dimuat semula atau model lain ditambah.

:::tip
Untuk merender gambar daripada pandangan tersimpan, pergi ke pandangan itu, kemudian klik [Render](topic:render).
:::
