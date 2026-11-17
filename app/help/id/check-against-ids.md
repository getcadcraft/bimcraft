---
title: Periksa model terhadap IDS klien
summary: Muat file .ids yang Anda terima dan lihat setiap elemen yang tidak memenuhinya di Masalah, sebelum Anda menyerahkan IFC.
keywords: ids, information delivery specification, buildingsmart, persyaratan, serah terima, periksa, validasi, qa, eir, bep, properti, klasifikasi, material, pengadaan
from: 7b960222
---

## Yang akan Anda lakukan

IDS (Information Delivery Specification, standar buildingSMART) adalah daftar isi yang harus dimiliki sebuah IFC: kelas mana, properti dengan nilai apa, klasifikasi, material, dan di mana benda-benda harus berada. Klien dan pengadaan publik mengirimkannya bersama pekerjaan. BimCraft memeriksa model IFC yang terbuka terhadapnya dan mencantumkan setiap elemen yang tidak memenuhinya.

## Langkah-langkah

1. Buka model IFC.
2. Buka {{ui:Periksa terhadap IDS}} di panel kiri, di bawah {{ui:Pemeriksaan model}}, atau pilih {{ui:Periksa terhadap IDS…}} dari menu sesuai gaya menu Anda.
3. Klik {{ui:Muat file .ids…}} lalu pilih file-nya. Tidak ada yang diunggah.
4. Baca hasilnya: setiap spesifikasi dengan {{ui:Lulus}} atau {{ui:Gagal}} dan berapa banyak elemen yang berlaku untuknya.
5. Buka Masalah ({{key:Ctrl+Shift+M}}) lalu klik sebuah kegagalan untuk memilih elemen dan memperbesar tampilannya.

## Yang akan Anda lihat

- Satu peringatan untuk setiap elemen dan persyaratan yang tidak dipenuhinya, dengan nama spesifikasi, apa yang diminta IDS, dan apa yang dimiliki elemen tersebut.
- Spesifikasi yang wajib tetapi tidak cocok dengan apa pun di dalam model menjadi satu peringatan tersendiri.
- Laporan pemeriksaan (di Masalah) dimulai dengan IDS: judulnya, versi, penulis, serta jumlah yang berlaku, lulus, dan gagal untuk setiap spesifikasi.

## Perlu diketahui

- IFC hanya menyimpan referensi ke IDS (namanya, judulnya, versinya, dan hash), bukan IDS itu sendiri: IDS klien mungkin rahasia, dan IFC dikirim kepada orang lain. IDS tetap berada di peramban ini di samping model, sehingga saat Anda membuka kembali IFC yang disimpan di sini, IFC diperiksa lagi. Memuat atau melupakan IDS adalah satu langkah yang dapat Anda urungkan.
- Jika dibuka di komputer atau peramban lain, Masalah menampilkan catatan bahwa IDS tidak ditemukan: muat ulang untuk memeriksa lagi.
- Untuk mengirim IDS bersama IFC, nyalakan {{ui:Simpan IDS di dalam IFC}} di Pengaturan, pada tab BimCraft, sebelum Anda memuatnya.
- Setiap edit, urungkan, dan ulangi diperiksa lagi sesaat kemudian.
- Nilai dibandingkan dengan cara IDS: teks persis (huruf besar dan kecil dihitung), angka dalam satuan SI dengan toleransi kecil (panjang dalam meter, jadi model dalam milimeter dikonversi lebih dulu).
- Spesifikasi yang ditulis untuk versi IFC lain (misalnya IFC2X3 saat modelnya IFC4) tetap diperiksa; hasilnya menyatakan hal itu.
- Jika file IDS memiliki kesalahan yang akan ditandai oleh audit IDS, dialog mencantumkannya; spesifikasi tempat kesalahan itu berada akan gagal.
- Anda dapat menerima sebuah kegagalan dengan alasan, seperti masalah lainnya. Ia tetap diterima selama nilai-nilai elemen tidak berubah.

- Pola dalam IDS dibaca sebagai seluruh nilai. `^` di awal dan `$` di akhir juga diambil sebagai "seluruh nilai", seperti yang biasanya dimaksudkan oleh sebagian besar file IDS.

## Berikutnya

- [Periksa model terhadap masalah umum](topic:model-checks)
- [Ubah dinding atau pintu](topic:change-a-wall-or-door)
