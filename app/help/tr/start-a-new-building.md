---
title: Yeni bir yapıya başlayın
summary: Katlarıyla boş bir yapı modeli oluşturun, duvarlarını çizin, kütüphaneden öğeler yerleştirin ve IFC olarak kaydedin.
keywords: yeni, yeni yapı, boş, sıfırdan başla, şablon, katlar, döşemeler, oluştur, model
from: 546b8ae8
---

## Yapacağınız şey

Bir yapı modelini açmak yerine sıfırdan başlatın. BimCraft; bir proje, bir arsa, yapı ve katlarıyla boş bir IFC modeli oluşturur. Katlara kütüphaneden ekipman ve mobilya yerleştirebilir ve bunu bir IFC dosyası olarak kaydedebilirsiniz.

:::note
Duvarlar artık çizilebilir: bkz. [Duvar çizme](topic:draw-walls). Kapılar, pencereler, döşemeler ve çatılar sırada.
:::

## Adımlar

1. **Dosya veya klasör aç** altındaki ya da başlangıç sayfasındaki {{ui:Yeni yapı}} düğmesine tıklayın.
2. **Yapı adını** yazın.
3. Kaç **kat** olacağını seçin (1 ile 200 arası).
4. **Kat yüksekliğini** döşemeden döşemeye yazın: örneğin `10'-0"`, `10'6"` veya `3000 mm`. Düz bir sayı ABD'de fit, başka yerlerde milimetredir.
5. {{ui:Oluştur}} düğmesine tıklayın. Katlar 0'dan başlayarak üst üste dizilir, her biri bir öncekinin bir kat yüksekliği üzerindedir ve Kat 1, Kat 2 diye adlandırılır. Model ağacında görünürler ve Kat 1'in planı, {{ui:Çiz}} açık olarak 3B görünümün yanında açılır.
6. Duvarları çizin: bkz. [Duvar çizme](topic:draw-walls). Katları yeniden adlandırmak veya yüksekliklerini değiştirmek için **Katlar** panelini kullanın.
7. Öğeleri yerleştirin: bkz. [Kütüphaneden ekipman ve mobilya yerleştirme](topic:place-from-library). Yerleştirme çubuğu her katı listeler.
8. {{ui:IFC olarak farklı kaydet}} düğmesine tıklayın. Dosya yapının adını alır; örneğin `Smith's house.ifc`.

## Bilmeniz yararlı olanlar

- Model milimetre cinsinden, IFC4 olarak kaydedilir. Diğer BIM programları onu açar.
- Soldaki panelde **Katlar** yalnızca üzerinde bir şey olan katları listeler; model ağacı hepsini listeler.
- Kaydedene kadar yeni yapı kaydedilmemiş çalışma sayılır. BimCraft başka bir dosya açmadan veya çıkmadan önce sorar ve sekme kapanırsa diye bu tarayıcıda bir kopya tutar.
