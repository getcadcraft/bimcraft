---
title: Diğer BIM ve çizim programlarından geçiş
summary: Masaüstü BIM tasarımından ve DWG görüntülemeden gelen alışkanlıkların BimCraft'a nasıl karşılık geldiği ve insanları şaşırtan farklılıklar.
keywords: geçiş, taşıma, alışık, masaüstü bim, aile, parametreler, proje tarayıcısı, özellikler paleti, görünüm küpü, xref, katman yöneticisi, farklar, karşılaştır
from: 2de629af
---

Revit biliyorsanız, BimCraft'ın çoğu sözcükler bakımından tanıdık, kapsam bakımından yabancı gelecektir. En önemli fark: **bu sürüm modelleri okur ve inceler, IFC verilerini düzenler. Henüz Revit gibi tasarım yapmaz.** Duvar çizemez, aile yerleştiremez, görünüm ya da sayfa oluşturamaz ve bir proje dosyasını kaydedemezsiniz. Yapabilecekleriniz: tarayıcısı olan herhangi bir bilgisayarda hemen hemen her bina dosyasını açmak, içindekileri görmek, bir proje klasörünün tamamını denetlemek ve bir IFC modelindeki verileri düzeltmek.

## Alışkanlıklar nasıl eşleşir

| Alışık olduğunuz | BimCraft'ta |
|---|---|
| Modeli görmek için Revit'te bir `.rvt` açmak | BimCraft `.rvt` dosyasını bir dosya kartı olarak açar: sürüm, proje bilgisi, bağlantılar, önizleme. 3B model için IFC dışa aktarın ve onu açın. [Bir proje ya da aile dosyasını okuyun](topic:read-rvt-file) |
| Açmadan önce dosyanın hangi sürümde kaydedildiğini kontrol etmek | Kart, en üstte dosyayı yükseltmeden ya da değiştirmeden "Revit … sürümünde kaydedildi" yazar |
| Proje Tarayıcısı | Görünüm ve sayfa tarayıcısı yok. Bir IFC modelinin {{ui:Katlar}} ve {{ui:Öğeler}} listeleri vardır; bir çizimin sayfa sekmeleri vardır |
| Özellikler paleti | Tıkladığınız öğe için sağdaki {{ui:Özellikler}} paneli. Parametre grupları yerine IFC özellik kümeleri |
| Örnek ve tip parametreleri | Örnek özellik kümeleri ve "(tip)" olarak işaretlenmiş kümeler. Bir tip değişikliği, Revit'te olduğu gibi o tipin her öğesine uygulanır. [Bir tipin özelliğini her öğe için değiştirin](topic:type-vs-instance) |
| Tipi Düzenle | İletişim kutusu yok: bir "(tip)" kümesinde bir değere tıklayın ve yazın |
| Birçok öğe seçmek, filtreler, Tüm Örnekleri Seç | Seferde bir öğe. Henüz yapılmadı |
| Görünüm küpü ve gezinme tekerleği | Sağ alt köşede bir görünüm küpü, dört düğme ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}) ve serbest döndürme. Gezinme tekerleği yok |
| Döndürmek için Shift ve orta tuşla sürükleme, kaydırmak için orta tuşla sürükleme | Sol sürükleme döndürür, sağ sürükleme (ya da {{key:Shift}} ile sürükleme) kaydırır, tekerlek yakınlaştırır. {{ui:BIM şeridi}} menü stili, kaydırmayı orta tuşla sürüklemeye, döndürmeyi orta tuş ve {{key:Shift}} ile sürüklemeye çevirir. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse) |
| Kat planları, kesitler, kesit kutuları | Seferde bir {{ui:Kesit}} düzlemi ({{key:X}}); kesit kutusu ya da 2B plan yok. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane) |
| Görünümde gizleme, izole etme, görünürlük/grafik | {{ui:Katlar}} açma ve kapatma, {{ui:Mekânlar}} ve {{ui:Kenarlar}}. Henüz öğe bazında gizleme yok |
| Odalar | IFC mekânları, başta gizli. {{ui:Mekânlar}} öğesine tıklayın |
| Kaydet, Farklı Kaydet, merkezi dosyayla eşitle | {{ui:IFC olarak farklı kaydet}} yeni bir IFC dosyası indirir. Orijinal hiçbir zaman değişmez. Merkezi dosya ya da ortak çalışma yok |
| {{key:Mod+Z}} ile geri alma | IFC düzenlemelerinde, kaydedene kadar çalışır. [IFC özelliklerini değiştirin ve düzenlenmiş bir kopyayı kaydedin](topic:edit-ifc-properties) |
| Bağlantıları Yönet | Proje klasörünü açın: her bağlantı denetlenir ve **Bu klasörde**, **Aynı ad bulundu**, **Kütüphane dosyası** ya da **Bu klasörde değil** olarak işaretlenir. [Bir proje klasörünün tamamını açın](topic:open-project-folder) |
| Denetim ya da bozuk olup olmadığını görmek için bir dosya açmak | Klasör raporu her kopyayı ve yedeği kesilmiş olup olmadığı açısından saniyeler içinde denetler. [Bir klasördeki hasarlı kopyaları denetleyin](topic:check-folder-health) |
| Karışık bir klasörden doğru dosyayı seçmek | {{ui:Buradan başlayın}} kutusu, nedenleriyle birlikte birini önerir |

