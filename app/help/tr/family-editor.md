---
title: Bir aileyi düzenleme
summary: Bir ailenin parametrelerini, formüllerini ve katılarını değiştirin, parçaları Evet / Hayır parametresiyle gösterin, katıları kesip birleştirin, borular ve kanallar için bağlantı noktaları verin ve sonucu kaydedeceği IFC'den çizilmiş olarak görün.
keywords: aile düzenleyicisi, aileyi düzenle, parametre, parametreler, formül, formüller, görünürlük, evet hayır, katı, katılar, kutu, ekstrüzyon, ekstrüde et, döndürme, süpürme, profil, yay, boole, boole işlemleri, kes, birleştir, fark, birleşim, tutamaç, tutamaçlar, çalışma düzlemi, eskiz, yeni aile, bağlantı noktası, bağlantı noktaları, port, boru bağlantısı, kanal bağlantısı, dren, su beslemesi
from: 1ab31c10
---

## Düzenleyiciyi açma

Bir aileyi açın (proje tarayıcısındaki **Aileler** ya da {{ui:Derleme}} › {{ui:Aileler…}}) ve {{ui:Aileyi düzenle}} öğesine tıklayın. Sıfırdan başlamak için {{ui:Yeni aile}} öğesine tıklayın: ona bir ad verin, ne olduğunu belirtin (kapı, pencere, mobilya, donanım ya da başka bir şey) ve bir kapı ya da pencereyse, plan sembolünün ve tutamacının hangi başlangıç ailesinden geleceğini seçin. Düzenleyici, birkaç parametre ve bir katı içeren bir aile ile açılır.

Bir başlangıç ailesini düzenlemek, değişikliklerinizi yalnızca bu modelde tutar. Diğer modeller başlangıç ailesini olduğu gibi bırakır.

{{ui:Aileyi kaydet}} öğesine tıklayana kadar modelde hiçbir şey değişmez. Düzenleyicinin kendi geri al ve yinele işlemleri vardır (adın yanındaki ok düğmeleri ya da {{key:Mod+Z}} ve {{key:Mod+Y}}); kaydetmek, modelin geri al geçmişinde tek bir adımdır.

## Parametreler

{{ui:Parametreler}} sekmesi ailenin parametrelerini listeler: bir ad, bir tür ve bir varsayılan. Türler: **Uzunluk** (milimetre), **Açı** (derece), **Sayı**, **Tam sayı**, **Evet / Hayır**, **Kalem** (1–16) ve sayı yerine sözcük tutan üç tür: **Metin**, **Malzeme** (projenin malzemelerinden biri) ve **Dolgu** (bir plan dolgusu). Sözcükler formüllerde kullanılmaz; bir katıyı renklendirirler (**Malzeme**si), bir sembol parçasını doldururlar ya da bir sembolün metninde `{Name}` olarak yazılırlar. **Öğe başına** kutusu, bir parametreyi boyut yerine her yerleştirilen öğenin kendisi için ayarladığı bir şey yapar.

- Bir **formül**, bir parametreyi diğerlerini izleyecek şekilde yapar, örneğin `Width / 30` ya da `if(Width > 1200, 2, 1)`. Formüllerdeki uzunluklar milimetredir; ya da bir birim yazın: `3'`, `6in`, `50cm`.
- Bir parametreyi yeniden adlandırmak, onu kullanan her formülde ve alanda da yeniden adlandırır. Hâlâ kullanımda olan bir parametre kaldırılamaz.
- Bir katının **Malzeme**si, projenin bir malzemesinin (ya da bir Malzeme parametresinin) rengini alır; **Gösterilme düzeyi** onu daha kaba ayrıntı düzeylerinde gizler; **Tekrarla** kopyalar oluşturur: bir sayı (1 ile 200 arasında bir sayı ya da tam sayı parametresi) ve x, y ve z yönündeki aralıkları. Tekrarlanan bir katı bir tahta, çubuk ya da delik sırasıdır; bir kesimde kullanıldığında kopyalar birlikte kesilir.
- Bir kapı ya da pencere ailesi, duvarından iki ad daha alır: `WallThickness` ve `Face` (1 ya da −1, kapının açıldığı yan).

## Katılar

{{ui:Katılar}} sekmesi katıları listeler. Bir kutu, bir ekstrüzyon, bir döndürme ya da bir süpürme ekleyin:

| Katı | Ne ayarlarsınız |
|---|---|
| Kutu | iki köşesi: x0'dan x1'e, y0'dan y1'e, z0'dan z1'e |
| Ekstrüzyon | bir çalışma düzlemindeki bir profil (plan, ön ya da yan), düzlemin yeri ve bir derinlik |
| Döndürme | bir profil, düzlem üzerinde bir eksen ve 360°'ye kadar bir açı |
| Süpürme | bir nokta yolu ve bir yarıçap (bir çubuk ya da bir ray) |

