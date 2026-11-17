---
title: Luas dan sempadan luas
summary: Ukur luas bangunan kasar atau luas boleh disewa di dalam garis sempadan yang anda lukis atau ambil daripada dinding, dan senaraikan luas dalam jadual.
keywords: luas, luas, sempadan luas, skim luas, luas bangunan kasar, luas lantai kasar, GFA, boleh disewa, pelan luas, jadual luas, pilih dinding, tidak tertutup
from: c79f96d2
---

## Apa yang anda akan lakukan

Lukis sempadan skim luas, letakkan luas di dalamnya, dan baca jumlahnya.

## Di mana alatnya

- Susun atur reben: {{ui:Seni bina}} › **Bilik & Luas** › {{ui:Luas}} dan {{ui:Sempadan Luas}}.
- Susun atur klasik: bar Lukis › menu {{ui:Bilik}}.

## Langkah

1. Pilih {{ui:Sempadan Luas}}. Dalam baris, pilih {{ui:Skim}}: Bangunan kasar atau Boleh disewa. Setiap skim mempunyai sempadannya sendiri.
2. Pilih cara membuat garisan dalam {{ui:Buat dengan}}:
   - **Lukis**: klik titik demi titik.
   - **Pilih dinding: garis tengah**: klik dinding, dan garis tengahnya ialah sempadan.
   - **Pilih dinding: muka yang diklik**: klik dinding pada sisi yang anda mahu; muka itu ialah sempadan. Untuk luas bangunan kasar, klik bahagian luar dinding luar.
3. Pilih {{ui:Luas}}. Pilih skim yang sama, taip nama, nombor atau jenis jika anda mahu, dan klik di dalam sempadan.
4. Luas diukur serta-merta. Pilih untuk menukar namanya, nombornya atau jenisnya dalam Sifat.

## Apa yang mengikut apa

- Sempadan yang dibuat dengan memilih dinding mengikut dinding itu: alihkan dinding dan luas diukur semula dalam langkah yang sama.
- Sempadan yang anda lukis kekal di tempat anda melukisnya.
- Muka dinding yang bertemu di sudut turut bertemu di situ, jadi empat dinding yang dipilih menutup luas tanpa jurang.
- Sempadan luas ditunjukkan pada pelan semasa alat bilik atau luas berada di tangan anda, supaya ia tidak mengotorkan pelan pada masa lain.

## Jika sempadan tidak tertutup

Luas tetap diletakkan. Ia menyatakan **Tidak tertutup** dan tidak mengukur apa-apa sehingga sempadan menutupnya. Ini ialah nasihat: tiada apa yang ditolak.

## Jadual

Panel kiri › {{ui:Jadual}} › **Luas**: skim, nombor, nama, jenis, aras, luas dan perimeter, dengan jumlah. Satu klik pada baris memilih luas. {{ui:Muat turun CSV}} memberikan jadual yang sama.

## Dalam IFC

Luas ialah IfcSpace tanpa badan: PredefinedType GFA untuk skim bangunan kasar, USERDEFINED dengan ObjectType Rentable untuk boleh disewa. Ia membawa GrossFloorArea dan GrossPerimeter, dan tiada luas bersih, jadi ia tidak tersalah anggap sebagai bilik. Sempadan ialah IfcVirtualElement.

## Belum dibina

- Skim milik anda sendiri (hanya Bangunan kasar dan Boleh disewa).
- Isian warna mengikut jenis luas.
- Peraturan yang meletakkan sempadan untuk anda, seperti "sehingga garis kaca".

Lihat juga [Bilik dan pemisah bilik](topic:rooms-and-separators), [Tag bilik dan luas](topic:room-and-area-tags).
