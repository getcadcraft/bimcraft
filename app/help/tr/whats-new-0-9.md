---
title: 0.9 sürümündeki yenilikler (önceki)
summary: Duvar şekilleri, bölme, uzaklık, gerdirme ve aksa kilitleme, zeminin altındaki katlar, aks ölçüleri ve plandaki ölçüm, çalışma stilleri ve kalem tablolarıyla çoğaltılmış görünümler, Şöyle raporla, Collada ve Google Earth dışa aktarma, Taramadan BIM, rüzgâr ve deprem analizi, reçineli baskı eklentileri.
keywords: 0.9'da yenilikler, önceki sürüm, 0.9, sürüm notları, duvar şekilleri, dikdörtgen, çokgen, yay, çizgileri seç, iz konturu, uzaklık, birleştir, kutu gerdirme, hizala ve kilitle, duvarı böl, boşluk, yeniden birleştir, aksa kilitle, şuradan büyüt, şuradan ölç, altına kat ekle, bodrum, kat komutu, aks ölçüleri, plandaki ölçüm, çalışma stili, görünüm kopyası, kendi kopyası, bağlı görünüm, kalem tablosu, göründüğü gibi yazdır, şöyle raporla, ölçek yaz, svg içe aktar, plana yerleştir, modele yerleştir, collada, dae, kmz, google earth, taramadan bim, rüzgâr yükü, deprem, sonlu eleman, belgeler paneli, reçine baskı, yenilikler, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, tahliye, insanlar, kuyruklar, akustik, yankılanma, dürtü yanıtı, sel, rüzgâr, deprem, tehlike, yaşam döngüsü, servis ömrü, ids, etiketler, listeler, taşı, hizala, dağıt, resim, arka plan, taramadan duvarlara, arsa, civilcraft, panel çizimleri, çerçeve, güneş, pv, bölme, vrf, fan coil, boru boyutlandırma, kablo tavası, aydınlatma, beton, sismik, taramayı karşılaştır, epsg, projeksiyon, belgeler, şablon, karbon, maliyet, energyplus, render motoru, şununla aç, usd, glb, unreal, geri al, eklentiler, pcf, semboller, bitkiler, iz, kalemler, şerit, proje tarayıcı, yerleşim
from: 816df7f8
---

BimCraft 0.9 sürümünde, 0.8.1'e kıyasla neler değişti. İki büyük tema, gerçek bir duvar aracı ile büyük BIM programlarından gelenlerin beklediği gibi davranan görünümlerdir. Bunların yanında Collada dışa aktarma, elektrik cihazlarını yerleştirebilen asistanlar, Taramadan BIM ve {{ui:Analiz}} sekmesindeki rüzgâr, deprem ve sonlu eleman çalışmaları gelir.

## Yeni

### Duvarlar

