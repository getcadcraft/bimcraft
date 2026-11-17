---
title: Pintu dan jendela
summary: Pasang pintu dan jendela di dinding yang Anda gambar: arahkan ke dinding, lihat ayunan dan jarak ke setiap sudut, lalu klik. Bukaan dinding memotong dirinya sendiri.
keywords: pintu, jendela, bukaan, ayunan, engsel, arah, balik, pintu geser, pintu saku, pintu garasi, pintu ganda, casement, single hung, double hung, slider, fixed window, sill, header, bifold, pintu lemari, pintu Prancis, pintu lumbung, sidelites, pintu masuk, awning, picture window, transom
from: 4d8ac009
---

## Yang akan Anda lakukan

Pasang pintu dan jendela di dinding yang sudah Anda gambar ([Gambar dinding](topic:draw-walls)). Arahkan ke sebuah dinding dan pintu atau jendela akan menunjukkan tempatnya, arah ayunannya, dan jaraknya dari setiap sudut. Klik, dan bukaan akan memotong dirinya sendiri dari dinding di denah maupun di 3D.

## Pasang pintu

1. Dengan {{ui:Gambar}} aktif, klik {{ui:Pintu}} (atau tekan {{key:D}}).
2. Pilih jenisnya: **Pintu ayun tunggal**, **Pintu ayun ganda**, **Pintu geser**, **Pintu saku**, **Pintu garasi**, **Pintu lemari lipat**, **Pintu Prancis**, **Pintu lumbung (pada dinding)** atau **Pintu masuk dengan sidelite**. Ukuran biasanya mengisi **W** dan **H**. Pilih ukuran lain dari daftar ukuran di sebelahnya, atau ketik yang lain, misalnya `2'-8"` atau `800`. Daftar itu juga menawarkan famili pintu dari model ini (lihat [Famili dan ukurannya](topic:families)).
3. Arahkan ke sebuah dinding. Simbol pintu mengikuti penunjuk di sepanjang dinding, dan jarak dari setiap ujung muka dinding itu muncul di denah.
4. Pintu berayun ke sisi dinding tempat penunjuk berada. Tekan {{key:H}} (atau klik {{ui:Balik}}) untuk menaruh engselnya di ujung lain.
5. Klik. Pintu ditempatkan dan alat tetap aktif untuk pintu berikutnya. Arahkan ke tengah dinding dan pintu akan memusatkan dirinya sendiri.

Untuk menempatkannya pada jarak yang tepat, arahkan ke dinding di dekat sudut yang Anda ukur, ketik jaraknya (misalnya `2'` atau `600`), lalu tekan {{key:Enter}}. Jarak diukur dari ujung muka dinding yang lebih dekat ke tepi pintu.

## Pasang jendela

1. Klik {{ui:Jendela}} (atau tekan {{key:N}}).
2. Pilih jenisnya: **Jendela tetap**, **Jendela gantung tunggal**, **Jendela gantung ganda**, **Jendela engsel**, **Jendela geser**, **Jendela awning**, **Jendela gambar** atau **Transom**. Atur **W**, **H**, dan **Sill** (tinggi bagian bawah jendela di atas lantai).
3. Arahkan ke sebuah dinding dan klik, atau ketik jarak dan tekan {{key:Enter}} seperti pada pintu. Jendela berada di sisi luar dinding.

## Pindahkan, balik, hapus

- Dengan {{ui:Pilih}} aktif, seret pintu atau jendela sepanjang dindingnya. Seret ke dinding lain untuk memindahkannya ke sana.
- {{key:Delete}} menghapus pintu dan jendela yang dipilih. Dinding akan menutup kembali.
- Memindahkan atau menghapus dinding juga memindahkan atau menghapus apa yang ada di dalamnya. Ketika awal dinding bergerak di sepanjang garisnya sendiri, pintu dan jendelanya tetap di tempatnya.
- {{ui:Urungkan}} dan {{ui:Ulangi}} membalik setiap penempatan, pemindahan, atau penghapusan secara bolak-balik.

## Yang ditolak

- **Tidak muat di dinding itu.** Pintu atau jendela lebih lebar dari dinding, atau akan keluar dari ujungnya. Coba lebar yang lebih pendek atau dinding yang lebih panjang.
- **Lebih tinggi dari dinding.** Sill ditambah tinggi berada di atas bagian atas dinding.

## Yang disimpan

Setiap pintu atau jendela adalah pintu atau jendela IFC dengan ukurannya, operasinya (misalnya ayun tunggal kiri), tipe ukurannya (satu tipe untuk setiap ukuran famili), `Pset_DoorCommon` atau `Pset_WindowCommon` dan kuantitas dasar. Ia mengisi bukaan IFC pada dindingnya. Luas sisi bersih dan volume dinding tidak memperhitungkan bukaan. Program BIM lain membukanya sebagai pintu pada dinding.

## Yang perlu diketahui

- Denah menampilkan pintu terbuka 90° dengan ayunannya, pintu geser sebagai dua panel, pintu saku meluncur masuk ke dinding, pintu garasi sebagai garis putus-putus di atas, dan jendela dengan garis bingkai serta kacanya.
- Lebar adalah lebar keseluruhan bingkai. Daun pintu adalah lebar dikurangi dua kusen.
- Menyalin pintu dan jendela yang sudah digambar belum dibuat: tempatkan yang lain.

## Jendela evakuasi ruang bawah tanah dengan sumur

Pilih **Jendela evakuasi ruang bawah tanah dengan sumur** dalam daftar tipe jendela. Ia dimulai sebagai jendela engsel 36 × 48 inch dengan sill 36 inch di atas level. Sumurnya berada di luar dinding, dengan lebar bersih minimal 48 inch, proyeksi 36 inch, dan dasar 6 inch di bawah sill. Ia muncul sebagai garis putus-putus di denah dan sebagai tiga sisi terbuka di bagian atas pada 3D. Sumur merupakan bagian dari badan IFC jendela, sehingga menyimpan, memindahkan, mengubah ukuran, atau menghapus jendela ikut membawanya. Saat diubah ukurannya, tetap ada minimal 6 inch di samping setiap kusen.

Ini adalah default pemodelan, bukan sertifikasi kepatuhan evakuasi. Periksa sendiri bukaan bersih aktual dari pabrikan, persyaratan setempat, elevasi tanah, drainase, dan pemisah tangga yang diperlukan. Kedalaman dan tinggi sumur adalah dimensi yang sudah ditetapkan; keduanya tidak mengikuti medan.
