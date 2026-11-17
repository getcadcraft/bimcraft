---
title: Görünümler, görünüm aralıkları ve kendi sayfalarınız
summary: Proje tarayıcısında her plan, kesit, 3B görünüm, liste ve sayfayı bulun; her planın nasıl kesildiğini ve neyi gösterdiğini ayarlayın, çağrılar yapın, bir görünümde çizgi ve taralama çizin, ayarları görünüm şablonlarında tutun ve kendi sayfalarınızı düzenleyin.
keywords: çağrı, çağrı görünümü, ayrıntı görünümü, büyütülmüş plan, çizim, ayrıntı çizgileri, çizim çizgileri, taralama, taralama bölgesi, dolgulu bölge, dolgu deseni, yansıtılmış tavan planı, rcp, tavan planı, tavan ızgarası, aydınlatma armatürleri, proje tarayıcısı, görünümler, görünüm aralığı, kırp, kırpma bölgesi, kırpma görünümü, görünüm ölçeği, altlık, başka katı göster, yarım ton, kesim düzlemi, kesim yüksekliği, üst, alt, görünüm derinliği, görünürlük, kategoriler, görünümde gizle, görünüm şablonu, şablonlar, sayfa, sayfalar, künye, görünüm penceresi, ölçek, sayfaları düzenle, düzen, pdf, plan görünüm ayarları, tarayıcı
from: ee1d5afe
---

## Ne yapacaksınız

BIM projelerinin düzenlenme biçimiyle çalışın: her görünüm tek bir listede, her plan istediğiniz yerden kesilmiş, birkaç plan için aynı ayarlar bir şablon aracılığıyla ve kendi düzenlediğiniz sayfalar.

## Proje tarayıcısı

1. {{ui:Draw}} modunu açın. Sol panelde modellerin altında bir {{ui:Project browser}} vardır.
2. Şunları listeler:
   - **Kat planları**: her kat. Birine tıklayarak planını görün. Yanındaki kaydırıcı düğmesi görünüm aralığını ayarlar (aşağıda). Bir şablonu izleyen plan şablonun adını gösterir.
   - **Tavan planları**: her katın yansıtılmış tavan planı (aşağıda).
   - **Çağrılar**: her çağrı ve üzerinde çizildiği görünüm, ayrıca {{ui:New callout}}. **Eksik** görünümü kaybolmuş çağrıları listeler.
   - **Görünüşler** ve **Kesitler**: dört yön ve her kesit çizgisi. Birine tıklayarak içinde çizildikleri çizim takımını açın.
   - **3B görünümler**: {{ui:Views}} ile kaydettiğiniz görünümler.
   - **Listeler**: birine tıklayarak planın altında gösterin.
   - **Sayfalar**: yaptığınız sayfalar, {{ui:New sheet}} ve modelden yapılan tüm takım için {{ui:Drawing set…}}.
   - **Görünüm şablonları**, {{ui:New template}} ile ve **Bağlantılar** (bağlı modeller).

## Bir planın görünüm aralığını ayarlayın

1. **Kat planları** içinde bir katın yanındaki kaydırıcı düğmesine tıklayın.
2. O katın üzerindeki yükseklikleri ayarlayın:
   - **Kesim**: planın duvarları, kapıları ve pencereleri nerede kestiği (değiştirmediğiniz sürece 1200 mm, yaklaşık 4 ft).
   - **Üst**: kesimin üstünde ve üst sınırın altında kalanlar kesikli çizilir (yüksek bir dolap, bir kiriş). Katın yüksekliği için boş bırakın.
   - **Alt** ve **Alttan derinlik**: kesimin altında kalan şeyler, alta kadar ince çizgilerle ve oradan biraz daha aşağı çizilir.
3. **Bu planda gösterilen** altında, bu planın dışarıda bıraktığı şeyleri kaldırın: mobilya, odalar, kolonlar vb.
4. Tek tek öğeleri dışarıda bırakmak için planda veya 3B görünümde seçin, iletişim kutusunu açın ve {{ui:Hide the selected here}} tıklayın. {{ui:Show them all}} hepsini geri getirir.
5. {{ui:Use these settings}} tıklayın.

Plan hemen yeniden kesilir; çizim takımı ve sayfalarınız onu izler. Bir nokta bulutunun dilimi de kesim yüksekliğini izler.

## Planı kırpın, ölçek verin, altına başka bir katı gösterin

Üçü de aynı iletişim kutusundadır (bir katın yanındaki kaydırıcı düğmesi):

- **Ölçek**: planın yazdırıldığı ve bir sayfaya oturduğu ölçek ({{ui:Print}} plan çubuğunda). **Sığdır** en büyük standart ölçeği seçer.
- **Kırpma bölgesi**: {{ui:Draw on the plan…}} tıklayın, sonra planda bir köşeye ve karşısındaki köşeye tıklayın ({{key:Esc}} durdurur). Bölgenin dışındaki plan ekranda perdelenir ve orada yine çalışabilirsiniz; yazdırıldığında, sayfalarda ve çizim takımında plan yalnızca içindekini gösterir. {{ui:Clear}} kırpmayı kaldırır. {{ui:Fit}} kırpmaya sığdırır.
- **Altlık**: başka bir kat seçin. Onun duvarları, kesilmiş öğeleri, kapıları ve pencereleri bu planın altında açık renkte çizilir; alttaki veya üstteki katla hizalamak için. Burada seçemezsiniz ve açık gri yazdırılır.

