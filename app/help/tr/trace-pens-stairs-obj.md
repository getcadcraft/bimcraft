---
title: Bir katı izleyin, görünüm başına kalem ayarlayın, bir merdiven eskizleyin, bir OBJ açın
summary: Başka bir katı planın altında kesikli gösterin ve hizalayın; duvarlara, kapılara ve pencerelere tek bir görünümde kendi kalemini verin; bir merdiven elde etmek için yürüme çizgisi çizin ve bir Wavefront OBJ ağını açın.
keywords: izleme referansı, hayalet, altlık, kalem, çizgi kalınlığı, çizgi tipi, geçersiz kılma, merdiven, eskiz, iniş, OBJ, ağ, içe aktarma, Wavefront
from: 333ebbde
---

## Bir katı izleyin

{{ui:Derleme}} menüsünde {{ui:İz}} seçin, sonra listeden bir görünüm seçin: başka bir katın planı, bir katın tavan planı ya da bir çağrı (kesildiği kırpmaya). Duvarları, kolonları ve döşemeleri çizmekte olduğunuz planın altında kesikli görünür. Referanstaki bir temel noktaya, sonra o noktanın gitmesi gereken yere tıklayarak taşıyın ya da X, Y ve bir açı yazın (kendi merkezi etrafında döner). {{ui:Sıfırla}} onu eski yerine koyar, {{ui:Gizle}} kaldırır. Bu yalnızca bir referanstır: hiçbir şey onu seçmez, yazdırılmaz ve IFC'ye kaydedilmez. BimCraft onu bu tarayıcıda her kat için hatırlar.

## Görünüm başına kalemler

{{ui:Kalemler}} seçin. Kalemin ne için olduğunu belirtin: tüm duvarlar, tüm kapılar, tüm pencereler, seçilen öğenin tipi ya da seçilen öğeler. Bir kalınlık, bir çizgi (düz, kesikli, noktalı) ve bir renk seçin, sonra {{ui:Uygula}}. Değişiklik yalnızca bu katın planı için geçerlidir. Bir seçim bir tipe üstün gelir, bir tip de tüm bir kategoriye üstün gelir. {{ui:Tümünü temizle}} bunları kaldırır. Bu tarayıcıda saklanırlar. Renkli kalemleri 3B görünümde modelin üzerinde boyamak için **3B'de kalem renkleri** kutusunu işaretleyin (kalınlık ya da kesik bir çizgi bir çizginin özelliğidir, bu yüzden orada yalnızca renk görünür); geri dönmek için işareti kaldırın. {{ui:Yazdır}} onları planın PDF'ine çizer: kalınlık ekrana göre ölçeklenir (varsayılan 1.75 piksellik duvar kalemi 0.5 mm'dir), kesik çizgiler kesik kalır ve bir renk, Kâğıt temasındaki değeriyle yazdırılır.

## Bir eskizden merdiven

{{ui:Merdiven eskizi}} seçin ve yürüme çizgisinin köşelerine, en alt basamaktan başlayarak tıklayın. Bir çizgi düz bir merdivendir, dik açıyla birleşen iki çizgi bir L'dir ve üç çizgi (yukarı, yatay, geri) bir U'dur. Bir iniş çizmek için {{key:L}} tuşuna basın: köşelerine tıklayın ve {{key:Enter}}'a basın; kısa kenarı merdivenin genişliğini belirler. Merdiveni yerleştirmek için {{key:Enter}}'a basın. Her basamak, çizginizin uzunluğundan ve yüksekliğin gerektirdiği basamak yüksekliği sayısından hesaplanır. Bundan sonra sıradan bir merdivendir: **Özellikler** içinde değiştirin; merdiven boşluğu ve korkuluklar onu izler.

Merdiveni bunun yerine bir aile olarak yerleştirmek için {{key:Enter}}'a basmadan önce araç satırındaki **Bunu bir aile yap** kutusunu işaretleyin (ya da {{key:F}} tuşuna basın). Tek bir öğe olarak gelir ve genişlik, basamak, toplam yükseklik, her kolda basamak sayısı ve bir U'nun boşluğu parametreleriyle aile düzenleyicisinde açılır; böylece boyut, plan sembolü ya da sıcak noktalar ekleyebilirsiniz. Basamaklar ve basamak yüksekliği bunlardan çıkar. Korkuluğu ve merdiven boşluğu yoktur: bunlar sıradan bir merdivene aittir.

## Bir OBJ açın

Bir `.obj` dosyasını diğer dosyalar gibi açın. Bir OBJ'nin birimi yoktur, bu yüzden BimCraft, çoğu programın yazdığı gibi Y yukarı olacak şekilde metre okur. Her nesne ya da grup tek bir katta bir ağ öğesi olur; sonra görüntüleyebilir, ölçebilir, kesebilir, bir modele yerleştirebilir ve IFC olarak kaydedebilirsiniz. Çizgiler, eğriler ve yüzeyler dışarıda bırakılır ve durum satırı bunu söyler.

Tam olarak düz bir prizma olan bir nesne (iki paralel, aynı iki uç yüzü ve bunlara dik düz yanları olan kapalı bir ağ: bir döşeme, bir direk, bir duvar bloğu, delikli bir levha) IFC'ye bir üçgen listesi olarak değil, IFC'nin kendi ekstrüde katısı olarak, dış hattı ve derinliğiyle kaydedilir. Diğer programlar onu gerçek bir katı olarak okur, dosya küçük kalır ve derinliği ile dış hattı sonradan düzenlenebilir. Durum satırı kaç nesnenin bu yolla tutulduğunu söyler. Tam olarak bir prizma olmayan her şey (konik bir şekil, bir köşesi taşınmış bir ağ, bir boşluğu olan bir ağ) üçgen olarak kalır. Bir STEP dosyası da aynı şekilde okunur.
