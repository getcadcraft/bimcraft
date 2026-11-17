---
title: Tam boyutta çizin, açıklamaları ölçeğe göre ayarlayın
summary: Bina her zaman tam boyutta çizilir. Metin, ölçülendirme, etiket, oda adı, ızgara balonu ve semboller kâğıt üzerinde boyutlandırılır, milimetre cinsinden basıldığı gibi; bir çizimin ölçeği 1:100'den 1:50'ye değiştiğinde de bu boyutu korur.
keywords: açıklama ölçeği, açıklamalı, metin boyutu, metin yüksekliği, kâğıt yüksekliği, ölçülendirme metni boyutu, etiket boyutu, oda adı boyutu, ızgara balonu, sembol boyutu, çizim ölçeği, 1:50, 1:100, ofis standardı, yazı, 1:1 çizim, tam boyut, sayfa metni
from: 94118788
---

## Ne yapacaksınız

Çizimlerinizdeki yazıların kâğıt üzerinde ne kadar yüksek olacağını, bina için bir kez belirleyin. Modeli asla ölçeklendirmezsiniz ve bir ölçek için metni asla yeniden boyutlandırmazsınız: BimCraft boyutu kâğıt yüksekliğinden ve çizimin ölçeğinden hesaplar.

## Nasıl çalışır

- Model tam boyuttadır. 10 m uzunluğundaki bir duvar, her ölçekte 10 000 mm uzunluktadır.
- Bir açıklamanın bir **kâğıt yüksekliği** vardır: basılı sayfada büyük harfin yüksekliği, milimetre cinsinden.
- 1:100 ölçekte 2.5 mm'lik bir metin modelde 250 mm yüksektir; 1:50'de 125 mm'dir. Kâğıt üzerinde her iki durumda da 2.5 mm'dir.
- Tesisat sembolleri (elektrik, sıhhi tesisat) kâğıt milimetresiyle çizilir ve aynı kuralı izler.

## Adımlar

1. Proje tarayıcısını açın. {{ui:Sayfalar}} altında {{ui:Açıklama boyutları…}} öğesine tıklayın.
2. Ayarlamak istediğiniz türler için milimetre cinsinden bir yükseklik yazın: {{ui:Notlar ve etiketler}}, {{ui:Ölçülendirme metni}}, {{ui:Etiketler ve kat adları}}, {{ui:Oda adları}}, {{ui:Izgara balonu harfleri}}, {{ui:Sayfalardaki görünüm başlıkları}} ve {{ui:Liste metni}}. Boş bir kutu, BimCraft'ın kendi boyutunu korur; bu gri renkte gösterilir.
3. {{ui:Kaydet}} öğesine tıklayın. Bu, geri alınabilen tek bir adımdır.

Bundan sonra her sayfa, çizim takımı, plan PDF'i ile görünüş ve kesitler bu boyutları kullanır. Ölçülendirme çizgisi ile metni arasındaki boşluk, ızgara balonunun boyutu ve liste satırının yüksekliği, metinleriyle birlikte büyür.

## Kendi ölçeği olan bir plan

Bir plana, görünüm aralığında ({{ui:Ölçek}}; bkz. [Görünümler ve sayfalar](topic:views-and-sheets)) bir ölçek verin. Bu durumda:

- ekranda, oda adları, etiketler, ölçülendirme metni ve ızgara balonları modele karşı basılı boyutlarında çizilir; böylece gördüğünüz, sayfada görünecek olanla aynıdır;
- plan sembolleri ve etiketleri o ölçeğe göre boyutlandırılır. Ölçeği 1:100'den 1:50'ye değiştirirseniz modelde yarı boyutta olurlar, kâğıtta ise aynı kalırlar.

Kendi ölçeği olmayan bir plan, sabit ekran metnini korur; sembolleri, daha önce olduğu gibi 1:50 için (1/4" = 1'-0", fit ve inç olarak) boyutlandırılır.

## Ofisinizin boyutları

Varsayılan İlkeler eklentisi açıkken, ofisin yüksekliklerini Ayarlar › Genel › Varsayılan İlkeler › {{ui:Kâğıt üzerinde açıklama boyutları}} bölümünden belirleyin. Yeni bir bina, Oluştur'a tıkladığınızda bunları alır. Zaten başlattığınız bir binada, iletişim kutusunda {{ui:Ofisimin boyutlarını kullan}} bulunur. Bkz. [Varsayılan İlkeler](topic:default-policies).

## Bir yönetmelik paketinin boyutları

Bir yönetmelik paketi, bulunduğu yerin istediği metin yüksekliklerini verebilir (Yapı yönetmelikleri eklentisi, çizim kuralları). Paketi Ayarlar › Yapı yönetmelikleri bölümünde işaretleyin; sonra iletişim kutusunda {{ui:Bir yönetmelik paketinin boyutlarını kullan}} öğesine tıklayın: kutular dolar; bunları kontrol edip kaydedin. Bir paketin puntoyla verdiği boyut bir yazı tipi boyutudur ve büyük harf yüksekliğine çevrilir; bu yüzden kontrol edin. Kaydedene kadar hiçbir şey ayarlanmaz.

## Ne görmelisiniz

- 1:100 ölçekli bir sayfada ve 1:50 ölçekli bir sayfada aynı metin yüksekliği milimetre cinsinden; 1:50'de plan iki kat büyük olsa da.
- Boyutlar binayla birlikte gider: IFC dosyasında kaydedilirler.

## İyi bilmeniz gerekenler

- BimCraft'ın kendi boyutları, sayfalarının her zaman kullandığı boyutlardır (ölçülendirme metni için yaklaşık 1.5 mm büyük harfler). Bunlar bir çizim standardı değildir: ofisinizinkini belirleyin.
- Yükseklik 0.5 ile 50 mm arasında olmalıdır.
- Künye yazıları ve anahtar not açıklamaları bu kapsamda değildir: kendi boyutlarını korurlar.
