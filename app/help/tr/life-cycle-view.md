---
title: Elli yıl içinde neyin eskidiğine bakın
summary: Modelin tuttuğu pencereler, kapılar, yüzey kaplamaları ve çatı, bunların kullanım ömürleri, her birinin değiştirildiği yıllar ve birim başına bir maliyet girdiğinizde yıla göre maliyet ile bugünkü değeri.
keywords: yaşam döngüsü, yaşamdöngüsü, kullanım ömrü, değişim, bakım, maliyet, bugünkü değer, iskonto, enflasyon, 50 yıl, pencereler, boya, çatı, yüzey kaplamaları, tüm yaşam
from: 1b849545
---

Sol paneldeki {{ui:Yaşam döngüsü görünümü}} bölümü, çalışma süresi boyunca (başlangıçta 50 yıl) modelin içerdiği ve eskiyen şeyleri ve ne zaman değiştirildiklerini listeler. Modelde hiçbir şey değiştirilmez.

## Okuyun

Her parça miktarını gösterir (modelden ölçülen: pencere alanı, dış ve iç kapılar, dış duvar kaplaması, iç mekân boyası, döşeme ve tavan kaplaması, çatının izdüşüm alanı, merdivenler), **kullanım ömrü (yıl olarak)** ve **birim başına maliyet**. Bir parça, ömründe, ömrünün iki katında vb. değiştirilir; bu, çalışma süresinin sonundan önceyse geçerli. Böylece 50 yıllık bir çalışmada 30 yıllık bir pencere bir kez, 30. yılda değiştirilir. Kullanım ömürleri tipik planlama rakamlarıdır: bunları kendi ürünlerinize ve iklim koşullarınıza göre değiştirin. Varsayılan bir maliyet yoktur; yıllara göre parayı, toplamı ve bugünkü değerini görmek için bir maliyet girin. İsterseniz bir iskonto oranı ve bir enflasyon oranı ekleyin.

{{ui:Listeyi kaydet (CSV)}} bileşenleri ve yılları yazar. Borular, kanallar, kablolama ve ekipmanlar da listelenir (aşağıya bakın).

## Borular, kanallar, kablolama ve ekipman

- **Borular ve kanallar**, çizilmiş her güzergâhın metre cinsinden uzunluğudur. **Ekipman** (pompalar, fanlar, vanalar, terminaller, armatürler, prizler, anahtarlar, panolar ve Varlıklar sekmesinin izlediği diğer öğeler) türüne göre sayılır; her tür bir planlama ömrüne sahiptir. Varlıklar sekmesinde kendi *kullanım ömrü* ayarlanmış bir öğe, o ömrüyle kendi satırını alır; kurulum tarihi varsa yaşıyla başlar: 16 yaşındaki ve 10 yıllık ömrü olan bir pompa şimdi değiştirilmelidir, ardından her on yılda bir.
- **Kablolama** bir **tahmindir**: her devrenin cihazları boyunca, panodan en yakından başlayarak planda ölçülen mesafe, güzergâh için 1,25 ile çarpılır. Model kablo çizmez; bunu kendi metrajınızla karşılaştırın.
- Ömürler gözden geçirilecek planlama rakamlarıdır, bir kaynak değildir.

## Değişim başına karbon

{{ui:Her değişimin gömülü karbonunu dahil et}} kutusunu işaretleyin. Yeni bir pencere, kapı, merdiven, çatı, boru veya ekipman parçası, modelin o türdeki kendi öğelerinin taşıdığı karbonla sayılır (Karbon sekmesinin birim başına faktörleri). Öğesi ya da faktörü olmayan bir parça, örneğin boya, kaplamalar ve kablolama, bir çizgi (-) gösterir ve listelenir. Eski parçanın ömür sonu ve onu değiştirme işi sayılmaz.
