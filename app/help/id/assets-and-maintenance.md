---
title: Simpan data aset dan catatan perawatan di dalam model
summary: Gunakan model IFC yang diserahterimakan untuk menjalankan gedung: pembuat, model, nomor seri, garansi, dan umur layanan untuk peralatan dan perlengkapan, serta catatan perawatan yang dilakukan, semuanya ditulis ke dalam IFC.
keywords: serah terima, sertifikat penyelesaian, sertifikat hunian, as-built, paket serah terima, aset, daftar aset, facility management, fm, operasi, perawatan, layanan, garansi, nomor seri, barcode, pembuat, produsen, model, umur layanan, serah terima, cobie, kembaran digital, terlambat, jatuh tempo, perintah kerja
from: b84ac492
---

Tab {{ui:Aset}} di panel kanan mengubah model IFC yang terbuka menjadi catatan peralatan gedung. Semuanya ditulis ke dalam IFC itu sendiri, dalam set properti dan tugas milik IFC, sehingga program berikutnya yang membuka file itu juga membacanya. Tidak ada yang diunggah dan tidak ada server yang diperlukan: simpan IFC untuk menyimpannya.

## Yang tercantum

- Peralatan dan perlengkapan: furnitur, perlengkapan sanitasi, armatur lampu, peralatan, terminal udara, katup, pompa, kipas, boiler, tangki, stopkontak, panel hubung, lift, dan elemen serupa lainnya, serta item pustaka dengan data peralatan.
- Elemen lain yang Anda **lacak**: pilih di model (pintu, dinding, atau pompa yang digambar sebagai objek biasa) dan klik {{ui:Lacak yang dipilih}}.
- Apa pun yang sudah memiliki data aset atau tugas perawatan, ditulis di sini atau oleh program lain.

Yang terlambat tampil lebih dulu, lalu yang jatuh tempo dalam 30 hari. Saring menurut nama, tag, pembuat, model, atau nomor seri, menurut level, atau centang {{ui:Hanya yang terlambat atau jatuh tempo dalam 30 hari}}.

## Data aset

Klik aset di daftar (atau pilih di model) untuk membuka datanya: pembuat, model, referensi model, nomor seri, barcode, hari pemasangan, nomor garansi beserta awal dan akhirnya, serta umur layanannya dalam tahun. {{ui:Simpan data}} menulisnya dalam satu langkah ({{key:Mod+Z}} membatalkannya). Biarkan kotak kosong untuk menghapus nilai itu.

## Dokumen

Di bawah data, {{ui:Dokumen}} mendaftar manual, garansi, foto, sertifikat, dan gambar yang ditautkan ke aset. Pilih jenisnya, beri judul (atau biarkan kosong: nama file yang dipakai), dan ketik di mana letaknya:

- sebuah **alamat web** (`https://…`): ia mendapat tautan Buka, yang dibuka di tab baru;
- atau sebuah **nama file atau path** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, atau network share): simpan file di sebelah IFC, di folder yang sama atau di bawahnya, agar namanya tetap berfungsi saat Anda menyerahkan folder. BimCraft menampilkan nama; buka file dari foldernya.

File itu sendiri tidak pernah diunggah atau disalin ke dalam IFC: hanya tautannya yang ditulis. Alamat web yang memuat kata sandi, dan tautan apa pun yang bukan alamat web atau file (seperti `javascript:`), ditolak. {{ui:Hapus}} melepas dokumen dari aset (satu langkah; {{key:Mod+Z}} membatalkannya).

Dokumen yang ditempatkan program lain pada elemen juga didaftar. Dokumen pada **tipe** elemen tampil di setiap elemen dengan tipe itu dan menyatakannya; ubah dokumen itu di tempat tipenya dibuat.

Dalam IFC setiap dokumen adalah referensi dokumen IFC yang terikat pada elemen, dengan jenisnya tetap pada ikatan itu, baik di IFC4 maupun IFC2X3.

## Catatan perawatan

Di bawah dokumen, {{ui:Catat pekerjaan yang dilakukan}}: hari pekerjaan dilakukan, pekerjaannya, siapa yang melakukannya, kapan jatuh tempo berikutnya, dan catatan. Setiap entri adalah satu langkah; {{ui:Edit}} dan {{ui:Hapus}} mengubahnya nanti. Tanggal jatuh tempo berikutnya dari entri terbaru menentukan apakah aset terlambat atau segera jatuh tempo.

