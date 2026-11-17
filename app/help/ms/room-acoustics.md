---
title: Semak dengung bilik dan dengar bunyinya
summary: Masa dengung mengikut jalur oktaf bagi setiap bilik (Sabine dan Eyring) daripada saiz dan kemasannya, sasaran anda sendiri, dan suara, tepukan atau muzik yang dimainkan melalui sambutan impuls yang dikira bagi bilik itu.
keywords: akustik, dengung, masa dengung, rt60, sabine, eyring, penyerapan, gema, bunyi, dengar, sambutan impuls, pertuturan, bilik darjah, pejabat, karpet, jubin siling, hingar
from: 16996cbb
---

Bahagian {{ui:Akustik bilik}} di panel kiri mengira berapa lama bunyi kekal dalam setiap bilik. Ia membaca luas lantai, tinggi, dinding, pintu dan tingkap setiap bilik daripada model IFC yang dibuka. Tiada apa-apa dalam model yang diubah.

## Pilih kemasan

Apabila model menyatakan apa yang ada pada sesuatu permukaan, bilik membacanya: lapisan dalam bagi jenis setiap dinding (gipsum, plaster, bata, konkrit dan blok diketahui), jenis lantai (kayu atau konkrit) dan sama ada siling berjubin. Label di sebelah setiap pilihan menyatakan sama ada ia daripada model, nilai lalai atau pilihan anda; pilih kemasan lain untuk menggantikannya. Apa-apa yang tidak dinyatakan model kekal pada nilai lalai. Pekali ialah **nilai tipikal yang diterbitkan**; gantikannya dengan data ujian produk apabila anda memilikinya. Taip **sasaran** (dengung frekuensi sederhana terpanjang yang anda mahu) dan mana-mana bilik yang melebihinya menjadi amaran, bersama penyerapan yang akan menurunkannya.

## Baca jadual

Dengung diberikan untuk 125 Hz hingga 4 kHz. Sabine sesuai untuk bilik hidup dan Eyring untuk bilik mati; baris bertanda *Digunakan* mengambil Eyring apabila purata penyerapan melebihi 0.2. Penyerapan udara turut dikira (ia memendekkan jalur tinggi dalam bilik besar). Ia ialah model statistik: ia menganggap bunyi merebak sama rata, jadi bilik yang panjang atau rata dan bilik yang sangat kecil hanyalah panduan kasar, dan perabot, orang serta pintu yang terbuka tidak dikira.

## Dengar

{{ui:Main dalam bilik ini}} memainkan suara (dibuat di sini), tepukan, nota dipetik atau **fail bunyi anda sendiri** (ia kekal di komputer anda) melalui sambutan impuls yang dikira untuk bilik itu: bunyi langsung, pantulan pertama bagi kotak sebesar itu, dan ekor yang reda pada masa dengung bilik itu sendiri dalam setiap jalur. {{ui:Main kering}} memainkan bunyi yang sama pada aras yang sama tanpa bilik. Anda boleh menyimpan sambutan impuls atau bunyi dalam bilik sebagai fail WAV. Ia berbunyi seperti bilik dengan saiz dan kemasan itu, bukan seperti mana-mana bilik sebenar.

## Orang dan perabot

Taip bilangan **orang dalam bilik ini** untuk menambah penyerapan mereka. Perabot yang dimiliki model (sofa, katil, kerusi, meja, almari, dikenal pasti mengikut nama) menambah penyerapannya sendiri. Angka ialah nilai perancangan kasar, dibundarkan; gantikannya dengan ukuran bagi bilik yang penting.

## Sumber dan pendengar

Di bawah {{ui:Sumber dan pendengar}}, tekan {{ui:Letakkan sumber}} atau {{ui:Letakkan pendengar}} dan klik pelan bilik. Bunyi yang anda mainkan kemudian didengar dari situ: bunyi langsung tiba selepas jarak, dan bahagian bergema berada pada aras untuk jarak itu. Kosongkan kedua-duanya untuk kembali ke kotak jarak.

## Penyerapan tidak sekata dan mod bilik

Di bawah {{ui:Penyerapan tidak sekata (bilik kotak)}}, taip bilik sebagai kotak dan pilih kemasan lantai, siling serta dindingnya. Jadual menambah Fitzroy dan Arau-Puchades kepada Sabine dan Eyring: ia menganggap tiga pasangan permukaan bertentangan secara berasingan, supaya bilik berkarpet dengan siling keras tidak dibaca terlalu pendek. Apabila pasangan berbeza banyak, satu nota memberitahu yang mana boleh dipercayai. Di bawah jadual, **Mod bilik** menyenaraikan gelombang berdiri terendah bagi kotak dan frekuensi yang di bawahnya bilik mempunyai mod berasingan dan bukan medan bunyi yang sama rata. Ini ialah ramalan untuk bilik kotak, alat bantu reka bentuk dan bukan ukuran.

## Unit

Luas, tinggi, isipadu dan jarak bilik dipaparkan dalam {{ui:Unit}} yang anda pilih (kaki persegi dan kaki padu, inci, milimeter, sentimeter atau meter). Pengiraan itu sendiri kekal dalam SI; hanya paparan yang berubah. Masa (saat), frekuensi dan aras tidak berubah.
