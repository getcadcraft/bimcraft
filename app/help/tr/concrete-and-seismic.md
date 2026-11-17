---
title: Betonarme elemanları denetleyin ve deprem yükleri oluşturun
summary: Açık modelin betonarme kiriş ve kolonlarının donatısını ayarlayın, ACI 318-19'a göre denetleyin, rijit döşemelerde ASCE 7-22'ye göre eşdeğer yanal kuvvetler oluşturun ve kat ötelemesini görün. Bir mühendisin denetlemesi için bir yardımcıdır.
keywords: beton, betonarme, ACI 318, ACI 318-19, donatı, kiriş, kolon, kesme, etriye, deprem, eşdeğer yanal kuvvet, ELF, ASCE 7-22, öteleme, kat ötelemesi, döşemeler, rijit diyafram, kat ağırlığı, kapasite kullanımı, yapısal, mühendis, analiz
from: 2f342e72
---

{{ui:Betonarme elemanlar}} ve {{ui:Deprem yükleri}} blokları, {{ui:Analiz}} sekmesinde açık IFC'nin betonarme kiriş ve kolonlarını denetler ve çerçevesinin döşemelerinde bir depremin yatay kuvvetlerini oluşturur. Bunlar DetailCraft'takiyle aynı bloklardır; {{ui:Analiz}} sekmesinin analizinden sonra çalışır ve diğer analiz ayarlarıyla birlikte IFC içinde kaydedilirler.

:::warning
Sonuçlar **bir mühendis tarafından denetlenmek içindir**: bir mühendis gözden geçirene kadar bir yardımcıdır. Beton kontrolleri birinci mertebe kuvvetleri kullanır (sallanmayan olarak tasarladığınız bir çerçevedeki kolon, büyütülmüş momenti için tasarlanır); sallanma büyütmesi, burulma tasarımı, sismik detaylandırma (ACI bölüm 18) ve etriye detaylandırması yoktur. Deprem yükleri, fazlalık katsayısını, düşey deprem etkisini, burulma büyütmesini ve P-delta etkilerini hariç tutar. **Rüzgâr yükleri henüz yapılmadı**: standardın rüzgâr bölümleri projenin başvuru sayfalarında yoktur.
:::

## BimCraft neyi okur

Analiz, modelin kirişlerini, kolonlarını ve diyagonallerini profilleriyle okur (bkz. [Yapısal çerçeveyi analiz edin](topic:frame-analysis)). {{ui:Betonarme elemanlar}} bloğu, kullandıkları her kesiti listeler. Beton olan bir kesitte {{ui:Beton olarak kur…}} düğmesine basın: BimCraft, profilin alanı ve rijitliğinden bir dikdörtgen alır (genişlik b ve derinlik h, sonradan değiştirebilirsiniz). Bu nedenle dikdörtgene yakın olmayan bir kesit (haddelenmiş çelik profil gibi) düzeltilmesi gereken bir boyut verir ya da olduğu gibi bırakılır.

Beton olarak kurulan bir kesit ve malzemesi beton olarak adlandırılan her öğe, beton olarak analiz edilir: E = 4700 √f′c, 2400 kg/m³ ve varsayılan olarak **çatlamış kesitlerle** (kolonlar 0.70 Ig, kirişler 0.35 Ig; ACI 318-19 Tablo 6.6.3.1.1(a)). Bunu kapatmak için {{ui:Brüt kesitler}} öğesini seçin. Bu ayarlar olmadan model tam olarak daha önce olduğu gibi analiz edilir.

## Donatılar, kombinasyonlar, denetim

Her kesit için pas payını, üst, alt ve yan donatıları (ya da bir kolon kafesini) ve etriyeleri verin; f′c, fy, fyt, K ve sallanan ya da sallanmayan çerçeve ayarını yapın. Yük durumlarına türlerini verin, {{ui:Birleşimleri oluştur}} düğmesine basın (ASCE 7 §5.3.1) ve ardından {{ui:Betonu denetle}}: her eleman bir kapasite kullanım oranı alır ve modelde renklendirilir. Kapasiteyi aşan elemanlar ve sınırını aşan bir kat ötelemesi, maddeleriyle birlikte {{ui:Sorunlar}} içinde listelenir; birine tıklayarak öğeyi seçin.

## Döşemeler ve deprem yükleri

{{ui:Deprem yükleri}} bloğunda {{ui:Katları bul}}, iki ya da daha fazla kirişin buluştuğu seviyeleri alır; her biri rijit bir diyafram olur. {{ui:Ağırlıkları durumlardan al}}, verdiğiniz bir katsayıyla her katın deprem ağırlığını durumlardan okur. SDS, SD1, S1, R, Ie, Cd, TL, sistemi ve risk kategorisini doldurun, ardından {{ui:Deprem durumları oluştur}} (ASCE 7-22 12.8: periyot, taban kesme kuvveti, katlara dağılım, 5 % kaza burulması). Kat kuvvetleri ve kat ötelemesi denetimi (12.12) bir çalıştırmadan sonra görünür. Aynı periyot ve kat rijitliği, kaynak olarak analiz çerçevesini seçtiğinizde [Sel, rüzgâr ya da deprem oynatma](topic:hazard-playback) içindeki depremi de besler.

Betonarme döşemeler ve duvarlar analizde plak olur ve {{ui:Döşeme donatısı}} bloğu, bunların metre başına gereken çeliği hesaplar. Her denetimin ayrıntıları, DetailCraft'taki aynı adlı konuda yer alır.
