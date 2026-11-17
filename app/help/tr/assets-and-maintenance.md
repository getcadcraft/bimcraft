---
title: Varlık verilerini ve bakım kaydını modelde tutun
summary: Teslim edilen IFC modelini binayı işletmek için kullanın: ekipman ve donanımlar için üretici, model, seri numarası, garanti ve servis ömrü ile yapılan bakımın kaydı; hepsi IFC'nin içine yazılır.
keywords: teslim, iskan belgesi, tamamlanma belgesi, as-built, teslim paketi, varlıklar, varlık kaydı, tesis yönetimi, fm, işletme, bakım, servis, garanti, seri numarası, barkod, üretici, marka, model, servis ömrü, teslim, cobie, dijital ikiz, gecikmiş, vadesi gelen, iş emri
from: b84ac492
---

Sağ paneldeki {{ui:Varlıklar}} sekmesi, açık IFC modelini binanın ekipman kaydına dönüştürür. Her şey IFC'nin kendi özellik kümelerine ve görevlerine yazılır; böylece dosyayı açan bir sonraki program da onu okur. Hiçbir şey yüklenmez, sunucu gerekmez: saklamak için IFC'yi kaydedin.

## Listede neler var

- Ekipman ve donanımlar: mobilya, sıhhi tesisat armatürleri, aydınlatma armatürleri, cihazlar, hava terminalleri, vanalar, pompalar, fanlar, kazanlar, tanklar, prizler, pano, asansörler ve benzeri öğeler ile ekipman verisi olan kütüphane öğeleri.
- **Takip** ettiğiniz diğer her öğe: modelde seçin (bir kapı, bir duvar, düz bir nesne olarak çizilmiş bir pompa) ve {{ui:Seçileni izle}} öğesine tıklayın.
- Burada ya da başka bir program tarafından yazılmış, zaten varlık verisi ya da bakım görevi olan her şey.

Önce gecikmiş olanlar, sonra 30 gün içinde vadesi gelenler listelenir. Ada, etikete, üreticiye, modele ya da seri numarasına göre, kata göre süzün ya da {{ui:Yalnızca gecikmiş veya 30 gün içinde olanlar}} kutusunu işaretleyin.

## Varlık verisi

Listedeki bir varlığa tıklayın (ya da modelde seçin); verisi açılır: üretici, model, model referansı, seri numarası, barkod, kurulduğu gün, garanti numarası ile başlangıç ve bitişi ve yıl cinsinden servis ömrü. {{ui:Verileri kaydet}} bunları tek adımda yazar ({{key:Mod+Z}} geri alır). Bir değeri kaldırmak için kutuyu boş bırakın.

## Belgeler

Verinin altında, {{ui:Belgeler}} varlığa bağlı kılavuzları, garantileri, fotoğrafları, belgeleri ve çizimleri listeler. Türünü seçin, bir başlık verin (ya da boş bırakın: dosya adı kullanılır) ve nerede olduğunu yazın:

- bir **web adresi** (`https://…`): bir Aç bağlantısı alır ve yeni sekmede açılır;
- ya da bir **dosya adı ya da yol** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, bir ağ paylaşımı): dosyaları IFC'nin yanında tutun, aynı klasörde ya da onun altındaki bir klasörde; böylece klasörü teslim ettiğinizde adlar yine çalışır. BimCraft adı gösterir; dosyayı klasörden açın.

Dosyaların kendisi asla yüklenmez ya da IFC'ye kopyalanmaz: yalnızca bağlantı yazılır. İçinde parola bulunan bir web adresi ile web adresi ya da dosya olmayan herhangi bir bağlantı (`javascript:` gibi) reddedilir. {{ui:Kaldır}} bir belgeyi varlıktan çıkarır (tek adım; {{key:Mod+Z}} geri alır).

Başka bir programın öğeye koyduğu belgeler de listelenir. Öğenin **tipindeki** belgeler, o tipteki her öğede görünür ve bunu belirtir; bunları tipin oluşturulduğu yerde değiştirin.

IFC'de her belge, öğeye bağlı bir IFC belge başvurusudur; türü bu bağda tutulur. IFC4 ve IFC2X3'te aynıdır.

## Bakım kaydı

Belgelerin altında, {{ui:Yapılan işi kaydet}}: işin yapıldığı gün, iş, işi yapan kişi, bir sonraki vade tarihi ve notlar. Her kayıt bir adımdır; {{ui:Düzenle}} ve {{ui:Sil}} onu sonradan değiştirir. En yeni kaydın bir sonraki vade tarihi, varlığın gecikmiş mi yoksa yakında mı vadesi geldiğini belirler.

