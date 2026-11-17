---
title: Kütüphaneden ekipman ve mobilya yerleştirin
summary: Kütüphanede, bir dosyada ya da açık çizimde bir öğe bulun; bir IFC modelinin bir katına hayalet önizlemesiyle yerleştirin, döndürün, bir duvara yapıştırın ve kaydedin.
keywords: taşı, döndür, sürükle, kütüphane, librarycraft, yerleştir, ekle, ekipman, mobilya, blok, aile, öğe, katalog, içerik, kcl, csv, gltf, obj, rfa, dwg, ifc tipi
from: 3dad5d4b
---

## Neler yapacaksınız

Bir kütüphane öğesini bir IFC modeline koyun: bir lavabo, bir çalışma masası, bir sandalye. BimCraft onu tipi olan uygun bir IFC öğesi olarak yazar; böylece aynı öğenin her kopyası tek bir geometri kümesini paylaşır ve verileri, öğe numarası ve lisansı onunla birlikte gider.

## Adımlar

1. Bir IFC modeli açın.
2. Sağdaki {{ui:Özellikler}}'in yanındaki {{ui:Kütüphane}} sekmesine ya da modelin üstündeki araç çubuğundaki {{ui:Kütüphane}}'ye tıklayın.
3. Bir kaynak seçin:
   - **Yerleşik semboller**: BimCraft ile birlikte gelen, Apache-2.0 altında, çevrimdışı kullanılabilen genel tesisat plan sembolleri. İnşaattan önce boyutlarını kontrol edin. Elektrik plan sembolleri ve IFC elektrik cihazları için **Derleme › Elektrik**'i kullanın.
   - **Kütüphane**: bu sitedeki CadCraft kütüphanesi. Herkese açık öğeler oturum açmayı gerektirmez.
   - **Bu dosya**: açık bir DWG ya da DXF çizimindeki bloklar. Görünürlük durumları olan bir dinamik blok her durum için bir kez sunulur, "Eviye: Çift gözlü" gibi bir adla, yalnızca o durumun nesneleriyle çizilmiş olarak.
   - **Dosyalar…**: bilgisayarınızdaki bir DWG, DXF, IFC, glTF/GLB, OBJ, RFA ya da CSV dosyası. Bu sekmede okunur; hiçbir şey yüklenmez.
   - **Diğer kaynaklar**: aynı kaynak biçimini kullanan başka bir kütüphane. Adresini bir kez ekleyin; bu tarayıcıda saklanır.
4. Bir kategori arayın ya da seçin, sonra bir karta tıklayın. Kart bir plan önizlemesini, adı, üreticiyi ve modeli, lisansı ve sürümü gösterir.
5. {{ui:Plana yerleştir}}'e tıklayın (Plan görünümünde) ya da {{ui:Modele yerleştir}}'e (3B görünümde). {{ui:Böl}} görünümünde, plan ve 3B görünümün ikisi de gösterildiğinde düğme bir bölünmüş düğmedir: ana eylemi {{ui:Plana yerleştir}}'dir ve sağ ucundaki ok {{ui:Modele yerleştir}} içeren bir menü açar. Ya da kartı, ya da öğenin ayrıntılarındaki resmi, plana ya da 3B görünüme sürükleyin: bıraktığınız yere yerleştirilir. Kalem ya da parmakla kartı bir an basılı tutun, sonra sürükleyin.
6. Yerleştirme çubuğunda katı seçin. 3B görünümde yerleştirirken üstündeki katlar yerleştirme sırasında gizlenir ve görünüm üste döner; planda plan zaten o katı gösterir. Planın yalnızca {{ui:Modele yerleştir}}'i seçmesi 3B görünümü yanına getirir.
7. Modelin üzerinde imleci gezdirin: şeffaf bir kutu öğenin nereye gideceğini gösterir.
8. 90° döndürmek için {{key:R}}'ye basın. Arkasını en yakın duvara dayamak, odaya bakacak şekilde, için {{key:Tab}} (ya da {{ui:Duvara yapıştır}}) tuşuna basın.
9. Yerleştirmek için tıklayın. Ya da **X, Y (mm)** alanına konumu yazın, örneğin `1200, 3400`, ve {{key:Enter}} tuşuna basın.

Tavandan asılan bir ışık ya da başka bir şey için **Montaj**'ı **Tavanda** olarak ayarlayın. Öğenin üstü o noktada tavanın altına oturur (tavan yoksa katın yüksekliğine). Plan görünümünde bir tavan planı varken **Montaj** **Tavanda** ile başlar.

10. Tek soruyu yanıtlayın: **öğe numarası** (bir sonraki boş numara doldurulur), miktar ve bir not. {{key:Enter}} tuşuna basın.
11. Daha fazla yerleştirin ya da durdurmak için {{key:Esc}} tuşuna basın.
12. Düzenlenmiş kopyayı indirmek için {{ui:IFC olarak farklı kaydet}}'e tıklayın.

## Plan ya da model

Kütüphanenin yerleştirme düğmesi, bulunduğunuz görünümü izler ve görünümü değiştirdiğinizde hemen değişir ({{ui:Plan}}, {{ui:Böl}} ve {{ui:3B}} düğmeleri, klavye, bir dosya açmak). Plan tek bir düğme gösterir, {{ui:Plana yerleştir}}; 3B tek bir düğme gösterir, {{ui:Modele yerleştir}}; Böl, bölünmüş düğmeyi gösterir: ana eylem {{ui:Plana yerleştir}}, menüsünde {{ui:Modele yerleştir}}. İkisi de aynı yerleştirme çubuğunu kullanır ve aynı IFC öğesini yazar: imleç biri için plan görünümünde, diğeri için 3B görünümde çalışır. Durdurmak için istediğiniz zaman {{key:Esc}} tuşuna basın.

