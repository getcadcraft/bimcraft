---
title: Boru ve kanalları yapıyla karşılaştırın
summary: Boru ve kanalların hazır çakışma kümelerini duvarlar, döşemeler, kirişler ve kolonlara karşı çalıştırın; yalıtımından ve bir aralıktan daha yakın geçen koşuları bulun ve koşuların duvar ve döşemelerden geçmek için ihtiyaç duyduğu boşlukları CSV ve BCF olarak listeleyin.
keywords: mep, çakışma, çakışma denetimi, koordinasyon, yapı, duvarlar, döşemeler, kirişler, kolonlar, açıklık, yumuşak çakışma, yalıtım, aralık, boşluk, geçiş, kılıf, çekirdek, yapı işleri, bcf, csv
from: 2d597f01
---

## Ne yapacaksınız

Hizmetlerin binaya uyduğundan emin olun: yapıya neyin girdiği, neyin ona çok yakın geçtiği ve duvar ve döşemelerde nerede delik gerektiği. Soldaki panelde {{ui:Çakışma denetimi}} açın; **Yapıya karşı borular ve kanallar** bölümü olağan denetimin altındadır.

## Sert çakışmalar

İki küme listesi artık **Borular ve kanallar**, **Duvarlar**, **Döşemeler ve çatılar**, **Kirişler**, **Kolonlar** ve **Yapı** (dördü birden) seçeneklerini sunar; her birinde kaç öğe olduğu yazar. İlkini ve sonuncuyu seçip denetimi çalıştırmak için {{ui:Borular ve kanallar × yapı}} tıklayın; ya da kendiniz herhangi bir çifti seçip {{ui:Çalıştır}} tıklayın. Bkz. [Çakışmaları denetleyin](topic:clash-check).

## Açıklıklar

Bazı hizmetlerin etrafında yer gerekir: yalıtımları ve çalışma ya da bir kılıf için alan.

1. Bir boru ya da kanal koşusuna Özellikler'de **Yalıtım** kalınlığını verin (bunun için bir şey çizilmez).
2. Çakışma denetiminde **Boru ve kanal çevresindeki aralığı** (mm) yazın.
3. {{ui:Açıklıkları denetle}} tıklayın: bir duvara, döşemeye, kirişe ya da kolona, yalıtımı ile aralığın toplamından daha yakın her parça, sahip olduğu mesafe ve istediği mesafe ile listelenir. İkisini görmek için bir satıra tıklayın.

Bir duvar ya da döşemeden geçen bir parça açıklık değil, boşluktur ve orada listelenir.

## Gereken boşluklar

{{ui:Gereken boşluklar}} tıklayın. Bir koşunun merkez çizgisi bir duvar ya da döşemeden geçtiğinde, BimCraft ihtiyaç duyulan boşluğu listeler: yuvarlak boru ya da kanal için yuvarlak, aksi halde dikdörtgen; boyutu koşunun dış ölçüsü artı yalıtımının iki katı artı aralığın iki katı kadar ve koşunun geçtiği yere ortalanmış. Bir satıra tıklayıp koşuyu ve duvarı ya da döşemeyi görün.

- {{ui:Boşluklar CSV olarak}}: her boşluk için bir satır; koşu, boyutu ve yalıtımı, boşluğun boyutu, içinden geçtiği öğe ve GlobalId'si, kat, merkezin X, Y ve Z değerleri ve koşunun ne kadar geçtiği.
- {{ui:Boşluklar BCF sorunları olarak}}: her boşluk için bir sorun; boşluğa bakan bir kamera ile seçilen koşu ve öğe. Yapısal mühendisin programı içindir.

:::note
Hiçbir şey kesilmez: boşluklar, onları boyutlandıracak kişiler için bir listedir. Aralığı siz yazarsınız; hiçbir yönetmelik boşluğun ne kadar büyük olması gerektiğini söylemez. Kirişler ve kolonlar boşluk değil çakışmadır: bir borunun birinden geçip geçemeyeceği yapısal mühendisin kararıdır.
:::
