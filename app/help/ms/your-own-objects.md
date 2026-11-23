---
title: Bawa objek dan fail keluarga anda sendiri ke dalam Pustaka
summary: Baca fail keluarga (.rfa) dan fail IFC, DWG, DXF, glTF atau OBJ dalam tab Pustaka, letakkannya seperti mana-mana item pustaka, dan simpan dalam Objek saya, senarai peribadi yang hanya anda boleh lihat.
keywords: rfa, keluarga, keluarga pustaka, objek sendiri, objek saya, objek peribadi, pustaka peribadi, import objek, kandungan pengilang, objek bim, objek ifc, gltf, obj, blok dwg, simpan, tukar, pindah
from: 886261f8
---

## Apa yang akan anda lakukan

Bawa objek yang sudah anda miliki ke dalam BimCraft: pustaka keluarga daripada Revit, muat turun IFC atau DWG pengilang, atau mesh daripada pemodel lain. Anda membaca fail dalam tab {{ui:Pustaka}}, meletakkan objek dalam model anda sebagai elemen IFC yang betul, dan, jika anda mahu menggunakannya semula kemudian, simpannya dalam {{ui:Objek saya}}.

## Langkah

1. Buka model IFC, atau mulakan bangunan baharu.
2. Klik tab {{ui:Pustaka}} di sebelah {{ui:Sifat}}.
3. Klik {{ui:Fail…}}, kemudian {{ui:Pilih fail…}}. Pilih satu fail atau beberapa sekaligus: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` atau `.csv`. Atau klik {{ui:Pilih folder…}} untuk membaca keseluruhan folder dan folder di dalamnya (sehingga 200 fail sekali gus).
4. Klik kad untuk melihat apa yang telah dibaca: pratonton pelan, nama, pengilang dan model, saiz dan nota.
5. Klik {{ui:Letakkan dalam pelan}} atau {{ui:Letakkan dalam model}} untuk meletakkannya.
6. Untuk menggunakannya semula dalam projek lain, klik {{ui:Simpan dalam objek saya}}. Dengan beberapa fail dibaca, {{ui:Simpan semua dalam objek saya}} menyimpannya sekali gus.
7. Kemudian, klik {{ui:Objek saya}} dalam tab Pustaka untuk mencarinya. Ia diletakkan, ditukar dan dikemas kini seperti mana-mana item pustaka.

Fail dibaca dalam tab ini. Tiada apa-apa dimuat naik sehingga anda memilih {{ui:Simpan dalam objek saya}}.

## Apa yang dibaca daripada setiap jenis fail

| Fail | Apa yang anda dapat |
|---|---|
| IFC | Setiap jenis elemen sebagai objek dengan bentuk 3D sebenar, kelas IFC dan set sifat |
| glTF, GLB, OBJ | Satu objek dengan bentuk 3D sebenar sebagai mesh. Tetapkan unit dan arah atas dahulu. |
| DWG, DXF | Setiap blok sebagai objek dengan lukisan pelannya dan atribut |
| Fail keluarga (`.rfa`) | Nama keluarga, kategori, pengilang, model, parameter dan jenisnya. **Bukan bentuk 3D-nya:** kotak berdasarkan Lebar, Kedalaman dan Ketinggian keluarga itu menggantikannya. |
| CSV | Satu objek setiap baris: nama, saiz dan data, dilukis sebagai kotak |

## Fail keluarga dan bentuk 3D mereka

Bentuk 3D dalam fail `.rfa` disimpan dalam format yang tidak didokumenkan, jadi BimCraft membaca data keluarga dan tidak meneka geometrinya. Kad itu menyatakannya: "Geometri tidak dibaca daripada keluarga ini; kotak menggantikannya."

Untuk membawa keluarga dengan bentuk sebenarnya, eksportnya daripada program yang menghasilkannya (Revit):

1. Buka keluarga itu, atau projek dengan keluarga diletakkan di dalamnya.
2. Pilih **Fail > Eksport > IFC**. Lihat [tetapan eksport yang paling baik dibuka di sini](topic:rvt-to-ifc).
3. Dalam BimCraft, baca fail `.ifc` dengan {{ui:Fail…}}. Setiap jenis keluarga tiba sebagai objek sendiri, dengan bentuk dan set sifatnya.

Ramai pengilang menawarkan muat turun IFC atau DWG di sebelah fail keluarga. Fail itu dibaca secara langsung.

## Jenis keluarga

Keluarga dengan beberapa jenis tiba sebagai satu item dengan pilihan {{ui:Varian}}, satu varian bagi setiap jenis. Setiap varian mempunyai nilai yang berbeza antara jenis, dan kotaknya sendiri apabila jenis itu mempunyai Lebar dan Kedalaman. Keluarga dengan satu jenis ialah item biasa yang diisi dengan nilai jenis itu.

Sesetengah keluarga menyimpan jenisnya dalam katalog jenis: fail `.txt` dengan nama yang sama di sebelah fail keluarga. Pilih kedua-duanya bersama, atau pilih folder, dan baris katalog menjadi varian.

## Data keluarga pada bentuk sebenar

Jika satu folder mengandungi fail keluarga dan fail IFC, glTF atau OBJ dengan nama yang sama (`Chair.rfa` dan `Chair.ifc`), pilih kedua-duanya bersama atau pilih folder. BimCraft menjadikannya satu item: fail keluarga memberikan nama, pengilang, model, parameter dan jenis, dan fail lain memberikan bentuk 3D sebenar. Nota menyatakan fail mana bentuk itu datang. Satu bentuk digunakan untuk setiap jenis.

Apabila fail keluarga mempunyai gambar yang disimpan di dalamnya, butiran item menunjukkan gambar itu di bawah lukisan pelan. Gambar itu hanya dipaparkan di sana; ia tidak disimpan bersama item.

## Objek saya

{{ui:Objek saya}} ialah senarai peribadi anda dalam Pustaka. Hanya anda yang boleh melihat apa yang ada di dalamnya: ia tiada dalam pustaka awam, tiada dalam carian, dan tidak ditunjukkan kepada pasukan anda. Ia mengikut akaun anda, jadi objek yang sama ada di komputer lain sebaik sahaja anda log masuk ke pustaka.

- Anda perlu log masuk ke pustaka untuk menyimpan objek. Lihat [log masuk ke pustaka](topic:library-credits).
- Menyimpan objek menghantar objek itu sahaja ke akaun anda. Sehingga itu, ia kekal di komputer anda.
- {{ui:Alih keluar daripada objek saya}} mengeluarkan objek daripada senarai. Salinan yang sudah diletakkan dalam lukisan kekal.
- Untuk berkongsi objek dengan semua orang, muat naiknya ke pustaka awam, di bawah lesen yang anda pilih.

:::note
Objek saya sedang diuji dan mungkin belum dibuka untuk akaun anda. Jika sumbernya hilang, atau ia menyatakan "Objek saya belum dibuka untuk akaun ini", anda masih boleh membaca dan meletakkan fail anda sendiri dengan {{ui:Fail…}}; ia disimpan dalam model anda.
:::

## Kesilapan biasa

- **Mengharapkan bentuk sebenar keluarga daripada `.rfa`.** Hanya datanya dibaca. Eksport IFC untuk bentuknya.
- **Dua item apabila anda menjangkakan satu.** Keluarga dan fail bentuknya hanya digabungkan apabila namanya sepadan tepat, selain sambungan, dan kedua-duanya berada dalam folder yang sama.
- **Mesh tiba seribu kali terlalu besar atau terbaring mengiring.** Tetapkan {{ui:Unit fail}} dan {{ui:Paksi atas bagi jejaring}} di bawah {{ui:Fail…}} sebelum memilih fail.
- **"Tiada data keluarga" pada fail.** Ia ialah projek (`.rvt` yang disimpan dengan sambungan lain) atau templat keluarga, bukan keluarga. Lihat [Baca fail projek atau keluarga](topic:read-rvt-file).
- **Menyimpan kandungan yang anda mungkin tidak dibenarkan simpan.** Sesetengah pustaka berbayar tidak membenarkan salinan di luar perkhidmatan mereka sendiri. Semak terma kandungan yang anda tidak buat sendiri.