- **Bütün şekiller çizin.** {{ui:Çiz}} içinde {{ui:Şekiller}} seçeneğini açın (ya da Duvar satırındaki Şekil listesinden bir şekil seçin): dikdörtgen, döndürülmüş dikdörtgen, 3 ila 64 kenarlı çokgen, merkeze göre yay, teğet yay, seçilen çizgiler üzerinde duvarlar ya da tıkladığınız kapalı bir alanın etrafında duvarlar. Bir dikdörtgen, birleşik dört köşeli dört duvar ve tek bir geri alma adımıdır. Bkz. [Duvar şekilleri, bölme, uzaklık, gerdirme ve kilitleme](topic:wall-tools).
- **Önce ayarlayın, sonra değiştirin.** Duvar satırında {{ui:Uzaklık}} ve {{ui:Birleştir}} vardır (serbest duvarlar çizmek için işaretini kaldırın). Sonradan, çizilmiş duvarlarda {{ui:Uzaklık}}, {{ui:Kutu gerdirme}} ve {{ui:Hizala ve kilitle}} seçeneklerini kullanın. Taşınan ya da gerdirilen bir duvar kapılarını, pencerelerini ve ölçülerini korur. Her tarif tek bir geri alma adımıdır.
- **Duvarları kesin.** {{ui:Böl}}, {{ui:Boşluk}}, {{ui:Serbest uçlar}}, {{ui:Parça sil}} ve {{ui:Yeniden birleştir}} bir duvarı bir tıklamayla ya da başka bir duvarın kestiği yerde keser. Bir kapının içinden kesme reddedilir. Bkz. [Duvar şekilleri, bölme, uzaklık, gerdirme ve kilitleme](topic:wall-tools).
- **Duvarları aks çizgilerine kilitleyin.** Bir aks çizgisi boyunca bir duvar seçin ve {{ui:Özellikler}} içinde {{ui:Aksa kilitle}} seçeneğini işaretleyin. Aks aracı açıkken, seçilen bir çizgi için {{ui:Mesafe kadar taşı}} alanına bir uzaklık yazın; kilitli duvarlar tek bir geri alma adımında birlikte hareket eder.
- **Tek bir duvarın şeklini belirleyin.** Bir duvarın {{ui:Özellikler}} panelinde üstünü ya da tabanını bir çatıya, döşemeye ya da tavana bağlayabilir, yükseklik çizgisini düzenleyebilir, eğdirebilir ya da kapı ve pencere olmadan bir duvar açıklığı açabilirsiniz. Bkz. [Duvar şekli](topic:wall-shape).
- **Uzunluk hangi ucun sabit kaldığını söyler.** {{ui:Şuradan büyüt}}, uzunluğu değiştirirken başlangıç, bitiş ya da merkezin sabit kalıp kalmayacağını belirler.
- **Uzunluk ve plan ölçüsü uyuşur.** {{ui:Şuradan ölç}} (merkez çizgisi, iç yüz ya da dış yüz) hem Uzunluk alanını hem de planın duvar ölçülerini yönetir. Merkez çizgisinde başlar; bu yüzden planın duvar ölçüleri artık daha önce dış yüzü okudukları yerde merkez çizgisini okur. Bunu Duvar satırında, {{ui:Özellikler}} içinde ya da {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Duvarlar}} bölümünde değiştirin.

### Katlar, aks ve ölçme

- **Altına kat ekleyin.** {{ui:Katlar}} panelindeki {{ui:Altına bir seviye ekle}} seçeneği, en alttaki katın altına, onun kadar yüksekte ve negatif bir kotta (Level -1, Level -2) bir kat ekler. Başka hiçbir şey taşınmaz. {{ui:Katlar ekle…}} artık negatif yükseklikleri kabul eder. Komut satırına LEVEL, LEVELS, STOREY ya da STOREYS yazmak {{ui:Katlar ekle…}} penceresini açar; menülerde ve şerit sekmelerinde bir {{ui:Katlar}} düğmesi vardır. Bkz. [Siteler, binalar ve katlar](topic:site-building-and-levels).
- **Plandaki aks ölçüleri.** {{ui:Aks}} aracı açıkken, her katın planında komşu çizgiler arasındaki aralığı ve baloncukların ötesindeki genel boyutu çizmek için {{ui:Ölçüler}} seçeneğini işaretleyin. Bkz. [Aksı ölçülendirin](topic:grid-dimensions).
- **Plandaki ölçüm.** {{ui:Çiz}} grubundaki {{ui:Ölçüm}}, iki tıklama arasındaki mesafeyi X ve Y farklarıyla birlikte verir. Modelde hiçbir şey kaydedilmez. Bkz. [Planda ölçüm](topic:measure-on-the-plan).
- **Birden fazla kolonu aynı anda değiştirin.** Bir duvarla birlikte kolonları seçin; liste her türü {{ui:Yalnızca bunları tut}} ile gösterir. Tek bir tıklama kolonları tutar ve ortak alanlarını gösterir.
- **Her yerde tek bir görüntü birimi.** Koordinatlar, ölçümler, kesitler, sayfa ölçekleri, çerçeve sekmesinin yükleri ve sonuçları ile Sorunlar metni seçtiğiniz birimi izler. Dışa aktarımlar SI olarak kalır.

### Görünümler, sayfalar ve baskı

