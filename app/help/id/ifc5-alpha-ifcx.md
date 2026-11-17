---
title: Buka dan ekspor IFC5 alfa (file IFCX)
summary: Opsi laboratorium untuk format file IFC5 alfa (.ifcx): buka file dengan lapisannya, lihat apa yang tidak dapat diperiksa oleh pembacaan, dan ekspor model yang terbuka. Formatnya masih berubah, jadi baca dulu.
keywords: ifc5, ifcx, alfa, buildingsmart, json, lapisan, skema, laboratorium, kuantitas, qto, ekspor, impor
from: cffe1669
---

IFC5 alfa (file berakhiran {{ui:.ifcx}}) adalah format file yang masih dirancang oleh buildingSMART. Formatnya belum final: file-filenya, dan cara kami membacanya, dapat berubah. Itulah sebabnya ini adalah opsi laboratorium dan membaca perlu dilakukan terlebih dahulu.

## Aktifkan

1. Pilih {{ui:Pengaturan}}, lalu bagian {{ui:IFC5 alpha (IFCX)}} pada tab BimCraft.
2. Centang {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

Opsi ini nonaktif secara bawaan. Selama nonaktif, file .ifcx ditolak dengan kalimat yang mengarah ke sini. {{ui:Buka IFC5 alpha (.ifcx)…}} dan tombol ekspor {{ui:IFC5 alfa}} muncul saat opsi ini diaktifkan.

## Buka

- Pilih file .ifcx dengan {{ui:Buka file atau folder}} (ini menggantikan model yang terbuka, setelah pertanyaan biasa tentang suntingan), atau
- pilih {{ui:Buka IFC5 alpha (.ifcx)…}} dan pilih beberapa file sekaligus: filenya, lapisannya, dan file skema yang diimpornya. Jika sudah ada model terbuka, file ditambahkan **di sampingnya**; tanda x di daftar model menghapusnya lagi, dan itulah pembatalannya.

File IFCX mendaftarkan node (sebuah jalur, anak-anaknya, apa yang diwarisinya, dan atribut-atributnya). Beberapa file dapat menggambarkan node yang sama: file yang lebih baru (sebuah lapisan) menimpa atribut file yang lebih lama, dan anak null menghapus anak. BimCraft menyusunnya, lalu menggambar hasilnya sebagai model IFC4 kecil: proyek, tapak, bangunan, lantai, dan elemen dengan nama, kelas, properti, kuantitas, warna, serta mesh.

Tidak ada yang diambil dari jaringan. File skema yang diimpor sebuah file (misalnya `ifc@v5a.ifcx`) hanya digunakan jika Anda memilihnya bersama file tersebut; jika tidak, laporan menyatakannya dan atribut dibaca tanpa pemeriksaan tipe.

### Laporan

Setelah dibuka, laporan mendaftarkan apa yang ditemukan pembacaan: data yang tidak sesuai dengan skemanya, file skema yang tidak diberikan, dan atribut yang tidak memiliki makna IFC di sini. Atribut tanpa pemetaan **disimpan** di model, tidak dibuang, dan ditulis kembali saat ekspor.

## Apa menjadi apa

| Di file IFCX | Di BimCraft |
|---|---|
| Node dengan kelas IFC (proyek, tapak, bangunan, lantai, dinding …) | Elemen IFC4 yang sesuai; kelas yang tidak dikenali pembacaan ini menjadi building element proxy |
| Nama yang dimiliki node di bawah induknya | Nama elemen |
| Atribut dengan jenis kuantitas (Length, Area, Volume, Mass …) | Set kuantitas IFC4 bernama `Qto_IFCX` (kuantitas IFC4 tetap sebagai set `Qto_*` IFC4) |
| Atribut properti lainnya | Set properti bernama `Pset_IFCX` |
| Atribut mesh dan transformasi | Segitiga dan penempatan elemen; mesh yang tidak terlihat tidak digambar |
| Warna, opasitas, material, klasifikasi | Gaya permukaan, material, dan klasifikasi elemen |

Satuan dianggap meter, dengan Z ke atas: alfa menyatakan satuan akan didokumentasikan kemudian.

## Ekspor

Pilih {{ui:IFC5 alfa}} pada bilah alat, baca catatannya, lalu {{ui:Ekspor .ifcx}}. File memiliki header kami sendiri (pembuat CadCraft, versi ifcx_alpha) dan menyatakan dalam dirinya sendiri bahwa itu adalah format alfa. Setiap model ditulis dalam koordinat file miliknya sendiri, dalam meter, dengan nama, kelas, set properti, kuantitas (sebagai atribut dengan jenisnya), warna, dan segitiga. Lapisan dan pewarisan ditulis dalam bentuk rata. Periksa file di program yang Anda kirimi file tersebut.

## Batasan

- Geometri melengkung (kurva, permukaan) tidak dibaca: hanya mesh segitiga.
- Pintu dan jendela yang tersarang di dinding ditempatkan di lantai; dinding asalnya tidak ditautkan.
- Nama set `Qto_*` IFC4 disimpan sebagai grup atribut kami sendiri (`cadcraft::qto::…`); skema alfa standar hanya memiliki sedikit nama kuantitas.
- Format dapat berubah; file yang dibuat hari ini mungkin tidak bisa dibaca besok.
