---
title: Modelin altındaki zeminde bir harita
summary: Coğrafi konumlu bir IFC modelinin altındaki zemine bir sokak haritası veya hava fotoğrafı yerleştirin; harita karolarından, harita servislerinden ya da bir dünya dosyalı resimden.
keywords: harita, harita katmanları, temel harita, hava, uydu, saha, zemin, karolar, xyz, wms, wmts, harita servisi, dünya dosyası, coğrafi referans, ifcmapconversion, projeksiyonlu crs, epsg, saha bağlamı
from: 84e2e9df
---

## Ne yapacaksınız

Modeli yerinde görün: sitenin sokak haritası veya hava fotoğrafı, modelin altındaki zeminde.

## Adımlar

1. Yerini harita üzerinde taşıyan bir IFC modeli açın (projeksiyonlu bir koordinat sistemiyle bir harita dönüşümü, IfcMapConversion). Projenin koordinatları (ölçüm noktası, paylaşılan koordinatlar) ayarlandığında dışa aktarıcılar bunu yazar.
2. {{ui:Göster}} › {{ui:Harita katmanları…}} seçin. İletişim kutusu modelin sistemini söyler, örneğin EPSG:28356. Harita dönüşümü olmayan bir model harita katmanı alamaz: iletişim kutusu bunu söyler.
3. {{ui:İnternetten harita katmanları}} seçeneğini açın. O zamana kadar hiçbir sunucudan bir şey istenmez; açıkken eklediğiniz sunucular modelin çevresindeki alanı ve internet adresinizi görür, asla modelinizi görmez.
4. {{ui:Katman ekle}} içinde karo (adresi `{z}`, `{x}` ve `{y}` içeren), bir WMS, WMTS veya ArcGIS servisi ({{ui:Katmanları al}}, sonra birini seçin) ya da dünya dosyasıyla bir resim seçin.
5. İletişim kutusunu kapatın. Harita, modelin en alt noktasının hemen altındaki zeminde yatar; modelin izdüşümünü kaplar ve çevresinde bir o kadar daha uzanır.

:::note
Harita yalnızca ekranda görünür; IFC dosyasına kaydedilmez. Katman listesi bu tarayıcıda tutulur. Yalnızca kullanım koşulları buna izin veren harita servislerini kullanın.
:::
