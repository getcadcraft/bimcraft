---
title: Mulakan bangunan baharu
summary: Buat model bangunan kosong dengan araspnya, lukis dindingnya, letakkan item daripada pustaka, dan simpannya sebagai IFC.
keywords: baharu, bangunan baharu, kosong, mula dari awal, templat, aras, tingkat, lantai, cipta, model
from: 68786865
---

## Apa yang anda akan lakukan

Mulakan model bangunan daripada kosong dan bukannya membuka satu. BimCraft membuat model IFC kosong dengan projek, tapak, bangunan dan araspnya. Anda boleh meletakkan peralatan dan perabot pada aras daripada pustaka dan menyimpannya sebagai fail IFC.

:::note
Dinding boleh dilukis sekarang: lihat [Lukis dinding](topic:draw-walls). Pintu, tingkap, lantai dan bumbung sedang dibina seterusnya.
:::

## Langkah

1. Klik {{ui:Bangunan baharu}} di bawah **Buka fail atau folder**, atau pada halaman permulaan.
2. Taip **Nama bangunan**.
3. Pilih berapa **Aras** yang dimilikinya (1 hingga 200).
4. Taip **Ketinggian aras**, dari lantai ke lantai: contohnya `10'-0"`, `10'6"` atau `3000 mm`. Nombor biasa ialah kaki di AS, milimeter di tempat lain.
5. Setiap medan sudah diisi, jadi anda boleh membiarkannya seperti sedia ada. Di bawahnya, kotak menyatakan apa yang anda mulakan dengannya: unit, **Jenis dinding** yang dilukis dahulu oleh alat Dinding (pilih yang lain daripada senarai jika mahu) dan helaian pertama.
6. Klik {{ui:Cipta}}. Aras disusun dari 0, setiap satu setinggi aras di atas yang sebelumnya, dan dinamakan Aras 1, Aras 2 dan seterusnya. Ia dipaparkan dalam {{ui:Pokok model}}, dan pelan Aras 1 dibuka di sebelah paparan 3D dengan {{ui:Lukis}} dihidupkan.
7. Lukis dinding: klik {{ui:Dinding}} dan dua titik. Lihat [Lukis dinding](topic:draw-walls). Namakan semula aras atau tukar ketinggiannya dalam panel **Aras**.
8. Letakkan item: lihat [Letak peralatan dan perabot daripada pustaka](topic:place-from-library). Bar penempatan menyenaraikan setiap aras.
9. Klik {{ui:Simpan sebagai IFC}}. Fail dinamakan mengikut bangunan, contohnya `Rumah Smith.ifc`.

## Perkara yang perlu diketahui

- Model disimpan dalam milimeter, sebagai IFC4. Program BIM lain boleh membukanya.
- Bangunan baharu datang dengan satu helaian, **A-101**, yang memegang pelan aras terendah: A3 pada 1:100 apabila anda bekerja dalam unit metrik, Tabloid pada 1/8" = 1'-0" jika tidak. Ia kosong sehingga dinding pertama, dan kemudian memaparkan pelan semasa anda melukis. Bukanya di bawah **Helaian** dalam pelayar projek untuk menukar kertas, skala atau tajuknya, menambah pandangan atau memadamnya. Bangunan yang dimulakan daripada templat membawa helaian templat sebaliknya.
- Untuk menukar apa yang dimulakan oleh setiap bangunan baharu (jenis dinding bagi projek metrik, aras, helaian pertama, alat yang aktif selepas Cipta), lihat [Dasar lalai](topic:default-policies).
- Tiada apa-apa perlu disediakan sebelum dinding pertama. Jenis dinding, ketinggian aras, unit dan helaian boleh diubah kemudian.
- **Tingkat** dalam panel kiri hanya menyenaraikan aras yang mempunyai sesuatu di atasnya; pokok model menyenaraikan kesemuanya.
- Sehingga anda menyimpan, bangunan baharu dikira sebagai kerja yang belum disimpan. BimCraft bertanya sebelum anda membuka fail lain atau keluar, dan menyimpan salinan dalam pelayar ini sekiranya tab ditutup.
