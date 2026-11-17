---
title: Salin, tampal dan pendua item pustaka
summary: Salin item pustaka yang telah diletakkan dan tampalkannya di tempat anda klik, di tempat yang sama di sebelah asal, atau ke dalam model lain; salin mana-mana sifat elemen lain sebagai teks; buat asal dan buat semula.
keywords: salin, tampal, pendua, papan keratan, tampal di tempat yang sama, potong, padam, pilih semua, buat asal, buat semula, menu edit, lagi, item pustaka, penempatan, ulang, tatasusunan
from: 6ac15931
---

## Apa yang akan anda lakukan

Letakkan lebih banyak salinan item yang telah anda letakkan: meja kerja kedua, sederet sinki. Topik ini tentang **item pustaka yang telah diletakkan**, iaitu elemen yang BimCraft tulis ke dalam model. Satu daripadanya boleh ditampal ke dalam mana-mana model, malah dalam tab lain. Dinding, pintu dan setiap elemen lain disalin, dipotong, ditampal dan dipadam dengan cara yang sama dalam modelnya sendiri: lihat [Padam, potong, salin dan tampal elemen bangunan](topic:edit-elements).

Arahan terdapat dalam bar alat di atas model: {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}}, {{ui:Tampal}} dan {{ui:Lagi}}, iaitu menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua}}, {{ui:Padam}}, {{ui:Pilih semua}} dan {{ui:Nyahpilih semua}}. Arahan yang tidak boleh dilaksanakan pada masa ini akan dimalapkan; tuding padanya untuk membaca sebabnya, atau klik dan baris status akan memberitahu sebabnya.

## Langkah

1. Buka model IFC yang mempunyai item pustaka, atau letakkan satu dahulu. Lihat [Letakkan peralatan dan perabot daripada pustaka](topic:place-from-library).
2. Klik item dalam paparan 3D. Sifatnya memaparkan kotak **Item pustaka**.
3. Klik {{ui:Salin}} atau tekan {{key:Mod+C}}.
4. Klik {{ui:Tampal}} atau tekan {{key:Mod+V}}. Bar penempatan dibuka dan kotak lut sinar mengikut penuding, dipusingkan seperti asal.
5. Tekan {{key:R}} untuk memusingkannya 90°, {{key:Tab}} untuk melekapkan belakangnya ke dinding, atau taip X dan Y dalam bar penempatan.
6. Klik di tempat salinan itu hendak pergi. Setiap klik meletakkan satu lagi salinan; tekan {{key:Esc}} untuk berhenti.
7. Klik {{ui:Simpan sebagai IFC}} untuk muat turun salinan model yang telah disunting.

## Tampal di tempat yang sama

{{ui:Lagi}}, {{ui:Tampal di tempat yang sama}} atau {{key:Mod+Shift+V}} menampal tanpa klik, pada X dan Y yang sama serta dipusingkan dengan cara yang sama:

- **Ke dalam model yang sama, pada tingkat yang sama**: dua item tepat di satu tempat tidak berguna, maka salinan diletakkan betul-betul di sebelah asal, dengan lebar satu item tambah 100 mm sepanjang lebar item itu sendiri. Tampal di tempat yang sama sekali lagi daripada salinan baharu untuk membentuk satu baris.
- **Ke tingkat lain atau ke dalam model lain**: X, Y dan pusingan yang tepat sama. BimCraft menggunakan tingkat yang mempunyai nama yang sama; jika tiada, yang paling hampir ketinggiannya. Baris status menyatakan yang mana.

## Pendua

{{ui:Lagi}}, {{ui:Pendua}} atau {{key:Mod+D}} menyalin item yang dipilih dan terus memulakan penampalannya: satu langkah dan bukannya dua.

## Ke dalam model atau tab lain

Apa yang anda salin disimpan dalam pelayar ini, supaya anda boleh membuka model IFC lain, atau BimCraft dalam tab lain, dan menampal di sana. Model lain memerlukan item pustaka itu sendiri: BimCraft memilikinya apabila item diletakkan, ditukar ganti atau dikemas kini dalam tab ini. Item yang diletakkan dalam sesi terdahulu boleh ditampal semula dalam modelnya sendiri sahaja; dalam model lain, letakkannya daripada tab {{ui:Pustaka}}.

## Apa yang sepatutnya anda lihat

- Salinan dalam model, dipilih, dengan item pustaka, lesen, data peralatan, kuantiti dan nota yang sama seperti asal, serta **nombor item bebas seterusnya**. Tukar nombor dalam Sifat, di bawah `CadCraft_Placement`.
- "Diletakkan: *item* (item *n*)" dalam senarai perubahan. {{key:Mod+Z}} membatalkannya; {{key:Mod+Y}} meletakkannya semula.

## Perkara yang perlu diketahui

- Salinan berkongsi jenis asal, maka semuanya menggunakan satu set geometri, sama seperti meletakkan item yang sama dua kali.
- {{ui:Buat asal}} dan {{ui:Buat semula}} meliputi setiap perubahan: nilai yang anda sunting, penempatan, tampalan, pertukaran dan kemas kini. Buat semula meletakkan penempatan semula di tempat yang sama; perubahan baharu mengosongkan apa yang boleh dibuat semula.
- Dalam paparan 2D lukisan tiada apa untuk dipilih, maka tiada apa untuk disalin. Gunakan {{ui:Edit dalam CadCraft}} untuk menukar lukisan, apabila ia dipaparkan.

## Kesilapan biasa

- **{{ui:Tampal}} memberitahu elemen datang daripada model lain.** Perkara terakhir yang anda salin ialah elemen bangunan, atau beberapa elemen: ini hanya ditampal ke dalam modelnya sendiri. Pilih satu item pustaka yang diletakkan dan salinnya.
- **{{ui:Tampal}} memberitahu salinan datang daripada model lain tanpa item pustakanya.** Letakkan item daripada tab {{ui:Pustaka}} sekali dalam tab ini, kemudian salin dan tampal.
- **{{key:Mod+C}} menyalin teks halaman sebaliknya.** Teks telah dipilih pada halaman. Klik model dahulu.

## Berkaitan

- [Kekunci dan tetikus](topic:keyboard#edit)
- [Tetapan BimCraft](topic:settings)
