---
title: Bentuk dinding, pisah, ofset, regang dan kunci
summary: Lukis dinding sebagai segi empat tepat, poligon, lengkok, pada garisan sedia ada atau di sekeliling garis luar; pisahkannya, keluarkan sekeping, ofset, regang kotak, jajarkan dan kunci antara satu sama lain, kepada dimensi atau kepada garis grid. Setiap perubahan mengekalkan dinding bercantum dan ialah satu langkah buat asal.
keywords: tukar jenis, tukar jenis, tukar semula, apa yang beralih, lod, tahap pembangunan, gaya cantum, mitre, miter, butt, potong rata, cantum dinding, seterusnya, berjalan terus, tidak benarkan cantum, benarkan cantum, keutamaan lapisan, teras, keutamaan, simpang, segi empat tepat, segi empat tepat berputar, poligon, tertulis, terlingkung, lengkok, pusat, lengkok tangen, pilih garisan, tab, jejak, garis luar, pisah, pisah dengan jurang, jurang, padam segmen, cantum semula, ofset, salin, regang kotak, regang, jajar, kunci, kekangan, kunci dimensi, sunting dimensi, grid, kunci ke grid, alih garis grid, ofset kedudukan, bebas-berdiri, berkembang dari, ukur dari, garis tengah, muka dalam, muka luar, nyahcantum, alt
from: 5b7d2f75
---

## Apa yang anda akan lakukan

Buat dan ubah dinding dengan resipi alat dinding. Setiap satu berakhir sama seperti melukis dinding mengikut sudutnya: sudut bercantum dengan sendirinya, cantuman disimpan dalam fail, dan keseluruhan perubahan ialah satu langkah dalam **Perubahan** yang dibatalkan oleh {{ui:Buat asal}}. Dinding mengekalkan identitinya: dinding yang anda pisah, ofset atau regang masih dinding yang sama, dengan pintu, tingkap dan dimensinya.

## Lukis segi empat tepat, poligon atau lengkok

Dengan {{ui:Lukis}} dihidupkan, buka {{ui:Bentuk}} dalam kumpulan Lukis (atau pilih bentuk dalam senarai **Bentuk** baris Dinding). Baris Dinding menunjukkan jenis dinding, rujukan lukisan, sisi luar dan bahagian atas, seperti untuk alat {{ui:Dinding}}. Kemudian klik, atau taip titik (x,y · @dx,dy · @panjang<sudut · panjang sepanjang penunjuk):

- **Segi empat tepat**: dua sudut bertentangan. Empat dinding, empat cantuman sudut, satu langkah.
- **Segi empat tepat berputar**: di mana sisi pertama bermula dan berakhir (itu menetapkan pusingannya dan panjangnya), kemudian klik ketiga untuk sisi yang lain.
- **Poligon**: pusat, kemudian satu sudut (**Tertulis**) atau tengah satu sisi (**Terlingkung**). Tetapkan **Sisi** (3 hingga 64) dahulu.
- **Lengkok, pusat**: pusat, permulaan (yang menetapkan jejari), penghujung. **Arah pusingan**: jalan yang lebih pendek, lawan arah jam atau ikut arah jam. Sapuan lebih tiga perempat bulatan dilukis sebagai dua dinding.
- **Lengkok tangen**: klik hujung dinding, kemudian di mana lengkok berakhir. Lengkok keluar dari hujung dinding mengikut arah dinding itu sendiri.

Bentuk tertutup mendapat bahagian luarnya ke luar. Dilukis pada **Muka luar** atau **Muka dalam**, muka yang anda klik ialah muka yang kekal di tempatnya.

## Dinding pada garisan yang sedia ada

- **Pilih garisan**: klik satu garisan dan dinding diletakkan di atasnya. Tekan {{key:Tab}} (atau tahan {{key:Shift}} semasa klik) untuk mengambil keseluruhan rantai garisan yang bercantum hujung ke hujung. Garisan ialah garisan lukisan paparan ini, rujukan jejak dan garisan grid.
- **Jejak garis luar**: klik di dalam kawasan yang ditutup oleh garisan itu atau oleh dinding. Dinding mengelilingi kawasan terkecil di sekeliling klik.

## Tetapkan sebelum melukis: ofset dan cantum

Baris Dinding mempunyai dua medan lagi, digunakan oleh alat {{ui:Dinding}} dan bentuk:

