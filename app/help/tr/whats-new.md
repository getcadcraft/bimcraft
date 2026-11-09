---
title: Yenilikler (0.8 ve 0.8.1)
summary: BimCraft binada yürüyen insanları, duyabileceğiniz oda akustiğini, sel, rüzgar ve deprem oynatmalarını, elli yıllık yaşam döngüsü görünümünü, IDS denetimlerini, etiketleri ve listeleri, Taşı, Hizala ve Dağıt komutlarını, plan altındaki resimleri, bir taramadan duvarları, panel çizimlerini, güneş, bölünmüş ve VRF sistemlerini, boru ve kablo boyutlandırmasını, betonarme ve deprem denetimlerini, her harita projeksiyonunu, render motoru seçimini ve Studio'da geri almayı ekliyor; 0.8.1 Şerit düzeninin gri araçlarını düzeltir.
keywords: yenilikler, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, tahliye, insanlar, kuyruklar, akustik, yankılanma, dürtü yanıtı, sel, rüzgar, deprem, tehlike, yaşam döngüsü, servis ömrü, ids, etiketler, listeler, taşı, hizala, dağıt, resim, arka plan, taramadan duvar, civilcraft arsası, panel çizimleri, çerçeve, güneş, pv, bölünmüş, vrf, fan coil, boru boyutlandırma, kablo tavası, aydınlık düzeyi, beton, sismik, tarama karşılaştır, epsg, projeksiyon, belgeler, şablon, karbon, maliyet, energyplus, render motoru, şununla aç, usd, glb, unreal, geri al, eklentiler, pcf, semboller, bitkiler, iz, kalemler, merdiven eskizi, şerit, proje tarayıcısı, düzen
from: 87b03056
---

Bu, BimCraft 0.8 (2026-11-01) ve 0.8.1 (2026-11-02) sürümlerinde 0.7'ye göre değişenlerdir. BimCraft artık bir bina hakkındaki soruları yanıtlayabilir ve onu insanlarla, sesle, suyla, rüzgarla ve depremlerle test edebilir; ayrıca daha çok araçla çizebilir. 0.8.1 bir düzeltme sürümüdür.

## Yeni

### Binayı test edin

- **Binadaki insanlar.** Sol paneldeki {{ui:Binadaki insanlar}} bölümü bir tahliyeyi ya da normal bir günün gelişlerini odalarınızdan, kapılarınızdan ve merdivenlerinizden geçirir. Bina daraldığında kuyrukları, her odadan bir çıkışa en uzun yürüyüşü ve son kişinin ne kadar süre harcadığını görürsünüz. Bir kapıda {{ui:Kapalı}} kutusunu işaretleyin ve neyin değiştiğini görün; yürüyenleri izlemek için {{ui:İnsanları 3B görünümde göster}} kutusunu işaretleyin. Bulgular Sorunlar paneline gider. Tasarım kararları için kaba bir kalabalık modeli; bir yangın güvenliği sertifikası değil. Bkz. [Binadan insanları yürütün](topic:people-in-the-building).
- **Oda akustiği ve duyun.** {{ui:Oda akustiği}} bölümü her odanın yankılanma süresini, boyutundan ve seçtiğiniz kaplamalardan yola çıkarak oktav bandına göre verir (Sabine ve Eyring). Kendi hedefinizle, bu hedefi karşılamak için ne kadar absorpsiyon gerektiğini söyler. {{ui:Bu odada çal}} bir ses, bir alkış, parmakla çalınan notalar ya da kendi ses dosyanızı, oda için hesaplanmış bir dürtü yanıtı üzerinden çalar. Absorpsiyon değerleri, sizin değiştirmeniz için tipik yayımlanmış değerlerdir. Bkz. [Oda akustiği](topic:room-acoustics).
- **Sel, rüzgar ve deprem oynatma.** {{ui:Tehlike oynatma}} suyun odalara yükselişini, her kattaki rüzgar basıncını ve katları sallayan bir depremi, bir plan ya da kesit üzerinde zaman kaydırıcılı olarak oynatır. Panelde varsayımlarıyla birlikte basit modeller bulunur; bir yönetmelik denetimi değil. Bkz. [Sel, rüzgar ya da deprem oynatın](topic:hazard-playback).
- **Elli yılda neyin eskidiği.** {{ui:Yaşam döngüsü görünümü}} pencereleri, kapıları, kaplamaları ve çatıyı, her birinin servis ömrü, yenilendikleri yıllar ve birim başına bir maliyet yazdığınızda yıla göre maliyet ve şimdiki değeriyle listeler. {{ui:Listeyi kaydet (CSV)}} bunu dışarı yazar. Servis ömürleri planlama rakamlarıdır. Bkz. [Elli yılda neyin eskidiğini görün](topic:life-cycle-view).
- **Betonarme ve deprem denetimleri.** {{ui:Analiz}} sekmesinin {{ui:Betonarme elemanlar}} ve {{ui:Deprem yükleri}} blokları betonarme kirişleri ve kolonları ACI 318-19'a göre denetler; rijit döşemeler için ASCE 7-22'ye göre eşdeğer yatay kuvvetleri, kat ötelenmesiyle birlikte üretir. Bir mühendisin kontrol etmesi içindir. Bkz. [Betonarme elemanları denetleyin ve deprem yükleri üretin](topic:concrete-and-seismic).

