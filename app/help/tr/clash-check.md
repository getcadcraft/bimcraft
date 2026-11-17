---
title: "Çakışmaları denetle"
summary: "Bir kümenin öğelerinin diğerine girdiği yerleri bulun — kanalların kirişlerden, duvarların döşemelerden geçtiği yerler — tek bir modelde ya da birkaçında, bir tolerans ile; ve bir çakışmayı bir soruna dönüştürün."
keywords: çakışma, çakışma tespiti, çakışma denetimi, sert çakışma, girişim, çarpışma, koordinasyon, örtüşme, tolerans, mep, yapı
from: 9cb12346
---

## Ne yapacaksınız

İki öğe kümesinin birbirine girdiği yerleri bulun; örneğin tesisat modelindeki her şeyi yapıya karşı, sonra her birine bakın ve önemli olanları sorun olarak tutun.

## Adımlar

1. Bir IFC modeli açın ve birden fazla model arasında denetliyorsanız diğerlerini {{ui:Model ekle…}} ile ekleyin. Bkz. [Birkaç IFC modelini birlikte görüntüleyin](topic:several-models).
2. Sol panelde {{ui:Çakışma denetimi}} bölümünü açın.
3. {{ui:Denetle}} ve {{ui:Karşısında}} alanlarında iki küme seçin: seçtiğiniz öğeler, bir sınıf (açık her modelin genelinde), kaydedilmiş bir arama kümesi (bkz. [Öğeleri sınıfa, ada ya da özelliğe göre bulun](topic:find)) ya da her şey.
4. Hangi örtüşmenin yok sayılacağını metre cinsinden ayarlayın. 0.01, yalnızca birbirine değen öğeleri yok sayar.
5. {{ui:Çalıştır}} düğmesine tıklayın. Denetim arka planda çalışır; {{ui:İptal}} onu durdurur.
6. Görmek için bir sonuca tıklayın: iki öğe seçilip gösterilir, diğer her şey geçirgen olur ve görünüm onlara yakınlaşır.
7. Bir sonucun altındaki {{ui:Bundan bir sorun oluştur}} düğmesine tıklayarak onu {{ui:Sorunlar}} sekmesinde yazın. Bkz. [Sorunlar ve BCF dosyaları](topic:issues-bcf).

## Ne görmelisiniz

- Çakışmalar, her iki öğenin adlarıyla (birkaç model açıksa dosyalarıyla) ve ne kadar derin örtüştükleriyle listelenir; en derin olan en üstte.
- Yalnızca değen yüzeyler, örneğin bir duvarın bir döşemenin üstünde durması ya da bir kapının açıklığında olması, çakışma değildir.

## Bilmeniz iyi olacak noktalar

- Bu, temel bir sert çakışma denetimidir: yüzeyleri kesişen öğeler. Bir öğenin tamamen başka bir öğenin içinde gizli olması (bir duvarın içine gömülü boru) henüz bulunmaz.
- Derinlik, iki öğenin sınırlarının en az ne kadar örtüştüğüdür; kesin bir ölçüm değil, bir rehberdir.

## Sonraki

- [3B'de mesafeleri, yüzey alanlarını ve konumları ölçün](topic:measure)
- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
