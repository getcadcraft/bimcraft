---
title: Hantar elemen ke PartCraft dan ambil semula
summary: Pilih sokongan, pendakap, susur tangga atau peralatan, reka bentuknya sebagai bahagian dalam PartCraft dengan bangunan di sekelilingnya, dan terima bentuk baharu kembali ke dalam model.
keywords: partcraft, bahagian, hantar, pautan, elemen, sokongan, pendakap, pagar, susur tangga, peralatan, reka bentuk, pusingan penuh, terima, diubah, pautan bahagian
from: 4ce2f449
---

## Apa yang anda akan lakukan

Reka satu elemen bangunan sebagai bahagian: hantarnya ke PartCraft, ubahnya di sana (potong, tambah, gerudi, ubah saiz), dan bawa bentuk baharu kembali ke dalam model.

## Langkah

1. Pilih satu elemen dalam model: elemen generik, peralatan, tiang, rasuk, susur tangga atau perabot.
2. Pilih {{ui:Pautan bahagian}} pada bar alat dan kemudian {{ui:Hantar ke PartCraft}}. PartCraft dibuka dalam tab baharu dengan elemen sebagai bahagian. Elemen dalam lingkungan 3 m dilukis berwarna kelabu di sebelahnya supaya anda boleh mereka bentuknya di tempatnya. Elemen-elemen itu tidak boleh diubah di sana.
3. Ubah bahagian dalam PartCraft. Dalam PartCraft pilih {{ui:Fail}} › {{ui:Eksport}} › {{ui:Simpan semula ke BimCraft}}. Anda boleh menyimpan semula seberapa kerap yang anda mahu.
4. Kembali dalam BimCraft, butang {{ui:Pautan bahagian}} menunjukkan kiraan, dan kad menyenaraikan elemen itu sebagai {{ui:Diubah dalam PartCraft}} dengan perubahan saiz dan isipadu dinyatakan dalam perkataan.
5. Pilih {{ui:Tunjuk}} untuk melihatnya, kemudian {{ui:Terima}} untuk memberi elemen bentuk baharu, atau {{ui:Kekalkan milik saya}} untuk membiarkannya seperti asal.

## Apa yang sepatutnya anda lihat

- Menerima ialah satu langkah buat asal. Elemen mengekalkan tempatnya, GlobalId, jenis, bahan dan sifatnya. Hanya badannya diganti.
- Elemen mendapat set sifat {{ui:CadCraft_PartLink}} dengan pautan, statusnya dan revisinya.
- {{ui:Hantar semula}} membuka elemen yang sama dalam PartCraft sekali lagi, pada pautan yang sama.

## Perkara yang perlu diketahui

- Dinding, lantai, bumbung, pintu, tingkap, tangga, tangga landai dan ruang dilukis oleh alat bangunan daripada satu garis luar dan dibina semula selepas setiap perubahan. Badan daripada aplikasi lain akan ditulis ganti, jadi ini ditolak dengan sebab.
- Bentuk kembali sebagai jejaring (tesselasi IFC), bukan sebagai ciri bahagian. Sejarah bahagian kekal dalam PartCraft.
- Jika elemen berubah dalam model selepas anda menghantarnya, kad akan memberitahu sebelum anda menerima: menerima akan menggantikan perubahan tersebut.
- Tiada apa-apa dimuat naik. Kedua-dua aplikasi ialah halaman bagi satu laman yang sama dan memindahkan elemen antara mereka dalam pelayar ini. Kedua-duanya perlu dibuka dalam pelayar yang sama.
- Elemen mesti menutup menjadi pepejal dalam PartCraft. Elemen yang bentuknya mempunyai jurang terbuka yang besar akan ditolak di sana dengan bilangan tepi terbuka.
- Untuk menerima, jadikan model yang memegang elemen itu sebagai model aktif.