### Denetleyin ve raporlayın

- **IDS'ye göre denetleme.** Bir müşterinin verdiği `.ids` dosyasını açın ve IFC'yi teslim etmeden önce, buna uymayan her öğeyi Sorunlar'da görün. {{ui:Model denetimleri}} altında {{ui:Bir IDS'ye göre denetle}} öğesini açın. Bkz. [Bir modeli müşterinin IDS'sine göre denetleyin](topic:check-against-ids).
- **Etiketler ve listeler.** Kendi etiketlerinizi tanımlayın, birçok öğeye birden atayın ve sütunları, filtreleri ve grupları bunları okuyan listeler oluşturun; etiketler IFC içinde saklanır. Bkz. [Etiketler ve listeler](topic:tags-and-schedules).
- **Modelden belgeler.** {{ui:Modelden belgeler}} açık IFC'den bir şartname şablonunu doldurur ve PDF, Word belgesi ya da Markdown olarak kaydeder. Bkz. [Modelden belgeler](topic:documents-from-the-model).
- **Bir taramayı modelle karşılaştırın.** Açık bir nokta bulutuyla {{ui:Karşılaştır}} her öğeyi yapılmış, kısmen yapılmış, eksik ya da ulaşılmamış olarak değerlendirir ve yapım yüzdesini gösterir. Bkz. [Bir taramayı modelle karşılaştırın](topic:compare-scan-with-model).
- **Karbon ve maliyet.** Karbon bölmesi, düzenleyebileceğiniz bir faktör tablosundan gömülü karbonu toplar; Maliyet bölmesi fiyatları 4B programına yayar. BimCraft ile gelen faktörler geneldir ve doğrulanmamış olarak işaretlidir. Bkz. [Gömülü karbon ve maliyet](topic:embodied-carbon-and-5d-cost).
- **Herhangi bir harita projeksiyonu.** {{ui:Ölçüm}} › {{ui:Koordinat sistemi…}} bir EPSG numarası, bir UTM bölgesi, bir ad ya da kendi projeksiyon tanımınızı alır. Bkz. [Herhangi bir projeksiyonla coğrafi referanslama](topic:georeference-any-projection).

### Çizin ve düzenleyin

- **Taşı, Hizala ve Dağıt.** {{ui:Derleme}} altında; {{key:Shift+M}} Taşı'yı başlatır (düz {{key:M}} hâlâ Ölçüm'dür). Taşı, ilerlerken {{key:C}} ile kopyalar, her adım tek bir geri alma adımıdır ve bir Canlı TeamWork oturumunda diğerlerine aktarılır. Bkz. [Taşıma, kopyalama, hizalama ve dağıtma](topic:move-align-distribute).
- **Plan altındaki resimler.** {{ui:Derleme}} › {{ui:Resim}} bir PNG, JPEG ya da WebP'yi bir katın planının altına ya da dikey bir düzleme yerleştirir. Ölçeği iki noktayla ayarlayın; taşıyın, döndürün, soldurun ve kilitleyin. MarkupCraft'ta kopyalanan bir alan, sayfasının ölçeğinde yapıştırılır. Bkz. [Plan altına bir resim koyun](topic:pictures-as-backgrounds).
- **Bir taramadan duvarlar.** Bir tarama açıkken duvarlar, kapılar ve odalar, birer birer tutacağınız ya da reddedeceğiniz öneriler olarak tek bir geri alma adımında gelir. Yalnızca iki dik yönde olan duvarlar bulunur. Bkz. [Bir taramayı duvarlara çevirin](topic:scan-to-walls).
- **İz, kalemler ve merdiven eskizi.** {{ui:İz}} başka bir katı plan altında kesikli gösterir, {{ui:Kalemler}} duvarlara, kapılara ve pencerelere tek görünümde kendi çizgi kalınlığını verir ve {{ui:Merdiven eskizi}} bir yürüme çizgisini merdivene çevirir. Bir Wavefront OBJ ağı açılır. Bkz. [Bir katı izleme, kalemler ve bir krokiden merdiven](topic:trace-pens-stairs-obj).
- **Bir adresin çevresindeki binalar.** CivilCraft'ın Adresten arsa aracının bulduğu binalar ve parsel öneri olarak gelir; eklemek istediklerinizi işaretlersiniz. Bkz. [CivilCraft'ın arsasıyla başlayın](topic:site-from-civilcraft).
- **Panel çizimleri.** {{ui:Derleme}} › {{ui:Panel çizimleri}} ahşap ya da hafif profilli çelikte duvarları, döşemeleri ve çatıları çerçeveler; bir kesim listesini CSV, imalat çizimlerini PDF olarak kaydeder. Başlangıç değerleridir, yapısal tasarım değil. Bkz. [Panel çizimleri](topic:panel-drawings).
- **Sembol paleti ve bitkiler.** {{ui:Derleme}} › {{ui:Sembol paleti}} elektrik ve tesisat sembollerini adlarıyla bulur; {{ui:Kütüphane}} içindeki {{ui:Bitkiler}} kaynağı plan sembolleriyle birlikte yaklaşık 400 bitki listeler. Bkz. [Sembol paleti](topic:symbol-palette) ve [Bir bitki yerleştirin](topic:plant-list).

