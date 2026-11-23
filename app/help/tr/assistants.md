---
title: Bir yapay zekâ asistanının modelinizle çalışmasına izin verin
summary: Ayarlar'da asistanları açın; bilgisayarınızdaki bir asistan CadCraft Studio üzerinden öğeleri bulabilsin, özelliklerini okuyabilsin, bunları görünümde izole edebilsin ve duvar, kapı, pencere, döşeme, kat ve aks çizebilsin. Siz açana kadar kapalıdır.
keywords: yapay zeka, asistan, mcp, betik, otomasyon, studio, öğe bul, izole et, özellikler, izinler, bağlantıyı kes, etkinlik, duvar çiz, kapı ekle, pencere ekle, katlar, aks, döşeme, geri al, kaydet, komut satırı, cli, başsız, yapay zeka asistanlarıyla kullan
from: 66d72742
---

## Bu konuda öğrenecekleriniz

MCP dilini konuşan herhangi bir yapay zekâ asistanının açık IFC modelinize bakıp bu modelde çizim yapmasına nasıl izin verileceğini, neler yapabileceğini ve yapamayacağını ve nasıl durdurulacağını öğrenin.

## BimCraft içinde bir asistan neler yapabilir

| İstediği | Ne olur | Gereken izin |
|---|---|---|
| Öğeleri bulmak | Sınıfa, kata, ada ya da özellik değerine göre bir öğe listesi alır; tıpkı **Bul** gibi | Okuma |
| Özellikleri okumak | Tek bir öğenin niteliklerini, türünü, özellik kümelerini ve miktarlarını alır; tıpkı **Özellikler** panelinin gösterdiği gibi | Okuma |
| Modeli tanımlamak, duvarları listelemek | Katları, duvarları, kapıları, pencereleri, odaları, döşemeleri, aksları ve kolonları; ayrıca her duvarın uçlarını, türünü ve yüksekliğini alır | Okuma |
| İzole etmek, geçirgen yapmak, gizlemek ya da göstermek | 3B görünüm, {{ui:Göster}} menüsünü kullanmışsınız gibi değişir | Görünümü değiştir ve çiz |
| Duvar, kapı, pencere, döşeme, kat ya da aks çizgisi çizmek | Model, {{ui:Çiz}} araçlarını kullanmışsınız gibi değişir: duvarlar birleşir, odalar, döşemeler ve çatılar takip eder | Görünümü değiştir ve çiz |
| Bir ad ya da özellik değerini değiştirmek | Tek bir öğenin Ad, Açıklama, Nesne türü ya da Etiket alanı ya da tek bir özellik değeri. Diğer öğelerle paylaşılan bir değer, önce onun için kopyalanır; tipinin değeri ise yalnızca asistan bunu belirttiğinde değişir, çünkü o tipteki her öğe bunu izler | Görünümü değiştir ve çiz |
| Taşımak, silmek, duvar, kapı ve pencereleri değiştirmek | Öğeler, barındırdıkları öğelerle birlikte taşınır ya da silinir. {{ui:Çiz}} araçlarıyla çizilen duvarlar uçlarına ya da türüne göre, kapı ve pencereler yerine, boyutuna ya da türüne göre değişir; odalar ve birleşimler takip eder | Görünümü değiştir ve çiz |
| Bir listeyi kurmak, düzenlemek ve okumak | "Kat bazında kapı listesi; yangın dayanımı ve donanım ile": asistan listenin adını, sütunlarını (bir özellik ya da etiket sütun olur) ve gruplamasını belirler; BimCraft listeyi modelden doldurur ve düzenler, asistanın belirtmediği şeyleri ofis standardından alır. Kurulum **Listeleriniz** kısmına eklenir. Asistanın geri aldığı her satır, öğelerini adıyla belirtir; böylece onları seçebilir | Okumak için okuma; kurulumu kaydetmek için görünümü değiştir ve çiz |
| Bir listeyi dışa aktarmak | CSV, Excel ya da sekmeyle ayrılmış metin; Google Sheets'e yapıştırmak için (hiçbir şey Google'a gönderilmez) | Dışa aktarma |
| Oda kaplamalarını okumak ve ayarlamak | Kaplama türleri, her odanın zemin, duvar ve tavan kaplaması, bölgeler; alanlar, karo sayıları ve altlık hacimleri ise kaplama listelerinden gelir | Okuma; ayarlamak için görünümü değiştir ve çiz |
| Öğeleri seçmek, kendi adımlarını geri almak | Öğeler görünümde seçilir; son adımı geri alınır | Görünümü değiştir ve çiz |
| Kaydetmek | Her değişikliği içeren yeni bir IFC dosyası; {{ui:IFC olarak farklı kaydet}} ile yapıldığı gibi (orijinal hiçbir zaman değişmez) | Kaydet |
| USD dışa aktarmak | Açık modeller OpenUSD olarak (.usda, .usdc ya da .usdz), araç çubuğundaki {{ui:USD}} ile yazıldığı gibi | Dışa aktarma |
| Bir resim render etmek, render kuyruğunu çalıştırmak | 3B görünümün bir resmi: {{ui:Render}} iletişim kutusu, başka bir şey istemediği sürece Render ayarlarınızla yapar; ya da iletişim kutusunun kuyruğuna eklenen yüksek kaliteli resimler birer birer render edilir (kuyruk WebGPU gerektirir). Modelde hiçbir şey değişmez ([Resim render et](topic:render)) | Dışa aktarma |

