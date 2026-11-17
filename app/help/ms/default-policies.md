---
title: "Dasar lalai: tetapkan apa yang dimulakan oleh bangunan baharu"
summary: Nyatakan sekali jenis dinding, aras, helaian pertama, tag LOD, unit dan alat yang dimulakan oleh bangunan baharu, untuk projek metrik dan imperial, dan kongsi dasar merentasi pejabat sebagai fail kecil.
keywords: lalai, dasar lalai, dasar, piawaian pejabat, templat, bangunan baharu, jenis dinding pertama, dinding metrik, masonri, LOD, tahap pembangunan, helaian pertama, kertas, skala, aras, ketinggian tingkat, nama aras, alat dinding, unit, kongsi, eksport, import, json
from: 42379aa5
---

## Apa yang akan anda lakukan

Beritahu BimCraft apa yang patut dimulakan oleh bangunan baharu, supaya tiada siapa dalam pejabat perlu menukar perkara yang sama setiap kali. Ini ialah add-on: ia dimatikan sehingga anda menghidupkannya, dan dasar yang tidak anda tetapkan membiarkan lalai BimCraft sendiri kekal seperti sedia ada.

:::note
Ini ialah lalai untuk bangunan **baharu** dan perkara **baharu**. Projek yang telah anda mulakan tidak diubah.
:::

## Langkah

1. Buka Tetapan, pergi ke {{ui:Add-on}} dan hidupkan {{ui:Dasar lalai}}.
2. Dalam Tetapan, buka tab **BimCraft** dan pilih {{ui:Dasar lalai}} dalam senarai di sebelah kiri.
3. Tetapkan dasar yang anda mahu. Setiap satu bermula pada **milik BimCraft**, dengan apa itu dalam kurungan. Dasar dengan kotak **Metrik** dan **Imperial** mengambil satu nilai untuk setiap jenis projek; isi hanya yang anda perlukan.
4. Tiada butang Simpan: setiap perubahan disimpan semasa anda membuatnya. Nilai yang tidak boleh digunakan ditolak dengan perkataan, dan nilai lama kekal.
5. Klik {{ui:Bangunan baharu}}. Dialog diisi daripada dasar anda, dan setiap nilai yang ditetapkan oleh dasar memaparkan **daripada Dasar lalai anda** di sebelahnya. Anda masih boleh menukar mana-mana daripadanya sebelum {{ui:Cipta}}.

## Dasar

- **Unit bagi bangunan baharu**: unit bertukar kepada ini apabila Cipta.
- **Bilangan aras**, **Nama aras** dan **Ketinggian aras**. Dalam nama, `{n}` mengira 1, 2, 3; `{n0}` mengira 0, 1, 2; `{nn}` dan `{nn0}` berbuat sama dengan dua digit. Jadi `Tingkat {nn0}` memberi Tingkat 00, Tingkat 01, Tingkat 02.
- **Jenis dinding pertama**: apa yang dilukis dahulu oleh alat Dinding. Pejabat metrik boleh bermula dengan Exterior masonry 300 mm manakala projek imperial mengekalkan Exterior 2×6.
- **Tag LOD pada jenis dinding permulaan**: tahap pembangunan (LOD 100 hingga 500) yang ditunjukkan oleh sembilan jenis permulaan di mana-mana jenis disenaraikan. Lihat [Bina pemasangan dinding](topic:wall-assemblies).
- **LOD bagi jenis dinding yang baharu dibuat**: tag yang dimulakan oleh jenis baharu dalam penyunting jenis. Anda boleh menukarnya di sana.
- **Helaian pertama**: kertasnya, skalanya, nombor helaian dan namanya (gunakan `{level}` untuk nama aras terendah), atau tiada helaian pertama langsung.
- **Saiz anotasi pada kertas** (Tetapan › Global › Dasar lalai): ketinggian pejabat, dalam milimeter seperti yang dicetak, untuk nota, teks dimensi, tag, nama bilik, huruf bulatan grid, tajuk pandangan dan teks jadual. Bangunan baharu mengambilnya semasa Cipta dan menyimpannya dalam failnya. Lihat [Lukis pada saiz penuh, anotasi mengikut skala](topic:annotation-sizes).
- **Alat yang aktif selepas Cipta**: Pilih, seperti BimCraft sendiri, atau Dinding, supaya dua klik pertama pada pelan sudah melukis dinding.

## Susun atur jadual: piawaian pejabat

Dalam **Tetapan › Global › Dasar lalai**, di bawah **Susun atur jadual (piawaian pejabat)**, tetapkan cara setiap jadual dikumpulkan, sama ada ia mempunyai subjumlah dan jumlah, tajuknya, dan huruf besar atau kecil bagi pengepala lajurnya. Setiap jadual yang tidak menyatakan sendiri mengambilnya, siapa pun yang menyediakannya. Lihat [Susun atur, simpan dan eksport jadual](topic:schedule-layouts).

## Kongsi merentasi pejabat

1. Dalam Tetapan, buka tab **Global** dan pilih {{ui:Dasar lalai}}.
2. Taip **Nama pejabat** jika mahu. Ia ditulis ke dalam fail.
3. Klik {{ui:Simpan ke fail}}. Anda mendapat fail kecil yang berakhir dengan `.ccdefaults.json`.
4. Di komputer lain, hidupkan add-on, buka tempat yang sama dan klik {{ui:Muat dari fail}}. Dasar fail itu menggantikan dasar di komputer tersebut.

Tab Global juga mempunyai **Sistem unit bagi projek baharu**, yang terpakai untuk setiap aplikasi yang mempunyai add-on ini, dan {{ui:Tetapkan semula setiap dasar}}. {{ui:Tetapkan semula kepada lalai BimCraft sendiri}} pada tab BimCraft hanya mengosongkan dasar BimCraft.

## Perkara yang perlu diketahui

- Fail ialah JSON biasa yang boleh dibuka: senarai nama dasar dan nilai. Dasar yang dinyatakan fail tetapi tidak diketahui oleh versi ini ditinggalkan dan dinamakan dalam mesej; yang lain tetap dimuat.
- Dasar disimpan dalam pelayar ini, untuk setiap aplikasi CadCraft pada komputer ini. Ia tidak disimpan dalam fail bangunan, dan tidak disegerakkan antara komputer: gunakan fail.
- Tag LOD bagi jenis permulaan datang daripada dasar pada komputer ini. Jenis yang anda buat sebagai salinan jenis permulaan membawa tagnya dalam fail bangunan.
- BimCraft tiada tetapan ketepatan, maka tiada dasar ketepatan di sini.
- Bangunan yang dimulakan daripada templat membawa aras dan helaian templat itu sendiri. Dasar jenis dinding dan dasar unit tetap terpakai.
- Matikan add-on dan semuanya kembali kepada BimCraft sendiri. Dasar anda disimpan untuk apabila anda menghidupkannya semula.
