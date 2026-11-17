---
title: Lukis gambar dengan program lain
summary: Penjejak laluan kami sendiri melukis gambar Render; program lain hanya boleh melukisnya melalui add-on enjin render dalam CadCraft Studio. Apa yang dibawa bersama, dan sebab sesetengah program tidak sekali-kali ditawarkan.
keywords: render, enjin, program luar, enjin add-on, studio, latar belakang, barisan gilir, usd, gltf, dilukis oleh, blender, gpl
from: 652b413c
---

Gambar dalam {{ui:Render}} dilukis oleh **enjin kami sendiri**: Pantas dan Penjejak laluan, dalam pelayar dan dalam CadCraft Studio. Program lain hanya boleh melukisnya apabila **add-on enjin render** membawanya: lihat [Tambah enjin render dengan add-on](topic:render-engine-addons). Untuk membawa adegan ke program lain dan meneruskan kerja di sana, gunakan [Buka adegan dalam program lain](topic:render-open-in) atau [Hantar adegan ke enjin permainan](topic:render-unreal).

## Lukis gambar dengan enjin add-on

1. Hidupkan add-on dalam Tetapan › Add-on. Enjinnya muncul dalam senarai Enjin bagi {{ui:Render}}.
2. Pilihnya. Tetapan sendirinya dipaparkan di bawah senarai Enjin.
3. Klik {{ui:Render}}. Dalam Studio, kali pertama add-on menjalankan program, Studio bertanya kepada anda dalam kotak dialognya sendiri. Kemajuan ditunjukkan semasa ia melukis; {{ui:Stop}} menamatkannya. Gambar muncul dengan penanda enjin yang melukisnya.

Enjin yang ditulis dalam JavaScript turut berjalan dalam pelayar. Enjin yang menjalankan program pada komputer ini hanya berjalan dalam Studio; dalam pelayar ia dipaparkan sebagai fail untuk disimpan.

## Apa yang dibawa bersama

Enjin menerima **pakej**: model sebagai fail USD (dan fail glTF apabila ia memintanya), dan fail tetapan dengan nilai bahan yang tepat, matahari dan langit, setiap lampu yang menyala dengan kuasa dan profil cahayanya, kamera dan pendedahan. Setiap program menyinari, menala dan mensampel mengikut caranya sendiri, jadi gambar adalah serupa dari segi kamera, matahari, lampu dan pendedahan, tetapi tidak sama piksel demi piksel.

## Program yang CadCraft tidak sekali-kali jalankan

CadCraft tidak sekali-kali memulakan program di bawah lesen GNU GPL, dan tidak sekali-kali menyenaraikannya sebagai enjin atau sasaran Buka dalam. Blender ialah salah satunya, jadi ia tidak ada dalam senarai Enjin. Fail USD atau glTF yang disimpan daripada {{ui:Render}} masih boleh dibuka dalamnya seperti dalam mana-mana program yang membaca fail itu.

:::note
Kamera panorama dan stereo serta gambar langit (warna langit digunakan sebaliknya) tidak dibawa ke program lain. Tiada apa yang dilakukan dalam program lain dipulangkan ke model.
:::
