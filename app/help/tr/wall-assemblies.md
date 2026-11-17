---
title: Duvar kesitleri ve referans ölçülendirmeleri
summary: Katman katman kendi duvar tiplerinizi açık bir çekirdekle oluşturun, bir proje malzeme kütüphanesi tutun ve değiştiğinde bağlı kalan yüzlere ve eksenlere ölçülendirin.
keywords: lod, geliştirme düzeyi, lod 200, lod 300, genel, duvar kesiti, duvar tipi, katmanlar, çekirdek, çekirdek yüzü, çekirdek ekseni, boşluk, hava boşluğu, membran, ev sarmalı, malzeme kütüphanesi, malzemeler, kalınlık, referans ölçülendirme, ölçülendirme, ilişkisel, konum çizgisi, dış cephe kaplaması, dikme, alçıpan
from: 4ea8fbf5
---

## Ne yapacaksınız

Yapacağınız duvarla eşleşen bir duvar tipi yapın: dış cephe kaplaması, kaplama, 5½ inç dikmeli çekirdek ve alçıpan; ya da tuğla, bir hava boşluğu ve ahşap karkaslı bir duvar. Çekirdek olan katmanları işaretleyin ki bir ölçülendirme ya da bir konum çizgisi, çevresindeki kaplamalar değişirken çekirdeği tutabilsin. Sonra duvarları kastettiğiniz yüzlere ve eksenlere ölçülendirin.

## Bir duvar tipi yapın

