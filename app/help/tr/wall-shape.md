---
title: Duvarı şekillendirin: bağlama, profil, eğim ve açıklıklar
summary: Bir duvarın üstünü bir çatıya, zemine ya da tavana bağlayın, kendi yan görünüş konturunu verin, eğdirin ya da bir kapı ya da pencere olmadan açıklık açın; Özellikler'de, bir görünüşte ya da kesitte, duvarın kendi yüz görünümünde ya da 3B'de; her biri tek bir geri alma adımıdır.
keywords: bağla, üste bağla, tabana bağla, çatı, döşeme, tavan, alınlık, profil, profili düzenle, görünüş konturu, basamaklı, parapet, eğim, eğik, yatık, eğdir, konik, çift eğim, açıklık, duvar açıklığı, delik, geçiş, kapısız, tutamaç, görünüş, kesit, 3B, yüz görünümü, eğri duvar, kopya
from: f558b269
---

## Ne yapacaksınız

Bir duvarın şeklini planının üstünde ve altında değiştirin: üstü bir çatıyı, döşeme plağını ya da tavanı izleyebilir, yandan görülen kendi konturu olabilir, eğilebilir ve bir kapı ya da pencere olmadan açıklıkları olabilir. Duvarın planı, köşeleri ve konum çizgisi olduğu gibi kalır.

## Nerede yapabilirsiniz

- **Özellikler**: {{ui:Çiz}} ve {{ui:Seç}} açıkken, çizdiğiniz bir duvara tıklayın. **Özellikler** duvarın satırlarını gösterir, sonra **Şekil**, her şeyin yazıldığı yerdir.
- **Bir görünüş ya da kesit**: proje tarayıcısındaki kalem ({{ui:Bu görünümde düzenle}}) görünümü açar; orada bir duvar seçin ve tutamaçlarını sürükleyin. Aşağıdaki "Bir görünüşte ya da kesitte" bölümüne bakın.
- **Duvarın kendi yüz görünümü**: {{ui:Duvarlar}} › {{ui:Profili düzenle…}}, sonra planda duvara tıklayın. Herhangi bir duvar için çalışır, hiçbir görünüşün dik bakmadığı bir duvar için de, ve eğri bir duvar için de (açılmış hâlde gösterilir).
- **Plan ve 3B**: {{ui:Duvarlar}} içindeki dört komut (Düzenleme grubu): {{ui:Üst / taban bağla}}, {{ui:Profili düzenle…}}, {{ui:Eğim}} ve {{ui:Duvar açıklığı}}. Aşağıdaki "Planda ve 3B'de" bölümüne bakın.

Hangisini seçerseniz seçin, değişiklik aynıdır: **Değişiklikler** içinde tek bir adım ve {{ui:Geri al}} onu geri alır.

Düz ve eğri duvarların ikisi de her Şekil aracını kabul eder. Eğri bir duvarda mesafeler yayı boyunca ölçülür.

## Üstü ya da tabanı bağlayın

- **Üste bağla**: bir çatı, bir döşeme ya da bir tavan seçin. Duvarın üstü, seçtiğiniz şeyin alt yüzünü izler, duvarın her köşesinin tam üstünde. Eğimli bir çatının altında bir duvarın eğimli bir üstü olur ve çatı düzlem değiştirdiğinde (bir sırt ya da kırma bir çatı) duvarın üstü onunla birlikte bükülür.
- **Tabana bağla**: bir döşeme ya da bir tavan seçin. Duvarın tabanı üst yüzünü izler.
- Duvarın bir parçasının üstünde (ya da altında) hiçbir şey yoksa, o parça duvarın kendi yüksekliğini korur.
- Bağlantı kalır: çatının eğimini ya da saçağını, ya da tavanın yüksekliğini değiştirin, bağlı duvarlar aynı adımda izler.
- Bırakmak için **Kendi yüksekliği** seçeneğini seçin.

## Profili düzenleyin

{{ui:Profili düzenle…}} duvarın yandan görülen konturunu açar:

