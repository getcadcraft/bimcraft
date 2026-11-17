---
title: Buka bundel proyek
summary: Bundel proyek adalah satu zip berisi model, tampilannya, layout-nya, dan grup properti. Buka, tampilkan tampilan dengan lantai dan layer-nya, buka layout, dan lihat properti dalam grup milik proyek.
keywords: bundel, bundel proyek, ccbundle, zip, tampilan, peta tampilan, layout, buku layout, kombinasi layer, grup properti, standar, pln, template
from: b5b86e8f
---

## Yang akan Anda lakukan

Buka **bundel proyek** (`.ccbundle.zip`) dan kerjakan proyek seperti saat disusun: tampilannya, layout-nya, dan grup propertinya, di atas model.

Bundel berisi:

- model sebagai IFC,
- layout sebagai PDF dan DWG,
- daftar apa yang tidak dimuat IFC: tampilan (masing-masing dengan lantai, kombinasi layer, dan skalanya), layout dan gambar yang ditempatkan di atasnya, definisi properti dalam grupnya, klasifikasi, serta standar seperti layer, set pena, jenis garis, isian, permukaan, dan komposit.

Bundel dibuat oleh skrip sumber terbuka yang berjalan di dalam Archicad dan meminta Archicad sendiri untuk daftar-daftar ini. BimCraft tidak pernah membaca file `.pln` atau `.tpl` secara langsung; lihat [Buka file proyek .pln dan .pla](topic:pln-project-files).

## Membuat bundel

Skrip ini masih pratinjau: belum dicoba di setiap versi Archicad. Unduh dari [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Anda memerlukan Archicad 24 atau lebih baru dan Python 3.8 atau lebih baru; tidak ada yang perlu dipasang lagi.

1. Simpan `archicad_bundle.py` ke dalam sebuah folder, misalnya `C:\cc-bundle`.
2. Di Archicad, buka proyek dan buat set penerbit bernama tepat **CadCraft bundle**: tampilan 3D sebagai IFC, setiap layout sebagai PDF, dan setiap layout lagi sebagai DWG, diterbitkan ke file di disk dalam satu folder datar.
3. Dengan proyek terbuka, jalankan `python archicad_bundle.py --probe --out .` sekali. Perintah ini hanya membaca, dan menulis `probe.json`.
4. Jalankan `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (gunakan penerjemah IFC yang Anda pilih). Archicad menerbitkan set dan skrip menulis `<project>.ccbundle.zip`.

Jika penerbitan lewat skrip gagal, terbitkan set secara manual dan jalankan `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README repositori memuat setiap opsi. Jika ada yang tidak terbawa, buka isu di sana dan lampirkan `probe.json`.

## Buka bundel

1. Klik {{ui:Pilih file}}, atau seret `.ccbundle.zip` ke BimCraft. Dalam folder yang Anda buka dengan {{ui:Buka folder}}, bundel tercantum di bawah **Bundel proyek**; klik salah satunya menurut nama.
2. Model terbuka seperti IFC biasa, dan bagian **Bundel proyek** muncul di sisi kiri, di bawah fakta file.

Tidak ada yang diunggah: bundel dibaca di komputer Anda, satu file dalam satu waktu, sehingga model besar tidak disalin dua kali.

## Tampilkan tampilan

Di bawah **Tampilan**, tampilan dikelompokkan menurut folder yang dimilikinya dalam proyek. Klik nama tampilan:

- **Denah lantai** hanya menampilkan lantainya, dilihat dari atas.
- **Kombinasi layer-nya** menyembunyikan elemen pada layer yang disembunyikan kombinasi itu. Baris status menyebutkan berapa elemen yang tersembunyi.
- **Skalanya** ditampilkan di sebelah nama dan di baris status.
- **Tampilan 3D** menampilkan semua lantai.

Untuk menampilkan semuanya lagi, gunakan {{ui:Tampilkan semua}} di {{ui:Tampilkan}} dan centang setiap lantai.

:::note
BimCraft menemukan layer melalui penugasan layer di file IFC. Jika IFC diekspor tanpa penugasan itu, kombinasi layer tidak menyembunyikan apa pun, dan baris status menyatakan 0 elemen tersembunyi.
:::

## Buka layout

Di bawah **Layout**, setiap layout menampilkan nomor, nama, ukuran kertas, dan tampilan yang ditempatkan di atasnya.

- **PDF** menyimpan PDF layout dari bundel.
- **DWG** membuka gambar layout di tampilan 2D. Klik tampilan mana pun untuk kembali ke model.
- **Buka di …** mengirim file layout ke aplikasi yang mengerjakannya, di tab baru: PDF ke MarkupCraft, DWG ke CadCraft. Ini hanya muncul jika aplikasi itu terbuka di sebelah BimCraft. File dibaca dari bundel saat tab dimuat, dan tidak ada yang diunggah.

Layout yang tidak punya keduanya bertuliskan **Tidak ada file di dalam bundel**.

## Lihat properti dalam grup proyek

Pilih sebuah elemen. **Grup properti** menampilkan propertinya di bawah grup yang ditetapkan proyek, dicocokkan melalui set properti dan nama yang diberikan definisi untuk IFC, atau jika tidak, menurut namanya. Sisanya tetap di {{ui:Properti}} seperti biasa. **Definisi properti** mencantumkan setiap definisi dengan grup, tipe, dan nama IFC-nya.

## Standar dan catatan

- **Standar** menghitung layer, kombinasi layer, set pena, jenis garis, isian, permukaan, komposit, dan material dalam bundel.
- **Catatan** mencantumkan apa yang tidak dapat diambil skrip dari versi Archicad tersebut, setiap kolom yang tidak dapat dibaca BimCraft, dan setiap file yang disebut bundel tetapi tidak dimilikinya.

## Pemecahan masalah

- **"… adalah zip tetapi bukan bundel proyek."** Zip tidak memiliki `manifest.json`. Ekstrak zip dan buka `.ifc` di dalamnya.
- **"… adalah bundel proyek yang lebih baru daripada yang dibaca BimCraft ini."** Perbarui BimCraft.
- **"… tidak memuat model yang disebut manifesnya."** Zip terpotong atau telah diedit. Buat ulang bundelnya.
- **Sebuah tampilan menampilkan setiap lantai.** Lantainya tidak ada di IFC model (baris status menyebutkannya). Periksa apakah ekspor IFC menyertakan lantai itu.

Lihat juga [Bekerja antara dua program BIM](topic:two-bim-programs) dan [Apa yang dibaca BimCraft dari setiap format](topic:file-formats).
