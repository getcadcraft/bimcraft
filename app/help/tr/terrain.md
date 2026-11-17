---
title: Arsanın zemini, yapı platformu ve kaplama
summary: Zemini ölçü noktalarından, kot eğrilerinden, bir LAS / LAZ taramasından, bir GeoTIFF'ten, bir LandXML yüzeyinden (CivilCraft'ın) ya da birkaç nokta kotundan modele alın; evin yapı platformunu şevleri ve kazı / dolgu ile kesin; araç yollarını, yürüme yollarını ve avluları üzerine yerleştirin; CivilCraft'a LandXML olarak verin.
keywords: arazi, zemin, arsa, topografi, ölçü, noktalar, PNEZD, kot eğrileri, LAS, LAZ, LiDAR, GeoTIFF, DEM, yükseklik, nokta kotu, eğim, tesviye, platform, yapı platformu, kazı, dolgu, toprak işleri, yarma-dolgu sınırı, şev, araç yolu, yürüme yolu, avlu, kaplama, LandXML, CivilCraft
from: 208298d6
---

## Ne yapacaksınız

Evi arsasına oturtun. Zemin modelin bir parçası olur: 3B'de gösterilir, kesit ve görünüşlerde kesilir, planda kot eğrileriyle görünür. Evin altına bir yapı platformu kesilir, araç ve yürüme yolları ona uyar ve temeller onunla birlikte alçalır.

## Zemini içe aktarın

1. {{ui:Derleme}} menüsünü açın ve {{ui:Arazi}} seçin.
2. Şunlardan birini yapın:
   - **Bir ölçü dosyası açın…**: ölçü noktaları (PNEZD, PENZD ya da düz doğu, kuzey, kot; virgül, sekme ya da boşlukla ayrılmış), bir DXF ya da DWG içinde kot eğrileri (kendi kotlarındaki çoklu çizgiler, 3B çoklu çizgiler), bir LAS ya da LAZ taraması (zemin noktaları korunur, metrekareye yaklaşık bir nokta olacak şekilde seyreltilir), bir GeoTIFF ya da ASCII yükseklik ızgarası ya da CivilCraft'ın dışa aktardığı gibi bir **LandXML** yüzeyi (kendi noktaları ve üçgenleri korunur; dosyada birden fazla yüzey varsa BimCraft zemin olanın hangisi olduğunu sorar; birimleri dosyadan gelir). Önce dosyanın birimlerini seçin (LandXML kendi birimlerini belirtir).
   - Ya da bir **Nokta kotu** yazın (bu katın döşemesinden; yani `-1'` değeri onun 1 ft altı demektir) ve plana noktalara tıklayın, kotu değiştirip daha fazla noktaya tıklayın, sonra **Zemini oluştur**'a tıklayın. Başlamak için üç nokta yeter.

Modelden uzakta olan ölçü koordinatları (state plane, UTM) evin üzerine taşınır ve kotlar, evdeki zeminin ilk kattan yaklaşık 8" aşağıda olacak şekilde ayarlanır. **Özellikler** içindeki **Zemini yükselt** komutu bunu istediğiniz kadar düzeltir.

## Yapı platformu

1. {{ui:Yapı platformu}} seçin.
2. Evin etrafındaki **Pay**'ı, **platformun döşemenin altında kalma miktarını** (bir döşemenin altında 8", bir sürünme boşluğunun altında daha fazla) ve mevcut zemine kadar uzanan **Şevleri** (`2:1` = yukarı ya da aşağı her 1 ft için dışarı 2 ft) ayarlayın.
3. Evin içinde bir noktaya tıklayın.

Zemin evin altında düzleştirilir ve pay sınırına kadar uzanır; sonra yamaca doğru yukarı (kazı) ve düşük tarafa doğru aşağı (dolgu) mevcut zeminle buluşana kadar şevlenir. Zeminin ve platformun **Özellikleri** kazı ve dolgu hacimlerini verir. Duvarları taşıyın, platform onları izler.

## Araç yolları, yürüme yolları ve avlular

{{ui:Kaplama}} seçin, **Yürüme yolu**, **Araç yolu** ya da **Avlu** seçin ve köşelere tıklayın. İlk köşeye yeniden tıklayın, çift tıklayın ya da bitirmek için {{key:Enter}}'a basın. Kaplama bitmiş tesviyeyi izler; türünü ya da kalınlığını **Özellikler** içinde değiştirin.

## Temeller tesviyeye uyar

Zemin modelde olduğunda, temel duvarları ve sürünme boşluğu temelleri onu izler: her duvar boyunca temel, zeminin dışındaki derinliğini korur ve zemin alçaldığında tam 8" adımlarla basamaklanır (bkz. [Duvarların altındaki temeller](topic:foundations)).

## CivilCraft'a verin

**CivilCraft için LandXML** (Arazi satırında ya da zeminin **Özellikleri** içinde), mevcut zemini ve bitmiş tesviyeyi bir LandXML dosyası olarak indirir. Gerçek tesviye, drenaj ve toprak işleri için CivilCraft'ta açın.

## Bilmeniz iyi olanlar

- Zemin, her yeni bina gibi bir IFC4 modeli gerektirir.
- Kot eğrileri, zemin katının planında zeminin **Özellikleri** içinde ayarlanan aralıkla gösterilir; her beşincisi daha kalındır.
- Zemin bir IFC arazi öğesi olarak kaydedilir (kapalı, üçgenlenmiş bir yüzey; bu yüzden kesitler onu keser). Yapı platformu ve kaplama onunla birlikte kaydedilir. Yeniden başlamak için zemini silin — platformu ve kaplaması da onunla gider.
