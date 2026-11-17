---
title: Yapı öğelerini taşıyın, kopyalayın, hizalayın ve dağıtın
summary: "Duvarları, döşemeleri, kolonları ve yerleştirilmiş öğeleri bir temel nokta ve ikinci bir nokta ya da yazılan bir uzunlukla taşıyın, taşırken kopyalayın ve planda ya da 3B'de bir seçimden sıraya dizin ya da eşit aralıklarla dağıtın."
keywords: taşı, kopyala, hizala, dağıt, aralık, ofset, temel nokta, yer değiştirme, duvarlar, kolonlar, döşemeler, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Ne yapacaksınız

Bir duvarı, bir kolonu, bir döşemeyi ya da yerleştirilmiş bir kütüphane öğesini yeni bir yere kaydırın, kopyalarını alın ya da birkaçını yeniden çizmeden sıraya dizin.

## Adlar ve tuşlar

Komutlar {{ui:Taşı}}, {{ui:Hizala}} ve {{ui:Dağıt}} olarak adlandırılır; komut satırına, CadCraft çizim uygulamasında olduğu gibi, `MOVE`, `ALIGN` ve `DISTRIBUTE` yazabilirsiniz. Bir fark var: BimCraft'ta {{key:M}} Ölçüm'dür, bu yüzden Taşı'nın kendi tuşu vardır: {{key:Shift+M}}. Araçlar **Derleme** menüsündedir.

## Taşı

1. Planda ya da 3B görünümde taşınacakları seçin. Duvarlar, döşemeler, kolonlar ve yerleştirilmiş kütüphane öğeleri tek bir seçimde birlikte alınabilir.
2. {{key:Shift+M}} tuşuna basın ya da {{ui:Taşı}} seçin.
3. Bir temel nokta, sonra ikinci bir nokta tıklayın. Ya da temel noktadan sonra bir uzunluk yazın ve {{key:Enter}} tuşuna basın: öğe, işaretçinin temel noktadan gösterdiği yönde gider. `dx,dy` (ya da `@dx,dy`) ya da `uzunluk<açı` da yazabilirsiniz.
4. {{ui:Kopyala}} açmak için {{key:C}} tuşuna basın: her taşıma kopya yapar ve bir sonraki için hazır kalır. Durdurmak için {{key:Esc}} tuşuna basın.

Her iki nokta da 3B görünümde tıklanabilir: Taşı açıkken işaretçi katın zemin yüksekliğiyle buluşur, bu yüzden oraya tıklamak planda bir nokta olur. Bunun yerine başka bir öğeyi seçmek için tıklarken {{key:Shift}} basılı tutun. Plan, Üst, Ön ya da Yan görünümü istediğiniz gibi kullanın: noktalar her zaman o kattadır.

Bir duvar kapılarını ve pencerelerini de götürür. Çizilmiş bir döşeme kendi açıklıklarını götürür. Duvarları izleyen odalar, döşemeler ve tavanlar güncellenir. Taşınan duvara birleşmiş duvarlar yerinde kalır.

Her taşıma tek bir değişikliktir: bir {{key:Mod+Z}} onu geri alır ve bir Canlı TeamWork oturumundaki herkese iletilir. Yerleştirilmiş bir kütüphane öğesi bu yolla kopyalanamaz; {{ui:Düzenle}} › {{ui:Kopyala}} ve {{ui:Yapıştır}} kullanın.

## Hizala

İki ya da daha fazla öğe seçin, {{ui:Hizala}} öğesini seçin, sonra bir kenar (sol, merkez, sağ, üst, dikey orta ya da alt) ve neye göre hizalanacağını belirtin: seçilen küme, ilk seçilen, son seçilen ya da tıkladığınız bir nokta. Çubukta {{ui:Hizala}} düğmesine basın.

## Dağıt

Üç ya da daha fazla öğe seçin, {{ui:Dağıt}} öğesini seçin, sonra bir yön (yatay ya da dikey) ve aralığı belirtin: aralarındaki eşit boşluklar ya da eşit merkezler. Uçtaki iki öğe yerinde kalır.

Hizala ya da Dağıt'ın taşıdığı duvarlar, Taşı'da olduğu gibi birleşimlerini korur: taşınan bir duvara birleşik bir duvar, birleşik kalmak için ucunu kendi doğrultusunda kaydırır; ona dayanan bölme duvarlar birlikte gelir; ikisi de taşınan birleşik iki duvar, yeni çizgilerinin buluştuğu köşeyi korur. Odalar kapalı kalır. Bu, **Değişiklikler** içinde tek bir adımdır.
