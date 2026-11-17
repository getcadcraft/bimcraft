---
title: Listeler, ölçüler ve planın PDF'i
summary: Çizdikçe değişen kapı, pencere, duvar ve oda listeleri, plandaki ölçüler ve bir katın planının standart bir ölçekte PDF olarak kaydedilmesi.
keywords: liste, kapı listesi, pencere listesi, duvar listesi, oda listesi, miktarlar, metraj, alan, csv, elektronik tablo, ölçüler, ölçü, yazdır, pdf, çıktı, ölçek, 1/4", 1:50, sayfa
from: d97cd16e
---

## Neler yapacaksınız

Çizdiğiniz binanın neye karşılık geldiğini, çizerken görün: her boyuttan kaç kapı ve pencere, her tipten ne kadar duvar, her oda ne kadar büyük. Plana ölçüler koyun ve yazdırmak ya da göndermek için PDF olarak kaydedin.

## Listeler

{{ui:Çiz}} açıkken sol paneldeki **Listeler** her seferinde bir tablo gösterir:

- **Kapılar** ve **Pencereler**: her biri işaretiyle (D1, D2 … ve W1 …, yerleştirdiğiniz gibi verilir), tipi, genişliği, yüksekliği (ve eşiği), katı ve içinde bulunduğu duvar.
- **Duvarlar tipe göre**: her duvar tipi için kaç duvar olduğu, kalınlıkları, toplam uzunlukları ve **Brüt alan**, **Düşülenler** ve **Net alan** olarak yan yüzey alanları, bir toplamla.
- **Odalar**: numara, ad, kat, alan ve çevre, toplam alanla.
- **Döşemeler**: her döşeme, katı, türü ve kalınlığı, brüt alanı, düşülenleri ve net alanı.
- **Kaplamalar**: duvar tiplerinin her kaplama tabakası (malzemeye ve duvar yüzüne göre) ve tavanlar; yüz sayısı ve brüt, düşülen ve net alanlar.
- **Duvar tipleri: metraj verisi**: her duvar tipinde bir kez girilenler (birim, harç, oran), duvar sayısı, uzunluğu ve net alanı; oran çarpı ölçülen miktar. Bkz. [Duvar bileşenleri](topic:wall-assemblies).
- **Odaya göre kaplamalar**, **Duvara göre kaplamalar**, **Bölgeye göre kaplamalar** ve **Kaplama miktarları**: her odayı neyin kapladığı; alanlar, kesimler dahil karo sayıları ve taban hacimleri. Bkz. [Oda kaplamaları ve kaplama listeleri](topic:room-finishes).
- Kendi **ayarlarınız**: gruplayıp toplayıp bir adla kaydettiğiniz bir liste. Bkz. [Bir listeyi düzenleyin, kaydedin ve dışa aktarın](topic:schedule-layouts).

Tablolar her düzenlemeyle değişir. Hangi öğelerden geldiğini seçmek için bir satıra ya da tek bir rakama tıklayın. {{ui:CSV indir}} tabloyu bir elektronik tabloda açılmak üzere kaydeder; **Excel indir** ve **Google Sheets için kopyala** onun altındadır. **Oda kaplamaları** ve **Şartname** ([Şartnameyi modelden yazın](topic:specification)) aynı yerden açılır.

## Her katmanın alanı ve hacmi

**Listeler** listesinden **Katmanlar: alan ve hacim**'i seçin. Kullanımdaki her duvar, döşeme, çatı ve tavan tipinin her katmanı için bir satırı vardır: öğe, tip ve LOD'u, katman (bir duvarda dış yüzden, bir döşeme, çatı ya da tavanda üstünden sayılır), malzemesi ve işlevi, kalınlığı, öğe sayısı, **net alan** ve **hacim**.

