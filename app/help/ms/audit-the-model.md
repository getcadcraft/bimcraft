---
title: Audit model: bilik, tag, LOD, pertembungan dan antara muka
summary: Jalankan semakan sedia untuk bilik tanpa nama, tag yang hilang, elemen di bawah tahap pembangunan yang diminta oleh peringkat projek, pertembungan antara disiplin dan antara muka LOD 350. Nasihat sahaja: tiada apa yang disekat.
keywords: audit, semak, bilik tanpa nama, tag hilang, tanda, lod, tahap pembangunan, titik utama, peringkat, pertembungan, disiplin, koordinasi, antara muka, lod 350, bukaan, lintel, header, penembusan, sarung, paip, saluran, masalah, laporan semakan, nasihat
from: cc83a14d
---

## Apa yang anda akan lakukan

Teliti keseluruhan model sekaligus sebelum anda mengeluarkannya. Audit menjalankan set peraturan sedia dan meletakkan apa yang ditemuinya dalam senarai {{ui:Masalah}} sebagai nasihat. Tiada apa yang disekat: anda membetulkan penemuan, atau menerimanya dengan sebab, seperti mana-mana masalah lain.

## Langkah

1. Buka {{ui:Semakan model}} › {{ui:Audit}} dalam panel kiri, atau {{ui:Alat}} › {{ui:Audit model…}} (ditaip: `AUDIT`).
2. Pilih {{ui:Peringkat projek}}. Ia adalah peringkat yang sama seperti dalam butiran lukisan.
3. Tandakan set peraturan untuk dijalankan.
4. Klik {{ui:Jalankan audit}}.
5. Baca baris untuk setiap set peraturan, kemudian {{ui:Buka senarai Masalah}}. Satu klik pada penemuan memilih elemennya.
6. {{ui:Laporan semakan}} memuat turun laporan: setiap penemuan, siapa yang menerima apa dan sebabnya, dan set peraturan yang dijalankan.

## Set peraturan

- **Bilik tanpa nama**: bilik tanpa nama, atau yang masih dinamakan dengan apa yang program namakan ("Room 3").
- **Tag hilang**: pintu atau tingkap tanpa tanda, bilik tanpa nombor, peranti elektrik tanpa tag.
- **Elemen di bawah LOD peringkat**: setiap dinding, lantai, siling, bumbung, pintu dan tingkap yang LOD-nya di bawah apa yang diminta oleh peringkat. Elemen membaca tag LOD jenisnya; elemen yang disahkan di tapak ialah LOD 500. Elemen tanpa tag dikira dalam satu nota, kerana ia tidak boleh disemak.
- **Pertembungan antara disiplin**: elemen dua disiplin (seni bina, struktur, mekanikal, paip, elektrik, mengikut kelas IFC) yang bertembung. Bumbung yang bersandar pada dindingnya tidak dikira.
- **Antara muka LOD 350**: setiap pintu dan tingkap berada dalam bukaan pada dindingnya, bukaan muat di dalam dinding, dua bukaan tidak bertindih, bukaan yang lebih lebar daripada had mempunyai lintel atau header (elemen di atasnya, atau nota pada pintu atau tingkap), dan paip, saluran atau talam kabel yang merentasi dinding atau papak mempunyai bukaan di situ. Penemuan dikira bagi setiap pasangan disiplin.
- **Elemen yang diiktiraf tetapi belum disemak oleh sesiapa**: dinding, pintu, tingkap dan bilik yang dibaca daripada PDF, imbasan atau lukisan yang masih belum disahkan. Lihat [Tandakan elemen sebagai disemak atau disahkan di tapak](topic:verification).

## LOD yang diminta oleh setiap peringkat

Buka {{ui:LOD yang diminta oleh setiap peringkat}} untuk melihat atau menukar jadual.

:::note
Jadual dan lebar lintel ialah nilai permulaan CadCraft. Ia tidak diambil daripada standard; sesebuah projek menetapkan LOD bagi setiap peringkat dalam pelan pelaksanaan BIM-nya. Tetapkan mengikut pelan anda. Pejabat boleh menetapkan jadual untuk semua orang dalam Tetapan › Default Policies › Audit; perubahan dalam bahagian Audit disimpan pada komputer ini.
:::

## Perkara yang perlu diketahui

- Lintel boleh dinyatakan dalam nota dan bukan dimodelkan: pilih pintu atau tingkap dan isikan {{ui:Nota lintel atau header}} di bawah {{ui:Pengesahan}} dalam Sifat.
- Paip yang melalui bukaan sebenar tidak merentasi permukaan dan tidak dilaporkan. Yang dimodelkan lurus menembusi dinding dilaporkan.
- Semakan pertembungan berhenti selepas beberapa saat pada model yang sangat besar dan menyatakannya. Untuk semakan penuh bagi dua set pilihan, gunakan [Cari pertembungan antara elemen](topic:clash-check).
- Jalankan audit semula selepas anda menukar model. Penemuan yang diterima kekal diterima selagi nombornya tidak berubah.
- Ia membaca model. Ia tidak menggantikan semakan koordinasi oleh orang yang bertanggungjawab.

## Seterusnya

- [Semak model untuk masalah biasa](topic:model-checks)
- [Cari pertembungan antara elemen](topic:clash-check)
- [Tandakan elemen sebagai disemak atau disahkan di tapak](topic:verification)
