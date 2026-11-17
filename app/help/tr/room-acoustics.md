---
title: Bir odanın yankılanmasını denetleyin ve onu dinleyin
summary: Her oda için oktav bandına göre yankılanma süresi (Sabine ve Eyring); boyutundan ve yüzey kaplamalarından hesaplanır. Ayrıca kendi hedefiniz ve odanın hesaplanmış dürtü yanıtından geçirilen bir ses, alkış ya da müzik.
keywords: akustik, yankılanma, yankı süresi, rt60, sabine, eyring, soğurma, yankı, ses, dinle, dürtü yanıtı, konuşma, sınıf, ofis, halı, tavan levhası, gürültü
from: 16996cbb
---

Sol panelin {{ui:Oda akustiği}} bölümü, sesin her odada ne kadar süre kaldığını hesaplar. Açık IFC modelinden her odanın zemin alanını, yüksekliğini, duvarlarını, kapılarını ve pencerelerini okur. Modelde hiçbir şey değiştirilmez.

## Kaplamaları seçin

Model bir yüzeyde ne olduğunu söylediğinde oda bunu okur: her duvar tipinin iç katmanı (alçıpan, sıva, tuğla, beton ve blok tanınır), zeminin türü (ahşap ya da beton) ve bir tavanın döşeli olup olmadığı. Her seçimin yanındaki etiket, bunun modelden mi, bir varsayılandan mı yoksa sizin seçiminizden mi geldiğini söyler; farklı bir kaplama seçerek geçersiz kılın. Model bir şey söylemeyen her şey varsayılanda kalır. Katsayılar **yayımlanmış tipik değerlerdir**; bir ürünün test verisi olduğunda onlarla değiştirin. Bir **hedef** (istediğiniz en uzun orta frekans yankılanma süresi) yazın; bunun üstündeki her oda bir uyarıdır ve onu düşürecek soğurma gösterilir.

## Tabloyu okuyun

Yankılanma 125 Hz ila 4 kHz için verilir. Sabine canlı odalara, Eyring ölü odalara uygundur; *Kullanılan* olarak işaretli satır, ortalama soğurma 0.2'nin üzerindeyse Eyring'i kullanır. Havanın soğurması dahildir (büyük odalarda yüksek bantları kısaltır). Bu istatistiksel bir modeldir: sesin eşit yayıldığını varsayar. Bu nedenle uzun ya da düz odalar ve çok küçük odalar kaba bir kılavuzdur; mobilya, insanlar ve açık kapılar sayılmaz.

## Dinleyin

{{ui:Bu odada çal}}, burada yapılmış bir ses, bir alkış, parmakla çalınan notalar ya da **kendi ses dosyanız** (bilgisayarınızda kalır) çalar; bu, oda için hesaplanmış bir dürtü yanıtından geçer: doğrudan ses, bu büyüklükteki bir kutunun ilk yansımaları ve her bantta odanın kendi yankılanma süresinde sönen bir kuyruk. {{ui:Kuru çal}} aynı sesi aynı düzeyde, odasız çalar. Dürtü yanıtını ya da odadaki sesi WAV dosyaları olarak kaydedebilirsiniz. Bu, seçtiğiniz boyutta ve kaplamada bir oda gibi çalar; gerçek bir odaya benzemez.

## İnsanlar ve mobilya

**Bu odadaki kişi sayısı**'nı yazarak onların soğurmasını ekleyin. Modelin tuttuğu mobilyalar (kanepeler, yataklar, sandalyeler, masalar, gardıroplar; ada göre bulunur) kendi soğurmasını ekler. Rakamlar kaba planlama değerleridir ve yuvarlanmıştır; önemli bir oda için ölçümlerle değiştirin.

## Ses kaynağı ve dinleyici

{{ui:Kaynak ve dinleyici}} altında {{ui:Kaynağı yerleştir}} ya da {{ui:Dinleyiciyi yerleştir}} düğmesine basın ve odanın planına tıklayın. Çaldığınız ses oradan duyulur: doğrudan ses mesafeden sonra gelir ve yankılı kısım o mesafe için düzeydedir. Mesafe kutusuna dönmek için ikisini de temizleyin.

## Düzensiz soğurma ve oda modları

{{ui:Düzensiz soğurma (kutu biçimli oda)}} altında odayı bir kutu olarak yazın ve zemin, tavan ve duvar kaplamalarını seçin. Tablo, Sabine ve Eyring'e Fitzroy ve Arau-Puchades'ı ekler: bunlar üç karşıt yüzey çiftini ayrı ayrı ele alır; böylece sert tavanlı, halılı bir oda fazla kısa okunmaz. Çiftler çok farklı olduğunda, bir not hangisine güvenileceğini söyler. Tablonun altında **Oda modları**, kutunun en düşük durağan dalgalarını ve odanın düzgün bir ses alanı yerine ayrı modlara sahip olduğu frekansın altını listeler. Bunlar kutu biçimli bir oda için tahminlerdir; bir tasarım yardımcısıdır, ölçüm değildir.

## Birimler

Oda alanları, yükseklikleri, hacimleri ve mesafeleri, seçtiğiniz {{ui:Birimler}} içinde gösterilir (kare ve küp fit, inç, milimetre, santimetre ya da metre). Hesaplamanın kendisi SI'de kalır; yalnızca gösterim değişir. Zamanlar (saniye), frekanslar ve düzeyler değişmez.
