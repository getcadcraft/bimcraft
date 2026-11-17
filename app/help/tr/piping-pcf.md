---
title: Boruyu bir stres ya da izometrik programa gönderin ve geri okuyun (PCF)
summary: Modelin boru hatlarını bir PCF boru bileşeni dosyası olarak yazın ya da bir boru stres veya izometrik programından gelen bir PCF dosyasını okuyup borularını hatlar olarak çizin.
keywords: pcf, boru bileşeni dosyası, boru stresi, izometrik, izometrikler, dışa aktar, içe aktar, tesisat, çelik boru, bir işi taşıma, diğer yazılımlar
from: 24f91355
---

## Neler yapacaksınız

PCF, boru stresi ve izometrik programların okuyup yazdığı düz metin dosyasıdır. Her boru hattının bileşenlerini, uç noktaları ve çaplarıyla listeler.

## Dışa aktarma

1. Boru aracını seçin. Seçenekler satırı **PCF dışa aktar**'ı gösterir.
2. Tıklayın. Modeldeki her boru hattı yazılır: düz boru, dirsekler (90 derecelik dönüş, aksi halde bir bükümdür), dal noktalı te'ler, redüksiyonlar ve vanalar.
3. Dosya milimetre kullanır. Çaplar milimetre cinsinden nominal çaplardır. Bir dirseğin merkez noktası, iki kolunun birleştiği köşesidir.

PCF çelik alın kaynaklı boru için yazılır. Başka bir malzemedeki bir hat da çelik bileşen anahtarlarıyla yazılır ve Sorunlar panelinde not edilir.

## İçe aktarma

1. Boru aracını seçin ve **PCF içe aktar…**'a tıklayın, sonra dosyayı seçin.
2. Düz borudan dirseklere, bükümlere, vanalara ve flanşlara kadar olan kısım, geçerli seviyede tek bir hat olur. Bir boyut değişikliği yeni bir hat başlatır. Bir te'nin dalı kendi hattı olur ve te merkezinde başlar.
3. Model kendi bağlantı parçalarını yerleştirir. Redüksiyonlar ve te'ler kopyalanmaz: farklı boyutlardaki hatlar ya da bir dal birleştiği yerde görünürler.

:::note
Dosyadaki yükseklikler, geçerli seviyenin üstündeki yükseklikler olarak okunur. Yükler, mesnetler ve stres analizinin kendisi bir PCF dosyasında yoktur ve gelmez.
:::

## Gelenleri kontrol edin

- Her boru hattının toplam boru uzunluğu kaynakla eşleşmelidir.
- Sorunlar paneli, her biri bir kez olmak üzere, merkez noktası her iki uçtan eşit uzaklıkta olmayan bir dirseği, uzunluğu olmayan boruyu ve standart bir boyut olmayan bir çapı listeler.

## IFC dosyasındaki borular

Bir IFC dosyası açıkken **PCF dışa aktar**, çizdiğiniz hatların yanına kendi boru segmentlerini, bağlantı parçalarını ve vanalarını da yazar. Bir segment uçlarını bağlantı noktalarından ya da gövdesinin uçlarından alır. Bağlantı noktası olmayan bir bağlantı parçası dışarıda bırakılır ve Sorunlar paneli bunu söyler. Model çizilmiş hat içermiyorsa yalnızca IFC'den dışa aktarabilirsiniz.

İçe aktarmada, dosyadaki destekler, olet'ler, flanşlar, contalar ve kapaklar çizilmez. Sorunlar paneli her birinden kaç tane bırakıldığını listeler, böylece hiçbir şey sessizce kaybolmaz.
