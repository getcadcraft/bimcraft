---
title: Aileler ve boyutları
summary: Kapılar, pencereler ve mobilyalar ailelere ayrılır. Bir ailenin her boyutu IFC dosyasında bir tiptir; böylece BimCraft'taki tip listesi kısa kalır, diğer programlar ise düz tipleri okur.
keywords: aile, aileler, tip, tipler, boyut, boyutlar, kapı tipi, pencere tipi, mobilya, tablo, raf, dolap, yeni boyut, çoğalt, aile yerleştir, aile dosyası, ccfamily, ifc kütüphanesi, proje kütüphanesi, grup, görünürlük, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Aile nedir

Bir aile, birkaç boyutta gelen tek bir türdür: 32, 36 ve 42 inç genişliğinde tek kanatlı bir kapı ya da uzun ve kısa bir masa. BimCraft'ta aileyi, uzun bir tip listesi yerine, boyutları altında olacak şekilde bir kez görürsünüz.

IFC'de aile yoktur. Dosyada her boyut sıradan bir tiptir (bir kapı tipi, bir pencere tipi, bir mobilya tipi…) ve aile, boyutlarını listeleyen bir gruptur. Diğer BIM programları tipleri ve grubu olduğu gibi okur; BimCraft aileyi onlardan geri okur.

## Nerede bulunurlar

- Proje tarayıcısındaki **Aileler** grubu, bu modeldeki aileleri, her birinin kaç boyutu olduğu ve kaç tanesinin yerleştirildiğiyle listeler. Onların altında **Başlangıç aileleri** bulunur: Kapı ve Pencere araçlarının kapı ve pencereleri ile bir masa, bir raf ünitesi ve bir taban dolap.
- {{ui:Derleme}} › {{ui:Aileler…}} aynı listeyi bir pencerede gösterir.
- Bir aileyi açmak için tıklayın: boyutları, her boyutun değerleri ve her boyutu kullanan öğe sayısı.

## Kapılar ve pencereler

Kapı ve Pencere araçları, o türdeki aileleri, yanlarında bir **boyut listesi** ile listeler. Bir boyut seçin ya da **W** ve **H** yazın: henüz hiçbir boyutta olmayan bir genişlik ve yükseklik, kapıyı yerleştirdiğinizde ailenin yeni bir boyutu olur. Aynı boyuttaki kapılar tek bir tipi paylaşır.

{{ui:Özellikler}} bölümünde seçili bir kapı ya da pencere, **Aile** ve **Boyut** değerlerini gösterir. Listeden başka bir boyut seçin ya da yeni bir genişlik ya da yükseklik yazın. {{ui:Aileyi aç}} öğesi, ait olduğu aileyi açar.

Her kapı ya da pencerenin çerçevesi, ailelerden önceki gibi, kendi duvarının kalınlığını izler. Boyutun tipi ayrıca, tipleri okuyan programlar için, kapıyı 140 mm'lik bir duvarda çizilmiş olarak tutar.

## Bu aileden yeni boyut

1. Aileyi açın.
2. **Bu aileden yeni boyut** altında değerlerini yazın (Genişlik, Yükseklik ve ailenin diğer parametreleri) ve isterseniz bir ad. Ad verilmezse değerlerinden adlandırılır.
3. {{ui:Boyut oluştur}} öğesine tıklayın.

İki boyut aynı değerlere sahip olamaz. **Yeniden adlandır** bir boyutun adını değiştirir; **Kaldır** kullanılmayan bir boyutu siler; **Seç** o boyutun öğelerini seçer.

## Mobilya yerleştirme

1. {{ui:Derleme}} › {{ui:Aile yerleştir}} ya da bir ailenin penceresindeki {{ui:Yerleştir}}.
2. Çubukta ailesini ve boyutunu seçin.
3. Kata yerleştirmek için plana tıklayın. Tıklamadan önce {{key:R}} tuşuna basarak 90° döndürün. {{key:Esc}} ile durdurulur.

Yerleştirilmiş bir parçanın {{ui:Özellikler}} bölümü boyutunu, yerini ve ne kadar döndürüldüğünü gösterir; {{key:Delete}} tuşu onu kaldırır. Aynı boyuttaki her parça, o boyutun şeklini paylaşır; bu yüzden aileyi değiştirmek hepsini değiştirir.

## Tablodan boyutlar

Bir ailenin penceresindeki {{ui:Tablodan boyutlar…}} bir CSV dosyası okur (virgül, noktalı virgül ya da sekme). İlk satır sütunların adını verir: bir parametrenin adı ya da etiketi ve isteğe bağlı olarak `Name`. Uzunluklar, bir birim yazmadığınız sürece milimetredir (`1.2 m`, `36 in`). Evet / Hayır sütunları yes, no, true, false, 1 ya da 0 kabul eder; sütunu olmayan bir parametre varsayılanını korur. Her satır bir boyut olur; tek bir adımda, geri alınabilir. Zaten var olan bir boyut atlanır. Okunamayan ya da ailenin çizemediği tek bir satır, tüm tabloyu reddeder ve satır numarasını bildirir. En fazla 200 satır ve 1 MB. {{ui:Boyutları tablo olarak kaydet}} aynı tabloyu geri yazar.

