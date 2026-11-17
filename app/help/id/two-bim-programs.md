---
title: Bekerja di antara dua program BIM
summary: Kirim model dari satu program BIM ke program lain melalui IFC dengan BimCraft di tengah, pertahankan GlobalIds, set properti, dan klasifikasinya, atur kedua program untuk properti yang sama, dan lihat apa yang kembali.
keywords: ifc, bolak-balik, interoperabilitas, globalid, guid, set properti, psets, klasifikasi, parameter bersama, pemetaan properti, penerjemah, bcf, koordinasi, pertukaran
from: 9f224176
---

## Yang akan Anda lakukan

Pindahkan model antara dua program BIM, misalnya dari Revit ke Archicad dan kembali, melalui IFC, dengan BimCraft di tengah untuk memeriksanya, menambahkan sesuatu, dan melaporkan apa yang tetap utuh. Format file milik masing-masing program tidak dibaca: semuanya berpindah sebagai IFC.

## Yang dipertahankan BimCraft

Saat Anda mengubah model di BimCraft dan mengklik {{ui:Simpan sebagai IFC}}, setiap baris yang tidak Anda ubah ditulis kembali persis seperti semula. Jadi:

- **GlobalIds** tetap sama, dan program lain dapat mencocokkan setiap elemen dengan yang dikirimnya.
- **Set properti** beserta nilainya tetap ada, kecuali nilai yang Anda ubah.
- **Klasifikasi** tetap melekat pada elemennya.

## Atur kedua program untuk properti yang sama

1. Buka model di BimCraft (dan bundel proyek, jika Anda memilikinya: grup propertinya akan ditambahkan).
2. Di panel kiri, buka {{ui:Antara dua program BIM}}.
3. Di bawah **Pemetaan properti**, unduh yang dibutuhkan masing-masing program:
   - {{ui:Parameter bersama}}: file parameter bersama. Di Revit, muat dengan Manage › Shared Parameters dan tambahkan parameter ke kategori yang membutuhkannya.
   - {{ui:Set properti ekspor IFC}}: file set properti yang ditentukan pengguna. Di pengaturan ekspor IFC Revit, pilih file itu di bawah set properti yang ditentukan pengguna, sehingga IFC yang diekspor membawa nama set dan properti yang sama.
   - {{ui:Tabel pemetaan (CSV)}}: setiap properti dengan set dan nama IFC-nya, tipenya, serta nama yang sesuai di setiap program. File pemetaan Archicad bukan format yang dipublikasikan, jadi atur penerjemah IFC dan pengelola propertinya secara manual dari tabel ini.
   - {{ui:File pemetaan}}: seluruh pemetaan sebagai satu file, untuk disimpan bersama proyek.

Set standar (Pset_ dan Qto_) dikecualikan dari file parameter bersama: kedua program menulisnya dari datanya sendiri.

## Kirim model dan bawa kembali

1. Ekspor IFC dari program pertama dengan GlobalIds dipertahankan (Revit: "Store the IFC GUID in an element parameter after export" aktif).
2. Buka di BimCraft, periksa ({{ui:Pemeriksaan model}}, {{ui:Pemeriksaan benturan}}), tambahkan isu ({{ui:Isu}}, BCF), ubah nilai jika perlu, lalu {{ui:Simpan sebagai IFC}}.
3. Buka IFC yang disimpan di program kedua, kerjakan, dan ekspor IFC dari sana dengan GlobalIds dipertahankan (penerjemah Archicad: "Global Unique Identifiers: Keep existing").
4. Kembali di BimCraft, buka model yang dikirim, lalu tambahkan yang kembali ({{ui:Tambahkan model}} di bawah Model).
5. Di {{ui:Antara dua program BIM}}, pilih **Dikirim** dan **Kembali**, lalu klik {{ui:Buat laporan}}.

## Membaca laporan

- **Elemen**: berapa banyak yang kembali dengan GlobalId yang sama, berapa yang hilang, dan berapa yang baru. Elemen dengan GlobalId baru tampil sebagai satu hilang dan satu baru: program lain tidak mempertahankannya.
- **Kelas IFC berubah**: elemen yang kembali sebagai jenis elemen lain.
- **Nilai properti dipertahankan**: bagian nilai yang kembali tanpa perubahan. Daftar di bawah menampilkan properti dengan nilai paling banyak berubah atau hilang.
- **Klasifikasi**: dipertahankan, berubah (sistem sama, kode lain), atau hilang.

{{ui:Unduh laporan (CSV)}} memberikan setiap properti beserta jumlahnya. Untuk melihat elemen mana yang berpindah atau berubah bentuk, gunakan {{ui:Bandingkan versi}} pada dua model yang sama.

:::note
BimCraft tidak menjalankan kedua program. Pengaturan mana yang membawa nilai bergantung pada pengaturan IFC masing-masing program: laporan menunjukkan apa yang benar-benar kembali, jadi coba satu pengaturan, ekspor lagi, dan bandingkan.
:::

## Isu berpindah sebagai BCF

Isu yang Anda buat di BimCraft diekspor sebagai BCF ({{ui:Isu}}), yang dapat dibaca kedua program dengan alat BCF mereka, sehingga pertanyaan tentang elemen sampai ke orang yang bekerja di program lain beserta sudut pandangnya.

Lihat juga [Buka bundel proyek](topic:open-project-bundle), [Dari file proyek ke BimCraft melalui IFC](topic:rvt-to-ifc), dan [Bandingkan dua versi model](topic:compare-versions).
