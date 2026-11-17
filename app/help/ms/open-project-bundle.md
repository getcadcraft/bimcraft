---
title: Buka bundel projek
summary: Bundel projek ialah satu zip yang mengandungi model, pandangannya, layoutnya dan kumpulan sifatnya. Buka bundel, tunjukkan pandangan dengan tingkat dan lapisannya, buka layout, dan lihat sifat dalam kumpulan projek itu sendiri.
keywords: bundel, bundel projek, ccbundle, zip, pandangan, peta pandangan, layout, buku layout, gabungan lapisan, kumpulan sifat, piawaian, pln, templat
from: b5b86e8f
---

## Apa yang anda akan lakukan

Buka **bundel projek** (`.ccbundle.zip`) dan kerjakan projek seperti yang telah disusun: pandangannya, layoutnya dan kumpulan sifatnya, di atas model.

Bundel mengandungi:

- model sebagai IFC,
- layout sebagai PDF dan DWG,
- senarai apa yang IFC tinggalkan: pandangan (setiap satu dengan tingkat, gabungan lapisan dan skalanya), layout dan lukisan yang diletakkan padanya, takrif sifat dalam kumpulannya, pengelasan, dan piawaian seperti lapisan, set pen, jenis garisan, isian, permukaan dan komposit.

Bundel dihasilkan oleh skrip sumber terbuka yang berjalan dalam Archicad dan meminta Archicad sendiri untuk senarai ini. BimCraft tidak pernah membaca fail `.pln` atau `.tpl` secara langsung; lihat [Buka fail projek .pln dan .pla](topic:pln-project-files).

## Hasilkan bundel

Skrip ini ialah pratonton: ia belum diuji pada setiap versi Archicad. Dapatkannya daripada [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Anda memerlukan Archicad 24 atau yang lebih baharu dan Python 3.8 atau yang lebih baharu; tiada apa lagi yang perlu dipasang.

1. Simpan `archicad_bundle.py` ke dalam sebuah folder, contohnya `C:\cc-bundle`.
2. Dalam Archicad, buka projek dan buat satu set penerbitan bernama tepat **CadCraft bundle**: paparan 3D sebagai IFC, setiap layout sebagai PDF, dan setiap layout sekali lagi sebagai DWG, diterbitkan ke fail pada cakera dalam satu folder rata.
3. Dengan projek dibuka, jalankan `python archicad_bundle.py --probe --out .` sekali. Ia hanya membaca dan menulis `probe.json`.
4. Jalankan `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (gunakan penterjemah IFC yang anda pilih). Archicad menerbitkan set itu dan skrip menulis `<project>.ccbundle.zip`.

Jika penerbitan melalui skrip gagal, terbitkan set itu secara manual dan jalankan `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README repositori mempunyai setiap pilihan. Jika ada sesuatu yang tidak sampai, buka isu di sana dan lampirkan `probe.json`.

## Buka bundel

1. Klik {{ui:Pilih fail}}, atau lepaskan `.ccbundle.zip` ke atas BimCraft. Dalam folder yang anda buka dengan {{ui:Buka folder}}, bundel disenaraikan di bawah **Bundel projek**; klik satu mengikut namanya.
2. Model dibuka seperti mana-mana IFC, dan bahagian **Bundel projek** muncul di sebelah kiri, di bawah fakta fail.

Tiada apa-apa dimuat naik: bundel dibaca pada komputer anda, satu fail pada satu masa, jadi model besar tidak disalin dua kali.

## Tunjukkan pandangan

Di bawah **Pandangan**, pandangan dikelompokkan mengikut folder yang dimilikinya dalam projek. Klik nama pandangan:

- **Pelan lantai** hanya menunjukkan tingkatnya, dilihat dari atas.
- **Gabungan lapisannya** menyembunyikan elemen pada lapisan yang disembunyikan oleh gabungan itu. Baris status menyatakan berapa elemen yang disembunyikan.
- **Skalanya** dipaparkan di sebelah nama dan dalam baris status.
- **Pandangan 3D** menunjukkan setiap tingkat.

Untuk menunjukkan semuanya semula, guna {{ui:Tunjuk semua}} dalam {{ui:Tunjuk}} dan tandakan setiap tingkat.

:::note
BimCraft mencari lapisan melalui tugasan lapisan fail IFC. Jika IFC dieksport tanpa tugasan itu, gabungan lapisan tidak menyembunyikan apa-apa, dan baris status menyatakan 0 elemen disembunyikan.
:::

## Buka layout

Di bawah **Layout**, setiap layout menunjukkan nombor, nama, saiz kertas dan pandangan yang diletakkan padanya.

- **PDF** menyimpan PDF layout daripada bundel.
- **DWG** membuka lukisan layout dalam paparan 2D. Klik mana-mana pandangan untuk kembali ke model.
- **Buka dalam …** menghantar fail layout kepada aplikasi yang mengerjakannya, dalam tab baharu: PDF ke MarkupCraft, DWG ke CadCraft. Ia hanya muncul di tempat aplikasi itu dibuka di sebelah BimCraft. Fail dibaca daripada bundel semasa tab dimuatkan, dan tiada apa-apa dimuat naik.

Layout tanpa mana-mana fail menyatakan **Tiada fail dalam bundel**.

## Lihat sifat dalam kumpulan projek

Pilih satu elemen. **Kumpulan sifat** menunjukkan sifatnya di bawah kumpulan yang ditakrifkan projek, dipadankan melalui set sifat dan nama yang diberikan oleh takrif untuk IFC, atau jika tidak melalui namanya. Selebihnya kekal dalam {{ui:Sifat}} seperti biasa. **Takrif sifat** menyenaraikan setiap takrif dengan kumpulan, jenis dan nama IFCnya.

## Piawaian dan nota

- **Piawaian** mengira lapisan, gabungan lapisan, set pen, jenis garisan, isian, permukaan, komposit dan bahan dalam bundel.
- **Nota** menyenaraikan apa yang tidak dapat diperoleh skrip daripada versi Archicad itu, sebarang medan yang tidak dapat dibaca BimCraft, dan sebarang fail yang dinamakan oleh bundel tetapi tidak dimilikinya.

## Penyelesaian masalah

- **"… ialah zip tetapi bukan bundel projek."** Zip tidak mempunyai `manifest.json`. Nyahzipkan dan buka `.ifc` di dalamnya.
- **"… ialah bundel projek yang lebih baharu daripada yang dibaca BimCraft ini."** Kemas kini BimCraft.
- **"… tidak mengandungi model yang dinamakan oleh manifestnya."** Zip terpotong atau telah disunting. Hasilkan semula bundel.
- **Pandangan menunjukkan setiap tingkat.** Tingkatnya tidak ada dalam IFC model (baris status menyatakannya). Semak sama ada eksport IFC menyertakan tingkat itu.

Lihat juga [Kerja antara dua program BIM](topic:two-bim-programs) dan [Apa yang BimCraft baca daripada setiap format](topic:file-formats).
