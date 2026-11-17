---
title: Kuantitas ke TakeoffCraft
summary: Satu klik mengirim kuantitas model ke TakeoffCraft — dinding menurut tipe, atap menurut luas miring, nok, hip dan lembah, pondasi, pintu dan jendela, kabinet, perangkat listrik, luas lantai dan daftar potong kayu — ditandai pada denah setiap level, dengan rakitan paket keahlian pada item-itemnya.
keywords: takeoff, perhitungan volume kuantitas, estimasi, estimasi biaya, daftar material, bill of materials, takeoffcraft, kuantitas, luas dinding, luas atap, squares, pondasi telapak, beton, yard kubik, daftar potong, kayu gergajian, paket keahlian, rakitan
from: c5a745af
---

## Yang akan Anda lakukan

Ubah model menjadi daftar material dan estimasi di TakeoffCraft. BimCraft menggambar denah setiap level pada skala standar, menandai setiap kuantitas di atasnya, dan menaruh takeoff di dalam PDF. TakeoffCraft mengukur tanda-tanda itu sendiri, sehingga setiap angka dapat diperiksa di lembar.

## Kirim

1. Klik {{ui:Takeoff}} di bilah model (di samping {{ui:Lembar}}).
2. TakeoffCraft terbuka di tab baru dengan denahnya. Saat diminta, pilih untuk membuka takeoff yang ditemukan di PDF.
3. Tambahkan harga Anda di tabel kuantitas TakeoffCraft; rakitan sudah mencantumkan material-materialnya.

:::note
Bila TakeoffCraft tidak tersedia di sini, tombol ini mengunduh PDF sebagai gantinya. Bukalah di TakeoffCraft nanti: aplikasi itu menemukan takeoff di dalamnya.
:::

## Yang diukur

- **Dinding** menurut tipe dan tinggi: garis tengahnya sebagai lintasan, dengan tinggi dinding pada item, sehingga TakeoffCraft menghitung panjang dan luas dinding. Setiap lintasan membawa pintu dan jendela dinding, sehingga TakeoffCraft mengurangkannya dari luas dinding sekali, dengan aturan yang sama seperti jadwal BimCraft: keduanya sepakat pada kotor, pengurangan dan bersih. Data takeoff tipe dinding (satuan, adukan, tarif; lihat [Rakitan dinding](topic:wall-assemblies)) dibawa sebagai satu baris berharga pada item tipe itu. Di bawah metode pengukuran selain metode default (lihat [Pilih metode pengukuran](topic:plan-schedules-and-pdf#choose-a-measurement-method)), takeoff membawa metodenya, setiap lintasan membawa apa yang diambil persimpangan dari muka dinding, dan TakeoffCraft mengukur dengan metode yang sama serta menamainya. Tipe yang satuannya memiliki panjang dan tinggi menyerahkan dua komponen dengan kuantitas: satuan yang harus dipesan dan volume adukan, dihargai bila tarif tipe itu per satuan, per 1000 satuan, atau per m³ adukan. Hitungan yang tepat jatuh pada bilangan bulat dapat menjadi satu satuan lebih tinggi di TakeoffCraft, karena penyerahan data membulatkan posisi di lembar.
- **Atap**: setiap bidang atap sebagai luas dengan kemiringannya (TakeoffCraft memberi luas miring), nok, hip dan lembah (hip dan lembah sepanjang kemiringannya), tritisan dan rake.
- **Pondasi**: telapak dan dinding pondasi sebagai lintasan melalui titik tengahnya, pelat sebagai luas dengan ketebalannya, sehingga beton keluar menurut volume.
- **Pintu dan jendela** dihitung menurut tipe, dengan trim jendela.
- **Kabinet bawah** menurut panjang mukanya.
- **Perangkat listrik** dihitung menurut jenisnya.
- **Luas lantai** setiap level, dari ruangannya.
- **Daftar potong kayu** dari rangka, dihitung pada lembar tersendiri (satu titik per potong).

Bila sebuah paket keahlian memiliki rakitan yang cocok — dinding eksterior dan interior, pelat, telapak, dinding pondasi, sirap, tutup nok dan hip, lembah, tritisan, pintu interior, trim jendela, kabinet bawah, stopkontak, sakelar, lampu, kotak sambungan dan panel — item tersebut hadir dengan material dan rumusnya. Paket-paket ini tidak memiliki harga dan belum ditinjau oleh estimator.

:::tip
Denah dibuat dari model setiap kali Anda mengklik, jadi setelah ada perubahan, klik {{ui:Takeoff}} lagi.
:::
