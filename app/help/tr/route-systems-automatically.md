---
title: Kanalları, tahliye hatlarını, su ve soğutucu akışkan borularını otomatik yönlendirin
summary: Çakışma kontrolünde BimCraft, açık model etrafında yol bulur; kanallar, yerçekimiyle tahliye, soğuk ve sıcak su ile bölünmüş ya da çoklu bölünmüş soğutucu akışkan boruları için hatları çizer ve hatları bağlantı parçalarıyla birlikte tek bir geri alma adımında çizer. Bu bir çizim yardımcısıdır: ölçüler, eğimler ve kontroller programdaki tablolardan ve sizin girdiğiniz sayılardan gelir; burada hiçbir şey bir tasarımın bir yönetmeliğe uyduğunu söylemez.
keywords: otomatik yönlendirme, autoroute, kanal yönlendir, boru yönlendir, drenaj, sıhhi tesisat, yerçekimi, dikey hat, havalandırma, sifon, su, sıcak su, dönüş döngüsü, sirkülasyon, soğutucu akışkan, bölünmüş, çoklu bölünmüş, VRF, eşdeğer uzunluk, dal kiti, yan te
from: 5841d513
---

## Ne yapacaksınız

BimCraft'ın, modelde zaten duran bağlantı noktaları arasında bir hat ağı kurmasına izin verin; hatlar duvarların ve kirişlerin etrafından dolaşsın, sonra bunu görebildiğiniz sayılarla kontrol edin.

## Adımlar

1. Modeli ve çakışma kontrolünü açın. **Kanalları otomatik yönlendir** altında bir klima santrali ve uç birimlerini seçin ya da **Diğer sistemleri otomatik yönlendir** altında bir sistem seçin.
2. **Yerçekimiyle sıhhi tahliye.** Tahliye çıkışının konumunu ve varsa dikey hat konumlarını yazın. Donanımı olan her katı almak için **Her katı tek seferde yönlendir** seçeneğini işaretleyin: her katın tahliyeleri kendi seviyesinde dikey hatla birleşir ve dikey hat, en yüksek musluğun üstünden tabanına kadar uzanır. {{ui:Yönlendir}} düğmesine basın.
3. **Sifondan havalandırmaya.** Panel, her sifondan havalandırmasına olan mesafeyi listeler. **Sifondan havalandırmaya en fazla** alanına yönetmeliğinizin izin verdiği en büyük değeri yazın; bunu aşan her tesisat donanımı, aşım miktarı milimetre cinsinden olmak üzere yapılmadı olarak listelenir. Tesisat donanımlarının kendi havalandırma çıkıntısı yoksa **Dikey hat üzerinden havalandır** seçeneğini işaretleyin: bu durumda mesafe dikey hatta göre ölçülür. BimCraft bunun için bir yönetmelik tablosu içermez: sayıyı siz yazarsınız.
4. **Soğuk ve sıcak su.** Kaynağı seçin, kaynaktaki basıncı ve bir tesisat donanımında ihtiyacınız olan basıncı yazın. **Sıcak su** seçeneğini işaretleyin, ısıtıcının sıcak bağlantısını seçin ve bir dönüş hattını ısıtıcının **sıcak dönüş** bağlantısında ya da seçtiğiniz başka bir bağlantıda bitirmek için **Dönüş döngüsü** seçeneğini işaretleyin (bu, sizin birleştirmeniz için 150 mm kısa ve açık biter).
5. **Bölünmüş, çoklu bölünmüş ve VRF.** Dış ünitesini seçin, iç üniteleri işaretleyin ve her birinin kapasitesini yazın. Sınırları üreticinizin verilerinden yazın. Bir dirseğin ve bir dal kitinin **eşdeğer uzunluğunu** (üreticinin değerleri) yazın; en uzun ve toplam uzunluklar eşdeğer uzunluklar üzerinden kontrol edilir.
6. {{ui:Yönlendir}} düğmesine basın. Panel kaç hat çizdiğini ve yapamadığı şeyleri nedenleriyle birlikte söyler. {{ui:Geri al}} her şeyi tek adımda geri alır.

## Ne görmelisiniz

Dirseklerle, te'lerle ve redüksiyonlarla borular; boyutu için en küçük eğimden az olmayan bir eğimle inen tahliyeler; tesisat donanımlarında havalandırma çıkıntıları; her köşede aynı yönde dönen sıvı ve gaz hatları çifti olarak soğutucu akışkan hatları, ana hattan bir dalın ayrıldığı yerde işaretli bir dal kiti ile.

## Bilmeniz iyi olanlar

- Bir tahliye başka bir tahliyeyle birleştiğinde model bir te çizer. Plan, bu yerleri 45 derecelik yan te birleşimleri olarak adlandırır; böylece bağlantı parçasını değiştirebilirsiniz.
- Sıcak su, tesisat donanımının ailesinde varsa kendi sıcak bağlantısını kullanır; yoksa soğuk bağlantının 100 mm yanındaki bir bağlantıyı kullanır.
- Soğutucu akışkan hatları her ünitenin iki portu arasından başlar. Bir ünitenin iki portu bir dirsek için çok yakınsa, çift aralarında ortalanmış kalır.
- Su ağı, hesaplamalarda gösterilen talep eğrisini ve sürtünme değerlerini kullanır; basınçlara güvenmeden önce bunları yönetmeliğinizinkilerle değiştirin.
- Büyük evler yarım dakika ya da daha fazla sürebilir; bunun çoğu sıcak su ağı içindir.
- Bu bir çizim yardımcısıdır. Yetkili bir kişi, boyutları, eğimleri, havalandırmaları ve basınçları geçerli yönetmeliğe göre kontrol eder.

## Sonraki

[Çakışmaları kontrol edin](topic:clash-check) · [Boruları ve kanalları yapıya göre kontrol edin](topic:mep-against-structure) · [Borularla ekipman arasındaki bağlantılar](topic:mep-connections)
