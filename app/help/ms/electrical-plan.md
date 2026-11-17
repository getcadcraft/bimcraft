---
title: Pelan elektrik
summary: Letakkan soket, suis, lampu, penderia, kotak sambungan dan panel pada pelan dengan simbol yang sama seperti add-on Elektrik CadCraft, pautkan suis kepada lampu yang dihidupkannya, dan senaraikan peranti serta litar dalam jadual.
keywords: elektrik, pelan elektrik, soket, soket dwikutub, dupleks, suis, tiga hala, pengmalap, lampu, lampu siling, lampu tertanam, downlight, penderia gerakan, kotak sambungan, panel, papan agihan, litar, beban, watt, amp, laluan suis, jadual peranti, jadual panel
from: f7de1947
---

## Apa yang anda akan lakukan

Lukis pelan elektrik rumah dalam model: soket, suis dan panel pada dinding, lampu dan penderia pada siling. Setiap peranti ialah elemen elektrik sebenar dalam fail IFC, dengan tag, litar dan bebannya, dan suis mengingati lampu yang dihidupkannya.

## Letak peranti

1. Pada aras, buka {{ui:Build}} dan pilih {{ui:Electrical}}.
2. Pilih peranti: soket (kuasa, data, telefon, audio-video), suis dan penderia (termostat dan pemasa juga), lampu, pengesan dan penggera, kotak sambungan, panel atau sub-panel.
3. Taip **Litar** jika anda tahu (apa-apa nama: 1, 2, A-3). Biarkan **Ketinggian pemasangan** kosong untuk ketinggian biasa peranti itu.
4. Klik pada pelan. Soket, suis dan panel diletakkan pada muka dinding terdekat, menghadap ke dalam bilik; lampu, penderia dan kotak sambungan diletakkan pada siling tempat anda klik.

Peranti ditanda semasa diletakkan: **R** untuk soket, **S** untuk suis, **L** untuk lampu, **M** untuk penderia gerakan, **J** untuk kotak sambungan, **P** untuk panel. Peranti pada dinding bergerak bersama dinding apabila anda mengalihkan dinding.

Lebih suka melayari mengikut gambar? Buka **Palet simbol** daripada {{ui:Build}} untuk mencari peranti mengikut nama, tanda peranti yang anda gunakan dengan bintang dan letakkannya dengan satu klik: lihat [Palet simbol](topic:symbol-palette).

## Pautkan suis kepada lampu

1. Pilih suis (atau penderia gerakan) dan klik **Pautkan lampu** dalam {{ui:Properties}}.
2. Klik setiap lampu yang dihidupkannya. Klik semula lampu yang telah dipautkan untuk memutuskan pautannya.
3. Tekan {{key:Enter}} atau klik **Selesai**.

Pelan melukis lengkung putus-putus dari suis ke setiap lampunya. {{ui:Properties}} bagi lampu menunjukkan suis yang menghidupkannya.

## Bilik tempat peranti berdiri

Setiap peranti tahu bilik tempat ia berdiri. Peranti pada dinding berada dalam bilik yang dihadapinya; peranti pada siling berada dalam bilik yang berada di bawahnya. {{ui:Properties}} menunjukkan **Bilik**, dan jadual **Peranti elektrik** mempunyai lajur **Bilik** (nombor dan nama, seperti 101 Dapur).

Ia sentiasa dikemas kini: namakan semula atau nombor semula bilik, alihkan peranti, atau alihkan dinding, dan bilik akan mengikut dalam langkah yang sama. Peranti pada muka luar bangunan, atau dalam ruang yang bukan bilik, akan menyatakan bahawa ia tidak berada dalam bilik.

Bilik juga ditulis ke dalam fail, dalam set sifat peranti `CadCraft_Location` (Room, RoomNumber, RoomName), supaya Cari, Warna mengikut sifat dan jadual tag boleh menggunakannya, dan program lain juga boleh menggunakannya. Simbol pelan dan elemen yang dipautkan kepada simbol menerima set yang sama; lihat [Palet simbol](topic:symbol-palette).

## Biarkan pembantu anda meletakkannya

Dengan pembantu yang disambungkan (Tetapan › Pembantu, dengan suntingan dibenarkan), anda boleh meminta peranti dengan perkataan: "letakkan soket dua lubang setiap 2 m sepanjang dinding ruang tamu, 300 mm ke atas, pada litar 3", atau "tambah lampu siling dengan suisnya di tepi pintu". Pembantu menggunakan lima alat: `devices_add`, `device_change`, `lights_set`, `devices_delete` dan `devices_list`. Ia mencipta peranti yang sama seperti yang dicipta oleh alat Elektrik, pada dinding yang sama dan dengan tag, litar, beban dan ketinggian yang sama, dan setiap panggilan ialah satu langkah buat asal.

Peranti tidak pernah menerima jenis yang alat Elektrik tidak miliki: jenis yang tidak diketahui ditolak dan pembantu diberi senarainya. Soket atau suis mesti berada dalam 600 mm dari muka dinding, seperti klik, atau panggilan ditolak dan tiada apa diletakkan. Ketinggian lalai dalam milimeter: 300 untuk soket, 1100 untuk suis; peranti siling tergantung dari siling.

## Tukar dan senaraikannya

Pilih peranti untuk menukar tag, litar, beban (watt) dan ketinggian pemasangannya. Pilih beberapa peranti untuk meletakkan semuanya pada satu litar serentak. Tekan {{key:Delete}} untuk memadam satu; lampu yang dipadam akan dikeluarkan daripada suisnya.

Dalam {{ui:Schedules}} pilih **Peranti elektrik** untuk setiap peranti dengan aras, litar, beban, ketinggian dan lampu yang dihidupkan oleh setiap suis, atau **Litar** untuk peranti bagi setiap litar, jumlah beban dan arusnya. Kedua-duanya juga terdapat pada helaian jadual set lukisan: lihat [Dongakan, keratan dan helaian](topic:sheets).

:::note
Ketinggian pemasangan dan beban ialah nilai perancangan lalai (soket 16" ke atas dan 200 W, suis pada 48", lampu siling 60 W), bukan reka bentuk: juruelektrik atau jurutera menentukan saiz litar dan menyemak kod.
:::

:::tip
Simbol ialah simbol yang dilukis oleh add-on Elektrik CadCraft pada pelan pemasangan, jadi pelan daripada mana-mana aplikasi kelihatan sama.
:::