Bir görünüm şablonu ölçeği yüksekliklerle ve kategorilerle birlikte taşır. Kırpma bölgesi ve altlık her zaman yalnızca o tek plana aittir.

## Bir katın tavan planı

Her katın kat planının yanında yansıtılmış bir tavan planı vardır: alttan görülen plan, tavanları ve onlardan asılanları yerleştirmek için.

1. Tarayıcıda **Tavan planları** altındaki kata tıklayın veya planın çubuğunda katın yanındaki {{ui:Ceiling plan}} seçeneğini seçin.
2. Duvarlar 2300 mm'de (yaklaşık 7'-6") kesilir. Bu kesimin üstünde ve katın yüksekliğinin altında kalanlar çizilir: ızgaralı tavanlar ve bir yükseklik etiketi (`CLG 2438`), armatürler, kirişler. Kapılar, pencereler ve kesimin altında kalanlar dışarıda bırakılır.
3. Tavan yapmak için kat planındaki gibi {{ui:Ceiling}} kullanın, sonra onu seçip Özellikler'de **Desen** seçin. Bkz. [Odalar, döşemeler, tavanlar ve çatılar](topic:floors-and-roofs).
4. Ondan bir armatür asmak için tavan planı gösterilirken kütüphaneden öğeyi yerleştirin: **Tavanda** bölümüne gider. Bkz. [Kütüphaneden ekipman ve mobilya yerleştirin](topic:place-from-library).
5. Bir tavan planının yanındaki kaydırıcı düğme, kat planındaki gibi kesimini ve üstünü, ölçeğini, kategorilerini, kırpma bölgesini ve altlığını ayarlar. Tavan planları görünüm şablonu almaz.

Kat planıyla aynı yönde çizilir (yansıtılmış bir plan, ayna görüntüsü değil). Kesimin altındaki bir tavan çizilmez: o katın tavan planı için kesimi düşürün. Tavan planları diğer planlar gibi kendi sayfalarınıza girer; çizim takımı bunları kendiliğinden eklemez.

## Çağrı yapın

Bir çağrı, bir planın bir parçasını kendi ölçeğinde, kendi görünümü olarak daha büyük gösterir: bir mutfak, bir merdiven, bir duvar köşesi.

1. Ait olduğu planı, tavan planını veya çağrıyı gösterin.
2. Planın çubuğunda {{ui:Annotate}} › {{ui:Callout}} seçin (veya tarayıcıdaki {{ui:New callout}}), sonra alanın bir köşesine ve karşı köşesine tıklayın. {{key:Esc}} durdurur.
3. Çağrı 1:20'de yapılır (feet ve inç cinsinden 1/2" = 1'-0"). Dikdörtgeni ve yuvarlak bir etiketi planda çizilir.
4. Çağrının etiketine {{ui:Select}} ile tıklayın veya tarayıcıdaki çağrıya tıklayın: plan yalnızca o alanı, çağrının ölçeğinde gösterir. Çubukta {{ui:Callout}}: ve adı yazar; {{ui:Up}} üzerinde çizildiği görünüme geri döner.
5. Yanındaki kaydırıcı düğme (tarayıcıda veya çubukta) adını değiştirir, ölçeğini değiştirir, dikdörtgenini yeniden çizer veya çağrıyı siler.

Bir çağrının çağrısı aynı şekilde çalışır. Bir çağrıyı bir sayfaya bir plan gibi koyun; etiketi nerede olduğunu söyler (`1 / A-501`: A-501 sayfasındaki ilk görünüm). {{ui:Print}} bir çağrıda yalnızca o alanı ölçeğinde yazdırır.

Bir çağrıyı silmek, içinde çizilen çağrıları ve bunların içinde çizilen çizgi ve taralamaları da siler (önce sorulur). Bir çağrının üzerinde çizildiği kat silinirse, çağrı siz silene kadar **Eksik** altında kalır ve üzerinde bulunduğu sayfalar bunu eksik olarak bildirir.

## Bir görünümde çizgi ve taralama çizin

Çizim, yalnızca bir görünüme ait 2B iştir: çizgilerle notlar, beton veya toprağın taralı bir alanı, dolgulu bir bölge. Asla 3B görünümde veya başka bir planda olmaz.