Her sayı, yazılmış bir sayı ya da parametrelerin bir ifadesi olabilir. Her katının bir rengi ve **Şu durumda göster** vardır: her zaman göstermek için boş bırakın, ya da yalnızca o durumda göstermek için bir Evet / Hayır parametresinin adını (ya da `Shelves >= 3` gibi bir karşılaştırmayı) yazın. Bu bir görünürlük parametresidir.

### Profil çizme

Bir ekstrüzyonun ya da döndürmenin profili, önizlemenin altında kendi çalışma düzleminde çizilir:

- Seçili noktadan sonra bir nokta eklemek için kağıda tıklayın.
- Bir noktayı taşımak için sürükleyin. Noktalar ızgaraya yapışır; serbestçe yerleştirmek için {{key:Shift}} tuşunu basılı tutun.
- Bir kenara nokta eklemek için kenardaki küçük kareye tıklayın. Bu kenarı bir yaya çevirmek için {{key:Shift}}+tıklayın (diğer yön için yeniden tıklayın, sonra düz).
- Bir noktayı kaldırmak için çift tıklayın.

Boş noktalar parametrelerle ayarlanır: onları sürüklemek yerine tabloda değiştirin.

## Boole işlemleri

{{ui:Boole işlemleri}} sekmesi, ikinci katıyı birincisinden keser ya da onlarla birleştirir. Bir boole sonucu yeniden kesilebilir ya da birleştirilebilir. Bir boole işleminde kullanılan bir katı yalnızca onun parçası olarak çizilir.

İkinci katı Evet / Hayır parametresi ile gizlendiğinde birinci olduğu gibi kalır; birinci gizlendiğinde sonuç da gizlenir.

## Plan sembolü

