---
title: Bir plan setinden duvarlar (PDF ya da tarama)
summary: Bir PDF'in sayfalarını ya da taranmış bir çizimi, her sayfa için bir kat olmak üzere, sayfa her planın altında tutularak duvarlara, kapılara ve pencerelere dönüştürün.
keywords: pdf, planlar, plan seti, tarama, taranmış çizim, tiff, izle, pdf'den duvarlar, taramadan duvarlar, katlar, sayfalar, ölçek, kapılar, pencereler, salınım, eşik, altlık
from: b70d9db7
---

## Ne yapacaksınız

Kağıt üzerindeki planlarınızla bir model başlatın: bir PDF (çizgi olarak çizilmiş ya da bir PDF içinde bir tarama) ya da bir tarama (PNG, JPEG, tek ya da çok sayfalı TIFF). Her sayfa bir katın duvarları, kapıları ve pencereleri olur.

## Adımlar

1. {{ui:Çiz}} seçeneğini açın. {{ui:Derleme}} › {{ui:Bir çizimden…}} seçin, sonra {{ui:Bir çizim seçin…}} ve PDF'i ya da taramayı seçin.
2. **Sayfalar ve katlar.** Her sayfa ne olduğuyla listelenir (**çizgi çalışması** ya da **bir resim (izlenmiş)**) ve gideceği kat: sahip olduğunuz katlardan biri, **diğerlerinin üstünde yeni bir kat** ya da **bu sayfayı dışarıda bırak**. Sayfalar katlarınızla sırayla eşleşir; herhangi birini değiştirin.
3. **Ölçek.** Bir PDF için nasıl çizildiğini belirtin (**1 : 100**, **1 : 50**…). Diğer her şey için ya da bilmediğinizde, **bildiğim bir mesafeden** seçin: önizlemede bir ölçülendirmenin ya da bir ölçek çubuğunun iki ucuna tıklayın, sonra gerçek mesafeyi yazın. Tüm sayfalar tek ölçeği kullanır.
4. **Yeni bir katın** duvar tipini ve **yüksekliğini** seçin. Her sayfayı planının katının altında ince çizgiler olarak görmek için **Her sayfayı katının planının altında tut** işaretli bırakın.
5. Seçimlerin altındaki satır kaç duvar, kapı ve pencere yapacağını ve kaç katta olacağını söyler. {{ui:Oluştur}} öğesine tıklayın.

## Bir sayfayı nasıl okur

- **Duvarlar**, 600 mm'ye kadar aralıklı paralel çizgi çiftlerinden gelir (bir duvarın iki yüzü); duvar aralık kadar kalındır. Taramalar ve yazılar dışarıda bırakılır.
- **Kapılar ve pencereler.** Yanında bir kapı salınımı çizilmiş bir duvar boşluğu (500 ila 2600 mm), boşluğun bir ucunda menteşeli ve salınımın tarafına açılan bir kapıdır. İçinde eşik çizgileri olan bir boşluk ya da duvar bir penceredir. İkisi de olmayan bir boşluk, 1300 mm'ye kadar bir kapı ve bundan büyük olan bir pencere olur.
- **Bir tarama** eğri taranmışsa önce doğrultulur (iletişim kutusu bunu söyler), siyah beyaz yapılır, lekelerden temizlenir ve izlenir; **resim olan bir PDF sayfası** önce çizilir ve sonra aynı şekilde işlenir. İzleme her çizginin merkezini bulur ve ona düz çizgiler ve yaylar uydurur; ağ kullanmaz ve eğitilmiş bir model kullanmaz.
- **Odalar**, duvarların oluşturduğu kapalı döngülerden kendiliğinden izlenir. PDF'in yazısı varsa, bir oda adını içindeki yazıdan alır (en büyüğü; bir ölçü, bir ölçek ya da bir sayfa numarası bir ad değildir). Bir tarama yazı içermez, bu yüzden odaları programın verdiği adları korur.
- **Sayfadan okunan her şey doğrulanmamış olarak işaretlenir**: her duvar, kapı, pencere ve oda, siz kontrol edene kadar planda kesikli bir kutu ve bir "?" taşır. Kontrol ettiklerinizi seçin ve {{ui:Araçlar}} › {{ui:Kontrol edildi olarak işaretle}} kullanın. Bkz. [Öğeleri kontrol edildi ya da saha doğrulandı olarak işaretleme](topic:verification).

## Ne görmelisiniz

- Her katta duvarlar, kapılar, pencereler ve odalar ve varsa yeni katlar, hepsi tek bir adım olarak: {{key:Mod+Z}} hepsini geri alır.
- Her sayfa, katının planının altında ince çizgiler olarak görünür; {{ui:Derleme}} › {{ui:Bir çizimden…}} altında {{ui:Kaldır}} ile listelenir.

:::note
Bu, çizgilerin, sayfanın doğruluğuna göre verdiği sonuçtur. Bir tarama silik bir duvarı kaçırabilir, birbirine çok yakın iki duvarı birleştirebilir ya da bir lekede bir duvar bulabilir; çizimde görünmeyen bir salınım, bir boşluğu düz bir kapıya dönüştürür. Her katı, ona güvenmeden önce sayfayla karşılaştırın ve yanlış olanı {{ui:Duvar}}, {{ui:Kapı}} ve {{ui:Pencere}} araçlarıyla düzeltin.
:::
