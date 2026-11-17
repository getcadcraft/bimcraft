---
title: Program üzerinde gömülü karbon ve maliyetler
summary: Açık ve düzenlenebilir bir faktör tablosundan modelin gömülü karbonunu toplayın ve 4D programa yayılan fiyatlardan bir maliyet ve nakit akışı eğrisi çıkarın. İkisi de sizin girdiğiniz ya da içe aktardığınız değerlerle başlar.
keywords: gömülü karbon, karbon, co2, kgco2e, emisyon, faktör tablosu, epd, 5d, maliyet, nakit akışı, s eğrisi, program maliyeti, fiyatlar, metraj fiyatları
from: 83e82840
---

## Gömülü karbon

**Karbon** panelini açın. Her öğenin miktarı (hacim, alan ya da uzunluk), tablodan bir faktörle, yaşam döngüsü modülüne göre çarpılır: ürün aşaması zorunludur, taşıma ve fire isteğe bağlıdır. Toplamlar malzemeye, sınıfa ve kata göre, ayrıca kat alanının her m² başına hesaplanır.

**Faktör tablosu sizindir.** BimCraft ile gelen satırlar, doğru büyüklük mertebesinde genel başlangıç değerleridir. Bir veritabanından gelmezler, doğrulanmamış olarak işaretlenmişlerdir ve kullandığınız kaynakla (bir EPD, ulusal bir veritabanı ya da firmanızın verileri) değiştirilmelidir. Satırları panelde düzenleyin ya da tabloyu CSV ya da JSON olarak içe aktarıp dışa aktarın. Eklediğiniz satırlar, aynı kimliğe sahip başlangıç satırının yerine geçer. Tablo modelin içinde kaydedilir.

Eşleşmeyen ya da miktarı olmayan öğeler, sıfır sayılmak yerine Sorunlar olarak listelenir.

## 4D programındaki maliyetler

4D programının yanındaki **Maliyet** panelini açın. Ona fiyatlar verin (yazarak girin, CSV ya da JSON içe aktarın ya da TakeoffCraft'ın satırlarını getirin); her fiyatı anahtar kelimelerle model malzemelerine eşleyin. Panel her görevin öğelerini fiyatlandırır. Bir görevin maliyeti başlangıç ile bitiş günlerine yayılır (eşit, ya da başta ya da sonda yüklü). Panel, günlük, haftalık ya da aylık birikimli nakit akışı eğrisini çizer; aşamaya ve pakete göre maliyeti ve bir tarihte planlananla inşa edilenin karşılaştırmasını gösterir. CSV çıktısı alınır. Fiyat vermeden hiçbir şey fiyatlandırılmaz: hiçbir fiyat birlikte gelmez.

## Para birimi

Bir fiyat tablosu, fiyatlarının hangi para biriminde olduğunu belirtebilir (USD ya da EUR gibi üç harf). 5D panelinde bunun için bir kutu vardır; dosyada fiyatlarla birlikte saklanır ve JSON dışa aktarımları bunu taşır. Bundan önce oluşturulmuş ya da bu alanı boş bıraktığınız bir tablonun para birimi yoktur: maliyetleri uygulamanın varsayılanı olan USD olarak gösterilir ve panel ile devam eden toplamlar bunu belirtir. Para birimleri arasında hiçbir dönüşüm yapılmaz.