1. Çizeceğiniz kat planını, tavan planını veya çağrıyı gösterin.
2. Planın çubuğunda {{ui:Annotate}} altından seçin:
   - {{ui:Line}}: başladığı ve bittiği yere tıklayın. Sonraki çizgi, son çizginin bittiği yerden başlar; {{key:Enter}} yeniden başlatır.
   - {{ui:Polyline}}: noktalarına tıklayın; {{key:Enter}} veya çift tıklama bitirir, ilk noktaya tıklamak kapatır.
   - {{ui:Rectangle}}: karşılıklı iki köşe.
   - {{ui:Hatch region}}: çubukta **Desen** (Düz, Eğik, Çapraz, Beton, Yalıtım, Toprak) ve ölçeğini seçin, sonra köşelere tıklayın; {{key:Enter}}, çift tıklama veya ilk köşeye tıklama kapatır. {{ui:Fill a room}} işaretliyken bir odada tek tıklama, dış hatlarını tarar.
3. Noktalar duvarlarda olduğu gibi yakalanır; {{key:Shift}} bir çizgiyi dik tutar ve duvarlarda olduğu gibi bir uzunluk yazabilirsiniz. {{key:Backspace}} son noktayı geri alır.

Bir çizgiyi veya taralamayı planda {{ui:Select}} ile seçin. Özellikler taralamanın desenini ve ölçeğini değiştirir ve {{ui:Move…}} seçeneğine sahiptir (taşınacak noktaya, sonra nereye gideceğine tıklayın). {{key:Delete}} siler. Her çizgi, taralama ve değişiklik bir adımdır.

Çizgiler ve taralamalar planla birlikte yazdırılır, planla birlikte sayfalarınıza girer ve çizim takımındadır. Bir görünüm aralığında **Açıklamalar** seçeneğini temizleyin; o görünümde bunları dışarıda bırakırsınız.

## Ayarları bir görünüm şablonunda tutun

1. Tarayıcıda {{ui:New template}} tıklayın veya bir planın görünüm aralığında {{ui:Save as a template…}} seçin (plan artık bunu kullanır).
2. Bir ad verin, yükseklikleri ve kategorileri ayarlayın ve {{ui:Save the template}} tıklayın.
3. Herhangi bir planın görünüm aralığında şablonu seçin. Plan yüksekliklerini ve kategorilerini alır; onu kullanan her planı değiştirmek için şablonu değiştirin. Tek tek gizlediğiniz öğeler kendi planlarında gizli kalır.
4. Değiştirmek, yeniden adlandırmak veya silmek için tarayıcıda bir şablona tıklayın. Birini silmek, planlarını kendi ayarlarıyla bırakır.

## Kendi sayfanızı düzenleyin

1. {{ui:New sheet}} tıklayın. Numarasını ve başlığını yazın ve kâğıdı seçin.
2. Bir plan, tavan planı, çağrı, görünüş, kesit veya liste yanında {{ui:Add}} tıklayın. Sayfanın ortasına düşer.
3. Yerine sürükleyin. Seçiliyken bir **Ölçek** seçin ya da planın kendi ölçeğinde bırakın (planın bir ölçeği varsa); yoksa sayfanın üçte birine sığan ölçek kullanılır. {{ui:Take off the sheet}} kaldırır.
4. {{ui:Save the sheet}} tıklayın. **Sayfalar** altında listelenir; sonra değiştirmek için tıklayın.
5. {{ui:Download as PDF}} o sayfayı tek sayfa olarak kaydeder.

## Ne görmelisiniz

- Planlar yüksekliklerinize göre kesilmiş; kesimin üstünde kalanlar kesikli ve temizlediğiniz şeyler dışarıda.
- Kırpılmış bir plan ekranda bölgesinin dışı perdelenmiş, kâğıtta bölgesine kesilmiş ve verdiğiniz ölçekte.
- Izgaralı tavanlar ve yükseklik etiketleri ile tavanda armatürler içeren bir tavan planı.
- Planda dikdörtgen ve etiketleri olan çağrılar; her biri kendi ölçeğinde açılır.
- Çizgiler ve taralamalar yalnızca çizdiğiniz görünümde.
- Sayfalarınız her açtığınızda modelden yeniden çizilir, böylece her zaman onunla eşleşir. Katı veya kesit çizgisi silinmiş bir görünüm çizilmez, bildirilir.
- Buradaki her değişiklik bir adımdır: {{key:Mod+Z}} geri alır.

:::note
Bunların tümü IFC dosyasında, diğer programların dokunmadığı özellik kümeleri olarak tutulur: her katta o katın görünüm aralığı ve tavan planı, projede şablonlar, çağrılar ve sayfalarınız. Çizgiler ve taralamalar kendi katlarında IFC açıklamalarıdır; diğer programlar bunları 2B eğriler ve taralı alanlar olarak görür (her desenin kendi çizimiyle), ancak hangi görünüme ait olduklarını görmezler.
:::

:::tip
Diğer BIM programları kesime görünüm aralığı veya kesim düzlemi, şablonlara görünüm şablonları veya görünüm ayarları, çizgilere ayrıntı çizgileri, taralama bölgelerine dolgulu bölgeler der. Fikirler aynıdır; görünüm ayarları onlara taşınmaz.
:::
