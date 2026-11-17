---
title: Isu dan fail BCF
summary: Simpan pandangan model sebagai isu — kamera, elemen yang dipilih, elemen yang disembunyikan, keratan — kongsi sebagai fail BCF dengan alat koordinasi lain, dan buka fail BCF mereka untuk melihat isu mereka.
keywords: bcf, bcfzip, isu, isu, topik, titik pandang, laporan pertembungan, koordinasi, ulasan, syot kilat, buka bcf, simpan bcf, eksport, import
from: 2a6cf201
---

## Apa yang anda akan lakukan

Tunjuk masalah dalam model dan simpan pandangan yang menunjukkannya, kemudian serahkannya dalam fail BCF, format yang dibaca dan ditulis oleh alat koordinasi lain.

## Langkah

1. Buka model IFC dan sediakan pandangan: orbit kepadanya, pilih elemen yang terlibat, sembunyikan apa yang menghalang, dan potongnya dengan satah keratan atau kotak.
2. Klik tab {{ui:Isu}} di sebelah kanan, kemudian {{ui:Isu baharu daripada pandangan ini}}.
3. Taip tajuk, dan ulasan jika anda mahu; pilih status; berikan nama atau e-mel anda (jika log masuk, nama akaun anda diisi; lihat [Tetapan BimCraft](topic:settings#your-name-on-issues)). Klik {{ui:Cipta isu}}.
4. Klik {{ui:Tunjuk}} pada isu untuk memulihkan pandangannya.
5. Klik {{ui:Simpan BCF}} untuk memuat turun setiap isu sebagai satu fail `.bcf`.
6. Untuk melihat isu yang dibuat oleh orang lain, klik {{ui:Buka BCF…}} dan pilih fail `.bcf` atau `.bcfzip` mereka.

## Apa yang anda patut lihat

- Setiap isu dalam senarai dengan gambar pandangannya, tajuk, status, pengarang dan tarikh.
- {{ui:Tunjuk}} memulihkan kamera, elemen yang dipilih, apa yang disembunyikan (atau hanya perkara yang ditunjukkan) dan keratan. Elemen dicari melalui GlobalId mereka dalam setiap model yang dibuka; baris status memberitahu jika ada yang tiada.
- Satah atau kotak keratan daripada alat lain ditunjukkan apabila ia sejajar dengan paksi model; satah condong atau tambahan dipulihkan sebagai isipadu keratan (sehingga 6 satah). Sesuatu isu menyimpan kotak pertama bagi isipadu beberapa kotak.

## Perkara yang perlu diketahui

- Fail ialah BCF 2.1 dan menyimpan pandangan dalam koordinat model itu sendiri, supaya alat lain meletakkan kamera di tempat yang sama.
- Isu kekal dalam tab ini sehingga anda menyimpannya. Membuka model lain mengekalkan senarai; buka model yang isu itu berkaitan sebelum anda menunjukkannya.
- Kamera selari (ortogon) daripada alat lain ditunjukkan dengan kamera perspektif pemapar ini, diundurkan supaya bahagian model yang sama memenuhi pandangan.

## Kesilapan lazim

- **Tunjuk mengalihkan kamera ke tempat yang pelik.** Isu itu dibuat pada model lain atau dengan koordinat lain. Buka model yang betul dahulu.
- **Fail tidak dapat dibuka.** Ia bukan zip BCF, atau rosak; baris status menyatakan sebabnya.

## Seterusnya

- [Sembunyikan, asingkan dan lut sinar elemen](topic:hide-and-isolate)
- [Potong model IFC dengan satah keratan](topic:section-plane)
