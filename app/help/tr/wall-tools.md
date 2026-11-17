---
title: Duvar şekilleri, bölme, uzaklık, esneme ve kilit
summary: Duvarları, duvar aracının tarifleriyle dikdörtgen, çokgen ya da yay olarak; seçilen çizgiler üzerinde ya da bir dış çizgi etrafında çizin; bölün, bir parçasını çıkarın, uzaklık alın, kutu esnetin, hizalayın ve birbirlerine, bir ölçülendirmeye ya da bir aks çizgisine kilitleyin. Her değişiklik duvarları birleşik tutar ve tek bir geri alma adımıdır.
keywords: tip değiştir, tip değişikliği, yeniden tip, ne taşındı, lod, geliştirme düzeyi, birleşim stili, gönye, alın, düz kes, duvar birleşimleri, sonraki, içinden geçer, birleşimi reddet, birleşime izin ver, katman önceliği, çekirdek, öncelik, kavşak, dikdörtgen, döndürülmüş dikdörtgen, çokgen, içine yazılmış, çevrel, yay, merkez, teğet yay, çizgileri seç, sekme, izle, dış çizgi, sihirli değnek, böl, boşluklu böl, boşluk, segmenti sil, yeniden birleştir, uzaklık, kopya, kutu esnetme, kutu, esnet, hizala, kilit, asma kilit, kısıtlama, ölçülendirmeyi kilitle, ölçülendirmeyi düzenle, aks, aks çizgisine kilitle, aks çizgisini taşı, yerleşim uzaklığı, birleşim yok, serbest duran, buradan büyüt, buradan ölç, merkez çizgisi, iç yüz, dış yüz, birleşimi kaldır, alt
from: 5b7d2f75
---

## Ne yapacaksınız

Duvar aracının tarifleriyle duvarları yapın ve değiştirin. Her biri, köşeleriyle çizilen bir duvarla aynı şekilde biter: köşeler kendiliğinden birleşir, birleşimler dosyada saklanır ve tüm değişiklik **Değişiklikler** içinde {{ui:Geri al}} ile geri alınabilen tek bir adımdır. Duvarlar kimliklerini korur: bölünen, uzaklık alınan ya da esnetilen bir duvar hâlâ aynı duvardır, kapıları, pencereleri ve ölçülendirmeleriyle birlikte.

## Dikdörtgen, çokgen ya da yay çizin

{{ui:Çiz}} açıkken, Çiz grubundaki {{ui:Şekiller}}'i açın (ya da Duvar satırındaki **Şekil** listesinden bir şekil seçin). Duvar satırı, {{ui:Duvar}} aracındakiler gibi duvar tipini, çizim referansını, dış tarafı ve üstü gösterir. Sonra tıklayın ya da noktaları yazın (x,y · @dx,dy · @uzunluk<açı · imleç yönünde bir uzunluk):

- **Dikdörtgen**: iki karşı köşe. Dört duvar, dört köşe birleşimi, tek adım.
- **Döndürülmüş dikdörtgen**: ilk kenarın nerede başlayıp bittiği (dönüşünü ve uzunluğunu belirler), sonra diğer kenar için üçüncü bir tıklama.
- **Çokgen**: merkez, sonra bir köşe (**İçine yazılmış**) ya da bir kenarın orta noktası (**Çevrel**). Önce **Kenar sayısı** (3 ile 64 arası) belirleyin.
- **Yay, merkez**: merkez, başlangıç (yarıçapı belirler), bitiş. **Yön**: kısa yoldan, saat yönünün tersine ya da saat yönünde. Bir çemberin dörtte üçünü süpüren bir yay iki duvar olarak çizilir.
- **Teğet yay**: bir duvarın ucuna, sonra yayın bittiği yere tıklayın. Yay, duvarın ucundan, duvarın kendi yönünde ayrılır.

Kapalı bir şeklin dış yüzü dışarı bakar. **Dış yüz** ya da **İç yüz** üzerinde çizildiğinde, tıkladığınız yüz yerinde kalan yüzdür.

## Zaten var olan çizgilerde duvarlar

- **Çizgileri seç**: bir çizgiye tıklayın, bir duvar onun üzerine gelir. Uçtan uca birleşik çizgilerin tüm zincirini almak için {{key:Tab}} tuşuna basın (ya da tıklarken {{key:Shift}} tuşunu basılı tutun). Çizgiler bu görünümün çizim çizgileri, iz referansı ve aks çizgileridir.
- **Dış çizgiyi izle**: bu çizgilerle ya da duvarlarla kapatılmış bir alanın içine tıklayın. Duvarlar, tıklamanın etrafındaki en küçük alanı çevreler.

