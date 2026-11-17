---
title: Tampak interior
summary: Buat satu lembar yang menampilkan empat dinding sebuah ruang dari dalam, dengan dimensi dan tag, lalu simpan sebagai PDF.
keywords: tampak interior, ruang, dinding, kabinet, dapur, tampak, lembar, PDF, dimensi, tag, space, A-501
from: 1e3a70a8
---

## Yang akan Anda lakukan

Pilih sebuah ruang dan dapatkan satu lembar yang menampilkan keempat dindingnya seperti yang Anda lihat saat berdiri di dalam. Fitur ini dibuat untuk dapur, kamar mandi, dan ruang apa pun yang perlu menampilkan kabinet, pintu, dan jendela di setiap dinding.

## Buat lembar

1. Pilih ruangnya. Di denah dengan {{ui:Gambar}} aktif, klik di dalam ruangan. Di tampilan 3D atau pohon model, pilih space (IfcSpace).
2. Di **Properti**, klik {{ui:Tampak interior…}}.
3. Dialog terbuka dengan lembarnya.
4. Klik {{ui:Unduh PDF}} untuk menyimpannya. File diberi nama "<file> — Interior elevations — <room>.pdf" dan berupa PDF vektor.
5. Klik {{ui:Tutup}} jika Anda sudah selesai.

## Isi lembar

Lembar berisi empat tampilan, dua kali dua, dalam satu skala: skala standar terbesar yang muat. Tampilannya adalah **Dinding utara**, **Dinding timur**, **Dinding selatan**, dan **Dinding barat**. Blok judul memuat nomor lembar A-501, judul "Interior elevations — " dengan nomor dan nama ruang, proyek, dan tanggal.

Setiap tampilan dipotong di tengah ruang dan melihat dinding di sisi itu. Dinding samping, dan apa pun yang dipotong di dalamnya seperti jendela, tampak sebagai poché potongan abu-abu di sekeliling tampilan. Tampilan berhenti tepat setelah muka dinding, sehingga tidak ada yang di balik dinding terlihat.

Setiap tampilan memuat:

- lebar ruang di bawahnya, dari muka dalam ke muka dalam;
- tinggi ruang di sampingnya, dari lantai ke level di atasnya;
- tag persegi pada setiap pintu dan tag segi enam pada setiap jendela di dinding itu, dengan tandanya (D1, W1, dan seterusnya);
- tag lingkaran dengan nomor item pada setiap item pustaka yang ditempatkan di depan dinding itu: kabinet, perlengkapan, dan peralatan.

:::note
Tampilan dibuat dari model setiap kali Anda membuka dialog, jadi selalu sesuai dengan model. Pindahkan kabinet, lalu buka dialog lagi.
:::

## Pada lembar Anda sendiri

Setiap dinding di setiap ruang juga merupakan tampilan yang dapat Anda letakkan pada lembar buatan Anda: di browser proyek, klik {{ui:Lembar baru}}, lalu di bawah **Tampak interior** tambahkan "101 Dapur — Dinding utara" dan lainnya. Tampilan itu memiliki dimensi dan tag yang sama.

## Belum dibuat

Tampak interior dalam set gambar yang dihasilkan (tampak itu berasal dari **Properti** ruang atau lembar Anda sendiri), ruang yang tidak sebagian besar persegi panjang (tampilan menampilkan kotak ruang yang persegi di setiap sisi), penggambaran, catatan, atau dimensi Anda sendiri di atasnya, serta memilih dinding mana yang ditampilkan. Lihat [Apa yang belum dibuat](topic:not-built-yet).
