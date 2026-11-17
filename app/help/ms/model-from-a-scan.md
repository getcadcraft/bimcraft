---
title: Model daripada imbasan
summary: Panduan ringkas daripada imbasan laser kepada dinding: buka awan titik di sebelah bangunan baharu, jajarkannya dengan aras, dan jejak dindingnya pada pelan.
keywords: imbasan, imbasan laser, awan titik, as-built, bangunan sedia ada, tinjauan, jejak, imbasan ke BIM, model daripada imbasan, hirisan, jajar, sudut tegak, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Apa yang anda akan lakukan

Lukis sebuah bangunan sedia ada daripada imbasan lasernya: dinding di tempat imbasan menunjukkannya, pada aras yang betul, dan bersudut tegak antara satu sama lain.

## Langkah

1. **Bangunan untuk dilukis.** {{ui:File}} › {{ui:New building}}, dengan seberapa banyak aras yang dimiliki bangunan itu (anda boleh menambah aras kemudian, lihat [Tapak, bangunan di atasnya dan arasnya](topic:site-building-and-levels)). {{ui:Draw}} dihidupkan.
2. **Imbasan.** {{ui:Show}} › {{ui:Point cloud}} dan pilih fail (LAS, LAZ, E57, PLY, PCD, PTX atau XYZ: lihat [Tunjuk awan titik di sebelah model](topic:point-clouds)). Awan itu ditunjukkan dalam pandangan 3D, dan pelan menunjukkan **hirisannya**: titik imbasan 1200 mm (4 kaki) di atas aras, sebagai titik. Itulah ketinggian tempat dinding, pintu dan tingkap paling jelas kelihatan.
3. **Jajarkan dengan aras.** Buka menu {{ui:Scan}} pada bar model dan klik {{ui:Align its floor to this level}}: awan itu bergerak naik atau turun sehingga lantai yang diimbas berada di atas aras yang ditunjukkan. Semak bahawa hirisan kini memotong dinding.
4. **Bersudut tegak dengan bangunan.** {{ui:Scan}} › {{ui:Turn it square to the building}} memutar awan supaya dinding dalam hirisannya berjalan sepanjang paksi pelan, dan dinding yang anda lukis dengan {{key:Shift}} ditahan akan sejajar dengan imbasan. Ia berpusing di sekitar tengah dinding yang dijumpainya, jadi pokok atau dinding jiran yang tertangkap dalam hirisan tidak memesongkan imbasan. Jajarkan lantai dahulu: hirisan kemudian memotong dinding.
5. **Jejak dinding.** Pilih {{ui:Wall}} dan klik sepanjang titik: alat itu melekap pada titik imbasan (tanda snap ialah berlian kecil) serta pada dinding yang telah anda lukis. Dinding dilukis pada garis tengahnya, jadi klik di tengah dua baris titik yang ditinggalkan sesebuah dinding; taip ketebalannya dengan memilih jenis dinding dahulu. Kemudian tambah pintu dan tingkap di tempat hirisan menunjukkan jurang.
6. **Aras seterusnya.** Pilih aras di atas dalam senarai aras pelan: hirisan mengikut ketinggian potong aras. Jajarkan lantai dengan aras itu sekali lagi hanya jika lantai imbasan tidak berada di tempat aras anda.

## Apa yang sepatutnya anda lihat

- Hirisan berubah apabila anda menukar aras, dan hirisan yang lebih tebal ({{ui:Scan}} › {{ui:Slice thickness}}) menunjukkan lebih banyak titik di tempat imbasan nipis.
- {{ui:Scan}} › {{ui:Undo the alignment}} mengembalikan awan ke tempat ia diletakkan semasa dibuka. Penjajaran hanya mengalihkan awan dalam pandangan: ia tidak disimpan dalam fail IFC, dan dinding yang telah anda lukis kekal di tempatnya. Penjajaran turut mengikut awan apabila anda menukar {{ui:Place}} atau {{ui:Units}}, atau membuka model lain.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} menyembunyikan atau menunjukkan titik.

:::tip
Imbasan besar: pelan melukis sehingga 60,000 titik hirisan dan pandangan 3D beberapa juta titik daripada keseluruhan awan, kedua-duanya dipilih sama rata sepanjang imbasan, supaya fail besar kekal pantas. Untuk menjejak dalam aplikasi lukisan, gunakan {{ui:Trace in CadCraft}} pada bar awan.
:::