- Alan, o tipteki öğelerin net alanıdır; Duvarlar tipe göre, Döşemeler ve Kaplamalarda olduğu gibi, projenin ölçüm yöntemine göre ölçülür. Bir çatı eğim üzerinde ölçülür; hiçbir ölçüm yönteminin çatı için kuralı yoktur.
- Hacim, o alanın katmanın kendi kalınlığıyla çarpımıdır.
- Tipi olmayan bir döşeme, çatı ya da tavan tek bir satırdır: kendi kalınlığında tek bir katman.
- Bir hava boşluğu alanıyla listelenir ve toplam hacimden çıkarılır. Bir membranın alanı vardır, hacmi yoktur.

Bir satıra tıklayın ve öğelerini seçin. {{ui:CSV indir}} tabloyu kaydeder.

## Alanlar nasıl ölçülür

Her alan, birbirine eklenen üç sayıdır: brüt eksi düşülenler net eder. Kural, bu tabloların her birinin üstüne yazılmıştır ve tek bir kuraldır: listeler, IFC dosyasına kaydedilen miktarlar ve TakeoffCraft'a verilen metraj hepsi bunu kullanır.

- **Bir duvar**: brüt, duvarın bir yüzüdür; eksen boyunca uzunluğu çarpı yüksekliği (şekilli bir üst ya da alt kısmı olan duvarda gerçek yüz). Her kapı, pencere ve diğer her açıklık düşülür: genişlik çarpı yükseklik, her açıklık bir kez.
- **Bir döşeme ya da tavan**: brüt, çevresinin içindeki alandır. İçindeki her açıklık ve boşluk bir kez düşülür.
- **Bir duvar kaplaması**: duvar tipinin her kaplama tabakası duvarın bir yüzünü kaplar; duvar gibi ölçülür, aynı açıklıklar düşülerek. Kaplama duvarın bir tabakasıdır: Kaplamalar altında listelenir ve duvar alanına eklenmez; bu yüzden kapılı bir duvar asla iki kez sayılmaz.

Bu **CadCraft varsayılanıdır**: her açıklık, boyutu ne olursa olsun düşülür; duvar uzunlukları eksen boyuncadır; söveler ölçülmez. Başka bir yöntem seçene kadar her proje bunu kullanır.

## Bir ölçüm yöntemi seçin

Listenin üstünde **Ölçüm yöntemi**, BimCraft ile gelen yöntemleri listeler ve **Yöntem dosyası yükle**, ofisinizin kendi yöntemini alır. Seçim, tek bir geri alma adımı olarak IFC dosyasına kaydedilir ve üç şey onu birden izler: listeler, dosyaya kaydedilen net miktarlar ve TakeoffCraft'a verilen metraj. Her tablonun üstündeki kural, yöntemle, kaynağıyla, kaynağın okunduğu tarihle ve **bir metraj uzmanı tarafından kontrol edilmedi** sözleriyle başlar.

Yöntem, program kodu değil bir gerçekler dosyasıdır. Her miktar için şunları söyler:

- **düşülen en küçük açıklık**: örneğin 0.5 m² ya da daha küçük bir açıklık duvar alanında kalır;
- **duvar birleşimlerinin nasıl ölçüldüğü**: eksen boyunca; ya da başka bir duvara dayanan bir duvar o duvarın yakın yüzüne kadar; ya da başka bir duvara değen her duvar ucu yakın yüze kadar ölçülür;
- **bir kaplama için söveler ölçülüp ölçülmediği** (kaplamanın açıklıklara dönen kısımları), bir alan olarak ya da sığ olduklarında bir uzunluk olarak. Sövenin derinliği duvar kalınlığının yarısı alınır;
- **yapı işi hakkında ne dediği**: nasıl ölçüldüğü ve belirttiği her fire ya da harç payı.

BimCraft ile gelen yöntemler:

