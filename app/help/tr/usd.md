---
title: Modeli USD olarak dışa aktarın
summary: Açık IFC modellerini render, sahne birleştirme ve diğer 3B programlar için USD olarak yazın; her öğenin IFC sınıfı, GlobalId ve özellikleriyle birlikte.
keywords: usd, usda, usdc, usdz, openusd, dışa aktarma, ifc, globalid, özellikler, katlar, disiplinler, sahne birleştirme, archviz, render
from: 2be5f7b8
---

{{ui:USD}} araç çubuğunda açık olanı (her model, yerleştirdiğiniz yerde birleştirilmiş modeller dahil) tek bir USD dosyası olarak yazar.

## Dışa aktarma

1. Araç çubuğunda {{ui:USD}} seçin.
2. {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} veya {{ui:Package (.usdz)}} seçin.
3. Dosya indirilir. Durum çubuğu kaç öğenin eklendiğini söyler.

## Dosyada neler var

| IFC modelinde | USD dosyasında |
|---|---|
| Arsa, bina, katlar | İç içe gruplar, katlar yüksekliğe göre sıralı |
| Her öğe | Kendi katı ve disiplini altında (Mimari, Yapı, MEP, Mobilya, Arsa, Mekânlar, Diğer) tek bir prim, geometrisi bir örgü olarak |
| Sınıf, GlobalId, ad, tip, etiket | `ifc:class`, `ifc:globalId`, `ifc:name` gibi adlı öznitelikler |
| Özellik ve nicelik kümeleri | Her özellik için bir öznitelik; uzunluklar, alanlar ve hacimler metre, metrekare ve metreküp cinsinden |
| Renkler | Malzemeler (saydamlıkla birlikte) |
| Mekânlar | Korunur, render motorlarının atlaması için kılavuz olarak işaretlenir |

Geometri, IFC dosyasının kendi koordinatlarında durur. Düzen, CadCraft'ın binalar için yazılı USD kurallarını izler.
