---
title: Model ağacıyla yolunuzu bulun
summary: "IFC modelini proje, arsa, yapı, kat ve mekân düzeyinde gezin; öğeler türlerine göre gruplanmış olarak. Göstermek ve gizlemek için kutuları işaretleyin, seçmek için bir satıra tıklayın, yakınlaştırmak için çift tıklayın."
keywords: model ağacı, ağaç, yapı, mekânsal yapı, tarayıcı, ana hat, gezgin, kat, seviye, döşeme, mekân, oda, grup, sınıf, gizle, göster, seç, yakınlaştır
from: 69de4ab7
---

## Ne yapacaksınız

Bir modelin nasıl kurulduğunu görün ve 3B'de aramadan herhangi bir öğeye ulaşın: yapı, katları, her kattaki mekânlar ve bunların içindeki öğeler; türlerine göre (duvarlar, kapılar, döşemeler…) gruplanmış.

## Adımlar

1. Bir IFC modeli açın. Soldaki {{ui:Model ağacı}} katlara kadar açılır.
2. Bir satırın yanındaki oka tıklayarak açın ya da kapatın. Bir kat önce mekânlarını, sonra öğelerini türlerine göre ve sayılarıyla tutar. Parçalardan oluşan bir öğe, örneğin bir merdiven, kendi parçalarını tutar.
3. Bir satırın kutusunu kaldırarak içindeki her şeyi gizleyin; yeniden göstermek için işaretleyin. Kutuda tire işareti varsa, içindekilerin yalnızca bir kısmı gösteriliyor demektir.
4. Bir satırın adına tıklayarak temsil ettiği şeyi seçin: tek bir öğe ya da bir gruptaki, kattaki ya da mekândaki her öğe. {{key:Mod}}+tıklama, seçime ekler ya da seçimden çıkarır.
5. Bir kat, mekân ya da yapının yanındaki {{ui:i}} düğmesine tıklayarak kendi özelliklerini görün.
6. Bir satıra çift tıklayarak ona yakınlaştırın.

## Ne görmelisiniz

- 3B görünümde bir öğe seçtiğinizde ağaç ona kadar açılır ve onu işaretler.
- Gizli öğelerin üzeri çizilidir. Ağacın kutuları ve {{ui:Göster}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) birlikte çalışır: bkz. [Öğeleri gizleme, izole etme ve geçirgen görme](topic:hide-and-isolate).
- Hiçbir kata yerleştirilmemiş öğeler, sonda **Mekânsal yapıda değil** adlı bir grupta bulunur.
- Uzun bir grup seferde 200 satır gösterir; devamı için altındaki **Daha fazla göster**'e tıklayın.

## Tuşlar

Bir satırın adı odaktayken: {{key:Up}} ve {{key:Down}} hareket ettirir, {{key:Right}} açar, {{key:Left}} kapatır ya da bir üst düzeye çıkar, {{key:Space}} kutuyu işaretler, {{key:Enter}} seçer.

## Sık yapılan hatalar

- **Bir katın kutusu işaretli ama hiçbir şey görünmüyor.** Ağacın altındaki {{ui:Katlar}} listesi bütün katları kendiliğinden kapatır: orada da işaretleyin.
- **Bir satır hiçbir şey seçmiyor.** Boş bir mekân gibi bazı satırların çizilebilir öğesi yoktur; durum satırı bunu söyler.

## Sonraki

- [Yapı öğelerini silme, kesme, kopyalama ve yapıştırma](topic:edit-elements)
- [Katları, mekânları ve kenarları gösterme ve gizleme](topic:storeys-and-spaces)
