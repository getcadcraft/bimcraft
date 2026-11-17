---
title: Boru özellikleri, vanalar, damperler ve üretici aileleri
summary: Kendi boru özelliklerinizi kurun (malzeme, bağlantı ve pürüzlülük içeren boyut tabloları), modelin dosyasında saklanacak şekilde; hatlara vana, süzgeç ve damper yerleştirin; bir üreticinin vana ya da ekipman modelini bağlantı noktalarıyla bir aile olarak getirin.
keywords: boru özelliği, boru özellikleri, boru spesifikasyonu, boru sınıfı, özel boru, boyut tablosu, tüp, hijyenik tüp, paslanmaz, liste, dış çap, et kalınlığı, iç çap, pürüzlülük, basınç sınıfı, csv, json, içe aktar, dışa aktar, elektronik tablo, standart, bpe, din, en 10357, en 10255, vana, vanalar, kelebek vana, dengeleme vanası, kontrol vanası, süzgeç, damper, hacim damperi, yangın damperi, oem, üretici, imalatçı, aile, aileler, bağlantı noktaları, bağlantı, step, obj, gltf, ifc, radyatör, konvektör, panel ısıtıcı, klima santrali, difüzör, panjur
from: bc2f7c4e
---

## Neler yapacaksınız

Boru hatlarını yerleşik çelik, bakır ve plastik tablolar yerine kendi özelliğinizle çizin, hatlara vana ve damper koyun ve bağlanacak bağlantı noktaları olan bir üreticinin modelini yerleştirin.

:::note
Çizim ve koordinasyon yardımcısıdır. Bir boru özelliği, yazdığınız ya da içe aktardığınız sayıları tutar: her tabloyu proje standardınıza göre kontrol edin. Yerleşik vanalar, süzgeçler ve damperler hatta göre boyutlandırılmış şematik şekillerdir; bir üreticinin ya da bir vana standardının uzunluğunu temsil etmezler.
:::

## Bir boru özelliği kurun

1. {{ui:Çiz}}'i açın, {{ui:Derleme}}'yi açıp {{ui:Boru özellikleri}}'ni seçin. Aynı düğme Boru aracı çubuğunda da bulunur.
2. {{ui:Yeni}} seçin ya da bir dosyadan, bir yapıştırmadan veya bir başlangıç özelliğinden (aşağıya bakın) başlayın.
3. Adını, takip ettiği standardı veya referansı, malzemesini ve uç ya da bağlantı tipini yazın.
4. Her boyut için bir satır yazın: boyutun adı, milimetre cinsinden dış çap ve et kalınlığı. Elinizde varsa et kalınlığı yerine iç çapı yazın; diğeri doldurulur. DN, basınç sınıfı ve ağırlık isteğe bağlıdır.
5. İsteğe bağlı: milimetre cinsinden pürüzlülük (basınç düşümü hesabı bunu kullanır), yeni hatların başlayacağı yalıtım kalınlığı, dış çapın bir katsayısı olarak dirsek yarıçapı, özelliğin te ve redüksiyonları olup olmadığı ve 3B'de kendi rengi.
6. Yeni hatların bu özellikte başlamasını istediğiniz servisleri işaretleyin; örneğin soğutulmuş su.
7. {{ui:Modelde kaydet}} seçin.

Özellikler model dosyasında kaydedilir. Dosyayı açan herkes bunlara sahip olur ve {{ui:Geri al}} bir değişikliği geri alır.

Bir hat bu özellikte çizilmişken özellik ya da boyutlarından biri silinemez. Bir boyutun sayılarını değiştirmek, o boyuttaki hatları yeniden çizer.

## Özelliği başka bir modelde yeniden kullanın

- {{ui:.json dışa aktar}} seçili özelliği küçük bir dosyaya kaydeder; {{ui:Tümünü dışa aktar}} modelin her özelliğini kaydeder. {{ui:Dosya içe aktar}} bunları geri okur.
- {{ui:.csv dışa aktar}} boyut tablosunu bir elektronik tablo için kaydeder. {{ui:Dosya içe aktar}} bir `.csv` dosyasını da okur.
- {{ui:Satırları yapıştır}} bir elektronik tablodan kopyalanmış bir tabloyu alır. İlk satır sütunları adlandırır: `Size`, `OD` ve `Wall` (ya da `ID`), isteğe bağlı olarak `DN`, `Pressure`, `Weight`. Her boyut için bir satır. Sayılar milimetredir; inç seçmediğiniz ya da bir hücre birimini yazmadığınız sürece (`0.065 in`).

## Başlangıç özellikleri

{{ui:Başlangıç özelliği ekle}}, bunlardan birini modelinize düzenleyebileceğiniz bir kopya olarak ekler:

| Başlangıç | Boyutlar |
|---|---|
| ASME BPE tüp | 1/4" ile 6" arası |
| EN 10357 A serisi tüp (DIN 11850 sıra 2) | DN10 ile DN200 arası |
| EN 10255 çelik tüp, orta seri | DN15 ile DN150 arası |
| EN 10255 çelik tüp, ağır seri | DN15 ile DN125 arası |

