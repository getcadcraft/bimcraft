---
title: Paip dan saluran
summary: Lukis laluan paip dan saluran pada pelan mengikut garis tengahnya; siku, T, pengecil dan peralihan dibuat untuk anda, laluan tergolong dalam sistem dengan port bersambung dalam fail IFC, dan ia dipaparkan dalam pelan, jadual dan pengukuran kuantiti.
keywords: paip, perpaipan, paip, pembetungan, saluran, kerja saluran, hvac, mep, mekanikal, siku, T, pengecil, peralihan, sambungan, injap, injap pintu, injap bola, injap globe, injap semak, naik, cerun, longkang, sanitari, ribut, paip udara, bekalan udara, pulangan udara, ekzos, sistem, port, penyambung, kelengkapan paip, besen, sinki, tandas, sinki dapur, pancuran, dulang dobi, unit kelengkapan, uhc, dfu, saiz pembetung, saiz longkang, paip longkang bangunan, cabang, pengumpul, aliran udara, cfm, geseran, geseran sama, saiz, jadual, pengukuran kuantiti, nbr, nbr 5648, nbr 5688, nbr 8160, pvc cantum pelarut, pembetung, dn
from: 85140bc5
---

## Apa yang anda akan lakukan

Lukis paip dan saluran bangunan seperti anda melukis dinding: klik pada sudut garis tengah laluan pada ketinggian yang anda tetapkan. BimCraft membuat sambungan, meletakkan setiap bahagian dalam sistemnya dan menyambungkannya, supaya program lain membaca laluan sebagai satu sistem bersambung.

## Lukis paip

1. Hidupkan {{ui:Lukis}}, buka {{ui:Binaan}} dan pilih {{ui:Paip}}.
2. Dalam bar, pilih **sistem** (air sejuk, air panas, longkang sanitari, gas…). Ia menetapkan bahan biasa: kuprum untuk air, PVC untuk longkang dan paip udara, keluli untuk pemanasan, air sejuk, gas dan perlindungan kebakaran. Tukar **bahan**, **kelas** dan **saiz** jika perlu. Saiz dan dinding datang daripada standard awam: paip keluli ASME B36.10M, tiub kuprum ASTM B88, PVC ASTM D1785 dan PEX ASTM F876. Projek Brazil boleh menggunakan **Paip air PVC (NBR 5648)**, PVC cantum pelarut untuk air sejuk, dan **Paip longkang PVC (NBR 5688)**, siri normal atau diperkukuh, untuk longkang dan paip udara: saiz mereka dinamakan mengikut DN (DN 25, DN 100). Setelah anda memilih salah satu daripadanya, memilih sistem lain akan kekal dengan paip Brazil (paip longkang PVC untuk longkang sanitari selepas paip air PVC).
3. Tetapkan **At**: ketinggian garis tengah paip di atas aras.
4. Klik tempat paip bermula, kemudian setiap sudut. Klik dua kali, atau tekan {{key:Enter}}, pada titik terakhir. {{key:Backspace}} membatalkan sudut terakhir; {{key:Esc}} membuang laluan.

Paip melekap seperti dinding, dan kepada laluan lain: mula pada hujung paip untuk meneruskan daripadanya, atau tamatkan pada garisan paip untuk bercabang daripadanya. Laluan baharu mengambil ketinggian paip yang ia melekap.

Laluan yang dimulakan atau ditamatkan pada port peralatan mengambil saiz dan sistemnya dan kekal tetap padanya: lihat [Peralatan MEP dengan port](topic:mep-equipment) dan [Sambung paip dan saluran ke peralatan](topic:mep-connections).

## Tetapkan standard perpaipan projek

Senarai pertama dalam bar paip ialah **standard perpaipan** model: **US (IPC, inci)** atau **Brazil (ABNT, DN)**. Ia disimpan dalam model, supaya semua orang yang membuka fail memulakan laluan dengan cara yang sama. Di bawah **US**, laluan baharu bermula dalam kuprum (air) atau PVC Schedule 40 (longkang), dalam inci, dengan cerun International Plumbing Code. Di bawah **Brazil**, air sejuk bermula sebagai PVC cantum pelarut DN 25, longkang sanitari dan longkang ribut serta paip udara sebagai PVC pembetung DN 100 dengan cerun NBR 8160, dan air panas dalam kuprum. Ia juga digunakan untuk laluan yang dimulakan pada penyambung kelengkapan atau port peralatan. Paip yang telah dilukis mengekalkan bahan dan jadualnya sendiri; senarai bahan kekal terbuka, jadi anda masih boleh melukis satu laluan Brazil dalam model US dengan sengaja. Fail tanpa pilihan berkelakuan seperti sebelumnya: laluan baharu mengikut bahan yang digunakan.

