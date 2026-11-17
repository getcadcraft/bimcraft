---
title: Pipa dan duct
summary: Gambar lintasan pipa dan duct di denah menurut garis sumbunya; elbow, tee, reducer, dan transisi dibuat untuk Anda, lintasan termasuk dalam sistem dengan port yang tersambung di dalam file IFC, dan tampil di denah, jadwal, dan takeoff.
keywords: pipa, perpipaan, plambing, duct, ductwork, hvac, mep, mekanikal, elbow, tee, reducer, transisi, fitting, valve, gate valve, ball valve, globe valve, check valve, riser, kemiringan, pembuangan, sanitasi, storm, ven, air dingin, air panas, air dingin (chilled water), pemanasan, gas, proteksi kebakaran, udara suplai, udara balik, udara buang, sistem, port, konektor, fixture, fixture plambing, basin, sink, toilet, water closet, lavatory, kitchen sink, shower, laundry tub, unit fixture, uhc, dfu, tentukan ukuran pembuangan, ukuran pembuangan, pembuangan gedung, cabang, ramal, coletor, debit udara, cfm, gesekan, gesekan sama, ukuran, jadwal, takeoff, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, limbah, dn
from: 85140bc5
---

## Yang akan Anda lakukan

Gambar pipa dan duct sebuah bangunan seperti Anda menggambar dinding: klik sudut-sudut garis sumbu lintasan pada ketinggian yang Anda atur. BimCraft membuat fitting-nya, menempatkan setiap bagian ke dalam sistemnya, dan menyambungkannya, sehingga program lain membaca lintasan sebagai satu sistem yang tersambung.

## Menggambar pipa

1. Nyalakan {{ui:Draw}}, buka {{ui:Build}}, dan pilih {{ui:Pipe}}.
2. Di bilah, pilih **system** (air dingin, air panas, pembuangan sanitasi, gas…). Itu menetapkan material yang biasa: tembaga untuk air, PVC untuk pembuangan dan ven, baja untuk pemanasan, air dingin (chilled water), gas, dan proteksi kebakaran. Ubah **material**, **class**, dan **size** jika perlu. Ukuran dan tebal berasal dari standar publik: pipa baja ASME B36.10M, tembaga ASTM B88, PVC ASTM D1785, dan PEX ASTM F876. Proyek di Brasil dapat memakai **PVC water pipe (NBR 5648)**, yaitu PVC solvent-weld untuk air dingin, dan **PVC drain pipe (NBR 5688)**, seri normal atau diperkuat, untuk pembuangan dan ven: ukurannya diberi nama dengan DN (DN 25, DN 100). Setelah Anda memilih salah satunya, memilih sistem lain tetap memakai pipa Brasil (PVC drain pipe untuk pembuangan sanitasi setelah PVC water pipe).
3. Atur **At**: tinggi sumbu pipa di atas level.
4. Klik tempat pipa mulai, lalu setiap sudut. Klik dua kali, atau tekan {{key:Enter}}, pada titik terakhir. {{key:Backspace}} membatalkan sudut terakhir; {{key:Esc}} membuang lintasan.

Pipa menempel seperti dinding, dan ke lintasan lain: mulai di ujung pipa untuk melanjutkannya, atau akhiri pada garis pipa untuk bercabang darinya. Lintasan baru mengambil ketinggian pipa tempat ia menempel.

Lintasan yang dimulai atau diakhiri pada port sebuah peralatan mengambil ukuran dan sistemnya serta tetap menempel padanya: lihat [Peralatan MEP dengan port](topic:mep-equipment) dan [Sambungkan pipa dan duct ke peralatan](topic:mep-connections).

## Mengatur standar plambing proyek

Daftar pertama di bilah pipa adalah **standar plambing** model: **US (IPC, inci)** atau **Brasil (ABNT, DN)**. Pilihan itu disimpan dalam model, sehingga setiap orang yang membuka file memulai lintasan dengan cara yang sama. Pada **US**, lintasan baru dimulai dengan tembaga (air) atau PVC Schedule 40 (pembuangan), dalam inci, dengan kemiringan International Plumbing Code. Pada **Brasil**, air dingin dimulai sebagai PVC soldável DN 25, pembuangan dan ven sanitasi serta pembuangan hujan sebagai PVC esgoto DN 100 dengan kemiringan NBR 8160, dan air panas dengan tembaga. Pilihan ini juga berlaku untuk lintasan yang dimulai pada konektor fixture atau port peralatan. Pipa yang sudah digambar tetap memakai material dan tabelnya sendiri; daftar material tetap terbuka, sehingga Anda tetap dapat menggambar satu lintasan Brasil dalam model US dengan sengaja. File tanpa pilihan berperilaku seperti sebelumnya: lintasan baru mengikuti material yang sedang dipakai.

