---
title: Duvarlara, döşemelere ve çatılara malzeme boyayın
summary: Öğelere tuğla, dış cephe kaplaması, kiremit, ahşap veya fayans gibi bir malzeme verin; ya bütün öğeye ya da tek bir yüzüne; IFC'ye kaydedilir ve render edilmiş resimlerde gösterilir.
keywords: boya, malzeme, malzemeler, kaplama, yüzey kaplaması, doku, tuğla, dış cephe kaplaması, kiremit, çatı kaplaması, ahşap, taş, fayans, beton, sıva, çim, çakıl, cam, metal, duvar yüzü, iç, dış, döşeme kaplaması, oda, yüzey stili
from: fbfed676
---

{{ui:Boya}} araç çubuğunda malzeme kütüphanesini 3B görünümün üzerinde açar: tuğla ve blok, dış cephe kaplaması, çatı kaplaması, ahşap, taş, fayans, beton, sıva, zemin, cam ve metal.

## Öğeleri boyayın

1. {{ui:Boya}} öğesine tıklayın.
2. Bir malzemeye tıklayın.
3. 3B görünümdeki öğelere tıklayın. Her tıklama tıkladığınız öğeyi boyar.

Birçoğunu aynı anda boyamak için önce onları seçin ({{key:Ctrl}}+tıklama veya bir [arama](topic:find) ile), sonra malzemeye tıklayın: seçili her öğe tek adımda malzemeyi alır.

Öğe, malzemenin rengini 3B görünümde hemen gösterir. Dokusu [render edilmiş bir resimde](topic:render) görünür. {{key:Esc}} ya da {{ui:Kapat}} boyamayı bitirir.

## Tek bir yüzü boyayın

{{ui:Yalnızca tıklanan yüz}} seçeneğini seçin, sonra istediğiniz yüze tıklayın: bir duvarın dış yüzü dış cephe kaplaması, iç yüzü başka bir kaplama; bir döşemenin üst yüzü ahşap, alt yüzü olduğu gibi. Öğenin geri kalanı malzemesini korur.

Bir yüz, öğenin kendi yönlerinden bulunur; bu yüzden öğeyi taşıdığınızda veya döndürdüğünüzde aynı yüz kalır.

Döşemeleri oda oda boyamak için her odaya kendi döşemesini verin ({{ui:Çiz}} › {{ui:Döşeme}} › **Bu oda**, bkz. [Odalar, döşemeler, tavanlar ve çatılar](topic:floors-and-roofs)), sonra her döşemenin üst yüzünü boyayın.

## Malzemeyi kaldırın

Çizgili rengi ({{ui:Malzeme yok}}) tıklayın, sonra öğeye tıklayın. Üzerindeki her malzeme, yüzleri dahil, gider.

## Dosyada

Boyama IFC'yi değiştirir (her adım bir adım olarak; {{key:Ctrl+Z}} geri alır) ve düz IFC olarak kalır:

- boyanan her öğe, malzemesini adlandıran `CadCraft_Render` özellik kümesini alır ve boyanan her yüz için bir özellik alır;
- gövdesi, malzemenin rengiyle bir yüzey stili alır; böylece diğer BIM programları rengi gösterir. IFC4'te stil dokuyu da adlandırır.

BimCraft boyadığınız bir duvarı yeniden şekillendirdiğinde (örneğin ucunu taşıdığınızda), duvar malzemesini ve rengini korur: BimCraft'ta, resimlerde ve diğer programlarda.

:::note
Dokuları BimCraft'ın kendisi çizer: çevrimdışı çalışırlar ve her şey için ücretsizdir (CC0). Kendi resim dokularınız henüz yapılmadı.
:::

## 3B görünümde dokular

Boyalı bir tuğla duvar tuğlalarını, bir ahşap döşeme tahtalarını gerçek boyutlarında gösterir; boya uygulanır uygulanmaz. Düz renkleri görmek için Boya paletindeki **Dokuları 3B görünümde göster** kutusunun işaretini kaldırın (çok büyük bir model bunları kendiliğinden kapatır ve bunu söyler). Özelliğe göre renk her zaman kendi renklerini gösterir. Dokular program tarafından çizilir, bu yüzden hiçbir şey indirilmez; render'lar ve glTF dosyası her iki durumda da dokuları taşır.
