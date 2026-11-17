---
title: Daftar beberapa imbasan menjadi satu
summary: Letakkan imbasan yang diambil dari kedudukan berbeza dalam satu bingkai dengan pasangan titik yang dipilih atau sasaran yang ditaip, perhalusnya dengan ICP, simpan pendaftaran sebagai projek, dan eksport awan terdaftar sebagai LAS atau E57.
keywords: daftar, pendaftaran, imbasan, awan titik, icp, titik terdekat berulang, sasaran, pasangan titik, transformasi tegar, jajar, cantum, e57, las, imbasan ke bim
from: e8e270db
---

## Apa yang anda akan lakukan

Beberapa imbasan bagi satu tempat yang sama (setiap satu dari kedudukan pengimbas sendiri) bermula dalam koordinat masing-masing. Daftarkannya: berikan setiap imbasan satu penempatan supaya semuanya berada dalam satu bingkai, kemudian simpan itu sebagai projek dan tulis awan terdaftar sebagai satu fail LAS atau E57.

## Letakkan imbasan

1. Buka dialog ({{ui:Daftar imbasan…}} pada panel mula, atau {{ui:Show}} › {{ui:Daftar imbasan…}} apabila model telah dibuka). {{ui:Tambah imbasan…}} menerima fail LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ, atau lepaskannya pada dialog. Imbasan yang menggunakan unit berbeza ditolak dengan nota: tukar satu dahulu.
2. Pilih {{ui:Imbasan untuk dialihkan}} dan {{ui:Letak terhadap}}. Gambar menunjukkan setiap imbasan dalam bingkai seperti sekarang, satu warna bagi setiap satu: {{ui:Plan}}, {{ui:Front}} atau {{ui:Side}}; seret untuk pan, gunakan roda tetikus untuk zum.
3. **Mengikut pasangan titik.** Klik {{ui:Pilih pasangan}}, kemudian satu titik pada imbasan yang hendak dialihkan, kemudian tempat yang sama pada imbasan lain (satu bucu, satu sasaran, kaki sebuah tiang). Buat sekurang-kurangnya tiga kali, dengan titik yang tidak segaris dan tersebar jauh. Klik {{ui:Letak mengikut pasangan}}: imbasan diletakkan dengan pemadanan kuasa dua terkecil, dan **Baki** menunjukkan sejauh mana setiap pasangan masih tersasar. Pasangan dengan nombor yang besar ialah pilihan yang buruk: alih keluarkannya dengan tanda silang dan letakkan semula.
4. **Mengikut sasaran.** Jika koordinat sebenar sesuatu titik diketahui (sasaran yang ditinjau), klik {{ui:Pilih, kemudian taip sasaran}}, klik titik pada imbasannya, dan taip X, Y dan Z sasaran dalam baris itu. Pasangan dan sasaran yang ditaip boleh dicampur dengan bebas.

## Perhalus dengan ICP

Pasangan memberikan penempatan kasar. {{ui:Perhalus}} mengalihkan imbasan sehingga permukaannya terletak di atas permukaan imbasan lain: pertama **titik ke titik**, kemudian **titik ke satah**. Jadual menyenaraikan setiap langkah dengan ralatnya dan berapa banyak titik yang dipadankan; baris di atasnya melukis ralat yang semakin turun. {{ui:Henti}} menamatkan larian selepas langkah yang sedang berjalan dan mengekalkan apa yang telah dicapai. {{ui:Buat asal}} membatalkan keseluruhan larian (atau penempatan terakhir); {{ui:Tetapkan semula}} meletakkan imbasan semula ke koordinat failnya.

Untuk menjadikannya pantas pada komputer riba, ICP bekerja pada sebahagian titik yang dikurangkan ({{ui:Titik digunakan}}, 5,000 hingga 60,000) dan mengabaikan padanan yang lebih jauh daripada {{ui:Jarak padanan terbesar}} (secara lalai 5% daripada saiz imbasan, mengecil apabila ia stabil). Ia memerlukan penempatan kasar terlebih dahulu: imbasan yang hampir tidak bertindih melaporkan bahawa ia tidak dapat dipadankan. Permukaan yang hanya rata atau hanya lurus tidak dapat membetulkan kedudukan sepanjang dirinya sendiri; tambah pasangan dalam kes itu.

## Simpan dan eksport

- {{ui:Simpan projek}} menulis fail `.ccscans.json` yang kecil: nama setiap imbasan, saiznya dan cap jari 64 KB pertamanya, bersama transformasinya. Ia tidak mengandungi titik. {{ui:Buka projek…}} mencari fail imbasan melalui rujukan tersebut (fail mesti ditambah dahulu) dan memulihkan setiap transformasi.
- {{ui:Eksport LAS}} dan {{ui:Eksport E57}} menulis satu fail dengan setiap imbasan di tempat terdaftarnya. Titik tidak pernah ditulis semula dalam fail asal; transformasi digunakan semasa keluar. Dengan {{ui:Baca setiap titik daripada fail}} dihidupkan, setiap fail dibaca semula untuk setiap titik (sehingga 20 juta bagi setiap imbasan); jika dimatikan, hanya titik yang dipaparkan dalam penonton yang ditulis.
- {{ui:Tunjuk awan terdaftar}} (BimCraft) menulis LAS dan membukanya dalam paparan 3D di sebelah model, seperti mana-mana awan.

:::note
Tiada apa-apa dimuat naik. Pendaftaran berfungsi dalam unit fail itu sendiri dan mengekalkan milimeter: LAS ditulis dengan skala yang sesuai (sehingga 0.1 mm), E57 dengan nombor double. Sistem koordinat dibawa ke dalam LAS hanya apabila setiap imbasan menamakan kod EPSG yang sama. Penulis E57 ialah buatan kami sendiri; ia disemak dengan membaca semula fail-failnya menggunakan pembaca ini dan libE57Format.
:::