## Menggambar duct

1. Pilih {{ui:Duct}}. Pilih sistem (suplai, balik, buang, atau udara luar) dan bentuknya: bulat, persegi panjang, atau oval pipih.
2. Ketik lebar dan tinggi (lebar duct bulat adalah diameternya), dan **At** untuk tinggi sumbu.
3. Untuk menentukan ukuran dari debit udara, ketik **Airflow** dan laju **Friction** lalu klik {{ui:Size it}}. Duct ditentukan ukurannya dengan gesekan sama, metode dalam bab desain duct dari ASHRAE Handbook, lalu dibulatkan ke ukuran yang tersedia, sehingga gesekannya sama dengan atau di bawah laju yang Anda ketik. Tanpa laju yang diketik, dipakai 0.08 in. air per 100 ft (0.8 Pa/m). Duct persegi panjang mempertahankan tinggi yang Anda ketik dan mendapat lebar; BimCraft menyatakannya jika sisinya lebih dari 4 banding 1.
4. Klik sudut-sudutnya seperti untuk pipa.

## Fixture plambing

{{ui:Build}} › {{ui:Place family}} menawarkan lima fixture untuk dimulai, masing-masing dengan konektor pembuangan dan air dingin: **Water closet**, **Lavatory**, **Kitchen sink**, **Shower tray**, dan **Laundry tub**. Bagian depannya menghadap Anda saat Anda menempatkannya dan bagian belakangnya menempel ke dinding. Pembuangannya berada pada ukuran pembuangan fixture terkecil dari NBR 8160 (DN 100 untuk water closet, DN 50 untuk kitchen sink, DN 40 untuk yang lain); air adalah DN 20. Ubah ukurannya, atau sunting seperti famili lainnya: lihat [Famili dan ukurannya](topic:families).

Sebuah famili menyatakan fixture apa dirinya di bawah {{ui:Plumbing fixture}} pada tab {{ui:Connectors}} di editor famili. Pembuangannya kemudian dihitung dalam unit fixture: 6 UHC untuk water closet, 1 untuk lavatory, 3 untuk kitchen sink atau laundry tub, 2 untuk shower (NBR 8160), atau unit fixture pembuangan dari IPC Table 709.1.

## Dari konektor fixture

Elemen yang ditempatkan dari famili dengan konektor (pembuangan dan keran sebuah basin, leher terminal udara: lihat [Sunting famili](topic:family-editor)) menampilkan konektor bebasnya sebagai titik saat {{ui:Pipe}} atau {{ui:Duct}} aktif, dan penunjuk menempel padanya.

- **Mulai pada konektor**: lintasan mengambil sistem dan ukurannya (pipa dari material di bilah yang sesuai atau tepat di atas ukuran konektor; duct bulat dengan diameternya). Ketika konektor menghadap ke bawah atau ke atas, seperti pembuangan di bawah basin, lintasan pertama-tama lurus turun atau naik ke ketinggian di **At**, lalu berlanjut sesuai klik Anda.
- **Akhiri pada konektor**: lintasan turun atau naik ke konektor dan berakhir di sana.

Lintasan tersambung ke elemen dalam file IFC, sehingga program lain melihat fixture sebagai bagian dari sistemnya. Elemen yang ditempatkan kemudian dengan konektor di ujung lintasan juga tersambung padanya. Lintasan yang dipindahkan menjauh dari konektor tidak lagi tersambung padanya.

## Fitting, dibuat untuk Anda

