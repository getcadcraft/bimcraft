---
title: Yenilikler 0.9
summary: Duvar şekilleri, bölme, uzaklık, gerdirme ve ızgaraya kilitleme, altta kalan katlar, aks ölçüleri ve plan üzerinde ölçüm, çalışma stilleriyle çoğaltılmış görünümler ve kalem tabloları, Şöyle raporla, Collada ve Google Earth dışa aktarımı, Scan to BIM, rüzgâr ve deprem analizi, reçine baskı eklentileri.
keywords: yenilikler, 0.9, sürüm notları, duvar şekilleri, dikdörtgen, çokgen, yay, çizgileri seç, dış hat izle, uzaklık, birleştirme, kutu gerdirme, hizala ve kilitle, duvarı böl, boşluk, yeniden birleştir, ızgaraya kilitle, şuradan büyüt, ölçüm başlangıcı, altına seviye ekle, bodrum, seviye komutu, aks ölçüleri, plan üzerinde ölçüm, çalışma stili, görünümü çoğalt, kendi kopyası, bağlı görünüm, kalem tablosu, gösterildiği gibi yazdır, şöyle raporla, ölçek yazın, svg içe aktar, plana yerleştir, modele yerleştir, collada, dae, kmz, google earth, scan to bim, rüzgâr yükü, deprem, sonlu eleman, belgeler paneli, reçine baskı, yenilikler, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, tahliye, insanlar, kuyruklar, akustik, yankılanma, dürtü yanıtı, sel, rüzgâr, deprem, tehlike, yaşam döngüsü, servis ömrü, ids, etiketler, listeler, taşı, hizala, dağıt, resim, arka plan, taramadan duvarlar, civilcraft arsası, panel çizimleri, çerçeveleme, güneş, pv, bölme, vrf, fan coil, boru boyutlandırma, kablo tavası, aydınlatma şiddeti, beton, tarama karşılaştır, epsg, projeksiyon, belgeler, şablon, karbon, maliyet, energyplus, render motoru, şurada aç, usd, glb, unreal, geri al, eklentiler, pcf, semboller, bitkiler, iz, kalemler, şerit, proje tarayıcısı, düzen
from: 5624fe88
---

Bu, BimCraft 0.8.1 ile karşılaştırıldığında BimCraft 0.9 sürümünde neyin değiştiğidir. İki ana tema, gerçek bir duvar aracı ile büyük BIM programlarından gelenlerin beklediği biçimde davranan görünümlerdir. Bunların yanında Collada dışa aktarımı, elektrik cihazlarını yerleştirebilen asistanlar, Scan to BIM ve {{ui:Analysis}} sekmesindeki rüzgâr, deprem ve sonlu eleman çalışmaları yer alır.

## Yeni

### Duvarlar

