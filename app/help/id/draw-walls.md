---
title: Gambar dinding
summary: Gambar dinding pada denah sebuah level dengan mengklik sudutnya atau mengetik panjangnya; sudut tersambung dengan sendirinya, dan dinding disimpan sebagai IFC.
keywords: melengkung, busur, garis lokasi, justifikasi, dinding, gambar, denah, denah lantai, ruang, sudut, sambung, tipe dinding, 2x6, 2x4, cmu, beton, tinggi, level, lantai, panjang yang diketik, ortho, snap
from: 8269cd4b
---

## Yang akan Anda lakukan

Gambar dinding bangunan pada denah setiap level. Klik tempat dinding mulai, lalu setiap sudut; BimCraft menyambung sudut-sudut untuk Anda, memberi setiap dinding lapisannya (pelapis luar, papan pelapis, rangka, drywall …), dan memanjangkannya sampai ke level di atasnya. Tampilan 3D menampilkan dinding saat Anda menggambar.

## Buka denah

1. Mulai bangunan baru ([Mulai bangunan baru](topic:start-a-new-building)) atau buka model IFC.
2. Klik {{ui:Draw}} di bilah alat. Bangunan baru terbuka dengan {{ui:Draw}} sudah aktif.
3. Denah sebuah level tampil di sebelah kiri dan tampilan 3D di sebelah kanan. Pilih level di daftar di atas denah, atau dengan tombol bulat di sebelahnya pada panel **Level**.
4. {{ui:Plan}}, {{ui:Split}} dan {{ui:3D}} adalah alat di baris {{ui:View}} pada bilah alat (perintah PLAN, SPLIT dan tombol-tombolnya tetap berfungsi seperti sebelumnya). Gunakan {{ui:Plan}} untuk denah saja, {{ui:Split}} untuk keduanya, {{ui:3D}} untuk menutup denah. Saat jendela sempit (atau ukuran antarmuka besar), {{ui:Split}} menempatkan denah di atas tampilan 3D, bukan di sampingnya.

Denah memotong level 4'-0" (1200 mm) di atas lantainya, seperti denah lantai pada umumnya. Gulir untuk zoom, seret dengan tombol tengah atau kanan (atau tahan {{key:Space}} lalu seret) untuk menggeser; saat {{ui:Select}} aktif, seret biasa juga menggeser. {{key:F}} saat penunjuk berada di atas denah akan memaskannya.

## Gambar sebuah ruangan

1. Klik {{ui:Wall}} (atau tekan {{key:W}}).
2. Pilih tipe dinding di daftar pertama, misalnya **Eksterior 2×6** atau **Interior 2×4**.
3. Pilih tingginya: **Sampai level di atas** (dinding ikut bergerak jika level itu berpindah), **Sampai** level yang lebih tinggi untuk dinding yang melewati beberapa level (hall tangga, ruang dua tinggi, gable tinggi), atau **Tinggi tetap** lalu ketik tingginya. Dinding seperti itu termasuk ke level tempat Anda menggambarnya; denah level yang dilaluinya menampilkannya lebih terang, ruangan di sana menutup ke dinding itu, dan Anda dapat mengklik pintu serta jendela ke dalam dinding itu dari denah tersebut (pintu berdiri di lantai level itu). Untuk memindahkan atau mengubah bentuk dinding itu sendiri, buka level tempat dinding itu mulai.
4. Klik tempat dinding pertama mulai.
5. Klik setiap sudut. Setiap klik membuat satu dinding; dinding berikutnya mulai di tempat dinding sebelumnya berakhir. Panjang dan sudut tampil di samping penunjuk.
6. Klik titik pertama lagi untuk menutup ruangan. Baris status menyatakan berapa dinding yang dimiliki ruangan, dan dalam mode garis tengah setiap dinding mendapat lapisan luarnya di sisi luar ruangan.
7. Tekan {{key:Esc}} (atau klik kanan, atau klik dua kali) untuk berhenti tanpa menutup.

