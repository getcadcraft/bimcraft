---
title: Membuat model dari pemindaian
summary: Panduan singkat dari pemindaian laser ke dinding: buka point cloud di samping bangunan baru, sejajarkan dengan sebuah level, lalu telusuri dindingnya di denah.
keywords: pemindaian, pemindaian laser, scan, point cloud, as-built, bangunan yang ada, survei, telusuri, scan ke BIM, model dari pemindaian, irisan, sejajarkan, siku, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Yang akan Anda lakukan

Menggambar bangunan yang ada dari pemindaian lasernya: dinding di tempat pemindaian menunjukkannya, pada level yang benar, dan saling siku.

## Langkah-langkah

1. **Bangunan untuk digambar.** {{ui:File}} › {{ui:New building}}, dengan sebanyak level yang dimiliki bangunan (Anda dapat menambahkan level nanti, lihat [Tapak, bangunan di atasnya, dan levelnya](topic:site-building-and-levels)). {{ui:Draw}} menyala.
2. **Pemindaiannya.** {{ui:Show}} › {{ui:Point cloud}} lalu pilih filenya (LAS, LAZ, E57, PLY, PCD, PTX, atau XYZ: lihat [Tampilkan point cloud di samping model](topic:point-clouds)). Cloud tampil di tampilan 3D, dan denah menampilkan **irisannya**: titik-titik pemindaian 1200 mm (4 feet) di atas level, sebagai titik-titik. Itulah ketinggian tempat dinding, pintu, dan jendela paling jelas terbaca.
3. **Sejajarkan dengan level.** Buka menu {{ui:Scan}} pada bilah model lalu klik {{ui:Align its floor to this level}}: cloud bergerak naik atau turun sampai lantai yang dipindai berada pada level yang ditampilkan. Periksa bahwa irisan sekarang memotong dinding.
4. **Siku terhadap bangunan.** {{ui:Scan}} › {{ui:Turn it square to the building}} memutar cloud sehingga dinding di irisannya berjalan sejajar dengan sumbu denah, sehingga dinding yang Anda gambar sambil menahan {{key:Shift}} akan rata dengan pemindaian. Pemutaran dilakukan di sekitar titik tengah dinding yang ditemukan, sehingga pohon atau dinding tetangga yang ikut tertangkap di irisan tidak memutar pemindaian menjauh. Sejajarkan lantai dulu: setelah itu irisan memotong dinding.
5. **Telusuri dindingnya.** Pilih {{ui:Wall}} lalu klik sepanjang titik-titik: alat ini melakukan snap ke titik hasil pemindaian (tanda snap berbentuk belah ketupat kecil) serta ke dinding yang sudah Anda gambar. Dinding digambar pada garis tengahnya, jadi klik di tengah dua baris titik yang ditinggalkan sebuah dinding; ketik tebalnya dengan memilih tipe dinding terlebih dulu. Lalu tambahkan pintu dan jendela di tempat irisan menunjukkan celahnya.
6. **Level berikutnya.** Pilih level di atas pada daftar level denah: irisan mengikuti tinggi potong level tersebut. Sejajarkan lantai ke level itu lagi hanya jika lantai pemindaian tidak berada di tempat level Anda.

## Yang akan terlihat

- Irisan berubah saat Anda mengganti level, dan irisan yang lebih tebal ({{ui:Scan}} › {{ui:Slice thickness}}) menampilkan lebih banyak titik di tempat pemindaian tipis.
- {{ui:Scan}} › {{ui:Undo the alignment}} mengembalikan cloud ke tempat ia ditempatkan saat dibuka. Penyejajaran hanya memindahkan cloud di tampilan: ia tidak disimpan di file IFC, dan dinding yang sudah Anda gambar tetap di tempatnya. Penyejajaran ikut berpindah bersama cloud saat Anda mengubah {{ui:Place}} atau {{ui:Units}}, atau membuka model lain.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} menyembunyikan atau menampilkan titik-titik.

:::tip
Pemindaian besar: denah menggambar hingga 60,000 titik irisan dan tampilan 3D beberapa juta titik dari seluruh cloud, keduanya dipilih merata di seluruh pemindaian, sehingga file besar tetap cepat. Untuk menelusuri di aplikasi drafting, gunakan {{ui:Trace in CadCraft}} pada bilah cloud.
:::