- **Tam şekiller çizin.** {{ui:Draw}} grubunda {{ui:Shapes}} seçeneğini açın (ya da Duvar satırının Şekil listesinden bir şekil seçin): dikdörtgen, döndürülmüş dikdörtgen, 3 ila 64 kenarlı çokgen, merkeze göre yay, teğet yay, seçilen çizgiler üzerinde duvarlar ya da tıkladığınız kapalı bir alanın çevresinde duvarlar. Dikdörtgen, dört birleşik köşeli dört duvar olur ve tek bir geri alma adımıdır. Bkz. [Duvar şekilleri, bölme, uzaklık, gerdirme ve kilitleme](topic:wall-tools).
- **Önce ayarlayın, sonra değiştirin.** Duvar satırında {{ui:Offset}} ve {{ui:Join}} bulunur (serbest duran duvarlar çizmek için işaretini kaldırın). Çizilmiş duvarlarda sonradan {{ui:Offset}}, {{ui:Box stretch}} ve {{ui:Align and lock}} kullanın. Taşınan ya da gerdirilen bir duvar kapılarını, pencerelerini ve ölçülerini korur. Her tarif tek bir geri alma adımıdır.
- **Duvarları kesin.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} ve {{ui:Rejoin}}, bir duvarı bir tıklamayla ya da başka bir duvarın kestiği yerden keser. Bir kapının içinden kesme reddedilir. Bkz. [Duvar şekilleri, bölme, uzaklık, gerdirme ve kilitleme](topic:wall-tools).
- **Duvarları aks çizgilerine kilitleyin.** Bir aks çizgisi boyunca bir duvar seçin ve {{ui:Properties}} içinde {{ui:Lock to grid}} seçeneğini işaretleyin. Aks aracı açıkken, seçilmiş bir çizgi için {{ui:Move by}} alanına bir mesafe yazın; kilitli duvarlar tek bir geri alma adımında birlikte hareket eder.
- **Tek bir duvarın şeklini belirleyin.** Bir duvarın {{ui:Properties}} bölümünde üstünü ya da tabanını bir çatıya, döşemeye ya da tavana bağlayabilir, yükseklik ana hatlarını düzenleyebilir, eğdirebilir veya kapı ya da pencere olmadan bir duvar açıklığı kesebilirsiniz. Bkz. [Duvar şekli](topic:wall-shape).
- **Uzunluk hangi ucun yerinde kaldığını belirtir.** {{ui:Grow from}}, uzunluk değiştirilirken başlangıcın, sonun ya da merkezin yerinde kalıp kalmayacağını belirler.
- **Uzunluk ve plan ölçüsü uyuşur.** {{ui:Measure from}} (merkez çizgisi, iç yüz ya da dış yüz), hem Uzunluk alanını hem de planın duvar ölçülerini belirler. Merkez çizgisinde başlar; bu nedenle planın duvar ölçüleri artık daha önce dış yüzü gösterdiği yerde merkez çizgisini gösterir. Bunu Duvar satırında, {{ui:Properties}} içinde ya da {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}} bölümünde değiştirin.

### Katlar, aks ve ölçüm

- **Altına bir seviye ekleyin.** {{ui:Levels}} panelindeki {{ui:Add a level below}}, en alttaki seviyenin altına, onun yüksekliğinde ve negatif bir kotta (Level -1, Level -2) bir seviye ekler. Başka hiçbir şey taşınmaz. {{ui:Add levels…}} artık negatif yükseklikleri de kabul eder. Komut satırına LEVEL, LEVELS, STOREY ya da STOREYS yazmak {{ui:Add levels…}} penceresini açar; menülerde ve şerit sekmelerinde bir {{ui:Levels}} düğmesi bulunur. Bkz. [Arsalar, binalar ve seviyeler](topic:site-building-and-levels).
- **Plandaki aks ölçüleri.** {{ui:Grid}} aracı açıkken {{ui:Dimensions}} seçeneğini işaretleyin; her katın planında, komşu çizgiler arasındaki aralığı ve baloncukların ötesindeki toplam boyutu çizer. Bkz. [Bir aksı ölçülendirme](topic:grid-dimensions).
- **Planda ölçüm.** {{ui:Draw}} grubundaki {{ui:Measure}}, iki tıklama arasında X ve Y farklarıyla birlikte bir mesafe verir. Modelde hiçbir şey kaydedilmez. Bkz. [Planda ölçüm](topic:measure-on-the-plan).
- **Birden çok sütunu aynı anda değiştirin.** Bir duvarla birlikte sütunlar seçin; seçim listesi her türü {{ui:Keep only these}} ile listeler. Tek bir tıklama sütunları tutar ve ortak alanlarını gösterir.
- **Her yerde tek bir gösterim birimi.** Koordinatlar, ölçümler, kesitler, sayfa ölçekleri, çerçeve sekmesinin yükleri ve sonuçları ile Sorunlar metni seçtiğiniz birimi izler. Dışa aktarmalar SI olarak kalır.

### Görünümler, sayfalar ve çıktı