- **Ofset**: dinding dilukis sejauh ini dari garisan yang anda klik: + ke kirinya, − ke kanannya, dilihat mengikut cara anda melukis.
- **Cantum**: nyahtandakannya untuk melukis dinding bebas-berdiri. Hujungnya mendapat **Tidak benarkan cantum** dan kekal bebas ke mana pun ia pergi (lihat [Tukar dinding](topic:change-a-wall-or-door)).

## Pisah, keluarkan sekeping, cantum semula

Buka {{ui:Dinding}} dalam kumpulan Sunting.

- **Pisah**: klik dinding di tempat ia patut dipotong, atau taip jarak dari permulaannya. Berhampiran dinding yang bersilang dengannya, potongan melekat ke tempat mereka bertemu. Dua bahagian mempunyai jenis yang sama dan kekal bercantum hujung ke hujung. **Jurang** meninggalkan ruang sepanjang panjang itu berpusat pada potongan. **Hujung bebas** memberikan hujung potongan **Tidak benarkan cantum** sebaliknya (Tetapan › BimCraft › Dinding › **Apabila dinding dipisahkan** menetapkan yang mana ditandakan pada mulanya). Pintu atau tingkap mengikut bahagian yang dipegangnya; potongan melalui satu daripadanya ditolak.
- **Padam segmen**: klik di mana sekeping itu bermula dan di mana ia berakhir. Pintu dalam sekeping itu turut dipadam.
- **Cantum semula**: klik kedua-dua bahagian satu dinding (sebaris, jenis yang sama). Ia menjadi satu dinding semula, yang pertama anda klik, dengan pintu kedua-duanya.

## Gaya cantum, Tidak benarkan cantum, keutamaan lapisan

Buka {{ui:Dinding}} dalam kumpulan Sunting.

- **Gaya cantum**: klik satu sudut tempat dua dinding lurus berakhir. Setiap klik beralih ke gaya seterusnya: **Mitre** (kedua-dua hujung dipotong pada garisan dari sudut dalam ke sudut luar, apa yang setiap sudut mulakan), **Butt** (satu dinding berjalan terus ke muka luar dinding yang lain, yang berhenti di sisinya) dan **Potong rata** (sama seperti butt, dan dinding yang berjalan terus berakhir rata; pada sudut tegak ia kelihatan seperti butt). **Seterusnya**, atau {{key:Tab}}, menjadikan dinding yang satu lagi sebagai dinding yang berjalan terus. Senarai **Gaya** dalam bar menunjukkan sudut yang anda klik terakhir. Pilihan dua yang sama ada dalam **Sifat** satu dinding: **Gaya cantum di permulaan / di penghujung** dan **Berjalan terus**. Setiap perubahan ialah satu langkah dalam **Perubahan**. Pelan, badan 3D, bilik dan kuantiti mengikut.
- Pada T, dinding yang sisinya ditemui sentiasa berjalan terus. Di tempat dua dinding bersilang, satu klik (atau **Berterusan di tempat bersilang** dalam Sifat) menyatakan yang mana satu berterusan; itu menentukan lapisan dinding mana yang dilukis melalui persilangan.
- Gaya itu milik cantuman: ia kekal apabila dinding beralih dan hanya hilang apabila cantuman hilang (dinding dipadam, dipisahkan di hujung itu, atau hujung mendapat **Tidak benarkan cantum**). Sudut dengan dinding melengkung, atau tempat tiga atau lebih dinding bertemu, mengekalkan mitre. Sudut yang lebih tajam daripada kira-kira 30 darjah, atau lebih rata daripada kira-kira 150, juga kembali kepada mitre.
- **Tidak benarkan cantum**: klik berhampiran hujung dinding. Hujung itu dibebaskan: ia tidak bercantum dengan apa-apa, ke mana pun dinding pergi, sehingga anda klik semula. Hujung bebas ditandakan dengan silang semasa alat dihidupkan. Suis yang sama ialah **Cantum di permulaan / Cantum di penghujung** dalam Sifat.
- **Keutamaan lapisan**: di tempat dinding dengan lapisan bertemu, lapisan yang lebih kuat memotong yang lebih lemah, jadi teras bercantum dengan teras dan kemasan berhenti di lapisan yang lebih kuat. Setiap lapisan mempunyai keutamaan dari 0 hingga 999; secara lalai ia datang dari fungsi lapisan (struktur 800, substrat 600, penebat 400, membran 300, kemasan 200, rongga 100). {{ui:Keutamaan lapisan}} membuka himpunan dinding, di mana lajur **Keutamaan** menetapkan nombor lapisan itu sendiri. Lapisan dengan keutamaan sama berhenti antara satu sama lain, dan garisan hanya dilukis antara bahan yang berbeza. Anda melihatnya pada pelan dengan perincian **Sederhana** atau **Halus**, di sudut, cantuman T dan persilangan dua dinding lurus; Tetapan › BimCraft › Dinding › **Bersihkan lapisan dinding di tempat dinding bertemu** mematikannya. Ia hanya mengubah apa yang dilukis di dalam dinding: garis luar dan kuantiti dinding kekal seperti yang diberikan oleh gaya cantum.

