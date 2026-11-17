---
title: Menu, kekunci dan tetikus
summary: Pilih gaya menu yang sepadan dengan cara anda sedia bekerja, berikan mana-mana arahan kekunci anda sendiri, pindahkan arahan antara menu, dan tetapkan apa yang dilakukan roda serta setiap butang tetikus.
keywords: gaya menu, menu, bar menu, reben, baris arahan, pintasan papan kekunci, pintasan, kekunci, sesuaikan, tetapkan semula kekunci, tetikus, roda, songsangkan, arah zum, butang tengah, pan, orbit, kekunci dua huruf, eksport, import, bertukar, biasa
from: a424e836
---

Arahan BimCraft adalah sama walau dengan cara mana pun anda mencapainya. **Gaya menu** hanya menentukan kedudukannya pada skrin, namanya di situ dan kekunci yang menjalankannya, jadi anda boleh mengekalkan tabiat yang sedia ada. Pilih satu dalam {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu, kekunci dan tetikus}}; perubahan berkuat kuasa serta-merta, dan pelayar ini mengingatinya.

## Lima gaya

| Gaya | Apa yang anda dapat |
|---|---|
| {{ui:CadCraft}} | Bar alat dan kekunci BimCraft sendiri ({{key:W}} dinding, {{key:D}} pintu, {{key:N}} tingkap, {{key:X}} keratan, {{key:F}} muat). Permulaan. |
| {{ui:Home design}} | Bar menu (Fail, Sunting, Binaan, Pustaka, 3D, CAD, Alat, Pandangan) di atas barisan alat bangunan, seperti susun atur program reka bentuk rumah kediaman. Kekunci satu huruf yang sama, ditambah {{key:Mod+L}} untuk pustaka, {{key:F9}} untuk pandangan 3D, {{key:F10}} untuk pelan dan {{key:F11}} untuk kedua-duanya. |
| {{ui:BIM ribbon}} | Tab butang besar (Seni bina, Selit, Anotasi, Ubah suai, Pandangan, Output) dengan menu Fail dan butang pantas di sebelah kanan. Kekunci dua huruf: {{key:W}} kemudian {{key:A}} untuk dinding, {{key:D}} {{key:R}} pintu, {{key:W}} {{key:N}} tingkap, {{key:S}} {{key:C}} keratan, {{key:Z}} {{key:F}} muat. Butang tengah melakukan pan; {{key:Shift}} dan butang tengah melakukan orbit. |
| {{ui:Drafting classic}} | Reben kecil dan baris arahan, untuk orang yang menaip arahan: WALL, DOOR, WINDOW, ROOF, U (buat asal), ZOOM, SECTION, PLOT, INSERT, HELP. Mula menaip di mana-mana dan huruf akan pergi ke baris arahan; {{key:Enter}} menjalankan, {{key:Enter}} pada ruang kosong mengulang arahan terakhir, {{key:Esc}} mengosongkannya. |
| {{ui:Viewer}} | Untuk membuka dan menyemak model dan bukan melukisnya: menu {{ui:Fail}}, {{ui:Pandangan}}, {{ui:Tunjuk}}, {{ui:Semak}} dan {{ui:Sunting}} di atas barisan alat penonton (muat, atas, depan, sisi, keratan, ukur, sembunyi, asingkan, lut sinar, tunjuk semua, lawatan). Alat bangunan menunggu dalam menu {{ui:Model}} di hujung. Kekunci yang sama seperti gaya BimCraft sendiri. |

Menu dan reben muncul sebaik model dibuka atau bangunan baharu dimulakan; sebelum itu, panel di sebelah kiri membuka fail dan memulakan bangunan.