## Her öğe için ayarlanan

Düzenleyicide **Öğe başına** olarak işaretlenmiş bir parametre (bir kapıya üst pencere, bir etiket ya da bir malzeme ekleyen Evet / Hayır) boyutun parçası değildir: aynı boyuttaki iki kapı farklı olabilir. Öğeyi seçin; **Özellikler** bu parametreleri gösterir. Birini değiştirin; o öğe kendi şekliyle yeniden çizilir (mobilya ve donanımlar kendi şekillerini alır, kapı ve pencereler duvarlarında yeniden yapılır). Hepsini varsayılanlarına döndürürseniz, boyutunun şekline geri döner.

## Ayrıntı düzeyi

{{ui:Derleme}} › {{ui:Aileler…}} › **Ayrıntı düzeyi**, modeldeki her aile için katılarda ne kaydedileceğini ve plan sembollerinde ne çizileceğini belirler: **İnce** her şeyi tutar; **Orta** ve **Kaba**, düzenleyicinin daha ince olarak işaretlediği parçaları dışarıda bırakır (daha küçük dosyalar, daha hızlı görünümler). **Otomatik** her şeyi kaydeder ve bir sayfanın görünümünün ölçeğine göre seçmesine izin verir: 1:50 ve daha büyükleri ince, 1:100 orta, 1:200 ve daha küçükleri kaba. Geri alınabilir tek bir adım.

## Bir aileyi çoğaltma

Sıfırdan başlamanız gerekmez. {{ui:Çoğalt}} bir aileyi parametreleri, katıları ve boyutlarıyla yeni bir adla kopyalar. Kopyayı düzenleyicide değiştirin; özgün aile olduğu gibi kalır.

## Aile dosyaları

- {{ui:Aile dosyasını kaydet}} bir `.ccfamily.json` kaydeder: ailenin parametreleri, katıları ve boyutları. Onu başka bir modelde Aileler grubundaki {{ui:Aile dosyası aç…}} ile açın.
- {{ui:IFC olarak farklı kaydet}} aileyi küçük bir IFC dosyası olarak kaydeder: boyutlarının tipleri ve grubu, bir IFC proje kütüphanesi tarafından tanımlanmış. Diğer programlar onu bir tipler kümesi olarak açar; BimCraft onu yeniden aile olarak açar.

Burada açılan bir aile dosyası veri olarak okunur ve hiçbir şey yazılmadan önce denetlenir. Anahtarı modelde zaten olan bir aile, ayrı bir aile olarak gelir. Başka aileleri içeren bir aile (düzenleyici yardımındaki İçindeki aileler bölümüne bakın) onları da beraberinde getirir: dosya bunları listeler ve model zaten sahip olduklarını tutar.

## Kütüphanedeki aileler

{{ui:Aileler…}} öğesini açın ve Kütüphane'de paylaşılmış aileleri görmek için {{ui:Kütüphaneden…}} seçin. {{ui:Bu projeye ekle}} birini bir aile dosyası gibi okur: BimCraft hiçbir şey oluşturmadan önce her alanı denetler; aile kendi başına bir aile olarak gelir ve düzenleyicide açılır. Eklemek tek bir geri al adımıdır. Kendi ailenizi paylaşmak için {{ui:Tümünü kütüphane olarak kaydet}} öğesini kullanın ve dosyayı Kütüphane'ye gönderin (Kütüphane ekibi aile dosyasını bir komutla yayımlar ve her aile kendi boyutlarıyla ayrı bir öğe olur). Kütüphaneye ulaşılamazsa liste bunu söyler ve hiçbir şey değişmez.

## Diğer programların tipleri

Diğer programların oluşturduğu tipler de Aileler grubunda, bir tahmine göre gruplanarak gösterilir: öğelerinin adlarındaki ilk nokta üst üste (:) işaretinden önceki kısma göre; ya da yalnızca numaraları farklı olan tip adlarına göre. Aile penceresi hangi tahmini kullandığını söyler. Bunlar listelenir ve öğeleri seçilebilir, ama burada düzenlenmez: aile reçeteleri yoktur.

:::note
Başlangıç kapıları ve pencereleri, aileler öncesinde olduğu gibi çizilir. Ailelerden önce yapılmış dosyalar değişmeden açılır: kapıları ve pencereleri kullanılan boyutlarla ailelerinin altında görünür ve onları ilk değiştirdiğinizde kendi boyutlarına taşınır.
:::

Ayrıca bkz. [Bir aileyi düzenleme](topic:family-editor) ve [Kapılar ve pencereler](topic:doors-and-windows).
