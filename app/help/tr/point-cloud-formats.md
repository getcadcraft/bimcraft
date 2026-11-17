---
title: Nokta bulutu biçimleri: neler açılır ve neyi dışa aktarmalı
summary: Hangi lazer tarama dosyalarının 3B görünümde açıldığı, hangilerinin tarayıcı üreticisinin kendi biçimi olduğu ve taramanın burada açılması için tarayıcının yazılımından neyin dışa aktarılacağı.
keywords: nokta bulutu, lazer tarama, tarama, biçimler, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, dışa aktarma, açılamıyor, okunmuyor
from: 1e985f01
---

## Burada neler açılır

Bunları {{ui:Açık}} ile ya da sayfaya bırakarak açın (bkz. modelin yanında nokta bulutunu gösterme konusu):

| Biçim | Uzantı | Ne okunur |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: noktalar, renkler, yoğunluk, LiDAR sınıfları, koordinat sistemi. LAZ en fazla 1 GB. |
| E57 | `.e57` | Dosyadaki her tarama, kendi pozuyla yerleştirilmiş; renkler ya da dosyada renk yoksa yoğunluk. Dosyadaki resimler dışarıda bırakılır (bu söylenir). Şimdilik en fazla 6 milyon nokta ve 512 MB: daha büyük taramaları LAS ya da LAZ olarak dışa aktarın. |
| PLY | `.ply` | Metin ve ikili (her iki bayt sırası da): köşe noktalarının x y z değerleri, renkler ve yoğunluk. Yüzeyler dışarıda bırakılır (bu söylenir). |
| PCD | `.pcd` | Metin ve ikili: x y z, paketlenmiş ya da ayrı renkler, yoğunluk. Sıkıştırılmış PCD dosyaları henüz okunmaz: ikili ya da metin olarak kaydedin. |
| PTX | `.ptx` | Bir ya da daha fazla tarama, her biri kendi dönüşümüyle yerleştirilmiş; tarayıcının ölçmediği noktalar dışarıda bırakılır. Metre. |
| PTS, XYZ | `.pts`, `.xyz` | Metin: x y z; sütunlar varsa yoğunluk ve renkler de. |

## Yalnızca tarayıcının yazılımının okuduğu dosyalar

Bazı tarama dosyaları, yayımlanmış bir açıklaması ya da açık bir okuyucusu olmayan, tarayıcı üreticisinin kendi biçimidir. BimCraft bunları okuyamaz; birini açtığınızda ne olduğunu ve ne yapmanız gerektiğini söyleyen bir kart gösterilir. Taramayı üreticinin yazılımından E57 ya da LAS (ya da PTX, PTS) olarak dışa aktarın, sonra dışa aktarılan dosyayı açın.

| Dosya | Uzantı | Dışa aktarma kaynağı |
|---|---|---|
| ReCap projesi | `.rcp` | ReCap: projeyi açın ve dışa aktarın. Proje yalnızca taramalarına işaret eder; yalnızca `.rcp` dosyasını kopyalamak nokta vermez. |
| ReCap taraması | `.rcs` | ReCap: taramanın ait olduğu projeyi açın ve dışa aktarın. |
| FARO taraması | `.fls` | FARO SCENE. |
| Leica taraması | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble taraması | `.tzf` | Trimble RealWorks ya da Trimble Business Center. |
| Z+F taraması | `.zfs` | Z+F LaserControl. |

:::tip
Dışa aktarma bir biçim sorduğunda LAS ya da LAZ, BimCraft'ın gösterdiği her şeyi (renkler, yoğunluk, sınıflar ve koordinat sistemi) en küçük dosyada tutar.
:::

## Bu dosyalar neden okunmaz

Bu biçimler yayımlanmamıştır; bunları okumanın tek yolu her üreticinin kendi yazılım kütüphanesidir ve o üreticinin kendi koşullarına tabidir. BimCraft yalnızca kendi kodu ile bilgisayarınızda okuyabildiği biçimleri okur; bu yüzden bir tarama açmak için hiçbir yere gönderilmesi gerekmez.
