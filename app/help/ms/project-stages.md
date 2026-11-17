---
title: Peringkat projek, dari brief hingga arahan tapak
summary: Mulakan dengan brief yang mempunyai luas sasaran dan lihat sama ada dicapai atau kurang semasa anda melukis, bandingkan pilihan konsep dengan brief itu, pautkan spesifikasi dan perincian kepada jenis, semak lukisan bengkel dan rekod arahan tapak terhadap elemen.
keywords: brief, jadual akomodasi, luas sasaran, dicapai, kurang, bilik, pilihan konsep, pilihan, jisim, bajet, spesifikasi, spec, perincian, perincian pembinaan, jenis, lukisan bengkel, semak, lulus, hantar semula, arahan tapak, semakan, punca, tapak, peringkat
from: 0a49b852
---

## Apa yang akan anda lakukan

Lalui peringkat projek dalam satu panel: tulis brief pelanggan sebagai bilik dengan luas sasaran, bandingkan pilihan konsep dengan brief itu, simpan spesifikasi dan perincian pembinaan bersama jenis yang berkaitan, semak lukisan bengkel apabila ia dikembalikan daripada pihak dagangan, dan rekodkan arahan tapak terhadap elemen yang diubahnya.

## Langkah

1. Dalam panel kiri, buka **Peringkat projek**, kemudian **Brief**.
2. Tampal bilik, satu setiap baris: `Living; 1; 30` bermaksud satu bilik 30 m². Kiraan boleh ditinggalkan. Pilih **Tambah bilik**. Isikan pelanggan, tapak, bajet, toleransi dan program, kemudian **Simpan brief**.
3. Lukis dinding. Setiap bilik yang dibentuk oleh dinding dan mempunyai nama bilik brief itu dikira (nombor selepas nama, seperti "Bilik tidur 2", diabaikan). **Jadual akomodasi** menyatakan **Dicapai**, **Kurang**, **Lebih** atau **Belum dilukis**, dengan beza dalam m².
4. Untuk memulakan projek baharu dengan cara ini, pilih **Mulakan projek baharu daripada brief**. Ia membuka model baharu, daripada salah satu templat tersimpan jika anda memilihnya, dan meletakkan brief sebagai langkah pertamanya.
5. Buka **Pilihan berbanding brief**. Setiap pilihan jisim yang disimpan dalam model dilukis pada skala yang sama dengan luas kasarnya, apa yang diminta oleh brief, dan berapa banyak bilik brief yang muat. **Susun brief di sini** meletakkan bilik ke dalam tingkat pilihan itu, yang paling bawah dahulu, dan menyatakan apa yang tidak muat. Kos hanya datang daripada jadual harga projek; tanpa baris yang sepadan, ia menyatakan "Tiada kadar".
6. Buka **Jenis, spesifikasi dan perincian**. Setiap jenis dinding, pintu, tingkap dan lantai menunjukkan sama ada ia mempunyai teks spesifikasi, perincian yang dipautkan kepadanya, dan di mana spesifikasi, jadual dan helaian tidak sepadan. **Pautkan perincian** menambah fail DetailCraft atau CadCraft, alamat, atau helaian model ini.
7. Buka **Lukisan bengkel**. Pilih elemen dalam model yang dilindungi oleh lukisan bengkel, kemudian **Terima**. Gunakan **Lulus**, **Seperti dinyatakan** atau **Semak semula** dengan nama dan nota penyemak. **Dihantar semula** membuat semakan seterusnya bagi rekod yang sama dan mengekalkan sejarah semakan. Keadaannya juga ditulis pada setiap elemen.
8. Buka **Arahan tapak**. Pilih elemen, nyatakan punca dan kesannya terhadap kos dan masa dengan kata-kata anda sendiri, kemudian **Rekod**. Selepas isu direkodkan, **Terangkan perubahan sejak isu ini** menyatakan elemen yang berubah yang diliputi oleh arahan dan elemen yang berubah tanpa sebarang rekod.

## Perlu diketahui

- Setiap langkah ialah satu Buat asal. Tiada yang ditolak: brief yang tidak dicapai, jenis yang tidak sepadan dengan teksnya, atau lukisan bengkel yang lewat tarikh ialah amaran atau nota dalam Masalah.
- Bilik brief ialah ruang tanpa dinding. Ia membawa sasaran, bukan luas yang dilukis, jadi jadual bilik dan COBie tidak pernah mengira bilik ini sebagai bilik yang dilukis.
- Susunan hanya meletakkan bilik ke dalam tingkat mengikut luas. Ia tidak melukis dinding.
- Teks spesifikasi ditulis dalam Dokumen daripada model. Di sini ia hanya dibandingkan dengan saiz model itu sendiri: tiada klausa mana-mana piawaian ditulis untuk anda.
- Lukisan bengkel dan arahan tapak ialah rekod dalam sejarah yang sama dengan panel Isu dan semakan, jadi kedua-dua panel menunjukkannya.
- Keadaan lukisan bengkel ialah sifat bagi setiap elemen (`CadCraft_ShopDrawing`), dan arahan tapak ialah `CadCraft_SiteInstruction`, supaya Cari dan Warna mengikut sifat boleh menggunakannya.
- Penanda yang disahkan di tapak (Peringkat 7) terdapat dalam Sifat di bawah Pengesahan.
