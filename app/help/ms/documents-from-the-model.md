---
title: Dokumen daripada model
summary: Tulis spesifikasi atau huraian sekali sebagai templat, dengan medan untuk kuantiti, sifat dan tag, dan isikannya daripada IFC yang dibuka sebagai PDF atau dokumen Word.
keywords: dokumen, spesifikasi, spek, huraian, templat, markdown, laporan, word, docx, pdf, kuantiti, jadual, dagangan, jadual pintu, kemasan, documentcad
from: 2b0c9156
---

## Apa yang akan anda lakukan

Templat ialah teks dalam Markdown dengan medan dalam kurungan berganda. BimCraft mengisi medan daripada model yang dibuka (bilangan, kuantiti mengikut jenis, sifat, [tag](topic:tags-and-schedules) anda) dan menyimpan hasilnya sebagai PDF, dokumen Word (.docx) atau Markdown.

## Langkah

1. Buka model IFC.
2. Dalam panel kiri, di bawah {{ui:Kuantiti}}, buka {{ui:Dokumen daripada model}}.
3. Pilih templat: {{ui:Pintu dan perkakasan}} atau {{ui:Dinding, lapisan dalam dan kemasan}}, atau {{ui:Muat templat (.md)…}} untuk templat anda sendiri.
4. Jika templat membaca tag yang model belum takrifkan, klik {{ui:Tambah tag templat ini}}, kemudian tag elemen di bawah {{ui:Tag}}.
5. Ubah teks mengikut kehendak anda dan klik {{ui:Tunjuk dokumen}}.
6. Klik {{ui:PDF}} (pilih A4 atau Letter dahulu) atau {{ui:Word (.docx)}}.

## Apa yang sepatutnya anda lihat

- Dokumen yang telah diisi di bawah butang, dengan jadualnya.
- Senarai amaran apabila medan tidak dapat dibaca (tag yang tidak ditakrifkan, sifat yang model tidak miliki, blok yang tidak pernah ditutup); medan sebegitu dicetak sebagai `[?…]`.
- Halaman PDF dengan tajuk dokumen dan "Halaman 1 daripada 3" di kaki setiap halaman; jadual panjang dibawa ke halaman seterusnya bersama baris pengepalanya.

## Medan

| Medan | Memberikan |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | nama dan huraian projek, nama fail, hari ini |
| `{{count IfcDoor}}` | berapa banyak pintu |
| `{{sum IfcWall NetSideArea}}` | jumlah, dengan unitnya |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | pengiraan aritmetik (`+ - * /` dan kurungan) ke atas sebutan dalam kurungan segi empat sama: `[sum …]`, `[count …]`, dan di dalam each `[qty Width]`. `round n` menetapkan titik perpuluhan, `unit` menambah unit. Sesuatu yang tidak dapat dibaca, atau pembahagian dengan sifar, dicetak sebagai `[?…]` dan memberi amaran |
| `{{qty IfcWall NetSideArea by Type}}` | jadual: satu baris bagi setiap jenis dengan bilangan dan jumlahnya, dan satu baris jumlah |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | jadual, satu baris bagi setiap elemen |
| `{{tag Finish}}` | dalam gelung, nilai elemen itu; di tempat lain, setiap nilai yang digunakan (Oak, Paint) |
| `{{tags}}` | takrifan tag sebagai jadual |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teks sekali bagi setiap elemen; bahagian selepas `{{else}}` apabila tiada elemen |
| `{{#group IfcWall by Type}} … {{/group}}` | teks sekali bagi setiap jenis, dengan `{{value}}`, `{{count}}`, `{{sum Length}}` dan `{{#each}}` biasa di dalamnya |

Dalam `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (Tag IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (milik elemen itu sendiri, dengan unitnya).

Satu kelas boleh terdiri daripada beberapa (`IfcDoor|IfcWindow`) atau setiap elemen (`*`). Persempitkan mana-mana daripadanya dengan `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Ujiannya ialah `=`, `!=`, `~` (mengandungi), `>`, `<`, `>=`, `<=`, `has` dan `hasnot`; gabungkan beberapa dengan `and`; letakkan nilai yang mempunyai ruang dalam "petikan". `sort Name` menyusun gelung.

## Jadual dan spesifikasi dalam dokumen

`{{schedule doors}}` mencetak jadual model sebagai jadual, dalam susun atur pejabat anda: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, atau nama susunan yang anda simpan dalam Jadual. `{{specification}}` mencetak spesifikasi projek. Templat **Jadual lukisan kerja** dan **Spesifikasi** menggunakannya. Dalam pratonton, klik angka jadual sebegitu untuk memilih elemen asalnya. Lihat [Susun atur, simpan dan eksport jadual](topic:schedule-layouts) dan [Tulis spesifikasi daripada model](topic:specification).

## Perkara yang perlu diketahui

- Medan menamakan elemen terbina dalam (Name, Type, Storey, Class, Material, Mark), tag (`tag:Fire rating`, atau namanya), sifat (`Pset_WallCommon.FireRating`) atau hanya nama sifat (`NetSideArea`, `Width`). Nama ringkas membaca set setiap elemen, dengan set kuantiti dahulu, maka `Width` pada pintu ialah lebar pintu, bukan ketebalan dinding. Dalam `where`, nama ringkas membaca set yang kebanyakan elemen terpilih miliki.
- Kuantiti ialah apa yang dinyatakan oleh set kuantiti fail (BimCraft menulisnya untuk apa yang dilukisnya); unit datang daripada tetapan unit fail.
- Perkataan medan (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) kekal dalam bahasa Inggeris dalam setiap bahasa. Templat contoh dalam bahasa Inggeris.
- Teks daripada model tidak sekali-kali menjadi pemformatan: nama dengan `*` atau `|` di dalamnya dicetak seperti sedia ada.
- Simpan templat yang anda ubah dengan {{ui:Simpan dalam pelayar ini}} (hanya pelayar ini yang mempunyainya) atau {{ui:Muat turun templat}}.
- Teks PDF menggunakan fon PDF piawai: aksara di luar teks Eropah Barat dicetak sebagai "?", dan baris status memberitahu bilangannya.
- Templat mengikut dagangan tinggal dalam Pustaka (jenis Templat dokumen). Dalam Dokumen daripada model, pilih Daripada Pustaka…, pilih satu, dan teksnya serta tag yang dibacanya dibawa masuk; edit mengikut kehendak anda. Menerbitkan templat anda sendiri ke Pustaka ialah muat naik yang sama seperti mana-mana item lain. Belum dibina: pengiraan selain bilangan dan jumlah.
