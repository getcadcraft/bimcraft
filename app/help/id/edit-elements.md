---
title: Hapus, potong, salin dan tempel elemen bangunan
summary: Pilih dinding, pintu, furnitur, atau apa pun lainnya dalam model IFC; hapus, potong, atau salin dan tempel di tempat yang Anda klik, di tempat yang sama, atau di lantai lain.
keywords: hapus, buang, potong, salin, tempel, duplikat, pindahkan, pilih semua, elemen bangunan, dinding, pintu, jendela, tangga, bukaan, urungkan
from: d9eec37f
---

## Yang akan Anda lakukan

Ubah isi model IFC: buang elemen yang tidak Anda inginkan, salin dinding atau sekumpulan furnitur ke tempat lain, atau pindahkan elemen dengan memotong dan menempelkannya. Setiap perubahan adalah satu langkah yang dapat diurungkan, dan menyimpan akan menulis file baru sehingga file asli Anda tetap seperti semula.

## Langkah-langkah

1. Buka model IFC. Lihat [Buka model IFC dan lihat sekeliling dalam 3D](topic:open-ifc-model).
2. Pilih yang ingin Anda ubah: klik elemen, tahan {{key:Mod}} atau {{key:Shift}} lalu klik untuk memilih lebih banyak, atau tekan {{key:Mod+A}} ({{ui:Lainnya}}, {{ui:Pilih semua}}) untuk memilih setiap elemen yang ditampilkan.
3. Lalu:
   - **Hapus:** tekan {{key:Delete}}, atau {{ui:Lainnya}}, {{ui:Hapus}}.
   - **Salin:** tekan {{key:Mod+C}} atau klik {{ui:Salin}}.
   - **Potong:** tekan {{key:Mod+X}}, atau {{ui:Lainnya}}, {{ui:Potong}}. Elemen dihapus dari tampilan, dan Anda dapat menempelkannya.
4. Untuk menempel, tekan {{key:Mod+V}} atau klik {{ui:Tempel}}. Kotak transparan seukuran yang Anda salin mengikuti penunjuk pada lantai yang dipilih di bilah penempatan. Tekan {{key:R}} untuk memutarnya 90°, lalu klik tempat ia akan diletakkan. Setiap klik menempatkan satu salinan lagi; tekan {{key:Esc}} untuk berhenti.
5. Atau tekan {{key:Mod+Shift+V}} ({{ui:Lainnya}}, {{ui:Tempel di tempat yang sama}}): setelah potong, elemen kembali persis ke tempat semula; setelah salin, salinan diletakkan tepat di sebelah aslinya.
6. Klik {{ui:Simpan sebagai IFC}} untuk mengunduh model yang sudah diubah.

## Apa yang ikut dengan elemen

- **Bagian:** tangga membawa rangkaian anak tangganya, dinding tirai membawa panelnya, dan apa pun yang terdiri dari beberapa bagian ikut semua bagiannya.
- **Bukaan:** dinding membawa bukaan yang dipotong di dalamnya. Menghapus pintu atau jendela juga menghapus bukaan yang diisinya, sehingga dinding kembali tertutup, seperti di program authoring. Menghapus dinding yang digambar di BimCraft juga menghapus pintu dan jendelanya, serta menyambung kembali dinding yang tersisa. Menghapus dinding dari file yang dibuat di tempat lain membiarkan pintu dan jendelanya tetap di tempatnya.
- **Data:** salinan memiliki tipe, material, set properti, dan kuantitas yang sama dengan aslinya, serta GlobalId baru. Mengubah nilai pada salinan nanti tidak memengaruhi aslinya.
- **Item pustaka** mempertahankan data pustakanya; salinan mendapat nomor item bebas berikutnya, dan item yang dipotong lalu ditempel kembali mempertahankan nomornya sendiri.

## Yang akan Anda lihat

- "Dihapus: …" atau "Ditempel: …" di daftar {{ui:Perubahan}}. {{key:Mod+Z}} mengurungkan perubahan terakhir; {{key:Mod+Y}} mengembalikannya lagi.
- Setelah menghapus, baris status menyebutkan berapa banyak bagian dan bukaan yang ikut terhapus.
- Elemen yang ditempel dipilih, sehingga Anda dapat menempel di tempat yang sama lagi untuk membuat satu baris, atau menghapusnya.

## Perlu diketahui

- Salinan memakai geometri yang sama dengan aslinya (IFC memungkinkan elemen berbagi geometri), sehingga ukuran file hanya bertambah sedikit.
- Elemen bangunan ditempel ke model tempat ia disalin, di tab yang sama. Untuk memakai item pustaka yang sudah ditempatkan di model lain, salin satu item per waktu: lihat [Salin, tempel dan duplikat item pustaka](topic:copy-paste).
- Lantai, ruang, bangunan, dan tapak tidak dapat dihapus atau disalin. Pilih elemen di dalamnya saja. Ruang yang digambar di BimCraft berasal dari dinding di sekelilingnya: hapus satu dinding untuk menggabungkan dua ruang.
- Dinding, pintu, dan jendela yang digambar dengan alat dinding, pintu, dan jendela milik BimCraft belum dapat disalin, dipotong, atau diduplikasi; baris status akan menyebutkannya. Gambar ulang elemen tersebut. Menghapus tetap bisa.
- Salin juga menaruh nama dan properti dari yang Anda salin di papan klip sebagai teks, untuk ditempel ke lembar kerja atau surel.

## Kesalahan umum

- **{{ui:Hapus}} berwarna abu-abu.** Tidak ada yang dipilih, atau hanya lantai atau ruang yang dipilih. Arahkan kursor padanya untuk membaca alasannya.
- **Tempel menyebutkan elemen berasal dari model lain.** Anda membuka model lain sejak menyalin elemen tersebut. Buka kembali model pertama dan salin elemen di sana.
- **Salinan yang ditempel berada di lantai lain.** {{ui:Lantai}} pada bilah penempatan menentukan tempatnya; pilih lantai sebelum Anda mengklik.

## Terkait

- [Sembunyikan, isolasi, dan lihat tembus elemen](topic:hide-and-isolate)
- [Tombol dan mouse](topic:keyboard#edit)