- **Çalışma stili.** {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Çalışma stili}}, her görünümün kendi açıklamalarına ve kalem tablolarına sahip olması ile bunları paylaşması arasında seçim yapar. Bkz. [Çalışma stili, çoğaltılmış görünümler, kâğıtta kalemler, Şöyle raporla ve şablonlar](topic:working-style).
- **Bir görünümü çoğaltın.** Planlar, tavan planları, çağrılar, görünüşler ve kesitler {{ui:Kendi kopyası}} ya da {{ui:Bağlı}} olarak çoğaltılabilir; {{ui:Kendi kopyası yap}} bağlı bir görünümü bağımsız hale getirir. Bkz. [Çalışma stili, çoğaltılmış görünümler, kâğıtta kalemler, Şöyle raporla ve şablonlar](topic:working-style).
- **Göründüğü gibi ya da bir kalem tablosu üzerinden yazdırın.** Kalem geçersiz kılmaları görünümle birlikte IFC içinde saklanır; sayfalar ve PDF'ler bunları ekrandaki gibi çizer. Aynı konu kalem tablolarını da kapsar.
- **Şöyle raporla.** {{ui:Özellikler}} içindeki {{ui:Şöyle raporla}}, yol olarak çizilmiş bir döşemeyi, pano olarak bir duvarı ya da rampa olarak bir çatıyı seçtiğiniz sınıfla IFC'ye yazar ve bunu listelerde, Miktarlarda, Bul'da, Renge göre ve Sorunlarda o şekilde sayar.
- **Görünüşlerde ve kesitlerde düzenleyin.** Bir görünüşte ya da kesitte doğrudan duvar, açıklık, kat, ölçü ve not çizin ve taşıyın; kendi sayfa boyutlarınız ve künyelerinizle. Bkz. [Görünüşlerde ve kesitlerde düzenleme](topic:edit-in-elevations).
- **Sayfalar.** Her sayfa yatay ya da dikey olabilir. Yerleştirilen her görünümde ölçek listesinin yanında bir {{ui:Ölçek yaz}} kutusu bulunur (1:64, 2:1, 1/4" = 1'). Yerleştirilmiş bir çizimi sürükleyebilir ya da ok tuşlarıyla hafifçe kaydırabilirsiniz; {{ui:Biçimler…}} › {{ui:SVG içe aktar…}} ise kendi sayfa tasarımınızı, sayfa başına girilen alanlarla birlikte bir künyeye dönüştürür.
- **Sayfada kütüphane katkıları.** Kütüphane öğeleri içeren bir çizim takımı, herhangi bir sayfaya yerleştirebileceğiniz bir Kütüphane katkıları listesi alır. Bkz. [Kütüphane katkıları](topic:library-credits).

### Kütüphane: yerleştirme

- **Yerleştirme görünümü izler.** Plan görünümünde Kütüphane {{ui:Plana yerleştir}} seçeneğini gösterir; 3B'de {{ui:Modele yerleştir}} seçeneğini gösterir; Bölünmüş görünümde ana eylemi {{ui:Plana yerleştir}} olan bölünmüş bir düğme gösterir. İki yol da aynı IFC öğesini yazar. Bir Kütüphane kartını plana ya da 3B görünüme sürükleyebilirsiniz; kalem ya da parmakla basılı tutup sonra sürükleyin. Bkz. [Kütüphaneden yerleştirme](topic:place-from-library).

### Dosyalar ve asistanlar

- **Collada ve Google Earth.** Araç çubuğundaki {{ui:Collada}} (menü stillerinde Dosya menüsü) bir .dae ya da haritadaki konumuna yerleştirilmiş bir .kmz yazar. Bkz. [Modeli Collada olarak ya da Google Earth için dışa aktarın](topic:collada).
- **Asistanlar elektrik cihazı yerleştirebilir.** Bağlı asistanınız, cihazları eklemek, listelemek, değiştirmek ve silmek ile ışıkları ayarlamak için yeni araçlara sahiptir. Asistanlar, {{ui:Ayarlar}} içinde açana kadar kapalı kalır. Bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Taramadan BIM (eklenti).** Varsayılan olarak kapalıdır ve Nokta bulutları eklentisi gerektirir. Bir taramadan, her biri için ölçülen sapmayla birlikte döşemeler, duvarlar, kapılar ve pencereler önerir; kabul etmek tek bir geri alma adımıdır.

### Analiz

- **Rüzgâr ve deprem arazi verileri.** {{ui:Analiz}} sekmesinde: ASCE 7-10 ya da 7-16'ya göre, yük durumları olarak her kata bir kuvvetle, rijit kapalı bir bina için rüzgâr yükleri; USGS sorgusu ve tasarım spektrumu ile deprem arazi verileri.
- **Yapısal takip ve sonlu elemanlar.** ACI 318-19'a göre beton kontrolleri, ASCE 7-22'ye göre eşdeğer yanal kuvvetler, kat sapması, döşeme ve duvarların plaka olarak modellenmesi ve ASCE 7 ile EN 1990'dan yük birleşimleri. Kendi sonlu eleman motorumuz kabukları, tetrahedronları ve modal analizi yapar. Bkz. [Beton elemanları kontrol edin ve deprem yüklerini oluşturun](topic:concrete-and-seismic) ve [Çerçeve analizi](topic:frame-analysis).

### Diğer eklentiler ve belgeler

- **İç aydınlatma (eklenti).** Armatürleri yerleştirir ve her katın planına luksu sayısal olarak yazar; parlama tahmini ve yazdırılabilir bir raporla birlikte.
- **Belgeler paneli.** {{ui:Dosya}} › {{ui:Belgeler…}} kilit dosyasıyla birlikte dışarı alma ve geri koyma, revizyon harfleri, yayın durumları ve geçmiş sunar.
- **Bölgeler ve çelik.** Düzenlemeler eklentisindeki Güney Afrika çizim ve yapı yönetmeliği paketleri ile paylaşılan kesit tablosundaki 976 İngiliz çelik boyutu.
- **Ücretsiz reçine baskı eklentileri.** Dilimleyici, destekler ve taban, pozlama testi ve GOO, SL1, Chitubox ve Anycubic dosya biçimleri; hepsi varsayılan olarak kapalıdır.

## Her uygulamada

- Bir düğmenin ya da kontrolün üzerine gelmek bir Bootstrap ipucu gösterir.
- Boş çizim alanındaki başlangıç ipucunun bir kapatma düğmesi vardır; BimCraft kapatıldığını hatırlar.
- Sığmayan bir panel sekmesi şeridi artık kesilmek yerine kayar.
- Bir belge açıkken tarayıcı sekmesi "<belge> - BimCraft | CadCraft" yazar.
- {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen}} bölümünde düzenler, iki satırlık seçeneklerden oluşan bir açılır listedir.
- {{ui:Ayarlar}} içindeki dil listesi 0.8'den daha fazla dil sunar; İngilizce dışındaki diller makine taslağıdır.

