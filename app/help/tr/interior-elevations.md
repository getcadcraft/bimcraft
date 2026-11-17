---
title: İç cepheler
summary: Odanın dört duvarını içeriden gösteren, ölçülendirme ve etiketleri olan tek bir sayfa oluşturun ve bunu PDF olarak kaydedin.
keywords: iç cephe, oda, duvar, dolap, mutfak, görünüş, sayfa, PDF, ölçülendirme, etiket, mekân, A-501
from: 1e3a70a8
---

## Ne yapacaksınız

Bir oda seçin ve içinde durduğunuzda göreceğiniz gibi dört duvarını gösteren tek bir sayfa elde edin. Mutfaklar, banyolar ve her duvardaki dolapları, kapıları ve pencereleri görmeniz gereken her oda için yapılmıştır.

## Sayfayı oluşturun

1. Odayı seçin. Planda {{ui:Çiz}} açıkken odanın içine tıklayın. 3B görünümde ya da model ağacında mekânı (bir IfcSpace) seçin.
2. **Özellikler** içinde {{ui:İç cepheler…}} öğesine tıklayın.
3. İletişim kutusu sayfayla birlikte açılır.
4. Kaydetmek için {{ui:PDF indir}} öğesine tıklayın. Dosya "<file> — Interior elevations — <room>.pdf" adıyla kaydedilir ve vektör bir PDF'dir.
5. İşiniz bittiğinde {{ui:Kapat}} öğesine tıklayın.

## Sayfada neler gösterilir

Sayfada, iki sıra iki sütun halinde ve tek bir ölçekte dört görünüm bulunur: sığan en büyük standart ölçek. Bunlar: **Kuzey duvarı**, **Doğu duvarı**, **Güney duvarı** ve **Batı duvarı**. Künyede sayfa numarası A-501, oda numarası ve adıyla birlikte "İç cepheler — " başlığı, proje ve tarih yer alır.

Her görünüm odanın ortasından kesilir ve o taraftaki duvara bakar. Yan duvarlar ve bunların içinde kesilmiş her şey, örneğin bir pencere, görünümün çevresinde gri kesit dolgusu olarak gösterilir. Görünüm duvarın yüzünün hemen ötesinde biter, bu yüzden duvarın arkasındaki hiçbir şey görünmez.

Her görünümde şunlar bulunur:

- altında odanın genişliği, iç yüzeyden iç yüzeye;
- yanında odanın yüksekliği, zeminden üstteki seviyeye kadar;
- o duvardaki her kapıda kare etiket ve her pencerede altıgen etiket, işaretleriyle (D1, W1 vb.);
- o duvarın önüne yerleştirilmiş her kütüphane öğesinde, öğe numarasını gösteren daire etiket: dolaplar, tesisat donanımları ve ekipman.

:::note
Görünümler, iletişim kutusunu her açtığınızda modelden oluşturulur, bu yüzden her zaman modelle uyumludur. Bir dolabı taşıyın, sonra iletişim kutusunu yeniden açın.
:::

## Kendi sayfalarınızda

Her odanın her duvarı, kendi oluşturduğunuz bir sayfaya ekleyebileceğiniz bir görünümdür: proje tarayıcısında {{ui:Yeni sayfa}} öğesine tıklayın, sonra **İç cepheler** altına "101 Mutfak — Kuzey duvarı" ve diğerlerini ekleyin. Aynı ölçülendirme ve etiketlerle birlikte gelir.

## Henüz yapılmadı

Şunlar henüz yapılmadı: oluşturulan çizim takımındaki iç cepheler (bunlar odanın **Özellikler** bölümünden ya da kendi sayfalarınızdan gelir), çoğunlukla dikdörtgen olmayan odalar (görünüm, odanın kutusunun her iki yanında kare görünür), bu görünümler üzerinde çizim, not ya da kendi ölçülendirmeleriniz ve gösterilecek duvarları seçme. Bkz. [Henüz yapılmadı nelerdir](topic:not-built-yet).
