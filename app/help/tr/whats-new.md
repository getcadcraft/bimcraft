---
title: 0.7'de yenilikler
summary: BimCraft, birden çok seviyeye uzanan duvarlar ve Bu seviyeyi kopyala, PDF'lerden ve taramalardan duvarlar, kendi duvar kesitleriniz, daha zengin aileler, bağlantı noktalı MEP ekipmanı, çakışma kümeleri, açıklıklar ve boru parçaları, varlık belgeleri, COBie ve sensör okumaları, gökyüzü, güneş, ızgarada gün ışığı ve ısıtma ve soğutma yükleri, tarama hizalama, canlı görünüm ve grafik kartında ışın izleme, STEP ve USD, kütüphane varyantları ve yapay zekâ asistanları için daha fazlasını ekler.
keywords: yenilikler, neler yeni, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, seviyeler boyunca duvarlar, bu seviyeyi kopyala, pdf, tarama, izleme, planlardan duvarlar, duvar kesitleri, katmanlar, çekirdek, membran, referans ölçülendirmeler, malzeme kütüphanesi, görüntü birimleri, görünüm stili, karkas, kirişler, aileler, parametreler, plan sembolü, sıcak noktalar, yineleme, ayrıntı düzeyi, iç içe aileler, csv boyutları, öğe başına, ekipman, bağlantı noktaları, bağlantılar, açıklıklar, boru parçaları, parça sayfaları, saha kaynağı, kanal kesim listesi, belgeler, cobie, sensörler, mqtt, canlı akış, dikey gökyüzü bileşeni, güneş kazancı, gün ışığı ızgarası, ısıtma, soğutma, yükler, u-değeri, taramaları hizala, icp, e57, canlı görünüm, ışın izleme, webgpu, gürültü giderme, fiziksel gökyüzü, ışık karıştırma, render kuyruğu, makineniz, step, usd, proje paketi, bu kütleyi geliştir, varyantlar, asistanlar, eklenti api, tesis, elektrik, tasarım denetimleri
from: 5c27b80a
---

BimCraft 0.6'ya kıyasla 0.7'de neyin değiştiğini gösterir. Liste, alana göre gruplanmıştır; en önemliler başta yer alır.

## Yeni

### Bina çizin

