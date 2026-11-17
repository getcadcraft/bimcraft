---
title: Bir proje dosyasından IFC aracılığıyla BimCraft'a
summary: BimCraft'ta en iyi açılan IFC dışa aktarma ayarları (sürüm, özellik kümeleri, temel metrajlar, odalar, bağlı modeller, koordinatlar), sonucu nasıl açacağınız ve dışa aktarımın neyi koruduğu.
keywords: dışa aktarma, ifc dışa aktarma, rvt'den ifc'ye, dönüştür, 3B, geometri, ifc2x3, ifc4, koordinasyon görünümü, referans görünümü, tasarım aktarım görünümü, özellik kümeleri, temel metrajlar, odalar, mekânlar, bağlı dosyalar, ortak koordinatlar, ölçü noktası, proje temel noktası, ayarlar
from: 3efd5fc9
---

## Neler yapacaksınız

Bir proje dosyasını, BimCraft'ta döndürebileceğiniz, inceleyebileceğiniz, denetleyebileceğiniz ve düzenleyebileceğiniz bir IFC dosyasına çevirin. BimCraft henüz bir `.rvt` dosyasının içindeki 3B modeli okumaz; bu nedenle dışa aktarma, dosyayı yapan programda (Revit) yapılır; BimCraft sonucu açar.

## Adımlar

1. Projeyi onu yapan programda açın. BimCraft'ın kartı, kaydedildiği sürümü adlandırır.
2. Dışa aktarmak istediğiniz şeyi gösteren bir 3B görünüm açın.
3. **Dosya > Dışa Aktar > IFC** seçin.
4. Dışa aktarma iletişim kutusunda, aşağıdaki ayarlarla bir kurulum seçin (ya da **Kurulumu değiştir…**).
5. Bir klasör ve dosya adı seçin, sonra dışa aktarın.
6. BimCraft'ta {{ui:Dosya seçin}} düğmesine tıklayın ve yeni `.ifc` dosyasını seçin. Ayrı dosyalar olarak dışa aktarılan bağlı modeller, {{ui:Model ekle}} ile aynı sahneye açılır.

## Bu sayfada en iyi açılan ayarlar

| Dışa aktarıcıdaki ayar | Seçin | Neden |
|---|---|---|
| IFC sürümü | İnceleme, denetim ve metraj için **IFC4 Referans Görünümü**; başkalarının IFC2X3'e ihtiyacı olduğunda **IFC2X3 Koordinasyon Görünümü 2.0** | İkisi de tam olarak açılır. **IFC4 Tasarım Aktarım Görünümü** de açılır; daha kesin şekillerle, ama dosya daha büyük ve daha yavaştır. |
| Dosya türü | **IFC** (düz) | BimCraft `.ifczip` ya da `.ifcxml` açmaz. |
| Evre / görünür öğeler | İstediğiniz evre ve 3B görünümü bunun için kurduğunuzda **Yalnızca görünümde görünen öğeleri dışa aktar** | Kasıtlı olarak gizlediklerinizi dışarıda bırakır. |
| Özellik kümeleri | **Revit özellik kümelerini dışa aktar** ve **IFC ortak özellik kümelerini dışa aktar** | Bunlar, BimCraft'ın **Özellikler**'de gösterdiği ve {{ui:Bul}}, {{ui:Renk}} ve {{ui:Model denetimleri}}'nin kullandığı özellik kümeleri olur. |
| Temel metrajlar | **Temel metrajları dışa aktar** | {{ui:Miktar toplamları}} ve listeler, tahmin etmek yerine bunları kullanır (uzunluklar, alanlar, hacimler). |
| Odalar ve alanlar | **3B görünümlerde odaları dışa aktar** (ya da Odalar / Mekânlar seçeneği) | Odalar mekân olarak gelir: görmek için {{ui:Mekânlar}}'a tıklayın. |
| Bağlı dosyalar | **Bağlı dosyaları ayrı IFC'ler olarak dışa aktar** | Her bağlantı kendi dosyası olur; {{ui:Model ekle}} ile birlikte açın, hizalanırlar. |
| Koordinat tabanı | **Ortak koordinatlar** (ya da ölçü noktası) | Dosya haritadaki yerini taşır (IfcMapConversion); böylece Ölçü › Konum, zemindeki harita katmanları ve harita koordinatlarıyla yerleştirilen nokta bulutları çalışır. Proje temel noktası modeli orijine yakın tutar, ama haritadaki yerini taşımaz. |
| Duvarları ve kolonları kata göre böl | Her kattaki metrajı aldığınızda açık | Her katın parçası kendi öğesi olur. |

## Ne görmelisiniz

3B'de model; katlar projenin katlarından alınmış, proje bilgileri ise {{ui:Dosya}} panelinde. **Şuradan dışa aktarıldı** dışa aktarıcıyı adlandırır.

## Dışa aktarım neyi tutar, neyi tutmaz

- **Tutulur**: geometri, katlar, öğe türleri, adlar, tipler, çoğu parametre (özellik kümeleri olarak), istendiğinde temel metrajlar, mekânlar olarak odalar ve ortak koordinatlarla harita yeri.
- **Tutulmaz**: görünümler, sayfalar, açıklamalar, düzenlenebilir aile olarak aileler, çalışma kümeleri ve tasarım seçenekleri. Bir IFC dosyası modelin öğelerinin bir anlık görüntüsüdür, proje değil. Sayfalar için DWG dışa aktarın ve 2B görünümde açın.

## Sık yapılan hatalar

- **BimCraft'ta parametreler eksik.** Yukarıdaki özellik kümesi seçeneklerini açın ve yeniden dışa aktarın.
- **Odalar eksik.** Oda seçeneğini açın, sonra {{ui:Mekânlar}}'a tıklayın.
- **`.ifczip` olarak kaydetmek.** Düz IFC seçin ya da `.ifczip`'i açın.
- **Harita yeri yok.** Ortak koordinatlarla dışa aktarın; projenin ölçü noktasının ayarlı olduğunu denetleyin.
- **Düzenlemelerin geri aktarılacağını sanmak.** BimCraft'ta kaydettiğiniz düzenlemeler proje dosyasına değil, yeni bir IFC dosyasına gider.