1. Bir bina başlatın ya da bir IFC modeli açın, {{ui:Çiz}} seçeneğini açın, sonra {{ui:Duvar}} aracını seçin.
2. {{ui:Duvar tipi}} içinden bir başlangıç tipi seçin ve {{ui:Duvar kesitleri…}} öğesini açın. Başlangıç tipi bir kopya olarak açılır; yeni tipe bir ad verin.
3. Katmanlar, listenin üstündeki dıştan başlayıp en alttaki içe doğru gider. Her katmanın malzemesini seçin, kalınlığını yazın (proje birimleriyle ya da 12.7 mm veya 1/2" gibi açık birimlerle), işlevini seçin (kaplama, taban, yapı, yalıtım, membran) ve **Çekirdek** katmanlarını işaretleyin. Çekirdek, tek ve kesintisiz bir grup olmalıdır.
4. {{ui:Katman ekle}} bir katman ekler, {{ui:Boşluk ekle}} havalandırmasıyla (belirtilmemiş, havalandırılmamış, havalandırılmış) bir hava boşluğu ekler, {{ui:Membran ekle}} ev sarmalı gibi nominal kalınlığı olmayan bir katman ekler. Oklar bir katmanı dışa ya da içe taşır.
5. Önizleme katmanları ölçeğe uygun çizer; çekirdek altı çizili, satırlar gibi numaralı olur ve her katmanı, çekirdeği ve toplamı ölçülendirir. {{ui:Tipi kaydet}}.

Yeni tip, Duvar aracının listesinde ve seçili bir duvarın **Özellikler** bölümünde olur. Düzenlediğiniz bir tipi kaydetmek, onu kullanan her duvarı değiştirir; {{ui:Tipi çoğalt}} ayrı bir tip yapar ve yalnızca seçtiğiniz duvarlara verir. Her kayıt, taşıdığı duvarlar, içlerindeki kapı ve pencereler ve bunlara bağlı ölçülendirmelerle birlikte tek bir {{ui:Geri al}} adımıdır.

Bir boşluk genişlik ekler. Membran ise hiç genişlik eklemez: liste daha sonra bulabilsin diye tipte kalır ve duvarın ya da çekirdeğin kalınlığına sayılmaz. Bir boşluk ya da membran hiçbir zaman katı malzeme olarak sayılmaz. IFC2X3 olarak kaydedilen bir dosyada membran, tipin kaydında tutulur ama fiziksel malzeme katmanlarından çıkarılır.

## Duvar tipini ayrıntı geliştirme düzeyiyle (LOD) etiketleyin

Bir tip, ne kadar geliştirildiğini belirtebilir. Düzenleyicide, **Geliştirme düzeyi (LOD)** sabit 100, 200, 300, 350, 400 ve 500 ölçeğini ya da **Ayarlanmadı** seçeneğini sunar. Genel bir duvar ("Genel duvar 230") LOD 100 ya da 200'dür; gerçek katmanları olan belirli bir yapı ("230 kil tuğla, iki yüzü sıvalı") LOD 300 veya daha fazladır. Etiket sizindir: BimCraft bunu hesaplamaz ve başlangıç tiplerinde yoktur.

Etiket, Duvar aracının tip listesinde, bir duvarın Özellikler bölümünde ve [Tip değiştir](topic:wall-tools) listesinde tipin adının yanında görünür; bir değiştirmeden sonraki rapor, düzeyin yükselip yükselmediğini ya da düştüğünü söyler. **Tipe göre duvarlar** listesinde ve CSV'sinde görmek için Ayarlar › BimCraft › Duvarlar bölümünde **Her duvar tipinin LOD'unu duvar listesinde göster** kutusunu işaretleyin: en sona bir LOD sütunu eklenir. Etiket, tiple birlikte IFC dosyasına kaydedilir (tipin `CadCraft_WallType` özellik kümesinde, `LOD` özelliği olarak ve tipin kaydının içinde), böylece dosyayı yeniden açtığınızda da durur. Etiket şimdilik yalnızca duvar tiplerinde var, tek tek öğelerde ya da diğer öğe türlerinde yok.

## Eskiz aşaması için genel duvarlar

Duvar aracının Tip listesi iki **genel** duvarla başlar: **Genel duvar 200 mm (dış)** ve **Genel duvar 100 mm (iç)**. Her biri genel malzemeden tek bir katmandır ve LOD 200 olarak etiketlidir. Duvarların nereye gideceğini bildiğiniz, ama neyden yapılacaklarını henüz bilmediğiniz zaman bunları kullanın.

LOD 100 ya da LOD 200 etiketli bir tipe sahip bir duvar, her planda, her ayrıntı düzeyinde **tek bir taranmış bant** olarak çizilir: katman yok, katman çizgisi yok. Bu, genel duvarlar ve LOD 100 ya da 200 olarak etiketlediğiniz kendi tipleriniz için de geçerlidir. Duvar yine de tamamdır: kalınlığı, kapıları ve pencereleri, odaları ve miktarları vardır.

Geliştirmek için tipini değiştirin (Düzenle › Duvarlar › **Tip değiştir**, ya da Özellikler içinde Tip). Duvar bir daha asla yeniden çizilmez: aynı duvar yeni tipi alır ve rapor neyin taşındığını söyler. LOD 300 ya da daha yüksek etiketli bir tip, daha önce olduğu gibi katmanlarıyla çizilir.

Etiketi ne olursa olsun her duvarı katmanlarıyla çizmek için: Ayarlar › BimCraft › Duvarlar bölümünde **LOD 100 veya LOD 200 tipindeki duvarları tek bir taranmış bant olarak çiz** seçeneğinin işaretini kaldırın.

Başlangıç kapıları ve pencereleri de genel türlerdir (bir boyut ve bir açılma biçimi, bir ürün değil). **Her duvar tipinin LOD'unu duvar listesinde göster** açıkken, Kapılar ve Pencereler listeleri onlar için LOD 200 gösterir.

## Bir tipe metraj verisi verin

Duvar tipi düzenleyicisinde, **Metraj verisi** bir metrajcının duvar hakkında bilmesi gerekenleri, tip başına bir kez alır: duvarın yapıldığı **birim** (bir tuğla ya da blok: adı, uzunluğu, yüksekliği ve genişliği), **harç** (adı ve derz kalınlığı) ve para birimi kodlu (USD, EUR veya ZAR gibi üç harf) bir **birim fiyat** ve bunun ne başına olduğu: net duvar alanının bir m² ya da bir ft²'si, duvar uzunluğunun bir metresi ya da bir feet'i ya da her duvar. Hepsi isteğe bağlıdır.

Tip ile birlikte dosyaya kaydedilir. Tipin her duvarı bunu bildirir: {{ui:Listeler}} › **Duvar tipleri: metraj verisi** birimi, harcı, birim fiyatı ve birim fiyatı ile ölçülen miktarın çarpımını listeler; TakeoffCraft'a verilen metraj, o duvar tipinin kaleminde bunu taşır. Tipte değiştirin, her duvar izler.

Birim sayısını ve harcı saymak için üç alan daha vardır:

- **Birim üzerindeki fire, %** birim sayısına eklenir. Proje ölçüm yönteminin değerini kullanmak için boş bırakın; yöntemde yoksa hiç fire olmaz. Yöntem ne derse desin fire olmaması için 0 girin.
- **Ek harç, %**, harç alan kılavuz çukurları ya da delikler içindir. Harç hacmine eklenir. Hiç yoksa boş bırakın.
- **Bu birimden yapılan katmanlar**: bu tuğla ya da bloğun her yaprağı olan katmanları işaretleyin. Boşluklu bir duvarın iki yaprağı vardır. Hiçbiri işaretli değilse çekirdek katmanları sayılır.

Birim fiyat, sipariş edilecek birim başına, sipariş edilecek 1000 birim başına ya da harç m³ başına da olabilir. Birimin bir uzunluğu ve yüksekliği varsa, **Duvar tipleri: metraj verisi** bir yaprağın m² (ya da ft²) başına birim sayısını, sipariş edilecek birimleri ve harç hacmini gösterir; formüller [Tuğla, blok ve harç](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar) bölümündedir. Bir tipte tek bir birim olur: farklı birimlerden iki yaprak (dış yaprak tuğla, iç yaprak blok) henüz tek bir tipte sayılamaz.

## Çekirdeği sabit tutun

**Özellikler** içinde, bir duvarın **Konum çizgisini** bir çekirdek yüzüne ya da çekirdek eksenine ayarlayın. Daha sonra bir kaplama eklediğinizde ya da kalınlaştırdığınızda, bu çizgi yerinde kalır ve duvar onun etrafında büyür; bir köşede buna bağlanan duvarlar izler, böylece düz köşeler kapalı kalır.

## Proje malzemeleri

{{ui:Malzeme kütüphanesi…}} projenin malzemelerini listeler: ad, kategori, bir katmanın başladığı kalınlık, görüntüleme rengi, kesit doldurma deseni ve notlar. Kütüphane projeyle birlikte IFC'de kaydedilir. Bir katman için bir malzeme seçmek, o katmana malzemenin varsayılan kalınlığını verir; sonra bunu değiştirebilirsiniz. Kütüphaneyi sonradan düzenlemek, zaten çizdiğiniz duvarların boyutunu asla değiştirmez. Ayrıca, katmanın malzeme listesinden {{ui:+ Yeni malzeme…}} ile de bir malzeme oluşturabilirsiniz.

## Referans ölçülendirmeleri

{{ui:Açıklama ekle}} › {{ui:Referans ölçülendirme}}: yatay, dikey ya da hizalı seçin ve bir referans seçin: dış ya da iç kaplama yüzü, dış ya da iç çekirdek yüzü, duvar ekseni ya da çekirdek ekseni. İlk duvarı seçin, isterseniz referansı değiştirin, ikinci duvarı seçin, sonra ölçülendirme çizgisinin nereye gideceğine tıklayın. Bir duvarda iki referans, toplam ya da çekirdek kalınlığını ölçer. {{ui:Referans ölçülendirmeleri…}} görünümün ölçülendirmelerini listeler, bir duvarını kaybetmiş olanlar dahil; her biri için **Özellikler**, **Referansları yeniden bağla** ve **Sil** ile.

### Kurallarla planın tamamını ölçülendirin

{{ui:Açıklama ekle}} › {{ui:Planı ölçülendirin…}} baktığınız kat planının dış kısmını ölçülendirir: her yöndeki genel boyut, her dış kenar boyunca bir sıra ölçülendirme (duvar uçları, kenara değen duvarlar ve bunun içindeki kapılar ve pencereler). Sıralar binanın dışında temiz bir yere yerleşir. İstediklerinizi işaretleyin, sayıyı okuyun, sonra {{ui:Ölçülendirmeleri ekle}}. Bunlar sıradan referans ölçülendirmeleridir: duvarlar taşındığında onları izlerler ve bunların herhangi birini seçebilir, taşıyabilir ya da silebilirsiniz. Tüm küme tek bir geri alma adımıdır ve yeniden çalıştırmak hiç yenisini eklemez.

Yalnızca dışı ölçülendirir: binanın içindeki odalar, eğri duvarlar ve plana dik olmayan duvarlar el araçlarına bırakılır; aks çizgileri duvar değildir, bu yüzden aksların arasındaki ölçülendirmeler burada yapılmaz. Bağlı asistanınız aynısını `plan_dimension` ile yapabilir.

Ölçülendirme ekrandaki bir noktaya değil, duvarlara bağlıdır: bir duvar taşındığında ya da tipi değiştiğinde değer izler. Bir duvar silinirse, ölçülendirme çözülmemiş olduğunu söyler ve siz yeniden bağlayana ya da geri alana kadar bir sayı göstermez. Uzunluk kutusu, tam bir yerdeki bir ölçülendirme çizgisi için `10',12'` gibi plan koordinatlarını da alır.

Ölçülendirmeler, BimCraft'ın çizdiği duvarlar içindir, plan görünümlerinde. Henüz yapılmadı: kesitlerde ve görünüşlerde ölçülendirmeler, kapı, pencere ve diğer bileşenlere ölçülendirmeler ve planda ve kesitte çizilen kesit katmanları; bkz. [Henüz yapılmayanlar](topic:not-built-yet).

## Ayrıca bakın

[Duvar çizin](topic:draw-walls), [Duvarı, kapıyı veya pencereyi değiştirin](topic:change-a-wall-or-door), [Özellikler](topic:properties-panel).
