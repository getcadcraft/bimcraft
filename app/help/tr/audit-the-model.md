---
title: Modeli denetleyin: odalar, etiketler, LOD, çakışmalar ve arayüzler
summary: Adı verilmemiş odalar, eksik etiketler, proje aşamasının istediği geliştirme düzeyinin altındaki öğeler, disiplinler arası çakışmalar ve LOD 350 arayüzleri için hazır kontroller çalıştırın. Yalnızca öneri: hiçbir şey engellenmez.
keywords: denetim, kontrol, adı verilmemiş oda, eksik etiket, işaret, lod, geliştirme düzeyi, kilometre taşı, aşama, çakışma, disiplin, koordinasyon, arayüz, lod 350, açıklık, lento, başlık, geçiş, kılıf, boru, kanal, sorunlar, kontrol raporu, öneri
from: cc83a14d
---

## Ne yapacaksınız

Yayımlamadan önce tüm modele tek seferde bakın. Denetim hazır kural kümelerini çalıştırır ve bulguları öneri olarak {{ui:Sorunlar}} listesine koyar. Hiçbir şey engellenmez: bir bulguyu düzeltirsiniz ya da bir nedenle kabul edersiniz, tıpkı diğer sorunlar gibi.

## Adımlar

1. Sol panelde {{ui:Model denetimleri}} › {{ui:Denetim}} ya da {{ui:Araçlar}} › {{ui:Modeli denetle…}} (komut satırına yazılan: `AUDIT`) öğesini açın.
2. {{ui:Proje aşaması}} seçin. Bu, çizim ayrıntılarındakiyle aynı aşamadır.
3. Çalıştırılacak kural kümelerini işaretleyin.
4. {{ui:Denetimi çalıştır}} öğesine tıklayın.
5. Her kural kümesinin satırını okuyun, sonra {{ui:Sorunlar listesini aç}} öğesini açın. Bir bulguya tıklamak, öğesini seçer.
6. {{ui:Denetim raporu}} raporu indirir: her bulgu, kimin neyi neden kabul ettiği ve çalışan kural kümeleri.

## Kural kümeleri

- **Adı verilmemiş odalar**: adı olmayan ya da hâlâ programın verdiği adla ("Oda 3") anılan bir oda.
- **Eksik etiketler**: işareti olmayan bir kapı ya da pencere, numarası olmayan bir oda, etiketi olmayan bir elektrik cihazı.
- **Aşamanın LOD'unun altındaki öğeler**: proje aşamasının istediğinin altında LOD'u olan her duvar, döşeme, tavan, çatı, kapı ve pencere. Bir öğe, tipinin LOD etiketini okur; sahada doğrulanmış bir öğe LOD 500'dür. Etiketi olmayan öğeler, kontrol edilemedikleri için tek bir notta sayılır.
- **Disiplinler arası çakışmalar**: birbirine giren iki disiplinin öğeleri (mimari, statik, mekanik, sıhhi tesisat, elektrik; IFC sınıfına göre). Duvarlarına oturan bir çatı sayılmaz.
- **LOD 350 arayüzleri**: her kapı ve pencere duvarının bir açıklığında oturur, açıklık duvarın içine sığar, iki açıklık örtüşmez, sınırın üstündeki genişlikte bir açıklığın bir lentosu ya da başlığı vardır (üstünde bir öğe ya da kapı ya da pencerede bir not); bir duvarı ya da döşemeyi kesen bir boru, kanal ya da kablo tavası orada bir açıklığa sahiptir. Bulgular disiplin çiftine göre sayılır.
- **Kimsenin kontrol etmediği tanınan öğeler**: bir PDF'den, taramadan ya da çizimden okunan ve hâlâ doğrulanmamış duvarlar, kapılar, pencereler ve odalar. Bkz. [Öğeleri kontrol edildi ya da sahada doğrulandı olarak işaretleyin](topic:verification).

## Aşamanın istediği LOD

Tabloyu görmek ya da değiştirmek için {{ui:Her aşamanın istediği LOD}} öğesini açın.

:::note
Tablo ve lento genişliği CadCraft'ın başlangıç değerleridir. Bir standarttan alınmamışlardır: bir proje, LOD'u aşama başına BIM uygulama planında belirler. Sizinkilere göre ayarlayın. Bir ofis, tabloyu herkes için Ayarlar › Varsayılan İlkeler › Denetim bölümünde ayarlayabilir; Denetim bölümündeki bir değişiklik bu bilgisayarda saklanır.
:::

## İyi bilmeniz gerekenler

- Bir lento, modellenmek yerine not olarak da yazılabilir: kapıyı ya da pencereyi seçin ve Özellikler içinde {{ui:Doğrulama}} altındaki {{ui:Lento ya da kiriş notu}} alanını doldurun.
- Gerçek bir açıklıktan geçen bir boru bir yüzeyi kesmez ve bildirilmez. Duvarın içinden düz olarak modellenen bir boru bildirilir.
- Çok büyük bir modelde çakışma kontrolü birkaç saniye sonra durur ve bunu söyler. İki seçilmiş küme için tam kontrol için [Öğeler arasındaki çakışmaları bulun](topic:clash-check) bölümüne bakın.
- Modeli değiştirdikten sonra denetimi yeniden çalıştırın. Kabul edilmiş bulgular, sayıları değişmediği sürece kabul edilmiş kalır.
- Model okunur. Sorumlu kişilerin yaptığı bir koordinasyon incelemesinin yerini tutmaz.

## Sonraki adımlar

- [Modeli yaygın sorunlara karşı kontrol edin](topic:model-checks)
- [Öğeler arasındaki çakışmaları bulun](topic:clash-check)
- [Öğeleri kontrol edildi ya da sahada doğrulandı olarak işaretleyin](topic:verification)
