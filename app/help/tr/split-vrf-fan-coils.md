---
title: Split, VRF ve fan coil üniteleri
summary: Duvar, kaset ve kanallı iç üniteleri, tekli split ve VRF dış ünitelerini, refnet birleşimlerini ve 2 borulu ya da 4 borulu fan coil'leri yerleştirin; her birinin soğutucu akışkan, su, yoğuşma suyu ve kanal bağlantıları olsun; aralarındaki hat takımlarını da değiştirebileceğiniz bir tablodan boyutlandırarak çizin.
keywords: split, mini split, minisplit, çoklu split, vrf, vrv, değişken soğutucu akışkan akışı, ısı pompası, iç ünite, dış ünite, yoğuşma ünitesi, duvar tipi, yüksek duvar, kaset, kanallı, gizli, fan coil, fcu, 2 boru, 4 boru, refnet, dal birleşimi, y birleşim, hat takımı, lineset, soğutucu akışkan, sıvı hattı, gaz hattı, emme hattı, acr, bakır, yoğuşma suyu, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ne yapacaksınız

Bir split, çoklu split ya da VRF sisteminin ve fan coil'lerinin ünitelerini modele yerleştirin, sonra bunları hat takımlarıyla birleştirin: bağlantı noktalarına sabitlenmiş, ACR bakırdan bir sıvı hattı ve bir gaz hattı. Üniteler, [Bağlantı noktalı MEP ekipmanı](topic:mep-equipment) içindeki diğer tüm parçalar gibi çalışır: aynı çubuk, {{ui:Özellikler}}, bağlantı noktaları ve [bağlantılar](topic:mep-connections).

:::note
Bu bir çizim ve koordinasyon yardımcısıdır. Üniteler, yazdığınız değerlerle boyutlandırılmış genel şekillerdir; bir üreticinin ürünleri değildir. Boru çapları, R410A ve R32 ekipmanları için **tipik örnek değerler** tablosundan gelir, herhangi bir üreticiden değil: gerçek boyutları ünite üreticisinin montaj kılavuzu belirler; uzun hatlar ve büyük yükseklik farkları bunları değiştirir. Kullandığınız ünitelere uymak için tabloyu değiştirin ya da boyutları kendiniz yazın.
:::

## Bir ünite yerleştirin

1. {{ui:Çiz}} seçeneğini açın, {{ui:Derleme}}'yi açın ve {{ui:Ekipman}}'ı seçin.
2. Türü seçin ve değerlerini ayarlayın:

| Tür | Ayarladıklarınız | Bağlantı noktaları |
|---|---|---|
| Split iç ünitesi, duvar tipi | kapasite, sıvı ve gaz hattı, uzunluk, derinlik, yükseklik, yoğuşma suyu boyutu | soğutucu akışkan sıvı ve gaz, yoğuşma suyu tahliyesi (sağ uçta, duvara yakın) |
| Split iç ünitesi, kaset | kapasite, sıvı ve gaz hattı, panel, gövde, yükseklik, yoğuşma suyu boyutu | soğutucu akışkan sıvı ve gaz, yoğuşma suyu tahliyesi (bir yanda, üste yakın) |
| Split iç ünitesi, kanallı | kapasite, sıvı ve gaz hattı, uzunluk, genişlik, yükseklik, besleme ve dönüş açıklıkları, yoğuşma suyu boyutu | besleme kanalı çıkışı, dönüş kanalı girişi, soğutucu akışkan sıvı ve gaz, yoğuşma suyu tahliyesi |
| Split dış ünitesi | kapasite, sıvı ve gaz hattı, genişlik, derinlik, yükseklik | soğutucu akışkan sıvı ve gaz (sağ tarafta) |
| VRF dış ünitesi | kapasite, sıvı ve gaz hattı, genişlik, derinlik, yükseklik | soğutucu akışkan sıvı ve gaz (ön tarafta, alçakta) |
| Refnet birleşimi | sıvı ya da gaz hattı, her daldaki yük, her uçtaki boru | giriş, dal A, dal B |
| Fan coil ünitesi | 2 boru ya da 4 boru, uzunluk, genişlik, yükseklik, besleme ve dönüş açıklıkları, bobin borusu ve sistemi, ısıtma borusu, yoğuşma suyu boyutu | besleme kanalı çıkışı, dönüş kanalı girişi, bobin giriş ve çıkışı, ısıtma giriş ve çıkışı (4 boru), yoğuşma suyu tahliyesi |

3. **Yükseklik** alanını ayarlayın: ünitenin tabanının seviyeden yüksekliği. Duvar ünitesinin tabanı alt yüzüdür (çoğu zaman 2100 mm); kasetinki tavandaki yüzüdür; refnetinki ise borusunun merkez çizgisinin yüksekliğidir.
4. Ünitenin gideceği yere tıklayın ({{key:R}} onu 90° döndürür).

