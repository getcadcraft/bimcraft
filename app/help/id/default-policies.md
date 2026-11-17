---
title: "Kebijakan default: atur apa yang dimulai bangunan baru"
summary: Tetapkan sekali jenis dinding, level, lembar pertama, tag LOD, satuan, dan alat yang dimulai bangunan baru, untuk proyek metrik maupun imperial, lalu bagikan kebijakan ke seluruh kantor sebagai file kecil.
keywords: default, kebijakan default, kebijakan, standar kantor, default kantor, templat, bangunan baru, dinding pertama, dinding metrik, masonry, LOD, level of development, lembar pertama, kertas, skala, level, tinggi lantai, nama level, alat dinding, satuan, bagikan, ekspor, impor, json
from: 42379aa5
---

## Yang akan Anda lakukan

Beri tahu BimCraft apa yang harus dimulai oleh bangunan baru, sehingga tidak ada orang di kantor yang perlu mengubah hal yang sama setiap kali. Ini adalah add-on: ia nonaktif sampai Anda mengaktifkannya. Kebijakan yang tidak Anda atur membiarkan default bawaan BimCraft tetap seperti semula.

:::note
Ini adalah default untuk bangunan **baru** dan hal-hal **baru**. Proyek yang sudah Anda mulai tidak diubah.
:::

## Langkah

1. Buka Pengaturan, masuk ke {{ui:Add-on}} dan aktifkan {{ui:Kebijakan default}}.
2. Di Pengaturan, buka tab **BimCraft** dan pilih {{ui:Kebijakan default}} di daftar sebelah kiri.
3. Atur kebijakan yang Anda inginkan. Setiap kebijakan dimulai dengan nilai milik BimCraft, yang ditulis di dalam tanda kurung. Kebijakan yang memiliki kotak **Metrik** dan **Imperial** mengambil satu nilai untuk setiap jenis proyek. Isi hanya yang Anda perlukan.
4. Tidak ada tombol Simpan: setiap perubahan disimpan saat Anda membuatnya. Nilai yang tidak bisa dipakai ditolak dengan penjelasan, dan nilai lama tetap dipakai.
5. Klik {{ui:Bangunan baru}}. Dialog diisi dari kebijakan Anda, dan setiap nilai yang diatur kebijakan ditandai **dari Kebijakan default Anda** di sebelahnya. Anda masih dapat mengubah salah satunya sebelum {{ui:Buat}}.

## Kebijakan

- **Satuan bangunan baru**: satuan beralih ke nilai ini saat Buat.
- **Jumlah level**, **Nama level** dan **Tinggi level**. Dalam nama, `{n}` menghitung 1, 2, 3; `{n0}` menghitung 0, 1, 2; `{nn}` dan `{nn0}` melakukan hal yang sama dengan dua digit. Jadi `Floor {nn0}` menghasilkan Floor 00, Floor 01, Floor 02.
- **Tipe dinding pertama**: apa yang digambar alat Dinding terlebih dahulu. Kantor metrik dapat mulai dengan Exterior masonry 300 mm, sedangkan proyek imperial tetap memakai Exterior 2×6.
- **Tag LOD pada tipe dinding awal**: tingkat pengembangan (LOD 100 sampai 500) yang ditampilkan oleh sembilan tipe awal di mana pun tipe didaftar. Lihat [Bangun rakitan dinding](topic:wall-assemblies).
- **LOD tipe dinding baru**: tag yang dimulai oleh tipe baru di editor tipe. Anda dapat mengubahnya di sana.
- **Lembar pertama**: kertasnya, skalanya, nomor lembar, dan namanya (gunakan `{level}` untuk nama level terendah), atau tidak ada lembar pertama sama sekali.
- **Ukuran anotasi pada kertas** (Pengaturan › Global › Kebijakan default): tinggi kantor, dalam milimeter seperti yang dicetak, untuk catatan, teks dimensi, tag, nama ruangan, huruf gelembung grid, judul tampilan, dan teks jadwal. Bangunan baru memakainya saat Buat dan menyimpannya di filenya. Lihat [Gambar dalam ukuran penuh, beri anotasi menurut skala](topic:annotation-sizes).
- **Alat yang aktif setelah Buat**: Pilih, seperti yang dilakukan BimCraft sendiri, atau Dinding, sehingga dua klik pertama di denah sudah menggambar dinding.

## Tata letak jadwal: standar kantor

Di **Pengaturan › Global › Kebijakan default**, di bawah **Tata letak jadwal (standar kantor)**, atur bagaimana setiap jadwal dikelompokkan, apakah memiliki subtotal dan total, judulnya, serta kapitalisasi judul kolomnya. Setiap jadwal yang tidak menyatakan sendiri akan memakainya, siapa pun yang mengaturnya. Lihat [Atur tata letak, simpan dan ekspor jadwal](topic:schedule-layouts).

## Bagikan ke seluruh kantor

1. Di Pengaturan, buka tab **Global** dan pilih {{ui:Kebijakan default}}.
2. Ketik **Nama kantor** jika Anda mau. Nama itu ditulis ke dalam file.
3. Klik {{ui:Simpan ke file}}. Anda akan mendapatkan file kecil yang berakhir dengan `.ccdefaults.json`.
4. Di komputer lain, aktifkan add-on, buka tempat yang sama, dan klik {{ui:Muat dari file}}. Kebijakan dari file akan menggantikan yang ada di komputer tersebut.

Tab Global juga memiliki **Sistem satuan proyek baru**, yang berlaku untuk setiap aplikasi yang memiliki add-on, dan {{ui:Atur ulang setiap kebijakan}}. {{ui:Atur ulang ke default bawaan BimCraft}} pada tab BimCraft hanya menghapus milik BimCraft.

## Yang perlu diketahui

- File berupa JSON biasa yang terbuka: daftar nama kebijakan dan nilainya. Kebijakan yang disebut file tetapi tidak dikenal oleh versi ini akan dilewati dan disebutkan dalam pesan; sisanya tetap dimuat.
- Kebijakan disimpan di peramban ini, untuk setiap aplikasi CadCraft di komputer ini. Kebijakan tidak disimpan di file bangunan dan tidak disinkronkan antarkomputer: gunakan file.
- Tag LOD pada tipe awal berasal dari kebijakan di komputer ini. Tipe yang Anda buat sebagai salinan dari tipe awal membawa tagnya di file bangunan.
- BimCraft tidak memiliki pengaturan presisi, sehingga tidak ada kebijakan presisi di sini.
- Bangunan yang dimulai dari templat membawa level dan lembar milik templat itu sendiri. Kebijakan tipe dinding dan satuan tetap berlaku.
- Matikan add-on dan semuanya kembali menjadi milik BimCraft. Kebijakan Anda disimpan untuk saat Anda mengaktifkannya lagi.
