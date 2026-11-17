---
title: "Çakışmaları her disiplinin düzeltmeleriyle çözün"
summary: "Çakışma sonuçlarından, Düzeltme öner her çakışma için her disiplinin ne yapabileceğini listeler — bir kirişin altından dolaştırılan bir kanal, kenara alınan bir boru, taşınan bir kolon, bir kirişte açıklık — her biri modelin bir kopyası üzerinde ödünleşimleriyle denenir; siz kabul edin ya da reddedin. Kabul edilen düzeltmeler tek bir geri alma adımı olarak uygulanır."
keywords: çakışma, çakışma düzeltmesi, çakışmaları çöz, koordinasyon, düzeltme öner, rotayı değiştir, dolaştır, ofset, kanal, boru, kablo tavası, kiriş, kolon, açıklık, kılıf, ödünleşim, disiplin, taşıyıcı sistem, mekanik, tesisat, elektrik, mimari, asistan
from: f7bafdd9
---

## Ne yapacaksınız

Çakışma listesini kararlara dönüştürün. Her disiplin (taşıyıcı sistem, mekanik, tesisat, elektrik, mimari) yalnızca kendi öğeleri için düzeltme önerir, her öneri modelin bir kopyasında denetlenir ve siz seçersiniz.

## Adımlar

1. Önce çakışma denetimini çalıştırın. Bkz. [Çakışmaları denetle](topic:clash-check) ve [Boruları ve kanalları taşıyıcı sisteme karşı denetleyin](topic:mep-against-structure).
2. Sonuçların altında {{ui:Düzeltme öner}} düğmesine tıklayın. **Önerilen düzeltmeler** paneli modelin yanında açılır.
3. Her çakışma için her disiplinin önerilerini, en iyisi en üstte olacak şekilde görürsünüz. Her satır ne yaptığını ve ödünleşimlerini söyler: çakışmayı çözüp çözmediğini, kaç yeni çakışma yarattığını, hangi kuralları ihlal ettiğini, ne kadar güzergâh eklediğini ya da ne kadar yer değiştirdiğini, kaç bağlantı parçası gerektirdiğini ve bir maliyet puanını.
4. Öğeleri 3B'de görmek için {{ui:Göster}} düğmesine tıklayın. İstediğiniz düzeltmede {{ui:Kabul et}} (her çakışma için bir tane) ya da {{ui:Reddet}} düğmesine tıklayın.
5. Altta yer alan satır, kabul ettiğiniz tüm düzeltmelerin birlikte ne yaptığını söyler: kaç çakışmanın çözüldüğünü, kaçının kaldığını ve yeni bir çakışma olup olmadığını.
6. {{ui:Kabul edilen düzeltmeleri uygula (tek geri alma adımı)}} düğmesine tıklayın. Çakışma denetimi yeniden çalışır. {{ui:Geri al}}, hepsini bir kerede geri alır.

## Her disiplinin ne yapabileceği

- **Mekanik** (kanallar, ısıtma ve soğutma boruları): çarpan bağlantıda üstünden ya da altından dolaşma, bütün güzergâhı yukarı ya da aşağı kaldırma, yana taşıma, dikdörtgen bir kanalı aynı alanla daha yassı yapma.
- **Tesisat** (su, drenaj, gaz, yangın): aynı hareketler; ancak yerçekimli bir drenaj hiçbir zaman dolaştırılmaz; yalnızca bütün olarak, eğimini koruyarak taşınabilir.
- **Elektrik** (kablo tavaları ve kablo kanalları): aynı hareketler; bir kablo tavası, kablo döşemek için üstünde 150 mm boşluk bırakmalıdır.
- **Taşıyıcı sistem**: bir kolonu taşıyın (300 mm'ye kadar) ya da geçen güzergâh için bir kirişin gövdesinde ya da bir döşemede bir açıklık. Her yapısal düzeltme, taşıyıcı sistem mühendisi tarafından onaylanmalıdır.
- **Mimari**: geçen güzergâh için bir duvarda bir kılıf ya da yük taşımadığı bilinen bir duvarı taşıyın.

## Ne görmelisiniz

- Bir kuralı bozan düzeltmeler işaretlenir: başka bir şeye 25 mm boşluktan daha yakın, 2,100 mm'lik boş yükseklik çizgisinin altında, kirişin derinliğinin %40'ından büyük ya da uçlarına çok yakın bir gövde açıklığı, ya da açıklığı değişecek bir kiriş.
- BimCraft'ın yapabildiği düzeltmeler modele uygulanır: Boru ve Kanal araçlarıyla çizdiğiniz güzergâhlar ve çizdiğiniz kolonlar. Diğerlerinde **Yalnızca öneri** yazar: kabul etmek, bunun yerine Sorunlar sekmesinde bir sorun ekler.

## Bilmeniz iyi olacak noktalar

- Düzeltmeler uygulamanın yerleşik kurallarından gelir; bunlar için hiçbir yapay zekâ kullanılmaz.
- Bir asistan bağlarsanız (bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants)), çakışmaları okuyabilir ve açık panele tek bir disiplin için kendi önerilerini ekleyebilir. Bunlar aynı şekilde denetlenir, asistanın adıyla işaretlenir ve siz kabul edip uygulayana kadar hiçbir şey değişmez.
- Kopya, her öğenin ve güzergâhın her bacağının etrafındaki kutularla denetlenir; bu yüzden eğik bir güzergâh, çakışma denetiminin göstermeyeceği bir çakışma gösterebilir. Uyguladıktan sonra çakışma denetimini yeniden çalıştırın: son söz odur.
- Sınırlar (bir güzergâhın ne kadar hareket edebileceği, bir dolaşmanın ne kadar yükselebileceği, boşluk) panelde yazan varsayılanlardır.

## Sonraki

- [Sorunlar ve BCF dosyaları](topic:issues-bcf)
- [Boru ve kanal güzergâhları çizin](topic:pipes-and-ducts)
