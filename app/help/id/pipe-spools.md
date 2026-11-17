---
title: Spool pipa baja dan lembar spool
summary: Potong lintasan pipa baja butt-weld menjadi spool dengan panjang terpanjang dan pada las lapangan yang Anda pasang, beri nomor, dan unduh lembar spool per spool (tampilan 3D, panjang potongan, fitting, las, daftar material) sebagai PDF dan CSV; duct mendapat daftar potong berupa potongan lurus.
keywords: spool, lembar spool, isometrik, fabrikasi, prafabrikasi, las lapangan, las bengkel, las tumpul, panjang potongan, daftar potong, daftar material, bom, pipa baja, schedule 40, nomor jalur, daftar potong duct, potongan duct
from: 539f51de
---

## Yang akan Anda lakukan

Ubah lintasan pipa baja menjadi potongan yang akan dilas di bengkel dan dipasang oleh tukang pasang: spool yang tidak lebih panjang dari panjang yang Anda pilih, dibagi di tempat Anda memasang las lapangan, masing-masing dengan lembarnya sendiri.

Hanya **pipa baja butt-weld** yang dipotong menjadi spool (ukuran pipa ASME B36.10M, elbow dengan radius panjang ASME B16.9). Sambungan tembaga, PVC, dan PEX bukan butt weld, sehingga lintasannya tidak memiliki spool.

## Memotong lintasan menjadi spool

1. Pilih lintasan pipa baja. Di Properti, centang **Potong menjadi spool**.
2. **Spool terpanjang**: panjang sumbu terbesar yang boleh dimiliki satu spool (awalnya 6 m, sekitar 20 ft).
3. **Nomor jalur**: bagian dari setiap nomor spool. Lintasan baru yang di-spool mendapat nomor bebas berikutnya dari sistemnya.

Spool diberi nomor sepanjang lintasan dari titik pertamanya: `CHW-12-S01`, `CHW-12-S02` … (sistem, nomor jalur, spool). Spool bertambah bagian demi bagian; bagian yang akan membuatnya terlalu panjang memulai spool berikutnya, dan panjang lurus yang lebih panjang dari sebuah spool dipotong di tempat spool itu penuh.

## Memasang las lapangan

1. Buka {{ui:Build}} dan pilih {{ui:Field weld}}.
2. Klik pada pipa yang di-spool di tempat las lapangan akan dipasang. Di dalam panjang lurus, pipa dipotong di situ; di dalam fitting atau valve, las dipindahkan ke sambungan yang lebih dekat.

Properti mendaftar las lapangan lintasan, masing-masing dengan {{ui:Remove}}. Setiap perubahan adalah satu langkah {{ui:Undo}}.

## Lembar spool

Di Properti lintasan yang di-spool:

- {{ui:Spool sheets (PDF)}}: satu halaman per spool. Di kiri, spool dalam tampilan isometrik 30°: panjang lurusnya diberi nomor, las bengkel sebagai titik, las lapangan ditandai FW, dan utara denah. Di kanan, nomor, ukuran, jadwal, dan panjang spool, lalu **panjang potongan**, **fitting**, **las** (las tumpul bengkel di setiap sambungan di dalam spool, dan las lapangan di tempat ia bertemu spool berikutnya), dan **daftar material** dengan berat pipa (berat plain-end ASME B36.10M).
- {{ui:Spool list (CSV)}}: sama, dengan satu blok per spool.

:::note
Panjang potongan dihitung dari ujung ke ujung seperti yang digambar: tidak ada celah akar atau kelonggaran las yang dikurangkan. Elbow memakai radius panjang B16.9; tee, reducer, dan valve bersifat generik, diukur dari pipa, bukan dari B16.9 atau pabrikan, dan lembar menyatakannya. Berat fitting tidak diberikan. Alat bantu drafting dan koordinasi, yang ukurannya ditentukan oleh seorang insinyur.
:::

## Dalam file IFC

Setiap bagian dari lintasan yang di-spool membawa **CadCraft_Spool** dengan SpoolId-nya, lintasannya, nomor spool dalam lintasan, serta titik awal dan akhirnya sepanjang lintasan. Lintasan menyimpan aturannya (spool terpanjang, las lapangan, nomor jalur) dalam set miliknya sendiri, sehingga spool kembali sama saat file dibuka lagi.

## Duct: daftar potong

Buka {{ui:Build}} dan klik {{ui:Duct cut list}}: sebuah CSV berisi potongan duct lurus menurut sistem, bentuk, dan ukuran, setiap panjang lurus dipotong menjadi potongan sepanjang **Piece length** di bilah Duct (awalnya 1500 mm, sekitar 5 ft), beserta sisanya. Hanya panjang: tanpa sambungan memanjang, ketebalan plat, atau konektor.
