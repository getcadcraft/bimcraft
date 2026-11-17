---
title: İki BIM programı arasında çalışma
summary: IFC üzerinden, BimCraft ortada olacak şekilde, bir modeli bir BIM programından diğerine gönderin; GlobalId'lerini, özellik kümelerini ve sınıflandırmalarını koruyun, iki programı da aynı özellikler için ayarlayın ve geri gelenleri görün.
keywords: ifc, gidiş-dönüş, birlikte çalışabilirlik, globalid, guid, özellik kümeleri, psets, sınıflandırmalar, paylaşılan parametreler, özellik eşleme, çevirmen, bcf, koordinasyon, değişim
from: 9f224176
---

## Ne yapacaksınız

Bir modeli iki BIM programı arasında taşıyın, örneğin Revit'ten Archicad'e ve geri, IFC üzerinden; BimCraft ortada kontrol eder, ekleme yapar ve neyin sağ kaldığını raporlar. Hiçbir programın kendi dosya biçimi okunmaz; her şey IFC olarak taşınır.

## BimCraft neyi korur

BimCraft'ta bir modeli değiştirip {{ui:IFC olarak farklı kaydet}} düğmesine tıkladığınızda, değiştirmediğiniz her satır olduğu gibi geri yazılır. Yani:

- **GlobalId'ler** aynı kalır ve diğer program her öğeyi gönderdiği öğeyle eşleştirebilir.
- **Özellik kümeleri** ve değerleri kalır; sizin değiştirdiğiniz değerler hariç.
- **Sınıflandırmalar** öğelerine bağlı kalır.

## İki programı da aynı özellikler için ayarlayın

1. Modeli BimCraft'ta açın (ve bir proje paketiniz varsa onu da: özellik grupları eklenir).
2. Sol panelde {{ui:İki BIM programı arasında}} bölümünü açın.
3. **Özellik eşlemesi** altında, her programın ihtiyaç duyduğunu indirin:
   - {{ui:Paylaşılan parametreler}}: bir paylaşılan parametre dosyası. Revit'te Manage › Shared Parameters ile yükleyin ve parametreleri onları gereken kategorilere ekleyin.
   - {{ui:IFC dışa aktarma özellik kümeleri}}: kullanıcı tanımlı bir özellik kümesi dosyası. Revit'in IFC dışa aktarma ayarlarında, kullanıcı tanımlı özellik kümeleri altında onu seçin; böylece dışa aktarılan IFC aynı küme ve özellik adlarını taşır.
   - {{ui:Eşleme tablosu (CSV)}}: her özellik, IFC kümesi ve adıyla, türüyle ve her programdaki karşılık gelen adlarla. Archicad'in eşleme dosyaları yayımlanmış bir biçim değildir, bu yüzden IFC çevirmenini ve özellik yöneticisini bu tablodan elle kurun.
   - {{ui:Eşleme dosyası}}: tüm eşleme tek bir dosya olarak, projeyle birlikte saklamak için.

Standart kümeler (Pset_ ve Qto_) paylaşılan parametre dosyasından çıkarılır: her iki program da bunları kendi verilerinden yazar.

## Modeli gönderin ve geri getirin

1. İlk programdan, GlobalId'ler korunarak IFC dışa aktarın (Revit: "Store the IFC GUID in an element parameter after export" açık olmalı).
2. BimCraft'ta açın, kontrol edin ({{ui:Model denetimleri}}, {{ui:Çakışma denetimi}}), sorunları ekleyin ({{ui:Sorunlar}}, BCF), gerekirse değerleri değiştirin ve {{ui:IFC olarak farklı kaydet}} düğmesine tıklayın.
3. Kaydedilen IFC'yi ikinci programda açın, üzerinde çalışın ve oradan GlobalId'ler korunarak IFC dışa aktarın (Archicad çevirmeni: "Global Unique Identifiers: Keep existing").
4. BimCraft'a dönün, giden modeli açın, sonra geri gelen modeli ekleyin (Modeller altında {{ui:Model ekle}}).
5. {{ui:İki BIM programı arasında}} bölümünde **Giden** ve **Geri gelen** seçin ve {{ui:Raporu oluştur}} düğmesine tıklayın.

## Raporu okuyun

- **Öğeler**: kaç tanesinin aynı GlobalId ile geri geldiği, kaçının eksik ve kaçının yeni olduğu. Yeni bir GlobalId'li öğeler bir eksik ve bir yeni olarak görünür: diğer program onu korumadı.
- **IFC sınıfı değişti**: başka türde bir öğe olarak geri gelen öğeler.
- **Korunan özellik değerleri**: değişmeden geri gelen değerlerin payı. Aşağıdaki liste en çok değişen ya da eksik değerleri olan özellikleri gösterir.
- **Sınıflandırmalar**: korunan, değişen (aynı sistem, başka kod) ya da eksik.

{{ui:Raporu indir (CSV)}} her özelliği sayılarıyla verir. Hangi öğelerin yer değiştirdiğini ya da şekil değiştirdiğini görmek için aynı iki modelde {{ui:Sürümleri karşılaştır}} kullanın.

:::note
BimCraft iki programdan hiçbirini çalıştırmaz. Hangi ayarların bir değeri taşıdığı her programın IFC ayarlarına bağlıdır: rapor gerçekte ne geri geldiğini gösterir, bu yüzden bir ayarı deneyin, yeniden dışa aktarın ve karşılaştırın.
:::

## Sorunlar BCF olarak gider

BimCraft'ta açtığınız sorunlar BCF olarak dışa aktarılır ({{ui:Sorunlar}}); her iki program da bunları kendi BCF araçlarıyla okuyabilir, böylece bir öğe hakkındaki soru, bakış açısıyla birlikte diğer programdaki kişiye ulaşır.

Ayrıca bkz. [Bir proje paketi açma](topic:open-project-bundle), [Bir proje dosyasından IFC üzerinden BimCraft'a](topic:rvt-to-ifc) ve [Bir modelin iki sürümünü karşılaştırma](topic:compare-versions).
