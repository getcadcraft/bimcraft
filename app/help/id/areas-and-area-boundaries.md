---
title: Area dan batas area
summary: Ukur luas bruto bangunan atau luas yang dapat disewakan di dalam garis batas yang Anda gambar atau ambil dari dinding, dan daftarkan area-area itu dalam jadwal.
keywords: area, areas, batas area, skema area, luas bruto bangunan, luas lantai bruto, GFA, dapat disewakan, denah area, jadwal area, pilih dinding, tidak tertutup
from: c79f96d2
---

## Yang akan Anda lakukan

Gambar batas dari sebuah skema area, letakkan area di dalamnya, dan baca totalnya.

## Di mana alatnya

- Tata letak pita: {{ui:Arsitektur}} › **Ruang & Area** › {{ui:Area}} dan {{ui:Batas area}}.
- Tata letak klasik: bilah Gambar › menu {{ui:Ruang}}.

## Langkah

1. Pilih {{ui:Batas area}}. Di baris, pilih {{ui:Skema}}: Luas bruto bangunan atau Dapat disewakan. Setiap skema memiliki batasnya sendiri.
2. Pilih cara membuat garisnya di {{ui:Buat dengan}}:
   - **Gambar**: klik titik demi titik.
   - **Pilih dinding: garis tengah**: klik dinding, dan garis tengahnya menjadi batas.
   - **Pilih dinding: sisi yang diklik**: klik dinding di sisi yang Anda inginkan; sisi itu menjadi batas. Untuk luas bruto bangunan, klik bagian luar dinding luar.
3. Pilih {{ui:Area}}. Pilih skema yang sama, ketik nama, nomor, atau tipe jika Anda mau, lalu klik di dalam batasnya.
4. Area langsung diukur. Pilih untuk mengubah nama, nomor, atau tipenya di Properti.

## Yang mengikuti yang mana

- Batas yang dibuat dengan memilih dinding mengikuti dinding itu: pindahkan dinding dan area diukur ulang dalam langkah yang sama.
- Batas yang Anda gambar tetap di tempat Anda menggambarnya.
- Sisi dinding yang bertemu di sudut juga bertemu di sana, sehingga empat dinding yang dipilih menutup area tanpa celah.
- Batas area ditampilkan di denah saat alat ruang atau area sedang Anda pakai, sehingga denah tidak penuh sesak di waktu lain.

## Jika batas tidak menutup

Area tetap ditempatkan. Area menyatakan **Tidak tertutup** dan tidak mengukur apa pun sampai batasnya menutupinya. Ini hanya saran: tidak ada yang ditolak.

## Jadwal

Panel kiri › {{ui:Jadwal}} › **Area**: skema, nomor, nama, tipe, level, luas dan keliling, dengan total. Klik sebuah baris untuk memilih area. {{ui:Unduh CSV}} memberikan tabel yang sama.

## Dalam IFC

Sebuah area adalah IfcSpace tanpa badan: PredefinedType GFA untuk skema luas bruto bangunan, USERDEFINED dengan ObjectType Rentable untuk dapat disewakan. Ia membawa GrossFloorArea dan GrossPerimeter, dan tidak ada luas bersih, sehingga tidak keliru dengan ruang. Batas adalah IfcVirtualElement.

## Belum dibuat

- Skema milik Anda sendiri (hanya Luas bruto bangunan dan Dapat disewakan).
- Isian warna menurut tipe area.
- Aturan yang menempatkan batas untuk Anda, seperti "sampai garis kaca".

Lihat juga [Ruang dan pemisah ruang](topic:rooms-and-separators), [Tag ruang dan area](topic:room-and-area-tags).
