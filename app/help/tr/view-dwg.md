---
title: DWG veya DXF çizimini görüntüleyin
summary: Bir DWG veya DXF açın, model uzayında ve sayfalarda gezinin, koordinatları okuyun ve henüz çizilmemiş olanı görün.
keywords: dinamik bloklar, görünürlük durumları, dwg, dxf, cad, çizim, 2b, görüntüle, görüntüleyici, kaydır, yakınlaştır, model uzayı, kâğıt uzayı, düzen, koordinatlar, dwg aç
from: 4db3122a
---

## Ne yapacaksınız

Bir CAD çizimini açın, 3B veya 2B olarak görün, içinde gezinin, model uzayı ile sayfaları arasında geçiş yapın ve koordinatları okuyun. BimCraft DWG ve DXF çizimlerini gösterir; bunları düzenlemez veya kaydetmez. Birini değiştirmek için {{ui:Edit in CadCraft}} düğmesine tıklayın; çizim yeni bir sekmede CadCraft çizim uygulamasında açılır.

## Adımlar

1. {{ui:Choose a file}} düğmesine tıklayın veya çizimi sayfaya bırakın.
2. Bir `.dwg` veya `.dxf` dosyası seçin.
3. Durum satırı "Çizim okunuyor…" yazarken bekleyin. Büyük çizimler birkaç saniye sürer. Sonra okumanın ne kadar sürdüğünü, ilk resim çizilirken "çiziliyor…" ve bunun ne kadar sürdüğünü söyler.
4. Çizim 3B olarak açılır; büyük bir çizimi göstermenin en hızlı yoludur (bkz. [DWG veya DXF çizimini 3B'de görün](topic:dwg-in-3d)). Düz 2B görünüm için {{ui:Model}} düğmesine tıklayın. Çizimleri her zaman 2B açmak için {{ui:Settings}} › {{ui:BimCraft}} › **Çizimler şurada açılır** değerini {{ui:Model (2D)}} olarak ayarlayın. Model uzayında hiçbir şey olmayan bir çizim veya 3B gösteremeyen bir tarayıcı, 2B açılır.
5. Çizimin üstündeki sekmelere bakın: önce {{ui:Model}}, sonra çizimin kendi sırasında her sayfa için bir sekme.
6. Bir sayfa sekmesine tıklayarak o sayfayı görün: kâğıt, modelin görünüm pencereleri üzerinden gösterilmesiyle.
7. Model uzayına dönmek için {{ui:Model}} düğmesine tıklayın.
8. İşaretçiyi çizimin üzerinde gezdirin ve köşedeki X ve Y koordinatlarını okuyun.

## Ne görmelisiniz

- Pencereye sığdırılmış çizim. Renkler çizimi izler; beyaz çizgiler (renk 7) temanın mürekkep rengiyle çizilir, soluk renkler açık temada okunabilir kalsın diye koyulaştırılır.
- Soldaki {{ui:Drawing}} paneli: dosya, boyut, biçim (örneğin "AutoCAD 2018 (AC1032)"), birimler, varlık ve katman sayıları, sayfa sayısı ve varsa bağlı çizimler ile ekipmanlar.
- Soldaki {{ui:Layers}} listesi.
- Sağda: nasıl hareket edileceği, bağlı çizimler ve resimler ile **Henüz çizilmedi**.

## Gezinme

:::mouse
| Yapmak için | Bunu yapın |
|---|---|
| Kaydır | Herhangi bir fare düğmesiyle sürükleyin |
| Yakınlaştır | Tekerleği kaydırın; işaretçinin altındaki nokta yerinde kalır |
| Sığdır | Çift tıklayın, {{key:F}} tuşuna basın veya {{ui:Fit}} tıklayın |
:::

:::mac mouse
İzleme dörtgeninde iki parmakla kaydırma **yakınlaştırır**, kaydırmaz. Sıkıştırma da yakınlaştırır. Kaydırmak için tıklayıp sürükleyin.
:::

:::touch
Kaydırmak için tek parmakla sürükleyin. Çizimler için sıkıştırarak yakınlaştırma henüz yapılmadı: tüm sayfayı görmek için {{ui:Fit}} düğmesine dokunun ve yakınlaştırmak için fare veya izleme dörtgeni kullanın.
:::

## Dinamik bloklar

Dinamik blok, çizimin gösterdiği gibi çizilir: yerleştirilen her blok, çizimin kaydedildiği görünürlük durumuyla ("Plan" veya "Ön", "Tek göz" veya "Çift göz"). Sağda **Dinamik bloklar** model uzayına yerleştirilen her birini listeler: kaç tane yerleştirildiği, gösterdikleri durumlar ve bloğun sahip olduğu her durum. {{ui:3D}} içinde yerleştirilmiş bir bloğa tıklayarak Özellikler'de **Dinamik blok**, **Gösterilen durum** ve **Diğer durumlar** değerlerini görün. BimCraft durumları değiştirmez.

## Henüz çizilmedi

Bu sürümde bazı nesne türleri çizilmez. Bunlar sağda **Henüz çizilmedi** altında sayılır ("Çizimin bu parçaları şimdilik atlanır, tahmin edilmez."), böylece bir şeyin eksik olduğunu bilirsiniz. Çizgiler, çoklu çizgiler, yaylar, daireler, elipsler, splineler, taralamalar ve katı dolgular, metin ve çok satırlı metin, öznitelikli bloklar, ölçülendirmeler, belirtme çizgileri ve çoklu belirtme çizgileri, tablolar, resimler ile görünüm pencereleri çizilir. 3B yüzler, çokyüzlü ağlar ve çokgen ağlar üstten görülen kenarları olarak çizilir; bunları yüzey olarak görmek için {{ui:3D}} seçeneğine geçin.

İkili DXF açılmaz: BimCraft bunu söyler. Onu ASCII DXF veya DWG olarak, oluşturan programdan yeniden kaydedin.

## Sık yapılan hatalar

- **Çizim boş görünüyor.** Bazı katmanlar çizimin kendisinde kapalı veya dondurulmuş olabilir; {{ui:Layers}} içinde işaretlenmemiş başlarlar. {{ui:All on}} tıklayın. Durum "*name* boş bir çizim: içinde çizgi, metin veya blok yok." diyorsa, içinde hiçbir şey yoktur.
- **Bir sayfa boş bir çerçeve gösteriyor.** Sayfa bağlı çizimlere dayanıyor olabilir. Bkz. [Bağlı çizimleri ve resimleri bulun](topic:dwg-linked-files).
- **Metin biraz farklı görünüyor.** BimCraft metni çizimin kendi yazı tiplerinde değil, dar bir sans-serif yazı tipiyle çizer; bu yüzden metin, çizimi oluşturan programdakinden biraz geniş veya dar olabilir.
- **"*name* okunamadı. Hasarlı olabilir veya okuyucunun henüz işlemediği bir biçimde kaydedilmiş olabilir."** Sondaki parantez dosyanın biçim kodunu adlandırır. Onu oluşturan programdan eski bir DWG veya DXF olarak kaydedin ve yeniden deneyin.
- **Ölçmek, çizmek veya düzenlemek bekleniyor.** BimCraft çizimleri yalnızca görüntüler. Aynı dosyayı düzenlemek ve bir kopyasını DWG veya DXF olarak kaydetmek için {{ui:Edit in CadCraft}} tıklayarak CadCraft çizim uygulamasında açın. Özgün dosyanız değişmez ve bağlı çizimler BimCraft'ta kalır. Düğme yalnızca CadCraft'ın size açık olduğu yerlerde görünür.

## Sonraki

- [DWG veya DXF çizimini 3B'de görün](topic:dwg-in-3d)
- [Katmanlar ve sayfalarla çalışın](topic:dwg-layers-sheets)
- [Bir çizimi baskı görünümünde kontrol edin](topic:print-view)
