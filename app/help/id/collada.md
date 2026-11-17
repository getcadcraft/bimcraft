---
title: Ekspor model sebagai Collada atau untuk Google Earth
summary: Tulis model IFC yang terbuka sebagai file Collada (.dae) untuk Blender dan program 3D lain, atau sebagai paket Google Earth (.kmz) yang ditempatkan sesuai posisinya di peta.
keywords: collada, dae, kmz, kml, google earth, blender, ekspor, geolokasi, georeferensi, lintang, bujur, lokasi, program 3d
from: 81cfec09
---

{{ui:Collada}} di bilah alat (atau {{ui:Ekspor Collada (.dae, .kmz)…}} di menu File pada gaya menu dan gaya pita) menulis apa yang sedang terbuka sebagai Collada 1.4.1: setiap model yang ditampilkan, dan model gabungan pada posisi tempat Anda meletakkannya.

## Ekspor

1. Pilih {{ui:Collada}}.
2. Pilih format:
   - {{ui:File Collada (.dae), untuk Blender dan program 3D lain}}.
   - {{ui:Paket Google Earth (.kmz): model ditempatkan sesuai posisinya di peta}}. Hanya ditawarkan jika model memiliki lokasi.
3. Pilih opsinya, lalu {{ui:Ekspor}}. File diunduh, dan bilah status menampilkan berapa elemen yang ikut.

| Opsi | Fungsinya |
|---|---|
| {{ui:Tulis lokasi ke dalam file}} | Menambahkan lintang, bujur, tinggi, dan arah dari titik asal file ke .dae |
| {{ui:Tinggi}} | {{ui:Di atas tanah: level 0 model berada di atas medan}}, atau {{ui:Tinggi model di atas permukaan laut}} |
| {{ui:Sertakan ruangan dan space}} | Space ikut ditulis (secara default dilewati) |
| {{ui:Sertakan elemen tersembunyi}} | Elemen yang Anda sembunyikan ikut ditulis (secara default hanya yang terlihat) |

## Isi file

| Di dalam model | Di dalam file Collada |
|---|---|
| Bangunan, lantai | Node bersarang, lantai diurutkan menurut elevasi; elemen yang tidak berada di lantai mana pun berada di bawah "Unplaced" |
| Setiap elemen | Satu node dengan mesh sendiri, dinamai seperti di model (namanya, jika tidak ada maka kelas dan tag-nya) |
| Kelas, GlobalId, tipe bawaan | Di data tambahan node (profil IFC), dengan nama yang sama persis (profil ModelCraft) |
| Warna | Material, dengan transparansi |
| Satuan dan sumbu | Meter, Z ke atas. Level 0 model di depan berada pada tinggi 0 |

Model tetap dekat titik asal di seluruh permukaan tanah, sehingga program yang bekerja dengan presisi tunggal menampilkannya tanpa getaran. ModelCraft menulis file Collada-nya dengan penulis yang sama, dan membuka file ini dengan nama elemennya.

## Dari mana lokasi berasal

Model yang tampil di depan memberikan lokasi, dengan cara yang sama seperti {{ui:Ukur}} menghitung lintang dan bujur sebuah titik:

- Konversi peta (IFC4 IfcMapConversion, atau set properti IFC2X3) melalui sistem koordinat model. Sistem yang Anda pilih untuk model didahulukan daripada sistem yang disebut file.
- Jika tidak, lintang dan bujur tapak (perkiraan: cukup untuk seluruh tapak).

Arahnya diukur, bukan diasumsikan: memperhitungkan rotasi peta, utara sejati, dan konvergensi peta. Untuk memberi lokasi pada model, gunakan {{ui:Titik asal peta…}} di Ukur.

## Di program lain

- **Google Earth** membaca .kmz: model muncul di lokasinya, menghadap utara. .dae biasa tidak memiliki tempat lokasi dibaca oleh Google Earth; gunakan .kmz.
- **Blender** (4.x dan sebelumnya): File, Import, Collada (.dae). Setiap elemen masuk sebagai objeknya sendiri beserta materialnya. Lokasi disimpan di data tambahan file, yang tidak dibaca Blender. Blender 5.0 menghapus importer Collada bawaannya; di sana, gunakan {{ui:USD}} atau ekspor glTF sebagai gantinya, atau buka .dae di Blender 4.5 lalu simpan sebagai .blend.

Pengujian kami memeriksa setiap file terhadap skema Collada 1.4.1 dan membacanya kembali dengan pembaca Collada yang independen. Kami belum membukanya di Blender atau Google Earth.