## Tukar jenis banyak dinding

Beralih daripada pelan lakaran kepada lukisan kerja kebanyakannya ialah perubahan jenis: dinding generik menjadi binaan khusus. Anda tidak melukis semula apa-apa.

1. Pilih dinding (satu, atau banyak dengan {{key:Ctrl}} atau {{key:Shift}}).
2. Dalam Sifat, tekan **Tukar jenis…** di bawah Jenis dinding (atau buka {{ui:Dinding}} dalam kumpulan Sunting dan pilih {{ui:Tukar jenis}}, yang membuka senarai yang sama). Senarai dibuka dalam Sifat, dalam blok dinding yang dipilih. Ia bukan dialog dan tidak menutup apa-apa: pelan, paparan 3D dan pilihan terus berfungsi semasa ia terbuka, dan ia mengikut dinding yang anda pilih.
3. Senarai menunjukkan setiap jenis dinding dengan ketebalannya dan tag LODnya, contohnya "Wall 230 generic, LOD 200" dan "230 clay brick, plastered both sides, LOD 300". Jenis yang dimiliki oleh dinding yang dipilih kini ditandakan. Taip dalam **Cari** untuk menyempitkannya: nama, ketebalan, atau `lod 300`.
4. Klik satu jenis. Setiap dinding yang dipilih bertukar kepadanya dalam satu langkah, jadi satu {{ui:Buat asal}} membatalkan keseluruhan pertukaran. Huruf x kecil menutup senarai.

Setiap dinding mengekalkan garis lokasinya. Dinding pada garis tengahnya membesar ke kedua-dua sisi; dinding yang garis lokasinya ialah muka mengekalkan muka itu dan membesar ke arah lain, dan dinding yang bercantum dengannya mengikut di sudut. Dinding yang dikunci kepada dinding yang ditukar turut mengikutinya. Pintu dan tingkap kekal dalam dinding mereka dan dipotong semula untuk ketebalan baharu.

Selepas pertukaran senarai menunjukkan **Apa yang beralih**: berapa banyak dinding berubah dan kepada apa, ketebalan dan LOD sebelum dan selepas, dinding yang beralih ke sisi untuk mengekalkan garis lokasinya, dinding bercantum yang mengikut, pintu dan tingkap yang dihoskan semula, dan setiap bilik yang luasnya berubah dengan luasnya sebelum dan selepas. Bar status menyatakan perkara yang sama dalam satu baris. Laporan hanya memberitahu anda; ia tidak pernah menghentikan pertukaran. Memilih jenis dalam **Sifat › Jenis dinding** melakukan pertukaran yang sama dan memberikan laporan yang sama.

Dua perkara menghentikan pertukaran, dan kemudian tiada apa pun diubah: pintu atau tingkap yang tidak lagi muat dalam dindingnya (dinding menjadi lebih pendek di tempat sudut mengikut; jadikan pintu lebih sempit atau alihkannya dari sudut dahulu), dan kunci yang akan dipecahkan oleh pertukaran (dinding yang dikunci kepada garis grid melalui garis tengahnya semasa garis lokasinya ialah muka; buka kuncinya atau letakkan garis lokasinya kembali pada garis tengah).

Pembantu yang disambungkan kepada BimCraft boleh melakukan pertukaran yang sama (alat `wall_types_list` dan `walls_swap_type`) dan mendapat laporan yang sama semula.

Tag LOD jenis ditetapkan dalam penyunting himpunan dinding: lihat [Himpunan dinding](topic:wall-assemblies).

## Ofset dan regang kotak

- **Ofset**: klik dinding, kemudian sisi untuk mengalihkannya ke, atau taip jarak. Dinding bergerak tegak kepada dirinya sendiri dan dinding yang bercantum dengannya meregang. Tandakan **Salin** untuk salinan selari sebaliknya (ia tidak bercantum dengan yang asal).
- **Regang kotak**: klik dua sudut kotak, kemudian titik untuk dialihkan dari dan titik untuk dialihkan ke. Setiap hujung dinding di dalam kotak bergerak; dinding yang sepenuhnya di dalam bergerak dan dinding yang bersentuh dengannya turut bergerak; dinding yang merentasi kotak meregang.

