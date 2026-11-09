---
title: Fail yang dibuka dan disimpan oleh BimCraft
summary: Setiap format yang dibuka BimCraft, apa yang dikekalkannya, apa yang disimpannya, ke mana fail yang disimpan pergi, dan apa yang berubah antara pelayar serta apabila anda luar talian.
keywords: format, buka, simpan, eksport, muat turun, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, muat naik, privasi, saiz fail
from: a7275dbf
---

BimCraft membaca fail di komputer anda, dalam tab pelayar. **Tiada apa-apa dimuat naik** kepada CadCraft atau sesiapa pun. Apabila anda menyimpan, BimCraft menyerahkan kepada pelayar satu fail baharu untuk dimuat turun; ia tidak sekali-kali menulis ganti fail yang anda buka.

## Apa yang dibuka

| Format | Sambungan | Apa yang anda dapat |
|---|---|---|
| IFC | `.ifc` | Model dalam 3D, tingkat, bilangan elemen dan setiap sifat elemen. Nama, tag dan nilai sifat tunggal boleh diubah. |
| Fail projek dan keluarga | `.rvt` `.rfa` `.rte` `.rft` | Kad fail: keluaran, binaan, perkongsian kerja, maklumat projek, parameter keluarga, fail terpaut dan gambar pratonton. Tiada 3D. |
| DWG | `.dwg` | Lukisan dalam 2D: ruang model, setiap helaian, lapisan, lukisan terpaut, imej dan pandangan cetak. Ruang model dalam 3D juga. Format daripada AutoCAD 2000 hingga 2018 ialah yang telah disemak. |
| DXF | `.dxf` | Sama seperti DWG. |
| STEP | `.step` `.stp` | Bahagian, sebahagian peralatan atau model pembekal (AP203, AP214, AP242) dalam 3D: setiap pepejal menjadi satu elemen (proksi elemen bangunan) bagi model IFC kecil pada satu tingkat, dibaca sebagai segi tiga pada saiz sebenar, satu himpunan dengan setiap bahagian di tempat fail itu meletakkannya. Ia berfungsi seperti mana-mana IFC selepas itu: sifat, keratan, ukur, simpan sebagai IFC. Warna dan pepohon himpunan tidak dibaca. |
| Awan titik | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Imbasan dalam paparan 3D, di sebelah model atau berdiri sendiri: lihat [Tunjukkan awan titik di sebelah model](topic:point-clouds). |
| Bundle projek | `.ccbundle.zip` | Model dengan pandangan, layout dan kumpulan sifatnya: lihat [Buka bundle projek](topic:open-project-bundle). |
| Satu folder | apa-apa | Laporan setiap model, lukisan dan bundle projek dalamnya. Mana-mana IFC, model, lukisan atau bundle dalam laporan dibuka dengan satu klik. |

[Apa yang BimCraft baca daripada setiap format](topic:file-formats) menerangkannya dengan lebih terperinci.

BimCraft menentukan apa jenis fail sesuatu dengan melihat bait pertamanya serta namanya, jadi fail projek dengan sambungan luar biasa tetap dibuka sebagai kad fail.

### Tidak dibuka

- `.ifczip` dan `.ifcxml`: BimCraft memaklumkan ".ifczip belum disokong lagi. Simpan atau eksport model sebagai fail .ifc biasa." Nyahmampatkan `.ifczip` (ia mengandungi `.ifc` biasa) atau eksport semula sebagai IFC biasa.
- Lukisan DGN disenaraikan dalam laporan folder tetapi tidak dibuka.
- PDF, imej dan fail pejabat tidak dibuka dengan sendirinya. Imej digunakan sebagai gambar dalam DWG, dan {{ui:Build}} › {{ui:From a drawing…}} menukar halaman PDF atau imbasan kepada dinding: lihat [Dinding daripada set pelan](topic:walls-from-plans).

## Apa yang disimpan

| Anda klik | Anda dapat | Di mana |
|---|---|---|
| {{ui:Save as IFC}} | Fail IFC baharu dengan suntingan anda, dinamakan "*nama asal* (edited).ifc" | Folder muat turun pelayar anda |
| {{ui:Download CSV}} dalam jadual peralatan | CSV bagi item dalam senarai, dinamakan "*nama lukisan* equipment.csv" | Folder muat turun pelayar anda |

