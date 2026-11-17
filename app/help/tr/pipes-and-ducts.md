---
title: Borular ve kanallar
summary: Boru ve kanal hatlarını planda merkez çizgilerine göre çizin; dirsekler, te'ler, redüksiyonlar ve geçişler sizin için yapılır, hatlar IFC dosyasında bağlı bağlantı noktalı sistemlere aittir ve planlarda, listelerde ve metrajda görünürler.
keywords: boru, borular, tesisat, kanal, kanallar, havalandırma kanalı, hvac, mep, mekanik, dirsek, te, redüksiyon, geçiş, bağlantı parçası, bağlantı parçaları, vana, vanalar, kapı vanası, bilye vanası, glob vana, çek vana, dikey boru, eğim, gider, pis su, yağmur suyu, havalandırma, soğuk su, sıcak su, soğutulmuş su, ısıtma, gaz, yangın koruma, besleme havası, dönüş havası, egzoz, sistem, sistemler, bağlantı noktası, bağlantı noktaları, bağlantı, bağlantılar, armatür, sıhhi armatür, lavabo, eviye, klozet, tuvalet, duş, çamaşır teknesi, armatür birimleri, uhc, dfu, giderleri boyutlandırma, bina gideri, dal, toplayıcı, hava akışı, cfm, sürtünme, eşit sürtünme, boyutlandırma, liste, metraj, nbr, nbr 5648, nbr 5688, nbr 8160, yapıştırmalı pvc, kanalizasyon, dn
from: 85140bc5
---

## Neler yapacaksınız

Bir binanın borularını ve kanallarını duvar çizer gibi çizin: belirlediğiniz yükseklikte, bir hattın merkez çizgisinin köşelerine tıklayın. BimCraft bağlantı parçalarını yapar, her parçayı sistemine koyar ve bağlar; böylece diğer programlar hattı bağlı tek bir sistem olarak okur.

## Bir boru çizin

1. {{ui:Çiz}}'i açın, {{ui:Derleme}}'yi açıp {{ui:Boru}}'yu seçin.
2. Çubukta **sistemi** seçin (soğuk su, sıcak su, pis su gideri, gaz…). Bu, olağan malzemeyi ayarlar: su için bakır, giderler ve havalandırmalar için PVC, ısıtma, soğutulmuş su, gaz ve yangın koruma için çelik. Gerekirse **malzeme**, **sınıf** ve **boyutu** değiştirin. Boyutlar ve et kalınlıkları kamu standartlarından gelir: çelik boru ASME B36.10M, bakır tüp ASTM B88, PVC ASTM D1785 ve PEX ASTM F876. Brezilya projeleri, soğuk su için yapıştırmalı PVC olan **PVC su borusu (NBR 5648)** ve giderler ile havalandırmalar için, normal veya takviyeli seride **PVC gider borusu (NBR 5688)** kullanabilir: boyutları DN ile adlandırılır (DN 25, DN 100). Bunlardan birini seçtikten sonra başka bir sistem seçmek Brezilya borularında kalır (PVC su borusundan sonra bir pis su gideri için PVC gider borusu).
3. **At**'i ayarlayın: borunun merkez çizgisinin seviyenin üstündeki yüksekliği.
4. Borunun başladığı yere, sonra her köşeye tıklayın. Son noktada çift tıklayın ya da {{key:Enter}} tuşuna basın. {{key:Backspace}} son köşeyi geri alır; {{key:Esc}} hattı bırakır.

Boru duvarlar gibi yapışır ve diğer hatlara da: bir borunun ucunda başlayarak devam edin ya da bir borunun çizgisi üzerinde bitirerek ondan dallanın. Yeni bir hat, yapıştığı borunun yüksekliğini alır.

Bir hat bir ekipmanın bağlantı noktasında başlıyor ya da bitiyorsa, boyutunu ve sistemini alır ve ona sabitlenir: bkz. [Bağlantı noktalı MEP ekipmanı](topic:mep-equipment) ve [Boru ve kanalları ekipmana bağlama](topic:mep-connections).

## Projenin tesisat standardını belirleyin