- **Birden çok seviyeye uzanan duvarlar.** Duvar aracının yükseklik listesi, Özellikler'in seçilmiş bir duvar için yaptığı gibi, yukarıdaki herhangi bir seviyeye kadar **Şu seviyeye kadar** seçeneğini sunar. Aradaki seviyelerin planları duvarı daha açık gösterir, oradaki odalar duvara yaslanır ve kapılar ile pencereler bu planlardan yerleştirilebilir; Özellikler'deki **Geçtiği seviyeler** hangi seviyelerden geçtiğini adlandırır. Bkz. [Duvarı, kapıyı veya pencereyi değiştirin](topic:change-a-wall-or-door#change-a-wall).
- **Bu seviyeyi kopyala.** Seviyeler panelindeki {{ui:Bu seviyeyi kopyala…}}, bir seviyenin duvarlarını, kapı ve pencerelerini, zeminlerini ve tavanlarını başka bir seviyeye ya da üstte yeni bir seviyeye yeniden çizer; tek bir geri al adımında. Odalar kendiliğinden görünür. Bkz. [Duvar çizin](topic:draw-walls#levels).
- **PDF'den veya taramadan duvarlar.** {{ui:Derleme}} › {{ui:Bir çizimden…}} artık bir PDF'yi (içindeki çizgi çalışması ya da tarama) ya da taranmış bir planı (PNG, JPEG, TIFF, çok sayfalı) alır: her sayfa bir seviyenin duvarları, kapıları, pencereleri ve odaları olur; sayfa, planının altında tutulur. İzleme ağ kullanmaz ve eğitilmiş bir model kullanmaz; sonuç çizgilerin verdiği sonuçtur: her seviyeyi sayfasıyla karşılaştırın. Bkz. [Plan takımından duvarlar](topic:walls-from-plans).
- **Kendi duvar kesitleriniz.** {{ui:Duvar kesitleri…}} bir duvar türünü katman katman, bir çekirdek, hava boşlukları ve membranlarla ve ölçülendirilmiş bir önizlemeyle oluşturur; {{ui:Malzeme kütüphanesi…}} projenin malzemelerini IFC içinde tutar; {{ui:Açıklama ekle}} › {{ui:Referans ölçülendirme}} yüzeylere ve çekirdek çizgilerine ölçer ve duvarlar değiştiğinde onları izler. Topluluk katkıcısı Doc (drsurfbum) tarafından. Bkz. [Duvar kesitleri ve referans ölçülendirmeler](topic:wall-assemblies).
- **Görüntü birimleri ve görünüm denetimleri.** Araç çubuğundaki {{ui:Birimler}}, uzunlukları fit ve inç, inç, ondalık fit, milimetre, santimetre veya metre olarak gösterir; ölçülendirmelerde, listelerde, koordinatlarda, ölçümlerde ve kesitlerde. {{ui:Plan}}, {{ui:Böl}} ve {{ui:3B}} araç çubuğunda yer alır, bölme sürüklenebilir (ya da klavyeden taşınabilir), {{ui:Gölgeli}}, {{ui:Kenarlar}} ve {{ui:Tel kafes}} görünüm küpünün yanında durur; çatı eğimi, saçak ve saçak altı seçilen çatıyı hemen değiştirir. Topluluk katkıcısı Joel (yisraelk) tarafından. Bkz. [Duvar çizin](topic:draw-walls#levels).
- **Zemin kirişleri açıklığa göre.** {{ui:Karkas}}, mühendislik kirişlerini (ön değerlendirme) ve biçilmiş kerestenin yanı sıra yerleştirebilir; açıklığa ulaşan en küçük listelenmiş seriyi ve derinliği seçer, her iki yönde 16" ya da 24" merkez aralığıyla; IFC'ye ve kesim listesine girerler. Bir üreticinin yayımladığı tablodan bir öneri, mühendislik hesabı değil. Yine Joel'den. Bkz. [Duvarları, zeminleri ve çatıları karkaslama](topic:framing).
- **Daha fazla elektrik cihazı.** {{ui:Elektrik}}, veri, telefon ve görüntü-ses prizleri, bir seçici anahtar, bir zamanlayıcı, bir termostat, duman ve ısı dedektörleri, bir çekme istasyonu ve bir siren, bir fan, bir enerji sayacı ve bir alt pano ekler; her biri kendi IFC sınıfında. Bkz. [Elektrik planı](topic:electrical-plan).

### Aileler

- **Aileler daha fazlasını yapar.** Parametreler tam sayı, metin, bir malzeme, bir kalem ya da bir dolgu olabilir; bir aile kendi plan sembolünü çizebilir, bir katıyı yineleyebilir, parçaları daha kaba ayrıntı düzeyleri için işaretleyebilir, diğer aileleri barındırabilir (bir masadaki bir ayak) ve sürüklediğiniz sıcak noktalara sahip olabilir; planda yerleştirilmiş bir öğe üzerinde de. Boyutlar bir CSV tablosundan gelir ve **Öğe başına** işaretli parametreler, aynı boyuttaki iki kapının farklı olmasını sağlar. Bkz. [Bir aileyi düzenleme](topic:family-editor#plan-symbol) ve [Aileler ve boyutları](topic:families#sizes-from-a-table).

### Borular, kanallar ve ekipman

- **Bağlantı noktalı ekipman.** {{ui:Derleme}} › {{ui:Ekipman}}, genel bir hava işleyici, hat içi fan, pompa, kazan, su ısıtıcısı, uç birim, difüzör, izgara ya da depo yerleştirir; boyutları yazdığınız değerlerle belirlenir ve boru ile kanal bağlantıları bağlantı noktası olarak eklenir. Her biri, IFC bağlantı noktalarıyla birlikte kendi IFC sınıfı olarak kaydedilir. Bkz. [Bağlantı noktalı MEP ekipmanı](topic:mep-equipment).
- **Bağlı hatlar.** Bir bağlantı noktasında başlatılan bir boru ya da kanal, onun boyutunu ve sistemini alır ve ona sabitlenir: pompayı taşıyın, borusu onu izler. {{ui:Bağlantıları denetle}}, açık bağlantı noktalarını, serbest uçları, boyut ve sistem uyuşmazlıklarını ve hiçbir şeyin beslemediği hatları listeler. Bkz. [Boruları ve kanalları ekipmana bağlayın](topic:mep-connections).
- **Boru ve kanallar yapıya karşı.** {{ui:Çakışma denetimi}} hazır kümelere sahiptir ve tek tıkla {{ui:Borular ve kanallar × yapı}} verir; {{ui:Açıklıkları denetle}}, her hattın yalıtımını artı yazdığınız bir aralık kullanır; {{ui:Gereken boşluklar}}, hatların duvarlardan ve döşemelerden geçtiği yerleri CSV ve BCF sorunları olarak listeler. Hiçbir şey kesilmez. Bkz. [Boruları ve kanalları yapıya karşı denetleyin](topic:mep-against-structure).
- **Çelik boru parçaları.** Bir çelik hat, en uzun uzunluğunda ve yerleştirdiğiniz {{ui:Saha kaynağı}} işaretlerinde numaralı parçalara kesilir; {{ui:Spool sayfaları (PDF)}} her parça için bir sayfa verir: izometrik görünümü, kesim uzunlukları, bağlantı parçaları, kaynaklar ve malzeme listesiyle. {{ui:Kanal kesim listesi}} düz kanal parçalarını listeler. Bkz. [Çelik boru parçaları ve parça sayfaları](topic:pipe-spools).

Bunlar, bir mühendis tarafından boyutlandırılan çizim ve koordinasyon yardımcılarıdır: akış, basınç veya dengeleme yoktur.

### Binayı işletmek

- **Varlık başına belgeler.** {{ui:Varlıklar}} sekmesi kılavuzları, garantileri, fotoğrafları ve çizimleri, IFC'nin yanındaki bir dosya adı ya da bir web adresi ile bir varlığa bağlar; IFC'ye yalnızca bağlantı girer. Bkz. [Belgeler](topic:assets-and-maintenance#documents).
- **COBie elektronik tablosu.** {{ui:COBie olarak kaydet (.xlsx)}}, COBie 2.4 devir çalışma kitabını yazar; geri okunan bir COBie çalışma kitabı, tek bir {{ui:Uygula}} öncesinde her değişikliği listeler. Henüz bir COBie doğrulayıcısından geçmedi. Bkz. [COBie elektronik tablosu](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensör okumaları ve canlı akışlar.** Okumaların bir CSV'sini açın ya da tarayıcıdan doğrudan kendi MQTT aracınıza ya da bina sisteminizin yanıt verdiği bir adrese {{ui:Bağlan}}: her varlık en son okumasını ve bir grafiği gösterir, modelde renklendirilir ve IFC'de kaydedilen sınırların dışına çıktığında işaretlenir. Okumalar sekmede kalır; parolalar asla kaydedilmez. Bkz. [Sensör okumaları](topic:assets-and-maintenance#sensor-readings) ve [Canlı okumalar](topic:assets-and-maintenance#live-readings).

### Gün ışığı ve enerji

- **Her pencerede gökyüzü ve güneş.** {{ui:Gün ışığı}} sekmesi her pencereye dikey gökyüzü bileşenini ve engelleme açısını verir, güneşi bir tarih boyunca {{ui:Bir tarihte pencerelerden giren güneş}} ile takip eder ve her oda boyunca {{ui:Izgarada gün ışığı faktörü}} değerini hesaplar; odanın planında çizilir. Bkz. [Her pencerenin dikey gökyüzü bileşeni](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Isıtma ve soğutma yükleri.** {{ui:Isıtma ve soğutma yükleri}}, her odanın ısı kaybını, derece-günlerden bir yıl boyunca ısıtmasını ve soğutma zirvesini, modelde onu sınırlayan öğelerden ve her öğenin U değerinden hesaplar; orada yazılan bir U değeri IFC'ye yazılır. Bkz. [Isıtma ve soğutma yüklerini tahmin edin](topic:heating-and-cooling-loads).

İkisi de yayımlanmış yöntemlerle hazırlanmış tasarım yardımcılarıdır, uygunluk hesapları değil; her panel bunu söyler.

### Taramalar

- **Birden çok tarama kaydedin.** {{ui:Taramaları hizala…}} (başlangıç panelinde ya da {{ui:Göster}} içinde) taramaları seçilmiş nokta çiftleriyle ya da yazdığınız hedeflerle tek bir çerçeveye yerleştirir, ICP ile önce nokta-nokta, sonra nokta-düzlem olarak iyileştirir, hizalamayı küçük bir proje dosyası olarak kaydeder ve hizalanmış bulutu tek bir LAS ya da E57 dosyası olarak yazar. Bkz. [Birden çok taramayı tek bir yerde hizalayın](topic:register-scans).

### Resimler ve canlı görünüm

- **Canlı görünüm.** Araç çubuğundaki {{ui:Canlı görünüm}}, modeli 3B görünümün yanında gerçek zamanlı görünümle gösterir; onu ve her değişikliği izler, Yürü, günün saati ve ay ile. {{ui:Yeni pencerede canlı görünüm}} onu ikinci bir ekrana koyar. Bkz. [Canlı görünüm](topic:live-view).
- **Grafik kartında ışın izleme.** WebGPU ile {{ui:Render}} › {{ui:Yüksek kalite (ışın izleme)}}, CadCraft'ın kendi ışın izleyicisini grafik kartında çalıştırır; durdurulabilir ve {{ui:Sürdür}} ile devam edilebilir, sonunda gürültüsü giderilir. WebGPU olmadan, önceki gibi WebGL ışın izleyicisini kullanır. Bkz. [Yüksek kalite](topic:render#high-quality).
- **Render iletişim kutusunda daha fazlası** (grafik kartında çalıştığı için WebGPU gerekir): fiziksel gökyüzü ve gökyüzü resimleri, IES ışık profilleri, f-stop, alan derinliği, iki noktalı perspektif, beyaz dengesi ve 360° panoramalar içeren bir kamera; bitmiş resim için bir renk derecelendirmesi, ışık karıştırma ve render sonrası render öğeleri, sis, duman ve kostikler, 16 bit PNG, EXR ya da bir render dosyası olarak kaydetme ve bir render kuyruğu. Bkz. [Grafik kartında gökyüzü ve ışık profilleri](topic:render#skies-and-light-profiles-on-the-graphics-card) ve [Render kuyruğu](topic:render#the-render-queue).
- **Makineniz.** {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Render}} › {{ui:Bu makine}}, bu tarayıcının uygulamanın kullanmasına izin verdiği grafiği, işlemci çekirdeklerini ve belleği gösterir; ayrıca render'in başladığı düzeyi. Bkz. [Makineniz ne ile render eder](topic:your-machine).

### Dosyalar ve diğer uygulamalar

- **STEP dosyaları açılır.** Bir `.step` ya da `.stp` parçası, bir ekipman parçası ya da tedarikçinin modeli (AP203, AP214, AP242) küçük bir IFC modeli olarak açılır; her katı, incelenebilen, kesit alınabilen, ölçülebilen ve IFC olarak kaydedilebilen bir öğedir. Renkler ve montajın parça adları henüz okunmaz. Bkz. [BimCraft'ın açtığı ve kaydettiği dosyalar](topic:files#what-it-opens).
- **USD dışa aktarma.** Araç çubuğundaki {{ui:USD}}, açık modelleri `.usda`, `.usdc` ya da `.usdz` olarak yazar; arsa, bina, kat ve disiplin olarak düzenlenmiş, her öğenin IFC sınıfı, GlobalId ve özellikleriyle birlikte. Bkz. [Modeli USD olarak dışa aktarın](topic:usd).
- **CivilCraft'tan bir kütle.** CivilCraft'ın saha görünümünden gönderilen bir bina kütlesi, Özellikler'de çalışma sayılarını gösterir; {{ui:Bu kütleyi geliştir}} ise her seviyede duvarları ve ondan bir döşemeyi tek bir geri al adımında oluşturur. Bkz. [Bir saha çalışmasından bina kütlesini geliştirin](topic:develop-a-mass).
- **Varyantlı kütüphane öğeleri.** Birden çok varyantı olan bir öğe, {{ui:Kütüphane}} sekmesinde bir {{ui:Varyant}} seçeneğine sahiptir; yerleştirilen öğe varyantını IFC'de tutar, {{ui:Öğeyi değiştir…}} diğer varyantları listeler ve kopyalar ile güncellemeler bunu korur. Bkz. [Varyantları olan bir kütüphane öğesini yerleştirin ve değiştirin](topic:library-variants).
- **Bir klasörde proje paketleri.** {{ui:Klasör aç}}, {{ui:Proje paketleri}} altında `.ccbundle.zip` dosyalarını listeler ve bir paketteki her düzende **… içinde aç** bulunur: PDF'yi MarkupCraft'a, DWG'yi CadCraft'a, yeni bir sekmede. Bkz. [Bir düzeni açın](topic:open-project-bundle#open-a-layout).

### Asistanlar ve eklentiler

- **Yapay zekâ asistanları için daha fazlası.** Bir asistan artık öğeleri yeniden adlandırabilir ve özellik değerlerini ayarlayabilir, öğeleri taşıyabilir ve silebilir, duvarları, kapıları ve pencereleri değiştirebilir, USD dışa aktarabilir ve bir resmi render edebilir ya da render kuyruğunu çalıştırabilir; her değişiklik tek bir geri al adımıdır. Bkz. [Yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Eklentiler modelde oluşturabilir.** Eklenti API 1.1, bir eklentinin modelde tek bir geri al adımı olarak bir değişiklik yapmasına, modeli okumasına ve boru ve kanal hatlarını, bağlantı noktalarını, ekipmanı ve parçaları okumasına izin verir (Live TeamWork'te de taşınır).
- **Tesis eklentisi** ({{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Eklentiler}} içinde açana kadar kapalıdır): boru spesifikasyonları hatlara karşı denetlenir; bir hattın izometrik çizimleri SVG ve DXF olarak malzeme listesiyle; nozulları modele yerleştirilmiş genel proses ekipmanı; iki bağlantı noktası arasında bir yönlendirici ve bir fabrika yerleşim denetimi. Bir çizim yardımcısıdır, mühendislik onayı değil; metinleri yalnızca İngilizcedir.

## Değişenler

- **Dizüstü bilgisayarda ilk ev.** Dizüstü boyutundaki bir ekranda BimCraft yalnızca planla başlar; Çiz çubuğu, planın yanına sığdırıldığı dar bir panel olur; çizim planı bıraktığında plan ve 3B görünüm yeniden görünür; 3B görünüm dar bir bölmede tüm evi çerçeveler ve kapılar ile pencereler ölçülendirme çizgilerinden önce seçilir.
- **Bir resmi kaydetme.** Render iletişim kutusundaki **PNG'yi kaydet** artık {{ui:Kaydet}}, diğer biçimler için yanında {{ui:Farklı kaydet}} ile. Bkz. [Resmi kaydedin](topic:render#save-the-picture).
- **Analiz sekmesi** bir {{ui:Tasarım denetimleri}} bölümüne sahiptir: seçilen durumlar için ASCE 7 ya da EN 1990 yük kombinasyonlarını oluşturur ve her haddelenmiş çelik I kesitini (W, S, IPE, HEA ya da HEB boyutu, profil adı ve boyutuyla) AISC 360 ya da EN 1993-1-1'e göre denetler; kapasitesinin ne kadarını kullandığını gösterir. Bir mühendis gözden geçirene kadar bir yardımcıdır; kaynaklı kesitler ve diğer kesitler "denetlenmedi" yazar. Bkz. [Tasarım denetimleri](topic:frame-analysis#design-checks).

## Düzeltilenler

- Yeni bir aile boyutu yaratan bir adımdan sonra yinele işlemi başarısız oluyordu ("boyut yok"). Artık her adım yinelemede aynı IFC GlobalId'lerini yeniden üretir; böylece yinele aileler ve diğer her değişiklik için çalışır.
- İki kişi aynı aileyi kaydettiğinde (bir Canlı TeamWork oturumunda ya da iki pencerede), ikincisi ilkinin değişikliğini sessizce değiştiriyordu. Artık kaydetmeyi reddeder ve onların değişikliğini nasıl göreceğinizi ve kendi değişikliğinizi nasıl yeniden yapacağınızı söyler.
- US survey feet cinsindeki bir model, foot başına 0.3048006096 m yerine 0.3048 m olarak okunuyordu; bu da haritada US survey feet cinsinden coğrafi referanslı her IFC'yi kaydırıyordu.
- Aile düzenleyici: kapatmak artık klavye odağını sayfaya düşürmez, Kaydet düğmesi telefonda görünür kalır ve alanları telefonun yakınlaşmasına yol açmaz.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}}, uzunluk, alan, hacim, açı ve eğim için her biri bir liste içerir; birimlerin tanımlarının verdiği tam boyutlarla (US survey feet kendi birimidir). Hiç kullanmadığınız birimlerin anahtarını kapatın; birim listelerinden çıkarlar. Birini yıldızlayın; yeni işler o birimle başlar. Bir dosya her zaman kendi birimini tutar. BimCraft'ta araç çubuğundaki {{ui:Birimler}} listesi anahtarları izler, yıldız siz araç çubuğunda seçene kadar görüntü birimlerini belirler (önceki seçiminiz korunur) ve çizim araçlarının uzunluk kutuları herhangi bir birimin işaretini kabul eder, örneğin `3.5 m` ya da `10 US ft`. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Kenara çekilen paneller ve daha sıkı düzen.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: onu sürükleyerek paneli yerleştirin ya da yüzdürün; başka bir panelin çubuğuna bırakarak bir çerçeveyi sekmeler olarak paylaşın; sabitleyerek kenara kaydırın ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleyin](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri gelir. Ortalamak için başlık çubuğuna çift tıklayın. Bkz. [İletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on örnek istek (bir çizimi düzenle, bir takımı çıktı al, çizimleri denetle, bir modele soru sor, bir metrajı topla, bir parça varyantını dene…), her biri çağırdığı araçlar ve ihtiyaç duyduğu izinlerle; her biri testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yenidir. Bu, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** ile birlikte uygulamanın her sözcüğüne artık sahip; ancak bunlar, ana dili konuşan biri tarafından gözden geçirilmemiş taslaklardır. Yardım konuları İngilizcedir; birkaçı İspanyolcadır.
- **CadCraft Studio**, bir güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, kötü imza) yalnızca "Bitti" yazmak yerine; kapattığınız bir Yenilikler kartını, daha yeni bir sürüm çıkana kadar geri getirmeyi bırakır.

## Bu sürümde henüz değil

- **0.7 kod imzalı değil.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz tamamlanmadığı için 0.8'e taşındı. Her dosyanın yanındaki SHA-256 değerini getcadcraft.com/download adresinde kontrol edin. Windows'ta SmartScreen yükleyiciyi durdurursa, {{ui:Diğer bilgiler}} seçin, sonra {{ui:Yine de çalıştır}}. Bir Mac'te ilk kez, CadCraft Studio'ya sağ tıklayın ve {{ui:Açık}} seçin. CadCraft Studio henüz bir uygulama mağazasında değil ve henüz bir iPad ya da iPhone sürümü yok.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ancak henüz hiçbir kutu bunları okumaz.
- Grafik kartında ışın izleme, Render iletişim kutusundaki ekstralar ve render kuyruğu WebGPU gerektirir (olmadan, yüksek kalite WebGL ışın izleyicisini kullanır); canlı görünüm, tarayıcıda varsa WebGPU'yu, yoksa WebGL 2'yi kullanır. Bunlar burada yalnızca bir yazılım grafik yer tutucusunda test edildi, henüz gerçek grafik kartlarında değil. Canlı görünümün BimCraft'ta saçılım ya da paylaşım özelliği yoktur (ModelCraft'ın vardır).
- BimCraft'ta kaydedilmiş bir adım adım rehberi video olarak render etme henüz yapılmadı.
- Tasarım denetimleri: IFC profil adı bir W, S, IPE, HEA ya da HEB boyutu olmayan (ya da boyutu bunlardan farklı olan) bir I kesiti kaynaklı sayılır ve "denetlenmedi" olarak döner; borular, köşebentler, U profiller, narin parçalar ve burulma de öyle. Denetimleri henüz bir mühendis gözden geçirmedi.
- Çizilen öğeler tek tek kopyalanamaz, döndürülemez, aynalanamaz ya da dizilemez (bir bütün seviye kopyalanabilir); bölünmüş duvar, Metin aracı ya da perde duvar yoktur. Üst seviyede, alt seviyedeki bir duvarla buluşan bir duvar o duvarın 3B gövdesine kesilmez ve listeler, üst seviyedeki bir açıklığı kendi duvarının seviyesi altında listeler.
- Aileler: projeler arasında paylaşılan bir aile kütüphanesi henüz yapılmadı. Aileler ve kopyalanan seviyeler henüz diğer BIM programlarında açılmadı.
- MEP: ekipman geneldir (üretici verisi yoktur); çelik parçalardaki te parçaları ve redüktörler geneldir, ASME B16.9 tablosundan değildir; {{ui:Kütüphane}} sekmesinden yerleştirilen kütüphane öğelerinin bağlantı noktaları IFC'ye yazılmaz; hiçbir şey bir mühendis tarafından gözden geçirilmemiştir.
- Tesis eklentisi henüz modele yönlendirilmiş bir hat çizemez, izometriklerindeki parçaları numaralandıramaz ya da kütüphaneden yerleştirilen ekipmanın düzenini denetleyemez.
- CivilCraft'ın tesis kütüphanesindeki tesisler henüz BimCraft'ın {{ui:Kütüphane}} sekmesinden yerleştirilemez.
- Enerji: saatlik simülasyon, ISO 52016-1 yöntemi ve iklim dosyası yoktur. Varlıklar: BimCraft kapalıyken okumaları tutan ya da uyarı gönderen barındırılan bir ikiz yoktur.
- Tarama hizalama test taramalarında denendi, gerçek bir tarayıcının tarama takımında henüz denenmedi; E57 dosyaları hâlâ en fazla 6 milyon nokta ve 512 MB'a kadar açılır.
- Proje paketleri yalnızca BimCraft'ta açılır (diğer uygulamalar bir düzeni **… içinde aç** yoluyla alır); paketler ve iki programlık takım yer tutucularla test edildi, henüz Archicad ya da Revit'in kendisiyle değil.

Diğer her şey [Henüz yapılmayanlar](topic:not-built-yet) içindedir.
