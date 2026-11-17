---
title: Benarkan pembantu AI bekerja dengan model anda
summary: Hidupkan pembantu dalam Tetapan supaya pembantu pada komputer anda boleh mencari elemen, membaca sifatnya, mengasingkannya dalam paparan dan melukis dinding, pintu, tingkap, lantai, aras dan grid, melalui CadCraft Studio. Dimatikan sehingga anda menghidupkannya.
keywords: ai, pembantu, mcp, skrip, automasi, studio, cari elemen, asingkan, sifat, kebenaran, putuskan sambungan, aktiviti, lukis dinding, tambah pintu, tambah tingkap, aras, grid, lantai, buat asal, simpan, baris arahan, cli, tanpa kepala, guna dengan pembantu AI
from: c5ee595b
---

## Apa yang anda akan pelajari

Cara membenarkan pembantu AI (mana-mana pembantu yang bertutur MCP) melihat ke dalam model IFC yang anda buka dan melukis di dalamnya, apa yang boleh dan tidak boleh dilakukannya, dan cara menghentikannya.

## Apa yang pembantu boleh lakukan dalam BimCraft

| Ia meminta | Apa yang berlaku | Perlu |
|---|---|---|
| Cari elemen | Ia mendapat senarai elemen mengikut kelas, tingkat, nama atau nilai sifat, seperti yang dilakukan **Cari** | Baca |
| Baca sifat | Ia mendapat satu atribut elemen, jenis, set sifat dan kuantiti, seperti yang ditunjukkan oleh **Sifat** | Baca |
| Terangkan model, senaraikan dinding | Ia mendapat aras, dinding, pintu, tingkap, bilik, lantai, grid dan tiang, dan hujung setiap dinding, jenis dan ketinggiannya | Baca |
| Asingkan, lut sinar, sembunyi atau tunjuk | Paparan 3D berubah seolah-olah anda menggunakan menu {{ui:Tunjuk}} | Ubah paparan dan lukis |
| Lukis dinding, pintu, tingkap, lantai, aras atau garisan grid | Model berubah seolah-olah anda menggunakan alat {{ui:Lukis}}: dinding bercantum, bilik, lantai dan bumbung mengikut | Ubah paparan dan lukis |
| Tukar nama atau nilai sifat | Nama, Penerangan, Jenis objek atau Tag satu elemen, atau satu nilai sifat. Nilai yang dikongsi dengan elemen lain disalin untuknya dahulu; nilai jenis hanya berubah apabila pembantu berkata demikian, kerana setiap elemen jenis itu mengikut | Ubah paparan dan lukis |
| Alihkan, padam, ubah dinding, pintu dan tingkap | Elemen dialihkan atau dipadam bersama elemen yang dihoskannya. Dinding yang dilukis dengan alat {{ui:Lukis}} berubah mengikut hujung atau jenisnya; pintu dan tingkap mengikut tempat, saiz atau jenisnya; dan bilik serta sambungan mengikut | Ubah paparan dan lukis |
| Sediakan, susun dan baca jadual | "Jadual pintu mengikut tingkat, dengan penarafan api dan ironmongeri": pembantu menamakan jadual, lajurnya (sifat atau tag menjadi lajur) dan pengumpulannya; BimCraft mengisinya daripada model dan menyusunnya, dan mengambil apa yang tidak dinyatakan oleh pembantu daripada standard pejabat. Persediaan itu menyertai senarai {{ui:Jadual}} anda. Setiap baris yang dikembalikan menamakan elemennya, supaya ia boleh memilihnya | Baca untuk membaca; Ubah paparan dan lukis untuk menyimpan persediaan |
| Eksport jadual | CSV, Excel, atau teks dipisahkan tab untuk ditampal ke Google Sheets (tiada apa dihantar ke Google) | Eksport |
| Baca dan tetapkan kemasan bilik | Jenis kemasan, dan kemasan lantai, dinding dan siling setiap bilik, zon; luas, kiraan jubin dan isipadu substrat kemudian datang daripada jadual kemasan | Baca; Ubah paparan dan lukis untuk menetapkan |
| Pilih elemen, buat asal langkahnya sendiri | Elemen dipilih dalam paparan; langkah terakhirnya dibuat asal | Ubah paparan dan lukis |
| Simpan | Fail IFC baharu dengan setiap perubahan, seperti yang dihasilkan oleh {{ui:Simpan sebagai IFC}} (asal tidak pernah diubah) | Simpan |
| Eksport USD | Model yang dibuka sebagai OpenUSD (.usda, .usdc atau .usdz), seperti yang ditulis oleh {{ui:USD}} pada bar alat | Eksport |
| Render gambar, jalankan baris gilir render | Gambar paparan 3D, seperti yang dihasilkan oleh dialog {{ui:Render}} dengan tetapan Render anda melainkan ia meminta yang lain; atau gambar kualiti tinggi ditambah pada baris gilir dialog dan dirender satu demi satu (baris gilir memerlukan WebGPU). Tiada apa dalam model berubah ([Render gambar](topic:render)) | Eksport |

