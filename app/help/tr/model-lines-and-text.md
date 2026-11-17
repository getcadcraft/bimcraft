---
title: "Model çizgileri ve model metni: modelde, çalışma düzleminde çizilir"
summary: "Model çizgisi, modelde yaşayan ve onu gören her görünümde görünen bir çizgi, çoklu çizgi ya da yaydır. Model metni, gerçek derinliği olan 3B yazıdır. İkisi de çalışma düzleminde çizilir."
keywords: model çizgisi, model metni, 3B metin, yazı, tabela, işaret, 3B çizgi, yay, çoklu çizgi, çalışma düzlemi, ekstrüde metin, yazı tipi, derinlik, ayrıntı çizgisi, çizim çizgisi, açıklama, IfcAnnotation
from: fc9cccb5
---

## Ne yapacaksınız

Yalnızca tek bir görünüme değil, modelin parçası olan çizgileri ve yazıları çizin.

## Adımlar

1. Önce çalışma düzlemini ayarlayın (bkz. **Çalışma düzlemi**). Seviye düzlemi planda üzerine çizilir; dikey bir düzlem Çalışma Düzlemi Görüntüleyicisinde.
2. Bir çizgi için **Derleme** menüsünde **Model çizgisi** seçin ve **Çizgi**, **Çoklu çizgi** ya da **Yay (üç nokta)** seçeneğinden birini belirtin:
   - bir çizgi iki tıklamadır;
   - bir çoklu çizgi her nokta için bir tıklamadır, ardından Enter ya da çift tıklama. İlk noktaya tıklamak onu kapatır;
   - bir yay üç tıklamadır: başlangıcı, geçtiği bir nokta ve bitişi.
3. Metin için **Model metni** seçin. Sözcükleri yazın, büyük harf yüksekliğini ve derinliği ayarlayın, sonra metnin başlayacağı yere tıklayın (taban çizgisinin sol ucu).
4. Bir çizgiyi ya da metni **Özellikler** içinde görmek için seçin. Metnin sözcükleri, yüksekliği ve derinliği orada değiştirilebilir. Sil ile kaldırılır.

## Nerede görünürler

- Bir model çizgisi, çalışma düzlemi üzerindeyken kendi katının planında, 3B görünümde, cephe ve kesit panelinde ve Çalışma Düzlemi Görüntüleyicisinde görünür. Bir çizim çizgisi ({{ui:Açıklama}}, Çizgi) yalnızca tek bir görünüme aittir.
- Model metni katı bir geometridir: modelin göründüğü her yerde görünür; planda, 3B'de, cephelerde, kesitlerde ve sayfalarda.
- Model çizgileri henüz basılı sayfalarda çizilmez. Model metni çizilir.

## Yazı tipi

Model metni, sayfalarda ve PDF'lerde kullanılan yazı tipini kullanır: Liberation Sans, SIL Open Font License altında. Yazı tipinde bulunmayan bir harf soru işareti olarak çizilir ve hangisi olduğu size bildirilir. Tek bir yazı tipi ve tek bir kalınlık vardır. Harfler, yazı tipinin kendi genişliklerine göre, kerning olmadan aralanır.

## IFC dosyasında

- Bir model çizgisi, nesne türü ModelLine olan bir IfcAnnotation'dır. Şekli bir 3B eğridir: bir çoklu çizgi, ya da bir yay için kırpılmış bir daire.
- Model metni, nesne türü ModelText olan bir IfcBuildingElementProxy'dir. Şekli, her harf parçası için bir ekstrüde katıdır; O ve B gibi harflerin delikleriyle birlikte. Miktarları yüzey alanı ve hacimdir (yüzey alanı çarpı derinlik).

## İyi bilinmesi gerekenler

- Her boyut istediğiniz gibi yapılır. Yalnızca uzunluğu olmayan bir çizgi, üç noktası tek bir doğru üzerinde olan bir yay ya da hiç harfi olmayan bir metin reddedilir; çünkü yapılacak bir şey yoktur.
- Her çizgi ve her metin, ya da metinde yapılan her değişiklik, Geri al'ın bir adımıdır.
