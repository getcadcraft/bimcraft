---
title: "Sistem curtain wall: dinding kaca pada grid, dengan mullion"
summary: Gambar sistem curtain wall seperti dinding, atau letakkan pada sebuah muka, lalu atur garis grid dan mullion-nya. Disimpan sebagai IfcCurtainWall dengan panel kaca dan mullion-nya.
keywords: sistem curtain wall, curtain wall, grid curtain, mullion, kaca, storefront, dinding kaca, panel, kaca panel, berdasarkan muka, muka, massa, garis grid, jarak, profil, transom, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Yang akan Anda lakukan

Membuat dinding kaca yang terdiri dari panel di antara mullion, mengubah posisi garis grid-nya, dan memilih garis mana yang memakai mullion.

## Langkah

1. Aktifkan **Gambar** dan buka menu **Bangun** (dalam tata letak pita: tab Arsitektur).
2. Pilih **Sistem curtain wall**. Di barisnya, atur bagian atasnya (level di atasnya, atau sebuah tinggi), sebuah garis setiap sekian jarak di sepanjangnya, sebuah garis setiap sekian ke atasnya (kosongkan jika tidak ada), apakah ia mendapat mullion, dan profil mullion-nya.
3. Klik tempat ia mulai dan tempat ia berakhir, seperti saat menggambar dinding. Shift membuatnya tetap persegi.
4. Untuk mengubah grid, pilih **Grid Curtain** dan klik sistemnya:
   - **Tambah garis**: garis tegak dibuat di tempat Anda klik. Untuk garis level, ketik tingginya di **At** terlebih dahulu.
   - **Pindahkan garis**: klik garisnya, lalu klik tempat garis itu akan dipindahkan.
   - **Hapus garis**: klik garisnya.
   - **Atur menurut jarak**: ketik jaraknya di **Every**, lalu klik sistemnya.
5. Untuk mengubah mullion, pilih **Mullion**, pilih apa yang akan dikerjakannya (garis tegak yang Anda klik, garis level pada suatu tinggi, tepinya, atau setiap garis), pilih **Pasang mullion** atau **Hapus mullion** dan sebuah profil, lalu klik sistemnya.
6. Pilih sebuah sistem untuk melihat semuanya di **Properti**: setiap garis grid dengan posisinya, tanda centang untuk mullion-nya dan tombol untuk menghapusnya; jaraknya; tepinya; profilnya; ketebalan kacanya.

## Berdasarkan muka

**Berdasarkan muka** membuat sistem curtain wall pada muka datar yang Anda klik di tampilan 3D. Barisnya memiliki pengaturan grid dan mullion yang sama.

- Ia bekerja pada muka datar mana pun dari elemen mana pun yang ditampilkan tampilan 3D: massa, dinding, lantai, bidang atap, kolom, atau item yang ditempatkan. Muka itu bisa tegak, miring, atau datar.
- Sistem mengambil garis luar muka. Gable atau bentuk lain yang tidak biasa akan memotong panel dan mullion mengikuti bentuknya.
- Ia bisa membuat **dinding** sebagai gantinya, di sepanjang kaki muka tegak dan setinggi muka itu. Dinding di sini selalu berdiri tegak, sehingga muka miring atau datar tidak bisa dijadikan dinding.
- Ia tidak membuat atap. Atap di BimCraft dihitung dari garis luar sebuah level dan kemiringan, bukan dari satu muka saja.
- Muka melengkung adalah banyak muka datar kecil: satu klik mengambil satu di antaranya.
- Muka yang memiliki bukaan: sistem menutupi garis luar muka.

## Cara pengukurannya

- **Luas kotor** adalah garis luar sistem.
- **Luas kaca** adalah panel seperti yang dibuat: setiap panel kehilangan setengah lebar mullion di satu sisi dengan mullion grid, dan lebar penuh di mullion tepi.
- Mullion tegak membentang dari tepi ke tepi. Mullion level berhenti di setiap mullion tegak dan di tepi. Mullion tepi berada di dalam garis luar; jika dua bertemu, yang lebih tegak akan membentang terus. Sambungan dipotong persegi, bukan miring.
- **Jadwal** memiliki daftar **Sistem curtain wall** dengan angka-angka ini setelah model memilikinya.

## Dalam file IFC

Sebuah IfcCurtainWall pada level-nya, terdiri dari satu IfcPlate (panel curtain) per panel kaca dan satu IfcMember (mullion) per potongan mullion, masing-masing dengan bentuk, material, dan kuantitas dasarnya sendiri.

## Yang perlu diketahui

- Ukuran apa pun dibuat sesuai permintaan. Hanya garis luar tanpa luas yang ditolak, karena tidak ada yang bisa dibuat.
- Sistem yang digambar seperti dinding mempertahankan tinggi saat digambar. Jika Anda memindahkan level nanti, atur ulang tingginya di Properti.
- Alat Pindahkan belum bisa memindahkan sistem curtain wall. Hapus dan gambar ulang, atau ubah grid-nya di tempat.
- Urungkan membatalkan setiap langkah: seluruh sistem, satu perubahan grid, atau satu perubahan mullion.
