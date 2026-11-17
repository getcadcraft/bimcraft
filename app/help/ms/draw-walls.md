---
title: Lukis dinding
summary: Lukis dinding pada pelan aras dengan mengklik sudutnya atau menaip panjang; sudut bercantum sendiri, dan dinding disimpan sebagai IFC.
keywords: melengkung, arka, garis lokasi, justifikasi, dinding, dinding, lukis, pelan, pelan lantai, bilik, sudut, cantum, jenis dinding, 2x6, 2x4, cmu, konkrit, ketinggian, aras, aras, tingkat, panjang ditaip, ortho, snap
from: 8269cd4b
---

## Apa yang akan anda lakukan

Lukis dinding bangunan pada pelan bagi setiap aras. Klik di tempat dinding bermula dan kemudian setiap sudut; BimCraft mencantumkan sudut untuk anda, memberi setiap dinding lapisannya (siding, sheathing, studs, drywall …) dan menaikkannya hingga ke aras di atas. Paparan 3D menunjukkan dinding semasa anda melukis.

## Buka pelan

1. Mulakan bangunan baharu ([Mulakan bangunan baharu](topic:start-a-new-building)) atau buka model IFC.
2. Klik {{ui:Lukis}} dalam bar alat. Bangunan baharu dibuka dengan ia sudah aktif.
3. Pelan bagi sesuatu aras ditunjukkan di sebelah kiri dan paparan 3D di sebelah kanan. Pilih aras dalam senarai di bahagian atas pelan, atau dengan butang bulat di sebelahnya dalam panel **Aras**.
4. {{ui:Pelan}}, {{ui:Pisah}} dan {{ui:3D}} ialah alat dalam baris {{ui:Pandangan}} bar alat (arahan PLAN, SPLIT dan kekunci berfungsi seperti biasa). Gunakan {{ui:Pelan}} untuk pelan sahaja, {{ui:Pisah}} untuk kedua-duanya, dan {{ui:3D}} untuk menutup pelan. Apabila tetingkap sempit (atau saiz antara muka besar), {{ui:Pisah}} meletakkan pelan di atas paparan 3D dan bukannya di sebelahnya.

Pelan memotong aras 4'-0" (1200 mm) di atas lantainya, seperti pelan lantai. Tatal untuk zum, seret dengan butang tengah atau kanan (atau tahan {{key:Space}} dan seret) untuk pan; dengan {{ui:Pilih}} dihidupkan, seretan biasa juga memanpan. {{key:F}} dengan penunjuk di atas pelan memuatkannya.

## Lukis bilik

1. Klik {{ui:Dinding}} (atau tekan {{key:W}}).
2. Pilih jenis dinding dalam senarai pertama, contohnya **Exterior 2×6** atau **Interior 2×4**.
3. Pilih ketinggiannya: **Sehingga aras di atas** (dinding mengikut jika aras itu berubah), **Sehingga** aras yang lebih tinggi bagi dinding yang merentasi beberapa aras (dewan tangga, bilik dua tinggi, gable yang tinggi), atau **Ketinggian tetap** dan taipkannya. Dinding sebegitu tergolong kepada aras tempat anda melukisnya; pelan aras yang dilaluinya menunjukkannya lebih ringan, bilik di situ tertutup rapat dengannya, dan anda boleh klik pintu dan tingkap ke dalamnya daripada pelan tersebut (pintu berdiri pada lantai aras itu). Untuk mengalih atau membentuk semula dinding itu sendiri, pergi ke aras tempat ia bermula.
4. Klik di tempat dinding pertama bermula.
5. Klik setiap sudut. Setiap klik menghasilkan satu dinding; dinding seterusnya bermula di tempat yang tadi berakhir. Panjang dan sudut ditunjukkan di sebelah penunjuk.
6. Klik titik pertama sekali lagi untuk menutup bilik. Bar status memberitahu berapa banyak dinding yang ada dalam bilik, dan dalam mod garis tengah setiap dinding mendapat lapisan luarnya di luar bilik.
7. Tekan {{key:Esc}} (atau klik kanan, atau klik dua kali) untuk berhenti tanpa menutup.

