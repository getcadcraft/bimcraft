---
title: Sunting family
summary: Ubah parameter, rumus, dan solid family, tampilkan bagian dengan parameter Yes / No, potong dan gabungkan solid, beri konektor untuk pipa dan duct, dan lihat hasilnya digambar dari IFC yang akan disimpan.
keywords: editor family, sunting family, parameter, parameter, rumus, rumus, visibilitas, ya tidak, solid, solid, box, ekstrusi, extrude, revolusi, sweep, profil, busur, boolean, boolean, potong, gabung, selisih, union, handle, handle, bidang kerja, sketsa, family baru, konektor, konektor, port, port, konektor pipa, konektor duct, drain, pasokan air
from: 1ab31c10
---

## Buka editor

Buka sebuah family (grup **Family** di penjelajah proyek, atau {{ui:Build}} › {{ui:Families…}}) lalu klik {{ui:Edit the family}}. Untuk memulai dari nol, klik {{ui:New family}}: beri nama, sebutkan apa bbendanya (pintu, jendela, furnitur, perlengkapan, atau lainnya) dan, untuk pintu atau jendela, dari starter mana simbol denah dan handle-nya berasal. Editor terbuka pada family dengan beberapa parameter dan satu solid.

Menyunting family starter menyimpan perubahan Anda hanya dalam model ini. Model lain tetap menggunakan starter seperti semula.

Tidak ada yang berubah di model sampai Anda mengklik {{ui:Save the family}}. Editor memiliki urung dan ulang sendiri (tombol panah di samping nama, atau {{key:Mod+Z}} dan {{key:Mod+Y}}); penyimpanan adalah satu langkah dalam urung model.

## Parameter

Tab {{ui:Parameters}} mendaftar parameter family: nama, jenis, dan default. Jenisnya: **Length** (milimeter), **Angle** (derajat), **Number**, **Whole number**, **Yes / No**, **Pen** (1–16), dan tiga jenis yang menyimpan kata, bukan angka: **Text**, **Material** (salah satu material proyek), dan **Fill** (isian denah). Kata tidak dipakai dalam rumus; kata mewarnai solid (**Material**-nya), mengisi bagian simbol, atau dicetak sebagai `{Name}` dalam teks simbol. Kotak **Per element** menjadikan parameter sesuatu yang ditetapkan sendiri oleh setiap elemen yang ditempatkan, bukan oleh ukurannya.

- **Rumus** membuat parameter mengikuti parameter lain, misalnya `Width / 30` atau `if(Width > 1200, 2, 1)`. Panjang dalam rumus adalah milimeter, atau tulis satuan: `3'`, `6in`, `50cm`.
- Mengganti nama parameter akan menggantinya di setiap rumus dan kolom yang memakainya. Parameter yang masih dipakai tidak dapat dihapus.
- **Material** solid mengambil warna material proyek (atau parameter Material), **Shown at** menyembunyikannya pada tingkat detail yang lebih kasar, dan **Repeat** membuat salinan: jumlah (angka atau parameter bilangan bulat, 1 sampai 200) dan langkah di antara salinan pada x, y, dan z. Solid yang diulang adalah deretan papan, batang, atau lubang; jika dipakai dalam potongan, salinan dipotong bersamaan.
- Pintu atau family jendela juga mendapat dua nama dari dindingnya: `WallThickness` dan `Face` (1 atau −1, sisi tempat pintu berayun).

## Solid

Tab {{ui:Solids}} mendaftar solid. Tambahkan box, ekstrusi, revolusi, atau sweep:

| Solid | Yang Anda atur |
|---|---|
| Box | dua sudutnya: x0 ke x1, y0 ke y1, z0 ke z1 |
| Ekstrusi | sebuah profil pada bidang kerja (denah, depan, atau samping), di mana bidangnya, dan kedalamannya |
| Revolusi | sebuah profil, sumbu pada bidang, dan sudut hingga 360° |
| Sweep | jalur titik dan jari-jari (batang atau rel) |

