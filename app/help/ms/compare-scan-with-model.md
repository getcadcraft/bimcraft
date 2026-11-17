---
title: Bandingkan imbasan dengan model dan jadual 4D
summary: Nilai setiap elemen model berbanding awan titik yang terbuka (dibina, sebahagian, hilang, tidak dicapai), lihat peratus yang dibina, warnakan model mengikutnya, dan dengan jadual 4D dimuatkan senaraikan apa yang tertinggal atau mendahului pada hari 4D.
keywords: imbasan, awan titik, kemajuan, peratus siap, dibina, hilang, tertinggal jadual, mendahului jadual, 4D, kemajuan tapak, sisihan, seperti dibina, imbasan laser, dron, bandingkan
from: 6fdc9003
---

Buka IFC, buka awan titik di sebelahnya (lihat [Awan titik](topic:point-clouds)) dan letakkannya pada model. Bahagian {{ui:Bandingkan imbasan dengan model}} muncul dalam panel kanan semasa awan titik dibuka.

## Apa yang dilakukannya

Tekan {{ui:Bandingkan}}. Setiap elemen model dinilai mengikut permukaannya, kerana itulah yang dilihat pengimbas. Enam muka kotak elemen dipotong kepada sel kira-kira 20 cm; sel dikira apabila satu titik imbasan berada dalam {{ui:Toleransi}} anda (50 mm pada mulanya) daripada muka itu. Muka besar yang terbaik dikira, supaya dinding yang diimbas dari satu sisi tidak dikenakan penalti kerana sisi lainnya.

- **Dibina**: sekurang-kurangnya 40 % permukaan kelihatan.
- **Sebahagian**: 10 % hingga 40 %.
- **Hilang**: kurang daripada itu, tetapi imbasan sampai ke elemen (titik dalam lingkungan 1.5 m daripadanya).
- **Tidak dicapai**: imbasan tidak pernah sampai ke sana, jadi tiada apa dinyatakan mengenainya.

Bagi elemen yang dibina dan dibina sebahagian, ia juga memberikan purata sisihan titik imbasan daripada permukaan model dan menyatakan sama ada elemen itu di tempatnya (dalam toleransi), hampir (dalam tiga kali ganda) atau tersasar (lebih jauh). Ia hanya nampak sisihan sehingga lima kali toleransi: elemen yang dibina lebih jauh daripada tempatnya daripada itu dibaca sebagai hilang.

Ringkasan memberikan peratus yang dibina dalam kalangan elemen yang dicapai imbasan, mengikut bilangan dan mengikut isi padu. Elemen yang dibina sebahagian dikira secara berasingan dan tidak ditambah kepada yang dibina.

## Berbanding jadual 4D

Dengan jadual 4D dimuatkan (lihat [Jadual 4D](topic:4d-schedule)), hasilnya turut menggunakan hari yang anda tetapkan pada gelangsar 4D: elemen yang sepatutnya siap menjelang hari itu, yang tidak ditunjukkan sebagai dibina oleh imbasan, ialah **tertinggal jadual**; elemen yang belum sampai tarikhnya tetapi telah dibina ialah **mendahului**. Elemen yang tertinggal jadual disenaraikan dalam {{ui:Masalah}}, dan jadual boleh ditapis kepadanya. Tanpa jadual, tiada apa dinyatakan tentang tertinggal atau mendahului.

## Jadual dan model

Klik satu baris untuk memilih elemen. {{ui:Warnakan model}} mewarnakan elemen hijau (dibina), kuning (sebahagian), merah (hilang) atau kelabu (tidak dicapai); {{ui:Warna sendiri}} mengembalikannya. {{ui:Simpan CSV}} menulis jadual. {{ui:Tandakan elemen yang sepadan sebagai disahkan di tapak}} menandakan setiap elemen yang kelihatan dibina dan berada dalam toleransi sebagai disahkan di tapak (LOD 500, kaedah imbasan), dalam satu langkah yang boleh anda buat asal. Lihat [Tandakan elemen sebagai disemak atau disahkan di tapak](topic:verification).

:::warning
Ini membandingkan kotak setiap elemen dengan titik imbasan dalam toleransi. Ia **bukan tinjauan, anggaran kuantiti atau asas untuk pembayaran**. Elemen yang tersembunyi di sebalik elemen yang diimbas (dinding di sebalik lapisan, papak di bawah kemasan lantai) berkongsi permukaannya dan boleh dibaca sebagai dibina; elemen melengkung atau condong mempunyai kotak yang lebih besar daripada jasadnya dan boleh dibaca sebagai sebahagian atau hilang. Lihat senarai sebelum anda bertindak atas dasarnya. Ulasan permit dan nota kemajuan tidak termasuk dalam perbandingan ini: ia kekal dalam lajur yang anda simpan.
:::

Pembantu boleh menjalankan perbandingan yang sama dengan alat {{ui:Bandingkan imbasan dengan model}}; ia tidak mengubah apa-apa dalam model.
