---
title: BimCraft'ın açtığı ve kaydettiği dosyalar
summary: BimCraft'ın açtığı her biçim, okuduğu bilgiler, kaydettiği dosyalar, dosyaların kaydedildiği yer ve tarayıcılar arasındaki ile çevrimdışıyken değişen şeyler.
keywords: biçimler, aç, kaydet, dışa aktar, indir, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, yükle, gizlilik, dosya boyutu
from: a7275dbf
---

BimCraft dosyaları bilgisayarınızda, tarayıcı sekmesinde okur. **Hiçbir şey** CadCraft'a ya da başka birine yüklenmez. Kaydettiğinizde BimCraft tarayıcıya indirilecek yeni bir dosya verir; açtığınız bir dosyanın üzerine hiçbir zaman yazmaz.

## Açtığı dosyalar

| Biçim | Uzantılar | Ne elde edersiniz |
|---|---|---|
| IFC | `.ifc` | Modeli 3B olarak, katları, öğe sayılarını ve her öğenin özelliklerini. Adlar, etiketler ve tek özellik değerleri değiştirilebilir. |
| Proje ve aile dosyaları | `.rvt` `.rfa` `.rte` `.rft` | Bir dosya kartı: sürüm, derleme, ortak çalışma, proje bilgileri, aile parametreleri, bağlı dosyalar ve önizleme resmi. 3B yok. |
| DWG | `.dwg` | Çizim 2B olarak: model uzayı, her sayfa, katmanlar, bağlı çizimler, resimler ve çıktı görünümü. Model uzayı 3B olarak da. AutoCAD 2000'den 2018'e kadar olan biçimler sınanmış olanlardır. |
| DXF | `.dxf` | DWG ile aynı. |
| STEP | `.step` `.stp` | Bir parça, bir ekipman parçası ya da bir tedarikçinin modeli (AP203, AP214, AP242) 3B olarak: her katı, tek katta küçük bir IFC modelinin bir öğesi olur (building element proxy), gerçek boyutunda üçgenler olarak okunur; dosyanın yerleştirdiği her parçayla birlikte bir montaj. Bundan sonra herhangi bir IFC gibi çalışır: özellikler, kesitler, ölçüm, IFC olarak farklı kaydet. Renkler ve montaj ağacı okunmaz. |
| Nokta bulutları | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Tarama, 3B görünümde, bir modelin yanında ya da tek başına: bkz. [Modelin yanında bir nokta bulutu gösterin](topic:point-clouds). |
| Proje paketi | `.ccbundle.zip` | Görünümleri, düzenleri ve özellik gruplarıyla model: bkz. [Bir proje paketi açın](topic:open-project-bundle). |
| Bir klasör | herhangi | İçindeki her model, çizim ve proje paketinin raporu. Rapordaki herhangi bir IFC, model, çizim ya da paket bir tıklamayla açılır. |

