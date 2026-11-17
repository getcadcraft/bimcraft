---
title: Pintu dan tingkap
summary: Letakkan pintu dan tingkap dalam dinding yang dilukis: tuding pada dinding, lihat ayunan dan jarak ke setiap bucu, kemudian klik. Bukaan dinding memotong dirinya sendiri.
keywords: pintu, tingkap, bukaan, ayunan, engsel, hala, balik, pintu gelongsor, pintu poket, pintu garaj, pintu berkembar, tingkap engsel, gantung tunggal, gantung berkembar, gelongsor, tingkap tetap, ambang, kepala bukaan, lipat dua, pintu almari, pintu Perancis, pintu kandang, sisi cahaya, pintu masuk, palang atas, tingkap gambar, transom
from: 4d8ac009
---

## Apa yang akan anda lakukan

Letakkan pintu dan tingkap dalam dinding yang anda lukis ([Lukis dinding](topic:draw-walls)). Tuding pada dinding dan pintu atau tingkap menunjukkan tempat ia akan pergi, arah ayunannya dan jarak dari setiap bucu. Klik, dan bukaan itu memotong dirinya sendiri daripada dinding dalam pelan dan dalam 3D.

## Letakkan pintu

1. Dengan {{ui:Lukis}} dihidupkan, klik {{ui:Pintu}} (atau tekan {{key:D}}).
2. Pilih jenis: **Pintu ayun tunggal**, **Pintu ayun berkembar**, **Pintu gelongsor**, **Pintu poket**, **Pintu garaj**, **Pintu almari lipat dua**, **Pintu Perancis**, **Pintu kandang (pada dinding)** atau **Pintu masuk dengan sisi cahaya**. Saiz biasanya mengisi **W** dan **H**; pilih yang lain daripada senarai saiz di sebelahnya, atau taip yang lain, contohnya `2'-8"` atau `800`. Senarai itu juga menawarkan keluarga pintu bagi model ini (lihat [Keluarga dan saiznya](topic:families)).
3. Tuding pada dinding. Simbol pintu mengikut penuding sepanjang dinding, dan jarak dari setiap hujung muka dinding itu dipaparkan pada pelan.
4. Pintu ayun ke sisi dinding tempat penuding berada. Tekan {{key:H}} (atau klik {{ui:Balik}}) untuk meletakkan engsel di hujung yang satu lagi.
5. Klik. Pintu diletakkan dan alat kekal aktif untuk yang seterusnya. Tuding ke tengah dinding dan pintu akan memusatkan dirinya sendiri.

Untuk meletakkannya pada jarak tepat, tuding pada dinding berhampiran bucu yang anda ukur daripadanya, taip jarak (contohnya `2'` atau `600`) dan tekan {{key:Enter}}. Jarak diukur dari hujung muka dinding yang lebih dekat ke tepi pintu.

## Letakkan tingkap

1. Klik {{ui:Tingkap}} (atau tekan {{key:N}}).
2. Pilih jenis: **Tingkap tetap**, **Tingkap gantung tunggal**, **Tingkap gantung berkembar**, **Tingkap engsel**, **Tingkap gelongsor**, **Palang atas**, **Tingkap gambar** atau **Transom**, dan **W**, **H** serta **Ambang** (ketinggian bahagian bawah tingkap di atas lantai).
3. Tuding pada dinding dan klik, atau taip jarak dan tekan {{key:Enter}} seperti pintu. Tingkap diletakkan di sebelah luar dinding.

## Alih, balik, padam

- Dengan {{ui:Pilih}} dihidupkan, seret pintu atau tingkap sepanjang dindingnya. Seret ke dinding lain untuk mengalihkannya ke sana.
- {{key:Delete}} memadam pintu dan tingkap yang dipilih; dinding menutup semula.
- Mengalih atau memadam dinding mengalih atau memadam apa yang ada di dalamnya. Apabila permulaan dinding bergerak sepanjang garisnya sendiri, pintu dan tingkapnya kekal di tempatnya.
- {{ui:Buat asal}} dan {{ui:Buat semula}} membawa setiap penempatan, alihan atau pemadaman ke belakang dan ke hadapan.

## Apa yang ditolak

- **Ia tidak muat dalam dinding itu.** Pintu atau tingkap lebih lebar daripada dinding, atau akan menonjol dari hujungnya. Cuba lebar yang lebih pendek atau dinding yang lebih panjang.
- **Ia lebih tinggi daripada dinding.** Ambang ditambah ketinggian melebihi bahagian atas dinding.

## Apa yang disimpan

Setiap pintu atau tingkap ialah pintu atau tingkap IFC dengan saiznya, operasinya (contohnya ayun tunggal kiri), jenis saiznya (satu jenis untuk setiap saiz keluarganya), `Pset_DoorCommon` atau `Pset_WindowCommon` dan kuantiti asas, mengisi bukaan IFC dalam dindingnya. Luas sisi bersih dan isipadu dinding mengecualikan bukaan itu. Program BIM lain membukanya sebagai pintu dalam dinding.

## Perkara yang perlu diketahui

- Pelan menunjukkan pintu terbuka pada 90° dengan ayunannya, pintu gelongsor sebagai dua panel, pintu poket meluncur ke dalam dinding, pintu garaj sebagai garisan putus di atas, dan tingkap dengan garisan bingkai dan kacanya.
- Lebar ialah lebar keseluruhan bingkai; daun pintu ialah lebar tolak dua jamb.
- Menyalin pintu dan tingkap yang dilukis belum dibina: letakkan yang lain.

## Tingkap laluan keluar bawah tanah dan telaga

Pilih **Laluan keluar bawah tanah dengan telaga** dalam senarai jenis tingkap. Ia bermula sebagai engsel 36 × 48 inci dengan ambang 36 inci di atas aras. Telaga berada di luar dinding, dengan lebar bersih sekurang-kurangnya 48 inci, unjuran 36 inci, dan bahagian bawah 6 inci di bawah ambang. Ia muncul sebagai garisan putus dalam pelan dan sebagai tiga sisi terbuka di bahagian atas dalam 3D. Telaga ialah sebahagian daripada badan IFC tingkap, maka menyimpan, mengalih, mengubah saiz atau memadam tingkap membawanya sekali. Mengubah saiz mengekalkan sekurang-kurangnya 6 inci di sebelah setiap jamb.

Ini ialah lalai pemodelan, bukan pensijilan pematuhan laluan keluar. Semak sendiri bukaan jelas sebenar pengilang, keperluan tempatan, aras, saliran dan mana-mana tangga yang diperlukan. Kedalaman dan ketinggian telaga ialah dimensi pratetap; ia tidak mengikut rupa bumi.
