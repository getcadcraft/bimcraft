---
title: Boru ve kanal boyutlandırın, kablo doluluğunu ve aydınlatmayı denetleyin
summary: Besleme borularının ve kanallarının boyutlarını basınç kaybıyla denetleyin, kabloları kablo tavalarından ve kablo borularından geçirip dolulukları görün ve IES ya da EULUMDAT dosyalarından odalardaki aydınlatma düzeyini hesaplayın. Varsayılanlar etiketlidir; yürürlükteki yönetmeliğin değerlerini yazın.
keywords: boyutlandırma, boru boyutlandırma, kanal boyutlandırma, basınç kaybı, tesisat birimi, talep, hunter, hazen-williams, hız, sürtünme, eşit sürtünme, fan basıncı, damper, kritik yol, kablo tavası, kablo borusu, doluluk, kablo listesi, ies, ldt, eulumdat, fotometri, aydınlatma düzeyi, lux, düzgünlük, aydınlatma hesabı, güç yoğunluğu, mep, hesaplamalar, sorunlar
from: 9cb90815
---

## Ne yapacaksınız

Boruları, kanalları, kablo tavalarını ve kablo borularını her zamanki gibi çizin, sonra **Hesaplamalar** panelini açın. Her sekme modeli okur, bir tablo gösterir ve neyin yanlış olduğunu ⚠ panelinde Sorunlar olarak listeler. Bir boyut bir sorunu düzeltecekse, **Boyutları uygula** koşuları tek bir geri alma adımında değiştirir.

Bunlar çizim yardımcılarıdır. Her varsayılan ekranda etiketlidir ve hiçbiri bir yönetmelik tablosu değildir: değerleri tasarımınızın dayandığı standarttan yazın ve sonucu bunu onaylayan mühendisin incelemesine sunun.

## Borular

1. **Sistem** anahtarını seçin (soğuk su `cw`, sıcak su `hw`).
2. En yüksek hızı ve, basıncın denetlenmesini istiyorsanız, kaynaktaki basıncı ve bir tesisat armatürünün ihtiyaç duyduğu en düşük basıncı girin.
3. {{ui:Denetle}} tıklayın.

Her boru, altındaki tesisat birimlerinin talebini taşır. Talep, Hunter'ın tarif ettiği biçimde, tesisat birimlerinin akışa karşı eğrisinden gelir. **Yerleşik eğri bir örnektir, bir yönetmelik tablosu değildir**; kendi eğrinizi yazana kadar Sorunlar bunu söyler. Sürtünme Hazen–Williams ile hesaplanır, bağlantı parçaları kayıp katsayılarıdır ve bir yükselme metre başına 9.8 kPa'a mal olur. Bir tesisat armatürünün birimleri türünden gelir ya da asistan aracı `loads_set` ile ayarladığınız sayıdan.

## Kanallar

Sistemi, sürtünme oranını (eşit sürtünme) ya da bir hızı ve varsa her bobin, filtre ya da susturucu kaybını girin. Uç noktalar hava akışını difüzördeki `loads_set`'ten alır. Tablo, parça başına hızı ve sürtünmeyi, kritik yolda **fan basıncını** ve diğer her uç noktanın damperinin üstlenmesi gereken basıncı gösterir. Bağlantı parçası kayıpları bir bağlantı parçası veritabanı değil, yuvarlatılmış varsayılan katsayılar kullanır.

## Kablo tavaları ve kablo boruları

Kanal aracıyla çizin: **Kablo tavası** ve **Kablo borusu** sistemleri kablo taşıyıcısı olarak kaydedilir, böylece diğer programlar bunları tava ve boru olarak okur. Kablolar sekmesinde kablo listesini yapıştırın (etiket, mm cinsinden dış çap, adet, başlangıç, bitiş). `from` ve `to`, bir ekipmanın etiketi ya da milimetre cinsinden bir `x,y,z` noktasıdır. Kablolar tavalar ve borular boyunca en kısa kesintisiz yolu izler; her koşu, yazdığınız sınırlara karşı doluluğunu gösterir ve liste, uç noktalar ve bir gevşeklik yüzdesi dahil uzunlukla CSV olarak kaydedilir.

## Aydınlatma

Her aydınlatma armatürüne IES (LM-63) ya da EULUMDAT dosyasını asistan aracı `photometry_set` ile verin. Hedefleri, ızgara aralığını ve çalışma düzlemi yüksekliğini yazın. Sonuç yalnızca **doğrudan** aydınlatma düzeyidir: ara yansıma ve gölge yoktur, bu yüzden bir odada bir alt sınırdır.

## Yangın sprinkleri

**Yangın sprinkleri** eklentisinin kendi sekmesi vardır; onun yardımına bakın.
