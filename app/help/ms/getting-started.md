---
title: Bermula dengan BimCraft
summary: Apa yang BimCraft lakukan hari ini, cara membuka model pertama anda, melihatnya dalam 3D, menukar satu nilai dan menyimpan salinan.
keywords: mula, larian pertama, buka, ifc, rvt, dwg, mula pantas, pengenalan, pemapar, bim
from: fc2dea19
---

BimCraft ialah aplikasi model bangunan dalam keluarga CadCraft. Dalam binaan ini ia **membuka, membaca dan memeriksa** fail bangunan, dan ia **menyunting data dalam model IFC**. Ia belum lagi melukis atau memodelkan elemen baharu. Anggaplah ia sebagai pemapar dan pemeriksa model yang juga membolehkan anda membetulkan nama, tag dan nilai sifat dalam fail IFC.

Yang dibukanya:

| Fail | Apa yang anda dapat |
|---|---|
| IFC (`.ifc`) | Model penuh dalam 3D: orbit, tingkat, sifat elemen, dan penyuntingan nama dan nilai sifat |
| Fail projek dan keluarga (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kad fail: keluaran ia disimpan, maklumat projek, gambar pratonton dan fail berpaut. Tiada 3D. |
| DWG dan DXF | Lukisan dalam 2D: ruang model dan setiap helaian, lapisan, lukisan berpaut, pandangan cetakan, dan jadual peralatan untuk lukisan perkhidmatan makanan yang bertag |
| Folder projek | Laporan setiap model dalam folder: sandaran, pautan, salinan yang rosak, dan cadangan fail mana hendak dimulakan |

Semuanya berlaku dalam pelayar anda, di atas komputer anda. **Tiada apa-apa dimuat naik.** Lihat [Fail yang dibuka dan disimpan oleh BimCraft](topic:files) untuk butirannya.

## Buka BimCraft

1. Buka BimCraft dalam pelayar semasa. Chrome, Edge, Firefox dan Safari semuanya berfungsi; [Pelayar, peranti dan memori](topic:platforms) menyenaraikan perbezaannya.
2. Tunggu skrin kosong yang berbunyi "Buka model bangunan."

:::note
BimCraft berjalan dalam pelayar, dan di desktop dalam CadCraft Studio, bersama aplikasi yang lain. Simpanan awan belum tersedia: anda membuka fail dari komputer anda dan menyimpan salinan kembali ke sana.
:::

## Buka model pertama anda

Cara terpantas untuk melihat apa yang BimCraft lakukan ialah dengan fail IFC.

1. Klik {{ui:Choose a file}} di tengah skrin.
2. Pilih fail `.ifc` dalam {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} dan sahkan.
3. Tunggu sementara bar status di bawah skrin berbunyi "Memulakan enjin IFC…", kemudian "Membina geometri".

Anda sepatutnya melihat model dalam 3D di tengah, panel {{ui:File}} dan senarai {{ui:Storeys}} di kiri, serta panel {{ui:Properties}} yang kosong di kanan. Bar status berakhir dengan "Dibuka" dan bilangan elemen.

:::tip
Anda juga boleh menyeret fail dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} terus ke halaman. Skrin memaparkan "Lepaskan untuk buka" semasa anda menyeret.
:::

:::offline
Enjin IFC dimuat dari tapak kali pertama anda membuka model IFC, melainkan BimCraft telah disimpan untuk kegunaan luar talian. Lukisan DWG dan DXF, fail projek dan folder tidak memerlukan apa-apa tambahan: pembacanya adalah sebahagian daripada aplikasi. Jika butang bar aplikasi berbunyi {{ui:Offline ready}}, semuanya dibuka secara luar talian. Jika tidak, model IFC tidak akan dibuka sehingga anda menyambung semula, melainkan satu model telah dibuka dalam tab ini. Lihat [Dalam talian dan luar talian](topic:online-offline).
:::

:::online
Pergi ke tempat tanpa sambungan? Klik {{ui:Save for offline}} pada bar aplikasi dan tunggu {{ui:Offline ready}}. Salinan tersimpan (kira-kira 11 MB) termasuk enjin IFC. Lihat [Bekerja luar talian](common:offline).
:::

## Tinjau sekeliling

:::mouse
1. Seret dengan butang kiri tetikus untuk mengorbit model.
2. Tatal roda tetikus untuk zum.
3. Seret dengan butang kanan tetikus untuk pan. Pada pad jejak Mac, tahan {{key:Shift}} dan seret.
4. Tekan {{key:F}} atau klik {{ui:Fit}} untuk melihat keseluruhan model semula.
:::

:::touch
1. Seret dengan satu jari untuk mengorbit.
2. Cubit dengan dua jari untuk zum, dan gerakkan dua jari bersama untuk pan.
3. Ketik {{ui:Fit}} untuk melihat keseluruhan model semula.
:::

## Lakukan satu perkara sebenar: betulkan tag

1. Klik dinding, pintu atau mana-mana elemen dalam model. Ia bertukar biru, dan sifatnya muncul di sebelah kanan.
2. Dalam panel {{ui:Properties}}, klik nilai di sebelah **Tag**.
3. Taip tag baharu dan tekan {{key:Enter}}.
4. Lihat bahagian {{ui:Changes}} yang dibuka di sebelah kiri: perubahan anda disenaraikan dengan nilai lama dan nilai baharu.

## Simpan salinan

1. Klik {{ui:Save as IFC}} dalam bahagian {{ui:Changes}}, atau tekan {{key:Mod+S}}.
2. Cari fail baharu dalam folder muat turun anda. Ia dinamakan mengikut nama asal dengan " (edited)" ditambah, contohnya `Clinic (edited).ifc`.

Fail asal anda tidak pernah diubah. [Tukar sifat IFC dan simpan salinan yang disunting](topic:edit-ifc-properties) menerangkan penyuntingan sepenuhnya.

## Ke mana seterusnya

- [Skrin BimCraft](topic:workspace): setiap panel mengikut nama.
- [Datang dari program BIM dan lukisan lain](topic:coming-from): apa yang berbeza jika anda biasa dengan Revit.
- [Buka keseluruhan folder projek](topic:open-project-folder): tunjuk BimCraft ke folder projek dan biarkan ia menyusun fail.
- [Lihat lukisan DWG atau DXF](topic:view-dwg): helaian, lapisan dan pandangan cetakan.