:::tip
Kekunci yang tergolong dalam susun atur BimCraft sendiri tetapi bukan milik gaya yang anda pilih tidak melakukan apa-apa, dan baris status memberitahu ke arah arahan mana ia pergi ("Dalam reben BIM, Keratan ialah SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan anak panah sentiasa mengekalkan maksudnya, dan alat yang sedang berjalan mengekalkan kekunci sendiri: {{key:R}} dan {{key:Tab}} semasa meletakkan, {{key:W}} {{key:A}} {{key:S}} {{key:D}} semasa berjalan, {{key:H}} dengan alat pintu dan tingkap, nombor semasa anda menaip panjang.
:::

## Jadikan milik anda sendiri

1. Pilih gaya yang paling hampir dengan apa yang anda mahu, kemudian klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Kekunci dan menu}}, cari arahan (kotak carian membantu). Klik {{ui:Tambah kekunci}} dan tekan kekunci, atau dua kekunci berturut-turut untuk kekunci dua huruf. Klik kekunci untuk mengalih keluarnya.
3. Dengan bar menu atau reben, {{ui:Tempat ia berada}} memindahkan arahan ke menu atau panel lain, atau ke {{ui:Kekunci sahaja}}.
4. Pada {{ui:Tetikus}}, tetapkan roda, butang yang melakukan pan pada pelan, dan apa yang dilakukan setiap butang dalam pandangan 3D.
5. Beri nama dan klik {{ui:Simpan}}.

Menyimpan gaya terbina dalam mencipta salinan anda sendiri ("Reka bentuk rumah saya"); gaya terbina dalam tidak pernah berubah. Kekunci yang diberikan kepada dua arahan, atau yang akan berjalan sebelum kekunci dua huruf sempat ditaip, dipaparkan dengan warna merah dan mesti dibetulkan sebelum anda boleh menyimpan.

## Tetikus

- **Roda tetikus**: {{ui:Skrol ke atas mengezum masuk}} (permulaan) atau {{ui:Skrol ke atas mengezum keluar}}, dan kelajuannya. Cubitan pada pad jejak sentiasa mengezum mengikut arah pergerakan jari anda.
- **Pan pelan dan lukisan dengan**: mana-mana butang kiri, tengah dan kanan. {{key:Space}} dan seret juga melakukan pan; seretan kiri hanya melakukan pan di tempat klik tidak akan memilih atau melukis.
- **Seret dalam pandangan 3D**: {{ui:Sendiri setiap pandangan}} mengekalkan butang BimCraft (kiri untuk orbit, kanan untuk pan). Atau tetapkan setiap butang kepada orbit, pan, zum atau tiada apa-apa; {{key:Shift}} bersama butang menukar orbit dan pan. Klik tanpa seretan masih memilih.

## Bawa bersama anda

{{ui:Eksport}} menyimpan gaya yang digunakan sebagai fail `.ccinput.json` kecil; {{ui:Import…}} menambahkannya, dari komputer lain atau daripada rakan sekerja. Fail yang diimport hanya boleh menunjuk kepada arahan BimCraft sendiri: apa-apa lain di dalamnya (arahan yang tiada dalam versi ini, kekunci yang tidak berfungsi di sini) ditinggalkan dan dikira dalam baris status. {{ui:Padam gaya ini}} mengeluarkan salah satu gaya anda sendiri.

:::note
Tetapan ini kekal dalam pelayar ini. {{ui:Gunakan gaya ini dalam setiap aplikasi}} di bawah kad gaya menjadikan setiap aplikasi dibuka dalam gaya yang sepadan (bar alat sendiri, bar menu, reben atau {{ui:Lukisan klasik}}; {{ui:Penonton}} hanya milik BimCraft dan tiada padanan di tempat lain), dengan perubahan yang anda buat dalam setiap aplikasi; aplikasi tanpa gaya yang sepadan mengekalkan gayanya sendiri. Memilih gaya lain dalam satu aplikasi hanya menukar aplikasi itu.
:::

Berkaitan: [Papan kekunci dan tetikus](topic:keyboard) · [Tetapan BimCraft](topic:settings) · [Datang dari program BIM dan lukisan lain](topic:coming-from)
