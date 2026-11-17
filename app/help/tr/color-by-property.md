---
title: Öğeleri bir özelliğe göre renklendirin
summary: Her öğeyi tek bir özelliğin değerine göre boyayın; örneğin sınıfı, tipi, katı, malzemesi, yangın dayanımı ya da maliyeti. Açıklamayı okuyun, bir değere tıklayarak yalnızca o öğeleri gösterin ve renkleri diğer modellerde kullanmak üzere bir şema olarak kaydedin.
keywords: renk, renklendir, renge göre, açıklama, akıllı görünüm, görünüm, özellik, tür, malzeme, yangın dayanımı, filtre, izole et, tema, değerler, şema, renk şeması, renkleri kaydet, yeniden kullan, ekip, json, renk örneği
from: f081d343
---

## Ne yapacaksınız

Özelliğin model genelinde nasıl dağıldığına bir bakışta göz atın: hangi duvarlar dış cephede, hangi malzemeler nerede kullanılmış, hangi öğelerin yangın dayanımı yok. Her öğe kendi değerinin rengini alır; açıklama her rengin ne anlama geldiğini ve kaç öğenin o renge sahip olduğunu gösterir.

## Adımlar

1. Bir IFC modeli açın.
2. Sağdaki {{ui:Renk}} sekmesine tıklayın.
3. Listeden bir özellik seçin. İlk olanlar her öğeye aittir ({{ui:Sınıf}}, {{ui:Tür}}, {{ui:Kat}}, {{ui:Malzeme}}, {{ui:Ad}}…); geri kalanlar modelin özellik kümelerinden ve miktar kümelerinden gelir, kümenin adının altında. Her birinin yanındaki sayı, o özelliğe sahip öğe sayısıdır.
4. Açıklamayı okuyun: bir renk, değer ve o değere sahip öğe sayısı.
5. Yalnızca o öğeleri göstermek için bir değere tıklayın. Daha fazla değer eklemek için {{key:Mod}} tuşunu basılı tutup tıklayın. Her şeyi yeniden göstermek için {{key:Shift+H}} tuşlarına basın.
6. Modelin kendi renklerine dönmek için {{ui:Kapalı}} öğesine tıklayın.

## Ne görmelisiniz

- En fazla yedi değerin her biri kendi rengini alır; en yaygın değer ilk sıradadır. Bundan fazla değer, **diğer değerler** adıyla listelenen tek bir gri rengi paylaşır.
- Birçok farklı değeri olan bir sayı, düşükten (açık) yükseğe (koyu) altı eşit aralığa bölünür.
- Özelliği olmayan öğeler soluk gri renktedir ve **Değer yok** olarak listelenir; böylece renkli olanlar öne çıkar.
- Renkler Kâğıt ve Model temalarına göre değişir ve modeli düzenlerken korunur.
- Bir tipin özelliği o tipin her öğesi için geçerlidir; bir öğenin aynı özellik için kendi değeri varsa, kendi değeri geçerli olur.

## Renkleri değiştirin ve şema olarak saklayın

- Açıklamadaki bir değerin renk kutusuna tıklayarak ona başka bir renk seçin. Model hemen yeniden boyanır.
- {{ui:Şemayı kaydet}} renkleri, özelliğin adını taşıyan küçük bir `.json` dosyası olarak indirir; örneğin `Class colors.json`.
- Başka bir modelde ya da bir ekip arkadaşınızın bilgisayarında {{ui:Şema aç…}} öğesine tıklayıp o dosyayı seçin. Şemadaki her değer rengini alır; böylece aynı yangın dayanımı ya da sistem her modelde aynı renkte görünür.
- Şemada olmayan bir değer gri boyanır ve "şemada yok" olarak listelenir. Şemada olup bu modelde olmayan değerler 0 ile listede kalır; böylece şemanın tamamını görebilirsiniz.
- Şema renklerini her iki temada da korur. Listeden bir özellik seçmek otomatik renklerle yeniden başlar.

## Sık yapılan hatalar

- **"Bu modelde … değer yok."** Şema, bu modelde bulunmayan bir özellik için kaydedildi (örneğin başka bir özellik kümesi adı). Bu tür bir model için yapılmış bir şema açın ya da listeden bir özellik seçin.

- **Bir özellik listede yok.** Modelde şekli olan hiçbir öğe bu özelliğe sahip değil. Katların ve mekânların kendi özellikleri listelenmez.
- **Her şey aynı renk.** Her öğenin aynı değeri var ya da hiçbirinde yok: açıklamadaki sayılara bakın.

## Sonraki

- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
- [Model ağacıyla yolunuzu bulun](topic:model-tree)
