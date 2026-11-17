---
title: IFC özelliklerini değiştirin ve düzenlenmiş bir kopyayı kaydedin
summary: Bir öğenin adını, etiketini, açıklamasını veya bir özellik değerini değiştirin, geri alın ve özgün dosya olduğu gibi kalırken yeni bir IFC dosyasını indirin.
keywords: düzenle, değiştir, özellikler, parametreler, etiket, ad, yeniden adlandır, işaret, farklı kaydet, indir, geri al, kopya, ifc, yaz
from: f8035d62
---

## Ne yapacaksınız

Bir IFC modelindeki verileri düzeltin: bir öğeyi yeniden adlandırın, etiketini düzeltin, bir özellik değerini değiştirin. Sonra değişikliklerinizle yeni bir IFC dosyası kaydedin. Açtığınız dosya asla değiştirilmez.

## Neleri değiştirebilirsiniz

| Alan | Düzenlenebilir |
|---|---|
| Ad, Nesne türü, Etiket, Açıklama | Evet |
| Tek özellik değerleri (metin, sayılar, Evet/Hayır) | Evet |
| Tip özellikleri ("(tip)" işaretli kümeler) | Evet; değişiklik o tipteki her öğeye uygulanır |
| Tip, GlobalId, Satır | Hayır |
| Miktarlar (uzunluklar, alanlar, hacimler, sayılar) | Hayır |
| Listeler, numaralandırmalar ve diğer çok parçalı değerler | Hayır |
| Geometri, konum, öğe ekleme veya silme | Hayır |

## Adımlar

1. Bir IFC modeli açın ve değiştirmek istediğiniz öğeye tıklayın.
2. **{{ui:Properties}}** panelinde değiştirmek istediğiniz değere tıklayın. Bir metin kutusuna dönüşür. Boş bir değer *boş* olarak görünür.
3. Yeni değeri yazın.
4. Tutmak için {{key:Enter}} tuşuna basın veya başka bir yere tıklayın. İptal etmek için {{key:Esc}} tuşuna basın.
5. Değere bakın: artık kalın yazılmıştır ve yanında bir mavi çubuk vardır; bu düzenlenmiş bir değeri gösterir.
6. Soldaki **{{ui:Changes}}** bölümüne bakın: değişiklik *öğe*: *alan*, eski değerden yeni değere şeklinde listelenir.
7. Diğer değerler veya diğer öğeler için tekrarlayın.
8. {{ui:Save as IFC}} öğesine tıklayın (bekleyen değişiklik sayısını gösterir, örneğin "Save as IFC (3)") veya {{key:Mod+S}} tuşlarına basın.
9. İndirilenler klasörünüzde "*özgün ad* (edited).ifc" dosyasını bulun.

## Ne görmelisiniz

Durum satırı "*ad* (edited).ifc kaydedildi, *n* değişiklikle (… bayt). Özgün dosyanız değişmedi." der. {{ui:Changes}} listesi boşalır ve bir sonraki tur için hazır olur.

## Değer türleri

- **Metin**: yazdığınız her şey olduğu gibi tutulur. Ad, Nesne türü, Etiket veya Açıklamayı temizlemek değeri kaldırır.
- **Sayılar**: dosyanın kendi birimlerinde düz bir sayı yazın, örneğin `2.4` veya `1200`. Birim simgesi yok. Başka bir şey "Bir sayı kullanın." gösterir.
- **Tam sayılar** (sayılar, tamsayılar): ondalık yazarsanız "Bir tam sayı kullanın." gösterilir.
- **Evet/Hayır**: değer Evet ve Hayır içeren bir menüye dönüşür.

Her değer kendi IFC türünü korur; böylece bir sayı sayı olarak kalır ve diğer programlar onu doğru okur.

## Geri alma

1. {{ui:Changes}} bölümündeki {{ui:Undo}} öğesine tıklayın veya bir alana yazmıyorken {{key:Mod+Z}} tuşlarına basın.
2. Daha fazlasını geri almak için tekrarlayın. Her geri alma en yeni değişikliği kaldırır.

Bir kaydetmenin ötesine geri alamazsınız: kaydettikten sonra liste yeniden başlar. Kaydedilen dosya her şeyi tutar.

## Neden düzenlemeniz yalnızca bir öğeyi değiştirir

Dışa aktarıcılar veri paylaşarak yer kazanır. Bir özellik kümesi yirmi kapı tarafından paylaşılıyor olabilir ve bir değer ("Yangın dayanımı: 60 dk") doksan kümede listelenmiş olabilir. BimCraft paylaşılan değeri basitçe değiştirirse, onu paylaşan her öğe de değişir.

Bu yüzden BimCraft yazmadan önce kopyalar:

- Düzenlediğiniz özellik kümesi diğer öğelerle paylaşılıyorsa, öğeniz kümenin kendi kopyasını alır ve yalnızca kopya değişir.
- Değer diğer kümelerle paylaşılıyorsa, kümeniz değerin kendi kopyasını alır.

Komşular eski verilerini korur. Bu, *kopyala-yazarken-kopyala* olarak adlandırılır. Dosyaya birkaç küçük girdi ekler; her IFC programı bunları normal şekilde okur.

**Tip özellikleri bilerek istisnadır.** "(tip)" işaretli bir küme öğenin tipine aittir ve IFC'de o tipteki her öğe onu oradan okur. Bunu değiştirmek tipi değiştirir, böylece o tipteki her öğe yeni değeri gösterir. {{ui:Changes}} listesi bu tür düzenlemeleri "(tip)" ile işaretler. Bkz. [Bir tipin her öğesi için tip özelliğini değiştirin](topic:type-vs-instance).

## Kayıp işten önce uyarılar

- Kaydedilmemiş değişiklikleriniz varken başka bir dosya açmak "*dosya* için *n* kaydedilmemiş değişikliğiniz var. Bunları atmak istiyor musunuz?" diye sorar. Çalışmaya devam etmek için İptal'e tıklayın, sonra kaydedin.
- Kaydedilmemiş değişikliklerle sekmeyi kapatmak veya yenilemek, tarayıcının ayrılıp ayrılmayacağını sormasına neden olur.

## Sık yapılan hatalar

- **Birimleri yazmak.** `2400 mm` reddedilir. `2400` yazın.
- **Bir öğe istediğinizde bir tip özelliğini değiştirmek.** Yazmadan önce "(tip)" notunu arayın. Bir öğenin farklı olmasını istiyorsanız, bunun yerine bir öğe özelliğini veya onun Etiketini ya da Adını değiştirin.
- **Özgün dosyanın değişmesini beklemek.** Kaydetmek her zaman yeni bir dosya indirir. Özgün dosyanın yerine siz koyun, bir kopyasını da saklayın.
- **Hiç değişiklik yokken {{key:Mod+S}} tuşlarına basmak.** BimCraft yalnızca kaydedilecek bir şey olduğunda kaydeder; aksi halde tarayıcının kendi "Sayfayı kaydet" penceresi açılabilir. Onu kapatın.
- **İki kaydetmenin iki küçük dosya vermesini beklemek.** Her kaydetme, modeli açtığınızdan beri yapılan her düzenlemeyi içerir.
- **Düzenlemelerin bir proje dosyasına geri dönmesini beklemek.** BimCraft yalnızca IFC yazar. Düzenlenmiş IFC'yi, herhangi bir IFC'yi içe aktardığınız gibi yapım programınıza aktarın.
