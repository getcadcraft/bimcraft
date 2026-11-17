---
title: Bir bina kütlesini bir saha çalışmasından geliştirin
summary: CivilCraft'ın saha görünümünde incelenmiş bir bina kütlesini alın ve onu seviyelere, duvarlara ve döşemelere dönüştürün; sahanın haritadaki konumu korunur.
keywords: kütle, bina kütlesi, kütle oluşturma, saha çalışması, geliştir, CivilCraft, teslim, seviyeler, duvarlar, döşemeler, taban izi, coğrafi referans, IFC
from: 557b94d1
---

CivilCraft'ın saha görünümü, bir parsel üzerinde bina kütleleri çizebilir ve bunları zemine, yazdığınız sınırlara ve güneşe karşı test edebilir. Oradaki **BimCraft'ta geliştir** seçeneği, kütleleri alarak BimCraft'ı yeni bir sekmede açar; **Kütleleri IFC olarak** ise bunları burada alışıldığı şekilde açacağınız bir dosya olarak kaydeder. Her iki durumda da her kütle bir saha olarak gelir: her kat için bir seviyesi olan bir bina ve sayılarını taşıyan bir blok (kütlenin kendisi).

## Bir kütleyi geliştirin

1. 3B görünümde bir kütle seçin. Özellikler, kullanımını, katlarını ve kat yüksekliğini, taban izini, brüt kat alanını, yamaca nasıl oturduğunu ve parselini gösterir.
2. **Bu kütleyi geliştir** düğmesine tıklayın.

Tek bir {{ui:Undo}} adımında, o binanın her seviyesine taban izinin etrafında duvarlar eklenir (taban izi duvarların dış yüzüdür; her duvar bir üst seviyeye kadar uzanır ve en üsttekisi bir kat yüksekliğindedir) ve tüm bina altında bir döşeme. Blok değiştirilir ve bina, çalışmanın sayılarını `CadCraft_SiteMass` özellik kümesinde, geliştirildi olarak işaretlenmiş şekilde tutar. Çatı yoktur: çatı tasarıma bağlıdır.

## Sahanın konumu

CivilCraft'tan gelen bir dosya, projenin kendi uzunluk biriminde yazılır ve CivilCraft projesinde bir koordinat sistemi varsa bunu projenin harita dönüşümü olarak taşır. Bir kütleyi geliştirmek bunu olduğu gibi bırakır; böylece bina, haritanın gösterdiği yerde kalır.
