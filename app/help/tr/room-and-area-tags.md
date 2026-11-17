---
title: Oda ve alan etiketleri
summary: Bir odaya ya da alana numarası, adı ve alanıyla bir etiket koyun. Etiket onu izler ve kağıttaki yüksekliğiyle boyutlandırılır.
keywords: etiket, oda etiketi, alan etiketi, odayı etiketle, alanı etiketle, tümünü etiketle, etiketsizleri tümünü etiketle, ad etiketi, kağıttaki metin yüksekliği, kağıt yüksekliği, açıklama
from: 67059d8a
---

## Neler yapacaksınız

Odaları ve alanları tek tek ya da hepsini birden etiketleyin; bir etiketi okunaklı olacağı yere taşıyın.

## Araçlar nerede

- Şerit düzenleri: {{ui:Mimari}} › **Oda ve Alan** › {{ui:Odayı Etiketle}} ve {{ui:Alanı Etiketle}}.
- Klasik düzen: Çizim çubuğu › {{ui:Odalar}} menüsü.
- Seçili bir oda ya da alan: Özellikler › {{ui:Etiket ekle}}.

## Adımlar

1. {{ui:Odayı Etiketle}}'yi seçin ve etiketin durması gereken bir odaya tıklayın.
2. Ya da satırdaki {{ui:Etiketsizleri tümünü etiketle}} düğmesine basın: bu katta etiketi olmayan her oda, ortasında bir etiket alır. Bu tek bir geri al adımıdır.
3. Bir etiketi taşımak için Seç ile seçip sürükleyin. Özellikler'de {{ui:Ortaya geri koy}} vardır.
4. {{ui:Alanı Etiketle}} alanlar için aynı şekilde çalışır.

## Etiket ne yapar

- Numarayı, adı ve alanı, görüntü biriminizde gösterir.
- Odasını izler: odayı yeniden adlandırın ya da bir duvarı taşıyın; etiketin sözcükleri ve yeri aynı adımda değişir.
- Kağıtta boyutlandırılır: {{ui:Kâğıttaki metin yüksekliği}} milimetre cinsindendir (başlangıç için 2.5). 1:50 görünüm ölçeğinde 2.5 mm'lik bir etiket modelde 125 mm yüksekliğindedir; 1:100'de 250 mm'dir.
- Etiketli bir oda, düz ad etiketi yerine etiketi gösterir.
- Odası ya da alanı yok olduğunda etiket de onunla gider. Geri al ikisini de geri getirir.

## IFC'de

Bir etiket, metin olarak yazısı ve adlandırdığı şeyin GlobalId'si ile birlikte bir IfcAnnotation'dır (ObjectType ROOMTAG ya da AREATAG). Dosyadaki metin alanı metrekare cinsinden verir.

## Henüz yapılmadı

- Kendi etiket şekilleriniz ve bir belirtme çizgisi.
- Kapılardaki, pencerelerdeki ve duvarlardaki etiketler ayrı bir araçtır (bkz. sayfaların etiket stilleri).

Ayrıca bkz. [Odalar ve oda ayırıcılar](topic:rooms-and-separators).
