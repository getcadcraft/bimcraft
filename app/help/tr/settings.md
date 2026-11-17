---
title: BimCraft ayarları
summary: Odaların ve mekânların gösterilip gösterilmeyeceğini, kenarların çizilip çizilmeyeceğini ve modelin hangi görünümle açılacağını seçin; duvar yakalama açık olarak yerleştirmeye başlayın.
keywords: ayarlar, tercihler, seçenekler, mekânlar, odalar, ifcspace, kenarlar, çizgiler, performans, büyük model, açılış görünümü, kamera, üst görünüm, duvar yakalama, yakalama
from: 4416e64f
---

{{ui:Ayarlar}} öğesini uygulama çubuğundaki dişli simgesiyle ya da {{key:Mod+,}} tuşuyla açın. İlk sekme olan {{ui:BimCraft}}, bu uygulamaya ait ayarları içerir; {{ui:Genel}} ise tüm CadCraft uygulamalarının ortak kullandığı ayarları içerir (tema, araç çubuğu, paneller). BimCraft'ın ayarları yalnızca bu uygulamada geçerlidir: burada değiştirirsiniz ve bu tarayıcı bunları hatırlar. İletişim kutusunun altındaki {{ui:BimCraft ayarlarını sıfırla}} onları ve ortak olanları başlangıç değerlerine döndürür.

## Menüler, tuşlar ve fare

