---
title: Tuşlar ve fare
summary: BimCraft'taki her tuş, fare, dokunmatik yüzey ve dokunma işlemi; ne baktığınıza göre gruplanmış.
keywords: klavye, kısayollar, kısayol tuşları, tuşlar, fare, dokunmatik yüzey, dokunma, döndür, kaydır, yakınlaştır, gizle, izole et, geçirgen, geri al, yinele, kopyala, yapıştır, çoğalt, kaydet, sığdır, yazdırma görünümü, escape, ayarlar, çiz, duvar, kapı, pencere, plan
from: 5c6eedce
---

BimCraft'ın az kısayolu vardır. Çoğu iş fare ve panellerle yapılır. {{key:Mod}} ile yazılan kısayollar Mac'te Command, diğer yerlerde Ctrl kullanır. Bu yardımda tuşların nasıl yazıldığı için bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys).

## Her yerde

| Tuş | Ne yapar |
|---|---|
| {{key:Ctrl+Shift+F}} | Ekran modlarını döndürür: normal, tam ekran, çubuklar gizli tam ekran. Mac dahil her platformda Ctrl |
| {{key:Esc}} | Tam ekrandan çıkar |
| {{key:Mod+,}} | {{ui:Ayarlar}} öğesini açar. Bkz. [BimCraft ayarları](topic:settings) |
| {{key:Tab}} | Düğmeler, onay kutuları ve değerler arasında geçiş yapar. Her denetime klavyeden ulaşılabilir |

## 3B görünüm (IFC modelleri)

