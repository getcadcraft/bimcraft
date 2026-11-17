---
title: Bir yapay zekâ asistanının modelinizle çalışmasına izin verin
summary: Ayarlarda asistanları açın; bilgisayarınızdaki bir asistan CadCraft Studio üzerinden öğeleri bulabilsin, özelliklerini okuyabilsin, görünümde izole edebilsin ve duvar, kapı, pencere, döşeme, kat ve ızgara çizebilsin. Siz açana kadar kapalıdır.
keywords: yapay zeka, ai, asistan, mcp, betik, otomasyon, studio, öğe bulma, izole et, özellikler, izinler, bağlantıyı kes, etkinlik, duvar çiz, kapı ekle, pencere ekle, katlar, ızgaralar, döşemeler, geri al, kaydet, komut satırı, cli, başsız, yapay zeka asistanlarıyla kullan
from: c5ee595b
---

## Neler öğreneceksiniz

Bir yapay zeka asistanının (MCP konuşan herhangi bir asistan) açık IFC modelinize bakmasına ve içine çizmesine nasıl izin verileceğini, neler yapıp yapamayacağını ve nasıl durdurulacağını.

## Bir asistan BimCraft'ta neler yapabilir

| İstediği | Ne olur | Gerekli |
|---|---|---|
| Öğeleri bulmak | Sınıfa, kata, ada ya da özellik değerine göre öğelerin bir listesini alır; tıpkı **Bul**'un yaptığı gibi | Okuma |
| Özellikleri okumak | Tek bir öğenin niteliklerini, tipini, özellik kümelerini ve miktarlarını alır; tıpkı **Özellikler**'in gösterdiği gibi | Okuma |
| Modeli tanımlamak, duvarları listelemek | Katları, duvarları, kapıları, pencereleri, odaları, döşemeleri, ızgaraları ve kolonları; her duvarın uçlarını, tipini ve yüksekliğini alır | Okuma |
| İzole etmek, geçirgen yapmak, gizlemek ya da göstermek | 3B görünüm, {{ui:Göster}} menüsünü kullandığınız gibi değişir | Görünümü değiştirme ve çizme |
| Duvar, kapı, pencere, döşeme, kat ya da ızgara çizgisi çizmek | Model, {{ui:Çiz}} araçlarını kullandığınız gibi değişir: duvarlar birleşir, odalar, döşemeler ve çatılar izler | Görünümü değiştirme ve çizme |
| Bir adı ya da bir özellik değerini değiştirmek | Bir öğenin Ad, Açıklama, Nesne türü ya da Etiket alanı ya da bir özellik değeri. Diğer öğelerle paylaşılan bir değer önce onun için kopyalanır; tipinin bir değeri yalnızca asistan söylediğinde değişir, çünkü o tipteki her öğe izler | Görünümü değiştirme ve çizme |
| Taşımak, silmek, duvarları, kapıları ve pencereleri değiştirmek | Öğeler, barındırdıkları şeylerle birlikte taşınır ya da silinir; {{ui:Çiz}} araçlarıyla çizilen duvarlar uçlarına ya da tipine göre, kapılar ve pencereler yerine, boyutuna ya da tipine göre değişir; odalar ve birleşimler izler | Görünümü değiştirme ve çizme |
| Bir listeyi kurmak, düzenlemek ve okumak | "Kat bazında kapı listesi, yangın dayanımı ve donanımla": asistan listenin adını, sütunlarını (bir özellik ya da etiket bir sütun olur) ve gruplamasını belirtir; BimCraft onu modelden doldurur ve düzenler; asistanın belirtmediğini ofis standardından alır. Kurulum Listelerinize katılır. Geri gelen her satır öğelerini adlandırır, böylece onları seçebilir | Okumak için okuma; bir kurulumu kaydetmek için görünümü değiştirme ve çizme |
| Bir listeyi dışa aktarmak | CSV, Excel ya da sekmeyle ayrılmış metin; Google E-Tablolar'a yapıştırmak için (hiçbir şey Google'a gönderilmez) | Dışa aktarma |
| Oda kaplamalarını okumak ve ayarlamak | Kaplama türleri, her odanın zemin, duvar ve tavan kaplaması, bölgeler; alanlar, karo sayıları ve taban hacimleri kaplama listelerinden gelir | Okuma; ayarlamak için görünümü değiştirme ve çizme |
| Öğeleri seçmek, asistanın kendi son adımını geri almak | Öğeler görünümde seçilir; son adımı geri alınır | Görünümü değiştirme ve çizme |
| Kaydetmek | Her değişikliği içeren yeni bir IFC dosyası; {{ui:IFC olarak farklı kaydet}} öğesinin yaptığı gibi (orijinal asla değiştirilmez) | Kaydet |
| USD dışa aktarmak | Açık modeller OpenUSD (.usda, .usdc ya da .usdz) olarak; araç çubuğundaki {{ui:USD}} öğesinin yazdığı gibi | Dışa aktarma |
| Bir resim render etmek, render kuyruğunu çalıştırmak | 3B görünümün bir resmi; {{ui:Render}} iletişim kutusunun Render ayarlarınızla yaptığı gibi, başka ayar istemediği sürece; ya da iletişim kutusunun kuyruğuna eklenmiş yüksek kaliteli resimler, sırayla render edilir (kuyruk WebGPU gerektirir). Modelde hiçbir şey değişmez ([Bir resim render edin](topic:render)) | Dışa aktarma |

