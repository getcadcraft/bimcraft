---
title: Bir IFC modelini kesit düzlemiyle kesin
summary: Üç boyutlu modeli üstten, önden veya yandan dilimleyin ya da içi görmek için yalnızca bir kesit kutusunun veya eğimli yüzlere sahip birkaç kutudan oluşan hacmin içinde kalanı tutun; kesimi sürükleyerek veya yazarak taşıyın, çevirin ve kesitin neyi göstereceğini seçin.
keywords: kesit, kesit düzlemi, kesit kutusu, tutamaçlar, sürükle, pay, seçim kutusu, kesim kutusu, kırpma, dilimleme, kat planı kesimi, kat planı, görünüş, iç, içerisi, iç mekân, çevir, uzaklık, kesit hacmi, basamaklı kesit, L biçimli, eğim, eğik kesim, eğik düzlem, ek düzlem
from: 6315e71a
---

## Ne yapacaksınız

Tek bir düzlemle bir IFC modelini keserek içini görün: plan için üstten, ya da binanın içinden geçen bir kesit için önden veya yandan.

## Adımlar

1. Bir IFC modeli açın. Bkz. [Bir IFC modelini açın ve 3B'de etrafına bakın](topic:open-ifc-model).
2. Araç çubuğunda {{ui:Kesit}} öğesine tıklayın veya {{key:X}} tuşuna basın. Model yarı yüksekliğinden kesilir ve araç çubuğunun altında bir çubuk belirir.
3. Nereden kesileceğini seçin: {{ui:Üst}}, {{ui:Ön}} veya {{ui:Yan}}. Ön ve Yan seçenekleri ayrıca görünümü kesimi görecek şekilde çevirir.
4. Kesimi taşıyın: **Uzaklık** kaydırıcısını sürükleyin ya da kutuya metre cinsinden bir uzaklık yazıp {{key:Enter}} tuşuna basın. Milimetre de yazabilirsiniz, örneğin `1200 mm`.
5. Kesimin diğer tarafını tutmak için {{ui:Çevir}} öğesine tıklayın.
6. Özelliklerini görmek için kesimdeki bir öğeye tıklayın.
7. Kesimi kaldırmak için {{ui:Kapalı}} öğesine tıklayın, {{ui:Kesit}} öğesine yeniden tıklayın veya {{key:X}} tuşuna basın.

## Bir kesit kutusu

Aynı çubukta {{ui:Kutu}} öğesine tıklayarak yalnızca bir kutunun içinde kalanı tutun. {{ui:X}}, {{ui:Y}} ve {{ui:Z}} her biri iki kaydırıcıya sahiptir: kutunun nerede başladığı ve nerede bittiği, modelin kenarından metre cinsinden. Değerler yanlarında görünür.

- {{ui:Seçilenin etrafına kutu}} kutuyu seçtiğiniz öğelerin etrafına sığdırır ve onlara yakınlaştırır. Her yanda 300 mm pay bırakır; bunu {{ui:Ayarlar}} › {{ui:BimCraft}} › {{ui:Seçilenin etrafındaki boşluk}} yolundan değiştirin.
- Öğeler seçiliyken {{ui:Göster}} › {{ui:Seçilenin etrafına kesit kutusu}} ya da {{key:Shift+X}} aynısını tek adımda yapar; kesim açık olmasa bile.
- Kutudaki **tutamaçlar** kutuyu imleçle taşır: bir yüzün ortasındaki kareyi sürükleyerek o yüzü, bir kenarın ortasındakini sürükleyerek orada buluşan iki yüzü, bir köşedekini sürükleyerek üç yüzü taşıyın. Kaydırıcılar onu izler. {{ui:Üst}} görünümünde bir köşe kutuyu planda, {{ui:Ön}} veya {{ui:Yan}} görünümünde ise kesitte taşır.
- {{ui:Tüm model}} kutuyu yeniden tüm modeli kapsayacak şekilde açar.
- {{ui:Üst}}, {{ui:Ön}} veya {{ui:Yan}} yeniden tek bir düzleme döndürür.

## Birkaç kutudan oluşan hacim, eğimli yüzler ve ek düzlemler

Her zaman tek bir kutu gerekmez: basamaklı bir kesit, L biçimli bir kanat ya da ızgaraya dik olmayan bir duvar boyunca bir kesim.

1. {{ui:Kutu}} içinde {{ui:Kutu ekle}} öğesine tıklayın. Kesim artık kutuların **herhangi birinin** içinde kalanı tutar; yani iki kutu basamaklı ya da L biçimli bir hacim oluşturur. Yanındaki listede kaydırıcıların hangi kutuyu değiştirdiği gösterilir ({{ui:Kutu 1}}, {{ui:Kutu 2}}…); {{ui:Bu kutuyu kaldır}} seçili olanı kaldırır. Bir hacim en fazla 8 kutu içerebilir.
2. Seçili kutuyu biçimlendirmek için {{ui:Eğim ve düzlemler}} öğesini açın:
   - Bir {{ui:Yüzey}} seçin ve her iki yöne ne kadar yatacağını derece cinsinden yazın (en fazla 80). Yüzey ortasından döner; diğer yüzler kaydırıcıların koyduğu yerde kalır. {{ui:Dik yap}} yüzü eski haline getirir.
   - {{ui:Düzlem ekle}} kutuyu bir düzlem daha ile keser. {{ui:Yüzeyler}}, kesilip atılan tarafın X'ten Y'ye doğru derece cinsinden baktığı yöndür; {{ui:Eğim}} bu yönün yukarıya doğru ne kadar döndüğüdür (dik bir düzlem için 0, yatay bir düzlem için 90); {{ui:Uzaklık}} düzlemin kutunun ortasına metre cinsinden uzaklığıdır. × düzlemi kaldırır. Bir kutu en fazla 6 ek düzlem alabilir.
3. Hacim katı cisimleri kestiğinde kesit yüzleri öncekiyle aynı şekilde doldurulur; iki kutunun bir basamakta buluştuğu yerde de.

:::tip
Dış hat kaybolur ve hiçbir şey kalmazsa, eğimler veya düzlemler o kutunun içinde hiçbir şey bırakmıyordur; çubuk bunu söyler. Bir yüzü geri eğin ya da bir düzlemin uzaklığını değiştirin.
:::

## Arsasında döndürülmüş bir bina

Birçok model binayı dosyanın eksenlerine göre açılı yerleştirir (gerçek kuzey, ortak koordinatlar). Duvarlar açılı olduğunda yeni bir kesit binaya dik başlar: {{ui:Ön}}, {{ui:Yan}} ve kutu kendi duvarları boyunca uzanır ve kesit çubuğundaki {{ui:Yapıya dik}} açık olur. Modelin eksenlerine dönmek için tıklayın, geri dönmek için yeniden tıklayın (durum satırı binanın ne kadar döndüğünü söyler). **Ayarlar › BimCraft › Arsasında döndürülmüş bir bina › Arsadaki gibi** seçildiğinde kesitler ve görünümler bunun yerine modelin eksenleriyle başlar. Bkz. [Ayarlar](topic:settings).

## Ne görmelisiniz

- **Üst** kesimin altında kalanı tutar, böylece odaların içine bakarsınız. Uzaklık modelin alt kısmından yukarı doğru ölçülür.
- **Ön** kesimin arkasında kalanı önden görünümle tutar; **Yan** kesimin ötesinde kalanı yandan görünümle tutar. Uzaklık modelin önünden veya yanından ölçülür.
- İnce renkli bir dış hat düzlemin nerede olduğunu gösterir.
- Düzlem bir duvarı, döşemeyi veya başka bir katı cismi kestiğinde kesit yüzü, çizilmiş bir kesit gibi koyu bir renkle doldurulur. Çubuktaki {{ui:Doldur}} bunu açıp kapatır.
- Sağ alt köşedeki görünüm küpü modeli herhangi bir taraftan kesite bakacak şekilde döndürür.
- Tıklama, görebildiğiniz şeyi seçer: kesilip atılan hiçbir şey seçilemez.

## Sık yapılan hatalar

- **Hiçbir şey değişmedi.** Kesim çatının üstünde ya da modelin dışında olabilir. Kaydırıcıyı sürükleyin ya da daha küçük bir uzaklık yazın.
- **Uzaklık geri sıçradı.** Modelin ötesindeki bir uzaklık sonuna taşınır ve durum satırı bunu söyler.
- **Bir sorun hacminizin yalnızca bir kısmını gösteriyor.** Bir sorun (BCF) eğimli yüzleri ve düzlemleriyle tek bir kutuyu tutar: hacmin ilk kutusunu. Sorunu oluşturduğunuzda durum satırı bunu söyler.
- **Kesit içi boş.** Çubuktaki {{ui:Doldur}} kapalıdır: duvarların, döşemelerin ve diğer katı cisimlerin kesit yüzlerini doldurmak için tıklayın.
- **Dolu kesit benekli görünüyor ya da bir parçayı kaçırıyor.** Doldurma kapalı katılar gerektirir; dosyadaki şekli kapalı olmayan bir öğe (tek bir yüzey, ağaç yaprakları) boyanmak yerine doldurulmadan bırakılır. Farklı renklerde parçalardan oluşan bir öğe (bir çerçeve ve camı) parçaları birbirine kapandığında doldurulur.
- **Kesit çubuğu nerede?** Kestiği 3B görünümün en üstündedir: {{ui:Böl}} modunda 3B yarısında, yalnızca {{ui:Plan}} açıkken çizim çubuğunun altında. Kısa bir görünümde kaydırılır.

## Sonraki

- [Katları, mekânları ve kenarları göster ve gizle](topic:storeys-and-spaces)
- [Bir DWG ya da DXF çizimini 3B'de görün](topic:dwg-in-3d) — 3B çizimlerinde aynı kesit düzlemi bulunur.