Sudut bercantum sendiri: dua dinding bertemu pada mitre, dinding yang berakhir pada dinding lain berhenti di mukanya (T), dan tiga dinding atau lebih pada satu titik berkongsi sudut. Dinding yang bersilang dibiarkan seperti sedia ada.

Seluruh bilik sekaligus: buka {{ui:Bentuk}} untuk segi empat tepat, segi empat tepat yang diputar, poligon, lengkok, dinding pada garisan yang dipilih, atau bulat mengelilingi garis luar (lihat [Bentuk dinding, pisah, ofset, regang dan kunci](topic:wall-tools)).

## Pilih rujukan lukisan

Pilih **Garis tengah**, **Muka dalam** atau **Muka luar** sebelum klik pertama. Dengan muka dipilih, klik dan panjang yang ditaip anda menerangkan muka itu; BimCraft mengimbangi garis tengah dinding sebanyak separuh jumlah ketebalan dan mencantumkan sudut berturutan. Pilih **Luar di kiri** atau **Luar di kanan** berkaitan dengan arah anda melukis. Bagi garis luar tertutup yang dilukis mengikut lawan jam, bahagian luar berada di kanan; mengikut jam, di kiri. Dengan **Muka dalam**, badan dinding pergi ke bahagian luar garisan anda; dengan **Muka luar**, ke sisi lain. Lukisan muka mengekalkan sisi luar yang anda pilih apabila anda menutup gelung. Pada garis tengah, dinding yang tidak menutup bilik mengambil sisi luar yang anda pilih; menutup bilik menetapkan sisi luar setiap dinding ke luar bilik dengan sendirinya, tidak kira arah anda melukis.

Menukar jenis dinding, rujukan atau sisi luar menamatkan rantaian semasa. Berhampiran sudut yang berbalik, mitre panjang dihadkan dengan meninggalkan hujung segi empat.

Semasa melukis, titik hujung merentasi ruang kosong boleh sejajar secara mengufuk atau menegak dengan hujung dinding atau sudut yang lebih awal. Garisan panduan putus-putus menyambungkan titik itu kepada penunjuk yang disnap. {{key:Shift}} mengekalkan arah lukisan tegak; penjajaran kemudian berhenti di sepanjang arah itu. Hujung, titik tengah dan persilangan dinding yang berdekatan mengekalkan keutamaan berbanding penjajaran yang jauh.

## Garis lokasi

Dengan **Rujukan** pada **Muka luar** atau **Muka dalam**, dinding mengekalkan muka itu sebagai garis lokasinya. Kemudian, jika dinding menjadi lebih tebal atau sisi luarnya dibalikkan, muka itu kekal di tempatnya dan dinding membesar atau berbalik di sekelilingnya. Dinding lurus yang bertemu dengannya pada sudut akan mengikut, jadi sudut itu tetap tertutup. Anda boleh menukar garis lokasi kemudian dalam **Sifat**: lihat [Tukar dinding, pintu atau tingkap](topic:change-a-wall-or-door).

## Lukis dinding melengkung

1. Klik {{ui:Dinding}}, kemudian pilih **Melengkung** dalam senarai **Bentuk** pada baris pilihan.
2. Klik di tempat dinding bermula, kemudian di tempat ia berakhir.
3. Klik satu titik pada lengkungnya. Atau taip ketinggian lengkok dan tekan {{key:Enter}}.
4. Rantaian diteruskan dari hujung dinding. Tekan {{key:Esc}} untuk menamatkannya.

Dinding melengkung mencantumkan dinding pada hujungnya (sambungan sudut dan T berfungsi), membentuk bilik, dan memegang pintu dan tingkap sepanjang lengkungnya. Ia kekal sebagai unit lurus, bersudut tepat dengan dinding di tengahnya, dan jaraknya diukur sepanjang lengkok. Dinding boleh berpusing paling banyak tiga suku bulatan. Ia snap kepada hujungnya dan ke tengah lengkoknya.

Belum dibina untuk dinding melengkung: {{ui:Pangkas / panjangkan}} dan {{ui:Penjuru}}, rangka, dimensi pelan automatik dan snap sepanjang lengkok. Lihat [Apa yang belum dibina](topic:not-built-yet).

## Taip panjang dan bukannya klik

