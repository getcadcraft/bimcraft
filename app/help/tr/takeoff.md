---
title: Miktarları TakeoffCraft'a gönderin
summary: Tek tıklamayla modelin miktarları TakeoffCraft'a gider — türüne göre duvarlar, eğimli alana göre çatılar, mahyalar, kırma çatı kenarları ve vadiler, temeller, kapılar ve pencereler, dolaplar, elektrik cihazları, kat alanı ve kereste kesim listesi — her katın planında işaretlenir ve kalemlerde meslek paketlerinin birim maliyetleri yer alır.
keywords: metraj, miktar metrajı, keşif, tahmin, malzeme listesi, malzeme dökümü, takeoffcraft, miktarlar, duvar alanı, çatı alanı, squares, temel, beton, cubic yards, kesim listesi, kereste, meslek paketi, birim maliyet
from: c5a745af
---

## Ne yapacaksınız

Modeli TakeoffCraft'ta bir malzeme listesine ve keşfe dönüştürün. BimCraft her katın planını standart bir ölçekte çizer, her miktarı üzerinde işaretler ve metrajı PDF'in içine koyar. TakeoffCraft işaretleri kendisi ölçer, bu yüzden her sayı sayfada kontrol edilebilir.

## Gönderin

1. Model çubuğunda {{ui:Sayfalar}} düğmesinin yanındaki {{ui:Metraj}} düğmesine tıklayın.
2. TakeoffCraft planlarla birlikte yeni bir sekmede açılır. Sorduğunda, PDF'te bulduğu metrajı açmayı seçin.
3. TakeoffCraft'ın miktar tablosuna fiyatlarınızı ekleyin; birim maliyetler malzemeleri zaten listeler.

:::note
Burada TakeoffCraft kullanılamıyorsa düğme bunun yerine PDF'i indirir. PDF'i daha sonra TakeoffCraft'ta açın: metrajı içinde bulur.
:::

## Neler ölçülür

- **Duvarlar** türüne ve yüksekliğine göre: eksen çizgileri çizgi parçaları olarak, duvar yüksekliği kalemde; böylece TakeoffCraft uzunluğu ve duvar alanını verir. Her çizgi duvarın kapı ve pencerelerini taşır; TakeoffCraft bunları BimCraft'ın listeleriyle aynı kuralla duvar alanından bir kez düşer: brüt, düşülen ve net değerlerde ikisi aynı sonucu verir. Bir duvar tipinin metraj verisi (birim, harç, birim fiyat; bkz. [Duvar birim maliyetleri](topic:wall-assemblies)) o tipin kaleminde tek bir fiyatlı satır olarak gelir. Varsayılan dışındaki bir ölçüm yöntemi altında (bkz. [Bir ölçüm yöntemi seçin](topic:plan-schedules-and-pdf#choose-a-measurement-method)) metraj yöntemi taşır, her çizgi kavşakların duvar yüzünden ne düştüğünü taşır ve TakeoffCraft aynı yöntemle ölçer ve adını verir. Birimi uzunluğa ve yüksekliğe sahip olan bir tip, miktarlı iki bileşen de verir: sipariş edilecek birim sayısı ve harç hacmi. Bunlar tipin birim fiyatı birim başına, 1000 birim başına ya da m³ harç başına olduğunda fiyatlanır. Tam sayıya denk gelen bir sayım TakeoffCraft'ta bir birim fazla çıkabilir, çünkü aktarım konumları sayfada yuvarlar.
- **Çatılar**: her çatı düzlemi, eğimiyle birlikte bir alan olarak (TakeoffCraft eğimli alanı verir); mahyalar, kırma çatı kenarları ve vadiler (kırma çatı kenarları ve vadiler eğimleri boyunca); saçaklar ve rüzgârlıklar.
- **Temeller**: temeller ve temel duvarları ortalarından geçen çizgi parçaları olarak; döşemeler kalınlıklarıyla birlikte alan olarak, böylece beton hacim olarak çıkar.
- **Kapılar ve pencereler** türüne göre sayılır, pencere pervazıyla birlikte.
- **Alt dolaplar** ön yüzlerinin uzunluğuna göre.
- **Elektrik cihazları** türüne göre sayılır.
- **Her katın kat alanı**, odalarından.
- **Kereste kesim listesi**, iskeletten; kendi sayfasında sayılır (parça başına bir nokta).

Bir meslek paketinin eşleşen bir birim maliyeti olduğunda — dış ve iç duvarlar, döşemeler, temeller, temel duvarları, şingıller, mahya ve kırma çatı kapağı, vadiler, saçaklar, iç kapılar, pencere pervazı, alt dolaplar, prizler, anahtarlar, aydınlatma, bağlantı kutuları ve pano — kalem, malzemeleri ve formülleriyle birlikte gelir. Paketler fiyatsız gelir ve henüz bir keşifçi tarafından gözden geçirilmedi.

:::tip
Planlar her tıklamada modelden yeniden yapılır; bu yüzden bir değişiklikten sonra yalnızca {{ui:Metraj}} düğmesine yeniden tıklayın.
:::
