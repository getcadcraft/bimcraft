---
title: Kirim adegan ke mesin game
summary: Studio dapat menulis adegan ke proyek Unreal Engine dan menjaganya tetap sinkron di setiap pengiriman; suntingan Anda sendiri berada di lapisan yang tidak pernah ditulis CadCraft. Plug-in untuk membukanya belum dirilis.
keywords: unreal, unreal engine, mesin game, tautan, kirim, stage USD, proyek, live, kamera cine, antrean render film
from: 154d55ef
---

Di CadCraft Studio, daftar Mesin dapat memuat **tautan** ke proyek Unreal Engine. Hanya satu arah: dari CadCraft ke Unreal.

## Kirim adegan

1. Pilih entri Unreal di daftar Mesin. Pertama kali, Studio meminta Anda memilih folder proyek (yang berisi berkas `.uproject`); ia mengingatnya.
2. Klik {{ui:Send}}. Studio menulis `CadCraft/<nama berkas>/` di dalam proyek: adegan sebagai berkas USD, berkas pengaturan, profil cahaya, dan dua berkas lapisan kecil.
3. Ubah model, simpan, dan kirim lagi. Hanya adegan dan berkas pengaturan yang diganti.

## Suntingan Anda aman

Stage yang dibuka Unreal adalah root layer kecil yang dibuat sekali, dengan dua lapisan di bawahnya: **milik Anda** di atas (`<name>.user.usda`, kosong pada awalnya, tidak pernah ditulis ulang oleh CadCraft) dan adegan CadCraft di bawahnya. Suntingan yang Anda simpan ke lapisan sendiri tetap ada saat adegan dikirim lagi. Lampu dan aktor lain yang Anda tempatkan di level Unreal berada di luar stage dan juga tidak tersentuh.

## Tanpa Studio

Di peramban, atau di komputer tempat Studio tidak menemukan Unreal, pilih **Folder proyek Unreal (.zip)** di daftar Mesin dan klik {{ui:Render}}. Ia menyimpan folder yang sama sebagai zip: ekstrak ke folder `CadCraft` proyek Anda. Biarkan **Sertakan berkas stage** aktif pada penyimpanan pertama; matikan untuk penyimpanan berikutnya, sehingga zip hanya memuat adegan dan berkas pengaturan, dan lapisan Anda tidak pernah diganti.

:::note
Plug-in Unreal yang membuka stage, menerapkan matahari, lampu, kamera, dan paparan, mengikuti setiap pengiriman, dan merender kamera **belum dirilis** dan belum pernah dijalankan di Unreal. Sampai itu siap, Kirim menaruh berkas di proyek dan alat USD bawaan Unreal dapat membukanya. Windows adalah sistem pertama; macOS menyusul.
:::
