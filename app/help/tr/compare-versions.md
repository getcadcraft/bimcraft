---
title: Bir modelin iki sürümünü karşılaştırın
summary: Aynı IFC modelinin iki sürümünü açın ve GlobalId'lerine göre eşleştirilmiş, eklenen, kaldırılan ve değişen öğeleri her değişikliğin CSV'siyle birlikte görün.
keywords: karşılaştır, fark, farklılık, sürümler, revizyon, değişiklikler, eklendi, kaldırıldı, taşındı, değişti, globalid, guid, ne değişti
from: cfca6971
---

## Ne yapacaksınız

Elinizdeki model ile size gönderilen model arasında neyin değiştiğini görün: hangi öğeler yeni, hangileri gitti, hangileri taşındı ya da yeni özellik değerleri aldı.

## Adımlar

1. Yeni sürümü açın, sonra {{ui:Model ekle…}} öğesine tıklayın ve eski sürümü seçin. Bkz. [Birden çok IFC modelini birlikte görün](topic:several-models).
2. {{ui:Modeller}} içinde {{ui:Sürümleri karşılaştır}} öğesini açın.
3. {{ui:Eski sürüm}} ve {{ui:Yeni sürüm}} seçin.
4. {{ui:Karşılaştır}} düğmesine tıklayın.
5. Bir listedeki öğeye tıklayarak onu seçin ve özelliklerini görün. Her değişiklik için, özellik özellik, {{ui:CSV indir}} düğmesine tıklayın.
6. Normal görünüme dönmek için {{ui:Temizle}} düğmesine tıklayın.

## Ne görmelisiniz

- **Eklenen** öğeler mavi, yeni sürümden.
- **Kaldırılan** öğeler kırmızı, eski sürümden.
- **Değişen** öğeler okr, yeni sürümden; her biri neyin değiştiğini söyler: özellikler, ne kadar taşındığı ya da yeni bir şekil.
- Aynı olan her şey saydam.

## Bilmeniz iyi olanlar

- Öğeler GlobalId'lerine göre eşleştirilir. Her dışa aktarımda öğelere yeni GlobalId veren bir program, her öğeyi kaldırılmış ve yeniden eklenmiş gibi gösterir.
- Konumlar, modellerin sahnede durduğu yerlerde karşılaştırılır. Bir sürüm bilerek taşındıysa, önce {{ui:Modeller}} içindeki {{ui:Taşı}} ile hizalayın.
- Bir modelde iki kez kullanılan bir GlobalId karşılaştırmanın dışında bırakılır. [Bir modeli yaygın sorunlar için denetleyin](topic:model-checks) bunları bulur.

## Sonraki

- [Sorunlar ve BCF dosyaları](topic:issues-bcf)
- [Özelliğe göre miktarları toplayın](topic:quantity-totals)
