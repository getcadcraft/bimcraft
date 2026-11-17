---
title: Telefon ya da lazer taramasından duvarlar ve kapılar
summary: Bir odanın taramasını, tek tek kabul ettiğiniz önerilen duvarlara, kapılara ve odalara çevirin.
keywords: tarama, telefon taraması, lidar, nokta bulutu, taramadan duvarlar, taramadan kapılar, oda taraması, ply, e57, las, obj, öner
from: a4ef0f10
---

## Ne yapar

Bir tarama açıkken (PLY, E57 ya da LAS gibi bir nokta bulutu ya da OBJ gibi bir ağ), BimCraft taramayı plan yüksekliğinde keser, binayla hizalar ve uzun, ince nokta dizilerini arar: bunlar duvarlardır. Bir çizgi üzerinde, iki dizi arasında bir kapı genişliğine yakın bir boşluk, kapılı tek bir duvar olur. Bir alanı kapatan duvarlar bir oda oluşturur.

## Kabul edene kadar hiçbir şey çizilmez

Duvarlar ve kapılar bir öneri listesi olarak gelir (Öneri modunda değişikliklerdir): doğru olanları tutun, diğerlerini reddedin; tuttuğunuzun hepsi tek bir geri al adımında çizilir. Odalar kendiliğinden belirir.

## Neleri denetler

Kapanmayan duvarlar, bir duvarın kalınlığından kısa duvar parçaları ve çevresinde hiçbir duvar olmayan kapı boyutunda bir boşluk, konumuyla birlikte **Sorun** olarak bildirilir; böylece taramaya orada bakabilirsiniz.

## Denetlenene kadar doğrulanmamış

Bir taramadan kabul ettiğiniz duvarlar, kontrol edildi olarak işaretleyene kadar doğrulanmamış olarak işaretlenir: planda kesikli bir kutu ve bir "?". Bkz. [Öğeleri kontrol edildi ya da sahada doğrulandı olarak işaretleyin](topic:verification).

## Yapamadıkları

- İki dik yönde uzanan duvarları bulur. Eğik ya da eğri bir duvar bulunmaz.
- Bir seferde bir kat. Pencereler bulunmaz (bir pencere, yalnızca kesim pencere eşiği yüksekliğindeyse bir boşluk olur).
- Oda taramalarında ve ağlarda, üretilmiş olanlarda denendi; henüz gerçek bir telefon taramasında denenmedi. Gerçek bir taramada ne kadar iyi çalıştığı (uzun bir yürüyüşte kayma, duvarlara dayalı mobilya, cam, açık kapılar) bilinmiyor; gerçek taramalarda ayarlamak bir sonraki adımdır. Kabul etmeden önce her öneriyi taramaya karşı denetleyin.
