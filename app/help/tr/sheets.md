---
title: Görünüşler, kesitler ve sayfalar
summary: Planda kesit çizgileri çizin, ardından modelden yapılmış baskıya hazır bir takım için Sayfalar'ı açın: her seviyenin planları, dört görünüş, bina kesitleri, listeler ve duvar iskeleti; künyeler ve ölçeklerle birlikte tek bir PDF olarak.
keywords: sayfalar, çizim takımı, yapım belgeleri, yazdır, çıktı al, pdf, görünüş, görünüşler, kuzey görünüşü, kesit, bina kesiti, kesit çizgisi, kesme, gizli çizgiler, künye, sayfa numarası, ölçek, 1/4" = 1'-0", 1:50, 1:100, kâğıt, 11x17, 24x36, A3, A1, ruhsat takımı
from: 91ed0cde
---

## Ne yapacaksınız

Modelden bir çizim takımı yapın: her seviyenin planı, kuzey, doğu, güney ve batı görünüşleri, her kesit çizgisi için bir bina kesiti, kapı, pencere, oda ve kereste listeleri ile çerçevelenmiş her duvarın bir görünüşü. Takım, her açtığınızda modelden yeniden çizilir; bu yüzden yaptığınızla her zaman eşleşir.

## Bir kesit çizgisi çizin

1. Bir seviyede {{ui:Derleme}} öğesini açın ve {{ui:Kesit çizgisi}} seçin.
2. Çizginin nerede başlayıp nerede bittiğine tıklayın. Ortasındaki kısa çizgi, kesitin baktığı tarafı gösterir: ilk tıklamadan ikinciye giderken çizginin solu.
3. Çizgi planda, uçları ve harfi (A, sonra B, vb.) ile gösterilir.

Çizgiyi değiştirmek için seçin: **Özellikler**'de harfi, diğer yöne bakmak için **Görünümü çevir** ve kesitin ardında belirli bir mesafede görünümü durdurmak için **Şuraya kadar bak** (0 arkasındaki her şeyi gösterir). Kaldırmak için {{key:Delete}} tuşuna basın.

## Sayfaları açın

1. Model çubuğunda {{ui:Sayfalar}} öğesine tıklayın ({{ui:Yazdır}} öğesinin yanında).
2. Sayfalar solda listelenir: planlar için **A-101** ve sonrası, görünüşler için **A-201**, kesitler için **A-301**, listeler için **A-401** ve duvar iskeleti için **S-101**. Görmek için birine tıklayın.
3. **Kâğıdı** seçin: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 veya A1. Kâğıt standart adını korur ve boyutu seçtiğiniz {{ui:Birimler}} ile yazılır; örneğin *Letter · 8.5 × 11 in* ya da *A3 · 297 × 420 mm*.
4. {{ui:Takımı PDF olarak indir}} öğesine tıklayın: her sayfa için bir sayfa.

## Bir yönetmelik paketinden standart notlar

Bir sayfada, {{ui:Standart notlar}} sayfanın sağ sütununa bir yönetmelik paketinden (disipline göre) notlar yerleştirmenize izin verir. Her not, geldiği paketi ve maddeyi korur; basılan sayfa paketin doğrulanmadığını belirtir. Notlar bir başlangıç noktasıdır: çizimden sorumlu kişi ne yazacağına karar verir. Bunun için Yapı yönetmelikleri eklentisi gerekir.

## Sayfalarda neler var

- **Planlar** duvarları, kapıları, pencereleri, alanlarıyla odaları, ölçülendirmeleri ve kesit çizgilerini sığan en büyük standart ölçekte gösterir: 1/4" = 1'-0" ya da daha küçük (milimetrede 1:50 ya da daha küçük).
- **Görünüşler** 3B modelden, gizli çizgiler kaldırılmış olarak çizilir; sayfa başına iki tane, hepsi aynı ölçekte, altlarında bir zemin çizgisi ile. Çatı, temeller ve zemin modellendiği gibi gösterilir.
- **Kesitler** kesimin geçtiği yerleri (duvarlar, döşemeler, çatı) doldurur ve onun ötesinde görülenleri çizer.
- **Görünüşler ve kesitler notlarını taşır:** sağda adı ve yüksekliği ile her seviye için bir işaret, solda seviyeler arasındaki yükseklik ve bir görünüşte altında binanın genişliği ve size bakan bir duvardaki her kapı ve pencerede bir etiket (D1, W1). Bir odanın kendi duvarları için bkz. [İç görünüşler](topic:interior-elevations).
- **Listeler**, model çubuğundaki {{ui:Listeler}} ile aynı tablolardır.
- **İskelet** her çerçeveli duvarın dikmelerini, rabıtalarını, kiriş başlıklarını ve pencere eşiklerini dış yüzünden görüldüğü haliyle gösterir; böylece ekip yerleşimini yapabilir. Bkz. [Duvarları, döşemeleri ve çatıları çerçeveleme](topic:framing).

Her sayfada numarası, başlığı, dosyanın adı ve tarih bulunan bir künye vardır.

:::tip
Sayfalar modelden gelir: bir çizimi değiştirmek için modeli değiştirin ve {{ui:Sayfalar}} öğesini yeniden açın.
:::

:::note
Görünüşler ve kesitler yalnızca çizgileri ve dolguları gösterir: ölçülendirmeler, seviye işaretleri ve notlar bunlarda henüz yapılmadı.
:::
