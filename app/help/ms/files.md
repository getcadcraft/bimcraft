---
title: Fail yang dibuka dan disimpan oleh BimCraft
summary: Setiap format yang dibuka BimCraft, apa yang dikekalkannya, apa yang disimpannya, ke mana fail yang disimpan pergi, dan apa yang berubah antara pelayar serta apabila anda luar talian.
keywords: format, buka, simpan, eksport, muat turun, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, muat naik, privasi, saiz fail
from: a1f0161b
---

BimCraft membaca fail di komputer anda, dalam tab pelayar. **Tiada apa-apa dimuat naik** ke CadCraft atau sesiapa pun. Apabila anda menyimpan, BimCraft menyerahkan kepada pelayar satu fail baharu untuk dimuat turun; ia tidak sekali-kali menulis ganti fail yang anda buka.

## Yang dibukanya

| Format | Sambungan | Apa yang anda dapat |
|---|---|---|
| IFC | `.ifc` | Model dalam 3D, tingkat, bilangan elemen dan sifat setiap elemen. Nama, tag dan nilai sifat tunggal boleh diubah. |
| Fail projek dan keluarga | `.rvt` `.rfa` `.rte` `.rft` | Kad fail: keluaran, binaan, kerja berkongsi, maklumat projek, parameter keluarga, fail berpaut dan gambar pratonton. Tiada 3D. |
| DWG | `.dwg` | Lukisan dalam 2D: ruang model, setiap helaian, lapisan, lukisan berpaut, imej dan pandangan cetakan. Ruang model dalam 3D juga. Format dari AutoCAD 2000 hingga 2018 ialah yang telah diperiksa. |
| DXF | `.dxf` | Sama seperti DWG. |
| STEP | `.step` `.stp` | Bahagian, sekeping peralatan atau model pembekal dalam 3D (AP203, AP214, AP242): setiap pepejal menjadi satu elemen (elemen proksi elemen bangunan) dalam model IFC kecil pada satu tingkat, dibaca sebagai segi tiga pada saiz sebenar, dan satu himpunan dengan setiap bahagian di tempat fail itu meletakkannya. Selepas itu ia berfungsi seperti mana-mana IFC: sifat, keratan, ukur, simpan sebagai IFC. Warna dan pokok himpunan tidak dibaca. |
| Awan titik | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Imbasan dalam pandangan 3D, bersebelah model atau berdiri sendiri: lihat [Tunjuk awan titik bersebelahan model](topic:point-clouds). |
| Bundle projek | `.ccbundle.zip` | Model dengan pandangan, susun atur dan kumpulan sifatnya: lihat [Buka bundle projek](topic:open-project-bundle). |
| Folder | apa-apa | Laporan setiap model, lukisan dan bundle projek di dalamnya. Mana-mana IFC, model, lukisan atau bundle dalam laporan itu dibuka dengan satu klik. |

[Apa yang BimCraft baca daripada setiap format](topic:file-formats) menerangkannya dengan lebih terperinci.

BimCraft menentukan apa jenis sesuatu fail dengan melihat bait pertamanya serta namanya, jadi fail projek dengan sambungan luar biasa tetap dibuka sebagai kad fail.

### Tidak dibuka

- `.ifczip` dan `.ifcxml`: BimCraft memaklumkan ".ifczip belum disokong lagi. Simpan atau eksport model sebagai fail .ifc biasa." Nyahmampat `.ifczip` (ia mengandungi `.ifc` biasa) atau eksport semula sebagai IFC biasa.
- Lukisan DGN disenaraikan dalam laporan folder tetapi tidak dibuka.
- PDF, imej dan fail pejabat tidak dibuka sendiri. Imej digunakan sebagai gambar di dalam DWG, dan {{ui:Build}} › {{ui:From a drawing…}} menukar halaman PDF atau imbasan kepada dinding: lihat [Dinding daripada set pelan](topic:walls-from-plans).

## Yang disimpannya

| Anda klik | Anda dapat | Di mana |
|---|---|---|
| {{ui:Save as IFC}} | Fail IFC baharu dengan suntingan anda, dinamakan "*nama asal* (edited).ifc" | Folder muat turun pelayar anda |
| {{ui:Download CSV}} dalam jadual peralatan | CSV bagi item dalam senarai, dinamakan "*nama lukisan* equipment.csv" | Folder muat turun pelayar anda |

