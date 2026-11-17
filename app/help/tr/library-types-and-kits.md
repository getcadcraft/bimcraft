---
title: Semboller, tipler ve varlıklar, proje şablonları ve Hızlı Kitler
summary: Kütüphanede üç tür öğe vardır (semboller, tipler, varlıklar). Projenize bir tip ekleyin, paylaşılan bir proje şablonuyla başlayın, bir Hızlı Kit ekleyin ve kendi öğelerinizi kütüphanenin yükleme sayfasından paylaşın.
keywords: kütüphane, semboller, tipler, varlıklar, tip, duvar tipi, döşeme tipi, çatı tipi, tavan tipi, proje şablonu, şablon, hızlı kit, kit, paylaş, yükle, sürüm, değişiklik günlüğü, LOD, sınıflandırma, lisans, uygulamadan notlar
from: e13b0e67
---

## Ne yapacaksınız

Kütüphanede ihtiyacınız olanı ne olduğuna göre bulun, çizdiğiniz projeye bir tip ekleyin, birinin paylaştığı bir şablondan yeni bir proje başlatın ve kendi şablon, tip ve kitlerinizi paylaşın.

## Kütüphane öğesinin üç türü

- **Semboller** çizim kurallarıdır: yalnızca 2B, açıklama boyutunda çizilir, disipline göre gruplanır.
- **Tipler**, bir öğenin neyden yapıldığını belirtir: gerçek kalınlıklarıyla katmanları, geliştirme seviyesi (LOD) ve sınıflandırma kodu. Bir tip projeye eklenir, çizilmez.
- **Varlıklar**, kapı, pencere, mobilya, tesisat donanımları ve ekipman gibi fiziksel nesnelerdir; gerçek boyutta plan görünümü ve 3B gövdesi vardır.

{{ui:Kütüphane}} sekmesinde {{ui:Kütüphane}} seçin ve **Öğe türü** ile Tümü, Semboller, Tipler ya da Varlıkları gösterin.

## Projenize bir tip ekleyin

1. **Öğe türü** altından **Tipler**'i seçin ve birini açın.
2. Resmin altında yapısını, LOD'unu ve sınıflandırmasını kontrol edin, sonra {{ui:Bu projeye ekle}} öğesini seçin.
3. Çizebileceğiniz bir duvar, döşeme, çatı ya da tavan tipi olarak eklenir. Aynı adda bir tip zaten varsa yenisi kopya olarak eklenir ve sizinki olduğu gibi kalır. Tek bir geri alma onu çıkarır.

## Proje şablonları ve Hızlı Kitler

Kişilerin neyi paylaştığını görmek için {{ui:Kitler}} seçin.

- **Bir proje şablonu**, seviyeleri, aksları, tipleri ve ayarları olan bir IFC dosyasıdır. {{ui:Şablonlarıma kaydet}}, onu **Başlangıç noktası** altında **Yeni bina**'ya koyar.
- **Bir Hızlı Kit**, kütüphane öğelerinin bir listesidir. {{ui:Kitin öğelerini göster}}, bunları yerleştirebileceğiniz kartlar olarak listeler.
- Her kitin bir sürümü ve en yeniden eskiye sıralı bir değişiklik günlüğü vardır. 0 ile başlayan bir sürüm tartışma içindir; 1.0.0 yalnızca ürün hattının sahibinin benimsediği şeyler içindir.

## Kendinizinkini paylaşın

- **Bir proje şablonu:** {{ui:Şablon olarak kaydet}} seçin, {{ui:Kütüphanede paylaşmak için bir dosya da oluştur}} öğesini işaretleyin, içerdiklerini ve bir sürüm ekleyin. Bir `.json` dosyası alırsınız.
- **Bir Hızlı Kit:** {{ui:Kitler}} içinde {{ui:Bu projeden bir Hızlı Kit oluştur}} seçin. Projenin kullandığı kütüphane öğelerini listeler.
- **Bir Tip:** {{ui:Tip paketleri}} içinde bir tipi işaretleyin ve {{ui:Kütüphane öğesi olarak kaydet…}} seçin.

Dosyayı kütüphanenin yükleme sayfasında yükleyin. Diğer her öğe gibi aynı incelemeden geçer ve lisansı orada seçersiniz: her öğe lisansını belirtir. Öğelerden LOD, bir IFC sınıfı ve bir sınıflandırma kodu (yalnızca bir ad değil, bir kod) istenir.

## Uygulamadan notlar

Herhangi bir kütüphane öğesinin sayfasında, oturum açmış üyeler not ekleyebilir: gerçek bir projede kullanıldı, örnek bir projede denendi ya da bir sorun bulundu. Hangi tür proje olduğunu birkaç kelimeyle yazın ve müşteri adlarını dışarıda bırakın. Not herkese açıktır ve bir inceleme değildir: öğeyi değiştirmez.

## Bilmeniz gerekenler

- Uygulamadan hiçbir şey gönderilmez. Dosyalar bilgisayarınızda oluşturulur ve onları siz kendiniz yüklersiniz.
- Bir şablondan yapılan kit, IFC metnini kaydedildiği gibi taşır. Yüklemeden önce özel bir şey olup olmadığını kontrol edin.
- CadCraft, Kütüphane sekmesinde Semboller ve Varlıkları gösterir; Tipler ve şablonlar BimCraft projeleri içindir.
