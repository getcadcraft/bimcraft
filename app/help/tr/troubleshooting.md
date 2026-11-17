---
title: Sorun giderme
summary: BimCraft'ın gösterdiği iletiler, bunların nedenleri ve ne yapılacağı; dosyaları, klasörleri, 3B modelleri, çizimleri ve düzenlemeleri açarken.
keywords: sorun, hata, çalışmıyor, açılamadı, başarısız, eksik, bozuk, yavaş, çöktü, boş, kayıp, ileti, yardım
from: 1e5a79fc
---

İletiler, sahnenin altındaki durum satırında görünür; bir şey başarısız olduğunda kırmızı renkte. Aşağıda iletiyi bulun.

## Dosyaları açma

**"*name* bir IFC, RVT, RFA, DWG ya da DXF dosyası değil."**
BimCraft dosyayı tanımadı. Uzantıyı ve dosyanın boş olmadığını kontrol edin. PDF'ler, görüntüler ve ofis dosyaları açılmaz.

**".ifczip henüz desteklenmiyor. Modeli düz bir .ifc dosyası olarak kaydedin ya da dışa aktarın."** (`.ifcxml` için de geçerli)
`.ifczip` dosyasını açın (sıradan bir zip dosyasıdır ve içinde bir `.ifc` bulunur) ya da düz IFC olarak dışa aktarın.

**"… BimCraft'ın henüz okumadığı bir proje dosyası."**
Bir `.pln`, `.pla`, `.tpl` ya da `.bpn` dosyası. Ondan IFC ya da DWG dışa aktarın ve onu açın: bkz. [.pln ve .pla proje dosyalarını açma](topic:pln-project-files).

**"Bu IFC dosyası okunamadı."**
IFC dosyası bozuk ya da gerçekten IFC değil. Bir metin düzenleyicisinde açın: gerçek bir IFC dosyası `ISO-10303-21;` ile başlar. Yeniden dışa aktarın.

**"Bu dosya eksik: … MB, ama kendi dizini en az … MB içindeki verilere işaret ediyor. …"**
Proje ya da aile dosyası kopyalanırken, yüklenirken ya da eşitlenirken kesilmiş. "Yalnızca çevrimiçi" olan bir bulut sürücüsü dosyası da aynı görünür. Tek başına açılan bir dosya yine açılır; kartın üstünde bu iletiyle birlikte "Kurtarılanlar gösteriliyor; tam model için orijinali yeniden kopyalayın." yazar. Kart yalnızca her baytı dosyada olan parçaları gösterir ve geri kalanını **Dosyada yok** altında listeler. Bulut sürücünüzde dosyayı çevrimdışı kullanılabilir yapın ya da orijinali yeniden kopyalayıp yeniden açın. Bir klasörde BimCraft bunun yerine en yeni tam yedeği gösterir.

**"… Dosyanın kendi içerik listesi de eksik kısımda, bu yüzden içindeki hiçbir şey açılamaz."**
Dosya, içerik listesinin bile olmayacağı kadar erken kesilmiş. Bu kopyadan hiçbir şey kurtarılamaz. Orijinali yeniden kopyalayın ve yeniden açın.

**"Bu bileşik dosyada BasicFileInfo akışı yok, bu yüzden bir Revit dosyası değil."**
Dosya başka türde bir bileşik dosya (eski ofis belgeleri aynı kapsayıcıyı kullanır). Doğru dosyayı seçtiğinizi kontrol edin.

**"Son dosyayla hâlâ uğraşıyor…"**
BimCraft hâlâ önceki dosya ya da klasörle meşgul. Durum satırı bitene kadar bekleyin, sonra yeniden deneyin.

**Dosya seçici dosyamı gri gösteriyor.**
Seçici yalnızca `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` ve `.dxf` sunar. Bunun yerine diğer dosyaları sayfaya sürükleyin; BimCraft bunları okuyup okuyamayacağını size söyler.

## Klasörleri açma

**"Bu klasörde 20,000'den fazla dosya var. Daha küçük bir klasör seçin, örneğin tek bir proje."**
Çok üst düzeyde bir klasör seçtiniz, örneğin tüm bir sürücü. Tek bir proje klasörü seçin.

