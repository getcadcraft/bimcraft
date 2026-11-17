---
title: Çizim önerisi: alışılmadık boyutlar yapılır, uyarıyla
summary: BimCraft istediğinizi yapar. Alışılmış olanın dışındaki bir boyut Sorunlar bölümünde uyarı olur; sizi çizmekten veya kaydetmekten hiçbir zaman alıkoymaz.
keywords: öneri, uyarı, sorunlar, reddedildi, çizilemez, çok küçük, çok dar, minimum, sınır, merdiven genişliği, basamak yüksekliği, basamak derinliği, kolon, rampa, kapı boyutu, aks çizgisi, kat yüksekliği, çatı penceresi, spiral merdiven, pah eğimi, kısa duvar, engel yok
from: 20090130
---

## Ne yapacaksınız

Alışılmış olmayan bir boyut çizin ve BimCraft'ın bunun hakkında nerede size bilgi verdiğini görün.

## Adımlar

1. Öğeyi istediğiniz gibi çizin veya değiştirin: örneğin 400 mm genişliğinde bir merdiven.
2. BimCraft onu istediğiniz gibi yapar.
3. Üst çubuktaki {{ui:Problems}} öğesini açın. **Çizim önerisi** başlığı altında öğeyi, verdiğiniz boyutu ve alışılmış aralığı belirten bir uyarı vardır.
4. Öğeyi seçmek için uyarıya tıklayın. Bir yanlışlıksa boyutu değiştirin; ya da olduğu gibi bırakın: bir uyarı, bir gerekçeyle veya gerekçesiz kabul edilebilir.

## Öneri nedir

Bunlar eskiden reddedilirdi. Artık her biri bir uyarıyla yapılır:

- **Merdivenler**: 500 mm'den dar veya 5 m'den geniş; basamak yükseklikleri 100 ila 300 mm dışında; basamak derinlikleri 150 ila 600 mm dışında.
- **Spiral merdivenler**: direk 40 ila 400 mm dışında; yürüme çizgisinde 100 mm'den sığ basamaklar.
- **Kolonlar**: 50 mm'den ince veya 300 mm'den kısa.
- **Rampalar**: 300 mm'den dar.
- **Kapılar ve pencereler**: 100 mm'den dar veya kısa.
- **Aks çizgileri**: 100 mm'den kısa.
- **Duvarlar**: bir kırpma gibi bir işlemle 50 mm'den kısa kalan duvar.
- **Katlar**: 1 m'den kısa veya 100 m'den yüksek (yeni bina, bölünmüş katlar, bir katın yüksekliği).
- **Çatı pencereleri**: 600 mm ila 12 m genişlik dışında; ön duvar 300 mm ila 4 m dışında; 1 m'den fazla saçak; 50 ila 400 mm dışında duvarlar.
- **Bina platformları**: yan eğimler 1:1 ila 10:1 dışında.

## Hâlâ reddedilenler

Yalnızca yapılamayan veya bulunamayan şeyler, her biri nedenini söyleyen bir mesajla:

- 10 mm'nin altındaki bir boyut (1 mm'nin altındaki bir duvar): yapılacak bir şey yoktur.
- Duvar kalınlığının iki katından geniş olmayan bir çatı penceresi: iki yan duvarı birleşir.
- 0,1:1'den dik (bu bir istinat duvarıdır) veya 100:1'den yassı yan eğimli bir bina platformu (tesviye sonsuza kadar sürer).
- Yerleştirildiği yere sığmayan bir şey, kendini kesen bir dış hat veya artık modelde olmayan bir öğe.

## Bilmeniz yararlı olanlar

- Öneri modelden hesaplanır; bu yüzden dosyayı daha sonra açtığınızda yeniden oradadır ve boyut düzeltildiğinde kaybolur.
- Model denetimleri, yönetmelik paketleri ve IDS denetimleri de yalnızca buldukları şeyleri listeler. {{ui:Problems}} içindeki hiçbir şey çizmenizi veya kaydetmenizi engellemez.
- Alışılmış aralıklar genel uygulamadır, bir yapı yönetmeliği değildir. Bir yönetmelik için Yapı yönetmelikleri eklentisini ekleyin ve yerinizi seçin.

## Sonraki

- [Modeli yaygın sorunlara karşı denetleyin](topic:model-checks)
- [Merdivenler ve korkuluklar](topic:stairs-and-railings)
