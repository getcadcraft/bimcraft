---
title: Geliştirme düzeyi (LOD) ve kilometre taşı denetimleri
summary: Öğelere bir geliştirme düzeyi verin, bunun nereden geldiğini görün, modeli bir kilometre taşının istediği LOD'a göre denetleyin ve eksik etiketleri ile adsız odaları düzeltin. Her denetim yalnızca öneride bulunur; hiçbir şey engellenmez.
keywords: lod, geliştirme düzeyi, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, kilometre taşı, kilometre taşı tablosu, model denetimleri, eksik etiketler, adsız odalar, erken aşama genel, ifc sınıfı, sınıflandırma
from: 2091c79b
---

## Ne yapacaksınız

Her öğenin ne kadar geliştirildiğini belirtin, ardından tüm modeli bir proje kilometre taşının istediklerine göre denetleyin.

## Adımlar

1. Bir öğe (ya da birkaç öğe) seçin ve {{ui:Properties}} bölümünü açın. {{ui:Level of development}} alanını bulun.
2. Listeden bir düzey seçin. Her düzey, ne anlama geldiğiyle adlandırılır ve kendisinin altındaki düzeyleri de içerir. Seçimin tamamını tek bir geri al adımı kapsar.
3. Düzeyin nereden geldiğini okuyun: bu öğeden, tipinden ya da saha doğrulamalı bir işaretten.
4. Modeli denetlemek için solda {{ui:Model checks}} bölümünü, ardından {{ui:LOD milestones}} bölümünü açın. Kilometre taşını ve tabloyu seçin (başlangıç tablosu ya da {{ui:Load}} ile yüklediğiniz kendi CSV ya da JSON dosyanız).
5. {{ui:Check the model}} düğmesine tıklayın. Toplamlar ve tablodaki her satır için bir satır, neyin kendi düzeyine ulaştığını ve neyin ulaşmadığını gösterir; bulgular da Sorunlar listesinde görünür.
6. {{ui:Missing tags and unnamed rooms}} altında {{ui:Find them}} düğmesine tıklayın, isterseniz önerileri düzenleyin ve {{ui:Apply}} düğmesine tıklayın.

## Ne görmelisiniz

- Öğede seçtiğiniz düzey, yanında IFC sınıfı ve sınıflandırma kodlarıyla birlikte.
- Kilometre taşı için toplamlar ve satırlar. Bir tablo düzeyin anlamını asla değiştirmez: ölçek sabittir, tablo yalnızca bir kilometre taşının hangi düzeyi istediğini belirtir.
- "Erken aşamada genel kalma": Erken bir kilometre taşında öğeleri genel tutma önerisi. Yalnızca bir öneridir.

## Bilmeniz iyi olacaklar

- Burada hiçbir şey sizi engellemez. Bir kilometre taşının istediği düzeyin altındaki bir model listelenir, reddedilmez.
- Bir düzeyin üç parçası (geometri, bilgi, belgeleme) ayrı ayrı ayarlanabilir; bir işaret karşılandı, altında veya belirtilmedi olarak gösterilir.
