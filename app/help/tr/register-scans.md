---
title: Birden çok taramayı tek bir yerde hizalayın
summary: Farklı konumlardan alınan taramaları seçilen nokta çiftleri veya yazılan hedeflerle tek bir çerçevede yerleştirin, ICP ile inceltin, hizalamayı proje olarak kaydedin ve hizalanmış bulutu LAS ya da E57 olarak dışa aktarın.
keywords: hizalama, kayıt, taramalar, nokta bulutu, icp, yinelemeli en yakın nokta, hedefler, nokta çiftleri, katı dönüşüm, hizala, birleştir, e57, las, taramadan BIM'e
from: e8e270db
---

## Ne yapacaksınız

Aynı yerin birkaç taraması (her biri kendi tarayıcı konumundan alınmış) kendi koordinatlarında başlar. Bunları hizalayın: her taramaya tek bir yerleşim verin ki hepsi tek bir çerçevede dursun; sonra bunu proje olarak kaydedin ve hizalanmış bulutu tek bir LAS veya E57 dosyası olarak yazın.

## Taramaları yerleştirin

1. İletişim kutusunu açın ({{ui:Taramaları hizala…}} başlangıç panelinde ya da bir model açıkken {{ui:Show}} › {{ui:Taramaları hizala…}}). {{ui:Tarama ekle…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS veya XYZ dosyalarını kabul eder ya da dosyaları iletişim kutusunun üzerine bırakabilirsiniz. Farklı birimler kullanan taramalar bir notla reddedilir: önce birini dönüştürün.
2. {{ui:Taşınacak tarama}} ve {{ui:Şuna göre yerleştir}} seçin. Resim, çerçevedeki her taramayı şu anki haliyle, her biri farklı bir renkte gösterir: {{ui:Plan}}, {{ui:Ön}} veya {{ui:Yan}}; kaydırmak için sürükleyin, yakınlaştırmak için tekerleği kullanın.
3. **Nokta çiftleriyle.** {{ui:Bir çift seç}} düğmesine tıklayın, sonra taşınacak taramada bir nokta, sonra başka bir taramada aynı yer (bir köşe, bir hedef, bir kolonun dibi) seçin. Bunu en az üç kez, tek bir doğru üzerinde olmayan ve birbirinden uzak noktalarla yapın. {{ui:Çiftlerle yerleştir}} düğmesine tıklayın: tarama en küçük kareler uyumuyla yerleştirilir ve **Kalan** sütunu her çiftin hâlâ ne kadar ıskaladığını gösterir. Büyük bir sayı veren çift kötü bir seçimdir: çarpı ile kaldırın ve yeniden yerleştirin.
4. **Hedeflerle.** Bir noktanın gerçek koordinatları biliniyorsa (ölçülmüş hedefler), {{ui:Seç, sonra hedefi yaz}} düğmesine tıklayın, noktayı kendi taramasında tıklayın ve satırda hedefin X, Y ve Z değerlerini yazın. Çiftler ve yazılan hedefler serbestçe karıştırılabilir.

## ICP ile inceltin

Çiftler kaba bir yerleşim verir. {{ui:İncelt}} taramayı, yüzeyleri diğer taramanın yüzeylerine oturana kadar hareket ettirir: önce **noktadan noktaya**, sonra **noktadan düzleme**. Tablo her adımı hatası ve eşleşen nokta sayısıyla listeler; üstündeki çizgi hatanın düştüğünü gösterir. {{ui:Durdur}} çalışan adımdan sonra çalışmayı bitirir ve ulaştığı sonucu tutar. {{ui:Geri al}} tüm çalışmayı (ya da son yerleşimi) geri alır; {{ui:Sıfırla}} taramayı dosya koordinatlarına geri koyar.

Dizüstü bilgisayarda hızlı kalması için ICP noktaların bir kısmıyla ({{ui:Kullanılan noktalar}}, 5,000 ile 60,000 arası) çalışır ve {{ui:En büyük eşleşme uzaklığı}} değerinden uzak eşleşmeleri yok sayar (varsayılan olarak taramanın boyutunun %5'i; yerleştikçe küçülür). Önce kaba bir yerleşim gerekir: neredeyse hiç örtüşmeyen taramalar eşleştirilemeyeceğini bildirir. Yalnızca düz ya da yalnızca doğrusal yüzeyler kendi doğrultuları boyunca konumu düzeltemez; bu durumda çift ekleyin.

## Kaydedin ve dışa aktarın

- {{ui:Projeyi kaydet}} her taramanın adını, boyutunu ve ilk 64 KB'ının bir parmak izini, dönüşümüyle birlikte küçük bir `.ccscans.json` dosyası yazar. Hiç nokta içermez. {{ui:Proje aç…}} tarama dosyalarını bu referanslarla bulur (dosyaların önce eklenmiş olması gerekir) ve her dönüşümü geri yerine koyar.
- {{ui:LAS dışa aktar}} ve {{ui:E57 dışa aktar}} her taramayı hizalanmış yerinde içeren tek bir dosya yazar. Özgün dosyalardaki noktalar asla yeniden yazılmaz; dönüşüm çıkışta uygulanır. {{ui:Dosyalardaki her noktayı oku}} açıksa her dosya her nokta için yeniden okunur (tarama başına en fazla 20 milyon); kapalıysa yalnızca görüntüleyicide gösterilen noktalar yazılır.
- {{ui:Hizalanmış bulutu göster}} (BimCraft) LAS dosyasını yazar ve diğer her bulut gibi modelin yanında 3B görünümde açar.

:::note
Hiçbir şey yüklenmez. Hizalama dosyaların kendi birimleriyle çalışır ve milimetreyi korur: LAS, uygun bir ölçekle (0.1 mm'ye kadar) yazılır, E57 ise çift duyarlıklı sayılarla yazılır. Bir koordinat sistemi, yalnızca her tarama aynı EPSG kodunu belirttiğinde LAS'a taşınır. E57 yazıcısı bizim kendi yazıcımızdır; dosyaları bu okuyucuyla ve libE57Format ile geri okunarak denetlenir.
:::