- **Çalışma stili.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}}, her görünümün kendi açıklamalarına ve kalem tablolarına sahip olması ile bunları paylaşması arasında seçim yapmanızı sağlar. Bkz. [Çalışma stili, çoğaltılmış görünümler, kağıt üzerindeki kalemler, Şöyle raporla ve şablonlar](topic:working-style).
- **Bir görünümü çoğaltın.** Planlar, tavan planları, çağrılar, görünüşler ve kesitler {{ui:Own copy}} ya da {{ui:Linked}} olarak çoğaltılabilir; {{ui:Make own copy}} bağlı bir görünümü bağımsız hâle getirir. Bkz. [Çalışma stili, çoğaltılmış görünümler, kağıt üzerindeki kalemler, Şöyle raporla ve şablonlar](topic:working-style).
- **Gösterildiği gibi ya da kalem tablosuyla yazdırın.** Kalem geçersiz kılmaları görünümle birlikte IFC içinde saklanır; sayfalar ve PDF'ler bunları ekranda göründüğü gibi çizer. Aynı konu kalem tablolarını da kapsar.
- **Şöyle raporla.** {{ui:Properties}} içindeki {{ui:Report as}}, yol olarak çizilmiş bir döşemeyi, panel olarak bir duvarı ya da rampa olarak bir çatıyı seçtiğiniz sınıfla IFC'ye yazar ve bunu Miktarlar, Bul, Renge göre ve Sorunlar içinde o şekilde sayar.
- **Görünüşlerde ve kesitlerde düzenleyin.** Kendi sayfa boyutlarınız ve künyelerinizle birlikte bir görünüşte ya da kesitte doğrudan duvarları, açıklıkları, seviyeleri, ölçüleri ve notları çizin ve taşıyın. Bkz. [Görünüşlerde ve kesitlerde düzenleme](topic:edit-in-elevations).
- **Sayfalar.** Her sayfa yatay ya da dikey olabilir. Yerleştirilen her görünümde ölçek listesinin yanında bir {{ui:Type a scale}} kutusu bulunur (1:64, 2:1, 1/4" = 1'). Yerleştirilmiş bir çizimi sürükleyebilir ya da ok tuşlarıyla hafifçe kaydırabilirsiniz. {{ui:Formats…}} › {{ui:Import SVG…}} ise kendi sayfa tasarımınızı, her sayfa için yazılan alanlarla bir künyeye çevirir.
- **Sayfadaki kütüphane atıfları.** Kütüphane öğeleri içeren bir çizim takımı, herhangi bir sayfaya yerleştirebileceğiniz bir Kütüphane atıfları listesi alır. Bkz. [Kütüphane atıfları](topic:library-credits).

### Kütüphane: yerleştirme

- **Yerleştirme görünümü izler.** Plan görünümünde Kütüphane {{ui:Place in plan}} seçeneğini, 3B görünümde {{ui:Place in model}} seçeneğini gösterir. {{ui:Split}} görünümünde ise ana eylemi {{ui:Place in plan}} olan bir bölünmüş düğme gösterilir. İki yol da aynı IFC öğesini yazar. Bir Kütüphane kartını plana ya da 3B görünüme de sürükleyebilirsiniz; kalem ya da parmakla basılı tutup sonra sürükleyin. Bkz. [Kütüphaneden yerleştirme](topic:place-from-library).

### Dosyalar ve asistanlar

- **Collada ve Google Earth.** Araç çubuğundaki {{ui:Collada}} (menü stillerinde Dosya menüsünde) bir .dae dosyası ya da modelin haritadaki konumuna yerleştirilmiş bir .kmz dosyası yazar. Bkz. [Modeli Collada olarak ya da Google Earth için dışa aktarma](topic:collada).
- **Asistanlar elektrik cihazlarını yerleştirebilir.** Bağlı asistanınız cihaz eklemek, listelemek, değiştirmek ve silmek ile ışıkları ayarlamak için yeni araçlara sahiptir. Asistanlar, siz {{ui:Settings}} içinde açana kadar kapalı kalır. Bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Scan to BIM (eklenti).** Varsayılan olarak kapalıdır ve Nokta bulutları eklentisi gerektirir. Bir taramadan döşemeleri, duvarları, kapıları ve pencereleri, her biri için ölçülen sapmayla birlikte önerir; kabul etmek tek bir geri alma adımıdır.

### Analiz

- **Rüzgâr ve deprem arsa verileri.** {{ui:Analysis}} sekmesinde: katı kapalı, rijit bir bina için ASCE 7-10 ya da 7-16 ile rüzgâr yükleri, her kat için bir kuvvetle yük durumları olarak; ayrıca USGS sorgulamalı ve tasarım spektrumlu deprem arsa verileri.
- **Yapısal takip ve sonlu elemanlar.** Beton kontrolleri ACI 318-19'a göre, eşdeğer yanal kuvvetler ASCE 7-22'ye göre, kat ötelenmesi, plak olarak döşemeler ve duvarlar ile ASCE 7 ve EN 1990'dan yük birleşimleri. Kendi sonlu eleman motorumuz kabukları, dört yüzlüleri ve modal analizi yapar. Bkz. [Beton elemanları denetleyin ve deprem yükleri oluşturun](topic:concrete-and-seismic) ve [Çerçeve analizi](topic:frame-analysis).

### Diğer eklentiler ve belgeler

- **İç aydınlatma (eklenti).** Armatürleri yerleştirir ve her katın planına lüks değerlerini sayı olarak yazar; kamaşma tahmini ve yazdırılabilir bir raporla birlikte.
- **Belgeler paneli.** {{ui:File}} › Belgeler…, kilit dosyasıyla alma ve geri verme, revizyon harfleri, yayın durumları ve geçmişi sunar.
- **Bölgeler ve çelik.** Yönetmelikler eklentisinde Güney Afrika çizim ve yapı yönetmeliği paketleri ile paylaşılan kesit tablosunda 976 Birleşik Krallık çelik boyutu.
- **Ücretsiz reçine baskı eklentileri.** Dilimleyici, destekler ve taban, pozlama testi ile GOO, SL1, Chitubox ve Anycubic dosya biçimleri; hepsi varsayılan olarak kapalı.

## Her uygulamada

- Bir düğmenin ya da denetimin üzerine gelindiğinde bir Bootstrap ipucu gösterilir.
- Boş bir çizim alanındaki başlangıç ipucunun bir kapatma düğmesi vardır; BimCraft kapatıldığını hatırlar.
- Sığmayan bir panelin sekme şeridi artık kesilmek yerine kaydırılır.
- Bir belge açıkken tarayıcı sekmesi "<belge> - BimCraft | CadCraft" yazar.
- {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} içinde düzenler, iki satırlı seçeneklerden oluşan bir açılır listedir.
- {{ui:Settings}} içindeki dil listesi, 0.8 sürümünden daha fazla dil sunar; İngilizce dışındaki diller makine taslağıdır.

## Düzeltilenler

- **Taşıma merdivenlerde çalışır,** rampalarda, korkuluklarda, çatı düzlemlerinde, serbest duran cihazlarda, resimlerde ve yollarda da.
- **Bir duvarı sürüklemek artık odayı çarpıtmaz.** Merkez tutamacı duvarı kendisine göre kare hâlde taşır ve köşeleri birleşik duvarlar boyunca kayar. Eski serbest taşıma için {{key:Mod}} tuşunu basılı tutun; {{ui:Square up}} 90 dereceyi geri getirir.
- **Birleşik bir düğümde kalınlık ya da tür değişikliği** bir L, bir T, üç duvarlı bir düğüm ve eğri bir duvarın yanında köşeyi kapalı tutar.
- **Bir oda grubunu taşımak ya da kopyalamak,** grubun dışındaki birleşik duvarları birleşik tutar.
- **Yinele, bir duvar ölçüsünün kimliğini korur.**
- **{{ui:Draw}} kapalıyken bir duvar seçmek** Özellikler içinde artık bir hataya yol açmaz.
- **Render, GPU başlatılamadığında durmak yerine WebGL'e döner.**
- **EnergyPlus denetimi yeniden açılabilir.**
- **Belgeler ortalanmış bir iletişim kutusu olarak açılır.** {{key:Esc}}, X ya da soluklaştırılmış sayfaya tıklama kapatır.
- **{{ui:Plan}}, {{ui:Split}} ve {{ui:3D}} düğmeleri,** bir model açılır açılmaz görünür; yalnızca {{ui:Draw}} bir kez açıldıktan sonra değil.

## Dürüst sınırlar

- Gerçek donanımda hiçbir şey basılmadı. Reçine destekleri yenidir ve henüz kanıtlanmamıştır.
- Rüzgâr, deprem, beton ve sonlu eleman sonuçları bir mühendis için kontrol yardımcılarıdır; kapalı formüllere karşı denetlendi, gerçek bir binaya karşı değil.
- Scan to BIM sentetik bir binada test edildi, gerçek bir tarama üzerinde değil; yalnızca dikdörtgen odaları bulur.
- Collada burada Blender ya da Google Earth içinde açılmadı.
- Aydınlatma tahmini kendi izimize karşı denetlendi, başka aydınlatma programlarına karşı değil.
- Güney Afrika sayıları doğrulanmadı.
- Duvar birleşim stilleri (butt, mitre, square off) ve katman önceliği yapılmadı; köşeler gönyeli yapılır.
- İngilizce dışındaki diller makine taslağıdır.

Diğer her şey için [Henüz yapılmayanlar](topic:not-built-yet) bölümüne bakın. Önceki değişiklikler bu sayfanın aşağısındaki 0.8 ve 0.8.1 notlarındadır.

## Önceki: 0.8 ve 0.8.1

Bu, BimCraft 0.7 ile karşılaştırıldığında BimCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinde neyin değiştiğidir. BimCraft artık bir bina hakkındaki soruları yanıtlayabilir ve onu insanlar, ses, su, rüzgâr ve depremlerle test edebilir; daha fazla araçla da çizebilir. 0.8.1 bir düzeltme sürümüdür.

### Yeni

**Binayı test edin**

- **Binadaki insanlar.** Sol paneldeki {{ui:People in the building}} bölümü, bir tahliye ya da normal bir günün gelişlerini odalarınızdan, kapılarınızdan ve merdivenlerinizden geçirir. Bina daraldığı yerlerde kuyrukları, her odadan bir çıkışa en uzun yürüyüşü ve son kişinin ne kadar sürdüğünü görürsünüz. Neyin değiştiğini görmek için bir kapıda {{ui:Shut}} seçeneğini, yürüyenleri izlemek için {{ui:Show the people in the 3D view}} seçeneğini işaretleyin. Bulgular Sorunlar'a gider. Bu, tasarım kararları için kaba bir kalabalık modelidir; bir yangın güvenliği belgesi değildir. Bkz. [Binadan insanları yürütün](topic:people-in-the-building).
- **Oda akustiği ve dinleyin.** {{ui:Room acoustics}} bölümü, her odanın oktav bandına göre yankılanma süresini kendi boyutundan ve seçtiğiniz kaplamalardan (Sabine ve Eyring) verir; kendi hedefinizle birlikte bu hedefi karşılamak için ne kadar emilim gerektiğini söyler. {{ui:Play it in this room}} bir ses, alkış, tıngırdatılan notalar ya da kendi ses dosyanızı, odanın için hesaplanmış bir dürtü yanıtı üzerinden çalar. Emilim değerleri, sizin değiştirmeniz için tipik yayımlanmış değerlerdir. Bkz. [Oda akustiği](topic:room-acoustics).
- **Sel, rüzgâr ve deprem oynatma.** {{ui:Hazard playback}}, suyun odalarda yükselişini, her kattaki rüzgâr basıncını ve katları sallayan bir depremi bir plan ya da görünüşte zaman kaydırıcısıyla oynatır. Basit modeller ve varsayımları panelde yer alır; bir yönetmelik denetimi değildir. Bkz. [Bir sel, rüzgâr ya da deprem oynatın](topic:hazard-playback).
- **Elli yılda neyin aşındığı.** {{ui:Life-cycle view}}, pencereleri, kapıları, kaplamaları ve çatıyı, her birinin servis ömrü ve değiştirileceği yıllarla listeler; birim başına bir maliyet yazdığınızda yıllara göre maliyeti ve bugünkü değerini de gösterir. {{ui:Save the schedule (CSV)}} bunu dışa yazar. Servis ömürleri planlama değerleridir. Bkz. [Elli yılda neyin aşındığını görün](topic:life-cycle-view).
- **Beton ve deprem denetimleri.** {{ui:Analysis}} sekmesinin {{ui:Concrete members}} ve {{ui:Seismic loads}} blokları, beton kirişleri ve kolonları ACI 318-19'a göre denetler; rijit döşemelerde ASCE 7-22'ye göre eşdeğer yanal kuvvetler ile kat ötelenmesini hesaplar. Bir mühendisin denetlemesi içindir. Bkz. [Beton elemanları denetleyin ve deprem yükleri oluşturun](topic:concrete-and-seismic).

**Denetleyin ve raporlayın**

- **Bir IDS'ye göre denetleyin.** Müşterinizin verdiği `.ids` dosyasını yükleyin ve IFC'yi teslim etmeden önce bu dosyaya uymayan her öğeyi Sorunlar içinde görün. {{ui:Model checks}} altında {{ui:Check against an IDS}} seçeneğini açın. Bkz. [Modeli müşterinin IDS'sine göre denetleyin](topic:check-against-ids).
- **Etiketler ve listeler.** Kendi etiketlerinizi tanımlayın, birçok öğeye aynı anda atayın ve sütunları, filtreleri ve grupları bunları okuyan listeler yapın; etiketler IFC içinde saklanır. Bkz. [Etiketler ve listeler](topic:tags-and-schedules).
- **Modelden belgeler.** {{ui:Documents from the model}}, açık IFC'den bir şartname şablonunu doldurur ve PDF, Word belgesi ya da Markdown olarak kaydeder. Bkz. [Modelden belgeler](topic:documents-from-the-model).
- **Bir taramayı modelle karşılaştırın.** Bir nokta bulutu açıkken {{ui:Compare}}, her öğeyi yapılmış, kısmen yapılmış, eksik ya da ulaşılmamış olarak değerlendirir ve yapılma yüzdesini gösterir. Bkz. [Bir taramayı modelle karşılaştırın](topic:compare-scan-with-model).
- **Karbon ve maliyet.** Karbon paneli, düzenleyebileceğiniz bir faktör tablosundan gömülü karbonu toplar; Maliyet paneli fiyatları 4B takvimine yayar. BimCraft ile gelen faktörler genel değerlerdir ve denetlenmemiş olarak işaretlenmiştir. Bkz. [Gömülü karbon ve maliyet](topic:embodied-carbon-and-5d-cost).
- **Herhangi bir harita projeksiyonu.** {{ui:Measure}} › {{ui:Coordinate system…}} bir EPSG numarası, bir UTM bölgesi, bir ad ya da kendi projeksiyon tanımınızı kabul eder. Bkz. [Herhangi bir projeksiyonla coğrafi referanslama](topic:georeference-any-projection).

**Çizin ve düzenleyin**

- **Taşı, hizala ve dağıt.** {{ui:Build}} altında; {{key:Shift+M}} Taşı'yı başlatır (sade {{key:M}} hâlâ Ölçüm'dür). Taşı, {{key:C}} tuşuyla ilerledikçe kopyalar, her adım tek bir geri alma adımıdır ve bir Live TeamWork oturumunda da çalışır. Bkz. [Taşıma, kopyalama, hizalama ve dağıtma](topic:move-align-distribute).
- **Plan altında resimler.** {{ui:Build}} › {{ui:Picture}}, bir seviyenin planının altına ya da dikey bir düzleme PNG, JPEG ya da WebP yerleştirir. İki noktayla ölçeği ayarlayın; taşıyın, döndürün, soluklaştırın ve kilitleyin. MarkupCraft içinde kopyalanan bir alan, kendi sayfasının ölçeğinde yapıştırılır. Bkz. [Plan altına bir resim koyun](topic:pictures-as-backgrounds).
- **Bir taramadan duvarlar.** Bir tarama açıkken duvarlar, kapılar ve odalar öneri olarak gelir; bunları tek tek tutabilir ya da reddedebilirsiniz, tek bir geri alma adımında. Yalnızca birbirine dik iki yöndeki duvarlar bulunur. Bkz. [Bir taramayı duvarlara çevirin](topic:scan-to-walls).
- **İz, kalemler ve merdiven eskizi.** {{ui:Trace}}, planın altında başka bir seviyeyi kesikli çizgiyle gösterir; {{ui:Pens}}, duvarlara, kapılara ve pencerelere tek bir görünümde kendi çizgi kalınlığını verir; {{ui:Sketch stair}} ise yürüme çizgisini bir merdivene dönüştürür. Bir Wavefront OBJ ağı açılır. Bkz. [Bir seviyenin izi, kalemler ve bir eskizden merdiven](topic:trace-pens-stairs-obj).
- **Adres etrafındaki binalar.** CivilCraft'ın Adresten arsa aracının bulduğu binalar ve parsel öneri olarak gelir; eklemek istediklerinizi işaretlersiniz. Bkz. [CivilCraft'ın arsasından başlayın](topic:site-from-civilcraft).
- **Panel çizimleri.** {{ui:Build}} › {{ui:Panel drawings}}, duvarları, döşemeleri ve çatıları ahşap ya da hafif ince çelikle çerçeveler; bir kesim listesini CSV olarak, imalat çizimlerini PDF olarak kaydeder. Bunlar başlangıç değerleridir, yapısal bir tasarım değildir. Bkz. [Panel çizimleri](topic:panel-drawings).
- **Sembol paleti ve bitkiler.** {{ui:Build}} › {{ui:Symbol palette}}, elektrik ve tesisat sembollerini ada göre bulur; {{ui:Library}} kaynağının {{ui:Plants}} bölümü plan sembolleriyle yaklaşık 400 bitkiyi listeler. Bkz. [Sembol paleti](topic:symbol-palette) ve [Bitki yerleştirin](topic:plant-list).

