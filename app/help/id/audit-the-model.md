---
title: "Audit model: ruang, tag, LOD, benturan, dan antarmuka"
summary: Jalankan pemeriksaan siap pakai untuk ruang tanpa nama, tag yang hilang, elemen di bawah tingkat pengembangan yang diminta tahap proyek, benturan antar disiplin, dan antarmuka LOD 350. Hanya saran: tidak ada yang diblokir.
keywords: audit, pemeriksaan, ruang tanpa nama, tag hilang, tanda, lod, tingkat pengembangan, tonggak, tahap, benturan, disiplin, koordinasi, antarmuka, lod 350, bukaan, lintel, header, penetrasi, sleeve, pipa, duct, masalah, laporan pemeriksaan, saran
from: cc83a14d
---

## Yang akan Anda lakukan

Periksa seluruh model sekaligus sebelum Anda menerbitkannya. Audit menjalankan kumpulan aturan yang siap dan memasukkan temuannya ke daftar {{ui:Masalah}} sebagai saran. Tidak ada yang diblokir: Anda memperbaiki temuan, atau menerimanya dengan alasan, seperti masalah lainnya.

## Langkah

1. Buka {{ui:Pemeriksaan model}} › {{ui:Audit}} di panel kiri, atau {{ui:Alat}} › {{ui:Audit model…}} (diketik: `AUDIT`).
2. Pilih {{ui:Tahap proyek}}. Ini tahap yang sama dengan di rincian gambar.
3. Centang kumpulan aturan yang akan dijalankan.
4. Klik {{ui:Jalankan audit}}.
5. Baca baris untuk setiap kumpulan aturan, lalu {{ui:Buka daftar Masalah}}. Klik temuan untuk memilih elemennya.
6. {{ui:Laporan pemeriksaan}} mengunduh laporannya: setiap temuan, siapa menerima apa dan mengapa, serta kumpulan aturan yang dijalankan.

## Kumpulan aturan

- **Ruang tanpa nama**: ruang tanpa nama, atau ruang yang masih disebut seperti sebutan program ("Room 3").
- **Tag yang hilang**: pintu atau jendela tanpa tanda, ruang tanpa nomor, perangkat listrik tanpa tag.
- **Elemen di bawah LOD tahap**: setiap dinding, pelat, plafon, atap, pintu, dan jendela yang LOD-nya di bawah yang diminta tahap. Elemen membaca tag LOD tipenya; elemen yang diverifikasi di lapangan adalah LOD 500. Elemen tanpa tag dihitung dalam satu catatan, karena tidak dapat diperiksa.
- **Benturan antar disiplin**: elemen dari dua disiplin (arsitektur, struktur, mekanikal, plambing, listrik, menurut kelas IFC) yang saling bertabrakan. Atap yang bertumpu pada dindingnya tidak dihitung.
- **Antarmuka LOD 350**: setiap pintu dan jendela berada di bukaan dindingnya, bukaan muat di dalam dinding, dua bukaan tidak tumpang tindih, bukaan yang lebih lebar dari batas memiliki lintel atau header (elemen di atasnya, atau catatan pada pintu atau jendela), dan pipa, duct, atau cable tray yang melintasi dinding atau pelat memiliki bukaan di situ. Temuan dihitung per pasangan disiplin.
- **Elemen yang dikenali namun belum diperiksa**: dinding, pintu, jendela, dan ruang yang dibaca dari PDF, pindaian, atau gambar yang masih belum diverifikasi. Lihat [Tandai elemen sebagai diperiksa atau terverifikasi di lapangan](topic:verification).

## LOD yang diminta setiap tahap

Buka {{ui:LOD yang diminta setiap tahap}} untuk melihat atau mengubah tabelnya.

:::note
Tabel dan lebar lintel adalah nilai awal CadCraft. Keduanya tidak diambil dari standar: sebuah proyek mengatur LOD per tahap dalam rencana eksekusi BIM-nya. Atur sesuai milik Anda. Kantor dapat mengatur tabel untuk semua orang di Pengaturan › Default Policies › Audit; perubahan di bagian Audit disimpan di komputer ini.
:::

## Hal yang perlu diketahui

- Lintel dapat dicatat alih-alih dimodelkan: pilih pintu atau jendela dan isi {{ui:Catatan lintel atau header}} di bawah {{ui:Verifikasi}} pada Properti.
- Pipa yang melewati bukaan nyata tidak memotong permukaan apa pun dan tidak dilaporkan. Pipa yang dimodelkan lurus menembus dinding dilaporkan.
- Pemeriksaan benturan berhenti setelah beberapa detik pada model yang sangat besar dan menyatakannya. Untuk pemeriksaan lengkap dua kumpulan yang dipilih, gunakan [Cari benturan antar-elemen](topic:clash-check).
- Jalankan audit lagi setelah Anda mengubah model. Temuan yang diterima tetap diterima selama nomornya tidak berubah.
- Audit membaca model. Audit tidak menggantikan tinjauan koordinasi oleh pihak yang bertanggung jawab.

## Selanjutnya

- [Periksa model untuk masalah umum](topic:model-checks)
- [Cari benturan antar-elemen](topic:clash-check)
- [Tandai elemen sebagai diperiksa atau terverifikasi di lapangan](topic:verification)
