---
title: BimCraft'a başlarken
summary: BimCraft'ın bugün ne yaptığı, ilk modelinizi nasıl açacağınız, 3B'de nasıl bakacağınız, bir değeri nasıl değiştireceğiniz ve bir kopyayı nasıl kaydedeceğiniz.
keywords: başla, ilk çalıştırma, aç, ifc, rvt, dwg, hızlı başlangıç, giriş, görüntüleyici, bim
from: fc2dea19
---

BimCraft, CadCraft ailesinin yapı modeli uygulamasıdır. Bu sürümde yapı dosyalarını **açar, okur ve inceler**, ayrıca **IFC modellerindeki verileri düzenler**. Henüz yeni öğe çizmez veya modellemez. Onu, bir IFC dosyasındaki adları, etiketleri ve özellik değerlerini düzeltmenize de olanak veren bir model görüntüleyici ve denetleyici olarak düşünün.

Neleri açar:

| Dosya | Ne elde edersiniz |
|---|---|
| IFC (`.ifc`) | Modelin tamamı 3B olarak: yörünge, katlar, öğe özellikleri ve adların ile özellik değerlerinin düzenlenmesi |
| Proje ve aile dosyaları (`.rvt`, `.rfa`, `.rte`, `.rft`) | Bir dosya kartı: kaydedildiği sürüm, proje bilgileri, önizleme resmi ve bağlı dosyalar. 3B yok. |
| DWG ve DXF | Çizim 2B olarak: model uzayı ve her sayfa, katmanlar, bağlı çizimler, çıktı görünümü ve etiketli yemek hizmeti çizimleri için bir ekipman listesi |
| Bir proje klasörü | Klasördeki her modelin raporu: yedekler, bağlantılar, hasarlı kopyalar ve hangi dosyayla başlanacağına dair bir öneri |

Her şey tarayıcınızda, bilgisayarınızda gerçekleşir. **Hiçbir şey yüklenmez.** Ayrıntılar için bkz. [BimCraft'ın açtığı ve kaydettiği dosyalar](topic:files).

## BimCraft'ı açın

1. BimCraft'ı güncel bir tarayıcıda açın. Chrome, Edge, Firefox ve Safari'nin hepsi çalışır; [Tarayıcılar, cihazlar ve bellek](topic:platforms) farkları listeler.
2. "Bir yapı modeli açın." yazan boş ekranı bekleyin.

:::note
BimCraft tarayıcıda ve masaüstünde diğer uygulamalarla birlikte CadCraft Studio içinde çalışır. Bulutta kaydetme henüz mevcut değil: dosyaları bilgisayarınızdan açar, kopyaları yine oraya kaydedersiniz.
:::

## İlk modelinizi açın

BimCraft'ın ne yaptığını görmenin en hızlı yolu bir IFC dosyasıdır.

1. Ekranın ortasındaki {{ui:Dosya seçin}} düğmesine tıklayın.
2. {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticinizde}} bir `.ifc` dosyası seçin ve onaylayın.
3. Ekranın altındaki durum satırı önce "IFC motoru başlatılıyor…", ardından "Geometri oluşturuluyor" diyene kadar bekleyin.

Ortada modeli 3B olarak, solda bir {{ui:Dosya}} panelini ve bir {{ui:Katlar}} listesini, sağda ise boş bir {{ui:Özellikler}} panelini görmelisiniz. Durum satırı "Açıldı" ve öğe sayısıyla biter.

:::tip
Bir dosyayı {{pick:mac=Finder|windows=Dosya Gezgini|linux=dosya yöneticisinden}} doğrudan sayfaya da sürükleyebilirsiniz. Sürüklerken ekranda "Açmak için bırakın" görünür.
:::

:::offline
IFC motoru, BimCraft çevrimdışı kullanım için kaydedilmediyse bir IFC modelini ilk açtığınızda siteden yüklenir. DWG ve DXF çizimleri, proje dosyaları ve klasörler ek bir şey gerektirmez: okuyucuları uygulamanın parçasıdır. Uygulama çubuğundaki düğme {{ui:Çevrimdışı hazır}} diyorsa her şey çevrimdışı açılır. Demiyorsa, bu sekmede zaten bir IFC modeli açılmadıysa, yeniden bağlanana kadar IFC modelleri açılmaz. Bkz. [Çevrimiçi ve çevrimdışı](topic:online-offline).
:::

:::online
Bağlantısız bir yere mi gidiyorsunuz? Uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın ve {{ui:Çevrimdışı hazır}} yazısını bekleyin. Kaydedilen kopya (yaklaşık 11 MB) IFC motorunu içerir. Bkz. [Çevrimdışı çalışma](common:offline).
:::

## Etrafa bakın

:::mouse
1. Modelin etrafında dönmek için sol fare düğmesiyle sürükleyin.
2. Yakınlaştırmak için tekerleği kaydırın.
3. Kaydırmak (pan) için sağ fare düğmesiyle sürükleyin. Mac izleme dörtgeninde bunun yerine {{key:Shift}} tuşunu basılı tutup sürükleyin.
4. Modelin tamamını yeniden görmek için {{key:F}} tuşuna basın veya {{ui:Sığdır}} düğmesine tıklayın.
:::

:::touch
1. Dönmek için tek parmakla sürükleyin.
2. Yakınlaştırmak için iki parmakla sıkıştırın, kaydırmak için iki parmağı birlikte hareket ettirin.
3. Modelin tamamını yeniden görmek için {{ui:Sığdır}} düğmesine dokunun.
:::

## Gerçek bir iş yapın: bir etiketi düzeltin

1. Modelde bir duvara, kapıya veya herhangi bir öğeye tıklayın. Mavi olur ve özellikleri sağda görünür.
2. {{ui:Özellikler}} panelinde **Etiket** yanındaki değere tıklayın.
3. Yeni etiketi yazın ve {{key:Enter}} tuşuna basın.
4. Solda açılan {{ui:Değişiklikler}} bölümüne bakın: değişikliğiniz eski ve yeni değerle birlikte listelenir.

## Bir kopya kaydedin

1. {{ui:Değişiklikler}} bölümünde {{ui:IFC olarak farklı kaydet}} düğmesine tıklayın veya {{key:Mod+S}} tuşlarına basın.
2. Yeni dosyayı indirilenler klasörünüzde bulun. Adı, özgün adın sonuna " (edited)" eklenmiş halidir; örneğin `Clinic (edited).ifc`.

Özgün dosyanız hiçbir zaman değiştirilmez. [IFC özelliklerini değiştirme ve düzenlenmiş bir kopya kaydetme](topic:edit-ifc-properties) düzenlemeyi ayrıntılı anlatır.

## Sonraki adım

- [BimCraft ekranı](topic:workspace): her panel adıyla.
- [Diğer BIM ve çizim programlarından geliyorsanız](topic:coming-from): Revit'e alışkınsanız neyin farklı hissettireceği.
- [Bir proje klasörünün tamamını açma](topic:open-project-folder): BimCraft'ı bir proje klasörüne yöneltin ve dosyaları onun ayıklamasına izin verin.
- [Bir DWG veya DXF çizimini görüntüleme](topic:view-dwg): sayfalar, katmanlar ve çıktı görünümü.