## Lukis saluran

1. Pilih {{ui:Saluran}}. Pilih sistem (bekalan, pulangan, ekzos atau udara luar) dan bentuk: bulat, segi empat tepat atau bujur rata.
2. Taip lebar dan tinggi (lebar saluran bulat ialah diameternya), dan **At** untuk ketinggian garis tengah.
3. Untuk menyaizkannya daripada aliran udara, taip **Aliran udara** dan kadar **Geseran**, dan klik {{ui:Saizkan}}. Saluran disaizkan mengikut geseran sama, kaedah dalam bab reka bentuk saluran ASHRAE Handbook, dan dibundarkan ke atas kepada saiz yang tersedia dalam stok, supaya geseran berada pada atau di bawah kadar yang anda taip. Jika tiada kadar ditaip, ia menggunakan 0.08 in. air setiap 100 ft (0.8 Pa/m). Saluran segi empat tepat mengekalkan tinggi yang anda taip dan mendapat lebar; BimCraft memberitahu apabila sisinya lebih daripada 4 kepada 1.
4. Klik sudut seperti untuk paip.

## Kelengkapan paip

{{ui:Binaan}} › {{ui:Letak keluarga}} menawarkan lima kelengkapan untuk dimulakan, setiap satu dengan penyambung longkang dan air sejuk: **Tandas duduk**, **Besen**, **Sinki dapur**, **Dulang pancuran** dan **Dulang dobi**. Hadapannya menghadap anda semasa anda meletakkannya dan belakangnya menghadap dinding. Longkang mereka berada pada saiz longkang kelengkapan terkecil NBR 8160 (DN 100 untuk tandas duduk, DN 50 untuk sinki dapur, DN 40 untuk yang lain); air ialah DN 20. Tukar saiznya, atau sunting mereka, seperti mana-mana keluarga: lihat [Keluarga dan saiznya](topic:families).

Keluarga menyatakan kelengkapan yang ia adalah di bawah {{ui:Kelengkapan paip}} pada tab {{ui:Penyambung}} penyunting keluarga. Longkangnya kemudian dikira dalam unit kelengkapan: 6 UHC untuk tandas duduk, 1 untuk besen, 3 untuk sinki dapur atau dulang dobi, 2 untuk pancuran (NBR 8160), atau unit kelengkapan saliran bagi IPC Table 709.1.

## Dari penyambung kelengkapan

Elemen yang diletakkan daripada keluarga dengan penyambung (longkang dan paip air besen, leher terminal udara: lihat [Sunting keluarga](topic:family-editor)) menunjukkan penyambung bebasnya sebagai titik semasa {{ui:Paip}} atau {{ui:Saluran}} dihidupkan, dan penuding melekap padanya.

- **Mulakan pada penyambung**: laluan mengambil sistem dan saiznya (paip bagi bahan dalam bar pada atau sedikit di atas saiz penyambung; saluran bulat bagi diameternya). Apabila penyambung menghadap ke bawah atau ke atas, seperti longkang di bawah besen, laluan mula-mula terus turun atau naik ke ketinggian dalam **At**, kemudian diteruskan mengikut klik anda.
- **Tamatkan pada penyambung**: laluan turun atau naik ke atasnya dan berakhir di situ.

Laluan disambungkan kepada elemen dalam fail IFC, jadi program lain melihat kelengkapan sebagai sebahagian daripada sistemnya. Elemen yang diletakkan kemudian dengan penyambung pada hujung laluan turut disambungkan kepadanya. Laluan yang dialihkan dari penyambung tidak lagi disambungkan kepadanya.

## Sambungan yang dibuat untuk anda

