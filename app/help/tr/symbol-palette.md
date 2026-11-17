---
title: Sembol paleti
summary: Elektrik ve tesisat sembollerini adına ya da resmine göre bulun, kullandıklarınızı yıldızlayın ve bir tıklamayla plana yerleştirin.
keywords: sembol paleti, semboller araç çubuğu düğmesi, duvar takip eder, semboller, elektrik sembolleri, tesisat sembolleri, tesisat planı, klozet, tuvalet, lavabo, evye, küvet, duş, zemin gideri, temizleme ağzı, hortum çeşmesi, su ısıtıcısı, vana, kapı vanası, soğuk su, sıcak su, atık, havalandırma, hat stili, favoriler, arama
from: 67f20bc0
---

## Ne yapacaksınız

Elektrik sembollerini ve tesisat planı sembollerini resimleri ve adlarıyla listeleyen tek bir panel açın, istediğinizi bulun ve planın üzerine yerleştirin. Burada internet gerekmez: semboller uygulamayla birlikte gelir.

## Açın ve bir sembol yerleştirin

1. Bir model açın ve {{ui:Derleme}} › {{ui:Sembol paleti}}'ni açın (yazılan komut: SYMBOLS). Aynı düğme, Çiz çubuğunun Araçlar menüsünde ve araç çubuğunun Kütüphane grubunda **Semboller** olarak da bulunur.
2. Bir takım seçin: **Elektrik** ya da **Tesisat** veya **Tüm takımlar**. Listeyi daraltmak için arama kutusuna yazın. Ada ya da kısaltmaya göre arayabilirsiniz (WC, CW, HB).
3. Bir sembole tıklayın. Plan, onu yerleştirmeye hazırdır.
   - Bir **elektrik** sembolü, o cihaz seçili olarak Elektrik aracını başlatır; böylece [Elektrik planı](topic:electrical-plan) içindeki her şey geçerlidir: plana tıklayın, tek bir geri alma adımı.
   - Bir **tesisat** sembolü, plan sembol aracını başlatır. Plana tıklayın. Bir duvara oturan bir armatür (klozet, lavabo, küvet, evye, hortum çeşmesi) en yakın duvar yüzüne, arkası duvara dönük olacak şekilde yapışır; giderler, vanalar, su ısıtıcısı ve hat stilleri ise nereye tıklarsanız oraya gider.
4. Sembolü 90 derece döndürmek için {{key:R}} tuşuna basın ({{key:Shift}}+{{key:R}} onu ters yöne döndürür) ya da seçenek çubuğundaki **Döndürme**'ye bir açı yazın. Durdurmak için {{key:Esc}} tuşuna basın.

Bir duvara yapışmış bir armatür ya da hortum çeşmesi o duvarı hatırlar: duvar taşındığında sembol de onunla birlikte taşınır (aynı yüz, duvar boyunca aynı mesafe), aynı geri alma adımında. Duvarı silerseniz sembol olduğu yerde kalır ve Sorunlar "duvarını kaybetti" yazar; onu taşıyın ya da silin. Duvarlardan uzakta yerleştirilen semboller hiçbir şeye bağlı değildir.

Yerleştirdiğiniz her sembol tek bir geri alma adımıdır. Yerleştirilen bir sembol, etiketiyle (WC1, WC2, ...) IFC dosyasında bir plan açıklamasıdır. Etiketini ya da döndürmesini değiştirmek için onu seçin, **Özellikler**'den değiştirin ya da {{key:Delete}} tuşuna basın.

## Tesisat takımında neler var

Armatürler (klozet, pisuar, lavabo, küvet, duş, mutfak evyesi, tek evye), bir zemin gideri, zemin ve duvar temizleme ağızları, bir hortum çeşmesi, bir duvar hidrantı, bir su ısıtıcısı, vanalar (kapı, küresel, bilyeli, çek, kelebek, basınç düşürücü) ve kısaltmalarıyla hat stilleri: soğuk su (CW), sıcak su (HW), sıcak su dönüşü (HWR), atık (W), havalandırma (V), yağmur gideri (SD) ve gaz (G). Çizimler plana göre ölçeklenir, bu yüzden basılı paftada boyutlarını korurlar. Bir hat stili, stili planda göstermek için kısa bir uçtur; gerçek boru hatlarını boru araçlarıyla çizin.

