---
title: Dokumen dan revisi (vault)
summary: Panduan langkah demi langkah untuk satu pekerjaan nyata: menempatkan folder proyek berisi model IFC di bawah kendali, check out sebuah model, mengubahnya, check in dengan catatan, mengirimkannya untuk ditinjau, menyetujui dan merilisnya, melihat riwayat dan apa yang memakainya, apa yang dilihat orang kedua saat file terkunci, serta cara kerjanya dengan folder cloud.
keywords: vault, dokumen, panduan, tutorial, check out, check in, revisi, rilis, setujui, kunci, riwayat, ifc, model, folder cloud, folder proyek, dua orang, folder bersama
from: 0a753f25
---

## Yang akan Anda lakukan

Anda adalah Ana, bekerja pada Riverside Clinic bersama rekan, Ben. Model IFC proyek berada di satu folder yang bisa diakses kalian berdua: drive bersama, folder yang disinkronkan, atau folder cloud. Pada akhirnya, satu file telah berjalan dari salinan pertamanya menjadi revisi **A** yang dirilis, lalu diubah lagi menjadi **B.1**. Anda juga sudah melihat siapa melakukan apa, dan apa yang dilihat Ben saat Anda memegang file tersebut.

Semuanya disimpan di folder `.ccvault` yang tersembunyi di samping file Anda: tanpa server, dan tidak ada yang diunggah (folder cloud adalah pengecualian, lihat langkah terakhir). Untuk setiap tombol dan aturan di satu tempat, lihat topik *Dokumen: check out, revisi dan rilis* di tempat aplikasi Anda memilikinya.

## 1. Atur folder proyek

1. Pilih {{ui:Dokumen}} di sebelah {{ui:Buka folder}} pada layar awal, atau {{ui:Dokumen…}} di menu **File**.
2. Pilih {{ui:Pilih folder proyek}} dan pilih folder yang berisi model IFC proyek. (Folder proyek berfungsi di Studio dan di peramban yang bisa membuka folder, seperti Chrome dan Edge. Di peramban lain, panel akan memberitahunya.)
3. Pilih {{ui:Perubahan}} di sebelah **Anda:** dan ketik nama Anda, `Ana` (jika diminta, juga nama komputer ini). Panel sekarang menampilkan *Anda: Ana di* dan komputer Anda. Nama Anda tercantum pada setiap hal yang Anda lakukan.
4. Pilih {{ui:Mulai vault di folder ini}} dan ketik nama proyek, `Riverside clinic`. Panel menampilkan *Vault dimulai untuk Riverside clinic.*

## 2. Tempatkan file di bawah kendali

1. Buka **File yang tidak ada di vault** dan pilih {{ui:Tambahkan}} di sebelah `models/House.ifc`.
2. File itu muncul di bawah **File di dalam vault** pada revisi **A.1**, dengan status **Sedang dikerjakan**. A.1 adalah salinan pertamanya. Vault menyimpan salinan setiap revisi.

## 3. Check out, ubah, check in

1. Pilih {{ui:Terbuka}} di sebelah `models/House.ifc`. Model terbuka di BimCraft dan panel tertutup agar Anda bisa melihatnya. Buka kembali panel dari {{ui:Dokumen}}.
2. Buka kembali panel dan pilih {{ui:Check out}}. Baris sekarang bertuliskan **Di-check out ke Anda**. Sebuah file kunci telah dibuat di `.ccvault/locks`. Tidak ada orang lain yang bisa men-check out file ini sampai Anda melakukan check in.
3. Ubah model: pindahkan dinding, tambahkan pintu. Simpan ditolak kecuali model di-check out untuk Anda, dan panel akan menyebutkan alasannya. Simpan sebagai selalu berhasil untuk salinan milik Anda sendiri.
4. Buka panel, pilih {{ui:Check in}}, dan ketik apa yang berubah (`Memindahkan pintu`). Panel menampilkan *di-check in sebagai A.2*. File di folder proyek sekarang adalah model yang Anda buka, dan kuncinya hilang. Check in tanpa perubahan mempertahankan revisinya.

Jika Anda berubah pikiran, {{ui:Urungkan check-out}} mengembalikan file tanpa revisi baru.

## 4. Tinjau dan rilis

1. Pilih {{ui:Kirim untuk ditinjau}}. Statusnya menjadi **Untuk ditinjau** dan file hanya bisa dibaca.
2. Sebelum menyetujui, pilih {{ui:Pengaturan proyek}} dan daftar siapa yang boleh menyetujui (satu nama per baris), misalnya `Ben` dan `Carla`. Centang aturan bahwa penyetuju harus orang selain penulisnya. Pilih {{ui:Simpan pengaturan}}. Sekarang vault sendiri menolak siapa pun selain mereka.
3. Ben (atau Carla) memilih {{ui:Setujui}} dan mengetik nama penyetuju. Statusnya menjadi **Dirilis** dan revisinya menjadi **A**, dengan *disetujui oleh* dan namanya. File yang sudah dirilis hanya bisa dibaca. {{ui:Kembalikan}} akan mengembalikannya ke **Sedang dikerjakan**, dengan alasan.

