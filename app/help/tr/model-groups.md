---
title: Model grupları
summary: Seçilen öğeleri adlandırılmış tek bir grup yapın, grubu başka yere yeniden yerleştirin ve bir kopyayı değiştirerek hepsini değiştirin.
keywords: grup, model grubu, gruplama, grubu çöz, örnek, kopya, tekrar, tipik birim, açıklık, daire, grubu düzenle, IfcGroup
from: 121c5027
---

## Ne yapacaksınız

Tipik bir açıklığı gruplayın, birkaç kez yerleştirin ve bir kopyayı değiştirerek her kopyayı değiştirin.

## Aracın yeri

- Şerit düzenleri: {{ui:Mimari}} › **Model** › {{ui:Model Grubu}}.
- Klasik düzen: Çiz çubuğu › {{ui:Odalar}} menüsü › Model Grubu.

## Adımlar

1. Seç aracıyla öğeleri seçin: birine tıklayın, diğerleri için {{key:Ctrl}}+tıklama ya da {{key:Shift}}+tıklama yapın.
2. {{ui:Model Grubu}} öğesini seçin. Öğeler hemen bir grup olur. Önce satıra bir {{ui:Grup adı}} yazarak adlandırın ya da sonra yazarak yeniden adlandırın.
3. {{ui:Bir tane daha yerleştir}} düğmesine basın ve kopyanın duracağı yere tıklayın: kopyanın sol alt köşesi tıklanan noktaya gider.
4. Herhangi bir kopyayı değiştirin: bir duvar ucunu taşıyın, bir kapıyı yeniden boyutlandırın, bir kolonu silin. Grubun diğer her kopyası aynı adımda değişir ve tek bir geri al işlemi hepsini geri alır.
5. Model Grubu elinizdeyken bir öğeye tıklamak, o öğenin bütün grubunu seçer.

## Diğer yapabilecekleriniz

- {{ui:Seçileni ekle}}: son seçtiğiniz gruba daha fazla öğe ekler.
- {{ui:Grubu çöz}}: bu kopya yeniden sıradan öğeler olur. Diğer kopyalar grup olarak kalır.
- Bir kopyanın tamamını {{ui:Taşı}} ile taşıyın: bu, aynı grubun yeni bir yerdeki hâlidir; diğerleri taşınmaz.
- Bir kopyanın öğelerini silerseniz o kopya ortadan kalkar.

## Bir grupta ne olabilir

Kapı ve pencereleriyle duvarlar, kolonlar ve çizilmiş döşemeler yeniden yerleştirilip aynı tutulabilir. Bir grupta başka öğeler de olabilir; ancak o zaman grup yeniden yerleştirilemez, satır nedenini söyler.

Kopyalar döndürülmez ya da aynalanmaz; yalnızca taşınır.

## IFC'de

Bir grup, üyelerine bir IfcRelAssignsToGroup ile bağlı bir IfcGroup'tur; üyeler sıradan duvar, kolon ve döşeme olarak kalır. Bir grubun her kopyası aynı tanım kimliğini taşır.

## Henüz yapılmadı

- Bir kopyayı döndürmek ya da aynalamak.
- Yeniden yerleştirilen bir grupta merdivenler, çatılar, oda döşemeleri ve kütüphane öğeleri.
- Bir duvarın profili, eğimi ve duvar açıklıkları kopyalara taşınmaz.
- Gruplar içinde gruplar.

Ayrıca bkz. [Taşıma, hizalama ve dağıtma](topic:move-align-distribute).
