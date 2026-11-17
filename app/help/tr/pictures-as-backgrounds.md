---
title: Resmi planın altına koyun
summary: Bir PNG, JPEG veya WebP resmi (taranmış bir plan, bir eskiz, bir arsa fotoğrafı, bir hava fotoğrafı) bir katın planının altına veya dikey bir düzleme yerleştirin; iki noktayla ölçekleyin, taşıyın, döndürün, soldurun ve kilitleyin; 3B'de ve plan PDF'inde görün ve bir pakette modelin yanında saklayın.
keywords: resim, görüntü, arka plan, PNG, JPEG, WebP, tarama, eskiz, fotoğraf, hava fotoğrafı, arsa planı, ölçek, saydamlık, kilit, altlık, izleme
from: e3c78d1f
---

## Bir resim yerleştirin

{{ui:Çiz}} öğesini açın, kata gidin ve {{ui:Derleme}} menüsünde {{ui:Resim}} öğesini seçin. Sonra {{ui:Resim ekle…}} ve bir PNG, JPEG veya WebP dosyası seçin. Dosya tarayıcınızda okunur ve hiçbir zaman yüklenmez. Resim planın altında, görünüme sığacak şekilde belirir ve araç çubuğu resmin henüz ölçeklenmediğini söyler. Çizdiğiniz her şey onun üstündedir.

## Ölçeği ayarlayın

{{ui:Ölçek}} seçin, resimde gerçek mesafesini bildiğiniz iki nokta tıklayın (taranmış bir planda bir duvarın iki ucu, bir eskizde basılı bir ölçü), sonra mesafeyi yazın ve {{key:Enter}} tuşuna basın. Resim tıkladığınız ilk noktanın etrafında büyür ya da küçülür. {{key:Esc}} iptal eder.

## Kopyalanmış bir alanı yapıştırın

MarkupCraft'ta {{ui:Alanı kopyala}} bir PDF paftasının bir kısmını resim olarak kopyalar. BimCraft'a dönün, bir katın planı görünürken {{key:Ctrl+V}} tuşlarına basın (ya da {{ui:Düzenle}} menüsünde {{ui:Yapıştır}}): alan plana resim olarak iner ve işaretçinin olduğu yere ortalanır (ya da görünümün ortasına). Paftanın bir çizim ölçeği varsa gerçek boyutunda gelir; böylece üzerindeki bir duvar sizin duvarlarınız kadar uzun olur. Yoksa kâğıt boyutunda gelir ve {{ui:Ölçek}} başlar; böylece iki nokta tıklayıp mesafelerini yazabilirsiniz. Saydam olarak kopyalanan bir alan, kopyalandığı saydamlıkla başlar. Bu tek bir geri alma adımıdır ve diğer resimler gibi saklanır.

Yapıştırma, en son ne kopyaladıysanız onu alır: kopyalanmış bir alanı ya da BimCraft'ta kopyaladığınız bir şeyi. {{key:Ctrl+V}} panonuzdaki diğer PNG, JPEG veya WebP resimlerini de yapıştırır; {{ui:Resim ekle…}} gibi yerleştirilir ve henüz ölçeklenmez. Kopyalanmış bir alan altı saat hatırlanır.

## Taşıyın, döndürün, soldurun, kilitleyin

{{ui:Taşı}} resimde bir temel nokta ve sonra gitmesi gereken yeri alır. {{ui:Döndür}} resmin merkezi etrafında derece cinsinden bir açı alır. {{ui:Saydamlık}} onu soldurur, böylece çizgileriniz öne çıkar. {{ui:Kilitle}} çizim yaparken hareket etmesini engeller; kilitli bir resim yine de saydamlığını değiştirmenize ve gizlemenize izin verir. Her değişiklik bir geri alma adımıdır.

## Birden çok resim, birden çok kat

Bir resim yerleştirildiği kata aittir ve o katın planında ve tavan planında görünür. Üzerinde çalışmak için bir resme tıklayın ya da listeden seçin. {{ui:Gizle}} resmi kaldırmadan kapatır; {{ui:Kaldır}} (ya da {{key:Delete}}) onu modelden çıkarır.

## Resimler 3B görünümde

