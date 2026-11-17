---
title: Sunting keluarga
summary: Ubah parameter, formula dan pepejal keluarga, tunjukkan bahagian melalui parameter Ya / Tidak, potong dan cantum pepejal, beri penyambung untuk paip dan saluran, dan lihat hasilnya dilukis daripada IFC yang akan disimpan.
keywords: editor keluarga, sunting keluarga, parameter, formula, keterlihatan, ya tidak, pepejal, kotak, ekstrusi, ekstrud, putar, sweep, profil, lengkok, boolean, potong, cantum, pemegang, satah kerja, lakaran, keluarga baharu, penyambung, port, penyambung paip, penyambung saluran, saliran, bekalan air
from: 1ab31c10
---

## Buka editor

Buka keluarga (**Keluarga** dalam pelayar projek, atau {{ui:Build}} › {{ui:Families…}}) dan klik {{ui:Edit the family}}. Untuk bermula dari kosong, klik {{ui:New family}}: beri nama, nyatakan apa ia (pintu, tingkap, perabot, lengkapan atau sesuatu yang lain) dan, untuk pintu atau tingkap, dari keluarga permulaan mana simbol pelan dan pemegangnya datang. Editor dibuka pada keluarga dengan beberapa parameter dan satu pepejal.

Menyunting keluarga permulaan menyimpan perubahan anda dalam model ini sahaja. Model lain mengekalkan keluarga permulaan seperti asalnya.

Tiada apa dalam model berubah sehingga anda klik {{ui:Save the family}}. Editor mempunyai buat asal dan buat semula sendiri (butang anak panah di sebelah nama, atau {{key:Mod+Z}} dan {{key:Mod+Y}}); menyimpan ialah satu langkah dalam buat asal model.

## Parameter

Tab {{ui:Parameters}} menyenaraikan parameter keluarga: nama, jenis dan nilai lalai. Jenisnya: **Panjang** (milimeter), **Sudut** (darjah), **Nombor**, **Nombor bulat**, **Ya / Tidak**, **Pen** (1–16), dan tiga yang memegang perkataan dan bukan nombor: **Teks**, **Bahan** (salah satu bahan projek) dan **Isian** (isian pelan). Perkataan tidak digunakan dalam formula; ia mewarnai pepejal (**Bahan**-nya), mengisi bahagian simbol, atau dicetak sebagai `{Name}` dalam teks simbol. Kotak **Setiap elemen** menjadikan parameter sesuatu yang setiap elemen yang diletakkan tetapkan sendiri dan bukan saizinya.

- **Formula** menjadikan parameter mengikut parameter lain, contohnya `Width / 30` atau `if(Width > 1200, 2, 1)`. Panjang dalam formula ialah milimeter, atau tulis unit: `3'`, `6in`, `50cm`.
- Menamakan semula parameter akan menamakannya semula dalam setiap formula dan medan yang menggunakannya. Parameter yang masih digunakan tidak boleh dialih keluar.
- **Bahan** pepejal mengambil warna bahan projek (atau parameter Bahan), **Ditunjukkan pada** menyembunyikannya pada tahap perincian yang lebih kasar, dan **Ulang** membuat salinan: satu kiraan (nombor atau parameter nombor bulat, 1 hingga 200) dan langkah antara salinan dalam x, y dan z. Pepejal yang diulang ialah deretan papan, bar atau lubang; jika digunakan dalam potongan, salinan dipotong serentak.
- Keluarga pintu atau tingkap juga mendapat dua nama daripada dindingnya: `WallThickness` dan `Face` (1 atau −1, sisi tempat pintu mengayun).

## Pepejal

Tab {{ui:Solids}} menyenaraikan pepejal. Tambah kotak, ekstrusi, putaran atau sweep:

| Pepejal | Apa yang anda tetapkan |
|---|---|
| Kotak | dua sudutnya: x0 hingga x1, y0 hingga y1, z0 hingga z1 |
| Ekstrusi | profil pada satah kerja (pelan, depan atau sisi), kedudukan satah, dan kedalaman |
| Putaran | profil, paksi pada satah, dan sudut sehingga 360° |
| Sweep | laluan titik dan jejari (batang atau rel) |