| Di mana | Apa yang dibuat BimCraft |
|---|---|
| Laluan membelok | Siku. Paip keluli pada jejari panjang ASME B16.9 (1.5 × saiz), paip lain pada satu diameter luar, saluran bulat pada 1.5 diameter, saluran segi empat tepat pada satu lebar (atau satu tinggi untuk belokan naik atau turun) |
| Laluan berakhir pada garisan laluan lain | T; laluan lain dipecahkan di situ |
| Dua laluan bertemu hujung ke hujung pada saiz berbeza | Pengecil (paip) atau peralihan (saluran) |
| Dua laluan saiz sama bertemu hujung ke hujung pada sudut | Siku |

Apabila anda menukar, mengalih atau memadam laluan, setiap sambungan pada aras itu dibuat semula. Jika satu kaki terlalu pendek untuk sambungan di hujungnya, BimCraft memberitahu dan tidak mengubah apa-apa: alihkan sudut lebih jauh.

:::note
Sambungan dan injap adalah generik: dilukis daripada saiz paip atau saluran, bukan daripada katalog pengilang. Sambungan soket, tekan dan beralur, badan injap serta peralatan mempunyai saiz pengilang sendiri; semak dengan pembekal anda sebelum membuat pesanan.
:::

## Naik

Semasa melukis, taip ketinggian baharu dalam **At** dan tekan {{key:Enter}}: laluan naik atau turun secara lurus pada sudut terakhir, dengan siku pada setiap hujung. Naik boleh naik ke aras di atasnya. Setiap aras menunjukkan bahagian laluan yang dicapai oleh julat pandangannya, dengan **UP** atau **DN** pada naik.

## Longkang dan cerunnya

Longkang sanitari dan ribut bermula pada cerun paling kecil yang dibenarkan oleh International Plumbing Code untuk saiznya: 1/4 in. setiap kaki sehingga 2-1/2 in., 1/8 in. setiap kaki dari 3 hingga 6 in., 1/16 in. setiap kaki dari 8 in. Paip longkang PVC Brazil bermula pada cerun NBR 8160: 2 % sehingga DN 75, 1 % dari DN 100. Taip cerun lain dalam bar atau dalam {{ui:Sifat}}: `1/4"/ft`, `2 %` atau `1:50`. Laluan jatuh dari titik pertamanya, jadi lukis longkang mengikut arah ia mengalir. Pelan menunjukkan kejatuhan dan anak panah. Sifat memberi amaran apabila longkang lebih rata daripada minimum kod.

## Saiz longkang mengikut unit kelengkapan

Pilih longkang sanitari: **Unit kelengkapan** dalam {{ui:Sifat}} memberitahu berapa banyak ia membawa dan saiz terkecil yang diperlukannya. Setiap kelengkapan paip yang penyambung longkangnya berada pada laluan dikira, dan begitu juga setiap longkang yang mengalir ke dalamnya: lukis longkang mengikut arah ia mengalir, setiap satu berakhir pada longkang yang ia mengalir masuk.

- Longkang dalam paip longkang PVC Brazil mengira **UHC** dan mengikut NBR 8160; yang lain mengira **DFU** dan mengikut International Plumbing Code.
- **Longkang**: **Cabang** disaizkan daripada jadual kod untuk cabang kelengkapan; **Longkang bangunan** daripada jadualnya mengikut cerun, jadi **Cerun** adalah penting.
- Longkang tidak pernah lebih kecil daripada longkang kelengkapan yang dilayaninya (tandas duduk memerlukan DN 100, atau 3 in.), atau daripada longkang yang mengalir ke dalamnya. Di bawah NBR 8160, longkang bangunan ialah sekurang-kurangnya DN 100.

{{ui:Saiz longkang}} membuat setiap longkang sanitari dalam model yang terlalu kecil untuk unit kelengkapannya kepada saiz yang diperlukan, sebagai satu langkah yang boleh anda buat asal. Longkang yang dilukis lebih besar daripada yang diperlukan dibiarkan seperti sedia ada. Apabila longkang membawa lebih daripada saiz terbesar paipnya boleh bawa pada cerunnya, BimCraft memberitahu: beri cerun yang lebih curam atau paip lain.

:::note
Jadual ialah jadual bagi longkang mendatar. Tiang, paip udara dan longkang ribut tidak disaizkan di sini: semak mereka, dan keseluruhan reka bentuk, terhadap kod yang terpakai bagi projek.
:::

## Injap

1. Pilih {{ui:Injap}} dan jenisnya: pintu, bola, globe atau semak.
2. Klik pada paip tempat ia pergi. Paip dipotong di sekelilingnya dan injap disambungkan pada kedua-dua belah.

