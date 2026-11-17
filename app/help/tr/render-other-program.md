---
title: Resmi başka bir programla çizin
summary: Kendi ışın izleyicimiz Render resmini çizer; başka bir program ancak CadCraft Studio'daki bir render-motoru eklentisiyle çizebilir. Neler aktarılır ve neden bazı programlar hiç önerilmez.
keywords: render, motor, dış program, eklenti motoru, studio, arka plan, kuyruk, usd, gltf, çizen, blender, gpl
from: 652b413c
---

{{ui:Render}} içindeki resmi **kendi motorlarımız** çizer: Hızlı ve Işın izleyici, tarayıcıda ve CadCraft Studio'da. Başka bir program ancak bir **render-motoru eklentisi** onu getirdiğinde resmi çizebilir: bkz. [Eklentiyle bir render motoru ekleyin](topic:render-engine-addons). Sahneyi başka bir programa götürüp orada çalışmaya devam etmek için [Sahneyi başka bir programda açın](topic:render-open-in) ya da [Sahneyi bir oyun motoruna gönderin](topic:render-unreal) kullanın.

## Bir eklentinin motoruyla bir resim çizin

1. Ayarlar › Eklentiler'de eklentiyi açın. Motoru, {{ui:Render}} iletişim kutusunun Motor listesinde görünür.
2. Onu seçin. Kendi ayarları Motor listesinin altında görünür.
3. {{ui:Render}} düğmesine tıklayın. Studio'da, bir eklenti ilk kez bir program çalıştırdığında Studio bunu kendi iletişim kutusunda sorar. Çizim sırasında ilerleme gösterilir; {{ui:Durdur}} onu sonlandırır. Resim, onu çizen motorla işaretlenmiş olarak görünür.

JavaScript ile yazılmış bir motor tarayıcıda da çalışır. Bu bilgisayarda bir program çalıştıran bir motor yalnızca Studio'da çalışır; tarayıcıda kaydedilecek bir dosya olarak görünür.

## Ne aktarılır

Motor bir **paket** alır: model bir USD dosyası olarak (ve isterse bir glTF dosyası olarak), tam malzeme değerleri, güneş ve gökyüzü, açık olan her lamba ile güç ve ışık profili, kamera ve pozlama içeren bir ayarlar dosyası. Her program ışığı, tonu ve örneklemeyi kendi yolunda yapar; bu yüzden resimler kamera, güneş, lambalar ve pozlama açısından benzer olur, piksel piksel aynı değildir.

## CadCraft'ın asla çalıştırmadığı programlar

CadCraft hiçbir zaman GNU GPL lisansı altındaki bir programı başlatmaz ve bunu hiçbir zaman bir motor ya da bir … içinde aç hedefi olarak listelemez. Blender bunlardan biridir; bu yüzden Motor listesinde yer almaz. {{ui:Render}} içinden kaydedilen bir USD ya da glTF dosyası, bu dosyaları okuyan her program gibi onda da açılabilir.

:::note
Panorama ve stereo kameralar ile bir gökyüzü resmi (bunun yerine gökyüzünün renkleri kullanılır) başka bir programa aktarılmaz. Başka bir programda yapılan hiçbir şey modele geri dönmez.
:::