Asistanın yaptığı her değişiklik, **Değişiklikler** içinde "Asistan: …" adıyla tek bir adımdır (örneğin "Asistan: 4 duvar ekle"); böylece {{key:Mod+Z}} onun tüm işlemini geri alır ve hangi asistanın adımı olduğunu görebilirsiniz. Asistan pencerede dosya açamaz: modeli siz açarsınız; o açık olanla çalışır.

## Asistanları açın

Asistanlar, bilgisayarınızdaki CadCraft Studio üzerinden BimCraft'a ulaşır; düz tarayıcının bunun için bir yolu yoktur.

1. {{ui:Ayarlar}}'ı açın ve **BimCraft** sekmesini seçin.
2. **Asistanlar** altında, **Yapay zekâ asistanlarının ve betiklerin BimCraft'ı kullanmasına izin ver** kutusunu işaretleyin.
3. **Okuma** sizin için işaretlidir. Asistanın öğeleri izole edip gizlemesi ve çizmesi serbestse **Görünümü değiştir ve çiz** seçeneğini de işaretleyin; modeli yeni bir dosya olarak kaydetmesine izin verilecekse **Kaydet** seçeneğini de işaretleyin.
4. Asistanı Studio'da bağlayın (Studio adresi ve asistana yapıştırılacak ayarları gösterir).

## Bir asistan bağlıyken

Sağ panelin üstündeki bir not, hangi asistanın bağlı olduğunu ve neler yapabileceğini gösterir. Oturumunu hemen sonlandırmak için {{ui:Bağlantıyı kes}} düğmesine tıklayın; devam etmek için asistanın yeniden bağlanması gerekir.

**Etkinlik**, Ayarlar'da **Asistanlar** altında, asistanın yaptığı her çağrıyı en yenisi önce olacak şekilde ve işe yarayıp yaramadığıyla birlikte listeler.

:::tip
Düz bir dille sorun; örneğin "1. kattaki dış duvarları izole et", "hangi kapıların yangın dayanımı yok?" ya da "1. katta güney duvarında kapısı olan 6 x 4 metrelik bir oda çiz". Asistan öğeleri bulur ve görünümünüzde gösterir ya da çizer.
:::

## Pencere olmadan: betikler ve komut satırı

Aynı çizim araçları, açık bir pencere olmadan, adını verdiğiniz klasörlerdeki IFC dosyaları üzerinde de çalışır: CadCraft'ın MCP sunucusu ve komut satırı yeni bir bina başlatabilir ya da bir IFC dosyasını açabilir, tanımlayabilir, duvar, kapı, pencere, döşeme, kat ve aks ekleyebilir, geri alabilir ve yeni bir `.ifc` dosyası olarak kaydedebilir. Betikler için dört araç daha uygundur: `ifc_batch` en fazla 200 düzenleme adımını tek bir adım olarak çalıştırır (ya hep ya hiç: bir geri alma tüm toplu işlemi geri alır; reddedilen bir adım diğerlerini geri alır ve adımı adlandırır); `ifc_describe` katları ve her duvarı kapıları ve pencereleriyle birlikte listeler; `ifc_render_png` pencere olmadan modelin düz gölgeli bir denetim resmini yazar (malzeme, doku ya da gölge yok); `usd_export` `.usda`, `.usdc` ya da `.usdz` yazar. Komut satırında `cadcraft bim script.json --from model.ifc -o out.ifc` adımlardan oluşan bir betiği çalıştırır; `--usd`, `--png` ve `--plan` aynı çalıştırmadan bir USD dosyası, bir resim ya da bir plan yazar. Hangi klasörleri kullanabileceğini ve bir şeyi değiştirip kaydedip kaydedemeyeceğini siz belirlersiniz.

## Asistanları kapatın

**Yapay zekâ asistanlarının ve betiklerin BimCraft'ı kullanmasına izin ver** seçeneğinin işaretini kaldırın. Her asistanın bağlantısı hemen kesilir ve ayar bir sonraki kullanım için saklanır.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri kullandığı araçlarla birlikte çalışılmış örnekler.
- [Öğeleri sınıfa, ada ya da özelliğe göre bulun](topic:find)
- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
- [BimCraft ayarları](topic:settings)
