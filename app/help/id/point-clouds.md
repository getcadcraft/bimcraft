---
title: Tampilkan point cloud di samping model
summary: Buka pemindaian laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS, atau XYZ) di tampilan 3D sendiri atau bersama model IFC, beri warna, potong irisan tipis melaluinya, ukur ke titiknya, dan serahkan ke aplikasi gambar untuk menjiplak garis as-built.
keywords: point cloud, pemindaian laser, pindaian, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, survei, registrasi, irisan, potongan denah, snap, ukur, jiplak, pindaian ke bim
from: d0a3e740
---

## Yang akan Anda lakukan

Lihat pemindaian laser sebuah bangunan di samping modelnya: periksa apakah yang dibangun sesuai dengan desain, ukur di antara titik pindaian, dan potong irisan tipis untuk membaca dinding, pintu, dan kolom.

## Langkah

1. Buka point cloud: gunakan {{ui:Terbuka}} untuk file `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts`, atau `.xyz`, atau seret ke halaman (lihat topik format point cloud untuk tahu apa yang dibawa tiap format, dan apa yang diekspor dari perangkat lunak pemindai). Dengan model terbuka, point cloud bergabung dengan model di tampilan 3D; membuka point cloud tidak pernah menutup model atau perubahannya yang belum disimpan. Tanpa model, point cloud terbuka sendiri.
2. Bilah point cloud muncul di bawah bilah alat. Bilah menunjukkan berapa titik yang tampil dan berapa yang dimiliki file.
3. Pilih {{ui:Warnai menurut}}: warna milik file (jika pemindai menyimpannya), {{ui:Tinggi}}, {{ui:Intensitas}}, {{ui:Kelas}} (kelas LiDAR seperti tanah, vegetasi, dan bangunan), atau {{ui:Satu warna}}. {{ui:Ukuran}} membuat titik lebih besar atau lebih kecil.
4. Klik {{ui:Denah}} di bawah {{ui:Irisan}} untuk hanya menyimpan pita tipis 1.2 m di atas titik terendah, dilihat dari atas: dinding, bukaan pintu, dan kolom terbaca seperti denah lantai. {{ui:Depan}} dan {{ui:Samping}} memotong pita tegak untuk tampak dan potongan. Geser pita dengan {{ui:Pada}}, dan ubah {{ui:Ketebalan}} (meter). {{ui:Mati}} menampilkan kembali seluruh point cloud.
5. Klik {{ui:Ukur}} di bilah alat. Penunjuk akan snap ke titik point cloud (labelnya menyebut "point cloud"), sehingga Anda dapat mengukur dari dinding ke dinding di irisan, atau dari elemen model ke pindaian. Sudut atau tepi model yang terjangkau tetap diutamakan.
6. Dengan {{ui:Ukur}} › {{ui:Lokasi}}, sebuah titik point cloud memberikan lintang dan bujur dari sistem koordinat point cloud itu sendiri, jika file menyebutkannya.
7. {{ui:Sembunyikan}} menyembunyikan point cloud sementara; {{ui:Hapus}} mengeluarkannya. {{ui:Tampilkan}} › {{ui:Point cloud}} menyembunyikan atau menampilkan bilah.

## Ke mana point cloud diletakkan

{{ui:Tempatkan}} di bilah menyatakan bagaimana point cloud sejajar dengan model:

- **Koordinat model**: angka point cloud adalah milik model (pindaian yang diregistrasi ke koordinat desain).
- **Koordinat peta**: model memiliki konversi peta (IfcMapConversion) dan point cloud berada dalam sistem proyeksi yang sama: point cloud ditempatkan melaluinya. Jika keduanya menyebut sistem yang berbeda, baris status menyatakannya.
- **Berpusat pada model**: jika tidak satu pun menempatkan point cloud dekat model, bagian tengahnya ditempatkan di tengah model dan titik terendahnya di lantai model. Pilih pilihan lain untuk mengesampingkannya.

Jika file tidak menyebutkan satuannya, BimCraft membaca meter dan menawarkan {{ui:Satuan}} di bilah.

## Jiplak garis as-built

Klik {{ui:Jiplak di CadCraft}} untuk menyerahkan point cloud ke aplikasi gambar di tab baru. Point cloud terbuka di sana di bawah gambar, tempat irisan denah dan object snap memungkinkan Anda menggambar dinding di atas pindaian. Lihat topik CadCraft tentang point cloud.

## Berapa banyak titik

Satu pindaian dapat memuat ratusan juta titik. BimCraft membaca setiap titik sekali dan menyimpan bagian yang merata untuk digambar: {{ui:Tampilkan}} di bilah menentukan jumlahnya (1, 2, 5, atau 10 juta). Lebih banyak titik membutuhkan lebih banyak memori dan kartu grafis yang lebih cepat. Jumlah per kelas LiDAR dihitung dari setiap titik dalam file.

:::note
File dibaca di komputer ini; tidak ada yang diunggah. LAS 1.0–1.4 dan LAZ dibaca (file LAZ hingga 1 GB, disimpan di memori selama dibaca); file E57 hingga 6 juta titik dan 512 MB untuk saat ini (pindaian lebih besar: ekspor LAS atau LAZ); PLY, PCD, dan PTX secara penuh; point cloud teks berupa `x y z`, dengan kolom warna (`r g b`) dan intensitas jika ada.
:::

## Beberapa pindaian

Pindaian yang diambil dari posisi berbeda dapat diregistrasi ke dalam satu bingkai, diperhalus dengan ICP, dan diekspor sebagai satu LAS atau E57: lihat [Registrasi beberapa pindaian menjadi satu](topic:register-scans).
