---
title: Modeli Collada olarak veya Google Earth için dışa aktarın
summary: Açık IFC modellerini Blender ve diğer 3B programlar için bir Collada (.dae) dosyası olarak ya da modelin haritadaki yerine yerleştirilmiş bir Google Earth paketi (.kmz) olarak yazın.
keywords: collada, dae, kmz, kml, google earth, blender, dışa aktar, coğrafi konum, georeference, enlem, boylam, konum, 3B programlar
from: 81cfec09
---

{{ui:Collada}} araç çubuğunda (ya da menü ve şerit stillerinde Dosya menüsündeki {{ui:Collada (.dae, .kmz) dışa aktar…}}) açık olanı Collada 1.4.1 olarak yazar: gösterilen her model ve birleştirilmiş modeller de yerleştirdiğiniz yerde.

## Dışa aktarma

1. {{ui:Collada}} seçin.
2. Biçimi seçin:
   - {{ui:Collada dosyası (.dae), Blender ve diğer 3B programlar için}}.
   - {{ui:Google Earth paketi (.kmz): modelin haritadaki yerine yerleştirilmiş olarak}}. Yalnızca modelin bir konumu olduğunda sunulur.
3. Seçenekleri belirleyin, sonra {{ui:Dışa aktar}}. Dosya indirilir ve durum çubuğu kaç öğe eklendiğini gösterir.

| Seçenek | Ne yapar |
|---|---|
| {{ui:Konumu dosyaya yaz}} | Dosyanın başlangıç noktasının enlemini, boylamını, yüksekliğini ve yönünü .dae dosyasına ekler |
| {{ui:Yükseklik}} | {{ui:Zeminde: modelin 0. katı arazi üzerine oturur}} ya da {{ui:Modelin kendi deniz seviyesi yüksekliği}} |
| {{ui:Odaları ve mekânları dahil et}} | Mekânlar da yazılır (varsayılan olarak dışarıda bırakılırlar) |
| {{ui:Gizli öğeleri dahil et}} | Gizlediğiniz öğeler de yazılır (varsayılan olarak yalnızca gördükleriniz yazılır) |

## Dosyada ne var

| Modelde | Collada dosyasında |
|---|---|
| Bina, katlar | İç içe düğümler, katlar yükseklik sırasıyla; hiçbir kata yerleşmemiş öğeler "Yerleştirilmemiş" altında |
| Her öğe | Kendi ağı olan tek bir düğüm; modeldeki gibi adlandırılır (adı, yoksa sınıfı ve etiketi) |
| Sınıf, GlobalId, önceden tanımlı tip | Düğümün ek verisinde (IFC profili), tam adıyla (ModelCraft profili) |
| Renkler | Şeffaflıklı malzemeler |
| Birimler ve eksenler | Metre, Z yukarı. Önde açık olan modelin 0. katı 0 yüksekliktedir |

Model, zemin boyunca başlangıç noktasının yakınında kalır; böylece tek hassasiyetle çalışan programlar onu titreme olmadan gösterir. ModelCraft Collada dosyalarını aynı yazıcıyla yazar ve bu dosyaları öğe adlarıyla açar.

## Konumun nereden geldiği

Önde açık olan model konumu verir; tıpkı {{ui:Ölçüm}} aracının bir noktanın enlem ve boylamını hesaplaması gibi:

- Modelin koordinat sistemi üzerinden bir harita dönüşümü (IFC4 IfcMapConversion ya da IFC2X3 özellik kümeleri). Model için seçtiğiniz bir sistem, dosyanın adını verdiği sistemin önüne geçer.
- Aksi halde sahanın enlemi ve boylamı (yaklaşık; bir saha boyunca yeterlidir).

Yön ölçülür, varsayılmaz: haritanın dönüşünü, gerçek kuzeyi ve haritanın yakınsamasını hesaba katar. Bir modele konum vermek için Ölçüm içindeki {{ui:Harita başlangıcı…}} öğesini kullanın.

## Diğer programlarda

- **Google Earth** .kmz dosyasını okur: model konumunda, kuzeye dönük olarak görünür. Düz bir .dae, Google Earth'ün konumu okuyabileceği bir yere sahip değildir; .kmz kullanın.
- **Blender** (4.x ve öncesi): Dosya, İçe aktar, Collada (.dae). Her öğe kendi malzemesiyle ayrı bir nesne olarak gelir. Konum, Blender'ın okumadığı dosyanın ek verisinde tutulur. Blender 5.0 yerleşik Collada içe aktarıcısını kaldırdı; orada bunun yerine {{ui:USD}} ya da glTF dışa aktarmasını kullanın ya da .dae dosyasını Blender 4.5'te açıp bir .blend olarak kaydedin.

Testlerimiz her dosyayı Collada 1.4.1 şemasına karşı denetler ve bağımsız bir Collada okuyucusuyla geri okur. Bu dosyaları Blender ya da Google Earth'te açmadık.