:::note
Bunlar yaygın tesisat planı kurallarıdır; bizim tarafımızdan çizilmiştir ve ISO 4067-1 ya da ASME Y32.4'e göre sertifikalı değildir. Herkese açık çizim açıklamaları ve eğitim kılavuzlarıyla karşılaştırılmışlardır (liste, takımın kaynak notundadır; nerede eşleştiğimiz ve nerede ayrıldığımız orada yazar); herhangi bir üründen kopyalanmamışlardır ve kullanımları serbesttir (Apache-2.0). Çizim takımları farklılık gösterir, bu yüzden kendi projenizin açıklamasını kontrol edin. Bunlar plan sembolleridir, bir tesisat tasarımı değildir: boruları boyutlandırmazlar ve kuralları denetlemezler.
:::

## Favoriler ve klavye

- Bir sembolde yıldıza tıklayın (ya da üzerindeyken {{key:F}} tuşuna basın), onu favori olarak tutmak için. Favoriler önce listelenir ve bu tarayıcıda kalır. **Yalnızca favoriler** seçeneği yalnızca onları gösterir.
- Arama kutusundan {{key:Down}} tuşuyla sembollere geçersiniz; ok tuşları, {{key:Home}} ve {{key:End}} aralarında hareket ettirir; {{key:Enter}} odaklanılanı seçer; {{key:Esc}} paleti kapatır.
- Telefonda palet ekranın altında bir sayfadır; bir sembol seçtiğinizde kenara çekilir ki planı görebilesiniz. Yeniden açmak için Derleme menüsünden ya da seçenek çubuğundaki **Palet** düğmesinden açın.

:::tip
Bir dosya, bu derlemede bulunmayan bir sembol takımı kullanıyorsa, plan sembolün yerinde bir kutu gösterir ve Sorunlar bunu listeler.
:::

## Yerleştirilmiş bir öğeyi bir sembole bağlayın

Kütüphaneden bir tavan armatürü 3B bir öğedir, ama bir elektrik yerleşiminde sembolü olarak görünür. Onu **bir kez** yerleştirir ve bağlarsınız:

1. Derleme › **Sembol bağlantısı**'nı seçin (ya da SYMBOLLINK yazın). Sol panelde bir Sembol bağlantısı bölümü açılır.
2. Planda ya da 3B'de yerleştirilmiş öğeleri seçin. Bölüm kaç tane seçildiğini ve neye bağlanacaklarını söyler.
3. **Sembol**'ü (herhangi bir sembol takımından: Elektrik, Tesisat) seçin ve **Bağla**'yı seçin.

Öğe hâlâ tek bir öğedir ve her liste onu bir kez sayar:

- **3B** her zaman gövdesini gösterir.
- Bir **plan**, daha önce olduğu gibi plan biçimini gösterir.
- **Bu görünüm bağlı öğeleri şöyle gösterir** ayarı **Sembolleri (bir tesisat yerleşimi)** olan bir plan, sembolü yerinde gösterir. Sembole tıklamak öğeyi seçer. Seçim, o görünüm için dosyada tutulur (bir katın kat planı, tavan planı ya da bir çağrı).

**Sembolü 90° döndür** sembolü, öğesine göre döndürür. **Bağlantıyı kaldır** bağlantıyı alır; öğe kalır. **Bağlı semboller listesi**, her bağlı öğeyi bir kez, katı ve içinde durduğu odayla birlikte listeler.

Henüz yapılmadı: bir sayfada görünümün seçimi, gösterdiği katın planının seçimidir; Elektrik aracıyla yerleştirilen cihazlar ise öncekiyle aynı şekilde her planda semboldür.