## Önceden ayarlayın: uzaklık ve birleşim

Duvar satırında, {{ui:Duvar}} aracı ve şekiller tarafından kullanılan iki alan daha vardır:

- **Uzaklık**: duvarlar tıkladığınız çizgiden bu kadar uzakta çizilir: + çizdiğiniz yönde görülen sol tarafa, − sağ tarafa.
- **Birleşim**: serbest duran duvarlar çizmek için bu kutunun işaretini kaldırın. Uçları **Birleşimi reddet** alır ve nereye giderlerse gitsinler serbest kalırlar (bkz. [Bir duvarı değiştirin](topic:change-a-wall-or-door)).

## Bölün, bir parçayı çıkarın, yeniden birleştirin

**Düzenleme** grubunda {{ui:Duvarlar}} öğesini açın.

- **Böl**: kesilmesi gereken yerde bir duvara tıklayın ya da başlangıcından mesafeyi yazın. Onu kesen bir duvarın yakınında, kesim onların buluştuğu yere yapışır. İki parça aynı tipe sahiptir ve uçtan uca birleşik kalır. **Boşluk** kesimin merkezinde bu uzunlukta bir boşluk bırakır. **Serbest uçlar**, bunun yerine kesilmiş uçlara Birleşimi reddet verir (Ayarlar › BimCraft › Duvarlar › **Duvar bölündüğünde** hangisinin baştan işaretli olacağını belirler). Bir kapı ya da pencere içinde durduğu parçayla gider; onun içinden geçen bir kesim reddedilir.
- **Segmenti sil**: parçanın başladığı ve bittiği yere tıklayın. Parçadaki bir kapı onunla gider.
- **Yeniden birleştir**: bir duvarın iki parçasına tıklayın (aynı çizgide, aynı tip). Yeniden tek bir duvar olurlar: ilk tıkladığınız, iki parçanın kapılarıyla birlikte.

## Birleşim stili, Birleşimi reddet, katman önceliği

**Düzenleme** grubunda {{ui:Duvarlar}} öğesini açın.

- **Birleşim stili**: iki düz duvarın bittiği bir köşeye tıklayın. Her tıklama bir sonraki stile geçer: **Gönye** (iki uç da iç köşeden dış köşeye giden çizgide kesilir; her köşenin başladığı şey), **Alın** (bir duvar, diğerinin dış yüzüne kadar uzanır ve yan yüzünde durur) ve **Düz kes** (alın gibi, ama içinden geçen duvarın ucu düz biter; dik açıda alın gibi görünür). **Sonraki**, ya da {{key:Tab}}, diğer duvarı içinden geçen yapar. Çubuktaki **Stil** listesi en son tıkladığınız köşeyi gösterir. Aynı iki seçenek, tek bir duvarın **Özellikler** bölümünde de vardır: **Başlangıçta / sonunda birleşim stili** ve **İçinden geçer**. Her değişiklik **Değişiklikler** içinde tek bir adımdır. Plan, 3B gövde, odalar ve miktarlar izler.
- Bir T'de, bir yan yüzüne değen duvar her zaman içinden geçer. İki duvar kesiştiğinde, bir tıklama (ya da **Özellikler**'de **Kesiştiği yerde sürekli**) hangisinin sürekli olduğunu belirtir; bu, kesişimden hangi duvarın katmanlarının geçirileceğini belirler.
- Stil birleşime aittir: duvarlar taşındığında kalır ve yalnızca birleşim gittiğinde gider (duvar silinir, o ucunda bölünür ya da uç Birleşimi reddet alır). Eğri bir duvarla ya da üç ya da daha fazla duvarın buluştuğu bir köşede gönye kalır. Yaklaşık 30 dereceden keskin ya da yaklaşık 150 dereceden düz bir köşe de gönyeye döner.
- **Birleşimi reddet**: bir duvar ucunun yakınına tıklayın. O uç serbest kalır: nereye giderse gitsin hiçbir şeye bağlanmaz, siz tekrar tıklayana kadar. Serbest uçlar, araç açıkken bir çarpıyla işaretlenir. Aynı anahtar **Özellikler**'de **Başlangıçta birleştir / Sonda birleştir** olarak da vardır.
- **Katman önceliği**: katmanlı duvarların buluştuğu yerde, daha güçlü katman daha zayıfı keser; böylece çekirdekler çekirdeklere bağlanır ve bir kaplama daha güçlü katmanda durur. Her katmanın 0 ile 999 arasında bir önceliği vardır; varsayılan olarak katmanın işlevinden gelir (yapı 800, taban 600, yalıtım 400, membran 300, kaplama 200, boşluk 100). {{ui:Katman önceliği}} duvar kesitini açar; orada **Öncelik** sütunu bir katmanın kendi sayısını belirler. Eşit öncelikli katmanlar birbirinin önünde durur ve bir çizgi yalnızca farklı malzemeler arasında çizilir. Bunu **Orta** ya da **İnce** ayrıntı düzeyindeki planlarda görürsünüz; köşelerde, T birleşimlerinde ve iki düz duvarın kesişiminde. Ayarlar › BimCraft › Duvarlar › **Duvar birleştiğinde duvar katmanlarını temizle** bunu kapatır. Yalnızca duvarların içinde çizilenleri değiştirir: duvarların dış çizgileri ve miktarları birleşim stilinin verdiği gibi kalır.