Setiap angka bisa berupa angka yang diketik atau ekspresi dari parameter. Setiap solid memiliki warna dan **Shown when**: biarkan kosong untuk selalu menampilkannya, atau sebutkan parameter Yes / No (atau tulis perbandingan seperti `Shelves >= 3`) untuk menampilkannya hanya saat itu. Ini disebut parameter visibilitas.

### Menggambar profil

Profil ekstrusi atau revolusi digambar pada bidang kerjanya di bawah pratinjau:

- Klik pada kertas untuk menambah titik setelah titik yang dipilih.
- Seret titik untuk memindahkannya. Titik menempel ke grid; tahan {{key:Shift}} untuk menempatkannya bebas.
- Klik kotak kecil pada segmen untuk menambah titik di sana. {{key:Shift}}+klik pada kotak itu untuk menjadikan segmen tersebut busur (klik lagi untuk arah sebaliknya, lalu lurus).
- Klik dua kali titik untuk menghapusnya.

Titik berlubang ditetapkan oleh parameter: ubah di tabel, bukan dengan menyeret.

## Boolean

Tab {{ui:Booleans}} memotong solid kedua dari yang pertama, atau menggabungkannya. Hasil Boolean dapat dipotong atau digabung lagi. Solid yang dipakai dalam Boolean hanya digambar sebagai bagian darinya.

Jika solid kedua disembunyikan oleh parameter Yes / No-nya, yang pertama tetap seperti semula; jika yang pertama disembunyikan, hasilnya disembunyikan.

## Simbol denah

Tab {{ui:Plan symbol}} menggambar apa yang ditampilkan denah untuk family ini, sebagai ganti potongan solidnya: garis, persegi panjang, lingkaran, busur, poligon, dan teks, pada sumbu family itu sendiri. Setiap bagian memiliki **pen** (1–16, ekspresi atau parameter Pen), **fill** (none, solid, diagonal, crossed, concrete, insulation, earth, atau parameter Fill), ekspresi **shown by**, **cut range** dalam milimeter di atas dasarnya (digambar penuh jika potongan denah berada di dalamnya, tipis jika di bawahnya, putus-putus jika di atasnya: lemari di atas potongan tampak putus-putus), tingkat detail, dan pengulangan. Teks dapat menyebut parameter sebagai `{Name}`. **The plan shows: The cut of the solids** membuat denah tetap memotong solid sementara simbolnya tetap berada di family. Program lain membaca simbol sebagai jejak family (garis dan bentuk; teks tetap di BimCraft).

## Family di dalamnya

Tab {{ui:Families inside}} menempatkan family lain di dalam family ini: kaki pada meja, handle pada pintu. Pilih family, lalu tentukan tempatnya (x, y, z), seberapa jauh ia diputar (hanya putaran seperempat: 0, 90, 180, 270), kapan ia ditampilkan, dan nilai yang diterimanya, satu per baris sebagai `Height = Height - 40`. Menyimpan family dalam akan menggambar ulang family ini; family yang dimiliki family lain tidak dapat dihapus; family tidak dapat memuat dirinya sendiri, bahkan melalui family lain, dan persarangan berhenti pada empat tingkat.

## Hotspot

Hotspot adalah titik atau tepi yang Anda seret untuk mengubah parameter. Di tab {{ui:Hotspots}} tambahkan satu, pilih sumbu tempat ia diseret dan parameter angka yang diubahnya, lalu tulis posisinya dengan ekspresi yang sama seperti pada solid. Di pratinjau, pilih **Hotspots** di bawah handle untuk menyeretnya. Pada elemen yang sudah ditempatkan di denah (pilih dengan {{ui:Select}}), hotspot sumbu x dan y tampil sebagai grip: seret salah satunya dan elemen mengambil ukuran yang meletakkan hotspot di sana, melalui rumus apa pun di antaranya; satu Urungkan mengembalikannya. Hotspot tidak dapat mengubah parameter yang digerakkan, Yes / No, atau kata.

