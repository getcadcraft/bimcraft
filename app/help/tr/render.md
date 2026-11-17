---
title: Modelin bir resmini render edin
summary: 3B görünümün gün ışığı gibi bir resmini yapın: gökyüzü, sitenizin enlemindeki güneş, yumuşak gölgeler, cam pencereler; WebGPU ile grafik kartında ışın izlemeli, gökyüzü, kamera, ışık karıştırma, derecelendirme, sis ve bir render kuyruğuyla.
keywords: render, ön ayar, sahne ön ayarı, iç mekân, dış mekân, kesit görünümü, gece, tek tıkla, render etme, ışın izleme, küresel aydınlatma, yansımalar, kırılma, yüksek kalite, fotogerçekçi, gerçekçi, resim, görüntü, png, durağan, gökyüzü, güneş, gün ışığı, gölgeler, yumuşak gölgeler, ortam kapanması, cam, pencereler, metal, malzemeler, pozlama, parlaklık, bulutlu, alacakaranlık, stüdyo, sunum, görselleştirme, webgpu, gürültü giderme, fiziksel gökyüzü, hdri, ies, alan derinliği, panorama, beyaz dengesi, ışık karıştırma, render öğeleri, exr, 16 bit png, sis, kostik, render kuyruğu
from: beb74cc7
---

{{ui:Render}} araç çubuğundaki düğme, 3B görünümün gün ışığı gibi bir resmini yapar: bir gökyüzü, sitenin enleminin güneşi nereye koyuyorsa orada güneş, yumuşak gölgeler, köşeleri karartan tüm gökyüzünden gelen ışık ve cam ya da metal gibi görünebilen renkler. Model ve dosya değiştirilmez.

## Görünümü render edin