Boru çubuğundaki ilk liste, modelin **tesisat standardıdır**: **ABD (IPC, inç)** ya da **Brezilya (ABNT, DN)**. Modelde kaydedilir; dosyayı açan herkes hatları aynı şekilde başlatır. **ABD** seçiliyken yeni bir hat, inç cinsinden, su için bakır ya da giderler için PVC Schedule 40 ile başlar ve Uluslararası Tesisat Kodu eğimini kullanır. **Brezilya** seçiliyken soğuk su PVC yapıştırmalı DN 25 olarak, pis su ve yağmur giderleri ile havalandırmalar NBR 8160 eğimiyle PVC esgoto DN 100 olarak, sıcak su ise bakır olarak başlar. Bu, bir armatürün bağlantısında ya da bir ekipman bağlantı noktasında başlatılan hatlara da uygulanır. Önceden çizilmiş borular kendi malzemesini ve kendi tablolarını korur; malzeme listesi açık kalır, böylece bir ABD modelinde bilerek bir Brezilya hattı çizebilirsiniz. Hiçbir seçimi olmayan bir dosya öncekiyle aynı davranır: yeni bir hat kullanımdaki malzemeyi izler.

## Bir kanal çizin

1. {{ui:Kanal}}'ı seçin. Sistemi (besleme, dönüş, egzoz ya da dış hava) ve şekli seçin: yuvarlak, dikdörtgen ya da düz oval.
2. Genişliği ve yüksekliği yazın (yuvarlak bir kanalın genişliği çapıdır) ve merkez çizgisinin yüksekliği için **At**'i.
3. Hava akışına göre boyutlandırmak için **Hava akışı** ve **Sürtünme** oranını yazın, sonra {{ui:Boyutlandır}}'a tıklayın. Kanal, ASHRAE El Kitabı'nın kanal tasarımı bölümündeki yöntem olan eşit sürtünmeyle boyutlandırılır ve stokta bulunan bir boyuta yukarı yuvarlanır; böylece sürtünme yazdığınız orandan eşit ya da daha az çıkar. Oran yazılmazsa 100 ft başına 0.08 in. su (0.8 Pa/m) kullanılır. Dikdörtgen bir kanal yazdığınız yüksekliği korur ve bir genişlik alır; kenarları 4'e 1'den fazla olduğunda BimCraft bunu söyler.
4. Köşelere, bir boru için olduğu gibi tıklayın.

## Sıhhi armatürler

{{ui:Derleme}} › {{ui:Aile yerleştir}} başlangıç için beş armatür sunar; her biri bir gider ve bir soğuk su bağlantısı taşır: bir **Klozet**, bir **Lavabo**, bir **Mutfak eviyesi**, bir **Duş teknesi** ve bir **Çamaşır teknesi**. Önleri yerleştirirken size bakar, arkaları duvara dayanır. Giderleri NBR 8160'ın en küçük armatür giderindedir (klozet için DN 100, mutfak eviyesi için DN 50, diğerleri için DN 40); su DN 20. Boyutlarını değiştirin ya da herhangi bir aile gibi düzenleyin: bkz. [Aileler ve boyutları](topic:families).

Bir aile, aile düzenleyicisinin {{ui:Bağlantı noktaları}} sekmesinde, {{ui:Sıhhi armatür}} altında hangi armatür olduğunu söyler. Giderleri armatür birimleri olarak sayılır: klozet için 6 UHC, lavabo için 1, mutfak eviyesi ya da çamaşır teknesi için 3, duş için 2 (NBR 8160) ya da IPC Tablo 709.1'in gider armatür birimleri.

## Bir armatürün bağlantı noktasından

Bir bağlantı noktası olan bir aileden yerleştirilen öğeler (bir lavabonun gideri ve musluğu, bir hava terminalinin boynu: bkz. [Bir aileyi düzenleyin](topic:family-editor)), {{ui:Boru}} ya da {{ui:Kanal}} açıkken boş bağlantı noktalarını nokta olarak gösterir ve imleç onlara yapışır.

- **Bir bağlantı noktasında başlayın**: hat sistemini ve boyutunu alır (çubuğun malzemesinin, bağlantı noktası boyutunda ya da hemen üstündeki borusu; yuvarlak bir kanal kendi çapında). Bağlantı noktası aşağı ya da yukarı bakıyorsa, bir lavabonun altındaki gider gibi, hat önce doğrudan **At**'te yazılı yüksekliğe aşağı ya da yukarı iner ya da çıkar, sonra tıklamalarınızı izler.
- **Bir bağlantı noktasında bitirin**: hat üzerine aşağı ya da yukarı iner ve orada biter.

Hat, IFC dosyasında öğeye bağlanır; diğer programlar armatürü sisteminin parçası olarak görür. Sonradan yerleştirilen, bir hattın ucunda bağlantı noktası olan bir öğe de ona bağlanır. Bir bağlantı noktasından uzaklaştırılan hat artık ona bağlı değildir.

