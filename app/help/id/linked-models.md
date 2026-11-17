---
title: Tautkan model lain untuk koordinasi
summary: Tampilkan model IFC lain di samping model Anda secara referensi (tidak pernah digabung), tempatkan dengan koordinat bersama, koordinat peta atau dua titik, tangkap ke sana saat menggambar, dan muat ulang saat filenya berubah.
keywords: tautan, model tertaut, linked model, referensi, xref, koordinasi, federasi, struktur, MEP, konsultan, koordinat bersama, survei, koordinat peta, muat ulang, lepas muatan, referensi dokumen, IfcDocumentReference
from: 3e0f1eab
---

## Yang akan Anda lakukan

Menggambar terhadap model konsultan (struktur, layanan, bangunan yang ada) tanpa menyalin apa pun ke file Anda sendiri.

Model **tertaut** ditampilkan di tampilan 3D dan dipotong pada denah Anda, tetapi tidak pernah diubah dan tidak pernah disimpan ke dalam model Anda. Model Anda hanya menyimpan tautannya: nama file dan di mana ia diletakkan.

## Menautkan model

1. Di bagian {{ui:Model tertaut}} pada panel kiri, klik {{ui:Tautkan model…}} dan pilih file IFC. Model langsung tampil, dan barisnya bertuliskan **Ditampilkan**.
2. Pilih lokasinya di {{ui:Penempatan}}:
   - **Koordinat bersama** (untuk awal): koordinatnya milik Anda, seperti saat kedua model diatur dari titik asal yang sama.
   - **Koordinat peta**: koordinat peta kedua file menyejajarkannya (keduanya perlu konversi peta; BimCraft memberi tahu jika salah satunya tidak punya).
   - **Dengan dua titik…**: klik satu titik pada model tertaut, lalu tempat titik itu di model Anda; kemudian pasangan kedua. Tautan dipindahkan dan diputar (sekitar vertikal) agar pas.
3. Setiap perubahan tautan dan penempatan adalah satu langkah: {{key:Mod+Z}} membatalkannya.

## Bekerja dengannya

- Denah menampilkan model tertaut yang dipotong pada tinggi potong level sebagai garis tipis, dan alat {{ui:Dinding}} serta alat gambar lain menangkap ke sudut dan tepinya.
- Pilih elemennya di tampilan 3D untuk membaca propertinya. Model tertaut tidak pernah menjadi yang Anda sunting, jadi tombol radionya di {{ui:Model}} tidak aktif.
- **File berubah?** Saat peramban dapat memantau file (file yang dibuka melalui pemilih file, atau di Studio), BimCraft memuat ulang tautan sendiri beberapa detik setelah file disimpan kembali, dan memberi tahu Anda. Jika tidak, klik {{ui:Muat ulang}}.
- {{ui:Lepas muatan}} menyembunyikannya dan membebaskan memori; tautan tetap ada di model Anda. {{ui:Muat…}} menampilkannya lagi (Anda memilih file: peramban tidak dapat membuka file berdasarkan namanya sendiri).
- Tombol × menghapus tautan dari model Anda.

## Yang seharusnya Anda lihat

- Di file IFC Anda: sebuah IfcDocumentReference untuk setiap tautan (nama file), terkait dengan proyek, dan tempatnya di set properti proyek CadCraft_Links. Saat Anda membuka kembali model, tautannya tercantum sebagai **Belum dimuat** sampai Anda memuatnya.

:::note
Pemeriksaan benturan, Bandingkan, dan Temukan dapat menggunakan tautan yang dimuat seperti model terbuka lainnya: lihat [Lihat beberapa model IFC bersama](topic:several-models).
:::
