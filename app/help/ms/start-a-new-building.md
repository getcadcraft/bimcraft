---
title: Mulakan bangunan baharu
summary: Buat model bangunan kosong dengan arasnya, lukis dindingnya, letakkan item dari pustaka, dan simpan sebagai IFC.
keywords: baharu, bangunan baharu, kosong, mula dari awal, templat, aras, tingkat, lantai, cipta, model
from: 546b8ae8
---

## Apa yang anda akan lakukan

Mulakan model bangunan dari awal dan bukannya membuka satu yang sedia ada. BimCraft membuat model IFC kosong dengan projek, tapak, bangunan dan arasnya. Anda boleh meletakkan peralatan dan perabot pada aras dari pustaka, dan menyimpannya sebagai fail IFC.

:::note
Dinding boleh dilukis sekarang: lihat [Lukis dinding](topic:draw-walls). Pintu, tingkap, lantai dan bumbung sedang dibina seterusnya.
:::

## Langkah

1. Klik {{ui:New building}} di bawah **Buka fail atau folder**, atau pada halaman mula.
2. Taip **Nama bangunan**.
3. Pilih berapa banyak **Aras** yang dimilikinya (1 hingga 200).
4. Taip **Ketinggian aras**, dari lantai ke lantai: contohnya `10'-0"`, `10'6"` atau `3000 mm`. Nombor biasa ialah kaki di AS, dan milimeter di tempat lain.
5. Klik {{ui:Create}}. Aras disusun dari 0, setiap satu ketinggian aras di atas yang sebelumnya, dan dinamakan Aras 1, Aras 2 dan seterusnya. Ia muncul dalam pepohon model, dan pelan Aras 1 dibuka di sebelah pandangan 3D dengan {{ui:Draw}} dihidupkan.
6. Lukis dinding: lihat [Lukis dinding](topic:draw-walls). Namakan semula aras atau tukar ketinggiannya dalam panel **Aras**.
7. Letakkan item: lihat [Letakkan peralatan dan perabot dari pustaka](topic:place-from-library). Bar peletakan menyenaraikan setiap aras.
8. Klik {{ui:Save as IFC}}. Fail dinamakan mengikut bangunan, contohnya `Smith's house.ifc`.

## Perkara yang perlu diketahui

- Model disimpan dalam milimeter, sebagai IFC4. Program BIM lain boleh membukanya.
- **Tingkat** dalam panel kiri hanya menyenaraikan aras yang mempunyai sesuatu di atasnya; pepohon model menyenaraikan kesemuanya.
- Sehingga anda menyimpan, bangunan baharu dikira sebagai kerja yang belum disimpan. BimCraft bertanya sebelum anda membuka fail lain atau keluar, dan menyimpan salinan dalam pelayar ini sekiranya tab tertutup.
