---
title: Oda kaplamaları ve kaplama listeleri
summary: Her odanın zemini, duvarları ve tavanını neyin kapladığını söyleyin; karolu bir sıçrama levhası gibi bölgeler ekleyin; oda, duvar ve bölgeye göre alanlar, kesimler dahil karo sayıları ve altlık hacimleriyle kaplama listeleri alın.
keywords: kaplama, kaplamalar, kaplama listesi, oda kaplamaları, zemin kaplaması, duvar kaplaması, tavan kaplaması, süpürgelik, karo, karolar, kesik karo, karo sayısı, fire, altlık, şap, arka levha, sıva, bölge, sıçrama levhası, dado, ıslak hacim, iç mekân, metrajlar
from: 8c30498c
---

## Neler yapacaksınız

BimCraft'a her odanın neyle kaplandığını bir kez söyleyin. Kaplama listeleri alanları, sipariş edilecek karoları ve altlık hacimlerini verir ve modelle birlikte değişir.

## Adımlar

1. {{ui:Çiz}}'i açın, sol paneldeki **Listeler**'i açın ve **Oda kaplamaları**'na tıklayın.
2. **Kaplama türleri** altında **Bir kaplama türü ekle**'ye tıklayın. Ona bir ad, bir tür (Karo, Levha, Kat ya da Panel) ve bir kalınlık verin. Bir karo için karonun uzunluğunu ve genişliğini, derzi ve yüzde olarak bir fire payını verin. Kaplamanın altına bir şey gidiyorsa (bir şap, bir arka levha, bir sıva katı), bunu **Altlık** altında adlandırın ve kalınlığını verin.
3. **{{ui:Odalar}}** altında her odanın zemin, duvar ve tavan kaplamasını seçin. Odanın bir süpürgeliği varsa adını ve yüksekliğini yazın.
4. **Bölgeler** altında, kaplaması farklı olan bir oda parçası için **Bir bölge ekle**'ye tıklayın:
   - bir **duvar** bölgesi, zeminin üstündeki iki yükseklik arasında bir bandır (0'dan 1200'e karolu bir sıçrama levhası, bir dado). Odanın her duvarında yer alır ya da modeldeki o odanın duvarlarını seçip bunları kapsamak için **Açık** düğmesine basın;
   - bir **zemin** ya da **tavan** bölgesi, yazdığınız bir alandır. Odanın kendi kaplamasından çıkarılır.
5. **Kaydet**'e tıklayın. Bu, Geri al'da tek bir adımdır. Uzunluklar projenin birimleriyle yazılır.

## Listeler

Listeler listesine dört giriş eklenir:

- **Odaya göre kaplamalar**: her oda, zemin, duvar ve tavan kaplaması ve alanları ile süpürgelik ve uzunluğu.
- **Duvara göre kaplamalar**: odanın tarafındaki her duvar parçası ile bir kaplamanın kapladığı bant; uzunluğu, brüt alanı, düşülenler, net alanı ve karolar için tam karolar, kesik karolar ve sipariş edilecek karolar.
- **Bölgeye göre kaplamalar**: her bölge, kaplaması, net alanı, karoları ve altlık hacmi.
- **Kaplama metrajları**: kaplama başına bir satır: net alan, tam ve kesik karolar, sipariş edilecek karolar, altlık ve hacmi ile kaplamanın kendi hacmi.

Bunları herhangi bir liste gibi gruplayın, toplayın, kaydedin ve dışa aktarın: bkz. [Bir listeyi düzenleyin, kaydedin ve dışa aktarın](topic:schedule-layouts). Bir rakama tıklayarak onun geldiği şeyi seçin: bir duvarın düşülenleri, kapılarını ve pencerelerini seçer.

## Ölçüler nasıl alınır

- **Duvarlar**: odanın tarafındaki her duvar parçası; odanın boyunca uzunluğu çarpı kaplamanın kapladığı yükseklik, eksi o yükseklik içindeki her kapı ve pencerenin kısmı. Odadan alçak bir duvar kendi üstüne kadar kaplanır. Projenin ölçüm yöntemi, hangi açıklıkların düşülemeyecek kadar küçük olduğuna karar verir ([Listeler](topic:plan-schedules-and-pdf)).
- **Zeminler ve tavanlar**: odanın duvar yüzleri içindeki kısmı, eksi içindeki adacıklar.
- **Süpürgelik**: odanın duvar uzunluğu, eksi kapılarının genişliği.
- **Karolar**: yüzeyin bir köşesinden başlayan bir ızgara olarak, karolar arasında bir derz ile döşenir. Tamamen yüzeyde olan bir karo tam karodur; kısmen üstünde olan (bir kenarda, bir açıklığın etrafında) bir karo kesik karodur. Sipariş edilecek karolar, tam artı kesik, artı fire payı, yukarı yuvarlanmış olarak hesaplanır. Her kesik karo yeni bir karo sayılır: artıklar yeniden kullanılmaz.
- **Altlık hacmi**: net alan çarpı altlığın kalınlığı.
- **≈** işaretli bir sayım, karo karo yerleştirilmek yerine alandan hesaplanır: içinden yazılı bir bölgenin çıkarıldığı bir yüzey ya da çok büyük bir yüzey.

## İyi bilmeniz gerekenler

- Kaplamalar bina dosyasında tutulur (projede `CadCraft_Finishes` özellik kümesi). Kaplaması olan her oda ayrıca standart IFC özellik kümesi `Pset_SpaceCoveringRequirements`'ı alır; böylece diğer programlar adları okuyabilir.
- Karo düzeni bir köşeden başlar. Odanın ortasında ortalanmış bir düzen, bir desen (balık sırtı, tuğla örgü) ve artıkların yeniden kullanımı hesaplanmaz.
- Eğri bir duvar ve duvar olmayan bir oda sınırı (bir oda ayırıcı), uzunluğu ile birlikte **Diğer sınır** olarak listelenir ve açıklık içermez.
- Daha önce var olan **Kaplamalar** girişi duvar tiplerinin kaplama katmanlarını listeler; **Katmanlar: alan ve hacim** katmanlı her tipin her katmanını listeler. Buradaki oda kaplamaları, bu katmanların üstüne odaya uygulananlardır.
- Bir asistan, `finishes_set` ile sizin için kaplamaları ayarlayabilir: bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
