---
title: Pakej pelanggan, laporan peringkat dan membandingkan pilihan
summary: Hasilkan pakej pelanggan atau laporan peringkat daripada model, dengan pilihan jisim dibandingkan mengikut luas dan kos, luas lantai, lukisan beserta semakannya dan sejarah isu. Setiap angka mengekalkan elemen di belakangnya.
keywords: pakej pelanggan, persembahan, laporan peringkat, laporan, perbandingan pilihan, pilihan, bandingkan pilihan, luas dan kos, kos setiap pilihan, tiada kadar, jisim, luas lantai, senarai lukisan, sejarah isu, angka, angka berpaut
from: f6679bf5
---

## Apa yang akan anda lakukan

Hasilkan pakej pelanggan atau laporan peringkat daripada model seperti sedia ada, dan bandingkan pilihan jisim yang disimpan sebelah-menyebelah mengikut luas dan kos.

## Langkah

1. Dalam panel kiri, buka **Pakej pelanggan dan laporan peringkat**.
2. Pilih **Buka dalam Dokumen** di sebelah Pakej pelanggan atau Laporan peringkat. Dokumen itu muncul dalam Dokumen daripada model, di mana anda boleh menukar teksnya.
3. Dalam pratonton, klik angka untuk memilih elemen di belakangnya.
4. Pilih **Bina pakej**. Satu fail zip disimpan: dokumen sebagai PDF, gambar paparan 3D, dan `figures.csv`, yang menyenaraikan setiap angka bersama GlobalId elemen-elemennya.

## Medan

Anda boleh gunakan medan ini dalam mana-mana dokumen.

| Medan | Apa yang dicetak |
|---|---|
| `{{stage}}` | Peringkat projek daripada butiran lukisan. |
| `{{options}}` | Pilihan jisim yang disimpan, sebelah-menyebelah: tingkat, ketinggian, jejak, luas lantai kasar, sampul dan kos. |
| `{{areas}}` | Luas lantai mengikut aras, daripada bilik. |
| `{{sheets}}` | Helaian dengan semakan yang setiap satu berada dan bila kali terakhir dikeluarkan. |
| `{{issues}}` | Sejarah isu dan log perubahan lukisan. |
| `{{changes}}` | Apa yang berubah sejak isu terakhir, helaian demi helaian. |

## Cara pilihan dikos

Kos hanya datang daripada jadual harga projek anda (Energy/Cost, 5D cost). Tiada apa yang dianggarkan untuk anda.

- Baris harga hanya menilai satu pilihan apabila kelasnya menyebut `IfcBuildingElementProxy`.
- Luas lantai dinilai oleh baris yang perkataannya menyebut kegunaan pilihan itu, seperti pejabat. Tanpa baris sedemikian, baris dengan perkataan gross floor area atau building mass digunakan. Baris mengikut m² menggunakan luas lantai kasar. Baris mengikut m³ menggunakan isipadu.
- Sampul (perimeter darab ketinggian) dinilai oleh baris dengan perkataan envelope atau facade.
- Pilihan tanpa baris yang sepadan menunjukkan **Tiada kadar**. Jumlah hanya ditunjukkan apabila setiap bahagian yang diminta mempunyai kadar.

## Perkara yang perlu diketahui

- Simpan pilihan dengan **Simpan sebagai pilihan** dalam senarai jisim program ruang. Lihat Pilihan jisim.
- PDF tidak boleh memilih elemen. Di luar BimCraft, `figures.csv` membawa pautan dari setiap angka ke elemennya.

## Belum dibina lagi

- Helaian dan paparan terlukis tidak diletakkan di dalam dokumen. Pakej hanya memuatkan gambar paparan 3D sahaja.
