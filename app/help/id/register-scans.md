---
title: Registrasi beberapa pindaian menjadi satu
summary: Tempatkan pindaian yang diambil dari posisi berbeda dalam satu bingkai dengan pasangan titik yang dipilih atau target yang diketik, perhalus dengan ICP, simpan registrasi sebagai proyek, dan ekspor point cloud teregistrasi sebagai LAS atau E57.
keywords: registrasi, registration, pindaian, point cloud, icp, iterative closest point, target, pasangan titik, transformasi kaku, sejajarkan, gabungkan, e57, las, pindaian ke bim
from: e8e270db
---

## Yang akan Anda lakukan

Beberapa pindaian dari satu tempat (masing-masing dari posisi pemindai sendiri) dimulai dalam koordinatnya masing-masing. Registrasikan: berikan setiap pindaian satu penempatan sehingga semuanya berada dalam satu bingkai, lalu simpan sebagai proyek dan tulis point cloud teregistrasi sebagai satu file LAS atau E57.

## Tempatkan pindaian

1. Buka dialog ({{ui:Registrasi scan…}} di panel awal, atau {{ui:Tampilkan}} › {{ui:Registrasi scan…}} setelah model terbuka). {{ui:Tambah pindaian…}} menerima file LAS, LAZ, E57, PLY, PCD, PTX, PTS, atau XYZ, atau seret ke dialog. Pindaian yang memakai satuan berbeda ditolak dengan catatan: konversi salah satunya terlebih dahulu.
2. Pilih {{ui:Pindaian yang dipindahkan}} dan {{ui:Tempatkan terhadap}}. Gambar menampilkan setiap pindaian dalam bingkai seperti keadaannya sekarang, masing-masing dengan satu warna: {{ui:Denah}}, {{ui:Depan}}, atau {{ui:Samping}}; seret untuk menggeser, gunakan roda untuk zoom.
3. **Dengan pasangan titik.** Klik {{ui:Pilih pasangan}}, lalu titik pada pindaian yang dipindahkan, lalu tempat yang sama pada pindaian lain (sudut, target, kaki kolom). Lakukan ini minimal tiga kali, dengan titik yang tidak segaris dan tersebar. Klik {{ui:Tempatkan dengan pasangan}}: pindaian ditempatkan dengan kecocokan kuadrat terkecil, dan **Sisa** menunjukkan seberapa jauh setiap pasangan masih meleset. Pasangan dengan angka besar adalah pilihan yang buruk: hapus dengan tanda silang lalu tempatkan lagi.
4. **Dengan target.** Jika koordinat sebenarnya sebuah titik diketahui (target hasil survei), klik {{ui:Pilih, lalu ketik target}}, klik titik pada pindaiannya, dan ketik X, Y, dan Z target di baris tersebut. Pasangan dan target yang diketik dapat dicampur dengan bebas.

## Perhalus dengan ICP

Pasangan memberikan penempatan kasar. {{ui:Perhalus}} menggeser pindaian sampai permukaannya berada di atas permukaan pindaian lain: pertama **titik ke titik**, lalu **titik ke bidang**. Tabel mencantumkan setiap langkah dengan galatnya dan berapa banyak titik yang cocok; garis di atasnya menggambarkan galat yang menurun. {{ui:Hentikan}} mengakhiri proses setelah langkah yang sedang berjalan dan menyimpan hasil yang sudah dicapai. {{ui:Urungkan}} membatalkan seluruh proses (atau penempatan terakhir); {{ui:Atur ulang}} mengembalikan pindaian ke koordinat filenya.

Agar tetap cepat di laptop, ICP bekerja pada sebagian titik yang dikurangi ({{ui:Titik yang dipakai}}, 5.000 hingga 60.000) dan mengabaikan kecocokan yang lebih jauh dari {{ui:Jarak pencocokan terbesar}} (secara bawaan 5% dari ukuran pindaian, mengecil seiring stabil). Diperlukan penempatan kasar terlebih dahulu: pindaian yang hampir tidak tumpang tindih akan melaporkan bahwa tidak dapat dicocokkan. Permukaan yang hanya datar atau hanya lurus tidak dapat memperbaiki posisi sepanjang dirinya sendiri; tambahkan pasangan dalam kasus itu.

## Simpan dan ekspor

- {{ui:Simpan proyek}} menulis file `.ccscans.json` kecil: nama setiap pindaian, ukurannya, dan sidik jari 64 KB pertamanya, beserta transformasinya. File ini tidak berisi titik. {{ui:Buka proyek…}} mencari file pindaian berdasarkan referensi tersebut (file harus ditambahkan terlebih dahulu) dan mengembalikan setiap transformasi.
- {{ui:Ekspor LAS}} dan {{ui:Ekspor E57}} menulis satu file dengan setiap pindaian di tempat teregistrasinya. Titik tidak pernah ditulis ulang di file asli; transformasi diterapkan saat keluar. Dengan {{ui:Baca setiap titik dari file}} aktif, setiap file dibaca ulang untuk setiap titik (hingga 20 juta per pindaian); nonaktif, hanya titik yang tampil di penampil yang ditulis.
- {{ui:Tampilkan point cloud teregistrasi}} (BimCraft) menulis LAS dan membukanya di tampilan 3D di samping model, seperti point cloud lainnya.

:::note
Tidak ada yang diunggah. Registrasi bekerja dalam satuan file itu sendiri dan mempertahankan milimeter: LAS ditulis dengan skala yang pas (hingga 0.1 mm), E57 dengan double. Sistem koordinat dibawa ke LAS hanya jika setiap pindaian menyebut kode EPSG yang sama. Penulis E57 adalah buatan kami sendiri; ia diperiksa dengan membaca kembali filenya menggunakan pembaca ini dan libE57Format.
:::
