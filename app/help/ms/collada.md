---
title: Eksport model sebagai Collada atau untuk Google Earth
summary: Tulis model IFC yang sedang dibuka sebagai fail Collada (.dae) untuk Blender dan program 3D lain, atau sebagai pakej Google Earth (.kmz) yang diletakkan di tempat model itu berada pada peta.
keywords: collada, dae, kmz, kml, google earth, blender, eksport, geolokasi, georujukan, latitud, longitud, lokasi, program 3D
from: 81cfec09
---

{{ui:Collada}} pada bar alat (atau {{ui:Export Collada (.dae, .kmz)…}} dalam menu Fail untuk gaya menu dan reben) menulis apa yang sedang dibuka sebagai Collada 1.4.1: setiap model yang dipaparkan, dengan model gabungan diletakkan di tempat yang anda pilih.

## Eksport

1. Pilih {{ui:Collada}}.
2. Pilih format:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Hanya ditawarkan apabila model mempunyai lokasi.
3. Pilih pilihan, kemudian {{ui:Export}}. Fail dimuat turun, dan bar status memberitahu berapa banyak elemen yang dimasukkan.

| Pilihan | Fungsinya |
|---|---|
| {{ui:Write the location into the file}} | Menambah latitud, longitud, ketinggian dan tajuk asal fail ke dalam .dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, atau {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Ruang turut dimasukkan (ia ditinggalkan secara lalai) |
| {{ui:Include hidden elements}} | Elemen yang anda sembunyikan turut ditulis (secara lalai hanya apa yang anda lihat ditulis) |

## Apa yang ada dalam fail

| Dalam model | Dalam fail Collada |
|---|---|
| Bangunan, tingkat | Nod bersarang, tingkat mengikut urutan aras; elemen yang tiada tingkat di bawah "Unplaced" |
| Setiap elemen | Satu nod dengan mesh sendiri, dinamakan seperti dalam model (namanya, atau jika tiada, kelas dan tagnya) |
| Kelas, GlobalId, jenis pratakrif | Dalam data tambahan nod (profil IFC), dengan nama tepat (profil ModelCraft) |
| Warna | Bahan, dengan ketelusan |
| Unit dan paksi | Meter, Z ke atas. Aras 0 bagi model di hadapan berada pada ketinggian 0 |

Model kekal berhampiran asal merentasi tanah, supaya program yang berfungsi dengan ketepatan tunggal memaparkannya tanpa goyangan. ModelCraft menulis fail Collada dengan penulis yang sama, dan membuka fail ini dengan nama elemennya.

## Dari mana lokasi diperoleh

Model di hadapan memberikan lokasi, dengan cara yang sama {{ui:Ukur}} mengira latitud dan longitud sesuatu titik:

- Penukaran peta (IFC4 IfcMapConversion, atau set sifat IFC2X3) melalui sistem koordinat model. Sistem yang anda pilih untuk model didahulukan berbanding sistem yang dinamakan dalam fail.
- Jika tidak, latitud dan longitud tapak (anggaran: memadai merentasi satu tapak).

Tajuk diukur, bukan dianggap: ia mengambil kira putaran peta, utara sebenar dan penumpuan peta. Untuk memberikan lokasi kepada model, gunakan {{ui:Asal peta…}} dalam {{ui:Ukur}}.

## Dalam program lain

- **Google Earth** membaca .kmz: model muncul di lokasinya, dipusingkan ke utara. Fail .dae biasa tidak mempunyai tempat yang Google Earth baca untuk lokasi; gunakan .kmz.
- **Blender** (4.x dan ke bawah): File, Import, Collada (.dae). Setiap elemen masuk sebagai objek sendiri dengan bahannya. Lokasi disimpan dalam data tambahan fail, yang Blender tidak baca. Blender 5.0 menggugurkan pengimport Collada terbinanya; di sana, gunakan {{ui:USD}} atau eksport glTF sebagai gantinya, atau buka .dae dalam Blender 4.5 dan simpan sebagai .blend.

Ujian kami menyemak setiap fail terhadap skema Collada 1.4.1 dan membacanya semula dengan pembaca Collada bebas. Kami belum membukanya dalam Blender atau Google Earth.
