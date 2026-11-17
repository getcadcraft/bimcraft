---
title: Tag ruang dan area
summary: Pasang tag dengan nomor, nama, dan luas pada ruang atau area. Tag mengikutinya dan ukurannya ditentukan oleh tingginya di kertas.
keywords: tag, tag ruang, tag area, beri tag ruang, beri tag area, beri tag semua, label, tinggi teks, tinggi di kertas, anotasi
from: 67059d8a
---

## Yang akan Anda lakukan

Beri tag pada ruang dan area satu per satu atau sekaligus, dan pindahkan tag ke tempat yang mudah dibaca.

## Tempat alatnya

- Tata letak pita: {{ui:Arsitektur}} › **Ruang & Area** › {{ui:Beri tag ruang}} dan {{ui:Beri tag area}}.
- Tata letak klasik: bilah Gambar › menu {{ui:Ruang}}.
- Ruang atau area yang dipilih: Properti › {{ui:Tambahkan tag}}.

## Langkah

1. Pilih {{ui:Beri tag ruang}} lalu klik di dalam ruang, di tempat tag sebaiknya berada.
2. Atau tekan {{ui:Beri tag semua yang belum}} di baris itu: setiap ruang di lantai ini yang belum punya tag akan mendapat satu, di tengahnya. Ini satu langkah Urungkan.
3. Untuk memindahkan tag, pilih dengan Pilih lalu seret. Properti memiliki {{ui:Kembalikan ke tengah}}.
4. {{ui:Beri tag area}} bekerja dengan cara yang sama untuk area.

## Apa yang dilakukan tag

- Tag menampilkan nomor, nama, dan luas, dalam satuan tampilan Anda.
- Tag mengikuti ruangnya: ubah nama ruang, pindahkan dinding, dan kata-kata serta letak tag ikut berubah dalam langkah yang sama.
- Ukurannya ditentukan di kertas: {{ui:Tinggi teks di kertas}} dalam milimeter (mulai dari 2.5). Pada skala tampilan 1:50, tag 2.5 mm setinggi 125 mm di model; pada 1:100 menjadi 250 mm.
- Ruang yang punya tag menampilkan tag alih-alih label polosnya.
- Jika ruang atau area-nya hilang, tag ikut hilang. Urungkan mengembalikan keduanya.

## Dalam IFC

Tag adalah IfcAnnotation (ObjectType ROOMTAG atau AREATAG) dengan teksnya sebagai literal teks, dan GlobalId dari yang dinamainya. Teks dalam file memberikan luas dalam meter persegi.

## Belum dibuat

- Bentuk tag buatan sendiri, dan garis pemimpin.
- Tag pada pintu, jendela, dan dinding adalah alat terpisah (lihat gaya tag pada lembar).

Lihat juga [Ruang dan pemisah ruang](topic:rooms-and-separators).
