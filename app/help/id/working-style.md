---
title: Gaya kerja, tampilan duplikat, pena di kertas, Laporkan sebagai, dan templat
summary: Pilih cara BimCraft bekerja sesuai gaya Anda, duplikat tampilan apa pun sebagai salinan sendiri atau tertaut, simpan penimpaan pena di file dan cetak seperti yang ditampilkan atau lewat tabel pena, laporkan elemen sebagai kelas IFC lain, dan mulai proyek dari templat Anda sendiri.
keywords: gaya kerja, duplikat tampilan, duplikat, salin tampilan, tampilan dependen, tampilan tertaut, salinan sendiri, salinan tampilan, penimpaan pena, pena, lebar garis, cetak seperti tampilan, tabel pena, gaya plot, ctb, monokrom, skala abu-abu, laporkan sebagai, kelas ifc, klasifikasi ulang, tipe yang telah ditentukan, model generik, slab sebagai jalan, dinding sebagai panel, atap sebagai rampa, templat proyek, templat, baru dari templat, simpan sebagai templat, standar kantor
from: 231d98b0
---

## Yang akan Anda lakukan

Atur BimCraft sesuai cara Anda bekerja, duplikat tampilan, cetak sesuai harapan Anda, hitung elemen sebagai apa adanya, dan mulai setiap proyek dari templat kantor Anda.

## Pilih gaya kerja

1. Buka {{ui:Pengaturan}} dan tab {{ui:BimCraft}}. Temukan {{ui:Gaya kerja}}.
2. Pilih salah satu:
   - {{ui:Setiap tampilan miliknya sendiri}} (pilihan pertama): tampilan yang diduplikat menyalin anotasinya dan anotasi itu tetap menjadi milik tampilan tersebut; lembar dicetak sesuai tampilan di layar.
   - {{ui:Anotasi dan tabel pena bersama}}: tampilan yang diduplikat berbagi anotasi; pencetakan lewat tabel pena.
3. Di bawah pilihan ada empat hal yang diaturnya. Ubah salah satu saja; gaya itu kemudian tampil sebagai {{ui:Kustom}}.

Gaya kerja disimpan di peramban ini, seperti tata letak ruang kerja. Sebuah templat membawanya ke model baru.

## Duplikat tampilan

1. Di {{ui:Peramban proyek}}, setiap denah lantai, denah plafon, callout, elevasi, dan potongan memiliki tombol {{ui:Duplikat}} (dua lembar).
2. Beri nama salinan dan pilih perilakunya:
   - {{ui:Salinan sendiri}}: drafting, dimensi, pemotongan, elemen tersembunyi, dan pena-nya disalin dan tetap menjadi miliknya. Menyunting salah satu tampilan tidak pernah mengubah yang lain, sehingga tampilan pada lembar yang telah diterbitkan tetap seperti saat diterbitkan.
   - {{ui:Tertaut}}: menampilkan tampilan yang sama dengan satu set anotasi dan pengaturan.
3. Salinan tercantum di bawah {{ui:Tampilan yang diduplikat}}. Klik untuk membukanya; bilah di atas denah menyatakan bahwa itu adalah salinan, dengan {{ui:Naik}} kembali ke tampilannya.
4. Tombol penggeser miliknya membuka pengaturannya: nama, {{ui:Jangkauan tampilan}} (salinan sendiri memiliki miliknya sendiri), {{ui:Jadikan salinan sendiri}} untuk salinan tertaut, dan {{ui:Hapus}}.

Salinan elevasi dan potongan ditempatkan di lembar Anda sendiri seperti tampilan asalnya. Menduplikat adalah satu langkah urungkan, dan salinan disimpan di IFC bersama callout.

## Pena yang disimpan bersama tampilan, dan dicetak sesuai tampilan

