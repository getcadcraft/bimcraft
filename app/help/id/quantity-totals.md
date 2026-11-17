---
title: Jumlahkan kuantitas, daftarkan elemen, dan jadwalkan ruang
summary: Hitung elemen dan jumlahkan panjang, luas, volume, atau properti angka apa pun, dikelompokkan menurut properti apa pun; daftar satu baris per elemen; atau jadwalkan ruang beserta luas dan volumenya. Masing-masing diunduh sebagai CSV.
keywords: kuantitas, quantity, takeoff, total, jumlah, jadwal, bill of quantities, boq, qto, csv, kelompokkan menurut, hitung, panjang, luas, volume, ruang, ruangan, jadwal ruang, jadwal luas, daftar elemen
from: e2e7210c
---

## Yang akan Anda lakukan

Dapatkan total dari sebuah model: panjang dinding per lantai, jumlah pintu per tipe, volume pelat per material, biaya setiap zona.

## Langkah

1. Buka model IFC.
2. Buka {{ui:Total kuantitas}} di panel kiri.
3. Di {{ui:Hitung}}, pilih {{ui:Setiap elemen}} atau hanya yang dipilih.
4. Di bawah {{ui:Kelompokkan menurut}}, pilih properti, seperti {{ui:Kelas}}. Klik {{ui:Tambahkan kelompok}} untuk membagi lebih lanjut, hingga tiga, misalnya menurut {{ui:Lantai}}.
5. Di bawah {{ui:Jumlahkan}}, centang angka yang akan dijumlahkan. Set kuantitas model sudah dicentang sejak awal.
6. Klik {{ui:Unduh CSV}} untuk membuka tabel di spreadsheet.

## Yang harus terlihat

- Satu baris per grup dengan jumlah elemennya dan setiap total, dan satu baris total.
- Elemen tanpa nilai dihitung tetapi tidak menambah apa pun. Jika ini terjadi, CSV menambahkan kolom "left out" di samping total agar Anda dapat melihat jumlahnya.
- Angka menggunakan satuan file itu sendiri, sebagaimana file menyimpannya; sering kali milimeter untuk panjang.

## Satu baris per elemen, atau ruang

Ubah {{ui:Tampilkan}}:

- **Satu baris per elemen**: setiap elemen pada barisnya sendiri, dengan properti di bawah {{ui:Kolom}} dan angka di bawah {{ui:Jumlahkan}}. CSV dimulai dengan GlobalId setiap elemen. Klik nilai pertama di baris untuk memilih elemen tersebut.
- **Ruang**: setiap ruangan dengan nomornya, nama, lantai, luas, dan volume, beserta totalnya. Luas dan volume berasal dari kuantitas ruang sebagaimana dinyatakan file. Jika file tidak memilikinya, keduanya diukur dari bentuk ruang dalam m² dan m³ dan ditampilkan dengan huruf miring; CSV menyatakan mana yang mana.

## Berikutnya

- [Cari elemen berdasarkan kelas, nama, atau properti](topic:find)
- [Warnai elemen berdasarkan properti](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Pilih **Infrastruktur (IFC 4.3)** di daftar tampilan untuk melihat jalan, rel kereta, jembatan, dan pekerjaan laut, dijumlahkan per kelas dan tipe, dengan panjang, luas, dan volume yang dinyatakan sendiri oleh file. Kuantitas yang tidak dinyatakan file dibiarkan kosong, tidak pernah dihitung. **Kirim kuantitas infrastruktur ke TakeoffCraft** menyimpan file `.quantities.json` yang dibuka TakeoffCraft sebagai kuantitas bertipe.
