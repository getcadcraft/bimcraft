---
title: "Varsayılan politikalar: yeni bir yapının neyle başlayacağını belirleyin"
summary: Yeni bir yapının hangi duvar tipi, seviyeler, ilk sayfa, LOD etiketleri, birimler ve araçla başlayacağını, metrik ve emperyal projeler için bir kez belirleyin; politikaları küçük bir dosya olarak ofis genelinde paylaşın.
keywords: varsayılan, varsayılanlar, varsayılan politikalar, politika, ofis standardı, ofis varsayılanları, şablon, yeni yapı, ilk duvar tipi, metrik duvar, yığma, LOD, gelişim düzeyi, ilk sayfa, kâğıt, ölçek, seviyeler, kat yüksekliği, seviye adları, duvar aracı, birimler, paylaş, dışa aktar, içe aktar, json
from: 42379aa5
---

## Ne yapacaksınız

BimCraft'a yeni bir yapının neyle başlaması gerektiğini söyleyin; böylece ofisteki hiç kimse her seferinde aynı şeyleri değiştirmek zorunda kalmaz. Bu bir eklentidir: açana kadar kapalıdır ve belirlemediğiniz bir politika, BimCraft'ın kendi varsayılanını olduğu gibi bırakır.

:::note
Bunlar **yeni** yapılar ve **yeni** şeyler için varsayılanlardır. Zaten başlattığınız bir proje değişmez.
:::

## Adımlar

1. Ayarlar'ı açın, {{ui:Add-ons}} sekmesine gidin ve {{ui:Default Policies}} seçeneğini açın.
2. Ayarlar'da **BimCraft** sekmesini açın ve soldaki listeden {{ui:Default Policies}} seçin.
3. İstediğiniz politikaları ayarlayın. Her biri **BimCraft'ın kendi değeriyle** başlar; parantez içinde o değerin ne olduğu yazar. **Metrik** ve **Emperyal** kutusu olan bir politika, her proje türü için bir değer alır; yalnızca ihtiyacınız olanları doldurun.
4. Kaydet düğmesi yoktur: her değişiklik yaptığınız anda kaydedilir. Kullanılamayan bir değer, sözle reddedilir ve eski değer kalır.
5. {{ui:New building}} düğmesine tıklayın. İletişim kutusu politikalarınızdan doldurulur; bir politikanın belirlediği her değerin yanında **Varsayılan politikalarınızdan** yazısı görünür. {{ui:Create}} düğmesine basmadan önce bunlardan herhangi birini hâlâ değiştirebilirsiniz.

## Politikalar

- **Yeni bir yapının birimleri**: birimler, {{ui:Create}} düğmesine basıldığında buna geçer.
- **Seviye sayısı**, **Seviye adları** ve **Seviye yüksekliği**. Bir adda `{n}` 1, 2, 3 sayar; `{n0}` 0, 1, 2 sayar; `{nn}` ve `{nn0}` aynı şeyi iki basamakla yapar. Yani `Kat {nn0}` ifadesi Kat 00, Kat 01, Kat 02 verir.
- **İlk duvar tipi**: Duvar aracının ilk çizdiği tip. Metrik bir ofis Dış yığma 300 mm ile başlayabilirken emperyal projeler Dış 2×6 ile kalır.
- **Hazır duvar tiplerindeki LOD etiketi**: dokuz hazır tipin, bir tip listelendiği her yerde gösterdiği gelişim düzeyi (LOD 100 ila 500). Bkz. [Duvar derlemelerini oluşturun](topic:wall-assemblies).
- **Yeni oluşturulan duvar tipinin LOD'u**: tip düzenleyicisinde yeni bir tipin başlayacağı etiket. Orada değiştirebilirsiniz.
- **İlk sayfa**: kâğıdı, ölçeği, sayfa numarası ve adı (en alt seviyenin adı için `{level}` kullanın), ya da hiç ilk sayfa olmadan.
- **Kâğıt üzerindeki açıklama boyutları** (Ayarlar › Genel › Varsayılan politikalar): ofisin, yazdırıldığında milimetre cinsinden yükseklikleri; notlar, ölçülendirme metni, etiketler, oda adları, ızgara balonu harfleri, görünüm başlıkları ve liste metni için. Yeni bir yapı bunları Oluştur'da alır ve dosyasında saklar. Bkz. [Tam boyutta çizin, ölçekle açıklama ekleyin](topic:annotation-sizes).
- **Oluşturmadan sonra etkin olan araç**: Seç (BimCraft'ın kendi davranışı gibi) ya da Duvar; böylece plandaki ilk iki tıklama zaten bir duvar çizer.

## Liste düzeni: ofis standardı

**Ayarlar › Genel › Varsayılan politikalar** içinde, **Liste düzeni (ofis standardı)** altında her listenin nasıl gruplanacağını, ara toplamları ve bir toplamı olup olmayacağını, başlığını ve sütun başlıklarının harf biçimini belirleyin. Kendi düzenini belirtmeyen her liste, kim kurarsa kursun bunları alır. Bkz. [Bir listeyi düzenleyin, kaydedin ve dışa aktarın](topic:schedule-layouts).

## Ofis genelinde paylaşın

1. Ayarlar'da **Genel** sekmesini açın ve {{ui:Default Policies}} seçin.
2. İsterseniz **Ofis adı**nı yazın. Dosyaya yazılır.
3. {{ui:Save to a file}} düğmesine tıklayın. `.ccdefaults.json` ile biten küçük bir dosya alırsınız.
4. Başka bir bilgisayarda eklentiyi açın, aynı yere gidin ve {{ui:Load from a file}} düğmesine tıklayın. Dosyanın politikaları, o bilgisayardakilerin yerine geçer.

Genel sekmesinde ayrıca, eklentisi olan her uygulama için geçerli olan **Yeni projenin birim sistemi** ve {{ui:Reset every policy}} bulunur. BimCraft sekmesindeki {{ui:Reset to BimCraft's own defaults}} yalnızca BimCraft'ınkini temizler.

## Bilmeniz gerekenler

- Dosya düz, açık bir JSON'dur: politika adları ve değerlerinin listesi. Bu sürümün tanımadığı bir politika dosyada adı geçiyorsa dışarıda bırakılır ve iletide adıyla belirtilir; diğerleri yine yüklenir.
- Politikalar bu tarayıcıda saklanır, bu bilgisayardaki her CadCraft uygulaması için. Yapı dosyasında saklanmazlar ve bilgisayarlar arasında eşitlenmezler: dosyayı kullanın.
- Hazır bir tipteki LOD etiketi, bu bilgisayardaki politikadan gelir. Bir hazır tipin kopyası olarak oluşturduğunuz tip, etiketini yapı dosyasında taşır.
- BimCraft'ta bir hassasiyet ayarı yoktur; bu yüzden burada bir hassasiyet politikası da yoktur.
- Bir şablondan başlatılan bir yapı, şablonun kendi seviyelerini ve sayfalarını getirir. Duvar tipi ve birim politikası yine uygulanır.
- Eklentiyi kapatın, her şey yeniden BimCraft'ın kendi değeri olur. Politikalarınız, eklentiyi tekrar açtığınızda kullanılmak üzere saklanır.