Sifat laluan menyenaraikan injapnya, setiap satu dengan {{ui:Alih keluar}}.

Lebih banyak jenis injap, penapis, damper pada saluran, spesifikasi paip anda sendiri dan keluarga pengilang: lihat [Spesifikasi paip, injap, damper dan keluarga pengilang](topic:pipe-specs).

## Tukar laluan

Pilih mana-mana bahagian laluan, dalam pelan atau paparan 3D. Dalam {{ui:Sifat}}:

- **Sistem**, **Bahan**, **Kelas** dan **Saiz** (paip), atau **Bentuk**, **Lebar**, **Tinggi** (saluran).
- **Ketinggian di atas aras** menggerakkan keseluruhan laluan naik atau turun.
- **Penebat**: ketebalannya, disimpan untuk semakan kelegaan dan senarai bukaan (tiada apa yang dilukis untuknya): lihat [Semak paip dan saluran terhadap struktur](topic:mep-against-structure).
- Paip keluli: **Potong kepada spul**: lihat [Spul paip keluli dan helaian spul](topic:pipe-spools).
- **Cerun** (paip).
- **Aliran** dengan {{ui:Saizkan}}: untuk air, saiz terkecil yang memastikan air pada 8 ft/s (2.4 m/s), atau 5 ft/s (1.5 m/s) untuk air panas; pada 3 m/s untuk paip air PVC Brazil (NBR 5626). Untuk saluran, halaju dan kadar geseran saluran seperti yang dilukis. Longkang sanitari disaizkan mengikut unit kelengkapannya sebagai gantinya: lihat **Saiz longkang mengikut unit kelengkapan** di bawah.

Setiap perubahan ialah satu langkah {{ui:Buat asal}}. {{key:Delete}} memadam keseluruhan laluan.

## Pelan

- Paip yang lebih kecil daripada 150 mm (kira-kira 6 in.) dilukis sebagai satu garisan pada garis tengahnya; paip yang lebih besar dan semua saluran sebagai dua garisan pada lebarnya.
- Setiap sistem mempunyai warnanya sendiri; PDF pelan mencetaknya dalam hitam.
- Setiap laluan dilabelkan dengan saiz dan sistemnya (contohnya `2" CW` atau `16×10 SA`).
- Julat pandangan pelan menentukan laluan yang ditunjukkannya, dan {{ui:Dipaparkan dalam pelan ini}} boleh mengecualikan **Paip** atau **Saluran**: lihat [Pandangan, julat pandangan dan helaian anda sendiri](topic:views-and-sheets).

## Jadual dan pengukuran kuantiti

Panel {{ui:Jadual}} menambah **Paip** (mengikut sistem, bahan dan saiz, dengan panjangnya), **Saluran** (mengikut sistem, bentuk dan saiz, dengan panjang dan luas permukaan luar) dan **Sambungan dan injap** (mengikut jenis dan saiz, dikira). Klik baris untuk memilih apa yang disenaraikannya; {{ui:Muat turun CSV}} memuat turunnya.

{{ui:Pengukuran kuantiti (takeoff)}} membawa laluan ke TakeoffCraft: paip dan saluran mengikut saiz sebagai laluan yang dilukis pada pelan (longkang bercerun diukur mengikut cerunnya), sambungan dan injap dikira di tempat ia berada: lihat [Hantar kuantiti model ke TakeoffCraft](topic:takeoff). Naik ditinggalkan daripada helaian itu, kerana pelan tidak dapat mengukurnya; jadual Paip mempunyai panjangnya.

## Dalam fail IFC

Setiap laluan ialah satu himpunan yang memegang bahagiannya: segmen paip dan saluran, sambungan dan injap, setiap satu dengan jenisnya, bahan, warna untuk sistemnya dan portnya. Port yang bersentuhan disambungkan, dan setiap bahagian tergolong dalam sistem pengedarannya (fail IFC2X3 mendapat perkara yang sama sebagai segmen aliran, sambungan dan pengawal dalam satu sistem). Program lain yang membaca sistem IFC melihat satu laluan bersambung untuk setiap sistem. Takrif laluan itu disimpan bersamanya, jadi BimCraft membuatnya semula dengan cara yang sama apabila anda menukarnya.
