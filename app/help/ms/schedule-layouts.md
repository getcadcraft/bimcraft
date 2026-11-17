---
title: Atur letak, simpan dan eksport jadual
summary: Kumpulkan jadual, berikan subjumlah dan jumlah, tambah lajur yang dibaca daripada sifat, simpan sebagai persediaan dalam fail, dan eksport sebagai buku kerja hamparan (.xlsx), sebagai teks untuk ditampal ke hamparan dalam talian, atau sebagai CSV. Standard pejabat mengisi apa yang tidak dinyatakan oleh jadual.
keywords: atur letak jadual, kumpulkan mengikut, subjumlah, jumlah, pengepala, standard pejabat, dasar lalai, persediaan, jadual pintu mengikut tingkat, penarafan api, ironmongery, xlsx, buku kerja, hamparan dalam talian, tampal, csv, eksport, hamparan, elemen, pilih daripada jadual, angka
from: 95dfd801
---

## Apa yang akan anda lakukan

Tukar jadual biasa kepada jadual yang dikeluarkan oleh pejabat anda: dikumpulkan mengikut aras, jenis atau bilik, dengan subjumlah dan jumlah, dengan lajur yang anda perlukan, di bawah namanya sendiri. Kemudian hantarkannya ke hamparan. Setiap baris dan setiap angka masih mengetahui elemen asalnya.

## Langkah

1. Hidupkan {{ui:Lukis}} dan buka **Jadual** dalam panel kiri. Pilih jadual, contohnya **Pintu**.
2. Di atas jadual, pilih **Kumpulkan mengikut** (lajur jadual, seperti Aras atau Jenis, atau **Tiada pengumpulan**) dan **Jumlah** (**Tiada jumlah**, **Satu jumlah**, atau **Subjumlah dan jumlah**). **Seperti ditetapkan** membiarkan pilihan kepada persediaan yang disimpan atau kepada standard pejabat.
3. Untuk menambah lajur yang dibaca daripada elemen, taip nama sifat atau tag di bawah jadual (contohnya `FireRating`, `Pset_DoorCommon.FireRating` atau nama tag seperti `Ironmongery`) dan klik **Tambah lajur**. BimCraft membaca set sifat elemen itu dahulu, kemudian set sifat jenisnya. Apabila tiada elemen mempunyai nilai lagi, ia memberitahu; lajur itu mengisi sendiri apabila nilai ditetapkan.
4. Taip nama (contohnya "Jadual pintu mengikut tingkat") dan klik **Simpan sebagai persediaan**. Persediaan disimpan dalam fail bangunan dan menyertai senarai Jadual dengan namanya. Ia mengikut setiap perubahan model. **Keluarkan persediaan ini** mengeluarkannya semula. Kedua-duanya ialah satu langkah dalam Buat asal.

## Klik angka untuk memilih apa yang menjadi asalnya

Klik mana-mana baris, atau mana-mana angka tunggal, untuk memilih elemen di sebaliknya dalam pelan dan dalam 3D:

- baris memilih elemen baris itu;
- subjumlah atau jumlah memilih semua yang dijumlahkannya, dan kepala kumpulan memilih kumpulannya;
- angka yang mempunyai elemennya sendiri memilih elemen tersebut: **Potongan** bagi jenis dinding memilih pintu dan tingkapnya, luas dinding bagi bilik memilih dindingnya.

Perkara yang sama berfungsi dalam dokumen yang dibuat daripada model: dalam pratonton, klik angka jadual.

## Eksport

- **Muat turun Excel** menyimpan buku kerja .xlsx. Panjang, luas, isipadu dan kiraan ialah nombor sebenar dalam unit yang dipaparkan lajur (kaki dan inci kekal sebagai teks). Helaian kedua, **Elemen**, menyenaraikan bagi setiap baris GlobalId elemen di sebaliknya.
- **Salin untuk Google Sheets** meletakkan jadual pada papan keratan anda sebagai teks dipisahkan tab. Dalam Google Sheet, klik sel A1 dan tampal. **Buka Google Sheet baharu** membuka `sheets.new`, alamat Google sendiri untuk hamparan kosong, dalam akaun Google anda sendiri. BimCraft tidak log masuk ke Google dan tidak menghantar apa-apa ke sana: tampalan itu milik anda.
- **Muat turun CSV** menyimpan jadual seperti yang disusun pada skrin.

## Standard pejabat

Pejabat boleh menyatakan sekali bagaimana jadualnya disusun. Hidupkan add-on **Dasar Lalai** ([Dasar Lalai](topic:default-policies)) dan tetapkan, dalam **Tetapan › Global › Dasar Lalai › Atur letak jadual (standard pejabat)**:

| Dasar | Apa yang dilakukannya |
|---|---|
| Kumpulkan jadual mengikut | Aras, Jenis, Bilik atau tiada pengumpulan, untuk setiap jadual yang mempunyai lajur sedemikian |
| Jumlah dalam jadual | Tiada jumlah, satu jumlah di hujung, atau subjumlah di bawah setiap kumpulan dan satu jumlah |
| Tajuk jadual | Corak, contohnya `{project}: {schedule}` |
| Pengepala lajur | Seperti yang ditulis, HURUF BESAR atau Huruf Besar Setiap Perkataan |

Standard itu terpakai kepada setiap jadual, tidak kira siapa yang menyediakannya: jadual biasa dalam panel, persediaan yang disimpan, jadual yang disediakan oleh pembantu, eksport dan jadual dalam dokumen. Persediaan yang menyatakan pengumpulan, jumlah atau tajuknya sendiri mengekalkannya; standard mengisi selebihnya. Panel memberitahu bahagian mana yang ditetapkan oleh standard pejabat. Dasar itu dibawa dalam fail Dasar Lalai bersama dasar yang lain.

## Perkara yang perlu diketahui

- Persediaan menamakan jadual sumbernya dan lajurnya; ia tidak menyimpan nombor. Nombor dibaca daripada model setiap kali.
- Senarai yang bukan baris elemen (himpunan dinding dan legenda bahan) tiada atur letak dan eksport di sini.
- Pembantu boleh melakukan semua ini untuk anda: lihat [Biarkan pembantu AI bekerja dengan model anda](topic:assistants).