| Di mana | Yang dibuat BimCraft |
|---|---|
| Lintasan berbelok | Sebuah elbow. Pipa baja pada radius panjang ASME B16.9 (1.5 × ukurannya), pipa lain pada satu diameter luar, duct bulat pada 1.5 diameter, duct persegi panjang pada satu lebar (atau satu tinggi untuk belokan naik atau turun) |
| Lintasan berakhir pada garis lintasan lain | Sebuah tee; lintasan lain dipotong di situ |
| Dua lintasan bertemu ujung ke ujung dengan ukuran berbeda | Sebuah reducer (pipa) atau transisi (duct) |
| Dua lintasan berukuran sama bertemu ujung ke ujung dengan sudut | Sebuah elbow |

Saat Anda mengubah, memindahkan, atau menghapus lintasan, setiap fitting pada level itu dibuat ulang. Jika sebuah kaki terlalu pendek untuk fitting di ujung-ujungnya, BimCraft menyatakannya dan tidak mengubah apa pun: pindahkan sudutnya lebih jauh.

:::note
Fitting dan valve bersifat generik: diambil dari ukuran pipa atau duct, bukan dari katalog pabrikan. Fitting socket, press, dan grooved, badan valve, dan peralatan memiliki ukuran sendiri dari pabrikan; periksa dengan pemasok Anda sebelum memesan.
:::

## Riser

Saat menggambar, ketik ketinggian baru di **At** dan tekan {{key:Enter}}: lintasan naik atau turun lurus pada sudut terakhir, dengan elbow di setiap ujung. Riser dapat naik ke level di atasnya. Setiap level menampilkan bagian lintasan yang dijangkau rentang tampilannya, dengan **UP** atau **DN** pada riser.

## Pembuangan dan kemiringannya

Pembuangan sanitasi dan hujan dimulai pada kemiringan terkecil yang diizinkan International Plumbing Code untuk ukurannya: 1/4 in. per ft sampai 2-1/2 in., 1/8 in. per ft dari 3 sampai 6 in., 1/16 in. per ft dari 8 in. Pipa drainase PVC Brasil dimulai pada kemiringan NBR 8160: 2 % sampai DN 75, 1 % dari DN 100. Ketik kemiringan lain di bilah atau di Properti: `1/4"/ft`, `2 %`, atau `1:50`. Lintasan turun dari titik pertamanya, jadi gambarlah pembuangan searah alirannya. Denah menampilkan penurunan dan panah. Properti memberi peringatan ketika sebuah pembuangan lebih datar dari minimum standar.

## Tentukan ukuran pembuangan dengan unit fixture

Pilih pembuangan sanitasi: **Unit fixture** di Properti menyatakan berapa banyak yang dibawanya dan ukuran terkecil yang dibutuhkannya. Setiap fixture plambing yang konektor pembuangannya berada di lintasan dihitung, dan begitu pula setiap pembuangan yang mengalir ke dalamnya: gambarlah pembuangan searah alirannya, masing-masing berakhir pada pembuangan tempat ia mengalir.

- Pembuangan dalam pipa drainase PVC Brasil dihitung dalam **UHC** dan mengikuti NBR 8160; yang lain dihitung dalam **DFU** dan mengikuti International Plumbing Code.
- **Pembuangan**: sebuah **Cabang** ditentukan ukurannya dari tabel standar untuk cabang fixture; sebuah **Pembuangan gedung** dari tabelnya menurut **Kemiringan**, sehingga kemiringannya berpengaruh.
- Pembuangan tidak pernah lebih kecil dari pembuangan fixture yang dilayaninya (water closet membutuhkan DN 100, atau 3 in.), dan tidak lebih kecil dari pembuangan yang mengalir ke dalamnya. Di bawah NBR 8160, pembuangan gedung minimal DN 100.

{{ui:Size the drains}} membuat setiap pembuangan sanitasi dalam model yang terlalu kecil untuk unit fixture-nya menjadi ukuran yang dibutuhkannya, sebagai satu langkah yang dapat Anda urungkan. Pembuangan yang digambar lebih besar dari yang dibutuhkan dibiarkan. Ketika sebuah pembuangan membawa lebih banyak dari yang dapat ditampung ukuran terbesar pipanya pada kemiringannya, BimCraft menyatakannya: beri kemiringan yang lebih curam atau pipa lain.

:::note
Tabelnya adalah tabel untuk pembuangan horizontal. Stack, ven, dan pembuangan hujan tidak ditentukan ukurannya di sini: periksa, bersama seluruh desain, terhadap standar yang berlaku untuk proyek.
:::

## Valve

