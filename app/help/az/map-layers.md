---
title: Modelin altında yerdə xəritə
summary: Georeferenced IFC modelinin altında küçə xəritəsini və ya aerofotonu yerə qoyun: xəritə kafelləri, xəritə xidmətləri və ya dünya faylı olan şəkildən.
keywords: xəritə, xəritə qatları, əsas xəritə, aerofoto, peyk, sayt, yer, kafel, xyz, wms, wmts, xəritə xidməti, dünya faylı, georeference, ifcmapconversion, proyeksiya CRS, epsg, saytın konteksti
from: 84e2e9df
---

## Nə edəcəksiniz

Modeli öz yerində görün: saytın küçə xəritəsi və ya aerofotosu onun altında yerdə.

## Addımlar

1. Xəritədə öz yerini daşıyan IFC modelini açın (xəritə çevrilməsi, IfcMapConversion, proyeksiya koordinat sistemi ilə). Layihənin koordinatları (planalma nöqtəsi, ümumi koordinatlar) təyin olunanda ixracedicilər onu yazır.
2. {{ui:Göstər}} › {{ui:Xəritə qatları…}} seçin. Dialoq modelin sistemini göstərir, məsələn EPSG:28356. Xəritə çevrilməsi olmayan model xəritə qatlarına malik ola bilməz: dialoq bunu bildirir.
3. {{ui:İnternetdən xəritə qatları}} açın. Ona qədər heç bir serverdən nə isə soruşulmur; açılanda əlavə etdiyiniz serverlər modelin ətrafındakı ərazini və internet ünvanınızı görür, modelinizi heç vaxt görmür.
4. {{ui:Qat əlavə et}} bölməsində kafelləri (ünvan `{z}`, `{x}` və `{y}` ilə), WMS, WMTS və ya ArcGIS xidmətini ({{ui:Qatları al}}, sonra birini seçin), ya da dünya faylı ilə şəkli seçin.
5. Dialoqu bağlayın. Xəritə modelin ən aşağı nöqtəsinin altında, yerdə yerləşir, modelin oturacağı üzərində və ətrafında daha da geniş.

:::note
Xəritə yalnız ekranda göstərilir; IFC faylında saxlanılmır. Qatların siyahısı bu brauzerdə saxlanılır. Yalnız şərtləri buna icazə verən xəritə xidmətlərindən istifadə edin.
:::
