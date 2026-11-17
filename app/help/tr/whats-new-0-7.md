---
title: 0.7'de neler yeni (önceki)
summary: BimCraft, birden çok katta duvarlar ve Bu seviyeyi kopyala, PDF'lerden ve taramalardan duvarlar, kendi duvar kesitleriniz, daha zengin aileler, bağlantı noktalı MEP ekipmanı, çakışma kümeleri, açıklıklar ve boru spool'ları, varlık belgeleri, COBie ve sensör okumaları, gökyüzü, güneş, ızgarada gün ışığı ve ısıtma ve soğutma yükleri, tarama hizalama, ekran kartında canlı görünüm ve ışın izleme, STEP ve USD, kütüphane varyantları ve yapay zeka asistanları için daha fazlasını ekler.
keywords: 0.7'de neler yeni, önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, katlar boyunca duvarlar, bu seviyeyi kopyala, pdf, tarama, iz, planlardan duvarlar, duvar kesitleri, katmanlar, çekirdek, membran, referans ölçülendirmeler, malzeme kütüphanesi, görüntüleme birimleri, görünüm stili, karkas, kirişler, aileler, parametreler, plan sembolü, sıcak noktalar, tekrar, ayrıntı düzeyi, iç içe aileler, csv boyutları, öğe başına, ekipman, bağlantı noktaları, bağlantılar, boşluklar, açıklıklar, spool'lar, spool sayfaları, saha kaynağı, kanal kesim listesi, belgeler, cobie, sensörler, mqtt, canlı akış, dikey gökyüzü bileşeni, güneş kazancı, gün ışığı ızgarası, ısıtma, soğutma, yükler, u-değeri, tarama hizalama, icp, e57, canlı görünüm, ışın izleme, webgpu, gürültü giderme, fiziksel gökyüzü, ışık karıştırma, render kuyruğu, makineniz, step, usd, proje paketi, kütle geliştir, varyantlar, asistanlar, eklenti api, bitki, elektrik, tasarım denetimleri
from: ef226539
---

Bu, BimCraft 0.6'ya kıyasla 0.7'de değişenlerdir. Liste alana göre gruplanmıştır; en önemli olanlar önce gelir.

## Yeni

### Bir bina çizin