Di tampilan 3D, hotspot yang sama tampil sebagai grip pada elemen yang dipilih, dan hotspot naik-turun (sumbu z) juga tampil di sana, yang tidak dapat digambar oleh denah. Pilih elemennya, seret grip sepanjang sumbunya lalu lepas: elemen mengambil ukuran yang meletakkan hotspot di sana, sebagai satu langkah urung. Grip disembunyikan saat kotak potongan aktif, karena keduanya memakai grip yang sama.

## Konektor

Family yang ditempatkan di lantai (furnitur, perlengkapan, dan lainnya) memiliki tab {{ui:Connectors}}: titik tempat pipa atau duct menyambung ke elemen, seperti keran dan drain pada wastafel. Klik {{ui:Add a connector}} dan atur:

- **Kind**: pipe atau duct, dan **System**-nya (air dingin, drainase saniter, udara suplai…).
- **x**, **y**, dan **z**: lokasinya, pada sumbu family itu sendiri. Seperti angka solid, masing-masing dapat berupa angka atau rumus dari parameter, sehingga konektor ikut bergerak mengikuti ukuran.
- **Way out**: arah pipa atau duct keluar darinya, sepanjang salah satu sumbu family (drain di bawah wastafel adalah **Down**).
- **Size (mm)**: ukuran nominal pipa (DN) atau diameter duct bulat.
- **Flow**: **In** untuk konektor yang dialiri (keran), **Out** untuk yang mengalirkan keluar (drain).

Pratinjau menggambar setiap konektor sebagai cincin dengan panah ke arah keluarnya. Pintu dan jendela tidak memiliki konektor.

Untuk perlengkapan plambing, pilih jenisnya di bawah **Plumbing fixture** (kloset, wastafel, bak dapur, shower, bak cuci). Starter perlengkapan sudah menyatakannya.

Setiap elemen yang ditempatkan dari family mendapat konektornya sebagai port di file IFC, dan konektor itu dibuat ulang saat elemen berubah ukuran atau saat family disimpan. Program yang membaca sistem IFC melihat tempat setiap pipa atau duct seharusnya.

## Pratinjau dan handle-nya

Pratinjau adalah family yang ditulis sebagai IFC, oleh kode yang sama yang menyimpannya ke model, lalu digambar kembali. Yang Anda lihat adalah yang diterima program lain. Di bawahnya, **Size shown** menetapkan nilai parameter yang dipakai pratinjau.

**Handle** adalah titik di pratinjau: **The size** menampilkan handle untuk Width, Depth, dan Height; **The solid picked** menampilkan satu handle pada setiap muka solid yang Anda pilih. Seret handle:

- pada muka yang ditetapkan oleh parameter, ukuran yang ditampilkan berubah (rumus family tetap dipertahankan);
- pada muka yang ditetapkan oleh angka yang diketik, angka itu yang berubah.

## Menyimpan

{{ui:Save the family}} memeriksa family, lalu menggambar setiap ukurannya kembali dan membuat setiap elemennya kembali, sebagai satu langkah yang dapat Anda urungkan. Jika sebuah ukuran tidak dapat digambar dengan perubahan itu (misalnya sebuah solid tidak akan punya lebar pada ukuran tersebut), tidak ada yang disimpan dan editor menyebutkan ukuran mana.

Jika orang lain menyimpan family yang sama saat editor Anda terbuka (dalam sesi Live TeamWork, atau di jendela lain), {{ui:Save the family}} menolak dan menyatakannya, alih-alih menimpa perubahan mereka dengan perubahan Anda. Tutup editor, buka kembali family untuk melihat perubahan mereka, lalu buat perubahan Anda lagi.

:::note
Geometri disimpan sebagai solid IFC itu sendiri: ekstrusi, revolusi, cakram sweep, dan hasil Boolean. Tidak ada yang diubah menjadi daftar segitiga, sehingga file tetap kecil dan program lain dapat membaca bentuknya sebagai bentuk. Profil dengan busur disimpan dengan busur di IFC4; IFC2X3 tidak memiliki segmen busur dalam profil, sehingga di sana busur disimpan sebagai potongan lurus pendek.
:::

Lihat juga [Family dan ukurannya](topic:families).
