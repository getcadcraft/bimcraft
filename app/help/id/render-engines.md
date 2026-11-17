---
title: Pilih program yang menggambar gambar
summary: Pilihan Mesin di dialog Render: dua mesin kami sendiri, program lain di CadCraft Studio, dan apa yang dilakukan web sebagai gantinya.
keywords: render, mesin, renderer, mesin render, plug-in, plugin, studio, program luar, digambar oleh, antrean, mesin add-on
from: 44a1ef5e
---

{{ui:Render}} memiliki pilihan **Mesin** di atas Mode. Dua mesin kami sendiri selalu tersedia dan berfungsi di mana saja; add-on dapat menambahkan lebih banyak, dan di CadCraft Studio daftar juga memuat program yang mengambil alih adegan.

| Mesin | Apa yang dilakukannya | Di mana |
|---|---|---|
| Bawaan: Cepat | Gambar diam yang cepat: cahaya siang, bayangan lembut, tampilan kaca dan logam, dalam hitungan detik | Peramban dan Studio |
| Bawaan: Path tracer | Cahaya yang memantul di antara permukaan pada kartu grafis atau prosesor Anda, antrean render, dan komputer lain di jaringan Anda | Peramban dan Studio |
| Mesin sebuah add-on | Ia menggambar dan mengembalikan gambar: lihat [Gambar gambar dengan program lain](topic:render-other-program) | Peramban (mesin yang ditulis dengan JavaScript) atau Studio (mesin yang menjalankan program) |
| Program yang mengambil alih adegan | Studio menaruh adegan di foldernya dan menjaganya tetap sinkron | Studio |
| Buka di … | Menyimpan adegan dan membukanya di sebuah program; tidak ada yang kembali: lihat [Buka adegan di program lain](topic:render-open-in) | Web menyimpan berkas |

## Cara pilihan berperilaku

- Memilih Cepat atau Path tracer juga mengubah Mode, dan sebaliknya. Tidak ada hal lain di dialog yang berubah bagi orang yang tidak pernah memakai mesin lain.
- Mesin yang tidak tersedia tetap ada di daftar dengan alasannya ("tidak ditemukan", "butuh versi yang lebih baru"); Anda tidak dapat memilihnya. Di peramban, mesin yang hanya berjalan di Studio menampilkan "menyimpan berkas": {{ui:Render}} lalu menyimpan adegan dan pengaturannya ke sebuah berkas yang Anda bawa ke program itu.
- Pilihan disimpan bersama pengaturan render berkas, dan mesin yang terakhir Anda pilih menjadi mesin awal untuk berkas yang tidak punya pilihan sendiri.
- Gambar dari program lain menyebutkan program mana yang menggambarnya dan versinya, di dialog maupun di antrean render. Janji pada halaman [Render](topic:render) hanya berlaku untuk mesin **kami sendiri**: program lain menerangi, menata tone, dan mengambil sampel dengan caranya sendiri, sehingga dua gambar dari satu adegan mirip dalam kamera, matahari, lampu, dan paparan, tetapi tidak piksel demi piksel.

## Yang diberikan kepada setiap mesin

Adegan dikirim ke program lain sebagai **paket**: model sebagai berkas USD (berkas yang sama dengan yang ditulis [Simpan sebagai USD](topic:usd)), dan berkas pengaturan yang memuat hal-hal yang tidak dapat dipercaya kepada pengimpor USD: nilai material yang tepat, lampu yang menyala dengan dayanya dan profil cahayanya, matahari, langit, paparan, dan kamera seperti yang digambar dialog. Tidak ada yang diunggah ke mana pun.

## Antrean render

Gambar untuk program lain dapat menunggu di [antrean render](topic:render#the-render-queue) seperti gambar kami sendiri; tugasnya mengingat mesin mana yang dipakai untuknya.
