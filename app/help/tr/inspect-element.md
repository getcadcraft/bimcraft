---
title: Bir öğeyi seçin ve özelliklerini okuyun
summary: 3B modeldeki herhangi bir öğeye tıklayarak vurgulayın ve adını, türünü, etiketini, GlobalId'sini, özellik kümelerini ve miktarlarını okuyun.
keywords: özellikler, seçme, tıklama, öğe, parametreler, özellik kümeleri, Pset, miktarlar, globalid, guid, tür, inceleme
from: 43b80aa8
---

## Ne yapacaksınız

Bir IFC modelindeki öğeleri seçin ve dosyanın onlar hakkında söylediği her şeyi okuyun: öznitelikler, özellik kümeleri, tip özellikleri ve miktarlar.

## Adımlar

1. Bir IFC modeli açın.
2. Bir öğeye tıklayın, örneğin bir kapıya. Sürüklemeden tıklayın: birkaç pikselden fazla bir sürükleme, seçmek yerine yörüngeye alır.
3. Öğeye bakın: mavi renkle vurgulanır.
4. Sağdaki {{ui:Özellikler}} paneline bakın. En üstte öğenin türü (örneğin "Door" ya da "WallStandardCase") ve adı yer alır.
5. İlk bloğu okuyun: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** ve **Line**.
6. Özellik kümelerine kaydırın. İlk üçü açıktır; diğer bir kümeyi açmak için adına tıklayın.
7. Başka bir öğeye geçmek için ona tıklayın.
8. Seçimi temizlemek için {{key:Esc}} tuşuna basın ya da boş zemine tıklayın.

## Ne görmelisiniz

- Vurgulanmış öğe ve sağdaki verileri.
- Özellik kümeleri alfabetik sırayla. Öğenin **tipinden** gelen kümelerin adından sonra " (type)" yazar ve "Type property: a change here applies to every element of this type." notu gösterilir.
- Miktar kümeleri (uzunluk, alan ve hacim gibi) diğer kümelerle birlikte listelenir. Miktarlar salt okunurdur.
- Değiştirilebilir değerler düğme gibi görünür. [IFC özelliklerini değiştirin ve düzenlenmiş bir kopyayı kaydedin](topic:edit-ifc-properties) nasıl yapılacağını gösterir.

[Özellikler paneli alanları](topic:properties-panel) her alanı açıklar.

## Gizli öğelere erişmek

1. Binanın içindeki bir şeye ulaşmak için {{ui:Katlar}} listesinde onun üstündeki katların işaretini kaldırın.
2. Bir oda hacminin arkasındaki bir duvara ulaşmak için {{ui:Mekânlar}} seçeneğini kapatın.
3. Öğeye tıklayın.

## Sık yapılan hatalar

- **Tıklarken biraz sürüklemek.** BimCraft bunu yörünge olarak alır ve seçmez. Fareyi sabit tutun.
- **Sayıların yanında birim beklemek.** Değerler dosyada saklandığı gibi, dört ondalığa yuvarlanmış ve birim sembolü olmadan gösterilir. Metrik bir dışa aktarmadaki uzunluklar genellikle milimetre ya da metredir; dışa aktarıcının ayarlarını kontrol edin.
- **Bir parametreyi tanıdık adıyla aramak.** Dışa aktarıcılar parametreleri yeniden adlandırır ve `Pset_WallCommon` gibi IFC özellik kümelerine yeniden gruplar. Her kümeye bakın; özel parametreler genellikle dışa aktaran programın ya da şirketinizin adını taşıyan bir kümede bulunur.
- **Arama kutusu beklemek.** Seçmek için tıklayın; {{key:Mod}}+tıklama ya da {{key:Shift}}+tıklama daha fazlasını seçer ve {{key:Mod+A}} gösterilen her öğeyi seçer. Soldaki {{ui:Öğeler}} listesi öğeleri yalnızca türüne göre sayar; tıklanabilir değildir.
- **Bir proje dosyası kartında seçmek.** Bir dosya kartında seçilecek öğe yoktur: "Öğe özellikleri için 3B model gerekir. Bunları görmek için bu dosyanın bir IFC dışa aktarımını açın."