Perkara lain disimpan di tempat ia dibuat, setiap satu dalam topiknya sendiri: {{ui:USD}} ([Eksport model sebagai USD](topic:usd)), {{ui:Collada}} (.dae dan .kmz Google Earth: [Eksport model sebagai Collada atau untuk Google Earth](topic:collada)), .glb {{ui:For rendering}}, gambar yang di-render, helaian dan pelan sebagai PDF, jadual dan senarai sebagai CSV, isu BCF, hamparan COBie, fail keluarga, serta imbasan berdaftar sebagai LAS atau E57. BimCraft tidak menyimpan DWG, DXF atau fail projek, dan ia tidak sekali-kali mengubah fail yang anda buka.

:::chromium
Chrome dan Edge menyimpan muat turun ke folder yang ditetapkan dalam tetapannya, biasanya Downloads. Untuk diminta tempat hendak menyimpan setiap kali, hidupkan "Ask where to save each file before downloading" dalam tetapan muat turun pelayar.
:::

:::firefox
Firefox menyimpan ke folder Downloads melainkan anda menetapkannya kepada "Always ask you where to save files" dalam tetapannya.
:::

:::safari
Safari menyimpan ke Downloads melainkan anda memilih folder lain di bawah **Safari > Settings > General > File download location**.
:::

## Menyimpan kali kedua

Setiap simpanan memuat turun keseluruhan model dengan **setiap suntingan sejak anda membukanya**, bukan hanya suntingan selepas simpanan terakhir. Senarai {{ui:Changes}} bermula kosong semula selepas setiap simpanan, jadi anda tidak boleh buat asal melepasi sesuatu simpanan. Untuk bermula semula dari asal, buka semula fail asal.

## Fail besar dan memori

- Fail **IFC** dibaca sepenuhnya ke dalam memori tab, dan geometri 3D mengambil lebih banyak memori. Model beberapa ratus megabait boleh terlalu besar untuk komputer riba. Di atas 1.5 juta segi tiga, tepi dimatikan untuk menjimatkan memori ("Edges are off for very large models").
- Fail **projek** tidak dibaca sepenuhnya. BimCraft hanya membaca bahagian kecil yang diperlukannya, kira-kira 40 KB hingga 100 KB tanpa mengira saiz fail, jadi model pusat 500 MB pada pemacu rangkaian dibuka dalam sekelip mata.
- Fail **DWG dan DXF** dibaca sepenuhnya. Lukisan yang sangat besar memaparkan "This drawing is very large; only part of it is shown."
- **Folder** sehingga 20,000 fail dibuka. Hanya beberapa kilobait yang diperlukan setiap kad model dibaca.

Lihat [Pelayar, peranti dan memori](topic:platforms) untuk maklumat lanjut.

## Dalam talian dan luar talian

Membuka fail tidak pernah memerlukan internet. Satu pembaca dimuat dari laman kali pertama anda memerlukannya: enjin IFC, pada kali pertama anda membuka model IFC ("Starting the IFC engine…"). Pembaca DWG dan DXF adalah sebahagian daripada aplikasi.

:::offline
Anda luar talian. Jika butang bar aplikasi menyatakan {{ui:Offline ready}}, setiap format dibuka seperti biasa. Jika tidak, model IFC tidak dapat dibuka melainkan satu yang telah dibuka dalam tab ini: sambung semula dahulu. Lihat [Dalam talian dan luar talian](topic:online-offline).
:::

Untuk menggunakan BimCraft tanpa sambungan, klik {{ui:Save for offline}} dalam bar aplikasi semasa anda dalam talian dan tunggu {{ui:Offline ready}}. Salinan tersimpan itu kira-kira 33 MB; ia termasuk enjin IFC, jadi model IFC turut dibuka secara luar talian. [Bekerja secara luar talian](common:offline) menerangkan salinan tersimpan secara umum.

## Simpanan awan

Simpanan awan belum tersedia lagi. Simpan salinan yang anda sunting pada komputer anda sendiri atau pelayan fail pejabat anda, seperti mana-mana fail lain. Lihat [Fail anda](common:your-files).
