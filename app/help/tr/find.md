---
title: Elemanları sınıfa, ada veya özelliğe göre bulun
summary: Bir veya daha fazla kurala uyan her elemanı bulun — sınıfını, adını, tipini, katını, malzemesini ya da herhangi bir özellik değerini — hepsini seçin ve kuralları adlandırılmış bir arama kümesi olarak saklayın.
keywords: bul, ara, filtre, sorgu, kural, arama kümesi, seçim kümesi, kayıtlı arama, özellik, değer, sınıf, malzeme, tümünü seç
from: 3d293bc2
---

## Ne yapacaksınız

Tek adımda tek türden ya da tek bir değere sahip tüm elemanları seçin: her kapı, 2. Kattaki her duvar, yangın dayanımı EI60 olan her eleman, belirli bir tutarın üzerinde maliyeti olan her duvar.

## Adımlar

1. Bir IFC modeli açın.
2. Sol panelde {{ui:Bul}} öğesini açın.
3. İlk kuralda bir özellik seçin (önce elemanın kendi özellikleri, örneğin {{ui:Sınıf}} ve {{ui:Kat}}, ardından modelin özellik kümeleri), karşılaştırma yöntemini ve bir değer seçin. Değer kutusu modelde bulunan değerleri önerir.
4. Aramayı daraltmak için {{ui:Kural ekle}} öğesine tıklayın. Hepsinin gerekmesi için {{ui:Her kural}}, bunlardan birinin yeterli olması için {{ui:Herhangi bir kural}} seçin.
5. {{ui:Bul}} öğesine tıklayın ya da bir değer kutusunda {{key:Enter}} tuşuna basın. Eşleşenler seçilir.
6. Kuralları saklamak için {{ui:Küme olarak kaydet}} öğesine tıklayın, bir ad yazın ve düğmeye yeniden tıklayın. Daha sonra bir kümenin adına tıklayarak onunla arama yapabilirsiniz.

## Ne görmelisiniz

- Eşleşenler 3B görünümde ve model ağacında seçilir; {{ui:Özellikler}} sınıfa göre kaç tane olduğunu bildirir. Yalnızca bunları göstermek için {{key:I}}, gizlemek için {{key:H}} tuşuna basın.
- Sözcükler büyük/küçük harf farkı gözetmeden eşleşir. Sayılar sayı olarak karşılaştırılır: "1000'den fazla" ifadesi metni değil değeri ifade eder.
- {{ui:bir değeri var}} ve {{ui:değeri yok}} değer gerektirmez; değeri dolu olanları ya da eksik olanları bulur.
- Kaydedilen kümeler, açtığınız her model için bu tarayıcıda kalır.

## Sık yapılan hatalar

- **Hiçbir şey bulunmadı.** Bir kuralın eşleşebileceği bir değere ihtiyacı vardır: değer kutusundaki önerilere bakın.
- **Bir özellik listede yok.** Bu modelde şekli olan hiçbir elemanda bu özellik yok.

## Sonraki

- [Özelliğe göre elemanları renklendirin](topic:color-by-property)
- [Elemanları gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