| Tuş ya da işlem | Ne yapar |
|---|---|
| {{key:F}} | Tüm modeli üç çeyrek görünümde sığdırır ({{ui:Sığdır}} ile aynı) |
| {{key:Esc}} | Seçimi temizler ya da yerleştirmeyi veya yapıştırmayı durdurur |
| Tıklama | İmlecin altındaki öğeyi seçer; boş arka plana tıklamak seçimi temizler |
| {{key:Mod}}+tıklama ya da {{key:Shift}}+tıklama | Bir öğeyi seçime ekler ya da seçimden çıkarır |
| {{key:H}} | Seçili öğeleri gizler. Bkz. [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate) |
| {{key:I}} | Yalnızca seçili öğeleri gösterir (izole eder) |
| {{key:T}} | Seçili öğeleri gösterir, diğer her şey geçirgen olur |
| {{key:Shift+H}} | Her öğeyi yeniden gösterir |
| {{ui:Yürü}} | Ardından {{key:W}} {{key:A}} {{key:S}} {{key:D}} ya da oklar yürütür, {{key:Shift}} koşturur, sürükleyerek etrafa bakılır, {{key:Esc}} durdurur. Bkz. [Modelde yürüyün](topic:walk) |
| {{key:M}} | Mesafeleri ve yüzey alanlarını ölçer. Bkz. [3B'de mesafeleri, yüzey alanlarını ve konumları ölçün](topic:measure) |
| Sol düğmeyle sürükleme | Döndürür |
| Sağ düğmeyle sürükleme | Kaydırır |
| {{key:Shift}} ya da {{key:Mod}} basılıyken sol düğmeyle sürükleme | Kaydırır (dokunmatik yüzeyde kullanışlı) |
| Tekerleği kaydırma ya da orta düğmeyle sürükleme | Yakınlaştırır |
| Dokunmatik yüzeyde iki parmakla kaydırma ya da parmakları sıkıştırma | Yakınlaştırır |
| Tek parmak (dokunma) | Döndürür; dokunma seçer |
| İki parmak (dokunma) | Parmak ayırarak yakınlaştırır, birlikte hareket ettirerek kaydırır |

| {{key:X}} | Kesit düzlemini açar ve kapatır. Bkz. [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane) |
| {{key:Shift+X}} | Seçili öğelerin etrafında kesit kutusu; kutunun boşluğu Ayarlar'dan ayarlanır |

{{ui:Üst}}, {{ui:Ön}} ve {{ui:Yan}} için tuş yoktur; düğmeleri kullanın.

## Düzenle

Aynı komutlar araç çubuğunda da bulunur: {{ui:Geri al}}, {{ui:Yinele}}, {{ui:Kopyala}}, {{ui:Yapıştır}} ve her tuşu gösteren {{ui:Daha fazla}} menüsü. Bunlar bir IFC modelinin 3B görünümünde çalışır, bir alana yazı yazarken çalışmaz. Bkz. [Kütüphane öğelerini kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

| Tuş | Ne yapar |
|---|---|
| {{key:Mod+Z}} | Son değişikliği geri alır |
| {{key:Mod+Y}} ya da {{key:Mod+Shift+Z}} | Geri almanın geri aldığını yineler |
| {{key:Mod+C}} | Seçili öğeleri kopyalar (adları ve özellikleri de metin olarak panoya gider) |
| {{key:Mod+X}} | Seçili öğeleri keser: önce kopyalar, sonra siler |
| {{key:Mod+V}} | Kopyaladığınızı yapıştırır: imleci takip eder, gideceği yere tıklayın |
| {{key:Mod+Shift+V}} | Olduğu yere yapıştır: kesildiği yerde ya da kopyalamadan sonra özgün öğelerin yanında |
| {{key:Mod+D}} | Çoğalt: seçili öğeleri kopyalar ve yapıştırmaya başlar |
| {{key:Delete}} | Seçili öğeleri, parçalarıyla ve açıklıklarıyla birlikte siler. Bkz. [Yapı öğelerini silin, kesin, kopyalayın ve yapıştırın](topic:edit-elements) |
| {{key:Mod+A}} | Gösterilen her öğeyi seçer |
| {{key:Esc}} | Seçimi kaldırır |

Sayfada metin seçiliyken {{key:Mod+C}} her zamanki gibi o metni kopyalar.

## Plan görünümü (Çiz)

Bunlar {{ui:Çiz}} açıkken ve bir alana yazı yazmıyorken çalışır. Bkz. [Duvar çizme](topic:draw-walls) ve [Kapılar ve pencereler](topic:doors-and-windows).

| Tuş ya da işlem | Ne yapar |
|---|---|
| {{key:V}} | {{ui:Seç}} |
| {{key:W}} | {{ui:Duvar}} |
| {{key:D}} | {{ui:Kapı}} |
| {{key:N}} | {{ui:Pencere}} |
| {{key:H}} | {{ui:Kapı}} ya da {{ui:Pencere}} seçiliyken: menteşeler diğer uçta |
| Bir duvar çizerken {{key:Shift}} | Duvarı 0°, 90°, 180° ya da 270°'de tutar |
| Rakamlar ve ayak ile inç işaretleri (`'` ve `"`) | {{ui:Uzunluk}} kutusuna bir uzunluk yazmaya başlar; {{key:Enter}} bunu kullanır |
| {{key:Enter}}, {{key:Esc}}, sağ tıklama ya da çift tıklama | Çizdiğiniz duvarı bitirir; {{key:Esc}} bir kez daha basılırsa {{ui:Seç}} moduna döner |
| {{key:Delete}} | Seçili duvarları, kapıları ve pencereleri siler; kalan duvarlar yeniden birleşir |
| İmleç plandayken {{key:F}} | Planı sığdırır |
| Tekerleği kaydırma | İmlecin olduğu yere göre yakınlaştırır |
| Orta ya da sağ düğmeyle sürükleme, ya da {{key:Space}} basılı tutup sürükleme | Kaydırır; {{ui:Seç}} açıkken düz sürükleme de kaydırır |
| {{ui:Seç}} ile kapıyı ya da pencereyi sürükleme | Duvarı boyunca ya da başka bir duvara taşır |
| İki parmak (dokunma) | Parmak ayırarak yakınlaştırır, birlikte hareket ettirerek kaydırır |

## Kütüphane öğelerini yerleştirme ve yapıştırma

| Tuş | Ne yapar |
|---|---|
| {{key:R}} | Öğeyi 90° döndürür |
| {{key:Tab}} | Duvara yapışmayı açar ve kapatır: öğenin arkası en yakın duvara dayanır |
| **X, Y (mm)** alanındayken {{key:Enter}} | Yazılan konuma yerleştirir |
| {{key:Esc}} | Yerleştirmeyi ya da yapıştırmayı durdurur |

## IFC değerlerini düzenleme

| Tuş | Ne yapar |
|---|---|
| {{key:Enter}} | Yazdığınız değeri korur |
| {{key:Esc}} | İptal eder ve eski değeri geri koyar |
| Başka yere tıklama | Yazdığınız değeri korur |
| {{key:Mod+Z}} | Son değişikliği geri alır. Yalnızca kaydedilmemiş değişiklikleriniz varken ve bir alana yazı yazmıyorken |
| {{key:Mod+Y}} | Geri almanın geri aldığını yineler |
| {{key:Mod+S}} | IFC olarak kaydeder. Yalnızca kaydedilmemiş değişiklikleriniz varken; aksi halde tarayıcının kendi kaydetme komutu açılır |

Yalnızca klavyeyle düzenlemek için bir değer vurgulanana kadar {{key:Tab}} tuşuna basın, sonra yazmaya başlamak için {{key:Enter}} tuşuna basın.

## 2B çizimler (DWG ve DXF)

| Tuş ya da işlem | Ne yapar |
|---|---|
| {{key:F}} | Çizimi ya da sayfayı sığdırır |
| {{key:P}} | Yazdırma görünümünü açar ve kapatır |
| Çift tıklama | Sığdırır |
| Herhangi bir düğmeyle sürükleme | Kaydırır |
| Tekerleği kaydırma | İmlecin yerinde yakınlaştırır |
| Dokunmatik yüzeyde iki parmakla kaydırma ya da parmakları sıkıştırma | İmlecin yerinde yakınlaştırır. İki parmakla kaydırma kaydırmaz |
| Tek parmak (dokunma) | Kaydırır. Çizimler için parmak ayırarak yakınlaştırma henüz yapılmadı |

## Çizimleri 3B'de görme

| Tuş ya da işlem | Ne yapar |
|---|---|
| {{key:3}} | 3B'yi açar ve kapatır (2B görünümde de) |
| {{key:F}} | Sınırlar: tüm çizim |
| Orta ya da sol düğmeyle sürükleme | Döndürür |
| Sağ düğmeyle sürükleme ya da {{key:Shift}} basılı tutup sürükleme | Kaydırır |
| Tekerleği kaydırma | İmlecin altındakine doğru yakınlaştırır |
| Dokunmatik yüzeyde iki parmakla kaydırma | Döndürür; {{key:Shift}} ile kaydırır |
| Dokunmatik yüzeyde parmakları sıkıştırma | Yakınlaştırır |
| Tek parmak (dokunma) | Döndürür |
| İki parmak (dokunma) | Parmak ayırarak yakınlaştırır, birlikte hareket ettirerek kaydırır |

Bir alana yazı yazarken, ekipman listesi gösterilirken ya da {{key:Mod}} ya da {{key:Alt}} basılıyken {{key:F}}, {{key:P}} ve {{key:3}} hiçbir şey yapmaz.

## Dosyalar

| İşlem | Ne yapar |
|---|---|
| Sayfaya bir dosya sürükleme | Açar |
| Sayfaya bir klasör sürükleme | İzin istemeden proje klasörü olarak açar |
