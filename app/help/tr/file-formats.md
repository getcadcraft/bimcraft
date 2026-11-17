---
title: BimCraft her biçimden ne okur
summary: BimCraft'ın IFC, proje ve aile dosyalarından, DWG ve DXF'ten tam olarak ne okuduğu ve neye dokunmadığı.
keywords: biçimler, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, sürümler, uyumluluk, ne okunur
from: 9b8dfb4f
---

## IFC

| Okunan | Ayrıntılar |
|---|---|
| Geometri | Şekli olan her öğe, dosyanın dediği renkte. Odalar ve mekânlar geçirgen çizilir ve başta gizlidir |
| Katlar | Yükseklik sırasına göre yapı katları ve her birinde hangi öğelerin durduğu. Hiçbir katta olmayan öğeler "Hiçbir katta değil" altında gruplanır |
| Öğe sayıları | Her türden kaç öğe var (duvarlar, kapılar, döşemeler…), **Öğeler** içinde gösterilir |
| Proje bilgileri | Proje adı, uzun adı ve aşaması; şema; dosya başlığından dışa aktaran program, yazar ve dışa aktarma tarihi |
| Öğe verisi | Ad, tip, nesne türü, etiket, açıklama, GlobalId; öğede ve tipinde bulunan her özellik kümesi ve miktar kümesi |

Düzenlenebilir: ad, nesne türü, etiket, açıklama ve tek tek özellik değerleri. Yeni bir IFC dosyası olarak kaydedilir. IFC2X3, IFC4 ve IFC4X3 şemaları açılır; BimCraft'ın kendi IFC motoru tarafından okunur. Henüz çizemediği her şey, {{ui:Dosya}} panelinde **Henüz çizilmiyor** altında listelenir. Model açıldığında orijine taşınır; bu yüzden orijinden uzak yerleştirilmiş bir model yine ekranın ortasında görünür. `.ifczip` ve `.ifcxml` açılmaz.

## Proje ve aile dosyaları

`.rvt` projeleri, `.rte` proje şablonları, `.rfa` aileleri ve `.rft` aile şablonları.

| Okunan | Ayrıntılar |
|---|---|
| Dosya bilgisi | Sürüm ve derleme, ortak çalışma, merkezi model yolu, son kaydedilen yol, kullanıcı adı, yerel ayar, belge GUID'i |
| Proje bilgisi | Projenin kendi alanları (ad, numara, müşteri, adres, durum…), yeni proje varsayılanları olmadan |
| Aile bilgisi | Aile adı, kategori, sürüm, son güncelleme ve parametreleri gruplara göre |
| Bağlantılar | Dosyanın işaret ettiği bağlı modellerin, CAD bağlantılarının, resimlerin ve anahtar not tablolarının listesi |
| Önizleme resmi | Dosyada kaydedilmiş küçük resim |

Okunmayanlar: 3B model, öğeler, görünümler, sayfalar ve listeler. Bunlar belgelenmemiş bir biçimde saklanır. BimCraft her dosyadan yalnızca birkaç on kilobayt okur; bu yüzden dosya boyutu neredeyse önemli değildir.

## `.pln`, `.pla`, `.tpl` ve `.bpn` proje dosyaları

Henüz okunmuyor: BimCraft bir tane açtığınızda bunu söyler. Modeli IFC, çizimleri DWG olarak dışa aktarın; bkz. [`.pln` ve `.pla` proje dosyalarını açma](topic:pln-project-files).

## DWG ve DXF

| Okunan | Ayrıntılar |
|---|---|
| Alanlar | Model uzayı ve her sayfa (düzen), sekme sırasıyla |
| Görünüm pencereleri | Her sayfanın görünüm pencereleri; ölçekleri, döndürmeleri ve dondurulmuş katmanlarıyla |
| Katmanlar | Ad, renk, açık/kapalı, dondurulmuş, çıktı işareti ve çizgi kalınlığı |
| Nesneler | Çizgiler, çoklu çizgiler, yaylar, daireler, elipsler, splineler, taralamalar ve katılar, metin ve çok satırlı metin, bloklar ve öznitelikler, ölçülendirmeler, belirtme çizgileri ve çoklu belirtme çizgileri, tablolar, noktalar, resimler |
| Bağlı çizimler | Eklendikleri yerde çizilir, dosyaları bulunduğunda |
| Resimler | Bulunduğunda resim dosyalarından çizilir (PNG, JPEG, GIF, BMP, WebP; TIFF değil) |
| Ekipman etiketleri | Yiyecek hizmeti öğe etiketleri (`KCL-ITEM` öznitelikleri), ekipman listesi için |

Diğer her şey **Henüz çizilmiyor** altında sayılır; asla tahmin edilmez. DWG biçimlerinden AutoCAD 2000'den 2018'e kadar olanlar denetlenmiştir (R13 ve R14 dosyaları da kabul edilir, ancak test kümesinde yoktu; daha eski DWG'ler açılmaz). {{ui:Çizim}} paneli biçim kodunu gösterir (AC1032 gibi). Her sürümden DXF dosyaları açılır, R12 dahil. İkisi de BimCraft'ın kendi okuyucuları tarafından, bu sekmede okunur. DWG ya da DXF'e hiçbir şey geri kaydedilmez.

## Bir klasörde

| Tür | Uzantılar | Raporda |
|---|---|---|
| Modeller | `.rvt` `.rfa` `.rte` `.rft` | Numaralı yedeklerle gruplanmış, sağlık denetimi yapılmış, kart okunmuş, bağlantılar denetlenmiş |
| IFC | `.ifc` | Listelenir; 3B'de açılır |
| CAD | `.dwg` `.dxf` `.dgn` | Onları bağlayan modellerle birlikte listelenir; DWG ve DXF 2B'de açılır, DGN açılmaz |
| Artıklar | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | **Ayrı tutulanlar** altında listelenir |
| Bakım klasörleri | `*_backup`, `*_log`, `Revit_temp`, gizli klasörler | **Ayrı tutulanlar** altında listelenir, okunmaz |

Bkz. [Klasör raporu: roller, durumlar ve bağlantılar](topic:folder-roles).
