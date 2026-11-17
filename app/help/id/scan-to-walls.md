---
title: Dinding dan pintu dari pindaian ponsel atau laser
summary: Ubah pindaian sebuah ruang menjadi usulan dinding, pintu, dan ruang yang Anda terima satu per satu.
keywords: pindaian, pindaian ponsel, lidar, point cloud, dinding dari pindaian, pintu dari pindaian, pindaian ruang, ply, e57, las, obj, usulkan
from: a4ef0f10
---

## Apa yang dilakukannya

Dengan pindaian terbuka (point cloud seperti PLY, E57, atau LAS, atau mesh seperti OBJ), BimCraft memotong pindaian pada ketinggian denah, memutarnya agar lurus terhadap bangunan, lalu mencari deretan titik yang panjang dan tipis: itulah dinding. Celah kira-kira selebar pintu di antara dua deretan pada satu garis menjadi satu dinding dengan pintu di dalamnya. Dinding yang menutup suatu ruang membentuk sebuah ruang.

Tidak ada yang digambar sampai Anda menerimanya. Dinding dan pintu datang sebagai daftar usulan (berupa perubahan mode Usulkan): simpan yang benar, tolak yang lain, dan semua yang Anda simpan digambar dalam satu langkah Urungkan. Ruang muncul dengan sendirinya.

## Yang diperiksanya

Dinding yang tidak menutup, deretan dinding yang lebih pendek daripada tebal dinding, dan celah sebesar pintu tanpa dinding di sekitarnya dilaporkan sebagai Masalah dengan posisinya, sehingga Anda dapat melihat pindaian di sana.

## Belum diverifikasi sampai diperiksa

Dinding, pintu, dan ruang yang Anda terima dari pindaian ditandai belum diverifikasi: kotak putus-putus dan tanda "?" di denah sampai Anda menandainya sudah diperiksa. Lihat [Tandai elemen sebagai sudah diperiksa atau diverifikasi di lapangan](topic:verification).

## Yang tidak bisa dilakukannya

- Ia menemukan dinding yang berjalan dalam dua arah yang tegak lurus. Dinding diagonal atau melengkung tidak ditemukan.
- Satu lantai pada satu waktu. Jendela tidak ditemukan (jendela hanya berupa celah jika potongan berada di ketinggian ambang jendela).
- Ia sudah dicoba pada pindaian ruang dan mesh yang dihasilkan, belum pada pindaian dari ponsel sungguhan. Seberapa baik hasilnya pada pindaian sungguhan (penyimpangan pada jalan yang panjang, furnitur di dekat dinding, kaca, pintu terbuka) belum diketahui; menyetelnya untuk pindaian sungguhan adalah langkah berikutnya. Periksa setiap usulan terhadap pindaian sebelum Anda menerimanya.
