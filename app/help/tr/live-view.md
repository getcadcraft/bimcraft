---
title: Canlı görünüm
summary: Modelin yanında, güneş, gölgeler ve yansıyan ışıkla gerçek zamanlı görünümde gösteren bir panel; yaptığınız her değişikliği izler. İçinde gezinin ve gün saatini ile ayı ayarlayın.
keywords: canlı görünüm, gerçek zamanlı, realtime, gerçek zamanlı render, yürüyüş, yürü, birinci şahıs, sunum, müşteri, ikinci ekran, ikinci pencere, monitör, gün saati, güneş, mevsim, ay, gölgeler, ortam tıkanıklığı, yansımalar, yansıyan ışık, küresel aydınlatma, webgpu, webgl
from: ea5c02bf
---

Canlı görünüm, modeli gerçek zamanlı görünümde gösterir: sitenizin yerine ve tarihine göre gökyüzü ve güneş, güneşin gölgeleri, verdiğiniz boyalar ve malzemeler, lambalar ve duvarlardan ve zeminlerden yansıyan ışık. Yaptığınız işi izler: 3B görünümü çevirirseniz o da döner, modeli değiştirirseniz değişikliği birazdan gösterir. Hiçbir şey yüklenmez.

Aynı sahneyi, boyaları, lambaları ve güneşi [Resim render et](topic:render) ile çizer; bitmiş bir resim için onu kullanın.

## Açın

1. Bir model açın ve araç çubuğunda {{ui:Canlı görünüm}} öğesini seçin. Panel, uygulamanın üzerinde, sağ altta açılır.
2. Taşımak için başlık çubuğunu sürükleyin, büyütmek için köşesini çekin.
3. {{ui:Yeni pencerede canlı görünüm}} (yanındaki düğme) veya panelde {{ui:Yeni pencere}}, onu ikinci bir ekran için kendi penceresine taşır. Tarayıcınız açılır pencereleri engelliyorsa panel olarak açılır.
4. {{ui:Kapat}} onu kapatır.

## Denetimler

| Denetim | Ne yapar |
|---|---|
| {{ui:Görünümü izle}} | Açıkken canlı görünüm, 3B görünümün baktığı yere bakar. Gezinmek bunu kapatır |
| {{ui:Yürü}} | Modelin içinde gezinin (aşağıda) |
| {{ui:Yerçekimi}} | Gezinirken: zeminlerde durun ve merdivenlere tırmanın. Kapalıyken: uçun |
| {{ui:Saat}} | Günün saati. Sürüklediğinizde güneş hareket eder |
| {{ui:Ay}} | Ay; kış ve yaz güneşini görebilmeniz için |
| {{ui:Kalite}} | {{ui:Bu bilgisayar için}}, ya da {{ui:Düşük}}, {{ui:Orta}} veya {{ui:Yüksek}} |

Alttaki satır, görünümü neyin çizdiğini (WebGPU veya WebGL 2), kaliteyi ve yansıyan ışığı gösterir.

## Modelde gezinin

1. 3B görünümü durmak istediğiniz yere çevirin ve {{ui:Yürü}} seçin. Görünümün bakış noktasının altındaki zemine, 1,6 m boyunda durursunuz.
2. Canlı görünüme tıklayın, sonra {{key:W}} {{key:A}} {{key:S}} {{key:D}} tuşlarını veya ok tuşlarını kullanın. Koşmak için {{key:Shift}} tuşunu basılı tutun. Etrafa bakmak için sürükleyin.
3. 40 cm'ye kadar olan basamaklara tırmanılır (merdivenler); bundan yüksek her şey bir duvardır. Duvarlar sizi durdurur ve boyunca kayarsınız.
4. {{ui:Yerçekimi}} kapalıyken uçarsınız: {{key:E}} yukarı, {{key:Q}} aşağı çıkar.
5. {{key:Esc}} yürümeyi durdurur.

## Yansıyan ışık

Güneş alan bir duvardan zemine yansıyan ışık ve bir odanın daha karanlık içi, arka planda her işlemci çekirdeğinde hesaplanır. Hesaplanırken alt satır {{ui:Yansıyan ışık: 40 %}} yazar; hazır olduğunda görünüm onu kullanır. Bir değişiklikten sonra yeniden başlar.

:::note
Bu, bir resim render'ı değil, canlı görünüm için bir yaklaşımdır: noktalar arasındaki küçük ayrıntılar, yakınındaki noktaların yansıyan ışığını alır.
:::

:::note
Tarayıcılar farklıdır. Tarayıcının WebGPU'su varsa canlı görünüm onu kullanır; yoksa WebGL 2 kullanır ve aynı görünür. İkisi de yoksa panel bunu söyler.
:::
