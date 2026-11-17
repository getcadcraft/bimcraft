---
title: Modeli yaygın sorunlara karşı denetleyin
summary: Gereken bir özelliği eksik olan öğeleri, iki kez kullanılan GlobalId'leri, hiçbir katta olmayan öğeleri ve üst üste yığılmış kopyaları bulun.
keywords: denetle, model denetimi, doğrulama, qa, kalite, eksik özellik, zorunlu, yinelenen, globalid, guid, kat, üst üste, çakışma
from: 4d835513
---

## Yapacaklarınız

Bir modeli başkasına vermeden önce gözden geçirin: listeleri, miktarları ve başkalarının yazılımlarını bozan sorunlara bakın.

## Adımlar

1. Bir IFC modeli açın.
2. Sol panelde {{ui:Model denetimleri}} bölümünü açın.
3. {{ui:Zorunlu özellikler}} altında bir kural zaten vardır (herhangi bir sınıf, Name). Sınıfını (ya da {{ui:Herhangi bir sınıf}}) ve özelliğini değiştirin ya da başka bir kural için {{ui:Özellik ekle}} düğmesine tıklayın; x işareti bir kuralı kaldırır. Bir öğe, özellik eksik ya da boş olduğunda kuralı geçemez. Kurallar, bu tarayıcıda her model için kalır.
4. {{ui:Denetimleri çalıştır}} düğmesine tıklayın.
5. Bir sonuca tıklayın; o öğeler seçilir ve onlara yakınlaştırılır.

## Görmeniz gerekenler

- **Zorunlu bir özellik eksik**: her kural için, bu özelliğin değeri olmayan öğeler.
- **GlobalId iki kez kullanılmış**: aynı GlobalId'yi paylaşan öğeler. Diğer yazılımlar bunları tek bir öğe olarak görür.
- **Hiçbir katta değil**: hiçbir katın içermediği bir şekle sahip öğeler.
- **Kopyalar üst üste**: aynı sınıf ve tipte, aynı yerde aynı şekle sahip öğeler; bunlar miktarlarda iki kez sayılır.

Sonuçlardaki her satır bir düğmedir: tıklayın, o öğeler seçilir ve onlara yakınlaştırılır. Bir denetimin yalnızca ilk 50 grubu listelenir. Aynı bulgular {{ui:Sorunlar}} panelinde de görünür.

## Bilmeniz iyi olacaklar

- Birden çok model açıkken denetimler etkin modeli inceler. Bkz. [Birden çok IFC modelini birlikte görüntüleme](topic:several-models).
- Bir düzenlemeden sonra denetimleri yeniden çalıştırın.
- {{ui:Sorunlar}} panelinde bir sorunun metnindeki uzunluklar, alanlar ve hacimler, araç çubuğunda seçilen {{ui:Birimler}} değerini izler ("800 mm" genişliğindeki bir kapı, feet ve inch biriminde 2'-7 1/2" olarak okunur); birimi değiştirirseniz panel bunları yeniden yazar.

## Sonraki adımlar

- [Modeli denetleyin: odalar, etiketler, LOD, çakışmalar ve arayüzler](topic:audit-the-model)
- [Öğeleri sınıfa, ada ya da özelliğe göre bulun](topic:find)
- [Öğeleri silin, kesin, kopyalayın ve yapıştırın](topic:copy-paste)
