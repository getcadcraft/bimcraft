---
title: Finishing ruang dan jadwal finishing
summary: Tentukan apa yang menutupi lantai, dinding, dan plafon setiap ruang, tambahkan zona seperti splashback berubin, dan dapatkan jadwal finishing menurut ruang, dinding, dan zona dengan luas, jumlah ubin termasuk potongan, dan volume substrat.
keywords: finishing, jadwal finishing, finishing ruang, finishing lantai, finishing dinding, finishing plafon, skirting, ubin, ubin potong, jumlah ubin, susut, substrat, acian, papan pendukung, plester, zona, splashback, dado, area basah, interior, kuantitas
from: 8c30498c
---

## Yang akan Anda lakukan

Beri tahu BimCraft sekali saja apa yang menutupi setiap ruang. Jadwal finishing kemudian memberi luas, ubin yang perlu dipesan, dan volume substrat, dan berubah mengikuti model.

## Langkah

1. Aktifkan {{ui:Gambar}}, buka **Jadwal** di panel kiri, lalu klik **Finishing ruang**.
2. Di bawah **Jenis finishing**, klik **Tambahkan jenis finishing**. Beri nama, jenis (Ubin, Lembar, Lapisan, atau Papan), dan ketebalan. Untuk ubin, isi panjang dan lebar ubin, sambungan, dan toleransi susut (waste) dalam persen. Jika ada yang berada di bawah finishing (acian, papan pendukung, lapisan plester), beri nama di bawah **Substrat** dan isi ketebalannya.
3. Di bawah **Ruang**, pilih finishing lantai, dinding, dan plafon setiap ruang. Ketik nama skirting dan tingginya jika ruang punya skirting.
4. Di bawah **Zona**, klik **Tambahkan zona** untuk bagian ruang yang memakai finishing lain:
   - zona **dinding** adalah pita di antara dua ketinggian di atas lantai (splashback berubin dari 0 sampai 1200, dado). Zona ini ada di setiap dinding ruang, atau pilih dinding ruang itu di model lalu klik tombol **Nyala** untuk membatasinya ke dinding tersebut;
   - zona **lantai** atau **plafon** adalah area yang Anda ketik. Area itu dikurangkan dari finishing ruang itu sendiri.
5. Klik **Simpan**. Ini satu langkah di Urungkan. Panjang diketik dalam satuan proyek.

## Jadwal

Empat entri bergabung ke daftar Jadwal:

- **Finishing menurut ruang**: setiap ruang dengan finishing lantai, dinding, dan plafonnya, luasnya, serta skirting beserta panjangnya.
- **Finishing menurut dinding**: setiap bagian dinding di sisi ruang dan pita yang ditutup finishing, dengan panjangnya, luas kotor, pengurangan, luas bersih, dan, untuk ubin, ubin utuh, ubin potong, serta ubin yang harus dipesan.
- **Finishing menurut zona**: setiap zona dengan finishing-nya, luas bersih, ubin, dan volume substrat.
- **Kuantitas finishing**: satu baris per finishing: luas bersih, ubin utuh dan potong, ubin yang harus dipesan, substrat beserta volumenya, dan volume finishing itu sendiri.

Kelompokkan, totalkan, simpan, dan ekspor seperti jadwal lainnya: lihat [Atur tata letak, simpan, dan ekspor jadwal](topic:schedule-layouts). Klik angka untuk memilih asalnya: pengurangan sebuah dinding memilih pintu dan jendelanya.

## Cara finishing diukur

- **Dinding**: setiap bagian dinding di sisi ruang, panjangnya sepanjang ruang dikali tinggi yang ditutup finishing, dikurangi bagian setiap pintu dan jendela di dalam tinggi itu. Dinding yang lebih rendah dari ruang difinis sampai puncaknya sendiri. Metode pengukuran proyek menentukan bukaan mana yang terlalu kecil untuk dikurangkan ([Jadwal](topic:plan-schedules-and-pdf)).
- **Lantai dan plafon**: ruang di dalam muka dinding, dikurangi pulau-pulau di dalamnya.
- **Skirting**: panjang dinding ruang dikurangi lebar pintunya.
- **Ubin**: dipasang sebagai kisi dari satu sudut permukaan, dengan satu sambungan di antara ubin. Ubin yang sepenuhnya berada di atas permukaan adalah ubin utuh; ubin yang sebagian berada di atasnya (di tepi, mengelilingi bukaan) adalah ubin potong. Ubin yang harus dipesan adalah utuh ditambah potong, ditambah susut (waste), dibulatkan ke atas. Setiap ubin potong dihitung sebagai ubin baru: potongan sisa tidak digunakan kembali.
- **Volume substrat**: luas bersih dikali ketebalan substrat.
- Hitungan yang diberi tanda **≈** dihitung dari luas alih-alih disusun ubin demi ubin: permukaan dengan zona yang diketik dikeluarkan darinya, atau permukaan yang sangat besar.

## Perlu diketahui

- Finishing disimpan dalam file bangunan (set properti `CadCraft_Finishes` pada proyek). Setiap ruang yang punya finishing juga mendapat set properti standar IFC `Pset_SpaceCoveringRequirements`, sehingga program lain dapat membaca namanya.
- Tata letak ubin dimulai dari sudut. Tata letak yang berpusat di ruang, pola (herringbone, brick bond), dan penggunaan kembali potongan sisa tidak dihitung.
- Dinding melengkung, dan batas ruang yang bukan dinding (pemisah ruang), didaftar sebagai **Batas lain** dengan panjangnya dan tanpa bukaan.
- Entri **Finishing** yang sudah ada mencantumkan lapisan finishing dari tipe dinding; **Layer: luas dan volume** mencantumkan setiap lapisan dari setiap tipe berlapis. Finishing ruang di sini adalah yang diterapkan pada ruang di atas lapisan-lapisan itu.
- Asisten dapat mengatur finishing untuk Anda dengan `finishes_set`: lihat [Biarkan asisten AI bekerja dengan model Anda](topic:assistants).