Sudut menyambung dengan sendirinya: dua dinding bertemu di sudut miring, dinding yang berakhir pada dinding lain berhenti di mukanya (membentuk huruf T), dan tiga dinding atau lebih di satu titik berbagi sudut yang sama. Dinding yang saling silang dibiarkan apa adanya.

Satu ruangan sekaligus: buka {{ui:Shapes}} untuk persegi panjang, persegi panjang yang diputar, poligon, busur, dinding pada garis yang dipilih, atau mengelilingi sebuah garis luar (lihat [Bentuk dinding, pisah, offset, regangkan, dan kunci](topic:wall-tools)).

## Pilih referensi gambar

Pilih **Garis tengah**, **Muka dalam**, atau **Muka luar** sebelum klik pertama. Dengan muka yang dipilih, klik dan panjang yang Anda ketik menjelaskan muka itu; BimCraft menggeser garis tengah dinding sebesar setengah dari total tebal dan menyambung sudut-sudut yang berurutan. Pilih **Luar di kiri** atau **Luar di kanan** terhadap arah Anda menggambar. Untuk garis luar tertutup yang digambar berlawanan arah jarum jam, sisi luarnya berada di kanan; searah jarum jam, di kiri. Dengan **Muka dalam**, badan dinding berada di sisi luar garis Anda; dengan **Muka luar**, berada di sisi lainnya. Menggambar muka mempertahankan sisi luar yang Anda pilih saat Anda menutup loop. Pada garis tengah, dinding yang tidak menutup ruangan mengambil sisi luar yang Anda pilih; menutup ruangan menetapkan sisi luar setiap dinding ke luar ruangan dengan sendirinya, apa pun arah Anda menggambar.

Mengubah tipe dinding, referensi, atau sisi luar mengakhiri rantai yang sedang berjalan. Di dekat sudut berbalik, sudut miring yang panjang dibatasi dengan membiarkan ujung persegi.

Saat menggambar, titik akhir di ruang kosong dapat rata secara horizontal atau vertikal dengan titik akhir dinding atau sudut sebelumnya. Garis bantu putus-putus menghubungkan titik itu ke penunjuk yang di-snap. Shift menjaga arah gambar tetap tegak lurus; penyejajaran kemudian berhenti sepanjang arah itu. Titik akhir, titik tengah, dan perpotongan dinding yang berdekatan tetap didahulukan dibanding penyejajaran yang jauh.

## Garis lokasi

Dengan **Referensi** pada **Muka luar** atau **Muka dalam**, dinding menjadikan muka itu sebagai garis lokasinya. Nanti, jika dinding menjadi lebih tebal atau sisi luarnya dibalik, muka itu tetap di tempatnya dan dinding tumbuh atau berbalik di sekelilingnya. Dinding lurus yang bertemu dengannya di sudut akan mengikuti, sehingga sudut tetap tertutup. Anda dapat mengubah garis lokasi setelahnya di **Properti**: lihat [Ubah dinding, pintu, atau jendela](topic:change-a-wall-or-door).

## Gambar dinding melengkung

1. Klik {{ui:Wall}}, lalu pilih **Melengkung** pada daftar **Bentuk** di baris opsi.
2. Klik tempat dinding mulai, lalu tempat ia berakhir.
3. Klik sebuah titik pada busurnya. Atau ketik tinggi busur dan tekan {{key:Enter}}.
4. Rantai berlanjut dari ujung dinding. Tekan {{key:Esc}} untuk mengakhirinya.

Dinding melengkung menyambung dengan dinding di ujungnya (sudut dan sambungan T berfungsi), membentuk ruangan, dan menampung pintu serta jendela di sepanjang busurnya. Keduanya tetap berupa unit lurus, tegak lurus terhadap dinding di tengahnya, dan jaraknya diukur sepanjang busur. Dinding dapat berbelok paling banyak tiga perempat lingkaran. Dinding itu di-snap ke ujung-ujungnya dan ke titik tengah busurnya.

Belum dibuat untuk dinding melengkung: {{ui:Trim / extend}} dan {{ui:Corner}}, rangka, dimensi denah otomatis, dan snap sepanjang busur. Lihat [Yang belum dibuat](topic:not-built-yet).

## Ketik panjang alih-alih mengklik

