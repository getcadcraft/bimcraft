---
title: Tampilkan dan sembunyikan lantai, ruang, dan tepi
summary: Matikan lantai untuk melihat ke dalam bangunan, tampilkan ruangan dan ruang, serta nyalakan atau matikan garis tepi.
keywords: lantai, level, lantai, sembunyikan, isolasi, ruangan, ruang, ifcspace, tepi, visibilitas, potongan
from: b838dcc0
---

## Yang akan Anda lakukan

Lihat ke dalam model IFC dengan mematikan lantai di atas yang Anda perhatikan, lalu tampilkan ruangan dan ruang, dan matikan garis tepi agar tampilannya lebih bersih.

## Langkah: lihat satu lantai

1. Buka model IFC. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model).
2. Temukan daftar {{ui:Lantai}} di sebelah kiri. Lantai teratas berada di urutan pertama, seperti membaca potongan dari atap ke bawah.
3. Hapus centang pada atap dan setiap lantai di atas lantai yang ingin Anda lihat.
4. Klik {{ui:Atas}} untuk melihat ke bawah ke lantai itu.
5. Centang kembali lantai-lantai tersebut untuk mengembalikannya.

## Yang akan Anda lihat

Setiap lantai yang Anda hapus centangnya langsung menghilang beserta semua yang ada di atasnya. Daftar hanya menampilkan lantai yang berisi sesuatu yang terlihat. Elemen yang tidak ditetapkan ke lantai mana pun dikelompokkan sebagai **Tidak di lantai** di bagian bawah; elemen tapak dan beberapa furnitur sering berada di sana.

## Langkah: tampilkan ruangan dan ruang

1. Klik {{ui:Ruang}} di bilah alat di atas model. Tombolnya tetap tertekan.
2. Lihat model: ruangan dan ruang tampil sebagai volume pucat dan tembus pandang.
3. Klik sebuah ruang untuk membaca propertinya, seperti nama, nomor dan luas, di sebelah kanan.
4. Klik {{ui:Ruang}} lagi untuk menyembunyikannya.

Ruang disembunyikan saat model dibuka karena jika tidak, ruang akan menutupi dinding dan lantai.

## Langkah: tepi

1. Klik {{ui:Tepi}} untuk mematikan garis tepi yang tipis.
2. Klik lagi untuk menyalakannya kembali.

Pada model yang sangat besar (lebih dari 1,5 juta segitiga) tombolnya dibuat abu-abu dengan tip "Tepi dinonaktifkan untuk model yang sangat besar". Ini menghemat memori.

## Kesalahan umum

- **Menghapus centang lantai tetapi masih melihat sebagian dari lantai itu.** Sebuah elemen termasuk ke lantai yang ditetapkan oleh program pengekspor. Dinding tinggi atau tangga sering hanya termasuk ke lantai dasarnya, sehingga tetap terlihat saat lantai di atasnya disembunyikan, atau hilang bersama lantai di bawahnya.
- **Menyembunyikan lantai untuk melihat ke dalam.** Kotak potong sering lebih cepat: lihat [Potong model IFC dengan bidang potong](topic:section-plane#a-section-box). Anda juga dapat menghapus centang baris di {{ui:Pohon model}} (lihat [Temukan jalan Anda dengan pohon model](topic:model-tree)).
- **Mengklik ruang melalui dinding.** Klik memilih permukaan terlihat yang paling dekat. Sembunyikan lantai di atasnya, atau beralih ke {{ui:Atas}}, lalu klik.
- **Nama lantai terlihat aneh.** BimCraft menampilkan nama lantai yang tersimpan di file. Bila nama itu berbunyi "Level 1" atau sebuah angka, itulah yang ditulis oleh pengekspor.
