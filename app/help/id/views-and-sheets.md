---
title: Tampilan, rentang tampilan, dan lembar Anda sendiri
summary: Temukan setiap denah, elevasi, potongan, tampilan 3D, jadwal, dan lembar di peramban proyek; atur bagaimana setiap denah dipotong dan apa yang ditampilkannya; buat callout; gambar garis dan hatch dalam satu tampilan; simpan pengaturan dalam templat tampilan; dan susun lembar milik Anda sendiri.
keywords: callout, tampilan callout, tampilan detail, denah diperbesar, drafting, garis detail, garis drafting, hatch, area hatch, area isian, pola isian, denah plafon terpantul, rcp, denah plafon, grid plafon, armatur lampu, peramban proyek, tampilan, rentang tampilan, crop, area crop, tampilan crop, skala tampilan, underlay, tampilkan level lain, halftone, bidang potong, tinggi potong, atas, bawah, kedalaman tampilan, visibilitas, kategori, sembunyikan di tampilan, templat tampilan, templat, lembar, lembar, kepala gambar, viewport, skala, susun lembar, layout, pdf, pengaturan tampilan denah, peramban
from: ee1d5afe
---

## Yang akan Anda lakukan

Bekerja seperti cara proyek BIM disusun: setiap tampilan dalam satu daftar, setiap denah dipotong di tempat yang Anda inginkan, pengaturan yang sama untuk beberapa denah lewat templat, dan lembar yang Anda susun sendiri.

## Peramban proyek

1. Aktifkan {{ui:Gambar}}. Panel kiri memiliki {{ui:Peramban proyek}} di bawah model.
2. Ia mencantumkan:
   - **Denah lantai**: setiap level. Klik satu untuk melihat denahnya. Tombol penggeser di sebelahnya mengatur rentang tampilannya (lihat di bawah). Denah yang mengikuti templat menampilkan nama templatnya.
   - **Denah plafon**: denah plafon terpantul setiap level (lihat di bawah).
   - **Callout**: setiap callout beserta tampilan tempat ia digambar, dan {{ui:Callout baru}}. **Hilang** mencantumkan callout yang tampilannya sudah tidak ada.
   - **Elevasi** dan **Potongan**: keempat sisi dan setiap garis potongan. Klik salah satu untuk membuka set gambar tempat ia digambar.
   - **Tampilan 3D**: tampilan yang Anda simpan dengan {{ui:Tampilan}}.
   - **Jadwal**: klik satu untuk menampilkannya di bawah denah.
   - **Lembar**: lembar yang Anda buat, {{ui:Lembar baru}}, dan {{ui:Set gambar…}} untuk seluruh set yang dibuat dari model.
   - **Templat tampilan**, dengan {{ui:Template baru}}, dan **Tautan** (model tertaut).

## Atur rentang tampilan denah

1. Klik tombol penggeser di sebelah level di **Denah lantai**.
2. Atur tinggi, di atas level itu:
   - **Potong pada**: tempat denah memotong dinding, pintu, dan jendela (1200 mm, sekitar 4 ft, kecuali Anda mengubahnya).
   - **Atas**: benda di atas potongan dan di bawah bagian atas digambar putus-putus (lemari tinggi, balok). Biarkan kosong untuk tinggi level.
   - **Bawah** dan **Kedalaman di bawah Bawah**: benda yang lebih rendah dari potongan digambar dengan garis tipis sampai ke bawah, dan sejauh itu di bawahnya.
3. Di bawah **Ditampilkan dalam denah ini**, hapus centang untuk hal yang tidak ingin disertakan denah ini: furnitur, ruang, kolom, dan sebagainya.
4. Untuk menyembunyikan elemen tunggal: pilih di denah atau tampilan 3D, buka dialog, lalu klik {{ui:Sembunyikan yang dipilih di sini}}. {{ui:Tampilkan semuanya}} mengembalikannya.
5. Klik {{ui:Gunakan pengaturan ini}}.

Denah langsung dipotong ulang, dan set gambar serta lembar Anda mengikutinya. Irisan awan titik juga mengikuti tinggi potong.

## Pangkas denah, beri skala, tampilkan level lain di bawahnya

Ketiganya ada di dialog yang sama (tombol penggeser di sebelah level):

- **Skala**: skala tempat denah dicetak ({{ui:Cetak}} di bilah denah) dan ditempatkan di lembar. **Paskan** memilih skala standar terbesar yang muat.
- **Area crop**: klik {{ui:Gambar di denah…}}, lalu klik satu sudut dan sudut seberangnya di denah ({{key:Esc}} untuk berhenti). Denah di luar area ditutupi di layar, dan Anda tetap dapat bekerja di sana; saat dicetak, di lembar dan di set gambar, denah hanya menampilkan apa yang ada di dalam area. {{ui:Hapus}} menghilangkan crop. {{ui:Paskan}} memaskan crop.
- **Underlay**: pilih level lain. Dinding, elemen yang dipotong, pintu, dan jendelanya digambar redup di bawah denah ini, untuk menyelaraskan dengan level di bawah atau di atasnya. Anda tidak dapat memilihnya di sini, dan saat dicetak berwarna abu-abu muda.