Modelleri yalnızca denetlemek için açıyorsanız, bir model denetleme ya da IFC görüntüleme programında olduğu gibi, {{ui:Görüntüleyici}} menü stilini seçin: görüntüleme ve denetleme araçları önce gelir, yapı araçları tek bir menüde bekler. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).

## DWG dosyalarını görüntülemekten geliyorsanız

DWG dosyalarını AutoCAD'de ya da bir DWG görüntüleyicisinde açıyorsanız:

| Alışık olduğunuz | BimCraft'ta |
|---|---|
| Alttaki Model ve düzen sekmeleri | Çizimin üstünde sekmeler: {{ui:Model}} ve her sayfa için bir tane |
| ZOOM Extents, tekerleğe çift tıklama | Çift tıklayın, {{key:F}} ya da {{ui:Sığdır}} |
| Orta tuşla kaydırma | Herhangi bir tuşla sürükleyin |
| Katman yöneticisi | {{ui:Katmanlar}} listesi: göstermek için işaretleyin, gizlemek için işareti kaldırın, {{ui:Tümünü aç}} ve {{ui:Tümünü kapat}} |
| Xref yöneticisi | Sağda **Bağlı çizimler**, **Gösteriliyor** ya da **Bulunamadı** durumuyla ve {{ui:Bağlı çizim ekle…}} |
| Çıktı önizlemesi | {{ui:Çıktı görünümü}} ya da {{key:P}}: çizgi kalınlıklarıyla beyaz üzerine siyah. Yazdırmaz |
| Blok özniteliklerinden veri çıkarma | Etiketlenmiş yiyecek hizmeti çizimleri için {{ui:Ekipman}} sekmesi ve {{ui:CSV indir}} |
| Ölçme, çizme, düzenleme, farklı kaydetme | BimCraft'ta yok. CadCraft çizim uygulaması çizer ve düzenler |

## Sizi şaşırtan farklar

- **Tarayıcıda çalışır ve tarayıcı dosyalarınıza özen gösterir.** BimCraft yalnızca size seçtiğiniz ya da sürükleyip bıraktığınız dosya ve klasörleri okuyabilir. Kendi kendine bir dosya açamaz ve bir dosyanın üzerine kaydedemez. Her kayıt bir indirmedir.
- **Hiçbir şey yüklenmez.** Bazı tarayıcıların klasör iletişim kutularındaki "yükle" sözcüğü tarayıcının kendi ifadesidir. Dosyalar bilgisayarınızda kalır.
- **IFC model biçimidir.** Bir proje dosyası, 3B içeriği belgelenmemiş olduğu için bir kart olarak açılır. Modellerin BimCraft'a geliş yolu olarak IFC'yi düşünün.
- **Düzenlemeler kopyala-yaz yöntemiyledir.** Bir öğenin değerini değiştirmek, dışa aktarıcı bu değeri komşularıyla paylaşmış olsa bile komşularını asla değiştirmez. Tip özellikleri bilinçli istisnadır.
- **Proje yok, görünüm yok.** BimCraft her seferinde bir dosya gösterir ve sekmeyi kapattıktan sonra, Chrome ve Edge'deki son klasörlerin adları dışında onunla ilgili hiçbir şeyi hatırlamaz.
- **Mac tuşları.** Revit'in Windows kısayollarında Ctrl kullanılan yerlerde BimCraft'ın kısayolları {{key:Mod}} kullanır: Mac'te Command.
- **Fare alışkanlıklarınız.** Döndürme sol tuştur, Shift ve orta tuş değil; {{ui:BIM şeridi}} menü stilini seçmediğiniz ya da [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse) içinde düğmeleri kendiniz ayarlamadığınız sürece.

Bugün yerine ne kullanacağınız için [Henüz yapılmayanlar](topic:not-built-yet) konusuna bakın.