Bir asistanın yaptığı her değişiklik, **Değişiklikler** içinde "Asistan: …" adıyla tek bir adımdır (örneğin "Asistan: 4 duvar ekle"); böylece {{key:Mod+Z}} tüm eylemini geri alır ve adımın kimin olduğunu görebilirsiniz. Pencerede dosya açamaz: modeli siz açarsınız; asistan açık olanla çalışır.

## Etkinleştirin

Asistanlar BimCraft'a bilgisayarınızdaki CadCraft Studio üzerinden ulaşır; düz tarayıcının bunun için bir yolu yoktur.

1. {{ui:Ayarlar}} öğesini açın ve **BimCraft** sekmesini seçin.
2. **Asistanlar** altında **Yapay zeka asistanlarının ve betiklerin BimCraft'ı kullanmasına izin ver** kutusunu işaretleyin.
3. **Oku** sizin için işaretlidir. Asistan görünümü izole edip gizleyecek ve çizecekse **Görünümü değiştir ve çiz** kutusunu da işaretleyin; yeni bir dosya olarak modeli kaydedecekse **Kaydet** kutusunu işaretleyin.
4. Asistanı Studio'da bağlayın (Studio, adresi ve yapıştırılacak ayarları gösterir).

## Bir asistan bağlıyken

Sağ panelin üstündeki bir not, hangi asistanın bağlı olduğunu ve neler yapabileceğini söyler. Oturumunu hemen sonlandırmak için {{ui:Bağlantıyı kes}} öğesine tıklayın; devam etmek için yeniden bağlanması gerekir.

Ayarlarda **Asistanlar** altındaki **Etkinlik**, asistanın yaptığı her çağrıyı, en yeniden eskiye, çalışıp çalışmadığıyla birlikte listeler.

:::tip
Düz sözcüklerle sorun, örneğin "Kat 1'deki dış duvarları izole et", "hangi kapıların yangın dayanımı yok?" ya da "Kat 1'de güney duvarında bir kapısı olan 6 x 4 metrelik bir oda çiz". Asistan öğeleri bulur ve görünümünüzde gösterir ya da çizer.
:::

## Pencere olmadan: betikler ve komut satırı

Aynı çizim araçları, adını verdiğiniz klasörlerdeki IFC dosyalarında, hiçbir pencere açık değilken de çalışır: CadCraft'ın MCP sunucusu ve komut satırı yeni bir bina başlatabilir ya da bir IFC dosyası açabilir, onu tanımlayabilir, duvarlar, kapılar, pencereler, döşemeler, katlar ve ızgaralar ekleyebilir, geri alabilir ve yeni bir `.ifc` dosyası olarak kaydedebilir. Hangi klasörleri kullanabileceğine ve bir şeyi değiştirip kaydedip kaydedemeyeceğine siz karar verirsiniz.

## Etkinleştirmeyi kaldırın

**Yapay zeka asistanlarının ve betiklerin BimCraft'ı kullanmasına izin ver** kutusunun işaretini kaldırın. Her asistanın bağlantısı hemen kesilir ve ayar bir dahaki sefere için saklanır.

## Ayrıca bkz.

- [Yapay zeka asistanları için tarifler](common:assistants-recipes): her biri kullandığı araçlarla birlikte çalışılmış örnekler.
- [Öğeleri sınıfa, ada ya da özelliğe göre bulun](topic:find)
- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
- [BimCraft ayarları](topic:settings)
