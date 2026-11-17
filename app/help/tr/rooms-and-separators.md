---
title: Odalar ve oda ayırıcılar
summary: Bir odayı seçip adlandırın ve numaralandırın; alanını, çevresini ve hacmini okuyun. İki odanın arasında duvar olmadığında bir oda ayırıcı çizin.
keywords: oda, odalar, oda ayırıcı, ayırma çizgisi, mekân, IfcSpace, ad, numara, alan, çevre, hacim, açık plan, odayı böl, mutfak ve oturma odası, kapalı değil
from: d4c1d66b
---

## Neler yapacaksınız

Duvarların oluşturduğu odaları adlandırın ve açık bir odayı duvar olmadan ikiye bölün.

## Araçlar nerede

- Şerit düzenleri: {{ui:Mimari}} › **Oda ve Alan** › {{ui:Oda}} ve {{ui:Oda Ayırıcı}}.
- Klasik düzen: Çizim çubuğu › {{ui:Odalar}} menüsü.
- Herhangi bir menü stili: komutlar Room ve Room Separator adıyla anılır; komut paleti bunları bulur.

## Adımlar

1. Duvarları çizin. Duvarların kapalı her döngüsü zaten bir odadır: BimCraft onu oluşturur, numaralandırır ve siz çizerken alanını verir.
2. {{ui:Oda}}'yı seçin. İmleci planın üzerinde gezdirin: imlecin altındaki oda, alanı, çevresi ve hacmiyle aydınlanır.
3. Odaları hızlıca adlandırmak için önce satırda bir {{ui:Ad}} ve bir {{ui:Numara}} yazın, sonra odaya tıklayın. Numara bir sonraki oda için bir artar (101, 102; A-09, A-10).
4. Ya da sadece bir odaya tıklayın: seçilir ve Özellikler'de adı, numarası, alanı, çevresi, hacmi ve etiketi bulunur.
5. Açık bir odayı bölmek için {{ui:Oda Ayırıcı}}'yı seçin ve iki nokta tıklayın: duvardan duvara ya da bir duvardan başka bir ayırıcıya. Bir zincir için tıklamaya devam edin; Enter, Esc ya da çift tıklama onu bitirir.

## Bir ayırıcı ne yapar

- Bir oda sınırını, kalınlığı olmayan bir duvar gibi belirler. İki odanın alanları, eski odanın alanına tam olarak eşittir.
- Eski odanın ortasını tutan oda adını ve numarasını korur. Diğeri yenidir.
- Açıkta duran, bir ucu hiçbir şeye değmeyen bir ayırıcı hiçbir şeyi bölmez. Uzatın; o zaman böler.
- Bir duvarın içinde kalan ayırıcı kısmı yok sayılır; böylece duvar merkez çizgilerine yakalanabilirsiniz.
- Bir ayırıcıyı seçip Delete tuşuna basarak kaldırın: iki oda yeniden tek olur. Geri al onu geri getirir.

## Tıkladığınız yerde oda yoksa

Durum satırı bunu söyler: duvarlar orada kapanmaz. Boşluğu kapatın ya da üzerinden bir ayırıcı çizin. Hiçbir şey reddedilmez; sadece henüz kapalı bir oda yoktur.

## IFC'de

Bir oda, numarası (Name), adı (LongName) ve Qto_SpaceBaseQuantities ile birlikte bir IfcSpace'tir: NetFloorArea, NetPerimeter, Height, NetVolume. Hacim, alanın bir üstteki kata kadar olan yükseklikle çarpımıdır.

Bir oda ayırıcı, IFC'nin inşa edilmemiş bir sınır için kullandığı varlık olan bir IfcVirtualElement'tir. Bir çizgisi vardır ve gövdesi yoktur; bu yüzden başka bir program bunun için bir duvar okumaz ve hiçbir şey saymaz.

## Henüz yapılmadı

- Eğri ayırıcılar.
- Eğimli bir tavanı izleyen oda: hacim her zaman alan çarpı kat yüksekliğidir.
- Uzay sınırı ilişkileri (IfcRelSpaceBoundary) yazılmaz; ne duvarlar ne de ayırıcılar için.

Ayrıca bkz. [Oda ve alan etiketleri](topic:room-and-area-tags), [Alanlar ve alan sınırları](topic:areas-and-area-boundaries).
