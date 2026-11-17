---
title: Nokta bulutunu modelin yanında gösterin
summary: Bir lazer taramasını (LAS, LAZ, E57, PLY, PCD, PTX, PTS ya da XYZ) tek başına ya da bir IFC modeliyle birlikte 3B görünümde açın, renklendirin, içinden ince bir kesit alın, noktalarına kadar ölçün ve yapılmış hâle ait çizgileri izlemek için çizim uygulamasına aktarın.
keywords: nokta bulutu, lazer tarama, tarama, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, yapılmış hâl, ölçü alma, kayıt, kesit, plan kesiti, yakalama, ölçüm, izleme, taramadan BIM'e
from: d0a3e740
---

## Ne yaparsınız

Bir binanın lazer taramasını modelinin yanında görün: yapılanın tasarımla uyuşup uyuşmadığını denetleyin, taranmış noktalar arasını ölçün ve duvarları, kapıları ve kolonları okumak için ince bir kesit alın.

## Adımlar

1. Bulutu açın: bir `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ya da `.xyz` dosyasını {{ui:Açık}} ile açın ya da sayfaya bırakın (her birinin ne getirdiğini ve bir tarayıcının kendi yazılımından neyi dışa aktarmanız gerektiğini için nokta bulutu biçimleri konusuna bakın). Bir model açıksa bulut 3B görünümde modele katılır; bulutu açmak modeli ya da kaydedilmemiş değişikliklerini asla kapatmaz. Model yoksa bulut tek başına açılır.
2. Bulut çubuğu araç çubuğunun altında belirir. Kaç noktanın gösterildiğini ve dosyada kaç nokta olduğunu söyler.
3. {{ui:Renge göre}} seçin: dosyanın kendi renkleri (tarayıcı bunları sakladıysa), {{ui:Yükseklik}}, {{ui:Yoğunluk}}, {{ui:Sınıf}} (zemin, bitki örtüsü ve bina gibi LiDAR sınıfları) ya da {{ui:Tek renk}}. {{ui:Boyut}} noktaları büyütür ya da küçültür.
4. {{ui:Kesit}} altında {{ui:Plan}} tıklayın; bu, yalnızca en alçak noktanın 1.2 m üstündeki ince bir bandı üstten görünecek şekilde tutar: duvarlar, kapı açıklıkları ve kolonlar bir kat planı gibi okunur. {{ui:Ön}} ve {{ui:Yan}}, cepheler ve kesitler için dik bantlar keser. Bandı {{ui:Şurada}} ile taşıyın ve {{ui:Kalınlık}} (metre) değerini değiştirin. {{ui:Kapalı}} tüm bulutu yeniden gösterir.
5. Araç çubuğunda {{ui:Ölçüm}} tıklayın. İşaretçi bulutun noktalarına yapışır (etiket "nokta bulutu" yazar); böylece kesit içinde duvardan duvara ya da bir model öğesinden taramaya kadar ölçebilirsiniz. Erişim içindeki bir model köşesi ya da kenarı yine öncelik kazanır.
6. {{ui:Ölçüm}} › {{ui:Konum}} ile bir bulut noktası, dosya bir koordinat sistemi belirtiyorsa, bulutun kendi koordinat sisteminden enlem ve boylamını verir.
7. {{ui:Gizle}} bulutu bir an için gizler; {{ui:Kaldır}} onu çıkarır. {{ui:Göster}} › {{ui:Nokta bulutu}} çubuğu gizler ya da gösterir.

## Bulutun nereye gittiği

{{ui:Yerleştir}} çubukta, bulutun modele nasıl hizalandığını söyler:

- **Model koordinatları**: bulutun sayıları modelin kendi sayılarıdır (tasarımın koordinatlarına kaydedilmiş bir tarama).
- **Harita koordinatları**: model bir harita dönüşümüne (IfcMapConversion) sahiptir ve bulut aynı projeksiyonlu sistemdedir: bulut bu dönüşümle yerleştirilir. İkisi farklı sistemler adlandırıyorsa durum satırı bunu söyler.
- **Modelin ortasına göre**: ikisi de bulutu modele yakın koymazsa, ortası modelin ortasına, en alt noktası modelin tabanına konur. Başka bir seçenek seçerek bunu geçersiz kılabilirsiniz.

Dosya birimlerini belirtmiyorsa BimCraft metre okur ve çubukta {{ui:Birimler}} seçeneğini sunar.

## Yapılmış hâle ait çizgileri izleyin

Bulutu yeni bir sekmede çizim uygulamasına aktarmak için {{ui:CadCraft'ta izle}} tıklayın. Orada çizimin altında açılır; bir kat kesiti ve nesne yakalama ile taramanın üzerine duvarları çizebilirsiniz. Bkz. CadCraft'ın nokta bulutları konusu.

## Kaç nokta

Bir tarama yüz milyonlarca nokta içerebilir. BimCraft dosyanın her noktasını bir kez okur ve çizmek için eşit bir pay tutar: çubuktaki {{ui:Göster}} kaç tanesinin tutulacağını belirler (1, 2, 5 ya da 10 milyon). Daha fazla nokta daha fazla bellek ve daha hızlı bir ekran kartı gerektirir. LiDAR sınıfı başına sayımlar, dosyadaki her noktaya göredir.

:::note
Dosyalar bu bilgisayarda okunur; hiçbir şey yüklenmez. LAS 1.0–1.4 ve LAZ okunur (LAZ dosyaları en fazla 1 GB, okunurken bellekte tutulur); E57 dosyaları şimdilik en fazla 6 milyon nokta ve 512 MB (daha büyük taramalar için LAS ya da LAZ dışa aktarın); PLY, PCD ve PTX tamamen okunur; metin bulutları `x y z` biçimindedir, varsa renk (`r g b`) ve yoğunluk sütunlarıyla.
:::

## Birkaç tarama

Farklı konumlardan alınmış taramalar tek bir çerçeveye kaydedilebilir, ICP ile iyileştirilebilir ve tek bir LAS ya da E57 olarak dışa aktarılabilir: bkz. [Birkaç taramayı tek bir çerçeveye kaydedin](topic:register-scans).
