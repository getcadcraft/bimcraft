---
title: Kütüphane öğelerini kopyalayın, yapıştırın ve çoğaltın
summary: Yerleştirilmiş bir kütüphane öğesini kopyalayın ve tıkladığınız yere, orijinalin hemen yanına ya da başka bir modele yapıştırın; diğer öğelerin özelliklerini metin olarak kopyalayın; geri alın ve yineleyin.
keywords: kopyala, yapıştır, çoğalt, pano, olduğu yere yapıştır, kes, sil, tümünü seç, geri al, yinele, düzenle menüsü, daha fazla, kütüphane öğesi, yerleştirme, tekrar, dizi
from: 6ac15931
---

## Ne yapacaksınız

Zaten yerleştirdiğiniz bir öğenin daha fazla kopyasını koyun: ikinci bir çalışma masası, bir sıra lavabo gibi. Bu konu **yerleştirilmiş kütüphane öğeleri** hakkındadır; yani BimCraft'ın modele yazdığı öğeler. Bunlardan biri, başka bir sekmedeki herhangi bir modele de yapıştırılabilir. Duvarlar, kapılar ve diğer tüm öğeler kendi modelleri içinde aynı şekilde kopyalanır, kesilir, yapıştırılır ve silinir: bkz. [Yapı öğelerini silin, kesin, kopyalayın ve yapıştırın](topic:edit-elements).

Komutlar modelin üstündeki araç çubuğundadır: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} ve {{ui:More}}; {{ui:More}} menüsünde {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} ve {{ui:Select none}} bulunur. Şu anda işe yaramayan bir komut soluk görünür; üzerine gelerek nedenini okuyun ya da tıklayın, durum satırı nedenini söyler.

## Adımlar

1. Kütüphane öğesi içeren bir IFC modeli açın ya da önce bir öğe yerleştirin. Bkz. [Kütüphaneden ekipman ve mobilya yerleştirin](topic:place-from-library).
2. Öğeye 3B görünümde tıklayın. Özellikleri bir **Kütüphane öğesi** kutusu gösterir.
3. {{ui:Copy}} düğmesine tıklayın ya da {{key:Mod+C}} tuşlarına basın.
4. {{ui:Paste}} düğmesine tıklayın ya da {{key:Mod+V}} tuşlarına basın. Yerleştirme çubuğu açılır ve işaretçiyi, orijinal gibi döndürülmüş saydam bir kutu izler.
5. Kopyayı 90° döndürmek için {{key:R}}, arkasını bir duvara oturtmak için {{key:Tab}} tuşuna basın ya da yerleştirme çubuğuna X ve Y değerlerini yazın.
6. Kopyanın gideceği yere tıklayın. Her tıklama yeni bir kopya yerleştirir; durdurmak için {{key:Esc}} tuşuna basın.
7. Düzenlenmiş modelin kopyasını indirmek için {{ui:Save as IFC}} düğmesine tıklayın.

## Olduğu yere yapıştırın

{{ui:More}}, {{ui:Paste in place}} ya da {{key:Mod+Shift+V}} hiç tıklamadan, aynı X ve Y değerlerinde ve aynı yönde yapıştırır:

- **Aynı modelde, aynı katta**: Tam aynı noktada iki öğe işe yaramaz; bu yüzden kopya, orijinalin hemen yanına gider: öğenin kendi genişliği artı kendi genişliği boyunca 100 mm. Bir sıra oluşturmak için, yeni kopyadan tekrar olduğu yere yapıştırın.
- **Başka bir kata ya da başka bir modele**: Tam olarak aynı X, Y ve dönüş. BimCraft aynı adlı katı kullanır; böyle bir kat yoksa en yakın yükseklikteki kat seçilir. Durum satırı hangisinin seçildiğini söyler.

## Çoğaltın

{{ui:More}}, {{ui:Duplicate}} ya da {{key:Mod+D}} seçilen öğeyi kopyalar ve hemen yapıştırmaya başlar: iki adım yerine tek adım.

## Başka bir modele ya da başka bir sekmeye

Kopyaladığınız şey bu tarayıcıda saklanır; böylece başka bir IFC modelini ya da başka bir sekmedeki BimCraft'ı açıp orada yapıştırabilirsiniz. Diğer modelin kütüphane öğesinin kendisine ihtiyacı vardır: BimCraft onu, öğe bu sekmede yerleştirildiğinde, değiştirildiğinde ya da güncellendiğinde bilir. Önceki bir oturumda yerleştirilmiş bir öğe, yalnızca kendi modelinde yeniden yapıştırılabilir; başka bir modelde onu {{ui:Library}} sekmesinden yerleştirin.

## Ne görmelisiniz

- Modelde kopya, seçili olarak; orijinaliyle aynı kütüphane öğesi, lisans, ekipman verisi, miktar ve notla birlikte, ve **bir sonraki boş öğe numarası** ile. Numarayı Özellikler'de, `CadCraft_Placement` altında değiştirin.
- Değişiklik listesinde "Yerleştirildi: *öğe* (öğe *n*)". {{key:Mod+Z}} bunu geri alır; {{key:Mod+Y}} yeniden yerleştirir.

## Bilmeniz gerekenler

- Kopyalar orijinalin türünü paylaşır; bu yüzden hepsi tek bir geometri kümesini kullanır, aynı öğeyi iki kez yerleştirdiğinizde olduğu gibi.
- {{ui:Undo}} ve {{ui:Redo}} her değişikliği kapsar: düzenlediğiniz değerler, yerleştirmeler, yapıştırmalar, değiştirmeler ve güncellemeler. Yineleme bir yerleştirmeyi aynı yere geri koyar; yeni bir değişiklik, yinelenebilecek olanları temizler.
- Bir çizimin 2B görünümünde seçilecek bir şey yoktur, dolayısıyla kopyalanacak bir şey de yoktur. Çizimi değiştirmek için, görünüyorsa {{ui:Edit in CadCraft}} kullanın.

## Sık yapılan hatalar

- **{{ui:Paste}} öğelerin başka bir modelden geldiğini söyler.** En son kopyaladığınız şey bir yapı öğesi ya da birkaç öğeydi: bunlar yalnızca kendi modellerine yapıştırılır. Yerleştirilmiş tek bir kütüphane öğesi seçip kopyalayın.
- **{{ui:Paste}} kopyanın kütüphane öğesi olmadan başka bir modelden geldiğini söyler.** Öğeyi bu sekmede bir kez {{ui:Library}} sekmesinden yerleştirin, sonra kopyalayıp yapıştırın.
- **{{key:Mod+C}} bunun yerine sayfa metnini kopyalar.** Sayfada metin seçiliydi. Önce modele tıklayın.

## İlgili

- [Tuşlar ve fare](topic:keyboard#edit)
- [BimCraft ayarları](topic:settings)
