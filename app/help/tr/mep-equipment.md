---
title: Bağlantı noktalı MEP ekipmanı
summary: Genel hava işleyicileri, fanlar, pompalar, kazanlar, su ısıtıcıları, terminal üniteleri, difüzörler, menfezler ve depoları, yazdığınız değerlere göre boyutlandırılmış olarak ve her biri diğer koşuların birleştiği boru ve kanal bağlantılarıyla yerleştirin.
keywords: mep, ekipman, hava işleyici, ahu, fan, hat içi fan, pompa, kazan, su ısıtıcısı, terminal ünitesi, vav, difüzör, menfez, menfez kapağı, depo, bağlantı noktası, bağlantı, boğaz, boyun boyutu, hvac, tesisat, mekanik, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Ne yapacaksınız

Ekipmanı borularınızın ve kanallarınızın uçlarına koyun. Her parça, yazdığınız değerlerle boyutlandırılmış genel bir şekildir ve bağlantıları **bağlantı noktaları** olarak vardır: bir borunun ya da kanalın nerede birleştiği, hangi sistem, akışın hangi yönde gittiği ve hangi boyut. Bir bağlantı noktasından çizilen borular ve kanallar onun boyutunu ve sistemini alır ve ona sabit kalır: bkz. [Boru ve kanalları ekipmana bağlayın](topic:mep-connections).

:::note
Bu bir çizim ve koordinasyon yardımcısıdır; bir mühendis tarafından boyutlandırılır. Ekipman bir üreticinin ürünü değildir: kapasite, ağırlık ya da üreticinin bağlantı boyutları yoktur. Gerektiğinde bir üreticinin modelini MEP programınızdan IFC olarak getirin.
:::

## Bir parça yerleştirin

1. {{ui:Çiz}} seçeneğini açın, {{ui:Derleme}} menüsünü açın ve {{ui:Ekipman}} seçin.
2. Çubukta türü seçin ve boyutlarını yazın. Her tür kendi boyutlarını ister:

| Tür | Yazdığınız | Bağlantı noktaları |
|---|---|---|
| Hava işleyici | uzunluk, genişlik, yükseklik; besleme ve dönüş açıklıkları; bobin borusu boyutu ve sistemi; yoğuşma boyutu | besleme kanalı çıkışı, dönüş kanalı girişi, bobin giriş ve çıkışı, yoğuşma tahliyesi |
| Hat içi fan | çap, uzunluk, sistem | kanal giriş ve çıkışı |
| Pompa | boru boyutu, sistem | giriş ve çıkış |
| Kazan | uzunluk, genişlik, yükseklik, boru boyutu, gaz boyutu, baca çapı | ısıtma beslemesi çıkışı ve dönüş girişi, gaz girişi, baca çıkışı |
| Su ısıtıcısı | çap, yükseklik, boru boyutu, gaz ya da elektrik | soğuk su girişi, sıcak su çıkışı (gazla yanıyorsa gaz girişi ve baca da) |
| Terminal ünitesi | uzunluk, genişlik, yükseklik, yuvarlak giriş, çıkış genişliği ve yüksekliği | besleme havası girişi ve çıkışı |
| Difüzör | yüz, boğaz, sistem | boğazı (hava girişi) |
| Menfez | yüz genişliği ve yüksekliği, boğaz genişliği ve yüksekliği, sistem | boğazı (dönüş ya da egzoz kanalına hava çıkışı) |
| Depo | çap, yükseklik, boru boyutu, sistem | üstte giriş, altta yakın çıkış |
| Radyatör | uzunluk, yükseklik, derinlik, boru boyutu, sistem | akış bir ucun üstünden girer, diğer ucun altından dönüş çıkar |
| Konvektör / panel ısıtıcı | uzunluk, yükseklik, derinlik, boru boyutu, sistem | akış bir uçtan girer, diğer uçtan dönüş çıkar |
| Üreticinin ailesi | aile (bkz. [Boru özellikleri, vanalar, damperler ve üretici aileleri](topic:pipe-specs)) | ailesine verilen bağlantı noktaları |

3. **Konum**u, yani tabanının seviyeden yüksekliğini ayarlayın. Bir difüzörün ya da menfezin yüksekliği yüzüdür: tavan yüksekliğini yazın.
4. İsterseniz bir **Etiket** yazın (`AHU-1`); aynı türden bir sonraki parça bir sonraki numarayı alır.
5. İmleci plan üzerinde hareket ettirin: taban izi ve bağlantı noktaları onu izler. Döndürmek için {{key:R}} tuşuna basın (90°). Gideceği yere tıklayın.

Boru boyutları çelik boru boyutlarıdır (ASME B36.10M). Bir pompadan başka bir malzemeyle çizilen boru, kendi malzemesinde aynı nominal çapı alır.

## Değiştirin ya da kaldırın

Planda ya da 3D görünümde seçin. Özellikler, yazdığınız her boyutu, etiketini, X, Y, yüksekliğini ve dönüşünü ve her bağlantı noktasını gösterir: boyutunu, sistemini, akışın hangi yönde gittiğini ve bir şeyin bağlı olup olmadığını. Her değişiklik {{ui:Geri al}} komutunun bir adımıdır; bağlantı noktalarına sabit koşular onunla birlikte taşınır. {{key:Delete}} onu kaldırır; ona sabit koşular kalır ve Bağlantılar denetimi onları listeler.

## IFC dosyasında

Her tür, IFC sınıfı olarak kaydedilir: IfcUnitaryEquipment (hava işleyici), IfcFan, IfcPump, IfcBoiler (kazan; bir su ısıtıcısı, "Water heater" nesne türüyle su türünde bir IfcBoiler'dır), IfcAirTerminalBox (terminal ünitesi), IfcAirTerminal (difüzör, menfez) ve IfcTank; aynı türden her parça için ortak bir tip ve boyutlarla. IFC2X3 dosyaları, eşleşen tiplerle IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal ve IfcFlowStorageDevice alır. Her bağlantı noktası, bağlantının yerine konmuş, dışa bakan, akış yönü ve sistemi olan bir IfcDistributionPort'tur; diğer programlar hangi koşunun hangi bağlantı noktasına bağlandığını okur. Parça, bağlantı noktalarının her birinin sistemine katılır ve yerleştirilen her kütüphane öğesinin sahip olduğu kütüphane öğesi kümelerini taşır.