Menü stili (BimCraft'ın kendi araç çubuğu, bir ev tasarım menü çubuğu, bir BIM şeridi ya da bir çizim komut satırı), kendi tuşlarınız ve menüleriniz, fare tekerleği ve fare düğmelerinin ne yaptığı. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).

## Bir model açıldığında

- **Odaları ve mekânları göster** (başlangıçta kapalı): odalar ve mekânlar arkasındaki duvarları gizleyebilen saydam kutulardır, bu yüzden başlangıçta gizlenirler. Modelin üstündeki {{ui:Mekânlar}} düğmesi açık model için yine de açıp kapatır.
- **Kenarlar**: {{ui:Kenarlar açık}} (başlangıç) çizim görünümünü veren kenar çizgilerini çizer. {{ui:Yalnızca küçük modeller}} bunları yalnızca 300,000 üçgenin altındaki modeller için çizer; bu, büyük modellerin döndürülmesini hızlı tutar. {{ui:Kenarlar kapalı}} her modeli kenarsız başlatır. {{ui:Kenarlar}} düğmesi açık model için yine de açıp kapatır. 1.5 milyon üçgenin üzerinde kenarlar her zaman kapalıdır.

## Çizimler şu şekilde açılır

Bir DWG ya da DXF çizimi ilk kez nasıl görünür: {{ui:3B (en hızlı)}} (başlangıç) büyük bir çizimi bile hızlıca çizer ya da {{ui:Model (2D)}} düz model uzayı görünümünü açar. Çizimin üstündeki sekmeler {{ui:Model}}, {{ui:Sayfalar}} ve {{ui:3B}} arasında her zaman geçiş yapar. Model uzayında hiçbir şey olmayan bir çizim ya da 3B gösteremeyen bir tarayıcı her zaman 2B açılır.

## Açılış görünümü

Bir modelin açıldığı kamera: {{ui:Sığdır}} (başlangıç, bir köşeden bütün model), {{ui:Üst}}, {{ui:Ön}} veya {{ui:Yan}}. Modelin üstündeki düğmeler görünümü istediğiniz zaman değiştirir.

**Arsasında döndürülmüş bir bina**: birçok model binayı dosyanın eksenlerine göre açılı olarak gelir (ölçüm veya ortak koordinatlar üzerinde). {{ui:Yapıya dik}} (başlangıç) böyle bir binayı dik gösterir: {{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}, görünüm küpünün yüzleri ve her yeni kesit kendi duvarlarını izler; görünüm küpünün pusulası yine modelin kuzeyini gösterir. {{ui:Arsadaki gibi}} dosyanın eksenlerini korur. Duvarları eksenler boyunca uzanan bir bina her iki durumda da aynı görünür.

## Kütüphane öğelerini yerleştirme

**Duvar yakalama açık başlasın** (başlangıçta kapalı): bir kütüphane öğesini yerleştirmeye ya da yapıştırmaya başlandığında arkası en yakın duvara yapışır ve odaya bakar. {{key:Tab}} tuşu ya da yerleştirme çubuğundaki {{ui:Duvara yapıştır}} bunu o an için kapatır. Duvarı olmayan bir kat bunsuz başlar.

## Kesit kutusu

{{ui:Seçilenin etrafındaki boşluk}}, {{ui:Seçilenin etrafına kesit kutusu}} komutunun seçili öğelerin her yanında ne kadar boşluk bırakacağını gösterir; milimetre cinsinden: başlangıçta 300, en çok 5000. Bkz. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane).

## Konum

{{ui:Enlem ve boylam şu sistemde:}} {{ui:Ölçüm}} › {{ui:Konum}} öğesinin enlem ve boylamları hangi sistemde vereceğini seçer: WGS 84 (EPSG:4326, başlangıç; GPS ve web haritalarının kullandığı gibi), {{ui:Dosyanın kendi datum'u}} ya da ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 ve CGCS2000'den biri. Dosyanın kendi harita sistemi ve datum'u da her zaman gösterilir. Bkz. [3B'de mesafeleri, yüzey alanlarını ve konumları ölçün](topic:measure).

## Köşe göstergesi

3B görünümlerin sağ alt köşesinde ne olduğu (bir IFC modeli ve 3B'ye geçirilmiş bir çizim): {{ui:Görünüm küpü}} (başlangıç), {{ui:Eksen simgesi}} (küçük bir X, Y ve Z) ya da {{ui:Yok}}. Değişiklik hemen uygulanır. 2B çizim görünümünde hiçbiri gösterilmez.

Görünüm küpünde bir yüze, bir kenara ya da bir köşeye tıklayarak o taraftan bakın; küpü sürükleyerek yörüngede dönün, halkayı sürükleyerek çevirin ve başlangıç görünümü için eve tıklayın.

## Sorunlardaki adınız

Oturum açıkken sorunlar hesabınızın adını taşır ve BimCraft hiçbir şey sormaz: bu bölüm {{ui:Hesabınızdan (<name>)}} gösterir. {{ui:Başka bir ad kullan}} farklı bir ad için bir kutu açar; siz {{ui:Hesap adımı kullan}} seçene kadar bu ad geçerlidir. Oturum kapalıyken sorun formu her zamanki gibi bir ad ister. Bkz. [Sorunlar ve BCF dosyaları](topic:issues-bcf).

## Asistanlar

**Yapay zekâ asistanlarının ve betiklerin BimCraft'ı kullanmasına izin verin** (başlangıçta kapalı): bilgisayarınızdaki bir asistanın CadCraft Studio üzerinden açık modele erişmesini sağlar: **Oku** öğeleri bulur ve özelliklerini okur, **Görünümü değiştir** onları izole eder, gizler ve gösterir. **Etkinlik** çağrıları listeler. Bkz. [Bir yapay zekâ asistanıyla modelinizde çalışın](topic:assistants).

:::note
Diğer ayarlar bir model açıldığında ya da yerleştirme başladığında uygulanır. Zaten açık olan bir model, araç çubuğu düğmelerini kullanana ya da modeli yeniden açana kadar görünümünü korur.
:::

## İlgili

- [Kütüphane öğelerini kopyalayın, yapıştırın ve çoğaltın](topic:copy-paste)
- [Kütüphaneden ekipman ve mobilya yerleştirin](topic:place-from-library)
- [BimCraft ekranı](topic:workspace)
- [Bir yapay zekâ asistanıyla modelinizde çalışın](topic:assistants)
