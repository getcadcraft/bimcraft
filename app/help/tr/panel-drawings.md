---
title: Ahşap veya hafif profilli çelikte panel çizimleri
summary: Modelin duvarlarını, döşemelerini ve çatılarını ahşap veya hafif profilli çelikte panel olarak karkaslayın; her dikmeyi, tablayı, başlık kirişini, kirişi ve makası ölçekli görün; kesim listesini CSV olarak, imalat çizimlerini PDF olarak kaydedin.
keywords: panel, karkas, imalat çizimi, kesim listesi, hafif profilli çelik, çelik dikme, LGS, ahşap, kiriş, makas, başlık kirişi, stok, PDF
from: c09f916e
---

## Panelleri açın

{{ui:Derleme}} menüsünde {{ui:Panel çizimleri}} öğesini seçin (ya da {{cmd:PANELS}} yazın). Liste, modelin çizilmiş her duvarını, her döşemesini ve her çatısını, her biri bir işaretle, içerir. Duvarlar kapı ve pencereleriyle birlikte açıklıklar olarak gelir. Döşeme, dış hattının etrafındaki dikdörtgen olarak karkaslanır ve kirişler kısa yönde çalışır. Çatı, duvarlarının dış hattı üzerinde, çatı eğimiyle bir beşik çatı olarak karkaslanır; liste bunu belirtir, çünkü kırma veya karmaşık bir çatı beşik çatı değildir.

## Malzeme, boyut ve aralık

{{ui:Malzeme}} seçin: **Ahşap** veya **Hafif profilli çelik**. Çelik parçalar, derinliklerine ve kalınlıklarına göre adlandırılmış C profilli dikmelerdir (örneğin C92-1.2), tablalar için bir rayla. {{ui:Eleman boyutu}} işaretli her panel için tek bir boyut seçer; ya da her panel türünün varsayılanlarını kullanmak için Varsayılan'da bırakın. {{ui:Aralık}}, dikmeler, kirişler veya makaslar arasındaki mesafedir. Bunlar sizin ayarlayacağınız başlangıç değerleridir. Bunlar bir yönetmelik kontrolü değildir: o aralıkta bir dikmenin o duvarı taşıyıp taşımayacağı ve bir başlık kirişinin o açıklığı geçip geçemeyeceği, yönetmelik tablolarına (Yapı yönetmelikleri eklentisinde IRC'nin tabloları vardır) ve mühendisinize aittir.

## Ne elde edersiniz

İşaretli ilk panel, boyutlarıyla birlikte iletişim kutusunda ölçekli çizilir. {{ui:Kesim listesi (CSV)}} her panelin parçalarını işaretine, boyutuna ve uzunluğuna göre, ayrıca bunlar için satın alınacak stok uzunluklarını kaydeder. {{ui:İmalat çizimleri (PDF)}} her panel için bir A3 sayfa kaydeder; her parça işaretli ve kesim listesiyle birlikte. {{ui:Çizim (SVG)}} ilk paneli bir çizim olarak kaydeder. Karkas kodunun karkaslayamadığı her şey (bir duvarın ucuna çok yakın bir açıklık, alt tablaların altına sığmayan bir başlık kirişi, en uzun stoktan uzun bir parça) hem iletişim kutusunda hem de **Sorunlar** listesinde gösterilir.

## Yapmadıkları

Paneller, siz istediğinizde modelden yapılan çizimlerdir: modele hiçbir şey yazılmaz, bu yüzden her zaman modelle eşleşirler. Karkası modele üye olarak eklemek için ahşap duvarlar, döşemeler ve çatılar için {{ui:Karkas}} kullanın.
