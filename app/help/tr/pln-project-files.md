---
title: .pln ve .pla proje dosyalarını açın
summary: BimCraft'ın bugün .pln, .pla, .tpl ve .bpn dosyalarıyla ne yaptığı ve model ile çizimlerin burada açılması için bu dosyalardan IFC ve DWG'nin nasıl dışa aktarılacağı.
keywords: pln, pla, tpl, bpn, proje dosyası, arşiv, şablon, yedek, ifc dışa aktarma, dwg dışa aktarma, çevirici, bölgeler, düzenler
from: 41fb921d
---

## Ne yaparsınız

Proje olarak kaydedilmiş bir `.pln` (proje), kütüphanesiyle birlikte bir `.pla` (arşiv), bir `.tpl` (şablon) veya bir `.bpn` (yedek) dosyasını BimCraft'a getirin. Bunlar Archicad'in kendi dosyalarıdır.

## Bugün ne açılır

- **Proje dosyaları henüz açılmaz.** Biçimleri yayımlanmamıştır ve BimCraft henüz okumaz. Birini açtığınızda BimCraft bunu söyler ve bu konuya yönlendirir.
- **BimCraft dosyanın ilk baytlarını denetler.** 17. sürümden itibaren Archicad projeleri aynı kısa imzayla başlar; bu yüzden BimCraft bir dosyanın Archicad projesi olduğunu kesin olarak söyleyebilir. Archicad adı taşıyan ama bu şekilde başlamayan bir dosya büyük olasılıkla yeniden adlandırılmış, bozulmuş ya da daha eski bir sürümden gelmiştir. İmza; proje, arşiv ve şablonu birbirinden ayırt etmez.
- **IFC dışa aktarması tam açılır**: modeli 3B olarak, katları, bölgeleri mekân olarak, öğe verilerini, özellik kümelerini ve sınıflandırmaları, her BimCraft aracıyla birlikte.
- **DWG dışa aktarması açılır**: 2B görünümde, katmanları ve düzenleriyle birlikte, ayrıca {{ui:3B}} içinde. Düzenlemek için {{ui:CadCraft'ta düzenle}} kullanın.

Ya da görünümleri, düzenleri ve özellik gruplarıyla birlikte tüm projeyi tek bir zip dosyası olarak getirin: bkz. [Bir proje paketi açın](topic:open-project-bundle).

## IFC dışa aktarma (model)

1. Projeyi Archicad'de açın.
2. **Dosya > Farklı Kaydet** seçin ve dosya türü olarak **IFC** seçin.
3. Bir IFC çeviricisi seçin (Archicad'in bir IFC dışa aktarma ayarları kümesi için kullandığı ad). **IFC4 Reference View** ya da **IFC2X3 Coordination View 2.0** için bir çevirici BimCraft'a uyar. IFC4X3 de açılır.
4. Neyin dışa aktarılacağını seçin: tüm proje ya da yalnızca baktığınız katlarda görünen öğeler.
5. Kaydedin, sonra BimCraft'ta {{ui:Dosya seçin}} düğmesine tıklayın ve `.ifc` dosyasını seçin.

Dışa aktarmadan önce çeviricinin ayarlarında şunları denetleyin:

- **Bölgeler**: bunları dışa aktarın, böylece odalar mekân olarak gelir. Bunları görmek için BimCraft'ta {{ui:Mekânlar}} tıklayın.
- **Özellikler ve sınıflandırmalar**: bunları dışa aktarın, böylece {{ui:Özellikler}} içinde görünürler ve {{ui:Bul}}, {{ui:Renk}} ve {{ui:Miktar toplamları}} içinde kullanılabilirler.
- **Düz `.ifc`**, `.ifczip` ya da `.ifcxml` değil. BimCraft yalnızca düz `.ifc` açar.

## DWG dışa aktarma (çizimler)

1. İstediğiniz planı, kesiti veya düzeni açın.
2. **Dosya > Farklı Kaydet** seçin ve dosya türü olarak **DWG** seçin.
3. Bir DXF-DWG çeviricisi seçin ve kaydedin.
4. Bir bütün sayfa takımı için düzenleri Layout Book'tan kaydedin ya da DWG olarak yayımlayın.
5. `.dwg` dosyasını BimCraft'ta açın. Dışa aktarmanın bağladığı çizimler aynı klasördeyse onlarla birlikte açılır; bkz. [Bağlı çizimler ve resimler](topic:dwg-linked-files).

## Sorun giderme

- **"… bir Archicad projesi: ilk baytları bunu söylüyor."** Yukarıdaki gibi IFC ya da DWG dışa aktarın ve o dosyayı açın.
- **"… bir Archicad dosyası gibi adlandırılmış ama öyle başlamıyor."** Dosyanın nereden geldiğine bakın: yeni bir adla başka tür bir dosya olabilir (gerçek uzantısıyla açmayı deneyin), tamamlanmamış bir kopya olabilir ya da 17. sürümden önceki bir proje olabilir. Mümkünse Archicad'de açın, sonra IFC ya da DWG dışa aktarın.
- **Model odalar olmadan açılır.** Bölgeler dışa aktarılmamış. IFC çeviricisinde bunları açıp yeniden dışa aktarın.
- **Açıklıklar kesilmemiş.** BimCraft bunu {{ui:Dosya}} panelinde **Henüz çizilmedi** başlığı altında söyler. Yeniden dışa aktarın; sorun sürerse modeli onu oluşturan programda açıp açıklıkları orada denetleyin.
- **DWG üzerindeki metin farklı görünüyor.** Dışa aktarma, BimCraft'ta olmayan yazı tiplerini tutmuş olabilir; BimCraft metni sade bir sans-serif yazı tipiyle çizer.

Ayrıca bkz. [Bir proje dosyasını IFC üzerinden 3B'ye alın](topic:rvt-to-ifc) ve [BimCraft her biçimden ne okur](topic:file-formats).
