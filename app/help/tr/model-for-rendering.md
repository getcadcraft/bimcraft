---
title: Modeli bir render programına gönderin
summary: 3D görünümde gösterilenleri malzemeleri, dokuları ve lambalarıyla birlikte glTF modeli (.glb) olarak kaydedin; glTF okuyan render ve görselleştirme programları için.
keywords: glb, gltf, gl transmission format, dışa aktar, render, görselleştirme, gerçek zamanlı, archviz, malzemeler, dokular, lambalar, ışıklar, varlık, özel varlık
from: e62d57dc
---

{{ui:Render için}} araç çubuğunda, 3D görünümde gösterilenleri tek bir **.glb** dosyası olarak kaydeder (glTF 2.0, Khronos Group'un açık biçimi). glTF okuyan render programları dosyayı modelin malzemeleri ve lambalarıyla açar. Twinmotion, içe aktardığı geometri dosyaları arasında glTF ve GLB'yi listeler ve bunların ışıklarını korur (Epic'in belgesi, "Importing geometry in Twinmotion"): {{ui:Render için}} komutunu kullanın ve .glb dosyasını orada içe aktarın. Hiçbir şey yüklenmez: dosya bu bilgisayarda oluşturulur.

## Kaydetme

1. IFC modelini açın ve 3D görünümü ayarlayın: istemediğiniz katları, öğeleri ya da bağlı modelleri gizleyin ve görmek istediğiniz [malzemeleri boyayın](topic:paint-materials).
2. {{ui:Render için}} tıklayın (ya da `GLB` yazın).
3. Dosya "<model adı>.glb" olarak indirilir. Durum çubuğu kaç üçgen, malzeme ve lamba içerdiğini söyler.

## Dosyanın içerdikleri

- **Geometri**: 3D görünümün gösterdiği her öğenin geometrisi, metre cinsinden, Y yukarı (glTF'nin kendi eksenleri). Her kat ve malzeme için bir nesne, "Seviye 1 — Tuğla, kırmızı" gibi adlarla; böylece render programında bir malzemeyi seçip kendinizinkiyle değiştirebilirsiniz.
- **Malzemeler**: her renk, [Render](topic:render) içinde seçtiğiniz görünümle (mat, saten, parlak, metal, cam…) birlikte; her boyanmış kütüphane malzemesi ise rengi, pürüzlülüğü ve **dokusu** ile (resmi dosyada, gerçek boyutuna ölçeklenmiş: bir tuğla bir tuğla boyutundadır). Cam saydamdır.
- **Lambalar**: Render › Lambalar'da açık olan her aydınlatma armatürü, nokta ya da spot ışık olarak; parlaklığı (lümenden kandelaya çevrilmiş), rengi ve ışın açısıyla.
- **Sitenin konumu**: sitenin enlem ve boylamı başvuru için dosyaya yazılır. Render programlarının kendi güneşi vardır: yeri orada yazın.

## Dışarıda bırakılanlar

- Kesit kesimi (öğelerin bütünü girer) ve saydam gösterilen öğeler (dışarıda kalırlar).
- Öğe öğe nesneler (bunların yerine kat ve malzeme başına bir nesne), IFC özellikleri, kabartma haritaları, kaydedilmiş görünümler ve kaydedilmiş yürüyüşler.
- Kenarlar ve arka plan.

## Enscape ve diğer eklenti render programları

Enscape başka bir tasarım programının içinde çalışır ve bütün bir projeyi açacak bir dosyası yoktur. İki yol var:

- Modelin **IFC** dosyasını (Dosya › Kaydet) Enscape'in çalıştığı programda açın; çoğu IFC okur. Renkler gelir; kütüphane malzemeleri renkleri olarak gelir.
- **Küçük bir parçayı** (mobilya, bir tesisat elemanı) özel varlık olarak getirin: önce izole edin, sonra {{ui:Enscape için (.gltf)}} tıklayın. Enscape'in özel varlık kütüphanesi .glb değil .gltf, .obj ve .fbx dosyalarını listeler; bu düğme aynı sahneyi tek başına duran bir **.gltf** olarak kaydeder (ikili veriler ve resimler dosyanın içindedir; onunla birlikte kopyalanacak başka bir şey yoktur). Enscape küçük varlıkları (yaklaşık 20.000 üçgenin altında) önerir.

:::note
CadCraft Studio'da aynı glTF dosyası (ve bir USD dosyası) {{ui:Render}} › Motor › **glTF dosyası** / **USD dosyası** üzerinden de kaydedilebilir ya da bu bilgisayardaki bir programda doğrudan açılabilir: bkz. [Sahneyi başka bir programda açın](topic:render-open-in). Enscape ya da Twinmotion için bir eklenti ya da canlı bağlantı henüz yapılmadı. FBX ve Datasmith biçimlerinin yayımlanmış bir belirtimi yoktur, bu yüzden BimCraft bunları yazmaz; açık yol glTF'dir.
:::
