---
title: Güneş PV dizileri, gölgeleme ve verim
summary: Güneş dizilerini çatılara ya da zemine yerleştirin, modelden gölgeleyin, yıllık enerjiyi tahmin edin, dizeleri boyutlandırın ve tek hat diyagramı verisini oluşturun. Tüm girdiler gösterilir; başlangıç modülü ve kayıplar genel niteliktedir.
keywords: güneş, pv, fotovoltaik, dizi, modül, çatı, gölgeleme, verim, kwh, kwp, dize boyutlandırma, invertör, tek hat, tek çizgi, eğim, azimut, sıra aralığı
from: adf4aaf3
---

## Ne yapacaksınız

**Güneş PV** panelini açın. Bir çatı yüzeyi seçin (eğimi ve yönü modelden okunur) ya da bir eğim ve yönle zemin dizisi yerleştirin; modüller geri çekmelerle içine yerleştirilir ve sayılır, DC gücü kWp cinsinden verilir. Diziyi yerleştirmek, onu güneş cihazları olarak tek bir geri alma adımında modele yazar.

## Gölgeleme, verim ve dizeler

- **Gölgeleme**, her modülden her ayın tipik günleri için güneşe doğru bir ışın gönderir ve modelin kendi geometrisine karşı hesaplar; böylece komşu binalar, parapetler ve önündeki sıralar hesaba katılır. Yalnızca doğrudan güneş ışığı azalır ve kısmen gölgelenen bir dizi gücünü oranında kaybeder.
- **Verim** ay ve yıl bazında kWh, kWp başına kWh ve performans oranını verir. Güneş, yatay bir yüzeydeki kendi aylık toplamlarınızı yazarsanız oradan gelir. Bunlar yoksa panel açık gökyüzü üst sınırını kullanır ve bunu söyler. Verim sekmesindeki bir düğmeyle **NASA POWER'dan iklim verisini alın**: yalnızca arsanın enlem ve boylamını bir kez gönderir ve yanıtı bu bilgisayarda tutar (tarayıcıdan 2026-10-30 tarihinde kontrol edildi). PVGIS bir web sayfasının yanıtını okumasına izin vermediği için sekme, PVGIS'in arsanın aylık verilerini gösteren yeni bir sekmede açılan bir bağlantı verir; gösterdiğini kutuya yapıştırın ve on iki ay dolar.
- **Dizeler**, modülleri en soğuk ve en sıcak günde invertörün gerilim penceresine karşı dize başına, paralel dizeleri de akımına karşı kontrol eder.
- **Tek hat**, yazdığınız faktörlerden kablo ve sigorta boyutlarıyla diyagram verisini (dizi, birleştirici, ayırıcı, invertör, pano, şebeke) oluşturur. Bu bir veridir ve bir SVG; CadCraft'taki Elektrik eklentisi bunları sembol olarak yerleştirebilir.

BimCraft ile gelen modül, invertör, kayıp ve kablo faktörleri genel örneklerdir ve her sonuçta bu şekilde etiketlenir. Üreticinin verilerini ve tasarımınızın dayandığı kod değerlerini yazın ve tasarımı bunun sorumlusu kişiye inceletin.
