---
title: Cari elemen mengikut kelas, nama atau sifat
summary: Cari setiap elemen yang sepadan dengan satu atau lebih peraturan — kelasnya, nama, jenis, tingkat, bahan atau sebarang nilai sifat — pilih semuanya, dan simpan peraturan itu sebagai set carian yang dinamakan.
keywords: cari, carian, tapis, pertanyaan, peraturan, set carian, set pilihan, carian disimpan, sifat, nilai, kelas, bahan, pilih semua
from: 3d293bc2
---

## Apa yang anda akan lakukan

Pilih setiap elemen daripada satu jenis atau dengan satu nilai dalam satu langkah: setiap pintu, setiap dinding pada Tingkat 2, setiap elemen yang penarafan apinya EI60, setiap dinding yang kosnya melebihi jumlah tertentu.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Cari}} dalam panel kiri.
3. Dalam peraturan pertama, pilih sifat (sifat elemen itu sendiri dahulu, seperti {{ui:Kelas}} dan {{ui:Tingkat}}, kemudian set sifat model), cara membandingkan, dan nilai. Kotak nilai mencadangkan nilai yang ada dalam model.
4. Untuk mempersempit carian, klik {{ui:Tambah peraturan}}. Pilih {{ui:Setiap peraturan}} untuk memerlukan semua peraturan, atau {{ui:Mana-mana peraturan}} untuk salah satu daripadanya.
5. Klik {{ui:Cari}}, atau tekan {{key:Enter}} dalam kotak nilai. Yang sepadan akan dipilih.
6. Untuk menyimpan peraturan, klik {{ui:Simpan sebagai set}}, taip nama dan klik sekali lagi. Kemudian klik nama set untuk mencari dengannya.

## Apa yang anda patut lihat

- Yang sepadan dipilih dalam paparan 3D dan pokok model, dan {{ui:Sifat}} menyatakan berapa banyak mengikut kelas. Tekan {{key:I}} untuk menunjukkan yang dipilih sahaja, {{key:H}} untuk menyembunyikannya.
- Perkataan dipadankan tanpa mengira huruf besar atau kecil. Nombor dibandingkan sebagai nombor: "lebih daripada 1000" bermaksud nilainya, bukan teks.
- {{ui:mempunyai nilai}} dan {{ui:tidak mempunyai nilai}} tidak memerlukan nilai; ia mencari yang telah diisi, atau yang tiada.
- Set yang disimpan kekal dalam pelayar ini untuk setiap model yang anda buka.

## Kesilapan biasa

- **Tiada yang ditemui.** Peraturan memerlukan nilai yang boleh dipadankan: lihat cadangan dalam kotak nilai.
- **Sifat tiada dalam senarai.** Tiada elemen dengan bentuk dalam model ini yang mempunyainya.

## Seterusnya

- [Warnakan elemen mengikut sifat](topic:color-by-property)
- [Sembunyikan, asingkan dan lut sinar elemen](topic:hide-and-isolate)
