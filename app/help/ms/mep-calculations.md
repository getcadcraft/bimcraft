---
title: Saiz paip dan saluran, semak isi kabel dan pencahayaan
summary: Semak saiz paip bekalan dan saluran dengan kejatuhan tekanan, lalukan kabel melalui dulang kabel dan konduit serta lihat isinya, dan kira iluminans dalam bilik daripada fail IES atau EULUMDAT. Nilai lalai dilabelkan; taip nilai kod yang berkuat kuasa.
keywords: saiz, saiz paip, saiz saluran, kejatuhan tekanan, unit perkakas, permintaan, hunter, hazen-williams, halaju, geseran, geseran sama, tekanan kipas, damper, laluan kritikal, dulang kabel, konduit, isi, jadual kabel, ies, ldt, eulumdat, fotometri, iluminans, lux, keseragaman, pengiraan pencahayaan, ketumpatan kuasa, mep, pengiraan, masalah
from: 9cb90815
---

## Apa yang anda akan lakukan

Lukis paip, saluran, dulang kabel dan konduit seperti biasa, kemudian buka panel **Pengiraan**. Setiap tab membaca model, memaparkan jadual, dan menyenaraikan apa yang salah sebagai Masalah dalam panel ⚠. Apabila saiz akan membetulkan Masalah, **Guna saiz** menukar laluan dalam satu langkah buat asal.

Ini ialah alat bantu lukisan. Setiap nilai lalai dilabelkan pada skrin, dan tiada satu pun daripadanya ialah jadual kod: taip nombor daripada piawaian yang anda reka, dan minta hasilnya disemak oleh jurutera yang bertanggungjawab ke atasnya.

## Paip

1. Pilih kunci **sistem** (air sejuk ialah `cw`, air panas `hw`).
2. Tetapkan halaju tertinggi dan, jika anda mahu tekanan disemak, tekanan di sumber serta tekanan terendah yang diperlukan oleh perkakas.
3. Klik {{ui:Semak}}.

Setiap paip membawa permintaan unit perkakas di bawahnya. Permintaan datang daripada lengkung unit perkakas berbanding aliran, mengikut cara yang diterangkan oleh Hunter. **Lengkung terbina dalam ialah contoh, bukan jadual kod**; Masalah menyatakannya sehingga anda menaip lengkung anda sendiri. Geseran ialah Hazen–Williams, kelengkapan paip ialah pekali kehilangan, dan kenaikan menanggung 9.8 kPa per meter. Unit sesuatu perkakas datang daripada jenisnya, atau daripada nombor yang anda tetapkan dengan alat pembantu `loads_set`.

## Saluran

Tetapkan sistem, kadar geseran (geseran sama) atau halaju, dan sebarang kehilangan gegelung, penapis atau peredam. Terminal mengambil aliran udaranya daripada `loads_set` pada penyebar. Jadual menunjukkan halaju dan geseran bagi setiap bahagian, **tekanan kipas** pada laluan kritikal, dan tekanan yang perlu diambil oleh damper setiap terminal lain. Kehilangan kelengkapan menggunakan pekali lalai yang dibundarkan, bukan pangkalan data kelengkapan.

## Dulang kabel dan konduit

Lukiskannya dengan alat Saluran: sistem **Dulang kabel** dan **Konduit** disimpan sebagai pembawa kabel, jadi program lain membacanya sebagai dulang dan konduit. Dalam tab Kabel, tampal senarai kabel (tag, diameter luar dalam mm, bilangan, `from`, `to`). `from` dan `to` ialah tag bagi sesuatu peralatan atau titik `x,y,z` dalam milimeter. Kabel mengikut laluan berterusan terpendek melalui dulang dan konduit; setiap laluan menunjukkan isinya berbanding had yang anda taip, dan jadual disimpan sebagai CSV dengan panjang yang merangkumi peratusan lebihan serta hujung-hujungnya.

## Pencahayaan

Berikan setiap lampu fail IES (LM-63) atau EULUMDAT melalui alat pembantu `photometry_set`. Taip sasaran, jarak grid dan ketinggian satah kerja. Keputusannya ialah iluminans **terus** sahaja: tiada pantulan silang dan tiada bayang, jadi ia ialah had bawah dalam sebuah bilik.

## Penyembur api

Add-on **Penyembur api** mempunyai tabnya sendiri; lihat bantuannya.