## Düzeltilenler

- **Merdivenlerde, rampalarda, korkuluklarda, çatı düzlemlerinde, serbest cihazlarda, resimlerde ve yollarda taşıma çalışır.**
- **Bir duvarı sürüklemek artık odayı çarpıtmaz.** Merkez tutamacı duvarı kendisine göre kare tutarak taşır ve köşeleri birleşik duvarlar boyunca kayar. Eski serbest taşıma için {{key:Mod}} tuşunu basılı tutun; {{ui:Dikleştir}} 90 dereceyi geri getirir.
- **Birleşik bir düğümde kalınlık ya da tür değişikliği** artık bir L, bir T, üç duvarlı bir düğüm ve eğri bir duvarın yanında köşeyi kapalı tutar.
- **Bir oda grubunu taşımak ya da kopyalamak**, grubun dışındaki birleşik duvarları birleşik tutar.
- **Yeniden yapma bir duvar ölçüsünün kimliğini korur.**
- **Çizim kapalıyken bir duvarı seçmek** Özellikler içinde artık bir hataya yol açmaz.
- **GPU başlatılamadığında render WebGL'e geri döner**; durmak yerine çalışmaya devam eder.
- **EnergyPlus kontrolü yeniden açılabilir.**
- **Belgeler ortalanmış bir iletişim kutusu olarak açılır.** {{key:Esc}}, X ya da soluklaşmış sayfaya tıklamak kapatır.
- **{{ui:Plan}}, {{ui:Bölünmüş}} ve {{ui:3B}} düğmeleri**, model açılır açılmaz görünür; yalnızca Çiz bir kez açıldıktan sonra değil.

## Dürüst sınırlar

