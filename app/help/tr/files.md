---
title: BimCraft'ın açtığı ve kaydettiği dosyalar
summary: BimCraft'ın açtığı her biçim, neyi koruduğu, neyi kaydettiği, kaydedilen dosyaların nereye gittiği ve tarayıcılar arasında ile çevrimdışıyken neyin değiştiği.
keywords: biçimler, aç, kaydet, dışa aktar, indir, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, yükle, gizlilik, dosya boyutu
from: a1f0161b
---

BimCraft, bilgisayarınızdaki dosyaları tarayıcı sekmesinde okur. CadCraft'a veya bir başkasına **hiçbir şey yüklenmez**. Kaydettiğinizde BimCraft tarayıcıya indirilmek üzere yeni bir dosya verir; açtığınız bir dosyanın üzerine hiçbir zaman yazmaz.

## Neleri açar

| Biçim | Uzantılar | Ne elde edersiniz |
|---|---|---|
| IFC | `.ifc` | Modelin 3B hali, katlar, öğe sayıları ve her öğenin özellikleri. Adlar, etiketler ve tek tek özellik değerleri değiştirilebilir. |
| Proje ve aile dosyaları | `.rvt` `.rfa` `.rte` `.rft` | Bir dosya kartı: sürüm, derleme, ortak çalışma, proje bilgileri, aile parametreleri, bağlı dosyalar ve önizleme resmi. 3B yok. |
| DWG | `.dwg` | Çizim 2B olarak: model uzayı, her sayfa, katmanlar, bağlı çizimler, resimler ve çıktı görünümü. Model uzayı 3B olarak da. AutoCAD 2000'den 2018'e kadar olan biçimler denetlenmiştir. |
| DXF | `.dxf` | DWG ile aynı. |
| STEP | `.step` `.stp` | Bir parça, bir ekipman veya bir tedarikçinin modeli (AP203, AP214, AP242) 3B olarak: her katı, tek bir katta küçük bir IFC modelinin bir öğesi (bir yapı öğesi vekili) olur; üçgenler olarak, gerçek boyutunda okunur; dosyanın yerleştirdiği yerde her parçasıyla bir montajdır. Buradan sonra herhangi bir IFC gibi çalışır: özellikler, kesitler, ölçme, IFC olarak kaydetme. Renkler ve montaj ağacı okunmaz. |
| Nokta bulutları | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Tarama 3B görünümde, bir modelin yanında veya tek başına: bkz. [Modelin yanında bir nokta bulutu gösterme](topic:point-clouds). |
| Proje paketi | `.ccbundle.zip` | Model, görünümleri, düzenleri ve özellik grupları ile birlikte: bkz. [Bir proje paketini açma](topic:open-project-bundle). |
| Bir klasör | herhangi | İçindeki her model, çizim ve proje paketinin raporu. Rapordaki her IFC, model, çizim veya paket bir tıklamayla açılır. |