1. 3B görünümü resmin nasıl olmasını istiyorsanız öyle ayarlayın: döndürün ve yakınlaştırın, istemediğiniz katları ya da öğeleri gizleyin ve resim bir kesit göstermeliyse bir [kesit](topic:section-plane) ayarlayın.
2. Araç çubuğundaki {{ui:Render}} düğmesine tıklayın.
3. Basılı olan {{ui:Sahne}} istediğiniz değilse başka bir tane seçin (bkz. [Sahne ön ayarları](topic:render#scene-presets-a-good-picture-in-one-click)), {{ui:Boyut}} seçin, sonra iletişim kutusunda {{ui:Render}} düğmesine tıklayın.

   Resim render edildikçe dolar ve her geçişte daha pürüzsüz hale gelir. {{ui:Durdur}} (ya da {{key:Esc}}) erken bitirir ve o ana kadarki resmi tutar.

4. Bir PNG olarak indirmek için {{ui:Kaydet}}, başka bir biçim için {{ui:Farklı kaydet}} tıklayın (bkz. [Resmi kaydedin](topic:render#save-the-picture)). Model dosyasının adıyla adlandırılır.

:::tip
{{ui:Taslak}} ile {{ui:Görünümün boyutu}} seçerek kamerayı kontrol edin, sonra daha büyük bir boyutta {{ui:İyi}} ya da {{ui:En iyi}} ile son resmi render edin.
:::

## Sahne ön ayarları: tek tıkla iyi bir resim

İletişim kutusunun üstünde dört {{ui:Sahne}} düğmesi vardır. Her biri gökyüzünü, parlaklığı, zemini, kenar çizgilerini, kaliteyi ve güneşi tek tıkla ayarlar; böylece ilk resimden önce öğrenecek bir şey yoktur. Birine tıklayın, sonra {{ui:Render}}.

| Sahne | Ayarladığı | Kullanım amacı |
|---|---|---|
| {{ui:Dış mekân}} | Açık gökyüzü, modelin kendi güneşi, zemin açık | Dışarıdan bina |
| {{ui:İç mekân}} | Bulutlu gökyüzü (düzgün ışık, sert güneş lekeleri yok), yarım adım daha parlak | Bir odanın içinden görünüm |
| {{ui:Kesit görünümü}} | Beyaz stüdyo, zemin yok, hızlı render'da kenar çizgileri | Bir kesitle kesilmiş model |
| {{ui:Gece}} | Güneş batmış (kış ortasında sitenin yarım küresi için gece yarısı), bir adım daha parlak | Modeli aydınlatan lambalar. Lamba yoksa resim karanlık olur |

- {{ui:Bu görünüm için seç}} sizin yerinize seçer: kesit kesimi açıksa {{ui:Kesit görünümü}}, kamera modelin içindeyse {{ui:İç mekân}}, aksi halde {{ui:Dış mekân}}. İletişim kutusunu ilk açtığınızda kendiliğinden bu şekilde başlar.
- Her ayar altta kalır ve değiştirilebilir. Bir ayarı değiştirdiğinizde sahne seçili kalmaz, hiçbir düğme basılı görünmez ve düğmelerin altındaki satır ayarların sizin ayarlarınız olduğunu söyler. Değerlerini geri yüklemek için sahneye yeniden tıklayın.
- Bir sahne motoru, modu, boyutu, malzemeleri, kamerayı ya da lambaları değiştirmez.

:::note
Sahneler ModelCraft ve BimCraft'ta aynı değerleri verir. Bitmiş resmin nasıl göründüğü modelinize ve grafik kartınıza bağlıdır.
:::

## Resimde ne görünür

3B görünümde katı olarak görünen şey resimde de görünür: gizli ve geçirgen öğeler, gizli katlar ve gizli modeller dışarıda kalır; mekânlar yalnızca {{ui:Mekânlar}} açıkken gösterilir. Bir kesit düzlemi ya da kesit kutusu, görünümü kestiği gibi resmi de keser. Öğeler kendi renklerinde gösterilir: {{ui:Renk}} sekmesindeki özelliğe göre renklendirme kullanılmaz.

## Ayarlar

| Ayar | Ne yapar |
|---|---|
| {{ui:Boyut}} | Görünümün boyutu, görünümün iki katı, Full HD, 4K ya da kare |
| {{ui:Mod}} | {{ui:Hızlı}}, ya da {{ui:Yüksek kalite (ışın izleme)}} (aşağıda) ve onun {{ui:Süre sınırı}} |
| {{ui:Kalite}} | Ortalaması alınan geçiş (ya da yüksek kalitede örnek) sayısı: {{ui:Taslak}} 16, {{ui:İyi}} 64, {{ui:En iyi}} 256. Daha fazla geçiş daha pürüzsüz gölge ve kenarlar verir ama daha uzun sürer |
| {{ui:Gökyüzü}} | {{ui:Açık gökyüzü}}, {{ui:Bulutlu}}, {{ui:Alacakaranlık}} ya da {{ui:Beyaz stüdyo}} (düz beyaz bir arka plan) |
| {{ui:Güneş}} | Dosyanın sitesi için verdiği enlemde (IfcSite), 21 Haziran, 15:00, modelin gerçek kuzeyine göre döndürülmüş. Başka bir tarih ve saat için {{ui:Bu resim için başka bir tarih ve saat kullan}} kutusunu işaretleyin |
| {{ui:Parlaklık}} | Adımlarla (diyafram adımı) daha açık ya da daha koyu |
| {{ui:Modelin altındaki zemin}} | Modelin en alt noktasında, gölgeleri alan ve ufukta kaybolan bir zemin |
| {{ui:Kenarları çiz}} | Öğelerin kenarlarını resmin üzerine ince çizer |

Güneş ufkun altındaysa, seçilen saatte gece olur: gökyüzü kararır ve modelin lambaları onu aydınlatır.

## Lambalar

Modeldeki her aydınlatma armatürü resimde bir lambadır: bir IFC dosyasındaki armatürler (IfcLightFixture ya da ışık armatürü olarak türlendirilmiş bir öğe), kütüphaneden yerleştirdikleriniz dahil. Her biri armatürün hemen altından aşağı doğru parlar. Dosya bir armatürün wattını verirse parlaklığı ondan hesaplanır; aksi halde 800 lümen, sıcak beyazdır.

İletişim kutusu {{ui:Lambalar}} altında lambaları listeler: birini kapatmak için işaretini kaldırın ya da parlaklığını lümen olarak yazın. Bu değişiklikler IFC'ye kaydedilir (armatürün `CadCraft_Light` özellik kümesinde; bunları Özellikler'de de değiştirebilirsiniz) ve {{key:Ctrl+Z}} onları geri alır.

Dosya sitesinin nerede olduğunu söylemiyorsa güneş 40° kuzeye yerleştirilir ve iletişim kutusu bunu belirtir. Saat, sitenin boylamından hesaplanan yerel saattir; bu yüzden saatlerin farklı ayarlandığı yerlerde bir saat sapabilir.

Bu ayarlar bir sonraki resim için bu tarayıcıda tutulur. IFC dosyasına kaydedilmezler.

## Cam ve diğer malzemeler

{{ui:Malzemeler}} altında ekranda görünen her renk bir görünüme sahiptir: {{ui:Mat}}, {{ui:Saten}}, {{ui:Parlak}}, {{ui:Metal}}, {{ui:Cilalı metal}}, {{ui:Cam}} ya da {{ui:Buzlu cam}}. IFC dosyasının geçirgen yaptığı renkler (örneğin pencere camları) {{ui:Cam}} olarak başlar.

:::note
{{ui:Hızlı}} modunda cam ve metal modelin geri kalanını değil gökyüzünü yansıtır ve ışık cam içinden kırılmaz. Aşağıdaki {{ui:Yüksek kalite (ışın izleme)}} modu ikisini de yapar.
:::

## Yüksek kalite

Kameranın gördüğü gibi ışığı izleyen bir resim için {{ui:Mod}} › {{ui:Yüksek kalite (ışın izleme)}} seçin:

- ışık yüzeyler arasında sıçrar; pencereden ya da bir lambadan aydınlanan bir oda her yönden aydınlanır ve renkler komşularına sızar;
- cam gerçek camdır: ışık içinden kırılır ve cam modeli yansıtır;
- metal ve cilalı yüzeyler modelin geri kalanını yansıtır;
- ışık panelleri panel gibi, yumuşak gölgelerle aydınlatır.

{{ui:Hızlı}} modundan çok daha yavaştır: her geçişte her pikselin ışığı yeniden izlenir. Resim tanesiz başlar ve örnekler biriktikçe netleşir; bu yüzden küçük başlayın ({{ui:Görünümün boyutu}}, {{ui:Taslak}}) ve bir {{ui:Süre sınırı}} seçin: süre dolduğunda o ana kadarki resim tutulur. {{ui:Durdur}} de onu tutar. İlk geçiş, tarayıcı ışın izleyiciyi hazırlarken bekler.

WebGPU destekleyen tarayıcılarda ışın izleyici CadCraft'ın kendi izleyicisidir ve grafik kartında çalışır; resmin altındaki satır bunu söyler. {{ui:Durdur}} ya da süre sınırından sonra {{ui:Sürdür}} aynı resimle tüm örneklerini alana kadar devam eder; bir ayarı değiştirmek ya da {{ui:Render}} düğmesine yeniden basmak sıfırdan başlatır. WebGPU olmayan bir tarayıcıda resim bunun yerine WebGL ile ışın izlenir (satır bunu söyler) ve {{ui:Sürdür}} sunulmaz.

:::linux
Linux'taki Firefox ve çoğu Chrome kurulumunda henüz WebGPU yoktur, bu yüzden yüksek kalite orada WebGL kullanır.
:::

Bu modda kenarlar çizilmez, dokular rengini ve pürüzlülüğünü gösterir ama kabartmalarını göstermez ve resim başlamadan önce modele bir kesit uygulanır.

{{ui:Gürültü giderme (örnekler sonrası kalan tanecikliği temizler)}} varsayılan olarak açıktır: resim bittiğinde ya da durdurulduğunda kalan tanecikler, bunun için yapılmış bir sinir ağıyla temizlenir (Intel Open Image Denoise'ın yayımlanmış ağı, kendi bilgisayarınızda çalışır: grafik kartında, yoksa işlemcide). {{ui:Göster}} › {{ui:Gürültü giderilmeden önceki resim}} resmi render edildiği gibi gösterir.

## Grafik kartında gökyüzü ve ışık profilleri

WebGPU ile yüksek kalitede iki gökyüzü daha vardır:

- {{ui:Fiziksel gökyüzü}} gün ışığını güneşin yüksekliğinden hesaplar: tepede koyu mavi, ufukta soluk bir bant ve alçaldıkça daha sıcak ve daha loş olan bir güneş. {{ui:Puslanma}} çok açık bir günden (2) puslu bir güne (10) kadar gider.
- {{ui:Gökyüzü resmi (HDRI)}} modeli gerçek bir yerin panoramik bir resmiyle aydınlatır. {{ui:Bir resim seçin…}} eşdikdörtgen (equirectangular) bir `.hdr` ya da `.exr` dosyası alır; {{ui:Döndür}} onu modelin etrafında döndürür ve {{ui:Resim parlaklığı}} onu daha açık ya da koyu yapar. Resim kendi güneşini taşır, bu yüzden modelin güneşi eklenmez. Yalnızca sayfa açıkken tutulur: yeniden açtıktan sonra yeniden seçin.

{{ui:Lambalar}} listesindeki her lamba bir üreticinin ışık profilini alabilir: {{ui:IES profili…}} bir IES (LM-63) dosyasını okur ve lamba ışığını o armatürün yaptığı gibi saçar (dar bir aşağı ışık, bir duvar yıkayıcı). Bu adı taşıyan her lamba onu kullanır; lamba kendi parlaklığını korur. Profilin adına tıklayarak kullanımını durdurun.

Berrak camlı pencereler, gökyüzü ışığının bir odaya girmesine yardımcı olur.

{{ui:Hızlı}} modu ve WebGL ışın izleyici, {{ui:Fiziksel gökyüzü}} ve {{ui:Gökyüzü resmi (HDRI)}} seçeneklerini açık bir gökyüzü olarak gösterir ve ışık profillerini yok sayar.

## Kamera

{{ui:Kamera}} resmi bir fotoğraf gibi ayarlar:

- {{ui:Pozlama}}: {{ui:Parlaklık kaydırıcısı}}nı tutun ya da {{ui:Kamera ayarları}}nı seçip {{ui:Diyafram (f-stop)}}, {{ui:Deklanşör hızı}} ve {{ui:ISO}} değerlerini bir fotoğraf makinesindeki gibi ayarlayın; yanlarındaki EV, olağan pozlama değeridir. f/16, 1/100 sn ve ISO 100 güneşli bir güne uyar; daha karanlık bir sahne daha geniş diyafram, daha yavaş deklanşör ya da daha yüksek ISO ister. Bu her modda çalışır.
- {{ui:Alan derinliği}}, {{ui:Odak uzaklığı (m)}} değerinden daha yakın ya da daha uzak olanı, o f-stop'lu bir lensin yapacağı gibi bulanıklaştırır (görünümün ortasındakine odaklanmak için boş bırakın); {{ui:Diyafram şekli}} odak dışındaki parlak noktalara yuvarlak ya da kanatlı bir şekil verir.
- {{ui:İki noktalı perspektif (dikey çizgiler dik kalır)}} kamerayı düzeltir ve resmi bir mimari tilt-shift lensinin yaptığı gibi kaydırır; bir binaya yukarı ya da aşağı bakarken duvarlar eğilmez.
- {{ui:Beyaz dengesi}} hangi ışık renginin beyaz göründüğünü belirler: sıcak lamba ışığı için daha düşük (örneğin 3000 K), gölge ve bulutlu günler için daha yüksek.
- {{ui:İzdüşüm}}: {{ui:360° panorama}} panorama görüntüleyiciler için kameranın etrafındaki her şeyin 2:1 bir resmini yapar; {{ui:360° stereo panorama}} kulaklıklar için bir sol göz ve bir sağ göz panoramasını üst üste koyar; {{ui:Küp haritası (6 yüzey)}} 3 × 2 bir ızgarada altı kare görünüm yapar. Genişlik {{ui:Boyut}} değerinden gelir.

İzdüşüm, alan derinliği, iki noktalı perspektif ve beyaz dengesi grafik kartındaki ışın izleyici (WebGPU) gerektirir; bu yüzden yalnızca {{ui:Yüksek kalite (ışın izleme)}} modunda görünürler.

## Resmi bitirin

{{ui:Resim}} yüksek kalite resmi bir fotoğraf gibi derecelendirir; her denetim, yeniden render etmeden bitmiş resmi hemen değiştirir:

- {{ui:Görünüm (görünüm dönüşümü)}}: {{ui:ACES filmik}} (resim öncekisi gibi), {{ui:AgX}} (daha yumuşak, çok parlak ışıkta rengi korur), {{ui:Filmik}} (yumuşak bir film eğrisi) ya da {{ui:Standart}} (düz; parlak ışık beyaza kırpılır).
- {{ui:Karşıtlık}} ve {{ui:Parlak alan sıkıştırma}} (çok parlak kısımlarda detayı geri getirir).
- {{ui:Işıma (bloom)}} (parlak ışığın etrafında yumuşak bir parıltı), {{ui:Parlama}} ile onun {{ui:Parlama çizgileri}} (en parlak noktalardan yıldız ışınları) ve {{ui:Köşe karartma}} (daha koyu köşeler).
- {{ui:Renk tablosu (.cube)…}} bir `.cube` dosyasından, {{ui:Renk tablosu gücü}} ile bir renk derecelendirmesi uygular; bir gökyüzü resmi gibi yalnızca sayfa açıkken tutulur.

## Resmi kaydedin

{{ui:Farklı kaydet}}, {{ui:Kaydet}} yanında dosyayı seçer: paylaşım için {{ui:PNG}}, {{ui:JPEG}} ya da {{ui:WebP}} (JPEG ve WebP yalnızca tarayıcının yazabildiği yerlerde) ve grafik kartında yüksek kaliteli bir render'dan sonra ayrıca:

- {{ui:PNG, 16 bit}}: derecelendirilmiş resim, tonlar arasında daha ince adımlarla; baskı ya da sonraki düzenleme için.
- {{ui:EXR, her katman (32 bit kayan nokta)}}: resim render edildiği gibi (doğrusal ışık, derecelendirme yok), her render öğesi ve ışık grubu ayrı bir katman olarak; kompozisyon programları için.
- {{ui:Render dosyası (.ccrender, sonra yeniden derecelendirmek için)}}: iletişim kutusunun resmi yeniden karıştırıp derecelendirmesi için gereken her şey. {{ui:Bir render dosyası aç…}} onu, karışımı ve derecelendirmesiyle birlikte, render etmeden geri getirir.

## Render sonrası ışıkları karıştırın

{{ui:Render}} düğmesine basmadan önce {{ui:Işık karıştırma (render sonrası her ışığın rengini ve parlaklığını değiştirin)}} seçeneğini açın. Resim bittiğinde (ya da durdurulduğunda) {{ui:Resmi karıştır}} ışıklarını gruplar halinde listeler: gökyüzü, güneş ve lambalar ada göre (aynı ada sahip her lamba bir gruptur). Bir grubu kapatın, ona bir renk verin ya da daha parlak ya da koyu yapın; resim hemen değişir, yeniden render edilmez. {{ui:Karışımı kaydet}} karışımı, seçmek üzere bir adla saklar; {{ui:Render edildiği gibi}} resmi yapıldığı haline döndürür. {{ui:Kaydet}} karıştırılmış resmi kaydeder.

{{ui:Render öğeleri (albedo, normaller, derinlik, dağınık, yansıma, geçirgenlik, yayılım, kimlikler)}} resmin parçalarını da tutar. {{ui:Göster}} görünümü bunlardan birine çevirir: yüzey renkleri (albedo), normaller, derinlik, dağınık, yansıma ve iletilen ışık (her biri doğrudan ve dolaylı), neyin parladığı ve gökyüzü ile maske yapmak için nesne ya da malzeme başına bir renk.

Her ikisi de ek katmanları grafik kartında tutar. Büyük boyutlarda grafik kartında yer kalmayabilir; iletişim kutusu bunu söyler ve daha küçük bir boyut çalışır.

## Sis, duman, gürültü ve kostikler

Bunlar {{ui:Sis, duman ve gürültü}} altında yaşar ve grafik kartında {{ui:Yüksek kalite (ışın izleme)}} modunda çalışır; diğer motorlar bunları dışarıda bırakır.

- {{ui:Sis ve pus}} havayı belli bir yüksekliğe kadar güneşin, gökyüzünün ve lambaların aydınlattığı bir sisle doldurur. {{ui:Ne kadar uzağı görebileceğiniz, metre cinsinden}} ne kadar yoğun olduğunu belirler (yaklaşık 100 m hafif bir pus, 20 m kalın bir sis), {{ui:Sisin zeminden yüksekliği, metre cinsinden}} nerede bittiğini ve {{ui:Işık hüzmeleri}} sisin ışığa doğru ne kadar parladığını belirler. Güneş ışığı sisi en üstünden terk eder; bu yüzden güneş bir pencereden ya da binalar arasından girdiğinde bunu ışık hüzmeleri olarak görürsünüz.
- {{ui:Duman veya bulut}} sis gibi aydınlatılmış tek bir duman ya da bulut hacmi ekler. {{ui:Tür}} bir {{ui:Bulut}}, bir {{ui:Duman sütunu}} ya da {{ui:Hacim dosyasından (.ccvol)}} (CadCraft'ın kendi ızgara biçimi) seçimidir. {{ui:Ayrıntı}} ve {{ui:Çeşitlilik}} oluşturulmuş bir bulut ya da sütunu değiştirir; {{ui:En uzun kenarının boyutu, metre cinsinden (0 = modelin boyutu)}}, {{ui:X yönünde taşı (m)}}, {{ui:Y yönünde taşı (m)}}, {{ui:Z yönünde taşı (m)}} ve {{ui:Döndür}} onu yerleştirir (modelin ortasında başlar), {{ui:Kalınlık}} onu yoğunlaştırır, {{ui:İleri parıltı}} ışığa doğru parlaklığını artırır ve {{ui:Renk}} onu renklendirir. Bir hacim dosyası, bir gökyüzü resmi gibi yalnızca sayfa açıkken tutulur.
- {{ui:Resmin temiz olduğu yerlerde erken durdur (uyarlanabilir örnekleme)}} yerleşmiş piksellere daha fazla örnek vermez. {{ui:Kabul edilecek gürültü}} bir piksel durduğunda kalan tanenin miktarıdır. Resmin altındaki satır, bir pikselin ortalama kaç örnek aldığını söyler.
- {{ui:Kostikler (cam tarafından kırılan veya aynalardan yansıyan ışık)}} lambalardan ve güneşten ışık izler; böylece cam bir topun altındaki parlak leke ya da bir aynanın duvarda yaptığı ışık tanesiz değil, temiz çıkar. Sis, duman, ışık karıştırma ya da render öğeleri açıkken kapalıdır; 360° resimler için değil, normal resimler için yapılmıştır.

## Render kuyruğu

İletişim kutusundaki {{ui:Render kuyruğu}}: {{ui:Bu resmi kuyruğa ekle}} resmin ayarlarını ve görünümünü korur, {{ui:Kuyruğu başlat}} bekleyenleri bu bilgisayarda sırayla render eder. Sayfayı kapatmak kuyruğu korur; devam etmek için aynı modeli açın. {{ui:Kaydet}} bitmiş bir resmi indirir; {{ui:Kaldır}} ve {{ui:Bitenleri temizle}} listeyi düzenler. Kuyruk yüksek kalitede render eder, bu yüzden WebGPU gerektirir.

## Ne kadar sürer

Resim kendi bilgisayarınızda, grafik kartınızla yapılır; hiçbir şey yüklenmez. Süre geçiş ve piksel sayısıyla büyür: {{ui:En iyi}}, {{ui:Taslak}} değerinin 16 katı geçişe sahiptir ve 4K bir resim, Full HD'nin yaklaşık dört katı piksele sahiptir. Büyük modeller geçiş başına daha uzun sürer.
