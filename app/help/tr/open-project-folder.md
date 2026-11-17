---
title: Tüm proje klasörünü açın
summary: BimCraft'ı bir proje klasörüne yöneltin; her modeli, yedeklerini ve bağlantılarını birlikte görün; Buradan başlayın kutusunun hangi dosyada çalışmanızı önerdiğine bakın.
keywords: klasör, dizin, proje klasörü, ağ sürücüsü, sunucu, buradan başla, hangi dosya, yedekler, bağlantılar, xref, son klasörler, klasörü sürükle
from: 16fbdce2
---

## Ne yapacaksınız

Bir iş için size verilen proje klasörü gibi tüm bir proje klasörünü açın ve BimCraft'ın bunu ayırt etmesine izin verin: hangi modeller var, hangi kopyalar yedek, neyin neye bağlı olduğu, hangi dosyaların hasarlı olduğu ve büyük ihtimalle hangi dosyayı açmak istediğiniz.

Her model kartının ihtiyaç duyduğu yalnızca birkaç kilobaytlık veri okunur; bu yüzden ağ sürücüsündeki veya eşitlenen bulut klasöründeki bir klasör de sorun olmaz.

## Adımlar

:::chromium
1. Soldaki {{ui:Klasör aç}} öğesine (ya da boş ekranın ortasına) tıklayın.
2. Açılan pencerede proje klasörünü seçin ve **Seç** düğmesine tıklayın (sisteminize bağlı olarak **Yükle** veya **Aç** da olabilir).
3. Tarayıcı "Site dosyaları görüntüleyebilsin mi?" diye sorduğunda **Dosyaları görüntüle** düğmesine tıklayın. Bu yalnızca sekmenin klasörü okumasına izin verir; hiçbir şey yüklenmez.
4. Durum satırı sayarken bekleyin: "Klasör listeleniyor: … dosya", ardından "Revit dosyaları denetleniyor: … / …".
:::

:::firefox
1. Soldaki {{ui:Klasör aç}} öğesine (ya da boş ekranın ortasına) tıklayın.
2. Açılan pencerede proje klasörünü seçin ve onaylayın. Firefox, sayfanın klasörün dosyalarını okuyabileceğini onaylamanızı isteyebilir; dosyalar yine bilgisayarınızda kalır.
3. Durum satırı "Klasör okunuyor: … dosya", ardından "Revit dosyaları denetleniyor: … / …" yazarken bekleyin.
:::

:::safari
1. Soldaki {{ui:Klasör aç}} öğesine (ya da boş ekranın ortasına) tıklayın.
2. Açılan pencerede proje klasörünü seçin ve **Yükle** düğmesine tıklayın. Adına rağmen hiçbir şey Mac'inizden ayrılmaz: dosyalar yalnızca sekmeye verilir.
3. Durum satırı "Klasör okunuyor: … dosya", ardından "Revit dosyaları denetleniyor: … / …" yazarken bekleyin.
:::

Klasörü {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticiniz}} içinden sayfaya **sürükleyebilirsiniz**. Sürüklenen klasör her tarayıcıda izin sorulmadan açılır.

## Ne görmelisiniz

Klasör raporu ortayı doldurur:

- Klasör adı, model, CAD çizimi, IFC modeli ve dosya sayıları ile toplam boyut.
- Bazı dosyalar eksikse veya bağlı dosyalardan bazıları klasörde yoksa kırmızı veya sarı notlar.
- {{ui:Buradan başlayın}} kutusu: BimCraft'ın açmanızı önerdiği dosya ve nedenleri.
- **Modeller**: her model için bir satır; yedekleri altında gruplanmış.
- **Bağlı ve referans verilen dosyalar**, **IFC modelleri**, **CAD çizimleri** ve **Kenara ayrılanlar** (klasörde varsa).

Soldaki {{ui:Klasör}} paneli özetler; **Sorunlar** kopyaların hepsi sağlamsa "Yok" yazar.

