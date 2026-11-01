---
title: BimCraft'ta koordinatlar
summary: Nerede çalıştığınız: işaretçinin planda ve 3B görünümdeki konumu, bulunduğunuz seviye, proje orijini ve arsanın ölçü noktası.
keywords: koordinatlar, neredeyim, konum, işaretçi, okuma, x y z, seviye, kat, proje orijini, orijin, temel nokta, ölçü noktası, arsa, harita koordinatları, doğu, kuzey, georeferans, birimler, konum
from: 84df5245
---

## Ne yapacaksınız

Bir modelde neredesiniz, bir bakışta görün: hangi seviyeye çizim yaptığınızı, işaretçinin proje orijinine ne kadar uzak olduğunu ve arsanın ölçü noktasının nerede olduğunu.

## Sayıların nerede göründüğü

- **3B görünümün üzerinde** (sağ altta, görünüm küpünün yanında): işaretçiyi modelin üzerinde gezdirin. Kutu, noktanın bulunduğu seviyeyi ve o seviyenin zemininden ne kadar yukarıda olduğunu, ardından **X, Y ve Z** değerlerini gösterir. Boş bir alanın üzerinde, en alttaki seviyenin zemininde noktayı okur.
- **Planda** (sağ altta, {{ui:Çiz}} açıkken): plan üzerinde gösterilen seviyeyi ve zemininin yüksekliğini; işaretçi plan üzerindeyken de **X ve Y** değerlerini.
- Dosyanın bir harita dönüşümü varsa (harita koordinatlarıyla dışa aktarılmışsa), iki kutu da harita ızgarasındaki **Doğu (Easting) ve Kuzey (Northing)** değerlerini ekler; seçtiğiniz {{ui:Birimler}} biriminde (değerlerin yanında birim her zaman yazılır; fit ve inç, ondalık fit olarak gösterilir). Bir çizim (DWG veya DXF) kendi birimlerini korur: işaretçi okuması bu birimleri adlandırır ve asla dönüştürülmez.

Her X, Y ve Z değeri, araç çubuğunda seçilen {{ui:Birimler}} biriminde (fit ve inç, inç, ondalık fit, milimetre, santimetre veya metre) **proje orijininden** ölçülür. Pozitif Y, modelin kuzeyine işaret eder; bu her zaman gerçek kuzey olmayabilir. Harita Doğu ve Kuzey değerleri aynı seçimi izler (fit ve inç, ondalık fit olarak gösterilir). Harita sisteminin kendi birimi seçtiğiniz birimden farklıysa, bu birim sayıların ardından parantez içinde yazılır, örneğin *(US survey feet)*; böylece bir ölçmen, sistemin kendi biriminin ne olduğunu görebilir.

## İki işaret

- **Proje orijini** (artı işaretli kırmızı daire): modeldeki her koordinatın ölçüldüğü 0, 0, 0 noktası.
- **Ölçü noktası** (üçgen işaretli mavi daire): arsanın referans noktası; enlem, boylam ve yükseklik ya da harita koordinatları bu nokta için verilir. 3B görünümde, konumunu okumak için üzerine işaret edin.

Arsa proje orijininin üzerindeyse, burada çizilen yeni bir bina gibi, tek işaret ikisini de gösterir. İki kutudan birindeki artı imleci düğmesine tıklayarak işaretleri gizleyebilir ya da gösterebilirsiniz; BimCraft seçiminizi bu tarayıcıda hatırlar.

## Ne görmelisiniz

- Sayılar işaretçi hareket ettikçe değişir ve planın kutusu, seviye listesinde seçtiğiniz seviyenin adını gösterir.
- İşaretler, döndürürken, kaydırırken ve yakınlaştırırken yerinde kalır.

:::tip
Bir noktanın enlem ve boylamını okumak için {{ui:Ölçüm}} › {{ui:Konum}} kullanın: bkz. [3B'de mesafeleri, yüzey alanlarını ve konumları ölçün](topic:measure).
:::

:::touch
Dokunmatik ekranda 3B kutusu, fare ya da kalem kullanana kadar hiçbir şey göstermez: parmak görünümü hareket ettirir.
:::
