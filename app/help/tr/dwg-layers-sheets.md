---
title: Katmanlar ve sayfalarla çalışma
summary: Çizim katmanlarını açıp kapatın, model uzayı ile sayfalar arasında geçiş yapın ve sayfaların görünüm pencereleri aracılığıyla modeli nasıl gösterdiğini anlayın.
keywords: katmanlar, katman aç kapat, dondur, çöz, sayfalar, düzenler, kâğıt uzayı, sekmeler, görünüm pencereleri, katman yöneticisi, la
from: a9a16b53
---

## Ne yapacaksınız

Katmanları kapatarak yoğun bir çizimin görünümünü sadeleştirin, sonra çizimin sayfalarına teker teker bakın.

## Adımlar: katmanlar

1. Bir DWG veya DXF çizimi açın.
2. Solda {{ui:Layers}} listesini bulun. Her katmanın bir onay kutusu, bir renk örneği ve adı vardır.
3. Üzerindeki her şeyi gizlemek için bir katmanın işaretini kaldırın.
4. Her katmanı gizlemek için {{ui:All off}} öğesine tıklayın.
5. Yalnızca görmek istediğiniz katmanların işaretini koyun.
6. Her şeyi yeniden göstermek için {{ui:All on}} öğesine tıklayın.

## Ne görmelisiniz

Katmanlar hem {{ui:Model}} üzerinde hem de her sayfada bir anda kaybolur ve geri gelir. Çizimin kendisinde kapalı veya dondurulmuş olan katmanlar işaretsiz başlar.

## Adımlar: sayfalar

1. Çizimin üstündeki sekme satırına bakın: önce {{ui:Model}}, sonra her sayfa adıyla.
2. Bir sayfa sekmesine tıklayın.
3. Sayfaya bakın: kâğıt daha koyu bir masanın üzerinde durur ve her görünüm penceresi modelin kendi bölümünü kendi ölçeğinde ve açısında gösterir.
4. Ayrıntıyı okumak için bir görünüm penceresini yakınlaştırın. Görünüm penceresini değil sayfayı yakınlaştırdığınız için bütün sayfa birlikte hareket eder.
5. Bütün sayfayı yeniden görmek için {{ui:Fit}} öğesine tıklayın veya çift tıklayın.

## Sayfalar burada nasıl çalışır

Bir sayfa (bir düzen veya kâğıt uzayı), bir künye ve model uzayına bakan görünüm pencerelerini tutar. BimCraft her görünüm penceresini kenarına kırpılmış, kendi ölçeğinde ve dönüşünde çizer ve o görünüm penceresinde dondurulmuş katmanları gizler. Her sayfanın ilk görünüm penceresi sayfanın kendisidir ve iki kez çizilmez.

## Sık yapılan hatalar

- **Katman değişikliklerinin kaydedilmesini beklemek.** Katman ayarları yalnızca görünümü etkiler; başka bir dosya açana kadar.
- **Görünüm penceresi başına katman denetimi beklemek.** {{ui:Layers}} listesi bir katmanı her yerde değiştirir. Çizimin bir görünüm penceresinde dondurduğu katmanlar orada dondurulmuş kalır.
- **Katman arama veya katman durumları aramak.** Henüz yapılmadı. Liste çizimin sıralamasındadır.
- **Bir görünüm penceresinin içinde çalışmayı beklemek.** Etkinleştirilecek bir şey yoktur: BimCraft yalnızca sayfayı gösterir. Model uzayına doğrudan bakmak için {{ui:Model}} kullanın.