- **Üst çizgi**: **Boyunca** (duvarın başlangıcından uzaklık) ve **Yükseklik** (duvarın tabanının üstündeki yükseklik) satırları. 0 / 3000, 2500 / 4500, 5000 / 3000 üç satırı 5 m'lik bir duvarda bir alınlık ucu yapar.
- **Alt çizgi**: bir seviye tabanı için boş bırakın, ya da basamaklı bir temel üzerindeki bir duvar için satır verin.
- {{ui:Nokta ekle}} bir satır ekler, **Kaldır** birini çıkarır. {{ui:Bu profili kullan}} uygular; {{ui:Düz hâline dön}} onu kaldırır.

Her çizgi duvar boyunca bir kez, başlangıcından sonuna kadar gider; kendi üzerine geri dönen bir çizgi ya da tabana inen bir üst reddedilir. Bağlı bir üst de varsa, ikisinin alttakisi kullanılır.

## Duvarı eğdirin

**Eğim**: **Dik**, **Eğik** (iki yüz de aynı yöne eğilir, kalınlık kalır) ya da **Çift eğim** (her yüzün kendi açısı vardır: yükseldikçe incelen ya da kalınlaşan bir duvar). Dikten sapmayı derece olarak yazın; artı bir açı, başlangıçtan bakıldığında duvarın soluna eğilir. Duvar tabanında çizildiği yerde kalır; ona bağlı duvarlar onunla birlikte eğilmez.

## Kapı ya da pencere olmadan açıklıklar

{{ui:Açıklık ekle}} duvarın ortasına 900 genişliğinde bir delik açar. **Açıklıklar** içindeki satırı **Başlangıçtan**, **Genişlik**, **Eşik** (seviyeden) ve **Yükseklik** değerlerini ayarlar; **Kaldır** onu çıkarır. Açıklık duvarın tamamından geçer, duvarın miktarları onu dışarıda bırakır ve plan, planın kesit yüksekliğine ulaştığı yerde bir boşluk gösterir. Duvarın başlangıcı çizgisi boyunca kaydığında açıklık yerini korur; açıklığı duvarın dışında bırakacak bir değişiklik reddedilir.

## Bir görünüşte ya da kesitte

Görünümü proje tarayıcısındaki kalemle açın. {{ui:Seç ve taşı}} açıkken:

- **Profil**: görünüme bakan bir duvara tıklayın. Üst ve alt çizgileri maviye döner; her noktada kare bir tutamaç ve her parçanın ortasında bir nokta vardır.
  - Bir kareyi sürükleyerek o noktayı taşıyın (iki uç nokta yalnızca yukarı ve aşağı hareket eder).
  - Bir noktayı sürükleyerek tüm parçayı yukarı ya da aşağı taşıyın.
  - Bir çizgiye çift tıklayın (ya da sağ tıklayın) ve orada bir nokta ekleyin; {{ui:Nokta ekle (üst)}} ve {{ui:Nokta ekle (alt)}} en uzun parçanın ortasına birer nokta ekler.
  - Bir kareye tıklayın ve Delete'e basın (ya da sağ tıklayın), o noktayı kaldırın. {{ui:Düz hâline dön}} profili kaldırır.
  - Bir nokta seçiliyken araç çubuğunun altındaki şeritte **Boyunca** ve **Yükseklik** değerlerini yazın.
- **Bağlama**: şeritte seçili duvar için **Üste bağla** ve **Tabana bağla** listeleri vardır. Ya da {{ui:Üste bağla}} ya da {{ui:Tabana bağla}} aracını kullanın: duvarı ya da duvarları, sonra kesikli kutular olarak gösterilen çatıyı, döşemeyi ya da tavanı tıklayın. Seçilen tüm duvarlar tek bir adımda bağlanır.
- **Duvar açıklıkları**: {{ui:Duvar açıklığı}} aracıyla bir duvarın yüzünde bir dikdörtgen sürükleyin. {{ui:Seç ve taşı}} modunda geri dönüp bir açıklığı taşımak için sürükleyin, sekiz tutamacından birini sürükleyerek boyutunu değiştirin, şeritte **Başlangıçtan**, **Genişlik**, **Eşik** ve **Yükseklik** yazın ya da kaldırmak için Delete'e basın.
- **Eğim**: görünümün boyunca baktığı bir duvar (uçtan görünen, bir kesit olarak ya da bir görünüşte kendi ucundan) da tıklanabilir. Tepesindeki yuvarlak tutamacı sürükleyerek onu eğdirin, ya da şeritte **Dik**, **Eğik** ya da **Çift eğim** seçip açıları yazın.

