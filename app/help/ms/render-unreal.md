---
title: Hantar adegan ke enjin permainan
summary: Studio boleh menulis adegan ke dalam projek Unreal Engine dan memastikannya selari pada setiap penghantaran; suntingan anda sendiri berada dalam lapisan yang tidak pernah ditulis CadCraft. Plug-in yang membukanya belum dikeluarkan lagi.
keywords: unreal, unreal engine, enjin permainan, pautan, hantar, usd stage, projek, langsung, cine camera, movie render queue
from: 154d55ef
---

Dalam CadCraft Studio, senarai Enjin boleh memuatkan **pautan** ke projek Unreal Engine. Satu arah sahaja: dari CadCraft ke Unreal.

## Hantar adegan

1. Pilih entri Unreal dalam senarai Enjin. Kali pertama, Studio meminta anda memilih folder projek anda (yang mempunyai fail `.uproject`); ia mengingatinya.
2. Klik {{ui:Send}}. Studio menulis `CadCraft/<nama fail>/` di dalam projek: adegan sebagai fail USD, fail tetapan, profil cahaya, dan dua fail lapisan kecil.
3. Ubah model, simpan dan hantar semula. Hanya adegan dan fail tetapan yang digantikan.

## Suntingan anda selamat

Stage yang dibuka Unreal ialah lapisan akar kecil yang dibuat sekali, dengan dua lapisan di bawahnya: **milik anda** di atas (`<name>.user.usda`, kosong pada mulanya, tidak pernah ditulis semula oleh CadCraft) dan adegan CadCraft di bawah. Suntingan yang anda simpan dalam lapisan anda sendiri kekal apabila adegan dihantar semula. Lampu dan pelakon lain yang anda letakkan dalam tahap Unreal berada di luar stage dan juga tidak disentuh.

## Tanpa Studio

Dalam pelayar, atau pada komputer yang mana Studio tidak menjumpai Unreal, pilih **Folder projek Unreal (.zip)** dalam senarai Enjin dan klik {{ui:Render}}. Ia menyimpan folder yang sama sebagai zip: nyahzipkannya ke dalam folder `CadCraft` projek anda. Biarkan **Sertakan fail stage** dihidupkan pada kali pertama; matikannya untuk simpanan kemudian, supaya zip hanya memuatkan adegan dan fail tetapan, dan lapisan anda sendiri tidak pernah digantikan.

:::note
Plug-in Unreal yang membuka stage, menggunakan matahari, lampu, kamera dan pendedahan, mengikuti setiap penghantaran dan merender kamera **belum dikeluarkan lagi** dan belum dijalankan dalam Unreal. Sehingga itu, Hantar meletakkan fail dalam projek dan alat USD Unreal sendiri boleh membukanya. Windows ialah sistem pertama; macOS menyusul.
:::
