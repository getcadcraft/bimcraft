---
title: Dokumen dan semakan (peti simpanan)
summary: Panduan langkah demi langkah bagi satu kerja sebenar: letakkan folder projek fail IFC di bawah kawalan, daftar keluar satu model, ubahnya, daftar masuk dengan nota, hantar untuk semakan, luluskan dan keluarkannya, lihat sejarah dan apa yang menggunakannya, apa yang dilihat orang kedua ketika fail itu dikunci, dan cara ia berfungsi dengan folder awan.
keywords: peti simpanan, dokumen, panduan langkah demi langkah, tutorial, daftar keluar, daftar masuk, semakan, keluaran, luluskan, kunci, sejarah, digunakan oleh, IFC, model, folder awan, folder projek, dua orang, folder kongsi
from: 0a753f25
---

## Apa yang akan anda lakukan

Anda ialah Ana, bekerja pada Riverside Clinic bersama rakan sekerja, Ben. Fail IFC projek tinggal dalam satu folder yang anda berdua capai (pemacu kongsi, folder yang diselaraskan, atau folder awan). Menjelang akhir, satu fail telah bergerak dari salinan pertamanya kepada semakan **A** yang telah dikeluarkan, telah diubah lagi sebagai **B.1**, anda telah melihat siapa yang melakukan apa, dan anda telah melihat apa yang Ben lihat apabila anda memegang fail itu.

Semuanya disimpan dalam folder tersembunyi `.ccvault` di sebelah fail anda: tiada pelayan, tiada muat naik (folder awan ialah pengecualian, lihat langkah terakhir). Untuk setiap butang dan peraturan di satu tempat, lihat topik *Dokumen: daftar keluar, semakan dan keluaran* di tempat aplikasi anda memilikinya.

## 1. Tetapkan folder projek

1. Pilih {{ui:Dokumen}} di sebelah {{ui:Buka folder}} pada skrin permulaan, atau {{ui:Dokumen…}} dalam menu **Fail**.
2. Pilih {{ui:Pilih folder projek}} dan pilih folder yang menyimpan fail IFC projek. (Folder projek berfungsi dalam Studio dan dalam pelayar yang boleh membuka folder, seperti Chrome dan Edge. Dalam pelayar lain, panel memberitahu demikian.)
3. Pilih {{ui:Perubahan}} di sebelah **Anda:** dan taip nama anda, `Ana` (jika ia bertanya, juga nama komputer ini). Panel kini memaparkan *Anda: Ana pada* dan komputer anda. Nama anda dilekatkan pada setiap perkara yang anda lakukan.
4. Pilih {{ui:Mulakan peti simpanan dalam folder ini}} dan taip nama projek, `Riverside clinic`. Panel memaparkan *Peti simpanan dimulakan untuk Riverside clinic.*

## 2. Letakkan fail di bawah kawalan

1. Buka **Fail yang tiada dalam peti simpanan** dan pilih {{ui:Tambah}} di sebelah `models/House.ifc`.
2. Ia muncul di bawah **Fail dalam peti simpanan** pada semakan **A.1**, keadaan **Kerja sedang dijalankan**. A.1 ialah salinan pertamanya; peti simpanan menyimpan salinan setiap semakan.

## 3. Daftar keluar, ubah, daftar masuk

1. Pilih {{ui:Buka}} di sebelah `models/House.ifc`. Model dibuka dalam BimCraft dan panel ditutup supaya anda dapat melihatnya. Buka panel semula daripada {{ui:Dokumen}}.
2. Buka panel semula dan pilih {{ui:Daftar keluar}}. Baris itu kini memaparkan **Didaftar keluar kepada anda**. Fail kunci telah dibuat dalam `.ccvault/locks`; tiada siapa yang boleh mendaftar keluar fail ini sehingga anda mendaftar masuknya.
3. Ubah model: alihkan dinding, tambah pintu. Simpan ditolak melainkan model didaftar keluar kepada anda, dan ia memberitahu sebabnya; Simpan sebagai sentiasa berfungsi untuk salinan milik anda sendiri.
4. Buka panel, pilih {{ui:Daftar masuk}} dan taip apa yang berubah (`Pintu dialihkan`). Panel memaparkan *didaftar masuk sebagai A.2*. Fail dalam folder projek kini ialah model yang anda buka, dan kunci telah hilang. Mendaftar masuk tanpa perubahan mengekalkan semakan.

Jika anda berubah fikiran, {{ui:Batal daftar keluar}} memulangkan fail tanpa semakan baharu.

## 4. Semak dan keluarkan

1. Pilih {{ui:Hantar untuk semakan}}. Keadaan menjadi **Untuk semakan** dan fail menjadi baca sahaja.
2. Sebelum meluluskan, pilih {{ui:Tetapan projek}} dan senaraikan siapa yang boleh meluluskan (satu nama setiap baris), contohnya `Ben` dan `Carla`, dan tandakan peraturan bahawa pelulus mestilah orang selain pengarang. Pilih {{ui:Simpan tetapan}}. Kini peti simpanan itu sendiri menolak sesiapa yang lain.
3. Ben (atau Carla) memilih {{ui:Luluskan}} dan menaip nama pelulus. Keadaan menjadi **Dikeluarkan** dan semakan menjadi **A**, dengan *diluluskan oleh* dan nama itu. Fail yang dikeluarkan ialah baca sahaja. {{ui:Hantar balik}} akan mengembalikannya kepada Kerja sedang dijalankan, dengan sebab.

