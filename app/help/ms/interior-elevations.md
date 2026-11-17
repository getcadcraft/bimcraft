---
title: Dongakan dalaman
summary: Buat satu helaian yang menunjukkan empat dinding sebuah bilik dari dalam, dengan dimensi dan tag, dan simpannya sebagai PDF.
keywords: dongakan dalaman, bilik, dinding, kabinet, dapur, dongakan, helaian, PDF, dimensi, tag, ruang, A-501
from: 1e3a70a8
---

## Apa yang anda akan lakukan

Pilih sebuah bilik dan dapatkan satu helaian yang menunjukkan empat dindingnya seperti yang anda lihat ketika berdiri di dalamnya. Ia direka untuk dapur, bilik mandi dan mana-mana bilik yang anda perlu lihat kabinet, pintu dan tingkap pada setiap dinding.

## Buat helaian

1. Pilih bilik. Dalam pelan dengan {{ui:Lukis}} dihidupkan, klik di dalam bilik. Dalam pandangan 3D atau pepohon model, pilih ruang (IfcSpace).
2. Dalam **Sifat**, klik {{ui:Dongakan dalaman…}}.
3. Kotak dialog dibuka dengan helaian.
4. Klik {{ui:Muat turun PDF}} untuk menyimpannya. Fail itu dinamakan "<file> — Interior elevations — <room>.pdf" dan ialah PDF vektor.
5. Klik {{ui:Tutup}} apabila anda selesai.

## Apa yang ditunjukkan helaian

Helaian ini mempunyai empat pandangan, dua dengan dua, pada satu skala: skala piawai terbesar yang muat. Pandangan itu ialah **Dinding utara**, **Dinding timur**, **Dinding selatan** dan **Dinding barat**. Blok tajuk memuatkan nombor helaian A-501, tajuk "Dongakan dalaman — " dengan nombor dan nama bilik, projek dan tarikh.

Setiap pandangan dipotong melalui tengah bilik dan melihat dinding di sisi itu. Dinding sisi, dan apa-apa yang dipotong padanya seperti tingkap, ditunjukkan sebagai poché keratan berwarna kelabu di sekeliling pandangan. Pandangan berhenti sejurus melepasi muka dinding, jadi tiada apa di belakang dinding ditunjukkan.

Setiap pandangan mempunyai:

- lebar bilik di bawahnya, dari muka dalam ke muka dalam;
- ketinggian bilik di sebelahnya, dari lantai ke aras di atasnya;
- tag segi empat sama pada setiap pintu dan tag heksagon pada setiap tingkap di dinding itu, dengan tandanya (D1, W1 dan seterusnya);
- tag bulatan dengan nombor item pada setiap item pustaka yang diletakkan di hadapan dinding itu: kabinet, lengkapan dan peralatan.

:::note
Pandangan dibuat daripada model setiap kali anda membuka kotak dialog, jadi ia sentiasa sepadan dengannya. Alihkan kabinet, kemudian buka semula kotak dialog.
:::

## Pada helaian anda sendiri

Setiap dinding bagi setiap bilik juga ialah pandangan yang boleh anda letakkan pada helaian yang anda buat: dalam pelayar projek, klik {{ui:Helaian baharu}}, kemudian di bawah **Dongakan dalaman** tambah "101 Dapur — Dinding utara" dan yang lain. Ia datang dengan dimensi dan tag yang sama.

## Belum dibina

Dongakan dalaman dalam set lukisan yang dijana (ia datang daripada **Sifat** bilik atau helaian anda sendiri), bilik yang tidak kebanyakannya segi empat tepat (pandangan kelihatan segi empat sama pada setiap sisi kotak bilik), lukisan, nota atau dimensi anda sendiri padanya, dan memilih dinding mana yang hendak ditunjukkan. Lihat [Apa yang belum dibina](topic:not-built-yet).
