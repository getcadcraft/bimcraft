---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang sesuai dengan cara kerja Anda, beri tombol sendiri pada perintah apa pun, pindahkan perintah antarmenu, dan atur apa yang dilakukan roda serta tiap tombol mouse.
keywords: gaya menu, menu, bilah menu, ribbon, baris perintah, pintasan keyboard, hotkey, tombol, sesuaikan, ubah tombol, rebind, mouse, roda, balik, arah zoom, tombol tengah, geser, orbit, tombol dua huruf, ekspor, impor, beralih, familiar
from: a424e836
---

Perintah BimCraft sama saja apa pun cara Anda memanggilnya. **Gaya menu** hanya menentukan di mana perintah itu muncul di layar, apa namanya di sana, dan tombol mana yang menjalankannya, sehingga Anda bisa tetap memakai kebiasaan yang sudah ada. Pilih satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahannya langsung berlaku, dan peramban ini mengingatnya.

## Lima gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:CadCraft}} | Bilah alat dan tombol milik BimCraft sendiri ({{key:W}} dinding, {{key:D}} pintu, {{key:N}} jendela, {{key:X}} potongan, {{key:F}} paskan). Titik awal. |
| {{ui:Desain rumah}} | Bilah menu (File, Edit, Build, Pustaka, 3D, CAD, Alat, Tampilan) di atas deretan alat bangunan, seperti tata letak program desain rumah tinggal. Tombol tunggal yang sama, ditambah {{key:Mod+L}} untuk pustaka, {{key:F9}} untuk tampilan 3D, {{key:F10}} untuk denah, dan {{key:F11}} untuk keduanya. |
| {{ui:Ribbon BIM}} | Tab berisi tombol besar (Arsitektur, Sisipkan, Anotasi, Ubah, Tampilan, Output) dengan menu File dan tombol cepat di sebelah kanan. Tombol dua huruf: {{key:W}} lalu {{key:A}} untuk dinding, {{key:D}} lalu {{key:R}} untuk pintu, {{key:W}} lalu {{key:N}} untuk jendela, {{key:S}} lalu {{key:C}} untuk potongan, {{key:Z}} lalu {{key:F}} untuk paskan. Tombol tengah menggeser; {{key:Shift}} dan tombol tengah melakukan orbit. |
| {{ui:Drafting klasik}} | Ribbon kecil dan baris perintah, untuk orang yang mengetik perintah: WALL, DOOR, WINDOW, ROOF, U (urungkan), ZOOM, SECTION, PLOT, INSERT, HELP. Mulai mengetik di mana saja dan huruf-hurufnya masuk ke baris perintah; {{key:Enter}} menjalankan, {{key:Enter}} tanpa isian mengulang perintah terakhir, {{key:Esc}} menghapusnya. |
| {{ui:Penampil}} | Untuk membuka dan memeriksa model, bukan untuk menggambarnya: menu {{ui:File}}, {{ui:Tampilan}}, {{ui:Tampilkan}}, {{ui:Periksa}} dan {{ui:Edit}} di atas deretan alat tampilan (paskan, atas, depan, samping, potongan, ukur, sembunyikan, isolasi, tembus pandang, tampilkan semua, jalan). Alat bangunan menunggu di menu {{ui:Model}} di ujung. Tombol yang sama dengan gaya BimCraft sendiri. |

Menu dan ribbon muncul setelah model dibuka atau Anda memulai bangunan baru; sebelum itu, panel di sebelah kiri membuka file dan memulai bangunan.

:::tip
Tombol yang termasuk tata letak BimCraft sendiri tetapi bukan milik gaya yang Anda pilih tidak melakukan apa-apa, dan baris status memberi tahu ke mana perintahnya pergi ("Di ribbon BIM, Section adalah SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan tombol panah selalu mempertahankan artinya, dan alat yang sedang berjalan mempertahankan tombolnya sendiri: {{key:R}} dan {{key:Tab}} saat menempatkan, {{key:W}} {{key:A}} {{key:S}} {{key:D}} saat berjalan, {{key:H}} dengan alat pintu dan jendela, serta angka saat Anda mengetik panjang.
:::

## Buat milik Anda

1. Pilih gaya yang paling dekat dengan yang Anda inginkan, lalu klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Tombol dan menu}}, cari perintah (kotak pencarian membantu). Klik {{ui:Tambah tombol}} dan tekan tombolnya, atau dua tombol berurutan untuk tombol dua huruf. Klik sebuah tombol untuk melepasnya.
3. Dengan bilah menu atau ribbon, {{ui:Letaknya}} memindahkan perintah ke menu atau panel lain, atau ke {{ui:Hanya tombol}}.
4. Pada {{ui:Mouse}}, atur roda, tombol yang menggeser denah, dan apa yang dilakukan tiap tombol di tampilan 3D.
5. Beri nama, lalu klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan milik Anda sendiri ("Desain rumah saya"); gaya bawaan tidak pernah berubah. Tombol yang diberikan kepada dua perintah, atau yang akan berjalan sebelum tombol dua huruf sempat diketik, ditampilkan merah dan harus diperbaiki sebelum Anda dapat menyimpan.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (titik awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan trackpad selalu memperbesar mengikuti arah gerak jari Anda.
- **Geser denah dan gambar dengan**: tombol kiri, tengah, atau kanan mana pun. {{key:Space}} lalu seret juga menggeser; seret dengan tombol kiri hanya menggeser di tempat klik tidak akan memilih atau menggambar.
- **Seret di tampilan 3D**: {{ui:Milik tiap tampilan}} mempertahankan tombol BimCraft (kiri orbit, kanan geser). Atau atur tiap tombol ke orbit, geser, zoom, atau tidak ada; {{key:Shift}} dengan tombol menukar orbit dan geser. Klik tanpa seret tetap memilih.

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang sedang dipakai sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau dari rekan kerja. File yang diimpor hanya dapat mengarah ke perintah BimCraft sendiri: apa pun yang lain di dalamnya (perintah yang tidak ada di versi ini, tombol yang tidak berfungsi di sini) dibiarkan keluar dan dihitung di baris status. {{ui:Hapus gaya ini}} menghapus salah satu gaya milik Anda.

:::note
Pengaturan ini tetap tersimpan di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dalam gaya yang cocok (bilah alat sendiri, bilah menu, ribbon, atau Drafting klasik; {{ui:Penampil}} hanya milik BimCraft dan tidak punya padanan di tempat lain), dengan perubahan yang Anda buat di tiap aplikasi; aplikasi tanpa gaya yang cocok mempertahankan gayanya sendiri. Memilih gaya lain di satu aplikasi hanya mengubah aplikasi itu.
:::

Terkait: [Keyboard dan mouse](topic:keyboard) · [Pengaturan BimCraft](topic:settings) · [Dari program BIM dan gambar lain](topic:coming-from)
