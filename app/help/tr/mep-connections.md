---
title: Boru ve kanalları ekipmana bağlayın
summary: Bir boruyu ya da kanalı bir bağlantı noktasında başlatın ya da bitirin; böylece bağlantı noktasının boyutunu ve sistemini alır ve ona sabit kalır. Sonra bağlantıları denetleyin: açık bağlantı noktaları, boyut ve sistem uyumsuzlukları, kaynağı olmayan koşular.
keywords: mep, bağlama, bağlantı, bağlantılar, bağlantı noktası, bağlantı noktaları, açık bağlantı noktası, boyut uyumsuzluğu, sistem uyumsuzluğu, kaynak, bağlantıları denetle, sabit, takip et, ekipmanı taşı, ifcrelconnectsports, koordinasyon
from: 29144fb0
---

## Ne yapacaksınız

Koşuları ekipmana bağlayın ki model tek bir bağlı sistem olsun: bir pompanın çıkışı, ondan çıkan boruya; bir difüzörün boğazı, dal kanalına. Sonra BimCraft'ın bağlı olmayanları listelemesine izin verin.

## Bir bağlantı noktasından çizin

1. {{ui:Boru}} ya da {{ui:Kanal}} seçin.
2. İşaretçiyi bir ekipmanın bir bağlantı noktasının üzerine getirin (küçük daireler; açık bağlantı noktası uyarı rengiyle çizilir). İşaretçi ona yapışır ve **bir bağlantı noktasında** der.
3. Tıklayın: koşu bağlantı noktasının yüksekliğinde başlar ve **onun boyutunu ve sistemini alır** (boru ayrıca sistemin olağan malzemesini de alır). Durum satırı neyi aldığını söyler.
4. Her zamanki gibi çizmeye devam edin. Bir koşuyu başka bir bağlantı noktasında bitirmek, o ucu da sabitler.

Bir koşunun bir bağlantı noktasındaki ucu ona **sabittir**: ekipmanı (Özellikler'de) taşıyın ya da döndürün, koşunun ucu onunla birlikte gider; koşuyu düzenlerseniz o uç bağlantı noktasında kalır. Koşunun diğer köşeleri olduğu yerde kalır, bu yüzden büyük bir taşımadan sonra ilk bacak bağlantı noktasından açılı olarak ayrılabilir: sonraki köşeyi de taşıyın.

## Bağlantıları denetleyin

{{ui:Derleme}} açın ve {{ui:Bağlantıları denetle}} tıklayın. Çubuğun altındaki liste şunları gösterir:

| Satır | Ne anlama gelir |
|---|---|
| Bir bağlantı noktası bağlı değil | Bir ekipmanın, hiçbir şeyin çizilmediği bir bağlantısı var |
| Ucunda hiçbir şey yok | Bir koşu havada biter |
| Birleşen farklı boyutlu bağlantı noktaları | Bir boyuttaki bir koşu, redüktör olmadan başka boyutta bir bağlantı noktası ya da koşuyla buluşur (bir borunun nominal çapı, bir kanalın şekli ve kenarları) |
| Birleşen farklı sistemli bağlantı noktaları | Örneğin bir besleme difüzörüne bağlı bir dönüş kanalı |
| Bir boru bir kanala bağlı | İki farklı türden bağlantı buluşur |
| Ağındaki hiçbir ekipman onu beslemiyor | Bir koşunun bağlı olduğu, ne kadar uzakta olursa olsun, hiçbir çıkışı olmayan bir şey var. Drenaj, yağmur suyu ve havalandırmalara bu sorulmaz: suları tesisat armatürlerinden gelir |
| Artık modelde olmayan bir ekipmanın bağlantı noktasına sabit | Ekipman silinmiş; ucu yeniden çizin ya da koşuyu silin |

Hatalar önce listelenir. Adlandırdığı şeyi seçmek için bir satıra tıklayın. {{ui:Kapat}} listeyi gizler. Denetim modeli çizildiği gibi okur: bağlantıları ve boyutları denetler, asla akışları, basınçları ya da dengelemeyi denetlemez.
