---
title: Bir tipin bir özelliğini, o tipteki her öğe için değiştirin
summary: Tip özelliklerini örnek özelliklerinden ayırın, tip üzerinde bir değeri değiştirin ki her öğe onu izlesin ve bir öğenin kendi düzenlemesinin yalnızca kendisine ait kaldığını denetleyin.
keywords: tip, örnek, tip özellikleri, aile tipi, paylaşılan, yazarken kopyalama, tüm öğeler, toplu düzenleme, üretici, model
from: bffd8789
---

## Ne yapacaksınız

Bir kapı tipinde üreticiyi ayarlayın ki o tipteki her kapı bunu göstersin, sonra bir kapıya diğerlerine dokunmadan kendi yangın dayanımını verin. Bu, BimCraft'ta tip ve örnek özellikleri arasındaki farkı gösterir.

## Tip mi, örnek mi?

- Bir **örnek** özelliği tek bir öğeye aittir: etiketi, işareti, odası, kendi yangın dayanımı.
- Bir **tip** özelliği, birçok öğenin paylaştığı tipe aittir: üretici, model, bir kapı tipinin genişliği.

{{ui:Properties}} panelinde tipten gelen kümelerin adından sonra " (tip)" yazar ve "Tip özelliği: Buradaki bir değişiklik bu tipteki her öğeye uygulanır." satırı bulunur. Diğer her küme öğenin kendisine aittir. İlk bloktaki **Tip** tipin adını gösterir.

## Adımlar: tipi değiştirin

1. Bir IFC modelini açın ve bir kapıya tıklayın.
2. {{ui:Properties}} panelinin ilk bloğunda kapının **Tip** değerini not edin, örneğin "Single-Flush 900 x 2100".
3. Adı " (tip)" ile biten bir kümeye kaydırın.
4. Değiştirmek istediğiniz değere tıklayın, örneğin **Üretici**.
5. Yeni değeri yazın ve {{key:Enter}} tuşuna basın.
6. {{ui:Changes}} listesine bakın: girdi " (tip)" ile biter.
7. Aynı tipten başka bir kapıya tıklayın.
8. Aynı değeri kontrol edin: o da yeni değeri gösterir.

## Adımlar: yalnızca bir öğeyi değiştirin

1. Bir kapıya tıklayın.
2. Adında " (tip)" olmayan bir küme açın, örneğin `Pset_DoorCommon`.
3. Bir değere, örneğin **FireRating** değerine tıklayın, yeni bir değer yazın ve {{key:Enter}} tuşuna basın.
4. Yanındaki, aynı tipten kapıya tıklayın.
5. Aynı değeri kontrol edin: hâlâ eski değeri gösterir.

Dışa aktaran program o özellik kümesini iki kapı arasında paylaştırmış olsa bile, BimCraft değiştirmeden önce ilk kapıya kendi kopyasını verdi. Bkz. [Düzenlemeniz neden yalnızca bir öğeyi değiştirir](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Kaydet

1. {{ui:Save as IFC}} tıklayın veya {{key:Mod+S}} tuşuna basın.
2. Kaydedilen kopyayı BimCraft'ta veya herhangi bir IFC görüntüleyicide açarak iki değişikliği de kontrol edin.

## Sık yapılan hatalar

- **Her modelde tip yoktur.** Bazı dışa aktarıcılar hiç tip nesnesi yazmaz veya her şeyi örneğe koyar. O zaman " (tip)" kümesi yoktur ve her öğe ayrı ayrı değiştirilmelidir.
- **Aynı değer hem bir tip kümesinde hem bir örnek kümesinde görünür.** Bazı dışa aktarıcılar bir parametreyi iki yere de yazar. Diğer programlar ikisinden birini okuyabilir; birbirleriyle uyuşmalarını istiyorsanız ikisini de değiştirin.
- **"Bu tipteki tüm kapıları" seçip birlikte düzenlemeyi beklemek.** Bu sürümde çoklu seçim yoktur. Birçok öğeyi aynı anda değiştirmenin yolu bir tip özelliğidir.
