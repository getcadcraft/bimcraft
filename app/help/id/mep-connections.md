---
title: Sambungkan pipa dan duct ke peralatan
summary: Mulai atau akhiri pipa atau duct pada sebuah port sehingga ia mengambil ukuran dan sistem port tersebut serta tetap terkunci padanya, lalu periksa sambungan: port terbuka, ketidakcocokan ukuran dan sistem, serta jalur tanpa sumber.
keywords: mep, sambung, sambungan, port, port terbuka, ukuran tidak cocok, sistem tidak cocok, sumber, periksa sambungan, terkunci, ikuti, pindahkan peralatan, ifcrelconnectsports, koordinasi
from: 29144fb0
---

## Yang akan Anda lakukan

Sambungkan jalur ke peralatan sehingga model menjadi satu sistem yang terhubung: outlet pompa ke pipa yang keluar darinya, leher diffuser ke duct cabangnya. Lalu biarkan BimCraft mendaftar apa yang belum tersambung.

## Gambar dari port

1. Pilih {{ui:Pipa}} atau {{ui:Duct}}.
2. Gerakkan penunjuk ke port sebuah peralatan (lingkaran kecil; port yang terbuka digambar dengan warna peringatan). Penunjuk menempel padanya dan menampilkan **pada port**.
3. Klik: jalur dimulai pada ketinggian port dan **mengambil ukuran serta sistemnya** (pipa juga mengambil material yang biasa dipakai sistem tersebut). Baris status menyatakan apa yang diambilnya.
4. Lanjutkan menggambar seperti biasa. Mengakhiri jalur pada port lain juga mengunci ujung itu.

Ujung jalur pada sebuah port **terkunci** padanya: pindahkan atau putar peralatan (di Properti) dan ujung jalur ikut bergerak; ubah jalur dan ujung itu tetap berada di port. Sudut-sudut lain jalur tetap di tempatnya, sehingga setelah pemindahan besar, kaki pertama mungkin lepas dari port dengan sudut miring: pindahkan sudut berikutnya juga.

## Periksa sambungan

Buka {{ui:Build}} dan klik {{ui:Periksa sambungan}}. Daftar di bawah bilah menampilkan:

| Baris | Artinya |
|---|---|
| Sebuah port belum tersambung | Sebuah peralatan memiliki sambungan yang tidak digambarkan apa pun padanya |
| Tidak ada apa-apa di ujungnya | Sebuah jalur berakhir di udara |
| Port tersambung dengan ukuran berbeda | Jalur berukuran satu bertemu port atau jalur berukuran lain tanpa reducer (ukuran nominal pipa, bentuk dan sisi duct) |
| Port tersambung dengan sistem berbeda | Misalnya duct balik pada diffuser suplai |
| Pipa tersambung ke duct | Dua sambungan dengan jenis berbeda bertemu |
| Tidak ada peralatan di jaringannya yang memasoknya | Tidak ada yang tersambung ke jalur, sejauh apa pun, yang memiliki outlet. Drain, storm, dan vent tidak diperiksa seperti ini: airnya berasal dari fixture |
| Terkunci ke port peralatan yang tidak lagi ada dalam model | Peralatan telah dihapus; gambar ulang ujungnya atau hapus jalurnya |

Kesalahan tampil lebih dulu. Klik sebuah baris untuk memilih yang dinamainya. {{ui:Tutup}} menyembunyikan daftar. Pemeriksaan membaca model seperti yang digambar: ia memeriksa sambungan dan ukuran, tidak pernah aliran, tekanan, atau penyeimbangan.
