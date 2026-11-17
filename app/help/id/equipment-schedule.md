---
title: Buat jadwal peralatan dan ekspor CSV
summary: Ubah tag item pada gambar layanan makanan menjadi jadwal peralatan, saring, lompat ke setiap item pada lembarnya, dan unduh sebagai CSV.
keywords: peralatan, jadwal, layanan makanan, dapur, tag item, kcl, atribut, bom, daftar material, csv, spreadsheet, ekspor, ekstraksi data
from: e3faa1c8
---

## Yang akan Anda lakukan

Baca daftar peralatan dari gambar dapur atau layanan makanan, periksa, temukan setiap item di denah, dan unduh sebagai file spreadsheet.

Ini berfungsi pada gambar yang tag peralatannya membawa datanya sebagai atribut blok, seperti pustaka desain dapur seperti KCL: setiap tag memuat nomor item (`KCL-ITEM`), kuantitas, kategori, pabrikan, model, data listrik dan plambing, serta catatan. Gambar lain tidak memiliki tab {{ui:Equipment}}.

## Langkah

1. Buka gambar, sebaiknya dari folder proyeknya agar gambar tertautnya ikut dimuat.
2. Klik tab {{ui:Equipment}} di atas gambar. Labelnya menunjukkan berapa item yang ada di lembar, misalnya "Peralatan (88)".
3. Baca jadwalnya: **Item**, **Qty**, **Peralatan**, **Pabrikan**, **Model**, **Listrik**, **Plambing**, dan **Lokasi**.
4. Pilih apa yang akan didaftarkan di menu di atas tabel: **Setiap lembar**, satu lembar, **Tidak ada di lembar mana pun**, atau **Semua yang ditandai di gambar**. Setiap pilihan menampilkan jumlahnya.
5. Ketik di kotak filter ("Filter: kategori, pabrikan, model…") untuk mempersempit daftar, misalnya `refrigerator` atau `208`.
6. Klik nama lembar item di kolom **Lokasi**.
7. Lihat gambarnya: BimCraft beralih ke lembar itu, memperbesar item, dan menggambar lingkaran di sekelilingnya. Baris status menyatakan "Item *n*, *kategori* dilingkari di *lembar*."
8. Klik {{ui:Equipment}} untuk kembali ke jadwal.
9. Klik {{ui:Download CSV}}.

## Yang harus Anda lihat

- Sebuah file bernama "*nama gambar* equipment.csv" (dengan nama lembar dalam kurung jika Anda mendaftarkan satu lembar) di folder unduhan Anda. File ini dapat dibuka di Excel, Numbers, LibreOffice, atau Google Sheets.
- Baris status: "*nama file* diunduh (*n* item)."

CSV memuat kolom ini: Item, Qty, Kategori, Pabrikan, Model, Listrik, Plambing, Catatan, Catatan listrik, Catatan plambing, Lembar, Ditempatkan (berapa tag). Yang diunduh hanya baris yang tampak di tabel, setelah menu dan filter diterapkan.

## Cara jadwal dibangun

- Jadwal dibaca dari **tag itu sendiri**, bukan dari tabel jadwal yang digambar di lembar. Catatan di atas tabel menyatakan berapa tag yang dibaca.
- Satu baris adalah satu nomor item dengan satu set data. Kuantitasnya adalah **jumlah** tag-tagnya, seperti cara jadwal cetak menghitungnya: rak yang diberi tag "5" di satu tempat dan "3" di tempat lain berjumlah 8, ditampilkan sebagai "5 + 3".
- **Lokasi** mendaftar lembar yang menampilkan setiap item, dihitung dari apa yang ditampilkan viewport setiap lembar, yaitu yang tercetak. "Hanya model" berarti tidak ada lembar yang menampilkannya.
- **Nomor dipakai dua kali** menandai satu nomor item pada dua peralatan yang berbeda. Baris itu diberi tanda kuning kecokelatan.
- Tag yang tidak ditampilkan lembar mana pun disimpan terpisah di bawah **Tidak ada di lembar mana pun**. Tag ini sering tersisa dari rencana sebelumnya atau pekerjaan lain, dan tidak pernah dicampur ke **Setiap lembar**.
- **Listrik** menampilkan ampere, kW, HP, volt, fase, sambungan, dan colokan sebagaimana ditandai. **Plambing** menampilkan ukuran sambungan: CW air dingin, HW air panas, DD drainase langsung, ID drainase tidak langsung, dan gas. Bidang tag lainnya belum ditampilkan.

## Kesalahan umum

- **Tidak ada tab {{ui:Equipment}}.** Gambar tidak memiliki tag `KCL-ITEM`, atau peralatannya digambar tanpa data. Tidak ada yang bisa dibaca.
- **Jumlah berbeda dengan jadwal cetak.** Jadwal cetak mungkin mencantumkan nomor cadangan atau memakai nama yang lebih pendek daripada tag. Percayai tag untuk apa yang ditempatkan; periksa perbedaannya dengan desainer.
- **Membuka CSV menampilkan karakter aneh.** File ini berformat UTF-8. Bukalah dengan perintah impor spreadsheet Anda dan pilih UTF-8 jika program memintanya.
- **Sel diawali tanda kutip tunggal.** Nilai yang diawali `=`, `+`, `-`, atau `@` diberi `'` di depannya agar spreadsheet tidak menjalankannya sebagai rumus.
- **{{key:F}} dan {{key:P}} tidak melakukan apa-apa.** Keduanya bekerja pada gambar, bukan pada jadwal. Klik tab lembar terlebih dahulu.
