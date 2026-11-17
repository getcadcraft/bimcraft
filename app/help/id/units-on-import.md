---
title: Satuan saat impor: file menyatakan satuannya, atau Anda ditanya dulu
summary: Saat file yang Anda bawa masuk menyatakan satuannya, BimCraft memakainya dan memberi tahu Anda. Jika tidak, BimCraft bertanya sebelum menempatkan apa pun dan mengingat jawaban Anda untuk file itu.
keywords: satuan, impor, buka, OBJ, STL, DWG, DXF, IFC, point cloud, item pustaka, milimeter, meter, inci, kaki, skala, ukuran salah, terlalu besar, terlalu kecil, 1000 kali, tanya, diingat
from: f044e9bc
---

## Yang akan Anda lakukan

Bawa file masuk dan pastikan ukurannya benar.

## Langkah

1. Buka atau tambahkan file seperti biasa: {{ui:Terbuka}}, {{ui:Files}} di Pustaka, {{ui:Point clouds}}, atau Build › Dari gambar.
2. Jika file menyatakan satuannya, tidak ada yang ditanyakan. Baris status menyebutkan satuan yang dinyatakan file.
3. Jika tidak, dialog akan meminta **Satuan untuk** file. Pilih apa arti satu satuan di file itu, lalu klik {{ui:Gunakan satuan ini}}. Tidak ada yang ditempatkan sebelum Anda menjawab.
4. {{ui:Batal}} (atau {{key:Esc}}) tidak membawa apa pun masuk.

## File mana yang menyatakan satuannya

- **IFC**: menyatakan satuan panjangnya, dan "Dibuka" menyebutkan satuan itu. IFC yang tidak menyatakan satuan ditanyakan sebelum dibuka; jawaban Anda ditulis ke dalam model, sehingga file menyatakannya sekali Anda menyimpan.
- **DWG dan DXF**: satuan penyisipan gambar. Gambar tanpa satuan itu akan ditanyakan (file di Pustaka, Build › Dari gambar, terrain dari kontur).
- **Daftar titik** untuk terrain: tidak menyatakan satuan. Anda ditanya.
- **Point clouds**: LAS dan LAZ dengan sistem koordinat, E57, PTX dan PLY menyatakan satuannya. Format lain ditanyakan.
- **OBJ dan STL**: tidak pernah menyatakan satuan. Anda ditanya.
- **glTF dan GLB**: meter, sesuai aturan format itu sendiri.
- **Gambar**: tidak memiliki ukuran sendiri. Gambar disesuaikan dengan tampilan, dan Anda mengatur ukurannya dengan Skala dari dua titik. Ukuran yang Anda berikan diingat untuk file itu: saat ditempatkan lagi, ia masuk dengan ukuran tersebut dan baris status menyatakannya.
- **Add-on Point clouds**: bertanya saat Anda membangun awan titik yang file-nya tidak menyatakan satuan, dan memberi label pada angka awan dalam satuan yang dibawanya.

## Perlu diketahui

- Jawabannya diingat untuk file itu (namanya, ukurannya, dan tanggalnya) di komputer ini, di setiap aplikasi CadCraft. Saat file yang sama masuk lagi, Anda tidak ditanya, dan baris status menyatakan bahwa satuan yang diingat dipakai.
- Untuk ditanya lagi: palet perintah ({{key:Mod+K}}) › **Tanya lagi untuk satuan file yang diimpor**.
- Daftar Satuan yang sudah ada pada impor (Satuan di Pustaka, Satuan di bilah awan titik, Satuan gambar di Dari gambar) tetap mengubah satuan setelahnya. Daftar Satuan alat terrain sekarang hanya menjadi jawaban awal pertanyaan.