## Buradan başlayın kutusunu kullanın

Kutu bir dosya adı verir ve nedenini açıklar, örneğin:

- "Bu klasördeki en yeni kaydedilmiş çalışma (3 Mart 2025)."
- "*Consultant.rvt* diğer modellere bağlı, dolayısıyla düzenlenecek dosya değil, arka plan dosyası."
- "*Tower.rvt* açık seçim gibi görünüyor, ama hasarlı; son sağlam kopyası … tarihli."
- "Bu bir merkezi modeldir: Revit'te "Create New Local" ile açın ve yerel kopyada çalışın."

1. Nedenleri okuyun.
2. Bu dosyanın kartını okumak için {{ui:Kartını aç}} ya da satırını **Modeller** içinde bulmak için {{ui:Listede göster}} öğesine tıklayın.
3. Dosyaya güvenmeden önce projeyi son kez kimin üzerinde çalıştığına danışın. Kutu bunu da söyler: bu, adlardan, tarihlerden ve bağlantılardan yapılmış bir tahmindir.

## Dosyaları rapordan açın

1. Bir modelin adına tıklayarak kartını açın. Kart her bağlantıyı klasörle karşılaştırır.
2. Kartın üstündeki {{ui:Geri dön}} ve klasör adına (ya da soldaki {{ui:Klasöre dön}} öğesine) tıklayarak geri dönün.
3. **IFC modelleri** altındaki herhangi bir IFC dosyasına tıklayarak 3B'de açın.
4. **CAD çizimleri** altındaki herhangi bir DWG veya DXF dosyasına tıklayarak 2B'de açın. Bağlı çizimleri ve resimleri klasörde otomatik bulunur.

## Klasörü daha sonra yeniden açın

:::chromium
{{ui:Klasör aç}} ile ya da sürükleyerek açtığınız klasörler soldaki {{ui:Son klasörler}} altında listelenir. Klasör adına ve {{ui:Yeniden aç}} düğmesine tıklayın; klasörü yeniden seçmeden açılır. Tarayıcı yeniden başlatıldıktan sonra Chrome veya Edge bir kez daha sorar; sormaması için "Her ziyarette izin ver" seçeneğini seçin. Liste yalnızca bu tarayıcıda tutulur, hiçbir yere gönderilmez. Bir klasörü unutmak için × öğesine tıklayın.
:::

:::firefox safari
Bu tarayıcı ziyaretler arasında klasörleri hatırlayamaz. Klasörü {{ui:Klasör aç}} ile yeniden seçin ya da sürükleyip bırakın.
:::

## Sık yapılan hatalar

- **Çok büyük bir klasör seçmek.** 20.000 dosyadan fazlaysa: "Bu klasörde 20.000'den fazla dosya var. Daha küçük bir klasör seçin, örneğin tek bir proje." Tüm sürücü yerine proje klasörünü seçin.
- **Birkaç projenin üst klasörünü seçmek.** {{ui:Buradan başlayın}} kutusu o zaman projeler arasında seçim yapar. Tek bir proje seçin.
- **Revit'in kendi klasörlerinin yok sayıldığını düşünmek.** `*_backup`, `*_log` ve `Revit_temp` klasörleri bakım amaçlıdır; **Kenara ayrılanlar** altında listelenir, okunmaz.
- **Kartından modelin 3B'de açılmasını beklemek.** Proje dosyası yalnızca bir karttır. Onun IFC dışa aktarımını açın.
- **Telefonlar ve tabletler.** Birçok mobil tarayıcı hiç klasör seçemez. Bilgisayar kullanın.

Bkz. [Hasarlı kopyalar, eksik bağlantılar ve artıklar için bir klasörü denetleyin](topic:check-folder-health) ve [Klasör raporu: roller, durumlar ve bağlantılar](topic:folder-roles).