Setiap nombor boleh menjadi nombor yang ditaip atau ungkapan parameter. Setiap pepejal mempunyai warna dan **Ditunjukkan apabila**: biarkan kosong untuk sentiasa menunjukkannya, atau namakan parameter Ya / Tidak (atau tulis perbandingan seperti `Shelves >= 3`) untuk menunjukkannya hanya ketika itu. Itu ialah parameter keterlihatan.

### Lukis profil

Profil ekstrusi atau putaran dilukis pada satah kerjanya di bawah pratonton:

- Klik pada kertas untuk menambah titik selepas titik yang dipilih.
- Seret titik untuk mengalihkannya. Titik melekat pada grid; tahan {{key:Shift}} untuk meletakkannya secara bebas.
- Klik petak kecil pada segmen untuk menambah titik di situ. {{key:Shift}}+klik padanya untuk menjadikan segmen itu lengkok (klik sekali lagi untuk arah lain, kemudian lurus).
- Klik dua kali pada titik untuk membuangnya.

Titik berongga ditetapkan oleh parameter: ubahnya dalam jadual, bukan dengan menyeret.

## Boolean

Tab {{ui:Booleans}} memotong pepejal kedua daripada yang pertama, atau menyatukannya. Hasil Boolean boleh dipotong atau dicantum semula. Pepejal yang digunakan dalam Boolean hanya dilukis sebagai sebahagian daripadanya.

Apabila pepejal kedua disembunyikan oleh parameter Ya / Tidak, yang pertama dikekalkan seperti asalnya; apabila yang pertama disembunyikan, hasilnya disembunyikan.

## Simbol pelan

Tab {{ui:Plan symbol}} melukis apa yang ditunjukkan pelan untuk keluarga ini dan bukannya potongan pepejalnya: garisan, segi empat tepat, bulatan, lengkok, poligon dan teks, dalam paksi keluarga itu sendiri. Setiap bahagian mempunyai **pen** (1–16, ungkapan atau parameter Pen), **isian** (tiada, pepejal, pepenjuru, bersilang, konkrit, penebatan, tanah, atau parameter Isian), ungkapan **ditunjukkan oleh**, **julat potongan** dalam milimeter di atas tapaknya (dilukis dengan berat penuh apabila potongan pelan berada dalamnya, nipis di bawahnya, putus-putus di atasnya: kabinet di atas potongan ditunjukkan putus-putus), tahap perincian dan ulangan. Teks boleh menamakan parameter sebagai `{Name}`. **Pelan menunjukkan: Potongan pepejal** mengekalkan pelan memotong pepejal manakala simbol kekal dalam keluarga. Program lain membaca simbol sebagai jejak keluarga (garisan dan bentuk; teks kekal dalam BimCraft).

## Keluarga di dalam

Tab {{ui:Families inside}} meletakkan keluarga lain di dalam keluarga ini: kaki dalam meja, pemegang pada pintu. Pilih keluarga, kemudian tentukan di mana ia pergi (x, y, z), berapa jauh ia dipusingkan (hanya putaran suku: 0, 90, 180, 270), bila ia ditunjukkan, dan nilai yang diterimanya, satu setiap baris sebagai `Height = Height - 40`. Menyimpan keluarga dalam akan melukis semula yang ini; keluarga yang dipegang oleh keluarga lain tidak boleh dipadam; keluarga tidak boleh memegang dirinya sendiri, walaupun melalui yang lain, dan sarang berhenti pada empat peringkat.

## Titik panas

Titik panas ialah titik atau tepi yang anda seret untuk menukar parameter. Pada tab {{ui:Hotspots}} tambah satu, pilih paksi ia diseret sepanjangnya dan parameter nombor yang diubahnya, dan tulis kedudukannya dengan ungkapan yang sama seperti pepejal. Dalam pratonton, pilih **Hotspots** di bawah pemegang untuk menyeretnya. Pada elemen yang diletakkan dalam pelan (pilihnya dengan {{ui:Select}}), titik panas x dan y ditunjukkan sebagai grip: seret satu dan elemen mengambil saiz yang meletakkan titik panas di situ, melalui sebarang formula di antaranya; satu Buat asal akan mengembalikannya. Titik panas tidak boleh menukar parameter yang dipacu, Ya / Tidak atau perkataan.