Bu tablolar, standart için en az iki yayımlanmış tedarikçi sayfasının yazdığı ve birbiriyle uyuşan dış çaplar ve et kalınlıklarıdır. Standartların kendisinden alınmamıştır. Yalnızca bir sayfanın verdiği boyutlar çıkarılmıştır. Her başlangıç özelliği kaynak sayfalarını gösterir ve "proje standardınıza göre kontrol edin" ile işaretlenir. Pürüzlülük, basınç sınıfı ya da ağırlık verilmez.

## Bir özellikte hat çizin

1. {{ui:Boru}} seçin. Bir özellikte işaretlediğiniz servis orada başlar. Diğer hatlar için malzeme listesinden özelliği seçin: özellikler, yerleşik malzemelerden sonra "Özellik: ad" olarak listelenir.
2. Boyut listesi artık yalnızca o özelliğin boyutlarını içerir. Birini seçin ve hattı çizin.

Bir hattı sonradan bir özelliğe taşımak için onu seçin ve Özellikler'de **Malzeme**'yi değiştirin. Boyutu, dış çapa göre özelliğin en yakın boyutu olur.

IFC dosyasında boru, özelliğin adını, standardını, malzemesini, bağlantısını ve boyutlarını taşır (`CadCraft_PipeSpec` ve `Pset_PipeSegmentTypeCommon`; borunun kendisinde ve tipinde).

Boyutlandırma ve basınç düşümü hesapları özelliğin iç çapını okur. Özelliğin pürüzlülüğü varsa, bir hattın sürtünmesi onunla hesaplanır (Darcy-Weisbach); yoksa hesabın olağan varsayılanı kullanılır.

## Vanalar, süzgeç ve damperler

1. {{ui:Vana}} seçin ve çubuktan türü seçin: borular için kapı, bilye, kelebek, glob, çek, dengeleme veya kontrol vanası ya da bir süzgeç; kanallar için hacim damperi veya yangın damperi.
2. Yerleşeceği hattın üzerine tıklayın. Hat etrafından kesilir ve iki taraf da bağlı kalır. Vana hattın boyutunu alır ve hatla birlikte hareket eder.

Hattın Özellikleri her birini {{ui:Kaldır}} ile listeler; hat yeniden kapanır.

Basınç düşümü hesabı yalnızca kapı, bilye, glob ve çek vanalar için bir bağlantı kaybı sayar. Diğer türler, damperler ve üretici aileleri orada kayıp eklemez: bunları kendi kontrolünüzde hesaba katın. Bunlar **Bağlantı parçaları ve vanalar** listesinde ve metrajda sayılır ve IFC'ye vanalar, bir filtre (süzgeç) ve iki bağlı bağlantı noktalı damperler olarak yazılır.

## Bir üreticinin modeli bir aile olarak

1. {{ui:Derleme}}'yi açın ve {{ui:Aileler}}'i, sonra {{ui:Model içe aktar}}'ı seçin. IFC, STEP, OBJ, STL, glTF ve Kütüphane öğesi dosyaları okunur. OBJ ve STL için önce dosyanın birimlerini ve yukarı eksenini ayarlayın.
2. Bağlantı noktaları iletişim kutusunda adı, üreticiyi ve model numarasını yazın.
3. **Bir hatta** (vana, süzgeç ya da damper) mı yoksa **Ekipman** mı olacağını seçin ve IFC'ye nasıl yazılacağını belirleyin.
4. Bağlantı noktalarını verin. Her birinin adı, boru ya da kanal, servisi, milimetre cinsinden boyutu (borunun dış çapı), özelliğinizin adlandırdığı nominal boyut, uç tipi, konumu ve yüzünün baktığı yön vardır. {{ui:Bir yüzde}}, modelin kutusunun bir yüzünün merkezine bir bağlantı noktası koyar. Küçük üst görünüm bağlantı noktalarını gösterir.
5. {{ui:Aileyi modele kaydet}} seçin.

Bir hatta konacak bir aile, birbirinden uzağa bakan tam olarak iki bağlantı noktasına, tek bir çizgi üzerinde sahip olmalıdır. Vana aracının listesinden seçin ve bir hatta tıklayın: kendi uzunluğunda yerleştirilir ve borular bağlantı noktalarına bağlanır.

Bir aile asla gerilmez. Bağlantı noktaları hattın boyutunda değilse, yerleştirirken bunu öğrenirsiniz ve {{ui:Bağlantıları denetle}} onu listeler.

Ekipman ailesi {{ui:Ekipman}} ile, tür **Üretici ailesi** olarak yerleştirilir. Borular ve kanallar bağlantı noktalarına yapışır.

{{ui:Kütüphane öğesi olarak indir}}, bağlantı noktalarıyla birlikte bir aileyi Kütüphane'ye gönderebileceğiniz bir dosya olarak kaydeder.

## Radyatörler ve konvektörler

{{ui:Ekipman}} ayrıca **Radyatör** ve **Konvektör / panel ısıtıcı** seçeneklerine sahiptir: ısıtma suyu için bir gidiş ve dönüş bağlantısı olan genel gövdeler. Bkz. [Bağlantı noktalı MEP ekipmanı](topic:mep-equipment).