Ölçüler 10 mm'ye oturur; daha ince bir ölçü için değeri yazın. Eğri bir duvar, görünümün karşısından tek yönde uzandığı sürece bir görünüşte düzenlenebilir; kendi yüz görünümü her zaman çalışır.

## Planda ve 3B'de

{{ui:Duvarlar}} öğesini Düzenleme grubunda açın:

- {{ui:Üst / taban bağla}}: aracın satırında **Üste bağla** ya da **Tabana bağla** seçin. Duvarı ya da duvarları (planda ya da 3B görünümde) tıklayın, sonra neye bağlanacaklarını: 3B'de çatının, döşemenin ya da tavanın kendisini tıklayın; planda onun altında bir noktayı tıklayın (birden fazlası varsa, hangisi olduğunu soran bir liste açılır).
- {{ui:Profili düzenle…}}: planda, yüz görünümünü açmak için bir duvara tıklayın. 3B'de bir duvara tıklayın: profil noktalarına tutamaçlar gelir; birini duvarın düzleminde sürükleyin.
- {{ui:Eğim}}: bir duvara (planda ya da 3B'de) tıklayın ve ne kadar eğileceğini yazın.
- {{ui:Duvar açıklığı}}: planda açıklığın gideceği bir duvara tıklayın; **Genişlik**, **Yükseklik** ve **Eşik** aracın satırındadır. 3B'de duvarın yüzünde bir köşeye, sonra karşı köşeye tıklayın. 3B'de bir duvar seçiliyken açıklıklarının tutamaçları vardır: köşeler boyutu değiştirir, orta kısım taşır.

3B tutamaçları 3B görünümün kendi tutamaçlarıdır, bu yüzden kesit kutusu kendi tutamaçlarını gösterirken beklerler.

## Planda

Eğik bir duvar, planın onu kestiği yerde çizilir (görünüm aksini söylemedikçe seviyenin 1200 üstünde): dış çizgisi, o yükseklikte ne kadar eğildiğine göre kaydırılır ve çift eğim orada daha geniş ya da daha dardır. Zeminde dış çizgisi, kesitin altında kalanların ince çizgileriyle çizilir. Duvarın köşeleri, tutamaçları ve ölçülendirmeleri tabanında kalır.

## Kopyalar

{{ui:Bu seviyeyi kopyala…}} ve **Kopyala** seçeneğiyle taşıma, duvarın profilini, eğimini ve duvar açıklıklarını da alır. Bir döşemeye ya da tavana bağlı bir duvar, yeni seviyedeki kopyalanmış döşemeye ya da tavana bağlanır; bir çatıya bağlantı seviyeyle kopyalanmaz (çatılar kopyalanmaz). Aynı seviyedeki bir kopya, aynı çatıya, döşemeye ya da tavana bağlı kalır.

## Dosyada

Şekillendirilmiş bir duvar, faset bir katı (IfcFacetedBrep) olarak yazılır; diğer programlar onu çizildiği gibi okur. Ayarları duvarın üzerindedir (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Bir açıklık, içinde hiçbir şey olmayan, duvarın içindeki bir IfcOpeningElement'tir.

## Henüz yapılmadı

- Dış çizgisinde çıkıntısı ya da deliği olan bir profil (delikler için açıklıkları kullanın).
- 3B'de: profil noktası eklemek ya da kaldırmak ve eğimi bir tutamaçla değiştirmek (duvarın yüz görünümünü, bir görünüşü ya da kesiti kullanın ya da yazın).
- Kopyalama açıkken {{ui:Uzaklık}}, şekli ya da duvar açıklıklarını kopyalamaz (Kopyala seçeneğiyle taşıma kopyalar).
- Eğik bir duvarın katmanları Orta ve İnce planlarda çizilmez (dış çizgisi çizilir).
- Dikdörtgen olmayan açıklıklar.