## Cara disimpan dalam IFC

- Pembuat dan model di `Pset_ManufacturerTypeInformation`, nomor seri, barcode, dan hari pemasangan di `Pset_ManufacturerOccurrence`, garansi di `Pset_Warranty`, dan umur layanan di `Pset_ServiceLife`, pada elemen itu sendiri. Jika tipe elemen sudah memuat pembuat atau model, nilai itu tampil sampai Anda mengetik milik Anda sendiri.
- Setiap entri perawatan adalah **tugas** IFC berjenis perawatan, terikat pada elemen, dengan tanggalnya (di IFC4 juga sebagai waktu tugas itu sendiri) dan set `CadCraft_Maintenance` yang memuat hari, siapa yang melakukannya, dan hari jatuh tempo berikutnya.
- Nilai yang dibagi dengan elemen lain disalin lebih dulu: mengubah satu aset tidak pernah mengubah tetangganya.
- Pada file IFC2X3 yang lebih lama, tanggal ditulis sebagai teks (YYYY-MM-DD); versi itu memerlukan catatan tanggal terpisah di sana, yang tidak ditulis BimCraft.

## Pembacaan sensor

Buka {{ui:Nilai sensor}} dan {{ui:Buka pembacaan (CSV)…}} untuk membawa pembacaan yang diekspor dari sistem manajemen gedung, data logger, atau spreadsheet:

- **Kolom pertama adalah waktu**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00`, atau detik Unix. Waktu tanpa zona dibaca dalam zona waktu komputer Anda sendiri. Tanggal dengan hari di depan seperti `23/10/2026` tidak dibaca (ambigu); ekspor tanggal ISO.
- **Setiap kolom lain adalah satu sensor**, berjudul dengan **tag**, **nama**, atau **GlobalId** asetnya. Judul yang tidak cocok dengan aset mana pun, atau cocok dengan lebih dari satu, didaftar dan dilewati. Koma, titik koma, atau tab memisahkan kolom; dengan titik koma atau tab, koma desimal (`21,5`) juga dibaca.
- Waktu atau nilai yang tidak terbaca (sebuah kata, satuan yang diketik di sel) dihitung dan dilewati, tidak ditebak.

Pembacaan terbaru tampil di kolom {{ui:Pembacaan}} daftar dan di blok {{ui:Sensor}} aset, dengan **grafik** dari setiap pembacaan (di ponsel, grafik menunggu sampai Anda ketuk {{ui:Tampilkan grafik}}). Atur **batas rendah dan tinggi** serta satuan pada aset, lalu {{ui:Simpan batas}}: pembacaan di luar batas itu menandai aset. Centang {{ui:Tampilkan pada model}} untuk mewarnai setiap aset menurut pembacaannya — biru di bawah batas rendahnya, hijau dalam batasnya, merah di atas batas tingginya, dan, untuk aset tanpa batas, satu skala biru dari pembacaan terendah ke tertinggi — dengan pembacaannya sebagai label (hingga 60 label, yang ditandai didahulukan).

**Pembacaan tetap di tab peramban ini**: tidak disimpan dalam IFC dan tidak dikirim ke mana pun; buka kembali CSV-nya lain kali. **Batas disimpan dalam IFC** (set `CadCraft_Sensor` pada elemen: Low, High, Unit), sehingga orang berikutnya yang membuka file melihat tanda yang sama.

## Pembacaan langsung

{{ui:Umpan langsung}} membaca nilai saat terjadi, **langsung dari peramban ini ke sistem Anda sendiri**. Tidak ada yang melewati server kami dan tidak ada yang disimpan selain di tab peramban Anda. Tidak ada yang terhubung saat file dibuka: hanya {{ui:Hubungkan}} yang melakukannya.

- **MQTT over WebSockets**: alamat listener WebSocket broker Anda (`wss://broker.example.com:8884/mqtt`), dan satu atau lebih topik dengan `{tag}` tempat tag aset berada, misalnya `site/{tag}/temperature` (BimCraft berlangganan `site/+/temperature` dan membaca tag dari topik setiap pesan). Topik tanpa `{tag}` menamai sensornya sendiri. Sebuah pesan berupa angka biasa (`21.5`) atau JSON seperti `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (atur {{ui:Kolom nilai dalam JSON}} jika milik Anda bernama lain).
- **Minta alamat (HTTP)**: alamat web yang dijawab sistem manajemen gedung Anda atau skrip kecil milik Anda, ditanya setiap beberapa detik (5 paling sedikit). Ia dapat menjawab dengan JSON yang dikunci tag (`{"AHU-1": 21.5}`), daftar JSON (`[{"tag": "AHU-1", "value": 21.5}]`), atau CSV pembacaan seperti di atas. Jika tidak menjawab, BimCraft menunggu dua kali lebih lama sebelum bertanya lagi, hingga lima menit.

