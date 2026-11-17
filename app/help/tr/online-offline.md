---
title: Çevrimiçi ve çevrimdışı
summary: "BimCraft siteden ne yükler, Çevrimdışı için kaydet IFC modellerini ve DWG çizimlerini bağlantısız nasıl açar ve açtığınız hiçbir şeyin neden yüklenmediği."
keywords: çevrimdışı, çevrimiçi, internet, bağlantı, ağ yok, uçak modu, saha ziyareti, çevrimdışı için kaydet, çevrimdışı hazır, yükleme, gizlilik, wasm, webassembly, ifc motoru, dwg, bulut
from: 39e5c7eb
---

BimCraft dosyalarınızı tarayıcı sekmesinin içinde okur. Açmak, incelemek, düzenlemek ve kaydetmek; çevrimiçi ya da çevrimdışı, dosyalarınızı hiçbir yere göndermez. [Çevrimdışı çalışma](common:offline) çevrimdışı kopyaların her uygulamada nasıl çalıştığını açıklar; bu sayfa BimCraft'a özgü olanı kapsar.

## Siteden ne yüklenir

| Parça | Çevrimdışı kopya yokken ne zaman yüklenir | Boyut |
|---|---|---|
| Uygulamanın kendisi, 3B görüntüleyici ve IFC motorunun kodu | BimCraft'ı açtığınızda | Birkaç megabayt |
| IFC motorunun WebAssembly kısmı | Sekmede açtığınız ilk IFC dosyası: "IFC motoru başlatılıyor…" | Yaklaşık 1.6 MB |

DWG ve DXF çizimleri, proje ve aile dosyaları ile klasörlere ek bir şey gerekmez: okuyucuları uygulamanın parçasıdır.

## BimCraft'ı çevrimdışı kullanım için kaydedin

1. BimCraft'ı çevrimiçiyken açın.
2. Üstteki uygulama çubuğunda {{ui:Çevrimdışı için kaydet}} öğesine tıklayın.
3. Düğmenin sayıyı artırmasını izleyin: örneğin "40 / 212 kaydediliyor". BimCraft'ın kopyası yaklaşık 11 MB'dır, çünkü IFC motorunu içerir.
4. {{ui:Çevrimdışı hazır}} yazısını bekleyin.

{{ui:Çevrimdışı hazır}} yazdığında IFC modelleri, DWG ve DXF çizimleri, proje dosyaları, klasörler ve bu yardım bağlantı olmadan açılır. Bir IFC ya da DWG'yi okuyucuları "ısıtmak" için önce açmanız gerekmez.

Kopyayı güncellemek ya da kaldırmak için {{ui:Çevrimdışı hazır}} düğmesine tıklayın ve {{ui:Yeniden kaydet (en yeni sürümü al)}} ya da {{ui:Çevrimdışı kopyayı kaldır}} seçin.

## Düğme ne der

| Düğme | Anlamı |
|---|---|
| {{ui:Çevrimdışı için kaydet}} | Bu tarayıcıda henüz çevrimdışı kopya yok. Bir tane kaydetmek için tıklayın |
| "*n* / *m* kaydediliyor" | Kaydediliyor; bitene kadar sekmeyi açık tutun |
| {{ui:Çevrimdışı hazır}} | Kaydedildi. Ne zaman olduğunu görmek için üzerine gelin; menü için tıklayın |
| {{ui:Kaydedilemedi}} | Bazı dosyalar indirilemedi. Bağlantınızı denetleyin ve yeniden denemek için tıklayın. Varsa son iyi kopya saklanır |
| {{ui:Çevrimdışı kullanım yok}} | Bu pencere çevrimdışı kopya tutamaz (özel bir pencere ya da yönetilen bir bilgisayar). Bkz. [Çevrimdışı çalışma](common:offline) |

:::offline
Çevrimdışısınız.

- Düğme {{ui:Çevrimdışı hazır}} diyorsa her tür dosya her zamanki gibi açılır.
- Demiyorsa yalnızca bu sekmenin zaten yüklediği şeyler çalışır: bu sekmede hiç yüklenmemiş bir okuyucu başlayamaz ve o türde bir dosya açmak, durum satırında tarayıcıdan bir hata gösterir. Yeniden çevrimiçi olana kadar sekmeyi yenilemeyin.
:::

## Bağlantı gerektirmeyenler

BimCraft tarayıcıda açıkken bunlar kayıtlı kopya olmadan bile çevrimdışı çalışır:

- Proje ve aile dosyalarını okumak ve klasörleri denetlemek.
- Açık bir modelde öğeleri seçmek, özelliklerini okumak ve IFC değerlerini düzenlemek.
- {{ui:IFC olarak farklı kaydet}} ve {{ui:CSV indir}}: ikisi de sekmede yapılan indirmelerdir.

## Henüz kullanılamayanlar

- **Bulut kaydı.** Dosyalar yalnızca bilgisayarınıza kaydedilir.

Bkz. [Dosyalarınızın nereye gittiği](common:your-files).
