---
title: Her odadaki gün ışığını tahmin edin
summary: Her odanın ortalama gün ışığı faktörü; pencerelerinden, iç yüzeylerinden ve her pencerenin gördüğü gökyüzünden, modelde ölçülen gökyüzü açısıyla hesaplanır. Bir tasarım başlangıcı tahmini; simülasyon ya da yönetmelik denetimi değildir.
keywords: gün ışığı, gün ışığı faktörü, ortalama gün ışığı faktörü, adf, dikey gökyüzü bileşeni, vsc, güneş kazancı, güneş, g-değeri, ızgara, bölünmüş akı, gökyüzü bileşeni, iç yansıyan bileşen, doğal ışık, pencere, camlama, gökyüzü açısı, engel, gölgelenme, balkon, çıkma, yansıma oranı, geçirgenlik, erken tasarım, analiz, odalar, mekânlar
from: 5f300a78
---

Sağ paneldeki {{ui:Daylight}} sekmesi her odanın **ortalama gün ışığı faktörünü** hesaplar: kapalı bir gökyüzünün ışığının, ortalama olarak yüzde kaçının odaya ulaştığını. Açık IFC modelinin odalarını (mekânlarını) ve pencerelerini okur. Modelde hiçbir şey değiştirilmez, hiçbir şey yüklenmez.

:::warning
Bu sekmedeki her şey **bir tasarım yardımcısıdır, uyumluluk hesabı değildir**: yayımlanmış yöntemlerle yapılmış erken tasarım tahminleridir; **simülasyon değildir** ve bir yapı yönetmeliğine ya da standarda **karşı bir denetim değildir**. BS EN 17037, LEED, BREEAM ve enerji yönetmelikleri, yerin iklimiyle bir gün ışığı simülasyonu ister; bunlar için bir gün ışığı simülasyon programı kullanın.
:::

## Hesaplayın

1. Odaları (mekânları) ve pencereleri olan bir IFC modeli açın. Burada çizilen modellerde, kapalı her duvar grubunun içinde bir oda vardır.
2. {{ui:Daylight}} sekmesini açın ve {{ui:Calculate}} düğmesine tıklayın.
3. Her oda, gün ışığı faktörünü ve bir bandı gösterir: %2'nin altı, %2–5, %5 ya da daha fazla. Yüzeylerini ve her pencerenin alanını ile gökyüzü açısını görmek için bir odaya tıklayın; oda ve pencereleri modelde seçilir.

Bir girdiyi değiştirin, sayılar hemen güncellenir; modeli değiştirdikten sonra {{ui:Calculate again}} düğmesine tıklayın. {{ui:CSV}} her odayı, sayılarıyla ve kullanılan girdilerle birlikte kaydeder.

## Formül

