---
title: Taramayı modelle ve 4B takvimiyle karşılaştırın
summary: Açık bir nokta bulutundaki her model öğesini (yapılmış, kısmen yapılmış, eksik, ulaşılmamış) yargılayın, yapılma yüzdesini görün, modeli buna göre renklendirin ve bir 4B takvimi yüklüyse 4B gününde programın gerisinde ya da önünde kalanları listeleyin.
keywords: tarama, nokta bulutu, ilerleme, tamamlanma yüzdesi, yapılmış, eksik, programın gerisinde, programın önünde, 4B, saha ilerlemesi, sapma, yapım sonrası, lazer tarama, dron, karşılaştır
from: 6fdc9003
---

Bir IFC açın, yanına bir nokta bulutu açın (bkz. [Nokta bulutları](topic:point-clouds)) ve modelin üstüne yerleştirin. Bir bulut açıkken sağ panelde {{ui:Taramayı modelle karşılaştır}} bölümü görünür.

## Ne yapar

{{ui:Karşılaştır}} düğmesine basın. Modelin her öğesi yüzeyine göre yargılanır, çünkü tarayıcının gördüğü budur. Kutusunun altı yüzü yaklaşık 20 cm'lik hücrelere bölünür; bir tarama noktası, yüzün {{ui:Tolerans}} içinde (başlangıçta 50 mm) kalırsa hücre sayılır. En iyi büyük yüz sayılır; böylece bir duvarın yalnızca bir tarafının taranması, diğer tarafı yüzünden eksik sayılmaz.

- **Yapılmış**: yüzeyin en az 40 %'i görülür.
- **Kısmen**: %10 ile %40 arası.
- **Eksik**: bundan az, ama tarama öğeye ulaşır (öğeden 1.5 m içinde noktalar var).
- **Ulaşılmadı**: tarama oraya hiç gitmedi, bu yüzden hakkında bir şey söylenmez.

Yapılmış ve kısmen yapılmış öğeler için ayrıca tarama noktalarının modelin yüzeyinden ortalama sapmasını verir ve öğenin yerinde (tolerans içinde), yakın (üç katı içinde) ya da yerinde değil (daha uzakta) olup olmadığını söyler. Yalnızca toleransın beş katına kadar sapmaları görür: yerinden bundan daha uzağa inşa edilmiş bir öğe eksik gibi okunur.

Özet, tarama ulaşan öğeler arasındaki yapılma yüzdesini sayıya ve hacme göre verir. Kısmen yapılmış öğeler ayrı sayılır ve yapılmışlara eklenmez.

## 4B takvimiyle karşılaştırma

Bir 4B takvimi yüklüyken (bkz. [4B takvimi](topic:4d-schedule)), sonuç ayrıca 4B kaydırıcısında belirlediğiniz günü kullanır: o güne kadar yapılması gereken ama tarama tarafından yapılmış olarak görülmeyen öğeler **programın gerisinde**; henüz yapılması gerekmeyen ama yapılmış olan öğeler **programın önünde** sayılır. Programın gerisindeki öğeler {{ui:Sorunlar}} içinde listelenir ve tablo yalnızca bunlara göre filtrelenebilir. Takvim yoksa, gerideki ya da önde olan öğeler hakkında hiçbir şey söylenmez.

## Tablo ve model

Bir satıra tıklayarak öğeyi seçin. {{ui:Modeli renklendir}} öğeleri yeşil (yapılmış), turuncu (kısmen), kırmızı (eksik) ya da gri (ulaşılmadı) boyar; {{ui:Kendi renkleri}} onları geri koyar. {{ui:CSV olarak kaydet}} tabloyu yazar. {{ui:Eşleşen öğeleri saha doğrulanmış olarak işaretle}}, tolerans içinde yapılmış olarak görülen her öğeyi saha doğrulanmış (LOD 500, yöntem tarama) olarak işaretler; bu, tek adımda yapılır ve geri alınabilir. Bkz. [Öğeleri kontrol edildi ya da saha doğrulanmış olarak işaretleyin](topic:verification).

:::warning
Bu, her öğenin kutusunu bir tolerans içindeki tarama noktalarıyla karşılaştırır. Bu bir **ölçü, metraj ya da hakediş dayanağı değildir**. Taranmış bir öğenin arkasında gizli kalan bir öğe (kaplamanın arkasındaki duvar, döşeme kaplamasının altındaki döşeme) aynı yüzeyi paylaşır ve yapılmış gibi okunabilir; eğri ya da eğimli bir öğenin kutusu gövdesinden büyüktür ve kısmen ya da eksik gibi okunabilir. Harekete geçmeden önce listeye bakın. İzin yorumları ve ilerleme notları bunun bir parçası değildir: onları tuttuğunuz sütunlarda kalırlar.
:::

Bir asistan aynı karşılaştırmayı {{ui:Taramayı modelle karşılaştır}} aracıyla çalıştırabilir; modelde hiçbir şeyi değiştirmez.