Setelah klik pertama, ketik lalu tekan {{key:Enter}}:

| Ketik | Menggambar |
|---|---|
| `12'6"` atau `3810` | dinding sepanjang itu, ke arah yang ditunjukkan penunjuk |
| `12'6"<90` | sepanjang itu, pada sudut itu (derajat, berlawanan arah jarum jam dari kanan) |
| `@3000,0` | ke titik sejauh itu dari titik terakhir, ke samping dan ke atas |
| `1200,3400` | ke titik itu pada denah |

Mengetik angka saat alat Dinding aktif langsung masuk ke kotak {{ui:Length}}. Dalam kaki dan inci, angka biasa berarti inci; dalam milimeter, berarti milimeter. Anda selalu dapat mengetik satuannya: `3.5 m`, `10 ft`, `6 1/2"`.

## Snap

- Ujung dinding, sudut mukanya, dan titik tengah dinding di-snap saat penunjuk berada di dekatnya (persegi, segitiga).
- Penunjuk di-snap ke garis tengah dinding atau salah satu mukanya (tanda silang).
- Dari titik terakhir, arah dikunci setiap 15° saat dekat; tahan {{key:Shift}} untuk menjaganya di 0°, 90°, 180°, atau 270°.
- Arah bebas membulatkan panjang ke 1/2" (atau 10 mm).

## Ubah, urungkan, hapus

- Setiap dinding adalah satu langkah di {{ui:Changes}}: {{ui:Undo}} dan {{ui:Redo}} mengambil dinding kembali dan mengembalikannya.
- Saat {{ui:Select}} aktif, klik dinding di denah untuk memilihnya; tampilan 3D dan **Properti** mengikuti. {{key:Delete}} menghapus dinding yang dipilih, dan dinding yang tersambung dengannya dibersihkan kembali.

## Level

Panel **Level** mencantumkan setiap level beserta elevasi dan tingginya.

- Ketik nama, elevasi, atau tinggi baru lalu tekan {{key:Enter}}. Mengubah tinggi (atau elevasi) sebuah level memindahkan level di atasnya sebesar jumlah yang sama, dan dinding yang memanjang sampai ke sebuah level ikut bergerak.
- {{ui:Add a level on top}} menambahkan level di atas level teratas, setinggi level itu.
- {{ui:Add a level below}} menambahkan level di bawah level terendah (basemen), setinggi level itu: elevasinya negatif bila level terendah berada di 0, dan tidak ada level lain yang berpindah. {{ui:Undo}} akan menghapusnya kembali.
- {{ui:Copy this level…}} menggambar ulang apa yang ada di level yang sedang Anda lihat pada level lain, atau pada level baru di atasnya: dindingnya beserta pintu dan jendelanya, lantai dan plafon (bukan atap). Dinding yang memanjang sampai level di atasnya akan memanjang sampai level di atas level baru; ruangan muncul dengan sendirinya. Satu {{ui:Undo}} mengembalikan semuanya. Jika level lain sudah memiliki dinding, salinan ditambahkan ke dinding itu.
- {{ui:Units}} di bilah alat memilih satuan (kaki dan inci, inci, kaki desimal, milimeter, sentimeter, atau meter) untuk semua yang ditampilkan dan dibaca alat gambar.

## Simpan

Klik {{ui:Save as IFC}}. Setiap dinding menjadi dinding IFC dengan garis tengahnya, bentuk tersambungnya, tipe dan lapisannya, `Pset_WallCommon`, serta kuantitas dasar (panjang, tinggi, luas, dan volume), sehingga program BIM lain dapat membukanya dan menjadwalkannya.

## Yang perlu diketahui

- Dinding digambar pada garis tengahnya. Tebalnya berasal dari tipe dinding.
- Denah menampilkan dinding yang digambar di sini dalam keadaan terisi, dan semua yang lain (item pustaka, model dari program lain) dipotong oleh bidang yang sama, dengan yang berada di bawah potongan ditampilkan dalam garis tipis.
- Dinding yang dibuat program lain tampil di denah tetapi belum dapat diubah dengan alat ini.