- Hiçbir şey gerçek donanımda basılmadı. Reçine destekleri yenidir ve henüz kanıtlanmamıştır.
- Rüzgâr, deprem, beton ve sonlu eleman sonuçları bir mühendis için kontrol yardımcılarıdır; kapalı formüllere karşı denetlenmiştir, gerçek bir binaya karşı değil.
- Taramadan BIM sentetik bir binada test edildi, gerçek bir tarama üzerinde değil ve yalnızca dik açılı odaları bulur.
- Collada burada Blender ya da Google Earth'te açılmadı.
- Aydınlatma tahmini, başka aydınlatma programlarına göre değil, kendi izimize göre denetlenmiştir.
- Güney Afrika sayıları doğrulanmamıştır.
- Duvar birleşim stilleri (butt, mitre, square off) ve katman önceliği yapılmadı; köşeler gönye kesimlidir.
- İngilizce dışındaki diller makine taslağıdır.

Geri kalan her şey [Henüz yapılmayanlar](topic:not-built-yet) sayfasındadır. Önceki değişiklikler, bu sayfanın aşağısındaki 0.8 ve 0.8.1 notlarındadır.

## Önceki: 0.8 ve 0.8.1

BimCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinde, 0.7'ye kıyasla neler değişti. BimCraft artık bir bina hakkındaki soruları yanıtlayabilir ve insanlar, ses, su, rüzgâr ve depremlerle onu test edebilir; daha fazla araçla çizebilir. 0.8.1 bir düzeltme sürümüdür.

### Yeni

**Binayı test edin**

- **Binadaki insanlar.** Sol panelin {{ui:Binadaki insanlar}} bölümü, bir tahliyeyi ya da normal bir günün gelişlerini odalarınızdan, kapılarınızdan ve merdivenlerinizden geçirir. Bina daraldığı yerdeki kuyrukları, her odadan bir çıkışa en uzun yürüyüşü ve son kişinin ne kadar sürdüğünü görürsünüz. Bir kapıda {{ui:Kapalı}} seçeneğini işaretleyerek neyin değiştiğini görün ve yürüyenleri izlemek için {{ui:Binadaki insanları 3B görünümde göster}} seçeneğini işaretleyin. Bulgular Sorunlar'a gider. Tasarım kararları için kaba bir kalabalık modeli; bir yangın güvenliği belgesi değildir. Bkz. [İnsanları binadan geçirin](topic:people-in-the-building).
- **Oda akustiği ve dinleyin.** {{ui:Oda akustiği}} bölümü, her odanın yankılanma süresini oktav bandına göre (Sabine ve Eyring) odanın boyutundan ve seçtiğiniz kaplamalardan verir; kendi hedefinizle birlikte ne kadar emilimin bunu karşılayacağını söyler. {{ui:Bu odada çal}} bir ses, alkış, tek tek çalınan notalar ya da kendi ses dosyanız, oda için hesaplanmış bir dürtü yanıtından geçirilerek çalınır. Emilim değerleri, sizin değiştirmeniz için tipik yayımlanmış değerlerdir. Bkz. [Oda akustiği](topic:room-acoustics).
- **Sel, rüzgâr ve deprem oynatma.** {{ui:Tehlike oynatma}}, odalarda yükselen suyu, her kattaki rüzgâr basıncını ve katları sallayan bir depremi, bir zaman kaydırıcısıyla bir planda ya da görünüşte oynatır. Basit modeller, varsayımları panelde yazılıdır; bir yönetmelik kontrolü değildir. Bkz. [Sel, rüzgâr ya da deprem oynatın](topic:hazard-playback).
- **Elli yılda ne aşınır.** {{ui:Yaşam döngüsü görünümü}}, pencereleri, kapıları, kaplamaları ve çatıyı her biri için servis ömrüyle listeler; değiştirilecekleri yılları ve birim başına bir maliyet yazdığınızda yıllara göre maliyeti ile bugünkü değerini gösterir. {{ui:Listeyi kaydet (CSV)}} bunu dışarı yazar. Servis ömürleri planlama rakamlarıdır. Bkz. [Elli yıl içinde neyin aşındığını görün](topic:life-cycle-view).
- **Beton ve sismik kontroller.** {{ui:Analiz}} sekmesinin {{ui:Beton elemanları}} ve {{ui:Deprem yükleri}} blokları, beton kirişleri ve kolonları ACI 318-19'a göre kontrol eder ve rijit döşemelerde ASCE 7-22'ye göre eşdeğer yanal kuvvetler ile kat sapmasını üretir. Bir mühendisin kontrolü içindir. Bkz. [Beton elemanları kontrol edin ve deprem yüklerini oluşturun](topic:concrete-and-seismic).