Ortalama gün ışığı faktörü (%) = T × Ag × θ × M ÷ (A × (1 − R²)), odanın pencereleri üzerinden toplanır (Littlefair formülü; BRE 209, BS 8206-2 ve CIBSE LG10'da kullanılır):

- **T**, camın ışık geçirgenliği (başlangıç için 0.7: üreticinin değerini kullanın).
- **Ag**, camlı alan: her pencerenin alanı (genel genişlik × yükseklik, yoksa modeldeki boyutu) × **camlı oran** (başlangıç için 0.75: geri kalanı çerçevedir).
- **θ**, pencerenin gördüğü gökyüzü açısı, derece cinsinden (aşağıda).
- **M**, camdaki kir için bakım faktörü (başlangıç için 1).
- **A**, odanın her iç yüzeyi: zemin, duvarlar, tavan ve pencereler; odanın kendi şeklinden alınır.
- **R**, alana göre ağırlıklı ortalama yansıma oranları: zemin 0.2, duvarlar 0.5, tavan 0.7 (başlangıç için); cam 0.1 sayılır.

## Gökyüzü açısı nasıl ölçülür

Her pencere için BimCraft, modeli pencereye dik, dik bir düzlemle keser; bu düzlem camın dış yüzünden başlar ve ufuktan doğrudan yukarı bakar. Kesitin pencerenin önünde karşılaştığı her şey (karşıdaki bir bina, üstteki bir balkon ya da çıkma, saçak) o 90°'nin bir kısmını gizler. θ, geriye kalandır. Pencerenin kendisi ve içinde bulunduğu duvar hesaba katılmaz. Bu işlem pencere genişliği boyunca beş noktada yapılır ve ortalaması alınır; böylece pencerenin ortasının önündeki ince bir direk kendi payını alır, tüm gökyüzünü değil.

Pencerenin merkezinden 8.5 m yukarıda ve 9.9 m uzaktaki bir bina 40.65° gizler (tanjantı 8.5 ÷ 9.9 olan açı); böylece θ = 49.35°.

## Her pencerenin dikey gökyüzü bileşeni

{{ui:Calculate}} ayrıca her pencerenin tüm gökyüzünden ne gördüğünü ölçer: aynı dik kesit, camın önündeki her yöne (her 2°, bir kenardan öbür kenara) döndürülür; böylece yandaki bir bina, bir kanat ya da derin bir pervaz kendi payını alır. Buradan BimCraft **dikey gökyüzü bileşenini (VSC)** hesaplar: kapalı gökyüzünün ışığının, açık ve düz bir çatının alacağı payın yüzdesi olarak camlara ulaşan payı. Önünde hiçbir şey olmayan bir pencere **%39.6** alır; dikey bir pencerenin alabileceği en fazla değer budur. Pencerenin 25° yukarısında uzanan uzun bir bina yaklaşık **%27** bırakır; bu, İngiltere rehberliğinin (BRE 209) bir pratik kural olarak kullandığı rakamdır. Bir odanın ayrıntısındaki her pencere, kendi VSC'sini ve **engel açısını** (önünde düz duran şeylerin ne kadar yükseldiğini) gösterir.

Gökyüzü, CIE standart kapalı gökyüzüdür; tam tepede ufuktakinden üç kat daha parlaktır. Kesit tam yapılır: hiçbir şey örneklenmez.

## Bir tarihte pencerelerden giren güneş

{{ui:Sun through the windows on a date}} seçeneğini açın ve bir tarih seçin. BimCraft o gün boyunca güneşi çeyrek saatlik aralıklarla izler ve her pencere için camdan içeri giren ısıyı toplar:

- **doğrudan güneş**: güneş pencerenin önündeyken ve modeldeki hiçbir şey onu gizlemiyorken (aynı tam kesit, güneşe doğru çevrilmiş: öğlen yüksek yaz güneşini gölgeleyen bir balkon, alçak kış güneşinin içeri girmesine izin verir);
- camdaki **gökyüzü ışığı**, pencerenin göremediği kısım düşülerek;
- **zeminden yansıyan ışık** (yansıma oranı: başlangıç için 0.2);
- hepsi camın **g-değeri** (güneş enerjisinin ne kadarını geçirdiği: başlangıç için 0.6; üreticinin değerini kullanın) ve camlı oranı üzerinden.

Her oda, günün toplamını kWh cinsinden ve zirvesini, saatiyle birlikte watt cinsinden gösterir; bir odanın ayrıntısı günü bir grafikle çizer. Gökyüzü, Hottel modeline göre açık bir gökyüzüdür (Duffie & Beckman, *Solar Engineering of Thermal Processes*): yer ve mevsim için yaz ya da kış değerleri ve sahanın yüksekliğiyle. Güneşin konumu NOAA'nın hesaplarından alınır. Sahanın enlem ve boylamı IFC'nin sahasından, kuzey ise modelin gerçek kuzeyinden gelir; model bir saha içermiyorsa bir enlem ve boylam yazın. Saatler, yazdığınız saat diliminde standart saattir (yaz saati uygulanmaz); yazmazsanız boylamın işaret ettiği saat dilimi kullanılır.

Dışarıda bıraktıkları: bulutlar (bu açık bir gündür), düşük açılarda camın daha az ışık geçirmesi, camı gölgeleyen çerçeveler, panjurlar ve duvarların ile çatının aldığı ısı. Aynı sekmedeki soğutma tahmini zirveyi kullanır.

## Izgarada gün ışığı faktörü

{{ui:Daylight factor on a grid}} seçeneğini açın ve {{ui:Work out the grid}} düğmesine tıklayın. BimCraft her odanın zemini üzerine, çalışma düzlemi yüksekliğinde (başlangıç için 0.85 m), duvarlardan yarım metre içeride bir ızgara yerleştirir ve her noktadaki gün ışığı faktörünü **BRE bölünmüş akı yöntemiyle** hesaplar:

- **gökyüzü bileşeni**: noktadan her pencerenin açıklığı üzerinden görülen kapalı gökyüzü, çerçeveler düşülerek;
- **dışarıdan yansıyan bileşen**: noktanın pencereden dışarıdaki binalarda gördüğü, arkalarındaki gökyüzünün onda biri parlaklıkta parlayan şeyler (binalar çok açık ya da koyuysa engel parlaklığını değiştirin);
- **içeriden yansıyan bileşen**: odanın yüzeylerinden ve yansıma oranlarından, odanın içinde zıplayan ışık; pencerelerin alanı ve bunların dışında kalan kısım (BRE formülü; varsayılan şeffaf cam yerine camın geçirgenliği kullanılır).

Her oda ortalamasını, en düşük noktasını ve %2 ya da daha fazlasını alan kısmını gösterir. Bir odanın ayrıntısı planını çizer; her nokta gün ışığı faktörüne göre renklendirilmiş, pencereler kırmızı olarak. Her bilgisayarda hızlı çalışması için bir oda en fazla **400 noktaya** sahip olur: büyük bir odada aralık, sığması için büyür (kendi aralığınızı seçmek için bir aralık yazın).

## Dışarıda bıraktıkları

- Çatı pencereleri (düz ya da eğimli yatan camlar) listelenir ama hesaba katılmaz: buradaki formüller duvarlardaki pencereler içindir.
- Arkasında bir oda olmayan pencereler (örneğin mekânı olmayan bir hol) ayrı listelenir.
- Pencere pervaz derinlikleri (açıklık dış yüzeyde alınır), parlama, güneşli saatler ve iklime bağlı gün ışığı. BS EN 17037, LEED ya da BREEAM için bir gün ışığı simülasyon programı kullanın.
- Bantlar, daha eski İngiliz rehberliğinden (BS 8206-2) alınmıştır; yalnızca bir kılavuz olarak gösterilir, asla geçti ya da kaldı olarak değil.
