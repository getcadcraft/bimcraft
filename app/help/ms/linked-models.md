---
title: Pautkan model lain untuk koordinasi
summary: Tunjukkan model IFC lain di sebelah model anda dengan rujukan (tidak sekali-kali digabungkan), letakkannya mengikut koordinat dikongsi, koordinat peta atau dua titik, snap padanya semasa melukis, dan muat semula apabila failnya berubah.
keywords: pautan, model dirujuk, rujukan, xref, koordinasi, persekutuan, struktur, MEP, perunding, koordinat dikongsi, tinjauan, koordinat peta, muat semula, nyahmuat, rujukan dokumen, IfcDocumentReference
from: 3e0f1eab
---

## Apa yang anda akan lakukan

Lukis berdasarkan model perunding (struktur, perkhidmatan, bangunan sedia ada) tanpa menyalin apa-apa ke dalam fail anda sendiri.

Model dirujuk ditunjukkan dalam paparan 3D dan dipotong pada pelan anda, tetapi ia tidak sekali-kali diubah dan tidak sekali-kali disimpan ke dalam model anda. Model anda hanya menyimpan pautan: nama fail dan tempat ia diletakkan.

## Pautkan model

1. Dalam bahagian {{ui:Linked models}} panel kiri, klik {{ui:Link a model…}} dan pilih fail IFC. Ia dipaparkan serta-merta, dan barisnya menyatakan **Dipaparkan**.
2. Pilih tempat ia diletakkan dalam {{ui:Placement}}:
   - **Koordinat dikongsi** (untuk permulaan): koordinatnya ialah milik anda, seperti apabila kedua-dua model ditetapkan daripada asal yang sama.
   - **Koordinat peta**: koordinat peta kedua-dua fail menjajarkannya (kedua-duanya perlu penukaran peta; BimCraft memberitahu anda apabila salah satu tiada).
   - **Dengan dua titik…**: klik satu titik pada model dirujuk, kemudian tempat ia pergi dalam model anda; kemudian pasangan kedua. Pautan itu dialih dan dipusingkan (sekitar paksi menegak) untuk dipadankan.
3. Setiap pautan dan perubahan penempatan ialah satu langkah: {{key:Mod+Z}} membatalkannya.

## Bekerja dengannya

- Pelan menunjukkan model dirujuk yang dipotong pada ketinggian potong aras sebagai garisan nipis, dan alat {{ui:Wall}} serta alat lukisan lain snap ke bucu dan tepinya.
- Pilih elemennya dalam paparan 3D untuk membaca sifatnya. Model dirujuk tidak sekali-kali model yang anda sunting, jadi butang radionya dalam {{ui:Models}} dimatikan.
- **Fail berubah?** Apabila pelayar boleh memantau fail (fail yang dibuka melalui pemilih failnya, atau dalam Studio), BimCraft memuat semula pautan itu sendiri beberapa saat selepas fail disimpan semula, dan memberitahu anda. Jika tidak, klik {{ui:Reload}}.
- {{ui:Unload}} menyembunyikannya dan membebaskan memori; pautan kekal dalam model anda. {{ui:Load…}} memaparkannya semula (anda memilih fail: pelayar tidak boleh membuka fail mengikut namanya sendiri).
- Butang × mengalih keluar pautan daripada model anda.

## Apa yang sepatutnya anda lihat

- Dalam fail IFC anda: satu IfcDocumentReference bagi setiap pautan (nama fail), dikaitkan dengan projek, dan tempat ia diletakkan dalam set sifat projek CadCraft_Links. Apabila anda membuka semula model, pautannya disenaraikan sebagai **Belum dimuat** sehingga anda memuatkannya.

:::note
Semakan pertembungan, Compare dan Find boleh menggunakan pautan yang dimuatkan seperti mana-mana model terbuka lain: lihat [Lihat beberapa model IFC bersama](topic:several-models).
:::
