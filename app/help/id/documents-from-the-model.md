---
title: Dokumen dari model
summary: Tulis spesifikasi atau deskripsi sekali sebagai templat, dengan field untuk kuantitas, properti, dan tag, lalu isi dari IFC yang terbuka sebagai PDF atau dokumen Word.
keywords: dokumen, spesifikasi, spek, deskripsi, templat, markdown, laporan, word, docx, pdf, kuantitas, jadwal, trade, jadwal pintu, finishing, documentcad
from: 2b0c9156
---

## Yang akan Anda lakukan

Templat adalah teks Markdown dengan field di dalam kurung kurawal ganda. BimCraft mengisi field dari model yang terbuka (jumlah, kuantitas per tipe, properti, dan [tag](topic:tags-and-schedules) Anda), lalu menyimpan hasilnya sebagai PDF, dokumen Word (.docx), atau Markdown.

## Langkah

1. Buka model IFC.
2. Di panel kiri, di bawah {{ui:Kuantitas}}, buka {{ui:Dokumen dari model}}.
3. Pilih templat: {{ui:Pintu dan perangkat keras}} atau {{ui:Dinding, lapisan dalam, dan finishing}}, atau {{ui:Muat templat (.md)…}} untuk templat Anda sendiri.
4. Jika templat membaca tag yang belum didefinisikan model, klik {{ui:Tambahkan tag templat ini}}, lalu beri tag pada elemen di bawah {{ui:Tag}}.
5. Ubah teksnya sesuka Anda dan klik {{ui:Tampilkan dokumen}}.
6. Klik {{ui:PDF}} (pilih A4 atau Letter terlebih dahulu) atau {{ui:Word (.docx)}}.

## Yang seharusnya Anda lihat

- Dokumen yang sudah terisi di bawah tombol-tombol, dengan tabelnya.
- Daftar peringatan saat sebuah field tidak bisa dibaca (tag yang tidak didefinisikan, properti yang tidak dimiliki model, blok yang tidak pernah ditutup). Field seperti itu tercetak sebagai `[?…]`.
- Halaman PDF dengan judul dokumen dan "Page 1 of 3" di kaki setiap halaman. Tabel panjang berlanjut dengan baris judulnya.

## Field

| Field | Hasil |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | nama dan deskripsi proyek, nama file, hari ini |
| `{{count IfcDoor}}` | jumlah pintu |
| `{{sum IfcWall NetSideArea}}` | total, dengan satuannya |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` dan kurung) atas suku dalam kurung siku: `[sum …]`, `[count …]`, dan di dalam each `[qty Width]`. `round n` mengatur jumlah desimal, `unit` menambahkan satuan. Sesuatu yang tidak bisa dibacanya, atau pembagian dengan nol, tercetak `[?…]` dan memberi peringatan |
| `{{qty IfcWall NetSideArea by Type}}` | tabel: satu baris per tipe dengan jumlah dan totalnya, serta baris total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabel, satu baris per elemen |
| `{{tag Finish}}` | di dalam loop, nilai elemen itu; di tempat lain, setiap nilai yang dipakai (Oak, Paint) |
| `{{tags}}` | definisi tag sebagai tabel |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teks sekali untuk setiap elemen; bagian setelah `{{else}}` dipakai jika tidak ada elemen |
| `{{#group IfcWall by Type}} … {{/group}}` | teks sekali untuk setiap tipe, dengan `{{value}}`, `{{count}}`, `{{sum Length}}` dan `{{#each}}` biasa di dalamnya |

Di dalam `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (milik elemen itu sendiri, dengan satuannya).

Sebuah kelas bisa lebih dari satu (`IfcDoor|IfcWindow`) atau setiap elemen (`*`). Persempit salah satunya dengan `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Tesnya adalah `=`, `!=`, `~` (berisi), `>`, `<`, `>=`, `<=`, `has` dan `hasnot`. Gabungkan beberapa tes dengan `and`, dan tulis nilai yang berisi spasi di antara "tanda kutip". `sort Name` mengurutkan loop.

## Jadwal dan spesifikasi di dalam dokumen

`{{schedule doors}}` mencetak jadwal model sebagai tabel, dalam tata letak kantor Anda: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, atau nama pengaturan yang Anda simpan di Jadwal. `{{specification}}` mencetak spesifikasi proyek. Templat **Jadwal gambar kerja** dan **Spesifikasi** memakainya. Di pratinjau, klik angka dari jadwal seperti itu untuk memilih elemen asalnya. Lihat [Atur tata letak, simpan dan ekspor jadwal](topic:schedule-layouts) dan [Tulis spesifikasi dari model](topic:specification).

## Yang perlu diketahui

- Sebuah field menyebut built-in (Name, Type, Storey, Class, Material, Mark), tag (`tag:Fire rating`, atau namanya), properti (`Pset_WallCommon.FireRating`), atau hanya nama properti (`NetSideArea`, `Width`). Nama tanpa awalan membaca set milik setiap elemen, dengan set kuantitas lebih dulu. Jadi `Width` pada pintu adalah lebar pintu, bukan tebal dinding. Di dalam `where`, nama tanpa awalan membaca set yang dimiliki sebagian besar elemen yang dipilih.
- Kuantitas adalah apa yang dikatakan set kuantitas file (BimCraft menulisnya untuk apa yang digambarnya). Satuannya berasal dari pengaturan satuan file.
- Kata-kata field (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) tetap dalam bahasa Inggris di setiap bahasa. Templat contohnya berbahasa Inggris.
- Teks dari model tidak pernah menjadi format: nama dengan `*` atau `|` di dalamnya tercetak apa adanya.
- Simpan templat yang sudah Anda ubah dengan {{ui:Simpan di peramban ini}} (hanya peramban ini yang memilikinya) atau {{ui:Unduh templat}}.
- Teks PDF memakai font PDF standar: karakter di luar teks Eropa Barat tercetak sebagai "?", dan baris status menyebutkan jumlahnya.
- Templat per trade ada di Pustaka (jenis templat dokumen). Di Dokumen dari model, pilih Dari Pustaka…, pilih satu, dan teks serta tag yang dibacanya ikut masuk. Edit sesuka Anda. Menerbitkan templat Anda sendiri ke Pustaka sama dengan unggahan item lain apa pun. Belum dibuat: perhitungan di luar jumlah dan total.
