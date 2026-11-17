---
title: Isu, revisi, dan changelog gambar
summary: Catat setiap set lembar yang Anda serahkan, lihat apa yang berubah sejak itu di setiap lembar dan elemen, dan simpan instruksi lapangan, gambar kerja, serta model tertaut terhadap isu yang sesuai.
keywords: isu, set diterbitkan, set diajukan, pengajuan, revisi, apa yang berubah, sejak isu, changelog, changelog gambar, register gambar, transmittal, instruksi lapangan, gambar kerja, model tertaut, tender, konstruksi, snapshot, bandingkan
from: 4c732832
---

## Yang akan Anda lakukan

Catat sebuah isu: lembar mana yang dikirim, pada tanggal berapa, untuk tujuan apa, masing-masing dengan revisinya. Nanti, tanyakan apa yang berubah sejak isu itu. Simpan instruksi lapangan dan gambar kerja yang dikembalikan terhadap isu tersebut.

## Langkah

1. Di panel kiri, buka **Isu dan revisi**.
2. Pilih **Catat isu**. Revisinya disarankan (A, lalu B; revisi bernomor seperti P1 naik hitungannya). Pilih untuk tujuan apa isu ini, kepada siapa dikirim, tanggal, dan lembarnya. Jika tahap proyek Anda sudah diatur, tujuan mengikuti tahap itu. Jika paket perizinan memiliki daftar dokumen pendukung, lembar yang tertaut ke daftar itu akan dicentang otomatis.
3. Biarkan **Simpan juga salinan model sebagai yang diterbitkan** tercentang agar model tetap persis seperti saat dikirim. Salinan diunduh; nama, ukuran, dan SHA-256-nya disimpan bersama isu.
4. Pilih **Catat isu ini**. Lembar yang berubah sejak terakhir diterbitkan menerima revisi baru. Lembar yang tidak berubah tetap memakai revisinya. Blok judul setiap lembar menampilkan revisinya.
5. Untuk melihat apa yang berubah, pilih **Perubahan sejak** di samping isu. Setiap lembar menampilkan Sama atau Berubah, dengan elemen yang ditambahkan, diubah, dan dihapus di lembar itu. Klik angka untuk memilih elemen tersebut.
6. Pilih **Tambahkan catatan** untuk instruksi lapangan, gambar kerja, set markup, model tertaut, atau catatan. Pilih isu yang dimaksud. File yang Anda pilih dicatat berdasarkan nama, ukuran, dan SHA-256; file tetap berada di tempatnya.
7. **Changelog gambar** menampilkan satu baris untuk setiap lembar dan satu kolom untuk setiap isu. **Unduh changelog (CSV)** menyimpannya beserta isu dan catatannya.
8. **Simpan riwayat isu** menulis file `.issues.json`. MarkupCraft, TakeoffCraft, dan DetailCraft membacanya dengan **Baca riwayat isu**.

## Perlu diketahui

- Riwayat disimpan di dalam file IFC (property set `CadCraft_Issues` pada proyek). Program lain mengabaikannya.
- Lembar dihitung berubah saat pengaturannya sendiri berubah, atau saat elemen yang ditampilkannya berubah: denah menampilkan levelnya, tampak atau potongan menampilkan seluruh model, dan jadwal pintu atau jendela menampilkan pintu atau jendelanya.
- Elemen dihitung berubah saat properti, posisi, ukuran, atau bentuknya berubah.
- Untuk melihat properti mana yang tepat berubah, buka salinan model yang diterbitkan dengan **Bandingkan versi**.
- Menghapus isu tetap menyimpan catatannya, tanpa isu. Setiap langkah dapat dibatalkan dengan Urungkan.
- Model dengan lebih dari 60.000 elemen tidak menyimpan catatan setiap elemen bersama isu. Lembar tetap dibandingkan.

## Belum dibuat

- Lembar tidak disimpan sebagai PDF bersama isu.
- Awan revisi tidak digambar pada lembar milik BimCraft sendiri. Catat awan di MarkupCraft terhadap isu.
