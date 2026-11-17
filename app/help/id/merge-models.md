---
title: Gabungkan dua suntingan dari dua orang pada satu model
summary: Biarkan git, Fossil, atau Mercurial menggabungkan dua salinan model IFC yang diedit satu per satu objek, sehingga dua orang dapat menggambar di bangunan yang sama dan menyatukan pekerjaan mereka.
keywords: gabung, merge, git, fossil, mercurial, kendali versi, konflik, tiga arah, cadcraft merge, gitattributes, ifc, globalid, tim, dua salinan, cabang
from: 50733df8
---

Dua orang mengambil salinan bangunan yang sama, satu menggambar sayap timur dan yang lain sayap barat, dan kemudian kedua salinan itu harus menjadi satu. Jika mereka menyentuh objek yang berbeda, sebuah program dapat melakukannya alih-alih manusia.

## Cara kerjanya

Setiap dinding, pintu, level, ruang, dan kumpulan properti dalam file IFC memiliki GlobalId yang tidak pernah berubah. Penggabungan mencari objek dengan id itu, bukan dengan angka yang diberikan file (`#123`), karena angka berubah ketika program menyimpan. Bagian-bagian yang menggantung pada objek dan tidak memiliki id sendiri (penempatan, bentuk, satuan) dibandingkan berdasarkan isinya.

Kedua salinan harus berversi IFC yang sama (2x3, 4, atau 4.3). Penggabungan mempertahankan file Anda apa adanya, urutan dan angkanya, lalu menambahkan apa yang baru, sehingga diff git dari hasil gabungan hanya menampilkan apa yang diubah oleh penggabungan.

## Pengaturan

Git memerlukan dua baris sekali per repositori:

```
# .gitattributes
*.ifc merge=cadcraft

# sekali saja, di setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan `cadcraft merge <base> <ours> <theirs>`. Fossil dan Mercurial menerima tiga file yang sama dalam pengaturan alat penggabungan mereka sendiri. Tidak ada yang diunggah; semuanya berjalan di komputer Anda.

## Aturannya

- Atribut yang berubah hanya di satu sisi diambil. Perubahan yang sama di kedua sisi diambil satu kali.
- Atribut yang sama berubah dengan dua cara (level yang sama diganti namanya dua cara) adalah **konflik**: sisi Anda tetap dan laporan mendaftar keduanya. Buka hasilnya dan perbaiki secara manual.
- Daftar hal (dinding suatu level, properti suatu set) digabung sebagai satu set: apa pun yang ditambahkan salah satu sisi dipertahankan, dan apa pun yang dibuang salah satu sisi dihapus. Dua orang yang masing-masing menambahkan dinding ke level yang sama tidak berkonflik.
- Objek yang ditambahkan di salah satu sisi dipertahankan, dengan bentuk dan propertinya. Dihapus di satu sisi dan tidak tersentuh di sisi lain: dihapus. Dihapus di satu sisi dan diubah di sisi lain: dihapus, dan dilaporkan.
- Stempel waktu dan penulis file, serta riwayat pemilik tiap objek, tetap milik Anda.

Geometri digabung utuh: bentuk dinding berasal dari satu sisi, tidak pernah dicampur titik demi titik. File IFC terkompresi (zip) dan IFCX tidak digabung. Setelah penggabungan, buka hasilnya di BimCraft dan lihat panel Masalah sebelum Anda menyimpan.