[BimCraft'ın her biçimden okuduğu bilgiler](topic:file-formats) ayrıntılı anlatılır.

BimCraft bir dosyanın ne olduğuna adına ek olarak ilk baytlarına bakarak karar verir; bu yüzden olağandışı uzantılı bir proje dosyası da dosya kartı olarak açılır.

### Açılmayanlar

- `.ifczip` ve `.ifcxml`: BimCraft şunu söyler: ".ifczip henüz desteklenmiyor. Modeli düz bir .ifc dosyası olarak kaydedin ya da dışa aktarın." `.ifczip` dosyasını açın (içinde düz bir `.ifc` bulunur) ya da modeli yeniden düz IFC olarak dışa aktarın.
- DGN çizimleri bir klasör raporunda listelenir ama açılmaz.
- PDF, resimler ve ofis dosyaları tek başına açılmaz. Resimler bir DWG'nin içinde resim olarak kullanılır; {{ui:Derleme}} › {{ui:Bir çizimden…}} bir PDF'nin ya da taramanın sayfalarını duvarlara dönüştürür: bkz. [Bir plan takımından duvarlar](topic:walls-from-plans).

## Ne kaydeder

| Tıklarsınız | Elde edersiniz | Nerede |
|---|---|---|
| {{ui:IFC olarak farklı kaydet}} | Düzenlemelerinizle yeni bir IFC dosyası, "*özgün ad* (edited).ifc" adıyla | Tarayıcınızın indirilenler klasörü |
| Ekipman listesinde {{ui:CSV indir}} | Listedeki öğelerin bir CSV dosyası, "*çizim adı* equipment.csv" adıyla | Tarayıcınızın indirilenler klasörü |

Diğer şeyler yapıldıkları yerde kaydedilir; her biri kendi konusunda: {{ui:USD}} ([Modeli USD olarak dışa aktarın](topic:usd)), {{ui:Collada}} (.dae ve Google Earth .kmz: [Modeli Collada ya da Google Earth için dışa aktarın](topic:collada)), {{ui:Render için}} .glb, render edilmiş resimler, sayfalar ve planlar PDF olarak, tablolar ve listeler CSV olarak, BCF sorunları, COBie elektronik tablosu, aile dosyaları ve kayıtlı taramalar LAS ya da E57 olarak. BimCraft DWG, DXF ya da proje dosyalarını kaydetmez ve açtığınız dosyaları asla değiştirmez.

:::chromium
Chrome ve Edge indirmeleri, ayarlarında belirlenen klasöre kaydeder; genellikle İndirilenler. Her dosya için nereye kaydedeceğinizin sorulmasını istiyorsanız tarayıcının indirme ayarlarında "İndirmeden önce her dosyanın nereye kaydedileceğini sor" seçeneğini açın.
:::

:::firefox
Firefox, ayarlarında "Dosyaları nereye kaydedeceğimi her zaman sor" seçmediğiniz sürece İndirilenler klasörüne kaydeder.
:::

:::safari
Safari, **Safari > Ayarlar > Genel > Dosya indirme konumu** altında başka bir klasör seçmediğiniz sürece İndirilenler'e kaydeder.
:::

## İkinci kez kaydetme

Her kayıt, modeli **açtığınızdan beri yapılan her düzenlemeyle** birlikte tamamen indirir; yalnızca son kayıttan sonraki düzenlemeler değil. {{ui:Değişiklikler}} listesi her kayıttan sonra yeniden boş başlar, bu yüzden bir kaydın gerisine geri alamazsınız. Baştan başlamak için orijinal dosyayı yeniden açın.

## Büyük dosyalar ve bellek

- **IFC** dosyaları sekmenin belleğine tamamen okunur ve 3B geometri bunun üstüne daha fazla bellek alır. Birkaç yüz megabaytlık bir model bir dizüstü bilgisayar için fazla olabilir. 1.5 milyon üçgenin üzerinde kenarlar bellek tasarrufu için kapatılır ("Çok büyük modellerde kenarlar kapalıdır").
- **Proje dosyaları** tamamen okunmaz. BimCraft yalnızca ihtiyaç duyduğu küçük parçaları okur; dosya ne kadar büyük olursa olsun yaklaşık 40 KB ila 100 KB. Bu yüzden bir ağ sürücüsündeki 500 MB'lık merkezi model bir anda açılır.
- **DWG ve DXF** dosyaları tamamen okunur. Çok büyük bir çizim "Bu çizim çok büyük; yalnızca bir kısmı gösteriliyor." uyarısını verir.
- **Klasörler** 20.000 dosyaya kadar açılır. Her model kartının ihtiyaç duyduğu yalnızca birkaç kilobayt okunur.

Daha fazlası için bkz. [Tarayıcılar, cihazlar ve bellek](topic:platforms).

## Çevrimiçi ve çevrimdışı

Dosya açmak asla internet bağlantısı gerektirmez. Bir okuyucu, ihtiyaç duyduğunuz ilk seferde siteden yüklenir: IFC motoru, bir IFC modelini ilk açtığınızda ("IFC motoru başlatılıyor…"). DWG ve DXF okuyucuları uygulamanın bir parçasıdır.

:::offline
Çevrimdışısınız. Uygulama çubuğundaki düğme {{ui:Çevrimdışı hazır}} diyorsa her biçim her zamanki gibi açılır. Demiyorsa, bu sekmede daha önce açılmış bir IFC modeli dışında IFC modeli açılamaz: önce bağlantıyı yeniden kurun. Bkz. [Çevrimdışı ve çevrimiçi](topic:online-offline).
:::

BimCraft'ı bağlantı olmadan kullanmak için çevrimiçiyken uygulama çubuğundaki {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın ve {{ui:Çevrimdışı hazır}} görünene kadar bekleyin. Kaydedilen kopya yaklaşık 33 MB'tır; IFC motorunu da içerir, bu yüzden IFC modelleri de çevrimdışı açılır. [Çevrimdışı çalışma](common:offline) kaydedilmiş kopyaları genel olarak açıklar.

## Bulut kaydetme

Bulut kaydetme henüz kullanılamıyor. Düzenlenmiş kopyalarınızı, diğer tüm dosyalarda yaptığınız gibi, kendi bilgisayarınıza ya da ofisinizin dosya sunucusuna kaydedin. Bkz. [Dosyalarınız](common:your-files).