### Borular, kanallar ve enerji

- **Bölünmüş, VRF ve fan coil.** Bağlantılarıyla iç ve dış üniteler; hat setleri de değiştirebileceğiniz tipik örnek değerler tablosundan boyutlandırılır. Bkz. [Bölünmüş, VRF ve fan coil](topic:split-vrf-fan-coils).
- **Hesaplamalar.** Hesaplamalar bölmesi besleme boru ve kanal boyutlarını basınç düşümüyle denetler, kabloları tavalardan ve borulardan geçirir ve doluluk oranlarını gösterir; IES ya da EULUMDAT dosyalarından aydınlık düzeyini hesaplar. Varsayılanlar etiketlidir; kodunuzun değerlerini yazın. Bkz. [Boru, kanal, kablo ve aydınlatma hesapları](topic:mep-calculations).
- **PCF dosyaları.** Boru aracının **PCF'yi dışa aktar** komutu, boru gerilme ve izometrik programları için boru hatlarını yazar; geri okunan bir PCF dosyası borusunu çizer. Bkz. [Boru bileşen dosyaları](topic:piping-pcf).
- **Güneş PV.** Dizileri çatılara ya da zemine yerleştirin, modelden gölgelendirin, yıllık enerjiyi tahmin edin, dizi hatlarını denetleyin ve tek hatlı şema verisi üretin. Başlangıç modülü ve kayıplar geneldir. Bkz. [Güneş PV](topic:solar-pv).
- **EnergyPlus dosyası.** {{ui:EnergyPlus ile denetle}} bölmesi modeli, kendi EnergyPlus'ınızda çalıştırmak için bir IDF olarak yazar. Tarayıcıda çalıştırmak, kendi barındırdığınız ve adresini yazdığınız bir derleme gerektirir; BimCraft bunu taşımaz. Bkz. [EnergyPlus ile ısıtma ve soğutmayı denetleyin](topic:check-with-energyplus).

### Resimler ve dosyalar

- **Render motorunu seçin.** {{ui:Render}} bölümünde bir {{ui:Motor}} seçeneği var. İki yerleşik motorumuz (Hızlı ve Yol izleyici) varsayılan olarak kalır. **Şununla aç** sahneyi bir USD ya da glTF dosyası olarak, bir Unreal proje klasörünü de .zip olarak kaydeder; CadCraft Studio'da bir eklenti motor ekleyebilir. Projeyi açan Unreal eklentisi yayımlanmadı. Bkz. [Resmi hangi programın çizeceğini seçin](topic:render-engines).
- **Studio'da geri al.** CadCraft Studio içinde BimCraft, Studio'ya her tamamlanan adımı bildirir; böylece Studio, en son kullandığınız pencerede son adımınızı geri alabilir. Bkz. [Uygulamalar arası geri alma](topic:undo-across-apps).
- **Dosyanızdaki eklentiler.** Bir IFC, hangi eklentilerin içine yazdığını kaydeder ve açtığınızda sizde olmayanları önerir. Bkz. [Dosyanızdaki eklentiler](topic:add-ons-in-your-file).