Perkara lain disimpan di tempat ia dibuat, setiap satu dalam topiknya sendiri: {{ui:USD}} ([Eksport model sebagai USD](topic:usd)), .glb {{ui:For rendering}}, gambar render, helaian dan pelan sebagai PDF, jadual dan senarai sebagai CSV, isu BCF, hamparan COBie, fail keluarga, dan imbasan berdaftar sebagai LAS atau E57. BimCraft tidak menyimpan DWG, DXF atau fail projek, dan ia tidak pernah mengubah fail yang anda buka.

:::chromium
Chrome dan Edge menyimpan muat turun ke folder yang ditetapkan dalam tetapannya, biasanya folder Muat turun. Untuk ditanya di mana hendak menyimpan setiap fail, hidupkan "Tanya di mana hendak simpan setiap fail sebelum muat turun" dalam tetapan muat turun pelayar.
:::

:::firefox
Firefox menyimpan ke folder Muat turun melainkan anda menetapkannya kepada "Sentiasa tanya saya di mana hendak simpan fail" dalam tetapannya.
:::

:::safari
Safari menyimpan ke Muat turun melainkan anda memilih folder lain di bawah **Safari > Settings > General > File download location**.
:::

## Menyimpan kali kedua

Setiap simpanan memuat turun keseluruhan model dengan **setiap suntingan sejak anda membukanya**, bukan hanya suntingan selepas simpanan terakhir. Senarai {{ui:Changes}} kosong semula selepas setiap simpanan, jadi anda tidak boleh buat asal melebihi satu simpanan. Untuk bermula semula dari yang asal, buka semula fail asal.

## Fail besar dan memori

- Fail **IFC** dibaca sepenuhnya ke dalam memori tab, dan geometri 3D mengambil lebih banyak memori lagi. Model beberapa ratus megabait boleh jadi terlalu besar untuk komputer riba. Melebihi 1.5 juta segi tiga, tepi dimatikan untuk menjimatkan memori ("Tepi dimatikan untuk model yang sangat besar").
- **Fail projek** tidak dibaca sepenuhnya. BimCraft hanya membaca bahagian kecil yang diperlukannya, kira-kira 40 KB hingga 100 KB tidak kira betapa besar fail itu, jadi model pusat 500 MB pada pemacu rangkaian dibuka dalam sekelip mata.
- Fail **DWG dan DXF** dibaca sepenuhnya. Lukisan yang sangat besar memaparkan "Lukisan ini terlalu besar; hanya sebahagian daripadanya ditunjukkan."
- **Folder** sehingga 20,000 fail dibuka. Hanya beberapa kilobait yang diperlukan setiap kad model dibaca.

Lihat [Pelayar, peranti dan memori](topic:platforms) untuk maklumat lanjut.

## Dalam talian dan luar talian

Membuka fail tidak pernah memerlukan internet. Satu pembaca dimuat dari tapak kali pertama ia diperlukan: enjin IFC, kali pertama anda membuka model IFC ("Memulakan enjin IFC…"). Pembaca DWG dan DXF adalah sebahagian daripada aplikasi.

:::offline
Anda berada di luar talian. Jika butang bar aplikasi berbunyi {{ui:Offline ready}}, setiap format dibuka seperti biasa. Jika tidak, model IFC tidak dapat dibuka melainkan satu telah dibuka dalam tab ini: sambung semula dahulu. Lihat [Dalam talian dan luar talian](topic:online-offline).
:::

Untuk menggunakan BimCraft tanpa sambungan, klik {{ui:Save for offline}} pada bar aplikasi semasa anda dalam talian, dan tunggu {{ui:Offline ready}}. Salinan yang disimpan kira-kira 33 MB; ia termasuk enjin IFC, jadi model IFC turut dibuka secara luar talian. [Bekerja luar talian](common:offline) menerangkan salinan tersimpan secara umum.

## Simpanan awan

Simpanan awan belum tersedia. Simpan salinan yang telah disunting pada komputer anda sendiri atau pelayan fail pejabat anda, seperti mana-mana fail lain. Lihat [Fail anda](common:your-files).