## Sizin için yapılan bağlantı parçaları

| Nerede | BimCraft neyi yapar |
|---|---|
| Bir hat döner | Bir dirsek. Çelik boru ASME B16.9 uzun yarıçapında (1.5 × boyut), diğer borular bir dış çapta, yuvarlak kanal 1.5 çapta, dikdörtgen kanal bir genişlikte (yukarı ya da aşağı dönüşte bir yükseklikte) |
| Bir hat başka bir hattın çizgisinde biter | Bir te; diğer hat orada bölünür |
| Farklı boyutlarda iki hat uç uca gelir | Bir redüksiyon (borular) ya da bir geçiş (kanallar) |
| Aynı boyutta iki hat açıyla uç uca gelir | Bir dirsek |

Bir hattı değiştirdiğinizde, taşıdığınızda ya da sildiğinizde, o seviyedeki her bağlantı parçası yeniden yapılır. Bir kolun uzunluğu uçlarındaki bağlantı parçaları için çok kısaysa, BimCraft bunu söyler ve hiçbir şeyi değiştirmez: köşeyi daha uzağa taşıyın.

:::note
Bağlantı parçaları ve vanalar geneldir: üretici kataloğundan değil, boru ya da kanal boyutundan çizilirler. Manşonlu, presli ve oluklu bağlantı parçaları, vana gövdeleri ve ekipmanın kendi üretici boyutları vardır; sipariş vermeden önce tedarikçinizle kontrol edin.
:::

## Dikey borular

Çizerken **At**'e yeni bir yükseklik yazın ve {{key:Enter}} tuşuna basın: hat son köşede düz olarak yukarı ya da aşağı gider; her iki ucunda bir dirsekle. Bir dikey boru bir üstteki kata çıkabilir. Her seviye, görünüm aralığına giren hat parçalarını gösterir; dikey borunun yanında **UP** ya da **DN** ile.

## Giderler ve eğimleri

Pis su ve yağmur giderleri, boyutları için Uluslararası Tesisat Kodu'nun izin verdiği en küçük eğimle başlar: 2-1/2 in.'e kadar fit başına 1/4 in., 3 ile 6 in. arası için fit başına 1/8 in., 8 in.'den itibaren fit başına 1/16 in. Brezilya PVC gider borusu NBR 8160 eğimiyle başlar: DN 75'e kadar 2 %, DN 100'den itibaren 1 %. Çubukta ya da Özellikler'de başka bir eğim yazın: `1/4"/ft`, `2 %` ya da `1:50`. Hat ilk noktasından aşağı iner, bu yüzden giderleri aktıkları yönde çizin. Plan düşüşü ve bir ok gösterir. Bir gider kodun asgarisinden düzse Özellikler uyarır.

## Giderleri armatür birimlerine göre boyutlandırın

Bir pis su gideri seçin: Özellikler'deki **Armatür birimleri**, kaç birim taşıdığını ve gereken en küçük boyutu söyler. Gider bağlantısı hattın üzerinde olan her sıhhi armatür sayılır, ayrıca ona akan her gider de: giderleri aktıkları yönde çizin, her biri aktığı gider üzerinde bitsin.

- Brezilya PVC gider borusundaki giderler **UHC** sayar ve NBR 8160'ı izler; diğerleri **DFU** sayar ve Uluslararası Tesisat Kodu'nu izler.
- **Gider**: bir **Dal**, kodun armatür dalları tablosundan boyutlandırılır; bir **Bina gideri** eğimine göre tablosundan boyutlandırılır, bu yüzden **Eğim** önemlidir.
- Bir gider, hizmet verdiği armatür giderlerinden (bir klozet DN 100 ya da 3 in. ister) ve içine akan bir giderden daha küçük olamaz. NBR 8160 altında bir bina gideri en az DN 100'dür.

{{ui:Giderleri boyutlandır}}, modeldeki armatür birimleri için çok küçük olan her pis su giderini gerekli boyuta getirir; geri alınabilir tek bir adım olarak. Gereğinden büyük çizilmiş bir gider olduğu gibi bırakılır. Bir gider, borusunun en büyük boyutunun eğimiyle taşıyabileceğinden fazlasını taşıdığında BimCraft bunu söyler: ona daha dik bir eğim ya da başka bir boru verin.

:::note
Tablolar yatay giderlerin tablolarıdır. Düşey tesisat hatları, havalandırmalar ve yağmur giderleri burada boyutlandırılmaz: bunları ve tüm tasarımı, projeye uygulanan kodla kontrol edin.
:::