## Birçok duvarın tipini değiştirin

Taslak planlardan çalışma çizimlerine geçmek çoğunlukla bir tip değişikliğidir: genel bir duvar, belirli yapısı olan bir duvara dönüşür. Hiçbir şeyi yeniden çizmezsiniz.

1. Duvarları seçin (biri ya da {{key:Ctrl}} ya da {{key:Shift}} ile birçok).
2. Özellikler'de, Duvar tipi altındaki **Tip değiştir…** düğmesine basın (ya da {{ui:Duvarlar}} öğesini Düzenleme grubunda açıp {{ui:Tip değiştir}} seçin; bu aynı listeyi açar). Liste, seçilen duvarların kendi bloğunun içinde, Özellikler içinde açılır. Bir iletişim kutusu değildir ve hiçbir şeyi kapatmaz: liste açıkken plan, 3B görünüm ve seçim çalışmaya devam eder ve seçtiğiniz duvarları izler.
3. Liste her duvar tipini kalınlığı ve LOD etiketiyle gösterir, örneğin "Genel duvar 230, LOD 200" ve "230 kil tuğla, iki yüzü sıvalı, LOD 300". Seçilen duvarların şu an sahip olduğu tipler işaretlenir. Bulmak için **Bul** kutusuna yazın: bir ad, bir kalınlık ya da `lod 300`.
4. Bir tipe tıklayın. Seçilen her duvar tek adımda ona değişir, bu yüzden tek bir {{ui:Geri al}} tüm değişimi geri alır. Küçük x listeyi kapatır.

Her duvar konum çizgisini korur. Merkez çizgisinde olan bir duvar iki yana doğru büyür; konum çizgisi bir yüz olan bir duvar o yüzü tutar ve diğer yöne doğru büyür, ona birleşen duvarlar da köşelerde izler. Değiştirilen bir duvara kilitli duvarlar da onu izler. Kapılar ve pencereler duvarlarında kalır ve yeni kalınlık için yeniden kesilir.

Değişimden sonra liste **Neler taşındı** bölümünü gösterir: kaç duvarın ve neye değiştiği, değişimden önceki ve sonraki kalınlık ve LOD, konum çizgisini korumak için yana taşınan duvarlar, izleyen birleşik duvarlar, yeniden barındırılan kapılar ve pencereler ve alanı değişen her oda, öncesi ve sonrası alanıyla. Durum çubuğu aynısını tek satırda söyler. Rapor yalnızca bildirir; bir değişimi asla durdurmaz. **Özellikler › Duvar tipi** içinde bir tip seçmek de aynı değişimi yapar ve aynı raporu verir.

İki şey değişimi durdurur ve o zaman hiçbir şey değişmez: yeni duvara artık sığmayacak bir kapı ya da pencere (bir duvar, bir köşeyi izlerken kısalır; önce kapıyı daraltın ya da köşeden uzaklaştırın) ve değişimin bozacağı bir kilit (konum çizgisi bir yüz iken merkez çizgisiyle bir aks çizgisine kilitli bir duvar; kilidi açın ya da konum çizgisini merkez çizgisine geri koyun).

BimCraft'a bağlı bir asistan aynı değişimi yapabilir (`wall_types_list` ve `walls_swap_type` araçlarıyla) ve aynı raporu geri alır.

Bir tipin LOD etiketi duvar kesiti düzenleyicisinde ayarlanır: bkz. [Duvar kesitleri](topic:wall-assemblies).

## Uzaklık ve kutu esnetme

- **Uzaklık**: bir duvara tıklayın, sonra ona taşınacağı tarafa tıklayın ya da mesafeyi yazın. Duvar kendisine dik taşınır ve ona birleşen duvarlar uzar. Orijinalden bağımsız paralel bir kopya için **Kopyala**'yı işaretleyin (orijinale birleşmez).
- **Kutu esnetme**: bir kutunun iki köşesine tıklayın, sonra taşınacak bir noktaya ve taşınacağı yere bir nokta. Kutunun içindeki her duvar ucu taşınır; tamamen içindeki bir duvar taşınır ve ona dayanan duvarlar da gelir; kutuyu kesen duvarlar esner.

