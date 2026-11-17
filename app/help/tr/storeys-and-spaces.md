---
title: Katları, mekânları ve kenarları gösterme ve gizleme
summary: Bir binanın içini görmek için katları kapatın, odaları ve mekânları gösterin ve kenar çizgilerini açıp kapatın.
keywords: katlar, seviyeler, döşemeler, gizle, izole et, odalar, mekânlar, ifcspace, kenarlar, görünürlük, kesit
from: b838dcc0
---

## Ne yapacaksınız

Bir IFC modelinin içine, ilgilendiğiniz kattan üstteki katları kapatarak bakın; sonra odaları ve mekânları gösterin ve daha temiz bir görünüm için kenar çizgilerini kapatın.

## Adımlar: bir katı inceleyin

1. Bir IFC modeli açın. Bkz. [IFC modelini açın ve 3B'de gezinin](topic:open-ifc-model).
2. Soldaki {{ui:Katlar}} listesini bulun. En üst kat ilk sıradadır; tıpkı bir kesiti çatıdan aşağı doğru okumak gibi.
3. Çatının ve görmek istediğiniz kattan yukarıdaki her katın işaretini kaldırın.
4. Bu kata yukarıdan bakmak için {{ui:Üst}}'e tıklayın.
5. Katları yeniden göstermek için işaretleri tekrar koyun.

## Ne görmelisiniz

İşaretini kaldırdığınız her kat, üzerindeki her şeyle birlikte hemen kaybolur. Liste yalnızca görünür bir şey içeren katları gösterir. Hiçbir kata atanmamış öğeler, en altta **Bir katta değil** olarak gruplanır; arsa öğeleri ve bazı mobilyalar çoğu zaman oraya düşer.

## Adımlar: odaları ve mekânları gösterin

1. Modelin üstündeki araç çubuğunda {{ui:Mekânlar}}'a tıklayın. Düğme basılı kalır.
2. Modele bakın: odalar ve mekânlar soluk, geçirgen hacimler olarak görünür.
3. Adını, numarasını ve alanını gibi özelliklerini sağda okumak için bir mekâna tıklayın.
4. Gizlemek için {{ui:Mekânlar}}'a yeniden tıklayın.

Mekânlar, aksi halde duvarları ve döşemeleri kaplayacağı için model açıldığında gizlidir.

## Adımlar: kenarlar

1. İnce kenar çizgilerini kapatmak için {{ui:Kenarlar}}'a tıklayın.
2. Yeniden açmak için tekrar tıklayın.

Çok büyük modellerde (1.5 milyon üçgenin üzerinde) düğme, "Çok büyük modeller için kenarlar kapalı" ipucuyla birlikte gri olur. Bu, bellekten tasarruf sağlar.

## Sık yapılan hatalar

- **Bir katın işaretini kaldırıp hâlâ onun bazı parçalarını görmek.** Bir öğe, onu dışa aktaran programın atadığı kata aittir. Uzun bir duvar ya da bir merdiven çoğu zaman yalnızca temel katına aittir; bu yüzden üstteki kat gizlendiğinde kalır, ya da alttaki kat gizlendiğinde kaybolur.
- **İçini görmek için katları gizlemek.** Bir kesit kutusu çoğu zaman daha hızlıdır: bkz. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane#a-section-box). Ayrıca {{ui:Model ağacı}} içindeki satırların işaretini kaldırabilirsiniz (bkz. [Model ağacında yolunuzu bulun](topic:model-tree)).
- **Bir duvarın öbür tarafındaki bir mekâna tıklamak.** Tıklama, en yakın görünür yüzeyi seçer. Üstteki katı gizleyin ya da {{ui:Üst}}'e geçin, sonra tıklayın.
- **Kat adları garip görünüyor.** BimCraft, dosyada kayıtlı kat adlarını gösterir. Adlar "Seviye 1" ya da bir sayı diyorsa, dışa aktarıcının yazdığı budur.