**Kontrol edin ve raporlayın**

- **IDS'ye karşı kontrol.** Bir müşterinizin verdiği `.ids` dosyasını yükleyin ve IFC'yi teslim etmeden önce bu şartı karşılamayan her öğeyi Sorunlar'da görün. {{ui:Model denetimleri}} altında {{ui:IDS'ye göre denetle}} seçeneğini açın. Bkz. [Bir modeli müşterinin IDS'sine göre kontrol edin](topic:check-against-ids).
- **Etiketler ve listeler.** Kendi etiketlerinizi tanımlayın, bunları aynı anda birçok öğeye atayın ve sütunları, filtreleri ve grupları bunları okuyan listeler oluşturun; etiketler IFC içinde saklanır. Bkz. [Etiketler ve listeler](topic:tags-and-schedules).
- **Modelden belgeler.** {{ui:Modelden belgeler}}, açık IFC'den bir şartname şablonunu doldurur ve PDF, Word belgesi ya da Markdown olarak kaydeder. Bkz. [Modelden belgeler](topic:documents-from-the-model).
- **Bir taramayı modelle karşılaştırın.** Bir nokta bulutu açıkken {{ui:Karşılaştır}}, her öğeyi yapıldı, kısmen yapıldı, eksik ya da ulaşılmadı olarak değerlendirir ve yapılma yüzdesini gösterir. Bkz. [Bir taramayı modelle karşılaştırın](topic:compare-scan-with-model).
- **Karbon ve maliyet.** Karbon paneli, düzenleyebileceğiniz bir faktör tablosundan gömülü karbonu toplar; Maliyet paneli fiyatları 4D listesine yayar. BimCraft ile gelen faktörler genel değerlerdir ve doğrulanmamış olarak işaretlenmiştir. Bkz. [Gömülü karbon ve maliyet](topic:embodied-carbon-and-5d-cost).
- **Herhangi bir harita projeksiyonu.** {{ui:Ölç}} › {{ui:Koordinat sistemi…}} bir EPSG numarası, bir UTM bölgesi, bir ad ya da kendi projeksiyon tanımınızı alır. Bkz. [Herhangi bir projeksiyonla coğrafi referanslama](topic:georeference-any-projection).

**Çizin ve düzenleyin**

- **Taşıyın, hizalayın ve dağıtın.** {{ui:Yapı}} altında; {{key:Shift+M}} Taşıma'yı başlatır (sade {{key:M}} hâlâ Ölçüm'dür). Taşırken {{key:C}} ile kopyalar, her adım tek bir geri alma adımıdır ve bir Canlı TeamWork oturumunda dolaşır. Bkz. [Taşıma, kopyalama, hizalama ve dağıtma](topic:move-align-distribute).
- **Planın altında resimler.** {{ui:Yapı}} › {{ui:Resim}}, bir katın planının altına ya da dikey bir düzleme bir PNG, JPEG ya da WebP yerleştirir. Ölçeği iki noktayla belirleyin; taşıyın, döndürün, soluklaştırın ve kilitleyin. MarkupCraft'ta kopyalanan bir alan, sayfasının ölçeğinde yapıştırılır. Bkz. [Planın altına bir resim koyun](topic:pictures-as-backgrounds).
- **Bir taramadan duvarlar.** Bir tarama açıkken duvarlar, kapılar ve odalar, her birini tek tek tutabileceğiniz ya da reddedebileceğiniz öneriler olarak gelir; tek bir geri alma adımında. Yalnızca birbirine dik iki yönde duvarlar bulunur. Bkz. [Bir taramayı duvarlara çevirin](topic:scan-to-walls).
- **İz, kalemler ve bir eskizden merdiven.** {{ui:İz}}, bir katı planın altında kesikli olarak gösterir; {{ui:Kalemler}} duvarlara, kapılara ve pencerelere tek bir görünümde kendi çizgi kalınlığını verir; {{ui:Eskiz merdiven}} yürüme çizgisini bir merdivene çevirir. Bir Wavefront OBJ örgüsü açılır. Bkz. [Bir katın izini, kalemleri ve bir eskizden merdiveni](topic:trace-pens-stairs-obj).
- **Bir adres çevresinde binalar.** CivilCraft'ın Adresten arsa bulduğu binalar ve parsel öneri olarak gelir; eklemek istediklerinizi işaretlersiniz. Bkz. [CivilCraft'ın arsasıyla başlayın](topic:site-from-civilcraft).
- **Panel çizimleri.** {{ui:Yapı}} › {{ui:Panel çizimleri}}, ahşap ya da hafif profilli çelik duvarları, döşemeleri ve çatıları çerçeveler; bir kesim listesini CSV olarak, imalat çizimlerini PDF olarak kaydeder. Başlangıç değerleridir, yapısal bir tasarım değildir. Bkz. [Panel çizimleri](topic:panel-drawings).
- **Sembol paleti ve bitkiler.** {{ui:Yapı}} › {{ui:Sembol paleti}}, elektrik ve tesisat sembollerini adlarına göre bulur; {{ui:Kütüphane}}'nin {{ui:Bitkiler}} kaynağı plan sembolleriyle birlikte yaklaşık 400 bitki listeler. Bkz. [Sembol paleti](topic:symbol-palette) ve [Bir bitki yerleştirin](topic:plant-list).

