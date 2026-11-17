---
title: Gabungkan suntingan dua orang bagi satu model
summary: Benarkan git, Fossil atau Mercurial menggabungkan dua salinan model IFC yang sama yang telah disunting, objek demi objek, supaya dua orang boleh melukis pada satu bangunan dan menyatukan kerja mereka.
keywords: gabung, git, fossil, mercurial, kawalan versi, konflik, tiga hala, cadcraft merge, gitattributes, ifc, globalid, pasukan, dua salinan, cabang
from: 50733df8
---

Dua orang mengambil salinan bangunan yang sama, seorang melukis sayap timur dan seorang lagi sayap barat, dan kemudian salinan itu perlu menjadi satu. Jika mereka menyentuh objek yang berbeza, program boleh melakukannya dan bukan seorang manusia.

## Apa yang menjadikannya berfungsi

Setiap dinding, pintu, aras, bilik dan set sifat dalam fail IFC mempunyai GlobalId yang tidak pernah berubah. Penggabungan mencari objek melalui id itu, bukan melalui nombor yang diberikan fail (`#123`), kerana nombor berubah apabila program menyimpan. Bahagian yang tergantung pada objek dan yang tidak mempunyai id sendiri (penempatan, bentuk, unit) dibandingkan mengikut kandungannya.

Kedua-dua salinan mesti versi IFC yang sama (2x3, 4 atau 4.3). Penggabungan mengekalkan fail anda seperti sedia ada, dengan susunan dan nombornya, dan menambah apa yang baharu, jadi diff git bagi penggabungan hanya menunjukkan apa yang diubahnya.

## Sediakan

Git memerlukan dua baris sekali bagi setiap repositori:

```
# .gitattributes
*.ifc merge=cadcraft

# sekali sahaja, pada setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan `cadcraft merge <base> <ours> <theirs>`. Fossil dan Mercurial mengambil tiga fail yang sama dalam tetapan alat gabungan masing-masing. Tiada apa dimuat naik; semuanya berjalan di komputer anda.

## Peraturannya

- Atribut yang ditukar pada satu sisi sahaja diambil. Perubahan yang sama pada kedua-dua sisi diambil sekali.
- Atribut yang sama ditukar dengan dua cara (aras yang sama dinamakan semula dengan dua cara) ialah **konflik**: sisi anda kekal dan laporan menyenaraikan kedua-duanya. Buka hasilnya dan betulkan dengan tangan.
- Senarai benda (dinding bagi satu aras, sifat bagi satu set) digabungkan sebagai satu set: apa yang ditambah oleh mana-mana sisi dikekalkan dan apa yang dialih keluar oleh mana-mana sisi dialih keluar. Dua orang yang masing-masing menambah dinding pada aras yang sama tidak berkonflik.
- Objek yang ditambah pada mana-mana sisi dikekalkan, dengan bentuk dan sifatnya. Dialih keluar pada satu sisi dan tidak disentuh pada sisi lain: dialih keluar. Dialih keluar pada satu sisi dan diubah pada sisi lain: dialih keluar, dan dilaporkan.
- Cap masa dan pengarang fail, serta sejarah pemilik setiap objek, kekal milik anda.

Geometri digabungkan sepenuhnya: bentuk dinding datang dari satu sisi, tidak sekali-kali dicampur titik demi titik. IFC yang dizip dan fail IFCX tidak digabungkan. Selepas penggabungan, buka hasilnya dalam BimCraft dan lihat panel Masalah sebelum anda menyimpan.
