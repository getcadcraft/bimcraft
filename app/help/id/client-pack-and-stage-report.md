---
title: Paket klien, laporan tahap, dan membandingkan opsi
summary: Buat paket klien atau laporan tahap dari model, dengan opsi massa dibandingkan berdasarkan luas dan biaya, luas lantai, gambar beserta revisinya, dan riwayat penerbitan. Setiap angka menyimpan elemen di baliknya.
keywords: paket klien, presentasi, laporan tahap, laporan, perbandingan opsi, opsi, bandingkan opsi, luas dan biaya, biaya per opsi, tanpa tarif, massa, luas lantai, daftar gambar, riwayat penerbitan, angka, angka tertaut
from: f6679bf5
---

## Yang akan Anda lakukan

Buat paket klien atau laporan tahap dari model sebagaimana adanya sekarang, dan bandingkan opsi massa yang disimpan secara berdampingan berdasarkan luas dan biaya.

## Langkah-langkah

1. Di panel kiri, buka **Paket klien dan laporan tahap**.
2. Pilih **Buka di Dokumen** di samping Paket klien atau Laporan tahap. Dokumen muncul di Dokumen dari model, tempat Anda dapat mengubah teksnya.
3. Di pratinjau, klik sebuah angka untuk memilih elemen di baliknya.
4. Pilih **Buat paket**. Satu file zip disimpan: dokumennya sebagai PDF, gambar tampilan 3D, dan `figures.csv`, yang mencantumkan setiap angka beserta GlobalId elemen-elemennya.

## Field

Anda dapat menggunakan ini di dokumen mana pun.

| Field | Yang dicetak |
|---|---|
| `{{stage}}` | Tahap proyek dari rincian gambar. |
| `{{options}}` | Opsi massa yang disimpan, berdampingan: jumlah lantai, tinggi, jejak dasar, luas lantai bruto, selubung, dan biaya. |
| `{{areas}}` | Luas lantai per level, dari ruangan. |
| `{{sheets}}` | Lembar dengan revisi yang dimilikinya dan kapan terakhir diterbitkan. |
| `{{issues}}` | Riwayat penerbitan dan catatan perubahan gambar. |
| `{{changes}}` | Apa yang berubah sejak penerbitan terakhir, lembar demi lembar. |

## Cara opsi dihitung biayanya

Biaya hanya berasal dari tabel harga proyek Anda (Energy/Cost, biaya 5D). Tidak ada yang diperkirakan untuk Anda.

- Baris harga hanya memberi harga pada opsi jika kelasnya menyebut `IfcBuildingElementProxy`.
- Luas lantai diberi harga oleh baris yang katanya menyebut penggunaan opsi, seperti office. Tanpa baris itu, baris dengan kata gross floor area atau building mass yang dipakai. Baris per m² menggunakan luas lantai bruto. Baris per m³ menggunakan volume.
- Selubung (keliling dikali tinggi) diberi harga oleh baris dengan kata envelope atau facade.
- Opsi tanpa baris yang cocok menampilkan **Tanpa tarif**. Total hanya ditampilkan jika setiap bagian yang diminta memiliki tarif.

## Perlu diketahui

- Simpan opsi dengan **Simpan sebagai opsi** di daftar massa dari program ruangan. Lihat Opsi massa.
- PDF tidak dapat memilih elemen. Di luar BimCraft, `figures.csv` membawa tautan dari setiap angka ke elemen-elemennya.

## Belum dibuat

- Lembar dan tampilan gambar tidak ditempatkan di dalam dokumen. Paket hanya berisi gambar tampilan 3D.