Selepas klik pertama, taip dan tekan {{key:Enter}}:

| Taip | Melukis |
|---|---|
| `12'6"` atau `3810` | dinding sepanjang itu, mengikut arah yang ditunjukkan penunjuk |
| `12'6"<90` | sepanjang itu, pada sudut itu (darjah, lawan jam dari kanan) |
| `@3000,0` | ke titik sejauh itu dari titik terakhir, melintang dan ke atas |
| `1200,3400` | ke titik itu pada pelan |

Menaip nombor semasa alat Dinding dihidupkan terus masuk ke kotak {{ui:Panjang}}. Dalam kaki dan inci, nombor biasa ialah inci; dalam milimeter ialah milimeter. Anda sentiasa boleh menaip unit: `3.5 m`, `10 ft`, `6 1/2"`.

## Snap

- Hujung dinding, sudut muka dan titik tengah dinding snap apabila penunjuk berdekatan (segi empat sama, segi tiga).
- Penunjuk snap ke garis tengah dinding atau mana-mana muka (silang).
- Dari titik terakhir, arah dikekalkan pada setiap 15° apabila hampir; tahan {{key:Shift}} untuk mengekalkannya pada 0°, 90°, 180° atau 270°.
- Arah bebas membundarkan panjang kepada 1/2" (atau 10 mm).

## Tukar, buat asal, padam

- Setiap dinding ialah satu langkah dalam {{ui:Perubahan}}: {{ui:Buat asal}} dan {{ui:Buat semula}} mengambil dinding balik dan meletakkannya semula.
- Dengan {{ui:Pilih}} dihidupkan, klik dinding dalam pelan untuk memilihnya; paparan 3D dan **Sifat** mengikutinya. {{key:Delete}} memadam dinding yang dipilih, dan dinding yang dicantumkan dengannya dibersihkan semula.

## Aras

Panel **Aras** menyenaraikan setiap aras dengan ketinggian dan tingginya.

- Taip nama, ketinggian atau tinggi baharu dan tekan {{key:Enter}}. Menukar tinggi (atau ketinggian) aras menggerakkan aras di atasnya sebanyak jumlah yang sama, dan dinding yang dinaikkan hingga ke aras itu akan mengikut.
- {{ui:Tambah aras di atas}} menambah aras di atas aras teratas, setinggi aras itu.
- {{ui:Tambah aras di bawah}} menambah aras di bawah aras terendah (bawah tanah), setinggi aras itu: ketinggiannya negatif apabila aras terendah berada pada 0, dan tiada aras lain bergerak. {{ui:Buat asal}} membuangnya semula.
- {{ui:Salin aras ini…}} melukis semula apa yang ada pada aras yang anda lihat ke aras lain, atau ke aras baharu di atas: dindingnya bersama pintu dan tingkapnya, lantai dan siling (bukan bumbung). Dinding yang dinaikkan hingga aras di atas dinaikkan hingga aras di atas aras baharu; bilik muncul dengan sendirinya. Satu {{ui:Buat asal}} membatalkan semuanya. Jika aras lain sudah mempunyai dinding, salinan ditambah kepadanya.
- {{ui:Unit}} pada bar alat memilih unit (kaki dan inci, inci, kaki perpuluhan, milimeter, sentimeter atau meter) untuk semua yang ditunjukkan dan dibaca oleh alat lukisan.

## Simpan

Klik {{ui:Simpan sebagai IFC}}. Setiap dinding ialah dinding IFC dengan garis tengahnya, bentuk yang dicantumkan, jenis dan lapisannya, `Pset_WallCommon` dan kuantiti asas (panjang, tinggi, luas dan isipadu), supaya program BIM lain boleh membukanya dan menjadualkannya.

## Perkara yang perlu diketahui

- Dinding dilukis pada garis tengahnya. Ketebalan datang daripada jenis dinding.
- Pelan menunjukkan dinding yang dilukis di sini sebagai berisi, dan segala yang lain (item pustaka, model daripada program lain) yang dipotong oleh satah yang sama, dengan apa yang berada di bawah potongan dalam garisan nipis.
- Dinding yang dibuat oleh program lain dipaparkan dalam pelan tetapi belum boleh diubah dengan alat ini lagi.
