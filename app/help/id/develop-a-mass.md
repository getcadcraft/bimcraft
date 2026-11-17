---
title: Kembangkan massa bangunan dari studi tapak
summary: Ambil massa bangunan yang dikaji di tampilan tapak CivilCraft dan kembangkan menjadi level, dinding, dan lantai, dengan lokasi tapak di peta tetap tersimpan.
keywords: massa, massa bangunan, massing, studi tapak, kembangkan, CivilCraft, serahkan, level, dinding, lantai, jejak, georeferensi, IFC
from: 557b94d1
---

Tampilan tapak CivilCraft dapat menggambar massa bangunan di atas persil dan mengujinya terhadap tanah, batas yang Anda ketik, dan matahari. **Kembangkan di BimCraft** membuka BimCraft di tab baru dengan massa-massa tersebut. **Massa sebagai IFC** menyimpannya sebagai file yang dibuka di sini dengan cara biasa. Dengan cara apa pun, setiap massa tiba sebagai sebuah site, yaitu bangunan dengan satu level per lantai, dan satu blok (massa itu sendiri) yang membawa angka-angkanya.

## Kembangkan massa

1. Pilih sebuah massa di tampilan 3D. Properti menampilkan penggunaannya, jumlah dan tinggi lantainya, jejaknya, luas lantai kotornya, bagaimana ia duduk di lereng, dan persilnya.
2. Klik **Kembangkan massa ini**.

Dalam satu langkah urungkan, setiap level bangunan itu mendapat dinding di sekeliling jejak. Jejak adalah muka luar dinding: setiap dinding naik sampai level di atasnya, dan yang paling atas setinggi satu lantai. Setiap level juga mendapat sebuah lantai di bawah seluruh bangunan. Blok digantikan, dan bangunan menyimpan angka-angka studi di set properti `CadCraft_SiteMass`, ditandai sebagai telah dikembangkan. Tidak ada atap: atap bergantung pada desain.

## Lokasi tapak

Sebuah file dari CivilCraft ditulis dalam satuan panjang proyek itu sendiri. Jika proyek CivilCraft memiliki sistem koordinat, file itu membawanya sebagai konversi peta proyek. Mengembangkan massa membiarkannya tetap, sehingga bangunan tetap berada di tempat yang ditunjukkan peta.