| Yöntem | Duvarlar: düşülen en küçük açıklık | Duvar kaplamaları | Tavanlar | Yapı işi |
|---|---|---|---|---|
| CadCraft varsayılanı | her açıklık | her açıklık | her boşluk | fire payı yok |
| RICS NRM 2 (Birleşik Krallık), 2. baskı 2021 | 0.5 m² ya da daha küçük kalır | 1 m² ya da daha küçük kalır | 1 m² ya da daha küçük kalır | alana göre; belirtilmiş yüzde yok |
| AAQS Afrika için Standart Yöntem 2015 | 0.5 m² ya da daha küçük kalır | 0.5 m² ya da daha küçük kalır | 0.5 m² ya da daha küçük kalır | alana göre; net ölçülür, 0% fire |
| IS 1200 (Hindistan), 1976, tuğla işçiliği | 0.1 m² ya da daha küçük kalır | varsayılan (aşağıya bakın) | varsayılan | hacme göre |
| BIA Teknik Not 10 (Amerika Birleşik Devletleri), 2009 | her açıklık | varsayılan | varsayılan | birimlerde 5% fire, harçta 15% |

Bir yöntemi kullanmadan önce bu sınırları okuyun:

- **Hiçbir metraj uzmanı bunlardan birini kontrol etmedi.** Her biri, adı verilen kaynağı okuyarak ve sayılarını hangi maddeden geldiğiyle birlikte kaydederek yapıldı. Bir metraj uzmanıysanız ve birini kontrol edebiliyorsanız, uygulamanın yapımcıları sizden haber almak ister.
- Bir kural kaynaktan okunamadıysa yöntem onun için **doğrulanmadı** der ve CadCraft varsayılanı kullanılır. BimCraft ile gelen hiçbir yöntemin duvar birleşimleri, söveler ya da döşemeler için doğrulanmış bir kuralı yoktur; bu yüzden hepsinde bunlar varsayılan şekilde ölçülür.
- IS 1200, sıvadaki açıklıkları üç bantta düşer. Bir yöntem dosyası henüz bant tutamaz; bu yüzden bu yöntem altında duvar kaplamaları varsayılanı kullanır ve kural bunu söyler.
- Güney Afrika Standart Yapı İşleri Ölçüm Sistemi bunlardan **değildir**: metni okunamadı. Afrika için AAQS yöntemi, bu sistemin 1991 baskısı üzerine kurulduğunu söyler, ama bu başka bir belgedir.
- BIA Teknik Not 10, bir sektör tahmin notudur, standart bir ölçüm yöntemi değildir.
- Tam olarak en küçük boyutta olan bir açıklık, yöntemin kendi sözlerini izler ("aşmayan", "küçük"). Bunun 10 000'de 2 parçası içindeki boyutlar tam olarak onu sayılır.
- Bir yöntem altında, dosyadaki duvarın net yan alanı ve bir döşeme ya da tavanın net alanı yönteme göre gelir ve miktar kümesi bunu adlandırır. Dosyadaki brüt alanlar ve hacimler çizildiği gibi kalır.

Seçicinin altındaki **Bu yöntemin notları**, her kaynağın neyi açık bıraktığını söyler. **Kaynağı aç**, belgeye gider.

### Ofisinizin kendi yöntemi

Bir yöntem dosyası, `cadcraft-measurement-method` biçiminde bir JSON'dur. İçindeki her değer, geldiği maddeyi adlandırır; maddesi olmayan bir değer reddedilir. Dosya yüklendiğinde kontrol edilir, hatalı bir alan adlandırılır ve geçmeyen bir dosyadan hiçbir şey kullanılmaz. Seçildiğinde dosya projenin içinde kaydedilir; böylece proje başka bir bilgisayarda aynı şekilde açılır. Kimliği kendi düz adınızdır (uygulamayla birlikte gelen bir yöntemin kimliği olmak zorunda değildir).

## Tuğlalar, bloklar ve harç

