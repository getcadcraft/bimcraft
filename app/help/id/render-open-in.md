---
title: Buka adegan di program lain
summary: Simpan adegan sebagai berkas USD atau glTF untuk program apa pun yang membacanya, atau buka dari Studio di program di komputer ini.
keywords: buka di, usd, gltf, glb, ekspor, program render, archviz, studio, usdview, kirim, serah terima, paket, folder unreal
from: 0a6559ee
---

Pilih entri **Buka di** pada daftar Mesin di {{ui:Render}} untuk membawa adegan ke program lain. Tidak ada yang kembali ke model.

## Berkas untuk program apa pun

- **Berkas USD** menyimpan adegan sebagai `.usdc` (atau `.usdz` bila model membawa gambar): [berkas yang sama dengan Simpan sebagai USD](topic:usd), dengan material, lampu, dan kamera. Ia mempertahankan instancing dan nilai material yang tepat. Sebagian besar renderer, mesin game, dan penampil membaca USD.
- **Berkas glTF (.glb)** menyimpan berkas glTF 2.0 yang lebih ringan dengan material, tekstur, dan lampu; lihat [Kirim model ke program render](topic:model-for-rendering) untuk apa yang dibawanya dan apa yang ditinggalkannya.
- **Folder proyek Unreal (.zip)** menyimpan folder yang ditulis [Kirim adegan ke mesin game](topic:render-unreal), untuk proyek di komputer mana pun.

Ketiganya berfungsi di peramban maupun di Studio.

## Di Studio: buka di sebuah program

Studio mendaftar program yang ditemukannya di komputer ini dan dapat membuka adegan: usdview bila ada di jalur pencarian Anda, dan program bawaan komputer untuk jenis berkas tersebut. Pilih salah satu, pilih USD atau glTF bila programnya membaca keduanya, lalu klik {{ui:Render}}. Studio menulis paket ke folder baru di Documents (`CadCraft hand-off`; tidak ada yang ditimpa, setiap pengiriman mendapat folder sendiri) dan menjalankan program di atasnya, lalu memberi tahu di mana berkasnya berada.

| Program | Paling cocok untuk |
|---|---|
| usdview | USD |
| Program bawaan komputer | Apa pun yang dimiliki komputer untuk jenis berkas tersebut |

Studio hanya menjalankan program dari daftar tetap ini; ia tidak menjalankan apa pun yang diminta halaman dengan menyebut namanya, dan tidak pernah menjalankan program berlisensi GNU GPL (lihat [Gambar gambar dengan program lain](topic:render-other-program#programs-cadcraft-never-runs)). Program apa pun yang membaca USD atau glTF membuka berkas dari **Berkas untuk program apa pun** di atas.

:::note
Twinmotion, Enscape, dan program visualisasi lain tidak ada di daftar: CadCraft belum memeriksanya dan tidak membuat klaim tentang mereka. Berkas glTF atau USD dari sini adalah jalurnya; lihat catatan tentang [renderer plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