## Bir ölçülendirmeyi düzenleyin ve kilitleyin

Bir referans ölçülendirmesi seçin (Açıklama ekle › {{ui:Referans ölçülendirme}}) ve değerini **Özellikler**'de yazın: ikinci referansının duvarı kendisine dik taşınır, birinci referans yerinde durur ve birleşik duvarlar izler. Değeri korumak için **Bu ölçülendirmeyi kilitle**'yi işaretleyin: sonra iki duvardan biri taşındığında diğeri izler. Kilitli bir değer, işaretini kaldırana kadar üzerine yazılamaz.

## Hizalayın ve kilitleyin

**Hizala ve kilitle**: bir duvar yüzüne (ya da merkez çizgisine, duvarın ortası yakınında) ya da bir aks çizgisine tıklayın, sonra o çizgiye getirilecek duvarın yüzüne. Duvar ona dik taşınır. Hizalı tutmak için önce **Kilit**'i işaretleyin: planda bir asma kilit görünür ve bir duvar taşındığında diğeri izler. Bir duvarın **Özellikler**'i **Kilitleri** listeler, her biri **Kilidi aç** ile.

## Duvarları aks çizgilerine kilitleyin

Bir aks çizgisi boyunca uzanan ya da ucu üzerinde duran bir duvar seçin ve **Özellikler**'de **Aks çizgisine kilitle**'yi seçin. Sonra {{ui:Aks}} aracıyla aks çizgisini seçin ve **Şu kadar taşı**'da bir mesafe yazın: çizgi kendisine dik taşınır ve ona kilitli duvarlar, birleşik duvarlarıyla birlikte, tek adımda izler. Aks çizgisine kilitli bir duvar, kendi başına oradan çıkarılamaz (çizgiyi taşıyın ya da duvarın kilidini açın); kilitli bir duvarın üzerinde dik kalamayacağı şekilde döndürülen bir aks çizgisi reddedilir. Aks çizgisini yeniden adlandırmak kilidi korur; silmek kilidi kaldırır.

## Uzunluk: hangi taraf tutulur ve ne ölçer

- **Buradan büyüt** (tek bir duvarın Özellikleri): **Başlangıç tutulur** (son hareket eder), **Son tutulur** (başlangıç hareket eder) ya da **Merkez tutulur** (her iki uç yarısı kadar hareket eder). Uzunluğu yazarken plan, tutulan noktayı işaretler. Hareket eden uca bağlı duvar, kendisine dik taşınır ve açısını korur.
- **Buradan ölç** (planda Ölçülendirmelerin yanında, Özellikler'de ve Ayarlar › BimCraft › Duvarlar'da): merkez çizgisi, iç yüz ya da dış yüz. Uzunluk alanı ve planın duvar ölçülendirmeleri aynı birimi okur, böylece uyuşurlar. Merkez çizgisinde başlar.
- Bir duvarı birleşimlerinden bağımsız taşımak için (birleşimler kopar, duvar kimliğini korur), ortadaki tutamacı sürüklerken {{key:Alt}} tuşunu basılı tutun.

## İyi bilinmesi gerekenler

- Bu tarifler duvar aracı belirtiminin (4 ila 9. sayfalar) tarifleridir. Birleşim stili ve katman önceliği düz duvarlar için yapılmıştır; katman önceliği yalnızca planda gösterilir (kesitlerde, görünüşlerde ya da 3B'de değil; orada duvar tek bir gövdedir), üç ya da daha fazla duvarın düğümlerinde değil ve membranlar taşınmaz.
- Bir birleşimin stili IFC dosyasında kaydının içinde saklanır (`IfcRelConnectsPathElements` adı, örneğin `CadCraft join L butt 1`); böylece diğer programlar birleşimi yine okur ve eski bir dosya gönye ile açılır.
- Kilitler ve birleşimler IFC dosyasında saklanır (kilitler projede `CadCraft_WallHolds` olarak, birleşimler `IfcRelConnectsPathElements` olarak), böylece dosyayı yeniden açtığınızda da oradadırlar.
- Eğri duvarlar bölünebilir, yeniden birleştirilebilir ve bir parçası çıkarılabilir; uzaklık alınamaz ya da kilitlenemezler.
- Ayrıca bakın: [Duvar çizin](topic:draw-walls), [Bir duvarı, kapıyı veya pencereyi değiştirin](topic:change-a-wall-or-door) ve [Duvarı şekillendirin](topic:wall-shape).