## IFC'de nasıl tutulur

- Üretici ve model `Pset_ManufacturerTypeInformation` içinde; seri numarası, barkod ve kurulduğu gün `Pset_ManufacturerOccurrence` içinde; garanti `Pset_Warranty` içinde; servis ömrü `Pset_ServiceLife` içinde, öğenin kendisinde. Öğenin tipi zaten bir üretici ya da model taşıyorsa, siz kendi değerinizi yazana kadar o görünür.
- Her bakım kaydı, öğeye bağlı, bakım türünde bir IFC **görevi**dir; tarihleri (IFC4'te görevin kendi zamanları olarak da) ve gün, yapan kişi ile bir sonraki vade gününü içeren bir `CadCraft_Maintenance` kümesi ile birlikte.
- Başka bir öğenin paylaştığı değerler önce kopyalanır: bir varlığı değiştirmek komşularını asla değiştirmez.
- Eski IFC2X3 dosyalarında tarihler metin olarak yazılır (YYYY-MM-DD); bu sürüm burada ayrı bir tarih kaydı ister ve BimCraft bunu yazmaz.

## Sensör okumaları

Bir bina yönetim sisteminden, veri kaydedicisinden ya da bir elektronik tablodan dışa aktarılan okumaları getirmek için {{ui:Sensör değerleri}} ve {{ui:Okumaları aç (CSV)…}} öğelerini açın:

- **İlk sütun zamandır**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ya da Unix saniyesi. Saat dilimi olmayan bir zaman, bilgisayarınızın kendi saat diliminde okunur. `23/10/2026` gibi gün önce tarihler okunmaz (belirsizdirler); ISO tarihleri dışa aktarın.
- **Diğer her sütun bir sensördür**; başlığı varlığın **etiketi**, **adı** ya da **GlobalId**'si olur. Hiçbir varlıkla ya da birden fazla varlıkla eşleşmeyen bir başlık listelenir ve dışarıda bırakılır. Sütunları virgül, noktalı virgül ya da sekme ayırır; noktalı virgül ya da sekme ile kullanıldığında ondalık virgül (`21,5`) da okunur.
- Okunamayan zamanlar ya da değerler (bir kelime, hücreye yazılmış bir birim) sayılır ve dışarıda bırakılır; asla tahmin edilmez.

En son okuma, listenin {{ui:Okuma}} sütununda ve varlığın {{ui:Sensör}} bloğunda, her okumanın bir **grafiği** ile birlikte görünür (telefonda grafikler {{ui:Grafiği göster}} öğesine dokunana kadar bekler). Bir varlığa bir **alt ve üst sınır** ve bir birim ayarlayıp {{ui:Sınırları kaydet}} öğesine tıklayın: bu sınırların dışındaki bir okuma varlığı işaretler. Her varlığı okumasına göre boyamak için {{ui:Modelde göster}} kutusunu işaretleyin — alt sınırının altında mavi, sınırları içinde yeşil, üst sınırının üstünde kırmızı; sınırı olmayan varlıklar için en düşükten en yükseğe tek bir mavi ölçek — okumasını bir etiket olarak göstererek (en fazla 60 etiket, işaretlenenler önce).

**Okumalar bu tarayıcı sekmesinde kalır**: IFC'ye kaydedilmez ve hiçbir yere gönderilmez; bir dahaki sefere CSV'yi yeniden açın. **Sınırlar IFC'ye kaydedilir** (öğede bir `CadCraft_Sensor` kümesi: Low, High, Unit); böylece dosyayı açan bir sonraki kişi aynı işaretleri görür.

## Canlı okumalar

{{ui:Canlı akış}} değerleri oldukları anda okur, **doğrudan bu tarayıcıdan kendi sisteminize**. Hiçbir şey sunucumuzdan geçmez ve tarayıcı sekmenizden başka hiçbir yerde saklanmaz. Dosya açıldığında hiçbir şey bağlanmaz: yalnızca {{ui:Bağlan}} bağlanır.

- **WebSocket üzerinden MQTT**: aracınızın WebSocket dinleyicisinin adresi (`wss://broker.example.com:8884/mqtt`) ve varlığın etiketinin yazılacağı yere `{tag}` konulmuş bir ya da daha fazla konu, örneğin `site/{tag}/temperature` (BimCraft `site/+/temperature` konusuna abone olur ve etiketi her iletinin konusundan okur). `{tag}` içermeyen konular sensörün kendisini adlandırır. Bir ileti ya düz bir sayıdır (`21.5`) ya da `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` gibi bir JSON'dur ({{ui:JSON'daki değer alanı}} sizinki farklı bir adla çağrılıyorsa bunu ayarlayın).
- **Bir adrese sor (HTTP)**: bina yönetim sisteminizin ya da küçük bir betiğinizin yanıt verdiği bir web adresi; her birkaç saniyede bir sorulur (en az 5). Etikete göre anahtarlanmış bir JSON (`{"AHU-1": 21.5}`), bir JSON listesi (`[{"tag": "AHU-1", "value": 21.5}]`) ya da yukarıdaki gibi bir okuma CSV'si ile yanıt verebilir. Yanıt vermezse BimCraft, yeniden sormadan önce iki kat bekler; en fazla beş dakikaya kadar.