Setiap pembacaan masuk ke aset yang namanya tag, nama, atau GlobalId-nya disebutkan, persis seperti kolom CSV; nama yang tidak cocok dengan aset apa pun didaftar. Pembacaan bergabung dengan {{ui:Nilai sensor}}: daftar, grafik, batas, dan warna pada model bekerja dengan cara yang sama.

**Kata sandi atau token Anda** diketik untuk satu koneksi: ia diserahkan ke koneksi dan kotaknya dikosongkan; ia tidak pernah disimpan di peramban ini maupun dalam IFC. Token dikirim sebagai header standar `Authorization: Bearer`, dan tidak ada cookie yang dikirim.

{{ui:Simpan pengaturan ini di IFC}} menulis alamat, topik, kolom nilai, dan seberapa sering bertanya ke dalam model (set `CadCraft_Feed` pada proyek; tidak ada kolom untuk kata sandi), sehingga orang berikutnya yang membuka file hanya mengetik login miliknya sendiri dan mengklik {{ui:Hubungkan}}. Jangan letakkan kata sandi atau kunci di dalam alamatnya sendiri: alamat yang memuat nama pengguna dan kata sandi ditolak.

:::note
**Apa yang dibutuhkan broker atau alamat Anda.** Halaman peramban hanya dapat berbicara dengan server yang mengizinkannya:
- Halaman aman (https), sehingga peramban hanya terhubung ke alamat `wss://` dan `https://` — kecuali di komputer Anda sendiri (`localhost`), tempat `ws://` dan `http://` berfungsi untuk pengujian.
- Alamat HTTP harus mengizinkan permintaan dari halaman ini (CORS: header `Access-Control-Allow-Origin`, dan `Authorization` di antara header yang diizinkan jika Anda memakai token).
- Sebagian besar broker (Mosquitto, EMQX, HiveMQ, dan lainnya) menyediakan listener WebSocket; sering kali ini mati sampai dinyalakan. BimCraft berbicara MQTT 3.1.1.
:::

Tidak ada **peringatan** saat BimCraft ditutup: batas hanya menandai aset selama model terbuka dengan umpan tersambung. Memantau gedung sepanjang waktu membutuhkan server, yang tidak dijalankan BimCraft.

## Spreadsheet COBie

**COBie** adalah spreadsheet serah terima yang banyak diminta pemilik dan tim fasilitas (diterbitkan oleh National BIM Standard di AS; BS 1192-4 di Inggris). Buka {{ui:Spreadsheet COBie}} di tab:

- {{ui:Simpan sebagai COBie (.xlsx)}} menulis lembar COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document, dan Attribute — dari model dan data aset: gedung, levelnya dan ruangnya (luas dari kuantitas model), setiap aset sebagai komponen dengan nomor serinya, hari pemasangan, awal garansi, tag, dan barcode, tipenya beserta pembuat, model, umur layanan, dan panjang garansi, sistem yang menjadi bagiannya, catatan perawatan sebagai pekerjaan, dan dokumen yang ditautkan. Setiap komponen membawa GlobalId IFC elemen itu. Ketik alamat email Anda untuk kolom "created by" COBie, atau biarkan kosong (akan tertulis n/a). Nilai yang tidak dimiliki model tertulis **n/a**; kolom kategori memuat kelas IFC, bukan kode OmniClass.
- {{ui:Baca spreadsheet COBie…}} membacanya kembali, dari BimCraft atau program lain, dan **mendaftar setiap perubahan lebih dulu**: aset mana, nilai apa, dari apa menjadi apa, dan dokumen baru. {{ui:Terapkan}} menulisnya semua dalam satu langkah ({{key:Mod+Z}} membatalkannya). Baris dicocokkan menurut GlobalId, lalu menurut nama komponen. Baris yang tidak cocok dengan apa pun di model didaftar, tidak ditambahkan.

