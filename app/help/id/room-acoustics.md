---
title: Periksa reverberasi ruang dan dengarkan
summary: Waktu reverberasi per pita oktaf untuk setiap ruang (Sabine dan Eyring) dari ukuran dan finishing-nya, target milik Anda sendiri, serta suara, tepukan, atau musik yang diputar melalui respons impuls ruang yang dihitung.
keywords: akustik, reverberasi, waktu reverb, rt60, sabine, eyring, serapan, gema, suara, dengarkan, respons impuls, ucapan, ruang kelas, kantor, karpet, ubin plafon, kebisingan
from: 16996cbb
---

Bagian {{ui:Akustik ruang}} di panel kiri menghitung berapa lama suara bertahan di setiap ruang. Bagian ini membaca luas lantai, tinggi, dinding, pintu, dan jendela setiap ruang dari model IFC yang terbuka. Tidak ada yang diubah di dalam model.

## Pilih finishing

Jika model menyatakan apa yang ada di sebuah permukaan, ruang akan membacanya: lapisan dalam tipe setiap dinding (gipsum, plester, bata, beton, dan blok sudah dikenali), jenis lantai (kayu atau beton), dan apakah plafon berubin. Label di sebelah setiap pilihan menunjukkan apakah itu berasal dari model, nilai bawaan, atau pilihan Anda; pilih finishing lain untuk mengganti nilainya. Apa pun yang tidak dinyatakan model tetap pada nilai bawaan. Koefisiennya adalah **nilai tipikal yang sudah dipublikasikan**; ganti dengan data uji produk jika Anda memilikinya. Ketik **target** (reverberasi frekuensi menengah terpanjang yang Anda inginkan), dan setiap ruang yang melebihinya akan diberi peringatan beserta serapan yang akan menurunkannya.

## Membaca tabel

Reverberasi ditampilkan untuk 125 Hz sampai 4 kHz. Sabine cocok untuk ruang yang hidup dan Eyring untuk ruang yang mati; baris bertanda *Used* memakai Eyring jika serapan rata-rata di atas 0.2. Serapan udara ikut dihitung (ia memperpendek pita frekuensi tinggi di ruang besar). Ini adalah model statistik: ia mengasumsikan suara menyebar merata, jadi ruang yang panjang atau datar dan ruang yang sangat kecil hanya panduan kasar, dan furnitur, orang, serta pintu terbuka tidak dihitung.

## Mendengarkan

{{ui:Putar di ruang ini}} memutar suara (dibuat di sini), tepukan, nada petik, atau **file suara Anda sendiri** (file itu tetap berada di komputer Anda) melalui respons impuls yang dihitung untuk ruang itu: suara langsung, pantulan pertama dari kotak sebesar itu, dan ekor yang meluruh pada waktu reverberasi ruang itu sendiri di setiap pita. {{ui:Putar tanpa ruang}} memutar suara yang sama pada level yang sama tanpa ruang. Anda dapat menyimpan respons impuls atau suara di dalam ruang sebagai file WAV. Hasilnya terdengar seperti ruang dengan ukuran dan finishing tersebut, bukan ruang nyata mana pun.

## Orang dan furnitur

Ketik jumlah **orang di ruang ini** untuk menambahkan serapan mereka. Furnitur yang dimuat model (sofa, tempat tidur, kursi, meja, lemari, dikenali dari namanya) menambahkan serapannya sendiri. Angkanya adalah nilai perencanaan kasar, dibulatkan; ganti dengan pengukuran untuk ruang yang penting.

## Sumber dan pendengar

Di bawah {{ui:Sumber dan pendengar}}, tekan {{ui:Letakkan sumber}} atau {{ui:Letakkan pendengar}} lalu klik denah ruang. Suara yang Anda putar kemudian terdengar dari sana: suara langsung tiba setelah jarak tertentu, dan bagian reverberan berada pada level untuk jarak itu. Hapus keduanya untuk kembali ke kotak jarak.

## Serapan tidak merata dan mode ruang

Di bawah {{ui:Serapan tidak merata (ruang kotak)}}, ketik ruang sebagai kotak dan pilih finishing lantai, plafon, dan dindingnya. Tabel menambahkan Fitzroy dan Arau-Puchades ke Sabine dan Eyring: keduanya memperlakukan tiga pasang permukaan yang berhadapan secara terpisah, sehingga ruang berkarpet dengan plafon keras tidak dibaca terlalu pendek. Jika pasangan-pasangan itu sangat berbeda, sebuah catatan menyebutkan mana yang sebaiknya dipercaya. Di bawah tabel, **Mode ruang** mencantumkan gelombang berdiri terendah dari kotak itu dan frekuensi di bawahnya ruang memiliki mode tersendiri alih-alih medan suara yang merata. Ini adalah prediksi untuk ruang kotak, alat bantu desain, dan bukan pengukuran.

## Satuan

Luas, tinggi, volume, dan jarak ruang ditampilkan dalam {{ui:Satuan}} yang Anda pilih (kaki dan inci kubik dan persegi, inci, milimeter, sentimeter, atau meter). Perhitungannya sendiri tetap dalam SI; hanya tampilannya yang berubah. Waktu (detik), frekuensi, dan level tidak berubah.