Kartı sürüklemenin kendi tuşu yoktur: bölünmüş düğme ya da düz düğme, klavyeyle aynı şeyi yapar.

## Yerleştirilmiş bir öğeyi taşıyın ya da döndürün

{{ui:Çiz}} açıkken öğeyi planda seçin. Ekleme noktasında bir kare tutamaç ve yanında yuvarlak bir tutamaç görünür.

- Öğeyi ya da kare tutamacını sürükleyerek taşıyın. Duvar aracı gibi yapışır (duvar uçları ve yüzleri); {{key:Shift}} onu eski yerine dik tutar.
- Yuvarlak tutamacı 15° adımlarla döndürmek için sürükleyin. 1° adımlar için {{key:Shift}} basılı tutun.
- 90° döndürmek için {{key:R}}'ye basın.
- **Özellikler**'de (3B görünümde de), **X**, **Y** ve **Döndürme (°)** yazın ya da **90° döndür**'e tıklayın.

Her taşıma tek bir geri alma adımıdır ve Canlı ekip çalışmasında iletilir. Öğe, öğe numarasını, kütüphane verisini ve kat üstündeki yüksekliğini korur. Henüz yapılmadı: 3B görünümde sürükleme.

## Ne görmelisiniz

- Modeldeki öğe, seçili, sağda özellikleriyle: lisans ve atıfla bir **Kütüphane öğesi** kutusu ve `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` kümeleri ve etiketli çizimlerden gelen öğeler için `CadCraft_SourceAttributes`.
- Değişiklik listesinde "Yerleştirildi: *öğe* (öğe *n*)". {{key:Mod+Z}} geri alır.
- Durum satırı: "*öğe*, öğe *n* olarak yerleştirildi."

## İyi bilinmesi gerekenler

- Bazı öğeler birkaç boyut ya da seçenekte gelir: kartta bir **Varyant** seçimi olur ve seçtiğiniz yerleştirilir. Bkz. [Varyantları olan bir kütüphane öğesini yerleştirin ve değiştirin](topic:library-variants).
- 3B gövdesi olmayan bir öğe (2B bir sembol) bir yedek kutuyla yerleştirilir; sorulduğunda yüksekliğini verirsiniz.
- Daha fazlası için yerleştirilmiş bir öğeyi seçip {{ui:Kopyala}} ve {{ui:Yapıştır}} kullanın ya da {{key:Mod+D}}. Bkz. [Kütüphane öğelerini kopyalayın, yapıştırın ve çoğaltın](topic:copy-paste).
- Her yerleştirmede duvar yakalamanın açık başlamasını istiyorsanız [BimCraft ayarları](topic:settings) içinde **Duvar yakalamayla başla** seçeneğini açın.
- Uzunluklar, modelin kendi birimlerine dönüştürülür, hangi birimler olursa olsun.
- **Entourage** (ağaçlar, çalılar, insanlar, arabalar) da kütüphanededir: "ağaç", "insan" ya da "araba" araması yapın. Bunlar CadCraft (CC0) tarafından çizilir ve yerleştirildiklerinde renklerini korurlar (gövde kahverengi, yapraklar yeşil, arabanın camları geçirgen); BimCraft'ta ve diğer BIM programlarında. [Render edilmiş resimlerde](topic:render) görünürler.
- Bir IFC2X3 dosyasında gövde bir faset katı olarak, IFC4'te üçgenlenmiş bir yüz kümesi olarak yazılır. İkisi de diğer IFC araçlarında açılır.
- Bir çizim (DWG ya da DXF) burada kaydedilemez; bu yüzden öğeler yalnızca IFC modellerine yerleştirilir. Bir çizimde blokların ne olacağını görmek için **Bu dosya**'yı kullanın.

## Öğeleriniz kendi dilinizde

Bir öğe adını, açıklamasını ve tipini başka dillerde de taşıyabilir. BimCraft'ın ayarlandığı dilde (Ayarlar › Genel › Dil) bunlar varsa, öğenin sayfası bunları gösterir; altında üreticinin verdiği ad yer alır. **Yerleştir**, dilinizdeki adı modele yazar; böylece {{ui:Ekipman}} listesi onu bu şekilde listeler. Öğe yine aynı öğedir: güncelleme kontrolü ve değiştirme öğenin kendisine göre yapılır, asla adına göre yapılmaz. Çevirisi olmayan öğeler kendi sözcüklerini korur.

## Sık yapılan hatalar

- **Yerleştirme düğmesi yok.** Açık bir IFC modeli yok. Önce bir tane açın.
- **Hayalet, imleci izlemiyor.** İmleç modelin alanının dışında ya da kat düzlemi görünümde değil. {{ui:Üst}}'e tıklayın.
- **{{ui:Duvara yapıştır}} duvar olmadığını söylüyor.** Katta IFC'de duvar yok (bazı dışa aktarımlar duvarları başka bir kata koyar). O katı seçin ya da X ve Y yazın.
- **Bir dosyanın öğeleri yanlış boyutta.** Dosyanın birimleri yok ya da yanlış birimleri söylüyor. {{ui:Dosyalar…}}'da birimleri seçin ve yeniden okuyun.

:::tip
Aynı öğeyi iki kez yerleştirmek bir IFC tipini paylaşır; bu yüzden kırk sandalyeli bir model sandalyeyi bir kez saklar.
:::
