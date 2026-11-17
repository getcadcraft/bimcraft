---
title: Döşemelerden geçen şaftlar ve boşluklar
summary: Şaft, iki seviye arasındaki her döşemeyi, tavanı ve çatıyı kesen tek bir dış hattır. Düşey boşluk bunlardan birini keser. Duvar boşluğu bir duvarı keser.
keywords: şaft, asansör şaftı, asansör boşluğu, merdiven boşluğu, basamak, düşey boşluk, kat boşluğu, tavan boşluğu, çatı boşluğu, tavan penceresi boşluğu, döşemede delik, duvar boşluğu, IfcOpeningElement, kesinti, net alan
from: 8e9e1641
---

## Ne yapacaksınız

Bir binada tek bir eskizle asansör şaftı açın, bir döşemede delik açın ve alanlardan ne kadar çıkarıldığını okuyun.

## Araçlar nerede

- Şerit düzenleri: {{ui:Mimari}} › **Boşluk** › {{ui:Şaft}}, {{ui:Düşey Boşluk}} ve {{ui:Duvar boşluğu}}.
- Klasik düzen: Çiz çubuğu › {{ui:Odalar}} menüsü (Şaft, Düşey Boşluk) ve › {{ui:Duvarlar}} menüsü (Duvar boşluğu).

## Bir şaft

1. Şaftın başladığı seviyenin kat planını açın. {{ui:Şaft}} seçin.
2. Satırda {{ui:Taban seviyesi}} ve {{ui:Üst seviye}} seçin; şaft bunların üstünde ya da altında başlıyor veya bitiyorsa uzaklıkları girin.
3. Dış hattın köşelerine tıklayın. İlk köşeye yeniden tıklayın, çift tıklayın ya da bitirmek için {{key:Enter}} tuşuna basın.
4. İki yükseklik arasındaki her döşeme, tavan ve çatı kesilir. Durum satırı kaç tane olduğunu söyler.

Şaft tek bir şeydir. Geçtiği herhangi bir seviyede dış hattını seçin: Özellikler'de adı, seviyeleri ve uzaklıkları, neyi kestiği ve çıkarılan alan bulunur. Değiştirirseniz her boşluk onu izler. Silerseniz her boşluk gider. Her biri tek bir geri alma adımıdır.

Şaft kesmeye devam eder: iki seviyesi arasında daha sonra yapılan bir döşeme sorulmadan kesilir ve sildiğiniz bir döşeme serbest bırakılır.

Şaftın üzerinde durduğu döşeme kesilmez (üstü tabandır). Onu da kesmek için tabana negatif bir uzaklık verin. Çatıdan geçmek için üste pozitif bir uzaklık verin.

## Bir düşey boşluk

1. {{ui:Düşey Boşluk}} seçin. Satırda ne kesileceğini seçin: döşeme, tavan veya çatı.
2. Dış hattın köşelerine tıklayın ve yukarıdaki gibi bitirin.
3. Bu seviyede dış hattın altındaki döşeme, tavan veya çatı kesilir. Bu boşluk tek bir öğeye aittir: döşemeyi silerseniz boşluk da onunla gider.

## Bir duvar boşluğu

{{ui:Duvar boşluğu}}, [Bir duvarı şekillendirin](topic:wall-shape) konusunun aracıdır: kat planında bir duvara tıklayın ya da 3B'de yüzündeki iki köşeye.

## Miktarlar

Döşemeler için ölçüm kuralına göre bir öğenin net alanı, brüt alanından içinden kesilip çıkarılanın düşülmüş halidir. Bir şaft ya da düşey boşluk, kestiği her döşeme ve tavanda bir düşümdür; döşeme ve kaplama listeleri ile IFC miktarları aynı sayıları gösterir. Çatıda düşüm, çatı yüzeyinin alanıdır: plan alanı, eğimin kosinüsüne bölünmüş hali.

Kenardan sarkan bir dış hat yalnızca öğenin üzerinde kalan kısmı düşer.

## Hiçbir şey kesilmezse

Yolunda hiçbir şey olmayan bir şaft yine de yapılır ve bunu söyler: ileride orada yapılacak her şeyi keser. Bir düşey boşluğun altında bir şey olmalıdır; hiçbir şey yoksa durum satırı bunu söyler ve hiçbir şey yapılmaz.

## IFC'de

Her kesim, kestiği öğeye IfcRelVoidsElement ile bağlı bir IfcOpeningElement'tir; böylece herhangi bir IFC programı deliği gösterir. Çatı yüzey yüzey kesilir. Şaftın kendisi, boşluklarından oluşan bir IfcGroup'tur.

## Henüz yapılmadı

- Eğri dış hatlar.
- Bir şaftın duvarları: bunları Duvar aracıyla çizin.
- Dış hattı köşelerinden sürükleyerek düzenlemek (Özellikler'de değiştirin ya da silip yeniden eskizleyin).
- Çizilmiş bir döşemenin kendi Özellikleri yalnızca kendi boşlukları düşülmüş alanını gösterir; listeler ve IFC miktarları şaftınkini de içerir.

Bkz. [Odalar ve oda ayırıcılar](topic:rooms-and-separators).
