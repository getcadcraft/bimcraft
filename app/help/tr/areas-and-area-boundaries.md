---
title: Alanlar ve alan sınırları
summary: Çizdiğiniz sınır çizgilerinin içinde ya da duvarlardan alarak brüt yapı alanını veya kiralanabilir alanı ölçün ve alanları bir listede gösterin.
keywords: alan, alanlar, alan sınırı, alan şeması, brüt yapı alanı, brüt kat alanı, GFA, kiralanabilir, alan planı, alan listesi, duvar seçme, kapalı değil
from: c79f96d2
---

## Ne yapacaksınız

Bir alan şemasının sınırlarını çizin, alanları bunların içine yerleştirin ve toplamları okuyun.

## Araçların yeri

- Şerit düzenleri: {{ui:Mimari}} › **Oda ve Alan** › {{ui:Alan}} ve {{ui:Alan Sınırı}}.
- Klasik düzen: Çiz çubuğu › {{ui:Odalar}} menüsü.

## Adımlar

1. {{ui:Alan Sınırı}} öğesini seçin. Satırda {{ui:Şema}} seçin: Brüt yapı ya da Kiralanabilir. Her şemanın kendi sınırları vardır.
2. Çizgilerin nasıl oluşturulacağını {{ui:Yöntem}} bölümünde seçin:
   - **Çiz**: nokta nokta tıklayın.
   - **Duvarları seçin: eksen çizgisi**: bir duvara tıklayın; eksen çizgisi bir sınır olur.
   - **Duvarları seçin: tıklanan yüz**: istediğiniz tarafta bir duvara tıklayın; o yüz sınır olur. Brüt yapı alanı için dış duvarların dış yüzüne tıklayın.
3. {{ui:Alan}} öğesini seçin. Aynı şemayı seçin, isterseniz bir ad, numara ya da tür yazın ve sınırların içine tıklayın.
4. Alan hemen ölçülür. Adını, numarasını ya da türünü Özellikler'de değiştirmek için seçin.

## Neyin neyi izlediği

- Bir duvar seçilerek oluşturulan sınır o duvarı izler: duvarı taşıyın, alan aynı adımda yeniden ölçülür.
- Çizdiğiniz bir sınır, çizdiğiniz yerde kalır.
- Bir köşede birleşen duvarların yüzleri orada da birleşir; böylece seçilen dört duvar boşluksuz bir alanı kapatır.
- Bir oda ya da alan aracı elinizdeyken alan sınırları planda görünür; böylece diğer zamanlarda plan karışmaz.

## Sınırlar kapanmazsa

Alan yine de yerleştirilir. **Kapalı değil** yazar ve sınırlar onu çevreleyene kadar hiçbir şey ölçmez. Bu bir öneridir: hiçbir şey reddedilmez.

## Liste

Sol panel › {{ui:Listeler}} › **Alanlar**: şema, numara, ad, tür, kat, alan ve çevre, toplamla birlikte. Bir satıra tıklamak alanı seçer. {{ui:CSV indir}} aynı tabloyu verir.

## IFC'de

Bir alan, gövdesi olmayan bir IfcSpace'tir: brüt yapı şeması için PredefinedType GFA, kiralanabilir için USERDEFINED ile ObjectType Rentable. GrossFloorArea ve GrossPerimeter taşır, net alan taşımaz; böylece bir odayla karıştırılmaz. Bir sınır bir IfcVirtualElement'tir.

## Henüz yapılmadı

- Kendi şemalarınız (yalnızca Brüt yapı ve Kiralanabilir).
- Alan türüne göre renk dolguları.
- Sınırı sizin yerinize yerleştiren kurallar, örneğin "cam hattına kadar".

Ayrıca bkz. [Odalar ve oda ayırıcıları](topic:rooms-and-separators), [Oda ve alan etiketleri](topic:room-and-area-tags).
