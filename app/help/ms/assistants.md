---
title: Biarkan pembantu AI bekerja dengan model anda
summary: Hidupkan pembantu dalam Tetapan supaya pembantu di komputer anda boleh mencari elemen, membaca sifatnya, mengasingkannya dalam paparan dan melukis dinding, pintu, tingkap, lantai, aras dan garisan grid, melalui CadCraft Studio. Mati sehingga anda menghidupkannya.
keywords: ai, pembantu, mcp, skrip, automasi, studio, cari elemen, asingkan, sifat, kebenaran, putus sambungan, aktiviti, lukis dinding, tambah pintu, tambah tingkap, aras, grid, lantai, buat asal, simpan, baris arahan, cli, tanpa tetingkap, guna dengan pembantu AI
from: 66d72742
---

## Apa yang anda akan pelajari

Cara membenarkan pembantu AI (mana-mana pembantu yang berkomunikasi melalui MCP) melihat ke dalam model IFC yang sedang anda buka dan melukis di dalamnya, apa yang boleh dan tidak boleh dilakukannya, dan cara menghentikannya.

## Apa yang boleh dilakukan pembantu dalam BimCraft

| Ia meminta | Apa yang berlaku | Perlu |
|---|---|---|
| Cari elemen | Ia mendapat senarai elemen mengikut kelas, tingkat, nama atau nilai sifat, seperti yang dilakukan **Cari** | Baca |
| Baca sifat | Ia mendapat atribut, jenis, set sifat dan kuantiti bagi satu elemen, seperti yang dipaparkan oleh **Sifat** | Baca |
| Terangkan model, senaraikan dinding | Ia mendapat aras, dinding, pintu, tingkap, bilik, lantai, grid dan tiang, serta hujung, jenis dan ketinggian setiap dinding | Baca |
| Asingkan, lut sinar, sembunyi atau tunjuk | Paparan 3D berubah seolah-olah anda menggunakan menu {{ui:Tunjuk}} | Ubah paparan dan lukis |
| Lukis dinding, pintu, tingkap, lantai, aras atau garisan grid | Model berubah seolah-olah anda menggunakan alat {{ui:Lukis}}: dinding bercantum, bilik, lantai dan bumbung mengikut perubahan | Ubah paparan dan lukis |
| Tukar nama atau nilai sifat | Satu Nama, Penerangan, Jenis objek atau Tag elemen, atau satu nilai sifat. Nilai yang dikongsi dengan elemen lain disalin dahulu untuknya; nilai jenisnya hanya berubah apabila pembantu menyatakannya, kerana setiap elemen jenis itu akan mengikut | Ubah paparan dan lukis |
| Alih, padam, tukar dinding, pintu dan tingkap | Elemen dialihkan atau dipadam bersama elemen yang dihosnya; dinding yang dilukis dengan alat {{ui:Lukis}} berubah mengikut hujung atau jenisnya, pintu dan tingkap mengikut kedudukan, saiz atau jenisnya, dan bilik serta cantuman mengikut perubahan | Ubah paparan dan lukis |
| Sediakan, susun dan baca jadual | "Jadual pintu mengikut tingkat, dengan penarafan api dan perkakasan": pembantu menamakan jadual, lajurnya (sifat atau tag menjadi lajur) dan pengumpulannya; BimCraft mengisinya daripada model dan menyusunnya, dengan mengambil apa yang tidak dinyatakan pembantu daripada standard pejabat. Susunan ini disertakan dalam senarai Jadual anda. Setiap baris yang dikembalikan menamakan elemennya, supaya ia boleh memilihnya | Baca untuk membaca; Ubah paparan dan lukis untuk menyimpan susunan |
| Eksport jadual | CSV, Excel, atau teks dipisahkan tab untuk ditampal ke Google Sheets (tiada apa-apa dihantar kepada Google) | Eksport |
| Baca dan tetapkan kemasan bilik | Jenis kemasan, kemasan lantai, dinding dan siling setiap bilik, zon; luas, bilangan jubin dan isipadu substrat kemudian diambil daripada jadual kemasan | Baca; Ubah paparan dan lukis untuk menetapkan |
| Pilih elemen, buat asal langkahnya sendiri | Elemen dipilih dalam paparan; langkah terakhirnya dibatalkan | Ubah paparan dan lukis |
| Simpan | Fail IFC baharu dengan setiap perubahan, seperti yang dihasilkan oleh {{ui:Simpan sebagai IFC}} (fail asal tidak pernah diubah) | Simpan |
| Eksport USD | Model yang dibuka sebagai OpenUSD (.usda, .usdc atau .usdz), seperti yang ditulis oleh {{ui:USD}} pada bar alat | Eksport |
| Render imej, jalankan baris gilir render | Imej paparan 3D, seperti yang dihasilkan oleh kotak dialog {{ui:Render}} dengan tetapan Render anda melainkan ia meminta yang lain, atau imej berkualiti tinggi yang ditambah ke baris gilir kotak dialog dan dirender satu demi satu (baris gilir memerlukan WebGPU). Tiada apa-apa dalam model berubah ([Render imej](topic:render)) | Eksport |