**"Tarayıcı *name* için erişim vermedi. Klasörü Klasör aç ile yeniden seçin."**
Son kullanılanlardan bir klasöre {{ui:Yeniden aç}} tıkladınız ve tarayıcının izni reddedildi ya da süresi doldu. Klasörü yeniden seçin ya da sürükleyin.

**Tarayıcı dosyaları "yükleyeceğini" söylüyor.**
Bu, tarayıcının dosyaları bir sayfaya teslim etmesi için kullandığı kendi ifadesidir. BimCraft bunları hiçbir yere göndermez. Soruyu önlemek için klasörü sürükleyin.

**Telefonda ya da tablette hiçbir şey olmuyor.**
Birçok mobil tarayıcı klasör seçemez. Tek dosyaları açın ya da bir bilgisayar kullanın.

## IFC motoru ilk kez yüklenir

**Durum satırı "IFC motoru başlatılıyor…" üzerinde kalıyor ya da "Failed to fetch" gibi bir hata gösteriyor.**
IFC motoru indirilemedi. Çevrimdışı olabilirsiniz ya da bir güvenlik duvarı ya da içerik engelleyici onu durduruyor olabilir.

:::offline
Çevrimdışısınız. Uygulama çubuğundaki düğme {{ui:Çevrimdışı hazır}} demiyorsa, IFC motoru bu tarayıcıda hiç kaydedilmemiştir. Yeniden bağlanın, dosyayı yeniden açın, sonra bir dahaki sefere çevrimdışı çalışması için {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın. Bkz. [Çevrimiçi ve çevrimdışı](topic:online-offline).
:::

:::online
Sayfayı yeniden yükleyip tekrar deneyin. Bir iş ağındaysanız, sitenin `.wasm` dosyalarına izin vermesi için BT ekibinize sorun.
:::

## Çevrimdışı kullanım için kaydetme

**Düğme {{ui:Kaydedilemedi}} diyor.**
Bazı dosyalar indirilemedi, genellikle bağlantı koptuğu için. Bağlantınızı kontrol edin ve düğmeye yeniden tıklayın. Yeni bir kopya tamamlanana kadar önceki çevrimdışı kopya tutulur.

**Düğme {{ui:Çevrimdışı kullanım yok}} diyor.**
Bu pencere çevrimdışı kopya tutamaz; örneğin gizli bir pencere ya da yönetilen bir iş bilgisayarı. Bkz. [Çevrimdışı çalışma](common:offline).

**Düğme bir süre "Kaydediliyor: *n* / *m*" üzerinde kalıyor.**
BimCraft'ın kopyası yaklaşık 11 MB, çoğu IFC motoru. {{ui:Çevrimdışı hazır}} yazana kadar sekmeyi açık tutun.

**BimCraft çevrimdışı açıldı ama eski görünüyor.**
Kayıtlı kopyanız önceki bir ziyaretten. Çevrimiçiyken {{ui:Çevrimdışı hazır}} düğmesine tıklayın ve {{ui:Yeniden kaydet (en yeni sürümü al)}} seçin.

## 3B görünüm

**Model beklediğim yerde değil ya da çok küçük.**
{{key:F}} tuşuna basın ya da {{ui:Sığdır}} düğmesine tıklayın. Sığdır her zaman modeldeki her şeyi kapsar; işaretini kaldırdığınız katlar ve binadan çok uzakta kalan dağınık öğeler de dahil, bu yüzden bina küçük görünebilir. Oradan yakınlaştırın.

**Tıklamak hiçbir şeyi seçmiyor.**
Tıklarken fareyi sabit tutun: küçük bir sürükleme döndürür. İşaretlemediğiniz katlardaki öğeler seçilemez. {{ui:Mekânlar}} açıkken, saydam mekânlar içlerindekilerden önce seçilir.

**{{ui:Kenarlar}} düğmesi soluk: "Çok büyük modellerde kenarlar kapalıdır".**
Model 1.5 million üçgenden fazla. Bellekten tasarruf için kenarlar kapalı bırakılır.

**Sekme yavaşlıyor, beyazlıyor ya da tarayıcının çökme sayfasını gösteriyor.**
Model, tarayıcının sekmeye verdiği bellek için çok büyük. Diğer sekmeleri kapatın ve yeniden yükleyin. Daha küçük bir IFC dışa aktarın: tek bir bina, tek bir disiplin ya da daha az kat. Bkz. [Tarayıcılar, cihazlar ve bellek](topic:platforms).

**3B görünüm boş kalıyor.**
WebGL kapalı ya da engellenmiş olabilir. Tarayıcının ayarlarında donanım hızlandırmayı (ya da grafik hızlandırmayı) açın ve tarayıcıyı yeniden başlatın.

## IFC düzenleme

**"Bir sayı kullanın."** Değer sayısaldır. `2.4` gibi birimsiz, düz bir sayı yazın.

**"Bir tam sayı kullanın."** Değer bir sayım ya da tam sayıdır. Ondalıkları kaldırın.

**"Yalnızca tekil değerli özellikler düzenlenebilir."** Listeler, numaralandırmalar ve miktarlar yalnızca okunabilir.

**{{key:Mod+S}} tarayıcının "Sayfayı kaydet" penceresini açar.**
Kaydedilmemiş değişiklik yok, bu yüzden BimCraft tuşu tarayıcıya bıraktı. Pencereyi kapatın.

**{{key:Mod+Z}} hiçbir şey yapmıyor.**
Yalnızca kaydedilmemiş değişiklikleriniz varken ve bir alana yazmıyorken çalışır. Kaydettikten sonra geri alınacak bir şey kalmaz.

**{{ui:Değişiklikler}} listesi, onları attıktan ve bir çizim ya da klasör açtıktan sonra hâlâ düzenlemeleri gösteriyor.**
"Bunlardan vazgeçilsin mi?" sorusuna Tamam ile cevap verip bir IFC modeli dışında bir şey açtığınızda, eski düzenlemeler bellekte tutulur ve {{ui:IFC olarak farklı kaydet}} yine onları kaydeder. Gerçekten yeniden başlamak için orijinal IFC'yi yeniden açın ya da sayfayı yeniden yükleyin.

**Düzenlemem seçtiğimden fazla öğeyi değiştirdi.**
"(tip)" olarak işaretlenmiş bir kümedeki bir özelliği değiştirdiniz. Tip özellikleri, o tipin her öğesine uygulanır. {{ui:Geri al}} düğmesine tıklayın. Bkz. [Bir tipin tüm öğeleri için tip özelliğini değiştirme](topic:type-vs-instance).

## Çizimler

**"*name* okunamadı. Hasarlı olabilir ya da okuyucunun henüz desteklemediği bir biçimde kaydedilmiş olabilir (…)."**
Çizimi, onu üreten programdan eski bir DWG (2018 ya da öncesi) ya da DXF olarak kaydedin ve yeniden deneyin.

**"Bu çizimde gösterilecek bir şey yok."** ya da **"*name* boş bir çizim: hiçbir çizgi, metin ya da blok içermiyor."**
Çizim boş ya da yalnızca BimCraft'ın henüz çizmediği şeyleri içeriyor (sağdaki **Henüz çizilmedi** bölümüne bakın).

**"Bu çizim çok büyük; yalnızca bir kısmı gösteriliyor."**
BimCraft yanıt verebilir kalmak için çizmeyi durdurdu. İhtiyacınız olmayan katmanları kapatın ya da gerekli sayfaları daha küçük bir çizimden açın.

**Bir sayfanın parçaları eksik.**
Bağlı çizimler eksik olabilir: sağda **Bağlı çizimler** bölümüne bakın. Bkz. [Bağlı çizimleri ve resimleri bulma](topic:dwg-linked-files). Katmanlar da kapalı olabilir: {{ui:Tümünü aç}} düğmesine tıklayın.

**Bir resim boş bir çerçeve olarak görünüyor.**
Dosyası bulunamadı ya da bir TIFF ("TIFF bir tarayıcıda gösterilemez"). {{ui:Resim ekle…}} ile bir PNG ya da JPEG kopyası ekleyin.

**Dokunmatik yüzeyimde kaydırma çizimi hareket ettirmek yerine yakınlaştırıyor.**
BimCraft'ta çizimler böyle çalışır. Kaydırmak için tıklayıp sürükleyin.

## Hâlâ takıldınız mı

[Henüz yapılmayanlar](topic:not-built-yet) bölümünü okuyun: aradığınız şey bu sürümde olmayabilir.