1. Aktifkan {{ui:Gambar}} dan pilih {{ui:Pena}}.
2. {{ui:Untuk}} sekarang mencantumkan setiap kategori: dinding, pintu dan jendela, slab, atap, kolom, tangga, furnitur, dan lainnya, serta drafting dan dimensi.
3. {{ui:Terapkan}} menyimpan pena di IFC bersama tampilan yang ditampilkan: denah, denah plafon, callout, atau tampilan yang diduplikat. Pena yang dibuat sebelum 0.9 disimpan di peramban; {{ui:Simpan ini di file}} memindahkannya.
4. Lembar dan PDF menggambar setiap pena seperti yang ditampilkan di layar.

Untuk mencetak lewat tabel pena, atur {{ui:Cetak}} pada baris Pena menjadi {{ui:Melalui tabel pena}}, lalu pilih tabel (warna, monokrom, skala abu-abu) atau {{ui:Sunting tabel pena…}}: setiap warna mendapat warna, tebal, dan screening yang dicetak. Tabel itu adalah file gaya plot CadCraft, sehingga {{ui:Impor…}} menerima tabel yang dibuat di aplikasi CadCraft dan {{ui:Ekspor}} mengembalikan satu tabel. Model menyimpan pilihannya; jika tidak ada, gaya kerja yang menentukan.

## Laporkan elemen sebagai kelas lain

Pelat yang digambar sebagai jalan, dinding yang digunakan sebagai panel, atap yang berbentuk rampa: pertahankan alat yang Anda gunakan untuk menggambarnya dan laporkan sebagai apa adanya.

1. Pilih elemen dan buka {{ui:Properti}}. Buka {{ui:Laporkan sebagai}}.
2. Ketik di kotak pencarian untuk menemukan kelas yang sesuai dengan bentuknya, pilih kelas itu beserta tipe yang telah ditentukannya. Untuk tipe milik Anda sendiri, pilih USERDEFINED dan beri nama.
3. {{ui:Terapkan}} (satu langkah urungkan). {{ui:Hapus}} melaporkannya kembali seperti saat digambar.

Anda tetap menyuntingnya dengan alat yang digunakan untuk menggambarnya. IFC yang disimpan menulisnya sebagai kelas yang dilaporkan, sehingga program lain, perhitungan {{ui:Kuantitas}}, Cari, Warnai menurut, pemeriksaan model, dan {{ui:Masalah}} menghitungnya sebagai kelas itu. Jadwal mengeluarkan dinding yang dilaporkan sebagai panel dari jadwal dinding, dan {{ui:Elemen menurut kelas yang dilaporkan}} mencantumkan semuanya. Ini bekerja pada file IFC4 dan IFC2X3; daftar hanya menawarkan kelas yang didukung oleh versi IFC file tersebut. Pintu, jendela, tangga, ruangan, dan level tetap memakai kelas mereka sendiri.

## Simpan proyek sebagai templat, dan mulai darinya

1. Dengan proyek terbuka, klik {{ui:Simpan sebagai templat}} di samping {{ui:Simpan}}.
2. Beri nama. Centang {{ui:Juga unduh file templat}} untuk membagikannya sebagai file IFC, dan {{ui:Mulai model baru darinya}} untuk menjadikannya bawaan Anda.
3. Templat menyimpan level, templat tampilan dan pengaturan tampilan, tampilan dan callout yang diduplikat, drafting, pena dan tabel pena, tag, famili dan tipe, lembar, ukuran lembar, kepala gambar, dan gaya kerja. Dinding, lantai, pintu, dan semua elemen model lainnya tidak disertakan.
4. Klik {{ui:Bangunan baru}} dan pilih templat itu di bawah {{ui:Mulai dari}}, atau pilih {{ui:File templat…}} untuk templat yang dikirim kepada Anda. Proyek baru mendapat nama sendiri dan identitas proyek sendiri; yang lainnya sama seperti yang ada di templat.

:::note
Templat disimpan di peramban ini. Templat tim yang dibagikan lewat CadCraft Studio belum dibuat: kirim file templat sebagai gantinya.
:::
