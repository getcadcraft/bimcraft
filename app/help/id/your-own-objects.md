---
title: Bawa objek dan file keluarga Anda sendiri ke Pustaka
summary: Baca file keluarga (.rfa) serta file IFC, DWG, DXF, glTF, atau OBJ di tab Pustaka, tempatkan seperti item pustaka mana pun, dan simpan di Objek saya, daftar pribadi yang hanya dapat Anda lihat.
keywords: rfa, keluarga, family, pustaka keluarga, objek sendiri, objek saya, objek pribadi, pustaka pribadi, impor objek, konten pabrikan, objek bim, objek ifc, gltf, obj, blok dwg, simpan, ganti, migrasi
from: 886261f8
---

## Yang akan Anda lakukan

Bawa objek yang sudah Anda miliki ke BimCraft: pustaka keluarga dari Revit, unduhan IFC atau DWG dari pabrikan, atau mesh dari pemodel lain. Anda membaca file di tab {{ui:Pustaka}}, menempatkan objek di model sebagai elemen IFC yang sesungguhnya, dan, jika ingin memakainya lagi nanti, menyimpannya di {{ui:Objek saya}}.

## Langkah

1. Buka model IFC, atau mulai bangunan baru.
2. Klik tab {{ui:Pustaka}} di sebelah {{ui:Properti}}.
3. Klik {{ui:File…}}, lalu {{ui:Pilih file…}}. Pilih satu file atau beberapa sekaligus: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj`, atau `.csv`. Atau klik {{ui:Pilih folder…}} untuk membaca seluruh folder dan folder di dalamnya (hingga 200 file sekaligus).
4. Klik kartu untuk melihat apa yang dibaca: pratinjau denah, nama, pembuat dan model, ukuran, serta catatannya.
5. Klik {{ui:Tempatkan di denah}} atau {{ui:Tempatkan di model}} untuk menempatkannya.
6. Untuk memakainya lagi di proyek lain, klik {{ui:Simpan di objek saya}}. Dengan beberapa file yang dibaca, Simpan semua di objek saya menyimpannya sekaligus.
7. Nanti, klik {{ui:Objek saya}} di tab Pustaka untuk menemukannya. Objek itu ditempatkan, ditukar, dan diperbarui seperti item pustaka lainnya.

File dibaca di tab ini. Tidak ada yang diunggah sampai Anda memilih {{ui:Simpan di objek saya}}.

## Yang dibaca dari setiap jenis file

| File | Yang Anda dapatkan |
|---|---|
| IFC | Setiap jenis elemen sebagai objek dengan bentuk 3D aslinya, kelas IFC, dan set properti |
| glTF, GLB, OBJ | Satu objek dengan bentuk 3D aslinya sebagai mesh. Atur satuan dan arah atas terlebih dahulu. |
| DWG, DXF | Setiap blok sebagai objek dengan gambar denahnya dan atributnya |
| File keluarga (`.rfa`) | Nama keluarga, kategori, pembuat, model, parameter, dan tipenya. **Bukan bentuk 3D-nya:** kotak berukuran Width, Depth, dan Height keluarga itu yang menggantikannya. |
| CSV | Satu objek per baris: nama, ukuran, dan data, digambar sebagai kotak |

## File keluarga dan bentuk 3D-nya

Bentuk 3D di dalam file `.rfa` disimpan dalam format yang tidak terdokumentasi, sehingga BimCraft membaca data keluarga dan tidak menebak geometrinya. Kartu menyatakannya: "Geometri tidak dibaca dari keluarga ini; kotak menggantikannya."

Untuk membawa keluarga dengan bentuk aslinya, ekspor dari program yang membuatnya (Revit):

1. Buka keluarga, atau proyek dengan keluarga yang ditempatkan di dalamnya.
2. Pilih **File > Export > IFC**. Lihat [pengaturan ekspor yang paling baik dibuka di sini](topic:rvt-to-ifc).
3. Di BimCraft, baca file `.ifc` dengan {{ui:File…}}. Setiap tipe keluarga tiba sebagai objek sendiri, dengan bentuk dan set propertinya.

Banyak pabrikan menawarkan unduhan IFC atau DWG di samping file keluarga. File itu dibaca langsung.

## Tipe keluarga

Keluarga dengan beberapa tipe tiba sebagai satu item dengan pilihan {{ui:Varian}}, satu varian per tipe. Setiap varian memiliki nilai yang berbeda antar tipe, dan kotaknya sendiri jika tipe itu memiliki Width dan Depth. Keluarga dengan satu tipe menjadi item biasa yang diisi dengan nilai tipe itu.

Beberapa keluarga menyimpan tipenya dalam katalog tipe: file `.txt` dengan nama yang sama di sebelah file keluarga. Pilih keduanya sekaligus, atau pilih foldernya, dan baris katalog menjadi varian.

## Data keluarga pada bentuk nyata

Jika sebuah folder berisi file keluarga dan file IFC, glTF, atau OBJ dengan nama yang sama (`Chair.rfa` dan `Chair.ifc`), pilih keduanya sekaligus atau pilih foldernya. BimCraft membuat satu item: file keluarga memberikan nama, pembuat, model, parameter, dan tipe, dan file lainnya memberikan bentuk 3D aslinya. Catatan menyatakan file mana bentuknya berasal. Satu bentuk dipakai untuk setiap tipe.

Saat file keluarga memiliki gambar yang tersimpan di dalamnya, rincian item menampilkan gambar itu di bawah gambar denah. Gambar hanya ditampilkan di sana; tidak disimpan bersama item.

## Objek saya

{{ui:Objek saya}} adalah daftar pribadi Anda di Pustaka. Hanya Anda yang dapat melihat isinya: ia tidak ada di pustaka publik, tidak masuk pencarian, dan tidak ditampilkan kepada tim Anda. Ia mengikuti akun Anda, sehingga objek yang sama ada di komputer lain setelah Anda masuk ke pustaka.

- Anda perlu masuk ke pustaka untuk menyimpan objek. Lihat [masuk ke pustaka](topic:library-credits).
- Menyimpan objek mengirim objek itu saja ke akun Anda. Sampai saat itu, objek tetap berada di komputer Anda.
- {{ui:Hapus dari objek saya}} mengeluarkan objek dari daftar. Salinan yang sudah ditempatkan di gambar tetap ada.
- Untuk membagikan objek kepada semua orang, unggah ke pustaka publik sebagai gantinya, di bawah lisensi yang Anda pilih.

:::note
Objek saya sedang diuji dan mungkin belum terbuka untuk akun Anda. Jika sumbernya hilang, atau tertulis "Objek saya belum terbuka untuk akun ini", Anda tetap dapat membaca dan menempatkan file sendiri dengan {{ui:File…}}; file itu disimpan di dalam model Anda.
:::

## Kesalahan umum

- **Mengharapkan bentuk 3D asli keluarga dari `.rfa`.** Hanya datanya yang dibaca. Ekspor IFC untuk bentuknya.
- **Dua item saat Anda mengharapkan satu.** Keluarga dan file bentuknya hanya digabung jika namanya sama persis, selain ekstensinya, dan keduanya berada di folder yang sama.
- **Mesh tiba seribu kali lebih besar atau rebah.** Atur {{ui:Satuan file}} dan {{ui:Sumbu atas mesh}} di bawah {{ui:File…}} sebelum memilih file.
- **"No family data" pada sebuah file.** Itu proyek (`.rvt` yang disimpan dengan ekstensi lain) atau templat keluarga, bukan keluarga. Lihat [Baca file proyek atau keluarga](topic:read-rvt-file).
- **Menyimpan konten yang tidak boleh Anda simpan.** Beberapa pustaka berbayar tidak mengizinkan salinan di luar layanannya sendiri. Periksa ketentuan untuk konten yang tidak Anda buat sendiri.
