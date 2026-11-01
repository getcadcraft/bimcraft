---
title: BimCraft ekranı
summary: Her çubuğun, panelin ve düğmenin ekrandaki adıyla gezintisi ve ekranın her dosya türü için nasıl değiştiği.
keywords: ekran, yerleşim, paneller, araç çubuğu, arayüz, ui, gezinti, özellikler paneli, tarayıcı, uygulama çubuğu
from: 2eb01ec2
---

BimCraft ekranında üstte bir çubuk, altında üç alan vardır: solda bir panel, ortada sahne ve sağda {{ui:Özellikler}} paneli. Her alanda ne göründüğü, neyi açtığınıza bağlıdır: bir IFC modeli, bir proje ya da aile dosyası, bir çizim veya bir klasör.

## Uygulama çubuğu

Üstteki ince çubuk BimCraft'a değil, CadCraft sitesine aittir. Soldan sağa:

- CadCraft işareti: CadCraft ana sayfasına gider.
- Uygulama adı ve bir sürüm menüsü. Ekip sürümünde hangi derlemeyi çalıştırdığınızı gösterir ve yayımlanmış bir sürüme geçmenizi sağlar.
- {{ui:BimCraft hakkında}}: uygulamanın sitedeki sayfası.
- {{ui:Ayarlar}}: BimCraft'ın kendi ayarları ve her uygulamanın paylaştığı ayarlar. Bkz. [BimCraft ayarları](topic:settings).
- {{ui:Tam ekran}}: ekran modları arasında geçiş yapar. Aşağıda [Ekran modları](topic:workspace#screen-modes) bölümüne bakın.
- {{ui:Kâğıt}} ve {{ui:Model}}: açık ve koyu temalar. 3B görünüm ve 2B çizimler seçtiğiniz temayı izler.

## Sol panel

Sol panel her zaman **Dosya veya klasör aç** ile başlar:

- Bırakma alanı, {{ui:Bir dosya seçin veya bir dosyayı ya da klasörü buraya bırakın}}. Tek bir dosya seçmek için tıklayın ya da üzerine (veya sayfanın herhangi bir yerine) bir dosya veya klasör bırakın.
- {{ui:Klasör aç}}: bir proje klasörünün tamamını seçin. Bkz. [Bir proje klasörünün tamamını açma](topic:open-project-folder).
- {{ui:Son klasörler}}: Chrome ve Edge'de bir klasörü klasör seçiciyle veya bırakarak açtıktan sonra görünür. Yeniden açmak için {{ui:Yeniden aç}} düğmesine ve klasör adına, unutmak için küçük × işaretine tıklayın.

Bunun altında bölümler geçerli oldukça görünür:

| Bölüm | Ne zaman görünür | İçinde ne var |
|---|---|---|
| {{ui:Değişiklikler}} | Bir IFC modeli açıkken | Kaydedilmemiş düzenlemeleriniz, en yenisi üstte, {{ui:Geri al}} ve {{ui:IFC olarak farklı kaydet}} ile |
| {{ui:Dosya}} | Bir model veya dosya kartı açıkken | Dosya hakkında bilgiler: boyut, şema veya sürüm, proje, yazar, öğe sayısı |
| {{ui:Çizim}} | Bir DWG veya DXF açıkken | Biçim, birimler, öğe ve katman sayıları, sayfalar, bağlı çizimler, ekipman |
| {{ui:Klasör}} | Bir klasör açıkken | Dosya ve model sayıları, boyut, bulunan sorunlar |
| {{ui:Klasöre dön}} | Bir dosyayı bir klasörden açtığınızda | Klasör raporuna döner |
| {{ui:Katmanlar}} | Bir çizim açıkken | Katman başına bir onay kutusu, {{ui:Tümünü aç}} ve {{ui:Tümünü kapat}} ile |
| {{ui:Katlar}} | Bir IFC modeli açıkken | Kat başına bir onay kutusu, en üst kat başta |
| {{ui:Öğeler}} | Bir IFC modeli açıkken | Modelin her türden kaç öğe içerdiği (en yaygın 30) |

## Sahne

Ekranın ortası açık dosyayı gösterir.

- **Boş**: "Bir yapı modeli açın." yazısı, {{ui:Dosya seçin}} ve {{ui:Klasör aç}} düğmeleri ve her biçimin kısa bir açıklaması.
- **IFC modeli**: üstünde bir araç çubuğu olan 3B görünüm; araçlar CadCraft çizim uygulamasındaki gibi adlandırılmış gruplardadır, her aracın simgesi adının üstündedir: {{ui:Görünüm}} ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}, {{ui:Kenarlar}}, {{ui:Mekânlar}}); {{ui:Düzenle}} ({{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}}, {{ui:Yapıştır}} ve {{ui:Daha fazla}}, bkz. [Kütüphane öğelerini kopyalama, yapıştırma ve çoğaltma](topic:copy-paste)); {{ui:Model}} ({{ui:Birimler}} ve {{ui:Çiz}}); {{ui:Kütüphane}} ({{ui:Kütüphane}}, {{ui:Ekipman}}, {{ui:Güncellemeler}}, {{ui:Katkılar}}); {{ui:İnceleme}} ({{ui:Göster}}, {{ui:Kesit}}, {{ui:Yürü}}, {{ui:Ölç}}; bkz. [Bir IFC modelini kesit düzlemiyle kesme](topic:section-plane)); ve {{ui:Çıktı}} (render, canlı görünüm, VR, dışa aktarmalar, boyama ve kayıtlı görünümler). {{ui:Çiz}} açıkken altındaki Çizim çubuğu aynı görünüme sahiptir: {{ui:Görünüm}} (kat ve plan türü), {{ui:Çiz}}, {{ui:Düzenle}} ve {{ui:Kütüphane}}. Sağ alt köşede bir görünüm küpü bulunur. Bkz. [Bir IFC modelini açma ve 3B'de etrafa bakma](topic:open-ifc-model). {{ui:Ayarlar}}, {{ui:Genel}} bu düğmelerde simge, etiket veya ikisinin birden görünmesini seçer, grup adlarını gösterir veya gizler; araçlarını ve gruplarını düzenlemek için araç çubuğuna sağ tıklayın. Kısa bir pencerede araç çubuğu simgelerin altındaki adları kaldırır.
- **Proje veya aile dosyası**: önizleme resmi, proje bilgileri ve bağlı dosyalarla dosya kartı. Bkz. [Bir proje veya aile dosyasını okuma](topic:read-rvt-file).
- **DWG veya DXF**: bir sekme sırası ({{ui:Model}}, ardından sayfa başına bir tane, çizimde etiketli ekipman varsa {{ui:Ekipman}}, {{ui:3B}}, {{ui:Sığdır}} ve {{ui:Çıktı görünümü}}), çizim ve bir köşede canlı X ve Y koordinatları. Bkz. [Bir DWG veya DXF çizimini görüntüleme](topic:view-dwg) ve [Bir DWG veya DXF çizimini 3B'de görme](topic:dwg-in-3d).
- **Klasör**: {{ui:Buradan başlayın}} kutusu ile modellerin, bağlantıların, IFC modellerinin ve çizimlerin tablolarını içeren klasör raporu. Bkz. [Bir proje klasörünün tamamını açma](topic:open-project-folder).

Sahnenin altındaki **durum satırı**, BimCraft'ın ne yaptığını ("Model okunuyor…", "Geometri oluşturuluyor: 5400 öğeden 1200'ü") ve bir şey başarısız olduğunda neyin ters gittiğini kırmızıyla söyler. Başarı iletileri birkaç saniye sonra kaybolur.

## Özellikler paneli

Sağ panel şunları gösterir:

- Bir IFC modeli için: tıkladığınız öğe; adı, tipi, etiketi, GlobalId'si ve her özellik kümesiyle. Değiştirebileceğiniz değerler düğme gibi görünür. Bkz. [Özellikler paneli alanları](topic:properties-panel).
- Bir çizim için: nasıl dolaşılacağı, çizimin bağlı çizimleri ve resimleri ile her birinin bulunup bulunmadığı ve **Henüz çizilmedi** listesi.
- Bir dosya kartı veya klasör için: sırada neyin açılacağına dair kısa bir not.

## Küçük bir ekranda

Pencere bir dizüstü bilgisayar ekranından dar olduğunda BimCraft alanlarını üst üste dizer: üstte sahne, altında paneller. Panellere ulaşmak için sayfayı kaydırın. Telefonda tek sütun, tablette iki sütun oluştururlar.

## Ekran modları

Uygulama çubuğundaki {{ui:Tam ekran}} düğmesi veya her platformda {{key:Ctrl+Shift+F}} üç mod arasında geçiş yapar:

1. Normal.
2. Tam ekran, çubuklar hâlâ görünür.
3. Uygulama çubuğu gizli tam ekran. Geri getirmek için işaretçiyi üst kenara götürün veya oraya dokunun.

Normale dönmek için {{key:Esc}} tuşuna basın. Tam ekranı desteklemeyen tarayıcılar (iPhone'daki gibi) yalnızca normal ile gizli çubuklar arasında geçiş yapar.

## İlgili

- [Tuşlar ve fare](topic:keyboard)
- [BimCraft'ın açtığı ve kaydettiği dosyalar](topic:files)
