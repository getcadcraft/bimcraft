---
title: Öğeleri kontrol edildi veya sahada doğrulandı olarak işaretleyin
summary: Bir PDF'den veya taramadan okunan bir öğe, siz kontrol edene kadar doğrulanmamıştır. Öğeleri kontrol edildi veya sahada doğrulandı (LOD 500) olarak işaretleyin; kimin, ne zaman ve nasıl ölçtüğünü de ekleyin ve hangisinin hangisi olduğunu gösteren bir as-built modeli teslim edin.
keywords: doğrulanmamış, doğrulanmış, kontrol edildi, sahada doğrulandı, as-built, lod 500, kapanış, teslim, sahada ölçüldü, şerit metre, lazer, tarama, ölçüm, mevcut bina, tadilat, kontrol edildi olarak işaretle, doğrulama, aşama 7
from: df35d908
---

## Ne yapacaksınız

Modelde birinin gerçekten neye baktığını takip edin. Bir öğenin üç işaretten biri veya hiçbiri olabilir:

- **Doğrulanmamış**: program bunu bir PDF'den, taranmış bir çizimden, izlenmiş bir çizimden veya bir nokta bulutu taramasından tanıdı. Henüz kimse kontrol etmedi.
- **Kontrol edildi**: bir kişi bunu geldiği çizimle karşılaştırdı.
- **Sahada doğrulandı (LOD 500)**: bir kişi bunu sahada ölçtü. Kim, ne zaman ve nasıl olduğu öğeyle birlikte saklanır.
- **İşaret yok**: bir kişi çizdi. Model bu konuda bir iddiada bulunmaz.

## Adımlar

1. Bir öğe veya birçok öğe seçin (duvarlar, kapılar, pencereler, odalar, her öğe).
2. {{ui:Properties}} içinde {{ui:Verification}} bölümünü açın.
3. Kimin kontrol ettiğini veya ölçtüğünü yazın. Tarih, değiştirmediğiniz sürece bugündür.
4. {{ui:Mark as checked}} düğmesine tıklayın. Bir saha ölçümü için nasıl ölçüldüğünü seçin (şerit metre, lazer mesafe ölçer, tarama, ölçüm) ve {{ui:Mark as field-verified (LOD 500)}} düğmesine tıklayın.
5. {{ui:Mark as unverified}} ve {{ui:Take the mark off}} geri alır. Her tıklama, tüm seçim için geri alabileceğiniz bir adımdır.

Bir seçimi hızlıca işaretlemek için: {{ui:Tools}} › {{ui:Mark as checked}} (yazarak: `MARKCHECKED`) seçimi bugün, sizin tarafınızdan kontrol edildi olarak işaretler.

## Ne görmelisiniz

- Planda, doğrulanmamış bir öğenin kesikli bir kutusu ve bir "?" vardır; sahada doğrulanmış olanın bir onay işareti vardır. Bu işaretleri gizlemek için **{{ui:Audit}}** bölümünde {{ui:Show verification marks in the plan}} seçeneğini kaldırın.
- {{ui:Schedules}} › {{ui:Verification}} her işaretli öğeyi, katı, durumu, kimi, ne zaman, nasıl ve nereden geldiğiyle listeler.
- Denetim doğrulanmamış öğeleri listeler ve sahada doğrulanmış bir öğeyi LOD 500 sayar. Bkz. [Modeli denetleyin](topic:audit-the-model).

## Bir taramadan

Taramayı modelle karşılaştırdığınızda, {{ui:Mark the matching elements as field-verified}} taramanın tolerans içinde inşa edilmiş gördüğü her öğeyi "tarama" yöntemi ve notta tolerans ile işaretler. Bkz. [Taramayı modelle karşılaştırın](topic:compare-scan-with-model).

:::warning
Bu karşılaştırma her öğenin kutusunu tarama noktalarıyla eşleştirir. Bu bir ölçüm değildir. Bunu yalnızca ayrıca baktığınız öğeler için kullanın.
:::

## As-built modeli ve teslim paketi

{{ui:Build the handover package}} ({{ui:Assets}} sekmesinde) as-built modelini zip dosyasına şunlarla birlikte koyar:

- projede, kaç öğenin sahada doğrulanmış, kontrol edilmiş, doğrulanmamış ve işaretsiz olduğuna dair bir açıklama;
- `as-built/verified-elements.csv`: her öğe ve oda, durumu, kim, ne zaman ve nasıl ile;
- `as-built/as-built-drawings.pdf`: çizim takımı şu anki hâliyle;
- model yayımlanmış takımlara sahipse çizim değişiklik günlüğü.

Bkz. [Varlıklar ve bakım](topic:assets-and-maintenance).

## IFC içinde nasıl tutulur

Her işaretli öğe `CadCraft_Verification` özellik kümesini taşır: State, By, On, Method, Source, Note ve LevelOfDevelopment (sahada doğrulanmışken `LOD 500`). Bunlar düz metin özelliklerdir; diğer programlar bunları listeler ve Bul, özelliğe göre renklendir ve etiket listeleri bunları kullanabilir. As-built açıklaması, projedeki `CadCraft_AsBuilt` özellik kümesidir. Kümesi olmayan bir öğe sahada ölçülmemiştir.

## Sonraki

- [Bir plan kümesinden duvarlar](topic:walls-from-plans)
- [Modeli denetleyin](topic:audit-the-model)
