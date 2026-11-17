---
title: Tarayıcılar, cihazlar ve bellek
summary: BimCraft'ta Chrome, Edge, Firefox ve Safari arasında, Mac, Windows ve Linux'ta, fare, izleme paneli veya dokunmayla neyin farklı olduğu ve uygulamanın ne kadar büyük bir dosya alabildiği.
keywords: tarayıcı, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dokunma, dokunmatik yüzey, bellek, büyük dosyalar, webgl, performans
from: fd8acba1
---

BimCraft, Chrome, Edge, Firefox ve Safari'nin güncel sürümlerinde, Mac, Windows ve Linux üzerinde çalışır. 3B görünüm WebGL gerektirir; bunu her güncel tarayıcı destekler. Uygulamaların genel olarak neye ihtiyaç duyduğu için [Tarayıcılar ve bilgisayarlar](common:browsers) konusuna bakın.

## Klasör açma

| Tarayıcı | {{ui:Klasör aç}} ne yapar | Klasörü sürükleyip bırakma | {{ui:Son klasörler}} |
|---|---|---|---|
| Chrome, Edge | Tarayıcının klasör seçicisi açılır, ardından "Siteye dosyaları görüntüleme izni verilsin mi?" sorulur: **Dosyaları görüntüle** düğmesine tıklayın | Sormadan açılır | Evet, seçilen veya sürüklenen klasörler için |
| Firefox | Sistemin klasör seçicisi | Sormadan açılır | Hayır |
| Safari | Sistemin klasör seçicisi, **Yükle** düğmesiyle (hiçbir şey yüklenmez) | Sormadan açılır | Hayır |

Arka planda: Chrome ve Edge, Dosya Sistemi Erişimi seçicisini kullanır ve klasörü hatırlayabilir. Firefox ve Safari daha eski klasör seçicisini kullanır; bu seçici klasördeki her dosyayı bir kerede verir ve hatırlanamaz. Sürüklenen bir klasör her tarayıcıda girdi girdi okunur.

:::chromium
Brave ve bazı diğer Chromium tarayıcıları klasör seçicisini kapatır. BimCraft bunun yerine sistemin klasör seçicisini kullanır; tarayıcı "Bu siteye *n* dosya yüklensin mi?" diye sorabilir. Hiçbir şey yüklenmez; dosyalar yalnızca sekmeye gider. Klasörü sürükleyip bırakmak bu soruyu önler.
:::

## Mac, Windows ve Linux

- Şöyle yazılan kısayollar: {{key:Mod+S}} ve {{key:Mod+Z}}; Mac'te Command, Windows ve Linux'ta Ctrl'dir.
- {{key:Ctrl+Shift+F}} (ekran modları) her platformda Control'dür; Mac dahil.
- Dosya iletişim kutuları ve indirilenler klasörü sisteminize aittir.

## Fare, izleme paneli ve dokunma

| Giriş | 3B görünüm | 2B çizim |
|---|---|---|
| Fare | Sol tuşla sürükleme döndürür, sağ tuşla sürükleme kaydırır, tekerlek yakınlaştırır, tıklama seçer | Her sürükleme kaydırır, tekerlek yakınlaştırır, çift tıklama {{ui:Sığdır}} yapar |
| İzleme paneli | Tıklayıp sürükleme döndürür; {{key:Shift}} veya {{key:Mod}} tuşuyla sürükleme kaydırır; iki parmakla kaydırma ya da kıstırma yakınlaştırır | Tıklayıp sürükleme kaydırır; iki parmakla kaydırma ya da kıstırma yakınlaştırır |
| Dokunma | Bir parmak döndürür, iki parmak kıstırır ve kaydırır, dokunma seçer | Bir parmak kaydırır; henüz kıstırarak yakınlaştırma yok; {{ui:Sığdır}} düğmesine dokunun |

Mac izleme panelinde sağ tıklama, iki parmakla tıklamadır (ya da Control-tıklama). Bkz. [Tuşlar, fareler ve izleme panelleri](common:keys).

Tabletler ve telefonlar tek dosyaları açıp bakabilir; ancak ekran küçüktür, birçok mobil tarayıcı klasör seçemez ve büyük modeller belleğe sığmayabilir. En iyi sonuç bir bilgisayarda alınır.

## Büyük dosyalar ve bellek

BimCraft'ın okuduğu her şey tarayıcı sekmesinin belleğinde tutulur. Bir sekmenin ne kadar kullanabileceği BimCraft'tan çok tarayıcıya ve bilgisayarınıza bağlıdır.

| Dosya | Ne kadarı okunur | Ne beklemelisiniz |
|---|---|---|
| IFC | Dosyanın tamamı ve ondan oluşturulan 3B geometri | Bilgisayarınıza ve tarayıcınıza bağlıdır; birkaç yüz megabaytlık bir model dizüstü bilgisayar için fazla olabilir. 1.5 milyon üçgenin üzerinde kenarlar kapatılır |
| Proje ve aile dosyaları | Boyutları ne olursa olsun yaklaşık 40 KB ila 100 KB | Çok büyük merkezi modeller bile bir anda açılır; ağ sürücüsünden de |
| DWG ve DXF | Dosyanın tamamı | Çok büyük çizimlerde "Bu çizim çok büyük; yalnızca bir kısmı gösteriliyor." yazar |
| Klasörler | Dosya listesi ve model başına birkaç kilobayt | En fazla 20.000 dosya |

Bir sekmenin belleği tükenirse tarayıcı kendi hata sayfasını gösterir (Chrome'da "Aw, Snap!" gibi). Diğer sekmeleri kapatın, BimCraft'ı yeniden yükleyip tekrar deneyin ya da daha fazla belleği olan bir bilgisayar kullanın.

## İlgili

- [Çevrimiçi ve çevrimdışı](topic:online-offline)
- [Sorun giderme](topic:troubleshooting)
