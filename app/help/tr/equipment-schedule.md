---
title: Ekipman listesi oluşturun ve CSV dışa aktarın
summary: Bir yiyecek hizmeti çizimindeki öğe etiketlerini ekipman listesine dönüştürün, süzün, her öğenin bulunduğu sayfaya gidin ve CSV olarak indirin.
keywords: ekipman, liste, yiyecek hizmeti, mutfak, öğe etiketleri, kcl, öznitelikler, bom, malzeme listesi, csv, elektronik tablo, dışa aktarma, veri çıkarma
from: e3faa1c8
---

## Ne yapacaksınız

Bir mutfak ya da yiyecek hizmeti çizimindeki ekipman listesini okuyun, kontrol edin, her öğeyi planda bulun ve bir elektronik tablo dosyası olarak indirin.

Bu, KCL gibi mutfak tasarım kütüphanelerinin yaptığı gibi, ekipman etiketlerinin verilerini blok öznitelikleri olarak taşıdığı çizimlerde çalışır: her etiket öğe numarasını (`KCL-ITEM`), miktarı, kategoriyi, üreticiyi, modeli, elektrik ve tesisat verilerini ve notları tutar. Diğer çizimlerde {{ui:Ekipman}} sekmesi yoktur.

## Adımlar

1. Çizimi açın, mümkünse proje klasöründen; böylece bağlı çizimleri de yüklenir.
2. Çizimin üstündeki {{ui:Ekipman}} sekmesine tıklayın. Etiketi, sayfalardaki öğe sayısını gösterir, örneğin "Ekipman (88)".
3. Listeyi okuyun: **Öğe**, **Adet**, **Ekipman**, **Üretici**, **Model**, **Elektrik**, **Tesisat** ve **Konum**.
4. Tablonun üstündeki menüden neyi listeleyeceğinizi seçin: **Tüm sayfalar**, tek bir sayfa, **Hiçbir sayfada değil** ya da **Çizimde etiketlenen her şey**. Her seçenek kendi sayısını gösterir.
5. Listeyi daraltmak için süzgeç kutusuna yazın ("Süz: kategori, üretici, model…"), örneğin `buzdolabı` ya da `208`.
6. **Konum** sütunundaki bir öğenin sayfa adına tıklayın.
7. Çizime bakın: BimCraft o sayfaya geçer, öğeye yakınlaşır ve çevresine bir halka çizer. Durum satırında "Öğe *n*, *kategori*, *sayfa* üzerinde halkalandı." yazar.
8. Listeye dönmek için {{ui:Ekipman}} öğesine tıklayın.
9. {{ui:CSV indir}} öğesine tıklayın.

## Ne görmelisiniz

- İndirilenler klasörünüzde "*çizim adı* ekipman.csv" adlı bir dosya olur (tek bir sayfa listelediyseniz sayfanın adı parantez içinde). Excel, Numbers, LibreOffice ya da Google Sheets ile açılır.
- Durum satırı: "*dosya adı* indirildi (*n* öğe)."

CSV şu sütunları içerir: Öğe, Adet, Kategori, Üretici, Model, Elektrik, Tesisat, Notlar, Elektrik notları, Tesisat notları, Sayfalar, Yerleştirilen (etiket sayısı). Menü ve süzgeçten sonra tablonun gösterdiği satırların tamamını indirir.

## Liste nasıl oluşturulur

- Liste, sayfada çizilmiş liste tablosundan değil, **etiketlerin kendisinden** okunur. Tablonun üstündeki not kaç etiketin okunduğunu söyler.
- Bir satır, tek bir öğe numarasının ve tek bir veri kümesinin karşılığıdır. Miktarı, etiketlerinin **toplamıdır**; basılı bir listenin saydığı gibi: bir yerde "5", başka yerde "3" olarak etiketlenmiş raflar 8'dir ve "5 + 3" olarak gösterilir.
- **Konum**, her öğeyi gösteren sayfaları, her sayfadaki görünüm pencerelerinin gösterdiklerinden hesaplayarak listeler; bu da basılan şeydir. "Yalnızca model", hiçbir sayfanın göstermediği anlamına gelir.
- **Numara iki kez kullanıldı**, iki farklı ekipmandaki aynı öğe numarasını işaretler. Satırda kehribar rengi bir işaret görünür.
- Hiçbir sayfada görünmeyen etiketler, **Hiçbir sayfada değil** altında ayrı tutulur. Genellikle önceki planlardan ya da diğer işlerden kalmışlardır ve asla **Tüm sayfalar** içine karışmazlar.
- **Elektrik**, etiketlendiği gibi amper, kW, HP, volt, faz, bağlantı ve fişi gösterir. **Tesisat** bağlantı boyutlarını gösterir: CW soğuk su, HW sıcak su, DD doğrudan drenaj, ID dolaylı drenaj ve gaz. Diğer etiket alanları henüz gösterilmez.

## Sık yapılan hatalar

- **{{ui:Ekipman}} sekmesi yok.** Çizimde `KCL-ITEM` etiketleri yok ya da ekipman verisiz çizilmiş. Okunacak bir şey yok.
- **Sayılar basılı listeden farklı.** Basılı bir liste, etiketlerden farklı yedek numaralar ya da daha kısa adlar içerebilir. Yerleştirilenler için etiketlere güvenin; farkları tasarımcıyla kontrol edin.
- **CSV'de garip karakterler görünüyor.** Dosya UTF-8'dir. Elektronik tablo programınızın içe aktarma komutuyla açın ve program sorarsa UTF-8'i seçin.
- **Bir hücre kesme işaretiyle başlıyor.** `=`, `+`, `-` ya da `@` ile başlayan değerlerin başına, elektronik tablo programlarının bunları formül olarak çalıştırmaması için `'` eklenir.
- **{{key:F}} ve {{key:P}} bir şey yapmaz.** Bunlar çizim üzerinde çalışır, listede değil. Önce bir sayfa sekmesine tıklayın.