## Vanalar

1. {{ui:Vana}} seçin ve türü: kapı, bilye, glob ya da çek.
2. Gideceği boruya tıklayın. Boru etrafından kesilir ve vana iki tarafa da bağlanır.

Hattın Özellikleri, vanalarını {{ui:Kaldır}} ile birlikte listeler.

Daha fazla vana türü, bir süzgeç, kanallarda damperler, kendi boru özellikleriniz ve üretici aileleri: bkz. [Boru özellikleri, vanalar, damperler ve üretici aileleri](topic:pipe-specs).

## Bir hattı değiştirme

Hattın herhangi bir parçasını planda ya da 3B görünümde seçin. Özellikler'de:

- **Sistem**, **Malzeme**, **Sınıf** ve **Boyut** (borular) ya da **Şekil**, **Genişlik**, **Yükseklik** (kanallar).
- **Seviyenin üstündeki yükseklik** tüm hattı yukarı ya da aşağı taşır.
- **Yalıtım**: kalınlığı; açıklık kontrolü ve açıklıklar listesi için tutulur (bunun için bir şey çizilmez): bkz. [Boru ve kanalları yapıya karşı kontrol edin](topic:mep-against-structure).
- Çelik boru: **Spool'lara kes**: bkz. [Çelik boru spool'ları ve spool sayfaları](topic:pipe-spools).
- **Eğim** (borular).
- {{ui:Boyutlandır}} ile **Akış**: su için, suyu 8 ft/s (2.4 m/s) tutan en küçük boyut, sıcak su için 5 ft/s (1.5 m/s); Brezilya PVC su borusu (NBR 5626) için 3 m/s. Kanallar için, çizildiği gibi kanalın hızı ve sürtünme oranı. Pis su giderleri bunun yerine armatür birimleriyle boyutlandırılır: aşağıdaki **Giderleri armatür birimlerine göre boyutlandırın** bölümüne bakın.

Her değişiklik {{ui:Geri al}} ile bir adımdır. {{key:Delete}} tüm hattı siler.

## Planlar

- 150 mm'den (yaklaşık 6 in.) küçük borular merkez çizgisinde tek bir çizgi olarak, daha büyük borular ve tüm kanallar genişliklerinde iki çizgi olarak çizilir.
- Her sistemin kendi rengi vardır; plan PDF'i bunları siyah basar.
- Her hat boyutu ve sistemiyle etiketlenir (örneğin `2" CW` ya da `16×10 SA`).
- Bir planın görünüm aralığı hangi hatları gösterdiğine karar verir ve {{ui:Bu planda gösterilen}} **Borular** ya da **Kanallar**'ı dışarıda bırakabilir: bkz. [Görünümler, görünüm aralıkları ve kendi sayfalarınız](topic:views-and-sheets).

## Listeler ve metraj

{{ui:Listeler}} paneli **Borular** (sisteme, malzemeye ve boyuta göre, uzunluklarıyla), **Kanallar** (sisteme, şekle ve boyuta göre, uzunlukları ve dış yüzey alanıyla) ve **Bağlantı parçaları ve vanalar** (türe ve boyuta göre, sayılarıyla) ekler. Neyi listelediğini seçmek için bir satıra tıklayın; {{ui:CSV indir}} onu indirir.

{{ui:Metraj}}, hatları TakeoffCraft'a taşır: boru ve kanal boyuta göre, planda çizildiği gibi hatlar olarak (eğimli giderler eğimleri boyunca ölçülür); bağlantı parçaları ve vanalar nerelerindeyse sayılır: bkz. [Modelin miktarlarını TakeoffCraft'a gönderin](topic:takeoff). Dikey borular o sayfadan çıkarılır, çünkü bir plan onları ölçemez; Borular listesinde uzunlukları vardır.

## IFC dosyasında

Her hat, parçalarını tutan bir montajdır: boru ve kanal segmentleri, bağlantı parçaları ve vanalar; her biri tipi, malzemesi, sistemi için bir renk ve bağlantı noktalarıyla. Birbirine dokunan bağlantı noktaları bağlıdır ve her parça kendi dağıtım sistemine aittir (IFC2X3 dosyaları aynısını akış segmentleri, bağlantı parçaları ve kontrolörler olarak bir sistemde alır). IFC sistemlerini okuyan diğer programlar, sistem başına bağlı tek bir hat görür. Hattın kendi tanımı onunla birlikte tutulur; böylece değiştirdiğinizde BimCraft onu aynı şekilde yeniden yapar.