**Borular, kanallar ve enerji**

- **Bölünmüş, VRF ve fan coil.** İç ve dış üniteler bağlantılarıyla birlikte; hat setleri, değiştirebileceğiniz tipik örnek değerlerden oluşan bir tabloya göre boyutlandırılır. Bkz. [Bölünmüş, VRF ve fan coil](topic:split-vrf-fan-coils).
- **Hesaplamalar.** Hesaplamalar paneli besleme boru ve kanal boyutlarını basınç düşüşüyle denetler, kabloları tepsilerden ve borulardan geçirir ve dolumlarını gösterir; IES ya da EULUMDAT dosyalarından aydınlatma şiddetini hesaplar. Varsayılanlar etiketlidir; kendi yönetmeliğinizin değerlerini yazın. Bkz. [Boru, kanal, kablo ve aydınlatma hesapları](topic:mep-calculations).
- **PCF dosyaları.** Boru aracındaki **PCF dışa aktar**, boru gerilmesi ve izometrik programlar için boru hatlarını yazar; geri okunan bir PCF dosyası da borusunu çizer. Bkz. [Boru bileşeni dosyaları](topic:piping-pcf).
- **Güneş PV.** Çatılara ya da araziye diziler yerleştirin, modelden gölgelendirin, yıllık enerjiyi tahmin edin, dizileri denetleyin ve tek hat şeması verisi oluşturun. Başlangıç modülü ve kayıplar genel değerlerdir. Bkz. [Güneş PV](topic:solar-pv).
- **EnergyPlus dosyası.** EnergyPlus ile denetle paneli, modeli kendi EnergyPlus'ınızda çalıştırmak üzere bir IDF olarak yazar. Tarayıcıda çalıştırmak, sizin barındırdığınız ve adresini yazdığınız bir derleme gerektirir; BimCraft bunu içermez. Bkz. [EnergyPlus ile ısıtma ve soğutmayı denetleyin](topic:check-with-energyplus).