Setiap perubahan yang dibuat pembantu ialah satu langkah dalam **Perubahan**, dinamakan "Pembantu: …" (contohnya "Pembantu: tambah 4 dinding"), supaya {{key:Mod+Z}} membatalkan keseluruhan tindakannya, dan anda dapat melihat langkah siapa itu. Dalam tetingkap, ia tidak boleh membuka fail: anda membuka model; ia bekerja dengan model yang sedang dibuka.

## Hidupkannya

Pembantu berhubung dengan BimCraft melalui CadCraft Studio di komputer anda; pelayar biasa tidak mempunyai jalan masuk.

1. Buka {{ui:Tetapan}} dan pilih tab **BimCraft**.
2. Di bawah **Pembantu**, tanda **Benarkan pembantu AI dan skrip guna BimCraft**.
3. **Baca** sudah ditanda untuk anda. Tanda **Ubah paparan dan lukis** juga jika pembantu boleh mengasingkan dan menyembunyikan elemen serta melukis, dan **Simpan** jika ia boleh menyimpan model sebagai fail baharu.
4. Sambungkan pembantu dalam Studio (Studio menunjukkan alamat dan tetapan yang perlu ditampal ke dalam pembantu).

## Semasa pembantu bersambung

Nota di bahagian atas panel kanan menyatakan pembantu mana yang bersambung dan apa yang boleh dilakukannya. Klik {{ui:Putus sambungan}} untuk menamatkan sesinya serta-merta; ia perlu bersambung semula untuk meneruskan.

**Aktiviti**, di bawah **Pembantu** dalam Tetapan, menyenaraikan setiap panggilan yang dibuat pembantu, yang terbaharu dahulu, dengan keterangan sama ada ia berjaya.

:::tip
Tanya dengan perkataan biasa, contohnya "asingkan dinding luar di Aras 1", "pintu mana yang tiada penarafan api?" atau "lukis bilik 6 dengan 4 meter di Aras 1 dengan pintu di dinding selatan". Pembantu mencari elemen dan menunjukkannya dalam paparan anda, atau melukisnya.
:::

## Tanpa tetingkap: skrip dan baris arahan

Alat lukisan yang sama berfungsi pada fail IFC dalam folder yang anda namakan, tanpa tetingkap dibuka: pelayan MCP dan baris arahan CadCraft boleh memulakan bangunan baharu atau membuka fail IFC, menerangkannya, menambah dinding, pintu, tingkap, lantai, aras dan grid, membuat asal dan menyimpannya sebagai fail `.ifc` baharu. Empat alat lagi sesuai untuk skrip: `ifc_batch` menjalankan sehingga 200 langkah suntingan sebagai satu (semua atau tiada: satu buat asal membatalkan keseluruhan kelompok, dan langkah yang ditolak membatalkan selebihnya serta menamakan langkah itu); `ifc_describe` menyenaraikan aras dan setiap dinding bersama pintu dan tingkapnya; `ifc_render_png` menulis imej semakan berbayang rata bagi model (tanpa bahan, tekstur atau bayang) tanpa tetingkap; `usd_export` menulis `.usda`, `.usdc` atau `.usdz`. Pada baris arahan, `cadcraft bim script.json --from model.ifc -o out.ifc` menjalankan skrip langkah, dan `--usd`, `--png` serta `--plan` menulis fail USD, imej atau pelan daripada larian yang sama. Anda menentukan folder yang boleh digunakannya dan sama ada ia boleh mengubah atau menyimpan apa-apa.

## Matikannya

Nyahtanda **Benarkan pembantu AI dan skrip guna BimCraft**. Setiap pembantu terus diputuskan sambungannya, dan tetapan itu disimpan untuk kali seterusnya.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh yang dikerjakan, setiap satu dengan alat yang dipanggilnya.
- [Cari elemen mengikut kelas, nama atau sifat](topic:find)
- [Sembunyi, asingkan dan lut sinar elemen](topic:hide-and-isolate)
- [Tetapan BimCraft](topic:settings)