**Kapasite**, ünitenin kW cinsinden nominal soğutma kapasitesidir; yanında Btu/h da yazılır. **Sıvı hattı** ve **Gaz hattı** **Tablodan** üzerinde bırakıldığında, ünitenin bağlantıları o kapasite için tablodaki boyutları alır; kendi ünitenizin boyutunu kullanmak için bir boru çapı seçin. Refnetin girişi iki dal için birlikte, her dal ise kendi yükü için boyutlandırılır.

Soğutucu akışkan bağlantı noktaları iki yönde de çalışır (bir ısı pompası her iki yönde çalışabilir). Yoğuşma suyu tahliyesi, diğer tahliyeler gibi bir boru boyutudur.

## Bir hat takımı çizin

1. İki parça seçin ({{key:Shift}} tuşuna basılı tutarak ikinci parçaya tıklayın): bir dış ünite ile bir iç ünite (tekli split), ya da bir dış ünite ile bir refnet, bir refnet ile bir iç ünite veya iki refnet (VRF).
2. {{ui:Derleme}}'yi açın ve {{ui:Hat takımı}}'nı seçin.

BimCraft, sıvı ve gaz hatlarını kendi boş bağlantı noktaları arasında çizer: her bağlantı noktasından dışarı ve ortak bir yüksekliğe çıkarak, ACR bakırdan (1-5/8 in'e kadar tavlanmış bobin, bunun üzerinde çekilmiş boru) ve {{ui:Geri al}} içinde tek bir adım olarak. Bir refnet yalnızca kendi hattını alır: dış ünite tarafından girişine, bir daldan da iç ünitelere doğru. Her hat, aşağı akış ucunun (iç ünite ya da refnetin girişi) boyutunu alır; diğer ucun bağlantı noktası başka bir boyuttaysa {{ui:Bağlantıları denetle}} bunu listeler: redüksiyon orada gerekir. İki iç ünite arasında bir refnet gerekir.

Hatları sonradan, diğer boru hatları gibi taşıyın; uçları bağlantı noktalarında kalır. Katlar arasındaki hatlar {{ui:Boru}} ile çizilir: soğutucu akışkan bağlantı noktasından başlatılan bir boru, sistemini, ACR bakırını ve boyutunu alır.

## Hat takımı tablosunu değiştirin

{{ui:Derleme}}'yi açın ve {{ui:Hat takımı boyutları}}'nı seçin. Her satır şunu söyler: şu kapasiteye kadar (kW), bu sıvı borusu ve bu gaz borusu.

| Şu değere kadar | Sıvı | Gaz |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Bunlar başlangıç niteliğindeki, tipik değerlerdir. Bir satırı değiştirin, satır ekleyin ya da çıkarın ve {{ui:Kaydet}}'e tıklayın: tablo modelde tutulur, dosya üzerinde çalışan herkes onu kullanır ve {{ui:Geri al}} onu geri alır. {{ui:Tipik değerleri kullan}} başlangıç tablosunu geri getirir. Yerleştirilmiş parçalar, siz değiştirene kadar bağlantı noktalarını korur.

## IFC dosyasında

Split ve VRF sistemlerinin iç ve dış üniteleri, türü SPLITSYSTEM olan IfcUnitaryEquipment'tir; nesne türü hangisi olduğunu belirtir ("Split iç ünitesi, duvar tipi", "Split iç ünitesi, tavan kaseti", "Split iç ünitesi, kanallı", "Split dış ünitesi", "VRF dış ünitesi"). Fan coil, nesne türü "Fan coil ünitesi" olan AIRHANDLER türünde bir IfcUnitaryEquipment'tir: IFC4'te fan coil türü yoktur; bir odanın fanı, bobini ve filtresi ise AIRHANDLER'ın tarif ettiği şeydir. Refnet birleşimi, JUNCTION türünde bir IfcPipeFitting'dir ("Refnet birleşimi"). IFC2X3 dosyaları, eşleşen türlerle birlikte IfcEnergyConversionDevice ve IfcFlowFitting alır.

Soğutucu akışkan bağlantı noktaları ve hatları REFRIGERATION sistemlerindedir (sıvı hatları için bir, gaz hatları için bir); yoğuşma suyu ise bir DRAINAGE sistemindedir. ACR hatları dış çaplarına göre adlandırılır. Hat takımı tablosu, projede CadCraft_HvacLineSets özellik kümesidir.

Ayrıca bkz. [Bağlantı noktalı MEP ekipmanı](topic:mep-equipment), [Boruları ve kanalları ekipmana bağlayın](topic:mep-connections) ve [Borular ve kanallar](topic:pipes-and-ducts).
