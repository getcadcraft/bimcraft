---
title: Özellikler paneli alanları
summary: Özellikler paneli ile Dosya, Çizim ve Klasör panellerindeki her alanın ne anlama geldiği ve hangilerini değiştirebileceğiniz.
keywords: özellikler, alanlar, öznitelikler, globalid, guid, kopyala, değeri kopyala, tümünü kopyala, csv, pano, seri numarası, etiket, nesne türü, satır, express id, özellik kümesi, pset, miktarlar, şema, dosya paneli
from: fe55b435
---

## Bir IFC öğesi

{{ui:Özellikler}} panelinin üstünde öğenin türü, "Ifc" öneki olmadan gösterilir (örneğin "Door", "WallStandardCase", "FurnishingElement") ve adı ya da "İsimsiz" yazar.

| Alan | Anlamı | Düzenlenebilir |
|---|---|---|
| Name | Öğenin adı; çoğu zaman dışa aktarıcıdan gelen aile ve tip adı | Evet |
| Type | Öğenin tipinin adı, varsa | Hayır |
| Object type | Bazı dışa aktarıcıların doldurduğu serbest metin tip açıklaması | Evet |
| Tag | Öğenin etiketi ya da işareti; birçok dışa aktarıcı buraya öğe kimliğini yazar | Evet |
| Description | Serbest metin | Evet |
| GlobalId | Öğenin kalıcı 22 karakterlik IFC tanımlayıcısı; aynı öğenin her dışa aktarımında aynıdır | Hayır |
| Line | Öğenin bu IFC dosyasındaki satır numarası (`#1234`); dışa aktarımlar arasında değişir | Hayır |

Aşağıda, adlarına göre sıralanmış **özellik kümeleri** gelir:

- Her küme adına tıklandığında açılır ve kapanır. İlk üçü açıktır.
- "(type)" işaretli bir küme öğenin tipine aittir: "Tip özelliği: buradaki bir değişiklik bu tipteki her öğeye uygulanır."
- Miktar kümeleri (uzunluklar, alanlar, hacimler, sayımlar, ağırlıklar) salt okunurdur.
- Listeler ve numaralandırılmış değerler gösterilir, salt okunurdur.
- Evet/Hayır değerleri **Evet** ya da **Hayır** olarak görünür.
- Sayılar gösterim için dört ondalık basamağa yuvarlanır. Uzunluklar (bir uzunluk özelliği ya da bir miktarın uzunluğu) araç çubuğunda seçilen {{ui:Birimler}} ile, yanında birimiyle gösterilir; o birimde ya da başka bir birim işaretiyle (2.4 m, 8'-0") yeni bir değer yazabilirsiniz: BimCraft dosyanın kendi sayısını geri yazar. Diğer sayılar dosyada olduğu gibi gösterilir.
- Boş bir değer *boş* olarak gösterilir. Düzenlenmiş bir değer kalın yazılır ve yanında mavi bir çubuk bulunur.

## Bir değeri kopyalama

{{ui:Özellikler}} içindeki her değerin yanında küçük bir kopyalama düğmesi vardır: tıklayın, değer gösterildiği gibi panoya konur; örneğin bir GlobalId, bir seri numarası ya da herhangi bir özellik kümesi değeri. Kopyalama asla bir düzenlemeyi başlatmaz.

En üstteki {{ui:Tümünü kopyala}} öğenin her değerini küme küme metin olarak kopyalar. {{ui:CSV olarak kopyala}} ise grup, özellik ve değer satırları halinde kopyalar; bir elektronik tabloya yapıştırabilirsiniz. Boş değerler de her alanın bir satırı olması için tutulur. Açık başka bir modelin öğesi için de aynı çalışır; birden çok model açıksa CSV, dosya adını yazan bir Model sütunuyla başlar.

## Dosya paneli (IFC)

| Alan | Anlamı |
|---|---|
| File, Size | Açtığınız dosya ve boyutu |
| Schema | IFC sürümü, örneğin IFC2X3 ya da IFC4 |
| Project | Projenin adı ve uzun adı |
| Phase | Dışa aktarıcı yazdıysa projenin aşaması |
| Exported from | Dosya başlığındaki dışa aktaran program |
| Author | Dosya başlığındaki yazar |
| Exported | Dosya başlığındaki tarih ve saat |
| Elements | Şekli çizilen öğelerin sayısı |
| Triangles | Şekillerinin oluşturduğu üçgen sayısı; modelin ne kadar ağır olduğunun bir ölçüsü |

## Dosya paneli (proje ve aile dosyaları)

| Alan | Anlamı |
|---|---|
| Kind | Proje, Proje şablonu, Aile ya da Aile şablonu |
| Saved in | Dosyayı en son kaydeden sürüm |
| Build | O sürümün tam yapı numarası |
| Read | Dosya boyutuna göre BimCraft'ın dosyanın ne kadarını okuduğu |

## Çizim paneli (DWG ve DXF)

| Alan | Anlamı |
|---|---|
| Format | Çizimin kaydedildiği sürüm, AC1032 gibi biçim koduyla birlikte |
| Units | Çizimin ekleme birimleri, ayarlıysa |
| Entities | Okunan nesne sayısı |
| Layers | Katman sayısı |
| Sheets | Sayfa (düzen) sayısı ya da None |
| Linked drawings | Bulunup yüklenen bağlı çizim sayısı |
| Equipment | Sayfalarda etiketlenmiş ekipman sayısı |

## Klasör paneli

| Alan | Anlamı |
|---|---|
| Folder, Files, Size | Açtığınız klasör, içerdiği dosya sayısı ve toplam boyutu |
| Models | Proje ve aile dosyaları; her biri yedekleriyle birlikte bir kez sayılır |
| CAD drawings, IFC models | Her birinden kaç tane olduğu |
| Problems | Eksik ya da okunamayan model kopyası sayısı, ya da None |