{{ui:Plan sembolü}} sekmesi, bu aile için planda katılarının kesiti yerine ne gösterileceğini çizer: ailenin kendi eksenlerinde çizgiler, dikdörtgenler, daireler, yaylar, çokgenler ve metin. Her parçanın bir **kalemi** (1–16, bir ifade ya da bir Kalem parametresi), bir **dolgusu** (yok, düz, çapraz, çarpık, beton, yalıtım, toprak ya da bir Dolgu parametresi), bir **şu ifadeyle gösterilir** ifadesi, milimetre cinsinden taban üstünden bir **kesit aralığı** (planın kesiti aralığın içindeyse tam kalınlıkta, altındaysa ince, üstündeyse kesikli çizilir: kesitin üstündeki bir dolap kesikli görünür), bir ayrıntı düzeyi ve bir tekrar vardır. Metin parametreleri `{Name}` olarak adlandırabilir. **Plan gösterir: Katıların kesiti** seçeneği, sembol ailede kalırken planın katıları kesmeye devam etmesini sağlar. Diğer programlar sembolü ailenin ayak izi olarak okur (çizgiler ve şekiller; metin BimCraft'ta kalır).

## İçindeki aileler

{{ui:İçindeki aileler}} sekmesi bu ailenin içine başka bir aile koyar: bir masanın ayağı, bir kapının kulpu. Aileyi seçin, sonra nereye gideceğini (x, y, z), ne kadar döndürüleceğini (yalnızca çeyrek dönüşler: 0, 90, 180, 270), ne zaman gösterileceğini ve aldığı değerleri (satır başına bir tane, `Height = Height - 40` biçiminde) seçin. İç aileyi kaydetmek bu aileyi yeniden çizer; başka bir aile tarafından tutulan bir aile silinemez; bir aile kendisini, bir başkası üzerinden bile tutamaz ve iç içe geçme dört düzeyde durur.

## Etkin noktalar

Etkin nokta, bir parametreyi değiştirmek için sürüklediğiniz bir nokta ya da kenardır. {{ui:Etkin noktalar}} sekmesinde bir tane ekleyin, sürüklediği ekseni ve değiştirdiği sayı parametresini seçin ve konumunu katılardaki aynı ifadelerle yazın. Önizlemede, tutamaçların altındaki **Etkin noktalar**'ı seçerek sürükleyin. Plandaki yerleştirilmiş bir öğede ({{ui:Seç}} ile seçin) x ve y etkin noktaları tutamaç olarak görünür: birini sürüklediğinizde öğe, etkin noktayı oraya koyacak boyutu alır; aralarındaki tüm formüllerden geçerek. Tek bir Geri al, onu geri getirir. Etkin nokta, türetilmiş (formülle hesaplanan) bir parametreyi, bir Evet / Hayır'ı ya da bir sözcüğü değiştiremez.

3B görünümde aynı etkin noktalar, seçilen öğede tutamaç olarak görünür; plan çizemediği yukarı-aşağı (z ekseni) olanlar da burada görünür. Öğeyi seçin, tutamacı ekseni boyunca sürükleyin ve bırakın: öğe, etkin noktayı oraya koyacak boyutu alır; tek bir geri al adımı olarak. Kesit kutusu açıkken tutamaçlar gizlenir, çünkü aynı tutamaçları kullanır.

## Bağlantı noktaları

Zemine yerleştirilen aileler (mobilya, donanım ve diğerleri) bir {{ui:Bağlantı noktaları}} sekmesine sahiptir: bir borunun ya da kanalın öğeye birleştiği noktalar, bir lavabonun musluğu ve giderinde olduğu gibi. {{ui:Bağlantı noktası ekle}} öğesine tıklayın ve ayarlayın:

- **Tür**: boru ya da kanal ve **Sistemi** (soğuk su, pis su drenajı, besleme havası…).
- **x**, **y** ve **z**: konumu, ailenin kendi eksenlerinde. Bir katının sayıları gibi, her biri bir sayı ya da parametrelerin bir formülü olabilir; böylece bağlantı noktası boyutla birlikte hareket eder.
- **Çıkış yönü**: bir borunun ya da kanalın ailenin eksenlerinden birine göre çıktığı yön (lavabonun altındaki bir gider **Aşağı**dır).
- **Boyut (mm)**: borunun nominal boyutu (DN) ya da yuvarlak kanalın çapı.
- **Akış**: beslenen bir bağlantı noktası (bir musluk) için **Giriş**, boşaltan bir bağlantı noktası için **Çıkış**.

Önizleme her bağlantı noktasını, çıkış yönünü gösteren bir oklu halka olarak çizer. Kapı ve pencerelerin bağlantı noktası yoktur.

Bir tesisat armatürü için, hangisi olduğunu **Tesisat armatürü** altında seçin (klozet, lavabo, mutfak evyesi, duş, çamaşır teknesi). Başlangıç armatürleri bunu zaten belirtir.

Aileden yerleştirilen her öğe, bağlantı noktalarını IFC dosyasında port olarak alır ve öğe boyut değiştirdiğinde ya da aile kaydedildiğinde yeniden oluşturulur. IFC sistemlerini okuyan programlar, her borunun ya da kanalın nereye ait olduğunu görür.

## Önizleme ve tutamaçları

Önizleme, aileyi modele kaydeden aynı kodla IFC olarak yazılmış ve geri çizilmiş halidir. Gördüğünüz, diğer programların alacağı şeydir. Altında **Gösterilen boyut**, önizlemenin kullandığı parametre değerlerini ayarlar.

**Tutamaçlar** önizlemedeki noktalardır: **Boyut** Genişlik, Derinlik ve Yükseklik için bir tutamaç gösterir; **Seçilen katı** seçtiğiniz katının her yüzünde bir tutamaç gösterir. Bir tutamacı sürükleyin:

- bir parametrenin belirlediği bir yüzde, gösterilen boyut değişir (ailenin formülleri korunur);
- yazılmış bir sayının belirlediği bir yüzde, sayı değişir.

## Kaydetme

{{ui:Aileyi kaydet}} aileyi denetler, sonra her boyutunu yeniden çizer ve her öğesini yeniden oluşturur; geri alınabilir tek bir adım olarak. Bir boyut bu değişiklikle çizilemiyorsa (örneğin bir katının o boyutta genişliği olmayacaksa), hiçbir şey kaydedilmez ve düzenleyici hangi boyutu söylediğini bildirir.

Düzenleyiciniz açıkken biri aynı aileyi kaydettiyse (bir Canlı TeamWork oturumunda ya da başka bir pencerede), {{ui:Aileyi kaydet}} reddeder ve bunu söyler; onların değişikliğini sizinkiyle değiştirmez. Düzenleyiciyi kapatın, aileyi yeniden açarak onların değişikliğini görün ve sizinkini yeniden yapın.

:::note
Geometri, IFC'nin kendi katıları olarak kaydedilir: ekstrüzyonlar, döndürmeler, süpürülmüş diskler ve boole sonuçları. Hiçbir şey üçgen listesine çevrilmez; böylece dosyalar küçük kalır ve diğer programlar şekilleri şekil olarak okuyabilir. Yaylı profiller IFC4'te yaylarıyla kaydedilir; IFC2X3'te bir profilde yay parçası yoktur, bu yüzden orada yaylar kısa düz parçalar olarak kaydedilir.
:::

Ayrıca bkz. [Aileler ve boyutları](topic:families).