Dalam paparan 3D, titik panas yang sama ditunjukkan sebagai grip pada elemen yang dipilih, dan titik panas atas-bawah (paksi z) juga ditunjukkan di sana, yang tidak dapat dilukis oleh pelan. Pilih elemen, seret grip sepanjang paksinya dan lepaskan: elemen mengambil saiz yang meletakkan titik panas di situ, sebagai satu langkah buat asal. Grip disembunyikan semasa kotak keratan dihidupkan, kerana ia menggunakan grip yang sama.

## Penyambung

Keluarga yang diletakkan di atas lantai (perabot, lengkapan dan lain-lain) mempunyai tab {{ui:Connectors}}: titik tempat paip atau saluran menyambung pada elemen, seperti pada paip dan longkang singki. Klik {{ui:Add a connector}} dan tetapkan:

- **Jenis**: paip atau saluran, dan **Sistem** (air sejuk, saliran kumbahan, udara bekalan…).
- **x**, **y** dan **z**: kedudukannya, dalam paksi keluarga itu sendiri. Seperti nombor pepejal, setiap satu boleh menjadi nombor atau formula parameter, jadi penyambung bergerak mengikut saiz.
- **Arah keluar**: arah paip atau saluran keluar, sepanjang salah satu paksi keluarga (saliran di bawah singki ialah **Down**).
- **Saiz (mm)**: saiz nominal paip (DN) atau diameter saluran bulat.
- **Aliran**: **In** untuk penyambung yang dibekalkan (paip), **Out** untuk yang mengalirkan keluar.

Pratonton melukis setiap penyambung sebagai cincin dengan anak panah ke arah keluar. Pintu dan tingkap tiada penyambung.

Untuk lengkapan paip, pilih yang mana satu ia di bawah **Lengkapan paip** (mangkuk tandas, singki, singki dapur, pancuran, tab dobi). Lengkapan permulaan sudah menyatakannya.

Setiap elemen yang diletakkan daripada keluarga mendapat penyambungnya sebagai port dalam fail IFC, dan ia dibuat semula apabila elemen berubah saiz atau keluarga disimpan. Program yang membaca sistem IFC melihat tempat setiap paip atau saluran patut berada.

## Pratonton dan pemegangnya

Pratonton ialah keluarga yang ditulis sebagai IFC, oleh kod yang sama yang menyimpannya ke dalam model, dan dilukis semula. Apa yang anda lihat ialah apa yang diterima program lain. Di bawahnya, **Saiz ditunjukkan** menetapkan nilai parameter yang digunakan pratonton.

**Pemegang** ialah titik pada pratonton: **Saiz** menunjukkan pemegang untuk Width, Depth dan Height; **Pepejal yang dipilih** menunjukkan satu pada setiap muka pepejal yang anda pilih. Seret pemegang:

- pada muka yang ditetapkan oleh parameter, saiz yang ditunjukkan berubah (formula keluarga dikekalkan);
- pada muka yang ditetapkan oleh nombor yang ditaip, nombor itu berubah.

## Simpan

{{ui:Save the family}} menyemak keluarga, kemudian melukis semula setiap saizinya dan mencipta semula setiap elemennya, sebagai satu langkah yang boleh anda buat asal. Jika saiz tidak dapat dilukis dengan perubahan itu (contohnya pepejal tiada lebar pada saiz itu), tiada apa disimpan dan editor menyatakan saiz yang mana.

Jika orang lain menyimpan keluarga yang sama semasa editor anda terbuka (dalam sesi Live TeamWork, atau dalam tetingkap lain), {{ui:Save the family}} menolak dan menyatakannya, bukan menggantikan perubahan mereka dengan perubahan anda. Tutup editor, buka semula keluarga untuk melihat perubahan mereka, dan buat semula perubahan anda.

:::note
Geometri disimpan sebagai pepejal IFC sendiri: ekstrusi, putaran, cakera sweep, dan hasil Boolean. Tiada apa yang ditukar kepada senarai segi tiga, jadi fail kekal kecil dan program lain boleh membaca bentuk sebagai bentuk. Profil dengan lengkok disimpan dengan lengkok dalam IFC4; IFC2X3 tidak mempunyai segmen lengkok dalam profil, jadi di situ lengkok disimpan sebagai potongan lurus pendek.
:::

Lihat juga [Keluarga dan saiznya](topic:families).
