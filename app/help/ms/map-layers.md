---
title: Peta di atas tanah di bawah model
summary: Letakkan peta jalan atau gambar udara di atas tanah di bawah model IFC yang dirujuk geografi, daripada jubin peta, perkhidmatan peta atau gambar dengan fail dunia.
keywords: peta, lapisan peta, peta asas, udara, satelit, tapak, tanah, jubin, xyz, wms, wmts, perkhidmatan peta, fail dunia, rujukan geografi, ifcmapconversion, sistem koordinat unjuran, epsg, konteks tapak
from: 84e2e9df
---

## Apa yang anda akan lakukan

Lihat model di tempatnya: peta jalan tapak atau gambar udara di atas tanah di bawahnya.

## Langkah

1. Buka model IFC yang membawa tempatnya pada peta (penukaran peta, IfcMapConversion, dengan sistem koordinat unjuran). Pengeksport menulisnya apabila koordinat projek (titik tinjauan, koordinat dikongsi) ditetapkan.
2. Pilih {{ui:Show}} › {{ui:Map layers…}}. Dialog menyatakan sistem model, contohnya EPSG:28356. Model tanpa penukaran peta tidak boleh mempunyai lapisan peta: dialog memberitahu anda.
3. Hidupkan {{ui:Map layers from the internet}}. Sehingga itu tiada apa yang diminta daripada mana-mana pelayan; apabila ia hidup, pelayan yang anda tambah melihat kawasan sekeliling model dan alamat internet anda, tetapi tidak sekali-kali model anda.
4. Dalam {{ui:Add a layer}} pilih jubin (alamat dengan `{z}`, `{x}` dan `{y}`), perkhidmatan WMS, WMTS atau ArcGIS ({{ui:Get layers}}, kemudian pilih satu), atau gambar dengan fail dunianya.
5. Tutup dialog. Peta terletak di atas tanah tepat di bawah titik terendah model, meliputi jejak model dan sama jauh lagi di sekelilingnya.

:::note
Peta hanya dipaparkan di skrin; ia tidak disimpan dalam fail IFC. Senarai lapisan disimpan dalam pelayar ini. Gunakan hanya perkhidmatan peta yang terma penggunaannya membenarkannya.
:::
