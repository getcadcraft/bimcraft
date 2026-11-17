---
title: Pilih program yang melukis gambar
summary: Pilihan Enjin dalam dialog Render: enjin kami sendiri, program lain dalam CadCraft Studio, dan apa yang dilakukan web sebaliknya.
keywords: render, enjin, perender, enjin render, plug-in, plugin, studio, program luar, dilukis oleh, barisan gilir, enjin add-on
from: 44a1ef5e
---

{{ui:Render}} mempunyai pilihan **Enjin** di atas Mod. Dua enjin kami sendiri sentiasa ada dan berfungsi di mana-mana; add-on boleh menambah lagi, dan dalam CadCraft Studio senarai itu juga memuatkan program yang mengambil alih adegan.

| Enjin | Apa yang dilakukannya | Di mana |
|---|---|---|
| Terbina dalam: Pantas | Gambar pegun yang cepat: cahaya siang, bayang lembut, rupa kaca dan logam, dalam beberapa saat | Pelayar dan Studio |
| Terbina dalam: Penjejak laluan | Cahaya yang melantun antara permukaan pada kad grafik atau pemproses anda, barisan gilir render dan komputer lain dalam rangkaian anda | Pelayar dan Studio |
| Enjin sebuah add-on | Ia melukis dan memulangkan gambar: lihat [Lukis gambar dengan program lain](topic:render-other-program) | Pelayar (enjin yang ditulis dalam JavaScript) atau Studio (enjin yang menjalankan program) |
| Program yang mengambil alih adegan | Studio meletakkan adegan dalam foldernya dan memastikannya selari | Studio |
| Buka dalam … | Menyimpan adegan dan membukanya dalam program; tiada apa yang dipulangkan: lihat [Buka adegan dalam program lain](topic:render-open-in) | Web menyimpan fail |

## Cara pilihan berkelakuan

- Memilih Pantas atau Penjejak laluan menukar Mod bersamanya, dan sebaliknya. Tiada apa lain dalam dialog berubah bagi orang yang tidak pernah menggunakan enjin lain.
- Enjin yang tidak tersedia kekal dalam senarai dengan sebabnya ("tidak dijumpai", "memerlukan versi yang lebih baharu"); anda tidak boleh memilihnya. Dalam pelayar, enjin yang hanya berjalan dalam Studio menunjukkan "menyimpan fail": {{ui:Render}} kemudian menyimpan adegan dan tetapannya ke fail yang anda bawa ke program itu.
- Pilihan disimpan bersama tetapan render fail, dan enjin yang anda pilih kali terakhir ialah enjin permulaan bagi fail yang tidak mempunyai pilihan sendiri.
- Gambar daripada program lain memberitahu program mana yang melukisnya dan versinya, dalam dialog dan dalam barisan gilir render. Janji halaman [Render](topic:render) hanya meliputi enjin **kami sendiri**: program lain menyinari, menala dan mensampel mengikut caranya sendiri, jadi dua gambar bagi satu adegan adalah serupa dari segi kamera, matahari, lampu dan pendedahan, tetapi tidak sama piksel demi piksel.

## Apa yang diberikan kepada setiap enjin

Adegan dihantar ke program lain sebagai **pakej**: model sebagai fail USD (fail yang sama seperti yang ditulis oleh [Simpan sebagai USD](topic:usd)), dan fail tetapan yang memuatkan perkara yang tidak boleh dipercayai kepada pengimport USD: nilai bahan yang tepat, lampu yang menyala dengan kuasa dan profil cahayanya, matahari, langit, pendedahan dan kamera seperti yang dilukis oleh dialog. Tiada apa yang dimuat naik ke mana-mana.

## Barisan gilir render

Gambar untuk program lain boleh menunggu dalam [barisan gilir render](topic:render#the-render-queue) seperti enjin kami sendiri; kerjanya mengingati enjin yang dimaksudkannya.
