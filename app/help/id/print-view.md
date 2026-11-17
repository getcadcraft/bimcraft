---
title: Periksa gambar di tampilan cetak
summary: Beralih ke tampilan cetak untuk DWG atau DXF untuk melihatnya hitam di atas putih dengan tebal garisnya, dan tanpa layer yang tidak pernah dicetak.
keywords: cetak, plot, pratinjau, pratinjau plot, tebal garis, lineweight, monokrom, hitam putih, defpoints, tanpa plot
from: 1a59c23e
---

## Yang akan Anda lakukan

Lihat bagaimana lembar akan tampak di kertas sebelum Anda mencetaknya dari program yang membuatnya: hitam di atas putih, tebal garis pada lebar sebenarnya, dan tanpa layer yang diatur agar tidak dicetak.

## Langkah

1. Buka gambar DWG atau DXF.
2. Klik tab lembar di atas gambar.
3. Klik {{ui:Tampilan cetak}} di ujung tab, atau tekan {{key:P}}.
4. Zoom ke detail untuk membandingkan garis tebal dan garis tipis.
5. Klik {{ui:Tampilan cetak}} lagi, atau tekan {{key:P}}, untuk kembali ke warna normal.

## Yang harus terlihat

- Kertas putih di atas meja abu-abu, setiap garis dan teks hitam, apa pun temanya.
- Tebal garis: pada lembar, setiap tebal digambar pada lebar sebenarnya di kertas, sehingga garis 0,5 mm dua kali lebih tebal dari garis 0,25 mm pada zoom apa pun. Garis tidak pernah digambar lebih tipis dari tebal layarnya.
- Layer yang diatur agar tidak dicetak, dan layer DEFPOINTS, disembunyikan.
- Tombol {{ui:Tampilan cetak}} tetap ditekan. Tampilan cetak tetap aktif saat Anda beralih lembar atau membuka gambar lain, hingga Anda mematikannya.

Di {{ui:Model}}, tampilan cetak hanya memakai tebal layar (garis tipis satu piksel, garis yang lebih tebal sedikit lebih tebal), karena ruang model tidak memiliki ukuran kertas.

## Kesalahan umum

- **Mengharapkan dapat mencetak.** Tampilan cetak hanyalah pratinjau. Pencetakan dan ekspor PDF belum tersedia di BimCraft; cetaklah dari program yang membuat gambar.
- **Mengharapkan gaya plot.** Tabel pena dan warna gaya plot tidak dibaca. Semuanya hitam polos.
- **Menekan P saat mengetik.** {{key:F}} dan {{key:P}} tidak berfungsi saat Anda mengetik di kolom isian, atau saat jadwal peralatan ditampilkan.