Spreadsheet diperlakukan sebagai tidak tepercaya: rumus tidak pernah dibaca atau dijalankan (hanya nilai terakhir yang disimpan di sel), nilai yang membuat garansi berakhir sebelum mulai dan tautan dokumen yang bukan alamat web atau nama file dibiarkan keluar dan dihitung, dan buku kerja yang sangat besar ditolak. Pekerjaan COBie adalah pekerjaan terencana sebuah tipe, sehingga ia ditulis tetapi tidak dibaca kembali. Di spreadsheet yang ditulis BimCraft, teks yang bisa disangka rumus (diawali `=`, `+`, `-`, atau `@`) ditandai sebagai teks.

Buku kerja ini diperiksa dalam pengujian kami dengan pembaca spreadsheet independen; belum melewati validator COBie. Jika tim penerima menjalankannya, beri tahu kami apa hasilnya.

## Dokumen serah terima

Dokumen yang diserahkan kepada pemilik bersama gedung yang sudah selesai adalah milik proyek, bukan satu aset. Di tab {{ui:Aset}}, buka {{ui:Dokumen serah terima}}:

1. {{ui:Tambahkan dokumen}}, pilih jenisnya (sertifikat penyelesaian, sertifikat hunian, garansi, manual, gambar as-built, atau lainnya), lalu ketik judulnya, tanggal terbit, siapa yang menerbitkan, dan nomor referensinya.
2. Tentukan letaknya: alamat web, nama file yang disimpan di sebelah IFC, atau {{ui:Lampirkan file}}.
3. {{ui:Tambahkan ke daftar}}. {{ui:Edit}} dan {{ui:Hapus}} mengubah daftar; masing-masing adalah satu langkah yang dapat Anda urungkan.

{{ui:Buat paket serah terima}} mengunduh satu zip: halaman sampul yang mendaftar setiap dokumen, daftar yang sama seperti spreadsheet, buku kerja COBie (dokumennya ada di lembar Document-nya, sebagai baris tentang Facility), model, dan setiap file yang dilampirkan. Sertifikat penyelesaian atau hunian yang belum ada dalam daftar disebutkan namanya di sampul; paket tetap dibuat.

Model di dalam paket adalah **model as-built**: ia menyatakan elemen mana yang diukur di lokasi. Bersamanya, di folder `as-built`: pernyataannya, daftar setiap elemen dengan status verifikasinya, set gambar sebagaimana adanya sekarang sebagai satu PDF (gambar as-built), dan changelog gambar bila model memiliki set yang diterbitkan. Lihat [Tandai elemen sebagai diperiksa atau terverifikasi di lapangan](topic:verification).

- Dalam file IFC, setiap dokumen adalah IfcDocumentInformation yang terikat pada proyek (IfcRelAssociatesDocument), dengan judul, referensi, tanggal, penerbit, dan lokasinya, sehingga program lain dapat mendaftarnya.
- File yang dilampirkan dicatat menurut nama, ukuran, dan SHA-256. Untuk menyimpan file itu bersama proyek, gunakan {{ui:Simpan proyek sebagai bundel}} (.ccbundle berisi model dan file lampiran; membukanya mengembalikannya, masing-masing diperiksa terhadap catatannya). Penyimpanan biasa menanyakan mana yang Anda inginkan.
- .ifc biasa menyimpan catatannya, bukan file-nya: setelah membukanya, gunakan {{ui:Lampirkan file lagi}}. File yang sama dikenali; file yang berbeda menggantikan catatan.

## CSV

{{ui:CSV}} menyimpan setiap aset dengan datanya, setiap entri perawatan, dan setiap dokumen, satu baris masing-masing, untuk spreadsheet atau program perawatan lain.

:::note
Belum dibuat: layanan hosted yang menyimpan pembacaan dan mengirim peringatan saat BimCraft ditutup, serta membaca kembali pekerjaan COBie. Lihat [Belum dibuat](topic:not-built-yet).
:::