Her resim 3B görünümde düz bir düzlem olarak da durur: bir plan resmi katının üzerinde yatar, dikey düzlem resmi kesit çizgisinin üzerinde durur. Model bunun üzerine çizilir, modeli gizlemeden; modelin arkasında kalan kısmını ise model gizler. Üst üste binen resimler uzaklığa göre sıralanır. {{ui:Saydamlık}}, {{ui:Gizle}}, {{ui:Kilitle}} ve {{ui:Kaldır}} aynı çalışır ve {{ui:3B'de göster}} yalnızca 3B görünümde tüm düzlemleri kapatır. Görünümler hızlı kalsın diye bir kat en fazla 8 resim tutar.

## Dikey bir düzlemde resim

{{ui:Yerleşim yeri}} altında {{ui:Dikey düzlem (kesit çizgisi)}} seçin, sonra {{ui:Resim ekle…}}. Plan üzerinde bir çizginin iki ucuna tıklayın (bir duvar yüzünün ucu yakalanır) ya da {{ui:Bir kesit çizgisi üzerinde}} bölümünde katın adlandırılmış bir kesit çizgisini seçin; hiçbir tıklama gerekmez. Resim o çizginin üzerinde, katın üzerinde, çizgi kadar geniş durur. {{ui:Genişlik}} ayarlayın, yerini {{ui:Çizgi boyunca}} ve {{ui:Seviyenin üstündeki yükseklik}} değerini yazarak girin; {{ui:Döndür}} onu kendi düzleminde döndürür. Dikey bir resim planın altına çizilmez; üzerinde çalışırken plan onun çizgisini gösterir. BimCraft etkileşimli bir 2B kesit penceresine sahip değildir: kesitler ve görünüşler paftalarda çizilir, resimler bu pafta görünümlerinde henüz yazdırılmaz.

## Yazdırma

Bir planda {{ui:Çıktı görünümü}} katın resimlerini PDF'te çizimin altına yazar: ölçeğinde, döndürülmüş ve saydamlıklarıyla birlikte, paftaya kırpılmış olarak; gizli bir resim dışarıda kalır. JPEG olduğu gibi girer; diğer resimler önce paftada 200 dpi'ya indirilir.

## Modelin yanında saklanır

Resmin baytları IFC metnine yazılmaz. Model her birine adıyla başvurur (pictures/<id>.png gibi bir IfcDocumentReference) ve baytlar bir proje paketinde taşınır. {{ui:Paket olarak kaydet…}} (ya da {{ui:IFC olarak farklı kaydet}} ve onu seçin) kullanın: modeli ve resimlerini içeren tek bir .ccbundle dosyası alırsınız; IFC küçük kalır ve düzenlemeler hızlı kalır. .ccbundle dosyasını açtığınızda resimler geri gelir.

Düz bir .ifc içinde resim, büyümeden tutulamaz. Kaydettiğinizde BimCraft kaç resmin dışarıda tutulduğunu söyler ve bir paket ya da 512 KB'a kadar resimleri gömüp diğerlerini dışarıda bırakan düz bir IFC önerir. Paketi olmadan açılan düz bir .ifc, bu resimleri eksik gösterir ve Sorunlar bunları listeler; resimlerin kaydedildiği .ccbundle dosyasını açın. İlk sürümün kaydettiği, resmi IFC'nin içinde tutan dosyalar hâlâ açılır ve bir paket olarak kaydetme resimlerini dışarı taşır. Bir resim 6 MB'a kadar olduğu gibi tutulur; daha büyük olan önce küçültülür ve bu size söylenir. Diğer programlar modeli açar ve resimleri yok sayar. Henüz ölçeklemediğiniz bir resim Sorunlar listesinde bir not olarak yer alır.

## Kesit ve görünüş paftalarında

Dikey bir düzlemdeki bir resim ({{ui:Dikey}} seçin ve bir çizginin iki ucuna tıklayın ya da adlandırılmış bir kesit çizgisinin üzerine koyun) tam ona bakan pafta görünümlerinde yazdırılır. Bir kesit, kesit çizgisinin üzerinde duran ya da o kesit çizgisinin üzerine adıyla konmuş bir resmi gösterir. Bir görünüş, düzlemi ona bakan her dikey resmi gösterir. Resim görünümün çizgilerinin altına çizilir, görünümün ölçeğinde, görünüme kırpılmış ve saydamlığını korur. {{ui:Paftalar…}} öğesini açarak görün; pafta PDF'i onu bir görsel olarak taşır. Arkadan bakıldığında bir resim, 3B'de olduğu gibi aynalanmış görünür. Gizli resimler dışarıda bırakılır.