## Sunting dimensi dan kunci

Pilih dimensi rujukan (Anotasi › {{ui:Dimensi rujukan}}) dan taip nilainya dalam **Sifat**: dinding rujukan keduanya bergerak tegak kepada dirinya sendiri, rujukan pertama kekal dan dinding bercantum mengikut. Tandakan **Kunci dimensi ini** untuk mengekalkan nilai: apabila mana-mana dinding bergerak kemudian, yang satu lagi mengikut. Nilai yang dikunci tidak boleh ditaip ganti sehingga anda menyahtandakannya.

## Jajar dan kunci

**Jajar dan kunci**: klik muka dinding (atau garis tengah, berhampiran tengah dinding) atau garisan grid, kemudian muka dinding yang akan dibawa ke garisan itu. Dinding bergerak tegak ke atasnya. Tandakan **Kunci** dahulu untuk mengekalkan kedudukan sejajar: ikon kunci ditunjukkan pada pelan, dan apabila satu dinding bergerak yang lain mengikut. **Sifat** dinding menyenaraikan **Kunci**nya, setiap satu dengan **Buka kunci**.

## Kunci dinding ke garisan grid

Pilih dinding yang berjalan sepanjang garisan grid, atau yang hujungnya berada di atasnya, dan pilih garisan grid dalam **Sifat** › **Kunci ke grid**. Kemudian pilih garisan grid dengan alat {{ui:Grid}} dan taip jarak dalam **Alih sebanyak**: garisan itu bergerak tegak kepada dirinya sendiri dan dinding yang dikunci kepadanya mengikut, bersama dinding bercantum mereka, dalam satu langkah. Dinding yang dikunci kepada garisan grid tidak boleh dialihkan keluar daripadanya sendiri (alihkan garisan, atau buka kunci dinding); garisan grid yang dipusing supaya dinding terkunci tidak dapat kekal tegak di atasnya ditolak. Menamakan semula garisan mengekalkan kunci; memadamnya membuang kunci.

## Panjang: sisi mana yang kekal, dan apa yang diukur

- **Berkembang dari** (Sifat satu dinding): **Permulaan kekal** (hujung bergerak), **Penghujung kekal** (permulaan bergerak) atau **Tengah kekal** (kedua-dua hujung bergerak separuh). Semasa anda menaip Panjang, pelan menandakan titik yang kekal. Dinding yang bercantum di hujung yang bergerak bergerak tegak kepada dirinya sendiri dan mengekalkan sudutnya.
- **Ukur dari** (bersebelahan Dimensi pada pelan, dalam Sifat, dan dalam Tetapan › BimCraft › Dinding): garis tengah, muka dalam atau muka luar. Medan Panjang dan dimensi dinding pelan membaca yang sama, jadi ia sepadan. Ia bermula pada garis tengah.
- Untuk mengalihkan dinding tanpa cantumannya (ia pecah, dinding mengekalkan identitinya), tahan {{key:Alt}} semasa anda menyeret grip tengahnya.

## Perkara yang perlu diketahui

- Resipi ini ialah spesifikasi alat dinding (halaman 4 hingga 9). Gaya cantum dan keutamaan lapisan dibina untuk dinding lurus; keutamaan lapisan hanya dipaparkan pada pelan (bukan dalam keratan, dongakan atau 3D, di mana dinding ialah satu badan), bukan pada nod tiga dinding atau lebih, dan membran tidak dibawa.
- Gaya cantuman disimpan dalam rekodnya dalam fail IFC (nama `IfcRelConnectsPathElements`, contohnya `CadCraft join L butt 1`), jadi program lain masih membaca cantuman itu dan fail lama dibuka dengan mitre.
- Kunci dan cantuman disimpan dalam fail IFC (kunci sebagai `CadCraft_WallHolds` pada projek, cantuman sebagai `IfcRelConnectsPathElements`), jadi ia ada apabila anda membuka fail itu semula.
- Dinding melengkung boleh dipisahkan, dicantum semula dan dikeluarkan sekeping; ia tidak diofset atau dikunci.
- Lihat juga [Lukis dinding](topic:draw-walls), [Tukar dinding, pintu atau tingkap](topic:change-a-wall-or-door) dan [Bentuk dinding](topic:wall-shape).
