---
title: Buka adegan dalam program lain
summary: Simpan adegan sebagai fail USD atau fail glTF untuk mana-mana program yang membacanya, atau bukanya dari Studio dalam program di komputer ini.
keywords: buka dalam, usd, gltf, glb, eksport, program render, archviz, studio, usdview, hantar, serah, pakej, folder unreal
from: 0a6559ee
---

Pilih entri **Buka dalam** dalam senarai Enjin bagi {{ui:Render}} untuk membawa adegan ke program lain. Tiada apa yang dipulangkan ke model.

## Fail untuk mana-mana program

- **Fail USD** menyimpan adegan sebagai `.usdc` (atau `.usdz` apabila model membawa gambar): [fail yang sama seperti Simpan sebagai USD](topic:usd), dengan bahan, lampu dan kamera. Ia mengekalkan instancing dan nilai bahan yang tepat. Kebanyakan perender, enjin permainan dan pemapar membaca USD.
- **Fail glTF (.glb)** menyimpan fail glTF 2.0 yang lebih ringan dengan bahan, tekstur dan lampu; lihat [Hantar model ke program render](topic:model-for-rendering) untuk apa yang dibawanya dan apa yang ditinggalkannya.
- **Folder projek Unreal (.zip)** menyimpan folder yang ditulis oleh [Hantar adegan ke enjin permainan](topic:render-unreal), untuk projek pada mana-mana komputer.

Ketiga-tiganya berfungsi dalam pelayar dan dalam Studio.

## Dalam Studio: buka dalam program

Studio menyenaraikan program yang ditemuinya pada komputer ini yang boleh membuka adegan: usdview jika ia berada pada laluan carian anda, dan program sendiri komputer bagi jenis fail itu. Pilih satu, pilih USD atau glTF jika ia membaca kedua-duanya, dan klik {{ui:Render}}. Studio menulis pakej ke dalam folder baharu di bawah Documents (`CadCraft hand-off`; tiada apa yang ditimpa, setiap penghantaran mendapat folder sendiri) dan memulakan program padanya, kemudian memberitahu di mana fail-fail itu.

| Program | Paling sesuai dibaca |
|---|---|
| usdview | USD |
| Program sendiri komputer | Apa sahaja yang komputer ada untuk jenis fail itu |

Studio hanya memulakan program daripada senarai tetap ini; ia tidak menjalankan apa-apa yang diminta oleh laman dengan nama, dan ia tidak sekali-kali memulakan program di bawah lesen GNU GPL (lihat [Lukis gambar dengan program lain](topic:render-other-program#programs-cadcraft-never-runs)). Mana-mana program yang membaca USD atau glTF membuka fail daripada **Fail untuk mana-mana program** di atas.

:::note
Twinmotion, Enscape dan program visualisasi lain tidak ada dalam senarai: CadCraft belum menguji dengannya dan tidak membuat sebarang dakwaan tentangnya. Fail glTF atau USD dari sini ialah laluan masuknya; lihat nota tentang [render plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