Setiap perubahan yang dibuat oleh pembantu ialah satu langkah dalam **Perubahan**, dinamakan "Pembantu: …" (contohnya "Pembantu: tambah 4 dinding"), jadi {{key:Mod+Z}} membuat asal keseluruhan tindakannya, dan anda boleh melihat langkah siapa itu. Dalam tetingkap, ia tidak boleh membuka fail: anda membuka model; ia bekerja dengan model yang sedang dibuka.

## Hidupkannya

Pembantu berhubung dengan BimCraft melalui CadCraft Studio pada komputer anda; pelayar biasa tidak mempunyai jalan masuk.

1. Buka {{ui:Tetapan}} dan pilih tab **BimCraft**.
2. Di bawah **Pembantu**, tandakan **Benarkan pembantu AI dan skrip menggunakan BimCraft**.
3. **Baca** sudah ditandakan untuk anda. Tandakan **Ubah paparan dan lukis** juga jika pembantu boleh mengasingkan dan menyembunyikan elemen serta melukis, dan **Simpan** jika ia boleh menyimpan model sebagai fail baharu.
4. Sambungkan pembantu dalam Studio (Studio menunjukkan alamat dan tetapan untuk ditampal ke dalamnya).

## Semasa pembantu bersambung

Nota di bahagian atas panel kanan menyatakan pembantu mana yang bersambung dan apa yang boleh dilakukannya. Klik {{ui:Putuskan sambungan}} untuk menamatkan sesinya serta-merta; ia perlu bersambung semula untuk meneruskan.

**Aktiviti**, di bawah **Pembantu** dalam Tetapan, menyenaraikan setiap panggilan yang dibuat oleh pembantu, yang terbaru dahulu, dengan sama ada ia berjaya.

:::tip
Tanya dengan kata-kata biasa, contohnya "asingkan dinding luar pada Aras 1", "pintu mana yang tiada penarafan api?" atau "lukis bilik 6 dengan 4 meter pada Aras 1 dengan pintu di dinding selatan". Pembantu mencari elemen dan menunjukkannya dalam paparan anda, atau melukisnya.
:::

## Tanpa tetingkap: skrip dan baris arahan

Alat lukisan yang sama berfungsi pada fail IFC dalam folder yang anda namakan, tanpa tetingkap dibuka: pelayan MCP dan baris arahan CadCraft boleh memulakan bangunan baharu atau membuka fail IFC, menerangkannya, menambah dinding, pintu, tingkap, lantai, aras dan grid, membuat asal dan menyimpannya sebagai fail `.ifc` baharu. Anda memutuskan folder mana yang boleh digunakannya dan sama ada ia boleh mengubah atau menyimpan apa-apa.

## Matikannya

Nyahtanda **Benarkan pembantu AI dan skrip menggunakan BimCraft**. Setiap pembantu diputuskan sambungannya serta-merta, dan tetapan itu disimpan untuk kali seterusnya.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh kerja, setiap satu dengan alat yang dipanggilnya.
- [Cari elemen mengikut kelas, nama atau sifat](topic:find)
- [Sembunyikan, asingkan dan lut sinarkan elemen](topic:hide-and-isolate)
- [Tetapan BimCraft](topic:settings)