[BimCraft'ın her biçimden okuduğu şeyler](topic:file-formats) ayrıntıya girer.

BimCraft bir dosyanın ne olduğuna adına bakmanın yanı sıra ilk baytlarına da bakarak karar verir; bu yüzden olağandışı uzantılı bir proje dosyası yine de dosya kartı olarak açılır.

### Açılmayanlar

- `.ifczip` ve `.ifcxml`: BimCraft şunu söyler: ".ifczip henüz desteklenmiyor. Modeli düz bir .ifc dosyası olarak kaydedin veya dışa aktarın." `.ifczip` dosyasını açın (içinde düz bir `.ifc` vardır) ya da düz IFC olarak yeniden dışa aktarın.
- DGN çizimleri klasör raporunda listelenir ama açılmaz.
- PDF, resim ve ofis dosyaları kendi başlarına açılmaz. Resimler bir DWG içinde resim olarak kullanılır; {{ui:Oluştur}} › {{ui:Bir çizimden…}} ise bir PDF'nin veya taramanın sayfalarını duvarlara dönüştürür: bkz. [Bir plan takımından duvarlar](topic:walls-from-plans).

## Neleri kaydeder

| Tıkladığınız | Elde ettiğiniz | Nereye |
|---|---|---|
| {{ui:IFC olarak farklı kaydet}} | Düzenlemelerinizi içeren yeni bir IFC dosyası; adı "*özgün ad* (edited).ifc" | Tarayıcınızın indirilenler klasörü |
| Ekipman listesinde {{ui:CSV indir}} | Listedeki kalemlerin bir CSV'si; adı "*çizim adı* equipment.csv" | Tarayıcınızın indirilenler klasörü |

Diğer şeyler yapıldıkları yerde kaydedilir, her biri kendi konusunda: {{ui:USD}} ([Modeli USD olarak dışa aktarma](topic:usd)), .glb dosyası {{ui:Render için}}, render edilmiş resimler, PDF olarak sayfalar ve planlar, CSV olarak listeler ve tablolar, BCF sorunları, COBie tablosu, aile dosyaları ve LAS veya E57 olarak hizalanmış taramalar. BimCraft DWG, DXF veya proje dosyalarını kaydetmez ve açtığınız dosyaları hiçbir zaman değiştirmez.

:::chromium
Chrome ve Edge, indirmeleri ayarlarında belirtilen klasöre, genellikle İndirilenler'e kaydeder. Her seferinde nereye kaydedileceğinin sorulması için tarayıcının indirme ayarlarında "İndirmeden önce her dosyanın nereye kaydedileceğini sor" seçeneğini açın.
:::

:::firefox
Firefox, ayarlarında "Dosyaların nereye kaydedileceğini her zaman sor" seçilmedikçe İndirilenler klasörüne kaydeder.
:::

:::safari
Safari, **Safari > Ayarlar > Genel > Dosya indirme konumu** altında başka bir klasör seçmediğiniz sürece İndirilenler'e kaydeder.
:::

## İkinci kez kaydetme

Her kayıt, yalnızca son kayıttan sonraki değişiklikleri değil, **açtığınızdan beri yapılan her değişikliği** içeren modelin tamamını indirir. {{ui:Değişiklikler}} listesi her kayıttan sonra yeniden boşalır; bu yüzden bir kaydın ötesine geri alamazsınız. Özgün halden yeniden başlamak için özgün dosyayı yeniden açın.

## Büyük dosyalar ve bellek

- **IFC** dosyaları sekmenin belleğine tamamen okunur ve 3B geometri bunun üstüne daha fazla bellek alır. Birkaç yüz megabaytlık bir model bir dizüstü bilgisayar için fazla olabilir. 1,5 milyon üçgenin üzerinde bellek tasarrufu için kenarlar kapatılır ("Kenarlar çok büyük modellerde kapalı").
- **Proje dosyaları** bütünüyle okunmaz. BimCraft dosya ne kadar büyük olursa olsun yalnızca ihtiyaç duyduğu küçük parçaları, yaklaşık 40 KB ile 100 KB arasını okur; bu yüzden bir ağ sürücüsündeki 500 MB'lık bir merkezi model bir anda açılır.
- **DWG ve DXF** dosyaları tamamen okunur. Çok büyük bir çizim "Bu çizim çok büyük; yalnızca bir kısmı gösteriliyor." iletisini gösterir.
- **Klasörler**: 20.000 dosyaya kadar olanlar açılır. Her model kartının ihtiyaç duyduğu birkaç kilobayt dışında hiçbir şey okunmaz.

Daha fazlası için bkz. [Tarayıcılar, cihazlar ve bellek](topic:platforms).

## Çevrimiçi ve çevrimdışı

Dosya açmak hiçbir zaman internet gerektirmez. Bir okuyucu, ihtiyaç duyduğunuz ilk seferde siteden yüklenir: bir IFC modelini ilk açtığınızda IFC motoru ("IFC motoru başlatılıyor…"). DWG ve DXF okuyucuları uygulamanın parçasıdır.

:::offline
Çevrimdışısınız. Uygulama çubuğundaki düğme {{ui:Çevrimdışı hazır}} diyorsa her biçim her zamanki gibi açılır. Demiyorsa, bu sekmede zaten bir IFC modeli açılmadıysa bir IFC modeli açılamaz: önce yeniden bağlanın. Bkz. [Çevrimiçi ve çevrimdışı](topic:online-offline).
:::

BimCraft'ı bağlantı olmadan kullanmak için çevrimiçiyken uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın ve {{ui:Çevrimdışı hazır}} yazısını bekleyin. Kaydedilen kopya yaklaşık 33 MB'dır; IFC motorunu içerir, bu yüzden IFC modelleri çevrimdışıyken de açılır. [Çevrimdışı çalışma](common:offline), kaydedilen kopyaları genel olarak açıklar.

## Bulutta kaydetme

Bulutta kaydetme henüz mevcut değil. Düzenlenmiş kopyalarınızı, diğer dosyalar gibi, kendi bilgisayarınıza veya ofisinizin dosya sunucusuna kaydedin. Bkz. [Dosyalarınız](common:your-files).