**Resimler ve dosyalar**

- **Render motorunu seçin.** {{ui:Render}} içinde bir {{ui:Engine}} seçeneği vardır. Yerleşik iki motorumuz (Fast ve Path tracer) varsayılan olarak kalır. **Şurada aç**, sahneyi bir USD ya da glTF dosyası olarak; bir Unreal proje klasörünü de .zip olarak kaydeder. CadCraft Studio içinde bir eklenti motor ekleyebilir. Projeyi açan Unreal eklentisi yayımlanmadı. Bkz. [Resmi hangi programın çizeceğini seçin](topic:render-engines).
- **Studio'da geri alma.** CadCraft Studio içinde BimCraft, Studio'nun son kullandığınız pencerede son adımınızı geri alabilmesi için her tamamlanan adımı Studio'ya bildirir. Bkz. [Uygulamalar arasında geri alma](topic:undo-across-apps).
- **Dosyanızdaki eklentiler.** Bir IFC, içine hangi eklentilerin yazdığını kaydeder ve açtığınızda sizde olmayanları önerir. Bkz. [Dosyanızdaki eklentiler](topic:add-ons-in-your-file).

**Her uygulamada**

- **Yapay zekânızı bağlayın.** Kendi asistanınız, Studio'nun bağlantısı üzerinden BimCraft'ı yönetebilir ve modelle ilgili soruları yanıtlayabilir; örneğin belirli bir alanın altındaki odalar hakkında. Studio'nun kendi yapay zekâsı yoktur. Bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Araç çubuğu satırları.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}}, Sarma, 2 satır ya da 1 satır seçeneklerini sunar; Sarma varsayılan olarak kalır.
- **Giriş aygıtları.** İzleme paneli, kalem, 3B fare, denetleyici ve MIDI ayarları tüm uygulamalar tarafından paylaşılır.
- **Sorunlar ve Live.** Uyarı paneli ve Live oturumları eskisi gibi çalışır; yukarıdaki yeni denetimler Sorunlar'a beslenir.
- **Diller.** 54 dil, bunlardan on tanesi yenidir. İngilizce dışındakiler, bir ana dil konuşanı tarafından henüz okunmamış makine taslaklarıdır; yardım konuları çoğunlukla İngilizcedir.

