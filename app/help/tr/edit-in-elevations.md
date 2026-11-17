---
title: Görünüşlerde ve kesitlerde düzenleme, sayfa boyutları, künyeler ve yeniden adlandırma
summary: Duvarları, kapıları, pencereleri ve katları taşıyın; bir görünüşte veya kesitte duvar, açıklık, kat, boyut ve not çizin; kendi sayfa boyutlarınızı ve künyelerinizi veri olarak tutun ve aileleri, boyutları ve öğeleri proje tarayıcısından yeniden adlandırın.
keywords: görünüşte yeni kat, görünüşte ölçü, görünüşte düzenle, kesitte düzenle, görünüş görünümü, kesit görünümü, görünüşte duvarı taşı, pencere eşiği, kat yüksekliği, katı sürükle, kesitte duvar çiz, görünüşte notlar, açıklama, sayfa boyutu, özel sayfa boyutu, kâğıt boyutu, künye, künye şablonu, sayfa biçimi, kenarlık, alanlar, müşteri, çizen, revizyon, aileyi yeniden adlandır, tipi yeniden adlandır, öğeyi yeniden adlandır, proje tarayıcısı
from: 8726cf83
---

## Ne yapacaksınız

Binayı yandan gördüğünüz yerde değiştirin, ofisinizin kullandığı sayfaları kurun ve aileler, boyutlar ve öğeler için istediğiniz adları verin.

## Bir görünüşte veya kesitte düzenleyin

1. {{ui:Draw}} öğesini açın. **{{ui:Project browser}}** içinde {{ui:Elevations}} veya {{ui:Sections}} öğesini açın.
2. Bir satırdaki kalem düğmesine, {{ui:Edit in this view}} öğesine tıklayın. Görünüm, sayfaların onu çizdiği şekliyle, değiştirebileceğiniz şeyler üstünde açılır.
3. {{ui:Select and move}} ile:
   - görünüme bakan bir duvarı boyunca sürükleyin;
   - bir kapıyı veya pencereyi duvarı boyunca sürükleyin, bir pencereyi de eşiğini değiştirmek için yukarı veya aşağı sürükleyin;
   - bir katın çizgisini yüksekliğini değiştirmek için yukarı veya aşağı sürükleyin;
   - bir notu sürükleyin.
4. {{ui:Door}} ve {{ui:Window}}: gideceği duvara tıklayın (pencere tıkladığınız yükseklikte).
5. {{ui:Wall}} (kesitlerde): kesit düzlemi üzerinde başlayacağı ve biteceği yere tıklayın; ilk tıklamanızın altındaki kata çizilir ve bir sonraki kata kadar uzanır.
6. {{ui:Note}}: tıklayın ve yazın. Notlar dosyada tutulur ve görünümü gösteren her sayfada çizilir.
7. {{ui:Level}}: yeni bir katın gideceği yüksekliğe tıklayın. Üstteki kata kadar olan boşluk kadar yüksektir (en üstte 3000 mm); yüksekliğini değiştirmek için çizgisini sürükleyin. Başka bir katın 50 mm yakınındaki ikinci bir kat reddedilir.
8. {{ui:Dimension}}: başlayacağı ve biteceği yere tıklayın. Tıklamalar duvar, kapı, pencere ve kat kenarlarını yakalar; ölçülendirme, hangi yöne hareket ettirirseniz hareket ettirin yatay veya dikeydir. Dosyada tutulur ve görünümü gösteren her sayfada uzunluğuyla birlikte çizilir. Seçmek için {{ui:Select and move}} ile tıklayın.
9. {{ui:Delete}} veya Delete tuşu seçili duvarı, kapıyı, pencereyi, ölçülendirmeyi veya notu kaldırır. Ctrl+Z, panel açıkken son değişikliği geri alır. Esc, {{ui:Select and move}} aracına geri döner.

Her değişiklik, plandaki değişiklikle aynı değişikliktir ve tek bir geri alma adımıdır: plan, 3B görünüm ve sayfalar onu izler.

## Sayfa boyutları ve künyeler

1. Bir sayfa açın ({{ui:New sheet}} veya **{{ui:Sheets}}** altındaki sizin sayfalarınızdan biri). {{ui:Paper}} yanında {{ui:Title block}} ve {{ui:Formats…}} bulunur.
2. {{ui:Paper}} her standart boyutu (Letter'dan Arch E'ye, A4'ten A0'a) ve sizin kendi boyutlarınızı listeler.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, alışılmış alanlarıyla {{ui:Column (right)}} veya kendinizinki. Seçtiğinizin alanları sayfanın adının altında görünür: müşteriyi, çizeni, revizyonu yazın.
4. {{ui:Formats…}} kendi tanımlarınızı yapmanızı sağlar: bir sayfa boyutu (ad, genişlik, yükseklik, kenarlık) ve bir künye (nereye gideceği, genişliği, her satırda bir alan; büyük yapmak için bir alanı * ile bitirin).
5. {{ui:Export}} bunları bir kütüphane dosyası olarak kaydeder; {{ui:Import…}} bir dosyayı başka bir modele ekler. Bunlar modelde tutulur, böylece bir şablon bunları taşır.

## Aileleri, boyutları ve öğeleri yeniden adlandırın

1. **{{ui:Project browser}}** içinde {{ui:Families}} öğesini açın.
2. Bir ailenin yanındaki kalem onu yeniden adlandırır; her boyutun tipi yeni adı alır.
3. Bir boyutu veya ondan yerleştirilmiş bir öğeyi yeniden adlandırmak için bir ailenin boyutlarını açın (boyut başına en fazla 40 tane listelenir).

Her yeniden adlandırma tek bir geri alma adımıdır.
