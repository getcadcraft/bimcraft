---
title: Tip paketleri: duvar tiplerini açık dosyalar olarak paylaşın
summary: Duvar tiplerini katmanları, malzemeleri, etiketleri, sınıflandırma kodları ve aileleriyle birlikte tek bir açık dosya olarak (düz JSON ya da IFC) kaydedin ve başka bir projeye ekleyin. Başka bir programdan gelen bir IFC dosyasındaki duvar tipleri de okunabilir.
keywords: tip paketi, tipler, duvar tipi, paylaş, dışa aktar, içe aktar, kütüphane, açık biçim, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, malzemeler, katmanlar, şablon, ofis standardı, aileler
from: e4c91331
---

## Ne yapacaksınız

Duvar tiplerinizi bir projeden diğerine taşıyın ya da başka bir programda çalışan birine verin. Bir tip paketi her duvar tipini katmanları, kalınlıkları, malzemeleri, çekirdeği, boşlukları, katman önceliğini, geliştirme seviyesini, metraj verisini ve sınıflandırma kodlarıyla birlikte, eklediğiniz aileleri de tutar. Açık bir dosyadır: herkesin okuyabileceği düz JSON metni ya da bir IFC dosyası. İçindeki hiçbir şey bir firmaya, bir ülkeye ya da bir hesaba bağlı değildir.

## Bir projeden tipleri kaydedin

1. Model çubuğunda **Veri**'yi açın ve {{ui:Tip paketleri}} seçin.
2. {{ui:Bu projedeki türleri kaydet}} altında, içine konulacak duvar tiplerini işaretleyin. Projenin kendi tipleri işaretlidir; bir başlangıç tipi eklenebilir ve kopya olarak girer. İstiyorsanız aileleri de işaretleyin.
3. Bir {{ui:Paket adı}} yazın.
4. {{ui:Paket olarak kaydet (.json)}} bir `.cctypes.json` dosyası indirir. {{ui:IFC olarak kaydet (.ifc)}} yalnızca tipleri içeren bir IFC dosyası indirir: her duvar tipi, malzeme katman kümesi, malzemeler ve sınıflandırmasıyla bir IfcWallType olarak, herhangi bir BIM programı için.

## Bir projeye tip ekleyin

1. Aynı iletişim kutusunda {{ui:Bir paket veya IFC dosyası aç…}} seçin ve bir `.json` paketi ya da bir `.ifc` dosyası seçin.
2. İletişim kutusu dosyada ne olduğunu listeler: her duvar tipi, kalınlığı, katman sayısı ve kodlarıyla; malzemeler ve aileler.
3. {{ui:Bu projede zaten olan bir tür}} için ne olacağını seçin: **Projenin olanını tut**, **Paketinkini kopya olarak ekle** (adı "(2)" ile biten yeni bir ad alır) ya da **Değiştir (yalnızca hiçbir duvar kullanmıyorsa)**.
4. {{ui:Projeye ekle}}. İletişim kutusu neyin eklendiğini, kopyalandığını, değiştirildiğini ya da tutulduğunu listeler. Bu tek bir geri alma adımıdır.

Yeni tipler hemen Duvar aracının tip listesinde olur.

## Döşeme, çatı ve tavan tipleri

Kaydedilecek tipler listesi, projenin döşeme, çatı ve tavan tiplerini ve başlangıç tiplerini de tutar (Döşeme, Çatı, Tavan olarak işaretli). Bir paket dört türün hepsini taşıyabilir; her tip IFC sınıfını adlandırır (IfcWallType, IfcSlabType, IfcCoveringType). Öğelerin kullandığı bir döşeme, çatı ya da tavan tipi bir paketten değiştirilmez: onu tip düzenleyicisinde değiştirin.

## Tek bir tipi Kütüphane öğesi olarak

Tam olarak bir tipi işaretleyin ve **Kütüphane öğesi olarak kaydet…** seçin. Bu bir `.cctype.json` dosyası kaydeder: yalnızca o tipi (katmanlarını, malzemelerini, LOD ve sınıflandırma kodlarını) tutan, Tipler türünde bir Kütüphane öğesi. Paylaşmak için Kütüphane'ye yükleyin. **Bir paket veya IFC dosyası aç** böyle bir öğeyi de okur ve tipini bir paket gibi projeye ekler.

## Bilmeniz iyi olanlar

- Başka bir programdan gelen bir IFC dosyası da burada açılabilir. Malzeme katmanları olan her duvar tipi okunur: adı, katmanların malzemeleri ve kalınlıkları ile varsa boşluk dosyanın kendisine aittir. Hangi katmanların çekirdek olduğu ve her katmanın ne işe yaradığı (kaplama, yapı, yalıtım) tahmin edilir; tip **(tahmini)** olarak işaretlenir ve duvar tipi düzenleyicisinde kontrol etmelisiniz. Hiç katmanı olmayan bir duvar tipi dışarıda bırakılır ve adıyla belirtilir.
- Projede zaten olan bir malzeme olduğu gibi tutulur. Adı alınmış yeni bir malzemenin adının sonuna "(paket)" eklenir.
- Duvarların kullandığı bir tip hiçbir zaman bir paketten değiştirilmez. Onu duvar tipi düzenleyicisinde değiştirin; bu, duvarlarını düzgünce taşır.
- Bir duvarda ayarlanan bir kod pakette taşınmaz: o duvara aittir. Tipte ayarlanan bir kod taşınır.
- Biçimin sahip olmadığı bir alan içeren, malzemesi eksik bir katman içeren ya da düz metin olmayan bir dosya kabul edilmez ve ileti nerede ve neden olduğunu söyler.
- Henüz yapılmadı: döşeme, çatı ve tavan tipleri (bu sürümde bunların tipi yok: her birinin kendi kalınlığı var), aileler dışındaki kapı ve pencere tipleri ve başka bir programın dosyasından gelen şraffürler ya da renkler.