Nama penyetuju adalah nama yang diketik di panel. Itu merupakan catatan siapa yang menandatangani, bukan bukti identitas.

## 5. Revisi baru

1. Pada file yang sudah dirilis, pilih {{ui:Revisi baru}}. Anda memegangnya untuk huruf berikutnya.
2. Ubah, lalu {{ui:Check in}}. Revisinya menjadi **B.1**, sedang dikerjakan. Rilis dengan cara yang sama dan revisinya menjadi **B**. {{ui:Urungkan check-out}} sebelum check in pertama membuatnya tetap di **A**.

Huruf revisi berjalan A, B … Z, AA, AB. Jika standar Anda melewatkan beberapa huruf, pengaturan proyek *Gunakan urutan ASME Y14.35* melewati I, O, Q, S, X, dan Z untuk revisi berikutnya.

## 6. Lihat apa yang terjadi

Pilih nama file untuk membuka detailnya:

- **{{ui:Riwayat}}**: setiap peristiwa, yang terbaru di atas, dengan siapa, komputer mana, dan kapan: *Di-check in A.2* oleh Ana, *Dirilis* oleh Ben, dan seterusnya.
- **{{ui:Revisi}}**: tabel revisi, berisi setiap revisi yang disimpan dengan tanggalnya, siapa yang men-check in-nya, catatannya, dan siapa yang menyetujuinya. Vault menyimpan salinan setiap revisi di `.ccvault/revs`.
- **{{ui:Memakai}}**: dokumen yang ditunjuk oleh model IFC.
- **{{ui:Dipakai oleh}}**: mendaftar setiap model di vault yang menunjuk ke file ini.

## Model yang menunjuk ke dokumen lain

Model IFC yang menunjuk ke dokumen lain di folder (gambar, jadwal) menampilkannya di bawah **Memakai**. Masing-masing dokumen itu menampilkan model di bawah **Dipakai oleh**. Setelah men-check in sebuah dokumen, Anda bisa melihat model mana yang merujuknya.

## 7. Apa yang dilihat Ben saat Anda memegang file

Sekarang check out file itu lagi, dan minta Ben membuka folder proyek yang sama di komputernya dan membuka panel. Pada baris file, ia melihat **Di-check out oleh Ana pada** komputer Anda **sejak** waktunya, dan tidak ada tombol {{ui:Check out}}. Jika ia tetap mencoba, vault menolak. Kunci adalah file yang tidak akan dibuat dua kali oleh sistem, sehingga dua orang tidak bisa sama-sama memegang file itu, bahkan dalam detik yang sama, saat folder berada di disk di Studio. (Di peramban, folder hanya memberikan usaha terbaik, dan panel akan memberitahunya di bawah **Folder**.)

Jika Ana sedang pergi dan Ben membutuhkan file itu, {{ui:Putus check-out}} membebaskannya. Ia harus mengetik alasan. Alasan itu masuk ke log beserta siapa pemilik check-out tersebut. Jika proyek mendaftar admin, hanya mereka yang bisa melakukannya. Check-out yang lebih lama dari batas usang (14 hari secara default) ditandai *sudah lama*. Setelah pemutusan, check in terlambat dari Ana ditolak, sehingga kalian berdua tidak bisa saling menimpa.

## 8. Folder cloud

Folder cloud adalah folder proyek yang disimpan di penyimpanan cloud tim Anda, sehingga tim tidak memerlukan drive bersama. Di Studio, saat masuk ke akun CadCraft Anda, panel menampilkan {{ui:Buka folder cloud}} di sebelah {{ui:Pilih folder proyek}}. Pilih, lalu pilih folder yang terdaftar sebagai workspace / folder. Pemilik workspace membuat folder itu terlebih dahulu, dan penyimpanan cloud tim harus aktif. Semua yang di atas bekerja dengan cara yang sama. Server yang membuat kunci, dan kuncinya ketat antarorang. Jika Anda belum masuk, panel akan meminta Anda masuk. Di tab peramban biasa, tombol cloud tidak ditawarkan. Gunakan Studio.

## Coba

Lakukan delapan langkah di atas dengan salinan file asli. Untuk langkah dua orang, Anda membutuhkan orang lain, atau dua jendela dengan dua nama. Jika Anda mencobanya dengan folder bersama yang sungguhan, halaman Pengujian komunitas memuat pemeriksaan yang menanyakan hal persis ini, dan menerima hasilnya.