**Borular, kanallar ve enerji**

- **Bölünmüş, VRF ve fan coil.** Bağlantılarıyla birlikte iç ve dış üniteler ve sizin değiştirebileceğiniz tipik örnek değerlerinden bir tabloya göre boyutlandırılmış hat setleri. Bkz. [Bölünmüş, VRF ve fan coil](topic:split-vrf-fan-coils).
- **Hesaplamalar.** Hesaplamalar paneli, besleme borularını ve kanallarını basınç kaybıyla kontrol eder, kabloları tavalardan ve borulardan geçirir ve doluluklarını gösterir; IES ya da EULUMDAT dosyalarından aydınlatma şiddetini hesaplar. Varsayılanlar etiketlidir; yönetmeliğinizin değerlerini yazın. Bkz. [Boru, kanal, kablo ve ışık hesapları](topic:mep-calculations).
- **PCF dosyaları.** Boru aracının **PCF dışa aktar** seçeneği, hatları boru gerilmesi ve izometrik programlar için yazar; geri okunan bir PCF dosyası borusunu çizer. Bkz. [Boru bileşen dosyaları](topic:piping-pcf).
- **Güneş PV.** Dizileri çatılara ya da zemine yerleştirin, modelden gölgelendirin, yıllık enerjiyi tahmin edin, dizileri kontrol edin ve tek hatlı şema verisi oluşturun. Başlangıç modülü ve kayıplar geneldir. Bkz. [Güneş PV](topic:solar-pv).
- **EnergyPlus dosyası.** Bölmede EnergyPlus ile kontrol, modeli kendi EnergyPlus'ınızda çalıştırmak için bir IDF olarak yazar. Tarayıcıda çalıştırmak, sizin barındırdığınız ve adresini yazdığınız bir derleme gerektirir; BimCraft bunu içermez. Bkz. [EnergyPlus ile ısıtma ve soğutmayı kontrol edin](topic:check-with-energyplus).

**Resimler ve dosyalar**

- **Render motorunu seçin.** {{ui:Render}}'ın bir {{ui:Motor}} seçeneği vardır. Yerleşik iki motorumuz (Hızlı ve Yol izleyici) varsayılan olarak kalır. **Şununla aç** sahneyi bir USD ya da glTF dosyası olarak kaydeder; bir Unreal proje klasörünü bir .zip olarak kaydeder; CadCraft Studio'da bir eklenti bir motor ekleyebilir. Projeyi açan Unreal eklentisi yayımlanmamıştır. Bkz. [Resmi hangi programın çizeceğini seçin](topic:render-engines).
- **Studio'da geri alma.** CadCraft Studio içinde BimCraft, Studio'ya tamamlanan her adımı bildirir; böylece Studio, en son kullandığınız pencerede son adımınızı geri alabilir. Bkz. [Uygulamalar arası geri alma](topic:undo-across-apps).
- **Dosyanızdaki eklentiler.** Bir IFC, içine hangi eklentilerin yazdığını kaydeder ve açtığınızda sizde olmayanları sunar. Bkz. [Dosyanızdaki eklentiler](topic:add-ons-in-your-file).