1. Pilih {{ui:Valve}} dan jenisnya: gate, ball, globe, atau check.
2. Klik pada pipa tempat valve akan dipasang. Pipa dipotong di sekelilingnya dan valve tersambung ke kedua sisinya.

Properti lintasan mendaftar valve-nya, masing-masing dengan {{ui:Remove}}.

Jenis valve lain, strainer, damper pada duct, spesifikasi pipa Anda sendiri, dan famili pabrikan: lihat [Spesifikasi pipa, valve, damper, dan famili pabrikan](topic:pipe-specs).

## Mengubah lintasan

Pilih bagian mana pun dari lintasan, di denah atau tampilan 3D. Di Properti:

- **System**, **Material**, **Class**, dan **Size** (pipa), atau **Shape**, **Width**, **Height** (duct).
- **Height above the level** memindahkan seluruh lintasan naik atau turun.
- **Insulation**: tebalnya, disimpan untuk pemeriksaan jarak bebas dan daftar bukaan (tidak ada yang digambar untuknya): lihat [Periksa pipa dan duct terhadap struktur](topic:mep-against-structure).
- Pipa baja: **Cut into spools**: lihat [Spool pipa baja dan lembar spool](topic:pipe-spools).
- **Slope** (pipa).
- **Flow** dengan {{ui:Size it}}: untuk air, ukuran terkecil yang menjaga air pada 8 ft/s (2.4 m/s), atau 5 ft/s (1.5 m/s) untuk air panas; pada 3 m/s untuk pipa PVC air Brasil (NBR 5626). Untuk duct, kecepatan dan laju gesekan duct sebagaimana digambar. Pembuangan sanitasi justru ditentukan ukurannya dari unit fixture-nya: lihat **Tentukan ukuran pembuangan dengan unit fixture** di atas.

Setiap perubahan adalah satu langkah {{ui:Undo}}. {{key:Delete}} menghapus seluruh lintasan.

## Denah

- Pipa yang lebih kecil dari 150 mm (sekitar 6 in.) digambar sebagai satu garis pada garis sumbunya; pipa yang lebih besar dan semua duct digambar sebagai dua garis pada lebarnya.
- Setiap sistem memiliki warnanya sendiri; PDF denah mencetaknya dalam hitam.
- Setiap lintasan diberi label ukuran dan sistemnya (misalnya `2" CW` atau `16×10 SA`).
- Rentang tampilan denah menentukan lintasan yang ditampilkannya, dan {{ui:Shown in this plan}} dapat membiarkan **Pipa** atau **Duct** tidak ditampilkan: lihat [Tampilan, rentang tampilan, dan lembar Anda sendiri](topic:views-and-sheets).

## Jadwal dan takeoff

Panel {{ui:Schedules}} menambahkan **Pipa** (menurut sistem, material, dan ukuran, dengan panjangnya), **Duct** (menurut sistem, bentuk, dan ukuran, dengan panjang dan luas permukaan luarnya), dan **Fitting dan valve** (menurut jenis dan ukuran, dihitung). Klik sebuah baris untuk memilih apa yang didaftarnya; {{ui:Download CSV}} mengunduhnya.

{{ui:Takeoff}} membawa lintasan ke TakeoffCraft: pipa dan duct menurut ukuran sebagai lintasan yang digambar di denah (pembuangan miring diukur sepanjang kemiringannya), fitting dan valve dihitung di tempatnya: lihat [Kirim kuantitas model ke TakeoffCraft](topic:takeoff). Riser tidak dimasukkan ke lembar itu, karena denah tidak dapat mengukurnya; jadwal Pipa memuat panjangnya.

## Dalam file IFC

Setiap lintasan adalah rakitan yang memuat bagiannya: segmen pipa dan duct, fitting dan valve, masing-masing dengan tipe, material, warna untuk sistemnya, dan port-portnya. Port yang bersentuhan tersambung, dan setiap bagian termasuk dalam sistem distribusinya (file IFC2X3 mendapat hal yang sama sebagai segmen aliran, fitting, dan pengontrol dalam satu sistem). Program lain yang membaca sistem IFC melihat satu lintasan tersambung per sistem. Definisi lintasan itu sendiri disimpan bersamanya, sehingga BimCraft membuatnya ulang dengan cara yang sama saat Anda mengubahnya.