### 0.8.1 içinde düzeltilenler

- **Şerit + Proje tarayıcısı düzeni.** Ekle › CAD içe aktar, Ekle › Resim ve Yönet › Proje birimleri "BimCraft'ta henüz yapılmadı" diyordu. Resim artık Resim aracını açar; CAD içe aktar {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF ya da bir tarama) seçeneğini açar; Proje birimleri {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} bölümünü açar. Taşı ve Hizala, kendi araçlarını çalıştırır; Seviye {{ui:Add levels…}} penceresini açar; Aşamalar, Yenileme aşamaları bölümünü açar ve Malzemeler malzeme kütüphanesini açar.
- **DWG sınıfları bölümü.** Yanlış türde okunuyordu; BimCraft'ta ve DWG okuyan diğer uygulamalarda düzeltildi.
- **Çalışma anında dil.** Studio ve paketlenmiş sürümler artık yeniden başlatmadan dil değiştirebilir. Bu, her platformda henüz test edilmedi; dil değişmezse bize bildirin.
- **Archicad paket betiği.** `archicad_bundle.py`, ayrı bir indirme, artık Archicad'in yolunu bulur, klasörü 20 saniyeye kadar izler ve paketin yanında yeniden dener.

### Bu sürümde henüz yok

- **Güvenlik ve tasarım yardımcıları.** Binadaki insanlar'da bir yapı yönetmeliğinden gelen bir yol mesafesi sınırı yoktur (sınırı siz yazarsınız) ve gerçek bir planda elle denetlenmemiştir. Akustik, yaşam döngüsü ve tehlike değerleri planlama değerleridir, yönetmelik denetimi değildir.
- **İklim senaryoları ve EnergyPlus.** Yerleşik iklim senaryosu yoktur: sel çalışması için bir senaryo dosyası yükleyebilirsiniz. Tarayıcıda EnergyPlus çalıştırması bu sürümün parçası değildir.
- **Şerit düzeni.** Malzeme Metrajı, BimCraft'ta bir malzeme miktar listesi olmadığı için "Henüz yapılmadı" olarak kalır; ayrıca gri görünen 54 şerit aracının arkasında henüz bir BimCraft aracı yoktur.
- **İmzalama ve platformlar.** Windows yükleyicileri ve macOS .dmg dosyası imzasızdır; bu nedenle SmartScreen {{ui:More info}} (Daha fazla bilgi), ardından {{ui:Run anyway}} (Yine de çalıştır) gösterir ve macOS'te sağ tıklayıp {{ui:Open}} (Aç) gerekir. iPad ve iPhone derlemesi 0.8.1 için yeniden derlenmedi.
- **Gerçek sayfa testleri.** Bazı eski BimCraft tarayıcı testleri, 0.8.1 öncesinde olduğu gibi, test sayfamızda hâlâ başarısız olur.

Diğer her şey için [Henüz yapılmayanlar](topic:not-built-yet) bölümüne bakın. Önceki değişiklikler [0.7'de yenilikler](topic:whats-new-0-7) bölümündedir.