**Duvar tipleri: metraj verisi**, birimi bir uzunluğu ve yüksekliği olan her duvar tipinin birimlerini ve harcını sayar (bkz. [Bir tipe metraj verisi verin](topic:wall-assemblies#give-a-type-its-takeoff-data)). Bunlar, hesaplandıkları gibi formüllerdir:

- **Bir yaprağın alanı başına birim** = 1 / ((birim uzunluğu + derz) × (birim yüksekliği + derz)). 10 mm derzli bir 215 × 65 mm tuğla: 1 / (225 × 75 mm) = m² başına 59.26.
- **Bir yaprağın genişliğince birim sayısı** = (yaprak kalınlığı + derz) / (birim genişliği + derz), tam sayıya yuvarlanmış, en az 1. Aynı tuğlalarla 102.5 mm kalınlığında bir yaprak 1'dir; 215 mm'lik bir duvar 2'dir.
- **Birimler** = alan başına birim × genişlikçe birim sayısı × duvar yüzünün net alanı; tipin yapı yaprakları üzerinden toplanmış.
- **Sipariş edilecek birimler** = birimler × (1 + fire % / 100), tam bir birime yuvarlanmış. Fire, tipte girilen firedir; hiçbiri girilmediyse, yöntem bir tane belirtiyorsa onun; değilse 0%.
- **Harç** = net alan × yaprak kalınlığı, birimlerin hacmi çıkarıldıktan sonra (birimler × uzunluk × yükseklik × genişlik); sonra tipte girilen, boşluklar ya da delikler için ek yüzde eklenir; sonra yöntem bir pay belirtiyorsa o eklenir. Birim genişliği gerekir.

Varsayımlar: bir tipteki her yapı yaprağı, tipin tek birimiyle yapılmış kabul edilir; birim genişliğinden kalın bir yaprak, birim genişliklerinin o sayısı olarak sayılır, her biri uzunlamasına yerleştirilmiş bir yaprak gibi; bu yüzden kesik birimler, kapak taşları ve özel şekiller ayrı sayılmaz. Birimle yapıldığı işaretlenmiş hiçbir katman seçili değilse çekirdek katmanlar yaprak sayılır ve tablonun üstündeki not bunu söyler. **Miktar**, oranın birim başına olduğu şeyle çarpımıdır; bu artık sipariş edilecek bir birim, 1000 sipariş edilecek birim ya da bir m³ harç da olabilir.

Etiketler, elemanların IFC etiketidir: **Özellikler**'de (Etiket) birini değiştirin, liste izler. Her IFC modeli için, çizilmiş ya da değil, [Miktarları toplayın, öğeleri listeleyin ve mekânları listeleyin](topic:quantity-totals) herhangi bir özelliği toplar.

## Ölçüler

Plan, çizilmiş her duvarın dış yüzü boyunca uzunluğunu gösterir (iç bir duvarda: bir yüz boyunca) ve kapı ya da pencereli bir duvar için köşelerden her açıklığa bir zincir. Model çubuğundaki {{ui:Ölçüler}}, onları gizler ve yeniden gösterir.

## Planı PDF olarak kaydedin

1. İstediğiniz katı gösterin ve **Katlar** panelinde birimleri ayarlayın.
2. Model çubuğunda {{ui:Yazdır}}'a tıklayın.
3. BimCraft "<dosya> — <kat>.pdf" kaydeder: planı siyah beyaz, sayfaya sığan en büyük standart ölçekte (Letter'da fit ve inç cinsinden 1/4" = 1'-0", 1/8" = 1'-0" …; A4'te milimetre cinsinden 1:50, 1:100 …), duvarlar dolu, kapılar, pencereler, oda adları ve alanları, ölçüler ve kat, dosya, kesit yüksekliği, tarih ve ölçekle bir başlık şeridiyle.

PDF çizgi ve metin olarak çizilir; bu yüzden her yakınlaştırmada keskin kalır ve metni aranabilir.

## İyi bilinmesi gerekenler

- Listeler, çizim araçlarının yaptıklarını listeler. Başka bir programdan gelen kapılar ve pencereler bunun yerine Miktar toplamlarında görünür.
- İşi fiyatlandırmak için miktarları TakeoffCraft'a verin: bkz. [TakeoffCraft'a miktarlar](topic:takeoff). CSV indirme, bir elektronik tablo için kalır.
