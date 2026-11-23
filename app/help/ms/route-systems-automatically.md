---
title: Salurkan saluran udara, paip saliran, air dan penyejuk secara automatik
summary: Dalam semakan pertembungan, BimCraft mencari jalan melalui model terbuka untuk saluran udara, saliran graviti, air sejuk dan panas, serta paip penyejuk split atau multi-split, dan melukis laluan dengan kelengkapannya dalam satu langkah buat asal. Alat untuk draf: saiz, cerun dan semakan datang daripada jadual dalam program dan nombor yang anda taip; tiada apa di sini menyatakan reka bentuk mematuhi kod.
keywords: laluan automatik, autolaluan, salurkan saluran udara, salurkan paip, saliran, sanitari, graviti, tegak, vent, perangkap, air, air panas, gelung pulangan, peredaran semula, penyejuk, split, multi-split, VRF, panjang setara, kit cawangan, wye
from: 5841d513
---

## Apa yang akan anda lakukan

Biarkan BimCraft menyusun rangkaian laluan antara penyambung yang sudah berada dalam model, mengelilingi dinding dan rasuk, kemudian semak dengan nombor yang boleh anda lihat.

## Langkah

1. Buka model dan semakan pertembungan. Di bawah **Salurkan saluran udara secara automatik**, pilih pengendali udara dan terminalnya, atau di bawah **Salurkan sistem lain secara automatik**, pilih satu sistem.
2. **Saliran sanitari mengikut graviti.** Taip kedudukan bukaan keluar dan, jika anda ada, kedudukan paip tegak. Tanda **Salurkan setiap tingkat sekaligus** untuk mengambil setiap tingkat yang mempunyai kelengkapan: saliran setiap tingkat bertemu paip tegak pada arasnya sendiri, dan paip tegak berjalan dari atas paip air tertinggi ke tapaknya. Tekan {{ui:Salurkan}}.
3. **Perangkap ke vent.** Panel menyenaraikan jarak dari setiap perangkap ke ventnya. Taip jarak paling jauh yang dibenarkan kod anda dalam **Paling jauh dari perangkap ke vent**; mana-mana kelengkapan yang melebihinya disenaraikan sebagai tidak selesai, dengan milimeter lebihannya. Tanda **Vent melalui paip tegak** apabila kelengkapan tidak mempunyai batang vent sendiri: jaraknya kemudian diukur ke paip tegak. BimCraft tidak menyertakan jadual kod untuk ini: anda yang menaip nombornya.
4. **Air sejuk dan panas.** Pilih sumber, taip tekanan di sumber dan tekanan yang anda perlukan di kelengkapan. Tanda **Air panas**, pilih sambungan panas pemanas, dan tanda **Gelung pulangan** untuk menamatkan talian pulangan pada sambungan **pulangan-panas** pemanas, atau pada mana-mana sambungan lain yang anda pilih (yang itu berakhir 150 mm pendek, terbuka, untuk anda sambungkan).
5. **Split, multi-split dan VRF.** Pilih unit luaran, tanda unit dalaman dan taip kapasiti setiap satu. Taip had daripada data pengilang anda. Taip **panjang setara** bagi satu lenturan dan bagi satu kit cawangan (nilai pengilang) dan panjang terpanjang serta jumlah akan disemak berdasarkan panjang setara.
6. Tekan {{ui:Salurkan}}. Panel memberitahu berapa banyak laluan yang dilukis, dan apa-apa yang tidak dapat dilakukan serta sebabnya. {{ui:Buat asal}} membatalkan semuanya dalam satu langkah.

## Apa yang sepatutnya anda lihat

Paip dengan siku, tee dan pengecil; saliran yang jatuh sekurang-kurangnya pada cerun terkecil untuk saiznya; batang vent pada kelengkapan; talian penyejuk sebagai pasangan cecair dan gas yang berpusing sama arah di setiap selekoh, dengan kit cawangan ditanda di tempat cawangan keluar dari batang utama.

## Perlu diketahui

- Apabila saliran bertemu saliran lain, model melukis tee. Pelan menamakan tempat itu sebagai simpang wye 45 darjah supaya anda boleh menukar kelengkapannya.
- Air panas menggunakan sambungan panas kelengkapan itu sendiri apabila keluarganya mempunyainya, dan sambungan 100 mm di sebelah sambungan sejuk apabila tidak.
- Talian penyejuk bermula di antara dua port setiap unit. Apabila dua port unit terlalu rapat untuk selekoh, pasangan itu kekal di tengah di antara keduanya.
- Rangkaian air menggunakan lengkung permintaan dan nombor geseran yang ditunjukkan dalam pengiraan; gantikannya dengan nilai kod anda sebelum bergantung pada tekanan.
- Rumah besar boleh mengambil masa setengah minit atau lebih, kebanyakannya rangkaian panas.
- Ini ialah alat draf. Orang yang layak menyemak saiz, cerun, vent dan tekanan berbanding kod yang berkenaan.

## Seterusnya

[Semak pertembungan](topic:clash-check) · [Semak paip dan saluran berbanding struktur](topic:mep-against-structure) · [Sambungan antara paip dan peralatan](topic:mep-connections)
