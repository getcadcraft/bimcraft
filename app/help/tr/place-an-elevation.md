---
title: Bir görünüş yerleştirin ve görünümünü açın
summary: Kat planına bir görünüş işaretçisi koyun, baktığı yönü belirleyin, sonra çizimini proje tarayıcısında bulun, içinde düzenleyin ve bir sayfaya koyun. Şerit düzenleri ve klasik düzen için adımlar.
keywords: görünüş, görünüş görünümü, görünüş işaretçisi, görünüş etiketi, görünüş yerleştir, yeni görünüş, görünüş oluştur, dış görünüş, yan görünüm, ön görünüm, bir noktadan görünüm, görünüşüm nerede, görünüşü aç, görünüşü sayfada, görünüşü çevir, görünüşü yeniden adlandır, kuzey görünüşü, görünümleri döşe, bölünmüş görünüm, plan ve 3B yan yana
from: a7cfd2b9
---

## Neler yapacaksınız

Seçtiğiniz bir noktadan, seçtiğiniz yöne bakarak görülen binanın bir çizimini yapın. Bir kat planında iki tıklama gerektirir. Çizim, binanın diğer görünüşleriyle birlikte listelenir.

:::note
Dört taraf zaten vardır. Her binanın {{ui:Proje tarayıcısı}}'nda {{ui:Görünüşler}} altında, hiçbir şey yerleştirmeden Kuzey, Doğu, Güney ve Batı görünüşleri vardır. Kendi görünüşünüzü, başka bir yerden bakış istediğinizde yerleştirin: açılı bir kanada dik, bir avlunun içinden ya da bir odanın içindeki bir duvarın görünümü.
:::

## Araç nerede

- Şerit düzenleri: {{ui:Görünüm}} › **Oluştur** › {{ui:Görünüş}}.
- Klasik düzen: {{ui:Çiz}}'i açın, sonra {{ui:Derleme}} › {{ui:Görünüş}}.
- Herhangi bir menü stili: komutun adı Görünüş'tür; komut paleti onu bulur ve komut satırı ELEVATION'ı kabul eder.

## Adımlar

1. {{ui:Görünüş}}'ü seçin. Bir görünüş bir kat planı üzerine yerleştirilir; 3B görünümdeyseniz BimCraft bulunduğunuz katın planını gösterir. İmleç **Görünüşün durduğu yere tıklayın** yazar.
2. Görünümün alındığı yere tıklayın. Dış bir görünüş için binanın dışına, görmek istediğiniz duvardan biraz uzağa tıklayın.
3. İmleç şimdi **Nasıl göründüğüne tıklayın** yazar. Binaya doğru hareket edin: bir ok yönü gösterir ve ilk tıklamanızın üzerindeki kısa çizgi, görünümün baktığı kenardır. Tıklayın.
4. Planda, ortasında bir numara ve bir imleç olan bir daire belirir. Bu görünüş işaretçisidir. İlki 1, sonraki 2.
5. Bitirmek için Esc'ye basın ya da devam edip başka bir tane yerleştirin.

Bir işaretçi yerleştirmek tek bir adımdır: {{key:Mod+Z}} onu geri alır.

## Çizimi açın

Plan, ikinci tıklamadan sonra önünüzde kalır. Çizim {{ui:Proje tarayıcısı}}'ndadır:

1. {{ui:Görünüşler}}'i açın. Sizinki dört taraftan sonra **Görünüş 1** olarak listelenir.
2. Çizimi görmek ve içinde çalışmak için satırındaki kalem düğmesi {{ui:Bu görünümde düzenle}}'ye tıklayın: duvarları, kapıları, pencereleri ve katları taşıyın, not ve ölçü ekleyin. Bkz. [Görünüşlerde ve kesitlerde düzenleme](topic:edit-in-elevations).
3. Görünümü bir sayfaya eklemek ya da çizim setini açmak için satırın kendisine tıklayın. Bkz. [Görünümler ve sayfalar](topic:views-and-sheets).

Klasik düzende proje tarayıcısı, {{ui:Çiz}} açıkken sol panelde yer alır. Şerit düzenlerinde ise Özellikler'in altındaki {{ui:Proje Tarayıcısı}} sekmesidir.

## Görünümün gösterdikleri

- İşaretçinin önündeki, binanın olduğu kadar her şey. Arkasında hiçbir şey yok.
- Adları ve yükseklikleriyle katlar.
- İşaretçi binanın içinde duruyorsa, içinde bulunduğu her şey orada kesilir, bir kesitin kestiği gibi. Temiz bir dış görünüş için dışarıda durun.

## Değiştirin

Planda işaretçiyi seçin ({{ui:Seç}} ile dairesine tıklayın). Özellikler şunları içerir:

- {{ui:Etiket}}: numarası ya da 8 karakteri geçmeyen kendi adınız.
- {{ui:Görünümü çevir}}: aynı noktadan tersine bakın.
- {{ui:Şuraya kadar bak}}: görünümün işaretçinin önünde ne kadar uzağa ulaştığı. 0 her şeyi gösterir.

İşaretçiyi ve çizimini kaldırmak için Delete tuşuna basın. Geri al ikisini de geri getirir.

:::tip
Çalışırken planı ve 3B görünümü aynı anda görmek için, şerit düzenlerinde {{ui:Görünüm}} › **Pencereler** › {{ui:Görünümleri döşe}}'yi, klasik düzende ise {{ui:Böl}}'ü kullanın. Bir görünüm sekmesine tıklamak tek görünüme geri döndürür.
:::

## Sınırlamalar

- Bir işaretçi planda henüz sürüklenemez ya da döndürülemez. Silin ve yeniden yerleştirin ya da {{ui:Görünümü çevir}}'i kullanın.
- Bir sayfaya ekleyebileceğiniz görünümler listesinde, kendi görünüşünüz kesitlerle birlikte listelenir.
- Kapı ve pencere etiketleri, yerleştirdiğiniz görünüşte değil, dört yan görünüşte çizilir.

## IFC'de

İşaretçi dosyada, yerleştirildiği katta, "Elevation 1" adlı ve nesne tipi "Elevation marker" olan bir IfcAnnotation olarak kaydedilir. Diğer bir program onu bir açıklama olarak gösterir; çizimin kendisi BimCraft tarafından her seferinde modelden yapılır.
