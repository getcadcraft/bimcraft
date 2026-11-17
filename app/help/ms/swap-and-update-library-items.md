---
title: Tukar item yang diletakkan, dan kemas kini item daripada pustaka
summary: Gantikan satu item pustaka yang diletakkan dengan yang lain sambil mengekalkan tempat dan nombor itemnya, dan semak Pustaka untuk versi yang lebih baharu bagi semua yang ada dalam model.
keywords: tukar, gantikan, ganti, kemas kini, versi baharu, semak kemas kini, pustaka, ditarik balik, perubahan lesen, nombor item
from: 8bdfe01d
---

## Apa yang anda akan lakukan

Tukar fikiran anda tentang satu item tanpa mengalihkannya semula, dan pastikan item pustaka dalam model sentiasa terkini.

## Tukar satu item

1. Klik item pustaka yang diletakkan dalam model.
2. Dalam {{ui:Sifat}}, klik {{ui:Tukar item…}} dalam kotak **Item pustaka**. Tab {{ui:Pustaka}} dibuka.
3. Cari item baharu dan klik kadnya.
4. Klik {{ui:Tukar … kepada ini}}.

Elemen itu mengekalkan tempatnya, pusingannya, tingkatnya, nombor itemnya, kuantitinya dan nota. Jenis, bentuk dan data itemnya bertukar kepada item baharu. Item yang diletakkan dengan cara yang sama berkongsi satu jenis, seperti semasa anda meletakkannya.

Item yang mempunyai varian (lihat [Letak dan tukar item pustaka yang mempunyai varian](topic:library-variants)) menyenaraikan varian lainnya di bahagian atas tab {{ui:Pustaka}} apabila anda menukarnya: satu klik bagi setiap satu.

Apabila item baharu ialah jenis benda yang berbeza, contohnya singki menggantikan meja, kelas IFC elemen bertukar untuk sepadan (di sini daripada elemen perabot kepada terminal sanitari), supaya perisian lain menjadualkannya dengan betul. Ia kekal elemen yang sama, dengan GlobalId yang sama, supaya pautan kepadanya masih berfungsi. {{key:Mod+Z}} mengembalikan kelas lama bersama item lama.

## Semak kemas kini

1. Klik {{ui:Kemas kini}} dalam bar alat (atau {{ui:Semak kemas kini}} dalam kotak item pustaka).
2. Baca senarai: setiap item Pustaka dalam model dengan versinya dalam model, versi terkini dan status: **Terkini**, **Versi lebih baharu**, **Ditarik balik** atau **Tidak dijumpai**. Ia juga menyatakan apa yang berubah (geometri, data, lesen atau pembetulan).
3. Klik {{ui:Kemas kini}} pada baris, atau {{ui:Kemas kini semua}}.

## Apa yang sepatutnya anda lihat

- "Dikemas kini *n* penempatan. Penempatan, nombor item, kuantiti dan nota dikekalkan."
- Baris "Dikemas kini: *item*" dalam senarai perubahan. {{key:Mod+Z}} membatalkan setiap satu.

## Perkara yang perlu diketahui

- Hanya item yang berasal daripada Pustaka boleh disemak. Item daripada fail tidak membawa id pustaka.
- Apabila lesen berubah, salinan yang telah anda letakkan mengekalkan lesen yang dibawanya sehingga anda mengemas kininya.
- Item **Ditarik balik** tidak ditawarkan untuk penempatan baharu. Yang ditarik balik atas sebab hak cipta tidak boleh dimuat turun langsung; gantikannya dengan {{ui:Tukar item…}}.
- Varian yang diletakkan kekal sebagai varian itu apabila versi baharu item masih memilikinya; jika tidak, ia mengambil varian lalai item.
- Semakan hanya menghantar id dan versi item, tidak sekali-kali model anda.
