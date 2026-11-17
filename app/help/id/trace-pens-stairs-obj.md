---
title: Jiplak level, atur pena per tampilan, sketsa tangga, buka OBJ
summary: Tampilkan level lain sebagai putus-putus di bawah denah dan sejajarkan, berikan dinding, pintu, dan jendela pena sendiri dalam satu tampilan, gambar garis jalan untuk membuat tangga, dan buka mesh OBJ Wavefront.
keywords: referensi jiplak, ghost, underlay, pena, ketebalan garis, jenis garis, override, tangga, sketsa, bordes, OBJ, mesh, impor, Wavefront
from: 333ebbde
---

## Jiplak level

Pilih {{ui:Jiplak}} di menu {{ui:Build}}, lalu pilih tampilan dalam daftar: denah level lain, denah plafon sebuah level, atau callout (dipotong sesuai pangkasnya). Dinding, kolom, dan lantainya tampil putus-putus di bawah denah yang sedang Anda gambar. Pindahkan dengan mengklik titik dasar pada referensi lalu tempat titik itu seharusnya berada, atau ketik X, Y, dan sudut (ia berputar di sekitar pusatnya sendiri). {{ui:Atur ulang}} mengembalikannya, dan {{ui:Sembunyikan}} menghilangkannya. Ini hanya referensi: tidak ada yang dapat memilihnya, tidak dicetak, dan tidak disimpan dalam IFC. BimCraft mengingatnya untuk setiap level di peramban ini.

## Pena per tampilan

Pilih {{ui:Pena}}. Tentukan untuk apa pena itu: semua dinding, semua pintu, semua jendela, tipe dari elemen yang dipilih, atau elemen yang dipilih. Pilih ketebalan, garis (solid, putus-putus, titik-titik), dan warna, lalu {{ui:Terapkan}}. Perubahan hanya berlaku untuk denah level ini. Pilihan mengalahkan tipe, dan tipe mengalahkan seluruh kategori. {{ui:Bersihkan semua}} menghapusnya. Pena disimpan di peramban ini. Centang **Warna pena di 3D** untuk mewarnai pena berwarna pada model di tampilan 3D (ketebalan atau putus-putus adalah milik garis, jadi hanya warna yang tampak di sana); hapus centangnya untuk kembali. {{ui:Cetak}} menggambarnya pada PDF denah: ketebalan mengikuti skala layar (pena dinding bawaan 1.75 piksel adalah 0.5 mm), putus-putus tetap putus-putus, dan warna dicetak dengan nilai tema kertasnya.

## Tangga dari sketsa

Pilih {{ui:Sketsa tangga}} lalu klik sudut-sudut garis jalan, dimulai dari anak tangga paling bawah. Satu garis menjadi tangga lurus, dua garis yang bertemu pada sudut siku-siku menjadi L, dan tiga garis (naik, melintang, kembali) menjadi U. Tekan {{key:L}} untuk menggambar bordes: klik sudut-sudutnya dan tekan {{key:Enter}}; sisi terpendeknya menentukan lebar tangga. Tekan {{key:Enter}} untuk menempatkan tangga. Setiap injakan dihitung dari panjang garis Anda dan jumlah tanjakan yang dibutuhkan oleh tinggi. Setelah itu, tangga menjadi tangga biasa: ubah di Properti, dan lubang tangga serta pegangan tangga akan mengikuti.

Centang **Jadikan famili** di baris alat (atau tekan {{key:F}}) sebelum {{key:Enter}} untuk menempatkan tangga sebagai famili (tangga lurus, L, atau U). Ia masuk sebagai satu elemen dan terbuka di editor famili dengan lebar, injakan, tinggi total, injakan di setiap lari, dan celah U sebagai parameter, sehingga Anda dapat menambahkan ukuran, simbol denah, atau hotspot. Anak tangga dan tinggi tanjakan mengikuti parameter tersebut. Ia tidak memiliki pegangan tangga atau lubang tangga: itu milik tangga biasa.

## Buka OBJ

Buka file `.obj` seperti file lainnya. OBJ tidak memiliki satuan, jadi BimCraft membaca meter dengan Y ke atas, seperti yang ditulis kebanyakan program. Setiap objek atau grup menjadi satu elemen mesh pada satu level, dan Anda kemudian dapat melihat, mengukur, memotong, menempatkannya dalam model, dan menyimpannya sebagai IFC. Garis, kurva, dan permukaan dilewati, dan baris status menyebutkannya.

Objek yang persis berupa prisma lurus (mesh tertutup dengan dua muka ujung yang sejajar dan identik serta sisi datar yang tegak lurus terhadapnya: pelat lantai, tiang, blok dinding, pelat berlubang) disimpan dalam IFC sebagai solid ekstrusi bawaan IFC dengan garis luar dan kedalamannya, bukan sebagai daftar segitiga. Program lain membacanya sebagai solid sungguhan, ukurannya tetap kecil, dan kedalaman serta garis luarnya dapat diubah nanti. Baris status menyebutkan berapa banyak objek yang disimpan dengan cara itu. Apa pun yang tidak persis prisma (bentuk meruncing, mesh dengan satu verteks dipindahkan, mesh dengan celah) tetap sebagai segitiga. File STEP dibaca dengan cara yang sama.