- **Birden çok katta duvarlar.** Duvar aracının yükseklik listesi, Özellikler'in seçilmiş bir duvar için yaptığı gibi, daha yukarıdaki herhangi bir kata kadar **Üste kadar** seçeneğini sunar. Aradaki katların planları duvarı daha açık gösterir, oradaki odalar ona yaslanarak kapanır ve kapılar ile pencereler bu planlardan içine yerleştirilebilir; Özellikler'deki **İçinden geçer** geçtiği katları adlandırır. Bkz. [Bir duvarı, kapıyı veya pencereyi değiştirin](topic:change-a-wall-or-door#change-a-wall).
- **Bu seviyeyi kopyala.** Katlar panelindeki {{ui:Bu seviyeyi kopyala…}} bir katın duvarlarını, kapı ve pencereleriyle, döşemelerini ve tavanlarını başka bir katta ya da üstüne yeni bir katta yeniden çizer; tek bir geri alma adımında. Odalar kendiliğinden görünür. Bkz. [Duvar çizin](topic:draw-walls#levels).
- **Bir PDF'den ya da taramadan duvarlar.** {{ui:Derleme}} › {{ui:Bir çizimden…}} artık bir PDF'i (çizgi çalışması ya da içindeki bir tarama) ya da taranmış bir planı (PNG, JPEG, TIFF, çok sayfalı) alır: her sayfa bir katın duvarları, kapıları, pencereleri ve odaları olur ve sayfa planının altında tutulur. İzleme ağ kullanmaz ve eğitilmiş bir model kullanmaz; sonuç çizgilerin verdiğidir: her katı sayfasıyla karşılaştırın. Bkz. [Bir plan setinden duvarlar](topic:walls-from-plans).
- **Kendi duvar kesitleriniz.** {{ui:Duvar kesitleri…}} bir duvar tipini katman katman, bir çekirdek, hava boşlukları ve membranlarla ve ölçülendirilmiş bir önizlemeyle oluşturur; {{ui:Malzeme kütüphanesi…}} projenin malzemelerini IFC'de tutar; {{ui:Açıklama ekle}} › {{ui:Referans ölçülendirme}} yüzlere ve çekirdek çizgilerine ölçer ve duvarlar değiştiğinde onları izler. Topluluk katkıda bulunanı Doc'tan (drsurfbum). Bkz. [Duvar kesitleri ve referans ölçülendirmeleri](topic:wall-assemblies).
- **Görüntüleme birimleri ve görünüm denetimleri.** Araç çubuğundaki {{ui:Birimler}} uzunlukları feet ve inç, inç, ondalık feet, milimetre, santimetre ya da metre olarak gösterir; ölçülendirmelerde, listelerde, koordinatlarda, ölçümlerde ve kesitlerde. Araç çubuğunda {{ui:Plan}}, {{ui:Böl}} ve {{ui:3B}} bulunur, bölme sürüklenebilir (ya da klavyeyle taşınabilir), {{ui:Gölgeli}}, {{ui:Kenarlar}} ve {{ui:Tel kafes}} görünüm küpünün yanında durur ve çatı eğimi, saçak ve alt yüzey seçilen çatıyı hemen değiştirir. Topluluk katkıda bulunanı Joel'den (yisraelk). Bkz. [Duvar çizin](topic:draw-walls#levels).
- **Açıklığa göre döşeme kirişleri.** {{ui:Karkas}}, mühendislik kirişlerini (ön) yanı sıra kereste de yerleştirebilir; açıklığa ulaşan en küçük listelenmiş seriyi ve derinliği, her iki yönde 16" ya da 24" merkez aralığında seçer. Bunlar IFC'ye ve kesim listesine girer. Bir üreticinin yayımlanmış tablosundan bir öneridir, mühendislik değildir. Ayrıca Joel'den. Bkz. [Duvarların, döşemelerin ve çatıların karkası](topic:framing).
- **Daha fazla elektrik cihazı.** {{ui:Elektrik}} veri, telefon ve görüntü-ses prizleri, bir seçici anahtar, bir zamanlayıcı, bir termostat, duman ve ısı dedektörleri, bir çekme istasyonu ve bir siren, bir fan, bir enerji sayacı ve bir alt pano ekler; her biri kendi IFC sınıfıyla. Bkz. [Elektrik planı](topic:electrical-plan).

### Aileler

- **Aileler daha fazlasını yapar.** Parametreler tam sayı, metin, malzeme, kalem ya da dolgu olabilir; bir aile kendi plan sembolünü çizebilir, bir katı tekrarlayabilir, parçaları daha kaba ayrıntı düzeyleri için işaretleyebilir, diğer aileleri tutabilir (bir masadaki bir bacak) ve sürükleyebileceğiniz sıcak noktalara sahip olabilir; planda yerleştirilmiş bir öğe üzerinde de. Boyutlar bir CSV tablosundan gelir ve **Öğe başına** işaretli parametreler, aynı boyuttaki iki kapının farklı olmasına izin verir. Bkz. [Bir aileyi düzenleyin](topic:family-editor#plan-symbol) ve [Aileler ve boyutları](topic:families#sizes-from-a-table).

### Borular, kanallar ve ekipman

- **Bağlantı noktalı ekipman.** {{ui:Derleme}} › {{ui:Ekipman}} genel bir hava işleyici, hat içi fan, pompa, kazan, su ısıtıcı, terminal ünitesi, difüzör, ızgara ya da depo yerleştirir; girdiğiniz değerlerle boyutlanır, boru ve kanal bağlantıları bağlantı noktaları olarak vardır. Her biri IFC sınıfı ve IFC bağlantı noktalarıyla kaydedilir. Bkz. [MEP ekipmanı bağlantı noktalarıyla](topic:mep-equipment).
- **Bağlı hatlar.** Bir bağlantı noktasından başlayan bir boru ya da kanal, onun boyutunu ve sistemini alır ve ona sabit kalır: pompayı taşıyın, borusu izler. {{ui:Bağlantıları denetle}} açık bağlantı noktalarını, gevşek uçları, boyut ve sistem uyuşmazlıklarını ve hiçbir şeyin beslemediği hatları listeler. Bkz. [Boruları ve kanalları ekipmana bağlayın](topic:mep-connections).
- **Boru ve kanallar yapıya karşı.** {{ui:Çakışma denetimi}} hazır kümelere sahiptir ve {{ui:Borular ve kanallar × yapı}} tek tıklamada; {{ui:Açıklıkları denetle}} her hattın yalıtımını ve sizin yazdığınız bir boşluğu kullanır; {{ui:Gereken boşluklar}} hatların duvarlardan ve döşemelerden nerede geçtiğini CSV ve BCF sorunları olarak listeler. Hiçbir şey kesilmez. Bkz. [Boruları ve kanalları yapıya karşı denetleyin](topic:mep-against-structure).
- **Çelik boru spool'ları.** Çelik bir hat, en uzun bir uzunlukta ve yerleştirdiğiniz {{ui:Saha kaynağı}} noktalarında numaralı spool'lara kesilir. {{ui:Spool sayfaları (PDF)}} her spool için bir sayfa verir: izometrik görünümü, kesim uzunlukları, bağlantı parçaları, kaynaklar ve malzeme listesi ile. {{ui:Kanal kesim listesi}} düz kanal parçalarını listeler. Bkz. [Çelik boru spool'ları ve spool sayfaları](topic:pipe-spools).

Bunlar, boyutlandırması bir mühendise ait olan çizim ve koordinasyon yardımcılarıdır: akış, basınç ya da dengeleme yoktur.

### Binayı işletme

- **Varlık başına belgeler.** {{ui:Varlıklar}} sekmesi kılavuzları, garantileri, fotoğrafları ve çizimleri, IFC'nin yanındaki bir dosya adıyla ya da bir web adresiyle bir varlığa bağlar; IFC'ye yalnızca bağlantı girer. Bkz. [Belgeler](topic:assets-and-maintenance#documents).
- **COBie elektronik tablosu.** {{ui:COBie olarak kaydet (.xlsx)}} COBie 2.4 devir çalışma kitabını yazar; geri okunan bir COBie çalışma kitabı, tek bir {{ui:Uygula}} öncesinde her değişikliği listeler. Henüz bir COBie doğrulayıcısından geçmedi. Bkz. [COBie elektronik tablosu](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensör okumaları ve canlı akışlar.** Okumaların CSV'sini açın ya da tarayıcıdan doğrudan kendi MQTT sunucunuza ya da bina sisteminizin yanıt verdiği bir adrese {{ui:Bağlan}}: her varlık en son okumasını ve bir grafiğini gösterir, modelde renklendirilir ve IFC'de kaydedilmiş sınırların dışına çıkınca işaretlenir. Okumalar sekmede kalır; parolalar asla kaydedilmez. Bkz. [Sensör okumaları](topic:assets-and-maintenance#sensor-readings) ve [Canlı okumalar](topic:assets-and-maintenance#live-readings).

### Gün ışığı ve enerji

- **Her pencerede gökyüzü ve güneş.** {{ui:Gün ışığı}} sekmesi her pencereye dikey gökyüzü bileşenini ve engel açısını verir, {{ui:Bir tarihte pencerelerden giren güneş}} ile bir tarih boyunca güneşi izler ve her odanın planında çizilen {{ui:Izgarada gün ışığı faktörü}}'nü hesaplar. Bkz. [Her pencerenin dikey gökyüzü bileşeni](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Isıtma ve soğutma yükleri.** {{ui:Isıtma ve soğutma yükleri}}, her odanın ısı kaybını, derece-gün verilerinden bir yıllık ısıtmasını ve soğutma zirvesini, modelde onu sınırlayanlardan ve her öğenin U-değerinden hesaplar; orada yazılan bir U-değeri IFC'ye yazılır. Bkz. [Isıtma ve soğutma yüklerini tahmin edin](topic:heating-and-cooling-loads).

Her ikisi de yayımlanmış yöntemlerle tasarım yardımcılarıdır, uygunluk hesapları değildir ve her panel bunu söyler.

### Taramalar

- **Birden çok taramayı hizalayın.** {{ui:Taramaları hizala…}} (başlangıç panelinde ya da {{ui:Göster}} içinde) taramaları seçilen nokta çiftleriyle ya da yazılan hedeflerle tek bir çerçeveye yerleştirir, önce nokta-nokta sonra nokta-yüzey ICP ile iyileştirir, hizalamayı küçük bir proje dosyası olarak kaydeder ve hizalanmış bulutu tek bir LAS ya da E57 dosyası olarak yazar. Bkz. [Birden çok taramayı tek bir yerde hizalayın](topic:register-scans).

### Resimler ve canlı görünüm

- **Canlı görünüm.** Araç çubuğundaki {{ui:Canlı görünüm}}, modeli 3B görünümün yanında gerçek zamanlı görünümde gösterir; onu ve her değişikliği izler, {{ui:Yürü}}, günün saati ve ay ile. {{ui:Yeni pencerede canlı görünüm}} onu ikinci bir ekrana koyar. Bkz. [Canlı görünüm](topic:live-view).
- **Ekran kartında ışın izleme.** WebGPU ile {{ui:Render}} › {{ui:Yüksek kalite (ışın izleme)}} CadCraft'ın kendi ışın izleyicisini ekran kartında çalıştırır, durdurulabilir ve {{ui:Sürdür}} ile devam ettirilebilir ve sonunda gürültüsü giderilir; WebGPU olmadan önceki gibi WebGL ışın izleyicisini kullanır. Bkz. [Yüksek kalite](topic:render#high-quality).
- **Render penceresinde daha fazlası** (ekran kartında, bu yüzden WebGPU gerekir): fiziksel bir gökyüzü ve gökyüzü resimleri, IES ışık profilleri, f-durağı, alan derinliği, iki noktalı perspektif, beyaz dengesi ve 360° panoramalar içeren bir kamera, bitmiş resim için bir derecelendirme, ışık karıştırma ve render sonrası render öğeleri, sis, duman ve kostik, 16 bit PNG, EXR ya da bir render dosyası olarak kaydetme ve bir render kuyruğu. Bkz. [Ekran kartında gökyüzü ve ışık profilleri](topic:render#skies-and-light-profiles-on-the-graphics-card) ve [Render kuyruğu](topic:render#the-render-queue).
- **Makineniz.** {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Render}} › {{ui:Bu makine}} bu tarayıcının uygulamaya izin verdiği grafikleri, işlemci çekirdeklerini ve belleği ve render'ın başladığı düzeyi gösterir. Bkz. [Makineniz ne ile render eder](topic:your-machine).

### Dosyalar ve diğer uygulamalar

- **STEP dosyaları açılır.** Bir `.step` ya da `.stp` parça, ekipman ya da tedarikçi modeli (AP203, AP214, AP242) küçük bir IFC modeli olarak açılır; her katı, incelenebilen, kesilebilen, ölçülebilen ve IFC olarak kaydedilebilen bir öğedir. Renkler ve montajın parça adları henüz okunmaz. Bkz. [BimCraft'ın açtığı ve kaydettiği dosyalar](topic:files#what-it-opens).
- **USD dışa aktarma.** Araç çubuğundaki {{ui:USD}}, açık modelleri `.usda`, `.usdc` ya da `.usdz` olarak yazar; saha, bina, kat ve disiplin olarak düzenlenmiş, her öğenin IFC sınıfı, GlobalId'si ve özellikleriyle. Bkz. [Modeli USD olarak dışa aktarın](topic:usd).
- **CivilCraft'tan bir kütle.** CivilCraft'ın saha görünümünden gönderilen bir bina kütlesi, Özellikler'de çalışma sayılarını gösterir ve {{ui:Bu kütleyi geliştir}} tek bir geri alma adımında her katta ve bir döşemede duvarlar oluşturur. Bkz. [Bir saha çalışmasından bina kütlesini geliştirin](topic:develop-a-mass).
- **Varyantlı kütüphane öğeleri.** Birden çok varyantı olan bir öğe, {{ui:Kütüphane}} sekmesinde bir {{ui:Varyant}} seçeneğine sahiptir; yerleştirilen öğe varyantını IFC'de tutar, {{ui:Öğeyi değiştir…}} diğer varyantları listeler ve kopyalar ile güncellemeler onu korur. Bkz. [Varyantlı bir kütüphane öğesini yerleştirin ve değiştirin](topic:library-variants).
- **Bir klasördeki proje paketleri.** {{ui:Klasör aç}}, {{ui:Proje paketleri}} altında `.ccbundle.zip` dosyalarını listeler ve bir paketteki her düzenin **… içinde aç** seçeneği vardır: PDF'i MarkupCraft'a, DWG'yi CadCraft'a, yeni bir sekmede. Bkz. [Bir düzeni açın](topic:open-project-bundle#open-a-layout).

### Asistanlar ve eklentiler

- **Yapay zeka asistanları için daha fazlası.** Bir asistan artık öğeleri yeniden adlandırabilir ve özellik değerlerini ayarlayabilir, öğeleri taşıyıp silebilir, duvarları, kapıları ve pencereleri değiştirebilir, USD dışa aktarabilir ve bir resmi render edebilir ya da render kuyruğunu çalıştırabilir; her değişiklik tek bir geri alma adımıdır. Bkz. [Bir yapay zeka asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Eklentiler modelde yapabilir.** Eklenti API 1.1, bir eklentinin modelde tek bir geri alma adımı olarak bir değişiklik yapmasına (Canlı TeamWork ile birlikte gider), modeli okumasına ve boru ve kanal hatlarını, bağlantı noktalarını, ekipmanı ve spool'ları okumasına izin verir.
- **Bitki eklentisi** ({{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Eklentiler}} içinde açana kadar kapalıdır): boru özellikleri hatlara karşı denetlenir, bir hattın izometrik çizimleri bir malzeme listesiyle SVG ve DXF olarak, modele yerleştirilen bağlantı ağızlı genel proses ekipmanı, iki bağlantı noktası arasında bir yönlendirici ve bir fabrika yerleşim denetimi. Bir çizim yardımcısıdır, mühendislik onayı değildir; sözcükleri yalnızca İngilizcedir.

## Değişen

- **Dizüstü bilgisayarda ilk ev.** Dizüstü boyutundaki bir ekranda BimCraft yalnızca planla başlar; Çiz çubuğu, planın yanına sığdırıldığı dar bir panel olur; çizim onları dışarıda bıraktığında plan ve 3B görünüm yeniden görünür; 3B görünüm evin tamamını dar bir bölmede çerçeveler ve kapılar ile pencereler ölçülendirme çizgilerinden önce seçilir.
- **Resmi kaydetme.** Render penceresindeki **PNG kaydet** artık {{ui:Kaydet}} oldu; diğer biçimler için yanında {{ui:Farklı kaydet}} var. Bkz. [Resmi kaydedin](topic:render#save-the-picture).
- **Analiz sekmesi** bir {{ui:Tasarım denetimleri}} bloğuna sahiptir: seçilen durumlar için ASCE 7 ya da EN 1990 yük kombinasyonlarını yapar ve her haddelenmiş çelik I-profilini (profil adına ve boyutuna göre bir W, S, IPE, HEA ya da HEB) AISC 360 ya da EN 1993-1-1'e göre denetler, kapasitesinin ne kadarını kullandığını gösterir. Bir mühendis gözden geçirene kadar bir yardımcıdır; kaynaklı profiller ve diğer kesitler "denetlenmedi" der. Bkz. [Tasarım denetimleri](topic:frame-analysis#design-checks).

## Düzeltildi

- Yeni bir aile boyutu oluşturan bir adımdan sonra yinelemek başarısız oluyordu ("boyut yok"). Her adım artık yineleme sırasında aynı IFC GlobalId'lerini yeniden oluşturur; böylece yineleme aileler ve diğer her değişiklik için çalışır.
- İki kişi aynı aileyi kaydettiğinde (Canlı TeamWork oturumunda ya da iki pencerede), ikinci kayıt sessizce ilkinin değişikliğinin üstüne yazıyordu. Artık reddeder ve diğerinin değişikliğini nasıl görüp kendi değişikliğinizi yeniden yapacağınızı söyler.
- ABD arazi feet'inde bir model, doğru değer olan 0.3048006096 m yerine feet başına 0.3048 m olarak okunuyordu; bu da ABD feet'indeki coğrafi referanslı her IFC'yi haritada kaydırıyordu.
- Aile düzenleyicisi: kapatmak artık klavye odağını sayfaya bırakmaz, Kaydet'i bir telefonda görünür tutar ve alanları bir telefonu yakınlaştırmaz.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} uzunluk, alan, hacim, açı ve eğim için birer liste içerir; birimlerin tanımlarının verdiği kesin boyutlarla (ABD arazi feet'i kendi birimidir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birini yıldızlayın ve yeni iş onunla başlar. Bir dosya her zaman kendi birimini tutar. BimCraft'ta araç çubuğundaki {{ui:Birimler}} listesi anahtarları izler, yıldız, siz araç çubuğunda seçene kadar görüntüleme birimlerini belirler (önceki seçiminiz korunur) ve çizim araçlarının uzunluk kutuları herhangi bir birimin işaretini alır, örneğin `3.5 m` ya da `10 US ft`. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sık bir düzen ve kendini toplayan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini tutar). Her kenar panelinin ince bir başlık çubuğu vardır: sürükleyerek yerleştirin ya da yüzdürün, başka bir panelin çubuğuna bırakarak bir çerçeveyi sekme olarak paylaşın, kenara kaydırmak için sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleyin](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan sürükleyerek çizimin yolundan çekin; bıraktığınız yere geri gelir. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [Bir iletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).
- **Yapay zeka asistanları için tarifler.** Kendi asistanınız için on çalışılmış istek (bir çizimi düzenleyin, bir seti çizin, çizimleri denetleyin, bir modele soru sorun, bir metrajı toplayın, bir parça varyantını deneyin…), her biri çağırdığı araçlar ve ihtiyaç duyduğu izinlerle; her biri testlerimiz tarafından yeniden oynatılır. Uygulamaların içinde yapay zeka yoktur. Bkz. [Yapay zeka asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yenidir; o, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahip, ana dili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir; birkaçı İspanyolcadır.
- **CadCraft Studio** güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, kötü imza) ve yalnızca "Bitti" yerine; kapattığınız bir Yenilikler kartını daha yeni bir sürüm çıkana kadar geri getirmez.

## Bu sürümde henüz yok

- **0.7 kod imzalı değil.** İmzalama ve Microsoft Store paketi 0.8'e taşındı, çünkü sertifika doğrulaması henüz gelmedi. getcadcraft.com/download üzerinde her dosyanın yanındaki SHA-256'yı kontrol edin. Windows'ta SmartScreen yükleyiciyi durdurursa, {{ui:Daha fazla bilgi}} ve sonra {{ui:Yine de çalıştır}} seçin. Mac'te ilk kez, CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değil ve henüz bir iPad ya da iPhone sürümü yok.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- Ekran kartında ışın izleme, Render penceresindeki ekstralar ve render kuyruğu WebGPU gerektirir (olmadan yüksek kalite WebGL ışın izleyicisini kullanır); canlı görünüm, tarayıcıda varsa WebGPU'yu, yoksa WebGL 2'yi kullanır. Bunlar burada yalnızca bir yazılım ekran kartı yerine geçen bir sistemde test edildi, henüz gerçek ekran kartlarında değil. Canlı görünümde BimCraft'ta saçılım ya da paylaşım yoktur (ModelCraft'ta vardır).
- Kaydedilmiş bir yürüyüşü video olarak render etme özelliği BimCraft'ta henüz yapılmadı.
- Tasarım denetimleri: IFC profil adı bir W, S, IPE, HEA ya da HEB boyutu olmayan (ya da boyutu ondan farklı olan) bir I-profili kaynaklı sayılır ve "denetlenmedi" olarak döner; tüp, köşebent, kanal, narin parçalar ve burulma da öyle. Denetimleri henüz hiçbir mühendis gözden geçirmedi.
- Çizilmiş öğeler tek tek kopyalanamaz, döndürülemez, aynalanamaz ya da dizilemez (bir bütün kat kopyalanabilir); bölünmüş duvar, Metin aracı ve perde duvar yoktur. Üst katta, alt kattaki bir duvara değen bir duvar o duvarın 3B gövdesine kesilmez ve listeler üst kattaki bir açıklığı kendi duvarının katının altında listeler.
- Aileler: projeler arasında paylaşılan bir aile kütüphanesi henüz yapılmadı. Aileler ve kopyalanmış katlar henüz başka BIM programlarında açılmadı.
- MEP: ekipman geneldir (üretici verisi yoktur); çelik spool'lardaki T parçaları ve redüksiyonlar geneldir, ASME B16.9 tablosundan değildir; {{ui:Kütüphane}} sekmesinden yerleştirilen kütüphane öğelerinin bağlantı noktaları IFC'ye yazılmaz; hiçbir şey bir mühendis tarafından gözden geçirilmemiştir.
- Bitki eklentisi henüz yönlendirilmiş bir hattı modele çizemez, izometriklerindeki spool'ları numaralandıramaz ya da kütüphaneden yerleştirilen ekipmanın yerleşimini denetleyemez.
- CivilCraft'ın bitki kütüphanesindeki bitkiler henüz BimCraft'ın {{ui:Kütüphane}} sekmesinden yerleştirilemez.
- Enerji: saatlik simülasyon, ISO 52016-1 yöntemi ve iklim dosyaları yoktur. Varlıklar: BimCraft kapalıyken okumaları tutan ya da uyarı gönderen barındırılan bir ikiz yoktur.
- Tarama hizalaması test taramalarında denendi, gerçek bir tarayıcının tarama setinde henüz denenmedi; E57 dosyaları hâlâ 6 milyon noktaya ve 512 MB'a kadar açılır.
- Proje paketleri yalnızca BimCraft'ta açılır (diğer uygulamalar bir düzeni **… içinde aç** ile alır); paketler ve iki programlı kit yerine geçen yazılımlara karşı test edildi, Archicad ya da Revit'in kendisiyle henüz değil.

Diğer her şey için bkz. [Henüz yapılmayanlar](topic:not-built-yet).
