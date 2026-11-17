---
title: Bir öğeyi PartCraft'a gönderin ve geri getirin
summary: Bir destek, braket, korkuluk ya da ekipman seçin, çevresindeki yapıyla birlikte PartCraft'ta bir parça olarak tasarlayın ve yeni şekli modele geri kabul edin.
keywords: partcraft, parça, gönder, bağlantı, öğe, destek, braket, çit, korkuluk, ekipman, tasarım, gidiş dönüş, kabul et, değiştirildi, parça bağlantıları
from: 4ce2f449
---

## Yapacaklarınız

Binanın bir öğesini parça olarak tasarlayın: PartCraft'a gönderin, orada değiştirin (kesin, ekleyin, delin, yeniden boyutlandırın) ve yeni şekli modele geri getirin.

## Adımlar

1. Modelde bir öğe seçin: genel bir öğe, ekipman, kolon, kiriş, korkuluk ya da mobilya.
2. Araç çubuğunda {{ui:Parça bağlantıları}} seçin, ardından {{ui:PartCraft'a gönder}}. PartCraft, öğeyi bir parça olarak yeni bir sekmede açar. 3 m içindeki öğeler yanında gri çizilir; böylece parçayı yerinde tasarlayabilirsiniz. Bu öğeler orada değiştirilemez.
3. PartCraft'ta parçayı değiştirin. PartCraft'ta {{ui:Dosya}} › {{ui:Dışa aktar}} › BimCraft'a geri kaydet seçin. İstediğiniz kadar geri kaydedebilirsiniz.
4. BimCraft'a döndüğünüzde {{ui:Parça bağlantıları}} düğmesi bir sayı gösterir; kart öğeyi {{ui:PartCraft'ta değiştirildi}} olarak listeler ve boyut ile hacim değişikliğini sözcüklerle belirtir.
5. Göstermek için {{ui:Göster}} seçin, sonra öğeye yeni şekli vermek için {{ui:Kabul et}} ya da olduğu gibi bırakmak için {{ui:Bende kalsın}} seçin.

## Görmeniz gerekenler

- Kabul etmek tek bir geri alma adımıdır. Öğe yerini, GlobalId'sini, tipini, malzemesini ve özelliklerini korur. Yalnızca gövdesi değiştirilir.
- Öğe, bağlantısı, durumu ve revizyonu ile birlikte {{ui:CadCraft_PartLink}} özellik kümesini alır.
- {{ui:Yeniden gönder}} aynı öğeyi, aynı bağlantıyla PartCraft'ta yeniden açar.

## Bilmeniz iyi olacaklar

- Duvarlar, döşemeler, çatılar, kapılar, pencereler, merdivenler, rampalar ve mekânlar, yapı araçlarıyla bir hat çizimden çizilir ve her değişiklikten sonra yeniden oluşturulur. Başka bir uygulamadan gelen bir gövde bunların üzerine yazılır; bu yüzden bu öğeler nedeni belirtilerek reddedilir.
- Şekil, parçanın özellikleri olarak değil, bir ağ (IFC tessellation) olarak geri gelir. Parçanın geçmişi PartCraft'ta kalır.
- Öğe, gönderdikten sonra modelde değiştiyse, kart kabul etmeden önce bunu söyler: kabul etmek bu değişikliklerin yerini alır.
- Hiçbir şey yüklenmez. İki uygulama tek bir sitenin sayfalarıdır ve öğeyi bu tarayıcıda birbirine aktarır. İkisi de aynı tarayıcıda açık olmalıdır.
- Öğe, PartCraft'ta katı bir gövdeye kapanmalıdır. Şeklinde büyük açık boşluklar olan öğe, açık kenar sayısıyla birlikte orada reddedilir.
- Kabul etmek için öğeyi içeren modeli etkin model yapın.
