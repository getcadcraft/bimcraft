---
title: Birkaç IFC modelini birlikte görün
summary: Mimari, yapısal ve tesisat gibi daha fazla IFC dosyasını sahneye ekleyin; aynı koordinatlarda görün, birini taşıyın, birini gizleyin ve hangisini düzenleyeceğinizi seçin.
keywords: birleştirme, birleştirilmiş model, birkaç model, çoklu dosya, birleştir, üst üste bindirme, koordinasyon, disiplin, yapı, MEP, tesisat, uzaklık, modeli taşı, etkin model, model ekle
from: df0efbbf
---

## Ne yapacaksınız

Farklı disiplinlerin modellerine tek yerden bakın: mimarın modeli, içinde yapısal ve tesisat modelleriyle birlikte. Her biri kendi dosyası olarak kalır; BimCraft yalnızca onları birlikte gösterir.

## Adımlar

1. İlk IFC modelini her zamanki gibi açın.
2. Soldaki {{ui:Modeller}} bölümünde {{ui:Model ekle…}} öğesine tıklayın ve bir ya da daha fazla IFC dosyası seçin. Her biri listede ve 3B görünümde görünür.
3. Bir modeli gizlemek için işaretini kaldırın; yeniden göstermek için işaretleyin.
4. Bir model yanlış yere geliyorsa (farklı bir ölçüm noktası), altındaki {{ui:Taşı}} öğesine tıklayın, X, Y ve Z boyunca metre cinsinden ne kadar taşınacağını yazın ve {{ui:Uygula}} öğesine tıklayın.
5. Noktası olan model düzenlediğiniz modeldir. Başka bir modeli düzenlemek için onun noktasına tıklayın.
6. Bir modeli sahneden çıkarmak için yanındaki × öğesine tıklayın.

## Ekibin modellerini açın

Açık model bir ekip projesindeki bulut dosyası olduğunda, listenin altında {{ui:Ekibin modellerini aç}} görünür. Bu, projenin diğer IFC modellerini bunun yanında açar; her biri projenin belirlediği uzaklıkla taşınır. Sizden gizlenen modeller dışarıda kalır ve sayılır; proje döndürdüğü bir model döndürülmeden açılır ve o da sayılır; IFC olmayan dosyalar (örneğin bir DWG) atlanır ve durum satırında adları belirtilir. Zaten açık olan bir model asla iki kez açılmaz. Düğme, bir ekip projesinde olmayan bir dosya için gizlidir.

## Ne görmelisiniz

- Her model, dosyanın yerleştirdiği şekliyle ilk modelin koordinatlarında. Aynı projeden dışa aktarılan modeller hiçbir şeyi taşımadan hizalanır.
- Düzenlemediğiniz bir modelin bir öğesine tıkladığınızda özellikleri salt okunur gösterilir; geçiş için {{ui:Bu modeli düzenle}} vardır.
- {{ui:Model ağacı}}, {{ui:Katlar}}, {{ui:Renk}}, {{ui:Değişiklikler}} listesi, kütüphane öğelerini yerleştirme ve {{ui:IFC olarak farklı kaydet}} yalnızca düzenlediğiniz model üzerinde çalışır. Gizleme, izole etme, geçirgenlik ve {{ui:Tümünü seç}} tüm modellerde çalışır.
- {{ui:IFC olarak farklı kaydet}} düzenlediğiniz modeli, yalnızca değişiklikleriyle birlikte indirir.

## Sık yapılan hatalar

- **Bir model uzakta ya da eksik.** Dosyası farklı koordinatlar kullanıyor. Bulmak için {{ui:Sığdır}} kullanın, sonra {{ui:Taşı}} ile yerine yerleştirin.
- **Seçili bir öğede Sil ya da Kopyala soluk.** Öğe başka bir modele ait: önce o modele geçin.
- **Bir dosya seç ile dosya açınca her şey değişti.** Bu yeni bir sahne başlatır. Sahip olduğunuz dosyalara eklemek için {{ui:Model ekle…}} kullanın.

## Sonraki

- [Öğeleri gizleyin, izole edin ve saydam yapın](topic:hide-and-isolate)
- [Öğeleri bir özelliğe göre renklendirin](topic:color-by-property)
