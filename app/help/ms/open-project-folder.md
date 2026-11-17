---
title: Buka keseluruhan folder projek
summary: Tunjuk BimCraft ke folder projek untuk melihat setiap model, salinan sandarannya dan pautannya sekaligus, dan biarkan kotak Mulakan di sini mencadangkan fail mana yang perlu dikerjakan.
keywords: folder, direktori, folder projek, pemacu rangkaian, pelayan, mulakan di sini, fail mana, sandaran, pautan, xref, folder terkini, seret folder
from: 16fbdce2
---

## Apa yang anda akan lakukan

Buka keseluruhan folder projek, seperti yang diserahkan kepada anda untuk satu kerja, dan biarkan BimCraft menyusunnya: model yang ada, salinan mana yang merupakan sandaran, apa yang dipautkan kepada apa, fail mana yang rosak, dan fail mana yang paling mungkin anda mahu buka.

Hanya beberapa kilobait yang diperlukan oleh setiap kad model dibaca, jadi folder pada pemacu rangkaian atau folder awan yang disegerakkan adalah sesuai.

## Langkah

:::chromium
1. Klik {{ui:Buka folder}} di sebelah kiri (atau di tengah skrin kosong).
2. Pilih folder projek dalam tetingkap yang dibuka dan klik **Pilih** (atau **Muat naik** atau **Buka**, bergantung pada sistem anda).
3. Klik **Lihat fail** apabila pelayar bertanya "Benarkan laman melihat fail?". Ini hanya membenarkan tab membaca folder; tiada apa-apa dimuat naik.
4. Tunggu sementara baris status mengira: "Menyenaraikan folder: … fail", kemudian "Menyemak fail Revit: … daripada …".
:::

:::firefox
1. Klik {{ui:Buka folder}} di sebelah kiri (atau di tengah skrin kosong).
2. Pilih folder projek dalam tetingkap yang dibuka dan sahkan. Firefox mungkin meminta anda mengesahkan bahawa laman boleh membaca fail folder itu; fail tersebut tetap kekal di komputer anda.
3. Tunggu sementara baris status menyatakan "Membaca folder: … fail", kemudian "Menyemak fail Revit: … daripada …".
:::

:::safari
1. Klik {{ui:Buka folder}} di sebelah kiri (atau di tengah skrin kosong).
2. Pilih folder projek dalam tetingkap yang dibuka dan klik **Muat naik**. Walaupun perkataannya begitu, tiada apa-apa keluar dari Mac anda: fail hanya diserahkan kepada tab.
3. Tunggu sementara baris status menyatakan "Membaca folder: … fail", kemudian "Menyemak fail Revit: … daripada …".
:::

Anda juga boleh **seret folder** dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} ke atas laman. Folder yang diseret dibuka tanpa sebarang gesaan kebenaran dalam setiap pelayar.

## Apa yang anda patut lihat

Laporan folder mengisi bahagian tengah:

- Nama folder, kiraan model, lukisan CAD, model IFC dan fail, serta jumlah saiznya.
- Nota merah atau kuning jika ada fail yang tidak lengkap atau mana-mana fail yang dipautkan tiada dalam folder.
- Kotak {{ui:Mulakan di sini}}: fail yang dicadangkan BimCraft untuk dibuka, dengan sebab-sebabnya.
- **Model**: satu baris bagi setiap model, dengan salinan sandarannya dikumpulkan di bawahnya.
- **Fail dipautkan dan dirujuk**, **Model IFC**, **Lukisan CAD** dan **Ketepikan**, apabila folder mempunyai sebarang daripadanya.

Di sebelah kiri, panel {{ui:Folder}} meringkaskannya; **Masalah** menyatakan "Tiada" apabila setiap salinan sihat.

## Guna kotak Mulakan di sini

Kotak itu menamakan satu fail dan menyatakan sebabnya, contohnya:

- "Kerja yang disimpan terbaharu dalam folder ini (3 Mac 2025)."
- "*Consultant.rvt* dipautkan ke model lain, jadi ia latar belakang, bukan fail untuk disunting."
- "*Tower.rvt* kelihatan pilihan yang jelas, tetapi ia rosak; salinan baik terakhirnya ialah daripada …"
- "Ini ialah model pusat: dalam Revit, buka dengan "Create New Local" dan kerjakan salinan tempatan."

1. Baca sebab-sebabnya.
2. Klik {{ui:Buka kadnya}} untuk membaca kad fail itu, atau {{ui:Tunjukkan dalam senarai}} untuk mencari barisnya dalam **Model**.
3. Semak dengan orang yang terakhir mengerjakan projek sebelum anda bergantung kepadanya. Kotak itu turut menyatakannya: ia ialah tekaan terbaik daripada nama, tarikh dan pautan.

## Buka fail daripada laporan

1. Klik nama model untuk membuka kadnya. Kad itu menyemak setiap pautan terhadap folder.
2. Klik {{ui:Kembali ke}} dan nama folder di bahagian atas kad (atau {{ui:Kembali ke folder}} di sebelah kiri) untuk kembali.
3. Klik mana-mana fail IFC di bawah **Model IFC** untuk membukanya dalam 3D.
4. Klik mana-mana DWG atau DXF di bawah **Lukisan CAD** untuk membukanya dalam 2D. Lukisan dan gambar yang dipautkan turut dijumpai dalam folder secara automatik.

## Buka semula folder kemudian

:::chromium
Folder yang anda buka dengan {{ui:Buka folder}} atau dengan diseret disenaraikan di bawah {{ui:Folder terkini}} di sebelah kiri. Klik {{ui:Buka semula}} dan nama folder untuk membukanya semula tanpa memilihnya. Selepas pelayar dimulakan semula, Chrome atau Edge bertanya sekali lagi; pilih "Benarkan setiap lawatan" untuk menghentikannya daripada bertanya. Senarai itu disimpan dalam pelayar ini sahaja, tidak dihantar ke mana-mana. Klik × untuk melupakan folder.
:::

:::firefox safari
Pelayar ini tidak dapat mengingati folder antara lawatan. Pilih semula folder dengan {{ui:Buka folder}}, atau seretnya masuk.
:::

## Kesilapan biasa

- **Memilih folder yang terlalu besar.** Lebih 20,000 fail: "Folder ini mempunyai lebih 20,000 fail. Pilih folder yang lebih kecil, seperti satu projek." Pilih folder projek, bukan keseluruhan pemacu.
- **Memilih induk beberapa projek.** Kotak {{ui:Mulakan di sini}} kemudian memilih merentasi projek. Pilih satu projek.
- **Folder Revit sendiri kelihatan diabaikan.** Folder `*_backup`, `*_log` dan `Revit_temp` ialah fail penyelenggaraan dan disenaraikan di bawah **Ketepikan**, tidak dibaca.
- **Mengharapkan model dibuka dalam 3D dari kadnya.** Fail projek hanya kad. Buka eksport IFCnya.
- **Telefon dan tablet.** Kebanyakan pelayar mudah alih tidak boleh memilih folder langsung. Gunakan komputer.

Lihat [Semak folder untuk salinan rosak, pautan hilang dan sisa](topic:check-folder-health) dan [Laporan folder: peranan, status dan pautan](topic:folder-roles).