**Her uygulamada**

- **Yapay zekânızı bağlayın.** Kendi asistanınız, BimCraft'ı Studio bağlantısı üzerinden yönetebilir ve modelle ilgili soruları yanıtlayabilir; örneğin belirli bir alanın altında hangi odaların olduğunu. Studio'nun kendi yapay zekâsı yoktur. Bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}}, Sar, 2 satır ya da 1 satır sunar; Sar varsayılan olarak kalır.
- **Giriş cihazları.** Dokunmatik yüzey, kalem, 3B fare, denetleyici ve MIDI ayarları tüm uygulamalar arasında ortaktır.
- **Sorunlar ve Canlı.** Uyarı paneli ve Canlı oturumlar eskisi gibi çalışır; yukarıdaki yeni kontroller Sorunlar'a bilgi verir.
- **Diller.** 54 dil; bunların on tanesi yeni. İngilizce dışındakiler, bir ana dili konuşan kişinin henüz okumadığı makine taslaklarıdır; yardım konuları çoğunlukla İngilizcedir.

### 0.8.1'de düzeltilenler

- **Şerit + Proje tarayıcısı düzeni.** Ekle › CAD içe aktar, Ekle › Görüntü ve Yönet › Proje birimleri "BimCraft'ta henüz yapılmadı" diyordu. Artık Görüntü Resim aracını açar, CAD içe aktar {{ui:Yapı}} › {{ui:Bir çizimden…}} (DWG, DXF, PDF ya da bir tarama) seçeneğini açar ve Proje birimleri {{ui:Ayarlar}} › {{ui:Global}} › {{ui:Birimler}} seçeneğini açar. Taşı ve Hizala kendi araçlarını çalıştırır, Kat {{ui:Katlar ekle…}} seçeneğini açar, Aşamalar yenileme aşamaları bölümünü açar ve Malzemeler malzeme kütüphanesini açar.
- **DWG sınıfları bölümü.** Yanlış tür olarak okunuyordu; DWG okuyan BimCraft ve diğer uygulamalarda düzeltildi.
- **Çalışma zamanında dil.** Studio ve paketlenmiş sürümler artık yeniden başlatmadan dil değiştirebilir. Her platformda henüz test edilmedi; dil değişmezse bize bildirin.
- **Archicad paket betiği.** Ayrı bir indirme olan `archicad_bundle.py`, Archicad'in yolunu bulur, klasörü 20 saniyeye kadar izler ve paketin yanında yeniden dener.

### Bu sürümde henüz olmayanlar

- **Güvenlik ve tasarım yardımcıları.** Binadaki insanlar, bir yapı yönetmeliğinden gelen bir yürüme mesafesi sınırına sahip değildir (sınırı siz yazarsınız) ve gerçek bir planda elle denetlenmemiştir. Akustik, yaşam döngüsü ve tehlike rakamları planlama değerleridir, yönetmelik kontrolü değildir.
- **İklim senaryoları ve EnergyPlus.** Yerleşik iklim senaryosu yoktur: sel çalıştırması için bir senaryo dosyası yükleyebilirsiniz. Tarayıcıda EnergyPlus çalıştırması bu sürümün parçası değildir.
- **Şerit düzeni.** Malzeme Metrajı, BimCraft'ta malzeme miktar listesi olmadığı için "Henüz yapılmadı" olarak kalır; ayrıca 54 gri şerit aracının arkasında henüz bir BimCraft aracı yoktur.
- **İmzalama ve platformlar.** Windows yükleyicileri ve macOS .dmg imzasızdır; bu yüzden SmartScreen {{ui:Daha fazla bilgi}} ve sonra {{ui:Yine de çalıştır}} gösterir; macOS'te sağ tıklayıp {{ui:Aç}} gerekir. iPad ve iPhone derlemesi 0.8.1 için yeniden oluşturulmadı.
- **Gerçek sayfa testleri.** Bazı eski BimCraft tarayıcı testleri, 0.8.1'den önce olduğu gibi test sayfamızda hâlâ başarısız olur.

Geri kalan her şey [Henüz yapılmayanlar](topic:not-built-yet) sayfasındadır. Önceki değişiklikler [0.7'de neler yeni](topic:whats-new-0-7) sayfasındadır.