### Her uygulamada

- **Yapay zekânızı bağlayın.** Kendi asistanınız, Studio'nun bağlantısı üzerinden BimCraft'ı yönetebilir ve modelle ilgili soruları yanıtlayabilir; örneğin belirli bir alanın altında hangi odaların bulunduğu gibi. Studio'nun kendi yapay zekâsı yoktur. Bkz. [Bir yapay zekâ asistanının modelinizle çalışmasını sağlayın](topic:assistants).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} Sarma, 2 satır ya da 1 satır sunar; Sarma varsayılan olarak kalır.
- **Giriş cihazları.** Dokunmatik yüzey, kalem, 3B fare, denetleyici ve MIDI ayarları tüm uygulamalarda ortaktır.
- **Sorunlar ve Canlı.** Uyarı paneli ve Canlı oturumlar eskisi gibi çalışır; yukarıdaki yeni denetimler Sorunlar'a bilgi verir.
- **Diller.** 54 dil var; bunlardan on tanesi yeni. İngilizce dışındakiler, henüz ana dili konuşan biri tarafından okunmamış makine taslaklarıdır; yardım konuları çoğunlukla İngilizcedir.

## 0.8.1'de düzeltilenler

- **Şerit + Proje tarayıcısı düzeni.** Ekle › CAD'i içe aktar, Ekle › Resim ve Yönet › Proje birimleri "BimCraft'ta henüz yapılmadı" diyordu. Resim artık Resim aracını açar; CAD'i içe aktar {{ui:Derleme}} › {{ui:Bir çizimden…}} öğesini açar (DWG, DXF, PDF ya da tarama); Proje birimleri {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} öğesini açar. Taşı ve Hizala, Taşı ve Hizala araçlarını çalıştırır; Kat {{ui:Katlar ekle…}} öğesini açar, Aşamalar Yenileme aşamaları bölümünü açar ve Malzemeler malzeme kütüphanesini açar.
- **DWG sınıfları bölümü.** Yanlış tür olarak okunuyordu; BimCraft'ta ve DWG'yi okuyan diğer uygulamalarda düzeltildi.
- **Çalışma zamanında dil.** Studio ve paketli sürümler artık yeniden başlatmadan dil değiştirebilir. Bu henüz her platformda sınanmadı; dil değişmiyorsa bize bildirin.
- **Archicad paket betiği.** Ayrı bir indirme olan `archicad_bundle.py` artık Archicad'in yolunu bulur, klasörü en fazla 20 saniye izler ve paketin yanında yeniden dener.

## Bu sürümde henüz yok

- **Güvenlik ve tasarım yardımcıları.** Binadaki insanlar, bir yapı yönetmeliğinden gelen bir yürüme mesafesi sınırına sahip değil (sınırı siz yazarsınız) ve gerçek bir planda elle denetlenmedi. Akustik, yaşam döngüsü ve tehlike rakamları planlama değerleridir, yönetmelik denetimi değil.
- **İklim senaryoları ve EnergyPlus.** Yerleşik iklim senaryosu yok: sel çalıştırması için bir senaryo dosyası yükleyebilirsiniz. Tarayıcıda EnergyPlus çalıştırması bu sürümün parçası değil.
- **Şerit düzeni.** Malzeme metrajı "Henüz yapılmadı" olarak kalır, çünkü BimCraft'ta malzeme miktar listesi yok; gri duran 54 diğer şerit aracının arkasında da henüz bir BimCraft aracı yok.
- **İmzalama ve platformlar.** Windows yükleyicileri ve macOS .dmg dosyası imzasızdır; bu yüzden SmartScreen {{ui:Ek bilgi}} gösterir, ardından {{ui:Yine de çalıştır}} gerekir; macOS'ta sağ tıklayıp {{ui:Açık}} gerekir. iPad ve iPhone derlemesi 0.8.1 için yeniden derlenmedi.
- **Gerçek sayfa testleri.** Bazı eski BimCraft tarayıcı testleri, 0.8.1'den önce olduğu gibi test sayfamızda hâlâ başarısız oluyor.

Diğer her şey [Henüz yapılmayanlar](topic:not-built-yet) konusundadır. Önceki değişiklikler [0.7 sürümündeki yenilikler](topic:whats-new-0-7) konusundadır.