Templat tampilan membawa skala bersama tinggi dan kategori. Area crop dan underlay selalu menjadi milik satu denah itu.

## Denah plafon sebuah level

Setiap level memiliki denah plafon terpantul di sebelah denah lantainya: denah yang dilihat dari bawah, untuk menata plafon dan apa yang tergantung darinya.

1. Klik level di bawah **Denah plafon** di peramban, atau pilih {{ui:Denah plafon}} di sebelah level pada bilah denah.
2. Dinding dipotong pada 2300 mm (sekitar 7'-6"). Yang berada di atas potongan itu dan di bawah tinggi level digambar: plafon dengan grid dan tag tinggi (`CLG 2438`), lampu, balok. Pintu, jendela, dan yang berada di bawah potongan tidak ditampilkan.
3. Untuk membuat plafon, gunakan {{ui:Ceiling}} seperti di denah lantai, lalu pilih plafon itu dan pilih **Pola** di Properti. Lihat [Ruang, lantai, plafon, dan atap](topic:floors-and-roofs).
4. Untuk menggantung lampu darinya, tempatkan item dari pustaka saat denah plafon ditampilkan: item masuk ke **Di plafon**. Lihat [Tempatkan peralatan dan furnitur dari pustaka](topic:place-from-library).
5. Penggeser di sebelah denah plafon mengatur potongan dan tingginya, skala, kategori, area crop, dan underlay, seperti pada denah lantai. Denah plafon tidak menerima templat tampilan.

Denah ini digambar dengan arah yang sama dengan denah lantai (denah terpantul, bukan bayangan cermin). Plafon yang lebih rendah dari potongan tidak digambar: turunkan potongan untuk denah plafon level itu. Denah plafon masuk ke lembar Anda seperti denah; set gambar tidak menambahkannya dengan sendirinya.

## Buat callout

Callout menampilkan sebagian denah lebih besar, pada skalanya sendiri, sebagai tampilan tersendiri: dapur, tangga, sudut dinding.

1. Tampilkan denah, denah plafon, atau callout tempat ia berada.
2. Pilih {{ui:Anotasi}} › {{ui:Callout}} di bilah denah (atau {{ui:Callout baru}} di peramban), lalu klik satu sudut area dan sudut seberangnya. {{key:Esc}} untuk berhenti.
3. Callout dibuat pada 1:20 (1/2" = 1'-0" dalam kaki dan inci). Persegi panjangnya dan tag bulat digambar di denah.
4. Klik tag dengan {{ui:Pilih}}, atau callout di peramban, untuk membukanya: denah hanya menampilkan area itu, pada skala callout. Bilah menampilkan {{ui:Callout:}} dan namanya; {{ui:Naik}} kembali ke tampilan tempat ia digambar.
5. Penggeser di sebelahnya (di peramban atau di bilah) mengganti nama, mengubah skalanya, menggambar ulang persegi panjangnya, atau menghapusnya.

Callout menampilkan apa yang ditampilkan tampilannya: potongan yang sama, kategori yang sama, plafon dari denah plafon. Callout dari callout bekerja dengan cara yang sama. Tempatkan callout di lembar seperti denah; tag-nya kemudian menyebutkan letaknya (`1 / A-501`: tampilan pertama di lembar A-501). {{ui:Cetak}} pada callout hanya mencetak area itu pada skalanya.

Menghapus callout juga menghapus callout yang digambar di dalamnya, serta garis dan hatch yang digambar di dalamnya (Anda ditanya dulu). Jika level tempat callout digambar dihapus, callout tetap berada di bawah **Hilang** sampai Anda menghapusnya, dan lembar tempat ia berada melaporkannya sebagai hilang.

## Gambar garis dan hatch dalam satu tampilan

Drafting adalah pekerjaan 2D yang hanya milik satu tampilan: catatan dengan garis, area hatch beton atau tanah, area isian. Ia tidak pernah ada di tampilan 3D atau di denah lain.

1. Tampilkan denah lantai, denah plafon, atau callout tempat Anda akan menggambar.
2. Pilih dari {{ui:Anotasi}} di bilah denah:
   - {{ui:Baris}}: klik tempat ia mulai dan tempat ia berakhir. Garis berikutnya mulai di tempat garis terakhir berakhir; {{key:Enter}} memulai dari awal.
   - {{ui:Polyline}}: klik titik-titiknya; {{key:Enter}} atau klik dua kali mengakhirinya, dan klik pada titik pertama menutupnya.
   - {{ui:Persegi panjang}}: dua sudut yang berseberangan.
   - {{ui:Area hatch}}: pilih **Pola** (Solid, Diagonal, Cross-hatch, Concrete, Insulation, Earth) dan skalanya di bilah, lalu klik sudut-sudutnya; {{key:Enter}}, klik dua kali, atau klik pada sudut pertama menutupnya. Dengan {{ui:Isi ruang}} dicentang, satu klik di dalam ruang akan meng-hatch garis tepinya.
3. Titik menempel seperti pada dinding; {{key:Shift}} menjaga garis tetap tegak lurus, dan Anda dapat mengetik panjang seperti untuk dinding. {{key:Backspace}} membatalkan titik terakhir.

Pilih garis atau hatch dengan {{ui:Pilih}} di denah. Properti mengubah pola dan skala hatch, serta memiliki {{ui:Pindahkan…}} (klik titik asal, lalu tempat tujuannya). {{key:Delete}} menghapusnya. Setiap garis, hatch, dan perubahan adalah satu langkah.

Garis dan hatch dicetak bersama denah, masuk ke lembar Anda bersamanya, dan ada di set gambar. Hapus centang **Anotasi** di rentang tampilan untuk tidak menyertakannya di tampilan itu.

## Simpan pengaturan dalam templat tampilan

1. Klik {{ui:Template baru}} di peramban, atau {{ui:Simpan sebagai template…}} di rentang tampilan sebuah denah (denah itu kemudian menggunakannya).
2. Beri nama, atur tinggi dan kategori, lalu klik {{ui:Simpan template}}.
3. Di rentang tampilan denah mana pun, pilih templat itu. Denah mengambil tinggi dan kategorinya; ubah templat untuk mengubah setiap denah yang menggunakannya. Elemen yang Anda sembunyikan satu per satu tetap tersembunyi di denahnya sendiri.
4. Klik templat di peramban untuk mengubah, mengganti nama, atau menghapusnya. Menghapus templat membuat denahnya mempertahankan pengaturannya sendiri.

## Susun lembar milik Anda sendiri

1. Klik {{ui:Lembar baru}}. Ketik nomor dan judulnya, lalu pilih kertasnya.
2. Klik {{ui:Tambahkan}} di sebelah denah, denah plafon, callout, elevasi, potongan, atau jadwal. Ia masuk di tengah lembar.
3. Seret ke tempat yang diinginkan. Dengan item itu dipilih, pilih **Skala**, atau biarkan pada skala denah itu (jika denah punya skala), atau skala yang muat di sepertiga lembar. {{ui:Keluarkan dari lembar}} menghapusnya.
4. Klik {{ui:Simpan lembar}}. Ia dicantumkan di bawah **Lembar**; klik untuk mengubahnya nanti.
5. {{ui:Unduh sebagai PDF}} menyimpan lembar itu sebagai satu halaman.

## Yang akan Anda lihat

- Denah dipotong pada tinggi Anda, dengan yang di atas potongan digambar putus-putus dan yang Anda hapus tidak ditampilkan.
- Denah yang dipangkas ditutupi di luar areanya di layar dan dipotong sesuai area itu di kertas, pada skala yang Anda berikan.
- Denah plafon dengan grid plafon dan tag tinggi, serta lampu di plafon.
- Callout dengan persegi panjang dan tag di denah, masing-masing terbuka pada skalanya sendiri.
- Garis dan hatch hanya ada di tampilan tempat Anda menggambarnya.
- Lembar Anda digambar ulang dari model setiap kali Anda membukanya, sehingga selalu sesuai dengan model. Tampilan yang level atau garis potongannya dihapus dilaporkan, tidak digambar.
- Setiap perubahan di sini adalah satu langkah: {{key:Mod+Z}} mengurungkannya.

:::note
Semua ini disimpan dalam file IFC sebagai set properti yang dibiarkan program lain: rentang tampilan dan denah plafon setiap level pada level itu, serta templat, callout, dan lembar Anda pada proyek. Garis dan hatch adalah anotasi IFC di levelnya, sehingga program lain melihatnya sebagai kurva 2D dan area hatch (gambar mereka sendiri untuk setiap pola), meskipun tidak tahu tampilan mana yang menjadi miliknya.
:::

:::tip
Program BIM lain menyebut potongan itu rentang tampilan atau bidang potong, templat sebagai templat tampilan atau pengaturan tampilan, garis drafting sebagai garis detail, dan area hatch sebagai area isian. Idenya sama; pengaturan tampilan tidak ikut terbawa ke program tersebut.
:::
