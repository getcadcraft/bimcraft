---
title: Her biçimde döşemeler, açıklıklar ve rampalar
summary: Döşemeyi ya da plağı ana hattıyla çizin (balkon, konsol, sahanlık), içlerine açıklıklar kesin ve sahanlıklarıyla birlikte rampalar çizin.
keywords: döşeme, plak, ana hat, balkon, konsol, sahanlık, teras, döşeme açıklığı, delik, boşluk, şaft, rampa, eğim, erişilebilir rampa, tekerlekli sandalye rampası, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ne yapacaksınız

Odalara uymayan döşemeler yapın, örneğin duvarların ötesindeki bir balkon, ve katlar arasında rampalar çizin.

## Döşemeyi ana hattıyla çizin

1. {{ui:Çiz}} öğesini açın, katı seçin, sonra {{ui:Derleme}} › {{ui:Ana hatla döşeme}} öğesini seçin.
2. Araçların altındaki satırda türü (beton plak ya da ahşap döşeme), kullanımını (döşeme ya da sahanlık), kalınlığını ve üstünün katın üzerinde nerede olduğunu seçin (0 = katın zemin döşemesiyle aynı seviyede; negatif bir değer onu daha aşağıya koyar).
3. Köşeleri tıklayın. Araç duvarlara, ızgara çizgilerine ve kesişimlerine yapışır; bir kenarı dik tutmak için {{key:Shift}} tuşunu basılı tutun. Her kenarın uzunluğu ve alan, siz çizerken gösterilir. {{key:Backspace}} son köşeyi geri alır.
4. İlk köşeye yeniden tıklayın, çift tıklayın ya da bitirmek için {{key:Enter}} tuşuna basın.

## Açıklık kesin

Döşemeye tıklayın (3B görünümde ya da planda ana hattına), sonra **Özellikler** içinde {{ui:Açıklık ekle}} öğesine tıklayın ve döşemenin içinde açıklığın köşelerine tıklayıp yukarıdaki gibi bitirin. Döşemenin {{ui:Özellikler}} bölümü açıklıklarını, her birinin yanında {{ui:Sil}} ile birlikte ve açıklıklar düşüldükten sonraki alanını gösterir.

## Rampa çizin

1. {{ui:Derleme}} › {{ui:Rampa}} seçin. Genişliğini ayarlayın ve **bir üst kata** mı yoksa yazdığınız **bir yükselme kadar yukarı** mı gideceğini seçin.
2. Eğimle nasıl ayarlanacağını seçin: **eğime göre** (başlangıçta 1:12; rampa yükselmenin gerektirdiği kadar uzundur) ya da **uzunluğa göre** (ikinci tıklamanız uzunluğu belirler, eğim buna göre ayarlanır).
3. Rampanın ayağına (alt kenarının ortasına) tıklayın, sonra yukarı giden yöne tıklayın. Önizleme uzunluğunu, rampa bölümlerini ve eğimini gösterir.

30 in (760 mm) yükseklikten daha fazla bir yükselme, aralarında 5 ft (1525 mm) sahanlık bulunan rampa bölümlerine ayrılır. Bunlar yaygın planlama değerleridir, sizin yönetmeliğiniz değildir: inşa ettiğiniz yerdeki kuralları kontrol edin. 1:12'den dik bir rampa, özelliklerinde işaretlenir.

## Ne görmelisiniz

- Her döşeme, açıklık ve rampa tek bir adımdır: {{key:Mod+Z}} onu geri alır.
- Planda çizilmiş bir döşemenin ana hattı (bir açıklık çaprazlanarak çizilir) ve bir rampanın ana hattı, bölümleri, sahanlıkları ve eğimiyle birlikte yukarı bir ok.
- Çizilmiş bir döşemenin özellikleri (tür, kullanım, kalınlık, üst, alan, açıklıklar) ve bir rampanın özellikleri (genişlik, üst, yükselme, eğim ya da uzunluk); {{key:Delete}} ikisini de kaldırır.
- Üst kata bir rampa, o katın yüksekliği değiştiğinde onu izler.
- IFC dosyasında: çizilmiş bir döşeme, açıklıkları (IfcOpeningElement) kesilmiş bir döşemedir (IfcSlab, bir döşeme ya da sahanlık); bir rampa ise eğimli bölümlerden (IfcRampFlight) ve sahanlık döşemelerinden oluşan, eğimi ve genişliğiyle birlikte bir IfcRamp'tir.

:::note
Bu şekilde çizilen döşemeler çizdiğiniz yerde kalır. {{ui:Döşeme}} ile yapılan döşemeler duvarlar taşındığında odaları izler: bkz. [Odalar, döşemeler, tavanlar ve çatılar](topic:floors-and-roofs).
:::
