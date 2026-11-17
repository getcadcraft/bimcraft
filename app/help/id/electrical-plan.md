---
title: Denah listrik
summary: Tempatkan stopkontak, sakelar, lampu, sensor, kotak sambungan, dan panel pada denah dengan simbol yang sama seperti add-on Listrik CadCraft, tautkan sakelar ke lampu yang dinyalakannya, dan daftarkan perangkat serta sirkuit di jadwal.
keywords: listrik, denah listrik, stopkontak, receptacle, duplex, sakelar, three-way, dimmer, lampu, lampu plafon, lampu tanam, downlight, sensor gerak, kotak sambungan, panel, papan distribusi, sirkuit, beban, watt, ampere, kaki sakelar, jadwal perangkat, jadwal panel
from: f7de1947
---

## Yang akan Anda lakukan

Gambar denah listrik rumah di dalam model: stopkontak, sakelar, dan panel di dinding, lampu serta sensor di plafon. Setiap perangkat adalah elemen listrik sungguhan di file IFC, dengan tag, sirkuit, dan bebannya, dan sakelar mengingat lampu yang dinyalakannya.

## Tempatkan perangkat

1. Pada suatu lantai, buka {{ui:Build}} dan pilih {{ui:Electrical}}.
2. Pilih perangkatnya: stopkontak (daya, data, telepon, audio-video), sakelar dan sensor (termasuk termostat dan timer), lampu, detektor dan alarm, kotak sambungan, panel, atau sub-panel.
3. Ketik **Sirkuit** jika Anda mengetahuinya (nama apa saja: 1, 2, A-3). Biarkan **Tinggi pemasangan** kosong untuk tinggi lazim perangkat tersebut.
4. Klik pada denah. Stopkontak, sakelar, dan panel ditempatkan di muka dinding terdekat, menghadap ke dalam ruangan; lampu, sensor, dan kotak sambungan ditempatkan di plafon tempat Anda mengklik.

Perangkat diberi tag saat ditempatkan: **R** untuk stopkontak, **S** untuk sakelar, **L** untuk lampu, **M** untuk sensor gerak, **J** untuk kotak sambungan, **P** untuk panel. Perangkat di dinding ikut berpindah saat Anda memindahkan dinding.

Lebih suka menelusuri dengan gambar? Buka **Palet simbol** dari {{ui:Build}} untuk mencari perangkat berdasarkan nama, beri bintang pada yang sering Anda pakai, lalu tempatkan dengan sekali klik: lihat [Palet simbol](topic:symbol-palette).

## Tautkan sakelar ke lampu

1. Pilih sakelar (atau sensor gerak) dan klik **Tautkan lampu** di **Properti**.
2. Klik setiap lampu yang dinyalakannya. Klik lampu yang sudah ditautkan lagi untuk melepas tautannya.
3. Tekan {{key:Enter}} atau klik **Selesai**.

Denah menggambar kurva putus-putus dari sakelar ke setiap lampunya. **Properti** sebuah lampu menunjukkan sakelar mana saja yang menyalakannya.

## Ruang tempat perangkat berada

Setiap perangkat mengetahui ruang tempat ia berada. Perangkat di dinding berada di ruang yang dihadapinya; perangkat di plafon berada di ruang tempat ia terletak. **Properti** menampilkan **Ruang**, dan jadwal **Perangkat listrik** memiliki kolom **Ruang** (nomor dan nama, misalnya 101 Dapur).

Data ini selalu diperbarui: ganti nama atau nomor ruang, pindahkan perangkat, atau pindahkan dinding, dan ruang akan mengikuti pada langkah yang sama. Perangkat di sisi luar bangunan, atau di ruang yang bukan ruang, akan menyatakan bahwa ia tidak berada di dalam ruang.

Ruang juga ditulis ke file, di set properti perangkat `CadCraft_Location` (Room, RoomNumber, RoomName), sehingga Temukan, Warnai menurut properti, dan jadwal tag dapat menggunakannya, begitu pula program lain. Simbol denah dan elemen yang ditautkan ke simbol menerima set yang sama; lihat [Palet simbol](topic:symbol-palette).

## Biarkan asisten Anda menempatkannya

Dengan asisten yang terhubung (Pengaturan › Asisten, dengan penyuntingan diizinkan), Anda dapat meminta perangkat dengan kata-kata: "pasang stopkontak ganda setiap 2 m sepanjang dinding ruang keluarga, 300 mm dari lantai, di sirkuit 3", atau "tambahkan lampu plafon dengan sakelarnya di dekat pintu". Asisten menggunakan lima alat: `devices_add`, `device_change`, `lights_set`, `devices_delete`, dan `devices_list`. Alat ini membuat perangkat yang sama seperti alat Listrik, di dinding yang sama dan dengan tag, sirkuit, beban, serta tinggi yang sama, dan setiap panggilan adalah satu langkah untuk diurungkan.

Perangkat tidak pernah mendapat jenis yang tidak dimiliki alat Listrik: jenis yang tidak dikenal ditolak dan asisten diberi daftarnya. Stopkontak atau sakelar harus berada dalam jarak 600 mm dari muka dinding, seperti saat diklik; jika tidak, panggilan ditolak dan tidak ada yang ditempatkan. Tinggi default dalam milimeter: 300 untuk stopkontak, 1100 untuk sakelar; perangkat plafon tergantung dari plafon.

## Ubah dan daftarkan

Pilih perangkat untuk mengubah tag, sirkuit, beban (watt), dan tinggi pemasangannya. Pilih beberapa perangkat untuk memasukkannya ke satu sirkuit sekaligus. Tekan {{key:Delete}} untuk menghapus satu perangkat; lampu yang dihapus akan dilepas dari sakelarnya.

Di {{ui:Schedules}}, pilih **Perangkat listrik** untuk setiap perangkat beserta lantai, sirkuit, beban, tinggi, dan lampu yang dinyalakan setiap sakelar, atau **Sirkuit** untuk perangkat setiap sirkuit, total beban, dan arusnya. Keduanya juga ada di lembar jadwal set gambar: lihat [Tampak, potongan, dan lembar](topic:sheets).

:::note
Tinggi pemasangan dan beban adalah default perencanaan (stopkontak 16" dari lantai dan 200 W, sakelar pada 48", lampu plafon 60 W), bukan desain: tukang listrik atau insinyur menentukan ukuran sirkuit dan memeriksa kode.
:::

:::tip
Simbol-simbol ini adalah simbol yang digambar add-on Listrik CadCraft pada gambar instalasi, sehingga denah dari kedua aplikasi terbaca sama.
:::