Nama pelulus ialah nama yang ditaip dalam panel; ia ialah rekod siapa yang menandatangani, bukan bukti identiti.

## 5. Semakan baharu

1. Pada fail yang dikeluarkan, pilih {{ui:Semakan baharu}}. Anda memegangnya untuk huruf seterusnya.
2. Ubahnya, kemudian {{ui:Daftar masuk}}. Semakannya ialah **B.1**, kerja sedang dijalankan. Keluarkannya dengan cara yang sama dan ia menjadi **B**. {{ui:Batal daftar keluar}} sebelum daftar masuk pertama meninggalkannya pada **A**.

Huruf semakan berjalan A, B … Z, AA, AB. Jika standard anda meninggalkan beberapa huruf, tetapan projek *Gunakan urutan ASME Y14.35* melangkau I, O, Q, S, X dan Z untuk semakan seterusnya.

## 6. Lihat apa yang berlaku

Pilih nama fail untuk membuka butirannya:

- **{{ui:Sejarah}}**: setiap peristiwa, yang terbaharu dahulu, dengan siapa, komputer mana dan bila: *Didaftar masuk A.2* oleh Ana, *Dikeluarkan* oleh Ben, dan sebagainya.
- **{{ui:Semakan}}**: jadual semakan: setiap semakan yang disimpan, dengan tarikhnya, siapa yang mendaftarnya masuk, nota, dan siapa yang meluluskannya. Peti simpanan menyimpan salinan setiap satu dalam `.ccvault/revs`.
- **{{ui:Menggunakan}}**: dokumen yang ditunjuk oleh model IFC.
- **{{ui:Digunakan oleh}}**: Digunakan oleh menyenaraikan setiap model dalam peti simpanan yang menunjuk kepada fail ini.

## Model yang menunjuk kepada dokumen lain

Model IFC yang menunjuk kepada dokumen lain dalam folder (lukisan, jadual) menunjukkannya di bawah **Menggunakan**, dan setiap satu daripadanya menunjukkan model di bawah **Digunakan oleh**. Apabila anda mendaftar masuk dokumen, anda dapat melihat model mana yang merujuknya.

## 7. Apa yang Ben lihat ketika anda memegang fail

Sekarang daftar keluar fail itu sekali lagi, dan minta Ben membuka folder projek yang sama pada komputernya dan membuka panel. Pada baris fail itu dia melihat **Didaftar keluar oleh Ana pada** komputer anda **sejak** masa itu, dan tiada butang {{ui:Daftar keluar}}. Jika dia cuba juga, peti simpanan menolak: kunci ialah fail yang sistem tidak akan buat dua kali, supaya dua orang tidak dapat memegang fail itu serentak, walaupun dalam saat yang sama, apabila folder itu berada pada cakera dalam Studio. (Dalam pelayar, folder hanya membenarkan usaha sebaik mungkin, dan panel memberitahu demikian di bawah **Folder**.)

Jika Ana tiada dan Ben memerlukan fail itu, {{ui:Pecahkan daftar keluar}} membebaskannya. Dia mesti menaip sebab; ia dimasukkan ke dalam log bersama pemilik daftar keluar itu. Apabila projek menyenaraikan pentadbir, hanya mereka boleh berbuat demikian. Daftar keluar yang lebih lama daripada had basi (14 hari secara lalai) ditandakan *sudah lama*. Selepas pemecahan, daftar masuk lewat Ana ditolak, supaya anda berdua tidak dapat menulis ganti antara satu sama lain.

## 8. Folder awan

Folder awan ialah folder projek yang disimpan dalam storan awan pasukan anda, jadi pasukan tidak perlukan pemacu kongsi. Dalam Studio, selepas log masuk ke akaun CadCraft anda, panel memaparkan {{ui:Buka folder awan}} di sebelah {{ui:Pilih folder projek}}. Pilihnya dan pilih folder itu, yang disenaraikan sebagai ruang kerja / folder. Pemilik ruang kerja mencipta folder dahulu, dan storan awan pasukan mesti sedang berkuat kuasa. Semua yang di atas berfungsi sama; pelayan membuat kunci, yang ketat merentasi orang. Jika anda tidak log masuk, panel meminta anda log masuk. Dalam tab pelayar biasa, butang awan tidak ditawarkan; gunakan Studio.

## Cuba

Lakukan lapan langkah di atas dengan salinan fail sebenar. Untuk langkah dua orang, anda memerlukan orang lain, atau dua tetingkap dengan dua nama. Jika anda mencubanya dengan folder kongsi sebenar, halaman Ujian komuniti menyenaraikan semakan yang menanyakan perkara tepat ini, dan menerima keputusan.
