---
title: Sambungkan paip dan saluran ke peralatan
summary: Mulakan atau tamatkan paip atau saluran pada satu port supaya ia mengambil saiz dan sistem port tersebut serta kekal terpasang padanya, kemudian semak sambungan — port terbuka, ketidakpadanan saiz dan sistem, serta laluan tanpa sumber.
keywords: mep, sambung, sambungan, port, port terbuka, ketidakpadanan saiz, ketidakpadanan sistem, sumber, semak sambungan, tetap, ikut, pindahkan peralatan, ifcrelconnectsports, koordinasi
from: 29144fb0
---

## Apa yang anda akan lakukan

Sambungkan laluan ke peralatan supaya model menjadi satu sistem yang bersambung: outlet pam ke paip yang keluar daripadanya, leher penyebar ke saluran cabangnya. Kemudian biarkan BimCraft menyenaraikan apa yang belum bersambung.

## Lukis dari port

1. Pilih {{ui:Paip}} atau {{ui:Saluran}}.
2. Gerakkan penunjuk ke atas port sesuatu peralatan (bulatan kecil; port terbuka dilukis dalam warna amaran). Penunjuk melekat padanya dan memaparkan **pada port**.
3. Klik: laluan bermula pada ketinggian port dan **mengambil saiz dan sistemnya** (paip juga mengambil bahan biasa sistem itu). Baris status menyatakan apa yang diambilnya.
4. Lukis seperti biasa. Menamatkan laluan pada port lain juga menetapkan hujung itu.

Hujung laluan pada port **ditetapkan** padanya: alih atau pusingkan peralatan (dalam Sifat) dan hujung laluan turut bergerak; sunting laluan dan hujung itu kekal pada port. Sudut-sudut lain laluan kekal di tempatnya, jadi selepas alihan besar, segmen pertama mungkin tercabut dari port pada sudut: alih sudut seterusnya juga.

## Semak sambungan

Buka {{ui:Binaan}} dan klik {{ui:Semak sambungan}}. Senarai di bawah bar menunjukkan:

| Baris | Maksudnya |
|---|---|
| Port tidak bersambung | Sesuatu peralatan mempunyai sambungan yang tiada apa dilukis kepadanya |
| Tiada apa di hujungnya | Laluan berakhir di udara |
| Port bersambung yang berlainan saiz | Laluan bersaiz satu bertemu port atau laluan bersaiz lain tanpa pengecil (saiz nominal paip, bentuk dan sisi saluran) |
| Port bersambung yang berlainan sistem | Contohnya saluran pulangan pada penyebar bekalan |
| Paip bersambung ke saluran | Dua sambungan berlainan jenis bertemu |
| Tiada peralatan dalam rangkaiannya membekalkannya | Tiada apa yang laluan bersambung dengannya, sejauh mana pun, mempunyai outlet. Longkang, saliran hujan dan salur udara tidak ditanya perkara ini: air mereka datang daripada perkakas |
| Ditetapkan pada port peralatan yang tidak lagi berada dalam model | Peralatan telah dipadam; lukis semula hujung itu atau padam laluan |

Ralat dipaparkan dahulu. Klik satu baris untuk memilih apa yang dinamakannya. {{ui:Tutup}} menyembunyikan senarai. Semakan membaca model seperti yang dilukis: ia memeriksa sambungan dan saiz, tidak sekali-kali aliran, tekanan atau pengimbangan.
