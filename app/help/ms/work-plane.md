---
title: Satah kerja: tetapkan, tunjukkan, lihat tepat ke arahnya
summary: Satah kerja ialah satah yang digunakan oleh garisan model, teks model dan Viewer Satah Kerja. Tetapkannya pada aras, muka, satah rujukan bernama atau garisan; tunjukkannya dalam pandangan; buka viewer untuk melukis pada satah tegak.
keywords: satah kerja, tetapkan satah kerja, tunjuk satah kerja, satah rujukan, viewer satah kerja, satah bernama, muka, aras, satah tegak, satah menegak, lukis pada dinding, lukisan dongakan, snap, penjajaran, ref plane
from: 8aceee1d
---

## Apa yang akan anda lakukan

Pilih satah yang anda lukis, lihat di mana ia berada, dan lukis pada satah yang berdiri tegak.

## Langkah

1. Hidupkan **Lukis** dan buka menu **Bina** (dalam susun atur reben: tab Seni Bina, Satah Kerja).
2. Pilih **Tetapkan Satah Kerja**. Kemudian lakukan salah satu daripada ini:
   - pilih aras dalam **Tetapkan kepada**;
   - pilih satah rujukan bernama dalam senarai di sebelahnya;
   - klik garisan dalam pelan: dinding, garisan grid, satah rujukan, garisan model atau sistem tirai. Satah kerja menjadi satah tegak yang melalui garisan itu;
   - klik muka rata dalam paparan 3D. Satah kerja terletak di atas muka itu.
3. Pilih **Tunjukkan Satah Kerja** untuk melihatnya: helaian berwarna dengan grid meter dalam paparan 3D, garis besar atau garisan putus-putus dalam pelan, dan garis besar putus-putus dalam panel dongakan dan keratan. Pilih semula untuk menyembunyikannya.
4. Pilih **Viewer Satah Kerja** untuk melihat tepat ke arah satah itu. Garisan hitam ialah model yang dipotong oleh satah itu. Gunakan alatnya untuk melukis garisan model, teks model atau satah rujukan pada satah itu. **Lihat dalam 3D** memutarkan paparan 3D supaya menghadap satah itu.

## Satah rujukan

Satah rujukan ialah satah bernama yang anda lukis sebagai garisan.

1. Pilih **Satah Rujukan**. Taip nama dalam barisnya jika anda mahu (ia dinamakan untuk anda jika tidak) dan ketinggian.
2. Klik di mana ia bermula dan di mana ia berakhir. Dalam pelan, ini menghasilkan satah tegak. Dalam Viewer Satah Kerja, ia menghasilkan satah yang berdiri tegak lurus kepada satah kerja.
3. Ia dipaparkan sebagai garisan hijau putus-putus dengan namanya dalam pelan, garis besar putus-putus dalam paparan 3D dan dalam panel dongakan dan keratan.
4. Pilih ia untuk menamakannya semula, menukar panjang, ketinggian dan tapaknya, atau tekan **Guna sebagai satah kerja**.

Dua satah rujukan tidak boleh mempunyai nama yang sama, kerana nama itulah cara anda memilih satu.

## Perkara yang perlu diketahui

- Model tanpa satah kerja yang ditetapkan berfungsi pada aras terendahnya.
- Satah kerja disimpan dalam fail. Penunjukan atau penyembunyiannya diingati dalam pelayar ini, bukan dalam fail.
- Jika satah kerja mengikut satah rujukan dan anda mengalihkan satah itu, satah kerja turut bergerak bersamanya.
- Pada satah kerja yang tegak, alat Garisan Model dan Teks Model membuka viewer, kerana pelan tidak dapat menunjuk ke arah ketinggian.
- Alat lukisan menangkap hujung satah rujukan yang dilukis dalam pelan dengan cara yang sama seperti mereka menangkap hujung garisan lain dalam viewer.

## Dalam fail IFC

- Satah kerja ialah set sifat (CadCraft_WorkPlane) pada projek.
- Satah rujukan ialah IfcAnnotation dengan jenis objek ReferencePlane dan namanya. Bentuknya ialah garis besar tertutup satah itu, supaya program lain menunjukkan di mana ia berada. Set CadCraft_ReferencePlane menyimpan asal, arah, normal dan lanjutan. IFC tidak mempunyai kelas untuk satah rujukan; anotasi tidak dikira sebagai elemen bangunan dan tidak membatasi bilik.