Her okuma, adını verdiği etiket, ad ya da GlobalId'ye sahip varlığa gider; tıpkı bir CSV sütunu gibi. Hiçbir varlıkla eşleşmeyen adlar listelenir. Okumalar {{ui:Sensör değerleri}} ile birleşir: liste, grafikler, sınırlar ve modeldeki renkler aynı şekilde çalışır.

**Parolanız ya da belirteciniz** tek bir bağlantı için yazılır: bağlantıya verilir ve kutu boşaltılır; bu tarayıcıda ya da IFC'de asla kaydedilmez. Belirteç standart bir `Authorization: Bearer` başlığı olarak gönderilir; hiçbir çerez gönderilmez.

{{ui:Bu ayarları IFC'de sakla}} adresi, konuları, değer alanını ve ne sıklıkta sorulacağını modele yazar (projede bir `CadCraft_Feed` kümesi; parola için bir alan yoktur); böylece dosyayı açan bir sonraki kişi yalnızca kendi girişini yazar ve {{ui:Bağlan}} öğesine tıklar. Adresin kendisine bir parola ya da anahtar koymayın: içinde kullanıcı adı ve parola bulunan bir adres reddedilir.

:::note
**Aracınızın ya da adresinizin ihtiyaçları.** Bir tarayıcı sayfası yalnızca buna izin veren bir sunucuyla konuşabilir:
- Sayfa güvenlidir (https), bu yüzden tarayıcı yalnızca `wss://` ve `https://` adreslerine bağlanır — kendi bilgisayarınız (`localhost`) hariç; orada `ws://` ve `http://` test için çalışır.
- Bir HTTP adresi bu sayfadan gelen isteklere izin vermelidir (CORS: `Access-Control-Allow-Origin` başlığı ve bir belirteç kullanıyorsanız izin verilen başlıklar arasında `Authorization`).
- Çoğu aracı (Mosquitto, EMQX, HiveMQ ve diğerleri) bir WebSocket dinleyicisi sunar; açılana kadar çoğu zaman kapalıdır. BimCraft MQTT 3.1.1 kullanır.
:::

BimCraft kapalıyken **uyarı yoktur**: sınırlar, model açıkken ve bir akış bağlıyken bir varlığı işaretler. Bir binayı günün her saatinde izlemek, BimCraft'ın çalıştırmadığı bir sunucu gerektirir.

## COBie tablosu

**COBie**, birçok işveren ve tesis ekibinin istediği teslim tablosudur (ABD'de National BIM Standard tarafından yayımlanmıştır; Birleşik Krallık'ta BS 1192-4). Sekmede {{ui:COBie tablosu}} öğesini açın:

- {{ui:COBie olarak kaydet (.xlsx)}} COBie 2.4 sayfalarını — Contact, Facility, Floor, Space, Type, Component, System, Job, Document ve Attribute — modelden ve varlık verisinden yazar: binayı, katlarını ve odalarını (alanlar modelin miktarlarından), her varlığı bir bileşen olarak seri numarası, kurulduğu gün, garanti başlangıcı, etiket ve barkodu ile, tipini üretici, model, servis ömrü ve garanti süresiyle, ait olduğu sistemleri, bakım kaydını işler olarak ve bağlı belgeleri yazar. Her bileşen öğenin IFC GlobalId'sini taşır. COBie'nin "oluşturan" sütunu için e-posta adresinizi yazın ya da boş bırakın (o zaman n/a yazar). Modelde olmayan değerler **n/a** yazar; kategori sütunları IFC sınıfını taşır, OmniClass kodunu değil.
- {{ui:COBie tablosu oku…}} bir tabloyu, BimCraft'tan ya da başka bir programdan, geri okur ve **önce her değişikliği listeler**: hangi varlık, hangi değer, neyden neye ve yeni belgeler. {{ui:Uygula}} hepsini tek adımda yazar ({{key:Mod+Z}} geri alır). Satırlar önce GlobalId'ye, sonra bileşenin adına göre eşleştirilir. Modelde hiçbir şeyle eşleşmeyen satırlar listelenir, eklenmez.

Bir elektronik tablo güvenilmez kabul edilir: formüller asla okunmaz ya da çalıştırılmaz (yalnızca hücrede son kaydedilen değer); bir garantinin başlamadan bitmesine yol açacak bir değer ile bir web adresi ya da dosya adı olmayan bir belge bağlantısı dışarıda bırakılır ve sayılır; çok büyük çalışma kitapları reddedilir. COBie'nin işleri bir tipin planlanmış işleridir; yazılırlar ama geri okunmazlar. BimCraft'ın yazdığı elektronik tabloda, bir elektronik tablonun formül sanabileceği metin (`=`, `+`, `-` ya da `@` ile başlayan) metin olarak işaretlenir.

Çalışma kitabı testlerimizde bağımsız bir elektronik tablo okuyucuya karşı denetlenir; bir COBie doğrulayıcısından geçmemiştir. Teslim alan bir ekip bunu çalıştırırsa, ne dediğini bize bildirin.

## Teslim belgeleri

Bitmiş binayla birlikte işverene giden belgeler tek bir varlığa değil, projeye aittir. {{ui:Varlıklar}} sekmesinde {{ui:Teslim belgeleri}} öğesini açın:

1. {{ui:Belge ekle}}, türünü seçin (tamamlanma belgesi, iskan belgesi, garanti, kılavuz, as-built çizimler, diğer) ve başlığını, düzenlenme tarihini, düzenleyeni ve referans numarasını yazın.
2. Nerede olduğunu belirtin: bir web adresi, IFC'nin yanında tutulan bir dosya adı ya da {{ui:Dosya ekleyin}}.
3. {{ui:Listeye ekle}}. {{ui:Düzenle}} ve {{ui:Kaldır}} listeyi değiştirir; her biri geri alınabilen tek bir adımdır.

{{ui:Teslim paketini oluştur}} tek bir zip indirir: her belgeyi listeleyen bir kapak sayfası, bir elektronik tablodaki aynı liste, COBie çalışma kitabı (belgeler onun Document sayfasında, Facility hakkında satırlar olarak yer alır), model ve eklenen her dosya. Listede henüz olmayan bir tamamlanma ya da iskan belgesi kapakta adıyla anılır; paket yine de oluşturulur.

Paketteki model **as-built modeldir**: hangi öğelerin sahada ölçüldüğünü belirtir. Onunla birlikte `as-built` klasöründe: beyan, her öğenin doğrulama durumuyla birlikte bir liste, çizim takımının şu anki hali tek bir PDF olarak (as-built çizimler) ve model çizim takımları yayımlamışsa çizim değişiklik günlüğü. Bkz. [Öğeleri kontrol edildi ya da sahada doğrulandı olarak işaretleyin](topic:verification).

- IFC dosyasında her belge, projeye bağlı bir IfcDocumentInformation'dır (IfcRelAssociatesDocument); başlığı, referansı, tarihi, düzenleyeni ve yeri ile birlikte, böylece diğer programlar onu listeler.
- Eklenen bir dosya adı, boyutu ve SHA-256 ile kaydedilir. Dosyanın kendisini projeyle birlikte saklamak için {{ui:Projeyi paket olarak kaydet}} kullanın (bir .ccbundle modeli ve eklenen dosyaları tutar; açıldığında bunları geri verir, her biri kaydıyla karşılaştırılarak denetlenir). Sıradan bir kayıt hangisini istediğinizi sorar.
- Düz bir .ifc kaydı tutar, dosyayı değil: açtıktan sonra {{ui:Dosyayı yeniden ekleyin}} öğesini kullanın. Aynı dosya tanınır; farklı bir dosya kaydın yerini alır.

## CSV

{{ui:CSV}} her varlığı verisiyle, her bakım kaydını ve her belgeyi, her biri bir satır olacak şekilde, bir elektronik tablo ya da başka bir bakım programı için kaydeder.

:::note
Henüz yapılmadı: BimCraft kapalıyken okumaları tutan ve uyarı gönderen barındırılan bir hizmet ile COBie işlerinin geri okunması. Bkz. [Henüz yapılmadı](topic:not-built-yet).
:::
